// Service Worker: macht das Spiel installierbar, startet es schnell und offline.
//   Seite (index.html): erst Netz, sonst Zwischenspeicher  -> neue Versionen kommen beim nächsten Start
//   Spieldateien (assets/, icons/ ...): erst Zwischenspeicher -> Dateinamen ändern sich mit jeder Version
//   Schriften von Google: einmal laden, dann aus dem Zwischenspeicher
//   Bestenliste (Server-Funktion) und alles andere: immer übers Netz, nie zwischengespeichert
const CACHE = 'krampuslauf-v1';
const CORE = ['./', './manifest.webmanifest', './icons/icon-192.png', './icons/icon-512.png'];
const ASSET_IN_HTML = /assets\/[^"')\s]+/g;
const ASSET_IN_JS = /["'`/(]([A-Za-z0-9_.-]+-[A-Za-z0-9_-]{8}\.(?:js|css|mp3|glb|png|jpg))/g;   // von Vite erzeugte Dateinamen (mit Prüfsumme)

/** Alle Dateien der aktuellen Version: Seite -> Skripte -> was die Skripte nachladen (z. B. die Glocken). */
async function gameFiles(page) {
  const html = page ?? await (await fetch('./', { cache: 'no-store' })).text();
  const files = new Set((html.match(ASSET_IN_HTML) || []).map((a) => './' + a));
  for (const js of [...files].filter((f) => f.endsWith('.js'))) {
    const src = await (await fetch(js)).text();
    for (const m of src.matchAll(ASSET_IN_JS)) files.add('./assets/' + m[1]);
  }
  return [...files];
}

self.addEventListener('install', (e) => {
  e.waitUntil((async () => {
    const c = await caches.open(CACHE);
    await c.addAll(CORE);
    try { await c.addAll(await gameFiles()); } catch (err) { /* dann eben beim ersten Gebrauch */ }
    await self.skipWaiting();
  })());
});
self.addEventListener('activate', (e) => {
  e.waitUntil(caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))).then(() => self.clients.claim()));
});

/** Alte Spieldateien aus früheren Versionen löschen und neue gleich mitholen. */
async function refresh(html) {
  const used = new Set((html.match(ASSET_IN_HTML) || []).map((a) => a.split('/').pop()));
  const cache = await caches.open(CACHE);
  for (const req of await cache.keys()) {
    const p = new URL(req.url).pathname;
    if (p.includes('/assets/') && !used.has(p.split('/').pop()) && !p.endsWith('.mp3')) await cache.delete(req);
  }
  try { await cache.addAll(await gameFiles(html)); } catch (err) { /* später */ }
}

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin === self.location.origin) {
    if (req.mode === 'navigate' || url.pathname.endsWith('/') || url.pathname.endsWith('.html')) {
      e.respondWith(fetch(req).then((res) => {
        if (res.ok) {
          const copy = res.clone();
          caches.open(CACHE).then((c) => c.put('./', copy.clone()));
          copy.text().then(refresh).catch(() => {});                   // im Hintergrund: alte Dateien weg, neue holen
        }
        return res;
      }).catch(() => caches.match('./', { ignoreVary: true })));
      return;
    }
    e.respondWith(caches.match(req, { ignoreSearch: true, ignoreVary: true }).then((hit) => hit || fetch(req).then((res) => {
      if (res.ok) { const copy = res.clone(); caches.open(CACHE).then((c) => c.put(req, copy)); }
      return res;
    })));
    return;
  }
  if (url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com') {
    e.respondWith(caches.match(req).then((hit) => hit || fetch(req).then((res) => {
      if (res.ok || res.type === 'opaque') { const copy = res.clone(); caches.open(CACHE).then((c) => c.put(req, copy)); }
      return res;
    })));
  }
  // alles andere (z. B. die Bestenliste): normal übers Netz
});
