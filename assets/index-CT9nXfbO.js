(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const vh="160",Tm=0,_u=1,Am=2,wp=1,Tp=2,vi=3,ji=0,yn=1,vn=2,Vi=0,dr=1,Nl=2,xu=3,vu=4,Rm=5,ds=100,Cm=101,Pm=102,yu=103,Mu=104,Lm=200,Im=201,Dm=202,Um=203,Ol=204,Fl=205,Nm=206,Om=207,Fm=208,zm=209,Bm=210,km=211,Hm=212,Gm=213,Vm=214,Wm=0,Xm=1,qm=2,ko=3,Ym=4,Km=5,jm=6,Zm=7,uc=0,Jm=1,$m=2,Wi=0,Qm=1,tg=2,eg=3,Ap=4,ng=5,ig=6,Su="attached",sg="detached",Rp=300,yr=301,Mr=302,zl=303,Bl=304,dc=306,kl=1e3,Zn=1001,Hl=1002,sn=1003,bu=1004,Dc=1005,Nn=1006,rg=1007,oa=1008,Xi=1009,ag=1010,og=1011,yh=1012,Cp=1013,ki=1014,Si=1015,ca=1016,Pp=1017,Lp=1018,ms=1020,cg=1021,Fn=1023,lg=1024,hg=1025,gs=1026,Sr=1027,ug=1028,Ip=1029,dg=1030,Dp=1031,Up=1033,Uc=33776,Nc=33777,Oc=33778,Fc=33779,Eu=35840,wu=35841,Tu=35842,Au=35843,Np=36196,Ru=37492,Cu=37496,Pu=37808,Lu=37809,Iu=37810,Du=37811,Uu=37812,Nu=37813,Ou=37814,Fu=37815,zu=37816,Bu=37817,ku=37818,Hu=37819,Gu=37820,Vu=37821,zc=36492,Wu=36494,Xu=36495,fg=36283,qu=36284,Yu=36285,Ku=36286,pg=2200,mg=2201,gg=2202,Ho=2300,Go=2301,Bc=2302,sr=2400,rr=2401,Vo=2402,Mh=2500,_g=2501,$E=0,QE=1,tw=2,Op=3e3,_s=3001,xg=3200,vg=3201,fc=0,yg=1,zn="",tn="srgb",wi="srgb-linear",Sh="display-p3",pc="display-p3-linear",Wo="linear",Re="srgb",Xo="rec709",qo="p3",ws=7680,ju=519,Mg=512,Sg=513,bg=514,Fp=515,Eg=516,wg=517,Tg=518,Ag=519,Gl=35044,Zu=35048,Ju="300 es",Vl=1035,bi=2e3,Yo=2001;class bs{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const on=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let $u=1234567;const $r=Math.PI/180,br=180/Math.PI;function kn(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(on[n&255]+on[n>>8&255]+on[n>>16&255]+on[n>>24&255]+"-"+on[t&255]+on[t>>8&255]+"-"+on[t>>16&15|64]+on[t>>24&255]+"-"+on[e&63|128]+on[e>>8&255]+"-"+on[e>>16&255]+on[e>>24&255]+on[i&255]+on[i>>8&255]+on[i>>16&255]+on[i>>24&255]).toLowerCase()}function qe(n,t,e){return Math.max(t,Math.min(e,n))}function bh(n,t){return(n%t+t)%t}function Rg(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function Cg(n,t,e){return n!==t?(e-n)/(t-n):0}function Qr(n,t,e){return(1-e)*n+e*t}function Pg(n,t,e,i){return Qr(n,t,1-Math.exp(-e*i))}function Lg(n,t=1){return t-Math.abs(bh(n,t*2)-t)}function Ig(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function Dg(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function Ug(n,t){return n+Math.floor(Math.random()*(t-n+1))}function Ng(n,t){return n+Math.random()*(t-n)}function Og(n){return n*(.5-Math.random())}function Fg(n){n!==void 0&&($u=n);let t=$u+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function zg(n){return n*$r}function Bg(n){return n*br}function Wl(n){return(n&n-1)===0&&n!==0}function kg(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Ko(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Hg(n,t,e,i,s){const r=Math.cos,a=Math.sin,o=r(e/2),c=a(e/2),l=r((t+i)/2),h=a((t+i)/2),u=r((t-i)/2),d=a((t-i)/2),f=r((i-t)/2),m=a((i-t)/2);switch(s){case"XYX":n.set(o*h,c*u,c*d,o*l);break;case"YZY":n.set(c*d,o*h,c*u,o*l);break;case"ZXZ":n.set(c*u,c*d,o*h,o*l);break;case"XZX":n.set(o*h,c*m,c*f,o*l);break;case"YXY":n.set(c*f,o*h,c*m,o*l);break;case"ZYZ":n.set(c*m,c*f,o*h,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ni(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function _e(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const ew={DEG2RAD:$r,RAD2DEG:br,generateUUID:kn,clamp:qe,euclideanModulo:bh,mapLinear:Rg,inverseLerp:Cg,lerp:Qr,damp:Pg,pingpong:Lg,smoothstep:Ig,smootherstep:Dg,randInt:Ug,randFloat:Ng,randFloatSpread:Og,seededRandom:Fg,degToRad:zg,radToDeg:Bg,isPowerOfTwo:Wl,ceilPowerOfTwo:kg,floorPowerOfTwo:Ko,setQuaternionFromProperEuler:Hg,normalize:_e,denormalize:ni};class nt{constructor(t=0,e=0){nt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(qe(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*i-a*s+t.x,this.y=r*s+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class se{constructor(t,e,i,s,r,a,o,c,l){se.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,c,l)}set(t,e,i,s,r,a,o,c,l){const h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=c,h[6]=i,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],h=i[4],u=i[7],d=i[2],f=i[5],m=i[8],_=s[0],g=s[3],p=s[6],v=s[1],x=s[4],y=s[7],A=s[2],M=s[5],R=s[8];return r[0]=a*_+o*v+c*A,r[3]=a*g+o*x+c*M,r[6]=a*p+o*y+c*R,r[1]=l*_+h*v+u*A,r[4]=l*g+h*x+u*M,r[7]=l*p+h*y+u*R,r[2]=d*_+f*v+m*A,r[5]=d*g+f*x+m*M,r[8]=d*p+f*y+m*R,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8];return e*a*h-e*o*l-i*r*h+i*o*c+s*r*l-s*a*c}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],u=h*a-o*l,d=o*c-h*r,f=l*r-a*c,m=e*u+i*d+s*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/m;return t[0]=u*_,t[1]=(s*l-h*i)*_,t[2]=(o*i-s*a)*_,t[3]=d*_,t[4]=(h*e-s*c)*_,t[5]=(s*r-o*e)*_,t[6]=f*_,t[7]=(i*c-l*e)*_,t[8]=(a*e-i*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*a+l*o)+a+t,-s*l,s*c,-s*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(kc.makeScale(t,e)),this}rotate(t){return this.premultiply(kc.makeRotation(-t)),this}translate(t,e){return this.premultiply(kc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const kc=new se;function zp(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function la(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Gg(){const n=la("canvas");return n.style.display="block",n}const Qu={};function ta(n){n in Qu||(Qu[n]=!0,console.warn(n))}const td=new se().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),ed=new se().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Fa={[wi]:{transfer:Wo,primaries:Xo,toReference:n=>n,fromReference:n=>n},[tn]:{transfer:Re,primaries:Xo,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[pc]:{transfer:Wo,primaries:qo,toReference:n=>n.applyMatrix3(ed),fromReference:n=>n.applyMatrix3(td)},[Sh]:{transfer:Re,primaries:qo,toReference:n=>n.convertSRGBToLinear().applyMatrix3(ed),fromReference:n=>n.applyMatrix3(td).convertLinearToSRGB()}},Vg=new Set([wi,pc]),xe={enabled:!0,_workingColorSpace:wi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!Vg.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,t,e){if(this.enabled===!1||t===e||!t||!e)return n;const i=Fa[t].toReference,s=Fa[e].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,t){return this.convert(n,this._workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this._workingColorSpace)},getPrimaries:function(n){return Fa[n].primaries},getTransfer:function(n){return n===zn?Wo:Fa[n].transfer}};function fr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Hc(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Ts;class Bp{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ts===void 0&&(Ts=la("canvas")),Ts.width=t.width,Ts.height=t.height;const i=Ts.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=Ts}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=la("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=fr(r[a]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(fr(e[i]/255)*255):e[i]=fr(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Wg=0;class kp{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Wg++}),this.uuid=kn(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Gc(s[a].image)):r.push(Gc(s[a]))}else r=Gc(s);i.url=r}return e||(t.images[this.uuid]=i),i}}function Gc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Bp.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Xg=0;class dn extends bs{constructor(t=dn.DEFAULT_IMAGE,e=dn.DEFAULT_MAPPING,i=Zn,s=Zn,r=Nn,a=oa,o=Fn,c=Xi,l=dn.DEFAULT_ANISOTROPY,h=zn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Xg++}),this.uuid=kn(),this.name="",this.source=new kp(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new nt(0,0),this.repeat=new nt(1,1),this.center=new nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new se,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(ta("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===_s?tn:zn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Rp)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case kl:t.x=t.x-Math.floor(t.x);break;case Zn:t.x=t.x<0?0:1;break;case Hl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case kl:t.y=t.y-Math.floor(t.y);break;case Zn:t.y=t.y<0?0:1;break;case Hl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return ta("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===tn?_s:Op}set encoding(t){ta("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===_s?tn:zn}}dn.DEFAULT_IMAGE=null;dn.DEFAULT_MAPPING=Rp;dn.DEFAULT_ANISOTROPY=1;class ye{constructor(t=0,e=0,i=0,s=1){ye.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*i+a[11]*s+a[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r;const c=t.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],m=c[9],_=c[2],g=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(m+g)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(l+1)/2,y=(f+1)/2,A=(p+1)/2,M=(h+d)/4,R=(u+_)/4,N=(m+g)/4;return x>y&&x>A?x<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(x),s=M/i,r=R/i):y>A?y<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),i=M/s,r=N/s):A<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),i=R/r,s=N/r),this.set(i,s,r,e),this}let v=Math.sqrt((g-m)*(g-m)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(v)<.001&&(v=1),this.x=(g-m)/v,this.y=(u-_)/v,this.z=(d-h)/v,this.w=Math.acos((l+f+p-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class qg extends bs{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ye(0,0,t,e),this.scissorTest=!1,this.viewport=new ye(0,0,t,e);const s={width:t,height:e,depth:1};i.encoding!==void 0&&(ta("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===_s?tn:zn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Nn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new dn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(t,e,i=1){(this.width!==t||this.height!==e||this.depth!==i)&&(this.width=t,this.height=e,this.depth=i,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new kp(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class vs extends qg{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class Hp extends dn{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=sn,this.minFilter=sn,this.wrapR=Zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Yg extends dn{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=sn,this.minFilter=sn,this.wrapR=Zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Mn{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,a,o){let c=i[s+0],l=i[s+1],h=i[s+2],u=i[s+3];const d=r[a+0],f=r[a+1],m=r[a+2],_=r[a+3];if(o===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=d,t[e+1]=f,t[e+2]=m,t[e+3]=_;return}if(u!==_||c!==d||l!==f||h!==m){let g=1-o;const p=c*d+l*f+h*m+u*_,v=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const A=Math.sqrt(x),M=Math.atan2(A,p*v);g=Math.sin(g*M)/A,o=Math.sin(o*M)/A}const y=o*v;if(c=c*g+d*y,l=l*g+f*y,h=h*g+m*y,u=u*g+_*y,g===1-o){const A=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=A,l*=A,h*=A,u*=A}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,s,r,a){const o=i[s],c=i[s+1],l=i[s+2],h=i[s+3],u=r[a],d=r[a+1],f=r[a+2],m=r[a+3];return t[e]=o*m+h*u+c*f-l*d,t[e+1]=c*m+h*d+l*u-o*f,t[e+2]=l*m+h*f+o*d-c*u,t[e+3]=h*m-o*u-c*d-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(i/2),h=o(s/2),u=o(r/2),d=c(i/2),f=c(s/2),m=c(r/2);switch(a){case"XYZ":this._x=d*h*u+l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u-d*f*m;break;case"YXZ":this._x=d*h*u+l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u+d*f*m;break;case"ZXY":this._x=d*h*u-l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u-d*f*m;break;case"ZYX":this._x=d*h*u-l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u+d*f*m;break;case"YZX":this._x=d*h*u+l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u-d*f*m;break;case"XZY":this._x=d*h*u-l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u+d*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],h=e[6],u=e[10],d=i+o+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(a-s)*f}else if(i>o&&i>u){const f=2*Math.sqrt(1+i-o-u);this._w=(h-c)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+l)/f}else if(o>u){const f=2*Math.sqrt(1+o-i-u);this._w=(r-l)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+u-i-o);this._w=(a-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(qe(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,h=e._w;return this._x=i*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-i*l,this._z=r*h+a*l+i*c-s*o,this._w=a*h-i*o-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,s=this._y,r=this._z,a=this._w;let o=a*t._w+i*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=i,this._y=s,this._z=r,this;const c=1-o*o;if(c<=Number.EPSILON){const f=1-e;return this._w=f*a+e*this._w,this._x=f*i+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,o),u=Math.sin((1-e)*h)/l,d=Math.sin(e*h)/l;return this._w=a*u+this._w*d,this._x=i*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=Math.random(),e=Math.sqrt(1-t),i=Math.sqrt(t),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(s),i*Math.sin(r),i*Math.cos(r),e*Math.sin(s))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class C{constructor(t=0,e=0,i=0){C.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(nd.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(nd.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*s-o*i),h=2*(o*e-r*s),u=2*(r*i-a*e);return this.x=e+c*l+a*u-o*h,this.y=i+c*h+o*l-r*u,this.z=s+c*u+r*h-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=s*c-r*o,this.y=r*a-i*c,this.z=i*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Vc.copy(this).projectOnVector(t),this.sub(Vc)}reflect(t){return this.sub(Vc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(qe(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,i=Math.sqrt(1-t**2);return this.x=i*Math.cos(e),this.y=i*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Vc=new C,nd=new Mn;class Ri{constructor(t=new C(1/0,1/0,1/0),e=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Wn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Wn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=Wn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Wn):Wn.fromBufferAttribute(r,a),Wn.applyMatrix4(t.matrixWorld),this.expandByPoint(Wn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),za.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),za.copy(i.boundingBox)),za.applyMatrix4(t.matrixWorld),this.union(za)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Wn),Wn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Fr),Ba.subVectors(this.max,Fr),As.subVectors(t.a,Fr),Rs.subVectors(t.b,Fr),Cs.subVectors(t.c,Fr),Li.subVectors(Rs,As),Ii.subVectors(Cs,Rs),es.subVectors(As,Cs);let e=[0,-Li.z,Li.y,0,-Ii.z,Ii.y,0,-es.z,es.y,Li.z,0,-Li.x,Ii.z,0,-Ii.x,es.z,0,-es.x,-Li.y,Li.x,0,-Ii.y,Ii.x,0,-es.y,es.x,0];return!Wc(e,As,Rs,Cs,Ba)||(e=[1,0,0,0,1,0,0,0,1],!Wc(e,As,Rs,Cs,Ba))?!1:(ka.crossVectors(Li,Ii),e=[ka.x,ka.y,ka.z],Wc(e,As,Rs,Cs,Ba))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Wn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Wn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(di[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),di[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),di[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),di[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),di[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),di[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),di[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),di[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(di),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const di=[new C,new C,new C,new C,new C,new C,new C,new C],Wn=new C,za=new Ri,As=new C,Rs=new C,Cs=new C,Li=new C,Ii=new C,es=new C,Fr=new C,Ba=new C,ka=new C,ns=new C;function Wc(n,t,e,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){ns.fromArray(n,r);const o=s.x*Math.abs(ns.x)+s.y*Math.abs(ns.y)+s.z*Math.abs(ns.z),c=t.dot(ns),l=e.dot(ns),h=i.dot(ns);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const Kg=new Ri,zr=new C,Xc=new C;class oi{constructor(t=new C,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):Kg.setFromPoints(t).getCenter(i);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;zr.subVectors(t,this.center);const e=zr.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(zr,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Xc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(zr.copy(t.center).add(Xc)),this.expandByPoint(zr.copy(t.center).sub(Xc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const fi=new C,qc=new C,Ha=new C,Di=new C,Yc=new C,Ga=new C,Kc=new C;class Ma{constructor(t=new C,e=new C(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,fi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=fi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(fi.copy(this.origin).addScaledVector(this.direction,e),fi.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){qc.copy(t).add(e).multiplyScalar(.5),Ha.copy(e).sub(t).normalize(),Di.copy(this.origin).sub(qc);const r=t.distanceTo(e)*.5,a=-this.direction.dot(Ha),o=Di.dot(this.direction),c=-Di.dot(Ha),l=Di.lengthSq(),h=Math.abs(1-a*a);let u,d,f,m;if(h>0)if(u=a*c-o,d=a*o-c,m=r*h,u>=0)if(d>=-m)if(d<=m){const _=1/h;u*=_,d*=_,f=u*(u+a*d+2*o)+d*(a*u+d+2*c)+l}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d<=-m?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=m?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(qc).addScaledVector(Ha,d),f}intersectSphere(t,e){fi.subVectors(t.center,this.origin);const i=fi.dot(this.direction),s=fi.dot(fi)-i*i,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,a,o,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(i=(t.min.x-d.x)*l,s=(t.max.x-d.x)*l):(i=(t.max.x-d.x)*l,s=(t.min.x-d.x)*l),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-d.z)*u,c=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,c=(t.min.z-d.z)*u),i>c||o>s)||((o>i||i!==i)&&(i=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,fi)!==null}intersectTriangle(t,e,i,s,r){Yc.subVectors(e,t),Ga.subVectors(i,t),Kc.crossVectors(Yc,Ga);let a=this.direction.dot(Kc),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Di.subVectors(this.origin,t);const c=o*this.direction.dot(Ga.crossVectors(Di,Ga));if(c<0)return null;const l=o*this.direction.dot(Yc.cross(Di));if(l<0||c+l>a)return null;const h=-o*Di.dot(Kc);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class zt{constructor(t,e,i,s,r,a,o,c,l,h,u,d,f,m,_,g){zt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,c,l,h,u,d,f,m,_,g)}set(t,e,i,s,r,a,o,c,l,h,u,d,f,m,_,g){const p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=m,p[11]=_,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new zt().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,s=1/Ps.setFromMatrixColumn(t,0).length(),r=1/Ps.setFromMatrixColumn(t,1).length(),a=1/Ps.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,r=t.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=a*h,f=a*u,m=o*h,_=o*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=f+m*l,e[5]=d-_*l,e[9]=-o*c,e[2]=_-d*l,e[6]=m+f*l,e[10]=a*c}else if(t.order==="YXZ"){const d=c*h,f=c*u,m=l*h,_=l*u;e[0]=d+_*o,e[4]=m*o-f,e[8]=a*l,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=f*o-m,e[6]=_+d*o,e[10]=a*c}else if(t.order==="ZXY"){const d=c*h,f=c*u,m=l*h,_=l*u;e[0]=d-_*o,e[4]=-a*u,e[8]=m+f*o,e[1]=f+m*o,e[5]=a*h,e[9]=_-d*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){const d=a*h,f=a*u,m=o*h,_=o*u;e[0]=c*h,e[4]=m*l-f,e[8]=d*l+_,e[1]=c*u,e[5]=_*l+d,e[9]=f*l-m,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){const d=a*c,f=a*l,m=o*c,_=o*l;e[0]=c*h,e[4]=_-d*u,e[8]=m*u+f,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-l*h,e[6]=f*u+m,e[10]=d-_*u}else if(t.order==="XZY"){const d=a*c,f=a*l,m=o*c,_=o*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=d*u+_,e[5]=a*h,e[9]=f*u-m,e[2]=m*u-f,e[6]=o*h,e[10]=_*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(jg,t,Zg)}lookAt(t,e,i){const s=this.elements;return Tn.subVectors(t,e),Tn.lengthSq()===0&&(Tn.z=1),Tn.normalize(),Ui.crossVectors(i,Tn),Ui.lengthSq()===0&&(Math.abs(i.z)===1?Tn.x+=1e-4:Tn.z+=1e-4,Tn.normalize(),Ui.crossVectors(i,Tn)),Ui.normalize(),Va.crossVectors(Tn,Ui),s[0]=Ui.x,s[4]=Va.x,s[8]=Tn.x,s[1]=Ui.y,s[5]=Va.y,s[9]=Tn.y,s[2]=Ui.z,s[6]=Va.z,s[10]=Tn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],h=i[1],u=i[5],d=i[9],f=i[13],m=i[2],_=i[6],g=i[10],p=i[14],v=i[3],x=i[7],y=i[11],A=i[15],M=s[0],R=s[4],N=s[8],b=s[12],E=s[1],O=s[5],Y=s[9],tt=s[13],P=s[2],L=s[6],U=s[10],F=s[14],H=s[3],B=s[7],X=s[11],j=s[15];return r[0]=a*M+o*E+c*P+l*H,r[4]=a*R+o*O+c*L+l*B,r[8]=a*N+o*Y+c*U+l*X,r[12]=a*b+o*tt+c*F+l*j,r[1]=h*M+u*E+d*P+f*H,r[5]=h*R+u*O+d*L+f*B,r[9]=h*N+u*Y+d*U+f*X,r[13]=h*b+u*tt+d*F+f*j,r[2]=m*M+_*E+g*P+p*H,r[6]=m*R+_*O+g*L+p*B,r[10]=m*N+_*Y+g*U+p*X,r[14]=m*b+_*tt+g*F+p*j,r[3]=v*M+x*E+y*P+A*H,r[7]=v*R+x*O+y*L+A*B,r[11]=v*N+x*Y+y*U+A*X,r[15]=v*b+x*tt+y*F+A*j,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],h=t[2],u=t[6],d=t[10],f=t[14],m=t[3],_=t[7],g=t[11],p=t[15];return m*(+r*c*u-s*l*u-r*o*d+i*l*d+s*o*f-i*c*f)+_*(+e*c*f-e*l*d+r*a*d-s*a*f+s*l*h-r*c*h)+g*(+e*l*u-e*o*f-r*a*u+i*a*f+r*o*h-i*l*h)+p*(-s*o*h-e*c*u+e*o*d+s*a*u-i*a*d+i*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],u=t[9],d=t[10],f=t[11],m=t[12],_=t[13],g=t[14],p=t[15],v=u*g*l-_*d*l+_*c*f-o*g*f-u*c*p+o*d*p,x=m*d*l-h*g*l-m*c*f+a*g*f+h*c*p-a*d*p,y=h*_*l-m*u*l+m*o*f-a*_*f-h*o*p+a*u*p,A=m*u*c-h*_*c-m*o*d+a*_*d+h*o*g-a*u*g,M=e*v+i*x+s*y+r*A;if(M===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/M;return t[0]=v*R,t[1]=(_*d*r-u*g*r-_*s*f+i*g*f+u*s*p-i*d*p)*R,t[2]=(o*g*r-_*c*r+_*s*l-i*g*l-o*s*p+i*c*p)*R,t[3]=(u*c*r-o*d*r-u*s*l+i*d*l+o*s*f-i*c*f)*R,t[4]=x*R,t[5]=(h*g*r-m*d*r+m*s*f-e*g*f-h*s*p+e*d*p)*R,t[6]=(m*c*r-a*g*r-m*s*l+e*g*l+a*s*p-e*c*p)*R,t[7]=(a*d*r-h*c*r+h*s*l-e*d*l-a*s*f+e*c*f)*R,t[8]=y*R,t[9]=(m*u*r-h*_*r-m*i*f+e*_*f+h*i*p-e*u*p)*R,t[10]=(a*_*r-m*o*r+m*i*l-e*_*l-a*i*p+e*o*p)*R,t[11]=(h*o*r-a*u*r-h*i*l+e*u*l+a*i*f-e*o*f)*R,t[12]=A*R,t[13]=(h*_*s-m*u*s+m*i*d-e*_*d-h*i*g+e*u*g)*R,t[14]=(m*o*s-a*_*s-m*i*c+e*_*c+a*i*g-e*o*g)*R,t[15]=(a*u*s-h*o*s+h*i*c-e*u*c-a*i*d+e*o*d)*R,this}scale(t){const e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),r=1-i,a=t.x,o=t.y,c=t.z,l=r*a,h=r*o;return this.set(l*a+i,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+i,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,a){return this.set(1,i,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,h=a+a,u=o+o,d=r*l,f=r*h,m=r*u,_=a*h,g=a*u,p=o*u,v=c*l,x=c*h,y=c*u,A=i.x,M=i.y,R=i.z;return s[0]=(1-(_+p))*A,s[1]=(f+y)*A,s[2]=(m-x)*A,s[3]=0,s[4]=(f-y)*M,s[5]=(1-(d+p))*M,s[6]=(g+v)*M,s[7]=0,s[8]=(m+x)*R,s[9]=(g-v)*R,s[10]=(1-(d+_))*R,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;let r=Ps.set(s[0],s[1],s[2]).length();const a=Ps.set(s[4],s[5],s[6]).length(),o=Ps.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Xn.copy(this);const l=1/r,h=1/a,u=1/o;return Xn.elements[0]*=l,Xn.elements[1]*=l,Xn.elements[2]*=l,Xn.elements[4]*=h,Xn.elements[5]*=h,Xn.elements[6]*=h,Xn.elements[8]*=u,Xn.elements[9]*=u,Xn.elements[10]*=u,e.setFromRotationMatrix(Xn),i.x=r,i.y=a,i.z=o,this}makePerspective(t,e,i,s,r,a,o=bi){const c=this.elements,l=2*r/(e-t),h=2*r/(i-s),u=(e+t)/(e-t),d=(i+s)/(i-s);let f,m;if(o===bi)f=-(a+r)/(a-r),m=-2*a*r/(a-r);else if(o===Yo)f=-a/(a-r),m=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,s,r,a,o=bi){const c=this.elements,l=1/(e-t),h=1/(i-s),u=1/(a-r),d=(e+t)*l,f=(i+s)*h;let m,_;if(o===bi)m=(a+r)*u,_=-2*u;else if(o===Yo)m=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=_,c[14]=-m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Ps=new C,Xn=new zt,jg=new C(0,0,0),Zg=new C(1,1,1),Ui=new C,Va=new C,Tn=new C,id=new zt,sd=new Mn;class Es{constructor(t=0,e=0,i=0,s=Es.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-qe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(qe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-qe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(qe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return id.makeRotationFromQuaternion(t),this.setFromRotationMatrix(id,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return sd.setFromEuler(this),this.setFromQuaternion(sd,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Es.DEFAULT_ORDER="XYZ";class Eh{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Jg=0;const rd=new C,Ls=new Mn,pi=new zt,Wa=new C,Br=new C,$g=new C,Qg=new Mn,ad=new C(1,0,0),od=new C(0,1,0),cd=new C(0,0,1),t1={type:"added"},e1={type:"removed"};class Ie extends bs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Jg++}),this.uuid=kn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ie.DEFAULT_UP.clone();const t=new C,e=new Es,i=new Mn,s=new C(1,1,1);function r(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new zt},normalMatrix:{value:new se}}),this.matrix=new zt,this.matrixWorld=new zt,this.matrixAutoUpdate=Ie.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ie.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Eh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ls.setFromAxisAngle(t,e),this.quaternion.multiply(Ls),this}rotateOnWorldAxis(t,e){return Ls.setFromAxisAngle(t,e),this.quaternion.premultiply(Ls),this}rotateX(t){return this.rotateOnAxis(ad,t)}rotateY(t){return this.rotateOnAxis(od,t)}rotateZ(t){return this.rotateOnAxis(cd,t)}translateOnAxis(t,e){return rd.copy(t).applyQuaternion(this.quaternion),this.position.add(rd.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ad,t)}translateY(t){return this.translateOnAxis(od,t)}translateZ(t){return this.translateOnAxis(cd,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(pi.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Wa.copy(t):Wa.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Br.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pi.lookAt(Br,Wa,this.up):pi.lookAt(Wa,Br,this.up),this.quaternion.setFromRotationMatrix(pi),s&&(pi.extractRotation(s.matrixWorld),Ls.setFromRotationMatrix(pi),this.quaternion.premultiply(Ls.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(t1)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(e1)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),pi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),pi.multiply(t.parent.matrixWorld)),t.applyMatrix4(pi),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Br,t,$g),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Br,Qg,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++){const r=e[i];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++){const o=s[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];s.animations.push(r(t.animations,c))}}if(e){const o=a(t.geometries),c=a(t.materials),l=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),f=a(t.animations),m=a(t.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),m.length>0&&(i.nodes=m)}return i.object=s,i;function a(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}Ie.DEFAULT_UP=new C(0,1,0);Ie.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ie.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const qn=new C,mi=new C,jc=new C,gi=new C,Is=new C,Ds=new C,ld=new C,Zc=new C,Jc=new C,$c=new C;let Xa=!1;class On{constructor(t=new C,e=new C,i=new C){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),qn.subVectors(t,e),s.cross(qn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){qn.subVectors(s,e),mi.subVectors(i,e),jc.subVectors(t,e);const a=qn.dot(qn),o=qn.dot(mi),c=qn.dot(jc),l=mi.dot(mi),h=mi.dot(jc),u=a*l-o*o;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(l*c-o*h)*d,m=(a*h-o*c)*d;return r.set(1-f-m,m,f)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,gi)===null?!1:gi.x>=0&&gi.y>=0&&gi.x+gi.y<=1}static getUV(t,e,i,s,r,a,o,c){return Xa===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Xa=!0),this.getInterpolation(t,e,i,s,r,a,o,c)}static getInterpolation(t,e,i,s,r,a,o,c){return this.getBarycoord(t,e,i,s,gi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,gi.x),c.addScaledVector(a,gi.y),c.addScaledVector(o,gi.z),c)}static isFrontFacing(t,e,i,s){return qn.subVectors(i,e),mi.subVectors(t,e),qn.cross(mi).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return qn.subVectors(this.c,this.b),mi.subVectors(this.a,this.b),qn.cross(mi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return On.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return On.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,i,s,r){return Xa===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Xa=!0),On.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}getInterpolation(t,e,i,s,r){return On.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return On.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return On.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,r=this.c;let a,o;Is.subVectors(s,i),Ds.subVectors(r,i),Zc.subVectors(t,i);const c=Is.dot(Zc),l=Ds.dot(Zc);if(c<=0&&l<=0)return e.copy(i);Jc.subVectors(t,s);const h=Is.dot(Jc),u=Ds.dot(Jc);if(h>=0&&u<=h)return e.copy(s);const d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return a=c/(c-h),e.copy(i).addScaledVector(Is,a);$c.subVectors(t,r);const f=Is.dot($c),m=Ds.dot($c);if(m>=0&&f<=m)return e.copy(r);const _=f*l-c*m;if(_<=0&&l>=0&&m<=0)return o=l/(l-m),e.copy(i).addScaledVector(Ds,o);const g=h*m-f*u;if(g<=0&&u-h>=0&&f-m>=0)return ld.subVectors(r,s),o=(u-h)/(u-h+(f-m)),e.copy(s).addScaledVector(ld,o);const p=1/(g+_+d);return a=_*p,o=d*p,e.copy(i).addScaledVector(Is,a).addScaledVector(Ds,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Gp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ni={h:0,s:0,l:0},qa={h:0,s:0,l:0};function Qc(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class wt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=tn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,xe.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=xe.workingColorSpace){return this.r=t,this.g=e,this.b=i,xe.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=xe.workingColorSpace){if(t=bh(t,1),e=qe(e,0,1),i=qe(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,a=2*i-r;this.r=Qc(a,r,t+1/3),this.g=Qc(a,r,t),this.b=Qc(a,r,t-1/3)}return xe.toWorkingColorSpace(this,s),this}setStyle(t,e=tn){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=tn){const i=Gp[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=fr(t.r),this.g=fr(t.g),this.b=fr(t.b),this}copyLinearToSRGB(t){return this.r=Hc(t.r),this.g=Hc(t.g),this.b=Hc(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=tn){return xe.fromWorkingColorSpace(cn.copy(this),t),Math.round(qe(cn.r*255,0,255))*65536+Math.round(qe(cn.g*255,0,255))*256+Math.round(qe(cn.b*255,0,255))}getHexString(t=tn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=xe.workingColorSpace){xe.fromWorkingColorSpace(cn.copy(this),e);const i=cn.r,s=cn.g,r=cn.b,a=Math.max(i,s,r),o=Math.min(i,s,r);let c,l;const h=(o+a)/2;if(o===a)c=0,l=0;else{const u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case i:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-i)/u+2;break;case r:c=(i-s)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=xe.workingColorSpace){return xe.fromWorkingColorSpace(cn.copy(this),e),t.r=cn.r,t.g=cn.g,t.b=cn.b,t}getStyle(t=tn){xe.fromWorkingColorSpace(cn.copy(this),t);const e=cn.r,i=cn.g,s=cn.b;return t!==tn?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Ni),this.setHSL(Ni.h+t,Ni.s+e,Ni.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Ni),t.getHSL(qa);const i=Qr(Ni.h,qa.h,e),s=Qr(Ni.s,qa.s,e),r=Qr(Ni.l,qa.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const cn=new wt;wt.NAMES=Gp;let n1=0;class ci extends bs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:n1++}),this.uuid=kn(),this.name="",this.type="Material",this.blending=dr,this.side=ji,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ol,this.blendDst=Fl,this.blendEquation=ds,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new wt(0,0,0),this.blendAlpha=0,this.depthFunc=ko,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ju,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ws,this.stencilZFail=ws,this.stencilZPass=ws,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==dr&&(i.blending=this.blending),this.side!==ji&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ol&&(i.blendSrc=this.blendSrc),this.blendDst!==Fl&&(i.blendDst=this.blendDst),this.blendEquation!==ds&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ko&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ju&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ws&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ws&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ws&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Ci extends ci{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new wt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=uc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ge=new C,Ya=new nt;class En{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Gl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Si,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Ya.fromBufferAttribute(this,e),Ya.applyMatrix3(t),this.setXY(e,Ya.x,Ya.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Ge.fromBufferAttribute(this,e),Ge.applyMatrix3(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Ge.fromBufferAttribute(this,e),Ge.applyMatrix4(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ge.fromBufferAttribute(this,e),Ge.applyNormalMatrix(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ge.fromBufferAttribute(this,e),Ge.transformDirection(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=ni(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=_e(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ni(e,this.array)),e}setX(t,e){return this.normalized&&(e=_e(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ni(e,this.array)),e}setY(t,e){return this.normalized&&(e=_e(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ni(e,this.array)),e}setZ(t,e){return this.normalized&&(e=_e(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ni(e,this.array)),e}setW(t,e){return this.normalized&&(e=_e(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=_e(e,this.array),i=_e(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=_e(e,this.array),i=_e(i,this.array),s=_e(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=_e(e,this.array),i=_e(i,this.array),s=_e(s,this.array),r=_e(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Gl&&(t.usage=this.usage),t}}class Vp extends En{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Wp extends En{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class ee extends En{constructor(t,e,i){super(new Float32Array(t),e,i)}}let i1=0;const Dn=new zt,tl=new Ie,Us=new C,An=new Ri,kr=new Ri,Qe=new C;class De extends bs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:i1++}),this.uuid=kn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(zp(t)?Wp:Vp)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new se().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Dn.makeRotationFromQuaternion(t),this.applyMatrix4(Dn),this}rotateX(t){return Dn.makeRotationX(t),this.applyMatrix4(Dn),this}rotateY(t){return Dn.makeRotationY(t),this.applyMatrix4(Dn),this}rotateZ(t){return Dn.makeRotationZ(t),this.applyMatrix4(Dn),this}translate(t,e,i){return Dn.makeTranslation(t,e,i),this.applyMatrix4(Dn),this}scale(t,e,i){return Dn.makeScale(t,e,i),this.applyMatrix4(Dn),this}lookAt(t){return tl.lookAt(t),tl.updateMatrix(),this.applyMatrix4(tl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Us).negate(),this.translate(Us.x,Us.y,Us.z),this}setFromPoints(t){const e=[];for(let i=0,s=t.length;i<s;i++){const r=t[i];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new ee(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ri);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const r=e[i];An.setFromBufferAttribute(r),this.morphTargetsRelative?(Qe.addVectors(this.boundingBox.min,An.min),this.boundingBox.expandByPoint(Qe),Qe.addVectors(this.boundingBox.max,An.max),this.boundingBox.expandByPoint(Qe)):(this.boundingBox.expandByPoint(An.min),this.boundingBox.expandByPoint(An.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new oi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new C,1/0);return}if(t){const i=this.boundingSphere.center;if(An.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];kr.setFromBufferAttribute(o),this.morphTargetsRelative?(Qe.addVectors(An.min,kr.min),An.expandByPoint(Qe),Qe.addVectors(An.max,kr.max),An.expandByPoint(Qe)):(An.expandByPoint(kr.min),An.expandByPoint(kr.max))}An.getCenter(i);let s=0;for(let r=0,a=t.count;r<a;r++)Qe.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Qe));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Qe.fromBufferAttribute(o,l),c&&(Us.fromBufferAttribute(t,l),Qe.add(Us)),s=Math.max(s,i.distanceToSquared(Qe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.array,s=e.position.array,r=e.normal.array,a=e.uv.array,o=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new En(new Float32Array(4*o),4));const c=this.getAttribute("tangent").array,l=[],h=[];for(let E=0;E<o;E++)l[E]=new C,h[E]=new C;const u=new C,d=new C,f=new C,m=new nt,_=new nt,g=new nt,p=new C,v=new C;function x(E,O,Y){u.fromArray(s,E*3),d.fromArray(s,O*3),f.fromArray(s,Y*3),m.fromArray(a,E*2),_.fromArray(a,O*2),g.fromArray(a,Y*2),d.sub(u),f.sub(u),_.sub(m),g.sub(m);const tt=1/(_.x*g.y-g.x*_.y);isFinite(tt)&&(p.copy(d).multiplyScalar(g.y).addScaledVector(f,-_.y).multiplyScalar(tt),v.copy(f).multiplyScalar(_.x).addScaledVector(d,-g.x).multiplyScalar(tt),l[E].add(p),l[O].add(p),l[Y].add(p),h[E].add(v),h[O].add(v),h[Y].add(v))}let y=this.groups;y.length===0&&(y=[{start:0,count:i.length}]);for(let E=0,O=y.length;E<O;++E){const Y=y[E],tt=Y.start,P=Y.count;for(let L=tt,U=tt+P;L<U;L+=3)x(i[L+0],i[L+1],i[L+2])}const A=new C,M=new C,R=new C,N=new C;function b(E){R.fromArray(r,E*3),N.copy(R);const O=l[E];A.copy(O),A.sub(R.multiplyScalar(R.dot(O))).normalize(),M.crossVectors(N,O);const tt=M.dot(h[E])<0?-1:1;c[E*4]=A.x,c[E*4+1]=A.y,c[E*4+2]=A.z,c[E*4+3]=tt}for(let E=0,O=y.length;E<O;++E){const Y=y[E],tt=Y.start,P=Y.count;for(let L=tt,U=tt+P;L<U;L+=3)b(i[L+0]),b(i[L+1]),b(i[L+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new En(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);const s=new C,r=new C,a=new C,o=new C,c=new C,l=new C,h=new C,u=new C;if(t)for(let d=0,f=t.count;d<f;d+=3){const m=t.getX(d+0),_=t.getX(d+1),g=t.getX(d+2);s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,_),a.fromBufferAttribute(e,g),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(i,m),c.fromBufferAttribute(i,_),l.fromBufferAttribute(i,g),o.add(h),c.add(h),l.add(h),i.setXYZ(m,o.x,o.y,o.z),i.setXYZ(_,c.x,c.y,c.z),i.setXYZ(g,l.x,l.y,l.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Qe.fromBufferAttribute(t,e),Qe.normalize(),t.setXYZ(e,Qe.x,Qe.y,Qe.z)}toNonIndexed(){function t(o,c){const l=o.array,h=o.itemSize,u=o.normalized,d=new l.constructor(c.length*h);let f=0,m=0;for(let _=0,g=c.length;_<g;_++){o.isInterleavedBufferAttribute?f=c[_]*o.data.stride+o.offset:f=c[_]*h;for(let p=0;p<h;p++)d[m++]=l[f++]}return new En(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new De,i=this.index.array,s=this.attributes;for(const o in s){const c=s[o],l=t(c,i);e.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let h=0,u=l.length;h<u;h++){const d=l[h],f=t(d,i);c.push(f)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const c in i){const l=i[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){const f=l[u];h.push(f.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const s=t.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(e))}const r=t.morphAttributes;for(const l in r){const h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let l=0,h=a.length;l<h;l++){const u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const hd=new zt,is=new Ma,Ka=new oi,ud=new C,Ns=new C,Os=new C,Fs=new C,el=new C,ja=new C,Za=new nt,Ja=new nt,$a=new nt,dd=new C,fd=new C,pd=new C,Qa=new C,to=new C;class Me extends Ie{constructor(t=new De,e=new Ci){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){ja.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=o[c],u=r[c];h!==0&&(el.fromBufferAttribute(u,t),a?ja.addScaledVector(el,h):ja.addScaledVector(el.sub(e),h))}e.add(ja)}return e}raycast(t,e){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ka.copy(i.boundingSphere),Ka.applyMatrix4(r),is.copy(t.ray).recast(t.near),!(Ka.containsPoint(is.origin)===!1&&(is.intersectSphere(Ka,ud)===null||is.origin.distanceToSquared(ud)>(t.far-t.near)**2))&&(hd.copy(r).invert(),is.copy(t.ray).applyMatrix4(hd),!(i.boundingBox!==null&&is.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,is)))}_computeIntersections(t,e,i){let s;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,_=d.length;m<_;m++){const g=d[m],p=a[g.materialIndex],v=Math.max(g.start,f.start),x=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let y=v,A=x;y<A;y+=3){const M=o.getX(y),R=o.getX(y+1),N=o.getX(y+2);s=eo(this,p,t,i,l,h,u,M,R,N),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{const m=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let g=m,p=_;g<p;g+=3){const v=o.getX(g),x=o.getX(g+1),y=o.getX(g+2);s=eo(this,a,t,i,l,h,u,v,x,y),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let m=0,_=d.length;m<_;m++){const g=d[m],p=a[g.materialIndex],v=Math.max(g.start,f.start),x=Math.min(c.count,Math.min(g.start+g.count,f.start+f.count));for(let y=v,A=x;y<A;y+=3){const M=y,R=y+1,N=y+2;s=eo(this,p,t,i,l,h,u,M,R,N),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{const m=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let g=m,p=_;g<p;g+=3){const v=g,x=g+1,y=g+2;s=eo(this,a,t,i,l,h,u,v,x,y),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}}function s1(n,t,e,i,s,r,a,o){let c;if(t.side===yn?c=i.intersectTriangle(a,r,s,!0,o):c=i.intersectTriangle(s,r,a,t.side===ji,o),c===null)return null;to.copy(o),to.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(to);return l<e.near||l>e.far?null:{distance:l,point:to.clone(),object:n}}function eo(n,t,e,i,s,r,a,o,c,l){n.getVertexPosition(o,Ns),n.getVertexPosition(c,Os),n.getVertexPosition(l,Fs);const h=s1(n,t,e,i,Ns,Os,Fs,Qa);if(h){s&&(Za.fromBufferAttribute(s,o),Ja.fromBufferAttribute(s,c),$a.fromBufferAttribute(s,l),h.uv=On.getInterpolation(Qa,Ns,Os,Fs,Za,Ja,$a,new nt)),r&&(Za.fromBufferAttribute(r,o),Ja.fromBufferAttribute(r,c),$a.fromBufferAttribute(r,l),h.uv1=On.getInterpolation(Qa,Ns,Os,Fs,Za,Ja,$a,new nt),h.uv2=h.uv1),a&&(dd.fromBufferAttribute(a,o),fd.fromBufferAttribute(a,c),pd.fromBufferAttribute(a,l),h.normal=On.getInterpolation(Qa,Ns,Os,Fs,dd,fd,pd,new C),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:c,c:l,normal:new C,materialIndex:0};On.getNormal(Ns,Os,Fs,u.normal),h.face=u}return h}class ce extends De{constructor(t=1,e=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],h=[],u=[];let d=0,f=0;m("z","y","x",-1,-1,i,e,t,a,r,0),m("z","y","x",1,-1,i,e,-t,a,r,1),m("x","z","y",1,1,t,i,e,s,a,2),m("x","z","y",1,-1,t,i,-e,s,a,3),m("x","y","z",1,-1,t,e,i,s,r,4),m("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new ee(l,3)),this.setAttribute("normal",new ee(h,3)),this.setAttribute("uv",new ee(u,2));function m(_,g,p,v,x,y,A,M,R,N,b){const E=y/R,O=A/N,Y=y/2,tt=A/2,P=M/2,L=R+1,U=N+1;let F=0,H=0;const B=new C;for(let X=0;X<U;X++){const j=X*O-tt;for(let ht=0;ht<L;ht++){const W=ht*E-Y;B[_]=W*v,B[g]=j*x,B[p]=P,l.push(B.x,B.y,B.z),B[_]=0,B[g]=0,B[p]=M>0?1:-1,h.push(B.x,B.y,B.z),u.push(ht/R),u.push(1-X/N),F+=1}}for(let X=0;X<N;X++)for(let j=0;j<R;j++){const ht=d+j+L*X,W=d+j+L*(X+1),$=d+(j+1)+L*(X+1),gt=d+(j+1)+L*X;c.push(ht,W,gt),c.push(W,$,gt),H+=6}o.addGroup(f,H,b),f+=H,d+=F}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ce(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Er(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function gn(n){const t={};for(let e=0;e<n.length;e++){const i=Er(n[e]);for(const s in i)t[s]=i[s]}return t}function r1(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Xp(n){return n.getRenderTarget()===null?n.outputColorSpace:xe.workingColorSpace}const a1={clone:Er,merge:gn};var o1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,c1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Zi extends ci{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=o1,this.fragmentShader=c1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Er(t.uniforms),this.uniformsGroups=r1(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class qp extends Ie{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new zt,this.projectionMatrix=new zt,this.projectionMatrixInverse=new zt,this.coordinateSystem=bi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class _n extends qp{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=br*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan($r*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return br*2*Math.atan(Math.tan($r*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,i,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan($r*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,e-=a.offsetY*i/l,s*=a.width/c,i*=a.height/l}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const zs=-90,Bs=1;class l1 extends Ie{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new _n(zs,Bs,t,e);s.layers=this.layers,this.add(s);const r=new _n(zs,Bs,t,e);r.layers=this.layers,this.add(r);const a=new _n(zs,Bs,t,e);a.layers=this.layers,this.add(a);const o=new _n(zs,Bs,t,e);o.layers=this.layers,this.add(o);const c=new _n(zs,Bs,t,e);c.layers=this.layers,this.add(c);const l=new _n(zs,Bs,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,r,a,o,c]=e;for(const l of e)this.remove(l);if(t===bi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Yo)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,a),t.setRenderTarget(i,2,s),t.render(e,o),t.setRenderTarget(i,3,s),t.render(e,c),t.setRenderTarget(i,4,s),t.render(e,l),i.texture.generateMipmaps=_,t.setRenderTarget(i,5,s),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=m,i.texture.needsPMREMUpdate=!0}}class Yp extends dn{constructor(t,e,i,s,r,a,o,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:yr,super(t,e,i,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class h1 extends vs{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];e.encoding!==void 0&&(ta("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===_s?tn:zn),this.texture=new Yp(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Nn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new ce(5,5,5),r=new Zi({name:"CubemapFromEquirect",uniforms:Er(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:yn,blending:Vi});r.uniforms.tEquirect.value=e;const a=new Me(s,r),o=e.minFilter;return e.minFilter===oa&&(e.minFilter=Nn),new l1(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,i,s){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,s);t.setRenderTarget(r)}}const nl=new C,u1=new C,d1=new se;class ls{constructor(t=new C(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=nl.subVectors(i,e).cross(u1.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(nl),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||d1.getNormalMatrix(t),s=this.coplanarPoint(nl).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ss=new oi,no=new C;class wh{constructor(t=new ls,e=new ls,i=new ls,s=new ls,r=new ls,a=new ls){this.planes=[t,e,i,s,r,a]}set(t,e,i,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=bi){const i=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],c=s[3],l=s[4],h=s[5],u=s[6],d=s[7],f=s[8],m=s[9],_=s[10],g=s[11],p=s[12],v=s[13],x=s[14],y=s[15];if(i[0].setComponents(c-r,d-l,g-f,y-p).normalize(),i[1].setComponents(c+r,d+l,g+f,y+p).normalize(),i[2].setComponents(c+a,d+h,g+m,y+v).normalize(),i[3].setComponents(c-a,d-h,g-m,y-v).normalize(),i[4].setComponents(c-o,d-u,g-_,y-x).normalize(),e===bi)i[5].setComponents(c+o,d+u,g+_,y+x).normalize();else if(e===Yo)i[5].setComponents(o,u,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ss.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ss.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ss)}intersectsSprite(t){return ss.center.set(0,0,0),ss.radius=.7071067811865476,ss.applyMatrix4(t.matrixWorld),this.intersectsSphere(ss)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(no.x=s.normal.x>0?t.max.x:t.min.x,no.y=s.normal.y>0?t.max.y:t.min.y,no.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(no)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Kp(){let n=null,t=!1,e=null,i=null;function s(r,a){e(r,a),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function f1(n,t){const e=t.isWebGL2,i=new WeakMap;function s(l,h){const u=l.array,d=l.usage,f=u.byteLength,m=n.createBuffer();n.bindBuffer(h,m),n.bufferData(h,u,d),l.onUploadCallback();let _;if(u instanceof Float32Array)_=n.FLOAT;else if(u instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(e)_=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=n.UNSIGNED_SHORT;else if(u instanceof Int16Array)_=n.SHORT;else if(u instanceof Uint32Array)_=n.UNSIGNED_INT;else if(u instanceof Int32Array)_=n.INT;else if(u instanceof Int8Array)_=n.BYTE;else if(u instanceof Uint8Array)_=n.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)_=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:m,type:_,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version,size:f}}function r(l,h,u){const d=h.array,f=h._updateRange,m=h.updateRanges;if(n.bindBuffer(u,l),f.count===-1&&m.length===0&&n.bufferSubData(u,0,d),m.length!==0){for(let _=0,g=m.length;_<g;_++){const p=m[_];e?n.bufferSubData(u,p.start*d.BYTES_PER_ELEMENT,d,p.start,p.count):n.bufferSubData(u,p.start*d.BYTES_PER_ELEMENT,d.subarray(p.start,p.start+p.count))}h.clearUpdateRanges()}f.count!==-1&&(e?n.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d,f.offset,f.count):n.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d.subarray(f.offset,f.offset+f.count)),f.count=-1),h.onUploadCallback()}function a(l){return l.isInterleavedBufferAttribute&&(l=l.data),i.get(l)}function o(l){l.isInterleavedBufferAttribute&&(l=l.data);const h=i.get(l);h&&(n.deleteBuffer(h.buffer),i.delete(l))}function c(l,h){if(l.isGLBufferAttribute){const d=i.get(l);(!d||d.version<l.version)&&i.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const u=i.get(l);if(u===void 0)i.set(l,s(l,h));else if(u.version<l.version){if(u.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,l,h),u.version=l.version}}return{get:a,remove:o,update:c}}class Sa extends De{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(i),c=Math.floor(s),l=o+1,h=c+1,u=t/o,d=e/c,f=[],m=[],_=[],g=[];for(let p=0;p<h;p++){const v=p*d-a;for(let x=0;x<l;x++){const y=x*u-r;m.push(y,-v,0),_.push(0,0,1),g.push(x/o),g.push(1-p/c)}}for(let p=0;p<c;p++)for(let v=0;v<o;v++){const x=v+l*p,y=v+l*(p+1),A=v+1+l*(p+1),M=v+1+l*p;f.push(x,y,M),f.push(y,A,M)}this.setIndex(f),this.setAttribute("position",new ee(m,3)),this.setAttribute("normal",new ee(_,3)),this.setAttribute("uv",new ee(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Sa(t.width,t.height,t.widthSegments,t.heightSegments)}}var p1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,m1=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,g1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,_1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,x1=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,v1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,y1=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,M1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,S1=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,b1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,E1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,w1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,T1=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,A1=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,R1=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,C1=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,P1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,L1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,I1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,D1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,U1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,N1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,O1=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,F1=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,z1=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,B1=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,k1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,H1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,G1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,V1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,W1="gl_FragColor = linearToOutputTexel( gl_FragColor );",X1=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,q1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Y1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,K1=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,j1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Z1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,J1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,$1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Q1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,t_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,e_=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,n_=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,i_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,s_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,r_=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,a_=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,o_=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,c_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,l_=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,h_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,u_=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,d_=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,f_=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,p_=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,m_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,g_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,__=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,x_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,v_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,y_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,M_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,S_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,b_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,E_=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,w_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,T_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,A_=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,R_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,C_=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,P_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,L_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,I_=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,D_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,U_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,N_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,O_=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,F_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,z_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,B_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,k_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,H_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,G_=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,V_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,W_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,X_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,q_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Y_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,K_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,j_=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Z_=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,J_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,$_=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Q_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,tx=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,ex=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,nx=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,ix=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,sx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,rx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ax=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,ox=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,cx=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,lx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,hx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ux=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,dx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const fx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,px=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gx=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_x=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,yx=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Mx=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Sx=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,bx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ex=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wx=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Tx=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ax=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Rx=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cx=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Px=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lx=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Ix=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dx=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Ux=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Nx=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ox=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fx=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,zx=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bx=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kx=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hx=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Gx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Vx=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Wx=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Xx=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,qx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Qt={alphahash_fragment:p1,alphahash_pars_fragment:m1,alphamap_fragment:g1,alphamap_pars_fragment:_1,alphatest_fragment:x1,alphatest_pars_fragment:v1,aomap_fragment:y1,aomap_pars_fragment:M1,batching_pars_vertex:S1,batching_vertex:b1,begin_vertex:E1,beginnormal_vertex:w1,bsdfs:T1,iridescence_fragment:A1,bumpmap_pars_fragment:R1,clipping_planes_fragment:C1,clipping_planes_pars_fragment:P1,clipping_planes_pars_vertex:L1,clipping_planes_vertex:I1,color_fragment:D1,color_pars_fragment:U1,color_pars_vertex:N1,color_vertex:O1,common:F1,cube_uv_reflection_fragment:z1,defaultnormal_vertex:B1,displacementmap_pars_vertex:k1,displacementmap_vertex:H1,emissivemap_fragment:G1,emissivemap_pars_fragment:V1,colorspace_fragment:W1,colorspace_pars_fragment:X1,envmap_fragment:q1,envmap_common_pars_fragment:Y1,envmap_pars_fragment:K1,envmap_pars_vertex:j1,envmap_physical_pars_fragment:o_,envmap_vertex:Z1,fog_vertex:J1,fog_pars_vertex:$1,fog_fragment:Q1,fog_pars_fragment:t_,gradientmap_pars_fragment:e_,lightmap_fragment:n_,lightmap_pars_fragment:i_,lights_lambert_fragment:s_,lights_lambert_pars_fragment:r_,lights_pars_begin:a_,lights_toon_fragment:c_,lights_toon_pars_fragment:l_,lights_phong_fragment:h_,lights_phong_pars_fragment:u_,lights_physical_fragment:d_,lights_physical_pars_fragment:f_,lights_fragment_begin:p_,lights_fragment_maps:m_,lights_fragment_end:g_,logdepthbuf_fragment:__,logdepthbuf_pars_fragment:x_,logdepthbuf_pars_vertex:v_,logdepthbuf_vertex:y_,map_fragment:M_,map_pars_fragment:S_,map_particle_fragment:b_,map_particle_pars_fragment:E_,metalnessmap_fragment:w_,metalnessmap_pars_fragment:T_,morphcolor_vertex:A_,morphnormal_vertex:R_,morphtarget_pars_vertex:C_,morphtarget_vertex:P_,normal_fragment_begin:L_,normal_fragment_maps:I_,normal_pars_fragment:D_,normal_pars_vertex:U_,normal_vertex:N_,normalmap_pars_fragment:O_,clearcoat_normal_fragment_begin:F_,clearcoat_normal_fragment_maps:z_,clearcoat_pars_fragment:B_,iridescence_pars_fragment:k_,opaque_fragment:H_,packing:G_,premultiplied_alpha_fragment:V_,project_vertex:W_,dithering_fragment:X_,dithering_pars_fragment:q_,roughnessmap_fragment:Y_,roughnessmap_pars_fragment:K_,shadowmap_pars_fragment:j_,shadowmap_pars_vertex:Z_,shadowmap_vertex:J_,shadowmask_pars_fragment:$_,skinbase_vertex:Q_,skinning_pars_vertex:tx,skinning_vertex:ex,skinnormal_vertex:nx,specularmap_fragment:ix,specularmap_pars_fragment:sx,tonemapping_fragment:rx,tonemapping_pars_fragment:ax,transmission_fragment:ox,transmission_pars_fragment:cx,uv_pars_fragment:lx,uv_pars_vertex:hx,uv_vertex:ux,worldpos_vertex:dx,background_vert:fx,background_frag:px,backgroundCube_vert:mx,backgroundCube_frag:gx,cube_vert:_x,cube_frag:xx,depth_vert:vx,depth_frag:yx,distanceRGBA_vert:Mx,distanceRGBA_frag:Sx,equirect_vert:bx,equirect_frag:Ex,linedashed_vert:wx,linedashed_frag:Tx,meshbasic_vert:Ax,meshbasic_frag:Rx,meshlambert_vert:Cx,meshlambert_frag:Px,meshmatcap_vert:Lx,meshmatcap_frag:Ix,meshnormal_vert:Dx,meshnormal_frag:Ux,meshphong_vert:Nx,meshphong_frag:Ox,meshphysical_vert:Fx,meshphysical_frag:zx,meshtoon_vert:Bx,meshtoon_frag:kx,points_vert:Hx,points_frag:Gx,shadow_vert:Vx,shadow_frag:Wx,sprite_vert:Xx,sprite_frag:qx},pt={common:{diffuse:{value:new wt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new se},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new se}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new se}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new se}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new se},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new se},normalScale:{value:new nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new se},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new se}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new se}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new se}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new wt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new wt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0},uvTransform:{value:new se}},sprite:{diffuse:{value:new wt(16777215)},opacity:{value:1},center:{value:new nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new se},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0}}},ei={basic:{uniforms:gn([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.fog]),vertexShader:Qt.meshbasic_vert,fragmentShader:Qt.meshbasic_frag},lambert:{uniforms:gn([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,pt.lights,{emissive:{value:new wt(0)}}]),vertexShader:Qt.meshlambert_vert,fragmentShader:Qt.meshlambert_frag},phong:{uniforms:gn([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,pt.lights,{emissive:{value:new wt(0)},specular:{value:new wt(1118481)},shininess:{value:30}}]),vertexShader:Qt.meshphong_vert,fragmentShader:Qt.meshphong_frag},standard:{uniforms:gn([pt.common,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.roughnessmap,pt.metalnessmap,pt.fog,pt.lights,{emissive:{value:new wt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag},toon:{uniforms:gn([pt.common,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.gradientmap,pt.fog,pt.lights,{emissive:{value:new wt(0)}}]),vertexShader:Qt.meshtoon_vert,fragmentShader:Qt.meshtoon_frag},matcap:{uniforms:gn([pt.common,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,{matcap:{value:null}}]),vertexShader:Qt.meshmatcap_vert,fragmentShader:Qt.meshmatcap_frag},points:{uniforms:gn([pt.points,pt.fog]),vertexShader:Qt.points_vert,fragmentShader:Qt.points_frag},dashed:{uniforms:gn([pt.common,pt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qt.linedashed_vert,fragmentShader:Qt.linedashed_frag},depth:{uniforms:gn([pt.common,pt.displacementmap]),vertexShader:Qt.depth_vert,fragmentShader:Qt.depth_frag},normal:{uniforms:gn([pt.common,pt.bumpmap,pt.normalmap,pt.displacementmap,{opacity:{value:1}}]),vertexShader:Qt.meshnormal_vert,fragmentShader:Qt.meshnormal_frag},sprite:{uniforms:gn([pt.sprite,pt.fog]),vertexShader:Qt.sprite_vert,fragmentShader:Qt.sprite_frag},background:{uniforms:{uvTransform:{value:new se},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qt.background_vert,fragmentShader:Qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Qt.backgroundCube_vert,fragmentShader:Qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qt.cube_vert,fragmentShader:Qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qt.equirect_vert,fragmentShader:Qt.equirect_frag},distanceRGBA:{uniforms:gn([pt.common,pt.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qt.distanceRGBA_vert,fragmentShader:Qt.distanceRGBA_frag},shadow:{uniforms:gn([pt.lights,pt.fog,{color:{value:new wt(0)},opacity:{value:1}}]),vertexShader:Qt.shadow_vert,fragmentShader:Qt.shadow_frag}};ei.physical={uniforms:gn([ei.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new se},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new se},clearcoatNormalScale:{value:new nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new se},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new se},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new se},sheen:{value:0},sheenColor:{value:new wt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new se},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new se},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new se},transmissionSamplerSize:{value:new nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new se},attenuationDistance:{value:0},attenuationColor:{value:new wt(0)},specularColor:{value:new wt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new se},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new se},anisotropyVector:{value:new nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new se}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag};const io={r:0,b:0,g:0};function Yx(n,t,e,i,s,r,a){const o=new wt(0);let c=r===!0?0:1,l,h,u=null,d=0,f=null;function m(g,p){let v=!1,x=p.isScene===!0?p.background:null;x&&x.isTexture&&(x=(p.backgroundBlurriness>0?e:t).get(x)),x===null?_(o,c):x&&x.isColor&&(_(x,1),v=!0);const y=n.xr.getEnvironmentBlendMode();y==="additive"?i.buffers.color.setClear(0,0,0,1,a):y==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||v)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),x&&(x.isCubeTexture||x.mapping===dc)?(h===void 0&&(h=new Me(new ce(1,1,1),new Zi({name:"BackgroundCubeMaterial",uniforms:Er(ei.backgroundCube.uniforms),vertexShader:ei.backgroundCube.vertexShader,fragmentShader:ei.backgroundCube.fragmentShader,side:yn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,M,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.toneMapped=xe.getTransfer(x.colorSpace)!==Re,(u!==x||d!==x.version||f!==n.toneMapping)&&(h.material.needsUpdate=!0,u=x,d=x.version,f=n.toneMapping),h.layers.enableAll(),g.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new Me(new Sa(2,2),new Zi({name:"BackgroundMaterial",uniforms:Er(ei.background.uniforms),vertexShader:ei.background.vertexShader,fragmentShader:ei.background.fragmentShader,side:ji,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,l.material.toneMapped=xe.getTransfer(x.colorSpace)!==Re,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||d!==x.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,u=x,d=x.version,f=n.toneMapping),l.layers.enableAll(),g.unshift(l,l.geometry,l.material,0,0,null))}function _(g,p){g.getRGB(io,Xp(n)),i.buffers.color.setClear(io.r,io.g,io.b,p,a)}return{getClearColor:function(){return o},setClearColor:function(g,p=1){o.set(g),c=p,_(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(g){c=g,_(o,c)},render:m}}function Kx(n,t,e,i){const s=n.getParameter(n.MAX_VERTEX_ATTRIBS),r=i.isWebGL2?null:t.get("OES_vertex_array_object"),a=i.isWebGL2||r!==null,o={},c=g(null);let l=c,h=!1;function u(P,L,U,F,H){let B=!1;if(a){const X=_(F,U,L);l!==X&&(l=X,f(l.object)),B=p(P,F,U,H),B&&v(P,F,U,H)}else{const X=L.wireframe===!0;(l.geometry!==F.id||l.program!==U.id||l.wireframe!==X)&&(l.geometry=F.id,l.program=U.id,l.wireframe=X,B=!0)}H!==null&&e.update(H,n.ELEMENT_ARRAY_BUFFER),(B||h)&&(h=!1,N(P,L,U,F),H!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function d(){return i.isWebGL2?n.createVertexArray():r.createVertexArrayOES()}function f(P){return i.isWebGL2?n.bindVertexArray(P):r.bindVertexArrayOES(P)}function m(P){return i.isWebGL2?n.deleteVertexArray(P):r.deleteVertexArrayOES(P)}function _(P,L,U){const F=U.wireframe===!0;let H=o[P.id];H===void 0&&(H={},o[P.id]=H);let B=H[L.id];B===void 0&&(B={},H[L.id]=B);let X=B[F];return X===void 0&&(X=g(d()),B[F]=X),X}function g(P){const L=[],U=[],F=[];for(let H=0;H<s;H++)L[H]=0,U[H]=0,F[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:U,attributeDivisors:F,object:P,attributes:{},index:null}}function p(P,L,U,F){const H=l.attributes,B=L.attributes;let X=0;const j=U.getAttributes();for(const ht in j)if(j[ht].location>=0){const $=H[ht];let gt=B[ht];if(gt===void 0&&(ht==="instanceMatrix"&&P.instanceMatrix&&(gt=P.instanceMatrix),ht==="instanceColor"&&P.instanceColor&&(gt=P.instanceColor)),$===void 0||$.attribute!==gt||gt&&$.data!==gt.data)return!0;X++}return l.attributesNum!==X||l.index!==F}function v(P,L,U,F){const H={},B=L.attributes;let X=0;const j=U.getAttributes();for(const ht in j)if(j[ht].location>=0){let $=B[ht];$===void 0&&(ht==="instanceMatrix"&&P.instanceMatrix&&($=P.instanceMatrix),ht==="instanceColor"&&P.instanceColor&&($=P.instanceColor));const gt={};gt.attribute=$,$&&$.data&&(gt.data=$.data),H[ht]=gt,X++}l.attributes=H,l.attributesNum=X,l.index=F}function x(){const P=l.newAttributes;for(let L=0,U=P.length;L<U;L++)P[L]=0}function y(P){A(P,0)}function A(P,L){const U=l.newAttributes,F=l.enabledAttributes,H=l.attributeDivisors;U[P]=1,F[P]===0&&(n.enableVertexAttribArray(P),F[P]=1),H[P]!==L&&((i.isWebGL2?n:t.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,L),H[P]=L)}function M(){const P=l.newAttributes,L=l.enabledAttributes;for(let U=0,F=L.length;U<F;U++)L[U]!==P[U]&&(n.disableVertexAttribArray(U),L[U]=0)}function R(P,L,U,F,H,B,X){X===!0?n.vertexAttribIPointer(P,L,U,H,B):n.vertexAttribPointer(P,L,U,F,H,B)}function N(P,L,U,F){if(i.isWebGL2===!1&&(P.isInstancedMesh||F.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;x();const H=F.attributes,B=U.getAttributes(),X=L.defaultAttributeValues;for(const j in B){const ht=B[j];if(ht.location>=0){let W=H[j];if(W===void 0&&(j==="instanceMatrix"&&P.instanceMatrix&&(W=P.instanceMatrix),j==="instanceColor"&&P.instanceColor&&(W=P.instanceColor)),W!==void 0){const $=W.normalized,gt=W.itemSize,Tt=e.get(W);if(Tt===void 0)continue;const Mt=Tt.buffer,Ot=Tt.type,qt=Tt.bytesPerElement,At=i.isWebGL2===!0&&(Ot===n.INT||Ot===n.UNSIGNED_INT||W.gpuType===Cp);if(W.isInterleavedBufferAttribute){const Vt=W.data,I=Vt.stride,dt=W.offset;if(Vt.isInstancedInterleavedBuffer){for(let J=0;J<ht.locationSize;J++)A(ht.location+J,Vt.meshPerAttribute);P.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=Vt.meshPerAttribute*Vt.count)}else for(let J=0;J<ht.locationSize;J++)y(ht.location+J);n.bindBuffer(n.ARRAY_BUFFER,Mt);for(let J=0;J<ht.locationSize;J++)R(ht.location+J,gt/ht.locationSize,Ot,$,I*qt,(dt+gt/ht.locationSize*J)*qt,At)}else{if(W.isInstancedBufferAttribute){for(let Vt=0;Vt<ht.locationSize;Vt++)A(ht.location+Vt,W.meshPerAttribute);P.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let Vt=0;Vt<ht.locationSize;Vt++)y(ht.location+Vt);n.bindBuffer(n.ARRAY_BUFFER,Mt);for(let Vt=0;Vt<ht.locationSize;Vt++)R(ht.location+Vt,gt/ht.locationSize,Ot,$,gt*qt,gt/ht.locationSize*Vt*qt,At)}}else if(X!==void 0){const $=X[j];if($!==void 0)switch($.length){case 2:n.vertexAttrib2fv(ht.location,$);break;case 3:n.vertexAttrib3fv(ht.location,$);break;case 4:n.vertexAttrib4fv(ht.location,$);break;default:n.vertexAttrib1fv(ht.location,$)}}}}M()}function b(){Y();for(const P in o){const L=o[P];for(const U in L){const F=L[U];for(const H in F)m(F[H].object),delete F[H];delete L[U]}delete o[P]}}function E(P){if(o[P.id]===void 0)return;const L=o[P.id];for(const U in L){const F=L[U];for(const H in F)m(F[H].object),delete F[H];delete L[U]}delete o[P.id]}function O(P){for(const L in o){const U=o[L];if(U[P.id]===void 0)continue;const F=U[P.id];for(const H in F)m(F[H].object),delete F[H];delete U[P.id]}}function Y(){tt(),h=!0,l!==c&&(l=c,f(l.object))}function tt(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:u,reset:Y,resetDefaultState:tt,dispose:b,releaseStatesOfGeometry:E,releaseStatesOfProgram:O,initAttributes:x,enableAttribute:y,disableUnusedAttributes:M}}function jx(n,t,e,i){const s=i.isWebGL2;let r;function a(h){r=h}function o(h,u){n.drawArrays(r,h,u),e.update(u,r,1)}function c(h,u,d){if(d===0)return;let f,m;if(s)f=n,m="drawArraysInstanced";else if(f=t.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[m](r,h,u,d),e.update(u,r,d)}function l(h,u,d){if(d===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<d;m++)this.render(h[m],u[m]);else{f.multiDrawArraysWEBGL(r,h,0,u,0,d);let m=0;for(let _=0;_<d;_++)m+=u[_];e.update(m,r,1)}}this.setMode=a,this.render=o,this.renderInstances=c,this.renderMultiDraw=l}function Zx(n,t,e){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");i=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let o=e.precision!==void 0?e.precision:"highp";const c=r(o);c!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",c,"instead."),o=c);const l=a||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,u=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),d=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),_=n.getParameter(n.MAX_VERTEX_ATTRIBS),g=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),p=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),x=d>0,y=a||t.has("OES_texture_float"),A=x&&y,M=a?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:l,getMaxAnisotropy:s,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:f,maxCubemapSize:m,maxAttributes:_,maxVertexUniforms:g,maxVaryings:p,maxFragmentUniforms:v,vertexTextures:x,floatFragmentTextures:y,floatVertexTextures:A,maxSamples:M}}function Jx(n){const t=this;let e=null,i=0,s=!1,r=!1;const a=new ls,o=new se,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||i!==0||s;return s=d,i=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){const m=u.clippingPlanes,_=u.clipIntersection,g=u.clipShadows,p=n.get(u);if(!s||m===null||m.length===0||r&&!g)r?h(null):l();else{const v=r?0:i,x=v*4;let y=p.clippingState||null;c.value=y,y=h(m,d,x,f);for(let A=0;A!==x;++A)y[A]=e[A];p.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(u,d,f,m){const _=u!==null?u.length:0;let g=null;if(_!==0){if(g=c.value,m!==!0||g===null){const p=f+_*4,v=d.matrixWorldInverse;o.getNormalMatrix(v),(g===null||g.length<p)&&(g=new Float32Array(p));for(let x=0,y=f;x!==_;++x,y+=4)a.copy(u[x]).applyMatrix4(v,o),a.normal.toArray(g,y),g[y+3]=a.constant}c.value=g,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,g}}function $x(n){let t=new WeakMap;function e(a,o){return o===zl?a.mapping=yr:o===Bl&&(a.mapping=Mr),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===zl||o===Bl)if(t.has(a)){const c=t.get(a).texture;return e(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new h1(c.height/2);return l.fromEquirectangularTexture(n,a),t.set(a,l),a.addEventListener("dispose",s),e(l.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}class jp extends qp{constructor(t=-1,e=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-t,a=i+t,o=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const ar=4,md=[.125,.215,.35,.446,.526,.582],fs=20,il=new jp,gd=new wt;let sl=null,rl=0,al=0;const hs=(1+Math.sqrt(5))/2,ks=1/hs,_d=[new C(1,1,1),new C(-1,1,1),new C(1,1,-1),new C(-1,1,-1),new C(0,hs,ks),new C(0,hs,-ks),new C(ks,0,hs),new C(-ks,0,hs),new C(hs,ks,0),new C(-hs,ks,0)];class xd{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){sl=this._renderer.getRenderTarget(),rl=this._renderer.getActiveCubeFace(),al=this._renderer.getActiveMipmapLevel(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Md(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=yd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(sl,rl,al),t.scissorTest=!1,so(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===yr||t.mapping===Mr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),sl=this._renderer.getRenderTarget(),rl=this._renderer.getActiveCubeFace(),al=this._renderer.getActiveMipmapLevel();const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Nn,minFilter:Nn,generateMipmaps:!1,type:ca,format:Fn,colorSpace:wi,depthBuffer:!1},s=vd(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=vd(t,e,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Qx(r)),this._blurMaterial=tv(r,t,e)}return s}_compileMaterial(t){const e=new Me(this._lodPlanes[0],t);this._renderer.compile(e,il)}_sceneToCubeUV(t,e,i,s){const o=new _n(90,1,e,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(gd),h.toneMapping=Wi,h.autoClear=!1;const f=new Ci({name:"PMREM.Background",side:yn,depthWrite:!1,depthTest:!1}),m=new Me(new ce,f);let _=!1;const g=t.background;g?g.isColor&&(f.color.copy(g),t.background=null,_=!0):(f.color.copy(gd),_=!0);for(let p=0;p<6;p++){const v=p%3;v===0?(o.up.set(0,c[p],0),o.lookAt(l[p],0,0)):v===1?(o.up.set(0,0,c[p]),o.lookAt(0,l[p],0)):(o.up.set(0,c[p],0),o.lookAt(0,0,l[p]));const x=this._cubeSize;so(s,v*x,p>2?x:0,x,x),h.setRenderTarget(s),_&&h.render(m,o),h.render(t,o)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=g}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===yr||t.mapping===Mr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Md()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=yd());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new Me(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const c=this._cubeSize;so(e,0,0,3*c,2*c),i.setRenderTarget(e),i.render(a,il)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=_d[(s-1)%_d.length];this._blur(t,s-1,s,r,a)}e.autoClear=i}_blur(t,e,i,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,i,s,"latitudinal",r),this._halfBlur(a,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Me(this._lodPlanes[s],l),d=l.uniforms,f=this._sizeLods[i]-1,m=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*fs-1),_=r/m,g=isFinite(r)?1+Math.floor(h*_):fs;g>fs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${fs}`);const p=[];let v=0;for(let R=0;R<fs;++R){const N=R/_,b=Math.exp(-N*N/2);p.push(b),R===0?v+=b:R<g&&(v+=2*b)}for(let R=0;R<p.length;R++)p[R]=p[R]/v;d.envMap.value=t.texture,d.samples.value=g,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:x}=this;d.dTheta.value=m,d.mipInt.value=x-i;const y=this._sizeLods[s],A=3*y*(s>x-ar?s-x+ar:0),M=4*(this._cubeSize-y);so(e,A,M,3*y,2*y),c.setRenderTarget(e),c.render(u,il)}}function Qx(n){const t=[],e=[],i=[];let s=n;const r=n-ar+1+md.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let c=1/o;a>n-ar?c=md[a-n+ar-1]:a===0&&(c=0),i.push(c);const l=1/(o-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,m=6,_=3,g=2,p=1,v=new Float32Array(_*m*f),x=new Float32Array(g*m*f),y=new Float32Array(p*m*f);for(let M=0;M<f;M++){const R=M%3*2/3-1,N=M>2?0:-1,b=[R,N,0,R+2/3,N,0,R+2/3,N+1,0,R,N,0,R+2/3,N+1,0,R,N+1,0];v.set(b,_*m*M),x.set(d,g*m*M);const E=[M,M,M,M,M,M];y.set(E,p*m*M)}const A=new De;A.setAttribute("position",new En(v,_)),A.setAttribute("uv",new En(x,g)),A.setAttribute("faceIndex",new En(y,p)),t.push(A),s>ar&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function vd(n,t,e){const i=new vs(n,t,e);return i.texture.mapping=dc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function so(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function tv(n,t,e){const i=new Float32Array(fs),s=new C(0,1,0);return new Zi({name:"SphericalGaussianBlur",defines:{n:fs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Th(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function yd(){return new Zi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Th(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function Md(){return new Zi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Th(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function Th(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function ev(n){let t=new WeakMap,e=null;function i(o){if(o&&o.isTexture){const c=o.mapping,l=c===zl||c===Bl,h=c===yr||c===Mr;if(l||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let u=t.get(o);return e===null&&(e=new xd(n)),u=l?e.fromEquirectangular(o,u):e.fromCubemap(o,u),t.set(o,u),u.texture}else{if(t.has(o))return t.get(o).texture;{const u=o.image;if(l&&u&&u.height>0||h&&u&&s(u)){e===null&&(e=new xd(n));const d=l?e.fromEquirectangular(o):e.fromCubemap(o);return t.set(o,d),o.addEventListener("dispose",r),d.texture}else return null}}}return o}function s(o){let c=0;const l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function r(o){const c=o.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:a}}function nv(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(i){i.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(i){const s=e(i);return s===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function iv(n,t,e,i){const s={},r=new WeakMap;function a(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const m in d.attributes)t.remove(d.attributes[m]);for(const m in d.morphAttributes){const _=d.morphAttributes[m];for(let g=0,p=_.length;g<p;g++)t.remove(_[g])}d.removeEventListener("dispose",a),delete s[d.id];const f=r.get(d);f&&(t.remove(f),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,e.memory.geometries++),d}function c(u){const d=u.attributes;for(const m in d)t.update(d[m],n.ARRAY_BUFFER);const f=u.morphAttributes;for(const m in f){const _=f[m];for(let g=0,p=_.length;g<p;g++)t.update(_[g],n.ARRAY_BUFFER)}}function l(u){const d=[],f=u.index,m=u.attributes.position;let _=0;if(f!==null){const v=f.array;_=f.version;for(let x=0,y=v.length;x<y;x+=3){const A=v[x+0],M=v[x+1],R=v[x+2];d.push(A,M,M,R,R,A)}}else if(m!==void 0){const v=m.array;_=m.version;for(let x=0,y=v.length/3-1;x<y;x+=3){const A=x+0,M=x+1,R=x+2;d.push(A,M,M,R,R,A)}}else return;const g=new(zp(d)?Wp:Vp)(d,1);g.version=_;const p=r.get(u);p&&t.remove(p),r.set(u,g)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return r.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function sv(n,t,e,i){const s=i.isWebGL2;let r;function a(f){r=f}let o,c;function l(f){o=f.type,c=f.bytesPerElement}function h(f,m){n.drawElements(r,m,o,f*c),e.update(m,r,1)}function u(f,m,_){if(_===0)return;let g,p;if(s)g=n,p="drawElementsInstanced";else if(g=t.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[p](r,m,o,f*c,_),e.update(m,r,_)}function d(f,m,_){if(_===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<_;p++)this.render(f[p]/c,m[p]);else{g.multiDrawElementsWEBGL(r,m,0,o,f,0,_);let p=0;for(let v=0;v<_;v++)p+=m[v];e.update(p,r,1)}}this.setMode=a,this.setIndex=l,this.render=h,this.renderInstances=u,this.renderMultiDraw=d}function rv(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(e.calls++,a){case n.TRIANGLES:e.triangles+=o*(r/3);break;case n.LINES:e.lines+=o*(r/2);break;case n.LINE_STRIP:e.lines+=o*(r-1);break;case n.LINE_LOOP:e.lines+=o*r;break;case n.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function av(n,t){return n[0]-t[0]}function ov(n,t){return Math.abs(t[1])-Math.abs(n[1])}function cv(n,t,e){const i={},s=new Float32Array(8),r=new WeakMap,a=new ye,o=[];for(let l=0;l<8;l++)o[l]=[l,0];function c(l,h,u){const d=l.morphTargetInfluences;if(t.isWebGL2===!0){const f=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,m=f!==void 0?f.length:0;let _=r.get(h);if(_===void 0||_.count!==m){let P=function(){Y.dispose(),r.delete(h),h.removeEventListener("dispose",P)};_!==void 0&&_.texture.dispose();const v=h.morphAttributes.position!==void 0,x=h.morphAttributes.normal!==void 0,y=h.morphAttributes.color!==void 0,A=h.morphAttributes.position||[],M=h.morphAttributes.normal||[],R=h.morphAttributes.color||[];let N=0;v===!0&&(N=1),x===!0&&(N=2),y===!0&&(N=3);let b=h.attributes.position.count*N,E=1;b>t.maxTextureSize&&(E=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);const O=new Float32Array(b*E*4*m),Y=new Hp(O,b,E,m);Y.type=Si,Y.needsUpdate=!0;const tt=N*4;for(let L=0;L<m;L++){const U=A[L],F=M[L],H=R[L],B=b*E*4*L;for(let X=0;X<U.count;X++){const j=X*tt;v===!0&&(a.fromBufferAttribute(U,X),O[B+j+0]=a.x,O[B+j+1]=a.y,O[B+j+2]=a.z,O[B+j+3]=0),x===!0&&(a.fromBufferAttribute(F,X),O[B+j+4]=a.x,O[B+j+5]=a.y,O[B+j+6]=a.z,O[B+j+7]=0),y===!0&&(a.fromBufferAttribute(H,X),O[B+j+8]=a.x,O[B+j+9]=a.y,O[B+j+10]=a.z,O[B+j+11]=H.itemSize===4?a.w:1)}}_={count:m,texture:Y,size:new nt(b,E)},r.set(h,_),h.addEventListener("dispose",P)}let g=0;for(let v=0;v<d.length;v++)g+=d[v];const p=h.morphTargetsRelative?1:1-g;u.getUniforms().setValue(n,"morphTargetBaseInfluence",p),u.getUniforms().setValue(n,"morphTargetInfluences",d),u.getUniforms().setValue(n,"morphTargetsTexture",_.texture,e),u.getUniforms().setValue(n,"morphTargetsTextureSize",_.size)}else{const f=d===void 0?0:d.length;let m=i[h.id];if(m===void 0||m.length!==f){m=[];for(let x=0;x<f;x++)m[x]=[x,0];i[h.id]=m}for(let x=0;x<f;x++){const y=m[x];y[0]=x,y[1]=d[x]}m.sort(ov);for(let x=0;x<8;x++)x<f&&m[x][1]?(o[x][0]=m[x][0],o[x][1]=m[x][1]):(o[x][0]=Number.MAX_SAFE_INTEGER,o[x][1]=0);o.sort(av);const _=h.morphAttributes.position,g=h.morphAttributes.normal;let p=0;for(let x=0;x<8;x++){const y=o[x],A=y[0],M=y[1];A!==Number.MAX_SAFE_INTEGER&&M?(_&&h.getAttribute("morphTarget"+x)!==_[A]&&h.setAttribute("morphTarget"+x,_[A]),g&&h.getAttribute("morphNormal"+x)!==g[A]&&h.setAttribute("morphNormal"+x,g[A]),s[x]=M,p+=M):(_&&h.hasAttribute("morphTarget"+x)===!0&&h.deleteAttribute("morphTarget"+x),g&&h.hasAttribute("morphNormal"+x)===!0&&h.deleteAttribute("morphNormal"+x),s[x]=0)}const v=h.morphTargetsRelative?1:1-p;u.getUniforms().setValue(n,"morphTargetBaseInfluence",v),u.getUniforms().setValue(n,"morphTargetInfluences",s)}}return{update:c}}function lv(n,t,e,i){let s=new WeakMap;function r(c){const l=i.render.frame,h=c.geometry,u=t.get(c,h);if(s.get(u)!==l&&(t.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return u}function a(){s=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:a}}class Zp extends dn{constructor(t,e,i,s,r,a,o,c,l,h){if(h=h!==void 0?h:gs,h!==gs&&h!==Sr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===gs&&(i=ki),i===void 0&&h===Sr&&(i=ms),super(null,s,r,a,o,c,h,i,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:sn,this.minFilter=c!==void 0?c:sn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Jp=new dn,$p=new Zp(1,1);$p.compareFunction=Fp;const Qp=new Hp,t0=new Yg,e0=new Yp,Sd=[],bd=[],Ed=new Float32Array(16),wd=new Float32Array(9),Td=new Float32Array(4);function Ir(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let r=Sd[s];if(r===void 0&&(r=new Float32Array(s),Sd[s]=r),t!==0){i.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,n[a].toArray(r,o)}return r}function je(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Ze(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function mc(n,t){let e=bd[t];e===void 0&&(e=new Int32Array(t),bd[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function hv(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function uv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(je(e,t))return;n.uniform2fv(this.addr,t),Ze(e,t)}}function dv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(je(e,t))return;n.uniform3fv(this.addr,t),Ze(e,t)}}function fv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(je(e,t))return;n.uniform4fv(this.addr,t),Ze(e,t)}}function pv(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(je(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Ze(e,t)}else{if(je(e,i))return;Td.set(i),n.uniformMatrix2fv(this.addr,!1,Td),Ze(e,i)}}function mv(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(je(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Ze(e,t)}else{if(je(e,i))return;wd.set(i),n.uniformMatrix3fv(this.addr,!1,wd),Ze(e,i)}}function gv(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(je(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Ze(e,t)}else{if(je(e,i))return;Ed.set(i),n.uniformMatrix4fv(this.addr,!1,Ed),Ze(e,i)}}function _v(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function xv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(je(e,t))return;n.uniform2iv(this.addr,t),Ze(e,t)}}function vv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(je(e,t))return;n.uniform3iv(this.addr,t),Ze(e,t)}}function yv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(je(e,t))return;n.uniform4iv(this.addr,t),Ze(e,t)}}function Mv(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function Sv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(je(e,t))return;n.uniform2uiv(this.addr,t),Ze(e,t)}}function bv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(je(e,t))return;n.uniform3uiv(this.addr,t),Ze(e,t)}}function Ev(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(je(e,t))return;n.uniform4uiv(this.addr,t),Ze(e,t)}}function wv(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);const r=this.type===n.SAMPLER_2D_SHADOW?$p:Jp;e.setTexture2D(t||r,s)}function Tv(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||t0,s)}function Av(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||e0,s)}function Rv(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||Qp,s)}function Cv(n){switch(n){case 5126:return hv;case 35664:return uv;case 35665:return dv;case 35666:return fv;case 35674:return pv;case 35675:return mv;case 35676:return gv;case 5124:case 35670:return _v;case 35667:case 35671:return xv;case 35668:case 35672:return vv;case 35669:case 35673:return yv;case 5125:return Mv;case 36294:return Sv;case 36295:return bv;case 36296:return Ev;case 35678:case 36198:case 36298:case 36306:case 35682:return wv;case 35679:case 36299:case 36307:return Tv;case 35680:case 36300:case 36308:case 36293:return Av;case 36289:case 36303:case 36311:case 36292:return Rv}}function Pv(n,t){n.uniform1fv(this.addr,t)}function Lv(n,t){const e=Ir(t,this.size,2);n.uniform2fv(this.addr,e)}function Iv(n,t){const e=Ir(t,this.size,3);n.uniform3fv(this.addr,e)}function Dv(n,t){const e=Ir(t,this.size,4);n.uniform4fv(this.addr,e)}function Uv(n,t){const e=Ir(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function Nv(n,t){const e=Ir(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function Ov(n,t){const e=Ir(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function Fv(n,t){n.uniform1iv(this.addr,t)}function zv(n,t){n.uniform2iv(this.addr,t)}function Bv(n,t){n.uniform3iv(this.addr,t)}function kv(n,t){n.uniform4iv(this.addr,t)}function Hv(n,t){n.uniform1uiv(this.addr,t)}function Gv(n,t){n.uniform2uiv(this.addr,t)}function Vv(n,t){n.uniform3uiv(this.addr,t)}function Wv(n,t){n.uniform4uiv(this.addr,t)}function Xv(n,t,e){const i=this.cache,s=t.length,r=mc(e,s);je(i,r)||(n.uniform1iv(this.addr,r),Ze(i,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||Jp,r[a])}function qv(n,t,e){const i=this.cache,s=t.length,r=mc(e,s);je(i,r)||(n.uniform1iv(this.addr,r),Ze(i,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||t0,r[a])}function Yv(n,t,e){const i=this.cache,s=t.length,r=mc(e,s);je(i,r)||(n.uniform1iv(this.addr,r),Ze(i,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||e0,r[a])}function Kv(n,t,e){const i=this.cache,s=t.length,r=mc(e,s);je(i,r)||(n.uniform1iv(this.addr,r),Ze(i,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Qp,r[a])}function jv(n){switch(n){case 5126:return Pv;case 35664:return Lv;case 35665:return Iv;case 35666:return Dv;case 35674:return Uv;case 35675:return Nv;case 35676:return Ov;case 5124:case 35670:return Fv;case 35667:case 35671:return zv;case 35668:case 35672:return Bv;case 35669:case 35673:return kv;case 5125:return Hv;case 36294:return Gv;case 36295:return Vv;case 36296:return Wv;case 35678:case 36198:case 36298:case 36306:case 35682:return Xv;case 35679:case 36299:case 36307:return qv;case 35680:case 36300:case 36308:case 36293:return Yv;case 36289:case 36303:case 36311:case 36292:return Kv}}class Zv{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Cv(e.type)}}class Jv{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=jv(e.type)}}class $v{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],i)}}}const ol=/(\w+)(\])?(\[|\.)?/g;function Ad(n,t){n.seq.push(t),n.map[t.id]=t}function Qv(n,t,e){const i=n.name,s=i.length;for(ol.lastIndex=0;;){const r=ol.exec(i),a=ol.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){Ad(e,l===void 0?new Zv(o,n,t):new Jv(o,n,t));break}else{let u=e.map[o];u===void 0&&(u=new $v(o),Ad(e,u)),e=u}}}class No{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);Qv(r,a,this)}}setValue(t,e,i,s){const r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],c=i[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&i.push(a)}return i}}function Rd(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const t2=37297;let e2=0;function n2(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}function i2(n){const t=xe.getPrimaries(xe.workingColorSpace),e=xe.getPrimaries(n);let i;switch(t===e?i="":t===qo&&e===Xo?i="LinearDisplayP3ToLinearSRGB":t===Xo&&e===qo&&(i="LinearSRGBToLinearDisplayP3"),n){case wi:case pc:return[i,"LinearTransferOETF"];case tn:case Sh:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Cd(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+n2(n.getShaderSource(t),a)}else return s}function s2(n,t){const e=i2(t);return`vec4 ${n}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function r2(n,t){let e;switch(t){case Qm:e="Linear";break;case tg:e="Reinhard";break;case eg:e="OptimizedCineon";break;case Ap:e="ACESFilmic";break;case ig:e="AgX";break;case ng:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function a2(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(or).join(`
`)}function o2(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(or).join(`
`)}function c2(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function l2(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(t,s),a=r.name;let o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:n.getAttribLocation(t,a),locationSize:o}}return e}function or(n){return n!==""}function Pd(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ld(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const h2=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xl(n){return n.replace(h2,d2)}const u2=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function d2(n,t){let e=Qt[t];if(e===void 0){const i=u2.get(t);if(i!==void 0)e=Qt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Xl(e)}const f2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Id(n){return n.replace(f2,p2)}function p2(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Dd(n){let t="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function m2(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===wp?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===Tp?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===vi&&(t="SHADOWMAP_TYPE_VSM"),t}function g2(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case yr:case Mr:t="ENVMAP_TYPE_CUBE";break;case dc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function _2(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Mr:t="ENVMAP_MODE_REFRACTION";break}return t}function x2(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case uc:t="ENVMAP_BLENDING_MULTIPLY";break;case Jm:t="ENVMAP_BLENDING_MIX";break;case $m:t="ENVMAP_BLENDING_ADD";break}return t}function v2(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function y2(n,t,e,i){const s=n.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const c=m2(e),l=g2(e),h=_2(e),u=x2(e),d=v2(e),f=e.isWebGL2?"":a2(e),m=o2(e),_=c2(r),g=s.createProgram();let p,v,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(or).join(`
`),p.length>0&&(p+=`
`),v=[f,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(or).join(`
`),v.length>0&&(v+=`
`)):(p=[Dd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(or).join(`
`),v=[f,Dd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Wi?"#define TONE_MAPPING":"",e.toneMapping!==Wi?Qt.tonemapping_pars_fragment:"",e.toneMapping!==Wi?r2("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Qt.colorspace_pars_fragment,s2("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(or).join(`
`)),a=Xl(a),a=Pd(a,e),a=Ld(a,e),o=Xl(o),o=Pd(o,e),o=Ld(o,e),a=Id(a),o=Id(o),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,p=[m,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,v=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===Ju?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ju?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const y=x+p+a,A=x+v+o,M=Rd(s,s.VERTEX_SHADER,y),R=Rd(s,s.FRAGMENT_SHADER,A);s.attachShader(g,M),s.attachShader(g,R),e.index0AttributeName!==void 0?s.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function N(Y){if(n.debug.checkShaderErrors){const tt=s.getProgramInfoLog(g).trim(),P=s.getShaderInfoLog(M).trim(),L=s.getShaderInfoLog(R).trim();let U=!0,F=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(U=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,g,M,R);else{const H=Cd(s,M,"vertex"),B=Cd(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Program Info Log: `+tt+`
`+H+`
`+B)}else tt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",tt):(P===""||L==="")&&(F=!1);F&&(Y.diagnostics={runnable:U,programLog:tt,vertexShader:{log:P,prefix:p},fragmentShader:{log:L,prefix:v}})}s.deleteShader(M),s.deleteShader(R),b=new No(s,g),E=l2(s,g)}let b;this.getUniforms=function(){return b===void 0&&N(this),b};let E;this.getAttributes=function(){return E===void 0&&N(this),E};let O=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return O===!1&&(O=s.getProgramParameter(g,t2)),O},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=e2++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=M,this.fragmentShader=R,this}let M2=0;class S2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new b2(t),e.set(t,i)),i}}class b2{constructor(t){this.id=M2++,this.code=t,this.usedTimes=0}}function E2(n,t,e,i,s,r,a){const o=new Eh,c=new S2,l=[],h=s.isWebGL2,u=s.logarithmicDepthBuffer,d=s.vertexTextures;let f=s.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(b){return b===0?"uv":`uv${b}`}function g(b,E,O,Y,tt){const P=Y.fog,L=tt.geometry,U=b.isMeshStandardMaterial?Y.environment:null,F=(b.isMeshStandardMaterial?e:t).get(b.envMap||U),H=F&&F.mapping===dc?F.image.height:null,B=m[b.type];b.precision!==null&&(f=s.getMaxPrecision(b.precision),f!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",f,"instead."));const X=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,j=X!==void 0?X.length:0;let ht=0;L.morphAttributes.position!==void 0&&(ht=1),L.morphAttributes.normal!==void 0&&(ht=2),L.morphAttributes.color!==void 0&&(ht=3);let W,$,gt,Tt;if(B){const fn=ei[B];W=fn.vertexShader,$=fn.fragmentShader}else W=b.vertexShader,$=b.fragmentShader,c.update(b),gt=c.getVertexShaderID(b),Tt=c.getFragmentShaderID(b);const Mt=n.getRenderTarget(),Ot=tt.isInstancedMesh===!0,qt=tt.isBatchedMesh===!0,At=!!b.map,Vt=!!b.matcap,I=!!F,dt=!!b.aoMap,J=!!b.lightMap,lt=!!b.bumpMap,Z=!!b.normalMap,Ct=!!b.displacementMap,vt=!!b.emissiveMap,w=!!b.metalnessMap,S=!!b.roughnessMap,k=b.anisotropy>0,at=b.clearcoat>0,it=b.iridescence>0,et=b.sheen>0,Et=b.transmission>0,mt=k&&!!b.anisotropyMap,St=at&&!!b.clearcoatMap,Dt=at&&!!b.clearcoatNormalMap,jt=at&&!!b.clearcoatRoughnessMap,st=it&&!!b.iridescenceMap,he=it&&!!b.iridescenceThicknessMap,oe=et&&!!b.sheenColorMap,Wt=et&&!!b.sheenRoughnessMap,It=!!b.specularMap,bt=!!b.specularColorMap,$t=!!b.specularIntensityMap,pe=Et&&!!b.transmissionMap,Oe=Et&&!!b.thicknessMap,ne=!!b.gradientMap,ft=!!b.alphaMap,D=b.alphaTest>0,_t=!!b.alphaHash,xt=!!b.extensions,Ft=!!L.attributes.uv1,Ut=!!L.attributes.uv2,Se=!!L.attributes.uv3;let be=Wi;return b.toneMapped&&(Mt===null||Mt.isXRRenderTarget===!0)&&(be=n.toneMapping),{isWebGL2:h,shaderID:B,shaderType:b.type,shaderName:b.name,vertexShader:W,fragmentShader:$,defines:b.defines,customVertexShaderID:gt,customFragmentShaderID:Tt,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:f,batching:qt,instancing:Ot,instancingColor:Ot&&tt.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:Mt===null?n.outputColorSpace:Mt.isXRRenderTarget===!0?Mt.texture.colorSpace:wi,map:At,matcap:Vt,envMap:I,envMapMode:I&&F.mapping,envMapCubeUVHeight:H,aoMap:dt,lightMap:J,bumpMap:lt,normalMap:Z,displacementMap:d&&Ct,emissiveMap:vt,normalMapObjectSpace:Z&&b.normalMapType===yg,normalMapTangentSpace:Z&&b.normalMapType===fc,metalnessMap:w,roughnessMap:S,anisotropy:k,anisotropyMap:mt,clearcoat:at,clearcoatMap:St,clearcoatNormalMap:Dt,clearcoatRoughnessMap:jt,iridescence:it,iridescenceMap:st,iridescenceThicknessMap:he,sheen:et,sheenColorMap:oe,sheenRoughnessMap:Wt,specularMap:It,specularColorMap:bt,specularIntensityMap:$t,transmission:Et,transmissionMap:pe,thicknessMap:Oe,gradientMap:ne,opaque:b.transparent===!1&&b.blending===dr,alphaMap:ft,alphaTest:D,alphaHash:_t,combine:b.combine,mapUv:At&&_(b.map.channel),aoMapUv:dt&&_(b.aoMap.channel),lightMapUv:J&&_(b.lightMap.channel),bumpMapUv:lt&&_(b.bumpMap.channel),normalMapUv:Z&&_(b.normalMap.channel),displacementMapUv:Ct&&_(b.displacementMap.channel),emissiveMapUv:vt&&_(b.emissiveMap.channel),metalnessMapUv:w&&_(b.metalnessMap.channel),roughnessMapUv:S&&_(b.roughnessMap.channel),anisotropyMapUv:mt&&_(b.anisotropyMap.channel),clearcoatMapUv:St&&_(b.clearcoatMap.channel),clearcoatNormalMapUv:Dt&&_(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:jt&&_(b.clearcoatRoughnessMap.channel),iridescenceMapUv:st&&_(b.iridescenceMap.channel),iridescenceThicknessMapUv:he&&_(b.iridescenceThicknessMap.channel),sheenColorMapUv:oe&&_(b.sheenColorMap.channel),sheenRoughnessMapUv:Wt&&_(b.sheenRoughnessMap.channel),specularMapUv:It&&_(b.specularMap.channel),specularColorMapUv:bt&&_(b.specularColorMap.channel),specularIntensityMapUv:$t&&_(b.specularIntensityMap.channel),transmissionMapUv:pe&&_(b.transmissionMap.channel),thicknessMapUv:Oe&&_(b.thicknessMap.channel),alphaMapUv:ft&&_(b.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(Z||k),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,vertexUv1s:Ft,vertexUv2s:Ut,vertexUv3s:Se,pointsUvs:tt.isPoints===!0&&!!L.attributes.uv&&(At||ft),fog:!!P,useFog:b.fog===!0,fogExp2:P&&P.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:tt.isSkinnedMesh===!0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:j,morphTextureStride:ht,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:b.dithering,shadowMapEnabled:n.shadowMap.enabled&&O.length>0,shadowMapType:n.shadowMap.type,toneMapping:be,useLegacyLights:n._useLegacyLights,decodeVideoTexture:At&&b.map.isVideoTexture===!0&&xe.getTransfer(b.map.colorSpace)===Re,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===vn,flipSided:b.side===yn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionDerivatives:xt&&b.extensions.derivatives===!0,extensionFragDepth:xt&&b.extensions.fragDepth===!0,extensionDrawBuffers:xt&&b.extensions.drawBuffers===!0,extensionShaderTextureLOD:xt&&b.extensions.shaderTextureLOD===!0,extensionClipCullDistance:xt&&b.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()}}function p(b){const E=[];if(b.shaderID?E.push(b.shaderID):(E.push(b.customVertexShaderID),E.push(b.customFragmentShaderID)),b.defines!==void 0)for(const O in b.defines)E.push(O),E.push(b.defines[O]);return b.isRawShaderMaterial===!1&&(v(E,b),x(E,b),E.push(n.outputColorSpace)),E.push(b.customProgramCacheKey),E.join()}function v(b,E){b.push(E.precision),b.push(E.outputColorSpace),b.push(E.envMapMode),b.push(E.envMapCubeUVHeight),b.push(E.mapUv),b.push(E.alphaMapUv),b.push(E.lightMapUv),b.push(E.aoMapUv),b.push(E.bumpMapUv),b.push(E.normalMapUv),b.push(E.displacementMapUv),b.push(E.emissiveMapUv),b.push(E.metalnessMapUv),b.push(E.roughnessMapUv),b.push(E.anisotropyMapUv),b.push(E.clearcoatMapUv),b.push(E.clearcoatNormalMapUv),b.push(E.clearcoatRoughnessMapUv),b.push(E.iridescenceMapUv),b.push(E.iridescenceThicknessMapUv),b.push(E.sheenColorMapUv),b.push(E.sheenRoughnessMapUv),b.push(E.specularMapUv),b.push(E.specularColorMapUv),b.push(E.specularIntensityMapUv),b.push(E.transmissionMapUv),b.push(E.thicknessMapUv),b.push(E.combine),b.push(E.fogExp2),b.push(E.sizeAttenuation),b.push(E.morphTargetsCount),b.push(E.morphAttributeCount),b.push(E.numDirLights),b.push(E.numPointLights),b.push(E.numSpotLights),b.push(E.numSpotLightMaps),b.push(E.numHemiLights),b.push(E.numRectAreaLights),b.push(E.numDirLightShadows),b.push(E.numPointLightShadows),b.push(E.numSpotLightShadows),b.push(E.numSpotLightShadowsWithMaps),b.push(E.numLightProbes),b.push(E.shadowMapType),b.push(E.toneMapping),b.push(E.numClippingPlanes),b.push(E.numClipIntersection),b.push(E.depthPacking)}function x(b,E){o.disableAll(),E.isWebGL2&&o.enable(0),E.supportsVertexTextures&&o.enable(1),E.instancing&&o.enable(2),E.instancingColor&&o.enable(3),E.matcap&&o.enable(4),E.envMap&&o.enable(5),E.normalMapObjectSpace&&o.enable(6),E.normalMapTangentSpace&&o.enable(7),E.clearcoat&&o.enable(8),E.iridescence&&o.enable(9),E.alphaTest&&o.enable(10),E.vertexColors&&o.enable(11),E.vertexAlphas&&o.enable(12),E.vertexUv1s&&o.enable(13),E.vertexUv2s&&o.enable(14),E.vertexUv3s&&o.enable(15),E.vertexTangents&&o.enable(16),E.anisotropy&&o.enable(17),E.alphaHash&&o.enable(18),E.batching&&o.enable(19),b.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.skinning&&o.enable(4),E.morphTargets&&o.enable(5),E.morphNormals&&o.enable(6),E.morphColors&&o.enable(7),E.premultipliedAlpha&&o.enable(8),E.shadowMapEnabled&&o.enable(9),E.useLegacyLights&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),b.push(o.mask)}function y(b){const E=m[b.type];let O;if(E){const Y=ei[E];O=a1.clone(Y.uniforms)}else O=b.uniforms;return O}function A(b,E){let O;for(let Y=0,tt=l.length;Y<tt;Y++){const P=l[Y];if(P.cacheKey===E){O=P,++O.usedTimes;break}}return O===void 0&&(O=new y2(n,E,b,r),l.push(O)),O}function M(b){if(--b.usedTimes===0){const E=l.indexOf(b);l[E]=l[l.length-1],l.pop(),b.destroy()}}function R(b){c.remove(b)}function N(){c.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:y,acquireProgram:A,releaseProgram:M,releaseShaderCache:R,programs:l,dispose:N}}function w2(){let n=new WeakMap;function t(r){let a=n.get(r);return a===void 0&&(a={},n.set(r,a)),a}function e(r){n.delete(r)}function i(r,a,o){n.get(r)[a]=o}function s(){n=new WeakMap}return{get:t,remove:e,update:i,dispose:s}}function T2(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function Ud(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Nd(){const n=[];let t=0;const e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function a(u,d,f,m,_,g){let p=n[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:m,renderOrder:u.renderOrder,z:_,group:g},n[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=m,p.renderOrder=u.renderOrder,p.z=_,p.group=g),t++,p}function o(u,d,f,m,_,g){const p=a(u,d,f,m,_,g);f.transmission>0?i.push(p):f.transparent===!0?s.push(p):e.push(p)}function c(u,d,f,m,_,g){const p=a(u,d,f,m,_,g);f.transmission>0?i.unshift(p):f.transparent===!0?s.unshift(p):e.unshift(p)}function l(u,d){e.length>1&&e.sort(u||T2),i.length>1&&i.sort(d||Ud),s.length>1&&s.sort(d||Ud)}function h(){for(let u=t,d=n.length;u<d;u++){const f=n[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:o,unshift:c,finish:h,sort:l}}function A2(){let n=new WeakMap;function t(i,s){const r=n.get(i);let a;return r===void 0?(a=new Nd,n.set(i,[a])):s>=r.length?(a=new Nd,r.push(a)):a=r[s],a}function e(){n=new WeakMap}return{get:t,dispose:e}}function R2(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new C,color:new wt};break;case"SpotLight":e={position:new C,direction:new C,color:new wt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new C,color:new wt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new C,skyColor:new wt,groundColor:new wt};break;case"RectAreaLight":e={color:new wt,position:new C,halfWidth:new C,halfHeight:new C};break}return n[t.id]=e,e}}}function C2(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let P2=0;function L2(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function I2(n,t){const e=new R2,i=C2(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new C);const r=new C,a=new zt,o=new zt;function c(h,u){let d=0,f=0,m=0;for(let Y=0;Y<9;Y++)s.probe[Y].set(0,0,0);let _=0,g=0,p=0,v=0,x=0,y=0,A=0,M=0,R=0,N=0,b=0;h.sort(L2);const E=u===!0?Math.PI:1;for(let Y=0,tt=h.length;Y<tt;Y++){const P=h[Y],L=P.color,U=P.intensity,F=P.distance,H=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)d+=L.r*U*E,f+=L.g*U*E,m+=L.b*U*E;else if(P.isLightProbe){for(let B=0;B<9;B++)s.probe[B].addScaledVector(P.sh.coefficients[B],U);b++}else if(P.isDirectionalLight){const B=e.get(P);if(B.color.copy(P.color).multiplyScalar(P.intensity*E),P.castShadow){const X=P.shadow,j=i.get(P);j.shadowBias=X.bias,j.shadowNormalBias=X.normalBias,j.shadowRadius=X.radius,j.shadowMapSize=X.mapSize,s.directionalShadow[_]=j,s.directionalShadowMap[_]=H,s.directionalShadowMatrix[_]=P.shadow.matrix,y++}s.directional[_]=B,_++}else if(P.isSpotLight){const B=e.get(P);B.position.setFromMatrixPosition(P.matrixWorld),B.color.copy(L).multiplyScalar(U*E),B.distance=F,B.coneCos=Math.cos(P.angle),B.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),B.decay=P.decay,s.spot[p]=B;const X=P.shadow;if(P.map&&(s.spotLightMap[R]=P.map,R++,X.updateMatrices(P),P.castShadow&&N++),s.spotLightMatrix[p]=X.matrix,P.castShadow){const j=i.get(P);j.shadowBias=X.bias,j.shadowNormalBias=X.normalBias,j.shadowRadius=X.radius,j.shadowMapSize=X.mapSize,s.spotShadow[p]=j,s.spotShadowMap[p]=H,M++}p++}else if(P.isRectAreaLight){const B=e.get(P);B.color.copy(L).multiplyScalar(U),B.halfWidth.set(P.width*.5,0,0),B.halfHeight.set(0,P.height*.5,0),s.rectArea[v]=B,v++}else if(P.isPointLight){const B=e.get(P);if(B.color.copy(P.color).multiplyScalar(P.intensity*E),B.distance=P.distance,B.decay=P.decay,P.castShadow){const X=P.shadow,j=i.get(P);j.shadowBias=X.bias,j.shadowNormalBias=X.normalBias,j.shadowRadius=X.radius,j.shadowMapSize=X.mapSize,j.shadowCameraNear=X.camera.near,j.shadowCameraFar=X.camera.far,s.pointShadow[g]=j,s.pointShadowMap[g]=H,s.pointShadowMatrix[g]=P.shadow.matrix,A++}s.point[g]=B,g++}else if(P.isHemisphereLight){const B=e.get(P);B.skyColor.copy(P.color).multiplyScalar(U*E),B.groundColor.copy(P.groundColor).multiplyScalar(U*E),s.hemi[x]=B,x++}}v>0&&(t.isWebGL2?n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=pt.LTC_FLOAT_1,s.rectAreaLTC2=pt.LTC_FLOAT_2):(s.rectAreaLTC1=pt.LTC_HALF_1,s.rectAreaLTC2=pt.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=pt.LTC_FLOAT_1,s.rectAreaLTC2=pt.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=pt.LTC_HALF_1,s.rectAreaLTC2=pt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=d,s.ambient[1]=f,s.ambient[2]=m;const O=s.hash;(O.directionalLength!==_||O.pointLength!==g||O.spotLength!==p||O.rectAreaLength!==v||O.hemiLength!==x||O.numDirectionalShadows!==y||O.numPointShadows!==A||O.numSpotShadows!==M||O.numSpotMaps!==R||O.numLightProbes!==b)&&(s.directional.length=_,s.spot.length=p,s.rectArea.length=v,s.point.length=g,s.hemi.length=x,s.directionalShadow.length=y,s.directionalShadowMap.length=y,s.pointShadow.length=A,s.pointShadowMap.length=A,s.spotShadow.length=M,s.spotShadowMap.length=M,s.directionalShadowMatrix.length=y,s.pointShadowMatrix.length=A,s.spotLightMatrix.length=M+R-N,s.spotLightMap.length=R,s.numSpotLightShadowsWithMaps=N,s.numLightProbes=b,O.directionalLength=_,O.pointLength=g,O.spotLength=p,O.rectAreaLength=v,O.hemiLength=x,O.numDirectionalShadows=y,O.numPointShadows=A,O.numSpotShadows=M,O.numSpotMaps=R,O.numLightProbes=b,s.version=P2++)}function l(h,u){let d=0,f=0,m=0,_=0,g=0;const p=u.matrixWorldInverse;for(let v=0,x=h.length;v<x;v++){const y=h[v];if(y.isDirectionalLight){const A=s.directional[d];A.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(p),d++}else if(y.isSpotLight){const A=s.spot[m];A.position.setFromMatrixPosition(y.matrixWorld),A.position.applyMatrix4(p),A.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(p),m++}else if(y.isRectAreaLight){const A=s.rectArea[_];A.position.setFromMatrixPosition(y.matrixWorld),A.position.applyMatrix4(p),o.identity(),a.copy(y.matrixWorld),a.premultiply(p),o.extractRotation(a),A.halfWidth.set(y.width*.5,0,0),A.halfHeight.set(0,y.height*.5,0),A.halfWidth.applyMatrix4(o),A.halfHeight.applyMatrix4(o),_++}else if(y.isPointLight){const A=s.point[f];A.position.setFromMatrixPosition(y.matrixWorld),A.position.applyMatrix4(p),f++}else if(y.isHemisphereLight){const A=s.hemi[g];A.direction.setFromMatrixPosition(y.matrixWorld),A.direction.transformDirection(p),g++}}}return{setup:c,setupView:l,state:s}}function Od(n,t){const e=new I2(n,t),i=[],s=[];function r(){i.length=0,s.length=0}function a(u){i.push(u)}function o(u){s.push(u)}function c(u){e.setup(i,u)}function l(u){e.setupView(i,u)}return{init:r,state:{lightsArray:i,shadowsArray:s,lights:e},setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function D2(n,t){let e=new WeakMap;function i(r,a=0){const o=e.get(r);let c;return o===void 0?(c=new Od(n,t),e.set(r,[c])):a>=o.length?(c=new Od(n,t),o.push(c)):c=o[a],c}function s(){e=new WeakMap}return{get:i,dispose:s}}class U2 extends ci{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=xg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class N2 extends ci{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const O2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,F2=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function z2(n,t,e){let i=new wh;const s=new nt,r=new nt,a=new ye,o=new U2({depthPacking:vg}),c=new N2,l={},h=e.maxTextureSize,u={[ji]:yn,[yn]:ji,[vn]:vn},d=new Zi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new nt},radius:{value:4}},vertexShader:O2,fragmentShader:F2}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const m=new De;m.setAttribute("position",new En(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Me(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=wp;let p=this.type;this.render=function(M,R,N){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||M.length===0)return;const b=n.getRenderTarget(),E=n.getActiveCubeFace(),O=n.getActiveMipmapLevel(),Y=n.state;Y.setBlending(Vi),Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);const tt=p!==vi&&this.type===vi,P=p===vi&&this.type!==vi;for(let L=0,U=M.length;L<U;L++){const F=M[L],H=F.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",F,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);const B=H.getFrameExtents();if(s.multiply(B),r.copy(H.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/B.x),s.x=r.x*B.x,H.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/B.y),s.y=r.y*B.y,H.mapSize.y=r.y)),H.map===null||tt===!0||P===!0){const j=this.type!==vi?{minFilter:sn,magFilter:sn}:{};H.map!==null&&H.map.dispose(),H.map=new vs(s.x,s.y,j),H.map.texture.name=F.name+".shadowMap",H.camera.updateProjectionMatrix()}n.setRenderTarget(H.map),n.clear();const X=H.getViewportCount();for(let j=0;j<X;j++){const ht=H.getViewport(j);a.set(r.x*ht.x,r.y*ht.y,r.x*ht.z,r.y*ht.w),Y.viewport(a),H.updateMatrices(F,j),i=H.getFrustum(),y(R,N,H.camera,F,this.type)}H.isPointLightShadow!==!0&&this.type===vi&&v(H,N),H.needsUpdate=!1}p=this.type,g.needsUpdate=!1,n.setRenderTarget(b,E,O)};function v(M,R){const N=t.update(_);d.defines.VSM_SAMPLES!==M.blurSamples&&(d.defines.VSM_SAMPLES=M.blurSamples,f.defines.VSM_SAMPLES=M.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new vs(s.x,s.y)),d.uniforms.shadow_pass.value=M.map.texture,d.uniforms.resolution.value=M.mapSize,d.uniforms.radius.value=M.radius,n.setRenderTarget(M.mapPass),n.clear(),n.renderBufferDirect(R,null,N,d,_,null),f.uniforms.shadow_pass.value=M.mapPass.texture,f.uniforms.resolution.value=M.mapSize,f.uniforms.radius.value=M.radius,n.setRenderTarget(M.map),n.clear(),n.renderBufferDirect(R,null,N,f,_,null)}function x(M,R,N,b){let E=null;const O=N.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(O!==void 0)E=O;else if(E=N.isPointLight===!0?c:o,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const Y=E.uuid,tt=R.uuid;let P=l[Y];P===void 0&&(P={},l[Y]=P);let L=P[tt];L===void 0&&(L=E.clone(),P[tt]=L,R.addEventListener("dispose",A)),E=L}if(E.visible=R.visible,E.wireframe=R.wireframe,b===vi?E.side=R.shadowSide!==null?R.shadowSide:R.side:E.side=R.shadowSide!==null?R.shadowSide:u[R.side],E.alphaMap=R.alphaMap,E.alphaTest=R.alphaTest,E.map=R.map,E.clipShadows=R.clipShadows,E.clippingPlanes=R.clippingPlanes,E.clipIntersection=R.clipIntersection,E.displacementMap=R.displacementMap,E.displacementScale=R.displacementScale,E.displacementBias=R.displacementBias,E.wireframeLinewidth=R.wireframeLinewidth,E.linewidth=R.linewidth,N.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const Y=n.properties.get(E);Y.light=N}return E}function y(M,R,N,b,E){if(M.visible===!1)return;if(M.layers.test(R.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&E===vi)&&(!M.frustumCulled||i.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,M.matrixWorld);const tt=t.update(M),P=M.material;if(Array.isArray(P)){const L=tt.groups;for(let U=0,F=L.length;U<F;U++){const H=L[U],B=P[H.materialIndex];if(B&&B.visible){const X=x(M,B,b,E);M.onBeforeShadow(n,M,R,N,tt,X,H),n.renderBufferDirect(N,null,tt,X,M,H),M.onAfterShadow(n,M,R,N,tt,X,H)}}}else if(P.visible){const L=x(M,P,b,E);M.onBeforeShadow(n,M,R,N,tt,L,null),n.renderBufferDirect(N,null,tt,L,M,null),M.onAfterShadow(n,M,R,N,tt,L,null)}}const Y=M.children;for(let tt=0,P=Y.length;tt<P;tt++)y(Y[tt],R,N,b,E)}function A(M){M.target.removeEventListener("dispose",A);for(const N in l){const b=l[N],E=M.target.uuid;E in b&&(b[E].dispose(),delete b[E])}}}function B2(n,t,e){const i=e.isWebGL2;function s(){let D=!1;const _t=new ye;let xt=null;const Ft=new ye(0,0,0,0);return{setMask:function(Ut){xt!==Ut&&!D&&(n.colorMask(Ut,Ut,Ut,Ut),xt=Ut)},setLocked:function(Ut){D=Ut},setClear:function(Ut,Se,be,Je,fn){fn===!0&&(Ut*=Je,Se*=Je,be*=Je),_t.set(Ut,Se,be,Je),Ft.equals(_t)===!1&&(n.clearColor(Ut,Se,be,Je),Ft.copy(_t))},reset:function(){D=!1,xt=null,Ft.set(-1,0,0,0)}}}function r(){let D=!1,_t=null,xt=null,Ft=null;return{setTest:function(Ut){Ut?qt(n.DEPTH_TEST):At(n.DEPTH_TEST)},setMask:function(Ut){_t!==Ut&&!D&&(n.depthMask(Ut),_t=Ut)},setFunc:function(Ut){if(xt!==Ut){switch(Ut){case Wm:n.depthFunc(n.NEVER);break;case Xm:n.depthFunc(n.ALWAYS);break;case qm:n.depthFunc(n.LESS);break;case ko:n.depthFunc(n.LEQUAL);break;case Ym:n.depthFunc(n.EQUAL);break;case Km:n.depthFunc(n.GEQUAL);break;case jm:n.depthFunc(n.GREATER);break;case Zm:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}xt=Ut}},setLocked:function(Ut){D=Ut},setClear:function(Ut){Ft!==Ut&&(n.clearDepth(Ut),Ft=Ut)},reset:function(){D=!1,_t=null,xt=null,Ft=null}}}function a(){let D=!1,_t=null,xt=null,Ft=null,Ut=null,Se=null,be=null,Je=null,fn=null;return{setTest:function(Ee){D||(Ee?qt(n.STENCIL_TEST):At(n.STENCIL_TEST))},setMask:function(Ee){_t!==Ee&&!D&&(n.stencilMask(Ee),_t=Ee)},setFunc:function(Ee,pn,Qn){(xt!==Ee||Ft!==pn||Ut!==Qn)&&(n.stencilFunc(Ee,pn,Qn),xt=Ee,Ft=pn,Ut=Qn)},setOp:function(Ee,pn,Qn){(Se!==Ee||be!==pn||Je!==Qn)&&(n.stencilOp(Ee,pn,Qn),Se=Ee,be=pn,Je=Qn)},setLocked:function(Ee){D=Ee},setClear:function(Ee){fn!==Ee&&(n.clearStencil(Ee),fn=Ee)},reset:function(){D=!1,_t=null,xt=null,Ft=null,Ut=null,Se=null,be=null,Je=null,fn=null}}}const o=new s,c=new r,l=new a,h=new WeakMap,u=new WeakMap;let d={},f={},m=new WeakMap,_=[],g=null,p=!1,v=null,x=null,y=null,A=null,M=null,R=null,N=null,b=new wt(0,0,0),E=0,O=!1,Y=null,tt=null,P=null,L=null,U=null;const F=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,B=0;const X=n.getParameter(n.VERSION);X.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(X)[1]),H=B>=1):X.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),H=B>=2);let j=null,ht={};const W=n.getParameter(n.SCISSOR_BOX),$=n.getParameter(n.VIEWPORT),gt=new ye().fromArray(W),Tt=new ye().fromArray($);function Mt(D,_t,xt,Ft){const Ut=new Uint8Array(4),Se=n.createTexture();n.bindTexture(D,Se),n.texParameteri(D,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(D,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let be=0;be<xt;be++)i&&(D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY)?n.texImage3D(_t,0,n.RGBA,1,1,Ft,0,n.RGBA,n.UNSIGNED_BYTE,Ut):n.texImage2D(_t+be,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ut);return Se}const Ot={};Ot[n.TEXTURE_2D]=Mt(n.TEXTURE_2D,n.TEXTURE_2D,1),Ot[n.TEXTURE_CUBE_MAP]=Mt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Ot[n.TEXTURE_2D_ARRAY]=Mt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Ot[n.TEXTURE_3D]=Mt(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),c.setClear(1),l.setClear(0),qt(n.DEPTH_TEST),c.setFunc(ko),vt(!1),w(_u),qt(n.CULL_FACE),Z(Vi);function qt(D){d[D]!==!0&&(n.enable(D),d[D]=!0)}function At(D){d[D]!==!1&&(n.disable(D),d[D]=!1)}function Vt(D,_t){return f[D]!==_t?(n.bindFramebuffer(D,_t),f[D]=_t,i&&(D===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=_t),D===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=_t)),!0):!1}function I(D,_t){let xt=_,Ft=!1;if(D)if(xt=m.get(_t),xt===void 0&&(xt=[],m.set(_t,xt)),D.isWebGLMultipleRenderTargets){const Ut=D.texture;if(xt.length!==Ut.length||xt[0]!==n.COLOR_ATTACHMENT0){for(let Se=0,be=Ut.length;Se<be;Se++)xt[Se]=n.COLOR_ATTACHMENT0+Se;xt.length=Ut.length,Ft=!0}}else xt[0]!==n.COLOR_ATTACHMENT0&&(xt[0]=n.COLOR_ATTACHMENT0,Ft=!0);else xt[0]!==n.BACK&&(xt[0]=n.BACK,Ft=!0);Ft&&(e.isWebGL2?n.drawBuffers(xt):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(xt))}function dt(D){return g!==D?(n.useProgram(D),g=D,!0):!1}const J={[ds]:n.FUNC_ADD,[Cm]:n.FUNC_SUBTRACT,[Pm]:n.FUNC_REVERSE_SUBTRACT};if(i)J[yu]=n.MIN,J[Mu]=n.MAX;else{const D=t.get("EXT_blend_minmax");D!==null&&(J[yu]=D.MIN_EXT,J[Mu]=D.MAX_EXT)}const lt={[Lm]:n.ZERO,[Im]:n.ONE,[Dm]:n.SRC_COLOR,[Ol]:n.SRC_ALPHA,[Bm]:n.SRC_ALPHA_SATURATE,[Fm]:n.DST_COLOR,[Nm]:n.DST_ALPHA,[Um]:n.ONE_MINUS_SRC_COLOR,[Fl]:n.ONE_MINUS_SRC_ALPHA,[zm]:n.ONE_MINUS_DST_COLOR,[Om]:n.ONE_MINUS_DST_ALPHA,[km]:n.CONSTANT_COLOR,[Hm]:n.ONE_MINUS_CONSTANT_COLOR,[Gm]:n.CONSTANT_ALPHA,[Vm]:n.ONE_MINUS_CONSTANT_ALPHA};function Z(D,_t,xt,Ft,Ut,Se,be,Je,fn,Ee){if(D===Vi){p===!0&&(At(n.BLEND),p=!1);return}if(p===!1&&(qt(n.BLEND),p=!0),D!==Rm){if(D!==v||Ee!==O){if((x!==ds||M!==ds)&&(n.blendEquation(n.FUNC_ADD),x=ds,M=ds),Ee)switch(D){case dr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Nl:n.blendFunc(n.ONE,n.ONE);break;case xu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case vu:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case dr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Nl:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case xu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case vu:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}y=null,A=null,R=null,N=null,b.set(0,0,0),E=0,v=D,O=Ee}return}Ut=Ut||_t,Se=Se||xt,be=be||Ft,(_t!==x||Ut!==M)&&(n.blendEquationSeparate(J[_t],J[Ut]),x=_t,M=Ut),(xt!==y||Ft!==A||Se!==R||be!==N)&&(n.blendFuncSeparate(lt[xt],lt[Ft],lt[Se],lt[be]),y=xt,A=Ft,R=Se,N=be),(Je.equals(b)===!1||fn!==E)&&(n.blendColor(Je.r,Je.g,Je.b,fn),b.copy(Je),E=fn),v=D,O=!1}function Ct(D,_t){D.side===vn?At(n.CULL_FACE):qt(n.CULL_FACE);let xt=D.side===yn;_t&&(xt=!xt),vt(xt),D.blending===dr&&D.transparent===!1?Z(Vi):Z(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),c.setFunc(D.depthFunc),c.setTest(D.depthTest),c.setMask(D.depthWrite),o.setMask(D.colorWrite);const Ft=D.stencilWrite;l.setTest(Ft),Ft&&(l.setMask(D.stencilWriteMask),l.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),l.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),k(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?qt(n.SAMPLE_ALPHA_TO_COVERAGE):At(n.SAMPLE_ALPHA_TO_COVERAGE)}function vt(D){Y!==D&&(D?n.frontFace(n.CW):n.frontFace(n.CCW),Y=D)}function w(D){D!==Tm?(qt(n.CULL_FACE),D!==tt&&(D===_u?n.cullFace(n.BACK):D===Am?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):At(n.CULL_FACE),tt=D}function S(D){D!==P&&(H&&n.lineWidth(D),P=D)}function k(D,_t,xt){D?(qt(n.POLYGON_OFFSET_FILL),(L!==_t||U!==xt)&&(n.polygonOffset(_t,xt),L=_t,U=xt)):At(n.POLYGON_OFFSET_FILL)}function at(D){D?qt(n.SCISSOR_TEST):At(n.SCISSOR_TEST)}function it(D){D===void 0&&(D=n.TEXTURE0+F-1),j!==D&&(n.activeTexture(D),j=D)}function et(D,_t,xt){xt===void 0&&(j===null?xt=n.TEXTURE0+F-1:xt=j);let Ft=ht[xt];Ft===void 0&&(Ft={type:void 0,texture:void 0},ht[xt]=Ft),(Ft.type!==D||Ft.texture!==_t)&&(j!==xt&&(n.activeTexture(xt),j=xt),n.bindTexture(D,_t||Ot[D]),Ft.type=D,Ft.texture=_t)}function Et(){const D=ht[j];D!==void 0&&D.type!==void 0&&(n.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function mt(){try{n.compressedTexImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function St(){try{n.compressedTexImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Dt(){try{n.texSubImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function jt(){try{n.texSubImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function st(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function he(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function oe(){try{n.texStorage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Wt(){try{n.texStorage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function It(){try{n.texImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function bt(){try{n.texImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function $t(D){gt.equals(D)===!1&&(n.scissor(D.x,D.y,D.z,D.w),gt.copy(D))}function pe(D){Tt.equals(D)===!1&&(n.viewport(D.x,D.y,D.z,D.w),Tt.copy(D))}function Oe(D,_t){let xt=u.get(_t);xt===void 0&&(xt=new WeakMap,u.set(_t,xt));let Ft=xt.get(D);Ft===void 0&&(Ft=n.getUniformBlockIndex(_t,D.name),xt.set(D,Ft))}function ne(D,_t){const Ft=u.get(_t).get(D);h.get(_t)!==Ft&&(n.uniformBlockBinding(_t,Ft,D.__bindingPointIndex),h.set(_t,Ft))}function ft(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),d={},j=null,ht={},f={},m=new WeakMap,_=[],g=null,p=!1,v=null,x=null,y=null,A=null,M=null,R=null,N=null,b=new wt(0,0,0),E=0,O=!1,Y=null,tt=null,P=null,L=null,U=null,gt.set(0,0,n.canvas.width,n.canvas.height),Tt.set(0,0,n.canvas.width,n.canvas.height),o.reset(),c.reset(),l.reset()}return{buffers:{color:o,depth:c,stencil:l},enable:qt,disable:At,bindFramebuffer:Vt,drawBuffers:I,useProgram:dt,setBlending:Z,setMaterial:Ct,setFlipSided:vt,setCullFace:w,setLineWidth:S,setPolygonOffset:k,setScissorTest:at,activeTexture:it,bindTexture:et,unbindTexture:Et,compressedTexImage2D:mt,compressedTexImage3D:St,texImage2D:It,texImage3D:bt,updateUBOMapping:Oe,uniformBlockBinding:ne,texStorage2D:oe,texStorage3D:Wt,texSubImage2D:Dt,texSubImage3D:jt,compressedTexSubImage2D:st,compressedTexSubImage3D:he,scissor:$t,viewport:pe,reset:ft}}function k2(n,t,e,i,s,r,a){const o=s.isWebGL2,c=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(w,S){return f?new OffscreenCanvas(w,S):la("canvas")}function _(w,S,k,at){let it=1;if((w.width>at||w.height>at)&&(it=at/Math.max(w.width,w.height)),it<1||S===!0)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap){const et=S?Ko:Math.floor,Et=et(it*w.width),mt=et(it*w.height);u===void 0&&(u=m(Et,mt));const St=k?m(Et,mt):u;return St.width=Et,St.height=mt,St.getContext("2d").drawImage(w,0,0,Et,mt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+w.width+"x"+w.height+") to ("+Et+"x"+mt+")."),St}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+w.width+"x"+w.height+")."),w;return w}function g(w){return Wl(w.width)&&Wl(w.height)}function p(w){return o?!1:w.wrapS!==Zn||w.wrapT!==Zn||w.minFilter!==sn&&w.minFilter!==Nn}function v(w,S){return w.generateMipmaps&&S&&w.minFilter!==sn&&w.minFilter!==Nn}function x(w){n.generateMipmap(w)}function y(w,S,k,at,it=!1){if(o===!1)return S;if(w!==null){if(n[w]!==void 0)return n[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let et=S;if(S===n.RED&&(k===n.FLOAT&&(et=n.R32F),k===n.HALF_FLOAT&&(et=n.R16F),k===n.UNSIGNED_BYTE&&(et=n.R8)),S===n.RED_INTEGER&&(k===n.UNSIGNED_BYTE&&(et=n.R8UI),k===n.UNSIGNED_SHORT&&(et=n.R16UI),k===n.UNSIGNED_INT&&(et=n.R32UI),k===n.BYTE&&(et=n.R8I),k===n.SHORT&&(et=n.R16I),k===n.INT&&(et=n.R32I)),S===n.RG&&(k===n.FLOAT&&(et=n.RG32F),k===n.HALF_FLOAT&&(et=n.RG16F),k===n.UNSIGNED_BYTE&&(et=n.RG8)),S===n.RGBA){const Et=it?Wo:xe.getTransfer(at);k===n.FLOAT&&(et=n.RGBA32F),k===n.HALF_FLOAT&&(et=n.RGBA16F),k===n.UNSIGNED_BYTE&&(et=Et===Re?n.SRGB8_ALPHA8:n.RGBA8),k===n.UNSIGNED_SHORT_4_4_4_4&&(et=n.RGBA4),k===n.UNSIGNED_SHORT_5_5_5_1&&(et=n.RGB5_A1)}return(et===n.R16F||et===n.R32F||et===n.RG16F||et===n.RG32F||et===n.RGBA16F||et===n.RGBA32F)&&t.get("EXT_color_buffer_float"),et}function A(w,S,k){return v(w,k)===!0||w.isFramebufferTexture&&w.minFilter!==sn&&w.minFilter!==Nn?Math.log2(Math.max(S.width,S.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?S.mipmaps.length:1}function M(w){return w===sn||w===bu||w===Dc?n.NEAREST:n.LINEAR}function R(w){const S=w.target;S.removeEventListener("dispose",R),b(S),S.isVideoTexture&&h.delete(S)}function N(w){const S=w.target;S.removeEventListener("dispose",N),O(S)}function b(w){const S=i.get(w);if(S.__webglInit===void 0)return;const k=w.source,at=d.get(k);if(at){const it=at[S.__cacheKey];it.usedTimes--,it.usedTimes===0&&E(w),Object.keys(at).length===0&&d.delete(k)}i.remove(w)}function E(w){const S=i.get(w);n.deleteTexture(S.__webglTexture);const k=w.source,at=d.get(k);delete at[S.__cacheKey],a.memory.textures--}function O(w){const S=w.texture,k=i.get(w),at=i.get(S);if(at.__webglTexture!==void 0&&(n.deleteTexture(at.__webglTexture),a.memory.textures--),w.depthTexture&&w.depthTexture.dispose(),w.isWebGLCubeRenderTarget)for(let it=0;it<6;it++){if(Array.isArray(k.__webglFramebuffer[it]))for(let et=0;et<k.__webglFramebuffer[it].length;et++)n.deleteFramebuffer(k.__webglFramebuffer[it][et]);else n.deleteFramebuffer(k.__webglFramebuffer[it]);k.__webglDepthbuffer&&n.deleteRenderbuffer(k.__webglDepthbuffer[it])}else{if(Array.isArray(k.__webglFramebuffer))for(let it=0;it<k.__webglFramebuffer.length;it++)n.deleteFramebuffer(k.__webglFramebuffer[it]);else n.deleteFramebuffer(k.__webglFramebuffer);if(k.__webglDepthbuffer&&n.deleteRenderbuffer(k.__webglDepthbuffer),k.__webglMultisampledFramebuffer&&n.deleteFramebuffer(k.__webglMultisampledFramebuffer),k.__webglColorRenderbuffer)for(let it=0;it<k.__webglColorRenderbuffer.length;it++)k.__webglColorRenderbuffer[it]&&n.deleteRenderbuffer(k.__webglColorRenderbuffer[it]);k.__webglDepthRenderbuffer&&n.deleteRenderbuffer(k.__webglDepthRenderbuffer)}if(w.isWebGLMultipleRenderTargets)for(let it=0,et=S.length;it<et;it++){const Et=i.get(S[it]);Et.__webglTexture&&(n.deleteTexture(Et.__webglTexture),a.memory.textures--),i.remove(S[it])}i.remove(S),i.remove(w)}let Y=0;function tt(){Y=0}function P(){const w=Y;return w>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+s.maxTextures),Y+=1,w}function L(w){const S=[];return S.push(w.wrapS),S.push(w.wrapT),S.push(w.wrapR||0),S.push(w.magFilter),S.push(w.minFilter),S.push(w.anisotropy),S.push(w.internalFormat),S.push(w.format),S.push(w.type),S.push(w.generateMipmaps),S.push(w.premultiplyAlpha),S.push(w.flipY),S.push(w.unpackAlignment),S.push(w.colorSpace),S.join()}function U(w,S){const k=i.get(w);if(w.isVideoTexture&&Ct(w),w.isRenderTargetTexture===!1&&w.version>0&&k.__version!==w.version){const at=w.image;if(at===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(at.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{gt(k,w,S);return}}e.bindTexture(n.TEXTURE_2D,k.__webglTexture,n.TEXTURE0+S)}function F(w,S){const k=i.get(w);if(w.version>0&&k.__version!==w.version){gt(k,w,S);return}e.bindTexture(n.TEXTURE_2D_ARRAY,k.__webglTexture,n.TEXTURE0+S)}function H(w,S){const k=i.get(w);if(w.version>0&&k.__version!==w.version){gt(k,w,S);return}e.bindTexture(n.TEXTURE_3D,k.__webglTexture,n.TEXTURE0+S)}function B(w,S){const k=i.get(w);if(w.version>0&&k.__version!==w.version){Tt(k,w,S);return}e.bindTexture(n.TEXTURE_CUBE_MAP,k.__webglTexture,n.TEXTURE0+S)}const X={[kl]:n.REPEAT,[Zn]:n.CLAMP_TO_EDGE,[Hl]:n.MIRRORED_REPEAT},j={[sn]:n.NEAREST,[bu]:n.NEAREST_MIPMAP_NEAREST,[Dc]:n.NEAREST_MIPMAP_LINEAR,[Nn]:n.LINEAR,[rg]:n.LINEAR_MIPMAP_NEAREST,[oa]:n.LINEAR_MIPMAP_LINEAR},ht={[Mg]:n.NEVER,[Ag]:n.ALWAYS,[Sg]:n.LESS,[Fp]:n.LEQUAL,[bg]:n.EQUAL,[Tg]:n.GEQUAL,[Eg]:n.GREATER,[wg]:n.NOTEQUAL};function W(w,S,k){if(k?(n.texParameteri(w,n.TEXTURE_WRAP_S,X[S.wrapS]),n.texParameteri(w,n.TEXTURE_WRAP_T,X[S.wrapT]),(w===n.TEXTURE_3D||w===n.TEXTURE_2D_ARRAY)&&n.texParameteri(w,n.TEXTURE_WRAP_R,X[S.wrapR]),n.texParameteri(w,n.TEXTURE_MAG_FILTER,j[S.magFilter]),n.texParameteri(w,n.TEXTURE_MIN_FILTER,j[S.minFilter])):(n.texParameteri(w,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(w,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(w===n.TEXTURE_3D||w===n.TEXTURE_2D_ARRAY)&&n.texParameteri(w,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(S.wrapS!==Zn||S.wrapT!==Zn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(w,n.TEXTURE_MAG_FILTER,M(S.magFilter)),n.texParameteri(w,n.TEXTURE_MIN_FILTER,M(S.minFilter)),S.minFilter!==sn&&S.minFilter!==Nn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),S.compareFunction&&(n.texParameteri(w,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(w,n.TEXTURE_COMPARE_FUNC,ht[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const at=t.get("EXT_texture_filter_anisotropic");if(S.magFilter===sn||S.minFilter!==Dc&&S.minFilter!==oa||S.type===Si&&t.has("OES_texture_float_linear")===!1||o===!1&&S.type===ca&&t.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||i.get(S).__currentAnisotropy)&&(n.texParameterf(w,at.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy)}}function $(w,S){let k=!1;w.__webglInit===void 0&&(w.__webglInit=!0,S.addEventListener("dispose",R));const at=S.source;let it=d.get(at);it===void 0&&(it={},d.set(at,it));const et=L(S);if(et!==w.__cacheKey){it[et]===void 0&&(it[et]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,k=!0),it[et].usedTimes++;const Et=it[w.__cacheKey];Et!==void 0&&(it[w.__cacheKey].usedTimes--,Et.usedTimes===0&&E(S)),w.__cacheKey=et,w.__webglTexture=it[et].texture}return k}function gt(w,S,k){let at=n.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(at=n.TEXTURE_2D_ARRAY),S.isData3DTexture&&(at=n.TEXTURE_3D);const it=$(w,S),et=S.source;e.bindTexture(at,w.__webglTexture,n.TEXTURE0+k);const Et=i.get(et);if(et.version!==Et.__version||it===!0){e.activeTexture(n.TEXTURE0+k);const mt=xe.getPrimaries(xe.workingColorSpace),St=S.colorSpace===zn?null:xe.getPrimaries(S.colorSpace),Dt=S.colorSpace===zn||mt===St?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Dt);const jt=p(S)&&g(S.image)===!1;let st=_(S.image,jt,!1,s.maxTextureSize);st=vt(S,st);const he=g(st)||o,oe=r.convert(S.format,S.colorSpace);let Wt=r.convert(S.type),It=y(S.internalFormat,oe,Wt,S.colorSpace,S.isVideoTexture);W(at,S,he);let bt;const $t=S.mipmaps,pe=o&&S.isVideoTexture!==!0&&It!==Np,Oe=Et.__version===void 0||it===!0,ne=A(S,st,he);if(S.isDepthTexture)It=n.DEPTH_COMPONENT,o?S.type===Si?It=n.DEPTH_COMPONENT32F:S.type===ki?It=n.DEPTH_COMPONENT24:S.type===ms?It=n.DEPTH24_STENCIL8:It=n.DEPTH_COMPONENT16:S.type===Si&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===gs&&It===n.DEPTH_COMPONENT&&S.type!==yh&&S.type!==ki&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=ki,Wt=r.convert(S.type)),S.format===Sr&&It===n.DEPTH_COMPONENT&&(It=n.DEPTH_STENCIL,S.type!==ms&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=ms,Wt=r.convert(S.type))),Oe&&(pe?e.texStorage2D(n.TEXTURE_2D,1,It,st.width,st.height):e.texImage2D(n.TEXTURE_2D,0,It,st.width,st.height,0,oe,Wt,null));else if(S.isDataTexture)if($t.length>0&&he){pe&&Oe&&e.texStorage2D(n.TEXTURE_2D,ne,It,$t[0].width,$t[0].height);for(let ft=0,D=$t.length;ft<D;ft++)bt=$t[ft],pe?e.texSubImage2D(n.TEXTURE_2D,ft,0,0,bt.width,bt.height,oe,Wt,bt.data):e.texImage2D(n.TEXTURE_2D,ft,It,bt.width,bt.height,0,oe,Wt,bt.data);S.generateMipmaps=!1}else pe?(Oe&&e.texStorage2D(n.TEXTURE_2D,ne,It,st.width,st.height),e.texSubImage2D(n.TEXTURE_2D,0,0,0,st.width,st.height,oe,Wt,st.data)):e.texImage2D(n.TEXTURE_2D,0,It,st.width,st.height,0,oe,Wt,st.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){pe&&Oe&&e.texStorage3D(n.TEXTURE_2D_ARRAY,ne,It,$t[0].width,$t[0].height,st.depth);for(let ft=0,D=$t.length;ft<D;ft++)bt=$t[ft],S.format!==Fn?oe!==null?pe?e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ft,0,0,0,bt.width,bt.height,st.depth,oe,bt.data,0,0):e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ft,It,bt.width,bt.height,st.depth,0,bt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):pe?e.texSubImage3D(n.TEXTURE_2D_ARRAY,ft,0,0,0,bt.width,bt.height,st.depth,oe,Wt,bt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,ft,It,bt.width,bt.height,st.depth,0,oe,Wt,bt.data)}else{pe&&Oe&&e.texStorage2D(n.TEXTURE_2D,ne,It,$t[0].width,$t[0].height);for(let ft=0,D=$t.length;ft<D;ft++)bt=$t[ft],S.format!==Fn?oe!==null?pe?e.compressedTexSubImage2D(n.TEXTURE_2D,ft,0,0,bt.width,bt.height,oe,bt.data):e.compressedTexImage2D(n.TEXTURE_2D,ft,It,bt.width,bt.height,0,bt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):pe?e.texSubImage2D(n.TEXTURE_2D,ft,0,0,bt.width,bt.height,oe,Wt,bt.data):e.texImage2D(n.TEXTURE_2D,ft,It,bt.width,bt.height,0,oe,Wt,bt.data)}else if(S.isDataArrayTexture)pe?(Oe&&e.texStorage3D(n.TEXTURE_2D_ARRAY,ne,It,st.width,st.height,st.depth),e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,st.width,st.height,st.depth,oe,Wt,st.data)):e.texImage3D(n.TEXTURE_2D_ARRAY,0,It,st.width,st.height,st.depth,0,oe,Wt,st.data);else if(S.isData3DTexture)pe?(Oe&&e.texStorage3D(n.TEXTURE_3D,ne,It,st.width,st.height,st.depth),e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,st.width,st.height,st.depth,oe,Wt,st.data)):e.texImage3D(n.TEXTURE_3D,0,It,st.width,st.height,st.depth,0,oe,Wt,st.data);else if(S.isFramebufferTexture){if(Oe)if(pe)e.texStorage2D(n.TEXTURE_2D,ne,It,st.width,st.height);else{let ft=st.width,D=st.height;for(let _t=0;_t<ne;_t++)e.texImage2D(n.TEXTURE_2D,_t,It,ft,D,0,oe,Wt,null),ft>>=1,D>>=1}}else if($t.length>0&&he){pe&&Oe&&e.texStorage2D(n.TEXTURE_2D,ne,It,$t[0].width,$t[0].height);for(let ft=0,D=$t.length;ft<D;ft++)bt=$t[ft],pe?e.texSubImage2D(n.TEXTURE_2D,ft,0,0,oe,Wt,bt):e.texImage2D(n.TEXTURE_2D,ft,It,oe,Wt,bt);S.generateMipmaps=!1}else pe?(Oe&&e.texStorage2D(n.TEXTURE_2D,ne,It,st.width,st.height),e.texSubImage2D(n.TEXTURE_2D,0,0,0,oe,Wt,st)):e.texImage2D(n.TEXTURE_2D,0,It,oe,Wt,st);v(S,he)&&x(at),Et.__version=et.version,S.onUpdate&&S.onUpdate(S)}w.__version=S.version}function Tt(w,S,k){if(S.image.length!==6)return;const at=$(w,S),it=S.source;e.bindTexture(n.TEXTURE_CUBE_MAP,w.__webglTexture,n.TEXTURE0+k);const et=i.get(it);if(it.version!==et.__version||at===!0){e.activeTexture(n.TEXTURE0+k);const Et=xe.getPrimaries(xe.workingColorSpace),mt=S.colorSpace===zn?null:xe.getPrimaries(S.colorSpace),St=S.colorSpace===zn||Et===mt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,St);const Dt=S.isCompressedTexture||S.image[0].isCompressedTexture,jt=S.image[0]&&S.image[0].isDataTexture,st=[];for(let ft=0;ft<6;ft++)!Dt&&!jt?st[ft]=_(S.image[ft],!1,!0,s.maxCubemapSize):st[ft]=jt?S.image[ft].image:S.image[ft],st[ft]=vt(S,st[ft]);const he=st[0],oe=g(he)||o,Wt=r.convert(S.format,S.colorSpace),It=r.convert(S.type),bt=y(S.internalFormat,Wt,It,S.colorSpace),$t=o&&S.isVideoTexture!==!0,pe=et.__version===void 0||at===!0;let Oe=A(S,he,oe);W(n.TEXTURE_CUBE_MAP,S,oe);let ne;if(Dt){$t&&pe&&e.texStorage2D(n.TEXTURE_CUBE_MAP,Oe,bt,he.width,he.height);for(let ft=0;ft<6;ft++){ne=st[ft].mipmaps;for(let D=0;D<ne.length;D++){const _t=ne[D];S.format!==Fn?Wt!==null?$t?e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,D,0,0,_t.width,_t.height,Wt,_t.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,D,bt,_t.width,_t.height,0,_t.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):$t?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,D,0,0,_t.width,_t.height,Wt,It,_t.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,D,bt,_t.width,_t.height,0,Wt,It,_t.data)}}}else{ne=S.mipmaps,$t&&pe&&(ne.length>0&&Oe++,e.texStorage2D(n.TEXTURE_CUBE_MAP,Oe,bt,st[0].width,st[0].height));for(let ft=0;ft<6;ft++)if(jt){$t?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,0,0,st[ft].width,st[ft].height,Wt,It,st[ft].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,bt,st[ft].width,st[ft].height,0,Wt,It,st[ft].data);for(let D=0;D<ne.length;D++){const xt=ne[D].image[ft].image;$t?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,D+1,0,0,xt.width,xt.height,Wt,It,xt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,D+1,bt,xt.width,xt.height,0,Wt,It,xt.data)}}else{$t?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,0,0,Wt,It,st[ft]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,bt,Wt,It,st[ft]);for(let D=0;D<ne.length;D++){const _t=ne[D];$t?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,D+1,0,0,Wt,It,_t.image[ft]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,D+1,bt,Wt,It,_t.image[ft])}}}v(S,oe)&&x(n.TEXTURE_CUBE_MAP),et.__version=it.version,S.onUpdate&&S.onUpdate(S)}w.__version=S.version}function Mt(w,S,k,at,it,et){const Et=r.convert(k.format,k.colorSpace),mt=r.convert(k.type),St=y(k.internalFormat,Et,mt,k.colorSpace);if(!i.get(S).__hasExternalTextures){const jt=Math.max(1,S.width>>et),st=Math.max(1,S.height>>et);it===n.TEXTURE_3D||it===n.TEXTURE_2D_ARRAY?e.texImage3D(it,et,St,jt,st,S.depth,0,Et,mt,null):e.texImage2D(it,et,St,jt,st,0,Et,mt,null)}e.bindFramebuffer(n.FRAMEBUFFER,w),Z(S)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,at,it,i.get(k).__webglTexture,0,lt(S)):(it===n.TEXTURE_2D||it>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&it<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,at,it,i.get(k).__webglTexture,et),e.bindFramebuffer(n.FRAMEBUFFER,null)}function Ot(w,S,k){if(n.bindRenderbuffer(n.RENDERBUFFER,w),S.depthBuffer&&!S.stencilBuffer){let at=o===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(k||Z(S)){const it=S.depthTexture;it&&it.isDepthTexture&&(it.type===Si?at=n.DEPTH_COMPONENT32F:it.type===ki&&(at=n.DEPTH_COMPONENT24));const et=lt(S);Z(S)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,et,at,S.width,S.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,et,at,S.width,S.height)}else n.renderbufferStorage(n.RENDERBUFFER,at,S.width,S.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,w)}else if(S.depthBuffer&&S.stencilBuffer){const at=lt(S);k&&Z(S)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,at,n.DEPTH24_STENCIL8,S.width,S.height):Z(S)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,at,n.DEPTH24_STENCIL8,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,w)}else{const at=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let it=0;it<at.length;it++){const et=at[it],Et=r.convert(et.format,et.colorSpace),mt=r.convert(et.type),St=y(et.internalFormat,Et,mt,et.colorSpace),Dt=lt(S);k&&Z(S)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Dt,St,S.width,S.height):Z(S)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Dt,St,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,St,S.width,S.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function qt(w,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,w),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),U(S.depthTexture,0);const at=i.get(S.depthTexture).__webglTexture,it=lt(S);if(S.depthTexture.format===gs)Z(S)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,at,0,it):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,at,0);else if(S.depthTexture.format===Sr)Z(S)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,at,0,it):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,at,0);else throw new Error("Unknown depthTexture format")}function At(w){const S=i.get(w),k=w.isWebGLCubeRenderTarget===!0;if(w.depthTexture&&!S.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");qt(S.__webglFramebuffer,w)}else if(k){S.__webglDepthbuffer=[];for(let at=0;at<6;at++)e.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[at]),S.__webglDepthbuffer[at]=n.createRenderbuffer(),Ot(S.__webglDepthbuffer[at],w,!1)}else e.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=n.createRenderbuffer(),Ot(S.__webglDepthbuffer,w,!1);e.bindFramebuffer(n.FRAMEBUFFER,null)}function Vt(w,S,k){const at=i.get(w);S!==void 0&&Mt(at.__webglFramebuffer,w,w.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),k!==void 0&&At(w)}function I(w){const S=w.texture,k=i.get(w),at=i.get(S);w.addEventListener("dispose",N),w.isWebGLMultipleRenderTargets!==!0&&(at.__webglTexture===void 0&&(at.__webglTexture=n.createTexture()),at.__version=S.version,a.memory.textures++);const it=w.isWebGLCubeRenderTarget===!0,et=w.isWebGLMultipleRenderTargets===!0,Et=g(w)||o;if(it){k.__webglFramebuffer=[];for(let mt=0;mt<6;mt++)if(o&&S.mipmaps&&S.mipmaps.length>0){k.__webglFramebuffer[mt]=[];for(let St=0;St<S.mipmaps.length;St++)k.__webglFramebuffer[mt][St]=n.createFramebuffer()}else k.__webglFramebuffer[mt]=n.createFramebuffer()}else{if(o&&S.mipmaps&&S.mipmaps.length>0){k.__webglFramebuffer=[];for(let mt=0;mt<S.mipmaps.length;mt++)k.__webglFramebuffer[mt]=n.createFramebuffer()}else k.__webglFramebuffer=n.createFramebuffer();if(et)if(s.drawBuffers){const mt=w.texture;for(let St=0,Dt=mt.length;St<Dt;St++){const jt=i.get(mt[St]);jt.__webglTexture===void 0&&(jt.__webglTexture=n.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&w.samples>0&&Z(w)===!1){const mt=et?S:[S];k.__webglMultisampledFramebuffer=n.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let St=0;St<mt.length;St++){const Dt=mt[St];k.__webglColorRenderbuffer[St]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,k.__webglColorRenderbuffer[St]);const jt=r.convert(Dt.format,Dt.colorSpace),st=r.convert(Dt.type),he=y(Dt.internalFormat,jt,st,Dt.colorSpace,w.isXRRenderTarget===!0),oe=lt(w);n.renderbufferStorageMultisample(n.RENDERBUFFER,oe,he,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+St,n.RENDERBUFFER,k.__webglColorRenderbuffer[St])}n.bindRenderbuffer(n.RENDERBUFFER,null),w.depthBuffer&&(k.__webglDepthRenderbuffer=n.createRenderbuffer(),Ot(k.__webglDepthRenderbuffer,w,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(it){e.bindTexture(n.TEXTURE_CUBE_MAP,at.__webglTexture),W(n.TEXTURE_CUBE_MAP,S,Et);for(let mt=0;mt<6;mt++)if(o&&S.mipmaps&&S.mipmaps.length>0)for(let St=0;St<S.mipmaps.length;St++)Mt(k.__webglFramebuffer[mt][St],w,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+mt,St);else Mt(k.__webglFramebuffer[mt],w,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0);v(S,Et)&&x(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(et){const mt=w.texture;for(let St=0,Dt=mt.length;St<Dt;St++){const jt=mt[St],st=i.get(jt);e.bindTexture(n.TEXTURE_2D,st.__webglTexture),W(n.TEXTURE_2D,jt,Et),Mt(k.__webglFramebuffer,w,jt,n.COLOR_ATTACHMENT0+St,n.TEXTURE_2D,0),v(jt,Et)&&x(n.TEXTURE_2D)}e.unbindTexture()}else{let mt=n.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(o?mt=w.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(mt,at.__webglTexture),W(mt,S,Et),o&&S.mipmaps&&S.mipmaps.length>0)for(let St=0;St<S.mipmaps.length;St++)Mt(k.__webglFramebuffer[St],w,S,n.COLOR_ATTACHMENT0,mt,St);else Mt(k.__webglFramebuffer,w,S,n.COLOR_ATTACHMENT0,mt,0);v(S,Et)&&x(mt),e.unbindTexture()}w.depthBuffer&&At(w)}function dt(w){const S=g(w)||o,k=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let at=0,it=k.length;at<it;at++){const et=k[at];if(v(et,S)){const Et=w.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,mt=i.get(et).__webglTexture;e.bindTexture(Et,mt),x(Et),e.unbindTexture()}}}function J(w){if(o&&w.samples>0&&Z(w)===!1){const S=w.isWebGLMultipleRenderTargets?w.texture:[w.texture],k=w.width,at=w.height;let it=n.COLOR_BUFFER_BIT;const et=[],Et=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,mt=i.get(w),St=w.isWebGLMultipleRenderTargets===!0;if(St)for(let Dt=0;Dt<S.length;Dt++)e.bindFramebuffer(n.FRAMEBUFFER,mt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Dt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,mt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Dt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,mt.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,mt.__webglFramebuffer);for(let Dt=0;Dt<S.length;Dt++){et.push(n.COLOR_ATTACHMENT0+Dt),w.depthBuffer&&et.push(Et);const jt=mt.__ignoreDepthValues!==void 0?mt.__ignoreDepthValues:!1;if(jt===!1&&(w.depthBuffer&&(it|=n.DEPTH_BUFFER_BIT),w.stencilBuffer&&(it|=n.STENCIL_BUFFER_BIT)),St&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,mt.__webglColorRenderbuffer[Dt]),jt===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[Et]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[Et])),St){const st=i.get(S[Dt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,st,0)}n.blitFramebuffer(0,0,k,at,0,0,k,at,it,n.NEAREST),l&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,et)}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),St)for(let Dt=0;Dt<S.length;Dt++){e.bindFramebuffer(n.FRAMEBUFFER,mt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Dt,n.RENDERBUFFER,mt.__webglColorRenderbuffer[Dt]);const jt=i.get(S[Dt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,mt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Dt,n.TEXTURE_2D,jt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,mt.__webglMultisampledFramebuffer)}}function lt(w){return Math.min(s.maxSamples,w.samples)}function Z(w){const S=i.get(w);return o&&w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Ct(w){const S=a.render.frame;h.get(w)!==S&&(h.set(w,S),w.update())}function vt(w,S){const k=w.colorSpace,at=w.format,it=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||w.format===Vl||k!==wi&&k!==zn&&(xe.getTransfer(k)===Re?o===!1?t.has("EXT_sRGB")===!0&&at===Fn?(w.format=Vl,w.minFilter=Nn,w.generateMipmaps=!1):S=Bp.sRGBToLinear(S):(at!==Fn||it!==Xi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),S}this.allocateTextureUnit=P,this.resetTextureUnits=tt,this.setTexture2D=U,this.setTexture2DArray=F,this.setTexture3D=H,this.setTextureCube=B,this.rebindTextures=Vt,this.setupRenderTarget=I,this.updateRenderTargetMipmap=dt,this.updateMultisampleRenderTarget=J,this.setupDepthRenderbuffer=At,this.setupFrameBufferTexture=Mt,this.useMultisampledRTT=Z}function H2(n,t,e){const i=e.isWebGL2;function s(r,a=zn){let o;const c=xe.getTransfer(a);if(r===Xi)return n.UNSIGNED_BYTE;if(r===Pp)return n.UNSIGNED_SHORT_4_4_4_4;if(r===Lp)return n.UNSIGNED_SHORT_5_5_5_1;if(r===ag)return n.BYTE;if(r===og)return n.SHORT;if(r===yh)return n.UNSIGNED_SHORT;if(r===Cp)return n.INT;if(r===ki)return n.UNSIGNED_INT;if(r===Si)return n.FLOAT;if(r===ca)return i?n.HALF_FLOAT:(o=t.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===cg)return n.ALPHA;if(r===Fn)return n.RGBA;if(r===lg)return n.LUMINANCE;if(r===hg)return n.LUMINANCE_ALPHA;if(r===gs)return n.DEPTH_COMPONENT;if(r===Sr)return n.DEPTH_STENCIL;if(r===Vl)return o=t.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===ug)return n.RED;if(r===Ip)return n.RED_INTEGER;if(r===dg)return n.RG;if(r===Dp)return n.RG_INTEGER;if(r===Up)return n.RGBA_INTEGER;if(r===Uc||r===Nc||r===Oc||r===Fc)if(c===Re)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===Uc)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Nc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Oc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Fc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===Uc)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Nc)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Oc)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Fc)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Eu||r===wu||r===Tu||r===Au)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===Eu)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===wu)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Tu)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Au)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Np)return o=t.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Ru||r===Cu)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(r===Ru)return c===Re?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===Cu)return c===Re?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Pu||r===Lu||r===Iu||r===Du||r===Uu||r===Nu||r===Ou||r===Fu||r===zu||r===Bu||r===ku||r===Hu||r===Gu||r===Vu)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(r===Pu)return c===Re?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Lu)return c===Re?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Iu)return c===Re?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Du)return c===Re?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Uu)return c===Re?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Nu)return c===Re?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Ou)return c===Re?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Fu)return c===Re?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===zu)return c===Re?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Bu)return c===Re?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===ku)return c===Re?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Hu)return c===Re?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Gu)return c===Re?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Vu)return c===Re?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===zc||r===Wu||r===Xu)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(r===zc)return c===Re?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Wu)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Xu)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===fg||r===qu||r===Yu||r===Ku)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(r===zc)return o.COMPRESSED_RED_RGTC1_EXT;if(r===qu)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Yu)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Ku)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===ms?i?n.UNSIGNED_INT_24_8:(o=t.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):n[r]!==void 0?n[r]:null}return{convert:s}}class G2 extends _n{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class un extends Ie{constructor(){super(),this.isGroup=!0,this.type="Group"}}const V2={type:"move"};class cl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new un,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new un,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new un,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(const _ of t.hand.values()){const g=e.getJointPose(_,i),p=this._getHandJoint(l,_);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,m=.005;l.inputState.pinching&&d>f+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=f-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(V2)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new un;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}class W2 extends bs{constructor(t,e){super();const i=this;let s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,m=null;const _=e.getContextAttributes();let g=null,p=null;const v=[],x=[],y=new nt;let A=null;const M=new _n;M.layers.enable(1),M.viewport=new ye;const R=new _n;R.layers.enable(2),R.viewport=new ye;const N=[M,R],b=new G2;b.layers.enable(1),b.layers.enable(2);let E=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let $=v[W];return $===void 0&&($=new cl,v[W]=$),$.getTargetRaySpace()},this.getControllerGrip=function(W){let $=v[W];return $===void 0&&($=new cl,v[W]=$),$.getGripSpace()},this.getHand=function(W){let $=v[W];return $===void 0&&($=new cl,v[W]=$),$.getHandSpace()};function Y(W){const $=x.indexOf(W.inputSource);if($===-1)return;const gt=v[$];gt!==void 0&&(gt.update(W.inputSource,W.frame,l||a),gt.dispatchEvent({type:W.type,data:W.inputSource}))}function tt(){s.removeEventListener("select",Y),s.removeEventListener("selectstart",Y),s.removeEventListener("selectend",Y),s.removeEventListener("squeeze",Y),s.removeEventListener("squeezestart",Y),s.removeEventListener("squeezeend",Y),s.removeEventListener("end",tt),s.removeEventListener("inputsourceschange",P);for(let W=0;W<v.length;W++){const $=x[W];$!==null&&(x[W]=null,v[W].disconnect($))}E=null,O=null,t.setRenderTarget(g),f=null,d=null,u=null,s=null,p=null,ht.stop(),i.isPresenting=!1,t.setPixelRatio(A),t.setSize(y.width,y.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){r=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){o=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(W){l=W},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(W){if(s=W,s!==null){if(g=t.getRenderTarget(),s.addEventListener("select",Y),s.addEventListener("selectstart",Y),s.addEventListener("selectend",Y),s.addEventListener("squeeze",Y),s.addEventListener("squeezestart",Y),s.addEventListener("squeezeend",Y),s.addEventListener("end",tt),s.addEventListener("inputsourceschange",P),_.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(y),s.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const $={antialias:s.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,$),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),p=new vs(f.framebufferWidth,f.framebufferHeight,{format:Fn,type:Xi,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil})}else{let $=null,gt=null,Tt=null;_.depth&&(Tt=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,$=_.stencil?Sr:gs,gt=_.stencil?ms:ki);const Mt={colorFormat:e.RGBA8,depthFormat:Tt,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(Mt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),p=new vs(d.textureWidth,d.textureHeight,{format:Fn,type:Xi,depthTexture:new Zp(d.textureWidth,d.textureHeight,gt,void 0,void 0,void 0,void 0,void 0,void 0,$),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0});const Ot=t.properties.get(p);Ot.__ignoreDepthValues=d.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),ht.setContext(s),ht.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function P(W){for(let $=0;$<W.removed.length;$++){const gt=W.removed[$],Tt=x.indexOf(gt);Tt>=0&&(x[Tt]=null,v[Tt].disconnect(gt))}for(let $=0;$<W.added.length;$++){const gt=W.added[$];let Tt=x.indexOf(gt);if(Tt===-1){for(let Ot=0;Ot<v.length;Ot++)if(Ot>=x.length){x.push(gt),Tt=Ot;break}else if(x[Ot]===null){x[Ot]=gt,Tt=Ot;break}if(Tt===-1)break}const Mt=v[Tt];Mt&&Mt.connect(gt)}}const L=new C,U=new C;function F(W,$,gt){L.setFromMatrixPosition($.matrixWorld),U.setFromMatrixPosition(gt.matrixWorld);const Tt=L.distanceTo(U),Mt=$.projectionMatrix.elements,Ot=gt.projectionMatrix.elements,qt=Mt[14]/(Mt[10]-1),At=Mt[14]/(Mt[10]+1),Vt=(Mt[9]+1)/Mt[5],I=(Mt[9]-1)/Mt[5],dt=(Mt[8]-1)/Mt[0],J=(Ot[8]+1)/Ot[0],lt=qt*dt,Z=qt*J,Ct=Tt/(-dt+J),vt=Ct*-dt;$.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(vt),W.translateZ(Ct),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert();const w=qt+Ct,S=At+Ct,k=lt-vt,at=Z+(Tt-vt),it=Vt*At/S*w,et=I*At/S*w;W.projectionMatrix.makePerspective(k,at,it,et,w,S),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}function H(W,$){$===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices($.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(s===null)return;b.near=R.near=M.near=W.near,b.far=R.far=M.far=W.far,(E!==b.near||O!==b.far)&&(s.updateRenderState({depthNear:b.near,depthFar:b.far}),E=b.near,O=b.far);const $=W.parent,gt=b.cameras;H(b,$);for(let Tt=0;Tt<gt.length;Tt++)H(gt[Tt],$);gt.length===2?F(b,M,R):b.projectionMatrix.copy(M.projectionMatrix),B(W,b,$)};function B(W,$,gt){gt===null?W.matrix.copy($.matrixWorld):(W.matrix.copy(gt.matrixWorld),W.matrix.invert(),W.matrix.multiply($.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy($.projectionMatrix),W.projectionMatrixInverse.copy($.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=br*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(W){c=W,d!==null&&(d.fixedFoveation=W),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=W)};let X=null;function j(W,$){if(h=$.getViewerPose(l||a),m=$,h!==null){const gt=h.views;f!==null&&(t.setRenderTargetFramebuffer(p,f.framebuffer),t.setRenderTarget(p));let Tt=!1;gt.length!==b.cameras.length&&(b.cameras.length=0,Tt=!0);for(let Mt=0;Mt<gt.length;Mt++){const Ot=gt[Mt];let qt=null;if(f!==null)qt=f.getViewport(Ot);else{const Vt=u.getViewSubImage(d,Ot);qt=Vt.viewport,Mt===0&&(t.setRenderTargetTextures(p,Vt.colorTexture,d.ignoreDepthValues?void 0:Vt.depthStencilTexture),t.setRenderTarget(p))}let At=N[Mt];At===void 0&&(At=new _n,At.layers.enable(Mt),At.viewport=new ye,N[Mt]=At),At.matrix.fromArray(Ot.transform.matrix),At.matrix.decompose(At.position,At.quaternion,At.scale),At.projectionMatrix.fromArray(Ot.projectionMatrix),At.projectionMatrixInverse.copy(At.projectionMatrix).invert(),At.viewport.set(qt.x,qt.y,qt.width,qt.height),Mt===0&&(b.matrix.copy(At.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),Tt===!0&&b.cameras.push(At)}}for(let gt=0;gt<v.length;gt++){const Tt=x[gt],Mt=v[gt];Tt!==null&&Mt!==void 0&&Mt.update(Tt,$,l||a)}X&&X(W,$),$.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:$}),m=null}const ht=new Kp;ht.setAnimationLoop(j),this.setAnimationLoop=function(W){X=W},this.dispose=function(){}}}function X2(n,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function i(g,p){p.color.getRGB(g.fogColor.value,Xp(n)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,v,x,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(g,p):p.isMeshToonMaterial?(r(g,p),u(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p)):p.isMeshStandardMaterial?(r(g,p),d(g,p),p.isMeshPhysicalMaterial&&f(g,p,y)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),_(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?c(g,p,v,x):p.isSpriteMaterial?l(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===yn&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===yn&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const v=t.get(p).envMap;if(v&&(g.envMap.value=v,g.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap){g.lightMap.value=p.lightMap;const x=n._useLegacyLights===!0?Math.PI:1;g.lightMapIntensity.value=p.lightMapIntensity*x,e(p.lightMap,g.lightMapTransform)}p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function c(g,p,v,x){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*v,g.scale.value=x*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function l(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function u(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function d(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),t.get(p).envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,v){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===yn&&g.clearcoatNormalScale.value.negate())),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function _(g,p){const v=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(v.matrixWorld),g.nearDistance.value=v.shadow.camera.near,g.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function q2(n,t,e,i){let s={},r={},a=[];const o=e.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(v,x){const y=x.program;i.uniformBlockBinding(v,y)}function l(v,x){let y=s[v.id];y===void 0&&(m(v),y=h(v),s[v.id]=y,v.addEventListener("dispose",g));const A=x.program;i.updateUBOMapping(v,A);const M=t.render.frame;r[v.id]!==M&&(d(v),r[v.id]=M)}function h(v){const x=u();v.__bindingPointIndex=x;const y=n.createBuffer(),A=v.__size,M=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,A,M),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,x,y),y}function u(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){const x=s[v.id],y=v.uniforms,A=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,x);for(let M=0,R=y.length;M<R;M++){const N=Array.isArray(y[M])?y[M]:[y[M]];for(let b=0,E=N.length;b<E;b++){const O=N[b];if(f(O,M,b,A)===!0){const Y=O.__offset,tt=Array.isArray(O.value)?O.value:[O.value];let P=0;for(let L=0;L<tt.length;L++){const U=tt[L],F=_(U);typeof U=="number"||typeof U=="boolean"?(O.__data[0]=U,n.bufferSubData(n.UNIFORM_BUFFER,Y+P,O.__data)):U.isMatrix3?(O.__data[0]=U.elements[0],O.__data[1]=U.elements[1],O.__data[2]=U.elements[2],O.__data[3]=0,O.__data[4]=U.elements[3],O.__data[5]=U.elements[4],O.__data[6]=U.elements[5],O.__data[7]=0,O.__data[8]=U.elements[6],O.__data[9]=U.elements[7],O.__data[10]=U.elements[8],O.__data[11]=0):(U.toArray(O.__data,P),P+=F.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,Y,O.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(v,x,y,A){const M=v.value,R=x+"_"+y;if(A[R]===void 0)return typeof M=="number"||typeof M=="boolean"?A[R]=M:A[R]=M.clone(),!0;{const N=A[R];if(typeof M=="number"||typeof M=="boolean"){if(N!==M)return A[R]=M,!0}else if(N.equals(M)===!1)return N.copy(M),!0}return!1}function m(v){const x=v.uniforms;let y=0;const A=16;for(let R=0,N=x.length;R<N;R++){const b=Array.isArray(x[R])?x[R]:[x[R]];for(let E=0,O=b.length;E<O;E++){const Y=b[E],tt=Array.isArray(Y.value)?Y.value:[Y.value];for(let P=0,L=tt.length;P<L;P++){const U=tt[P],F=_(U),H=y%A;H!==0&&A-H<F.boundary&&(y+=A-H),Y.__data=new Float32Array(F.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=y,y+=F.storage}}}const M=y%A;return M>0&&(y+=A-M),v.__size=y,v.__cache={},this}function _(v){const x={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(x.boundary=4,x.storage=4):v.isVector2?(x.boundary=8,x.storage=8):v.isVector3||v.isColor?(x.boundary=16,x.storage=12):v.isVector4?(x.boundary=16,x.storage=16):v.isMatrix3?(x.boundary=48,x.storage=48):v.isMatrix4?(x.boundary=64,x.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),x}function g(v){const x=v.target;x.removeEventListener("dispose",g);const y=a.indexOf(x.__bindingPointIndex);a.splice(y,1),n.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function p(){for(const v in s)n.deleteBuffer(s[v]);a=[],s={},r={}}return{bind:c,update:l,dispose:p}}class n0{constructor(t={}){const{canvas:e=Gg(),context:i=null,depth:s=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=a;const f=new Uint32Array(4),m=new Int32Array(4);let _=null,g=null;const p=[],v=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=tn,this._useLegacyLights=!1,this.toneMapping=Wi,this.toneMappingExposure=1;const x=this;let y=!1,A=0,M=0,R=null,N=-1,b=null;const E=new ye,O=new ye;let Y=null;const tt=new wt(0);let P=0,L=e.width,U=e.height,F=1,H=null,B=null;const X=new ye(0,0,L,U),j=new ye(0,0,L,U);let ht=!1;const W=new wh;let $=!1,gt=!1,Tt=null;const Mt=new zt,Ot=new nt,qt=new C,At={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Vt(){return R===null?F:1}let I=i;function dt(T,z){for(let V=0;V<T.length;V++){const q=T[V],G=e.getContext(q,z);if(G!==null)return G}return null}try{const T={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${vh}`),e.addEventListener("webglcontextlost",ft,!1),e.addEventListener("webglcontextrestored",D,!1),e.addEventListener("webglcontextcreationerror",_t,!1),I===null){const z=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&z.shift(),I=dt(z,T),I===null)throw dt(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&I instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),I.getShaderPrecisionFormat===void 0&&(I.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let J,lt,Z,Ct,vt,w,S,k,at,it,et,Et,mt,St,Dt,jt,st,he,oe,Wt,It,bt,$t,pe;function Oe(){J=new nv(I),lt=new Zx(I,J,t),J.init(lt),bt=new H2(I,J,lt),Z=new B2(I,J,lt),Ct=new rv(I),vt=new w2,w=new k2(I,J,Z,vt,lt,bt,Ct),S=new $x(x),k=new ev(x),at=new f1(I,lt),$t=new Kx(I,J,at,lt),it=new iv(I,at,Ct,$t),et=new lv(I,it,at,Ct),oe=new cv(I,lt,w),jt=new Jx(vt),Et=new E2(x,S,k,J,lt,$t,jt),mt=new X2(x,vt),St=new A2,Dt=new D2(J,lt),he=new Yx(x,S,k,Z,et,d,c),st=new z2(x,et,lt),pe=new q2(I,Ct,lt,Z),Wt=new jx(I,J,Ct,lt),It=new sv(I,J,Ct,lt),Ct.programs=Et.programs,x.capabilities=lt,x.extensions=J,x.properties=vt,x.renderLists=St,x.shadowMap=st,x.state=Z,x.info=Ct}Oe();const ne=new W2(x,I);this.xr=ne,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const T=J.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=J.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return F},this.setPixelRatio=function(T){T!==void 0&&(F=T,this.setSize(L,U,!1))},this.getSize=function(T){return T.set(L,U)},this.setSize=function(T,z,V=!0){if(ne.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}L=T,U=z,e.width=Math.floor(T*F),e.height=Math.floor(z*F),V===!0&&(e.style.width=T+"px",e.style.height=z+"px"),this.setViewport(0,0,T,z)},this.getDrawingBufferSize=function(T){return T.set(L*F,U*F).floor()},this.setDrawingBufferSize=function(T,z,V){L=T,U=z,F=V,e.width=Math.floor(T*V),e.height=Math.floor(z*V),this.setViewport(0,0,T,z)},this.getCurrentViewport=function(T){return T.copy(E)},this.getViewport=function(T){return T.copy(X)},this.setViewport=function(T,z,V,q){T.isVector4?X.set(T.x,T.y,T.z,T.w):X.set(T,z,V,q),Z.viewport(E.copy(X).multiplyScalar(F).floor())},this.getScissor=function(T){return T.copy(j)},this.setScissor=function(T,z,V,q){T.isVector4?j.set(T.x,T.y,T.z,T.w):j.set(T,z,V,q),Z.scissor(O.copy(j).multiplyScalar(F).floor())},this.getScissorTest=function(){return ht},this.setScissorTest=function(T){Z.setScissorTest(ht=T)},this.setOpaqueSort=function(T){H=T},this.setTransparentSort=function(T){B=T},this.getClearColor=function(T){return T.copy(he.getClearColor())},this.setClearColor=function(){he.setClearColor.apply(he,arguments)},this.getClearAlpha=function(){return he.getClearAlpha()},this.setClearAlpha=function(){he.setClearAlpha.apply(he,arguments)},this.clear=function(T=!0,z=!0,V=!0){let q=0;if(T){let G=!1;if(R!==null){const yt=R.texture.format;G=yt===Up||yt===Dp||yt===Ip}if(G){const yt=R.texture.type,Rt=yt===Xi||yt===ki||yt===yh||yt===ms||yt===Pp||yt===Lp,Nt=he.getClearColor(),Bt=he.getClearAlpha(),te=Nt.r,Yt=Nt.g,Zt=Nt.b;Rt?(f[0]=te,f[1]=Yt,f[2]=Zt,f[3]=Bt,I.clearBufferuiv(I.COLOR,0,f)):(m[0]=te,m[1]=Yt,m[2]=Zt,m[3]=Bt,I.clearBufferiv(I.COLOR,0,m))}else q|=I.COLOR_BUFFER_BIT}z&&(q|=I.DEPTH_BUFFER_BIT),V&&(q|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ft,!1),e.removeEventListener("webglcontextrestored",D,!1),e.removeEventListener("webglcontextcreationerror",_t,!1),St.dispose(),Dt.dispose(),vt.dispose(),S.dispose(),k.dispose(),et.dispose(),$t.dispose(),pe.dispose(),Et.dispose(),ne.dispose(),ne.removeEventListener("sessionstart",fn),ne.removeEventListener("sessionend",Ee),Tt&&(Tt.dispose(),Tt=null),pn.stop()};function ft(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function D(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const T=Ct.autoReset,z=st.enabled,V=st.autoUpdate,q=st.needsUpdate,G=st.type;Oe(),Ct.autoReset=T,st.enabled=z,st.autoUpdate=V,st.needsUpdate=q,st.type=G}function _t(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function xt(T){const z=T.target;z.removeEventListener("dispose",xt),Ft(z)}function Ft(T){Ut(T),vt.remove(T)}function Ut(T){const z=vt.get(T).programs;z!==void 0&&(z.forEach(function(V){Et.releaseProgram(V)}),T.isShaderMaterial&&Et.releaseShaderCache(T))}this.renderBufferDirect=function(T,z,V,q,G,yt){z===null&&(z=At);const Rt=G.isMesh&&G.matrixWorld.determinant()<0,Nt=Sm(T,z,V,q,G);Z.setMaterial(q,Rt);let Bt=V.index,te=1;if(q.wireframe===!0){if(Bt=it.getWireframeAttribute(V),Bt===void 0)return;te=2}const Yt=V.drawRange,Zt=V.attributes.position;let ke=Yt.start*te,wn=(Yt.start+Yt.count)*te;yt!==null&&(ke=Math.max(ke,yt.start*te),wn=Math.min(wn,(yt.start+yt.count)*te)),Bt!==null?(ke=Math.max(ke,0),wn=Math.min(wn,Bt.count)):Zt!=null&&(ke=Math.max(ke,0),wn=Math.min(wn,Zt.count));const $e=wn-ke;if($e<0||$e===1/0)return;$t.setup(G,q,Nt,V,Bt);let ui,Ue=Wt;if(Bt!==null&&(ui=at.get(Bt),Ue=It,Ue.setIndex(ui)),G.isMesh)q.wireframe===!0?(Z.setLineWidth(q.wireframeLinewidth*Vt()),Ue.setMode(I.LINES)):Ue.setMode(I.TRIANGLES);else if(G.isLine){let ie=q.linewidth;ie===void 0&&(ie=1),Z.setLineWidth(ie*Vt()),G.isLineSegments?Ue.setMode(I.LINES):G.isLineLoop?Ue.setMode(I.LINE_LOOP):Ue.setMode(I.LINE_STRIP)}else G.isPoints?Ue.setMode(I.POINTS):G.isSprite&&Ue.setMode(I.TRIANGLES);if(G.isBatchedMesh)Ue.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else if(G.isInstancedMesh)Ue.renderInstances(ke,$e,G.count);else if(V.isInstancedBufferGeometry){const ie=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Cc=Math.min(V.instanceCount,ie);Ue.renderInstances(ke,$e,Cc)}else Ue.render(ke,$e)};function Se(T,z,V){T.transparent===!0&&T.side===vn&&T.forceSinglePass===!1?(T.side=yn,T.needsUpdate=!0,Oa(T,z,V),T.side=ji,T.needsUpdate=!0,Oa(T,z,V),T.side=vn):Oa(T,z,V)}this.compile=function(T,z,V=null){V===null&&(V=T),g=Dt.get(V),g.init(),v.push(g),V.traverseVisible(function(G){G.isLight&&G.layers.test(z.layers)&&(g.pushLight(G),G.castShadow&&g.pushShadow(G))}),T!==V&&T.traverseVisible(function(G){G.isLight&&G.layers.test(z.layers)&&(g.pushLight(G),G.castShadow&&g.pushShadow(G))}),g.setupLights(x._useLegacyLights);const q=new Set;return T.traverse(function(G){const yt=G.material;if(yt)if(Array.isArray(yt))for(let Rt=0;Rt<yt.length;Rt++){const Nt=yt[Rt];Se(Nt,V,G),q.add(Nt)}else Se(yt,V,G),q.add(yt)}),v.pop(),g=null,q},this.compileAsync=function(T,z,V=null){const q=this.compile(T,z,V);return new Promise(G=>{function yt(){if(q.forEach(function(Rt){vt.get(Rt).currentProgram.isReady()&&q.delete(Rt)}),q.size===0){G(T);return}setTimeout(yt,10)}J.get("KHR_parallel_shader_compile")!==null?yt():setTimeout(yt,10)})};let be=null;function Je(T){be&&be(T)}function fn(){pn.stop()}function Ee(){pn.start()}const pn=new Kp;pn.setAnimationLoop(Je),typeof self<"u"&&pn.setContext(self),this.setAnimationLoop=function(T){be=T,ne.setAnimationLoop(T),T===null?pn.stop():pn.start()},ne.addEventListener("sessionstart",fn),ne.addEventListener("sessionend",Ee),this.render=function(T,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),ne.enabled===!0&&ne.isPresenting===!0&&(ne.cameraAutoUpdate===!0&&ne.updateCamera(z),z=ne.getCamera()),T.isScene===!0&&T.onBeforeRender(x,T,z,R),g=Dt.get(T,v.length),g.init(),v.push(g),Mt.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),W.setFromProjectionMatrix(Mt),gt=this.localClippingEnabled,$=jt.init(this.clippingPlanes,gt),_=St.get(T,p.length),_.init(),p.push(_),Qn(T,z,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(H,B),this.info.render.frame++,$===!0&&jt.beginShadows();const V=g.state.shadowsArray;if(st.render(V,T,z),$===!0&&jt.endShadows(),this.info.autoReset===!0&&this.info.reset(),he.render(_,T),g.setupLights(x._useLegacyLights),z.isArrayCamera){const q=z.cameras;for(let G=0,yt=q.length;G<yt;G++){const Rt=q[G];uu(_,T,Rt,Rt.viewport)}}else uu(_,T,z);R!==null&&(w.updateMultisampleRenderTarget(R),w.updateRenderTargetMipmap(R)),T.isScene===!0&&T.onAfterRender(x,T,z),$t.resetDefaultState(),N=-1,b=null,v.pop(),v.length>0?g=v[v.length-1]:g=null,p.pop(),p.length>0?_=p[p.length-1]:_=null};function Qn(T,z,V,q){if(T.visible===!1)return;if(T.layers.test(z.layers)){if(T.isGroup)V=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(z);else if(T.isLight)g.pushLight(T),T.castShadow&&g.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||W.intersectsSprite(T)){q&&qt.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Mt);const Rt=et.update(T),Nt=T.material;Nt.visible&&_.push(T,Rt,Nt,V,qt.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||W.intersectsObject(T))){const Rt=et.update(T),Nt=T.material;if(q&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),qt.copy(T.boundingSphere.center)):(Rt.boundingSphere===null&&Rt.computeBoundingSphere(),qt.copy(Rt.boundingSphere.center)),qt.applyMatrix4(T.matrixWorld).applyMatrix4(Mt)),Array.isArray(Nt)){const Bt=Rt.groups;for(let te=0,Yt=Bt.length;te<Yt;te++){const Zt=Bt[te],ke=Nt[Zt.materialIndex];ke&&ke.visible&&_.push(T,Rt,ke,V,qt.z,Zt)}}else Nt.visible&&_.push(T,Rt,Nt,V,qt.z,null)}}const yt=T.children;for(let Rt=0,Nt=yt.length;Rt<Nt;Rt++)Qn(yt[Rt],z,V,q)}function uu(T,z,V,q){const G=T.opaque,yt=T.transmissive,Rt=T.transparent;g.setupLightsView(V),$===!0&&jt.setGlobalState(x.clippingPlanes,V),yt.length>0&&Mm(G,yt,z,V),q&&Z.viewport(E.copy(q)),G.length>0&&Na(G,z,V),yt.length>0&&Na(yt,z,V),Rt.length>0&&Na(Rt,z,V),Z.buffers.depth.setTest(!0),Z.buffers.depth.setMask(!0),Z.buffers.color.setMask(!0),Z.setPolygonOffset(!1)}function Mm(T,z,V,q){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;const yt=lt.isWebGL2;Tt===null&&(Tt=new vs(1,1,{generateMipmaps:!0,type:J.has("EXT_color_buffer_half_float")?ca:Xi,minFilter:oa,samples:yt?4:0})),x.getDrawingBufferSize(Ot),yt?Tt.setSize(Ot.x,Ot.y):Tt.setSize(Ko(Ot.x),Ko(Ot.y));const Rt=x.getRenderTarget();x.setRenderTarget(Tt),x.getClearColor(tt),P=x.getClearAlpha(),P<1&&x.setClearColor(16777215,.5),x.clear();const Nt=x.toneMapping;x.toneMapping=Wi,Na(T,V,q),w.updateMultisampleRenderTarget(Tt),w.updateRenderTargetMipmap(Tt);let Bt=!1;for(let te=0,Yt=z.length;te<Yt;te++){const Zt=z[te],ke=Zt.object,wn=Zt.geometry,$e=Zt.material,ui=Zt.group;if($e.side===vn&&ke.layers.test(q.layers)){const Ue=$e.side;$e.side=yn,$e.needsUpdate=!0,du(ke,V,q,wn,$e,ui),$e.side=Ue,$e.needsUpdate=!0,Bt=!0}}Bt===!0&&(w.updateMultisampleRenderTarget(Tt),w.updateRenderTargetMipmap(Tt)),x.setRenderTarget(Rt),x.setClearColor(tt,P),x.toneMapping=Nt}function Na(T,z,V){const q=z.isScene===!0?z.overrideMaterial:null;for(let G=0,yt=T.length;G<yt;G++){const Rt=T[G],Nt=Rt.object,Bt=Rt.geometry,te=q===null?Rt.material:q,Yt=Rt.group;Nt.layers.test(V.layers)&&du(Nt,z,V,Bt,te,Yt)}}function du(T,z,V,q,G,yt){T.onBeforeRender(x,z,V,q,G,yt),T.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),G.onBeforeRender(x,z,V,q,T,yt),G.transparent===!0&&G.side===vn&&G.forceSinglePass===!1?(G.side=yn,G.needsUpdate=!0,x.renderBufferDirect(V,z,q,G,T,yt),G.side=ji,G.needsUpdate=!0,x.renderBufferDirect(V,z,q,G,T,yt),G.side=vn):x.renderBufferDirect(V,z,q,G,T,yt),T.onAfterRender(x,z,V,q,G,yt)}function Oa(T,z,V){z.isScene!==!0&&(z=At);const q=vt.get(T),G=g.state.lights,yt=g.state.shadowsArray,Rt=G.state.version,Nt=Et.getParameters(T,G.state,yt,z,V),Bt=Et.getProgramCacheKey(Nt);let te=q.programs;q.environment=T.isMeshStandardMaterial?z.environment:null,q.fog=z.fog,q.envMap=(T.isMeshStandardMaterial?k:S).get(T.envMap||q.environment),te===void 0&&(T.addEventListener("dispose",xt),te=new Map,q.programs=te);let Yt=te.get(Bt);if(Yt!==void 0){if(q.currentProgram===Yt&&q.lightsStateVersion===Rt)return pu(T,Nt),Yt}else Nt.uniforms=Et.getUniforms(T),T.onBuild(V,Nt,x),T.onBeforeCompile(Nt,x),Yt=Et.acquireProgram(Nt,Bt),te.set(Bt,Yt),q.uniforms=Nt.uniforms;const Zt=q.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Zt.clippingPlanes=jt.uniform),pu(T,Nt),q.needsLights=Em(T),q.lightsStateVersion=Rt,q.needsLights&&(Zt.ambientLightColor.value=G.state.ambient,Zt.lightProbe.value=G.state.probe,Zt.directionalLights.value=G.state.directional,Zt.directionalLightShadows.value=G.state.directionalShadow,Zt.spotLights.value=G.state.spot,Zt.spotLightShadows.value=G.state.spotShadow,Zt.rectAreaLights.value=G.state.rectArea,Zt.ltc_1.value=G.state.rectAreaLTC1,Zt.ltc_2.value=G.state.rectAreaLTC2,Zt.pointLights.value=G.state.point,Zt.pointLightShadows.value=G.state.pointShadow,Zt.hemisphereLights.value=G.state.hemi,Zt.directionalShadowMap.value=G.state.directionalShadowMap,Zt.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Zt.spotShadowMap.value=G.state.spotShadowMap,Zt.spotLightMatrix.value=G.state.spotLightMatrix,Zt.spotLightMap.value=G.state.spotLightMap,Zt.pointShadowMap.value=G.state.pointShadowMap,Zt.pointShadowMatrix.value=G.state.pointShadowMatrix),q.currentProgram=Yt,q.uniformsList=null,Yt}function fu(T){if(T.uniformsList===null){const z=T.currentProgram.getUniforms();T.uniformsList=No.seqWithValue(z.seq,T.uniforms)}return T.uniformsList}function pu(T,z){const V=vt.get(T);V.outputColorSpace=z.outputColorSpace,V.batching=z.batching,V.instancing=z.instancing,V.instancingColor=z.instancingColor,V.skinning=z.skinning,V.morphTargets=z.morphTargets,V.morphNormals=z.morphNormals,V.morphColors=z.morphColors,V.morphTargetsCount=z.morphTargetsCount,V.numClippingPlanes=z.numClippingPlanes,V.numIntersection=z.numClipIntersection,V.vertexAlphas=z.vertexAlphas,V.vertexTangents=z.vertexTangents,V.toneMapping=z.toneMapping}function Sm(T,z,V,q,G){z.isScene!==!0&&(z=At),w.resetTextureUnits();const yt=z.fog,Rt=q.isMeshStandardMaterial?z.environment:null,Nt=R===null?x.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:wi,Bt=(q.isMeshStandardMaterial?k:S).get(q.envMap||Rt),te=q.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Yt=!!V.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Zt=!!V.morphAttributes.position,ke=!!V.morphAttributes.normal,wn=!!V.morphAttributes.color;let $e=Wi;q.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&($e=x.toneMapping);const ui=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Ue=ui!==void 0?ui.length:0,ie=vt.get(q),Cc=g.state.lights;if($===!0&&(gt===!0||T!==b)){const In=T===b&&q.id===N;jt.setState(q,T,In)}let Fe=!1;q.version===ie.__version?(ie.needsLights&&ie.lightsStateVersion!==Cc.state.version||ie.outputColorSpace!==Nt||G.isBatchedMesh&&ie.batching===!1||!G.isBatchedMesh&&ie.batching===!0||G.isInstancedMesh&&ie.instancing===!1||!G.isInstancedMesh&&ie.instancing===!0||G.isSkinnedMesh&&ie.skinning===!1||!G.isSkinnedMesh&&ie.skinning===!0||G.isInstancedMesh&&ie.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&ie.instancingColor===!1&&G.instanceColor!==null||ie.envMap!==Bt||q.fog===!0&&ie.fog!==yt||ie.numClippingPlanes!==void 0&&(ie.numClippingPlanes!==jt.numPlanes||ie.numIntersection!==jt.numIntersection)||ie.vertexAlphas!==te||ie.vertexTangents!==Yt||ie.morphTargets!==Zt||ie.morphNormals!==ke||ie.morphColors!==wn||ie.toneMapping!==$e||lt.isWebGL2===!0&&ie.morphTargetsCount!==Ue)&&(Fe=!0):(Fe=!0,ie.__version=q.version);let Qi=ie.currentProgram;Fe===!0&&(Qi=Oa(q,z,G));let mu=!1,Or=!1,Pc=!1;const an=Qi.getUniforms(),ts=ie.uniforms;if(Z.useProgram(Qi.program)&&(mu=!0,Or=!0,Pc=!0),q.id!==N&&(N=q.id,Or=!0),mu||b!==T){an.setValue(I,"projectionMatrix",T.projectionMatrix),an.setValue(I,"viewMatrix",T.matrixWorldInverse);const In=an.map.cameraPosition;In!==void 0&&In.setValue(I,qt.setFromMatrixPosition(T.matrixWorld)),lt.logarithmicDepthBuffer&&an.setValue(I,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&an.setValue(I,"isOrthographic",T.isOrthographicCamera===!0),b!==T&&(b=T,Or=!0,Pc=!0)}if(G.isSkinnedMesh){an.setOptional(I,G,"bindMatrix"),an.setOptional(I,G,"bindMatrixInverse");const In=G.skeleton;In&&(lt.floatVertexTextures?(In.boneTexture===null&&In.computeBoneTexture(),an.setValue(I,"boneTexture",In.boneTexture,w)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}G.isBatchedMesh&&(an.setOptional(I,G,"batchingTexture"),an.setValue(I,"batchingTexture",G._matricesTexture,w));const Lc=V.morphAttributes;if((Lc.position!==void 0||Lc.normal!==void 0||Lc.color!==void 0&&lt.isWebGL2===!0)&&oe.update(G,V,Qi),(Or||ie.receiveShadow!==G.receiveShadow)&&(ie.receiveShadow=G.receiveShadow,an.setValue(I,"receiveShadow",G.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(ts.envMap.value=Bt,ts.flipEnvMap.value=Bt.isCubeTexture&&Bt.isRenderTargetTexture===!1?-1:1),Or&&(an.setValue(I,"toneMappingExposure",x.toneMappingExposure),ie.needsLights&&bm(ts,Pc),yt&&q.fog===!0&&mt.refreshFogUniforms(ts,yt),mt.refreshMaterialUniforms(ts,q,F,U,Tt),No.upload(I,fu(ie),ts,w)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(No.upload(I,fu(ie),ts,w),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&an.setValue(I,"center",G.center),an.setValue(I,"modelViewMatrix",G.modelViewMatrix),an.setValue(I,"normalMatrix",G.normalMatrix),an.setValue(I,"modelMatrix",G.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const In=q.uniformsGroups;for(let Ic=0,wm=In.length;Ic<wm;Ic++)if(lt.isWebGL2){const gu=In[Ic];pe.update(gu,Qi),pe.bind(gu,Qi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Qi}function bm(T,z){T.ambientLightColor.needsUpdate=z,T.lightProbe.needsUpdate=z,T.directionalLights.needsUpdate=z,T.directionalLightShadows.needsUpdate=z,T.pointLights.needsUpdate=z,T.pointLightShadows.needsUpdate=z,T.spotLights.needsUpdate=z,T.spotLightShadows.needsUpdate=z,T.rectAreaLights.needsUpdate=z,T.hemisphereLights.needsUpdate=z}function Em(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return M},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(T,z,V){vt.get(T.texture).__webglTexture=z,vt.get(T.depthTexture).__webglTexture=V;const q=vt.get(T);q.__hasExternalTextures=!0,q.__hasExternalTextures&&(q.__autoAllocateDepthBuffer=V===void 0,q.__autoAllocateDepthBuffer||J.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,z){const V=vt.get(T);V.__webglFramebuffer=z,V.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(T,z=0,V=0){R=T,A=z,M=V;let q=!0,G=null,yt=!1,Rt=!1;if(T){const Bt=vt.get(T);Bt.__useDefaultFramebuffer!==void 0?(Z.bindFramebuffer(I.FRAMEBUFFER,null),q=!1):Bt.__webglFramebuffer===void 0?w.setupRenderTarget(T):Bt.__hasExternalTextures&&w.rebindTextures(T,vt.get(T.texture).__webglTexture,vt.get(T.depthTexture).__webglTexture);const te=T.texture;(te.isData3DTexture||te.isDataArrayTexture||te.isCompressedArrayTexture)&&(Rt=!0);const Yt=vt.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Yt[z])?G=Yt[z][V]:G=Yt[z],yt=!0):lt.isWebGL2&&T.samples>0&&w.useMultisampledRTT(T)===!1?G=vt.get(T).__webglMultisampledFramebuffer:Array.isArray(Yt)?G=Yt[V]:G=Yt,E.copy(T.viewport),O.copy(T.scissor),Y=T.scissorTest}else E.copy(X).multiplyScalar(F).floor(),O.copy(j).multiplyScalar(F).floor(),Y=ht;if(Z.bindFramebuffer(I.FRAMEBUFFER,G)&&lt.drawBuffers&&q&&Z.drawBuffers(T,G),Z.viewport(E),Z.scissor(O),Z.setScissorTest(Y),yt){const Bt=vt.get(T.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+z,Bt.__webglTexture,V)}else if(Rt){const Bt=vt.get(T.texture),te=z||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,Bt.__webglTexture,V||0,te)}N=-1},this.readRenderTargetPixels=function(T,z,V,q,G,yt,Rt){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Nt=vt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Rt!==void 0&&(Nt=Nt[Rt]),Nt){Z.bindFramebuffer(I.FRAMEBUFFER,Nt);try{const Bt=T.texture,te=Bt.format,Yt=Bt.type;if(te!==Fn&&bt.convert(te)!==I.getParameter(I.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Zt=Yt===ca&&(J.has("EXT_color_buffer_half_float")||lt.isWebGL2&&J.has("EXT_color_buffer_float"));if(Yt!==Xi&&bt.convert(Yt)!==I.getParameter(I.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Yt===Si&&(lt.isWebGL2||J.has("OES_texture_float")||J.has("WEBGL_color_buffer_float")))&&!Zt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=T.width-q&&V>=0&&V<=T.height-G&&I.readPixels(z,V,q,G,bt.convert(te),bt.convert(Yt),yt)}finally{const Bt=R!==null?vt.get(R).__webglFramebuffer:null;Z.bindFramebuffer(I.FRAMEBUFFER,Bt)}}},this.copyFramebufferToTexture=function(T,z,V=0){const q=Math.pow(2,-V),G=Math.floor(z.image.width*q),yt=Math.floor(z.image.height*q);w.setTexture2D(z,0),I.copyTexSubImage2D(I.TEXTURE_2D,V,0,0,T.x,T.y,G,yt),Z.unbindTexture()},this.copyTextureToTexture=function(T,z,V,q=0){const G=z.image.width,yt=z.image.height,Rt=bt.convert(V.format),Nt=bt.convert(V.type);w.setTexture2D(V,0),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,V.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,V.unpackAlignment),z.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,q,T.x,T.y,G,yt,Rt,Nt,z.image.data):z.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,q,T.x,T.y,z.mipmaps[0].width,z.mipmaps[0].height,Rt,z.mipmaps[0].data):I.texSubImage2D(I.TEXTURE_2D,q,T.x,T.y,Rt,Nt,z.image),q===0&&V.generateMipmaps&&I.generateMipmap(I.TEXTURE_2D),Z.unbindTexture()},this.copyTextureToTexture3D=function(T,z,V,q,G=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const yt=T.max.x-T.min.x+1,Rt=T.max.y-T.min.y+1,Nt=T.max.z-T.min.z+1,Bt=bt.convert(q.format),te=bt.convert(q.type);let Yt;if(q.isData3DTexture)w.setTexture3D(q,0),Yt=I.TEXTURE_3D;else if(q.isDataArrayTexture||q.isCompressedArrayTexture)w.setTexture2DArray(q,0),Yt=I.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,q.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,q.unpackAlignment);const Zt=I.getParameter(I.UNPACK_ROW_LENGTH),ke=I.getParameter(I.UNPACK_IMAGE_HEIGHT),wn=I.getParameter(I.UNPACK_SKIP_PIXELS),$e=I.getParameter(I.UNPACK_SKIP_ROWS),ui=I.getParameter(I.UNPACK_SKIP_IMAGES),Ue=V.isCompressedTexture?V.mipmaps[G]:V.image;I.pixelStorei(I.UNPACK_ROW_LENGTH,Ue.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Ue.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,T.min.x),I.pixelStorei(I.UNPACK_SKIP_ROWS,T.min.y),I.pixelStorei(I.UNPACK_SKIP_IMAGES,T.min.z),V.isDataTexture||V.isData3DTexture?I.texSubImage3D(Yt,G,z.x,z.y,z.z,yt,Rt,Nt,Bt,te,Ue.data):V.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),I.compressedTexSubImage3D(Yt,G,z.x,z.y,z.z,yt,Rt,Nt,Bt,Ue.data)):I.texSubImage3D(Yt,G,z.x,z.y,z.z,yt,Rt,Nt,Bt,te,Ue),I.pixelStorei(I.UNPACK_ROW_LENGTH,Zt),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ke),I.pixelStorei(I.UNPACK_SKIP_PIXELS,wn),I.pixelStorei(I.UNPACK_SKIP_ROWS,$e),I.pixelStorei(I.UNPACK_SKIP_IMAGES,ui),G===0&&q.generateMipmaps&&I.generateMipmap(Yt),Z.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?w.setTextureCube(T,0):T.isData3DTexture?w.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?w.setTexture2DArray(T,0):w.setTexture2D(T,0),Z.unbindTexture()},this.resetState=function(){A=0,M=0,R=null,Z.reset(),$t.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return bi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Sh?"display-p3":"srgb",e.unpackColorSpace=xe.workingColorSpace===pc?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===tn?_s:Op}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===_s?tn:wi}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class Y2 extends n0{}Y2.prototype.isWebGL1Renderer=!0;class Ah{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new wt(t),this.density=e}clone(){return new Ah(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class i0 extends Ie{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}}class K2{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Gl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=kn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=kn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=kn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const mn=new C;class jo{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)mn.fromBufferAttribute(this,e),mn.applyMatrix4(t),this.setXYZ(e,mn.x,mn.y,mn.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)mn.fromBufferAttribute(this,e),mn.applyNormalMatrix(t),this.setXYZ(e,mn.x,mn.y,mn.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)mn.fromBufferAttribute(this,e),mn.transformDirection(t),this.setXYZ(e,mn.x,mn.y,mn.z);return this}setX(t,e){return this.normalized&&(e=_e(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=_e(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=_e(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=_e(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=ni(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=ni(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=ni(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=ni(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=_e(e,this.array),i=_e(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=_e(e,this.array),i=_e(i,this.array),s=_e(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=_e(e,this.array),i=_e(i,this.array),s=_e(s,this.array),r=_e(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new En(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new jo(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class s0 extends ci{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new wt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Hs;const Hr=new C,Gs=new C,Vs=new C,Ws=new nt,Gr=new nt,r0=new zt,ro=new C,Vr=new C,ao=new C,Fd=new nt,ll=new nt,zd=new nt;class j2 extends Ie{constructor(t=new s0){if(super(),this.isSprite=!0,this.type="Sprite",Hs===void 0){Hs=new De;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new K2(e,5);Hs.setIndex([0,1,2,0,2,3]),Hs.setAttribute("position",new jo(i,3,0,!1)),Hs.setAttribute("uv",new jo(i,2,3,!1))}this.geometry=Hs,this.material=t,this.center=new nt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Gs.setFromMatrixScale(this.matrixWorld),r0.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Vs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Gs.multiplyScalar(-Vs.z);const i=this.material.rotation;let s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));const a=this.center;oo(ro.set(-.5,-.5,0),Vs,a,Gs,s,r),oo(Vr.set(.5,-.5,0),Vs,a,Gs,s,r),oo(ao.set(.5,.5,0),Vs,a,Gs,s,r),Fd.set(0,0),ll.set(1,0),zd.set(1,1);let o=t.ray.intersectTriangle(ro,Vr,ao,!1,Hr);if(o===null&&(oo(Vr.set(-.5,.5,0),Vs,a,Gs,s,r),ll.set(0,1),o=t.ray.intersectTriangle(ro,ao,Vr,!1,Hr),o===null))return;const c=t.ray.origin.distanceTo(Hr);c<t.near||c>t.far||e.push({distance:c,point:Hr.clone(),uv:On.getInterpolation(Hr,ro,Vr,ao,Fd,ll,zd,new nt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function oo(n,t,e,i,s,r){Ws.subVectors(n,e).addScalar(.5).multiply(i),s!==void 0?(Gr.x=r*Ws.x-s*Ws.y,Gr.y=s*Ws.x+r*Ws.y):Gr.copy(Ws),n.copy(t),n.x+=Gr.x,n.y+=Gr.y,n.applyMatrix4(r0)}const Bd=new C,kd=new ye,Hd=new ye,Z2=new C,Gd=new zt,co=new C,hl=new oi,Vd=new zt,ul=new Ma;class nw extends Me{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Su,this.bindMatrix=new zt,this.bindMatrixInverse=new zt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const t=this.geometry;this.boundingBox===null&&(this.boundingBox=new Ri),this.boundingBox.makeEmpty();const e=t.getAttribute("position");for(let i=0;i<e.count;i++)this.getVertexPosition(i,co),this.boundingBox.expandByPoint(co)}computeBoundingSphere(){const t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new oi),this.boundingSphere.makeEmpty();const e=t.getAttribute("position");for(let i=0;i<e.count;i++)this.getVertexPosition(i,co),this.boundingSphere.expandByPoint(co)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){const i=this.material,s=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),hl.copy(this.boundingSphere),hl.applyMatrix4(s),t.ray.intersectsSphere(hl)!==!1&&(Vd.copy(s).invert(),ul.copy(t.ray).applyMatrix4(Vd),!(this.boundingBox!==null&&ul.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,ul)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const t=new ye,e=this.geometry.attributes.skinWeight;for(let i=0,s=e.count;i<s;i++){t.fromBufferAttribute(e,i);const r=1/t.manhattanLength();r!==1/0?t.multiplyScalar(r):t.set(1,0,0,0),e.setXYZW(i,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===Su?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===sg?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){const i=this.skeleton,s=this.geometry;kd.fromBufferAttribute(s.attributes.skinIndex,t),Hd.fromBufferAttribute(s.attributes.skinWeight,t),Bd.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let r=0;r<4;r++){const a=Hd.getComponent(r);if(a!==0){const o=kd.getComponent(r);Gd.multiplyMatrices(i.bones[o].matrixWorld,i.boneInverses[o]),e.addScaledVector(Z2.copy(Bd).applyMatrix4(Gd),a)}}return e.applyMatrix4(this.bindMatrixInverse)}boneTransform(t,e){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(t,e)}}class J2 extends Ie{constructor(){super(),this.isBone=!0,this.type="Bone"}}class $2 extends dn{constructor(t=null,e=1,i=1,s,r,a,o,c,l=sn,h=sn,u,d){super(null,a,o,c,l,h,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Wd=new zt,Q2=new zt;class a0{constructor(t=[],e=[]){this.uuid=kn(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,s=this.bones.length;i<s;i++)this.boneInverses.push(new zt)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){const i=new zt;this.bones[t]&&i.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){const i=this.bones[t];i&&i.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){const i=this.bones[t];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const t=this.bones,e=this.boneInverses,i=this.boneMatrices,s=this.boneTexture;for(let r=0,a=t.length;r<a;r++){const o=t[r]?t[r].matrixWorld:Q2;Wd.multiplyMatrices(o,e[r]),Wd.toArray(i,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new a0(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const e=new Float32Array(t*t*4);e.set(this.boneMatrices);const i=new $2(e,t,t,Fn,Si);return i.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=i,this}getBoneByName(t){for(let e=0,i=this.bones.length;e<i;e++){const s=this.bones[e];if(s.name===t)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let i=0,s=t.bones.length;i<s;i++){const r=t.bones[i];let a=e[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new J2),this.bones.push(a),this.boneInverses.push(new zt().fromArray(t.boneInverses[i]))}return this.init(),this}toJSON(){const t={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;const e=this.bones,i=this.boneInverses;for(let s=0,r=e.length;s<r;s++){const a=e[s];t.bones.push(a.uuid);const o=i[s];t.boneInverses.push(o.toArray())}return t}}class Zo extends En{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Xs=new zt,Xd=new zt,lo=[],qd=new Ri,ty=new zt,Wr=new Me,Xr=new oi;class wr extends Me{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Zo(new Float32Array(i*16),16),this.instanceColor=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,ty)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Ri),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Xs),qd.copy(t.boundingBox).applyMatrix4(Xs),this.boundingBox.union(qd)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new oi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Xs),Xr.copy(t.boundingSphere).applyMatrix4(Xs),this.boundingSphere.union(Xr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}raycast(t,e){const i=this.matrixWorld,s=this.count;if(Wr.geometry=this.geometry,Wr.material=this.material,Wr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Xr.copy(this.boundingSphere),Xr.applyMatrix4(i),t.ray.intersectsSphere(Xr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Xs),Xd.multiplyMatrices(i,Xs),Wr.matrixWorld=Xd,Wr.raycast(t,lo);for(let a=0,o=lo.length;a<o;a++){const c=lo[a];c.instanceId=r,c.object=this,e.push(c)}lo.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Zo(new Float32Array(this.instanceMatrix.count*3),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class o0 extends ci{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new wt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Yd=new C,Kd=new C,jd=new zt,dl=new Ma,ho=new oi;class Rh extends Ie{constructor(t=new De,e=new o0){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let s=1,r=e.count;s<r;s++)Yd.fromBufferAttribute(e,s-1),Kd.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=Yd.distanceTo(Kd);t.setAttribute("lineDistance",new ee(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ho.copy(i.boundingSphere),ho.applyMatrix4(s),ho.radius+=r,t.ray.intersectsSphere(ho)===!1)return;jd.copy(s).invert(),dl.copy(t.ray).applyMatrix4(jd);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=new C,h=new C,u=new C,d=new C,f=this.isLineSegments?2:1,m=i.index,g=i.attributes.position;if(m!==null){const p=Math.max(0,a.start),v=Math.min(m.count,a.start+a.count);for(let x=p,y=v-1;x<y;x+=f){const A=m.getX(x),M=m.getX(x+1);if(l.fromBufferAttribute(g,A),h.fromBufferAttribute(g,M),dl.distanceSqToSegment(l,h,d,u)>c)continue;d.applyMatrix4(this.matrixWorld);const N=t.ray.origin.distanceTo(d);N<t.near||N>t.far||e.push({distance:N,point:u.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{const p=Math.max(0,a.start),v=Math.min(g.count,a.start+a.count);for(let x=p,y=v-1;x<y;x+=f){if(l.fromBufferAttribute(g,x),h.fromBufferAttribute(g,x+1),dl.distanceSqToSegment(l,h,d,u)>c)continue;d.applyMatrix4(this.matrixWorld);const M=t.ray.origin.distanceTo(d);M<t.near||M>t.far||e.push({distance:M,point:u.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}const Zd=new C,Jd=new C;class iw extends Rh{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[];for(let s=0,r=e.count;s<r;s+=2)Zd.fromBufferAttribute(e,s),Jd.fromBufferAttribute(e,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Zd.distanceTo(Jd);t.setAttribute("lineDistance",new ee(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class sw extends Rh{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}}class Ch extends ci{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new wt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const $d=new zt,ql=new Ma,uo=new oi,fo=new C;class c0 extends Ie{constructor(t=new De,e=new Ch){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),uo.copy(i.boundingSphere),uo.applyMatrix4(s),uo.radius+=r,t.ray.intersectsSphere(uo)===!1)return;$d.copy(s).invert(),ql.copy(t.ray).applyMatrix4($d);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=i.index,u=i.attributes.position;if(l!==null){const d=Math.max(0,a.start),f=Math.min(l.count,a.start+a.count);for(let m=d,_=f;m<_;m++){const g=l.getX(m);fo.fromBufferAttribute(u,g),Qd(fo,g,c,s,t,e,this)}}else{const d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let m=d,_=f;m<_;m++)fo.fromBufferAttribute(u,m),Qd(fo,m,c,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Qd(n,t,e,i,s,r,a){const o=ql.distanceSqToPoint(n);if(o<e){const c=new C;ql.closestPointToPoint(n,c),c.applyMatrix4(i);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:t,face:null,object:a})}}class ey extends dn{constructor(t,e,i,s,r,a,o,c,l){super(t,e,i,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class li{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let i,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)i=this.getPoint(a/t),r+=i.distanceTo(s),e.push(r),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const i=this.getLengths();let s=0;const r=i.length;let a;e?a=e:a=t*i[r-1];let o=0,c=r-1,l;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),l=i[s]-a,l<0)o=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,i[s]===a)return s/(r-1);const h=i[s],d=i[s+1]-h,f=(a-h)/d;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),c=e||(a.isVector2?new nt:new C);return c.copy(o).sub(a).normalize(),c}getTangentAt(t,e){const i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){const i=new C,s=[],r=[],a=[],o=new C,c=new zt;for(let f=0;f<=t;f++){const m=f/t;s[f]=this.getTangentAt(m,new C)}r[0]=new C,a[0]=new C;let l=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=l&&(l=h,i.set(1,0,0)),u<=l&&(l=u,i.set(0,1,0)),d<=l&&i.set(0,0,1),o.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();const m=Math.acos(qe(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(o,m))}a[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(qe(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let m=1;m<=t;m++)r[m].applyMatrix4(c.makeRotationAxis(s[m],f*m)),a[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Ph extends li{constructor(t=0,e=0,i=1,s=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(t,e){const i=e||new nt,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+t*r;let c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*h-f*u+this.aX,l=d*u+f*h+this.aY}return i.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class ny extends Ph{constructor(t,e,i,s,r,a){super(t,e,i,i,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Lh(){let n=0,t=0,e=0,i=0;function s(r,a,o,c){n=r,t=o,e=-3*r+3*a-2*o-c,i=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){s(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,h,u){let d=(a-r)/l-(o-r)/(l+h)+(o-a)/h,f=(o-a)/h-(c-a)/(h+u)+(c-o)/u;d*=h,f*=h,s(a,o,d,f)},calc:function(r){const a=r*r,o=a*r;return n+t*r+e*a+i*o}}}const po=new C,fl=new Lh,pl=new Lh,ml=new Lh;class l0 extends li{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new C){const i=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t;let o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,h;this.closed||o>0?l=s[(o-1)%r]:(po.subVectors(s[0],s[1]).add(s[0]),l=po);const u=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(po.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=po),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let m=Math.pow(l.distanceToSquared(u),f),_=Math.pow(u.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(h),f);_<1e-4&&(_=1),m<1e-4&&(m=_),g<1e-4&&(g=_),fl.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,m,_,g),pl.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,m,_,g),ml.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,m,_,g)}else this.curveType==="catmullrom"&&(fl.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),pl.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),ml.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return i.set(fl.calc(c),pl.calc(c),ml.calc(c)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new C().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function tf(n,t,e,i,s){const r=(i-t)*.5,a=(s-e)*.5,o=n*n,c=n*o;return(2*e-2*i+r+a)*c+(-3*e+3*i-2*r-a)*o+r*n+e}function iy(n,t){const e=1-n;return e*e*t}function sy(n,t){return 2*(1-n)*n*t}function ry(n,t){return n*n*t}function ea(n,t,e,i){return iy(n,t)+sy(n,e)+ry(n,i)}function ay(n,t){const e=1-n;return e*e*e*t}function oy(n,t){const e=1-n;return 3*e*e*n*t}function cy(n,t){return 3*(1-n)*n*n*t}function ly(n,t){return n*n*n*t}function na(n,t,e,i,s){return ay(n,t)+oy(n,e)+cy(n,i)+ly(n,s)}class h0 extends li{constructor(t=new nt,e=new nt,i=new nt,s=new nt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new nt){const i=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(na(t,s.x,r.x,a.x,o.x),na(t,s.y,r.y,a.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class hy extends li{constructor(t=new C,e=new C,i=new C,s=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new C){const i=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(na(t,s.x,r.x,a.x,o.x),na(t,s.y,r.y,a.y,o.y),na(t,s.z,r.z,a.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class u0 extends li{constructor(t=new nt,e=new nt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new nt){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new nt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class uy extends li{constructor(t=new C,e=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new C){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new C){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class d0 extends li{constructor(t=new nt,e=new nt,i=new nt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new nt){const i=e,s=this.v0,r=this.v1,a=this.v2;return i.set(ea(t,s.x,r.x,a.x),ea(t,s.y,r.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class dy extends li{constructor(t=new C,e=new C,i=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new C){const i=e,s=this.v0,r=this.v1,a=this.v2;return i.set(ea(t,s.x,r.x,a.x),ea(t,s.y,r.y,a.y),ea(t,s.z,r.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class f0 extends li{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new nt){const i=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,c=s[a===0?a:a-1],l=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return i.set(tf(o,c.x,l.x,h.x,u.x),tf(o,c.y,l.y,h.y,u.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new nt().fromArray(s))}return this}}var Yl=Object.freeze({__proto__:null,ArcCurve:ny,CatmullRomCurve3:l0,CubicBezierCurve:h0,CubicBezierCurve3:hy,EllipseCurve:Ph,LineCurve:u0,LineCurve3:uy,QuadraticBezierCurve:d0,QuadraticBezierCurve3:dy,SplineCurve:f0});class fy extends li{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Yl[i](e,t))}return this}getPoint(t,e){const i=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=i){const a=s[r]-i,o=this.curves[r],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let i;for(let s=0,r=this.curves;s<r.length;s++){const a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,c=a.getPoints(o);for(let l=0;l<c.length;l++){const h=c[l];i&&i.equals(h)||(e.push(h),i=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const s=t.curves[e];this.curves.push(new Yl[s.type]().fromJSON(s))}return this}}class Kl extends fy{constructor(t){super(),this.type="Path",this.currentPoint=new nt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const i=new u0(this.currentPoint.clone(),new nt(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){const r=new d0(this.currentPoint.clone(),new nt(t,e),new nt(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,r,a){const o=new h0(this.currentPoint.clone(),new nt(t,e),new nt(i,s),new nt(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),i=new f0(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,r,a){const o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+o,e+c,i,s,r,a),this}absarc(t,e,i,s,r,a){return this.absellipse(t,e,i,i,s,r,a),this}ellipse(t,e,i,s,r,a,o,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,i,s,r,a,o,c),this}absellipse(t,e,i,s,r,a,o,c){const l=new Ph(t,e,i,s,r,a,o,c);if(this.curves.length>0){const u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class gc extends De{constructor(t=[new nt(0,-.5),new nt(.5,0),new nt(0,.5)],e=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:i,phiLength:s},e=Math.floor(e),s=qe(s,0,Math.PI*2);const r=[],a=[],o=[],c=[],l=[],h=1/e,u=new C,d=new nt,f=new C,m=new C,_=new C;let g=0,p=0;for(let v=0;v<=t.length-1;v++)switch(v){case 0:g=t[v+1].x-t[v].x,p=t[v+1].y-t[v].y,f.x=p*1,f.y=-g,f.z=p*0,_.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case t.length-1:c.push(_.x,_.y,_.z);break;default:g=t[v+1].x-t[v].x,p=t[v+1].y-t[v].y,f.x=p*1,f.y=-g,f.z=p*0,m.copy(f),f.x+=_.x,f.y+=_.y,f.z+=_.z,f.normalize(),c.push(f.x,f.y,f.z),_.copy(m)}for(let v=0;v<=e;v++){const x=i+v*h*s,y=Math.sin(x),A=Math.cos(x);for(let M=0;M<=t.length-1;M++){u.x=t[M].x*y,u.y=t[M].y,u.z=t[M].x*A,a.push(u.x,u.y,u.z),d.x=v/e,d.y=M/(t.length-1),o.push(d.x,d.y);const R=c[3*M+0]*y,N=c[3*M+1],b=c[3*M+0]*A;l.push(R,N,b)}}for(let v=0;v<e;v++)for(let x=0;x<t.length-1;x++){const y=x+v*t.length,A=y,M=y+t.length,R=y+t.length+1,N=y+1;r.push(A,M,N),r.push(R,N,M)}this.setIndex(r),this.setAttribute("position",new ee(a,3)),this.setAttribute("uv",new ee(o,2)),this.setAttribute("normal",new ee(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new gc(t.points,t.segments,t.phiStart,t.phiLength)}}class Jo extends gc{constructor(t=1,e=1,i=4,s=8){const r=new Kl;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(i),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:i,radialSegments:s}}static fromJSON(t){return new Jo(t.radius,t.length,t.capSegments,t.radialSegments)}}class Ih extends De{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);const r=[],a=[],o=[],c=[],l=new C,h=new nt;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){const f=i+u/e*s;l.x=t*Math.cos(f),l.y=t*Math.sin(f),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[d]/t+1)/2,h.y=(a[d+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new ee(a,3)),this.setAttribute("normal",new ee(o,3)),this.setAttribute("uv",new ee(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ih(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class We extends De{constructor(t=1,e=1,i=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],d=[],f=[];let m=0;const _=[],g=i/2;let p=0;v(),a===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new ee(u,3)),this.setAttribute("normal",new ee(d,3)),this.setAttribute("uv",new ee(f,2));function v(){const y=new C,A=new C;let M=0;const R=(e-t)/i;for(let N=0;N<=r;N++){const b=[],E=N/r,O=E*(e-t)+t;for(let Y=0;Y<=s;Y++){const tt=Y/s,P=tt*c+o,L=Math.sin(P),U=Math.cos(P);A.x=O*L,A.y=-E*i+g,A.z=O*U,u.push(A.x,A.y,A.z),y.set(L,R,U).normalize(),d.push(y.x,y.y,y.z),f.push(tt,1-E),b.push(m++)}_.push(b)}for(let N=0;N<s;N++)for(let b=0;b<r;b++){const E=_[b][N],O=_[b+1][N],Y=_[b+1][N+1],tt=_[b][N+1];h.push(E,O,tt),h.push(O,Y,tt),M+=6}l.addGroup(p,M,0),p+=M}function x(y){const A=m,M=new nt,R=new C;let N=0;const b=y===!0?t:e,E=y===!0?1:-1;for(let Y=1;Y<=s;Y++)u.push(0,g*E,0),d.push(0,E,0),f.push(.5,.5),m++;const O=m;for(let Y=0;Y<=s;Y++){const P=Y/s*c+o,L=Math.cos(P),U=Math.sin(P);R.x=b*U,R.y=g*E,R.z=b*L,u.push(R.x,R.y,R.z),d.push(0,E,0),M.x=L*.5+.5,M.y=U*.5*E+.5,f.push(M.x,M.y),m++}for(let Y=0;Y<s;Y++){const tt=A+Y,P=O+Y;y===!0?h.push(P,P+1,tt):h.push(P+1,P,tt),N+=3}l.addGroup(p,N,y===!0?1:2),p+=N}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new We(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Pn extends We{constructor(t=1,e=1,i=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,i,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new Pn(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Dh extends De{constructor(t=[],e=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:s};const r=[],a=[];o(s),l(i),h(),this.setAttribute("position",new ee(r,3)),this.setAttribute("normal",new ee(r.slice(),3)),this.setAttribute("uv",new ee(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(v){const x=new C,y=new C,A=new C;for(let M=0;M<e.length;M+=3)f(e[M+0],x),f(e[M+1],y),f(e[M+2],A),c(x,y,A,v)}function c(v,x,y,A){const M=A+1,R=[];for(let N=0;N<=M;N++){R[N]=[];const b=v.clone().lerp(y,N/M),E=x.clone().lerp(y,N/M),O=M-N;for(let Y=0;Y<=O;Y++)Y===0&&N===M?R[N][Y]=b:R[N][Y]=b.clone().lerp(E,Y/O)}for(let N=0;N<M;N++)for(let b=0;b<2*(M-N)-1;b++){const E=Math.floor(b/2);b%2===0?(d(R[N][E+1]),d(R[N+1][E]),d(R[N][E])):(d(R[N][E+1]),d(R[N+1][E+1]),d(R[N+1][E]))}}function l(v){const x=new C;for(let y=0;y<r.length;y+=3)x.x=r[y+0],x.y=r[y+1],x.z=r[y+2],x.normalize().multiplyScalar(v),r[y+0]=x.x,r[y+1]=x.y,r[y+2]=x.z}function h(){const v=new C;for(let x=0;x<r.length;x+=3){v.x=r[x+0],v.y=r[x+1],v.z=r[x+2];const y=g(v)/2/Math.PI+.5,A=p(v)/Math.PI+.5;a.push(y,1-A)}m(),u()}function u(){for(let v=0;v<a.length;v+=6){const x=a[v+0],y=a[v+2],A=a[v+4],M=Math.max(x,y,A),R=Math.min(x,y,A);M>.9&&R<.1&&(x<.2&&(a[v+0]+=1),y<.2&&(a[v+2]+=1),A<.2&&(a[v+4]+=1))}}function d(v){r.push(v.x,v.y,v.z)}function f(v,x){const y=v*3;x.x=t[y+0],x.y=t[y+1],x.z=t[y+2]}function m(){const v=new C,x=new C,y=new C,A=new C,M=new nt,R=new nt,N=new nt;for(let b=0,E=0;b<r.length;b+=9,E+=6){v.set(r[b+0],r[b+1],r[b+2]),x.set(r[b+3],r[b+4],r[b+5]),y.set(r[b+6],r[b+7],r[b+8]),M.set(a[E+0],a[E+1]),R.set(a[E+2],a[E+3]),N.set(a[E+4],a[E+5]),A.copy(v).add(x).add(y).divideScalar(3);const O=g(A);_(M,E+0,v,O),_(R,E+2,x,O),_(N,E+4,y,O)}}function _(v,x,y,A){A<0&&v.x===1&&(a[x]=v.x-1),y.x===0&&y.z===0&&(a[x]=A/2/Math.PI+.5)}function g(v){return Math.atan2(v.z,-v.x)}function p(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Dh(t.vertices,t.indices,t.radius,t.details)}}class ba extends Kl{constructor(t){super(t),this.uuid=kn(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let i=0,s=this.holes.length;i<s;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const s=t.holes[e];this.holes.push(new Kl().fromJSON(s))}return this}}const py={triangulate:function(n,t,e=2){const i=t&&t.length,s=i?t[0]*e:n.length;let r=p0(n,0,s,e,!0);const a=[];if(!r||r.next===r.prev)return a;let o,c,l,h,u,d,f;if(i&&(r=vy(n,t,r,e)),n.length>80*e){o=l=n[0],c=h=n[1];for(let m=e;m<s;m+=e)u=n[m],d=n[m+1],u<o&&(o=u),d<c&&(c=d),u>l&&(l=u),d>h&&(h=d);f=Math.max(l-o,h-c),f=f!==0?32767/f:0}return ha(r,a,e,o,c,f,0),a}};function p0(n,t,e,i,s){let r,a;if(s===Py(n,t,e,i)>0)for(r=t;r<e;r+=i)a=ef(r,n[r],n[r+1],a);else for(r=e-i;r>=t;r-=i)a=ef(r,n[r],n[r+1],a);return a&&_c(a,a.next)&&(da(a),a=a.next),a}function ys(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(_c(e,e.next)||Ne(e.prev,e,e.next)===0)){if(da(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function ha(n,t,e,i,s,r,a){if(!n)return;!a&&r&&Ey(n,i,s,r);let o=n,c,l;for(;n.prev!==n.next;){if(c=n.prev,l=n.next,r?gy(n,i,s,r):my(n)){t.push(c.i/e|0),t.push(n.i/e|0),t.push(l.i/e|0),da(n),n=l.next,o=l.next;continue}if(n=l,n===o){a?a===1?(n=_y(ys(n),t,e),ha(n,t,e,i,s,r,2)):a===2&&xy(n,t,e,i,s,r):ha(ys(n),t,e,i,s,r,1);break}}}function my(n){const t=n.prev,e=n,i=n.next;if(Ne(t,e,i)>=0)return!1;const s=t.x,r=e.x,a=i.x,o=t.y,c=e.y,l=i.y,h=s<r?s<a?s:a:r<a?r:a,u=o<c?o<l?o:l:c<l?c:l,d=s>r?s>a?s:a:r>a?r:a,f=o>c?o>l?o:l:c>l?c:l;let m=i.next;for(;m!==t;){if(m.x>=h&&m.x<=d&&m.y>=u&&m.y<=f&&cr(s,o,r,c,a,l,m.x,m.y)&&Ne(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function gy(n,t,e,i){const s=n.prev,r=n,a=n.next;if(Ne(s,r,a)>=0)return!1;const o=s.x,c=r.x,l=a.x,h=s.y,u=r.y,d=a.y,f=o<c?o<l?o:l:c<l?c:l,m=h<u?h<d?h:d:u<d?u:d,_=o>c?o>l?o:l:c>l?c:l,g=h>u?h>d?h:d:u>d?u:d,p=jl(f,m,t,e,i),v=jl(_,g,t,e,i);let x=n.prevZ,y=n.nextZ;for(;x&&x.z>=p&&y&&y.z<=v;){if(x.x>=f&&x.x<=_&&x.y>=m&&x.y<=g&&x!==s&&x!==a&&cr(o,h,c,u,l,d,x.x,x.y)&&Ne(x.prev,x,x.next)>=0||(x=x.prevZ,y.x>=f&&y.x<=_&&y.y>=m&&y.y<=g&&y!==s&&y!==a&&cr(o,h,c,u,l,d,y.x,y.y)&&Ne(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;x&&x.z>=p;){if(x.x>=f&&x.x<=_&&x.y>=m&&x.y<=g&&x!==s&&x!==a&&cr(o,h,c,u,l,d,x.x,x.y)&&Ne(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;y&&y.z<=v;){if(y.x>=f&&y.x<=_&&y.y>=m&&y.y<=g&&y!==s&&y!==a&&cr(o,h,c,u,l,d,y.x,y.y)&&Ne(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function _y(n,t,e){let i=n;do{const s=i.prev,r=i.next.next;!_c(s,r)&&m0(s,i,i.next,r)&&ua(s,r)&&ua(r,s)&&(t.push(s.i/e|0),t.push(i.i/e|0),t.push(r.i/e|0),da(i),da(i.next),i=n=r),i=i.next}while(i!==n);return ys(i)}function xy(n,t,e,i,s,r){let a=n;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Ay(a,o)){let c=g0(a,o);a=ys(a,a.next),c=ys(c,c.next),ha(a,t,e,i,s,r,0),ha(c,t,e,i,s,r,0);return}o=o.next}a=a.next}while(a!==n)}function vy(n,t,e,i){const s=[];let r,a,o,c,l;for(r=0,a=t.length;r<a;r++)o=t[r]*i,c=r<a-1?t[r+1]*i:n.length,l=p0(n,o,c,i,!1),l===l.next&&(l.steiner=!0),s.push(Ty(l));for(s.sort(yy),r=0;r<s.length;r++)e=My(s[r],e);return e}function yy(n,t){return n.x-t.x}function My(n,t){const e=Sy(n,t);if(!e)return t;const i=g0(e,n);return ys(i,i.next),ys(e,e.next)}function Sy(n,t){let e=t,i=-1/0,s;const r=n.x,a=n.y;do{if(a<=e.y&&a>=e.next.y&&e.next.y!==e.y){const d=e.x+(a-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=r&&d>i&&(i=d,s=e.x<e.next.x?e:e.next,d===r))return s}e=e.next}while(e!==t);if(!s)return null;const o=s,c=s.x,l=s.y;let h=1/0,u;e=s;do r>=e.x&&e.x>=c&&r!==e.x&&cr(a<l?r:i,a,c,l,a<l?i:r,a,e.x,e.y)&&(u=Math.abs(a-e.y)/(r-e.x),ua(e,n)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&by(s,e)))&&(s=e,h=u)),e=e.next;while(e!==o);return s}function by(n,t){return Ne(n.prev,n,t.prev)<0&&Ne(t.next,n,n.next)<0}function Ey(n,t,e,i){let s=n;do s.z===0&&(s.z=jl(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,wy(s)}function wy(n){let t,e,i,s,r,a,o,c,l=1;do{for(e=n,n=null,r=null,a=0;e;){for(a++,i=e,o=0,t=0;t<l&&(o++,i=i.nextZ,!!i);t++);for(c=l;o>0||c>0&&i;)o!==0&&(c===0||!i||e.z<=i.z)?(s=e,e=e.nextZ,o--):(s=i,i=i.nextZ,c--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;e=i}r.nextZ=null,l*=2}while(a>1);return n}function jl(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function Ty(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function cr(n,t,e,i,s,r,a,o){return(s-a)*(t-o)>=(n-a)*(r-o)&&(n-a)*(i-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(i-o)}function Ay(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!Ry(n,t)&&(ua(n,t)&&ua(t,n)&&Cy(n,t)&&(Ne(n.prev,n,t.prev)||Ne(n,t.prev,t))||_c(n,t)&&Ne(n.prev,n,n.next)>0&&Ne(t.prev,t,t.next)>0)}function Ne(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function _c(n,t){return n.x===t.x&&n.y===t.y}function m0(n,t,e,i){const s=go(Ne(n,t,e)),r=go(Ne(n,t,i)),a=go(Ne(e,i,n)),o=go(Ne(e,i,t));return!!(s!==r&&a!==o||s===0&&mo(n,e,t)||r===0&&mo(n,i,t)||a===0&&mo(e,n,i)||o===0&&mo(e,t,i))}function mo(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function go(n){return n>0?1:n<0?-1:0}function Ry(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&m0(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function ua(n,t){return Ne(n.prev,n,n.next)<0?Ne(n,t,n.next)>=0&&Ne(n,n.prev,t)>=0:Ne(n,t,n.prev)<0||Ne(n,n.next,t)<0}function Cy(n,t){let e=n,i=!1;const s=(n.x+t.x)/2,r=(n.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function g0(n,t){const e=new Zl(n.i,n.x,n.y),i=new Zl(t.i,t.x,t.y),s=n.next,r=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function ef(n,t,e,i){const s=new Zl(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function da(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Zl(n,t,e){this.i=n,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Py(n,t,e,i){let s=0;for(let r=t,a=e-i;r<e;r+=i)s+=(n[a]-n[r])*(n[r+1]+n[a+1]),a=r;return s}class qi{static area(t){const e=t.length;let i=0;for(let s=e-1,r=0;r<e;s=r++)i+=t[s].x*t[r].y-t[r].x*t[s].y;return i*.5}static isClockWise(t){return qi.area(t)<0}static triangulateShape(t,e){const i=[],s=[],r=[];nf(t),sf(i,t);let a=t.length;e.forEach(nf);for(let c=0;c<e.length;c++)s.push(a),a+=e[c].length,sf(i,e[c]);const o=py.triangulate(i,s);for(let c=0;c<o.length;c+=3)r.push(o.slice(c,c+3));return r}}function nf(n){const t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function sf(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}class xc extends De{constructor(t=new ba([new nt(.5,.5),new nt(-.5,.5),new nt(-.5,-.5),new nt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const i=this,s=[],r=[];for(let o=0,c=t.length;o<c;o++){const l=t[o];a(l)}this.setAttribute("position",new ee(s,3)),this.setAttribute("uv",new ee(r,2)),this.computeVertexNormals();function a(o){const c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,m=e.bevelSize!==void 0?e.bevelSize:f-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,v=e.UVGenerator!==void 0?e.UVGenerator:Ly;let x,y=!1,A,M,R,N;p&&(x=p.getSpacedPoints(h),y=!0,d=!1,A=p.computeFrenetFrames(h,!1),M=new C,R=new C,N=new C),d||(g=0,f=0,m=0,_=0);const b=o.extractPoints(l);let E=b.shape;const O=b.holes;if(!qi.isClockWise(E)){E=E.reverse();for(let I=0,dt=O.length;I<dt;I++){const J=O[I];qi.isClockWise(J)&&(O[I]=J.reverse())}}const tt=qi.triangulateShape(E,O),P=E;for(let I=0,dt=O.length;I<dt;I++){const J=O[I];E=E.concat(J)}function L(I,dt,J){return dt||console.error("THREE.ExtrudeGeometry: vec does not exist"),I.clone().addScaledVector(dt,J)}const U=E.length,F=tt.length;function H(I,dt,J){let lt,Z,Ct;const vt=I.x-dt.x,w=I.y-dt.y,S=J.x-I.x,k=J.y-I.y,at=vt*vt+w*w,it=vt*k-w*S;if(Math.abs(it)>Number.EPSILON){const et=Math.sqrt(at),Et=Math.sqrt(S*S+k*k),mt=dt.x-w/et,St=dt.y+vt/et,Dt=J.x-k/Et,jt=J.y+S/Et,st=((Dt-mt)*k-(jt-St)*S)/(vt*k-w*S);lt=mt+vt*st-I.x,Z=St+w*st-I.y;const he=lt*lt+Z*Z;if(he<=2)return new nt(lt,Z);Ct=Math.sqrt(he/2)}else{let et=!1;vt>Number.EPSILON?S>Number.EPSILON&&(et=!0):vt<-Number.EPSILON?S<-Number.EPSILON&&(et=!0):Math.sign(w)===Math.sign(k)&&(et=!0),et?(lt=-w,Z=vt,Ct=Math.sqrt(at)):(lt=vt,Z=w,Ct=Math.sqrt(at/2))}return new nt(lt/Ct,Z/Ct)}const B=[];for(let I=0,dt=P.length,J=dt-1,lt=I+1;I<dt;I++,J++,lt++)J===dt&&(J=0),lt===dt&&(lt=0),B[I]=H(P[I],P[J],P[lt]);const X=[];let j,ht=B.concat();for(let I=0,dt=O.length;I<dt;I++){const J=O[I];j=[];for(let lt=0,Z=J.length,Ct=Z-1,vt=lt+1;lt<Z;lt++,Ct++,vt++)Ct===Z&&(Ct=0),vt===Z&&(vt=0),j[lt]=H(J[lt],J[Ct],J[vt]);X.push(j),ht=ht.concat(j)}for(let I=0;I<g;I++){const dt=I/g,J=f*Math.cos(dt*Math.PI/2),lt=m*Math.sin(dt*Math.PI/2)+_;for(let Z=0,Ct=P.length;Z<Ct;Z++){const vt=L(P[Z],B[Z],lt);Mt(vt.x,vt.y,-J)}for(let Z=0,Ct=O.length;Z<Ct;Z++){const vt=O[Z];j=X[Z];for(let w=0,S=vt.length;w<S;w++){const k=L(vt[w],j[w],lt);Mt(k.x,k.y,-J)}}}const W=m+_;for(let I=0;I<U;I++){const dt=d?L(E[I],ht[I],W):E[I];y?(R.copy(A.normals[0]).multiplyScalar(dt.x),M.copy(A.binormals[0]).multiplyScalar(dt.y),N.copy(x[0]).add(R).add(M),Mt(N.x,N.y,N.z)):Mt(dt.x,dt.y,0)}for(let I=1;I<=h;I++)for(let dt=0;dt<U;dt++){const J=d?L(E[dt],ht[dt],W):E[dt];y?(R.copy(A.normals[I]).multiplyScalar(J.x),M.copy(A.binormals[I]).multiplyScalar(J.y),N.copy(x[I]).add(R).add(M),Mt(N.x,N.y,N.z)):Mt(J.x,J.y,u/h*I)}for(let I=g-1;I>=0;I--){const dt=I/g,J=f*Math.cos(dt*Math.PI/2),lt=m*Math.sin(dt*Math.PI/2)+_;for(let Z=0,Ct=P.length;Z<Ct;Z++){const vt=L(P[Z],B[Z],lt);Mt(vt.x,vt.y,u+J)}for(let Z=0,Ct=O.length;Z<Ct;Z++){const vt=O[Z];j=X[Z];for(let w=0,S=vt.length;w<S;w++){const k=L(vt[w],j[w],lt);y?Mt(k.x,k.y+x[h-1].y,x[h-1].x+J):Mt(k.x,k.y,u+J)}}}$(),gt();function $(){const I=s.length/3;if(d){let dt=0,J=U*dt;for(let lt=0;lt<F;lt++){const Z=tt[lt];Ot(Z[2]+J,Z[1]+J,Z[0]+J)}dt=h+g*2,J=U*dt;for(let lt=0;lt<F;lt++){const Z=tt[lt];Ot(Z[0]+J,Z[1]+J,Z[2]+J)}}else{for(let dt=0;dt<F;dt++){const J=tt[dt];Ot(J[2],J[1],J[0])}for(let dt=0;dt<F;dt++){const J=tt[dt];Ot(J[0]+U*h,J[1]+U*h,J[2]+U*h)}}i.addGroup(I,s.length/3-I,0)}function gt(){const I=s.length/3;let dt=0;Tt(P,dt),dt+=P.length;for(let J=0,lt=O.length;J<lt;J++){const Z=O[J];Tt(Z,dt),dt+=Z.length}i.addGroup(I,s.length/3-I,1)}function Tt(I,dt){let J=I.length;for(;--J>=0;){const lt=J;let Z=J-1;Z<0&&(Z=I.length-1);for(let Ct=0,vt=h+g*2;Ct<vt;Ct++){const w=U*Ct,S=U*(Ct+1),k=dt+lt+w,at=dt+Z+w,it=dt+Z+S,et=dt+lt+S;qt(k,at,it,et)}}}function Mt(I,dt,J){c.push(I),c.push(dt),c.push(J)}function Ot(I,dt,J){At(I),At(dt),At(J);const lt=s.length/3,Z=v.generateTopUV(i,s,lt-3,lt-2,lt-1);Vt(Z[0]),Vt(Z[1]),Vt(Z[2])}function qt(I,dt,J,lt){At(I),At(dt),At(lt),At(dt),At(J),At(lt);const Z=s.length/3,Ct=v.generateSideWallUV(i,s,Z-6,Z-3,Z-2,Z-1);Vt(Ct[0]),Vt(Ct[1]),Vt(Ct[3]),Vt(Ct[1]),Vt(Ct[2]),Vt(Ct[3])}function At(I){s.push(c[I*3+0]),s.push(c[I*3+1]),s.push(c[I*3+2])}function Vt(I){r.push(I.x),r.push(I.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return Iy(e,i,t)}static fromJSON(t,e){const i=[];for(let r=0,a=t.shapes.length;r<a;r++){const o=e[t.shapes[r]];i.push(o)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Yl[s.type]().fromJSON(s)),new xc(i,t.options)}}const Ly={generateTopUV:function(n,t,e,i,s){const r=t[e*3],a=t[e*3+1],o=t[i*3],c=t[i*3+1],l=t[s*3],h=t[s*3+1];return[new nt(r,a),new nt(o,c),new nt(l,h)]},generateSideWallUV:function(n,t,e,i,s,r){const a=t[e*3],o=t[e*3+1],c=t[e*3+2],l=t[i*3],h=t[i*3+1],u=t[i*3+2],d=t[s*3],f=t[s*3+1],m=t[s*3+2],_=t[r*3],g=t[r*3+1],p=t[r*3+2];return Math.abs(o-h)<Math.abs(a-l)?[new nt(a,1-c),new nt(l,1-u),new nt(d,1-m),new nt(_,1-p)]:[new nt(o,1-c),new nt(h,1-u),new nt(f,1-m),new nt(g,1-p)]}};function Iy(n,t,e){if(e.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){const r=n[i];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Uh extends De{constructor(t=.5,e=1,i=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:a},i=Math.max(3,i),s=Math.max(1,s);const o=[],c=[],l=[],h=[];let u=t;const d=(e-t)/s,f=new C,m=new nt;for(let _=0;_<=s;_++){for(let g=0;g<=i;g++){const p=r+g/i*a;f.x=u*Math.cos(p),f.y=u*Math.sin(p),c.push(f.x,f.y,f.z),l.push(0,0,1),m.x=(f.x/e+1)/2,m.y=(f.y/e+1)/2,h.push(m.x,m.y)}u+=d}for(let _=0;_<s;_++){const g=_*(i+1);for(let p=0;p<i;p++){const v=p+g,x=v,y=v+i+1,A=v+i+2,M=v+1;o.push(x,y,M),o.push(y,A,M)}}this.setIndex(o),this.setAttribute("position",new ee(c,3)),this.setAttribute("normal",new ee(l,3)),this.setAttribute("uv",new ee(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Uh(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Nh extends De{constructor(t=new ba([new nt(0,.5),new nt(-.5,-.5),new nt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const i=[],s=[],r=[],a=[];let o=0,c=0;if(Array.isArray(t)===!1)l(t);else for(let h=0;h<t.length;h++)l(t[h]),this.addGroup(o,c,h),o+=c,c=0;this.setIndex(i),this.setAttribute("position",new ee(s,3)),this.setAttribute("normal",new ee(r,3)),this.setAttribute("uv",new ee(a,2));function l(h){const u=s.length/3,d=h.extractPoints(e);let f=d.shape;const m=d.holes;qi.isClockWise(f)===!1&&(f=f.reverse());for(let g=0,p=m.length;g<p;g++){const v=m[g];qi.isClockWise(v)===!0&&(m[g]=v.reverse())}const _=qi.triangulateShape(f,m);for(let g=0,p=m.length;g<p;g++){const v=m[g];f=f.concat(v)}for(let g=0,p=f.length;g<p;g++){const v=f[g];s.push(v.x,v.y,0),r.push(0,0,1),a.push(v.x,v.y)}for(let g=0,p=_.length;g<p;g++){const v=_[g],x=v[0]+u,y=v[1]+u,A=v[2]+u;i.push(x,y,A),c+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return Dy(e,t)}static fromJSON(t,e){const i=[];for(let s=0,r=t.shapes.length;s<r;s++){const a=e[t.shapes[s]];i.push(a)}return new Nh(i,t.curveSegments)}}function Dy(n,t){if(t.shapes=[],Array.isArray(n))for(let e=0,i=n.length;e<i;e++){const s=n[e];t.shapes.push(s.uuid)}else t.shapes.push(n.uuid);return t}class Cn extends De{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const c=Math.min(a+o,Math.PI);let l=0;const h=[],u=new C,d=new C,f=[],m=[],_=[],g=[];for(let p=0;p<=i;p++){const v=[],x=p/i;let y=0;p===0&&a===0?y=.5/e:p===i&&c===Math.PI&&(y=-.5/e);for(let A=0;A<=e;A++){const M=A/e;u.x=-t*Math.cos(s+M*r)*Math.sin(a+x*o),u.y=t*Math.cos(a+x*o),u.z=t*Math.sin(s+M*r)*Math.sin(a+x*o),m.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),g.push(M+y,1-x),v.push(l++)}h.push(v)}for(let p=0;p<i;p++)for(let v=0;v<e;v++){const x=h[p][v+1],y=h[p][v],A=h[p+1][v],M=h[p+1][v+1];(p!==0||a>0)&&f.push(x,y,M),(p!==i-1||c<Math.PI)&&f.push(y,A,M)}this.setIndex(f),this.setAttribute("position",new ee(m,3)),this.setAttribute("normal",new ee(_,3)),this.setAttribute("uv",new ee(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Cn(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Oh extends Dh{constructor(t=1,e=0){const i=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],s=[2,1,0,0,3,2,1,3,0,2,3,1];super(i,s,t,e),this.type="TetrahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Oh(t.radius,t.detail)}}class Ei extends De{constructor(t=1,e=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);const a=[],o=[],c=[],l=[],h=new C,u=new C,d=new C;for(let f=0;f<=i;f++)for(let m=0;m<=s;m++){const _=m/s*r,g=f/i*Math.PI*2;u.x=(t+e*Math.cos(g))*Math.cos(_),u.y=(t+e*Math.cos(g))*Math.sin(_),u.z=e*Math.sin(g),o.push(u.x,u.y,u.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(m/s),l.push(f/i)}for(let f=1;f<=i;f++)for(let m=1;m<=s;m++){const _=(s+1)*f+m-1,g=(s+1)*(f-1)+m-1,p=(s+1)*(f-1)+m,v=(s+1)*f+m;a.push(_,g,v),a.push(g,p,v)}this.setIndex(a),this.setAttribute("position",new ee(o,3)),this.setAttribute("normal",new ee(c,3)),this.setAttribute("uv",new ee(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ei(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Uy extends ci{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new wt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new wt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fc,this.normalScale=new nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class rw extends Uy{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new nt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return qe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new wt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new wt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new wt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class _0 extends ci{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new wt(16777215),this.specular=new wt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new wt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fc,this.normalScale=new nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=uc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class $n extends ci{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new wt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new wt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fc,this.normalScale=new nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=uc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}function _o(n,t,e){return!n||!e&&n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function Ny(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Oy(n){function t(s,r){return n[s]-n[r]}const e=n.length,i=new Array(e);for(let s=0;s!==e;++s)i[s]=s;return i.sort(t),i}function rf(n,t,e){const i=n.length,s=new n.constructor(i);for(let r=0,a=0;a!==i;++r){const o=e[r]*t;for(let c=0;c!==t;++c)s[a++]=n[o+c]}return s}function x0(n,t,e,i){let s=1,r=n[0];for(;r!==void 0&&r[i]===void 0;)r=n[s++];if(r===void 0)return;let a=r[i];if(a!==void 0)if(Array.isArray(a))do a=r[i],a!==void 0&&(t.push(r.time),e.push.apply(e,a)),r=n[s++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[i],a!==void 0&&(t.push(r.time),a.toArray(e,e.length)),r=n[s++];while(r!==void 0);else do a=r[i],a!==void 0&&(t.push(r.time),e.push(a)),r=n[s++];while(r!==void 0)}class vc{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){const e=this.parameterPositions;let i=this._cachedIndex,s=e[i],r=e[i-1];t:{e:{let a;n:{i:if(!(t<s)){for(let o=i+2;;){if(s===void 0){if(t<r)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=e[++i],t<s)break e}a=e.length;break n}if(!(t>=r)){const o=e[1];t<o&&(i=2,r=o);for(let c=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(s=r,r=e[--i-1],t>=r)break e}a=i,i=0;break n}break t}for(;i<a;){const o=i+a>>>1;t<e[o]?a=o:i=o+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){const e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=i[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Fy extends vc{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:sr,endingEnd:sr}}intervalChanged_(t,e,i){const s=this.parameterPositions;let r=t-2,a=t+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case rr:r=t,o=2*e-i;break;case Vo:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=i}if(c===void 0)switch(this.getSettings_().endingEnd){case rr:a=t,c=2*i-e;break;case Vo:a=1,c=i+s[1]-s[0];break;default:a=t-1,c=e}const l=(i-e)*.5,h=this.valueSize;this._weightPrev=l/(e-o),this._weightNext=l/(c-i),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,i,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,m=(i-e)/(s-e),_=m*m,g=_*m,p=-d*g+2*d*_-d*m,v=(1+d)*g+(-1.5-2*d)*_+(-.5+d)*m+1,x=(-1-f)*g+(1.5+f)*_+.5*m,y=f*g-f*_;for(let A=0;A!==o;++A)r[A]=p*a[h+A]+v*a[l+A]+x*a[c+A]+y*a[u+A];return r}}class v0 extends vc{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=(i-e)/(s-e),u=1-h;for(let d=0;d!==o;++d)r[d]=a[l+d]*u+a[c+d]*h;return r}}class zy extends vc{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}}class hi{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=_o(e,this.TimeBufferType),this.values=_o(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){const e=t.constructor;let i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:_o(t.times,Array),values:_o(t.values,Array)};const s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new zy(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new v0(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Fy(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Ho:e=this.InterpolantFactoryMethodDiscrete;break;case Go:e=this.InterpolantFactoryMethodLinear;break;case Bc:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ho;case this.InterpolantFactoryMethodLinear:return Go;case this.InterpolantFactoryMethodSmooth:return Bc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){const e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t}return this}scale(t){if(t!==1){const e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t}return this}trim(t,e){const i=this.times,s=i.length;let r=0,a=s-1;for(;r!==s&&i[r]<t;)++r;for(;a!==-1&&i[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);const o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0;const e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);const i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){const c=i[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),t=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),t=!1;break}a=c}if(s!==void 0&&Ny(s))for(let o=0,c=s.length;o!==c;++o){const l=s[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),t=!1;break}}return t}optimize(){const t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Bc,r=t.length-1;let a=1;for(let o=1;o<r;++o){let c=!1;const l=t[o],h=t[o+1];if(l!==h&&(o!==1||l!==t[0]))if(s)c=!0;else{const u=o*i,d=u-i,f=u+i;for(let m=0;m!==i;++m){const _=e[u+m];if(_!==e[d+m]||_!==e[f+m]){c=!0;break}}}if(c){if(o!==a){t[a]=t[o];const u=o*i,d=a*i;for(let f=0;f!==i;++f)e[d+f]=e[u+f]}++a}}if(r>0){t[a]=t[r];for(let o=r*i,c=a*i,l=0;l!==i;++l)e[c+l]=e[o+l];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*i)):(this.times=t,this.values=e),this}clone(){const t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}}hi.prototype.TimeBufferType=Float32Array;hi.prototype.ValueBufferType=Float32Array;hi.prototype.DefaultInterpolation=Go;class Dr extends hi{}Dr.prototype.ValueTypeName="bool";Dr.prototype.ValueBufferType=Array;Dr.prototype.DefaultInterpolation=Ho;Dr.prototype.InterpolantFactoryMethodLinear=void 0;Dr.prototype.InterpolantFactoryMethodSmooth=void 0;class y0 extends hi{}y0.prototype.ValueTypeName="color";class $o extends hi{}$o.prototype.ValueTypeName="number";class By extends vc{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(i-e)/(s-e);let l=t*o;for(let h=l+o;l!==h;l+=4)Mn.slerpFlat(r,0,a,l-o,a,l,c);return r}}class Ea extends hi{InterpolantFactoryMethodLinear(t){return new By(this.times,this.values,this.getValueSize(),t)}}Ea.prototype.ValueTypeName="quaternion";Ea.prototype.DefaultInterpolation=Go;Ea.prototype.InterpolantFactoryMethodSmooth=void 0;class Ur extends hi{}Ur.prototype.ValueTypeName="string";Ur.prototype.ValueBufferType=Array;Ur.prototype.DefaultInterpolation=Ho;Ur.prototype.InterpolantFactoryMethodLinear=void 0;Ur.prototype.InterpolantFactoryMethodSmooth=void 0;class Qo extends hi{}Qo.prototype.ValueTypeName="vector";class af{constructor(t,e=-1,i,s=Mh){this.name=t,this.tracks=i,this.duration=e,this.blendMode=s,this.uuid=kn(),this.duration<0&&this.resetDuration()}static parse(t){const e=[],i=t.tracks,s=1/(t.fps||1);for(let a=0,o=i.length;a!==o;++a)e.push(Hy(i[a]).scale(s));const r=new this(t.name,t.duration,e,t.blendMode);return r.uuid=t.uuid,r}static toJSON(t){const e=[],i=t.tracks,s={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode};for(let r=0,a=i.length;r!==a;++r)e.push(hi.toJSON(i[r]));return s}static CreateFromMorphTargetSequence(t,e,i,s){const r=e.length,a=[];for(let o=0;o<r;o++){let c=[],l=[];c.push((o+r-1)%r,o,(o+1)%r),l.push(0,1,0);const h=Oy(c);c=rf(c,1,h),l=rf(l,1,h),!s&&c[0]===0&&(c.push(r),l.push(l[0])),a.push(new $o(".morphTargetInfluences["+e[o].name+"]",c,l).scale(1/i))}return new this(t,-1,a)}static findByName(t,e){let i=t;if(!Array.isArray(t)){const s=t;i=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<i.length;s++)if(i[s].name===e)return i[s];return null}static CreateClipsFromMorphTargetSequences(t,e,i){const s={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,c=t.length;o<c;o++){const l=t[o],h=l.name.match(r);if(h&&h.length>1){const u=h[1];let d=s[u];d||(s[u]=d=[]),d.push(l)}}const a=[];for(const o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],e,i));return a}static parseAnimation(t,e){if(!t)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=function(u,d,f,m,_){if(f.length!==0){const g=[],p=[];x0(f,g,p,m),g.length!==0&&_.push(new u(d,g,p))}},s=[],r=t.name||"default",a=t.fps||30,o=t.blendMode;let c=t.length||-1;const l=t.hierarchy||[];for(let u=0;u<l.length;u++){const d=l[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let m;for(m=0;m<d.length;m++)if(d[m].morphTargets)for(let _=0;_<d[m].morphTargets.length;_++)f[d[m].morphTargets[_]]=-1;for(const _ in f){const g=[],p=[];for(let v=0;v!==d[m].morphTargets.length;++v){const x=d[m];g.push(x.time),p.push(x.morphTarget===_?1:0)}s.push(new $o(".morphTargetInfluence["+_+"]",g,p))}c=f.length*a}else{const f=".bones["+e[u].name+"]";i(Qo,f+".position",d,"pos",s),i(Ea,f+".quaternion",d,"rot",s),i(Qo,f+".scale",d,"scl",s)}}return s.length===0?null:new this(r,c,s,o)}resetDuration(){const t=this.tracks;let e=0;for(let i=0,s=t.length;i!==s;++i){const r=this.tracks[i];e=Math.max(e,r.times[r.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){const t=[];for(let e=0;e<this.tracks.length;e++)t.push(this.tracks[e].clone());return new this.constructor(this.name,this.duration,t,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function ky(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return $o;case"vector":case"vector2":case"vector3":case"vector4":return Qo;case"color":return y0;case"quaternion":return Ea;case"bool":case"boolean":return Dr;case"string":return Ur}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function Hy(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const t=ky(n.type);if(n.times===void 0){const e=[],i=[];x0(n.keys,e,i,"value"),n.times=e,n.values=i}return t.parse!==void 0?t.parse(n):new t(n.name,n.times,n.values,n.interpolation)}const Hi={enabled:!1,files:{},add:function(n,t){this.enabled!==!1&&(this.files[n]=t)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class Gy{constructor(t,e,i){const s=this;let r=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){const u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){const f=l[u],m=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null}}}const Vy=new Gy;class wa{constructor(t){this.manager=t!==void 0?t:Vy,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}wa.DEFAULT_MATERIAL_NAME="__DEFAULT";const _i={};class Wy extends Error{constructor(t,e){super(t),this.response=e}}class aw extends wa{constructor(t){super(t)}load(t,e,i,s){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=Hi.get(t);if(r!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0),r;if(_i[t]!==void 0){_i[t].push({onLoad:e,onProgress:i,onError:s});return}_i[t]=[],_i[t].push({onLoad:e,onProgress:i,onError:s});const a=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const h=_i[t],u=l.body.getReader(),d=l.headers.get("Content-Length")||l.headers.get("X-File-Size"),f=d?parseInt(d):0,m=f!==0;let _=0;const g=new ReadableStream({start(p){v();function v(){u.read().then(({done:x,value:y})=>{if(x)p.close();else{_+=y.byteLength;const A=new ProgressEvent("progress",{lengthComputable:m,loaded:_,total:f});for(let M=0,R=h.length;M<R;M++){const N=h[M];N.onProgress&&N.onProgress(A)}p.enqueue(y),v()}})}}});return new Response(g)}else throw new Wy(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return l.json();default:if(o===void 0)return l.text();{const u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(m=>f.decode(m))}}}).then(l=>{Hi.add(t,l);const h=_i[t];delete _i[t];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onLoad&&f.onLoad(l)}}).catch(l=>{const h=_i[t];if(h===void 0)throw this.manager.itemError(t),l;delete _i[t];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onError&&f.onError(l)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class Xy extends wa{constructor(t){super(t)}load(t,e,i,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,a=Hi.get(t);if(a!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0),a;const o=la("img");function c(){h(),Hi.add(t,this),e&&e(this),r.manager.itemEnd(t)}function l(u){h(),s&&s(u),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(t),o.src=t,o}}class ow extends wa{constructor(t){super(t)}load(t,e,i,s){const r=new dn,a=new Xy(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){r.image=o,r.needsUpdate=!0,e!==void 0&&e(r)},i,s),r}}class yc extends Ie{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new wt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}class M0 extends yc{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ie.DEFAULT_UP),this.updateMatrix(),this.groundColor=new wt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const gl=new zt,of=new C,cf=new C;class Fh{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new nt(512,512),this.map=null,this.mapPass=null,this.matrix=new zt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new wh,this._frameExtents=new nt(1,1),this._viewportCount=1,this._viewports=[new ye(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;of.setFromMatrixPosition(t.matrixWorld),e.position.copy(of),cf.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(cf),e.updateMatrixWorld(),gl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(gl),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(gl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class qy extends Fh{constructor(){super(new _n(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,i=br*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(i!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=i,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class cw extends yc{constructor(t,e,i=0,s=Math.PI/3,r=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ie.DEFAULT_UP),this.updateMatrix(),this.target=new Ie,this.distance=i,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new qy}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const lf=new zt,qr=new C,_l=new C;class Yy extends Fh{constructor(){super(new _n(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new nt(4,2),this._viewportCount=6,this._viewports=[new ye(2,1,1,1),new ye(0,1,1,1),new ye(3,1,1,1),new ye(1,1,1,1),new ye(3,0,1,1),new ye(1,0,1,1)],this._cubeDirections=[new C(1,0,0),new C(-1,0,0),new C(0,0,1),new C(0,0,-1),new C(0,1,0),new C(0,-1,0)],this._cubeUps=[new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,0,1),new C(0,0,-1)]}updateMatrices(t,e=0){const i=this.camera,s=this.matrix,r=t.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),qr.setFromMatrixPosition(t.matrixWorld),i.position.copy(qr),_l.copy(i.position),_l.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(_l),i.updateMatrixWorld(),s.makeTranslation(-qr.x,-qr.y,-qr.z),lf.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(lf)}}class Ta extends yc{constructor(t,e,i=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Yy}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Ky extends Fh{constructor(){super(new jp(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class zh extends yc{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ie.DEFAULT_UP),this.updateMatrix(),this.target=new Ie,this.shadow=new Ky}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class lw{static decodeText(t){if(typeof TextDecoder<"u")return new TextDecoder().decode(t);let e="";for(let i=0,s=t.length;i<s;i++)e+=String.fromCharCode(t[i]);try{return decodeURIComponent(escape(e))}catch{return e}}static extractUrlBase(t){const e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}}class hw extends wa{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(t){return this.options=t,this}load(t,e,i,s){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,a=Hi.get(t);if(a!==void 0){if(r.manager.itemStart(t),a.then){a.then(l=>{e&&e(l),r.manager.itemEnd(t)}).catch(l=>{s&&s(l)});return}return setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0),a}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;const c=fetch(t,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return Hi.add(t,l),e&&e(l),r.manager.itemEnd(t),l}).catch(function(l){s&&s(l),Hi.remove(t),r.manager.itemError(t),r.manager.itemEnd(t)});Hi.add(t,c),r.manager.itemStart(t)}}class jy{constructor(t,e,i){this.binding=t,this.valueSize=i;let s,r,a;switch(e){case"quaternion":s=this._slerp,r=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(i*6),this._workIndex=5;break;case"string":case"bool":s=this._select,r=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(i*5);break;default:s=this._lerp,r=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(i*5)}this._mixBufferRegion=s,this._mixBufferRegionAdditive=r,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(t,e){const i=this.buffer,s=this.valueSize,r=t*s+s;let a=this.cumulativeWeight;if(a===0){for(let o=0;o!==s;++o)i[r+o]=i[o];a=e}else{a+=e;const o=e/a;this._mixBufferRegion(i,r,0,o,s)}this.cumulativeWeight=a}accumulateAdditive(t){const e=this.buffer,i=this.valueSize,s=i*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(e,s,0,t,i),this.cumulativeWeightAdditive+=t}apply(t){const e=this.valueSize,i=this.buffer,s=t*e+e,r=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const c=e*this._origIndex;this._mixBufferRegion(i,s,c,1-r,e)}a>0&&this._mixBufferRegionAdditive(i,s,this._addIndex*e,1,e);for(let c=e,l=e+e;c!==l;++c)if(i[c]!==i[c+e]){o.setValue(i,s);break}}saveOriginalState(){const t=this.binding,e=this.buffer,i=this.valueSize,s=i*this._origIndex;t.getValue(e,s);for(let r=i,a=s;r!==a;++r)e[r]=e[s+r%i];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const t=this.valueSize*3;this.binding.setValue(this.buffer,t)}_setAdditiveIdentityNumeric(){const t=this._addIndex*this.valueSize,e=t+this.valueSize;for(let i=t;i<e;i++)this.buffer[i]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const t=this._origIndex*this.valueSize,e=this._addIndex*this.valueSize;for(let i=0;i<this.valueSize;i++)this.buffer[e+i]=this.buffer[t+i]}_select(t,e,i,s,r){if(s>=.5)for(let a=0;a!==r;++a)t[e+a]=t[i+a]}_slerp(t,e,i,s){Mn.slerpFlat(t,e,t,e,t,i,s)}_slerpAdditive(t,e,i,s,r){const a=this._workIndex*r;Mn.multiplyQuaternionsFlat(t,a,t,e,t,i),Mn.slerpFlat(t,e,t,e,t,a,s)}_lerp(t,e,i,s,r){const a=1-s;for(let o=0;o!==r;++o){const c=e+o;t[c]=t[c]*a+t[i+o]*s}}_lerpAdditive(t,e,i,s,r){for(let a=0;a!==r;++a){const o=e+a;t[o]=t[o]+t[i+a]*s}}}const Bh="\\[\\]\\.:\\/",Zy=new RegExp("["+Bh+"]","g"),kh="[^"+Bh+"]",Jy="[^"+Bh.replace("\\.","")+"]",$y=/((?:WC+[\/:])*)/.source.replace("WC",kh),Qy=/(WCOD+)?/.source.replace("WCOD",Jy),tM=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",kh),eM=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",kh),nM=new RegExp("^"+$y+Qy+tM+eM+"$"),iM=["material","materials","bones","map"];class sM{constructor(t,e,i){const s=i||ge.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();const i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){const i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}}class ge{constructor(t,e,i){this.path=e,this.parsedPath=i||ge.parseTrackName(e),this.node=ge.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new ge.Composite(t,e,i):new ge(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Zy,"")}static parseTrackName(t){const e=nM.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);const i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=i.nodeName.substring(s+1);iM.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){const i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){const i=function(r){for(let a=0;a<r.length;a++){const o=r[a];if(o.name===e||o.uuid===e)return o;const c=i(o.children);if(c)return c}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node;const e=this.parsedPath,i=e.objectName,s=e.propertyName;let r=e.propertyIndex;if(t||(t=ge.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=e.objectIndex;switch(i){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}const a=t[s];if(a===void 0){const l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}ge.Composite=sM;ge.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ge.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ge.prototype.GetterByBindingType=[ge.prototype._getValue_direct,ge.prototype._getValue_array,ge.prototype._getValue_arrayElement,ge.prototype._getValue_toArray];ge.prototype.SetterByBindingTypeAndVersioning=[[ge.prototype._setValue_direct,ge.prototype._setValue_direct_setNeedsUpdate,ge.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ge.prototype._setValue_array,ge.prototype._setValue_array_setNeedsUpdate,ge.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ge.prototype._setValue_arrayElement,ge.prototype._setValue_arrayElement_setNeedsUpdate,ge.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ge.prototype._setValue_fromArray,ge.prototype._setValue_fromArray_setNeedsUpdate,ge.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class rM{constructor(t,e,i=null,s=e.blendMode){this._mixer=t,this._clip=e,this._localRoot=i,this.blendMode=s;const r=e.tracks,a=r.length,o=new Array(a),c={endingStart:sr,endingEnd:sr};for(let l=0;l!==a;++l){const h=r[l].createInterpolant(null);o[l]=h,h.settings=c}this._interpolantSettings=c,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=mg,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(t){return this._startTime=t,this}setLoop(t,e){return this.loop=t,this.repetitions=e,this}setEffectiveWeight(t){return this.weight=t,this._effectiveWeight=this.enabled?t:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(t){return this._scheduleFading(t,0,1)}fadeOut(t){return this._scheduleFading(t,1,0)}crossFadeFrom(t,e,i){if(t.fadeOut(e),this.fadeIn(e),i){const s=this._clip.duration,r=t._clip.duration,a=r/s,o=s/r;t.warp(1,a,e),this.warp(o,1,e)}return this}crossFadeTo(t,e,i){return t.crossFadeFrom(this,e,i)}stopFading(){const t=this._weightInterpolant;return t!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}setEffectiveTimeScale(t){return this.timeScale=t,this._effectiveTimeScale=this.paused?0:t,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(t){return this.timeScale=this._clip.duration/t,this.stopWarping()}syncWith(t){return this.time=t.time,this.timeScale=t.timeScale,this.stopWarping()}halt(t){return this.warp(this._effectiveTimeScale,0,t)}warp(t,e,i){const s=this._mixer,r=s.time,a=this.timeScale;let o=this._timeScaleInterpolant;o===null&&(o=s._lendControlInterpolant(),this._timeScaleInterpolant=o);const c=o.parameterPositions,l=o.sampleValues;return c[0]=r,c[1]=r+i,l[0]=t/a,l[1]=e/a,this}stopWarping(){const t=this._timeScaleInterpolant;return t!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(t,e,i,s){if(!this.enabled){this._updateWeight(t);return}const r=this._startTime;if(r!==null){const c=(t-r)*i;c<0||i===0?e=0:(this._startTime=null,e=i*c)}e*=this._updateTimeScale(t);const a=this._updateTime(e),o=this._updateWeight(t);if(o>0){const c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case _g:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(a),l[h].accumulateAdditive(o);break;case Mh:default:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(a),l[h].accumulate(s,o)}}}_updateWeight(t){let e=0;if(this.enabled){e=this.weight;const i=this._weightInterpolant;if(i!==null){const s=i.evaluate(t)[0];e*=s,t>i.parameterPositions[1]&&(this.stopFading(),s===0&&(this.enabled=!1))}}return this._effectiveWeight=e,e}_updateTimeScale(t){let e=0;if(!this.paused){e=this.timeScale;const i=this._timeScaleInterpolant;if(i!==null){const s=i.evaluate(t)[0];e*=s,t>i.parameterPositions[1]&&(this.stopWarping(),e===0?this.paused=!0:this.timeScale=e)}}return this._effectiveTimeScale=e,e}_updateTime(t){const e=this._clip.duration,i=this.loop;let s=this.time+t,r=this._loopCount;const a=i===gg;if(t===0)return r===-1?s:a&&(r&1)===1?e-s:s;if(i===pg){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));t:{if(s>=e)s=e;else if(s<0)s=0;else{this.time=s;break t}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:t<0?-1:1})}}else{if(r===-1&&(t>=0?(r=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),s>=e||s<0){const o=Math.floor(s/e);s-=e*o,r+=Math.abs(o);const c=this.repetitions-r;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,s=t>0?e:0,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:t>0?1:-1});else{if(c===1){const l=t<0;this._setEndings(l,!l,a)}else this._setEndings(!1,!1,a);this._loopCount=r,this.time=s,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=s;if(a&&(r&1)===1)return e-s}return s}_setEndings(t,e,i){const s=this._interpolantSettings;i?(s.endingStart=rr,s.endingEnd=rr):(t?s.endingStart=this.zeroSlopeAtStart?rr:sr:s.endingStart=Vo,e?s.endingEnd=this.zeroSlopeAtEnd?rr:sr:s.endingEnd=Vo)}_scheduleFading(t,e,i){const s=this._mixer,r=s.time;let a=this._weightInterpolant;a===null&&(a=s._lendControlInterpolant(),this._weightInterpolant=a);const o=a.parameterPositions,c=a.sampleValues;return o[0]=r,c[0]=e,o[1]=r+t,c[1]=i,this}}const aM=new Float32Array(1);class oM extends bs{constructor(t){super(),this._root=t,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(t,e){const i=t._localRoot||this._root,s=t._clip.tracks,r=s.length,a=t._propertyBindings,o=t._interpolants,c=i.uuid,l=this._bindingsByRootAndName;let h=l[c];h===void 0&&(h={},l[c]=h);for(let u=0;u!==r;++u){const d=s[u],f=d.name;let m=h[f];if(m!==void 0)++m.referenceCount,a[u]=m;else{if(m=a[u],m!==void 0){m._cacheIndex===null&&(++m.referenceCount,this._addInactiveBinding(m,c,f));continue}const _=e&&e._propertyBindings[u].binding.parsedPath;m=new jy(ge.create(i,f,_),d.ValueTypeName,d.getValueSize()),++m.referenceCount,this._addInactiveBinding(m,c,f),a[u]=m}o[u].resultBuffer=m.buffer}}_activateAction(t){if(!this._isActiveAction(t)){if(t._cacheIndex===null){const i=(t._localRoot||this._root).uuid,s=t._clip.uuid,r=this._actionsByClip[s];this._bindAction(t,r&&r.knownActions[0]),this._addInactiveAction(t,s,i)}const e=t._propertyBindings;for(let i=0,s=e.length;i!==s;++i){const r=e[i];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(t)}}_deactivateAction(t){if(this._isActiveAction(t)){const e=t._propertyBindings;for(let i=0,s=e.length;i!==s;++i){const r=e[i];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(t)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const t=this;this.stats={actions:{get total(){return t._actions.length},get inUse(){return t._nActiveActions}},bindings:{get total(){return t._bindings.length},get inUse(){return t._nActiveBindings}},controlInterpolants:{get total(){return t._controlInterpolants.length},get inUse(){return t._nActiveControlInterpolants}}}}_isActiveAction(t){const e=t._cacheIndex;return e!==null&&e<this._nActiveActions}_addInactiveAction(t,e,i){const s=this._actions,r=this._actionsByClip;let a=r[e];if(a===void 0)a={knownActions:[t],actionByRoot:{}},t._byClipCacheIndex=0,r[e]=a;else{const o=a.knownActions;t._byClipCacheIndex=o.length,o.push(t)}t._cacheIndex=s.length,s.push(t),a.actionByRoot[i]=t}_removeInactiveAction(t){const e=this._actions,i=e[e.length-1],s=t._cacheIndex;i._cacheIndex=s,e[s]=i,e.pop(),t._cacheIndex=null;const r=t._clip.uuid,a=this._actionsByClip,o=a[r],c=o.knownActions,l=c[c.length-1],h=t._byClipCacheIndex;l._byClipCacheIndex=h,c[h]=l,c.pop(),t._byClipCacheIndex=null;const u=o.actionByRoot,d=(t._localRoot||this._root).uuid;delete u[d],c.length===0&&delete a[r],this._removeInactiveBindingsForAction(t)}_removeInactiveBindingsForAction(t){const e=t._propertyBindings;for(let i=0,s=e.length;i!==s;++i){const r=e[i];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(t){const e=this._actions,i=t._cacheIndex,s=this._nActiveActions++,r=e[s];t._cacheIndex=s,e[s]=t,r._cacheIndex=i,e[i]=r}_takeBackAction(t){const e=this._actions,i=t._cacheIndex,s=--this._nActiveActions,r=e[s];t._cacheIndex=s,e[s]=t,r._cacheIndex=i,e[i]=r}_addInactiveBinding(t,e,i){const s=this._bindingsByRootAndName,r=this._bindings;let a=s[e];a===void 0&&(a={},s[e]=a),a[i]=t,t._cacheIndex=r.length,r.push(t)}_removeInactiveBinding(t){const e=this._bindings,i=t.binding,s=i.rootNode.uuid,r=i.path,a=this._bindingsByRootAndName,o=a[s],c=e[e.length-1],l=t._cacheIndex;c._cacheIndex=l,e[l]=c,e.pop(),delete o[r],Object.keys(o).length===0&&delete a[s]}_lendBinding(t){const e=this._bindings,i=t._cacheIndex,s=this._nActiveBindings++,r=e[s];t._cacheIndex=s,e[s]=t,r._cacheIndex=i,e[i]=r}_takeBackBinding(t){const e=this._bindings,i=t._cacheIndex,s=--this._nActiveBindings,r=e[s];t._cacheIndex=s,e[s]=t,r._cacheIndex=i,e[i]=r}_lendControlInterpolant(){const t=this._controlInterpolants,e=this._nActiveControlInterpolants++;let i=t[e];return i===void 0&&(i=new v0(new Float32Array(2),new Float32Array(2),1,aM),i.__cacheIndex=e,t[e]=i),i}_takeBackControlInterpolant(t){const e=this._controlInterpolants,i=t.__cacheIndex,s=--this._nActiveControlInterpolants,r=e[s];t.__cacheIndex=s,e[s]=t,r.__cacheIndex=i,e[i]=r}clipAction(t,e,i){const s=e||this._root,r=s.uuid;let a=typeof t=="string"?af.findByName(s,t):t;const o=a!==null?a.uuid:t,c=this._actionsByClip[o];let l=null;if(i===void 0&&(a!==null?i=a.blendMode:i=Mh),c!==void 0){const u=c.actionByRoot[r];if(u!==void 0&&u.blendMode===i)return u;l=c.knownActions[0],a===null&&(a=l._clip)}if(a===null)return null;const h=new rM(this,a,e,i);return this._bindAction(h,l),this._addInactiveAction(h,o,r),h}existingAction(t,e){const i=e||this._root,s=i.uuid,r=typeof t=="string"?af.findByName(i,t):t,a=r?r.uuid:t,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[s]||null}stopAllAction(){const t=this._actions,e=this._nActiveActions;for(let i=e-1;i>=0;--i)t[i].stop();return this}update(t){t*=this.timeScale;const e=this._actions,i=this._nActiveActions,s=this.time+=t,r=Math.sign(t),a=this._accuIndex^=1;for(let l=0;l!==i;++l)e[l]._update(s,t,r,a);const o=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)o[l].apply(a);return this}setTime(t){this.time=0;for(let e=0;e<this._actions.length;e++)this._actions[e].time=0;return this.update(t)}getRoot(){return this._root}uncacheClip(t){const e=this._actions,i=t.uuid,s=this._actionsByClip,r=s[i];if(r!==void 0){const a=r.knownActions;for(let o=0,c=a.length;o!==c;++o){const l=a[o];this._deactivateAction(l);const h=l._cacheIndex,u=e[e.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,u._cacheIndex=h,e[h]=u,e.pop(),this._removeInactiveBindingsForAction(l)}delete s[i]}}uncacheRoot(t){const e=t.uuid,i=this._actionsByClip;for(const a in i){const o=i[a].actionByRoot,c=o[e];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}const s=this._bindingsByRootAndName,r=s[e];if(r!==void 0)for(const a in r){const o=r[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(t,e){const i=this.existingAction(t,e);i!==null&&(this._deactivateAction(i),this._removeInactiveAction(i))}}class cM{constructor(t,e,i=0,s=1/0){this.ray=new Ma(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new Eh,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(t,e=!0,i=[]){return Jl(t,this,i,e),i.sort(hf),i}intersectObjects(t,e=!0,i=[]){for(let s=0,r=t.length;s<r;s++)Jl(t[s],this,i,e);return i.sort(hf),i}}function hf(n,t){return n.distance-t.distance}function Jl(n,t,e,i){if(n.layers.test(t.layers)&&n.raycast(t,e),i===!0){const s=n.children;for(let r=0,a=s.length;r<a;r++)Jl(s[r],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:vh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=vh);const lM=""+new URL("glocken-20-krampusse-DmDmHR1P.mp3",import.meta.url).href,Aa=230,Ye=20,zi=380,uf=150,hM=16,uM=17,dM=12,fM=7.5,df=260,pM=12,mM=4.5,ff=6,Kr="east",xi=3.6,qs=4.2,Ys=17,xl=10,gM=.9,pf=7,Ks=3.4,_M=[2.7,6.2,9.6],xM=9,vM=6.5,yM=22,rs=12,S0=7,tc=4,MM=3,SM=1.6,mf=2.6,bM=.72,Oo=3.6,xo=3.8,vl=[[9,23.2],[36,21],[38.5,2],[36.5,-.4]],yl=.5,EM=1.8,Fo=.45,Ms=100,ia=5.4,b0=8.6,wM=7.6,Mc=22,Ml=.55,TM=5,AM=7,$l=2.5,RM=.6,CM=62,PM=3,gf=50,Hh=100,Ql=2.5,_f=30,E0=6,LM=34,IM={runner:{name:"Läufer",design:"rot",hpFactor:.5,speed:6.3,radius:.5,damage:10,reach:2.1,windup:.32,score:100},rammer:{name:"Rammer",design:"grau",hpFactor:1.5,speed:2.7,radius:.85,damage:22,reach:2.6,windup:.5,score:250,chargeSpeed:10.5,chargeDamage:34,chargeTime:1.25,chargeWindup:.75,chargeCooldown:3.5},jumper:{name:"Springer",design:"bock",hpFactor:1,speed:4.4,radius:.5,damage:12,reach:2.1,windup:.36,score:150,leapDamage:18,leapCooldown:2.4,leapRange:10},boss:{name:"Oberteufel",design:"ober",hpFactor:15,speed:3.2,radius:1.15,damage:18,reach:3,windup:.6,score:0}},DM=4,UM=6,NM=24,w0=[[-20,-78],[40,-62],[118,-2],[118,82],[30,118],[-62,112],[-80,20],[-62,-80]],T0=72,xf=.3,OM=3.7,FM=.8,zM=.4,vf=.0022,Sc=38,lr=2600,Sl=640,Tr={low:{name:"Niedrig",maxPixelRatio:1,minPixelRatio:.6,shadows:!1,shadowMapSize:512,snow:700,lanternLights:!1},mid:{name:"Mittel",maxPixelRatio:1.5,minPixelRatio:.85,shadows:!0,shadowMapSize:1024,snow:1500,lanternLights:!0},high:{name:"Hoch",maxPixelRatio:2,minPixelRatio:1,shadows:!0,shadowMapSize:2048,snow:lr,lanternLights:!0}},BM="high",kM="mid",HM=40,GM=2,VM=3,WM=.45,A0=58,bl=.12,XM=.75,qM=.35,yf=.0062,YM=94,KM=68,jM=50,ZM=12,JM=22,$M=.78,QM=1.2,ps={x:26,z:14,yaw:Math.PI/2},th=.5,tS=.27,hr=.4,R0=.72,Bi=1/60,eS=5,C0=.06,nS=.5,iS=.075,sS=.045,rS=.25,aS=42,oS=18,Mf=.42,cS=.45,lS=.3,Sf=1.2,hS=.35,uS=5,dS=4,fS=2.4,pS=.1,bf=3,mS=6,Ef=2,gS=9,_S=.86,xS=.045,vS=1.3,yS=.65,MS=.09,SS=2.4,bS=.3,ES=.35,wS=7,TS=2,AS=32,wf=250,RS=25,eh=.72,CS=.26,Gh=.16,Tf=3,PS=3,nh=.0055,yi=.011,Af=.055,LS=.05,IS=9,ur=[9058852,7218200,9210428,13149251,10133576,8014378],El=15921902,Rf=90,Cf=9,Pf=.16,vo=.9,DS=.22,US=1,Lf=17,P0=8,NS=1.5,OS=60,If=11,FS=5.5,zS=.55,BS=.35,kS=5,HS=14,GS=11,yo=4.2,VS=.35,Df=[2,3],WS=4,XS=[.4,1],qS=[0,.55],YS=.35,Uf=9,KS=2.5,jS=[0,.7],ZS=.4,JS=2.2,Mo=7,$S=1.4,ih=.6,sh=5,Nf=1500,QS=120,t3=3.2,e3=1.15,n3=18,js=1,i3=.66,s3=.33,r3=4.5,a3=9,Of=16,o3=.9,c3=22,l3=3,Ff=13,h3=1.1,u3=30,d3=.7,f3=3.5,p3=4,m3=12,zf=8,g3=2,Bf=5e3,L0=.32,_3=.9,I0=450,x3=.08,v3=14,y3=16,M3=.6,kf=2.5,S3=20,Pe=Math.PI*2,Gt=(n,t,e)=>n<t?t:n>e?e:n,Kt=(n,t,e)=>n+(t-n)*e,Ji=n=>n*n*(3-2*n),bc=(n,t,e)=>Ji(Gt((e-n)/(t-n),0,1)),ii=(n,t,e,i)=>Kt(n,t,1-Math.exp(-e*i));function ec(n,t){let e=(t-n)%Pe;return e>Math.PI&&(e-=Pe),e<-Math.PI&&(e+=Pe),e}function Pi(n){return function(){n|=0,n=n+1831565813|0;let t=Math.imul(n^n>>>15,1|n);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}const Yn=n=>"#"+n.toString(16).padStart(6,"0"),Vn=typeof document>"u",wl=new Map;function D0(){return{style:{},dataset:{},textContent:"",className:"",offsetWidth:0,disabled:!1,hidden:!1,classList:{add(){},remove(){},toggle(){},contains(){return!1}},appendChild(){},addEventListener(){},querySelector(){return null},querySelectorAll(){return[]},getBoundingClientRect(){return{x:0,y:0,left:0,top:0,width:0,height:0}}}}const Jt=n=>Vn?(wl.has(n)||wl.set(n,D0()),wl.get(n)):document.getElementById(n),Hf=n=>Vn?D0():document.createElement(n),U0=()=>Vn?16/9:window.innerWidth/window.innerHeight,b3={addColorStop(){}},E3=new Proxy({},{get:()=>()=>b3,set:()=>!0}),w3=new Es,T3=new Mn,A3=new C,R3=new C;function ot(n=0,t=0,e=0,i=0,s=0,r=0,a=1,o=a,c=a){return new zt().compose(R3.set(n,t,e),T3.setFromEuler(w3.set(i,s,r)),A3.set(a,o,c))}function Xt(...n){const t=n[0].clone();for(let e=1;e<n.length;e++)t.multiply(n[e]);return t}const Vh=15133941,Zs=new wt,C3=new wt(Vh);class Jn{constructor(){this.p=[],this.c=[]}add(t,e,i,s=!1){const r=t.index?t.toNonIndexed():t;e&&r.applyMatrix4(e);const a=r.attributes.position;Zs.set(i);const o=this.p,c=this.c;for(let l=0;l<a.count;l+=3){const h=a.getX(l),u=a.getY(l),d=a.getZ(l),f=a.getX(l+1),m=a.getY(l+1),_=a.getZ(l+1),g=a.getX(l+2),p=a.getY(l+2),v=a.getZ(l+2);let x=Zs;if(s){const y=f-h,A=m-u,M=_-d,R=g-h,N=p-u,b=v-d,E=A*b-M*N,O=M*R-y*b,Y=y*N-A*R,tt=Math.sqrt(E*E+O*O+Y*Y)||1;O/tt>.6&&(x=C3)}o.push(h,u,d,f,m,_,g,p,v),c.push(x.r,x.g,x.b,x.r,x.g,x.b,x.r,x.g,x.b)}return r!==t&&r.dispose(),t.dispose(),this}tri(t,e,i,s){Zs.set(s),this.p.push(t[0],t[1],t[2],e[0],e[1],e[2],i[0],i[1],i[2]);for(let r=0;r<3;r++)this.c.push(Zs.r,Zs.g,Zs.b);return this}quad(t,e,i,s,r){return this.tri(t,e,i,r),this.tri(t,i,s,r),this}raw(t,e){for(let i=0;i<t.length;i++)this.p.push(t[i]),this.c.push(e[i]);return this}build(){const t=new De;return t.setAttribute("position",new ee(this.p,3)),t.setAttribute("color",new ee(this.c,3)),t.computeVertexNormals(),t.computeBoundingSphere(),t.computeBoundingBox(),t}}function Wh(n,t,e,i,s,r=6,a=12){const o=new l0(t),c=o.computeFrenetFrames(a,!1),l=[],h=new C;for(let u=0;u<=a;u++){const d=u/a;o.getPointAt(d,h);const f=c.normals[u],m=c.binormals[u],_=e+(i-e)*Math.pow(d,.85),g=[];for(let p=0;p<r;p++){const v=p/r*Pe,x=Math.cos(v)*_,y=Math.sin(v)*_;g.push([h.x+f.x*x+m.x*y,h.y+f.y*x+m.y*y,h.z+f.z*x+m.z*y])}l.push(g)}for(let u=0;u<a;u++){const d=s(u/a,u);for(let f=0;f<r;f++){const m=(f+1)%r,_=l[u][f],g=l[u][m],p=l[u+1][f],v=l[u+1][m];n.tri(_,g,v,d),n.tri(_,v,p,d)}}}function Ra(n,t){if(Vn)return{width:n,height:t,getContext:()=>E3};const e=document.createElement("canvas");return e.width=n,e.height=t,e}function Ca(n){const t=new ey(n);return t.colorSpace=tn,t}const ve={buffer:null,onsets:[],bedGain:null,voices:0,loading:!1,lastOnset:-1};function P3(n,t,e=y3){const i=Math.round(t*.01),s=[];let r=0;for(let c=0;c+i<n.length;c+=i){let l=0;for(let h=c;h<c+i;h++){const u=n[h]-r;r=n[h],l+=u*u}s.push(Math.sqrt(l/i))}const a=[];for(let c=8;c<s.length-2;c++){let l=0;for(let h=c-8;h<c;h++)l+=s[h];l/=8,s[c]>l*1.6&&s[c]>s[c-1]&&s[c]>=s[c+1]&&(!a.length||c-a[a.length-1].i>6)&&a.push({i:c,ratio:s[c]/(l||1e-9)})}const o=n.length/t-L0-.05;return a.filter(c=>c.i*.01<o).sort((c,l)=>l.ratio-c.ratio).slice(0,e).map(c=>c.i*.01)}async function L3(){if(!(!rt.ctx||ve.buffer||ve.loading)){ve.loading=!0;try{const n=await(await fetch(lM)).arrayBuffer(),t=await new Promise((s,r)=>rt.ctx.decodeAudioData(n,s,r));ve.onsets=P3(t.getChannelData(0),t.sampleRate),ve.onsets.length||(ve.onsets=[0]),ve.buffer=t;const e=rt.ctx.createBufferSource();e.buffer=t,e.loop=!0;const i=rt.ctx.createBiquadFilter();i.type="highpass",i.frequency.value=I0*.6,ve.bedGain=rt.ctx.createGain(),ve.bedGain.gain.value=0,e.connect(i),i.connect(ve.bedGain),ve.bedGain.connect(rt.sfx),e.start(0,Math.random()*t.duration)}catch(n){console.warn("Glockenaufnahme nicht geladen, nehme synthetische Glocken:",n.message)}ve.loading=!1}}function I3(n,t=0,e=1){const i=rt.ctx;if(!i||!ve.buffer||n<=.002)return!!ve.buffer;if(ve.voices>=v3)return!0;try{const s=i.currentTime,r=L0;let a=Math.random()*ve.onsets.length|0;a===ve.lastOnset&&ve.onsets.length>1&&(a=(a+1)%ve.onsets.length),ve.lastOnset=a;const o=i.createBufferSource();o.buffer=ve.buffer,o.playbackRate.value=e*(1+(Math.random()*2-1)*x3);const c=i.createBiquadFilter();c.type="highpass",c.frequency.value=I0;const l=i.createGain();l.gain.setValueAtTime(1e-4,s),l.gain.linearRampToValueAtTime(n*_3,s+.006),l.gain.exponentialRampToValueAtTime(1e-4,s+r),o.connect(c),c.connect(l),Rc(l,t),o.start(s,Math.max(0,ve.onsets[a]-.008),r+.05),ve.voices++,o.onended=()=>{ve.voices=Math.max(0,ve.voices-1)}}catch{rt.errors++}return!0}function N0(n,t=0,e=1,i=0){I3(n,t,e)||Ss(n,t,i)}function D3(n){!ve.bedGain||!rt.ctx||ve.bedGain.gain.setTargetAtTime(U3(n),rt.ctx.currentTime,.35)}function U3(n){return M3*Math.sqrt(Gt(n/S3,0,1.5))*bc(kf*.5,kf*2,n)}function N3(n,t){let e=0;for(const i of n){if(i.dying)continue;const s=Math.hypot(i.pos.x-t.pos.x,i.pos.z-t.pos.z),r=Math.hypot(i.vel.x,i.vel.z);e+=Gt(r/4,0,1)/(1+s*s*.012)}return e+Gt(Math.hypot(t.vel.x,t.vel.z)/5,0,1)}const Gf=new $n({vertexColors:!0,flatShading:!0,side:vn}),nr=Gh,fa=Gh+eh,jr=n=>LS*Math.sin(Math.PI*Math.min(n,fa)/fa);function O3(n,t){const e=new Jn,i=nh/2,s=Math.max(1,Math.round(PS*(.5+.5*n))),r=Math.round(eh/Af*(3+9*n));for(let a=0;a<Tf;a++)for(let o=0;o<s;o++){const c=ur[(a*2+o+Math.floor(t()*3))%ur.length],l=(o-(s-1)/2)*nh*.9,h=[];for(let u=0;u<=r;u++){const d=nr-.02+(eh+.04)*u/r,f=Pe*(d-nr)/Af+a*Pe/Tf,m=yi*(.75+.25*Math.cos(2*f))+l;h.push(new C(Math.cos(f)*m+jr(d),d,Math.sin(f)*m*.8))}Wh(e,h,i*1.1,i*.9,()=>c,3,r)}e.add(new We(yi*1.45,yi*1.5,Gh,7),ot(jr(nr/2),nr/2,0),El);for(let a=0;a<5;a++){const o=a/5*Pe;e.add(new We(i*.8,i,.04,3),ot(Math.cos(o)*yi*.8,-.015,Math.sin(o)*yi*.8),ur[a%ur.length])}for(const a of[nr+.01,fa-.01])e.add(new Ei(yi*1.35,.0028,4,10),ot(jr(a),a,0,Math.PI/2,0,0),El),e.add(new ce(.004,.0025,.07),ot(jr(a)+yi*1.35,a,.035),El);return e.build()}function F3(n,t){const e=new Jn,i=Math.max(4,Math.round(IS*(.5+.5*n))),s=nh/2;for(let r=0;r<i;r++){const a=r/i*Pe+t()*.5,o=.12+t()*.22,c=CS*(.7+t()*.45),l=Math.cos(a)*Math.sin(o),h=Math.sin(a)*Math.sin(o),u=Math.cos(o),d=.02+t()*.03,f=[];for(let m=0;m<=4;m++){const _=m/4;f.push(new C(Math.cos(a)*yi*.6+l*c*_+d*_*_,u*c*_,Math.sin(a)*yi*.6+h*c*_))}Wh(e,f,s,s*.35,()=>ur[(r+1)%ur.length],3,4)}return e.build()}const Tl=new Map;function z3(n){const t=n>=.5?1:0;if(!Tl.has(t)){const e=Pi(5+t);Tl.set(t,{braid:O3(t,e),tip:F3(t,e)})}return Tl.get(t)}const O0=new Set;function Pa(n=1){const t=z3(n),e=new un,i=-nr/2,s=new Me(t.braid,Gf);s.position.y=i,e.add(s);const r=new un;return r.position.set(jr(fa),fa+i,0),r.add(new Me(t.tip,Gf)),e.add(r),e.children[0].castShadow=!0,e.userData.tip=r,e.userData.sway={prev:null,vel:new C,ax:0,az:0,vx:0,vz:0},O0.add(e),e}const Js=new C,$s=new C,Vf=new Mn;function B3(n,t){if(t<=0)return;const e=n.userData.sway,i=n.userData.tip;if(i.getWorldPosition(Js),!e.prev){e.prev=Js.clone();return}const s=(Js.x-e.prev.x)/t,r=(Js.y-e.prev.y)/t,a=(Js.z-e.prev.z)/t;$s.set((s-e.vel.x)/t,(r-e.vel.y)/t,(a-e.vel.z)/t),e.vel.set(s,r,a),e.prev.copy(Js),$s.lengthSq()>1e6&&$s.setLength(1e3),n.getWorldQuaternion(Vf).invert(),$s.applyQuaternion(Vf);const o=$s.z*Pf,c=-$s.x*Pf;e.vx+=(o-Rf*e.ax-Cf*e.vx)*t,e.vz+=(c-Rf*e.az-Cf*e.vz)*t,e.ax=Math.max(-vo,Math.min(vo,e.ax+e.vx*t)),e.az=Math.max(-vo,Math.min(vo,e.az+e.vz*t)),i.rotation.set(e.ax,0,e.az)}function k3(n){for(const t of O0)t.parent&&B3(t,Math.min(n,.05))}const H3="modulepreload",G3=function(n,t){return new URL(n,t).href},Wf={},V3=function(t,e,i){let s=Promise.resolve();if(e&&e.length>0){const a=document.getElementsByTagName("link"),o=document.querySelector("meta[property=csp-nonce]"),c=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));s=Promise.allSettled(e.map(l=>{if(l=G3(l,i),l in Wf)return;Wf[l]=!0;const h=l.endsWith(".css"),u=h?'[rel="stylesheet"]':"";if(!!i)for(let m=a.length-1;m>=0;m--){const _=a[m];if(_.href===l&&(!h||_.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${l}"]${u}`))return;const f=document.createElement("link");if(f.rel=h?"stylesheet":H3,h||(f.as="script"),f.crossOrigin="",f.href=l,c&&f.setAttribute("nonce",c),document.head.appendChild(f),h)return new Promise((m,_)=>{f.addEventListener("load",m),f.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${l}`)))})}))}function r(a){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a}return s.then(a=>{for(const o of a||[])o.status==="rejected"&&r(o.reason);return t().catch(r)})};function W3(n){const t=new Map,e=new Map,i=n.clone();return F0(n,i,function(s,r){t.set(r,s),e.set(s,r)}),i.traverse(function(s){if(!s.isSkinnedMesh)return;const r=s,a=t.get(s),o=a.skeleton.bones;r.skeleton=a.skeleton.clone(),r.bindMatrix.copy(a.bindMatrix),r.skeleton.bones=o.map(function(c){return e.get(c)}),r.bind(r.skeleton,r.bindMatrix)}),i}function F0(n,t,e){e(n,t);for(let i=0;i<n.children.length;i++)F0(n.children[i],t.children[i],e)}const X3={schloss:"schlossteufel.glb",rot:"rotlarve.glb",grau:"grauer.glb",bock:"bockshorn.glb"},q3={schloss:2.35,rot:2.15,grau:2.6,bock:2.4},z0={hips:["hips","hip","pelvis","becken"],head:["head","kopf"],armL:["arm_l","upperarm_l","leftarm","upper_arm.l","arm.l","oberarm_l"],armR:["arm_r","upperarm_r","rightarm","upper_arm.r","arm.r","oberarm_r"],legL:["leg_l","thigh_l","leftupleg","thigh.l","upperleg_l","oberschenkel_l"],legR:["leg_r","thigh_r","rightupleg","thigh.r","upperleg_r","oberschenkel_r"],handR:["hand_r","righthand","hand.r"]},Y3={walk:["laufen","walk","run","gehen"],attack:["schlag","attack","swing","hit"],idle:["stehen","idle"]},rh={},Xf=Object.assign({});async function K3(){if(Vn)return;const n=Object.entries(X3).filter(([,i])=>Xf["/assets/models/"+i]);if(!n.length)return;const{GLTFLoader:t}=await V3(async()=>{const{GLTFLoader:i}=await import("./GLTFLoader-B6ku--h4.js");return{GLTFLoader:i}},[],import.meta.url),e=new t;for(const[i,s]of n)try{const r=await e.loadAsync(Xf["/assets/models/"+s]);j3(i,r.scene,r.animations)}catch(r){console.warn("Modell "+s+" nicht geladen, nehme das eingebaute:",r.message)}}function j3(n,t,e=[]){t.updateMatrixWorld(!0);const i=new Ri().setFromObject(t),s=i.max.y-i.min.y,r=s>1e-6?q3[n]/s:1;rh[n]={scene:t,animations:e,scale:r,offsetY:-i.min.y*r},t.traverse(a=>{a.isMesh&&(a.castShadow=!0,a.frustumCulled=!1)})}const B0=n=>n.toLowerCase().replace(/^.*[:|]/,"").replace(/\s+/g,"_");function Z3(n,t){const e=z0[t];let i=null;return n.traverse(s=>{!i&&e.includes(B0(s.name))&&(i=s)}),i}const Al=(n,t)=>n.find(e=>Y3[t].includes(B0(e.name)))||null;function J3(n,t,e={}){const i=new un,s=new un;i.add(s);const r=W3(t.scene);r.scale.setScalar(t.scale),r.position.y=t.offsetY,s.add(r);const a=f=>{const m=new Ie;return s.add(m),m},o={};for(const f of Object.keys(z0))o[f]=Z3(r,f);const c={root:i,body:s,kit:n,gltf:!0,hips:o.hips||a(),head:o.head||a(),armL:o.armL||a(),armR:o.armR||a(),legL:o.legL||a(),legR:o.legR||a(),eyes:a(),fur:null,mixer:null,actions:null},l=Pa(e.detail??0);(o.handR||c.armR).add(l),o.handR||(l.position.set(0,-.7,.03),l.rotation.x=1.3),c.rute=l;const h=Al(t.animations,"walk"),u=Al(t.animations,"attack"),d=Al(t.animations,"idle");if(h||u||d){c.mixer=new oM(r),c.actions={};for(const[f,m]of[["walk",h],["attack",u],["idle",d]]){if(!m)continue;const _=c.mixer.clipAction(m);_.play(),_.setEffectiveWeight(0),c.actions[f]=_}c.lastTime=performance.now()}return i.scale.setScalar(1),c}function $3(n,t,e){const i=performance.now(),s=Math.min(.05,(i-n.lastTime)/1e3);n.lastTime=i;const r=n.actions,a=Math.min(1,t);r.walk&&(r.walk.setEffectiveWeight(a),r.walk.setEffectiveTimeScale(.6+t*.6)),r.idle&&r.idle.setEffectiveWeight(1-a),r.attack&&(r.attack.setEffectiveWeight(e>=0?1:0),e>=0&&(r.attack.time=e*r.attack.getClip().duration)),n.mixer.update(s)}const So=.92,Q3=1.58,qf=1.46,Yf=.42,Kf=.19,Oi=.22,Fi=.05,tb=1.2,k0={schloss:{seed:11,scale:1,bulk:1,fur:[2497816,1643538,3220764,4008991],furAlt:null,mask:{rx:.19,ry:.25,rz:.2,light:15655876,skin:14273448,shade:10127199,wrinkle:4532761,tint:9194024,brow:5913122,mouthColor:4853002,teeth:15853772,ears:"round",nose:"broad",blood:!1,mouth:{w:46,yc:180,yt:150,yb:250,upper:[[-32,9],[-21,24],[-10,11],[0,10],[10,11],[21,24],[32,9]],lower:[[-28,20],[-17,9],[-6,8],[6,8],[17,9],[28,20]]}},eyes:16756784,horns:{r0:.056,pts:[[.09,.4,.02],[.3,.44,.02],[.5,.62,0],[.57,.9,-.02],[.47,1.17,-.04]],color:n=>n<.55?11565628:n<.8?8015912:1839627},bells:"back3",strap:!0},rot:{seed:23,scale:.96,bulk:.92,fur:[2104348,1446675,2761250,3088412],furAlt:null,mask:{rx:.18,ry:.25,rz:.2,light:12863274,skin:10696223,shade:5773840,wrinkle:2755078,tint:4001288,brow:2755848,mouthColor:1967108,teeth:15919826,ears:"big",nose:"hook",blood:!1,mouth:{w:38,yc:190,yt:162,yb:214,upper:[[-15,24],[-5,8],[5,8],[15,24]],lower:[[-25,15],[25,15]]}},eyes:16760864,horns:{r0:.04,pts:[[.06,.42,.02],[.1,.55,0],[.12,.68,-.03],[.1,.78,-.05]],color:(n,t)=>t%2?5904912:9054744,segs:10},horns2:{r0:.03,pts:[[.13,.36,.06],[.2,.44,.06],[.24,.54,.04]],color:(n,t)=>t%2?5904912:9054744,segs:6},beard:!0,bells:"back2",strap:!1},grau:{seed:37,scale:1.24,bulk:1.22,fur:[1842207,1315862,2763566,2236965],furAlt:[6974835,9409176,5066581,11119794],mask:{rx:.185,ry:.245,rz:.2,light:14465148,skin:13083240,shade:8807994,wrinkle:4861976,tint:8145446,brow:1839628,mouthColor:5900298,teeth:15327167,lips:10490904,ears:"pointed",nose:"hook",blood:!0,mouth:{w:32,yc:184,yt:168,yb:232,blunt:!0,upper:[[-18,7],[-11,8],[-4,8],[4,8],[11,8],[18,7]],lower:[[-15,7],[-8,7],[0,7],[8,7],[15,7]]}},eyes:16054015,horns:{r0:.05,pts:[[.09,.42,0],[.2,.55,-.03],[.28,.73,-.08],[.26,.9,-.11]],color:n=>n<.5?2759956:1051400},bells:"frontFlat",strap:!1},ober:{seed:53,scale:1.45,bulk:1.35,fur:[8011292,6171924,9391138,7025688],furAlt:[10902056,4858895],mask:{rx:.2,ry:.26,rz:.21,light:14721120,skin:12611642,shade:8010266,wrinkle:3806216,tint:6956048,brow:3806216,mouthColor:3802630,teeth:16050896,ears:"pointed",nose:"broad",blood:!1,mouth:{w:52,yc:186,yt:156,yb:254,upper:[[-34,36],[-20,14],[-7,11],[7,11],[20,14],[34,36]],lower:[[-28,30],[-12,11],[0,10],[12,11],[28,30]]}},eyes:16742928,horns:{r0:.068,pts:[[.1,.42,0],[.38,.5,-.02],[.62,.62,-.06],[.78,.84,-.08],[.8,1.04,-.03]],color:n=>n<.6?11565628:n<.82?6963746:1313798,segs:16},bells:"back3",strap:!0},bock:{seed:41,scale:1,bulk:.96,fur:[7031340,5519394,8346164,4862240],furAlt:[9660732,11042124],mask:{rx:.18,ry:.245,rz:.195,light:15131350,skin:13618111,shade:9144189,wrinkle:3814962,tint:6969936,brow:3814962,mouthColor:3803658,teeth:16052192,ears:"pointed",nose:"broad",blood:!1,mouth:{w:38,yc:180,yt:160,yb:236,upper:[[-16,21],[-6,8],[6,8],[16,21]],lower:[[-22,17],[-8,7],[8,7],[22,17]]}},eyes:16726816,horns:{r0:.052,pts:[[.07,.43,.02],[.12,.72,-.04],[.18,.98,-.2],[.22,1.1,-.42],[.24,1.07,-.62]],color:(n,t)=>t%2?8219210:12297596,segs:16},bells:"back2",strap:!1}},ah=new _0({vertexColors:!0,flatShading:!0,side:vn,shininess:42,specular:6969914}),eb=new $n({vertexColors:!0,flatShading:!0,side:vn});function Rl(n,t,e,i=0){const s=t/512*Pe,r=e/256*Math.PI;return new C(-Math.cos(s)*Math.sin(r)*(n.rx+i),Math.cos(r)*(n.ry+i)+Oi,Math.sin(s)*Math.sin(r)*(n.rz+i)+Fi)}const Ar=(n,t,e)=>{const i=(t/n.w+1)/2;return n.yc*((1-i)*(1-i)+i*i)+e*2*i*(1-i)};function nb(n,t){const e=Ra(512,256),i=e.getContext("2d"),s=Pi(t);i.fillStyle=Yn(n.shade),i.fillRect(0,0,512,256);const r=i.createRadialGradient(128,116,8,128,128,142);r.addColorStop(0,Yn(n.light)),r.addColorStop(.45,Yn(n.skin)),r.addColorStop(1,Yn(n.shade)),i.fillStyle=r,i.fillRect(0,0,256,256);for(let h=0;h<700;h++)i.fillStyle=s()<.5?"rgba(0,0,0,.06)":"rgba(255,255,255,.06)",i.fillRect(s()*256,s()*256,1+s()*2,2+s()*6);i.lineCap="round",i.lineJoin="round";const a=(h,u)=>{for(const d of[1,-1]){const f=m=>128+d*(m-128);i.beginPath(),i.moveTo(f(h[0]),h[1]),i.quadraticCurveTo(f(h[2]),h[3],f(h[4]),h[5]),i.strokeStyle=Yn(n.tint),i.globalAlpha=.5,i.lineWidth=u+5,i.stroke(),i.strokeStyle=Yn(n.wrinkle),i.globalAlpha=.92,i.lineWidth=u,i.stroke(),i.beginPath(),i.moveTo(f(h[0]),h[1]+u),i.quadraticCurveTo(f(h[2]),h[3]+u,f(h[4]),h[5]+u),i.strokeStyle="#ffffff",i.globalAlpha=.14,i.lineWidth=1.5,i.stroke()}i.globalAlpha=1};for(let h=0;h<3;h++)a([130,54+h*15,166,36+h*15,208,50+h*16],4);a([134,84,138,96,133,108],3),a([142,130,166,140,192,126],3),a([196,104,208,100,218,92],2),a([198,113,212,113,222,108],2),a([146,142,174,158,178,192],4),a([188,140,206,160,199,190],3),a([140,228,150,238,128,242],3),a([138,112,144,130,150,146],2);for(const h of[1,-1])i.save(),i.translate(128+h*36,112),i.rotate(-h*.28),i.beginPath(),i.ellipse(0,0,21,12,0,0,Pe),i.fillStyle="#080505",i.fill(),i.strokeStyle=Yn(n.tint),i.lineWidth=3,i.globalAlpha=.8,i.stroke(),i.globalAlpha=1,i.restore(),i.beginPath(),i.moveTo(128+h*12,99),i.quadraticCurveTo(128+h*36,84,128+h*63,87),i.strokeStyle=Yn(n.brow),i.lineWidth=8,i.stroke(),i.beginPath(),i.ellipse(128+h*9,151,5,3.2,0,0,Pe),i.fillStyle="#120807",i.fill();const o=n.mouth;i.beginPath(),i.moveTo(128-o.w,o.yc),i.quadraticCurveTo(128,o.yt,128+o.w,o.yc),i.quadraticCurveTo(128,o.yb,128-o.w,o.yc),i.closePath();const c=i.createRadialGradient(128,(o.yt+o.yb)/2,2,128,(o.yt+o.yb)/2,o.w);c.addColorStop(0,"#0c0202"),c.addColorStop(1,Yn(n.mouthColor)),i.fillStyle=c,i.fill(),i.strokeStyle=Yn(n.lips||n.wrinkle),i.lineWidth=n.lips?6:3,i.stroke(),i.fillStyle=Yn(n.teeth),i.strokeStyle="rgba(40,20,10,.7)",i.lineWidth=1;const l=(h,u,d)=>{const f=128+h,m=Ar(o,h,d?o.yb:o.yt)+(d?-2:2),_=d?-1:1,g=u>14?5.5:4.5;i.beginPath(),o.blunt?i.rect(f-3.2,Math.min(m,m+_*u),6.4,u):(i.moveTo(f-g,m),i.lineTo(f+g,m),i.lineTo(f,m+_*u),i.closePath()),i.fill(),i.stroke()};if(o.lower.forEach(h=>l(h[0],h[1],!0)),o.upper.forEach(h=>l(h[0],h[1],!1)),n.blood){i.strokeStyle="#8f0f14",i.lineWidth=3;for(let h=0;h<7;h++){const u=(s()-.5)*o.w*1.6,d=Ar(o,u,o.yb)-2;i.globalAlpha=.85,i.beginPath(),i.moveTo(128+u,d),i.lineTo(128+u+(s()-.5)*3,d+8+s()*22),i.stroke()}i.globalAlpha=1}return Ca(e)}const ib=(()=>{const n=new Pn(.5,1,3,1,!0);return n.rotateX(Math.PI),n.translate(0,-.5,0),n})(),H0={value:0};function G0(){const n=new $n({color:16777215,flatShading:!0}),t={uTime:H0,uMove:{value:0},uPhase:{value:0}};return n.onBeforeCompile=e=>{Object.assign(e.uniforms,t),e.vertexShader=`uniform float uTime;
uniform float uMove;
uniform float uPhase;
varying float vFurT;
`+e.vertexShader.replace("#include <project_vertex>",`
      float furT = clamp(-position.y, 0.0, 1.0);             // 0 an der Wurzel, 1 an der Spitze
      vFurT = furT;
      vec4 mvPosition = vec4(transformed, 1.0);
      float seed = 0.0;
      #ifdef USE_INSTANCING
        mvPosition = instanceMatrix * mvPosition;
        seed = instanceMatrix[3].x * 13.1 + instanceMatrix[3].y * 7.7 + instanceMatrix[3].z * 3.3;
      #endif
      float w = furT * furT;
      float walk = sin(uPhase * 2.0 + seed) * uMove;
      float wind = sin(uTime * 1.9 + seed * 2.0) * 0.25 + sin(uTime * 3.7 + seed) * 0.12;
      mvPosition.x += (walk * 0.07 + wind * 0.03) * w;
      mvPosition.z += (-uMove * 0.09 + cos(uPhase * 2.0 + seed) * uMove * 0.04 + wind * 0.02) * w;
      mvPosition.y += abs(walk) * 0.02 * w;
      mvPosition = modelViewMatrix * mvPosition;
      gl_Position = projectionMatrix * mvPosition;`),e.fragmentShader=`varying float vFurT;
`+e.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
  diffuseColor.rgb *= mix(0.5, 1.18, vFurT);`)},n.customProgramCacheKey=()=>"krampus-fell",{material:n,uniforms:t}}const sb=new C(0,-1,0),rb=new C(0,1,0);function as(n,t,e,i,s,r,a,o,c){const l=new Float32Array(n*16),h=new Float32Array(n*3),u=new zt,d=new C,f=new C,m=new C,_=new Mn,g=new Mn,p=new C,v=new wt;for(let x=0;x<n;x++){t(x,n,c,d,f),m.set(f.x*o+(c()-.5)*.3,-1+f.y*o*.5,f.z*o+(c()-.5)*.3).normalize(),_.setFromUnitVectors(sb,m),g.setFromAxisAngle(rb,c()*Pe),_.multiply(g);const y=Kt(i,s,c()),A=Kt(r,a,c());u.compose(d,_,p.set(A,y,A)),u.toArray(l,x*16),v.set(e(d,c)),h[x*3]=v.r,h[x*3+1]=v.g,h[x*3+2]=v.b}return{n,mat:new Zo(l,16),col:new Zo(h,3)}}function jf(n,t,e,i,s,r,a){return(o,c,l,h,u)=>{for(let d=0;d<30;d++){const f=1-2*(o+l())/c,m=Math.sqrt(Math.max(0,1-f*f)),_=l()*Pe,g=Math.cos(_)*m,p=Math.sin(_)*m;if(h.set(i+g*n,s+f*t,r+p*e),u.set(g/n,f/t,p/e).normalize(),!a||a(g,f,p))return}}}function Zf(n,t,e=0){return(i,s,r,a,o)=>{const c=r()*Pe,l=e-(i+r())/s*t;a.set(Math.cos(c)*n,l,Math.sin(c)*n),o.set(Math.cos(c),0,Math.sin(c))}}function us(n,t,e,i){const s=new wr(ib,i,n.n);return s.instanceMatrix=n.mat,s.instanceColor=n.col,s.boundingSphere=new oi(new C(0,t,0),e),s}function ab(n,t,e){if(t<0||t>256)return 0;const i=(c,l,h,u)=>Math.exp(-((t-c)**2/(2*h*h)+(e-l)**2/(2*u*u)));let s=0;for(const c of[-1,1])s+=.024*i(128+c*34,96,26,9),s-=.026*i(128+c*36,113,15,9),s+=.02*i(128+c*52,148,18,14),s+=.012*i(128+c*12,152,6,5);s-=.012*i(128,92,6,14);const r=n.nose==="hook";s+=(r?.05:.04)*i(128,r?145:140,r?9:12,r?20:14),s+=.015*i(128,118,6,14),s+=.02*i(128,236,22,10);const a=n.mouth,o=t-128;if(Math.abs(o)<a.w+10){const c=Math.max(-a.w,Math.min(a.w,o)),l=Ar(a,c,a.yt),h=Ar(a,c,a.yb);if(Math.abs(o)<a.w&&e>l&&e<h){const u=Math.min(e-l,h-e,a.w-Math.abs(o));s-=.055*Ji(Math.min(1,u/12))}else{const u=Math.abs(o)<a.w?Math.min(Math.abs(e-l),Math.abs(e-h)):Math.hypot(Math.abs(o)-a.w,e-a.yc);s+=.012*Math.exp(-(u*u)/40)}}return s}function ob(n){const t=new Cn(1,48,32),e=t.attributes.position,i=t.attributes.uv,s=new C;for(let r=0;r<e.count;r++){const a=e.getX(r),o=e.getY(r),c=e.getZ(r);s.set(a/n.rx,o/n.ry,c/n.rz).normalize();const l=ab(n,i.getX(r)*512,(1-i.getY(r))*256);e.setXYZ(r,a*n.rx+s.x*l,o*n.ry+s.y*l+Oi,c*n.rz+s.z*l+Fi)}return t.computeVertexNormals(),t}function cb(n){const t=k0[n],e=t.mask,i=Pi(t.seed),s=t.bulk,r=p=>p[i()*p.length|0],a=p=>t.furAlt&&Math.sin(p.x*9+1+t.seed)*Math.sin(p.y*7+2)+Math.sin(p.z*8+2)*.6>.25?r(t.furAlt):r(t.fur),o=t.fur[1],c={key:n,d:t,palette:t.furAlt?t.fur.concat(t.furAlt):t.fur},l=new Jn;l.add(new Cn(1,10,8),ot(0,.36,0,0,0,0,.4*s,.46,.33*s),o),l.add(new Cn(1,8,6),ot(0,.6,0,0,0,0,.47*s,.2,.3*s),o),l.add(new Ei(.4*s,.036,5,16),ot(0,.03,0,Math.PI/2,0,0,1,.84,1),3810326),t.strap&&l.add(new Ei(.43*s,.03,4,16),Xt(ot(0,.36,0),new zt().makeRotationZ(.8),ot(0,0,0,Math.PI/2,0,0,1,.8,1)),4861466);const h=(p,v,x)=>{const y=[[.001,0],[.05,-.005],[.1,-.05],[.125,-.13],[.115,-.21],[.095,-.25],[.102,-.27]].map(M=>new nt(M[0],M[1])),A=ot(p,-.02,v,.95,0,p*1.2,x,x,x);l.add(new gc(y,9),A,12096074),l.add(new Cn(.03,5,4),Xt(A,ot(0,-.2,0)),2760728),l.add(new Ei(.03,.008,4,8),Xt(A,ot(0,.03,0)),3810326)};if(t.bells==="back3"&&(h(-.25*s,-.27*s,1.1),h(0,-.34*s,1.15),h(.25*s,-.27*s,1.1)),t.bells==="back2"&&(h(-.15*s,-.31*s,.95),h(.15*s,-.31*s,.95)),t.bells==="frontFlat"){const p=Xt(ot(.05,-.16,.37*s),new zt().makeScale(1,1,.42),new zt().makeRotationY(Math.PI/4));l.add(new We(.11,.16,.32,4),p,8224121),l.add(new Ei(.035,.01,4,8),ot(.05,.02,.37*s),3810326)}c.torsoGeo=l.build();const u=new Jn;u.add(new Jo(.085*s,.48,3,6),ot(0,-.34,0),o),u.add(new Cn(.09,6,5),ot(0,-.7,.01,0,0,0,1,1.15,1),854795),c.armGeo=u.build();const d=new Jn;d.add(new Jo(.115*s,.55,3,6),ot(0,-.42,0),o),d.add(new ce(.17,.12,.31),ot(0,-.86,.05),986123),c.legGeo=d.build(),c.maskGeo=ob(e);const f=nb(e,t.seed);c.maskMat=new $n({map:f,emissive:2894892,emissiveMap:f});const m=new Jn,_=e.mouth;m.add(new Cn(1,9,7),ot(0,Oi+.01,Fi-.055,0,0,0,e.rx*1.05,e.ry*1.02,e.rz*1.04),o);for(const p of[1,-1])e.ears==="big"&&m.add(new Pn(.06,.3,4),ot(p*(e.rx+.08),Oi+.06,Fi-.04,-.2,0,-p*1.15,1,1,.45),e.skin),e.ears==="round"&&m.add(new Cn(1,6,5),ot(p*(e.rx+.012),Oi+.02,Fi-.01,0,0,0,.03,.052,.04),e.skin),e.ears==="pointed"&&m.add(new Pn(.04,.19,4),ot(p*(e.rx+.05),Oi+.07,Fi-.03,-.25,0,-p*1.05,1,1,.5),e.skin);_.upper.forEach(([p,v])=>{if(v<15)return;const x=Rl(e,128+p,Ar(_,p,_.yt)+2,.006),y=v*.0034;m.add(new Pn(.012,y,4),ot(x.x,x.y-y/2,x.z+.006,Math.PI,0,0),e.teeth)}),_.lower.forEach(([p,v])=>{if(v<15)return;const x=Rl(e,128+p,Ar(_,p,_.yb)-2,.006),y=v*.0034;m.add(new Pn(.012,y,4),ot(x.x,x.y+y/2,x.z+.012,0,0,0),e.teeth)});for(const p of[t.horns,t.horns2])if(p)for(const v of[1,-1])Wh(m,p.pts.map(x=>new C(x[0]*v,x[1],x[2])),p.r0,.005,p.color,6,p.segs||12);c.headGeo=m.build();const g=new Jn;for(const p of[1,-1]){const v=Rl(e,128+p*36,112,-.006);g.add(new Cn(.021,6,5),ot(v.x,v.y,v.z),16777215)}return c.eyeGeo=g.build(),c.eyeMat=new Ci({color:t.eyes,fog:!1}),c.fur={torso:as(290,jf(.44*s,.52,.38*s,0,.36,0,(p,v,x)=>!(v>.35&&x>.15)),a,.32,.6,.07,.13,.3,i),skirt:as(72,(p,v,x,y,A)=>{const M=p/v*Pe+x()*.2;y.set(Math.cos(M)*.4*s,.02+x()*.14,Math.sin(M)*.34*s),A.set(Math.cos(M),0,Math.sin(M))},a,.55,.85,.08,.14,.16,i),arm:as(64,Zf(.1*s,.62,.04),a,.24,.42,.06,.11,.22,i),leg:as(76,Zf(.125*s,.8,-.02),a,.3,.5,.07,.12,.2,i),beard:t.beard?as(26,(p,v,x,y,A)=>{const M=-.9+p/v*1.8;y.set(Math.sin(M)*e.rx*.45,Oi-e.ry*.82,Fi+Math.cos(M)*e.rz*.7),A.set(Math.sin(M)*.3,-.4,.8)},()=>t.fur[0],.14,.28,.05,.08,.1,i):null,head:as(84,jf(e.rx*1.08,e.ry*1.02,e.rz*1.08,0,Oi,Fi-.06,(p,v,x)=>x<.25-Math.max(0,v)*.5||v>.8),()=>r(t.fur),.3,.62,.07,.12,.2,i),ruff:as(30,(p,v,x,y,A)=>{const M=Math.PI/2+.95+p/v*(Pe-1.9);y.set(Math.cos(M)*.2,.02+x()*.08,Math.sin(M)*.18+.02),A.set(Math.cos(M),0,Math.sin(M))},a,.22,.36,.1,.16,.5,i)},c}function Xh(n,t={}){if(rh[n.key])return J3(n,rh[n.key],t);const e=n.d,i=G0(),s=i.material,r=new un,a=new un,o=new un;r.add(a),a.add(o),o.position.y=So;const c=p=>(p.castShadow=!0,p);o.add(c(new Me(n.torsoGeo,ah)),us(n.fur.torso,.3,1.1,s),us(n.fur.skirt,-.2,1.2,s));const l=new un;l.position.set(0,Q3-So,.03),l.scale.setScalar(tb),o.add(l);const h=new Me(n.eyeGeo,n.eyeMat);l.add(new Me(n.maskGeo,n.maskMat),c(new Me(n.headGeo,eb)),h,us(n.fur.head,.2,1,s),us(n.fur.ruff,0,.7,s)),n.fur.beard&&l.add(us(n.fur.beard,0,.6,s));const u=(p,v,x,y,A)=>{const M=new un;return M.position.set(p,v,0),M.add(c(new Me(x,ah)),us(y,-.4,A,s)),o.add(M),M},d=u(Yf*e.bulk,qf-So,n.armGeo,n.fur.arm,.9),f=u(-Yf*e.bulk,qf-So,n.armGeo,n.fur.arm,.9),m=u(-Kf*e.bulk,0,n.legGeo,n.fur.leg,1),_=u(Kf*e.bulk,0,n.legGeo,n.fur.leg,1),g=Pa(t.detail??0);return g.position.set(0,-.7,.03),g.rotation.x=1.3,f.add(g),d.rotation.z=.12,f.rotation.z=-.12,r.scale.setScalar(e.scale),{root:r,body:a,hips:o,head:l,eyes:h,armL:d,armR:f,legL:m,legR:_,rute:g,kit:n,fur:i.uniforms}}function qh(n,t,e,i,s){const r=Math.sin(t),a=Math.cos(t);n.legL.rotation.x=r*.78*e,n.legR.rotation.x=-r*.78*e,n.armL.rotation.x=-r*.55*e;let o=-.45+r*.3*e,c=0,l=-.12,h=0;if(i>=0){const u=hr,d=R0;if(i<u){const f=Ji(i/u);o=Kt(o,0,f),l=Kt(-.12,-1.45,f),c=Kt(0,-.55,f),h=-.4*f}else if(i<d){const f=(i-u)/(d-u),m=1-(1-f)*(1-f);o=0,l=Kt(-1.45,-1.25,m),c=Kt(-.55,2.3,m),h=Kt(-.4,.5,m)}else{const f=Ji((i-d)/(1-d));o=Kt(0,-.45,f),l=Kt(-1.25,-.12,f),c=Kt(2.3,0,f),h=Kt(.5,0,f)}}n.armR.rotation.set(o,c,l),n.hips.rotation.y=h,n.body.position.y=Math.abs(a)*.05*e,n.body.rotation.x=s,n.head.rotation.z=r*.05*e,n.fur&&(n.fur.uMove.value=Math.min(1.4,e),n.fur.uPhase.value=t),n.mixer&&$3(n,e,i)}const Nr={};function lb(){for(const n of Object.keys(k0))Nr[n]=cb(n)}const hb={raster:21,halbeKante:200,versatz:[1.23,-.09],werte:[-11.05,-11.11,-11.28,-11.41,-11.19,-10.92,-10.6,-10.23,-9.81,-9.36,-9.11,-9.01,-9.01,-9.07,-9.27,-9.67,-10.32,-11.12,-11.92,-12.63,-13.07,-10.32,-10.46,-10.68,-10.82,-10.66,-10.37,-10.05,-9.71,-9.33,-8.87,-8.64,-8.57,-8.64,-8.85,-9.18,-9.7,-10.38,-11.17,-11.99,-12.83,-13.32,-9.34,-9.61,-9.91,-10.12,-10.06,-9.75,-9.4,-9.08,-8.77,-8.38,-8.18,-8.14,-8.27,-8.6,-9.06,-9.63,-10.31,-11.1,-11.93,-12.8,-13.36,-7.98,-8.43,-8.9,-9.19,-9.28,-9.01,-8.7,-8.42,-8.16,-7.8,-7.59,-7.54,-7.65,-7.92,-8.35,-9,-9.69,-10.49,-11.41,-12.36,-13.02,-6.55,-7.23,-7.85,-8.31,-8.41,-8.18,-7.9,-7.58,-7.24,-6.88,-6.65,-6.6,-6.69,-6.89,-7.2,-7.82,-8.57,-9.46,-10.46,-11.49,-12.18,-5.43,-6.23,-6.93,-7.48,-7.64,-7.43,-7.12,-6.74,-6.32,-5.89,-5.53,-5.35,-5.35,-5.48,-5.71,-6.27,-7.14,-8.14,-9.18,-10.18,-10.78,-4.67,-5.44,-6.15,-6.73,-6.99,-6.81,-6.42,-5.98,-5.52,-4.98,-4.42,-3.91,-3.66,-3.7,-3.94,-4.68,-5.6,-6.6,-7.63,-8.63,-9.2,-4.2,-4.82,-5.49,-6.06,-6.44,-6.32,-5.82,-5.32,-4.81,-4.17,-3.34,-2.49,-1.94,-1.75,-1.95,-2.84,-3.81,-4.8,-5.8,-6.77,-7.58,-3.95,-4.26,-4.89,-5.52,-5.86,-5.8,-5.29,-4.69,-4.05,-3.32,-2.25,-1.22,-.42,0,-.1,-.89,-1.89,-2.87,-3.9,-5.01,-6.07,-3.79,-3.76,-4.23,-4.86,-5.27,-5.07,-4.61,-4.01,-3.27,-2.35,-1.03,.06,.94,1.45,1.48,1.01,.03,-.95,-2.1,-3.44,-4.65,-2.82,-3.34,-3.84,-4.41,-4.86,-4.6,-4.13,-3.5,-2.61,-1.43,.09,1.19,2.12,2.68,2.83,2.72,1.81,.78,-.51,-2.01,-3.19,-1.58,-3.02,-3.42,-3.9,-4.54,-4.29,-3.79,-3.13,-2.1,-.66,.97,2.05,3.14,3.84,4.06,4.06,3.37,2.11,.87,-.24,-1.31,-.4,-2.09,-2.53,-3.2,-4.13,-3.96,-3.47,-2.81,-1.68,-.1,1.62,2.88,3.89,4.56,4.86,4.86,4.32,3.22,2.3,1.4,.09,.6,.56,-.73,-2.35,-3.51,-3.64,-3.17,-2.47,-1.29,.31,2.11,3.53,4.51,5.18,5.54,5.58,5.12,4.11,3.32,2.5,1.21,2.06,.78,.46,-.47,-1.97,-3.28,-2.85,-2.06,-.88,.64,2.39,3.92,5.01,5.72,6.09,6.13,5.7,4.77,3.98,3.19,2.18,3.69,2.94,2.29,1.37,-.23,-2.18,-2.09,-1.43,-.44,.89,2.5,4.11,5.41,6.19,6.51,6.46,6.03,5.26,4.49,3.79,3.12,5.84,5.47,4.61,3.53,1.8,-.36,-.94,-.63,.08,1.14,2.54,4.19,5.71,6.55,6.78,6.58,6.17,5.66,5.1,4.65,4.29,8.54,8,7.32,6.14,4.24,1.97,.48,.26,.75,1.64,2.83,4.46,6,6.84,7.06,6.88,6.58,6.25,6,5.86,5.79,11.68,11,10.07,8.96,7.18,4.87,2.83,1.63,1.67,2.28,3.26,4.76,6.23,7.08,7.36,7.3,7.24,7.27,7.24,7.36,7.55,14.25,13.65,13.2,11.88,10.15,8.09,5.67,3.37,2.82,3.07,3.86,5.17,6.5,7.33,7.67,7.79,8,8.41,8.64,9.04,9.45,16.99,16.36,15.47,14.04,12.64,11.03,8.7,5.46,4.2,4.05,4.62,5.71,6.85,7.64,8.08,8.39,8.81,9.44,10.05,10.79,11.37]},ub=[{id:126140874,tags:{name:"RFC Bad Reichenhall",leisure:"pitch",surface:"grass"},p:[[62.94,143.2],[13.39,229.87],[71.03,263.05],[121.82,176.58]]},{id:138003334,tags:{name:"Schloss Marzoll",building:"yes",historic:"castle"},p:[[5.26,13.3],[5.35,11.37],[-7.83,6.99],[-8.67,8.08],[-10.06,8.58],[-10.81,8.45],[-11.36,8.38],[-12.45,7.39],[-12.69,5.9],[-12.1,4.5],[-10.66,3.55],[-9.32,3.41],[-8.16,-1.46],[-6.41,-8.88],[-6.18,-9.87],[-7.23,-11.12],[-7.68,-12.51],[-7.23,-13.95],[-5.99,-14.84],[-4.34,-14.84],[-3.93,-14.49],[-3.15,-13.8],[-2.65,-12.21],[10.97,-8.48],[11.97,-9.37],[13.51,-9.73],[15.3,-8.78],[15.69,-7.28],[15.1,-5.4],[13.63,-4.3],[9.73,9.18],[10.92,10.97],[11.22,13.15],[10.33,14.75],[8.34,15.14],[6.35,14.94]]},{id:150181225,tags:{building:"yes"},p:[[199.19,174.6],[185.48,162.64],[178.9,170.19],[173.92,165.85],[165.5,175.48],[164.02,174.19],[160.02,178.77],[161.51,180.06],[156.65,185.63],[152.38,181.91],[146.57,188.56],[154.93,195.86],[157.4,193.03],[158.28,193.79],[154.46,198.19],[169.33,211.17],[188.67,189.03],[187.49,188]]},{id:150181228,tags:{building:"yes"},p:[[138.52,177.14],[134.7,174.95],[131.53,180.5],[135.34,182.67]]},{id:150181230,tags:{building:"yes"},p:[[189.15,130.27],[180.35,121.9],[172.54,130.11],[181.34,138.49]]},{id:150181232,tags:{building:"garage"},p:[[186.45,138.74],[181.33,143.79],[188.79,151.35],[193.91,146.3]]},{id:150181233,tags:{building:"garage"},p:[[203.48,156.45],[199.78,151.48],[192.56,156.86],[196.26,161.83]]},{id:150181234,tags:{building:"yes"},p:[[205.36,155.05],[203.48,156.45],[196.26,161.83],[204.36,172.71],[213.46,165.94]]},{id:150181235,tags:{building:"yes",amenity:"school"},p:[[162.01,145.64],[170.65,153.34],[158.08,167.43],[149.45,159.72],[155.88,152.52],[161.19,146.56]]},{id:150181236,tags:{building:"yes",amenity:"school"},p:[[150.01,142.26],[147.51,145.06],[155.88,152.52],[161.19,146.56],[154.85,140.9],[152.03,144.06]]},{id:150181237,tags:{name:"Schule Marzoll",building:"yes",amenity:"school"},p:[[162.49,132.34],[153.27,124.11],[151.5,126.1],[143.94,119.36],[135.26,129.09],[150.01,142.26],[152.03,144.06],[154.85,140.9]]},{id:150181244,tags:{amenity:"fountain"},p:[[146.11,179.73],[146.08,177.33],[143.69,177.36],[143.73,179.76]]},{id:150210307,tags:{building:"detached","roof:shape":"gabled"},p:[[121.14,67.08],[111.45,78.94],[119.92,85.87],[129.61,74]]},{id:150210309,tags:{building:"detached"},p:[[141.33,84.6],[134.55,91.91],[145.28,101.85],[152.06,94.54]]},{id:150210311,tags:{building:"garage"},p:[[150.56,112.11],[156.53,120.25],[161.24,116.79],[155.27,108.66]]},{id:150210314,tags:{building:"detached"},p:[[173.78,89.2],[167.83,95.33],[169.93,97.37],[167.23,100.15],[175.05,107.74],[183.7,98.83]]},{id:150210315,tags:{name:"Schloss Marzoll",building:"yes",historic:"castle"},p:[[-8.16,-1.46],[-15.3,-4.01],[-12.89,-11.34],[-6.41,-8.88]]},{id:150210316,tags:{name:"St. Valentin",building:"church",amenity:"place_of_worship"},p:[[45.37,48.15],[44.85,47.03],[44.67,45.77],[44.45,44.33],[44.37,43.18],[44.3,42.15],[64.91,30.53],[66.94,34.37],[67.57,34.15],[70.68,35],[72.49,38.11],[71.71,41.43],[67.46,43.88],[67.5,44.36],[53.92,52.32],[53.21,50.94],[47.49,54.38],[44.18,48.86]]},{id:150210320,tags:{"building:part":"yes",tower:"bell_tower",man_made:"tower"},p:[[45.37,48.15],[44.18,48.86],[47.49,54.38],[53.21,50.94],[49.9,45.43]]},{id:150210327,tags:{amenity:"fountain"},p:[[20.1,6.23],[20.19,7.55],[19.32,8.57],[17.99,8.65],[16.99,7.79],[16.89,6.45],[17.76,5.45],[19.09,5.36]]},{id:150237787,tags:{landuse:"residential"},p:[[310.35,-74.34],[278.36,-36.2],[289.65,-30.55],[299.06,-24.23],[304.53,-17.39],[307.1,-10.03],[286.92,20.5],[252.26,-16.83],[243.55,-17.32],[222.51,-35.95],[226.86,-41.14],[215.25,-52.27],[208.73,-43.66],[185.4,-63.86],[175.5,-52.42],[162.33,-48.57],[143.7,-51.1],[135.35,-56.18],[121.45,-62.37],[117.43,-63.58],[113.46,-64.78],[101.73,-51.71],[76.43,-69.97],[64.34,-80.13],[52.48,-95.12],[50.91,-108.19],[52.37,-115.21],[62.16,-127.43],[72.08,-127.3],[87.68,-148.95],[81.64,-155.36],[93.61,-197.32],[101.83,-196.48],[100.75,-211.83],[131.22,-260.46],[137.87,-268.68],[143.8,-264.81],[159.04,-263.96],[172.1,-277.63],[153.96,-295.29],[164.36,-306.17],[149.42,-324.32],[208.47,-371.74],[213.71,-371.74],[235.13,-390.88],[217.56,-421.79],[218.01,-426.73],[204.37,-435.39],[190.14,-475.4],[172.12,-468.59],[147.8,-447.41],[138.09,-465.57],[132.8,-472.25],[129.14,-484.86],[118.55,-497.72],[97.62,-490.66],[94.84,-479.57],[91.06,-452.08],[85.01,-426.61],[78.08,-401.52],[71.39,-384.38],[55.63,-366.22],[37.73,-378.58],[4.7,-366.93],[-9.46,-338.48],[-15.89,-338.1],[-22.97,-320.72],[-17.88,-318.57],[-34.26,-298.1],[-20.6,-285.62],[4.34,-316.66],[41.33,-291.92],[52.28,-291.02],[24.72,-239.01],[22.54,-229.58],[21.73,-226.06],[-26.16,-194.55],[-7.41,-171.26],[-19.24,-163.79],[-16.14,-143.22],[-74.41,-106.44],[-92.06,-107.36],[-100.98,-106.62],[-126.02,-146.46],[-236.07,-92.79],[-262.69,-122.36],[-250.99,-139.05],[-306.36,-185.63],[-342.22,-139.9],[-347.37,-138.61],[-376.22,-163.04],[-377.3,-172.3],[-391.26,-189.35],[-369.38,-213.9],[-399.28,-250.33],[-420,-231.26],[-462.86,-191.82],[-437.57,-168.16],[-399.59,-134.32],[-383.56,-121.47],[-357.84,-106.42],[-321.43,-95.55],[-291.56,-87.23],[-269.44,-67.71],[-243.14,-45.48],[-210.82,-30.36],[-192.33,-45.7],[-196.69,-62.4],[-172.77,-68.84],[-137.79,-84.23],[-132.47,-83.95],[-99.59,-95.98],[-96.8,-99.19],[-84.6,-97.74],[-73.29,-96.39],[-43.5,-84.23],[-32.72,-78.34],[-23.49,-69.12],[-5.3,-53.58],[12.19,-30.09],[-10.2,-18.47],[-18.18,-9.24],[-17.61,6.15],[-.71,59.18],[10.06,136.55],[5.76,171.04],[-7.89,225.26],[74.41,271.56],[87.7,279.48],[105.13,289.87],[113.48,260.88],[120.9,249.74],[134.05,240.6],[161.47,228.74],[232.93,168.79],[233.13,160.3],[206.66,127.37],[202.23,114.66],[203.23,107.94],[263.16,45.03],[281.54,31.69],[291.64,21.6],[306.18,2.81],[323.7,13.89],[328.04,6.01],[354.41,22.06],[359.49,12.52],[358.29,-2.14],[345.46,-54.25],[335.68,-62]]},{id:150237788,tags:{name:"Tennisplatz Marzoll",leisure:"pitch"},p:[[185.4,-63.86],[175.5,-52.42],[161.06,-35.75],[189,-11.55],[213.34,-39.67],[208.73,-43.66]]},{id:150237789,tags:{natural:"water"},p:[[-14.76,-52],[-24.55,-46.85],[-21.82,-42.52],[-23.45,-39.08],[-26.17,-36.96],[-23.54,-32.71],[-26.07,-31],[-31.12,-30.9],[-34.56,-30.39],[-41.52,-26.75],[-44.45,-23.33],[-43.54,-18.17],[-45.26,-16.05],[-43.74,-4.03],[-44.25,2.03],[-45.26,3.95],[-42.43,9.81],[-40.81,15.57],[-38.59,20.52],[-35.86,22.43],[-35.36,25.97],[-30.31,27.99],[-25.16,28.39],[-20.41,31.73],[-23.24,36.98],[-24.96,41.84],[-16.67,45.26],[-11.72,41.52],[-10.01,37.29],[-11.92,32.24],[-16.07,30.62],[-18.5,27.59],[-21.12,22.03],[-23.45,15.97],[-25.76,4.76],[-27.28,-3.93],[-27.18,-9.38],[-24.35,-13.93],[-20.31,-18.78],[-15.46,-23.93],[-13.24,-27.26],[-10.31,-28.37],[-6.68,-31.1],[-7.28,-34.73],[-5.97,-40.59],[-9.1,-44.43],[-12.43,-47.37]]},{id:150238547,tags:{landuse:"meadow"},p:[[-41.77,-77.65],[-56.36,-82.43],[-69.77,-87.78],[-74.53,-91.65],[-79.89,-93],[-84.06,-94.49],[-84.6,-97.74],[-96.8,-99.19],[-99.59,-95.98],[-132.47,-83.95],[-137.79,-84.23],[-172.77,-68.84],[-196.69,-62.4],[-192.33,-45.7],[-160.59,-42.65],[-142.88,-25.23],[-136.59,8.19],[-157.2,56.2],[-140.56,72.86],[-127.72,82.54],[-123.59,89.73],[-133.22,128.24],[-134.92,157],[-125.69,181.43],[-114.97,201.09],[-106.88,230.39],[-105.2,307.05],[-91.72,328.32],[-90.04,370.44],[-77.13,387.08],[-66.86,394.09],[-49.59,392.6],[-50.03,401.38],[-64.19,410.17],[-59.24,431.48],[-84.29,437.29],[-24.69,498.64],[-26.54,458.62],[-15.24,434.56],[-5.65,424.27],[-21.75,407.53],[-12.47,398.53],[-33.14,372.3],[-4.79,322.22],[-.81,324.21],[-4.79,341.31],[11.37,369.38],[6.07,376.68],[-7.71,378.52],[-1.48,406.61],[15.48,422.51],[58.72,365.32],[85.14,340.55],[103.66,292.84],[95.68,292.65],[87.15,290.06],[84.55,283.18],[87.7,279.48],[-7.89,225.26],[-.13,270.59],[-6.32,292.99],[-27.09,295.18],[-33.46,280.97],[-37.47,242.71],[-31.83,169.64],[-18.16,108.61],[-17.25,84.56],[-25.45,55.4],[-49.5,17.15],[-54.42,-5.81],[-50.41,-23.48],[-45.49,-34.78],[-59.52,-44.62],[-59.15,-53.36],[-51.68,-58.46],[-40.75,-70.13]]},{id:150478468,tags:{name:"Friedhof Marzoll",landuse:"cemetery"},p:[[70.85,111.6],[69.08,105.95],[67.33,91.65],[60.78,74.52],[59.59,70.59],[64.81,69.08],[69.47,67.97],[82.86,53.09],[83.39,48.06],[80.35,36.22],[58.92,13.95],[54.42,11.86],[50.2,14.99],[49.89,15.45],[38.03,32.55],[37.69,33.03],[33.66,42.29],[38,62.81],[-.71,59.18],[10.06,136.55],[21.82,133.42]]},{id:150478469,tags:{building:"yes"},p:[[176.18,56.39],[171.29,51.99],[174.85,48.02],[166.58,40.59],[165.45,39.58],[163.32,41.96],[156.87,49.14],[160.47,52.38],[154.99,58.49],[165.68,68.09]]},{id:150478470,tags:{building:"yes"},p:[[32.2,3.63],[36.53,-.37],[37.33,-1.11],[19.4,-22.28],[16.71,-22.09],[13.99,-18.68],[10.95,-14.84],[17.86,-9.93],[18.59,-10.48],[20.81,-9.87],[29.91,1.12]]},{id:150478475,tags:{building:"yes"},p:[[147.85,66.63],[144.07,71.92],[149.57,75.85],[153.34,70.56]]},{id:150478476,tags:{building:"yes"},p:[[75.37,103.27],[75.68,103.88],[78.62,109.23],[84.6,105.97],[81.37,100.01]]},{id:150478477,tags:{building:"yes"},p:[[152.84,22.29],[144.36,14.86],[141.98,12.78],[136.03,19.57],[130.62,25.76],[141.49,35.26]]},{id:150478478,tags:{building:"garage"},p:[[171.01,35.65],[161.6,27.2],[155.03,34.52],[163.32,41.96],[165.45,39.58],[166.58,40.59]]},{id:150478480,tags:{building:"garage"},p:[[80.6,97.38],[84.83,95.18],[84.93,95.39],[85.22,95.23],[86.93,98.51],[82.42,100.86]]},{id:150478484,tags:{building:"garage"},p:[[138.22,7.38],[131.21,15.29],[136.03,19.57],[141.98,12.78],[144.36,14.86],[145.37,13.71]]},{id:150478488,tags:{building:"garage"},p:[[183.58,75.77],[182.58,75.02],[176.72,78.23],[180.04,85.5],[187.35,81.71],[182.55,76.76]]},{id:150478489,tags:{building:"yes"},p:[[110.9,83.91],[96.64,90.99],[97.26,92.26],[95.49,93.14],[98.01,98.21],[99.78,97.32],[100.42,98.59],[114.67,91.51]]},{id:150478490,tags:{building:"yes"},p:[[82.71,91.21],[89.44,87.63],[89.1,86.98],[90.92,86.01],[93.49,90.84],[85.22,95.23],[84.93,95.39],[84.83,95.18]]},{id:150491452,tags:{building:"garage"},p:[[-37.22,-126.19],[-35.05,-127.88],[-30.35,-121.89],[-32.45,-120.25],[-35.58,-124.76]]},{id:150491454,tags:{building:"garage"},p:[[26.47,-105.88],[22.57,-99.38],[25.54,-97.64],[29.39,-104.15]]},{id:150491459,tags:{building:"yes"},p:[[103.47,-7.81],[97.23,-.24],[105.87,6.88],[112.11,-.7]]},{id:150491461,tags:{building:"yes"},p:[[108.23,-50.73],[112.86,-57.44],[118.59,-53.48],[113.96,-46.78]]},{id:150491468,tags:{building:"yes"},p:[[10.62,-103.34],[16.33,-112.81],[26.85,-106.49],[26.47,-105.88],[22.57,-99.38],[21.14,-97.01]]},{id:150512772,tags:{building:"yes"},p:[[64.03,-197.07],[62.68,-188.81],[69.66,-187.67],[69.35,-185.79],[77.15,-184.52],[77.64,-187.54],[80.51,-187.07],[81.52,-193.24],[78.65,-193.71],[78.8,-194.65]]},{id:150512779,tags:{building:"yes"},p:[[-10.86,-164.4],[-8.2,-170.74],[-.04,-167.3],[-2.71,-160.97]]},{id:150512782,tags:{building:"yes"},p:[[54.08,-152.82],[61.01,-145.73],[69.89,-154.4],[62.96,-161.5]]},{id:150512783,tags:{building:"yes"},p:[[83.07,-215.47],[79.51,-209.04],[91.72,-202.29],[95.28,-208.72]]},{id:150512794,tags:{building:"yes"},p:[[64.54,-173.89],[60.6,-167.14],[67.46,-163.15],[71.4,-169.9]]},{id:150512797,tags:{building:"hut"},p:[[8.34,-191.55],[5.89,-189.87],[8.49,-186.08],[10.93,-187.76]]},{id:150512799,tags:{building:"garage"},p:[[48.63,-248.53],[51.42,-253.65],[59.92,-249.04],[56.34,-242.45],[53.16,-244.17],[53.96,-245.64]]},{id:150520532,tags:{building:"garage"},p:[[-146.44,-109.91],[-146.22,-109.43],[-147.94,-108.66],[-146.07,-104.56],[-140.43,-107.13],[-142.52,-111.7]]},{id:150520535,tags:{building:"garage"},p:[[-149.98,-131.17],[-147.31,-125.57],[-142.07,-128.06],[-144.74,-133.67]]},{id:150520539,tags:{building:"garage"},p:[[-167.29,-103.95],[-161.65,-106.62],[-159.26,-101.55],[-165.39,-98.68],[-166.82,-102.17]]},{id:150520543,tags:{building:"garage"},p:[[-185.95,-98.56],[-180.3,-101.23],[-177.91,-96.16],[-183.55,-93.49]]},{id:150520550,tags:{building:"yes"},p:[[-194.2,-92.69],[-195.3,-95.03],[-189.13,-97.9],[-191.1,-102.13],[-199.07,-98.42],[-196.02,-91.84]]},{id:150520555,tags:{building:"yes"},p:[[-147.94,-108.66],[-148.65,-110.24],[-156.24,-106.79],[-158.75,-112.29],[-149.45,-116.53],[-146.44,-109.91],[-146.22,-109.43]]},{id:150520571,tags:{amenity:"parking"},p:[[-135,-86.33],[-134.15,-84.06],[-99.59,-96.99],[-100.45,-99.26]]},{id:217017238,tags:{amenity:"parking"},p:[[84.68,115.11],[107.12,98.69],[110.94,102.2],[119.35,93.77],[128.68,102],[95.5,132.18]]},{id:220886832,tags:{name:"Station Marzoll",building:"yes"},p:[[-132.47,-138.6],[-128.98,-132.13],[-125.35,-134.1],[-128.84,-140.56]]},{id:222695116,tags:{landuse:"meadow"},p:[[-322.41,-695.42],[-373.86,-655.61],[-443.44,-604.49],[-530.08,-542.13],[-570.79,-507.23],[-549.56,-492.39],[-496.19,-408.37],[-480.75,-392.34],[-448.69,-373.29],[-438.64,-345.81],[-429.64,-301.1],[-406.35,-256.78],[-369.48,-216.07],[-391.26,-189.35],[-377.3,-172.3],[-376.22,-163.04],[-347.37,-138.61],[-342.22,-139.9],[-306.36,-185.63],[-250.99,-139.05],[-262.69,-122.36],[-236.07,-92.79],[-126.02,-146.46],[-100.98,-106.62],[-92.06,-107.36],[-74.41,-106.44],[-16.14,-143.22],[-19.24,-163.79],[-7.41,-171.26],[-26.16,-194.55],[21.73,-226.06],[22.54,-229.58],[-47.79,-300.7],[-61.43,-323.36],[-66.64,-336.59],[-118.88,-493.17],[-168.51,-475.77],[-188.16,-525.09],[-159.29,-539.54],[-184.15,-605.71],[-134.02,-626.16],[-143.24,-650.22],[-153.37,-663.57],[-185.76,-640.99],[-221.05,-679.49],[-242.71,-666.25],[-265.27,-696.45],[-303.27,-670.27]]},{id:227576003,tags:{name:"Station Schloßberg",building:"yes"},p:[[79.22,124.64],[76.3,127.38],[80.63,132.01],[83.56,129.28]]},{id:227576004,tags:{amenity:"parking"},p:[[39.31,-85.59],[34,-70.66],[30.39,-48.6],[30.49,-38.67],[21.57,-32.15],[28.19,-23.43],[40.62,-35.77],[48.84,-39.67],[58.97,-38.57],[60.37,-59.13]]},{id:292656085,tags:{building:"yes"},p:[[49.89,-238.18],[45.84,-230.75],[34.94,-236.65],[38.99,-244.11]]},{id:292656086,tags:{building:"yes"},p:[[43.06,-251.56],[48.63,-248.53],[53.96,-245.64],[53.16,-244.17],[49.89,-238.18],[38.99,-244.11]]},{id:402048805,tags:{"building:part":"yes"},p:[[44.3,42.15],[44.37,43.18],[44.45,44.33],[44.67,45.77],[44.85,47.03],[45.37,48.15],[49.9,45.43],[53.21,50.94],[53.92,52.32],[67.5,44.36],[67.46,43.88],[71.71,41.43],[72.49,38.11],[70.68,35],[67.57,34.15],[66.94,34.37],[64.91,30.53]]},{id:414728687,tags:{leisure:"track",surface:"rubber"},p:[[66.29,141.6],[124.95,175.41],[127.47,171.05],[68.81,137.23]]},{id:414728688,tags:{building:"yes"},p:[[60.28,65.65],[65.16,65.91],[64.8,72.96],[59.9,72.7]]},{id:1059693553,tags:{building:"yes"},p:[[103.81,132.99],[115.9,143.57],[129.19,128.39],[117.1,117.8]]},{id:1060028990,tags:{building:"yes"},p:[[229.4,-15.17],[221.71,-5.1],[232.23,2.93],[239.92,-7.14]]},{id:1060028991,tags:{building:"yes"},p:[[183.58,75.77],[192.2,67.4],[200.23,75.68],[190.59,85.03],[187.35,81.71],[182.55,76.76]]},{id:1060028992,tags:{building:"yes"},p:[[89.84,67.5],[90.23,67.99],[92.62,66.06],[96.88,71.36],[85.81,80.3],[81.14,74.52]]},{id:1060028993,tags:{building:"yes"},p:[[81.14,74.52],[80.22,73.38],[78.36,74.87],[73.97,69.44],[84.52,60.93],[89.84,67.5]]},{id:1060028994,tags:{building:"yes"},p:[[119,45.19],[113.02,53.04],[123.41,60.95],[129.4,53.1]]},{id:1060028995,tags:{building:"yes"},p:[[100.87,34.61],[93.69,44.64],[104.5,52.39],[111.69,42.36]]},{id:1060028996,tags:{building:"yes"},p:[[73.14,-39.79],[63.33,-28.98],[65.45,-27.06],[56.13,-16.79],[53.63,-19.06],[43.79,-8.22],[62.92,9.14],[72.96,-1.91],[72.19,-2.6],[80.18,-11.4],[89.55,-2.9],[100.5,-14.96]]},{id:1060028997,tags:{building:"yes"},p:[[2.33,-93.28],[-5.44,-64.34],[14.93,-58.86],[18.61,-72.54],[10.4,-74.75],[14.5,-90.01]]},{id:1060028998,tags:{building:"yes"},p:[[16.95,-142.64],[13.94,-138.77],[15.51,-137.54],[11.18,-131.97],[19.22,-125.71],[24.67,-132.72],[21.32,-135.32],[23.22,-137.76]]},{id:1060028999,tags:{building:"yes"},p:[[30.21,-164.15],[18.86,-152.59],[23.22,-148.31],[24.65,-149.76],[36.96,-137.69],[46.87,-147.79]]},{id:1060029e3,tags:{building:"yes"},p:[[47.36,-201.64],[39.28,-187.07],[52.39,-179.79],[58.65,-191.08],[51.81,-194.88],[53.63,-198.16]]},{id:1060029001,tags:{building:"yes"},p:[[68.6,-239.92],[56.69,-221.13],[64.5,-216.18],[67.74,-221.3],[75.8,-216.19],[83.45,-228.27],[77.42,-232.08],[78.44,-233.68]]},{id:1060029002,tags:{building:"yes"},p:[[9.32,-204.24],[14.67,-194.47],[22.41,-198.7],[18.63,-205.6],[21.75,-207.31],[16.96,-216.07],[9.63,-212.07],[12.86,-206.17]]},{id:1060029003,tags:{building:"garage"},p:[[13.64,-173.03],[15.34,-177.42],[7.03,-180.63],[5.33,-176.24],[7.55,-175.38]]},{id:1060029004,tags:{building:"yes"},p:[[7.55,-175.38],[3.21,-164.18],[11.45,-160.98],[15.79,-172.19],[13.64,-173.03]]},{id:1060029005,tags:{building:"yes"},p:[[-15.02,-159.94],[-15.98,-157.59],[-8.77,-153.86],[-12.59,-144.47],[-7.04,-141.61],[-4.95,-144.91],[1.48,-141.35],[4.78,-147.09],[4.7,-154.72],[-1.73,-157.07],[-2.86,-154.2]]},{id:1060029006,tags:{building:"yes"},p:[[-35.58,-124.76],[-48.82,-115.56],[-43.83,-108.38],[-30.59,-117.57],[-32.45,-120.25]]},{id:1060029007,tags:{building:"yes"},p:[[-132.77,-112.63],[-128.34,-101.63],[-115.19,-106.93],[-119.62,-117.93]]},{id:1060029008,tags:{building:"yes"},p:[[-156.9,-104.58],[-151.44,-92.58],[-142.48,-96.66],[-146.07,-104.56],[-147.94,-108.66]]},{id:1060029009,tags:{building:"yes"},p:[[-175.72,-98.55],[-171.15,-87.34],[-162.25,-90.96],[-165.39,-98.68],[-166.82,-102.17]]},{id:1060029010,tags:{building:"yes"},p:[[-194.2,-92.69],[-188.99,-81.48],[-181.08,-85.16],[-186.29,-96.37]]},{id:1060029011,tags:{building:"yes"},p:[[-218.6,-89.2],[-215.37,-81.24],[-210.99,-83],[-210.45,-81.67],[-202.15,-85.04],[-207.1,-97.27],[-216.3,-93.54],[-215.11,-90.61]]},{id:1060029013,tags:{name:"Vereinshütte des Trachtenverein GTEV D Grenzler Marzoll",building:"yes"},p:[[-220.05,-48.53],[-223.81,-38.23],[-212.64,-34.16],[-211.82,-36.39],[-207.77,-34.91],[-204.82,-42.97]]},{id:1060123251,tags:{landuse:"forest"},p:[[117.43,-63.58],[121.45,-62.37],[125.19,-67.01],[161.9,-112.94],[154.55,-108.02]]},{id:1060123254,tags:{landuse:"meadow"},p:[[-20.6,-285.62],[24.72,-239.01],[52.28,-291.02],[41.33,-291.92],[4.34,-316.66]]},{id:1060123255,tags:{landuse:"meadow"},p:[[101.73,-51.71],[76.43,-69.97],[64.34,-80.13],[52.48,-95.12],[50.91,-108.19],[52.37,-115.21],[62.16,-127.43],[72.08,-127.3],[87.68,-148.95],[81.64,-155.36],[93.61,-197.32],[101.83,-196.48],[100.75,-211.83],[131.22,-260.46],[137.87,-268.68],[143.8,-264.81],[159.04,-263.96],[172.1,-277.63],[153.96,-295.29],[164.36,-306.17],[149.42,-324.32],[208.47,-371.74],[213.71,-371.74],[235.13,-390.88],[217.56,-421.79],[218.01,-426.73],[204.37,-435.39],[190.14,-475.4],[172.12,-468.59],[147.8,-447.41],[138.09,-465.57],[132.8,-472.25],[129.14,-484.86],[118.55,-497.72],[97.62,-490.66],[94.84,-479.57],[91.06,-452.08],[85.01,-426.61],[78.08,-401.52],[71.39,-384.38],[55.63,-366.22],[37.73,-378.58],[4.7,-366.93],[-9.46,-338.48],[-15.89,-338.1],[-22.97,-320.72],[-17.88,-318.57],[-34.26,-298.1],[-42.21,-307.87],[-51.77,-321.63],[-70.08,-374.82],[-95.96,-451.16],[-106.52,-483.86],[-108.21,-496.92],[-105.25,-497.95],[-12.9,-554.37],[-41.77,-607.71],[-65.93,-594.19],[-92.71,-656.64],[-73.56,-667.18],[-83.09,-682.7],[21.49,-735.75],[-.46,-778.94],[-63.83,-748.47],[-109.96,-816.23],[-11.29,-890.02],[-114.37,-1036.77],[-103.61,-1054.22],[-91.59,-1076.27],[-77.74,-1100.68],[-74.97,-1117.67],[-55.42,-1075.67],[-20.92,-1075.67],[-6.48,-1069.25],[11.96,-1068.45],[13.57,-1050.81],[25.6,-1044.39],[38.44,-993.07],[49.67,-993.07],[51.8,-999.34],[63.83,-989.98],[72.93,-968.2],[105.01,-939.33],[109.83,-879.18],[133.09,-851.12],[149.93,-835.87],[161.07,-814.92],[173.78,-814.92],[186.03,-813.41],[188.51,-798.13],[213.78,-787.35],[234.87,-781.01],[262.23,-769.31],[305.55,-741.23],[320.49,-727],[294.7,-627.08],[291.07,-536.51],[288.9,-513.46],[292.11,-485.58],[287.93,-473.91],[292.11,-459.92],[297.59,-462.02],[302.31,-444.51],[323.98,-376.5],[329.97,-352.88],[333.05,-334.17],[328.63,-333.33],[345.89,-247.33],[348.41,-247.83],[364.72,-164.59],[374.93,-114.02],[353.85,-130.9],[350.57,-121.33],[351.27,-107.9],[342.45,-106.69],[336.63,-118.72],[332.22,-120.33],[331.25,-108.24],[328.79,-100.55],[330.65,-82.75],[335.68,-62],[310.35,-74.34],[278.36,-36.2],[276.63,-32.99],[266.97,-37.54],[220.05,-70.63],[182.55,-101.51],[161.9,-112.94],[154.55,-108.02],[117.43,-63.58],[113.46,-64.78]]},{id:1060123256,tags:{landuse:"forest"},p:[[-84.6,-97.74],[-73.29,-96.39],[-43.5,-84.23],[-32.72,-78.34],[-23.49,-69.12],[-5.3,-53.58],[12.19,-30.09],[-10.2,-18.47],[-18.18,-9.24],[-17.61,6.15],[-.71,59.18],[10.06,136.55],[5.76,171.04],[-7.89,225.26],[-.13,270.59],[-6.32,292.99],[-27.09,295.18],[-33.46,280.97],[-37.47,242.71],[-31.83,169.64],[-18.16,108.61],[-17.25,84.56],[-25.45,55.4],[-49.5,17.15],[-54.42,-5.81],[-50.41,-23.48],[-45.49,-34.78],[-59.52,-44.62],[-59.15,-53.36],[-51.68,-58.46],[-40.75,-70.13],[-41.77,-77.65],[-56.36,-82.43],[-69.77,-87.78],[-74.53,-91.65],[-79.89,-93],[-84.06,-94.49]]},{id:1060123257,tags:{landuse:"meadow"},p:[[-339.73,-93.02],[-316.87,-86.93],[-321.58,-75.76],[-313.72,-63.37],[-296.82,-53.45],[-299.58,-40.5],[-276.44,-35.65],[-248.87,-10.08],[-236.17,16.62],[-219.01,24.2],[-216.58,41.38],[-203.81,68.88],[-201.33,93.04],[-212.02,101.77],[-220.03,116.75],[-217.87,134.34],[-203.59,142.48],[-213.54,153.27],[-253.97,145.44],[-266.18,160.42],[-286.45,159.4],[-285.29,174.42],[-296.81,177.78],[-299.48,199.28],[-290.25,202.87],[-281.21,222.54],[-257.22,227.2],[-258.56,247.6],[-237.71,242.39],[-229.47,253.37],[-232.69,275.83],[-325.73,279.05],[-388.3,258.19],[-381.88,320.76],[-346.59,330.37],[-335.36,360.86],[-365.84,410.6],[-394.72,380.12],[-421.99,391.35],[-444.45,367.29],[-444.45,335.2],[-452.47,315.94],[-462.1,362.47],[-481.35,360.86],[-505.42,340],[-517.44,319.96],[-519.99,286.04],[-510.22,245.36],[-495.79,251.77],[-444.45,232.51],[-433.22,203.65],[-407.55,96.15],[-391.51,72.09],[-336.96,134.65],[-372.26,49.63],[-351.4,31.98],[-299.35,59.96],[-351.33,-19.73]]},{id:1134938271,tags:{landuse:"industrial"},p:[[-16.45,596.91],[-1,601.27],[28.61,549.58],[63.23,501.54],[106.62,452.51],[151.74,410],[215.91,365.48],[255.82,341.41],[306.65,312.23],[284.97,302.18],[274.57,302.73],[243.89,260.33],[248.41,253.03],[244.34,235.45],[240.14,230.86],[231.35,228.75],[213.38,226.4],[203.14,225.87],[195.8,226.79],[184.38,229.29],[175.2,230.2],[163.39,234],[149.68,240.7],[135.02,242.92],[129.27,247.57],[123.52,253.68],[119.44,259.07],[115.54,267.42],[110.9,278.91],[107.38,290.79],[103.66,292.84],[85.14,340.55],[58.72,365.32],[15.48,422.51],[5.01,435.35],[-1.87,444.99],[-7.93,460.84],[-9.94,467],[-9.99,513.18],[-10.25,524.03],[-28.25,544.59]]}],db=[{id:40886855,tags:{name:"Römerstraße",highway:"residential",surface:"asphalt"},p:[[38.97,-205.61],[47.81,-211.72],[66.14,-243.12],[84.33,-280.73],[104.33,-315.55],[113.49,-329.53],[131.48,-357.04],[172.31,-391.67],[215.93,-424.98]]},{id:126140861,tags:{highway:"footway"},p:[[-28.44,329.51],[-11.19,288.37],[-5.98,250.07],[-2.06,239.42],[13.17,219.5],[34.34,182.6],[45.51,164.54],[50.77,155.33],[52.8,150.55],[55.34,145.86],[58.57,136.9],[60.04,127.71],[61.17,123.54],[63.47,119.44],[70.56,114.81],[76.05,110.83]]},{id:126140864,tags:{highway:"track"},p:[[200.53,107.52],[200.71,113.22],[200.76,118.78],[202.88,125.24],[226.66,155.24],[231.39,162.17],[231.06,164.58],[230.24,166.87],[227.51,171.09],[221.75,175.85],[220.94,176.51],[181.64,207.47]]},{id:126140865,tags:{highway:"track",surface:"ground"},p:[[-102.93,-102.38],[-170.34,-215.94],[-175.72,-235.11]]},{id:126140867,tags:{highway:"service"},p:[[268.83,37.65],[261.17,24.7],[256.61,18.38],[252.84,13.37],[245.47,6.83]]},{id:126140868,tags:{highway:"service"},p:[[79.53,30.87],[125.16,-4.43],[146.46,8.8]]},{id:126140869,tags:{highway:"service"},p:[[138.56,77.57],[128.58,87.65],[87.09,126.13]]},{id:126140872,tags:{name:"Schloßberg",highway:"residential"},p:[[186.19,123.46],[200.53,107.52],[243.04,60.59],[268.83,37.65],[287.16,23.87],[295.77,14.17],[305.34,-.14],[314.13,-13.3],[325.11,-32.17]]},{id:126140873,tags:{highway:"service"},p:[[20.87,-24.38],[36.68,-36.21],[50.49,-45.5],[54.56,-51.59],[54,-59.53],[48.86,-67.73],[44.89,-73.14],[40.04,-65.53],[35.9,-47.05],[36.68,-36.21]]},{id:132659641,tags:{name:"Schloßberg",highway:"living_street",surface:"asphalt"},p:[[186.19,123.46],[138.56,77.57],[130.61,71.8],[97.01,51.7],[90.53,46.62],[85.11,40.21],[79.53,30.87],[72.91,24.49],[66.32,18.56],[53.05,7.71],[39.59,-4.13]]},{id:138003340,tags:{highway:"track"},p:[[245.47,6.83],[240.26,11.43],[236.5,13.95],[234.02,15.55],[230.13,17.57],[227.22,18.44],[223.76,19.05],[221.24,19.35],[218.14,19.33],[213.03,18.76],[210.22,17.95],[207.06,16.95],[203.19,15.2],[200.08,13.21],[196.94,11.02],[194.07,8.83],[188.28,3.44],[182.95,-2],[177.55,-7.55],[175.37,-9.74],[172.01,-12.71],[162.6,-20.2],[157.75,-23.9],[152.86,-27.35],[150.09,-28.9],[147.47,-30.86],[142.91,-34.93],[138.07,-38.37],[135.26,-39.93],[132.47,-41.08],[131.29,-41.66],[130.11,-41.99],[127.71,-42.37],[123.15,-42.92],[116.01,-43.92],[111.87,-45.44],[105.21,-48.33],[97.67,-51.98],[86.79,-58.71],[81.69,-62.27],[74.81,-66.95],[65.11,-72.85],[51.27,-78.77],[44.81,-81.94],[44.89,-73.14]]},{id:138003341,tags:{highway:"service"},p:[[237.86,55.25],[241.48,53.05],[245.32,49.34],[250.59,43.87],[252.43,39.68],[253.08,34.86],[254.48,29.04],[254.48,22.9],[252.84,13.37]]},{id:138003344,tags:{highway:"service"},p:[[146.46,8.8],[180.11,40.62],[190.6,47.86],[204.18,52.14],[237.86,55.25],[243.04,60.59]]},{id:150181238,tags:{highway:"footway",surface:"asphalt"},p:[[124.54,189.88],[135.02,170.93],[128.17,166.2],[119.6,162.06],[112.03,158.43],[105.28,154.2],[97.32,148.55],[92.98,144.21],[87.94,136.01],[87.09,126.13]]},{id:150181239,tags:{highway:"footway"},p:[[135.02,170.93],[140.87,174.86],[146.61,175.37],[154.18,174.76],[160.03,173.15],[164.35,172.59],[168.04,170.18],[170.81,166.75],[173.33,164.98],[177.51,165.9],[180.29,164.83],[183.21,162.51],[185.33,160.85],[188.76,163.32],[198.84,172.44]]},{id:150181241,tags:{highway:"footway"},p:[[154.18,174.76],[155.26,179.95],[157.83,182.44]]},{id:150181242,tags:{highway:"service",surface:"asphalt"},p:[[145.33,113.71],[132.15,128.79],[148.68,157.31]]},{id:150181243,tags:{highway:"service",surface:"asphalt"},p:[[128.58,87.65],[132.81,95.45],[145.33,113.71],[152.82,123.64]]},{id:150210321,tags:{barrier:"wall"},p:[[64.81,69.08],[69.47,67.97],[82.86,53.09],[83.39,48.06],[82.12,42.5],[81.83,41.46],[80.35,36.22],[71,25.67],[58.92,13.95],[54.42,11.86],[51.1,14.33],[50.2,14.99]]},{id:150210322,tags:{barrier:"wall"},p:[[69.08,105.95],[68.93,104.53],[68.63,101.78],[67.33,91.65],[60.78,74.52]]},{id:150210324,tags:{barrier:"wall"},p:[[56,67.15],[45.59,65.9],[38,62.81],[33.66,42.29],[37.69,33.03]]},{id:150478491,tags:{highway:"footway"},p:[[58.11,71.54],[58.89,63.83],[67.26,64.94],[77.32,53.59],[79.13,40.86],[77.31,39.36],[67.62,31.38],[64.88,28.49],[54.94,18.03],[48.54,24.06],[43.8,37.68],[42.28,41.63],[40.72,45.7],[43.5,55.96],[46.83,57.66],[58.89,63.83]]},{id:150478492,tags:{highway:"footway"},p:[[46.83,57.66],[77.31,39.36]]},{id:150478493,tags:{highway:"footway"},p:[[42.28,41.63],[64.88,28.49]]},{id:150478494,tags:{highway:"path"},p:[[76.05,110.83],[128.58,87.65]]},{id:150478495,tags:{highway:"footway"},p:[[79.13,40.86],[81.83,41.46],[85.11,40.21]]},{id:150478496,tags:{highway:"path",surface:"compacted"},p:[[76.05,110.83],[77.82,116.81],[87.09,126.13]]},{id:150478497,tags:{highway:"footway",surface:"asphalt"},p:[[54.94,18.03],[51.1,14.33],[53.05,7.71]]},{id:150478498,tags:{highway:"footway",surface:"compacted"},p:[[65.2,105.66],[60.98,111.08],[42.37,119.99],[35.12,108.24],[30.27,100.38]]},{id:150478500,tags:{highway:"footway",surface:"compacted"},p:[[42.37,119.99],[31.15,124.46],[25.91,126.21],[19.32,127.13],[17.64,113.44],[13.76,75.12]]},{id:150478502,tags:{highway:"footway",surface:"compacted"},p:[[76.05,110.83],[65.2,105.66],[47.52,95.02],[13.76,75.12],[54.11,71.46],[58.11,71.54],[65.51,92.85],[65.2,105.66]]},{id:150478504,tags:{highway:"footway",surface:"compacted"},p:[[17.64,113.44],[27.42,112.07],[35.12,108.24],[42.89,102.53],[47.52,95.02],[51.33,88.24],[52.81,80.84],[54.11,71.46]]},{id:150478505,tags:{barrier:"wall"},p:[[.64,21.03],[8.96,23.22]]},{id:150478506,tags:{barrier:"wall"},p:[[68.93,104.53],[75.68,103.88]]},{id:150478507,tags:{barrier:"wall"},p:[[13.99,-18.68],[3.31,-22.22],[-3.93,-14.49]]},{id:150478509,tags:{barrier:"wall"},p:[[-10.81,8.45],[-11.29,10.44],[-9.95,12.97],[-6.81,15.37],[.7,19.66],[.64,21.03],[-.04,37.28]]},{id:152977334,tags:{name:"Untersbergstraße",highway:"residential",surface:"asphalt"},p:[[-163.73,-687.65],[-144.67,-665.02],[-134.9,-644.8],[-129.57,-633.8],[-119.24,-607.11],[-116.89,-598.58],[-113.96,-570.3],[-114.34,-555.47],[-115.53,-508.9],[-113.51,-496.62],[-110.84,-480.28],[-61.92,-331.45],[-44.22,-300.73],[28.63,-225.28],[38.97,-205.61]]},{id:152977335,tags:{name:"Römerstraße",highway:"residential",surface:"asphalt"},p:[[38.97,-205.61],[-7.28,-101.42],[-25.96,-80.5]]},{id:174316205,tags:{name:"Römerstraße",highway:"residential",surface:"asphalt"},p:[[-310.65,-89.01],[-290.71,-83.38],[-268.17,-75.85],[-228.06,-67.51],[-204.17,-65.52],[-190.65,-67.39],[-178.73,-71.04],[-166.91,-75.78],[-155,-81.02],[-118.39,-96.68],[-108.54,-100.32],[-102.93,-102.38],[-94.56,-103.41],[-79.83,-103.35],[-53.86,-95.95],[-49.67,-93.66],[-29.5,-82.65],[-25.96,-80.5]]},{id:217015491,tags:{highway:"track",surface:"compacted"},p:[[-12.81,-67.02],[-39.65,-45.83],[-50.41,-37.15],[-57.27,-28.71],[-60.04,-22.56],[-63.01,-13.05],[-64.1,-4.53],[-63.41,4.47],[-62.91,11.5],[-60.74,19.53],[-58.76,25.07],[-53.81,33.88],[-49.74,41.21],[-43.41,52.6],[-39.24,60.13],[-36.37,63.9],[-34.29,67.35],[-30.23,73.6],[-25.48,84.69],[-23.21,92.71],[-22.51,97.37],[-22.31,107.46],[-23.1,113.71],[-24.4,119.25],[-26.77,128.76],[-29.14,140.74],[-30.93,146.68],[-32.12,153.62],[-33.8,159.36],[-36.48,167.97],[-37.86,176.79],[-38.95,184.52],[-39.54,191.65],[-39.11,198.09],[-40.01,206.87],[-39.69,218.84],[-39.74,223.69],[-41.16,230.8],[-41.58,237.68],[-41.7,244.64],[-40.54,254.71],[-39.89,260.84],[-38.51,268.43],[-37.21,274.6],[-36.04,284.9],[-35.8,290.91],[-34.92,298.31],[-33.43,309],[-30.23,319.51],[-28.44,329.51],[-29.58,338.25],[-31.67,345.83],[-35,355.08],[-36.86,363.34],[-42.17,375],[-47.42,385.04],[-51.36,390],[-61.8,392.78],[-66.12,395.55],[-75.11,397.84]]},{id:217015495,tags:{barrier:"wall",historic:"yes"},p:[[-64.63,-60.03],[-45.58,-73.21]]},{id:227576006,tags:{name:"Schloßberg",highway:"residential",surface:"asphalt"},p:[[20.87,-24.38],[-12.81,-67.02]]},{id:414728748,tags:{name:"Schloßberg",highway:"living_street",surface:"asphalt"},p:[[212.22,152.35],[209.5,147.95],[186.19,123.46]]},{id:555475633,tags:{name:"Schloßberg",highway:"residential",surface:"asphalt"},p:[[-12.81,-67.02],[-25.96,-80.5]]},{id:603888620,tags:{highway:"service",surface:"asphalt"},p:[[258.56,227.95],[248.47,220.74],[237.09,206.1],[223.99,182.69],[221.75,175.85],[221.43,174.87],[220.17,171.99],[216.73,163.48],[212.22,152.35]]},{id:706909286,tags:{name:"Schloßberg",highway:"living_street",surface:"asphalt"},p:[[39.59,-4.13],[20.87,-24.38]]},{id:828507066,tags:{highway:"path"},p:[[-185.8,-34.1],[-188.45,-37.68]]},{id:828507067,tags:{highway:"path"},p:[[-184.65,-20.07],[-185.8,-34.1]]},{id:828507068,tags:{highway:"track",surface:"compacted"},p:[[-204.17,-65.52],[-203.85,-58.23],[-202.55,-51.13],[-200.12,-46.76],[-188.45,-37.68]]}],Hn={hoehen:hb,flaechen:ub,linien:db};function Yh(n){let t=0,e=0;for(let i=0;i<n.length;i++){const s=n[i],r=n[(i+1)%n.length],a=r[0]-s[0],o=r[1]-s[1],c=a*a+o*o,l=Math.atan2(o,a)*4;t+=Math.cos(l)*c,e+=Math.sin(l)*c}return Math.atan2(e,t)/4}function si(n,t,e,i){const s=Math.cos(i),r=Math.sin(i),a=n[0]-t,o=n[1]-e;return[a*s+o*r,-a*r+o*s]}function Ke(n,t,e,i,s){const r=Math.cos(s),a=Math.sin(s);return[e+n*r-t*a,i+n*a+t*r]}function pa(n){let t=0,e=0,i=0;for(let s=0;s<n.length;s++){const r=n[s],a=n[(s+1)%n.length],o=r[0]*a[1]-a[0]*r[1];t+=o,e+=(r[0]+a[0])*o,i+=(r[1]+a[1])*o}return Math.abs(t)<1e-9?[n.reduce((s,r)=>s+r[0],0)/n.length,n.reduce((s,r)=>s+r[1],0)/n.length]:[e/(3*t),i/(3*t)]}function Kh(n){const t=n.length,e=n.reduce((g,p)=>g+p[0],0)/t,i=n.reduce((g,p)=>g+p[1],0)/t;let s=0,r=0,a=0,o=0,c=0,l=0,h=0;for(const g of n){const p=g[0]-e,v=g[1]-i;s+=p*p,r+=v*v,a+=p*v,o+=p*p*p,c+=v*v*v,l+=p*v*v,h+=v*p*p}const u=s*r-a*a;if(Math.abs(u)<1e-9)return{x:e,z:i,r:0};const d=.5*(o+l),f=.5*(c+h),m=(d*r-f*a)/u,_=(s*f-a*d)/u;return{x:e+m,z:i+_,r:Math.sqrt(m*m+_*_+(s+r)/t)}}function oh(n,t){const e={u0:[],u1:[],v0:[],v1:[]};for(let s=0;s<n.length;s++){const r=n[s],a=n[(s+1)%n.length],o=a[0]-r[0],c=a[1]-r[1],l=Math.hypot(o,c);l<t||(Math.abs(c)<l*.2?((r[1]+a[1])/2<0?e.v0:e.v1).push({off:(r[1]+a[1])/2,len:l}):Math.abs(o)<l*.2&&((r[0]+a[0])/2<0?e.u0:e.u1).push({off:(r[0]+a[0])/2,len:l}))}const i=(s,r)=>s.length?s.reduce((a,o)=>a+o.off*o.len,0)/s.reduce((a,o)=>a+o.len,0):r;return{u0:i(e.u0,Math.min(...n.map(s=>s[0]))),u1:i(e.u1,Math.max(...n.map(s=>s[0]))),v0:i(e.v0,Math.min(...n.map(s=>s[1]))),v1:i(e.v1,Math.max(...n.map(s=>s[1])))}}function fb(n){const t=Yh(n),[e,i]=pa(n),s=n.map(u=>si(u,e,i,t)),r=oh(s,5),a=[[r.u0,r.v0],[r.u1,r.v0],[r.u1,r.v1],[r.u0,r.v1]],o=a.map(()=>[]);for(const u of s){if(!(u[0]<r.u0-.3||u[0]>r.u1+.3||u[1]<r.v0-.3||u[1]>r.v1+.3))continue;let f=0,m=1e9;a.forEach((_,g)=>{const p=Math.hypot(u[0]-_[0],u[1]-_[1]);p<m&&(m=p,f=g)}),o[f].push(u)}const c=o.map((u,d)=>{if(u.length<3)return null;const f=Kh(u),[m,_]=Ke(f.x,f.z,e,i,t);return{x:m,z:_,r:f.r,u:f.x,v:f.z,corner:d}}).filter(Boolean),[l,h]=Ke((r.u0+r.u1)/2,(r.v0+r.v1)/2,e,i,t);return{x:l,z:h,angle:t,halfU:(r.u1-r.u0)/2,halfV:(r.v1-r.v0)/2,towers:c.map(u=>({...u,u:u.u-(r.u0+r.u1)/2,v:u.v-(r.v0+r.v1)/2}))}}function pb(n,t){let e=0,i=0;for(let y=0;y<n.length;y++){const A=n[y],M=n[(y+1)%n.length],R=Math.hypot(M[0]-A[0],M[1]-A[1]);R>e&&(e=R,i=Math.atan2(M[1]-A[1],M[0]-A[0]))}const[s,r]=pa(t),[a,o]=pa(n);let c=si([s,r],a,o,i);c[0]>0&&(i+=Math.PI,c=si([s,r],a,o,i));const l=n.map(y=>si(y,a,o,i)),h=oh(l,6),u=l.map((y,A)=>[y,l[(A+1)%l.length]]).filter(([y,A])=>Math.abs(A[1]-y[1])<Math.hypot(A[0]-y[0],A[1]-y[1])*.2&&Math.hypot(A[0]-y[0],A[1]-y[1])>6),d=Math.min(...u.map(([y,A])=>Math.max(y[0],A[0]))),f=l.filter(y=>y[0]>d+.3),m=f.length>=3?Kh(f):null,_=Yh(t),g=t.map(y=>si(y,s,r,_)),p=oh(g,2),[v,x]=Ke((h.u0+d)/2,(h.v0+h.v1)/2,a,o,i);return{nave:{x:v,z:x,angle:i,halfLen:(d-h.u0)/2,halfWidth:(h.v1-h.v0)/2},apse:m?{...Object.fromEntries([["x",Ke(m.x,m.z,a,o,i)[0]],["z",Ke(m.x,m.z,a,o,i)[1]]]),r:Math.min(m.r,(h.v1-h.v0)/2)}:null,tower:{x:s,z:r,angle:_,halfU:(p.u1-p.u0)/2,halfV:(p.v1-p.v0)/2}}}function Ec(n,t,e,i,s,r){const a=s-e,o=r-i,c=a*a+o*o,l=c>0?Math.max(0,Math.min(1,((n-e)*a+(t-i)*o)/c)):0;return[e+a*l,i+o*l]}function xs(n,t,e){let i=!1;for(let s=0,r=e.length-1;s<e.length;r=s++){const a=e[s],o=e[r];a[1]>t!=o[1]>t&&n<(o[0]-a[0])*(t-a[1])/(o[1]-a[1])+a[0]&&(i=!i)}return i}function Zr(n,t,e){let i=1e9;for(let s=0;s<e.length-1;s++){const r=Ec(n,t,e[s][0],e[s][1],e[s+1][0],e[s+1][1]),a=Math.hypot(n-r[0],t-r[1]);a<i&&(i=a)}return i}const hn={castle:138003334,annex:150210315,church:150210316,churchNave:402048805,churchTower:150210320,outbuilding:150478470,enclosureWalls:[150478505,150478507,150478509]},Ti=n=>Hn.flaechen.find(t=>t.id===n),Yi=(n,t,e)=>n.tags&&n.tags[t]!==void 0&&(e===void 0||n.tags[t]===e),ue=(()=>{const n=fb(Ti(hn.castle).p),t=(n.halfU+n.halfV)/2;return{...n,half:t,depth:ff,inner:t-ff}})(),ma=pb(Ti(hn.churchNave).p,Ti(hn.churchTower).p),jn=(n,t)=>Ke(n,t,ue.x,ue.z,ue.angle),mb=(n,t)=>si([n,t],ue.x,ue.z,ue.angle),Te=(()=>{const n=ue.half,t={east:[n,0,1,0],west:[-n,0,-1,0],south:[0,n,0,1],north:[0,-n,0,-1]}[Kr];return{u:t[0],v:t[1],nu:t[2],nv:t[3]}})(),Rr=Hn.hoehen,sa=Rr.raster,bo=Rr.halbeKante;function Eo(n,t){return Rr.werte[Gt(t,0,sa-1)*sa+Gt(n,0,sa-1)]}function Jf(n,t,e,i,s){return t+.5*s*(e-n+s*(2*n-5*t+4*e-i+s*(3*(t-e)+i-n)))}function wc(n,t){const e=(n-Rr.versatz[0]+bo)/(2*bo)*(sa-1),i=(t-Rr.versatz[1]+bo)/(2*bo)*(sa-1),s=Math.floor(e),r=Math.floor(i),a=e-s,o=i-r,c=l=>Jf(Eo(s-1,l),Eo(s,l),Eo(s+1,l),Eo(s+2,l),a);return Jf(c(r-1),c(r),c(r+1),c(r+2),o)}const V0=wc(ue.x,ue.z),W0=wc(ma.nave.x,ma.nave.z),jh=Hn.flaechen.filter(n=>Yi(n,"natural","water")).map(n=>{const t=n.p.map(i=>i[0]),e=n.p.map(i=>i[1]);return{pts:n.p,level:Math.min(...n.p.map(i=>wc(i[0],i[1])))-.35,x0:Math.min(...t),x1:Math.max(...t),z0:Math.min(...e),z1:Math.max(...e)}});function $f(n,t,e,i,s,r,a){const o=Math.hypot(t-i,e-s);return Kt(n,r,1-bc(a,a+dM,o))}function rn(n,t){let e=wc(n,t);e=$f(e,n,t,ue.x,ue.z,V0,hM),e=$f(e,n,t,ma.nave.x,ma.nave.z,W0,uM);for(const i of jh){if(n<i.x0-4||n>i.x1+4||t<i.z0-4||t>i.z1+4)continue;const s=xs(n,t,i.pts),r=Zr(n,t,i.pts.concat([i.pts[0]])),a=s?Math.min(1,r/3):0;(s||r<1)&&(e=Kt(Math.max(e,i.level+.4),i.level-.8,a))}return e}const gb={living_street:5.5,residential:6,service:3.5,track:3,footway:1.8,path:1.4};function _b(){const t=Ra(2048,2048),e=t.getContext("2d"),i=Pi(99),s=Ye-zi/2,r=_=>(_-s)/zi*2048,a=_=>_/zi*2048;e.fillStyle="#dde4ef",e.fillRect(0,0,2048,2048);for(let _=0;_<1100;_++){const g=i()*2048,p=i()*2048,v=18+i()*80,x=.05+i()*.09,y=e.createRadialGradient(g,p,0,g,p,v);y.addColorStop(0,i()<.5?`rgba(255,255,255,${x})`:`rgba(140,160,205,${x})`),y.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=y,e.fillRect(g-v,p-v,v*2,v*2)}const o=(_,g)=>{e.fillStyle=g,e.beginPath(),_.forEach((p,v)=>v?e.lineTo(r(p[0]),r(p[1])):e.moveTo(r(p[0]),r(p[1]))),e.closePath(),e.fill()};for(const _ of Hn.flaechen)Yi(_,"amenity","parking")?o(_.p,"rgba(128,124,128,.45)"):Yi(_,"landuse","cemetery")&&o(_.p,"rgba(160,168,190,.28)");for(const _ of Hn.linien){const g=_.tags.highway&&gb[_.tags.highway];if(!g)continue;const p=(v,x)=>{e.strokeStyle=x,e.lineWidth=a(v),e.lineCap="round",e.lineJoin="round",e.beginPath(),_.p.forEach((y,A)=>A?e.lineTo(r(y[0]),r(y[1])):e.moveTo(r(y[0]),r(y[1]))),e.stroke()};p(g+1.2,"rgba(160,152,150,.4)"),p(g,_.tags.surface==="asphalt"?"rgba(96,92,98,.5)":"rgba(122,112,110,.42)")}const c=[[-1,-1],[1,-1],[1,1],[-1,1]].map(([_,g])=>jn(_*ue.inner,g*ue.inner));o(c,"rgba(128,120,118,.55)");for(let _=0;_<900;_++){const[g,p]=jn((i()*2-1)*ue.inner,(i()*2-1)*ue.inner);e.fillStyle=i()<.5?"rgba(60,56,58,.28)":"rgba(235,240,248,.35)",e.fillRect(r(g),r(p),2+i()*3,2+i()*3)}e.strokeStyle="rgba(70,78,125,.22)",e.lineWidth=a(2.2);for(const _ of Hn.flaechen)_.tags.building&&(e.beginPath(),_.p.forEach((g,p)=>p?e.lineTo(r(g[0]),r(g[1])):e.moveTo(r(g[0]),r(g[1]))),e.closePath(),e.stroke());const l=Ca(t);nn&&(l.anisotropy=Math.min(8,nn.capabilities.getMaxAnisotropy()));const h=new Sa(zi,zi,uf,uf);h.rotateX(-Math.PI/2),h.translate(Ye,0,Ye);const u=h.attributes.position;for(let _=0;_<u.count;_++)u.setY(_,rn(u.getX(_),u.getZ(_)));h.computeVertexNormals();const d=new Me(h,new $n({map:l}));d.receiveShadow=!0,ae.add(d);const f=Math.min(...Rr.werte),m=new Me(new Ih(1900,40),new $n({color:11187400}));m.rotation.x=-Math.PI/2,m.position.set(Ye,f-3,Ye),ae.add(m);for(const _ of jh){const g=new ba(_.pts.map(([x,y])=>new nt(x,-y))),p=new Nh(g);p.rotateX(-Math.PI/2),p.translate(0,_.level,0);const v=new Me(p,new _0({color:1778483,shininess:90,specular:6320288}));ae.add(v),Cr(_.pts,_.level+.5)}}function nc(n,t,e,i,s){const r=new ba(t.map(([o,c])=>new nt(o,-c))),a=new xc(r,{depth:i-e,bevelEnabled:!1});a.rotateX(-Math.PI/2),a.translate(0,e,0),n.add(a,null,s,!0)}function Zh(n,t,e,i,s,r,a,o,c=.45,l=Ht.plaster){const h=(f,m,_)=>{const[g,p]=Ke(f,m,t,e,i);return[g,_,p]},u=s+c*.5,d=r+c;n.quad(h(-u,d,a),h(u,d,a),h(u,0,a+o),h(-u,0,a+o),Ht.snow),n.quad(h(u,-d,a),h(-u,-d,a),h(-u,0,a+o),h(u,0,a+o),Ht.snow),n.tri(h(s,r,a),h(s,-r,a),h(s,0,a+o),l),n.tri(h(-s,r,a),h(-s,-r,a),h(-s,0,a+o),l)}const X0=n=>Math.min(...n.map(t=>rn(t[0],t[1]))),q0=n=>n.reduce((t,e)=>t+rn(e[0],e[1]),0)/n.length;function Y0(n){const t=Yh(n),[e,i]=pa(n),s=n.map(m=>si(m,e,i,t)),r=Math.min(...s.map(m=>m[0])),a=Math.max(...s.map(m=>m[0])),o=Math.min(...s.map(m=>m[1])),c=Math.max(...s.map(m=>m[1])),[l,h]=Ke((r+a)/2,(o+c)/2,e,i,t);let u=(a-r)/2,d=(c-o)/2,f=t;return d>u&&([u,d]=[d,u],f+=Math.PI/2),{x:l,z:h,ang:f,halfL:u,halfW:d}}function wo(n,t,e,i){const s=new ba;if(s.moveTo(-n/2,-2),e>0){const r=e/2,a=i-r;s.lineTo(-r,-2),s.lineTo(-r,a),s.absarc(0,a,r,Math.PI,0,!0),s.lineTo(r,-2)}return s.lineTo(n/2,-2),s.lineTo(n/2,t),s.lineTo(-n/2,t),s.lineTo(-n/2,-2),s}function xb(){const{half:n,depth:t,inner:e,angle:i}=ue,s=pM,r=V0,a=ot(ue.x,r,ue.z,0,-i,0),o=new zt().makeRotationY(Math.PI/2),c=P=>new xc(P,{depth:t,bevelEnabled:!1,curveSegments:9}),l=P=>Kr===P?[xi,qs]:[0,0];ln.add(c(wo(2*n,s,...l("north"))),Xt(a,ot(0,0,-n)),Ht.plaster),ln.add(c(wo(2*n,s,...l("south"))),Xt(a,ot(0,0,e)),Ht.plaster),ln.add(c(wo(2*e,s,...l("west"))),Xt(a,ot(-n,0,0),o),Ht.plaster),ln.add(c(wo(2*e,s,...l("east"))),Xt(a,ot(e,0,0),o),Ht.plaster);const h=(P,L,U,F)=>Cr([[P,U],[L,U],[L,F],[P,F]].map(([H,B])=>jn(H,B)),r+s),u=xi/2,d={north:[-n,n,-n,-e,"u"],south:[-n,n,e,n,"u"],west:[-n,-e,-e,e,"v"],east:[e,n,-e,e,"v"]};for(const[P,[L,U,F,H,B]]of Object.entries(d)){if(P!==Kr){h(L,U,F,H);continue}B==="u"?(h(L,-u,F,H),h(u,U,F,H)):(h(L,U,F,-u),h(L,U,u,H))}const f=n+.6,m=n-t/2,_=e-.6,g=mM,p=(P,L,U)=>{const[F,H]=jn(P,U);return[F,r+L,H]};for(let P=0;P<4;P++){const L=P*Math.PI/2,U=Math.cos(L),F=Math.sin(L),H=(B,X,j)=>p(B*U+j*F,X,-B*F+j*U);ln.quad(H(-f,s,f),H(f,s,f),H(m,s+g,m),H(-m,s+g,m),Ht.snow),ln.quad(H(-m,s+g,m),H(m,s+g,m),H(_,s,_),H(-_,s,_),Ht.snow),ln.add(new ce(2*n+1.2,.3,.3),Xt(a,new zt().makeRotationY(L),ot(0,s-.1,f-.1)),Ht.tile)}for(const P of ue.towers){const L=Xt(a,ot(P.u,0,P.v));ln.add(new We(P.r,P.r*1.04,Ys+2,16),Xt(L,ot(0,Ys/2-1,0)),Ht.plaster);const U=P.r+.3,F=gM;ln.add(new We(U,P.r,.6,18),Xt(L,ot(0,Ys-.3,0)),Ht.plaster),ln.add(new We(U,U,.5,18),Xt(L,ot(0,Ys+.25,0)),Ht.plaster,!0);for(let B=0;B<xl;B++){const X=B/xl*Pe,j=Pe*U/xl*.55;ln.add(new ce(j,F,.45),Xt(L,ot(Math.sin(X)*(U-.22),Ys+.5+F/2,Math.cos(X)*(U-.22),0,X,0)),Ht.plaster,!0)}Ia(P.x,P.z,P.r+.05,r+Ys+.5+F);const H=Math.atan2(P.u,P.v);for(const B of[4.2,8.2,11.6])for(const X of[-.62,.62]){const j=H+X,ht=P.r+.06,[W,$]=jn(P.u+Math.sin(j)*ht,P.v+Math.cos(j)*ht);Cl(W,r+B,$,j-i)}}const v=Ti(hn.annex).p;nc(ln,v,r-2,r+pf,Ht.plasterShade),Cr(v,r+pf);const x=(P,L)=>Xt(a,ot(P,0,L),new zt().makeRotationY(Math.atan2(Te.nu,Te.nv))),y=P=>{const L=xi/2,U=qs-L;ln.add(new Ei(L+.22,.24,5,12,Math.PI),Xt(P,ot(0,U,0)),Ht.stone);for(const F of[-1,1])ln.add(new ce(.5,U+2,.42),Xt(P,ot(F*(L+.22),U/2-1,0)),Ht.stone)};y(x(Te.u+Te.nu*.04,Te.v+Te.nv*.04)),y(x(Te.u-Te.nu*(t+.04),Te.v-Te.nv*(t+.04)));for(const P of[-1,1]){const L=x(Te.u-Te.nu*1.3,Te.v-Te.nv*1.3);ln.add(new ce(.14,qs-xi/2,xi/2-.1),Xt(L,ot(P*(xi/2-.1),(qs-xi/2)/2,0)),Ht.woodDark)}const A=(P,L)=>ue.towers.every(U=>Math.hypot(U.u-P,U.v-L)>U.r+1.2),M=Math.floor((2*n-6)/Ks),R=Math.floor((2*e-2)/Ks),N=[["north",0,-1],["south",0,1],["west",-1,0],["east",1,0]],b=v.map(P=>mb(P[0],P[1])),E=(P,L)=>xs(P,L,b);for(const[P,L,U]of N){const F=Math.atan2(L,U)-i;for(const H of _M){for(let B=0;B<=M;B++){const X=-(M*Ks/2)+B*Ks,j=L?L*(n+.04):X,ht=U?U*(n+.04):X;if(!A(j,ht)||E(j-L*.5,ht-U*.5)||P===Kr&&Math.abs(X)<xi/2+1.2&&H<qs+1.2)continue;const[W,$]=jn(j,ht);Cl(W,r+H,$,F)}for(let B=0;B<=R;B++){const X=-(R*Ks/2)+B*Ks,j=L?L*(e-.04):X,ht=U?U*(e-.04):X;if(P===Kr&&Math.abs(X)<xi/2+1.2&&H<qs+1.2)continue;const[W,$]=jn(j,ht);Cl(W,r+H,$,F+Math.PI)}}}const O=[];for(const[P,L]of[[-.6,-.4],[.05,.25],[.65,.45]]){const U=[];for(let F=0;F<=16;F++){const H=F/16,[B,X]=jn(Kt(-e,e,H),Kt(P,L,H)*e),j=r+6.4-Math.sin(H*Math.PI)*1.3;U.push(new C(B,j,X)),F>0&&F<16&&O.push(ot(B,j-.1,X))}ae.add(new Rh(new De().setFromPoints(U),new o0({color:1314830})))}const Y=new wr(new Cn(.085,6,5),new Ci({color:16765562}),O.length);O.forEach((P,L)=>Y.setMatrixAt(L,P)),ae.add(Y);const tt=new Ta(16761466,70,26,2);tt.position.set(ue.x,r+6.2,ue.z),ae.add(tt),ac(...jn(-e+1.6,-e+1.6)),ac(...jn(-e+1.6,e-1.6))}function vb(){const{nave:n,apse:t,tower:e}=ma,i=W0,s=Ht.churchWall,r=xM,a=vM,o=yM,c=ot(n.x,i,n.z,0,-n.angle,0);He.add(new ce(2*n.halfLen,r+2,2*n.halfWidth),Xt(c,ot(0,r/2-1,0)),s),Zh(He,n.x,n.z,n.angle,n.halfLen,n.halfWidth,i+r,a,.45,s);for(const M of[-1,1])He.add(new ce(2*n.halfLen+.5,.25,.25),Xt(c,ot(0,r-.05,M*(n.halfWidth+.45))),Ht.tile);if(t){const M=r*.86,R=ot(t.x,i,t.z,0,-n.angle,0);He.add(new We(t.r,t.r,M+2,12,1,!1,0,Math.PI),Xt(R,ot(0,M/2-1,0)),s),He.add(new Pn(t.r+.35,3.4,12,1,!1,0,Math.PI),Xt(R,ot(0,M+1.7,0)),Ht.snow)}const l=ot(e.x,i,e.z,0,-e.angle,0),h=e.halfU,u=e.halfV,d=Math.min(h,u);He.add(new ce(2*h,o+2,2*u),Xt(l,ot(0,o/2-1,0)),s),He.add(new ce(2*h+.5,.35,2*u+.5),Xt(l,ot(0,o,0)),Ht.stone),He.add(new Pn(d*1.48,rs,4),Xt(l,ot(0,o+.17+rs/2,0,0,Math.PI/4,0)),Ht.spire),He.add(new Pn(d*1.1,rs*.62,4),Xt(l,ot(0,o+.22+rs*.31,0,0,Math.PI/4,0,1.38,1,1.38)),Ht.snow),He.add(new Cn(.3,6,5),Xt(l,ot(0,o+rs+.3,0)),13214027),He.add(new ce(.1,1.5,.1),Xt(l,ot(0,o+rs+1.2,0)),13214027),He.add(new ce(.8,.1,.1),Xt(l,ot(0,o+rs+1.5,0)),13214027);for(let M=0;M<4;M++){const R=Xt(l,new zt().makeRotationY(M*Math.PI/2)),N=M%2?h:u;for(const b of[-.75,.75])He.add(new ce(.85,2.3,.12),Xt(R,ot(b,o-2.6,N)),1511951);He.add(new We(1.05,1.05,.1,14),Xt(R,ot(0,o-6.2,N+.03,Math.PI/2,0,0)),15261894),He.add(new We(1.2,1.2,.06,14),Xt(R,ot(0,o-6.2,N,Math.PI/2,0,0)),9071146),He.add(new ce(.08,.8,.05),Xt(R,ot(0,o-5.85,N+.1)),1511951),He.add(new ce(.55,.08,.05),Xt(R,ot(.25,o-6.2,N+.1)),1511951)}Cr(Ti(hn.church).p,i+r);const f=Math.max(2,Math.floor(2*n.halfLen/4.2));for(let M=0;M<f;M++){const R=-n.halfLen+(M+.5)*(2*n.halfLen/f);for(const N of[-1,1]){const b=Xt(c,ot(R,0,N*(n.halfWidth+.03)));ra.add(new ce(.95,2.7,.08),Xt(b,ot(0,5,0)),16756810),ra.add(new ce(.67,.67,.08),Xt(b,ot(0,6.35,0,0,0,Math.PI/4)),16756810),He.add(new ce(.08,3.3,.14),Xt(b,ot(0,5.3,0)),2760472),He.add(new ce(.95,.08,.14),Xt(b,ot(0,5,0)),2760472)}}const[m,_]=Ke(-h-.05,0,e.x,e.z,e.angle),g=-e.angle-Math.PI/2;He.add(new ce(1.6,2.6,.12),ot(m,i+1.3,_,0,g,0),Ht.woodDark);const[p,v]=Ke(-h-.4,0,e.x,e.z,e.angle);ra.add(new ce(.26,.34,.2),ot(p,i+3.2,v),16762743);const x=new Ta(16757864,40,22,2),[y,A]=Ke(-h-2.4,0,e.x,e.z,e.angle);x.position.set(y,i+3.4,A),ae.add(x)}const yb=new Set([hn.castle,hn.annex,hn.church,hn.churchNave,hn.churchTower,hn.outbuilding]);function To(n,t,e){const i=r=>e?r[0]<=t:r[0]>=t,s=[];for(let r=0;r<n.length;r++){const a=n[r],o=n[(r+1)%n.length],c=i(a),l=i(o);if(c&&s.push(a),c!==l){const h=(t-a[0])/(o[0]-a[0]);s.push([t,a[1]+(o[1]-a[1])*h])}}return s}const Kn=(()=>{const n=Ti(hn.outbuilding).p,t=Y0(n),e=[Ke(-t.halfL,0,t.x,t.z,t.ang),Ke(t.halfL,0,t.x,t.z,t.ang)],s=(Math.hypot(e[0][0]-ue.x,e[0][1]-ue.z)<Math.hypot(e[1][0]-ue.x,e[1][1]-ue.z)?1:-1)*(-t.halfL+bM*2*t.halfL),r=si([ue.x,ue.z],t.x,t.z,t.ang)[1]>0?1:-1,a=n.map(f=>si(f,t.x,t.z,t.ang)),o=[];for(let f=0;f<a.length;f++){const m=a[f],_=a[(f+1)%a.length];(m[0]-s)*(_[0]-s)<=0&&m[0]!==_[0]&&o.push(m[1]+(_[1]-m[1])*(s-m[0])/(_[0]-m[0]))}const c=Math.min(...o),l=Math.max(...o),h=(c+l)/2,[u,d]=Ke(s,h,t.x,t.z,t.ang);return{x:u,z:d,u:s,rect:t,nv:r,width:Oo,vGarden:r>0?l:c,vRoad:r>0?c:l}})();function Mb(){const n=Ti(hn.outbuilding),t=Kn.rect,e=Kn.u,i=Oo/2,s=n.p.map(_=>si(_,t.x,t.z,t.ang)),r=_=>_.map(([g,p])=>Ke(g,p,t.x,t.z,t.ang)),a=r(To(s,e-i,!0)),o=r(To(s,e+i,!1)),c=r(To(To(s,e-i,!1),e+i,!0)),l=X0(n.p)-.4,h=q0(n.p)+S0;for(const _ of[a,o])_.length>=3&&(nc(Ae,_,l,h,Ht.plasterShade),Cr(_,h+tc));const u=rn(Kn.x,Kn.z);c.length>=3&&nc(Ae,c,u+xo,h,Ht.plasterShade),Zh(Ae,t.x,t.z,t.ang,t.halfL,t.halfW,h,Math.min(tc,t.halfW*.9),.45,Ht.plasterShade);for(const _ of[-1,1]){const g=(_>0?Math.max(Kn.vGarden,Kn.vRoad):Math.min(Kn.vGarden,Kn.vRoad))+_*.03,[p,v]=Ke(e,g,t.x,t.z,t.ang),x=ot(p,u,v,0,-t.ang,0),y=i,A=xo-y;Ae.add(new Ei(y+.15,.18,5,12,Math.PI),Xt(x,ot(0,A,0)),Ht.stone);for(const M of[-1,1])Ae.add(new ce(.36,A+1,.3),Xt(x,ot(M*(y+.15),A/2-.5,0)),Ht.stone)}const[d,f]=Ke(e-i+.1,Kn.vGarden-Kn.nv*.4,t.x,t.z,t.ang),m=ot(d,u,f,0,-t.ang+Math.PI/2,0);Ae.add(new ce(Oo*.5,xo-.6,.12),Xt(m,ot(Oo*.25,(xo-.6)/2,0)),Ht.woodDark),ic.push(n.p)}function Qf(n,t,e,i,s){const r=Math.hypot(e-n,i-t);if(r<.05)return;const a=rn(n,t),o=rn(e,i),c=(a+o)/2,l=Math.atan2(i-t,e-n);Ae.add(new ce(r+yl,s+1.5+Math.abs(a-o),yl),ot((n+e)/2,c+(s-1.5)/2,(t+i)/2,0,-l,0),Ht.plasterShade,!0),Pb(n,t,e,i,yl,Math.max(a,o)+s)}function Ao(n,t,e=0){return Math.abs(n-Ye)<zi/2-e&&Math.abs(t-Ye)<zi/2-e}const ic=[];function Sb(){for(const n of Hn.flaechen){if(!n.tags.building||yb.has(n.id))continue;const[t,e]=pa(n.p);if(!Ao(t,e,4))continue;const i=n.tags.building==="garage"||n.tags.building==="hut",s=X0(n.p)-.4,r=q0(n.p)+(i?MM:S0),a=i?9077624:Ht.plasterShade;if(nc(Ae,n.p,s,r,a),!i&&n.p.length<=6){const o=Y0(n.p);Zh(Ae,o.x,o.z,o.ang,o.halfL,o.halfW,r,Math.min(tc,o.halfW*.9),.45,a)}Cr(n.p,r+(i?0:tc)),ic.push(n.p)}ic.push(Ti(hn.castle).p,Ti(hn.church).p),Mb();for(const n of Hn.linien){if(!Yi(n,"barrier","wall"))continue;const t=hn.enclosureWalls.includes(n.id)?mf:SM;for(let e=0;e<n.p.length-1;e++){const[i,s]=n.p[e],[r,a]=n.p[e+1];Ao(i,s)&&Ao(r,a)&&Qf(i,s,r,a,t)}}for(let n=0;n<vl.length-1;n++)Qf(...vl[n],...vl[n+1],mf);for(const n of Hn.flaechen){if(!Yi(n,"amenity","fountain"))continue;const t=Kh(n.p);if(!Ao(t.x,t.z,4))continue;const e=rn(t.x,t.z);Ae.add(new We(t.r,t.r*1.06,1,14),ot(t.x,e+.5,t.z),Ht.stone,!0),Ae.add(new We(t.r*.82,t.r*.82,.06,14),ot(t.x,e+1.01,t.z),1053724),Ae.add(new We(.16,.2,1.6,8),ot(t.x,e+1.3,t.z),Ht.stone),Ia(t.x,t.z,t.r,e+1.1)}}function bb(){const n=Hn.flaechen.filter(_=>Yi(_,"landuse","forest")||Yi(_,"natural","wood")),t=Hn.linien.filter(_=>_.tags.highway),e=Hn.linien.filter(_=>Yi(_,"barrier","wall")),i=Pi(2026),s=[],r=zi/2-6,a=fM;for(let _=Ye-r;_<Ye+r&&s.length<df;_+=a)for(let g=Ye-r;g<Ye+r&&s.length<df;g+=a){const p=g+(i()-.5)*a*.8,v=_+(i()-.5)*a*.8;n.some(x=>xs(p,v,x.p))&&(jh.some(x=>xs(p,v,x.pts)||Zr(p,v,x.pts)<2.5)||Math.hypot(p-ue.x,v-ue.z)<ue.half+9||ic.some(x=>xs(p,v,x)||Zr(p,v,x.concat([x[0]]))<3)||t.some(x=>Zr(p,v,x.p)<3.5)||e.some(x=>Zr(p,v,x.p)<2)||w0.some(x=>Math.hypot(x[0]-p,x[1]-v)<8)||Math.hypot(p-ps.x,v-ps.z)<8||s.push([p,v,.75+i()*.7]))}const o=[],c=[],l=[],h=[],u=Aa/2;for(const[_,g,p]of s){const v=rn(_,g),x=i()*Pe;o.push(ot(_,v+.9*p,g,0,x,0,p,p,p));for(let y=0;y<3;y++){const A=(2.5-y*.62)*p,M=(3.3-y*.3)*p,R=v+(1.5+y*1.85)*p+M/2;c.push(ot(_,R,g,0,x+y,0,A,M,A)),l.push(ot(_,R+M*.27,g,0,x+y,0,A*.62,M*.5,A*.62)),h.push(.8+i()*.4)}Math.abs(_-Ye)<u+2&&Math.abs(g-Ye)<u+2&&Ia(_,g,.5*p,v+9*p)}const d=(_,g,p,v)=>{const x=new wr(_,g,Math.max(1,p.length));return p.forEach((y,A)=>x.setMatrixAt(A,y)),x.count=p.length,x.castShadow=v,x.receiveShadow=!1,ae.add(x),x};d(new We(.2,.3,1.8,6),new $n({color:3483163,flatShading:!0}),o,!1);const f=d(new Pn(1,1,7),new $n({color:16777215,flatShading:!0}),c,!0),m=new wt;h.forEach((_,g)=>f.setColorAt(g,m.setRGB(.045*_,.11*_,.085*_))),d(new Pn(1,1,7),new $n({color:Vh,flatShading:!0}),l,!1)}function tp(n,t){const e=rn(n,t);Ae.add(new ce(1.2,1.2,1.2),ot(n-.62,e+.6,t-.1,0,.1,0),Ht.wood,!0),Ae.add(new ce(1.2,1.2,1.2),ot(n+.62,e+.6,t+.1,0,-.06,0),6965804,!0),Ae.add(new We(.45,.45,1.2,9),ot(n+.1,e+.6,t+1.25),Ht.woodDark,!0),rc(n-1.25,n+1.25,t-.72,t+.72,e+1.2,e+1.2,null,"solid"),Ia(n+.1,t+1.25,.48,e+1.2)}function Eb(n,t,e){const r=rn(n,t);Ae.add(new ce(1.5,1.25+1,4.2),ot(n,r+.62-.5,t),Ht.wood,!0);const a=Pi(n*31+t*17|0);for(let o=0;o<26;o++){const c=(a()-.5)*1.2,l=.15+a()*.95,h=a()<.5?-1:1,u=ot(n+c,r+l,t+h*(4.2/2+.01),Math.PI/2,0,0);Ae.add(new We(.11,.11,.04,6),u,a()<.5?12162402:9071168)}rc(n-1.5/2,n+1.5/2,t-4.2/2,t+4.2/2,r+1.25,r+1.25,null,"solid")}function wb(n,t,e,i,s){const r=Math.max(rn(n,e),rn(t,e),rn(n,i),rn(t,i)),a=r+s;Ae.add(new ce(t-n,.16,i-e),ot((n+t)/2,a-.08,(e+i)/2),Ht.wood,!0);for(const u of[n+.15,(n+t)/2,t-.15])for(const d of[e+.15,i-.15]){const f=rn(u,d);Ae.add(new ce(.18,a-f,.18),ot(u,(a+f)/2,d),Ht.woodDark)}rc(n,t,e,i,a);const o=t+3.4,c=rn(o,(e+i)/2)+.02,l=e+.6,h=i-.6;Ae.quad([t,a,l],[t,a,h],[o,c,h],[o,c,l],Ht.wood),Ae.tri([t,c-.3,l],[t,a,l],[o,c-.3,l],Ht.woodDark),Ae.tri([t,c-.3,h],[t,a,h],[o,c-.3,h],Ht.woodDark),rc(t,o,l,h,a,c,"x")}const ep={x:24,z:16},Xe={x:18,z:11.5,camDist:8.5};function Tb(){const n=(i,s,r)=>os(...jn(i,s),r);n(Te.u+Te.nu*2.4+Te.nv*3,Te.v+Te.nv*2.4+Te.nu*3,!0),n(Te.u+Te.nu*2.4-Te.nv*3,Te.v+Te.nv*2.4-Te.nu*3,!0),os(48,10,!0),os(31,17,!0);const t=Kn,e=t.rect;os(...Ke(t.u+t.width/2+1.2,t.vRoad-t.nv*1.6,e.x,e.z,e.ang),!0),os(...Ke(t.u+t.width/2+1.2,t.vGarden+t.nv*1.6,e.x,e.z,e.ang),!1),os(22,-2,!1),os(14,26,!1),tp(31,7),tp(13,19),Eb(34.5,13),wb(22,26.5,17,20.5,1.1),ac(17,20),ac(44,22)}function Ab(){_b(),xb(),vb(),Sb(),bb(),Tb()}const sc=Jt("game"),Le={setting:"auto",level:"high",settle:0,lights:[],pixelRatio:Math.min(!Vn&&window.devicePixelRatio||1,2)},nn=Vn?null:new n0({canvas:sc,antialias:!0,powerPreference:"high-performance"});nn&&(nn.setPixelRatio(Le.pixelRatio),nn.setSize(window.innerWidth,window.innerHeight),nn.shadowMap.enabled=!0,nn.shadowMap.type=Tp,nn.toneMapping=Ap,nn.toneMappingExposure=1.2,nn.autoClear=!1);const Tc=4536924,ae=new i0;ae.background=new wt(Tc);ae.fog=new Ah(Tc,.0105);const re=new _n(T0,U0(),.08,2600);re.rotation.order="YXZ";const La=new Me(new Cn(1800,24,14),new Zi({side:yn,depthWrite:!1,fog:!1,uniforms:{uZenith:{value:new wt(922676)},uMid:{value:new wt(4864632)},uHorizon:{value:new wt(13660252)},uGlow:{value:new wt(16751178)},uHaze:{value:new wt(Tc)},uSunDir:{value:new C(-.93,0,.36).normalize()}},vertexShader:"varying vec3 vDir; void main(){ vDir = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
      varying vec3 vDir;
      uniform vec3 uZenith, uMid, uHorizon, uGlow, uHaze, uSunDir;
      void main(){
        vec3 d = normalize(vDir);
        float h = d.y;
        vec3 col = mix(uHorizon, uMid, smoothstep(0.02, 0.26, h));
        col = mix(col, uZenith, smoothstep(0.2, 0.8, h));
        float az = max(dot(normalize(vec3(d.x, 0.0, d.z) + 1e-5), uSunDir), 0.0);
        col += uGlow * pow(az, 4.0) * (1.0 - smoothstep(0.0, 0.3, h)) * 0.55;
        col = mix(col, uHorizon * 0.55 + uMid * 0.45, (1.0 - az) * (1.0 - smoothstep(0.0, 0.22, h)) * 0.75);
        col = mix(uHaze, col, smoothstep(-0.03, 0.05, h));
        gl_FragColor = vec4(col, 1.0);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`}));La.renderOrder=-10;La.frustumCulled=!1;ae.add(La);{const t=new Float32Array(1260),e=Pi(7);for(let r=0;r<420;r++){const a=e()*Pe,o=.25+e()*.75,c=Math.sqrt(1-o*o);t[r*3]=Math.cos(a)*c*1700,t[r*3+1]=o*1700,t[r*3+2]=Math.sin(a)*c*1700}const i=new De;i.setAttribute("position",new En(t,3));const s=new c0(i,new Ch({color:14673663,size:1.6,sizeAttenuation:!1,fog:!1,transparent:!0,opacity:.7,depthWrite:!1}));s.frustumCulled=!1,s.renderOrder=-9,La.add(s)}const Rb=new M0(9083872,4011336,1.55);ae.add(Rb);const Be=new zh(11123967,1.9);Be.castShadow=!0;Be.shadow.mapSize.set(2048,2048);Be.shadow.camera.left=-Sc;Be.shadow.camera.right=Sc;Be.shadow.camera.top=Sc;Be.shadow.camera.bottom=-Sc;Be.shadow.camera.near=1;Be.shadow.camera.far=170;Be.shadow.bias=-5e-4;Be.shadow.normalBias=.05;const Cb=new C(34,62,40);ae.add(Be,Be.target);const K0=new zh(16747093,.75);K0.position.set(-80,16,30);ae.add(K0);function Gn(n,t){return rn(n,t)}const Ai=[],ri=[],ga=[];function Ia(n,t,e,i=50,s=!0){Ai.push({kind:"circle",x:n,z:t,r:e,top:i,nav:s,x0:n-e,x1:n+e,z0:t-e,z1:t+e})}function Cr(n,t=50,e=!0){const i=n.map(r=>r[0]),s=n.map(r=>r[1]);Ai.push({kind:"poly",pts:n,top:t,nav:e,x0:Math.min(...i),x1:Math.max(...i),z0:Math.min(...s),z1:Math.max(...s)})}function Pb(n,t,e,i,s,r=50,a=!0){const o=s/2;Ai.push({kind:"seg",ax:n,az:t,bx:e,bz:i,h:o,top:r,nav:a,x0:Math.min(n,e)-o,x1:Math.max(n,e)+o,z0:Math.min(t,i)-o,z1:Math.max(t,i)+o})}function rc(n,t,e,i,s,r=s,a=null,o="walk"){const c={x0:n,x1:t,z0:e,z1:i,hA:s,hB:r,axis:a,ai:o};return ri.push(c),o==="solid"&&ga.push({kind:"box",box:!0,x0:n,x1:t,z0:e,z1:i,top:Math.max(s,r),nav:!0}),c}function Da(n,t,e){return n.axis==="x"?Kt(n.hA,n.hB,Gt((t-n.x0)/(n.x1-n.x0),0,1)):n.axis==="z"?Kt(n.hA,n.hB,Gt((e-n.z0)/(n.z1-n.z0),0,1)):n.hA}function j0(n,t,e,i,s=!1){let r=Gn(n,t);for(let a=0;a<ri.length;a++){const o=ri[a];if(s&&o.ai==="solid"||n<o.x0||n>o.x1||t<o.z0||t>o.z1)continue;const c=Da(o,n,t);c<=e+i&&c>r&&(r=c)}return r}function pr(n,t){let e=Gn(n,t);for(let i=0;i<ri.length;i++){const s=ri[i];if(n<s.x0||n>s.x1||t<s.z0||t>s.z1)continue;const r=Da(s,n,t);r>e&&(e=r)}return e}function np(n,t,e,i,s){for(let r=0;r<ri.length;r++){const a=ri[r],o=Gt(n,a.x0,a.x1),c=Gt(t,a.z0,a.z1),l=n-o,h=t-c;if(!(l*l+h*h>=i*i)&&Da(a,o,c)>e+s)return!0}return!1}function Jh(n,t,e){const i=Gt(n.x,e.x0,e.x1),s=Gt(n.z,e.z0,e.z1),r=n.x-i,a=n.z-s,o=r*r+a*a;if(o>=t*t)return 0;if(o>1e-8){const f=Math.sqrt(o),m=(t-f)/f;return n.x+=r*m,n.z+=a*m,t-f}const c=n.x-e.x0,l=e.x1-n.x,h=n.z-e.z0,u=e.z1-n.z,d=Math.min(c,l,h,u);return d===c?n.x=e.x0-t:d===l?n.x=e.x1+t:d===h?n.z=e.z0-t:n.z=e.z1+t,d+t}function Lb(n,t,e){const i=n.x-e.x,s=n.z-e.z,r=t+e.r,a=i*i+s*s;if(a>=r*r)return 0;const o=Math.sqrt(a);if(o<1e-5)return n.x+=r,r;const c=(r-o)/o;return n.x+=i*c,n.z+=s*c,r-o}function Ib(n,t,e){const[i,s]=Ec(n.x,n.z,e.ax,e.az,e.bx,e.bz),r=n.x-i,a=n.z-s,o=t+e.h,c=r*r+a*a;if(c>=o*o)return 0;const l=Math.sqrt(c);if(l<1e-5){const u=e.bx-e.ax,d=e.bz-e.az,f=Math.hypot(u,d)||1;return n.x+=-d/f*o,n.z+=u/f*o,o}const h=(o-l)/l;return n.x+=r*h,n.z+=a*h,o-l}function Db(n,t,e){const i=e.pts;let s=0,r=0,a=1e9;for(let h=0,u=i.length-1;h<i.length;u=h++){const[d,f]=Ec(n.x,n.z,i[u][0],i[u][1],i[h][0],i[h][1]),m=(n.x-d)*(n.x-d)+(n.z-f)*(n.z-f);m<a&&(a=m,s=d,r=f)}const o=Math.sqrt(a),c=xs(n.x,n.z,i);if(!c&&o>=t)return 0;if(c){const h=s-n.x,u=r-n.z,d=o||1e-5;return n.x=s+h/d*t,n.z=r+u/d*t,o+t}const l=(t-o)/o;return n.x+=(n.x-s)*l,n.z+=(n.z-r)*l,t-o}function Z0(n,t,e){if(n.x<e.x0-t||n.x>e.x1+t||n.z<e.z0-t||n.z>e.z1+t)return 0;switch(e.kind){case"box":return Jh(n,t,e);case"circle":return Lb(n,t,e);case"seg":return Ib(n,t,e);default:return Db(n,t,e)}}function $h(n,t,e){let i=0;for(let r=0;r<2;r++){for(let a=0;a<Ai.length;a++)i+=Z0(n,t,Ai[a]);if(e)for(let a=0;a<ga.length;a++)i+=Jh(n,t,ga[a])}const s=Aa/2-2;return n.x=Gt(n.x,Ye-s,Ye+s),n.z=Gt(n.z,Ye-s,Ye+s),i}function Ub(n,t,e){for(let i=0;i<Ai.length;i++){const s=Ai[i];if(!(t>s.top||n<s.x0||n>s.x1||e<s.z0||e>s.z1)){if(s.kind==="box")return!0;if(s.kind==="circle"){const r=n-s.x,a=e-s.z;if(r*r+a*a<s.r*s.r)return!0}else if(s.kind==="seg"){const[r,a]=Ec(n,e,s.ax,s.az,s.bx,s.bz);if((n-r)**2+(e-a)**2<s.h*s.h)return!0}else if(xs(n,e,s.pts))return!0}}return!1}const Ro={vcol:new $n({vertexColors:!0,flatShading:!0,side:vn}),glow:new Ci({vertexColors:!0,fog:!0})},Ht={plaster:15326672,plasterShade:13352366,stone:9276040,tile:7223851,wood:5913893,woodDark:3811095,iron:1841951,churchWall:15525594,spire:6106917,snow:Vh},ln=new Jn,He=new Jn,Ae=new Jn,ra=new Jn,ch=[],lh=[],J0=[],$0=[],Qh=Pi(1527);function Cl(n,t,e,i,s){(Qh()<.27?lh:ch).push(ot(n,t,e,0,i,0))}let Co=null;function Nb(){if(Co)return Co;const n=Ra(96,96),t=n.getContext("2d"),e=t.createRadialGradient(48,48,0,48,48,48);return e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.18,"rgba(255,255,255,.55)"),e.addColorStop(.5,"rgba(255,255,255,.14)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,96,96),Co=Ca(n),Co}function hh(n,t,e=.9){const i=new j2(new s0({map:Nb(),color:n,blending:Nl,depthWrite:!1,transparent:!0,opacity:e}));return i.scale.set(t,t,1),i}function os(n,t,e){const i=pr(n,t);Ae.add(new We(.06,.09,3.1,6),ot(n,i+1.55,t),Ht.iron),Ae.add(new Pn(.34,.3,4),ot(n,i+3.72,t,0,Math.PI/4,0),Ht.iron,!0),ra.add(new ce(.3,.44,.3),ot(n,i+3.34,t),16762743);const s=hh(16756832,2.8,.75);s.position.set(n,i+3.34,t),ae.add(s);let r=null;e&&(r=new Ta(16757864,48,28,2),r.position.set(n,i+3.3,t),r.userData.lantern=!0,ae.add(r)),Ia(n,t,.14,i+3.6,!1),J0.push({light:r,sprite:s,base:e?48:0,seed:Qh()*10})}function ac(n,t){const e=pr(n,t);Ae.add(new We(.03,.03,.5,5),ot(n,e+.25,t,.15,0,.1),7999504);const i=new Ta(16719677,140,30,2);i.position.set(n,e+.75,t),ae.add(i);const s=hh(16724048,3.4,1);s.position.set(n,e+.62,t),ae.add(s);const r=hh(16765136,.9,1);r.position.set(n,e+.58,t),ae.add(r),$0.push({x:n,y:e+.58,z:t,light:i,sprite:s,core:r,seed:Qh()*10,smokeT:0})}function Ob(){const n=(s,r,a,o,c)=>{const h=[],u=[],d=new wt(o),f=new wt(c);for(let g=0;g<220;g++){const p=g/220*Pe,v=(g+1)/220*Pe,x=a(p),y=a(v),A=Math.cos(p)*s,M=Math.sin(p)*s,R=Math.cos(v)*s,N=Math.sin(v)*s;h.push(A,r,M,R,r,N,R,y,N,A,r,M,R,y,N,A,x,M);for(const b of[0,0,1,0,1,1]){const E=b?d:f;u.push(E.r,E.g,E.b)}}const m=new De;m.setAttribute("position",new ee(h,3)),m.setAttribute("color",new ee(u,3));const _=new Me(m,new Ci({vertexColors:!0,side:vn,fog:!1}));_.frustumCulled=!1,_.renderOrder=-5,ae.add(_)},t=(s,r)=>Math.sin(s*7+r)*.5+Math.sin(s*17+r*2.3)*.28+Math.sin(s*41+r*.7)*.14+Math.sin(s*83+r)*.08,e=(s,r,a)=>{const o=ec(r,s);return Math.exp(-(o*o)/(a*a))},i=s=>.35+.65*bc(-.2,.75,Math.sin(s-.25));n(1500,-60,s=>(150+t(s,1.3)*95)*i(s)+330*Math.pow(e(s,.62,.42),.6)+240*e(s,1.75,.3)+360*e(s,2.95,.16)+180*e(s,2.6,.2),5196408,7036806),n(1100,-60,s=>(70+t(s,4.1)*45)*(.5+.5*i(s))+80*e(s,.3,.5)+60*e(s,2.3,.4),3288396,Tc)}function ip(n){const t=Ra(64,96),e=t.getContext("2d");if(e.fillStyle="#b7ad9e",e.fillRect(0,0,64,96),n){const i=e.createLinearGradient(0,8,0,88);i.addColorStop(0,"#ffdc90"),i.addColorStop(1,"#ff9a38"),e.fillStyle=i}else e.fillStyle="#0f131d";e.fillRect(7,7,50,80),e.save(),e.beginPath(),e.rect(7,7,50,80),e.clip(),e.strokeStyle=n?"rgba(45,22,6,.9)":"rgba(84,92,110,.95)",e.lineWidth=2;for(let i=-96;i<170;i+=13)e.beginPath(),e.moveTo(i,7),e.lineTo(i+80,87),e.stroke(),e.beginPath(),e.moveTo(i+80,7),e.lineTo(i,87),e.stroke();return e.restore(),e.fillStyle="#eef2f8",e.fillRect(2,87,60,7),Ca(t)}const tu=[];function Fb(){Ab(),Ob();const n=(r,a)=>{const o=new Me(r.build(),a);return o.castShadow=!0,o.receiveShadow=!0,ae.add(o),o};tu.push(n(ln,Ro.vcol),n(He,Ro.vcol),n(Ae,Ro.vcol));const t=new Me(ra.build(),Ro.glow);ae.add(t);const e=new Sa(1.15,1.72),i=new wr(e,new $n({map:ip(!1)}),ch.length);ch.forEach((r,a)=>i.setMatrixAt(a,r));const s=new wr(e,new Ci({map:ip(!0)}),lh.length);lh.forEach((r,a)=>s.setMatrixAt(a,r)),ae.add(i,s),ae.updateMatrixWorld(!0)}const eu=1.25,de=Math.ceil(Aa/eu),Bn=new Uint8Array(de*de),Sn=new Uint16Array(de*de),Qs=new Int32Array(de*de),ir=65535,Pr=n=>Gt(Math.floor((n-Ye+Aa/2)/eu),0,de-1),Lr=n=>(n+.5)*eu-Aa/2+Ye;function zb(){const t=new C;for(let e=0;e<de;e++)for(let i=0;i<de;i++){const s=Lr(i),r=Lr(e);let a=!1;for(let o=0;o<Ai.length&&!a;o++){const c=Ai[o];c.nav&&(t.set(s,0,r),a=Z0(t,.72,c)>0)}for(let o=0;o<ga.length&&!a;o++)t.set(s,0,r),a=Jh(t,.72,ga[o])>0;Bn[e*de+i]=a?1:0}}function Q0(n,t){const e=Pr(n),i=Pr(t);if(!Bn[i*de+e])return i*de+e;for(let s=1;s<8;s++)for(let r=-s;r<=s;r++)for(let a=-s;a<=s;a++){if(Math.max(Math.abs(a),Math.abs(r))!==s)continue;const o=e+a,c=i+r;if(!(o<0||c<0||o>=de||c>=de)&&!Bn[c*de+o])return c*de+o}return-1}function Bb(n,t){Sn.fill(ir);const e=Q0(n,t);if(e<0)return;let i=0,s=0;for(Qs[s++]=e,Sn[e]=0;i<s;){const r=Qs[i++],a=Sn[r]+1,o=r%de,c=r/de|0;if(o>0){const l=r-1;!Bn[l]&&Sn[l]===ir&&(Sn[l]=a,Qs[s++]=l)}if(o<de-1){const l=r+1;!Bn[l]&&Sn[l]===ir&&(Sn[l]=a,Qs[s++]=l)}if(c>0){const l=r-de;!Bn[l]&&Sn[l]===ir&&(Sn[l]=a,Qs[s++]=l)}if(c<de-1){const l=r+de;!Bn[l]&&Sn[l]===ir&&(Sn[l]=a,Qs[s++]=l)}}}function sp(n,t,e,i){const s=Math.hypot(e-n,i-t),r=Math.ceil(s/.6);for(let a=1;a<r;a++){const o=a/r;if(Bn[Pr(Kt(t,i,o))*de+Pr(Kt(n,e,o))])return!1}return!0}function rp(n,t,e){const i=Pr(n),s=Pr(t),r=s*de+i;let a=Bn[r]?ir:Sn[r],o=0,c=0;for(let d=-1;d<=1;d++)for(let f=-1;f<=1;f++){if(!f&&!d)continue;const m=i+f,_=s+d;if(m<0||_<0||m>=de||_>=de)continue;const g=_*de+m;Bn[g]||f&&d&&(Bn[s*de+m]||Bn[_*de+i])||Sn[g]<a&&(a=Sn[g],o=f,c=d)}if(!o&&!c)return!1;const l=Lr(i+o)-n,h=Lr(s+c)-t,u=Math.hypot(l,h)||1;return e.x=l/u,e.z=h/u,!0}const ti=(()=>{const n=new Float32Array(lr*3),t=new Float32Array(lr),e=Pi(12);for(let c=0;c<lr;c++)n[c*3]=(e()-.5)*56,n[c*3+1]=e()*26-6,n[c*3+2]=(e()-.5)*56,t[c]=1.1+e()*1.5;const i=new De;i.setAttribute("position",new En(n,3));const s=Ra(32,32),r=s.getContext("2d"),a=r.createRadialGradient(16,16,0,16,16,16);a.addColorStop(0,"rgba(255,255,255,1)"),a.addColorStop(.5,"rgba(255,255,255,.6)"),a.addColorStop(1,"rgba(255,255,255,0)"),r.fillStyle=a,r.fillRect(0,0,32,32);const o=new c0(i,new Ch({map:Ca(s),size:.13,transparent:!0,opacity:.9,depthWrite:!1,color:15922687}));return o.frustumCulled=!1,ae.add(o),{pos:n,spd:t,pts:o,t:0,count:lr}})();function kb(n){ti.t+=n;const t=ti.pos,e=re.position.x,i=re.position.y,s=re.position.z,r=(.9+Math.sin(ti.t*.3)*.7)*n,a=.35*n;for(let o=0;o<ti.count;o++){const c=o*3;t[c]+=r+Math.sin(ti.t*1.3+o)*.004,t[c+1]-=ti.spd[o]*n,t[c+2]+=a,t[c]-e>28?t[c]-=56:t[c]-e<-28&&(t[c]+=56),t[c+2]-s>28?t[c+2]-=56:t[c+2]-s<-28&&(t[c+2]+=56),t[c+1]<i-8?t[c+1]+=26:t[c+1]>i+18&&(t[c+1]-=26)}ti.pts.geometry.attributes.position.needsUpdate=!0}const Ki=(()=>{const n=new wr(new Oh(.5),new Ci({color:16777215}),Sl);n.instanceMatrix.setUsage(Zu);const t=new wt(1,1,1);for(let i=0;i<Sl;i++)n.setColorAt(i,t);n.instanceColor.setUsage(Zu),n.frustumCulled=!1,n.count=0,ae.add(n);const e=[];for(let i=0;i<Sl;i++)e.push({x:0,y:0,z:0,vx:0,vy:0,vz:0,life:0,max:1,size:.1,grow:0,grav:0,drag:0,stretch:1,spin:0,r:1,g:1,b:1,floor:!0});return{mesh:n,free:e,active:[]}})(),Jr=new wt,ap=new zt,Hb=new Mn,Gb=new Es,Vb=new C,Wb=new C;function _a(n,t,e,i,s,r,a,o,c,l){const h=Ki.free.pop();h&&(h.x=n,h.y=t,h.z=e,h.vx=i,h.vy=s,h.vz=r,h.life=a,h.max=a,h.size=o,Jr.set(c),h.r=Jr.r,h.g=Jr.g,h.b=Jr.b,h.grav=l&&l.grav!==void 0?l.grav:14,h.drag=l&&l.drag||.6,h.grow=l&&l.grow||0,h.stretch=l&&l.stretch||1,h.spin=(Math.random()-.5)*16,h.floor=!(l&&l.noFloor),Ki.active.push(h))}function uh(n,t,e,i,s,r=5){for(let a=0;a<s;a++){const o=Math.random()*Pe,c=Math.random()*r;_a(n+(Math.random()-.5)*.5,t+(Math.random()-.5)*.8,e+(Math.random()-.5)*.5,Math.cos(o)*c,1.5+Math.random()*r*.9,Math.sin(o)*c,.7+Math.random()*.7,.12+Math.random()*.14,i[Math.random()*i.length|0],{stretch:2.6,drag:1.4,grav:11})}}function oc(n,t,e,i,s=16760928){for(let r=0;r<i;r++){const a=Math.random()*Pe,o=2+Math.random()*7;_a(n,t,e,Math.cos(a)*o,1+Math.random()*6,Math.sin(a)*o,.25+Math.random()*.3,.05+Math.random()*.05,s,{stretch:3,drag:2})}}function Ln(n,t,e,i,s=2.5){for(let r=0;r<i;r++){const a=Math.random()*Pe,o=Math.random()*s;_a(n,t+.05,e,Math.cos(a)*o,.8+Math.random()*s,Math.sin(a)*o,.4+Math.random()*.4,.07+Math.random()*.08,15659770,{grav:9})}}function Xb(n){const t=Ki.active,e=Ki.mesh;let i=0;for(let s=0;s<t.length;s++){const r=t[s];if(r.life-=n,r.life<=0){Ki.free.push(r);continue}const a=Math.exp(-r.drag*n);if(r.vx*=a,r.vz*=a,r.vy=r.vy*a-r.grav*n,r.x+=r.vx*n,r.y+=r.vy*n,r.z+=r.vz*n,r.floor){const h=Gn(r.x,r.z)+.03;r.y<h&&(r.y=h,r.vy=0,r.vx*=.5,r.vz*=.5,r.spin=0)}const o=r.life/r.max,c=(r.size+r.grow*(1-o))*Math.min(1,o*3.3),l=r.spin*(r.max-r.life);ap.compose(Vb.set(r.x,r.y,r.z),Hb.setFromEuler(Gb.set(l,l*.7,l*.3)),Wb.set(c,c*r.stretch,c)),e.setMatrixAt(i,ap),e.setColorAt(i,Jr.setRGB(r.r,r.g,r.b)),t[i++]=r}t.length=i,e.count=i,e.instanceMatrix.needsUpdate=!0,e.instanceColor.needsUpdate=!0}function qb(n){const t=K.time;for(const e of $0){const i=.75+Math.sin(t*31+e.seed)*.12+Math.sin(t*57+e.seed*3)*.1+Math.random()*.08;e.light.intensity=140*i,e.sprite.scale.setScalar(3.2+i*.9),e.core.scale.setScalar(.7+i*.4),e.smokeT-=n,e.smokeT<=0&&(e.smokeT=.09,_a(e.x,e.y+.2,e.z,.5+Math.random()*.6,1.6+Math.random(),(Math.random()-.5)*.6,2.2,.16,9056320,{grav:-.5,drag:.5,grow:.9,noFloor:!0}),Math.random()<.5&&_a(e.x,e.y,e.z,(Math.random()-.5)*3,1+Math.random()*3,(Math.random()-.5)*3,.4,.045,16738928,{grav:6}))}for(const e of J0){const i=.93+Math.sin(t*9+e.seed)*.04+Math.sin(t*23+e.seed*2)*.03;e.light&&(e.light.intensity=e.base*i)}}const tm="krampuslauf_marzoll_grafik",dh="krampuslauf_marzoll_grafik_auto";function fh(n){try{return localStorage.getItem(n)}catch{return null}}function em(n,t){try{localStorage.setItem(n,t)}catch{}}function cc(n){const t=Tr[n];Le.level=n,Le.pixelRatio=Math.min(window.devicePixelRatio||1,t.maxPixelRatio),nn.setPixelRatio(Le.pixelRatio),Be.castShadow!==t.shadows&&(Be.castShadow=t.shadows),Be.shadow.mapSize.x!==t.shadowMapSize&&(Be.shadow.mapSize.set(t.shadowMapSize,t.shadowMapSize),Be.shadow.map&&(Be.shadow.map.dispose(),Be.shadow.map=null)),ti.count=Math.min(lr,t.snow),ti.pts.geometry.setDrawRange(0,ti.count);for(const e of Le.lights)e.visible=t.lanternLights;Le.settle=VM,nm()}function ph(n){Le.setting=n,em(tm,n),cc(n==="auto"?fh(dh)in Tr?fh(dh):ct.mode?kM:BM:n)}function Yb(){Le.lights=[],ae.traverse(t=>{t.isPointLight&&t.userData.lantern&&Le.lights.push(t)});for(const t of document.querySelectorAll("[data-quality]"))t.innerHTML="<span>Grafik</span>"+[["auto","Automatisch"],["low","Niedrig"],["mid","Mittel"],["high","Hoch"]].map(([e,i])=>`<button type="button" data-q="${e}" aria-pressed="false">${i}</button>`).join("")+"<small></small>",t.addEventListener("click",e=>{const i=e.target.closest("button[data-q]");i&&ph(i.dataset.q)});const n=fh(tm);ph(n&&(n==="auto"||n in Tr)?n:"auto")}function nm(){if(!Vn)for(const n of document.querySelectorAll("[data-quality]")){for(const e of n.querySelectorAll("button"))e.setAttribute("aria-pressed",String(e.dataset.q===Le.setting));const t=n.querySelector("small");t&&(t.textContent=Le.setting==="auto"?`Gerade: ${Tr[Le.level].name}. Stellt sich bei ruckelndem Bild selbst niedriger.`:"")}}function Kb(n){if(K.state!=="playing"||document.visibilityState!=="visible"||Le.settle>0)return;const t=Tr[Le.level];if(n>=HM)return;if(Le.pixelRatio-.15>=t.minPixelRatio){Le.pixelRatio=Math.max(t.minPixelRatio,Le.pixelRatio-.25),nn.setPixelRatio(Le.pixelRatio),Le.settle=1;return}if(Le.setting!=="auto")return;const e=Le.level==="high"?"mid":Le.level==="mid"?"low":null;e&&(cc(e),em(dh,e),$i("Grafik automatisch auf "+Tr[e].name+" gestellt",2.5))}const Pt={n:0,state:"break",breakT:0,queue:[],spawnT:0,mul:{speed:1,damage:1},spawnIdx:[],lastTick:-1,total:0},mr=[];function jb(n){if(n%sh===0){const a=(n/sh-1)*g3;return Array.from({length:a},(o,c)=>c%2?"jumper":"runner").concat(["boss"])}const t=n===1?uS:Math.round(dS+n*fS+n*n*pS),e=n>=bf?Math.min(1+Math.floor((n-bf)/2),mS):0,i=n>=Ef?Math.min(1+Math.floor((n-Ef)*.9),gS):0,s=Math.max(3,t-e-i),r=[];for(let a=0;a<s;a++)r.push("runner");for(let a=0;a<i;a++)r.push("jumper");for(let a=0;a<e;a++)r.push("rammer");for(let a=r.length-1;a>0;a--){const o=Math.random()*(a+1)|0;[r[a],r[o]]=[r[o],r[a]]}return r}function im(n){Pt.state="break",Pt.breakT=n,Pt.lastTick=-1}function Zb(){Pt.n++,Pt.state="active",Pt.queue=jb(Pt.n),Pt.total=Pt.queue.length,Pt.mul.speed=Math.min(vS,_S+xS*Pt.n),Pt.mul.damage=yS+MS*(Pt.n-1),Pt.spawnT=.5;const n=Math.random()*mr.length|0,t=Math.min(mr.length,2+Pt.n);Pt.spawnIdx=[];for(let e=0;e<t;e++)Pt.spawnIdx.push((n+e)%mr.length);rt.intensity=Gt((Pt.n-1)/8,0,1),Pt.n%sh===0?(vr("Der Oberteufel","Boss-Welle "+Pt.n+" – er kommt durch das Tor",3.6),rt.boss=!0):vr("Welle "+Pt.n,Pt.total+" Krampusse kommen den Schlossberg herauf",3.2),va(),ai(.5,.7,1.3,0)}function Jb(n){if(Pt.state==="break"){Pt.breakT-=n;const e=Math.ceil(Pt.breakT);e!==Pt.lastTick&&e>0&&e<=5&&(Pt.lastTick=e,HE(),Pt.n>0?vr("Welle "+Pt.n+" überstanden","Nächste Welle in "+e,1.2):vr("Sie kommen","Erste Welle in "+e,1.2)),Pt.breakT<=0&&Zb();return}const t=Ce.reduce((e,i)=>e+(i.dying?0:1),0);if(Pt.queue.length){if(Pt.spawnT-=n,Pt.spawnT<=0&&t<Math.min(NM,wS+Pt.n*TS)){Pt.spawnT=Math.max(ES,SS-Pt.n*bS);let e=null;for(let s=0;s<8&&!e;s++){const r=mr[Pt.spawnIdx[Math.random()*Pt.spawnIdx.length|0]];Math.hypot(r.x-Lt.pos.x,r.z-Lt.pos.z)>AS&&(e=r)}e||(e=mr.reduce((s,r)=>Math.hypot(r.x-Lt.pos.x,r.z-Lt.pos.z)>Math.hypot(s.x-Lt.pos.x,s.z-Lt.pos.z)?r:s));const i=ya.set(e.x+(Math.random()-.5)*5,0,e.z+(Math.random()-.5)*5);$h(i,.9,!0),au(Pt.queue.pop(),i.x,i.z,Pt.mul)}}else t===0&&(ou(wf*Pt.n),Lt.hp=Math.min(Ms,Lt.hp+RS),im(UM),vr("Welle "+Pt.n+" überstanden","+"+wf*Pt.n+" Punkte",1.6))}const K={state:"loading",pausedAt:0,fps:0,time:0,score:0,kills:0,best:0,hitstop:0,shake:0,viewMode:"fp",hurtFlash:0,dmgDir:0,dmgDirT:0},sm="krampuslauf_marzoll_bestwert";function $b(){try{return parseInt(localStorage.getItem(sm)||"0",10)||0}catch{return 0}}function Qb(n){try{localStorage.setItem(sm,String(n))}catch{}}function Ua(n){K.state=n,Vn||(document.body.dataset.state=n)}function aa(){gm(),xa(!1),AE();for(const n of Ki.active)Ki.free.push(n);Ki.active.length=0,lm(),Q.state="held",Q.mesh.visible=!1,Q.hit.clear(),K.score=0,K.kills=0,K.hitstop=0,K.shake=0,K.hurtFlash=0,K.dmgDirT=0,K.viewMode="fp",we.blend=0,we.dist=0,Pt.n=0,Pt.queue=[],rt.intensity=0,rt.boss=!1,LE(),_E(),im(DM),ut.cache={},ut.banner.classList.remove("show");for(const n in Ve)Ve[n]=!1;Ua("playing"),iu(),am(),$i(ct.mode?"Kam wechselt zur Schulterkamera":"V wechselt zur Schulterkamera",4)}function gr(){K.state==="playing"&&(K.pausedAt=performance.now(),am(),Ua("paused"),rt.ctx&&rt.ctx.state==="running"&&rt.ctx.suspend())}function mh(){if(K.state==="paused"&&!(ct.mode&&cm())){rt.ctx&&rt.ctx.resume();for(const n in Ve)Ve[n]=!1;Ua("playing"),iu()}}function tE(){const n=K.score>K.best;n&&(K.best=K.score,Qb(K.best)),Jt("oScore").textContent=String(K.score),Jt("oWave").textContent=String(Math.max(1,Pt.n)),Jt("oKills").textContent=String(K.kills),Jt("oBest").textContent=String(K.best),Jt("newBest").style.display=n&&K.score>0?"block":"none",Jt("menuBest").textContent=K.best>0?"Bestwert: "+K.best:"",we.orbit=Lt.yaw+Math.PI/2,Lt.model.root.visible=!0,Lt.model.body.rotation.x=-1.4,uh(Lt.pos.x,Lt.pos.y+1.2,Lt.pos.z,Nr.schloss.palette,26,5),ai(.6,.55,1.6,0),va(),rt.intensity=0,rt.boss=!1,Ua("gameover"),!Vn&&document.pointerLockElement&&document.exitPointerLock()}function nu(){let n=Bi;K.hitstop>0&&(K.hitstop-=Bi,n*=C0),K.time+=n,K.shake=Math.max(0,K.shake-Bi*2.4),rt.bellBudget=Math.min(4,rt.bellBudget+Bi*9),uE(n),KE(n),CE(n),gE(n,Lt),Jb(n),jE(Bi)}const Po={acc:0};function eE(n){Po.acc+=n;let t=0;for(;Po.acc>=Bi&&K.state==="playing";){if(t>=eS){Po.acc=0;break}nu(),Po.acc-=Bi,t++}vm(),UE(n)}function nE(n,t){const e=Math.round(n/Bi);for(let i=0;i<e&&K.state==="playing";i++)nu(),t&&t(i)}function iE(){Fb(),zb();for(const[n,t]of w0){const e=Q0(n,t);mr.push(e<0?{x:n,z:t}:{x:Lr(e%de),z:Lr(e/de|0)})}lb(),Lt.model=Xh(Nr.schloss,{detail:1}),ae.add(Lt.model.root),Q.mesh=Pa(1),Q.mesh.visible=!1,Q.mesh.scale.setScalar(1.15),ae.add(Q.mesh),ZE(),lm(),K.best=$b()}const Ve=Object.create(null);let Pl=!1;function iu(){if(!ct.mode)try{const n=sc.requestPointerLock();n&&n.catch&&n.catch(()=>{})}catch{}}function sE(){document.addEventListener("pointerlockchange",()=>{const n=document.pointerLockElement===sc;!n&&Pl&&K.state==="playing"&&gr(),Pl=n}),document.addEventListener("pointerlockerror",()=>{K.state==="playing"&&!ct.mode&&$i("Einmal ins Bild klicken, dann lenkt die Maus die Kamera",3)}),window.addEventListener("keydown",n=>{(n.code==="Space"||n.code==="Tab"||n.code.startsWith("Arrow"))&&n.preventDefault(),!n.repeat&&(Ve[n.code]=!0,n.code==="KeyM"&&_m(),n.code==="KeyV"&&(K.state==="playing"||K.state==="paused")&&su(),n.code==="KeyF"&&K.state==="playing"&&pm(Lt),n.code==="KeyG"&&K.state==="menu"&&xa(),le.on&&/^Digit[0-5]$/.test(n.code)&&mm(+n.code.slice(5)-1),n.code==="Escape"&&K.state==="menu"&&xa(!1),n.code==="Escape"&&(K.state==="playing"?(gr(),document.pointerLockElement&&document.exitPointerLock()):K.state==="paused"&&performance.now()-K.pausedAt>500&&mh()),(n.code==="Enter"||n.code==="NumpadEnter"||n.key==="Enter")&&(K.state==="playing"?lc():K.state==="menu"||K.state==="gameover"?aa():K.state==="paused"&&mh()),n.code==="KeyR"&&K.state==="gameover"&&aa())}),window.addEventListener("keyup",n=>{Ve[n.code]=!1}),window.addEventListener("blur",()=>{for(const n in Ve)Ve[n]=!1;K.state==="playing"&&gr()}),document.addEventListener("mousemove",n=>{if(K.state!=="playing")return;const t=Gt(n.movementX||0,-260,260),e=Gt(n.movementY||0,-260,260);Lt.yaw-=t*vf,Lt.pitch=Gt(Lt.pitch-e*vf,-1.35,1.35)}),sc.addEventListener("mousedown",n=>{K.state==="playing"&&(Pl||iu(),n.button===0&&hu(),n.button===2&&lc())}),window.addEventListener("contextmenu",n=>n.preventDefault()),window.addEventListener("resize",rE)}function rE(){ct.mode&&ru(),ct.mode&&cm()&&K.state==="playing"&&gr();const n=window.innerWidth,t=window.innerHeight;nn.setSize(n,t),re.aspect=n/t,re.updateProjectionMatrix(),xh.aspect=n/t,xh.updateProjectionMatrix()}function su(){K.viewMode=K.viewMode==="fp"?"tp":"fp",$i(K.viewMode==="fp"?"Ego-Kamera":"Schulterkamera",1.4)}const ct={mode:!1,mx:0,my:0,sprint:!1,jump:!1,stickId:null,stickX:0,stickY:0,lookId:null,lookX:0,lookY:0,buttons:new Map,layer:null,base:null,knob:null,scale:1};function aE(){const n=new URLSearchParams(location.search).get("touch");if(n==="1")return!0;if(n==="0")return!1;const t=window.matchMedia&&matchMedia("(pointer: coarse)").matches,e=window.matchMedia&&matchMedia("(any-pointer: fine)").matches;return t||navigator.maxTouchPoints>0&&!e}function gh(n){ct.mode!==n&&(ct.mode=n,document.body.dataset.touch=n?"1":"",n&&(ru(),document.pointerLockElement&&document.exitPointerLock()),nm())}function ru(){const n=window.innerWidth,t=window.innerHeight,e=Gt(Math.min(n,t)/400,$M,QM);ct.scale=e;const i=YM*e,s=KM*e,r=jM*e,a=ZM*e,o=JM*e;ct.safe||(ct.safe=document.createElement("div"),ct.safe.style.cssText="position:fixed;visibility:hidden;pointer-events:none;padding:0 env(safe-area-inset-right) env(safe-area-inset-bottom) 0",document.body.appendChild(ct.safe));const c=getComputedStyle(ct.safe),l=parseFloat(c.paddingRight)||0,h=parseFloat(c.paddingBottom)||0;ct.layer.style.setProperty("--stick-d",A0*2*e+"px");const u=n-l-o-i/2,d=t-h-o-i/2,f=i/2+s/2+a,m=(v,x,y,A)=>{const M=ct.layer.querySelector(`[data-btn="${v}"]`);M.style.width=M.style.height=A+"px",M.style.left=x-A/2+"px",M.style.top=y-A/2+"px"},_=v=>[u+Math.cos(v*Math.PI/180)*f,d-Math.sin(v*Math.PI/180)*f];m("hit",u,d,i),m("jump",..._(180),s),m("throw",..._(132),s),m("ram",..._(84),s);const g=n-l-o-r/2,p=d-f-s/2-a*2;m("cam",g,p-r/2,r),m("pause",g,p-r*1.5-a,r)}function op(n,t){const e=A0*ct.scale;let i=n-ct.stickX,s=t-ct.stickY;const r=Math.hypot(i,s);r>e&&(i*=e/r,s*=e/r);let a=i/e,o=s/e;const c=Math.hypot(a,o);if(c<bl)a=0,o=0;else{const l=(c-bl)/(1-bl)/c;a*=l,o*=l}ct.mx=a,ct.my=o,ct.sprint=Math.hypot(a,o)>=XM&&-o>=qM*Math.hypot(a,o),ct.layer&&(ct.knob.style.transform=`translate(${ct.stickX+i}px, ${ct.stickY+s}px)`,ct.layer.classList.toggle("sprint",ct.sprint))}function rm(){ct.stickId=null,ct.mx=0,ct.my=0,ct.sprint=!1,ct.layer&&ct.layer.classList.remove("stick","sprint")}function oE(n){n.classList.add("down");const t=n.dataset.btn;K.state==="playing"&&(gm(),t==="hit"?hu():t==="throw"?lc():t==="jump"?ct.jump=!0:t==="cam"?su():t==="pause"?gr():t==="ram"&&pm(Lt))}function cE(n){n.classList.remove("down"),n.dataset.btn==="jump"&&(ct.jump=!1)}function am(){rm(),ct.lookId=null,ct.jump=!1;for(const n of ct.buttons.values())n.classList.remove("down");ct.buttons.clear()}function Ll(n,t,e,i){ct.debug&&(ct.debugLog=ct.debugLog||[],ct.debugLog.unshift(`${n} ${t}${e!==void 0?" "+Math.round(e)+","+Math.round(i):""}`),ct.debugLog.length=Math.min(ct.debugLog.length,4),ct.debug.textContent=`Stick ${ct.stickId??"-"}  mx ${ct.mx.toFixed(2)}  my ${ct.my.toFixed(2)}  Sprint ${ct.sprint?"ja":"nein"}
Umsehen ${ct.lookId??"-"}  Knöpfe ${ct.buttons.size}  Zustand ${K.state}  Breite ${window.innerWidth}
`+ct.debugLog.join(`
`))}function lE(){ct.layer=Jt("touch"),ct.base=Jt("stickBase"),ct.knob=Jt("stickKnob");const n=ct.layer,t=(a,o,c,l)=>{Ll("down",a,o,c);const h=l&&l.closest&&l.closest(".tbtn");if(h&&!h.classList.contains("reserved")){ct.buttons.set(a,h),oE(h);return}if(o<window.innerWidth*WM){if(ct.stickId!==null)return;ct.stickId=a,ct.stickX=o,ct.stickY=c,ct.base.style.transform=`translate(${o}px, ${c}px)`,n.classList.add("stick"),op(o,c)}else ct.lookId===null&&(ct.lookId=a,ct.lookX=o,ct.lookY=c)},e=(a,o,c)=>{if(a===ct.stickId)op(o,c);else if(a===ct.lookId&&K.state==="playing"){const l=Gt(o-ct.lookX,-120,120),h=Gt(c-ct.lookY,-120,120);ct.lookX=o,ct.lookY=c,Lt.yaw-=l*yf,Lt.pitch=Gt(Lt.pitch-h*yf,-1.35,1.35)}Ll("move",a,o,c)},i=a=>{a===ct.stickId&&rm(),a===ct.lookId&&(ct.lookId=null);const o=ct.buttons.get(a);o&&(ct.buttons.delete(a),cE(o)),Ll("up",a)},s={passive:!1};n.addEventListener("touchstart",a=>{a.preventDefault();for(const o of a.changedTouches)t("t"+o.identifier,o.clientX,o.clientY,o.target)},s),n.addEventListener("touchmove",a=>{a.preventDefault();for(const o of a.changedTouches)e("t"+o.identifier,o.clientX,o.clientY)},s);const r=a=>{a.preventDefault();for(const o of a.changedTouches)i("t"+o.identifier)};n.addEventListener("touchend",r,s),n.addEventListener("touchcancel",r,s),n.addEventListener("pointerdown",a=>{a.pointerType!=="touch"&&(a.preventDefault(),t(a.pointerId,a.clientX,a.clientY,a.target))}),window.addEventListener("pointermove",a=>{a.pointerType!=="touch"&&e(a.pointerId,a.clientX,a.clientY)}),window.addEventListener("pointerup",a=>{a.pointerType!=="touch"&&i(a.pointerId)}),window.addEventListener("pointercancel",a=>{a.pointerType!=="touch"&&i(a.pointerId)}),n.addEventListener("contextmenu",a=>a.preventDefault()),new URLSearchParams(location.search).get("debug")==="1"&&(ct.debug=document.createElement("pre"),ct.debug.style.cssText="position:fixed;left:50%;top:3.6rem;transform:translateX(-50%);margin:0;padding:.3rem .5rem;font:12px/1.3 monospace;color:#fff;background:rgba(0,0,0,.7);z-index:60;pointer-events:none;white-space:pre",document.body.appendChild(ct.debug)),window.addEventListener("touchstart",()=>{new URLSearchParams(location.search).get("touch")!=="0"&&gh(!0)},{passive:!0}),Jt("galleryLink").addEventListener("click",a=>{a.preventDefault(),K.state==="menu"&&xa(!0)}),document.addEventListener("pointerdown",a=>{!le.on||!ct.mode||a.target.closest("#galleryLink")||(le.focus<le.models.length?mm(le.focus+1):xa(!1))}),Jt("muteLink").addEventListener("click",a=>{a.preventDefault(),_m(),Jt("muteLink").textContent=rt.muted?"Ton an":"Ton aus"});for(const a of document.querySelectorAll(".fsBtn"))a.addEventListener("click",hE);Il(),document.addEventListener("fullscreenchange",Il),document.addEventListener("webkitfullscreenchange",Il),gh(aE())}function om(){return!!(document.fullscreenElement||document.webkitFullscreenElement)}function hE(){const n=document.documentElement;if(om()){(document.exitFullscreen||document.webkitExitFullscreen).call(document);return}const t=n.requestFullscreen||n.webkitRequestFullscreen;if(!t){$i("Vollbild geht in diesem Browser nicht",3);return}const e=t.call(n,{navigationUI:"hide"}),i=()=>{try{const s=screen.orientation&&screen.orientation.lock&&screen.orientation.lock("landscape");s&&s.catch&&s.catch(()=>{})}catch{}};e&&e.then?e.then(i).catch(()=>{}):i()}function Il(){const n=!!(document.fullscreenEnabled||document.webkitFullscreenEnabled);for(const t of document.querySelectorAll(".fsBtn"))t.hidden=!n,t.textContent=om()?"Vollbild aus":"Vollbild"}function cm(){return window.innerHeight>window.innerWidth}const Lt={pos:new C,vel:new C,kb:new C,yaw:0,pitch:0,vy:0,onGround:!0,coyote:0,jumpHeld:!1,hp:Ms,lastHurt:-99,iFrames:0,alive:!0,meleeCd:0,swingT:-1,swingHit:!1,phase:0,move:0,camY:0,stepIdx:0,model:null};function lm(){const n=Lt;n.pos.set(ps.x,Gn(ps.x,ps.z),ps.z),n.vel.set(0,0,0),n.kb.set(0,0,0),n.yaw=ps.yaw,n.pitch=0,n.vy=0,n.onGround=!0,n.hp=Ms,n.lastHurt=-99,n.iFrames=0,n.alive=!0,n.meleeCd=0,n.swingT=-1,n.camY=n.pos.y,n.model.root.visible=!0,n.model.body.rotation.set(0,0,0),n.model.root.position.copy(n.pos),n.model.root.rotation.y=n.yaw+Math.PI}function uE(n){const t=Lt;let e=(Ve.KeyD||Ve.ArrowRight?1:0)-(Ve.KeyA||Ve.ArrowLeft?1:0),i=(Ve.KeyS||Ve.ArrowDown?1:0)-(Ve.KeyW||Ve.ArrowUp?1:0);ct.mode&&(e+=ct.mx,i+=ct.my);const s=Math.hypot(e,i);s>1&&(e/=s,i/=s);const r=(Ve.ShiftLeft||Ve.ShiftRight||ct.sprint)&&i<0,a=r?b0:ia,o=Math.sin(t.yaw),c=Math.cos(t.yaw),l=(e*c+i*o)*a,h=(-e*o+i*c)*a,u=t.onGround?12:3.5,d=DE(n,t,r&&Math.hypot(t.vel.x,t.vel.z)>ia*.9);d?(t.vel.x=d.x,t.vel.z=d.z,t.iFrames=Math.max(t.iFrames,.12)):(t.vel.x=ii(t.vel.x,l,u,n),t.vel.z=ii(t.vel.z,h,u,n));const f=Ve.Space||ct.jump;f&&!t.jumpHeld&&(t.onGround||t.coyote>0)&&(t.vy=wM,t.onGround=!1,t.coyote=0,t.jumpHeld=!0,mp(.14)),f||(t.jumpHeld=!1),t.kb.multiplyScalar(Math.exp(-6*n));const m=t.pos.x+(t.vel.x+t.kb.x)*n;np(m,t.pos.z,t.pos.y,Fo,Ml)?(t.vel.x=0,t.kb.x=0):t.pos.x=m;const _=t.pos.z+(t.vel.z+t.kb.z)*n;np(t.pos.x,_,t.pos.y,Fo,Ml)?(t.vel.z=0,t.kb.z=0):t.pos.z=_,$h(t.pos,Fo,!1);const g=j0(t.pos.x,t.pos.z,t.pos.y,Ml);t.onGround&&t.vy<=0&&t.pos.y-g<.65?t.pos.y=g:(t.vy-=Mc*n,t.pos.y+=t.vy*n,t.pos.y<=g?(t.vy<-6&&(BE(),Ln(t.pos.x,g,t.pos.z,8),K.shake=Math.min(1,K.shake+.18)),t.pos.y=g,t.vy=0,t.onGround=!0):t.onGround=!1),t.coyote=t.onGround?.1:t.coyote-n;const p=Math.hypot(t.vel.x,t.vel.z);if(t.move=ii(t.move,t.onGround?Gt(p/ia,0,1.4):.3,10,n),t.onGround&&p>.6){t.phase+=p*n*1.75;const x=Math.floor(t.phase/Math.PI);x!==t.stepIdx&&(t.stepIdx=x,mp(.07+p*.012),rt.bellBudget=Math.max(rt.bellBudget,1.2),N0(.1+p*.022,x%2?.15:-.15),p>6&&Ln(t.pos.x,t.pos.y,t.pos.z,2,1.2))}t.meleeCd-=n,t.iFrames-=n,t.swingT>=0&&(t.swingT+=n,!t.swingHit&&t.swingT>=tS&&(t.swingHit=!0,qE()),t.swingT>=th&&(t.swingT=-1)),K.time-t.lastHurt>TM&&t.hp<Ms&&(t.hp=Math.min(Ms,t.hp+AM*n));const v=t.model;v.root.position.copy(t.pos),v.root.rotation.y=t.yaw+Math.PI,qh(v,t.phase,t.move,t.swingT>=0?t.swingT/th:-1,r?.2:.06),v.head.rotation.x=-t.pitch*.6}function _r(n,t,e,i=4){const s=Lt;if(!s.alive||s.iFrames>0||K.state!=="playing")return;s.hp-=n,s.lastHurt=K.time,s.iFrames=nS,K.shake=Math.min(1,K.shake+.35+n*.012),K.hurtFlash=1;const r=s.pos.x-t,a=s.pos.z-e,o=Math.hypot(r,a)||1;s.kb.x+=r/o*i,s.kb.z+=a/o*i;const c=-Math.sin(s.yaw),l=-Math.cos(s.yaw),h=Math.cos(s.yaw),u=-Math.sin(s.yaw);K.dmgDir=Math.atan2(-(r*h+a*u),-(r*c+a*l)),K.dmgDirT=.8,cu(0),ai(.35,1.5,.28,0),s.hp<=0&&(s.hp=0,s.alive=!1,tE())}const xr=[];let Lo=null,cp=null;function dE(n){n.boss=!0,n.maxHp=Nf,n.hp=Nf,n.radius=e3,n.speed=t3,n.phaseNo=1,n.atk="idle",n.atkT=0,n.cd=2.5,n.charges=0,n.summonCd=0,n.lastAttack="",n.helpers=new Set,rt.boss=!0}function hm(n){const t=n.hp/n.maxHp;return t<=s3?3:t<=i3?2:1}const Rn=(n,t)=>{n.atk=t,n.atkT=0},tr=(n,t,e)=>ai(n,t,e,0);function fE(n,t,e,i){const s={wantX:0,wantZ:0,faceX:i.ndx,faceZ:i.ndz,accel:6,lean:.1,swing:-1};n.atkT+=t,n.cd-=t,n.summonCd-=t;const r=hm(n);r!==n.phaseNo&&(n.phaseNo=r,tr(.9,.5,1.6),K.shake=Math.min(1,K.shake+.4),$i(r===2?"Der Oberteufel tobt: Rammstöße!":"Der Oberteufel ruft seine Horde!",2.5),n.atk==="idle"&&(n.cd=Math.min(n.cd,.8)));const a=o=>{s.lean=-.25*o,s.swing=.3*o,n.model.eyes.scale.setScalar(1+o*1.2)};switch(n.atk){case"idle":{if(i.chase(n.speed),s.wantX=i.wantX,s.wantZ=i.wantZ,i.dist<3.2&&n.cd<=.5&&n.lastAttack!=="swipe"){Rn(n,"swipeTell"),tr(.5,.9,.5);break}if(n.cd>0)break;r===2?(n.charges=0,Rn(n,"chargeTell"),tr(.85,.6,1)):r===3&&n.summonCd<=0&&i.aliveHelpers<zf?(Rn(n,"summonTell"),tr(1,.45,1.4)):(Rn(n,"stompTell"),tr(.8,.55,1));break}case"stompTell":a(Math.min(1,n.atkT/js)),n.atkT>=js&&(mE(n.pos.x,n.pos.z),K.shake=Math.min(1,K.shake+.6),Ln(n.pos.x,n.pos.y,n.pos.z,30,6),rt.bellBudget=4,Ss(.6,0,130),Ss(.5,0,98),bn({f:55,f2:30,dur:.6,gain:.7}),n.model.eyes.scale.setScalar(1),n.lastAttack="stomp",Rn(n,"idle"),n.cd=r3);break;case"chargeTell":{const o=Math.min(1,n.atkT/(n.charges?js*.6:js));s.lean=-.15+o*.55,n.model.eyes.scale.setScalar(1+o),Math.random()<t*8&&Ln(n.pos.x,n.pos.y,n.pos.z,2,2),o>=1&&(n.cdx=i.ndx,n.cdz=i.ndz,n.chargeHit=!1,Rn(n,"charge"),en({type:"lowpass",f:500,f2:120,dur:.6,gain:.5}));break}case"charge":{const o=Math.atan2(n.cdx,n.cdz),c=Gt(ec(o,Math.atan2(i.ndx,i.ndz)),-.5*t,.5*t);n.cdx=Math.sin(o+c),n.cdz=Math.cos(o+c),s.wantX=n.cdx*Ff,s.wantZ=n.cdz*Ff,s.accel=16,s.lean=.5,s.faceX=n.cdx,s.faceZ=n.cdz,Math.random()<t*30&&Ln(n.pos.x,n.pos.y,n.pos.z,2,3),!n.chargeHit&&i.dist<n.radius+.9&&Math.abs(e.pos.y-n.pos.y)<2&&(n.chargeHit=!0,_r(u3,n.pos.x-n.cdx,n.pos.z-n.cdz,16)),(n.atkT>=h3||n.wallHit)&&(n.wallHit=!1,pE(n));break}case"chargePause":s.lean=.25,n.atkT>=d3&&(Rn(n,"chargeTell"),tr(.6,.7,.6));break;case"summonTell":if(a(Math.min(1,n.atkT/js)),n.atkT>=js){const o=Math.min(p3,zf-i.aliveHelpers);for(let c=0;c<o;c++){const l=c/Math.max(1,o)*Math.PI*2+Math.random()*.5;i.spawnHelper(n.pos.x+Math.sin(l)*3.2,n.pos.z+Math.cos(l)*3.2,c)}va(),oc(n.pos.x,n.pos.y+2.5,n.pos.z,20,16732192),n.model.eyes.scale.setScalar(1),n.lastAttack="summon",n.summonCd=m3,Rn(n,"idle"),n.cd=2}break;case"swipeTell":s.swing=Math.min(.3,n.atkT/.55*.3),n.atkT>=.55&&(i.dist<3.4&&Math.abs(e.pos.y-n.pos.y)<2&&_r(n3,n.pos.x,n.pos.z,9),en({f:300,f2:1400,q:1.2,dur:.25,gain:.4}),n.lastAttack="swipe",Rn(n,"swipeRecover"));break;case"swipeRecover":s.swing=Math.min(1,.3+n.atkT/.5),n.atkT>=.5&&(Rn(n,"idle"),n.cd=Math.max(n.cd,1.2));break;default:Rn(n,"idle")}return s}function pE(n){n.charges++,n.charges<l3?Rn(n,"chargePause"):(n.lastAttack="charge",Rn(n,"idle"),n.cd=f3,n.model.eyes.scale.setScalar(1))}function mE(n,t){const e=Gn(n,t);let i=null;Lo||(Lo=new Uh(.85,1,48),Lo.rotateX(-Math.PI/2),cp=new Ci({color:16728096,transparent:!0,opacity:.8,depthWrite:!1,side:vn})),i=new Me(Lo,cp.clone()),i.position.set(n,e+.08,t),ae.add(i),xr.push({x:n,z:t,y:e,r:.5,hit:!1,mesh:i})}function gE(n,t){for(let e=xr.length-1;e>=0;e--){const i=xr[e];i.r+=a3*n;const s=Math.hypot(t.pos.x-i.x,t.pos.z-i.z),r=t.onGround&&t.pos.y-Gn(t.pos.x,t.pos.z)<.35;!i.hit&&r&&Math.abs(s-i.r)<o3/2&&(i.hit=!0,_r(c3,i.x,i.z,8)),i.mesh.scale.setScalar(i.r),i.mesh.material.opacity=.8*(1-i.r/Of),i.r>=Of&&(ae.remove(i.mesh),i.mesh.material.dispose(),xr.splice(e,1))}}function _E(){for(const n of xr)ae.remove(n.mesh),n.mesh.material.dispose();xr.length=0}function xE(n){rt.boss=!1,ou(Bf),vr("Oberteufel besiegt","+"+Bf+" Punkte – die Horde weicht zurück",4.5),va(),setTimeout(()=>va(),900),K.shake=Math.min(1,K.shake+.5),K.bossDefeats=(K.bossDefeats||0)+1}const lp=Math.PI*2,vE={};function um(n){const t=Gt((n-1)/7,0,1),e=([i,s])=>Kt(i,s,t);return{tokens:n>=WS?Df[1]:Df[0],roleStrength:e(XS),dodgeChance:e(qS),retreatChance:e(jS),...vE}}const xn={level:um(1),slotT:0,tokens:new Set};function yE(n,t,e,i,s){xn.level=um(i);for(const r of xn.tokens)t.some(a=>a.id===r&&!a.dying)||xn.tokens.delete(r);xn.slotT-=n,xn.slotT<=0&&(xn.slotT=VS,ME(t,e,s))}function ME(n,t,e){const i=n.filter(d=>!d.dying&&!d.boss&&Math.hypot(d.pos.x-t.pos.x,d.pos.z-t.pos.z)<GS);for(const d of n)i.includes(d)||(d.slot=null);const s=i.length;if(!s)return;const r=d=>Math.atan2(d.pos.x-t.pos.x,d.pos.z-t.pos.z),a=r(i[0]),o=Array.from({length:s},(d,f)=>a+f*lp/s),c=xn.level.roleStrength,l=(d,f)=>{let m=Math.abs((r(d)-f+Math.PI*3)%lp-Math.PI);const _=Math.cos(f-e);return d.type==="runner"&&(m+=c*(1-_)*.9),d.type==="jumper"&&(m+=c*(1+_)*.9),m},h=new Set(i),u=new Set(o.keys());for(;h.size;){let d=null,f=1/0;for(const m of h)for(const _ of u){const g=l(m,o[_]);g<f&&(f=g,d=[m,_])}d[0].slot=o[d[1]],h.delete(d[0]),u.delete(d[1])}}function SE(n){return n.boss||xn.tokens.has(n.id)?!0:xn.tokens.size>=xn.level.tokens?!1:(xn.tokens.add(n.id),!0)}function Ac(n){xn.tokens.delete(n.id)}const zo=n=>n.boss||xn.tokens.has(n.id);function hp(n,t,e){const i=n.pos.x,s=n.pos.z,r=e.pos.x,a=e.pos.z,o=r-i,c=a-s,l=o*o+c*c||1;for(const h of t){if(h===n||h.dying)continue;const u=Gt(((h.pos.x-i)*o+(h.pos.z-s)*c)/l,0,1);if(!(u<=0||u>=1)&&Math.hypot(h.pos.x-i-o*u,h.pos.z-s-c*u)<$S)return!1}return!0}function bE(n,t){var l;if(t.state!=="fly"||n.dodgeCd>0||n.boss||(l=t.dodgeChecked)!=null&&l.has(n.id))return 0;const e=n.pos.x-t.pos.x,i=n.pos.z-t.pos.z,s=t.vel.x,r=t.vel.z,a=s*s+r*r;if(a<1)return 0;const o=(e*s+i*r)/a;return o<0||o>.6||Math.hypot(e-s*o,i-r*o)>n.radius+.9||(t.dodgeChecked=t.dodgeChecked||new Set,t.dodgeChecked.add(n.id),Math.random()>=xn.level.dodgeChance)?0:(n.dodgeCd=KS,s*i-r*e>=0?1:-1)}function EE(n){return n.boss||n.retreated||n.dying||n.hp>Hh*n.def.hpFactor*ZS?!1:(n.retreated=!0,Math.random()<xn.level.retreatChance)}function wE(n,t,e){const i=m=>Da(m,t.pos.x,t.pos.z),s=ri.find(m=>m.ai==="walk"&&!m.axis&&t.pos.x>=m.x0&&t.pos.x<=m.x1&&t.pos.z>=m.z0&&t.pos.z<=m.z1&&Math.abs(t.pos.y-i(m))<.4);if(!s)return null;const r=ri.find(m=>m.axis&&m.ai==="walk"&&Math.max(m.hA,m.hB)>=s.hA-.05&&m.x0<=s.x1+.01&&m.x1>=s.x0-.01&&m.z0<=s.z1+.01&&m.z1>=s.z0-.01);if(!r)return null;if(n.pos.x>=r.x0&&n.pos.x<=r.x1&&n.pos.z>=r.z0&&n.pos.z<=r.z1)return{x:t.pos.x,z:t.pos.z,onRamp:!0};if(s.hA-n.pos.y<=e)return null;const a=r.hA<r.hB?0:1,o=(r.x0+r.x1)/2,c=(r.z0+r.z1)/2,l=r.axis==="x"?{x:a===0?r.x0-.8:r.x1+.8,z:c}:{x:o,z:a===0?r.z0-.8:r.z1+.8},h=n.radius+.7,u={x0:s.x0-h,x1:s.x1+h,z0:s.z0-h,z1:s.z1+h};if(!up(n.pos.x,n.pos.z,l.x,l.z,s.x0-n.radius,s.x1+n.radius,s.z0-n.radius,s.z1+n.radius))return{...l,onRamp:!1};let d=null,f=1/0;for(const[m,_]of[[u.x0,u.z0],[u.x1,u.z0],[u.x1,u.z1],[u.x0,u.z1]]){if(Math.hypot(m-n.pos.x,_-n.pos.z)<1||up(n.pos.x,n.pos.z,m,_,s.x0,s.x1,s.z0,s.z1))continue;const g=Math.hypot(m-n.pos.x,_-n.pos.z)+Math.hypot(l.x-m,l.z-_);g<f&&(f=g,d={x:m,z:_,onRamp:!1,corner:!0})}return d||{...l,onRamp:!1}}function up(n,t,e,i,s,r,a,o){let c=0,l=1;const h=e-n,u=i-t;for(const[d,f]of[[-h,n-s],[h,r-n],[-u,t-a],[u,o-t]]){if(Math.abs(d)<1e-9){if(f<0)return!1;continue}const m=f/d;if(d<0){if(m>l)return!1;m>c&&(c=m)}else{if(m<c)return!1;m<l&&(l=m)}}return c<l}const Ce=[],dm={runner:[],rammer:[],jumper:[],boss:[]};let TE=1,Dl=0;const er={x:0,z:0};function au(n,t,e,i){const s=IM[n],r=dm[n].pop()||Xh(Nr[s.design],{detail:n==="boss"?1:0}),a=r.kit.d.scale;r.root.visible=!0,r.root.rotation.set(0,0,0),r.root.scale.setScalar(a),r.body.rotation.set(0,0,0),r.body.position.set(0,0,0),r.eyes.scale.setScalar(1),ae.add(r.root);const o={id:TE++,type:n,def:s,model:r,scale:a,radius:s.radius,pos:new C(t,Gn(t,e),e),vel:new C,yaw:Math.atan2(Lt.pos.x-t,Lt.pos.z-e),hp:Hh*s.hpFactor,speed:s.speed*i.speed*(.93+Math.random()*.14),dmg:i.damage,state:"chase",stateT:0,attackCd:.3,specialCd:1+Math.random()*2,stagger:0,punch:0,los:!1,losT:Math.random()*.2,side:Math.random()<.5?-1:1,phase:Math.random()*6,stepIdx:0,vy:0,air:!1,dying:!1,deathT:0,fallX:0,fallZ:1,swing:-1,lean:.1,cdx:0,cdz:0,seed:Math.random()*10,growlT:2+Math.random()*7,slot:null,tokenT:0,dodgeCd:0,dodgeX:0,dodgeZ:0,retreated:!1,boss:!1,wallHit:!1};return n==="boss"&&dE(o),Ce.push(o),o}function fm(n){Ac(n),ae.remove(n.model.root),dm[n.type].push(n.model)}function AE(){for(const n of Ce)fm(n);Ce.length=0}function RE(n){n.hp<=0&&(Ac(n),n.boss&&xE())}function Un(n,t,e=0){(t==="chase"||t==="retreat"||t==="dodge")&&zo(n)&&!n.boss&&Ac(n),n.state=t,n.stateT=e}function CE(n){const t=Lt;Dl-=n,Dl<=0&&(Dl=rS,Bb(t.pos.x,t.pos.z)),yE(n,Ce,t,Pt.n,Math.atan2(-Math.sin(t.yaw),-Math.cos(t.yaw)));const e=Ce.filter(i=>i.helperOf&&!i.dying).length;for(let i=0;i<Ce.length;i++){const s=Ce[i],r=s.def,a=s.model;if(s.dying){s.deathT+=n;const L=Math.min(1,s.deathT/.5);a.body.rotation.x=-Ji(L)*1.45,a.root.position.y=s.pos.y-Math.max(0,s.deathT-.55)*1.6,a.root.scale.setScalar(s.scale*(1-bc(.6,1,s.deathT)*.5)),a.eyes.scale.setScalar(Math.max(.01,1-L)),s.pos.x+=s.fallX*3*n*(1-L),s.pos.z+=s.fallZ*3*n*(1-L),a.root.position.x=s.pos.x,a.root.position.z=s.pos.z;continue}const o=t.pos.x-s.pos.x,c=t.pos.z-s.pos.z,l=Math.hypot(o,c)||.001,h=t.pos.y-s.pos.y,u=o/l,d=c/l;s.attackCd-=n,s.specialCd-=n,s.stagger-=n,s.stateT+=n,s.punch=Math.max(0,s.punch-n*5),s.dodgeCd-=n,s.losT-=n,s.losT<=0&&(s.losT=.18+Math.random()*.08,s.los=l<aS&&sp(s.pos.x,s.pos.z,t.pos.x,t.pos.z));let f=0,m=0,_=0,g=0,p=8,v=.1;s.swing=-1;const x=(L,U,F)=>{const H=L-s.pos.x,B=U-s.pos.z,X=Math.hypot(H,B)||1;X<.3||(sp(s.pos.x,s.pos.z,L,U)||!rp(s.pos.x,s.pos.z,er)?(f=H/X*F,m=B/X*F):(f=er.x*F,m=er.z*F))},y=L=>{s.los&&l<oS||l<2.2||!rp(s.pos.x,s.pos.z,er)?(f=u*L,m=d*L):(f=er.x*L,m=er.z*L)},A=l<r.reach-.35+s.radius*.4&&Math.abs(h)<1.9;if(s.boss){const L={dist:l,ndx:u,ndz:d,aliveHelpers:e,wantX:0,wantZ:0,chase(F){y(F),L.wantX=f,L.wantZ=m},spawnHelper(F,H,B){const X=au(B%3===2?"jumper":"runner",F,H,Pt.mul);X.helperOf=s.id,X.attackCd=1.2,Ln(F,X.pos.y,H,10,3)}},U=fE(s,n,t,L);({wantX:f,wantZ:m,faceX:_,faceZ:g,accel:p,lean:v}=U),s.swing=U.swing}else{if(s.state==="chase"||s.state==="hold"){const U=bE(s,Q);if(U){const F=Math.hypot(Q.vel.x,Q.vel.z)||1;s.dodgeX=-Q.vel.z/F*U,s.dodgeZ=Q.vel.x/F*U,Un(s,"dodge")}else EE(s)&&(Un(s,"retreat"),Mi(s.pos.x,s.pos.z,me),ai(.25*me.vol,1.4,.35,me.pan))}if(zo(s)?s.tokenT+=n:s.tokenT=0,zo(s)&&(s.state==="chase"||s.state==="hold")&&(s.tokenT>5||l>16)&&Ac(s),s.state==="chase"||s.state==="hold"){const U=wE(s,t,ih);if(U)x(U.x,U.z,s.speed),v=.2;else if(s.slot==null||!s.los){if(y(s.speed),s.type==="runner"&&l>4){const F=Math.sin(K.time*3+s.seed)*.28;f+=-d*F*s.speed,m+=u*F*s.speed}s.state="chase"}else{const F=s.attackCd<=0||s.type!=="runner"&&s.specialCd<=0;if(zo(s)||F&&SE(s)){if(s.type==="runner")s.state="chase",y(s.speed),v=.28,A&&s.attackCd<=0&&Un(s,"windup");else if(s.type==="jumper"){s.state="chase";const B=t.pos.x+Math.sin(s.slot)*yo*1.4,X=t.pos.z+Math.cos(s.slot)*yo*1.4,j=Math.hypot(B-s.pos.x,X-s.pos.z)<2.2;j?y(s.speed*.5):x(B,X,s.speed*1.1),v=.14,A&&s.attackCd<=0?Un(s,"windup"):s.specialCd<=0&&s.los&&l>3.4&&l<r.leapRange&&!s.air&&(j||l<6)&&PE(s,t,l,h)}else if(s.type==="rammer")if(s.state="chase",A&&s.attackCd<=0)Un(s,"windup");else if(s.specialCd<=0&&s.los)if(l<Mo)Un(s,"runup");else if(hp(s,Ce,t))fp(s);else{const B=t.pos.x+Math.sin(s.slot)*Mo,X=t.pos.z+Math.cos(s.slot)*Mo;x(B,X,s.speed)}else y(s.speed*.8)}else{const B=t.pos.x+Math.sin(s.slot)*yo,X=t.pos.z+Math.cos(s.slot)*yo;x(B,X,s.speed*.75),_=u,g=d,v=.08,s.state="hold"}}}else if(s.state==="dodge")f=s.dodgeX*Uf,m=s.dodgeZ*Uf,p=20,_=u,g=d,v=-.1,s.stateT>=YS&&Un(s,"chase");else if(s.state==="retreat")f=-u*s.speed*1.1,m=-d*s.speed*1.1,v=.2,s.stateT>=JS&&Un(s,"chase");else if(s.state==="runup"){s.stateT<.05&&(s.runAng=0),s.stateT>.4&&Math.hypot(s.vel.x,s.vel.z)<s.speed*.35&&(s.runAng+=1.1*(s.side||1),s.stateT=.06);const U=Math.cos(s.runAng||0),F=Math.sin(s.runAng||0),H=-u*U+d*F,B=-d*U-u*F;f=H*s.speed*1.2,m=B*s.speed*1.2,_=u,g=d,v=-.05,l>=Mo&&hp(s,Ce,t)?fp(s):s.stateT>3&&Un(s,"chase")}else if(s.state==="windup")_=u,g=d,s.swing=Math.min(hr,s.stateT/r.windup*hr),s.stateT>=r.windup&&(l<r.reach+s.radius*.4&&Math.abs(h)<2&&_r(r.damage*s.dmg,s.pos.x,s.pos.z,s.type==="rammer"?7:3.5),Mi(s.pos.x,s.pos.z,me),en({f:400,f2:1800,q:1.2,dur:.16,gain:.25*me.vol,pan:me.pan}),s.state="recover",s.stateT=0);else if(s.state==="recover")_=u,g=d,s.swing=Math.min(1,hr+s.stateT/Mf*(1-hr)),s.stateT>=Mf&&(Un(s,"chase"),s.attackCd=cS+Math.random()*lS);else if(s.state==="chargeWindup")_=u,g=d,v=-.12+s.stateT/r.chargeWindup*.5,a.eyes.scale.setScalar(1+s.stateT/r.chargeWindup*.9),s.stateT>=r.chargeWindup&&(s.state="charge",s.stateT=0,s.cdx=u,s.cdz=d);else if(s.state==="charge"){const U=Math.atan2(s.cdx,s.cdz),F=Gt(ec(U,Math.atan2(u,d)),-.9*n,.9*n);s.cdx=Math.sin(U+F),s.cdz=Math.cos(U+F),f=s.cdx*r.chargeSpeed,m=s.cdz*r.chargeSpeed,p=14,v=.5,_=s.cdx,g=s.cdz,Math.random()<n*30&&Ln(s.pos.x,s.pos.y,s.pos.z,1,2),l<s.radius+.85&&Math.abs(h)<1.9?(_r(r.chargeDamage*s.dmg,s.pos.x-s.cdx,s.pos.z-s.cdz,14),s.state="stun",s.stateT=0,s.specialCd=r.chargeCooldown):s.stateT>=r.chargeTime&&(s.state="stun",s.stateT=.4,s.specialCd=r.chargeCooldown)}else s.state==="stun"?(v=.25,a.eyes.scale.setScalar(.7),s.stateT>=Sf&&(Un(s,"chase"),a.eyes.scale.setScalar(s.hp<Hh*r.hpFactor?.6:1))):s.state==="leap"?(v=.35,s.swing=.25,_=s.vel.x,g=s.vel.z):s.state==="thrown"?(v=-.6,_=-s.vel.x,g=-s.vel.z):s.state==="land"&&(_=u,g=d,s.swing=Math.min(1,.3+s.stateT/.35*.7),s.stateT>=hS&&Un(s,"chase"))}if(!(s.state==="leap"||s.state==="thrown")){s.stagger>0&&!s.boss&&(f=0,m=0),s.vel.x=ii(s.vel.x,f,p,n),s.vel.z=ii(s.vel.z,m,p,n);for(let U=i+1;U<Ce.length;U++){const F=Ce[U];if(F.dying||F.air)continue;const H=F.pos.x-s.pos.x,B=F.pos.z-s.pos.z,X=s.radius+F.radius,j=H*H+B*B;if(j>=X*X||j<1e-6)continue;const ht=Math.sqrt(j),W=(X-ht)*.5/ht,$=s.boss?.15:F.boss?1.85:1,gt=2-$;s.pos.x-=H*W*$,s.pos.z-=B*W*$,F.pos.x+=H*W*gt,F.pos.z+=B*W*gt}const L=s.radius+Fo-.08;l<L&&Math.abs(h)<1.7&&s.state!=="charge"&&s.atk!=="charge"&&(s.pos.x-=u*(L-l),s.pos.z-=d*(L-l))}const R=s.vel.x*n,N=s.vel.z*n,b=s.pos.x,E=s.pos.z,O=s.radius*.6;if((s.air||!dp(s.pos.x,s.pos.z,s.pos.x+R,s.pos.z,s.pos.y,O))&&(s.pos.x+=R),(s.air||!dp(s.pos.x,s.pos.z,s.pos.x,s.pos.z+N,s.pos.y,O))&&(s.pos.z+=N),$h(s.pos,s.radius,!0),s.state==="charge"||s.atk==="charge"){const L=Math.hypot(R,N),U=Math.hypot(s.pos.x-b,s.pos.z-E);s.stateT>.15&&(s.atkT??1)>.15&&L>.02&&U<L*.35&&(s.boss?s.wallHit=!0:(s.state="stun",s.stateT=0,s.specialCd=s.def.chargeCooldown,s.vel.set(0,0,0)),Ln(s.pos.x,s.pos.y+1,s.pos.z,12,4),K.shake=Math.min(1,K.shake+.2/(1+l*.1)),Mi(s.pos.x,s.pos.z,me),bn({f:85,f2:38,dur:.3,gain:.5*me.vol,pan:me.pan}))}const tt=j0(s.pos.x,s.pos.z,s.pos.y,ih,!0);s.air?(s.vy-=Mc*n,s.pos.y+=s.vy*n,s.vy<0&&s.pos.y<=tt&&(s.pos.y=tt,s.air=!1,s.vy=0,s.vel.multiplyScalar(.2),Ln(s.pos.x,tt,s.pos.z,12,3.5),Mi(s.pos.x,s.pos.z,me),en({type:"lowpass",f:600,f2:150,dur:.16,gain:.35*me.vol,pan:me.pan}),s.state==="leap"?(s.state="land",s.stateT=0,s.specialCd=r.leapCooldown+Math.random(),Math.hypot(t.pos.x-s.pos.x,t.pos.z-s.pos.z)<2.1&&Math.abs(t.pos.y-s.pos.y)<1.6&&_r(r.leapDamage*s.dmg,s.pos.x,s.pos.z,6)):(s.state="stun",s.stateT=Sf*.45))):s.pos.y=tt>s.pos.y?tt:ii(s.pos.y,tt,14,n);const P=Math.hypot(s.vel.x,s.vel.z);if(!_&&!g&&(P>.4?(_=s.vel.x,g=s.vel.z):(_=u,g=d)),s.yaw+=ec(s.yaw,Math.atan2(_,g))*Math.min(1,11*n),s.lean=ii(s.lean,v,8,n),!s.air&&P>.5){s.phase+=P*n*1.9/s.scale;const L=Math.floor(s.phase/Math.PI);L!==s.stepIdx&&(s.stepIdx=L,l<30&&(Mi(s.pos.x,s.pos.z,me),N0(.22*me.vol,me.pan,s.type==="rammer"?.85:s.boss?.7:1,s.type==="rammer"?185:s.boss?120:0)))}s.growlT-=n,s.growlT<=0&&(s.growlT=5+Math.random()*8,l<28&&(Mi(s.pos.x,s.pos.z,me),ai(.3*me.vol,(s.boss?.5:.85)+Math.random()*.5,.5+Math.random()*.4,me.pan))),a.root.position.copy(s.pos),a.root.rotation.y=s.yaw,a.root.scale.setScalar(s.scale*(1+s.punch*.1)),qh(a,s.phase,Gt(P/(4.5*(s.boss?.8:1)),0,1.3),s.swing,s.lean)}for(let i=Ce.length-1;i>=0;i--){const s=Ce[i];s.dying&&s.deathT>(s.boss?2.5:1)&&(fm(s),Ce.splice(i,1))}}function dp(n,t,e,i,s,r){for(const a of ri){const o=(l,h)=>{const u=Gt(l,a.x0,a.x1),d=Gt(h,a.z0,a.z1);return{d:Math.hypot(l-u,h-d),cx:u,cz:d}},c=o(e,i);if(!(c.d>=r||Da(a,c.cx,c.cz)<=s+ih)&&c.d<o(n,t).d-1e-6)return!0}return!1}function PE(n,t,e,i){const s=Gt(e/10.5,.5,.92),r=t.pos.x+t.vel.x*s*.6,a=t.pos.z+t.vel.z*s*.6;n.vel.x=(r-n.pos.x)/s,n.vel.z=(a-n.pos.z)/s,n.vy=.5*Mc*s+Gt(i,-2,2)/s,n.air=!0,n.state="leap",n.stateT=0,Mi(n.pos.x,n.pos.z,me),ai(.4*me.vol+.08,1.35,.4,me.pan),Ln(n.pos.x,n.pos.y,n.pos.z,8,2.5)}function fp(n){n.state="chargeWindup",n.stateT=0,Mi(n.pos.x,n.pos.z,me),ai(.75*me.vol+.15,.62,.85,me.pan)}const kt={state:"ready",charge:0,t:0,cooldown:0,dirX:0,dirZ:-1,hit:new Set};function LE(){kt.state="ready",kt.charge=0,kt.t=0,kt.cooldown=0,kt.hit.clear()}const IE=()=>kt.state==="ready"&&kt.charge>=1;function pm(n){return!n.alive||!IE()?!1:(kt.state="active",kt.t=0,kt.charge=0,kt.hit.clear(),kt.dirX=-Math.sin(n.yaw),kt.dirZ=-Math.cos(n.yaw),K.shake=Math.min(1,K.shake+zS),rt.bellBudget=Math.max(rt.bellBudget,4),Ss(.45,-.2,220),Ss(.45,.2,262),ai(.45,1.1,.6,0),en({type:"lowpass",f:900,f2:200,dur:.5,gain:.35}),!0)}function DE(n,t,e){if(kt.t+=n,kt.state==="cooldown"&&(kt.cooldown-=n,kt.cooldown<=0&&(kt.state="ready",kt.cooldown=0)),kt.state!=="active")return e&&t.onGround&&(kt.charge=Math.min(1,kt.charge+DS*n)),null;for(const i of Ce){if(i.dying||kt.hit.has(i.id))continue;const s=i.pos.x-t.pos.x,r=i.pos.z-t.pos.z,a=Math.hypot(s,r);if(a>NS+i.radius||Math.abs(i.pos.y-t.pos.y)>1.8)continue;kt.hit.add(i.id);const o=a>.01?s/a:kt.dirX,c=a>.01?r/a:kt.dirZ,l=o*.6+kt.dirX*.7,h=c*.6+kt.dirZ*.7,u=Math.hypot(l,h)||1;hc(i,i.type==="runner"?i.hp:OS,kt.dirX,kt.dirZ,!1),i.dying?(i.fallX=l/u,i.fallZ=h/u):(i.vel.set(l/u*If,0,h/u*If),i.vy=FS,i.air=!0,i.state=i.boss?i.state:"thrown",i.stateT=0,i.boss&&(i.air=!1,i.vy=0,i.vel.multiplyScalar(.3))),K.shake=Math.min(1,K.shake+BS),K.hitstop=Math.max(K.hitstop,.05)}return Ln(t.pos.x,t.pos.y,t.pos.z,kS,3.5),kt.t>=US&&(kt.state="cooldown",kt.cooldown=P0,kt.t=0),{x:kt.dirX*Lf,z:kt.dirZ*Lf}}const ut={wave:Jt("hWave"),left:Jt("hLeft"),score:Jt("hScore"),kills:Jt("hKills"),hp:Jt("hHp"),hpFill:Jt("hHpFill"),health:Jt("hud-health"),ruteBox:Jt("hud-rute"),rute:Jt("hRute"),ring:Jt("hRuteRing"),cross:Jt("crosshair"),marker:Jt("hitmarker"),vignette:Jt("vignette"),ramBox:Jt("hud-ram"),ram:Jt("hRam"),ramRing:Jt("hRamRing"),bossbar:Jt("bossbar"),bossFill:Jt("hBossFill"),ramBtn:null,banner:Jt("banner"),bannerTitle:Jt("bannerTitle"),bannerSub:Jt("bannerSub"),toast:Jt("toast"),threats:[],dmg:null,cache:{},bannerT:0,toastT:0};{const n=Jt("threats");for(let t=0;t<5;t++){const e=Hf("i");n.appendChild(e),ut.threats.push(e)}ut.dmg=Hf("i"),ut.dmg.className="dmg",n.appendChild(ut.dmg)}function cs(n,t,e){ut.cache[n]!==e&&(ut.cache[n]=e,t.textContent=e)}function vr(n,t,e){ut.bannerTitle.textContent=n,ut.bannerSub.textContent=t||"",ut.banner.classList.add("show"),ut.bannerT=e}function $i(n,t){ut.toast.textContent=n,ut.toast.classList.add("show"),ut.toastT=t}function pp(n){const t=ut.marker;t.className="",t.offsetWidth,t.className=n?"kill":"hit"}function ou(n){K.score+=n,ut.score.classList.remove("bump"),ut.score.offsetWidth,ut.score.classList.add("bump")}function UE(n){const t=Lt;cs("wave",ut.wave,"Welle "+Math.max(1,Pt.n));const e=Ce.reduce((M,R)=>M+(R.dying?0:1),0)+(Pt.state==="active"?Pt.queue.length:0);cs("left",ut.left,Pt.state==="break"?"Nächste Welle in "+Math.max(1,Math.ceil(Pt.breakT)):"noch "+e+" Gegner"),cs("score",ut.score,String(K.score)),cs("kills",ut.kills,K.kills+" Kills");const i=Math.ceil(t.hp);cs("hp",ut.hp,String(i)),ut.cache.hpw!==i&&(ut.cache.hpw=i,ut.hpFill.style.transform="scaleX("+Gt(t.hp/Ms,0,1)+")",ut.health.classList.toggle("low",i<=30));let s="bereit",r=1;Q.state==="return"?(s="kehrt zurück",r=1):Q.state!=="held"&&(r=Gt(Q.t/Ql,0,1),s=Math.max(0,Ql-Q.t).toFixed(1).replace(".",",")+" s"),cs("rute",ut.rute,s);const a=(169.65*(1-r)).toFixed(1);ut.cache.ring!==a&&(ut.cache.ring=a,ut.ring.style.strokeDashoffset=a);const o=Q.state!=="held";ut.cache.away!==o&&(ut.cache.away=o,ut.ruteBox.classList.toggle("away",o));let c=Math.round(kt.charge*100)+" %",l=kt.charge,h="";kt.state==="active"?(c="los!",l=1,h="active"):kt.state==="cooldown"?(c=kt.cooldown.toFixed(1).replace(".",",")+" s",l=1-kt.cooldown/P0,h="cool"):kt.charge>=1&&(c="bereit",h="ready"),cs("ram",ut.ram,c);const u=(169.65*(1-l)).toFixed(1);if(ut.cache.ramRing!==u&&(ut.cache.ramRing=u,ut.ramRing.style.strokeDashoffset=u),ut.cache.ramCls!==h&&(ut.cache.ramCls=h,ut.ramBox.className=h),!ut.ramBtn&&!Vn&&(ut.ramBtn=document.querySelector('#touch [data-btn="ram"]')),ut.ramBtn){const M=Math.round(l*100);ut.cache.ramFill!==M&&(ut.cache.ramFill=M,ut.ramBtn.style.setProperty("--fill",M)),ut.cache.ramBtn!==h&&(ut.cache.ramBtn=h,ut.ramBtn.classList.toggle("ready",h==="ready"),ut.ramBtn.classList.toggle("cool",h==="cool"||h===""))}const d=Ce.find(M=>M.boss&&!M.dying),f=!!d;if(ut.cache.boss!==f&&(ut.cache.boss=f,ut.bossbar.classList.toggle("show",f)),d){const M=Gt(d.hp/d.maxHp,0,1).toFixed(3);ut.cache.bossFill!==M&&(ut.cache.bossFill=M,ut.bossFill.style.transform="scaleX("+M+")");const R="p"+hm(d);ut.cache.bossPh!==R&&(ut.cache.bossPh=R,ut.bossbar.className="show "+R)}lu(!1);let m="";if(ze.enemy){const M=ze.enemy;m=Math.hypot(M.pos.x-t.pos.x,M.pos.z-t.pos.z)<=$l+M.radius?"reach":"target"}ut.cache.cross!==m&&(ut.cache.cross=m,ut.cross.className=m);const _=-Math.sin(t.yaw),g=-Math.cos(t.yaw),p=Math.cos(t.yaw),v=-Math.sin(t.yaw);let x=0;const y=[];for(const M of Ce)M.dying||y.push(M);y.sort((M,R)=>M.pos.distanceToSquared(t.pos)-R.pos.distanceToSquared(t.pos));for(let M=0;M<y.length&&x<ut.threats.length;M++){const R=y[M],N=R.pos.x-t.pos.x,b=R.pos.z-t.pos.z,E=Math.hypot(N,b),O=Math.atan2(N*p+b*v,N*_+b*g);if(Math.abs(O)<.75||E>45)continue;const Y=ut.threats[x++];Y.style.opacity=String(Gt(1.15-E/45,.25,1)),Y.style.transform="rotate("+O.toFixed(2)+"rad) translateY(-150px)"}for(let M=x;M<ut.threats.length;M++)ut.threats[M].style.opacity="0";K.dmgDirT=Math.max(0,K.dmgDirT-n),ut.dmg.style.opacity=String(Math.min(1,K.dmgDirT*2)),K.dmgDirT>0&&(ut.dmg.style.transform="rotate("+K.dmgDir.toFixed(2)+"rad) translateY(-178px)"),K.hurtFlash=Math.max(0,K.hurtFlash-n*1.8);const A=Gt(K.hurtFlash*.9+(1-t.hp/Ms)*.55,0,1).toFixed(2);ut.cache.vig!==A&&(ut.cache.vig=A,ut.vignette.style.opacity=A),ut.bannerT>0&&(ut.bannerT-=n,ut.bannerT<=0&&ut.banner.classList.remove("show")),ut.toastT>0&&(ut.toastT-=n,ut.toastT<=0&&ut.toast.classList.remove("show"))}const le={on:!1,models:[],light:null,focus:-1};function mm(n){le.focus=n}function xa(n){const t=n!==void 0?n:!le.on;if(t!==le.on){le.on=t,le.focus=-1,t&&!le.models.length&&(["schloss","rot","grau","bock"].forEach((e,i)=>{const s=Xh(Nr[e],{detail:1});s.root.position.set(Xe.x-3.75+i*2.5,Gn(Xe.x-3.75+i*2.5,Xe.z),Xe.z),ae.add(s.root),le.models.push(s)}),le.rute=Pa(1),le.rute.position.set(Xe.x+6,Gn(Xe.x+6,Xe.z)+.15,Xe.z),ae.add(le.rute),le.light=new Ta(16767400,0,18,2),le.light.position.set(Xe.x,Gn(Xe.x,Xe.z)+2.8,Xe.z+4.5),ae.add(le.light));for(const e of le.models)e.root.visible=t;le.rute&&(le.rute.visible=t),le.light&&(le.light.intensity=t?20:0),Vn||(document.body.dataset.gallery=t?"1":"")}}function NE(){const n=K.time;le.models.forEach((i,s)=>{i.root.rotation.y=le.focus===s?Math.sin(n*.35)*.9:Math.sin(n*.45+s*.5)*2.7;const r=(n*.3+s*.25)%1;qh(i,n*2.4+s,.22,r<.22?r/.22:-1,.05)});const t=Gn(Xe.x,Xe.z),e=le.models[le.focus];if(le.focus===le.models.length&&le.rute){const i=le.rute.position;le.rute.rotation.y=K.time*.4,re.position.set(i.x,i.y+.55,i.z+1.75),re.lookAt(i.x,i.y+.55,i.z)}else if(e){const i=e.root.position,s=1.75*e.kit.d.scale;re.position.set(i.x,i.y+s,i.z+2.3),re.lookAt(i.x,i.y+s-.15,i.z)}else re.position.set(Xe.x,t+1.75,Xe.z+Xe.camDist),re.lookAt(Xe.x,t+1.3,Xe.z);re.fov!==38&&(re.fov=38,re.updateProjectionMatrix()),fe.rig.visible=!1}const rt={off:!1,errors:0,ctx:null,out:null,sfx:null,music:null,noise:null,curve:null,muted:!1,nextBeat:0,beat:0,intensity:0,bellBudget:0};function gm(){if(rt.ctx){rt.ctx.state==="suspended"&&rt.ctx.resume();return}const n=typeof window<"u"&&(window.AudioContext||window.webkitAudioContext);if(!n)return;let t;try{t=new n}catch{return}rt.ctx=t,rt.out=t.createGain(),rt.out.gain.value=rt.muted?0:.85;const e=t.createBiquadFilter();e.type="lowpass",e.frequency.value=5200;const i=t.createDynamicsCompressor();i.threshold.value=-16,i.ratio.value=4,rt.out.connect(e),e.connect(i),i.connect(t.destination),rt.sfx=t.createGain(),rt.sfx.gain.value=1,rt.sfx.connect(rt.out),rt.music=t.createGain(),rt.music.gain.value=.6,rt.music.connect(rt.out);const s=t.sampleRate*2,r=t.createBuffer(1,s,t.sampleRate),a=r.getChannelData(0);for(let o=0;o<s;o++)a[o]=Math.random()*2-1;rt.noise=r,rt.curve=new Float32Array(1024);for(let o=0;o<1024;o++)rt.curve[o]=Math.tanh((o/511.5-1)*4);GE(),VE(),L3()}function _m(){rt.muted=!rt.muted,rt.ctx&&rt.out.gain.setTargetAtTime(rt.muted?0:.85,rt.ctx.currentTime,.03),$i(rt.muted?"Ton aus":"Ton an",1.4)}function Rc(n,t,e){const i=rt.ctx;if(e=e||rt.sfx,t&&i.createStereoPanner){const s=i.createStereoPanner();s.pan.value=Gt(t,-1,1),n.connect(s),s.connect(e)}else n.connect(e)}function xm(n,t,e,i,s){n.gain.setValueAtTime(1e-4,t),n.gain.linearRampToValueAtTime(Math.max(2e-4,e),t+i),n.gain.exponentialRampToValueAtTime(1e-4,t+s)}function bn(n){const t=rt.ctx;if(t)try{const e=t.currentTime+(n.when||0),i=t.createOscillator();i.type=n.type||"sine",i.frequency.setValueAtTime(n.f,e),n.f2&&i.frequency.exponentialRampToValueAtTime(Math.max(1,n.f2),e+n.dur);const s=t.createGain();if(xm(s,e,n.gain,n.attack||.004,n.dur),n.lp){const r=t.createBiquadFilter();r.type="lowpass",r.frequency.value=n.lp,i.connect(r),r.connect(s)}else i.connect(s);Rc(s,n.pan,n.dest),i.start(e),i.stop(e+n.dur+.05)}catch{rt.errors++}}function en(n){const t=rt.ctx;if(t)try{const e=t.currentTime+(n.when||0),i=t.createBufferSource();i.buffer=rt.noise,i.loop=!0;const s=t.createBiquadFilter();s.type=n.type||"bandpass",s.Q.value=n.q||1,s.frequency.setValueAtTime(n.f,e),n.f2&&s.frequency.exponentialRampToValueAtTime(n.f2,e+n.dur);const r=t.createGain();xm(r,e,n.gain,n.attack||.004,n.dur),i.connect(s),s.connect(r),Rc(r,n.pan,n.dest),i.start(e,Math.random()*1.5),i.stop(e+n.dur+.05)}catch{rt.errors++}}function Ss(n=.3,t=0,e=0){if(!rt.ctx||rt.bellBudget<=0)return;rt.bellBudget-=1;const i=e||[262,311,349,392][Math.random()*4|0]*(.97+Math.random()*.06),s=[[1,1,.5],[2.02,.5,.36],[2.76,.32,.27],[4.1,.1,.16]];for(const[r,a,o]of s)bn({type:r===1?"triangle":"sine",f:i*r,dur:o*(.8+Math.random()*.4),gain:n*a,pan:t});en({type:"bandpass",f:1500,q:2,dur:.04,gain:n*.35,pan:t})}function va(){const n=[[1,1,4.2],[2,.55,3.2],[2.4,.35,2.6],[3,.2,2],[.5,.5,4.5]];for(const[t,e,i]of n)bn({f:147*t,dur:i,gain:.3*e,attack:.008})}function OE(){en({f:420,f2:2400,q:1.3,dur:.2,gain:.4,attack:.03})}function FE(){en({f:300,f2:1700,q:.9,dur:.36,gain:.34,attack:.04}),bn({type:"triangle",f:180,f2:90,dur:.2,gain:.15})}function cu(n=0){en({type:"lowpass",f:1900,f2:300,dur:.13,gain:.6,pan:n}),bn({f:160,f2:52,dur:.17,gain:.55,pan:n})}function zE(n=0){cu(n),bn({type:"triangle",f:104,f2:40,dur:.4,gain:.5,pan:n}),rt.bellBudget=Math.max(rt.bellBudget,2),Ss(.4,n,233),Ss(.3,n,196)}function mp(n=.1){en({type:"lowpass",f:950,f2:280,dur:.08,gain:n})}function BE(){en({type:"lowpass",f:600,f2:150,dur:.16,gain:.3}),bn({f:90,f2:45,dur:.14,gain:.3})}function kE(){bn({type:"triangle",f:300,f2:210,dur:.1,gain:.22}),en({f:900,q:1,dur:.06,gain:.2})}function HE(){bn({type:"triangle",f:196,dur:.14,gain:.25})}function ai(n=.5,t=1,e=.9,i=0){const s=rt.ctx;if(s)try{const r=s.currentTime,a=72*t,o=s.createOscillator(),c=s.createOscillator(),l=s.createOscillator(),h=s.createGain();o.type="sawtooth",c.type="square",l.frequency.value=26+Math.random()*6,h.gain.value=a*.18,o.frequency.setValueAtTime(a*1.25,r),o.frequency.exponentialRampToValueAtTime(a*.7,r+e),c.frequency.setValueAtTime(a*.63,r),c.frequency.exponentialRampToValueAtTime(a*.35,r+e),l.connect(h),h.connect(o.frequency),h.connect(c.frequency);const u=s.createGain();u.gain.value=1.5;const d=s.createWaveShaper();d.curve=rt.curve;const f=s.createBiquadFilter();f.type="lowpass",f.Q.value=2.5,f.frequency.setValueAtTime(950,r),f.frequency.exponentialRampToValueAtTime(250,r+e);const m=s.createGain();m.gain.setValueAtTime(1e-4,r),m.gain.linearRampToValueAtTime(n*.5,r+.07),m.gain.setValueAtTime(n*.5,r+e*.55),m.gain.exponentialRampToValueAtTime(1e-4,r+e),o.connect(u),c.connect(u),u.connect(d),d.connect(f),f.connect(m),Rc(m,i);for(const _ of[o,c,l])_.start(r),_.stop(r+e+.1);en({type:"lowpass",f:700,f2:240,dur:e*.8,gain:n*.22,attack:.05,pan:i})}catch{rt.errors++}}function GE(){const n=rt.ctx,t=n.createBufferSource();t.buffer=rt.noise,t.loop=!0;const e=n.createBiquadFilter();e.type="lowpass",e.frequency.value=330,e.Q.value=.7;const i=n.createGain();i.gain.value=.085;const s=n.createOscillator();s.frequency.value=.11;const r=n.createGain();r.gain.value=.045;const a=n.createOscillator();a.frequency.value=.07;const o=n.createGain();o.gain.value=130,s.connect(r),r.connect(i.gain),a.connect(o),o.connect(e.frequency),t.connect(e),e.connect(i),i.connect(rt.out),t.start(),s.start(),a.start()}function VE(){const n=rt.ctx,t=n.createBiquadFilter();t.type="lowpass",t.frequency.value=175,t.Q.value=3;const e=n.createGain();e.gain.value=.13;for(const o of[73.42,73.42*1.008,110*.997]){const c=n.createOscillator();c.type="sawtooth",c.frequency.value=o,c.connect(t),c.start()}const i=n.createOscillator();i.frequency.value=36.71;const s=n.createGain();s.gain.value=.5,i.connect(s),s.connect(e),i.start();const r=n.createOscillator();r.frequency.value=.06;const a=n.createGain();a.gain.value=55,r.connect(a),a.connect(t.frequency),r.start(),t.connect(e),e.connect(rt.music),rt.nextBeat=n.currentTime+.3,rt.beat=0,setInterval(WE,90)}const gp=[[146.83,0,0,174.61,0,155.56,0,0,146.83,0,0,110,0,116.54,0,0],[146.83,0,0,174.61,0,196,0,0,233.08,0,220,0,174.61,0,164.81,0],[110,0,0,116.54,0,0,146.83,0,138.59,0,0,0,110,0,0,0]],_p=[[73.42,0,73.42,0,87.31,0,77.78,0,73.42,0,73.42,0,110,0,103.83,0],[73.42,0,73.42,0,87.31,0,98,0,116.54,0,110,0,87.31,0,82.41,0]];function WE(){const n=rt.ctx;if(!n||n.state!=="running")return;rt.nextBeat<n.currentTime&&(rt.nextBeat=n.currentTime+.05);const t=rt.boss?60/132/2:60/(60+rt.intensity*30)/2;for(;rt.nextBeat<n.currentTime+.25;){const e=rt.nextBeat-n.currentTime,i=rt.beat++,s=i%16,r=rt.intensity;if((s===0||s===8||r>.25&&s===11||r>.55&&(s===14||s===6)||rt.boss&&s===12)&&(bn({f:62,f2:34,dur:.5,gain:s===0?.6:.42,when:e,dest:rt.music}),en({type:"lowpass",f:300,f2:90,dur:.18,gain:.25,when:e,dest:rt.music})),rt.boss){s%2===0&&s!==0&&s!==8&&en({type:"lowpass",f:380,f2:110,dur:.12,gain:.3,when:e,dest:rt.music}),s===0&&bn({type:"triangle",f:196,dur:1.6,gain:.16,when:e,dest:rt.music});const a=_p[(i/16|0)%_p.length][s];a&&bn({type:"sawtooth",f:a,dur:t*1.8,gain:.14,attack:.03,lp:620,when:e,dest:rt.music})}else{const a=gp[(i/16|0)%gp.length][s];a&&bn({type:"sawtooth",f:a,dur:t*3.4,gain:.11,attack:.12,lp:480,when:e,dest:rt.music})}rt.nextBeat+=t}}function Mi(n,t,e){const i=n-Lt.pos.x,s=t-Lt.pos.z,r=Math.hypot(i,s);return e.vol=1/(1+r*r*.012),e.pan=r<.5?0:Gt((i*Math.cos(Lt.yaw)-s*Math.sin(Lt.yaw))/r,-1,1)*.8,e}const me={vol:1,pan:0},ze={point:new C,dir:new C,enemy:null,dist:0},Q={state:"held",t:0,pos:new C,vel:new C,mesh:null,hit:new Set,returnT:0};function XE(n,t,e,i,s,r,a){const o=s-i,c=n.x-e,l=n.y-i,h=n.z-r,u=t.y*o,d=o*o,f=t.x*c+t.y*l+t.z*h,m=o*l,_=d-u*u;let g=_<1e-6?m/d:(m-u*f)/_;g=Gt(g,0,1);let p=u*g-f;p<0&&(p=0);const v=n.x+t.x*p-e,x=n.y+t.y*p-(i+o*g),y=n.z+t.z*p-r,A=v*v+x*x+y*y;return A<a*a?Math.max(0,p-Math.sqrt(a*a-A)):-1}function lu(n=!0){const t=re.position,e=ze.dir;re.getWorldDirection(e);const i=Math.max(0,we.eyeDist-.4);let s=90,r=null;for(let a=0;a<Ce.length;a++){const o=Ce[a];if(o.dying)continue;const c=XE(t,e,o.pos.x,o.pos.y+.35,o.pos.y+1.85*o.scale,o.pos.z,o.radius+.14);c>=0&&c>=i&&c<s&&(s=c,r=o)}if(n){Gi.set(t,e),Gi.near=i,Gi.far=s;const a=Gi.intersectObjects(tu,!1);a.length&&a[0].distance<s&&(s=a[0].distance,r=null);for(let o=Math.max(.8,i);o<s;o+=.8)if(t.y+e.y*o<Gn(t.x+e.x*o,t.z+e.z*o)){s=o,r=null;break}}return ze.point.copy(t).addScaledVector(e,s),ze.enemy=r,ze.dist=s,r&&(ze.point.x=Kt(ze.point.x,r.pos.x,.6),ze.point.z=Kt(ze.point.z,r.pos.z,.6),ze.point.y=Gt(ze.point.y,r.pos.y+.45,r.pos.y+1.6*r.scale)),ze}function hu(){const n=Lt;!n.alive||n.meleeCd>0||(n.meleeCd=RM,n.swingT=0,n.swingHit=!1,OE())}function qE(){const n=Lt;lu();const t=n.pos.x,e=n.pos.y+1.25,i=n.pos.z;let s=ze.point.x-t,r=ze.point.z-i,a=Math.hypot(s,r);a<.6&&(s=-Math.sin(n.yaw),r=-Math.cos(n.yaw),a=1),s/=a,r/=a;const o=Math.cos(CM*Math.PI/180),c=[];for(const h of Ce){if(h.dying)continue;const u=h.pos.x-t,d=h.pos.z-i,f=Math.hypot(u,d),m=h.pos.y+h.scale-e;f>$l+h.radius||Math.abs(m)>2.3||h!==ze.enemy&&f>1&&(u*s+d*r)/f<o||c.push({e:h,hd:f})}c.sort((h,u)=>h.hd-u.hd);const l=Math.min(c.length,PM);for(let h=0;h<l;h++){const u=c[h].e;hc(u,u.boss?QS:u.hp,s,r,!0)}l?(K.hitstop=iS,K.shake=Math.min(1,K.shake+.45)):ze.dist<$l+.4&&(Ln(ze.point.x,ze.point.y,ze.point.z,5,1.5),en({type:"lowpass",f:700,f2:200,dur:.07,gain:.25}))}function YE(n){const t=Lt,e=Math.sin(t.yaw),i=Math.cos(t.yaw);return n.set(t.pos.x+i*.4-e*.45,t.pos.y+1.5,t.pos.z-e*.4-i*.45)}function lc(){const n=Lt;if(!n.alive||Q.state!=="held")return;lu(),YE(Q.pos);const t=ya.copy(ze.point).sub(Q.pos),e=t.length();e<.5?t.copy(ze.dir):t.multiplyScalar(1/e),Q.vel.copy(t).multiplyScalar(_f),Q.vel.y+=.5*E0*(Math.max(e,1)/_f),Q.state="fly",Q.t=0,Q.returnT=0,Q.hit.clear(),Q.dodgeChecked=new Set,Q.mesh.visible=!0,Q.mesh.position.copy(Q.pos),n.swingT=.1,n.swingHit=!0,FE()}function xp(n,t,e){for(const i of Ce){if(i.dying||Q.hit.has(i.id))continue;const s=i.pos.x-n,r=i.pos.z-e,a=i.radius+.32;if(!(s*s+r*r>a*a||t<i.pos.y-.1||t>i.pos.y+2.2*i.scale))return i}return null}function KE(n){if(Q.state==="held")return;Q.t+=n;const t=Q.mesh;if(Q.state==="fly"){const e=Math.max(1,Math.ceil(Q.vel.length()*n/.35)),i=n/e;for(let s=0;s<e&&Q.state==="fly";s++){Q.vel.y-=E0*i,Q.pos.addScaledVector(Q.vel,i);const r=xp(Q.pos.x,Q.pos.y,Q.pos.z);if(r){Q.hit.add(r.id);const a=Math.hypot(Q.vel.x,Q.vel.z)||1;hc(r,gf,Q.vel.x/a,Q.vel.z/a,!1),Q.vel.set(-Q.vel.x*.12,3.5,-Q.vel.z*.12),Q.state="drop",K.hitstop=Math.max(K.hitstop,sS),K.shake=Math.min(1,K.shake+.25)}else Q.pos.y<=pr(Q.pos.x,Q.pos.z)+.05?(Q.pos.y=pr(Q.pos.x,Q.pos.z)+.06,Q.state="stuck",Ln(Q.pos.x,Q.pos.y,Q.pos.z,7,2)):Ub(Q.pos.x,Q.pos.y,Q.pos.z)&&(Q.pos.addScaledVector(Q.vel,-i),oc(Q.pos.x,Q.pos.y,Q.pos.z,6,14207392),en({type:"lowpass",f:900,f2:250,dur:.08,gain:.3}),Q.vel.set(-Q.vel.x*.1,1.5,-Q.vel.z*.1),Q.state="drop")}t.rotation.x+=n*22,t.rotation.y=Math.atan2(Q.vel.x,Q.vel.z)}else if(Q.state==="drop"){Q.vel.y-=Mc*n,Q.pos.addScaledVector(Q.vel,n);const e=pr(Q.pos.x,Q.pos.z)+.06;Q.pos.y<=e&&(Q.pos.y=e,Q.state="stuck"),t.rotation.x+=n*9}else if(Q.state==="return"){Q.returnT+=n;const e=ya.set(Lt.pos.x,Lt.pos.y+1.3,Lt.pos.z),i=_h.copy(e).sub(Q.pos),s=i.length(),r=LM*Math.min(1,.35+Q.returnT*2.2);if(s<1.1||s<r*n||Q.returnT>4){Q.state="held",t.visible=!1,kE(),$i("Rute zurück",.9);return}Q.pos.addScaledVector(i,r*n/s);{const a=xp(Q.pos.x,Q.pos.y,Q.pos.z);a&&(Q.hit.add(a.id),hc(a,gf,i.x/s,i.z/s,!1))}t.rotation.x+=n*26,t.rotation.y=Math.atan2(i.x,i.z)}(Q.state==="fly"||Q.state==="drop"||Q.state==="stuck")&&Q.t>=Ql&&(Q.state="return",Q.returnT=0,Q.hit.clear(),en({f:500,f2:1500,q:1,dur:.3,gain:.2,attack:.1})),Q.state==="stuck"&&(t.rotation.x=1.25),t.position.copy(Q.pos)}function hc(n,t,e,i,s){if(n.dying)return;n.hp-=t;const r=n.pos.y+1.15*n.scale;Mi(n.pos.x,n.pos.z,me),n.hp<=0?(n.dying=!0,n.deathT=0,n.fallX=e,n.fallZ=i,K.kills++,ou(n.def.score+(s?0:50)),uh(n.pos.x,r,n.pos.z,n.model.kit.palette,30,6.5),oc(n.pos.x,r,n.pos.z,12,16760928),zE(me.pan),ai(.3*me.vol+.1,.8+Math.random()*.3,.45,me.pan),pp(!0)):(n.boss?(n.punch=.6,n.vel.x+=e*1,n.vel.z+=i*1):(n.stagger=.3,n.punch=1,n.vel.x+=e*7,n.vel.z+=i*7),n.model.eyes.scale.setScalar(.6),uh(n.pos.x,r,n.pos.z,n.model.kit.palette,9,4),oc(n.pos.x,r,n.pos.z,5,16769184),cu(me.pan),pp(!1)),RE(n)}const we={blend:0,dist:0,eyeDist:0,orbit:0},Gi=new cM,Io=new Mn,vp=new Es(0,0,0,"YXZ"),yp=new C,Mp=new C,Yr=new C,Do=new C,ya=new C,_h=new C;function Sp(n,t,e){Gi.set(n,t),Gi.near=0,Gi.far=e+.35;const i=Gi.intersectObjects(tu,!1);return i.length?Math.max(0,Math.min(e,i[0].distance-.35)):e}function jE(n){const t=Lt,e=K.viewMode==="tp"?1:0;we.blend<e?we.blend=Math.min(e,we.blend+n/xf):we.blend>e&&(we.blend=Math.max(e,we.blend-n/xf));const i=Ji(we.blend);t.camY=Math.abs(t.camY-t.pos.y)>2?t.pos.y:ii(t.camY,t.pos.y,16,n);const s=Math.sin(t.phase*2)*.035*t.move*(1-i);Yr.set(t.pos.x,t.camY+EM+s,t.pos.z);const r=K.shake*K.shake,a=K.time;if(vp.set(t.pitch+r*.035*Math.sin(a*53+1),t.yaw+r*.03*Math.sin(a*41+2),r*.045*Math.sin(a*47)),Io.setFromEuler(vp),yp.set(0,0,-1).applyQuaternion(Io),Mp.set(1,0,0).applyQuaternion(Io),i>.001){const c=Sp(Yr,ya.copy(Mp).setY(0).normalize(),FM*i);Do.copy(Yr).addScaledVector(ya,c),Do.y+=zM*i;const l=OM*i,h=Sp(Do,_h.copy(yp).negate(),l);we.dist=h<we.dist?h:ii(we.dist,h,9,n),we.dist=Math.min(we.dist,l),re.position.copy(Do).addScaledVector(_h,we.dist);const u=pr(re.position.x,re.position.z)+.3;re.position.y<u&&(re.position.y=u)}else re.position.copy(Yr),we.dist=0;re.quaternion.copy(Io),we.eyeDist=re.position.distanceTo(Yr);const o=T0+Gt((Math.hypot(t.vel.x,t.vel.z)-ia)/(b0-ia),0,1)*6+(kt.state==="active"?HS:0);Math.abs(re.fov-o)>.05&&(re.fov=ii(re.fov,o,8,n),re.updateProjectionMatrix()),t.model.root.visible=we.eyeDist>.95,fe.rig.visible=we.blend<.45&&t.alive}function bp(n,t,e,i,s,r){we.orbit+=n*.07,re.position.set(t+Math.cos(we.orbit)*s,r,i+Math.sin(we.orbit)*s),re.lookAt(t,e,i),re.fov!==58&&(re.fov=58,re.updateProjectionMatrix()),fe.rig.visible=!1}const Bo=new i0,xh=new _n(58,U0(),.02,10),fe={rig:new un,right:new un,armR:null,armL:null,rute:null};function ZE(){Bo.add(new M0(10135776,4208202,1.9));const n=new zh(16763024,1.5);n.position.set(-1,1.5,1),Bo.add(n),Bo.add(fe.rig);const t=Nr.schloss,e=G0();fe.fur=e.uniforms;const i=()=>{const s=new un,r=us(t.fur.arm,-.4,2,e.material);return r.frustumCulled=!1,s.add(new Me(t.armGeo,ah),r),s};fe.armR=i(),fe.right.position.set(.4,-.58,.06),fe.right.add(fe.armR),fe.rig.add(fe.right),fe.rute=Pa(1),fe.rute.position.set(0,-.7,0),fe.armR.add(fe.rute),fe.armL=i(),fe.armL.position.set(-.46,-.62,.08),fe.armL.rotation.set(1.72,0,-.16),fe.rig.add(fe.armL)}function vm(n){const t=Lt,e=t.swingT>=0?t.swingT/th:-1;let i=1.9,s=0,r=.1,a=-2.68,o=.3,c=.4,l=0;const h=hr,u=R0;if(e>=0)if(e<h){const m=Ji(e/h);s=Kt(0,-1.05,m),c=Kt(.4,.66,m),i=Kt(1.9,1.62,m),r=Kt(.1,-.55,m),a=Kt(-2.68,-2.15,m),o=Kt(.3,1.05,m),l=.16*m}else if(e<u){const m=(e-h)/(u-h),_=1-(1-m)*(1-m);s=Kt(-1.05,1.3,_),c=Kt(.66,.06,_),i=Kt(1.62,1.52,_),r=Kt(-.55,.55,_),a=Kt(-2.15,-2.35,_),o=Kt(1.05,-.2,_),l=.16*(1-_)}else{const m=Ji((e-u)/(1-u));s=Kt(1.3,0,m),c=Kt(.06,.4,m),i=Kt(1.52,1.9,m),r=Kt(.55,.1,m),a=Kt(-2.35,-2.68,m),o=Kt(-.2,.3,m)}fe.armR.rotation.set(i,0,r),fe.right.rotation.y=s,fe.right.position.set(c,-.58+l,.06),fe.rute.rotation.set(a,0,o),fe.rute.scale.setScalar(Q.state==="held"?.86:.7),fe.fur&&(fe.fur.uMove.value=Math.min(1,t.move),fe.fur.uPhase.value=t.phase);const d=Math.cos(t.phase)*.012*t.move,f=Math.abs(Math.sin(t.phase))*.016*t.move;fe.rig.position.set(d,-f-(t.onGround?0:Gt(t.vy*.004,-.04,.04))-we.blend*.5,-.26)}let Ep=performance.now(),Uo=0,Ul=0;function ym(n){requestAnimationFrame(ym);const t=Math.min(.05,Math.max(1e-4,(n-Ep)/1e3));Ep=n;let e=t;K.state==="playing"?(eE(t),K.hitstop>0&&(e*=C0)):K.state==="menu"||K.state==="loading"?(K.time+=e,le.on?NE():bp(e,ep.x,4,ep.z+6,72,24)):K.state==="gameover"&&(K.time+=e,bp(e,Lt.pos.x,Lt.pos.y+1,Lt.pos.z,7.5,Lt.pos.y+3.2),Lt.model.root.visible=!0),K.state!=="paused"&&(H0.value+=e,k3(t),D3(K.state==="playing"?N3(Ce,Lt):0),Xb(e),qb(e),kb(e)),La.position.copy(re.position);const i=K.state==="playing"||K.state==="paused"?Lt.pos:re.position;if(Be.target.position.set(Math.round(i.x),0,Math.round(i.z)),Be.position.copy(Be.target.position).add(Cb),nn.clear(),nn.render(ae,re),fe.rig.visible&&K.state!=="menu"&&K.state!=="gameover"&&(nn.clearDepth(),nn.render(Bo,xh)),Uo+=t,Ul++,Le.settle-=t,Uo>=GM){const s=Ul/Uo;Uo=0,Ul=0,K.fps=s,Kb(s)}}async function JE(){await K3(),iE(),sE(),lE(),Yb(),Jt("menuBest").textContent=K.best>0?"Bestwert: "+K.best:"";const n=Jt("btnStart");n.disabled=!1,n.textContent="Lauf starten",Jt("btnStart").addEventListener("click",aa),Jt("btnRestart").addEventListener("click",aa),Jt("btnResume").addEventListener("click",mh),Ua("menu"),window.__krampusReady=!0,window.__krampus={step:()=>nu(),simulate:nE,camera:re,pauseGame:gr,ram:kt,keys:Ve,updateFpRig:vm,touch:ct,gfx:Le,applyQuality:cc,setQualitySetting:ph,setTouchMode:gh,layoutTouch:ru,game:K,player:Lt,enemies:Ce,wave:Pt,rute:Q,cam:we,startGame:aa,spawnEnemy:au,tryMelee:hu,tryThrow:lc,toggleView:su,get state(){return K.state}},requestAnimationFrame(ym)}JE();export{J2 as $,nw as A,En as B,wt as C,zh as D,Me as E,aw as F,iw as G,Rh as H,wr as I,sw as J,c0 as K,wa as L,rw as M,Dc as N,Ie as O,Ta as P,Mn as Q,kl as R,tn as S,$E as T,un as U,nt as V,_n as W,ew as X,jp as Y,a0 as Z,af as _,tw as a,Ho as a0,Go as a1,jo as a2,dn as a3,Qo as a4,$o as a5,Ea as a6,xe as a7,ji as a8,vc as a9,Ri as aa,oi as ab,QE as b,lw as c,wi as d,cw as e,zt as f,C as g,Zo as h,ow as i,hw as j,K2 as k,oa as l,rg as m,bu as n,Nn as o,sn as p,Hl as q,Zn as r,Ch as s,ci as t,o0 as u,Uy as v,vn as w,Ci as x,ge as y,De as z};
