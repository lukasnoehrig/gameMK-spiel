(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Dh="160",Ym=0,Iu=1,Km=2,zp=1,Bp=2,Mi=3,Qi=0,bn=1,Sn=2,Yi=0,pr=1,ql=2,Du=3,Nu=4,jm=5,ps=100,Zm=101,Jm=102,Uu=103,Ou=104,$m=200,Qm=201,tg=202,eg=203,Yl=204,Kl=205,ng=206,ig=207,sg=208,rg=209,ag=210,og=211,cg=212,lg=213,hg=214,ug=0,dg=1,fg=2,Jo=3,pg=4,mg=5,gg=6,_g=7,Sc=0,xg=1,vg=2,Ki=0,yg=1,Mg=2,Sg=3,kp=4,bg=5,Eg=6,Fu="attached",wg="detached",Hp=300,br=301,Er=302,jl=303,Zl=304,bc=306,Jl=1e3,$n=1001,$l=1002,an=1003,zu=1004,Wc=1005,zn=1006,Tg=1007,fa=1008,ji=1009,Ag=1010,Rg=1011,Nh=1012,Gp=1013,Wi=1014,Ti=1015,pa=1016,Vp=1017,Wp=1018,_s=1020,Cg=1021,kn=1023,Lg=1024,Pg=1025,xs=1026,wr=1027,Ig=1028,Xp=1029,Dg=1030,qp=1031,Yp=1033,Xc=33776,qc=33777,Yc=33778,Kc=33779,Bu=35840,ku=35841,Hu=35842,Gu=35843,Kp=36196,Vu=37492,Wu=37496,Xu=37808,qu=37809,Yu=37810,Ku=37811,ju=37812,Zu=37813,Ju=37814,$u=37815,Qu=37816,td=37817,ed=37818,nd=37819,id=37820,sd=37821,jc=36492,rd=36494,ad=36495,Ng=36283,od=36284,cd=36285,ld=36286,Ug=2200,Og=2201,Fg=2202,$o=2300,Qo=2301,Zc=2302,ar=2400,or=2401,tc=2402,Uh=2500,zg=2501,aT=0,oT=1,cT=2,jp=3e3,vs=3001,Bg=3200,kg=3201,Ec=0,Hg=1,Hn="",en="srgb",Ci="srgb-linear",Oh="display-p3",wc="display-p3-linear",ec="linear",Re="srgb",nc="rec709",ic="p3",As=7680,hd=519,Gg=512,Vg=513,Wg=514,Zp=515,Xg=516,qg=517,Yg=518,Kg=519,Ql=35044,ud=35048,dd="300 es",th=1035,Ai=2e3,sc=2001;class ws{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const hn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let fd=1234567;const na=Math.PI/180,Tr=180/Math.PI;function Vn(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(hn[n&255]+hn[n>>8&255]+hn[n>>16&255]+hn[n>>24&255]+"-"+hn[t&255]+hn[t>>8&255]+"-"+hn[t>>16&15|64]+hn[t>>24&255]+"-"+hn[e&63|128]+hn[e>>8&255]+"-"+hn[e>>16&255]+hn[e>>24&255]+hn[i&255]+hn[i>>8&255]+hn[i>>16&255]+hn[i>>24&255]).toLowerCase()}function qe(n,t,e){return Math.max(t,Math.min(e,n))}function Fh(n,t){return(n%t+t)%t}function jg(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function Zg(n,t,e){return n!==t?(e-n)/(t-n):0}function ia(n,t,e){return(1-e)*n+e*t}function Jg(n,t,e,i){return ia(n,t,1-Math.exp(-e*i))}function $g(n,t=1){return t-Math.abs(Fh(n,t*2)-t)}function Qg(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function t1(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function e1(n,t){return n+Math.floor(Math.random()*(t-n+1))}function n1(n,t){return n+Math.random()*(t-n)}function i1(n){return n*(.5-Math.random())}function s1(n){n!==void 0&&(fd=n);let t=fd+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function r1(n){return n*na}function a1(n){return n*Tr}function eh(n){return(n&n-1)===0&&n!==0}function o1(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function rc(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function c1(n,t,e,i,s){const r=Math.cos,a=Math.sin,o=r(e/2),c=a(e/2),l=r((t+i)/2),h=a((t+i)/2),u=r((t-i)/2),d=a((t-i)/2),f=r((i-t)/2),m=a((i-t)/2);switch(s){case"XYX":n.set(o*h,c*u,c*d,o*l);break;case"YZY":n.set(c*d,o*h,c*u,o*l);break;case"ZXZ":n.set(c*u,c*d,o*h,o*l);break;case"XZX":n.set(o*h,c*m,c*f,o*l);break;case"YXY":n.set(c*f,o*h,c*m,o*l);break;case"ZYZ":n.set(c*m,c*f,o*h,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function si(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function _e(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const lT={DEG2RAD:na,RAD2DEG:Tr,generateUUID:Vn,clamp:qe,euclideanModulo:Fh,mapLinear:jg,inverseLerp:Zg,lerp:ia,damp:Jg,pingpong:$g,smoothstep:Qg,smootherstep:t1,randInt:e1,randFloat:n1,randFloatSpread:i1,seededRandom:s1,degToRad:r1,radToDeg:a1,isPowerOfTwo:eh,ceilPowerOfTwo:o1,floorPowerOfTwo:rc,setQuaternionFromProperEuler:c1,normalize:_e,denormalize:si};class nt{constructor(t=0,e=0){nt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(qe(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*i-a*s+t.x,this.y=r*s+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class re{constructor(t,e,i,s,r,a,o,c,l){re.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,c,l)}set(t,e,i,s,r,a,o,c,l){const h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=c,h[6]=i,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],h=i[4],u=i[7],d=i[2],f=i[5],m=i[8],_=s[0],g=s[3],p=s[6],v=s[1],x=s[4],y=s[7],T=s[2],b=s[5],E=s[8];return r[0]=a*_+o*v+c*T,r[3]=a*g+o*x+c*b,r[6]=a*p+o*y+c*E,r[1]=l*_+h*v+u*T,r[4]=l*g+h*x+u*b,r[7]=l*p+h*y+u*E,r[2]=d*_+f*v+m*T,r[5]=d*g+f*x+m*b,r[8]=d*p+f*y+m*E,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8];return e*a*h-e*o*l-i*r*h+i*o*c+s*r*l-s*a*c}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],u=h*a-o*l,d=o*c-h*r,f=l*r-a*c,m=e*u+i*d+s*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/m;return t[0]=u*_,t[1]=(s*l-h*i)*_,t[2]=(o*i-s*a)*_,t[3]=d*_,t[4]=(h*e-s*c)*_,t[5]=(s*r-o*e)*_,t[6]=f*_,t[7]=(i*c-l*e)*_,t[8]=(a*e-i*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*a+l*o)+a+t,-s*l,s*c,-s*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Jc.makeScale(t,e)),this}rotate(t){return this.premultiply(Jc.makeRotation(-t)),this}translate(t,e){return this.premultiply(Jc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Jc=new re;function Jp(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function ma(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function l1(){const n=ma("canvas");return n.style.display="block",n}const pd={};function sa(n){n in pd||(pd[n]=!0,console.warn(n))}const md=new re().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),gd=new re().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Xa={[Ci]:{transfer:ec,primaries:nc,toReference:n=>n,fromReference:n=>n},[en]:{transfer:Re,primaries:nc,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[wc]:{transfer:ec,primaries:ic,toReference:n=>n.applyMatrix3(gd),fromReference:n=>n.applyMatrix3(md)},[Oh]:{transfer:Re,primaries:ic,toReference:n=>n.convertSRGBToLinear().applyMatrix3(gd),fromReference:n=>n.applyMatrix3(md).convertLinearToSRGB()}},h1=new Set([Ci,wc]),xe={enabled:!0,_workingColorSpace:Ci,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!h1.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,t,e){if(this.enabled===!1||t===e||!t||!e)return n;const i=Xa[t].toReference,s=Xa[e].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,t){return this.convert(n,this._workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this._workingColorSpace)},getPrimaries:function(n){return Xa[n].primaries},getTransfer:function(n){return n===Hn?ec:Xa[n].transfer}};function mr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function $c(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Rs;class $p{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Rs===void 0&&(Rs=ma("canvas")),Rs.width=t.width,Rs.height=t.height;const i=Rs.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=Rs}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ma("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=mr(r[a]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(mr(e[i]/255)*255):e[i]=mr(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let u1=0;class Qp{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:u1++}),this.uuid=Vn(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Qc(s[a].image)):r.push(Qc(s[a]))}else r=Qc(s);i.url=r}return e||(t.images[this.uuid]=i),i}}function Qc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?$p.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let d1=0;class mn extends ws{constructor(t=mn.DEFAULT_IMAGE,e=mn.DEFAULT_MAPPING,i=$n,s=$n,r=zn,a=fa,o=kn,c=ji,l=mn.DEFAULT_ANISOTROPY,h=Hn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:d1++}),this.uuid=Vn(),this.name="",this.source=new Qp(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new nt(0,0),this.repeat=new nt(1,1),this.center=new nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new re,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(sa("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===vs?en:Hn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Hp)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Jl:t.x=t.x-Math.floor(t.x);break;case $n:t.x=t.x<0?0:1;break;case $l:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Jl:t.y=t.y-Math.floor(t.y);break;case $n:t.y=t.y<0?0:1;break;case $l:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return sa("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===en?vs:jp}set encoding(t){sa("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===vs?en:Hn}}mn.DEFAULT_IMAGE=null;mn.DEFAULT_MAPPING=Hp;mn.DEFAULT_ANISOTROPY=1;class ye{constructor(t=0,e=0,i=0,s=1){ye.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*i+a[11]*s+a[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r;const c=t.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],m=c[9],_=c[2],g=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(m+g)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(l+1)/2,y=(f+1)/2,T=(p+1)/2,b=(h+d)/4,E=(u+_)/4,D=(m+g)/4;return x>y&&x>T?x<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(x),s=b/i,r=E/i):y>T?y<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),i=b/s,r=D/s):T<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),i=E/r,s=D/r),this.set(i,s,r,e),this}let v=Math.sqrt((g-m)*(g-m)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(v)<.001&&(v=1),this.x=(g-m)/v,this.y=(u-_)/v,this.z=(d-h)/v,this.w=Math.acos((l+f+p-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class f1 extends ws{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ye(0,0,t,e),this.scissorTest=!1,this.viewport=new ye(0,0,t,e);const s={width:t,height:e,depth:1};i.encoding!==void 0&&(sa("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===vs?en:Hn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:zn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new mn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(t,e,i=1){(this.width!==t||this.height!==e||this.depth!==i)&&(this.width=t,this.height=e,this.depth=i,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Qp(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ms extends f1{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class t0 extends mn{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=an,this.minFilter=an,this.wrapR=$n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class p1 extends mn{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=an,this.minFilter=an,this.wrapR=$n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class En{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,a,o){let c=i[s+0],l=i[s+1],h=i[s+2],u=i[s+3];const d=r[a+0],f=r[a+1],m=r[a+2],_=r[a+3];if(o===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=d,t[e+1]=f,t[e+2]=m,t[e+3]=_;return}if(u!==_||c!==d||l!==f||h!==m){let g=1-o;const p=c*d+l*f+h*m+u*_,v=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const T=Math.sqrt(x),b=Math.atan2(T,p*v);g=Math.sin(g*b)/T,o=Math.sin(o*b)/T}const y=o*v;if(c=c*g+d*y,l=l*g+f*y,h=h*g+m*y,u=u*g+_*y,g===1-o){const T=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=T,l*=T,h*=T,u*=T}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,s,r,a){const o=i[s],c=i[s+1],l=i[s+2],h=i[s+3],u=r[a],d=r[a+1],f=r[a+2],m=r[a+3];return t[e]=o*m+h*u+c*f-l*d,t[e+1]=c*m+h*d+l*u-o*f,t[e+2]=l*m+h*f+o*d-c*u,t[e+3]=h*m-o*u-c*d-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(i/2),h=o(s/2),u=o(r/2),d=c(i/2),f=c(s/2),m=c(r/2);switch(a){case"XYZ":this._x=d*h*u+l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u-d*f*m;break;case"YXZ":this._x=d*h*u+l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u+d*f*m;break;case"ZXY":this._x=d*h*u-l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u-d*f*m;break;case"ZYX":this._x=d*h*u-l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u+d*f*m;break;case"YZX":this._x=d*h*u+l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u-d*f*m;break;case"XZY":this._x=d*h*u-l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u+d*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],h=e[6],u=e[10],d=i+o+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(a-s)*f}else if(i>o&&i>u){const f=2*Math.sqrt(1+i-o-u);this._w=(h-c)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+l)/f}else if(o>u){const f=2*Math.sqrt(1+o-i-u);this._w=(r-l)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+u-i-o);this._w=(a-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(qe(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,h=e._w;return this._x=i*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-i*l,this._z=r*h+a*l+i*c-s*o,this._w=a*h-i*o-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,s=this._y,r=this._z,a=this._w;let o=a*t._w+i*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=i,this._y=s,this._z=r,this;const c=1-o*o;if(c<=Number.EPSILON){const f=1-e;return this._w=f*a+e*this._w,this._x=f*i+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,o),u=Math.sin((1-e)*h)/l,d=Math.sin(e*h)/l;return this._w=a*u+this._w*d,this._x=i*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=Math.random(),e=Math.sqrt(1-t),i=Math.sqrt(t),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(s),i*Math.sin(r),i*Math.cos(r),e*Math.sin(s))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class C{constructor(t=0,e=0,i=0){C.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(_d.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(_d.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*s-o*i),h=2*(o*e-r*s),u=2*(r*i-a*e);return this.x=e+c*l+a*u-o*h,this.y=i+c*h+o*l-r*u,this.z=s+c*u+r*h-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=s*c-r*o,this.y=r*a-i*c,this.z=i*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return tl.copy(this).projectOnVector(t),this.sub(tl)}reflect(t){return this.sub(tl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(qe(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,i=Math.sqrt(1-t**2);return this.x=i*Math.cos(e),this.y=i*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const tl=new C,_d=new En;class Ii{constructor(t=new C(1/0,1/0,1/0),e=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(qn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(qn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=qn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,qn):qn.fromBufferAttribute(r,a),qn.applyMatrix4(t.matrixWorld),this.expandByPoint(qn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),qa.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),qa.copy(i.boundingBox)),qa.applyMatrix4(t.matrixWorld),this.union(qa)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,qn),qn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Hr),Ya.subVectors(this.max,Hr),Cs.subVectors(t.a,Hr),Ls.subVectors(t.b,Hr),Ps.subVectors(t.c,Hr),Ui.subVectors(Ls,Cs),Oi.subVectors(Ps,Ls),rs.subVectors(Cs,Ps);let e=[0,-Ui.z,Ui.y,0,-Oi.z,Oi.y,0,-rs.z,rs.y,Ui.z,0,-Ui.x,Oi.z,0,-Oi.x,rs.z,0,-rs.x,-Ui.y,Ui.x,0,-Oi.y,Oi.x,0,-rs.y,rs.x,0];return!el(e,Cs,Ls,Ps,Ya)||(e=[1,0,0,0,1,0,0,0,1],!el(e,Cs,Ls,Ps,Ya))?!1:(Ka.crossVectors(Ui,Oi),e=[Ka.x,Ka.y,Ka.z],el(e,Cs,Ls,Ps,Ya))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,qn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(qn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(pi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),pi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),pi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),pi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),pi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),pi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),pi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),pi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(pi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const pi=[new C,new C,new C,new C,new C,new C,new C,new C],qn=new C,qa=new Ii,Cs=new C,Ls=new C,Ps=new C,Ui=new C,Oi=new C,rs=new C,Hr=new C,Ya=new C,Ka=new C,as=new C;function el(n,t,e,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){as.fromArray(n,r);const o=s.x*Math.abs(as.x)+s.y*Math.abs(as.y)+s.z*Math.abs(as.z),c=t.dot(as),l=e.dot(as),h=i.dot(as);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const m1=new Ii,Gr=new C,nl=new C;class li{constructor(t=new C,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):m1.setFromPoints(t).getCenter(i);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Gr.subVectors(t,this.center);const e=Gr.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Gr,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(nl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Gr.copy(t.center).add(nl)),this.expandByPoint(Gr.copy(t.center).sub(nl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const mi=new C,il=new C,ja=new C,Fi=new C,sl=new C,Za=new C,rl=new C;class Ra{constructor(t=new C,e=new C(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,mi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=mi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(mi.copy(this.origin).addScaledVector(this.direction,e),mi.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){il.copy(t).add(e).multiplyScalar(.5),ja.copy(e).sub(t).normalize(),Fi.copy(this.origin).sub(il);const r=t.distanceTo(e)*.5,a=-this.direction.dot(ja),o=Fi.dot(this.direction),c=-Fi.dot(ja),l=Fi.lengthSq(),h=Math.abs(1-a*a);let u,d,f,m;if(h>0)if(u=a*c-o,d=a*o-c,m=r*h,u>=0)if(d>=-m)if(d<=m){const _=1/h;u*=_,d*=_,f=u*(u+a*d+2*o)+d*(a*u+d+2*c)+l}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d<=-m?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=m?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(il).addScaledVector(ja,d),f}intersectSphere(t,e){mi.subVectors(t.center,this.origin);const i=mi.dot(this.direction),s=mi.dot(mi)-i*i,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,a,o,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(i=(t.min.x-d.x)*l,s=(t.max.x-d.x)*l):(i=(t.max.x-d.x)*l,s=(t.min.x-d.x)*l),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-d.z)*u,c=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,c=(t.min.z-d.z)*u),i>c||o>s)||((o>i||i!==i)&&(i=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,mi)!==null}intersectTriangle(t,e,i,s,r){sl.subVectors(e,t),Za.subVectors(i,t),rl.crossVectors(sl,Za);let a=this.direction.dot(rl),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Fi.subVectors(this.origin,t);const c=o*this.direction.dot(Za.crossVectors(Fi,Za));if(c<0)return null;const l=o*this.direction.dot(sl.cross(Fi));if(l<0||c+l>a)return null;const h=-o*Fi.dot(rl);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Bt{constructor(t,e,i,s,r,a,o,c,l,h,u,d,f,m,_,g){Bt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,c,l,h,u,d,f,m,_,g)}set(t,e,i,s,r,a,o,c,l,h,u,d,f,m,_,g){const p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=m,p[11]=_,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Bt().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,s=1/Is.setFromMatrixColumn(t,0).length(),r=1/Is.setFromMatrixColumn(t,1).length(),a=1/Is.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,r=t.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=a*h,f=a*u,m=o*h,_=o*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=f+m*l,e[5]=d-_*l,e[9]=-o*c,e[2]=_-d*l,e[6]=m+f*l,e[10]=a*c}else if(t.order==="YXZ"){const d=c*h,f=c*u,m=l*h,_=l*u;e[0]=d+_*o,e[4]=m*o-f,e[8]=a*l,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=f*o-m,e[6]=_+d*o,e[10]=a*c}else if(t.order==="ZXY"){const d=c*h,f=c*u,m=l*h,_=l*u;e[0]=d-_*o,e[4]=-a*u,e[8]=m+f*o,e[1]=f+m*o,e[5]=a*h,e[9]=_-d*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){const d=a*h,f=a*u,m=o*h,_=o*u;e[0]=c*h,e[4]=m*l-f,e[8]=d*l+_,e[1]=c*u,e[5]=_*l+d,e[9]=f*l-m,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){const d=a*c,f=a*l,m=o*c,_=o*l;e[0]=c*h,e[4]=_-d*u,e[8]=m*u+f,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-l*h,e[6]=f*u+m,e[10]=d-_*u}else if(t.order==="XZY"){const d=a*c,f=a*l,m=o*c,_=o*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=d*u+_,e[5]=a*h,e[9]=f*u-m,e[2]=m*u-f,e[6]=o*h,e[10]=_*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(g1,t,_1)}lookAt(t,e,i){const s=this.elements;return Cn.subVectors(t,e),Cn.lengthSq()===0&&(Cn.z=1),Cn.normalize(),zi.crossVectors(i,Cn),zi.lengthSq()===0&&(Math.abs(i.z)===1?Cn.x+=1e-4:Cn.z+=1e-4,Cn.normalize(),zi.crossVectors(i,Cn)),zi.normalize(),Ja.crossVectors(Cn,zi),s[0]=zi.x,s[4]=Ja.x,s[8]=Cn.x,s[1]=zi.y,s[5]=Ja.y,s[9]=Cn.y,s[2]=zi.z,s[6]=Ja.z,s[10]=Cn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],h=i[1],u=i[5],d=i[9],f=i[13],m=i[2],_=i[6],g=i[10],p=i[14],v=i[3],x=i[7],y=i[11],T=i[15],b=s[0],E=s[4],D=s[8],M=s[12],w=s[1],O=s[5],K=s[9],tt=s[13],L=s[2],P=s[6],U=s[10],F=s[14],H=s[3],B=s[7],q=s[11],j=s[15];return r[0]=a*b+o*w+c*L+l*H,r[4]=a*E+o*O+c*P+l*B,r[8]=a*D+o*K+c*U+l*q,r[12]=a*M+o*tt+c*F+l*j,r[1]=h*b+u*w+d*L+f*H,r[5]=h*E+u*O+d*P+f*B,r[9]=h*D+u*K+d*U+f*q,r[13]=h*M+u*tt+d*F+f*j,r[2]=m*b+_*w+g*L+p*H,r[6]=m*E+_*O+g*P+p*B,r[10]=m*D+_*K+g*U+p*q,r[14]=m*M+_*tt+g*F+p*j,r[3]=v*b+x*w+y*L+T*H,r[7]=v*E+x*O+y*P+T*B,r[11]=v*D+x*K+y*U+T*q,r[15]=v*M+x*tt+y*F+T*j,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],h=t[2],u=t[6],d=t[10],f=t[14],m=t[3],_=t[7],g=t[11],p=t[15];return m*(+r*c*u-s*l*u-r*o*d+i*l*d+s*o*f-i*c*f)+_*(+e*c*f-e*l*d+r*a*d-s*a*f+s*l*h-r*c*h)+g*(+e*l*u-e*o*f-r*a*u+i*a*f+r*o*h-i*l*h)+p*(-s*o*h-e*c*u+e*o*d+s*a*u-i*a*d+i*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],u=t[9],d=t[10],f=t[11],m=t[12],_=t[13],g=t[14],p=t[15],v=u*g*l-_*d*l+_*c*f-o*g*f-u*c*p+o*d*p,x=m*d*l-h*g*l-m*c*f+a*g*f+h*c*p-a*d*p,y=h*_*l-m*u*l+m*o*f-a*_*f-h*o*p+a*u*p,T=m*u*c-h*_*c-m*o*d+a*_*d+h*o*g-a*u*g,b=e*v+i*x+s*y+r*T;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/b;return t[0]=v*E,t[1]=(_*d*r-u*g*r-_*s*f+i*g*f+u*s*p-i*d*p)*E,t[2]=(o*g*r-_*c*r+_*s*l-i*g*l-o*s*p+i*c*p)*E,t[3]=(u*c*r-o*d*r-u*s*l+i*d*l+o*s*f-i*c*f)*E,t[4]=x*E,t[5]=(h*g*r-m*d*r+m*s*f-e*g*f-h*s*p+e*d*p)*E,t[6]=(m*c*r-a*g*r-m*s*l+e*g*l+a*s*p-e*c*p)*E,t[7]=(a*d*r-h*c*r+h*s*l-e*d*l-a*s*f+e*c*f)*E,t[8]=y*E,t[9]=(m*u*r-h*_*r-m*i*f+e*_*f+h*i*p-e*u*p)*E,t[10]=(a*_*r-m*o*r+m*i*l-e*_*l-a*i*p+e*o*p)*E,t[11]=(h*o*r-a*u*r-h*i*l+e*u*l+a*i*f-e*o*f)*E,t[12]=T*E,t[13]=(h*_*s-m*u*s+m*i*d-e*_*d-h*i*g+e*u*g)*E,t[14]=(m*o*s-a*_*s-m*i*c+e*_*c+a*i*g-e*o*g)*E,t[15]=(a*u*s-h*o*s+h*i*c-e*u*c-a*i*d+e*o*d)*E,this}scale(t){const e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),r=1-i,a=t.x,o=t.y,c=t.z,l=r*a,h=r*o;return this.set(l*a+i,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+i,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,a){return this.set(1,i,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,h=a+a,u=o+o,d=r*l,f=r*h,m=r*u,_=a*h,g=a*u,p=o*u,v=c*l,x=c*h,y=c*u,T=i.x,b=i.y,E=i.z;return s[0]=(1-(_+p))*T,s[1]=(f+y)*T,s[2]=(m-x)*T,s[3]=0,s[4]=(f-y)*b,s[5]=(1-(d+p))*b,s[6]=(g+v)*b,s[7]=0,s[8]=(m+x)*E,s[9]=(g-v)*E,s[10]=(1-(d+_))*E,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;let r=Is.set(s[0],s[1],s[2]).length();const a=Is.set(s[4],s[5],s[6]).length(),o=Is.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Yn.copy(this);const l=1/r,h=1/a,u=1/o;return Yn.elements[0]*=l,Yn.elements[1]*=l,Yn.elements[2]*=l,Yn.elements[4]*=h,Yn.elements[5]*=h,Yn.elements[6]*=h,Yn.elements[8]*=u,Yn.elements[9]*=u,Yn.elements[10]*=u,e.setFromRotationMatrix(Yn),i.x=r,i.y=a,i.z=o,this}makePerspective(t,e,i,s,r,a,o=Ai){const c=this.elements,l=2*r/(e-t),h=2*r/(i-s),u=(e+t)/(e-t),d=(i+s)/(i-s);let f,m;if(o===Ai)f=-(a+r)/(a-r),m=-2*a*r/(a-r);else if(o===sc)f=-a/(a-r),m=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,s,r,a,o=Ai){const c=this.elements,l=1/(e-t),h=1/(i-s),u=1/(a-r),d=(e+t)*l,f=(i+s)*h;let m,_;if(o===Ai)m=(a+r)*u,_=-2*u;else if(o===sc)m=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=_,c[14]=-m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Is=new C,Yn=new Bt,g1=new C(0,0,0),_1=new C(1,1,1),zi=new C,Ja=new C,Cn=new C,xd=new Bt,vd=new En;class Ts{constructor(t=0,e=0,i=0,s=Ts.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-qe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(qe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-qe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(qe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return xd.makeRotationFromQuaternion(t),this.setFromRotationMatrix(xd,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return vd.setFromEuler(this),this.setFromQuaternion(vd,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ts.DEFAULT_ORDER="XYZ";class zh{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let x1=0;const yd=new C,Ds=new En,gi=new Bt,$a=new C,Vr=new C,v1=new C,y1=new En,Md=new C(1,0,0),Sd=new C(0,1,0),bd=new C(0,0,1),M1={type:"added"},S1={type:"removed"};class De extends ws{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:x1++}),this.uuid=Vn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=De.DEFAULT_UP.clone();const t=new C,e=new Ts,i=new En,s=new C(1,1,1);function r(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Bt},normalMatrix:{value:new re}}),this.matrix=new Bt,this.matrixWorld=new Bt,this.matrixAutoUpdate=De.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=De.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new zh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ds.setFromAxisAngle(t,e),this.quaternion.multiply(Ds),this}rotateOnWorldAxis(t,e){return Ds.setFromAxisAngle(t,e),this.quaternion.premultiply(Ds),this}rotateX(t){return this.rotateOnAxis(Md,t)}rotateY(t){return this.rotateOnAxis(Sd,t)}rotateZ(t){return this.rotateOnAxis(bd,t)}translateOnAxis(t,e){return yd.copy(t).applyQuaternion(this.quaternion),this.position.add(yd.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Md,t)}translateY(t){return this.translateOnAxis(Sd,t)}translateZ(t){return this.translateOnAxis(bd,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(gi.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?$a.copy(t):$a.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Vr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?gi.lookAt(Vr,$a,this.up):gi.lookAt($a,Vr,this.up),this.quaternion.setFromRotationMatrix(gi),s&&(gi.extractRotation(s.matrixWorld),Ds.setFromRotationMatrix(gi),this.quaternion.premultiply(Ds.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(M1)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(S1)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),gi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),gi.multiply(t.parent.matrixWorld)),t.applyMatrix4(gi),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vr,t,v1),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vr,y1,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++){const r=e[i];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++){const o=s[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];s.animations.push(r(t.animations,c))}}if(e){const o=a(t.geometries),c=a(t.materials),l=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),f=a(t.animations),m=a(t.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),m.length>0&&(i.nodes=m)}return i.object=s,i;function a(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}De.DEFAULT_UP=new C(0,1,0);De.DEFAULT_MATRIX_AUTO_UPDATE=!0;De.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Kn=new C,_i=new C,al=new C,xi=new C,Ns=new C,Us=new C,Ed=new C,ol=new C,cl=new C,ll=new C;let Qa=!1;class Bn{constructor(t=new C,e=new C,i=new C){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),Kn.subVectors(t,e),s.cross(Kn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){Kn.subVectors(s,e),_i.subVectors(i,e),al.subVectors(t,e);const a=Kn.dot(Kn),o=Kn.dot(_i),c=Kn.dot(al),l=_i.dot(_i),h=_i.dot(al),u=a*l-o*o;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(l*c-o*h)*d,m=(a*h-o*c)*d;return r.set(1-f-m,m,f)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,xi)===null?!1:xi.x>=0&&xi.y>=0&&xi.x+xi.y<=1}static getUV(t,e,i,s,r,a,o,c){return Qa===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Qa=!0),this.getInterpolation(t,e,i,s,r,a,o,c)}static getInterpolation(t,e,i,s,r,a,o,c){return this.getBarycoord(t,e,i,s,xi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,xi.x),c.addScaledVector(a,xi.y),c.addScaledVector(o,xi.z),c)}static isFrontFacing(t,e,i,s){return Kn.subVectors(i,e),_i.subVectors(t,e),Kn.cross(_i).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Kn.subVectors(this.c,this.b),_i.subVectors(this.a,this.b),Kn.cross(_i).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Bn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Bn.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,i,s,r){return Qa===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Qa=!0),Bn.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}getInterpolation(t,e,i,s,r){return Bn.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return Bn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Bn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,r=this.c;let a,o;Ns.subVectors(s,i),Us.subVectors(r,i),ol.subVectors(t,i);const c=Ns.dot(ol),l=Us.dot(ol);if(c<=0&&l<=0)return e.copy(i);cl.subVectors(t,s);const h=Ns.dot(cl),u=Us.dot(cl);if(h>=0&&u<=h)return e.copy(s);const d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return a=c/(c-h),e.copy(i).addScaledVector(Ns,a);ll.subVectors(t,r);const f=Ns.dot(ll),m=Us.dot(ll);if(m>=0&&f<=m)return e.copy(r);const _=f*l-c*m;if(_<=0&&l>=0&&m<=0)return o=l/(l-m),e.copy(i).addScaledVector(Us,o);const g=h*m-f*u;if(g<=0&&u-h>=0&&f-m>=0)return Ed.subVectors(r,s),o=(u-h)/(u-h+(f-m)),e.copy(s).addScaledVector(Ed,o);const p=1/(g+_+d);return a=_*p,o=d*p,e.copy(i).addScaledVector(Ns,a).addScaledVector(Us,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const e0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Bi={h:0,s:0,l:0},to={h:0,s:0,l:0};function hl(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class At{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=en){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,xe.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=xe.workingColorSpace){return this.r=t,this.g=e,this.b=i,xe.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=xe.workingColorSpace){if(t=Fh(t,1),e=qe(e,0,1),i=qe(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,a=2*i-r;this.r=hl(a,r,t+1/3),this.g=hl(a,r,t),this.b=hl(a,r,t-1/3)}return xe.toWorkingColorSpace(this,s),this}setStyle(t,e=en){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=en){const i=e0[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=mr(t.r),this.g=mr(t.g),this.b=mr(t.b),this}copyLinearToSRGB(t){return this.r=$c(t.r),this.g=$c(t.g),this.b=$c(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=en){return xe.fromWorkingColorSpace(un.copy(this),t),Math.round(qe(un.r*255,0,255))*65536+Math.round(qe(un.g*255,0,255))*256+Math.round(qe(un.b*255,0,255))}getHexString(t=en){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=xe.workingColorSpace){xe.fromWorkingColorSpace(un.copy(this),e);const i=un.r,s=un.g,r=un.b,a=Math.max(i,s,r),o=Math.min(i,s,r);let c,l;const h=(o+a)/2;if(o===a)c=0,l=0;else{const u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case i:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-i)/u+2;break;case r:c=(i-s)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=xe.workingColorSpace){return xe.fromWorkingColorSpace(un.copy(this),e),t.r=un.r,t.g=un.g,t.b=un.b,t}getStyle(t=en){xe.fromWorkingColorSpace(un.copy(this),t);const e=un.r,i=un.g,s=un.b;return t!==en?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Bi),this.setHSL(Bi.h+t,Bi.s+e,Bi.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Bi),t.getHSL(to);const i=ia(Bi.h,to.h,e),s=ia(Bi.s,to.s,e),r=ia(Bi.l,to.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const un=new At;At.NAMES=e0;let b1=0;class hi extends ws{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:b1++}),this.uuid=Vn(),this.name="",this.type="Material",this.blending=pr,this.side=Qi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Yl,this.blendDst=Kl,this.blendEquation=ps,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new At(0,0,0),this.blendAlpha=0,this.depthFunc=Jo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=hd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=As,this.stencilZFail=As,this.stencilZPass=As,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==pr&&(i.blending=this.blending),this.side!==Qi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Yl&&(i.blendSrc=this.blendSrc),this.blendDst!==Kl&&(i.blendDst=this.blendDst),this.blendEquation!==ps&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Jo&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==hd&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==As&&(i.stencilFail=this.stencilFail),this.stencilZFail!==As&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==As&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Di extends hi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new At(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Sc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ve=new C,eo=new nt;class An{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Ql,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Ti,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)eo.fromBufferAttribute(this,e),eo.applyMatrix3(t),this.setXY(e,eo.x,eo.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Ve.fromBufferAttribute(this,e),Ve.applyMatrix3(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Ve.fromBufferAttribute(this,e),Ve.applyMatrix4(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ve.fromBufferAttribute(this,e),Ve.applyNormalMatrix(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ve.fromBufferAttribute(this,e),Ve.transformDirection(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=si(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=_e(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=si(e,this.array)),e}setX(t,e){return this.normalized&&(e=_e(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=si(e,this.array)),e}setY(t,e){return this.normalized&&(e=_e(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=si(e,this.array)),e}setZ(t,e){return this.normalized&&(e=_e(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=si(e,this.array)),e}setW(t,e){return this.normalized&&(e=_e(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=_e(e,this.array),i=_e(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=_e(e,this.array),i=_e(i,this.array),s=_e(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=_e(e,this.array),i=_e(i,this.array),s=_e(s,this.array),r=_e(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ql&&(t.usage=this.usage),t}}class n0 extends An{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class i0 extends An{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class ne extends An{constructor(t,e,i){super(new Float32Array(t),e,i)}}let E1=0;const On=new Bt,ul=new De,Os=new C,Ln=new Ii,Wr=new Ii,tn=new C;class Ne extends ws{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:E1++}),this.uuid=Vn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Jp(t)?i0:n0)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new re().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return On.makeRotationFromQuaternion(t),this.applyMatrix4(On),this}rotateX(t){return On.makeRotationX(t),this.applyMatrix4(On),this}rotateY(t){return On.makeRotationY(t),this.applyMatrix4(On),this}rotateZ(t){return On.makeRotationZ(t),this.applyMatrix4(On),this}translate(t,e,i){return On.makeTranslation(t,e,i),this.applyMatrix4(On),this}scale(t,e,i){return On.makeScale(t,e,i),this.applyMatrix4(On),this}lookAt(t){return ul.lookAt(t),ul.updateMatrix(),this.applyMatrix4(ul.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Os).negate(),this.translate(Os.x,Os.y,Os.z),this}setFromPoints(t){const e=[];for(let i=0,s=t.length;i<s;i++){const r=t[i];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new ne(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ii);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const r=e[i];Ln.setFromBufferAttribute(r),this.morphTargetsRelative?(tn.addVectors(this.boundingBox.min,Ln.min),this.boundingBox.expandByPoint(tn),tn.addVectors(this.boundingBox.max,Ln.max),this.boundingBox.expandByPoint(tn)):(this.boundingBox.expandByPoint(Ln.min),this.boundingBox.expandByPoint(Ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new li);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new C,1/0);return}if(t){const i=this.boundingSphere.center;if(Ln.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];Wr.setFromBufferAttribute(o),this.morphTargetsRelative?(tn.addVectors(Ln.min,Wr.min),Ln.expandByPoint(tn),tn.addVectors(Ln.max,Wr.max),Ln.expandByPoint(tn)):(Ln.expandByPoint(Wr.min),Ln.expandByPoint(Wr.max))}Ln.getCenter(i);let s=0;for(let r=0,a=t.count;r<a;r++)tn.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(tn));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)tn.fromBufferAttribute(o,l),c&&(Os.fromBufferAttribute(t,l),tn.add(Os)),s=Math.max(s,i.distanceToSquared(tn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.array,s=e.position.array,r=e.normal.array,a=e.uv.array,o=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new An(new Float32Array(4*o),4));const c=this.getAttribute("tangent").array,l=[],h=[];for(let w=0;w<o;w++)l[w]=new C,h[w]=new C;const u=new C,d=new C,f=new C,m=new nt,_=new nt,g=new nt,p=new C,v=new C;function x(w,O,K){u.fromArray(s,w*3),d.fromArray(s,O*3),f.fromArray(s,K*3),m.fromArray(a,w*2),_.fromArray(a,O*2),g.fromArray(a,K*2),d.sub(u),f.sub(u),_.sub(m),g.sub(m);const tt=1/(_.x*g.y-g.x*_.y);isFinite(tt)&&(p.copy(d).multiplyScalar(g.y).addScaledVector(f,-_.y).multiplyScalar(tt),v.copy(f).multiplyScalar(_.x).addScaledVector(d,-g.x).multiplyScalar(tt),l[w].add(p),l[O].add(p),l[K].add(p),h[w].add(v),h[O].add(v),h[K].add(v))}let y=this.groups;y.length===0&&(y=[{start:0,count:i.length}]);for(let w=0,O=y.length;w<O;++w){const K=y[w],tt=K.start,L=K.count;for(let P=tt,U=tt+L;P<U;P+=3)x(i[P+0],i[P+1],i[P+2])}const T=new C,b=new C,E=new C,D=new C;function M(w){E.fromArray(r,w*3),D.copy(E);const O=l[w];T.copy(O),T.sub(E.multiplyScalar(E.dot(O))).normalize(),b.crossVectors(D,O);const tt=b.dot(h[w])<0?-1:1;c[w*4]=T.x,c[w*4+1]=T.y,c[w*4+2]=T.z,c[w*4+3]=tt}for(let w=0,O=y.length;w<O;++w){const K=y[w],tt=K.start,L=K.count;for(let P=tt,U=tt+L;P<U;P+=3)M(i[P+0]),M(i[P+1]),M(i[P+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new An(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);const s=new C,r=new C,a=new C,o=new C,c=new C,l=new C,h=new C,u=new C;if(t)for(let d=0,f=t.count;d<f;d+=3){const m=t.getX(d+0),_=t.getX(d+1),g=t.getX(d+2);s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,_),a.fromBufferAttribute(e,g),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(i,m),c.fromBufferAttribute(i,_),l.fromBufferAttribute(i,g),o.add(h),c.add(h),l.add(h),i.setXYZ(m,o.x,o.y,o.z),i.setXYZ(_,c.x,c.y,c.z),i.setXYZ(g,l.x,l.y,l.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)tn.fromBufferAttribute(t,e),tn.normalize(),t.setXYZ(e,tn.x,tn.y,tn.z)}toNonIndexed(){function t(o,c){const l=o.array,h=o.itemSize,u=o.normalized,d=new l.constructor(c.length*h);let f=0,m=0;for(let _=0,g=c.length;_<g;_++){o.isInterleavedBufferAttribute?f=c[_]*o.data.stride+o.offset:f=c[_]*h;for(let p=0;p<h;p++)d[m++]=l[f++]}return new An(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ne,i=this.index.array,s=this.attributes;for(const o in s){const c=s[o],l=t(c,i);e.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let h=0,u=l.length;h<u;h++){const d=l[h],f=t(d,i);c.push(f)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const c in i){const l=i[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){const f=l[u];h.push(f.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const s=t.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(e))}const r=t.morphAttributes;for(const l in r){const h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let l=0,h=a.length;l<h;l++){const u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const wd=new Bt,os=new Ra,no=new li,Td=new C,Fs=new C,zs=new C,Bs=new C,dl=new C,io=new C,so=new nt,ro=new nt,ao=new nt,Ad=new C,Rd=new C,Cd=new C,oo=new C,co=new C;class Me extends De{constructor(t=new Ne,e=new Di){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){io.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=o[c],u=r[c];h!==0&&(dl.fromBufferAttribute(u,t),a?io.addScaledVector(dl,h):io.addScaledVector(dl.sub(e),h))}e.add(io)}return e}raycast(t,e){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),no.copy(i.boundingSphere),no.applyMatrix4(r),os.copy(t.ray).recast(t.near),!(no.containsPoint(os.origin)===!1&&(os.intersectSphere(no,Td)===null||os.origin.distanceToSquared(Td)>(t.far-t.near)**2))&&(wd.copy(r).invert(),os.copy(t.ray).applyMatrix4(wd),!(i.boundingBox!==null&&os.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,os)))}_computeIntersections(t,e,i){let s;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,_=d.length;m<_;m++){const g=d[m],p=a[g.materialIndex],v=Math.max(g.start,f.start),x=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let y=v,T=x;y<T;y+=3){const b=o.getX(y),E=o.getX(y+1),D=o.getX(y+2);s=lo(this,p,t,i,l,h,u,b,E,D),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{const m=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let g=m,p=_;g<p;g+=3){const v=o.getX(g),x=o.getX(g+1),y=o.getX(g+2);s=lo(this,a,t,i,l,h,u,v,x,y),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let m=0,_=d.length;m<_;m++){const g=d[m],p=a[g.materialIndex],v=Math.max(g.start,f.start),x=Math.min(c.count,Math.min(g.start+g.count,f.start+f.count));for(let y=v,T=x;y<T;y+=3){const b=y,E=y+1,D=y+2;s=lo(this,p,t,i,l,h,u,b,E,D),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{const m=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let g=m,p=_;g<p;g+=3){const v=g,x=g+1,y=g+2;s=lo(this,a,t,i,l,h,u,v,x,y),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}}function w1(n,t,e,i,s,r,a,o){let c;if(t.side===bn?c=i.intersectTriangle(a,r,s,!0,o):c=i.intersectTriangle(s,r,a,t.side===Qi,o),c===null)return null;co.copy(o),co.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(co);return l<e.near||l>e.far?null:{distance:l,point:co.clone(),object:n}}function lo(n,t,e,i,s,r,a,o,c,l){n.getVertexPosition(o,Fs),n.getVertexPosition(c,zs),n.getVertexPosition(l,Bs);const h=w1(n,t,e,i,Fs,zs,Bs,oo);if(h){s&&(so.fromBufferAttribute(s,o),ro.fromBufferAttribute(s,c),ao.fromBufferAttribute(s,l),h.uv=Bn.getInterpolation(oo,Fs,zs,Bs,so,ro,ao,new nt)),r&&(so.fromBufferAttribute(r,o),ro.fromBufferAttribute(r,c),ao.fromBufferAttribute(r,l),h.uv1=Bn.getInterpolation(oo,Fs,zs,Bs,so,ro,ao,new nt),h.uv2=h.uv1),a&&(Ad.fromBufferAttribute(a,o),Rd.fromBufferAttribute(a,c),Cd.fromBufferAttribute(a,l),h.normal=Bn.getInterpolation(oo,Fs,zs,Bs,Ad,Rd,Cd,new C),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:c,c:l,normal:new C,materialIndex:0};Bn.getNormal(Fs,zs,Bs,u.normal),h.face=u}return h}class le extends Ne{constructor(t=1,e=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],h=[],u=[];let d=0,f=0;m("z","y","x",-1,-1,i,e,t,a,r,0),m("z","y","x",1,-1,i,e,-t,a,r,1),m("x","z","y",1,1,t,i,e,s,a,2),m("x","z","y",1,-1,t,i,-e,s,a,3),m("x","y","z",1,-1,t,e,i,s,r,4),m("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new ne(l,3)),this.setAttribute("normal",new ne(h,3)),this.setAttribute("uv",new ne(u,2));function m(_,g,p,v,x,y,T,b,E,D,M){const w=y/E,O=T/D,K=y/2,tt=T/2,L=b/2,P=E+1,U=D+1;let F=0,H=0;const B=new C;for(let q=0;q<U;q++){const j=q*O-tt;for(let ut=0;ut<P;ut++){const X=ut*w-K;B[_]=X*v,B[g]=j*x,B[p]=L,l.push(B.x,B.y,B.z),B[_]=0,B[g]=0,B[p]=b>0?1:-1,h.push(B.x,B.y,B.z),u.push(ut/E),u.push(1-q/D),F+=1}}for(let q=0;q<D;q++)for(let j=0;j<E;j++){const ut=d+j+P*q,X=d+j+P*(q+1),$=d+(j+1)+P*(q+1),gt=d+(j+1)+P*q;c.push(ut,X,gt),c.push(X,$,gt),H+=6}o.addGroup(f,H,M),f+=H,d+=F}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new le(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ar(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function vn(n){const t={};for(let e=0;e<n.length;e++){const i=Ar(n[e]);for(const s in i)t[s]=i[s]}return t}function T1(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function s0(n){return n.getRenderTarget()===null?n.outputColorSpace:xe.workingColorSpace}const A1={clone:Ar,merge:vn};var R1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,C1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ts extends hi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=R1,this.fragmentShader=C1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ar(t.uniforms),this.uniformsGroups=T1(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class r0 extends De{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Bt,this.projectionMatrix=new Bt,this.projectionMatrixInverse=new Bt,this.coordinateSystem=Ai}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class yn extends r0{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Tr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(na*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Tr*2*Math.atan(Math.tan(na*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,i,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(na*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,e-=a.offsetY*i/l,s*=a.width/c,i*=a.height/l}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ks=-90,Hs=1;class L1 extends De{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new yn(ks,Hs,t,e);s.layers=this.layers,this.add(s);const r=new yn(ks,Hs,t,e);r.layers=this.layers,this.add(r);const a=new yn(ks,Hs,t,e);a.layers=this.layers,this.add(a);const o=new yn(ks,Hs,t,e);o.layers=this.layers,this.add(o);const c=new yn(ks,Hs,t,e);c.layers=this.layers,this.add(c);const l=new yn(ks,Hs,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,r,a,o,c]=e;for(const l of e)this.remove(l);if(t===Ai)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===sc)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,a),t.setRenderTarget(i,2,s),t.render(e,o),t.setRenderTarget(i,3,s),t.render(e,c),t.setRenderTarget(i,4,s),t.render(e,l),i.texture.generateMipmaps=_,t.setRenderTarget(i,5,s),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=m,i.texture.needsPMREMUpdate=!0}}class a0 extends mn{constructor(t,e,i,s,r,a,o,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:br,super(t,e,i,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class P1 extends Ms{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];e.encoding!==void 0&&(sa("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===vs?en:Hn),this.texture=new a0(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:zn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new le(5,5,5),r=new ts({name:"CubemapFromEquirect",uniforms:Ar(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:bn,blending:Yi});r.uniforms.tEquirect.value=e;const a=new Me(s,r),o=e.minFilter;return e.minFilter===fa&&(e.minFilter=zn),new L1(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,i,s){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,s);t.setRenderTarget(r)}}const fl=new C,I1=new C,D1=new re;class ds{constructor(t=new C(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=fl.subVectors(i,e).cross(I1.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(fl),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||D1.getNormalMatrix(t),s=this.coplanarPoint(fl).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const cs=new li,ho=new C;class Bh{constructor(t=new ds,e=new ds,i=new ds,s=new ds,r=new ds,a=new ds){this.planes=[t,e,i,s,r,a]}set(t,e,i,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Ai){const i=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],c=s[3],l=s[4],h=s[5],u=s[6],d=s[7],f=s[8],m=s[9],_=s[10],g=s[11],p=s[12],v=s[13],x=s[14],y=s[15];if(i[0].setComponents(c-r,d-l,g-f,y-p).normalize(),i[1].setComponents(c+r,d+l,g+f,y+p).normalize(),i[2].setComponents(c+a,d+h,g+m,y+v).normalize(),i[3].setComponents(c-a,d-h,g-m,y-v).normalize(),i[4].setComponents(c-o,d-u,g-_,y-x).normalize(),e===Ai)i[5].setComponents(c+o,d+u,g+_,y+x).normalize();else if(e===sc)i[5].setComponents(o,u,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),cs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),cs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(cs)}intersectsSprite(t){return cs.center.set(0,0,0),cs.radius=.7071067811865476,cs.applyMatrix4(t.matrixWorld),this.intersectsSphere(cs)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(ho.x=s.normal.x>0?t.max.x:t.min.x,ho.y=s.normal.y>0?t.max.y:t.min.y,ho.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ho)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function o0(){let n=null,t=!1,e=null,i=null;function s(r,a){e(r,a),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function N1(n,t){const e=t.isWebGL2,i=new WeakMap;function s(l,h){const u=l.array,d=l.usage,f=u.byteLength,m=n.createBuffer();n.bindBuffer(h,m),n.bufferData(h,u,d),l.onUploadCallback();let _;if(u instanceof Float32Array)_=n.FLOAT;else if(u instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(e)_=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=n.UNSIGNED_SHORT;else if(u instanceof Int16Array)_=n.SHORT;else if(u instanceof Uint32Array)_=n.UNSIGNED_INT;else if(u instanceof Int32Array)_=n.INT;else if(u instanceof Int8Array)_=n.BYTE;else if(u instanceof Uint8Array)_=n.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)_=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:m,type:_,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version,size:f}}function r(l,h,u){const d=h.array,f=h._updateRange,m=h.updateRanges;if(n.bindBuffer(u,l),f.count===-1&&m.length===0&&n.bufferSubData(u,0,d),m.length!==0){for(let _=0,g=m.length;_<g;_++){const p=m[_];e?n.bufferSubData(u,p.start*d.BYTES_PER_ELEMENT,d,p.start,p.count):n.bufferSubData(u,p.start*d.BYTES_PER_ELEMENT,d.subarray(p.start,p.start+p.count))}h.clearUpdateRanges()}f.count!==-1&&(e?n.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d,f.offset,f.count):n.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d.subarray(f.offset,f.offset+f.count)),f.count=-1),h.onUploadCallback()}function a(l){return l.isInterleavedBufferAttribute&&(l=l.data),i.get(l)}function o(l){l.isInterleavedBufferAttribute&&(l=l.data);const h=i.get(l);h&&(n.deleteBuffer(h.buffer),i.delete(l))}function c(l,h){if(l.isGLBufferAttribute){const d=i.get(l);(!d||d.version<l.version)&&i.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const u=i.get(l);if(u===void 0)i.set(l,s(l,h));else if(u.version<l.version){if(u.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,l,h),u.version=l.version}}return{get:a,remove:o,update:c}}class Ca extends Ne{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(i),c=Math.floor(s),l=o+1,h=c+1,u=t/o,d=e/c,f=[],m=[],_=[],g=[];for(let p=0;p<h;p++){const v=p*d-a;for(let x=0;x<l;x++){const y=x*u-r;m.push(y,-v,0),_.push(0,0,1),g.push(x/o),g.push(1-p/c)}}for(let p=0;p<c;p++)for(let v=0;v<o;v++){const x=v+l*p,y=v+l*(p+1),T=v+1+l*(p+1),b=v+1+l*p;f.push(x,y,b),f.push(y,T,b)}this.setIndex(f),this.setAttribute("position",new ne(m,3)),this.setAttribute("normal",new ne(_,3)),this.setAttribute("uv",new ne(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ca(t.width,t.height,t.widthSegments,t.heightSegments)}}var U1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,O1=`#ifdef USE_ALPHAHASH
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
#endif`,F1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,z1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,B1=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,k1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,H1=`#ifdef USE_AOMAP
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
#endif`,G1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,V1=`#ifdef USE_BATCHING
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
#endif`,W1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,X1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,q1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Y1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,K1=`#ifdef USE_IRIDESCENCE
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
#endif`,j1=`#ifdef USE_BUMPMAP
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
#endif`,Z1=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,J1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,$1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Q1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,t_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,e_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,n_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,i_=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,s_=`#define PI 3.141592653589793
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
} // validated`,r_=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,a_=`vec3 transformedNormal = objectNormal;
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
#endif`,o_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,c_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,l_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,h_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,u_="gl_FragColor = linearToOutputTexel( gl_FragColor );",d_=`
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
}`,f_=`#ifdef USE_ENVMAP
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
#endif`,p_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,m_=`#ifdef USE_ENVMAP
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
#endif`,g_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,__=`#ifdef USE_ENVMAP
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
#endif`,x_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,v_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,y_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,M_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,S_=`#ifdef USE_GRADIENTMAP
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
}`,b_=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,E_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,w_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,T_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,A_=`uniform bool receiveShadow;
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
#endif`,R_=`#ifdef USE_ENVMAP
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
#endif`,C_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,L_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,P_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,I_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,D_=`PhysicalMaterial material;
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
#endif`,N_=`struct PhysicalMaterial {
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
}`,U_=`
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
#endif`,O_=`#if defined( RE_IndirectDiffuse )
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
#endif`,F_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,z_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,B_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,k_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,H_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,G_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,V_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,W_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,X_=`#if defined( USE_POINTS_UV )
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
#endif`,q_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Y_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,K_=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,j_=`#ifdef USE_MORPHNORMALS
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
#endif`,Z_=`#ifdef USE_MORPHTARGETS
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
#endif`,J_=`#ifdef USE_MORPHTARGETS
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
#endif`,$_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Q_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,tx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ex=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ix=`#ifdef USE_NORMALMAP
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
#endif`,sx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,rx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ax=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ox=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,cx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,lx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,hx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ux=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,fx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,px=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,mx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,gx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,_x=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,xx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,vx=`float getShadowMask() {
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
}`,yx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Mx=`#ifdef USE_SKINNING
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
#endif`,Sx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,bx=`#ifdef USE_SKINNING
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
#endif`,Ex=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,wx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Tx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ax=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Rx=`#ifdef USE_TRANSMISSION
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
#endif`,Cx=`#ifdef USE_TRANSMISSION
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
#endif`,Lx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Px=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ix=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Dx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Nx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ux=`uniform sampler2D t2D;
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
}`,Ox=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Fx=`#ifdef ENVMAP_TYPE_CUBE
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
}`,zx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Bx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kx=`#include <common>
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
}`,Hx=`#if DEPTH_PACKING == 3200
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
}`,Gx=`#define DISTANCE
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
}`,Vx=`#define DISTANCE
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
}`,Wx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Xx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qx=`uniform float scale;
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
}`,Yx=`uniform vec3 diffuse;
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
}`,Kx=`#include <common>
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
}`,jx=`uniform vec3 diffuse;
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
}`,Zx=`#define LAMBERT
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
}`,Jx=`#define LAMBERT
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
}`,$x=`#define MATCAP
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
}`,Qx=`#define MATCAP
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
}`,tv=`#define NORMAL
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
}`,ev=`#define NORMAL
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
}`,nv=`#define PHONG
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
}`,iv=`#define PHONG
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
}`,sv=`#define STANDARD
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
}`,rv=`#define STANDARD
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
}`,av=`#define TOON
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
}`,ov=`#define TOON
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
}`,cv=`uniform float size;
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
}`,lv=`uniform vec3 diffuse;
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
}`,hv=`#include <common>
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
}`,uv=`uniform vec3 color;
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
}`,dv=`uniform float rotation;
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
}`,fv=`uniform vec3 diffuse;
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
}`,te={alphahash_fragment:U1,alphahash_pars_fragment:O1,alphamap_fragment:F1,alphamap_pars_fragment:z1,alphatest_fragment:B1,alphatest_pars_fragment:k1,aomap_fragment:H1,aomap_pars_fragment:G1,batching_pars_vertex:V1,batching_vertex:W1,begin_vertex:X1,beginnormal_vertex:q1,bsdfs:Y1,iridescence_fragment:K1,bumpmap_pars_fragment:j1,clipping_planes_fragment:Z1,clipping_planes_pars_fragment:J1,clipping_planes_pars_vertex:$1,clipping_planes_vertex:Q1,color_fragment:t_,color_pars_fragment:e_,color_pars_vertex:n_,color_vertex:i_,common:s_,cube_uv_reflection_fragment:r_,defaultnormal_vertex:a_,displacementmap_pars_vertex:o_,displacementmap_vertex:c_,emissivemap_fragment:l_,emissivemap_pars_fragment:h_,colorspace_fragment:u_,colorspace_pars_fragment:d_,envmap_fragment:f_,envmap_common_pars_fragment:p_,envmap_pars_fragment:m_,envmap_pars_vertex:g_,envmap_physical_pars_fragment:R_,envmap_vertex:__,fog_vertex:x_,fog_pars_vertex:v_,fog_fragment:y_,fog_pars_fragment:M_,gradientmap_pars_fragment:S_,lightmap_fragment:b_,lightmap_pars_fragment:E_,lights_lambert_fragment:w_,lights_lambert_pars_fragment:T_,lights_pars_begin:A_,lights_toon_fragment:C_,lights_toon_pars_fragment:L_,lights_phong_fragment:P_,lights_phong_pars_fragment:I_,lights_physical_fragment:D_,lights_physical_pars_fragment:N_,lights_fragment_begin:U_,lights_fragment_maps:O_,lights_fragment_end:F_,logdepthbuf_fragment:z_,logdepthbuf_pars_fragment:B_,logdepthbuf_pars_vertex:k_,logdepthbuf_vertex:H_,map_fragment:G_,map_pars_fragment:V_,map_particle_fragment:W_,map_particle_pars_fragment:X_,metalnessmap_fragment:q_,metalnessmap_pars_fragment:Y_,morphcolor_vertex:K_,morphnormal_vertex:j_,morphtarget_pars_vertex:Z_,morphtarget_vertex:J_,normal_fragment_begin:$_,normal_fragment_maps:Q_,normal_pars_fragment:tx,normal_pars_vertex:ex,normal_vertex:nx,normalmap_pars_fragment:ix,clearcoat_normal_fragment_begin:sx,clearcoat_normal_fragment_maps:rx,clearcoat_pars_fragment:ax,iridescence_pars_fragment:ox,opaque_fragment:cx,packing:lx,premultiplied_alpha_fragment:hx,project_vertex:ux,dithering_fragment:dx,dithering_pars_fragment:fx,roughnessmap_fragment:px,roughnessmap_pars_fragment:mx,shadowmap_pars_fragment:gx,shadowmap_pars_vertex:_x,shadowmap_vertex:xx,shadowmask_pars_fragment:vx,skinbase_vertex:yx,skinning_pars_vertex:Mx,skinning_vertex:Sx,skinnormal_vertex:bx,specularmap_fragment:Ex,specularmap_pars_fragment:wx,tonemapping_fragment:Tx,tonemapping_pars_fragment:Ax,transmission_fragment:Rx,transmission_pars_fragment:Cx,uv_pars_fragment:Lx,uv_pars_vertex:Px,uv_vertex:Ix,worldpos_vertex:Dx,background_vert:Nx,background_frag:Ux,backgroundCube_vert:Ox,backgroundCube_frag:Fx,cube_vert:zx,cube_frag:Bx,depth_vert:kx,depth_frag:Hx,distanceRGBA_vert:Gx,distanceRGBA_frag:Vx,equirect_vert:Wx,equirect_frag:Xx,linedashed_vert:qx,linedashed_frag:Yx,meshbasic_vert:Kx,meshbasic_frag:jx,meshlambert_vert:Zx,meshlambert_frag:Jx,meshmatcap_vert:$x,meshmatcap_frag:Qx,meshnormal_vert:tv,meshnormal_frag:ev,meshphong_vert:nv,meshphong_frag:iv,meshphysical_vert:sv,meshphysical_frag:rv,meshtoon_vert:av,meshtoon_frag:ov,points_vert:cv,points_frag:lv,shadow_vert:hv,shadow_frag:uv,sprite_vert:dv,sprite_frag:fv},pt={common:{diffuse:{value:new At(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new re},alphaMap:{value:null},alphaMapTransform:{value:new re},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new re}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new re}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new re}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new re},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new re},normalScale:{value:new nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new re},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new re}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new re}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new re}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new At(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new At(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new re},alphaTest:{value:0},uvTransform:{value:new re}},sprite:{diffuse:{value:new At(16777215)},opacity:{value:1},center:{value:new nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new re},alphaMap:{value:null},alphaMapTransform:{value:new re},alphaTest:{value:0}}},ii={basic:{uniforms:vn([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.fog]),vertexShader:te.meshbasic_vert,fragmentShader:te.meshbasic_frag},lambert:{uniforms:vn([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,pt.lights,{emissive:{value:new At(0)}}]),vertexShader:te.meshlambert_vert,fragmentShader:te.meshlambert_frag},phong:{uniforms:vn([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,pt.lights,{emissive:{value:new At(0)},specular:{value:new At(1118481)},shininess:{value:30}}]),vertexShader:te.meshphong_vert,fragmentShader:te.meshphong_frag},standard:{uniforms:vn([pt.common,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.roughnessmap,pt.metalnessmap,pt.fog,pt.lights,{emissive:{value:new At(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:te.meshphysical_vert,fragmentShader:te.meshphysical_frag},toon:{uniforms:vn([pt.common,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.gradientmap,pt.fog,pt.lights,{emissive:{value:new At(0)}}]),vertexShader:te.meshtoon_vert,fragmentShader:te.meshtoon_frag},matcap:{uniforms:vn([pt.common,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,{matcap:{value:null}}]),vertexShader:te.meshmatcap_vert,fragmentShader:te.meshmatcap_frag},points:{uniforms:vn([pt.points,pt.fog]),vertexShader:te.points_vert,fragmentShader:te.points_frag},dashed:{uniforms:vn([pt.common,pt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:te.linedashed_vert,fragmentShader:te.linedashed_frag},depth:{uniforms:vn([pt.common,pt.displacementmap]),vertexShader:te.depth_vert,fragmentShader:te.depth_frag},normal:{uniforms:vn([pt.common,pt.bumpmap,pt.normalmap,pt.displacementmap,{opacity:{value:1}}]),vertexShader:te.meshnormal_vert,fragmentShader:te.meshnormal_frag},sprite:{uniforms:vn([pt.sprite,pt.fog]),vertexShader:te.sprite_vert,fragmentShader:te.sprite_frag},background:{uniforms:{uvTransform:{value:new re},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:te.background_vert,fragmentShader:te.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:te.backgroundCube_vert,fragmentShader:te.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:te.cube_vert,fragmentShader:te.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:te.equirect_vert,fragmentShader:te.equirect_frag},distanceRGBA:{uniforms:vn([pt.common,pt.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:te.distanceRGBA_vert,fragmentShader:te.distanceRGBA_frag},shadow:{uniforms:vn([pt.lights,pt.fog,{color:{value:new At(0)},opacity:{value:1}}]),vertexShader:te.shadow_vert,fragmentShader:te.shadow_frag}};ii.physical={uniforms:vn([ii.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new re},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new re},clearcoatNormalScale:{value:new nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new re},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new re},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new re},sheen:{value:0},sheenColor:{value:new At(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new re},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new re},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new re},transmissionSamplerSize:{value:new nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new re},attenuationDistance:{value:0},attenuationColor:{value:new At(0)},specularColor:{value:new At(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new re},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new re},anisotropyVector:{value:new nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new re}}]),vertexShader:te.meshphysical_vert,fragmentShader:te.meshphysical_frag};const uo={r:0,b:0,g:0};function pv(n,t,e,i,s,r,a){const o=new At(0);let c=r===!0?0:1,l,h,u=null,d=0,f=null;function m(g,p){let v=!1,x=p.isScene===!0?p.background:null;x&&x.isTexture&&(x=(p.backgroundBlurriness>0?e:t).get(x)),x===null?_(o,c):x&&x.isColor&&(_(x,1),v=!0);const y=n.xr.getEnvironmentBlendMode();y==="additive"?i.buffers.color.setClear(0,0,0,1,a):y==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||v)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),x&&(x.isCubeTexture||x.mapping===bc)?(h===void 0&&(h=new Me(new le(1,1,1),new ts({name:"BackgroundCubeMaterial",uniforms:Ar(ii.backgroundCube.uniforms),vertexShader:ii.backgroundCube.vertexShader,fragmentShader:ii.backgroundCube.fragmentShader,side:bn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(T,b,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.toneMapped=xe.getTransfer(x.colorSpace)!==Re,(u!==x||d!==x.version||f!==n.toneMapping)&&(h.material.needsUpdate=!0,u=x,d=x.version,f=n.toneMapping),h.layers.enableAll(),g.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new Me(new Ca(2,2),new ts({name:"BackgroundMaterial",uniforms:Ar(ii.background.uniforms),vertexShader:ii.background.vertexShader,fragmentShader:ii.background.fragmentShader,side:Qi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,l.material.toneMapped=xe.getTransfer(x.colorSpace)!==Re,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||d!==x.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,u=x,d=x.version,f=n.toneMapping),l.layers.enableAll(),g.unshift(l,l.geometry,l.material,0,0,null))}function _(g,p){g.getRGB(uo,s0(n)),i.buffers.color.setClear(uo.r,uo.g,uo.b,p,a)}return{getClearColor:function(){return o},setClearColor:function(g,p=1){o.set(g),c=p,_(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(g){c=g,_(o,c)},render:m}}function mv(n,t,e,i){const s=n.getParameter(n.MAX_VERTEX_ATTRIBS),r=i.isWebGL2?null:t.get("OES_vertex_array_object"),a=i.isWebGL2||r!==null,o={},c=g(null);let l=c,h=!1;function u(L,P,U,F,H){let B=!1;if(a){const q=_(F,U,P);l!==q&&(l=q,f(l.object)),B=p(L,F,U,H),B&&v(L,F,U,H)}else{const q=P.wireframe===!0;(l.geometry!==F.id||l.program!==U.id||l.wireframe!==q)&&(l.geometry=F.id,l.program=U.id,l.wireframe=q,B=!0)}H!==null&&e.update(H,n.ELEMENT_ARRAY_BUFFER),(B||h)&&(h=!1,D(L,P,U,F),H!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function d(){return i.isWebGL2?n.createVertexArray():r.createVertexArrayOES()}function f(L){return i.isWebGL2?n.bindVertexArray(L):r.bindVertexArrayOES(L)}function m(L){return i.isWebGL2?n.deleteVertexArray(L):r.deleteVertexArrayOES(L)}function _(L,P,U){const F=U.wireframe===!0;let H=o[L.id];H===void 0&&(H={},o[L.id]=H);let B=H[P.id];B===void 0&&(B={},H[P.id]=B);let q=B[F];return q===void 0&&(q=g(d()),B[F]=q),q}function g(L){const P=[],U=[],F=[];for(let H=0;H<s;H++)P[H]=0,U[H]=0,F[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:U,attributeDivisors:F,object:L,attributes:{},index:null}}function p(L,P,U,F){const H=l.attributes,B=P.attributes;let q=0;const j=U.getAttributes();for(const ut in j)if(j[ut].location>=0){const $=H[ut];let gt=B[ut];if(gt===void 0&&(ut==="instanceMatrix"&&L.instanceMatrix&&(gt=L.instanceMatrix),ut==="instanceColor"&&L.instanceColor&&(gt=L.instanceColor)),$===void 0||$.attribute!==gt||gt&&$.data!==gt.data)return!0;q++}return l.attributesNum!==q||l.index!==F}function v(L,P,U,F){const H={},B=P.attributes;let q=0;const j=U.getAttributes();for(const ut in j)if(j[ut].location>=0){let $=B[ut];$===void 0&&(ut==="instanceMatrix"&&L.instanceMatrix&&($=L.instanceMatrix),ut==="instanceColor"&&L.instanceColor&&($=L.instanceColor));const gt={};gt.attribute=$,$&&$.data&&(gt.data=$.data),H[ut]=gt,q++}l.attributes=H,l.attributesNum=q,l.index=F}function x(){const L=l.newAttributes;for(let P=0,U=L.length;P<U;P++)L[P]=0}function y(L){T(L,0)}function T(L,P){const U=l.newAttributes,F=l.enabledAttributes,H=l.attributeDivisors;U[L]=1,F[L]===0&&(n.enableVertexAttribArray(L),F[L]=1),H[L]!==P&&((i.isWebGL2?n:t.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,P),H[L]=P)}function b(){const L=l.newAttributes,P=l.enabledAttributes;for(let U=0,F=P.length;U<F;U++)P[U]!==L[U]&&(n.disableVertexAttribArray(U),P[U]=0)}function E(L,P,U,F,H,B,q){q===!0?n.vertexAttribIPointer(L,P,U,H,B):n.vertexAttribPointer(L,P,U,F,H,B)}function D(L,P,U,F){if(i.isWebGL2===!1&&(L.isInstancedMesh||F.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;x();const H=F.attributes,B=U.getAttributes(),q=P.defaultAttributeValues;for(const j in B){const ut=B[j];if(ut.location>=0){let X=H[j];if(X===void 0&&(j==="instanceMatrix"&&L.instanceMatrix&&(X=L.instanceMatrix),j==="instanceColor"&&L.instanceColor&&(X=L.instanceColor)),X!==void 0){const $=X.normalized,gt=X.itemSize,Rt=e.get(X);if(Rt===void 0)continue;const St=Rt.buffer,Ft=Rt.type,Yt=Rt.bytesPerElement,Ct=i.isWebGL2===!0&&(Ft===n.INT||Ft===n.UNSIGNED_INT||X.gpuType===Gp);if(X.isInterleavedBufferAttribute){const Wt=X.data,I=Wt.stride,dt=X.offset;if(Wt.isInstancedInterleavedBuffer){for(let J=0;J<ut.locationSize;J++)T(ut.location+J,Wt.meshPerAttribute);L.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=Wt.meshPerAttribute*Wt.count)}else for(let J=0;J<ut.locationSize;J++)y(ut.location+J);n.bindBuffer(n.ARRAY_BUFFER,St);for(let J=0;J<ut.locationSize;J++)E(ut.location+J,gt/ut.locationSize,Ft,$,I*Yt,(dt+gt/ut.locationSize*J)*Yt,Ct)}else{if(X.isInstancedBufferAttribute){for(let Wt=0;Wt<ut.locationSize;Wt++)T(ut.location+Wt,X.meshPerAttribute);L.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let Wt=0;Wt<ut.locationSize;Wt++)y(ut.location+Wt);n.bindBuffer(n.ARRAY_BUFFER,St);for(let Wt=0;Wt<ut.locationSize;Wt++)E(ut.location+Wt,gt/ut.locationSize,Ft,$,gt*Yt,gt/ut.locationSize*Wt*Yt,Ct)}}else if(q!==void 0){const $=q[j];if($!==void 0)switch($.length){case 2:n.vertexAttrib2fv(ut.location,$);break;case 3:n.vertexAttrib3fv(ut.location,$);break;case 4:n.vertexAttrib4fv(ut.location,$);break;default:n.vertexAttrib1fv(ut.location,$)}}}}b()}function M(){K();for(const L in o){const P=o[L];for(const U in P){const F=P[U];for(const H in F)m(F[H].object),delete F[H];delete P[U]}delete o[L]}}function w(L){if(o[L.id]===void 0)return;const P=o[L.id];for(const U in P){const F=P[U];for(const H in F)m(F[H].object),delete F[H];delete P[U]}delete o[L.id]}function O(L){for(const P in o){const U=o[P];if(U[L.id]===void 0)continue;const F=U[L.id];for(const H in F)m(F[H].object),delete F[H];delete U[L.id]}}function K(){tt(),h=!0,l!==c&&(l=c,f(l.object))}function tt(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:u,reset:K,resetDefaultState:tt,dispose:M,releaseStatesOfGeometry:w,releaseStatesOfProgram:O,initAttributes:x,enableAttribute:y,disableUnusedAttributes:b}}function gv(n,t,e,i){const s=i.isWebGL2;let r;function a(h){r=h}function o(h,u){n.drawArrays(r,h,u),e.update(u,r,1)}function c(h,u,d){if(d===0)return;let f,m;if(s)f=n,m="drawArraysInstanced";else if(f=t.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[m](r,h,u,d),e.update(u,r,d)}function l(h,u,d){if(d===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<d;m++)this.render(h[m],u[m]);else{f.multiDrawArraysWEBGL(r,h,0,u,0,d);let m=0;for(let _=0;_<d;_++)m+=u[_];e.update(m,r,1)}}this.setMode=a,this.render=o,this.renderInstances=c,this.renderMultiDraw=l}function _v(n,t,e){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const E=t.get("EXT_texture_filter_anisotropic");i=n.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(E){if(E==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let o=e.precision!==void 0?e.precision:"highp";const c=r(o);c!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",c,"instead."),o=c);const l=a||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,u=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),d=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),_=n.getParameter(n.MAX_VERTEX_ATTRIBS),g=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),p=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),x=d>0,y=a||t.has("OES_texture_float"),T=x&&y,b=a?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:l,getMaxAnisotropy:s,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:f,maxCubemapSize:m,maxAttributes:_,maxVertexUniforms:g,maxVaryings:p,maxFragmentUniforms:v,vertexTextures:x,floatFragmentTextures:y,floatVertexTextures:T,maxSamples:b}}function xv(n){const t=this;let e=null,i=0,s=!1,r=!1;const a=new ds,o=new re,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||i!==0||s;return s=d,i=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){const m=u.clippingPlanes,_=u.clipIntersection,g=u.clipShadows,p=n.get(u);if(!s||m===null||m.length===0||r&&!g)r?h(null):l();else{const v=r?0:i,x=v*4;let y=p.clippingState||null;c.value=y,y=h(m,d,x,f);for(let T=0;T!==x;++T)y[T]=e[T];p.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(u,d,f,m){const _=u!==null?u.length:0;let g=null;if(_!==0){if(g=c.value,m!==!0||g===null){const p=f+_*4,v=d.matrixWorldInverse;o.getNormalMatrix(v),(g===null||g.length<p)&&(g=new Float32Array(p));for(let x=0,y=f;x!==_;++x,y+=4)a.copy(u[x]).applyMatrix4(v,o),a.normal.toArray(g,y),g[y+3]=a.constant}c.value=g,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,g}}function vv(n){let t=new WeakMap;function e(a,o){return o===jl?a.mapping=br:o===Zl&&(a.mapping=Er),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===jl||o===Zl)if(t.has(a)){const c=t.get(a).texture;return e(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new P1(c.height/2);return l.fromEquirectangularTexture(n,a),t.set(a,l),a.addEventListener("dispose",s),e(l.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}class c0 extends r0{constructor(t=-1,e=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-t,a=i+t,o=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const cr=4,Ld=[.125,.215,.35,.446,.526,.582],ms=20,pl=new c0,Pd=new At;let ml=null,gl=0,_l=0;const fs=(1+Math.sqrt(5))/2,Gs=1/fs,Id=[new C(1,1,1),new C(-1,1,1),new C(1,1,-1),new C(-1,1,-1),new C(0,fs,Gs),new C(0,fs,-Gs),new C(Gs,0,fs),new C(-Gs,0,fs),new C(fs,Gs,0),new C(-fs,Gs,0)];class Dd{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){ml=this._renderer.getRenderTarget(),gl=this._renderer.getActiveCubeFace(),_l=this._renderer.getActiveMipmapLevel(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Od(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ud(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ml,gl,_l),t.scissorTest=!1,fo(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===br||t.mapping===Er?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ml=this._renderer.getRenderTarget(),gl=this._renderer.getActiveCubeFace(),_l=this._renderer.getActiveMipmapLevel();const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:zn,minFilter:zn,generateMipmaps:!1,type:pa,format:kn,colorSpace:Ci,depthBuffer:!1},s=Nd(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Nd(t,e,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=yv(r)),this._blurMaterial=Mv(r,t,e)}return s}_compileMaterial(t){const e=new Me(this._lodPlanes[0],t);this._renderer.compile(e,pl)}_sceneToCubeUV(t,e,i,s){const o=new yn(90,1,e,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Pd),h.toneMapping=Ki,h.autoClear=!1;const f=new Di({name:"PMREM.Background",side:bn,depthWrite:!1,depthTest:!1}),m=new Me(new le,f);let _=!1;const g=t.background;g?g.isColor&&(f.color.copy(g),t.background=null,_=!0):(f.color.copy(Pd),_=!0);for(let p=0;p<6;p++){const v=p%3;v===0?(o.up.set(0,c[p],0),o.lookAt(l[p],0,0)):v===1?(o.up.set(0,0,c[p]),o.lookAt(0,l[p],0)):(o.up.set(0,c[p],0),o.lookAt(0,0,l[p]));const x=this._cubeSize;fo(s,v*x,p>2?x:0,x,x),h.setRenderTarget(s),_&&h.render(m,o),h.render(t,o)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=g}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===br||t.mapping===Er;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Od()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ud());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new Me(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const c=this._cubeSize;fo(e,0,0,3*c,2*c),i.setRenderTarget(e),i.render(a,pl)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Id[(s-1)%Id.length];this._blur(t,s-1,s,r,a)}e.autoClear=i}_blur(t,e,i,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,i,s,"latitudinal",r),this._halfBlur(a,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Me(this._lodPlanes[s],l),d=l.uniforms,f=this._sizeLods[i]-1,m=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*ms-1),_=r/m,g=isFinite(r)?1+Math.floor(h*_):ms;g>ms&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${ms}`);const p=[];let v=0;for(let E=0;E<ms;++E){const D=E/_,M=Math.exp(-D*D/2);p.push(M),E===0?v+=M:E<g&&(v+=2*M)}for(let E=0;E<p.length;E++)p[E]=p[E]/v;d.envMap.value=t.texture,d.samples.value=g,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:x}=this;d.dTheta.value=m,d.mipInt.value=x-i;const y=this._sizeLods[s],T=3*y*(s>x-cr?s-x+cr:0),b=4*(this._cubeSize-y);fo(e,T,b,3*y,2*y),c.setRenderTarget(e),c.render(u,pl)}}function yv(n){const t=[],e=[],i=[];let s=n;const r=n-cr+1+Ld.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let c=1/o;a>n-cr?c=Ld[a-n+cr-1]:a===0&&(c=0),i.push(c);const l=1/(o-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,m=6,_=3,g=2,p=1,v=new Float32Array(_*m*f),x=new Float32Array(g*m*f),y=new Float32Array(p*m*f);for(let b=0;b<f;b++){const E=b%3*2/3-1,D=b>2?0:-1,M=[E,D,0,E+2/3,D,0,E+2/3,D+1,0,E,D,0,E+2/3,D+1,0,E,D+1,0];v.set(M,_*m*b),x.set(d,g*m*b);const w=[b,b,b,b,b,b];y.set(w,p*m*b)}const T=new Ne;T.setAttribute("position",new An(v,_)),T.setAttribute("uv",new An(x,g)),T.setAttribute("faceIndex",new An(y,p)),t.push(T),s>cr&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Nd(n,t,e){const i=new Ms(n,t,e);return i.texture.mapping=bc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function fo(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function Mv(n,t,e){const i=new Float32Array(ms),s=new C(0,1,0);return new ts({name:"SphericalGaussianBlur",defines:{n:ms,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:kh(),fragmentShader:`

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
		`,blending:Yi,depthTest:!1,depthWrite:!1})}function Ud(){return new ts({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:kh(),fragmentShader:`

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
		`,blending:Yi,depthTest:!1,depthWrite:!1})}function Od(){return new ts({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:kh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Yi,depthTest:!1,depthWrite:!1})}function kh(){return`

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
	`}function Sv(n){let t=new WeakMap,e=null;function i(o){if(o&&o.isTexture){const c=o.mapping,l=c===jl||c===Zl,h=c===br||c===Er;if(l||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let u=t.get(o);return e===null&&(e=new Dd(n)),u=l?e.fromEquirectangular(o,u):e.fromCubemap(o,u),t.set(o,u),u.texture}else{if(t.has(o))return t.get(o).texture;{const u=o.image;if(l&&u&&u.height>0||h&&u&&s(u)){e===null&&(e=new Dd(n));const d=l?e.fromEquirectangular(o):e.fromCubemap(o);return t.set(o,d),o.addEventListener("dispose",r),d.texture}else return null}}}return o}function s(o){let c=0;const l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function r(o){const c=o.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:a}}function bv(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(i){i.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(i){const s=e(i);return s===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function Ev(n,t,e,i){const s={},r=new WeakMap;function a(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const m in d.attributes)t.remove(d.attributes[m]);for(const m in d.morphAttributes){const _=d.morphAttributes[m];for(let g=0,p=_.length;g<p;g++)t.remove(_[g])}d.removeEventListener("dispose",a),delete s[d.id];const f=r.get(d);f&&(t.remove(f),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,e.memory.geometries++),d}function c(u){const d=u.attributes;for(const m in d)t.update(d[m],n.ARRAY_BUFFER);const f=u.morphAttributes;for(const m in f){const _=f[m];for(let g=0,p=_.length;g<p;g++)t.update(_[g],n.ARRAY_BUFFER)}}function l(u){const d=[],f=u.index,m=u.attributes.position;let _=0;if(f!==null){const v=f.array;_=f.version;for(let x=0,y=v.length;x<y;x+=3){const T=v[x+0],b=v[x+1],E=v[x+2];d.push(T,b,b,E,E,T)}}else if(m!==void 0){const v=m.array;_=m.version;for(let x=0,y=v.length/3-1;x<y;x+=3){const T=x+0,b=x+1,E=x+2;d.push(T,b,b,E,E,T)}}else return;const g=new(Jp(d)?i0:n0)(d,1);g.version=_;const p=r.get(u);p&&t.remove(p),r.set(u,g)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return r.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function wv(n,t,e,i){const s=i.isWebGL2;let r;function a(f){r=f}let o,c;function l(f){o=f.type,c=f.bytesPerElement}function h(f,m){n.drawElements(r,m,o,f*c),e.update(m,r,1)}function u(f,m,_){if(_===0)return;let g,p;if(s)g=n,p="drawElementsInstanced";else if(g=t.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[p](r,m,o,f*c,_),e.update(m,r,_)}function d(f,m,_){if(_===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<_;p++)this.render(f[p]/c,m[p]);else{g.multiDrawElementsWEBGL(r,m,0,o,f,0,_);let p=0;for(let v=0;v<_;v++)p+=m[v];e.update(p,r,1)}}this.setMode=a,this.setIndex=l,this.render=h,this.renderInstances=u,this.renderMultiDraw=d}function Tv(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(e.calls++,a){case n.TRIANGLES:e.triangles+=o*(r/3);break;case n.LINES:e.lines+=o*(r/2);break;case n.LINE_STRIP:e.lines+=o*(r-1);break;case n.LINE_LOOP:e.lines+=o*r;break;case n.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function Av(n,t){return n[0]-t[0]}function Rv(n,t){return Math.abs(t[1])-Math.abs(n[1])}function Cv(n,t,e){const i={},s=new Float32Array(8),r=new WeakMap,a=new ye,o=[];for(let l=0;l<8;l++)o[l]=[l,0];function c(l,h,u){const d=l.morphTargetInfluences;if(t.isWebGL2===!0){const f=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,m=f!==void 0?f.length:0;let _=r.get(h);if(_===void 0||_.count!==m){let L=function(){K.dispose(),r.delete(h),h.removeEventListener("dispose",L)};_!==void 0&&_.texture.dispose();const v=h.morphAttributes.position!==void 0,x=h.morphAttributes.normal!==void 0,y=h.morphAttributes.color!==void 0,T=h.morphAttributes.position||[],b=h.morphAttributes.normal||[],E=h.morphAttributes.color||[];let D=0;v===!0&&(D=1),x===!0&&(D=2),y===!0&&(D=3);let M=h.attributes.position.count*D,w=1;M>t.maxTextureSize&&(w=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);const O=new Float32Array(M*w*4*m),K=new t0(O,M,w,m);K.type=Ti,K.needsUpdate=!0;const tt=D*4;for(let P=0;P<m;P++){const U=T[P],F=b[P],H=E[P],B=M*w*4*P;for(let q=0;q<U.count;q++){const j=q*tt;v===!0&&(a.fromBufferAttribute(U,q),O[B+j+0]=a.x,O[B+j+1]=a.y,O[B+j+2]=a.z,O[B+j+3]=0),x===!0&&(a.fromBufferAttribute(F,q),O[B+j+4]=a.x,O[B+j+5]=a.y,O[B+j+6]=a.z,O[B+j+7]=0),y===!0&&(a.fromBufferAttribute(H,q),O[B+j+8]=a.x,O[B+j+9]=a.y,O[B+j+10]=a.z,O[B+j+11]=H.itemSize===4?a.w:1)}}_={count:m,texture:K,size:new nt(M,w)},r.set(h,_),h.addEventListener("dispose",L)}let g=0;for(let v=0;v<d.length;v++)g+=d[v];const p=h.morphTargetsRelative?1:1-g;u.getUniforms().setValue(n,"morphTargetBaseInfluence",p),u.getUniforms().setValue(n,"morphTargetInfluences",d),u.getUniforms().setValue(n,"morphTargetsTexture",_.texture,e),u.getUniforms().setValue(n,"morphTargetsTextureSize",_.size)}else{const f=d===void 0?0:d.length;let m=i[h.id];if(m===void 0||m.length!==f){m=[];for(let x=0;x<f;x++)m[x]=[x,0];i[h.id]=m}for(let x=0;x<f;x++){const y=m[x];y[0]=x,y[1]=d[x]}m.sort(Rv);for(let x=0;x<8;x++)x<f&&m[x][1]?(o[x][0]=m[x][0],o[x][1]=m[x][1]):(o[x][0]=Number.MAX_SAFE_INTEGER,o[x][1]=0);o.sort(Av);const _=h.morphAttributes.position,g=h.morphAttributes.normal;let p=0;for(let x=0;x<8;x++){const y=o[x],T=y[0],b=y[1];T!==Number.MAX_SAFE_INTEGER&&b?(_&&h.getAttribute("morphTarget"+x)!==_[T]&&h.setAttribute("morphTarget"+x,_[T]),g&&h.getAttribute("morphNormal"+x)!==g[T]&&h.setAttribute("morphNormal"+x,g[T]),s[x]=b,p+=b):(_&&h.hasAttribute("morphTarget"+x)===!0&&h.deleteAttribute("morphTarget"+x),g&&h.hasAttribute("morphNormal"+x)===!0&&h.deleteAttribute("morphNormal"+x),s[x]=0)}const v=h.morphTargetsRelative?1:1-p;u.getUniforms().setValue(n,"morphTargetBaseInfluence",v),u.getUniforms().setValue(n,"morphTargetInfluences",s)}}return{update:c}}function Lv(n,t,e,i){let s=new WeakMap;function r(c){const l=i.render.frame,h=c.geometry,u=t.get(c,h);if(s.get(u)!==l&&(t.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return u}function a(){s=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:a}}class l0 extends mn{constructor(t,e,i,s,r,a,o,c,l,h){if(h=h!==void 0?h:xs,h!==xs&&h!==wr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===xs&&(i=Wi),i===void 0&&h===wr&&(i=_s),super(null,s,r,a,o,c,h,i,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:an,this.minFilter=c!==void 0?c:an,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const h0=new mn,u0=new l0(1,1);u0.compareFunction=Zp;const d0=new t0,f0=new p1,p0=new a0,Fd=[],zd=[],Bd=new Float32Array(16),kd=new Float32Array(9),Hd=new Float32Array(4);function Or(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let r=Fd[s];if(r===void 0&&(r=new Float32Array(s),Fd[s]=r),t!==0){i.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,n[a].toArray(r,o)}return r}function Ze(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Je(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Tc(n,t){let e=zd[t];e===void 0&&(e=new Int32Array(t),zd[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function Pv(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function Iv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ze(e,t))return;n.uniform2fv(this.addr,t),Je(e,t)}}function Dv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ze(e,t))return;n.uniform3fv(this.addr,t),Je(e,t)}}function Nv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ze(e,t))return;n.uniform4fv(this.addr,t),Je(e,t)}}function Uv(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ze(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Je(e,t)}else{if(Ze(e,i))return;Hd.set(i),n.uniformMatrix2fv(this.addr,!1,Hd),Je(e,i)}}function Ov(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ze(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Je(e,t)}else{if(Ze(e,i))return;kd.set(i),n.uniformMatrix3fv(this.addr,!1,kd),Je(e,i)}}function Fv(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ze(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Je(e,t)}else{if(Ze(e,i))return;Bd.set(i),n.uniformMatrix4fv(this.addr,!1,Bd),Je(e,i)}}function zv(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function Bv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ze(e,t))return;n.uniform2iv(this.addr,t),Je(e,t)}}function kv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ze(e,t))return;n.uniform3iv(this.addr,t),Je(e,t)}}function Hv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ze(e,t))return;n.uniform4iv(this.addr,t),Je(e,t)}}function Gv(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function Vv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ze(e,t))return;n.uniform2uiv(this.addr,t),Je(e,t)}}function Wv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ze(e,t))return;n.uniform3uiv(this.addr,t),Je(e,t)}}function Xv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ze(e,t))return;n.uniform4uiv(this.addr,t),Je(e,t)}}function qv(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);const r=this.type===n.SAMPLER_2D_SHADOW?u0:h0;e.setTexture2D(t||r,s)}function Yv(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||f0,s)}function Kv(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||p0,s)}function jv(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||d0,s)}function Zv(n){switch(n){case 5126:return Pv;case 35664:return Iv;case 35665:return Dv;case 35666:return Nv;case 35674:return Uv;case 35675:return Ov;case 35676:return Fv;case 5124:case 35670:return zv;case 35667:case 35671:return Bv;case 35668:case 35672:return kv;case 35669:case 35673:return Hv;case 5125:return Gv;case 36294:return Vv;case 36295:return Wv;case 36296:return Xv;case 35678:case 36198:case 36298:case 36306:case 35682:return qv;case 35679:case 36299:case 36307:return Yv;case 35680:case 36300:case 36308:case 36293:return Kv;case 36289:case 36303:case 36311:case 36292:return jv}}function Jv(n,t){n.uniform1fv(this.addr,t)}function $v(n,t){const e=Or(t,this.size,2);n.uniform2fv(this.addr,e)}function Qv(n,t){const e=Or(t,this.size,3);n.uniform3fv(this.addr,e)}function t2(n,t){const e=Or(t,this.size,4);n.uniform4fv(this.addr,e)}function e2(n,t){const e=Or(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function n2(n,t){const e=Or(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function i2(n,t){const e=Or(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function s2(n,t){n.uniform1iv(this.addr,t)}function r2(n,t){n.uniform2iv(this.addr,t)}function a2(n,t){n.uniform3iv(this.addr,t)}function o2(n,t){n.uniform4iv(this.addr,t)}function c2(n,t){n.uniform1uiv(this.addr,t)}function l2(n,t){n.uniform2uiv(this.addr,t)}function h2(n,t){n.uniform3uiv(this.addr,t)}function u2(n,t){n.uniform4uiv(this.addr,t)}function d2(n,t,e){const i=this.cache,s=t.length,r=Tc(e,s);Ze(i,r)||(n.uniform1iv(this.addr,r),Je(i,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||h0,r[a])}function f2(n,t,e){const i=this.cache,s=t.length,r=Tc(e,s);Ze(i,r)||(n.uniform1iv(this.addr,r),Je(i,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||f0,r[a])}function p2(n,t,e){const i=this.cache,s=t.length,r=Tc(e,s);Ze(i,r)||(n.uniform1iv(this.addr,r),Je(i,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||p0,r[a])}function m2(n,t,e){const i=this.cache,s=t.length,r=Tc(e,s);Ze(i,r)||(n.uniform1iv(this.addr,r),Je(i,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||d0,r[a])}function g2(n){switch(n){case 5126:return Jv;case 35664:return $v;case 35665:return Qv;case 35666:return t2;case 35674:return e2;case 35675:return n2;case 35676:return i2;case 5124:case 35670:return s2;case 35667:case 35671:return r2;case 35668:case 35672:return a2;case 35669:case 35673:return o2;case 5125:return c2;case 36294:return l2;case 36295:return h2;case 36296:return u2;case 35678:case 36198:case 36298:case 36306:case 35682:return d2;case 35679:case 36299:case 36307:return f2;case 35680:case 36300:case 36308:case 36293:return p2;case 36289:case 36303:case 36311:case 36292:return m2}}class _2{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Zv(e.type)}}class x2{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=g2(e.type)}}class v2{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],i)}}}const xl=/(\w+)(\])?(\[|\.)?/g;function Gd(n,t){n.seq.push(t),n.map[t.id]=t}function y2(n,t,e){const i=n.name,s=i.length;for(xl.lastIndex=0;;){const r=xl.exec(i),a=xl.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){Gd(e,l===void 0?new _2(o,n,t):new x2(o,n,t));break}else{let u=e.map[o];u===void 0&&(u=new v2(o),Gd(e,u)),e=u}}}class Xo{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);y2(r,a,this)}}setValue(t,e,i,s){const r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],c=i[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&i.push(a)}return i}}function Vd(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const M2=37297;let S2=0;function b2(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}function E2(n){const t=xe.getPrimaries(xe.workingColorSpace),e=xe.getPrimaries(n);let i;switch(t===e?i="":t===ic&&e===nc?i="LinearDisplayP3ToLinearSRGB":t===nc&&e===ic&&(i="LinearSRGBToLinearDisplayP3"),n){case Ci:case wc:return[i,"LinearTransferOETF"];case en:case Oh:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Wd(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+b2(n.getShaderSource(t),a)}else return s}function w2(n,t){const e=E2(t);return`vec4 ${n}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function T2(n,t){let e;switch(t){case yg:e="Linear";break;case Mg:e="Reinhard";break;case Sg:e="OptimizedCineon";break;case kp:e="ACESFilmic";break;case Eg:e="AgX";break;case bg:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function A2(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(lr).join(`
`)}function R2(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(lr).join(`
`)}function C2(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function L2(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(t,s),a=r.name;let o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:n.getAttribLocation(t,a),locationSize:o}}return e}function lr(n){return n!==""}function Xd(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function qd(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const P2=/^[ \t]*#include +<([\w\d./]+)>/gm;function nh(n){return n.replace(P2,D2)}const I2=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function D2(n,t){let e=te[t];if(e===void 0){const i=I2.get(t);if(i!==void 0)e=te[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return nh(e)}const N2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Yd(n){return n.replace(N2,U2)}function U2(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Kd(n){let t="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function O2(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===zp?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===Bp?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Mi&&(t="SHADOWMAP_TYPE_VSM"),t}function F2(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case br:case Er:t="ENVMAP_TYPE_CUBE";break;case bc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function z2(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Er:t="ENVMAP_MODE_REFRACTION";break}return t}function B2(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Sc:t="ENVMAP_BLENDING_MULTIPLY";break;case xg:t="ENVMAP_BLENDING_MIX";break;case vg:t="ENVMAP_BLENDING_ADD";break}return t}function k2(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function H2(n,t,e,i){const s=n.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const c=O2(e),l=F2(e),h=z2(e),u=B2(e),d=k2(e),f=e.isWebGL2?"":A2(e),m=R2(e),_=C2(r),g=s.createProgram();let p,v,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(lr).join(`
`),p.length>0&&(p+=`
`),v=[f,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(lr).join(`
`),v.length>0&&(v+=`
`)):(p=[Kd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(lr).join(`
`),v=[f,Kd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ki?"#define TONE_MAPPING":"",e.toneMapping!==Ki?te.tonemapping_pars_fragment:"",e.toneMapping!==Ki?T2("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",te.colorspace_pars_fragment,w2("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(lr).join(`
`)),a=nh(a),a=Xd(a,e),a=qd(a,e),o=nh(o),o=Xd(o,e),o=qd(o,e),a=Yd(a),o=Yd(o),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,p=[m,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,v=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===dd?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===dd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const y=x+p+a,T=x+v+o,b=Vd(s,s.VERTEX_SHADER,y),E=Vd(s,s.FRAGMENT_SHADER,T);s.attachShader(g,b),s.attachShader(g,E),e.index0AttributeName!==void 0?s.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function D(K){if(n.debug.checkShaderErrors){const tt=s.getProgramInfoLog(g).trim(),L=s.getShaderInfoLog(b).trim(),P=s.getShaderInfoLog(E).trim();let U=!0,F=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(U=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,g,b,E);else{const H=Wd(s,b,"vertex"),B=Wd(s,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Program Info Log: `+tt+`
`+H+`
`+B)}else tt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",tt):(L===""||P==="")&&(F=!1);F&&(K.diagnostics={runnable:U,programLog:tt,vertexShader:{log:L,prefix:p},fragmentShader:{log:P,prefix:v}})}s.deleteShader(b),s.deleteShader(E),M=new Xo(s,g),w=L2(s,g)}let M;this.getUniforms=function(){return M===void 0&&D(this),M};let w;this.getAttributes=function(){return w===void 0&&D(this),w};let O=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return O===!1&&(O=s.getProgramParameter(g,M2)),O},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=S2++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=b,this.fragmentShader=E,this}let G2=0;class V2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new W2(t),e.set(t,i)),i}}class W2{constructor(t){this.id=G2++,this.code=t,this.usedTimes=0}}function X2(n,t,e,i,s,r,a){const o=new zh,c=new V2,l=[],h=s.isWebGL2,u=s.logarithmicDepthBuffer,d=s.vertexTextures;let f=s.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return M===0?"uv":`uv${M}`}function g(M,w,O,K,tt){const L=K.fog,P=tt.geometry,U=M.isMeshStandardMaterial?K.environment:null,F=(M.isMeshStandardMaterial?e:t).get(M.envMap||U),H=F&&F.mapping===bc?F.image.height:null,B=m[M.type];M.precision!==null&&(f=s.getMaxPrecision(M.precision),f!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",f,"instead."));const q=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,j=q!==void 0?q.length:0;let ut=0;P.morphAttributes.position!==void 0&&(ut=1),P.morphAttributes.normal!==void 0&&(ut=2),P.morphAttributes.color!==void 0&&(ut=3);let X,$,gt,Rt;if(B){const gn=ii[B];X=gn.vertexShader,$=gn.fragmentShader}else X=M.vertexShader,$=M.fragmentShader,c.update(M),gt=c.getVertexShaderID(M),Rt=c.getFragmentShaderID(M);const St=n.getRenderTarget(),Ft=tt.isInstancedMesh===!0,Yt=tt.isBatchedMesh===!0,Ct=!!M.map,Wt=!!M.matcap,I=!!F,dt=!!M.aoMap,J=!!M.lightMap,lt=!!M.bumpMap,Z=!!M.normalMap,Pt=!!M.displacementMap,vt=!!M.emissiveMap,A=!!M.metalnessMap,S=!!M.roughnessMap,k=M.anisotropy>0,at=M.clearcoat>0,it=M.iridescence>0,et=M.sheen>0,Tt=M.transmission>0,mt=k&&!!M.anisotropyMap,bt=at&&!!M.clearcoatMap,Nt=at&&!!M.clearcoatNormalMap,Jt=at&&!!M.clearcoatRoughnessMap,st=it&&!!M.iridescenceMap,he=it&&!!M.iridescenceThicknessMap,ce=et&&!!M.sheenColorMap,Xt=et&&!!M.sheenRoughnessMap,Dt=!!M.specularMap,Et=!!M.specularColorMap,Qt=!!M.specularIntensityMap,pe=Tt&&!!M.transmissionMap,Fe=Tt&&!!M.thicknessMap,ie=!!M.gradientMap,ft=!!M.alphaMap,N=M.alphaTest>0,_t=!!M.alphaHash,xt=!!M.extensions,zt=!!P.attributes.uv1,Ut=!!P.attributes.uv2,Se=!!P.attributes.uv3;let be=Ki;return M.toneMapped&&(St===null||St.isXRRenderTarget===!0)&&(be=n.toneMapping),{isWebGL2:h,shaderID:B,shaderType:M.type,shaderName:M.name,vertexShader:X,fragmentShader:$,defines:M.defines,customVertexShaderID:gt,customFragmentShaderID:Rt,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:f,batching:Yt,instancing:Ft,instancingColor:Ft&&tt.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:St===null?n.outputColorSpace:St.isXRRenderTarget===!0?St.texture.colorSpace:Ci,map:Ct,matcap:Wt,envMap:I,envMapMode:I&&F.mapping,envMapCubeUVHeight:H,aoMap:dt,lightMap:J,bumpMap:lt,normalMap:Z,displacementMap:d&&Pt,emissiveMap:vt,normalMapObjectSpace:Z&&M.normalMapType===Hg,normalMapTangentSpace:Z&&M.normalMapType===Ec,metalnessMap:A,roughnessMap:S,anisotropy:k,anisotropyMap:mt,clearcoat:at,clearcoatMap:bt,clearcoatNormalMap:Nt,clearcoatRoughnessMap:Jt,iridescence:it,iridescenceMap:st,iridescenceThicknessMap:he,sheen:et,sheenColorMap:ce,sheenRoughnessMap:Xt,specularMap:Dt,specularColorMap:Et,specularIntensityMap:Qt,transmission:Tt,transmissionMap:pe,thicknessMap:Fe,gradientMap:ie,opaque:M.transparent===!1&&M.blending===pr,alphaMap:ft,alphaTest:N,alphaHash:_t,combine:M.combine,mapUv:Ct&&_(M.map.channel),aoMapUv:dt&&_(M.aoMap.channel),lightMapUv:J&&_(M.lightMap.channel),bumpMapUv:lt&&_(M.bumpMap.channel),normalMapUv:Z&&_(M.normalMap.channel),displacementMapUv:Pt&&_(M.displacementMap.channel),emissiveMapUv:vt&&_(M.emissiveMap.channel),metalnessMapUv:A&&_(M.metalnessMap.channel),roughnessMapUv:S&&_(M.roughnessMap.channel),anisotropyMapUv:mt&&_(M.anisotropyMap.channel),clearcoatMapUv:bt&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:Nt&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Jt&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:st&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:he&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:ce&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:Xt&&_(M.sheenRoughnessMap.channel),specularMapUv:Dt&&_(M.specularMap.channel),specularColorMapUv:Et&&_(M.specularColorMap.channel),specularIntensityMapUv:Qt&&_(M.specularIntensityMap.channel),transmissionMapUv:pe&&_(M.transmissionMap.channel),thicknessMapUv:Fe&&_(M.thicknessMap.channel),alphaMapUv:ft&&_(M.alphaMap.channel),vertexTangents:!!P.attributes.tangent&&(Z||k),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,vertexUv1s:zt,vertexUv2s:Ut,vertexUv3s:Se,pointsUvs:tt.isPoints===!0&&!!P.attributes.uv&&(Ct||ft),fog:!!L,useFog:M.fog===!0,fogExp2:L&&L.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:tt.isSkinnedMesh===!0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:j,morphTextureStride:ut,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&O.length>0,shadowMapType:n.shadowMap.type,toneMapping:be,useLegacyLights:n._useLegacyLights,decodeVideoTexture:Ct&&M.map.isVideoTexture===!0&&xe.getTransfer(M.map.colorSpace)===Re,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Sn,flipSided:M.side===bn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:xt&&M.extensions.derivatives===!0,extensionFragDepth:xt&&M.extensions.fragDepth===!0,extensionDrawBuffers:xt&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:xt&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:xt&&M.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()}}function p(M){const w=[];if(M.shaderID?w.push(M.shaderID):(w.push(M.customVertexShaderID),w.push(M.customFragmentShaderID)),M.defines!==void 0)for(const O in M.defines)w.push(O),w.push(M.defines[O]);return M.isRawShaderMaterial===!1&&(v(w,M),x(w,M),w.push(n.outputColorSpace)),w.push(M.customProgramCacheKey),w.join()}function v(M,w){M.push(w.precision),M.push(w.outputColorSpace),M.push(w.envMapMode),M.push(w.envMapCubeUVHeight),M.push(w.mapUv),M.push(w.alphaMapUv),M.push(w.lightMapUv),M.push(w.aoMapUv),M.push(w.bumpMapUv),M.push(w.normalMapUv),M.push(w.displacementMapUv),M.push(w.emissiveMapUv),M.push(w.metalnessMapUv),M.push(w.roughnessMapUv),M.push(w.anisotropyMapUv),M.push(w.clearcoatMapUv),M.push(w.clearcoatNormalMapUv),M.push(w.clearcoatRoughnessMapUv),M.push(w.iridescenceMapUv),M.push(w.iridescenceThicknessMapUv),M.push(w.sheenColorMapUv),M.push(w.sheenRoughnessMapUv),M.push(w.specularMapUv),M.push(w.specularColorMapUv),M.push(w.specularIntensityMapUv),M.push(w.transmissionMapUv),M.push(w.thicknessMapUv),M.push(w.combine),M.push(w.fogExp2),M.push(w.sizeAttenuation),M.push(w.morphTargetsCount),M.push(w.morphAttributeCount),M.push(w.numDirLights),M.push(w.numPointLights),M.push(w.numSpotLights),M.push(w.numSpotLightMaps),M.push(w.numHemiLights),M.push(w.numRectAreaLights),M.push(w.numDirLightShadows),M.push(w.numPointLightShadows),M.push(w.numSpotLightShadows),M.push(w.numSpotLightShadowsWithMaps),M.push(w.numLightProbes),M.push(w.shadowMapType),M.push(w.toneMapping),M.push(w.numClippingPlanes),M.push(w.numClipIntersection),M.push(w.depthPacking)}function x(M,w){o.disableAll(),w.isWebGL2&&o.enable(0),w.supportsVertexTextures&&o.enable(1),w.instancing&&o.enable(2),w.instancingColor&&o.enable(3),w.matcap&&o.enable(4),w.envMap&&o.enable(5),w.normalMapObjectSpace&&o.enable(6),w.normalMapTangentSpace&&o.enable(7),w.clearcoat&&o.enable(8),w.iridescence&&o.enable(9),w.alphaTest&&o.enable(10),w.vertexColors&&o.enable(11),w.vertexAlphas&&o.enable(12),w.vertexUv1s&&o.enable(13),w.vertexUv2s&&o.enable(14),w.vertexUv3s&&o.enable(15),w.vertexTangents&&o.enable(16),w.anisotropy&&o.enable(17),w.alphaHash&&o.enable(18),w.batching&&o.enable(19),M.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.skinning&&o.enable(4),w.morphTargets&&o.enable(5),w.morphNormals&&o.enable(6),w.morphColors&&o.enable(7),w.premultipliedAlpha&&o.enable(8),w.shadowMapEnabled&&o.enable(9),w.useLegacyLights&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),M.push(o.mask)}function y(M){const w=m[M.type];let O;if(w){const K=ii[w];O=A1.clone(K.uniforms)}else O=M.uniforms;return O}function T(M,w){let O;for(let K=0,tt=l.length;K<tt;K++){const L=l[K];if(L.cacheKey===w){O=L,++O.usedTimes;break}}return O===void 0&&(O=new H2(n,w,M,r),l.push(O)),O}function b(M){if(--M.usedTimes===0){const w=l.indexOf(M);l[w]=l[l.length-1],l.pop(),M.destroy()}}function E(M){c.remove(M)}function D(){c.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:y,acquireProgram:T,releaseProgram:b,releaseShaderCache:E,programs:l,dispose:D}}function q2(){let n=new WeakMap;function t(r){let a=n.get(r);return a===void 0&&(a={},n.set(r,a)),a}function e(r){n.delete(r)}function i(r,a,o){n.get(r)[a]=o}function s(){n=new WeakMap}return{get:t,remove:e,update:i,dispose:s}}function Y2(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function jd(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Zd(){const n=[];let t=0;const e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function a(u,d,f,m,_,g){let p=n[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:m,renderOrder:u.renderOrder,z:_,group:g},n[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=m,p.renderOrder=u.renderOrder,p.z=_,p.group=g),t++,p}function o(u,d,f,m,_,g){const p=a(u,d,f,m,_,g);f.transmission>0?i.push(p):f.transparent===!0?s.push(p):e.push(p)}function c(u,d,f,m,_,g){const p=a(u,d,f,m,_,g);f.transmission>0?i.unshift(p):f.transparent===!0?s.unshift(p):e.unshift(p)}function l(u,d){e.length>1&&e.sort(u||Y2),i.length>1&&i.sort(d||jd),s.length>1&&s.sort(d||jd)}function h(){for(let u=t,d=n.length;u<d;u++){const f=n[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:o,unshift:c,finish:h,sort:l}}function K2(){let n=new WeakMap;function t(i,s){const r=n.get(i);let a;return r===void 0?(a=new Zd,n.set(i,[a])):s>=r.length?(a=new Zd,r.push(a)):a=r[s],a}function e(){n=new WeakMap}return{get:t,dispose:e}}function j2(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new C,color:new At};break;case"SpotLight":e={position:new C,direction:new C,color:new At,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new C,color:new At,distance:0,decay:0};break;case"HemisphereLight":e={direction:new C,skyColor:new At,groundColor:new At};break;case"RectAreaLight":e={color:new At,position:new C,halfWidth:new C,halfHeight:new C};break}return n[t.id]=e,e}}}function Z2(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let J2=0;function $2(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function Q2(n,t){const e=new j2,i=Z2(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new C);const r=new C,a=new Bt,o=new Bt;function c(h,u){let d=0,f=0,m=0;for(let K=0;K<9;K++)s.probe[K].set(0,0,0);let _=0,g=0,p=0,v=0,x=0,y=0,T=0,b=0,E=0,D=0,M=0;h.sort($2);const w=u===!0?Math.PI:1;for(let K=0,tt=h.length;K<tt;K++){const L=h[K],P=L.color,U=L.intensity,F=L.distance,H=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)d+=P.r*U*w,f+=P.g*U*w,m+=P.b*U*w;else if(L.isLightProbe){for(let B=0;B<9;B++)s.probe[B].addScaledVector(L.sh.coefficients[B],U);M++}else if(L.isDirectionalLight){const B=e.get(L);if(B.color.copy(L.color).multiplyScalar(L.intensity*w),L.castShadow){const q=L.shadow,j=i.get(L);j.shadowBias=q.bias,j.shadowNormalBias=q.normalBias,j.shadowRadius=q.radius,j.shadowMapSize=q.mapSize,s.directionalShadow[_]=j,s.directionalShadowMap[_]=H,s.directionalShadowMatrix[_]=L.shadow.matrix,y++}s.directional[_]=B,_++}else if(L.isSpotLight){const B=e.get(L);B.position.setFromMatrixPosition(L.matrixWorld),B.color.copy(P).multiplyScalar(U*w),B.distance=F,B.coneCos=Math.cos(L.angle),B.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),B.decay=L.decay,s.spot[p]=B;const q=L.shadow;if(L.map&&(s.spotLightMap[E]=L.map,E++,q.updateMatrices(L),L.castShadow&&D++),s.spotLightMatrix[p]=q.matrix,L.castShadow){const j=i.get(L);j.shadowBias=q.bias,j.shadowNormalBias=q.normalBias,j.shadowRadius=q.radius,j.shadowMapSize=q.mapSize,s.spotShadow[p]=j,s.spotShadowMap[p]=H,b++}p++}else if(L.isRectAreaLight){const B=e.get(L);B.color.copy(P).multiplyScalar(U),B.halfWidth.set(L.width*.5,0,0),B.halfHeight.set(0,L.height*.5,0),s.rectArea[v]=B,v++}else if(L.isPointLight){const B=e.get(L);if(B.color.copy(L.color).multiplyScalar(L.intensity*w),B.distance=L.distance,B.decay=L.decay,L.castShadow){const q=L.shadow,j=i.get(L);j.shadowBias=q.bias,j.shadowNormalBias=q.normalBias,j.shadowRadius=q.radius,j.shadowMapSize=q.mapSize,j.shadowCameraNear=q.camera.near,j.shadowCameraFar=q.camera.far,s.pointShadow[g]=j,s.pointShadowMap[g]=H,s.pointShadowMatrix[g]=L.shadow.matrix,T++}s.point[g]=B,g++}else if(L.isHemisphereLight){const B=e.get(L);B.skyColor.copy(L.color).multiplyScalar(U*w),B.groundColor.copy(L.groundColor).multiplyScalar(U*w),s.hemi[x]=B,x++}}v>0&&(t.isWebGL2?n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=pt.LTC_FLOAT_1,s.rectAreaLTC2=pt.LTC_FLOAT_2):(s.rectAreaLTC1=pt.LTC_HALF_1,s.rectAreaLTC2=pt.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=pt.LTC_FLOAT_1,s.rectAreaLTC2=pt.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=pt.LTC_HALF_1,s.rectAreaLTC2=pt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=d,s.ambient[1]=f,s.ambient[2]=m;const O=s.hash;(O.directionalLength!==_||O.pointLength!==g||O.spotLength!==p||O.rectAreaLength!==v||O.hemiLength!==x||O.numDirectionalShadows!==y||O.numPointShadows!==T||O.numSpotShadows!==b||O.numSpotMaps!==E||O.numLightProbes!==M)&&(s.directional.length=_,s.spot.length=p,s.rectArea.length=v,s.point.length=g,s.hemi.length=x,s.directionalShadow.length=y,s.directionalShadowMap.length=y,s.pointShadow.length=T,s.pointShadowMap.length=T,s.spotShadow.length=b,s.spotShadowMap.length=b,s.directionalShadowMatrix.length=y,s.pointShadowMatrix.length=T,s.spotLightMatrix.length=b+E-D,s.spotLightMap.length=E,s.numSpotLightShadowsWithMaps=D,s.numLightProbes=M,O.directionalLength=_,O.pointLength=g,O.spotLength=p,O.rectAreaLength=v,O.hemiLength=x,O.numDirectionalShadows=y,O.numPointShadows=T,O.numSpotShadows=b,O.numSpotMaps=E,O.numLightProbes=M,s.version=J2++)}function l(h,u){let d=0,f=0,m=0,_=0,g=0;const p=u.matrixWorldInverse;for(let v=0,x=h.length;v<x;v++){const y=h[v];if(y.isDirectionalLight){const T=s.directional[d];T.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(p),d++}else if(y.isSpotLight){const T=s.spot[m];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(p),T.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(p),m++}else if(y.isRectAreaLight){const T=s.rectArea[_];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(p),o.identity(),a.copy(y.matrixWorld),a.premultiply(p),o.extractRotation(a),T.halfWidth.set(y.width*.5,0,0),T.halfHeight.set(0,y.height*.5,0),T.halfWidth.applyMatrix4(o),T.halfHeight.applyMatrix4(o),_++}else if(y.isPointLight){const T=s.point[f];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(p),f++}else if(y.isHemisphereLight){const T=s.hemi[g];T.direction.setFromMatrixPosition(y.matrixWorld),T.direction.transformDirection(p),g++}}}return{setup:c,setupView:l,state:s}}function Jd(n,t){const e=new Q2(n,t),i=[],s=[];function r(){i.length=0,s.length=0}function a(u){i.push(u)}function o(u){s.push(u)}function c(u){e.setup(i,u)}function l(u){e.setupView(i,u)}return{init:r,state:{lightsArray:i,shadowsArray:s,lights:e},setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function ty(n,t){let e=new WeakMap;function i(r,a=0){const o=e.get(r);let c;return o===void 0?(c=new Jd(n,t),e.set(r,[c])):a>=o.length?(c=new Jd(n,t),o.push(c)):c=o[a],c}function s(){e=new WeakMap}return{get:i,dispose:s}}class ey extends hi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Bg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class ny extends hi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const iy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,sy=`uniform sampler2D shadow_pass;
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
}`;function ry(n,t,e){let i=new Bh;const s=new nt,r=new nt,a=new ye,o=new ey({depthPacking:kg}),c=new ny,l={},h=e.maxTextureSize,u={[Qi]:bn,[bn]:Qi,[Sn]:Sn},d=new ts({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new nt},radius:{value:4}},vertexShader:iy,fragmentShader:sy}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const m=new Ne;m.setAttribute("position",new An(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Me(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=zp;let p=this.type;this.render=function(b,E,D){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||b.length===0)return;const M=n.getRenderTarget(),w=n.getActiveCubeFace(),O=n.getActiveMipmapLevel(),K=n.state;K.setBlending(Yi),K.buffers.color.setClear(1,1,1,1),K.buffers.depth.setTest(!0),K.setScissorTest(!1);const tt=p!==Mi&&this.type===Mi,L=p===Mi&&this.type!==Mi;for(let P=0,U=b.length;P<U;P++){const F=b[P],H=F.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",F,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);const B=H.getFrameExtents();if(s.multiply(B),r.copy(H.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/B.x),s.x=r.x*B.x,H.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/B.y),s.y=r.y*B.y,H.mapSize.y=r.y)),H.map===null||tt===!0||L===!0){const j=this.type!==Mi?{minFilter:an,magFilter:an}:{};H.map!==null&&H.map.dispose(),H.map=new Ms(s.x,s.y,j),H.map.texture.name=F.name+".shadowMap",H.camera.updateProjectionMatrix()}n.setRenderTarget(H.map),n.clear();const q=H.getViewportCount();for(let j=0;j<q;j++){const ut=H.getViewport(j);a.set(r.x*ut.x,r.y*ut.y,r.x*ut.z,r.y*ut.w),K.viewport(a),H.updateMatrices(F,j),i=H.getFrustum(),y(E,D,H.camera,F,this.type)}H.isPointLightShadow!==!0&&this.type===Mi&&v(H,D),H.needsUpdate=!1}p=this.type,g.needsUpdate=!1,n.setRenderTarget(M,w,O)};function v(b,E){const D=t.update(_);d.defines.VSM_SAMPLES!==b.blurSamples&&(d.defines.VSM_SAMPLES=b.blurSamples,f.defines.VSM_SAMPLES=b.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Ms(s.x,s.y)),d.uniforms.shadow_pass.value=b.map.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,n.setRenderTarget(b.mapPass),n.clear(),n.renderBufferDirect(E,null,D,d,_,null),f.uniforms.shadow_pass.value=b.mapPass.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,n.setRenderTarget(b.map),n.clear(),n.renderBufferDirect(E,null,D,f,_,null)}function x(b,E,D,M){let w=null;const O=D.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(O!==void 0)w=O;else if(w=D.isPointLight===!0?c:o,n.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const K=w.uuid,tt=E.uuid;let L=l[K];L===void 0&&(L={},l[K]=L);let P=L[tt];P===void 0&&(P=w.clone(),L[tt]=P,E.addEventListener("dispose",T)),w=P}if(w.visible=E.visible,w.wireframe=E.wireframe,M===Mi?w.side=E.shadowSide!==null?E.shadowSide:E.side:w.side=E.shadowSide!==null?E.shadowSide:u[E.side],w.alphaMap=E.alphaMap,w.alphaTest=E.alphaTest,w.map=E.map,w.clipShadows=E.clipShadows,w.clippingPlanes=E.clippingPlanes,w.clipIntersection=E.clipIntersection,w.displacementMap=E.displacementMap,w.displacementScale=E.displacementScale,w.displacementBias=E.displacementBias,w.wireframeLinewidth=E.wireframeLinewidth,w.linewidth=E.linewidth,D.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const K=n.properties.get(w);K.light=D}return w}function y(b,E,D,M,w){if(b.visible===!1)return;if(b.layers.test(E.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&w===Mi)&&(!b.frustumCulled||i.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,b.matrixWorld);const tt=t.update(b),L=b.material;if(Array.isArray(L)){const P=tt.groups;for(let U=0,F=P.length;U<F;U++){const H=P[U],B=L[H.materialIndex];if(B&&B.visible){const q=x(b,B,M,w);b.onBeforeShadow(n,b,E,D,tt,q,H),n.renderBufferDirect(D,null,tt,q,b,H),b.onAfterShadow(n,b,E,D,tt,q,H)}}}else if(L.visible){const P=x(b,L,M,w);b.onBeforeShadow(n,b,E,D,tt,P,null),n.renderBufferDirect(D,null,tt,P,b,null),b.onAfterShadow(n,b,E,D,tt,P,null)}}const K=b.children;for(let tt=0,L=K.length;tt<L;tt++)y(K[tt],E,D,M,w)}function T(b){b.target.removeEventListener("dispose",T);for(const D in l){const M=l[D],w=b.target.uuid;w in M&&(M[w].dispose(),delete M[w])}}}function ay(n,t,e){const i=e.isWebGL2;function s(){let N=!1;const _t=new ye;let xt=null;const zt=new ye(0,0,0,0);return{setMask:function(Ut){xt!==Ut&&!N&&(n.colorMask(Ut,Ut,Ut,Ut),xt=Ut)},setLocked:function(Ut){N=Ut},setClear:function(Ut,Se,be,$e,gn){gn===!0&&(Ut*=$e,Se*=$e,be*=$e),_t.set(Ut,Se,be,$e),zt.equals(_t)===!1&&(n.clearColor(Ut,Se,be,$e),zt.copy(_t))},reset:function(){N=!1,xt=null,zt.set(-1,0,0,0)}}}function r(){let N=!1,_t=null,xt=null,zt=null;return{setTest:function(Ut){Ut?Yt(n.DEPTH_TEST):Ct(n.DEPTH_TEST)},setMask:function(Ut){_t!==Ut&&!N&&(n.depthMask(Ut),_t=Ut)},setFunc:function(Ut){if(xt!==Ut){switch(Ut){case ug:n.depthFunc(n.NEVER);break;case dg:n.depthFunc(n.ALWAYS);break;case fg:n.depthFunc(n.LESS);break;case Jo:n.depthFunc(n.LEQUAL);break;case pg:n.depthFunc(n.EQUAL);break;case mg:n.depthFunc(n.GEQUAL);break;case gg:n.depthFunc(n.GREATER);break;case _g:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}xt=Ut}},setLocked:function(Ut){N=Ut},setClear:function(Ut){zt!==Ut&&(n.clearDepth(Ut),zt=Ut)},reset:function(){N=!1,_t=null,xt=null,zt=null}}}function a(){let N=!1,_t=null,xt=null,zt=null,Ut=null,Se=null,be=null,$e=null,gn=null;return{setTest:function(Ee){N||(Ee?Yt(n.STENCIL_TEST):Ct(n.STENCIL_TEST))},setMask:function(Ee){_t!==Ee&&!N&&(n.stencilMask(Ee),_t=Ee)},setFunc:function(Ee,_n,ei){(xt!==Ee||zt!==_n||Ut!==ei)&&(n.stencilFunc(Ee,_n,ei),xt=Ee,zt=_n,Ut=ei)},setOp:function(Ee,_n,ei){(Se!==Ee||be!==_n||$e!==ei)&&(n.stencilOp(Ee,_n,ei),Se=Ee,be=_n,$e=ei)},setLocked:function(Ee){N=Ee},setClear:function(Ee){gn!==Ee&&(n.clearStencil(Ee),gn=Ee)},reset:function(){N=!1,_t=null,xt=null,zt=null,Ut=null,Se=null,be=null,$e=null,gn=null}}}const o=new s,c=new r,l=new a,h=new WeakMap,u=new WeakMap;let d={},f={},m=new WeakMap,_=[],g=null,p=!1,v=null,x=null,y=null,T=null,b=null,E=null,D=null,M=new At(0,0,0),w=0,O=!1,K=null,tt=null,L=null,P=null,U=null;const F=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,B=0;const q=n.getParameter(n.VERSION);q.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(q)[1]),H=B>=1):q.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),H=B>=2);let j=null,ut={};const X=n.getParameter(n.SCISSOR_BOX),$=n.getParameter(n.VIEWPORT),gt=new ye().fromArray(X),Rt=new ye().fromArray($);function St(N,_t,xt,zt){const Ut=new Uint8Array(4),Se=n.createTexture();n.bindTexture(N,Se),n.texParameteri(N,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(N,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let be=0;be<xt;be++)i&&(N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY)?n.texImage3D(_t,0,n.RGBA,1,1,zt,0,n.RGBA,n.UNSIGNED_BYTE,Ut):n.texImage2D(_t+be,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ut);return Se}const Ft={};Ft[n.TEXTURE_2D]=St(n.TEXTURE_2D,n.TEXTURE_2D,1),Ft[n.TEXTURE_CUBE_MAP]=St(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Ft[n.TEXTURE_2D_ARRAY]=St(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Ft[n.TEXTURE_3D]=St(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),c.setClear(1),l.setClear(0),Yt(n.DEPTH_TEST),c.setFunc(Jo),vt(!1),A(Iu),Yt(n.CULL_FACE),Z(Yi);function Yt(N){d[N]!==!0&&(n.enable(N),d[N]=!0)}function Ct(N){d[N]!==!1&&(n.disable(N),d[N]=!1)}function Wt(N,_t){return f[N]!==_t?(n.bindFramebuffer(N,_t),f[N]=_t,i&&(N===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=_t),N===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=_t)),!0):!1}function I(N,_t){let xt=_,zt=!1;if(N)if(xt=m.get(_t),xt===void 0&&(xt=[],m.set(_t,xt)),N.isWebGLMultipleRenderTargets){const Ut=N.texture;if(xt.length!==Ut.length||xt[0]!==n.COLOR_ATTACHMENT0){for(let Se=0,be=Ut.length;Se<be;Se++)xt[Se]=n.COLOR_ATTACHMENT0+Se;xt.length=Ut.length,zt=!0}}else xt[0]!==n.COLOR_ATTACHMENT0&&(xt[0]=n.COLOR_ATTACHMENT0,zt=!0);else xt[0]!==n.BACK&&(xt[0]=n.BACK,zt=!0);zt&&(e.isWebGL2?n.drawBuffers(xt):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(xt))}function dt(N){return g!==N?(n.useProgram(N),g=N,!0):!1}const J={[ps]:n.FUNC_ADD,[Zm]:n.FUNC_SUBTRACT,[Jm]:n.FUNC_REVERSE_SUBTRACT};if(i)J[Uu]=n.MIN,J[Ou]=n.MAX;else{const N=t.get("EXT_blend_minmax");N!==null&&(J[Uu]=N.MIN_EXT,J[Ou]=N.MAX_EXT)}const lt={[$m]:n.ZERO,[Qm]:n.ONE,[tg]:n.SRC_COLOR,[Yl]:n.SRC_ALPHA,[ag]:n.SRC_ALPHA_SATURATE,[sg]:n.DST_COLOR,[ng]:n.DST_ALPHA,[eg]:n.ONE_MINUS_SRC_COLOR,[Kl]:n.ONE_MINUS_SRC_ALPHA,[rg]:n.ONE_MINUS_DST_COLOR,[ig]:n.ONE_MINUS_DST_ALPHA,[og]:n.CONSTANT_COLOR,[cg]:n.ONE_MINUS_CONSTANT_COLOR,[lg]:n.CONSTANT_ALPHA,[hg]:n.ONE_MINUS_CONSTANT_ALPHA};function Z(N,_t,xt,zt,Ut,Se,be,$e,gn,Ee){if(N===Yi){p===!0&&(Ct(n.BLEND),p=!1);return}if(p===!1&&(Yt(n.BLEND),p=!0),N!==jm){if(N!==v||Ee!==O){if((x!==ps||b!==ps)&&(n.blendEquation(n.FUNC_ADD),x=ps,b=ps),Ee)switch(N){case pr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ql:n.blendFunc(n.ONE,n.ONE);break;case Du:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Nu:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case pr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ql:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Du:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Nu:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}y=null,T=null,E=null,D=null,M.set(0,0,0),w=0,v=N,O=Ee}return}Ut=Ut||_t,Se=Se||xt,be=be||zt,(_t!==x||Ut!==b)&&(n.blendEquationSeparate(J[_t],J[Ut]),x=_t,b=Ut),(xt!==y||zt!==T||Se!==E||be!==D)&&(n.blendFuncSeparate(lt[xt],lt[zt],lt[Se],lt[be]),y=xt,T=zt,E=Se,D=be),($e.equals(M)===!1||gn!==w)&&(n.blendColor($e.r,$e.g,$e.b,gn),M.copy($e),w=gn),v=N,O=!1}function Pt(N,_t){N.side===Sn?Ct(n.CULL_FACE):Yt(n.CULL_FACE);let xt=N.side===bn;_t&&(xt=!xt),vt(xt),N.blending===pr&&N.transparent===!1?Z(Yi):Z(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),c.setFunc(N.depthFunc),c.setTest(N.depthTest),c.setMask(N.depthWrite),o.setMask(N.colorWrite);const zt=N.stencilWrite;l.setTest(zt),zt&&(l.setMask(N.stencilWriteMask),l.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),l.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),k(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?Yt(n.SAMPLE_ALPHA_TO_COVERAGE):Ct(n.SAMPLE_ALPHA_TO_COVERAGE)}function vt(N){K!==N&&(N?n.frontFace(n.CW):n.frontFace(n.CCW),K=N)}function A(N){N!==Ym?(Yt(n.CULL_FACE),N!==tt&&(N===Iu?n.cullFace(n.BACK):N===Km?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ct(n.CULL_FACE),tt=N}function S(N){N!==L&&(H&&n.lineWidth(N),L=N)}function k(N,_t,xt){N?(Yt(n.POLYGON_OFFSET_FILL),(P!==_t||U!==xt)&&(n.polygonOffset(_t,xt),P=_t,U=xt)):Ct(n.POLYGON_OFFSET_FILL)}function at(N){N?Yt(n.SCISSOR_TEST):Ct(n.SCISSOR_TEST)}function it(N){N===void 0&&(N=n.TEXTURE0+F-1),j!==N&&(n.activeTexture(N),j=N)}function et(N,_t,xt){xt===void 0&&(j===null?xt=n.TEXTURE0+F-1:xt=j);let zt=ut[xt];zt===void 0&&(zt={type:void 0,texture:void 0},ut[xt]=zt),(zt.type!==N||zt.texture!==_t)&&(j!==xt&&(n.activeTexture(xt),j=xt),n.bindTexture(N,_t||Ft[N]),zt.type=N,zt.texture=_t)}function Tt(){const N=ut[j];N!==void 0&&N.type!==void 0&&(n.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function mt(){try{n.compressedTexImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function bt(){try{n.compressedTexImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Nt(){try{n.texSubImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Jt(){try{n.texSubImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function st(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function he(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ce(){try{n.texStorage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Xt(){try{n.texStorage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Dt(){try{n.texImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Et(){try{n.texImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Qt(N){gt.equals(N)===!1&&(n.scissor(N.x,N.y,N.z,N.w),gt.copy(N))}function pe(N){Rt.equals(N)===!1&&(n.viewport(N.x,N.y,N.z,N.w),Rt.copy(N))}function Fe(N,_t){let xt=u.get(_t);xt===void 0&&(xt=new WeakMap,u.set(_t,xt));let zt=xt.get(N);zt===void 0&&(zt=n.getUniformBlockIndex(_t,N.name),xt.set(N,zt))}function ie(N,_t){const zt=u.get(_t).get(N);h.get(_t)!==zt&&(n.uniformBlockBinding(_t,zt,N.__bindingPointIndex),h.set(_t,zt))}function ft(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),d={},j=null,ut={},f={},m=new WeakMap,_=[],g=null,p=!1,v=null,x=null,y=null,T=null,b=null,E=null,D=null,M=new At(0,0,0),w=0,O=!1,K=null,tt=null,L=null,P=null,U=null,gt.set(0,0,n.canvas.width,n.canvas.height),Rt.set(0,0,n.canvas.width,n.canvas.height),o.reset(),c.reset(),l.reset()}return{buffers:{color:o,depth:c,stencil:l},enable:Yt,disable:Ct,bindFramebuffer:Wt,drawBuffers:I,useProgram:dt,setBlending:Z,setMaterial:Pt,setFlipSided:vt,setCullFace:A,setLineWidth:S,setPolygonOffset:k,setScissorTest:at,activeTexture:it,bindTexture:et,unbindTexture:Tt,compressedTexImage2D:mt,compressedTexImage3D:bt,texImage2D:Dt,texImage3D:Et,updateUBOMapping:Fe,uniformBlockBinding:ie,texStorage2D:ce,texStorage3D:Xt,texSubImage2D:Nt,texSubImage3D:Jt,compressedTexSubImage2D:st,compressedTexSubImage3D:he,scissor:Qt,viewport:pe,reset:ft}}function oy(n,t,e,i,s,r,a){const o=s.isWebGL2,c=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(A,S){return f?new OffscreenCanvas(A,S):ma("canvas")}function _(A,S,k,at){let it=1;if((A.width>at||A.height>at)&&(it=at/Math.max(A.width,A.height)),it<1||S===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const et=S?rc:Math.floor,Tt=et(it*A.width),mt=et(it*A.height);u===void 0&&(u=m(Tt,mt));const bt=k?m(Tt,mt):u;return bt.width=Tt,bt.height=mt,bt.getContext("2d").drawImage(A,0,0,Tt,mt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+Tt+"x"+mt+")."),bt}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function g(A){return eh(A.width)&&eh(A.height)}function p(A){return o?!1:A.wrapS!==$n||A.wrapT!==$n||A.minFilter!==an&&A.minFilter!==zn}function v(A,S){return A.generateMipmaps&&S&&A.minFilter!==an&&A.minFilter!==zn}function x(A){n.generateMipmap(A)}function y(A,S,k,at,it=!1){if(o===!1)return S;if(A!==null){if(n[A]!==void 0)return n[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let et=S;if(S===n.RED&&(k===n.FLOAT&&(et=n.R32F),k===n.HALF_FLOAT&&(et=n.R16F),k===n.UNSIGNED_BYTE&&(et=n.R8)),S===n.RED_INTEGER&&(k===n.UNSIGNED_BYTE&&(et=n.R8UI),k===n.UNSIGNED_SHORT&&(et=n.R16UI),k===n.UNSIGNED_INT&&(et=n.R32UI),k===n.BYTE&&(et=n.R8I),k===n.SHORT&&(et=n.R16I),k===n.INT&&(et=n.R32I)),S===n.RG&&(k===n.FLOAT&&(et=n.RG32F),k===n.HALF_FLOAT&&(et=n.RG16F),k===n.UNSIGNED_BYTE&&(et=n.RG8)),S===n.RGBA){const Tt=it?ec:xe.getTransfer(at);k===n.FLOAT&&(et=n.RGBA32F),k===n.HALF_FLOAT&&(et=n.RGBA16F),k===n.UNSIGNED_BYTE&&(et=Tt===Re?n.SRGB8_ALPHA8:n.RGBA8),k===n.UNSIGNED_SHORT_4_4_4_4&&(et=n.RGBA4),k===n.UNSIGNED_SHORT_5_5_5_1&&(et=n.RGB5_A1)}return(et===n.R16F||et===n.R32F||et===n.RG16F||et===n.RG32F||et===n.RGBA16F||et===n.RGBA32F)&&t.get("EXT_color_buffer_float"),et}function T(A,S,k){return v(A,k)===!0||A.isFramebufferTexture&&A.minFilter!==an&&A.minFilter!==zn?Math.log2(Math.max(S.width,S.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?S.mipmaps.length:1}function b(A){return A===an||A===zu||A===Wc?n.NEAREST:n.LINEAR}function E(A){const S=A.target;S.removeEventListener("dispose",E),M(S),S.isVideoTexture&&h.delete(S)}function D(A){const S=A.target;S.removeEventListener("dispose",D),O(S)}function M(A){const S=i.get(A);if(S.__webglInit===void 0)return;const k=A.source,at=d.get(k);if(at){const it=at[S.__cacheKey];it.usedTimes--,it.usedTimes===0&&w(A),Object.keys(at).length===0&&d.delete(k)}i.remove(A)}function w(A){const S=i.get(A);n.deleteTexture(S.__webglTexture);const k=A.source,at=d.get(k);delete at[S.__cacheKey],a.memory.textures--}function O(A){const S=A.texture,k=i.get(A),at=i.get(S);if(at.__webglTexture!==void 0&&(n.deleteTexture(at.__webglTexture),a.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let it=0;it<6;it++){if(Array.isArray(k.__webglFramebuffer[it]))for(let et=0;et<k.__webglFramebuffer[it].length;et++)n.deleteFramebuffer(k.__webglFramebuffer[it][et]);else n.deleteFramebuffer(k.__webglFramebuffer[it]);k.__webglDepthbuffer&&n.deleteRenderbuffer(k.__webglDepthbuffer[it])}else{if(Array.isArray(k.__webglFramebuffer))for(let it=0;it<k.__webglFramebuffer.length;it++)n.deleteFramebuffer(k.__webglFramebuffer[it]);else n.deleteFramebuffer(k.__webglFramebuffer);if(k.__webglDepthbuffer&&n.deleteRenderbuffer(k.__webglDepthbuffer),k.__webglMultisampledFramebuffer&&n.deleteFramebuffer(k.__webglMultisampledFramebuffer),k.__webglColorRenderbuffer)for(let it=0;it<k.__webglColorRenderbuffer.length;it++)k.__webglColorRenderbuffer[it]&&n.deleteRenderbuffer(k.__webglColorRenderbuffer[it]);k.__webglDepthRenderbuffer&&n.deleteRenderbuffer(k.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let it=0,et=S.length;it<et;it++){const Tt=i.get(S[it]);Tt.__webglTexture&&(n.deleteTexture(Tt.__webglTexture),a.memory.textures--),i.remove(S[it])}i.remove(S),i.remove(A)}let K=0;function tt(){K=0}function L(){const A=K;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),K+=1,A}function P(A){const S=[];return S.push(A.wrapS),S.push(A.wrapT),S.push(A.wrapR||0),S.push(A.magFilter),S.push(A.minFilter),S.push(A.anisotropy),S.push(A.internalFormat),S.push(A.format),S.push(A.type),S.push(A.generateMipmaps),S.push(A.premultiplyAlpha),S.push(A.flipY),S.push(A.unpackAlignment),S.push(A.colorSpace),S.join()}function U(A,S){const k=i.get(A);if(A.isVideoTexture&&Pt(A),A.isRenderTargetTexture===!1&&A.version>0&&k.__version!==A.version){const at=A.image;if(at===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(at.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{gt(k,A,S);return}}e.bindTexture(n.TEXTURE_2D,k.__webglTexture,n.TEXTURE0+S)}function F(A,S){const k=i.get(A);if(A.version>0&&k.__version!==A.version){gt(k,A,S);return}e.bindTexture(n.TEXTURE_2D_ARRAY,k.__webglTexture,n.TEXTURE0+S)}function H(A,S){const k=i.get(A);if(A.version>0&&k.__version!==A.version){gt(k,A,S);return}e.bindTexture(n.TEXTURE_3D,k.__webglTexture,n.TEXTURE0+S)}function B(A,S){const k=i.get(A);if(A.version>0&&k.__version!==A.version){Rt(k,A,S);return}e.bindTexture(n.TEXTURE_CUBE_MAP,k.__webglTexture,n.TEXTURE0+S)}const q={[Jl]:n.REPEAT,[$n]:n.CLAMP_TO_EDGE,[$l]:n.MIRRORED_REPEAT},j={[an]:n.NEAREST,[zu]:n.NEAREST_MIPMAP_NEAREST,[Wc]:n.NEAREST_MIPMAP_LINEAR,[zn]:n.LINEAR,[Tg]:n.LINEAR_MIPMAP_NEAREST,[fa]:n.LINEAR_MIPMAP_LINEAR},ut={[Gg]:n.NEVER,[Kg]:n.ALWAYS,[Vg]:n.LESS,[Zp]:n.LEQUAL,[Wg]:n.EQUAL,[Yg]:n.GEQUAL,[Xg]:n.GREATER,[qg]:n.NOTEQUAL};function X(A,S,k){if(k?(n.texParameteri(A,n.TEXTURE_WRAP_S,q[S.wrapS]),n.texParameteri(A,n.TEXTURE_WRAP_T,q[S.wrapT]),(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)&&n.texParameteri(A,n.TEXTURE_WRAP_R,q[S.wrapR]),n.texParameteri(A,n.TEXTURE_MAG_FILTER,j[S.magFilter]),n.texParameteri(A,n.TEXTURE_MIN_FILTER,j[S.minFilter])):(n.texParameteri(A,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(A,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)&&n.texParameteri(A,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(S.wrapS!==$n||S.wrapT!==$n)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(A,n.TEXTURE_MAG_FILTER,b(S.magFilter)),n.texParameteri(A,n.TEXTURE_MIN_FILTER,b(S.minFilter)),S.minFilter!==an&&S.minFilter!==zn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),S.compareFunction&&(n.texParameteri(A,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(A,n.TEXTURE_COMPARE_FUNC,ut[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const at=t.get("EXT_texture_filter_anisotropic");if(S.magFilter===an||S.minFilter!==Wc&&S.minFilter!==fa||S.type===Ti&&t.has("OES_texture_float_linear")===!1||o===!1&&S.type===pa&&t.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||i.get(S).__currentAnisotropy)&&(n.texParameterf(A,at.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy)}}function $(A,S){let k=!1;A.__webglInit===void 0&&(A.__webglInit=!0,S.addEventListener("dispose",E));const at=S.source;let it=d.get(at);it===void 0&&(it={},d.set(at,it));const et=P(S);if(et!==A.__cacheKey){it[et]===void 0&&(it[et]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,k=!0),it[et].usedTimes++;const Tt=it[A.__cacheKey];Tt!==void 0&&(it[A.__cacheKey].usedTimes--,Tt.usedTimes===0&&w(S)),A.__cacheKey=et,A.__webglTexture=it[et].texture}return k}function gt(A,S,k){let at=n.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(at=n.TEXTURE_2D_ARRAY),S.isData3DTexture&&(at=n.TEXTURE_3D);const it=$(A,S),et=S.source;e.bindTexture(at,A.__webglTexture,n.TEXTURE0+k);const Tt=i.get(et);if(et.version!==Tt.__version||it===!0){e.activeTexture(n.TEXTURE0+k);const mt=xe.getPrimaries(xe.workingColorSpace),bt=S.colorSpace===Hn?null:xe.getPrimaries(S.colorSpace),Nt=S.colorSpace===Hn||mt===bt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Nt);const Jt=p(S)&&g(S.image)===!1;let st=_(S.image,Jt,!1,s.maxTextureSize);st=vt(S,st);const he=g(st)||o,ce=r.convert(S.format,S.colorSpace);let Xt=r.convert(S.type),Dt=y(S.internalFormat,ce,Xt,S.colorSpace,S.isVideoTexture);X(at,S,he);let Et;const Qt=S.mipmaps,pe=o&&S.isVideoTexture!==!0&&Dt!==Kp,Fe=Tt.__version===void 0||it===!0,ie=T(S,st,he);if(S.isDepthTexture)Dt=n.DEPTH_COMPONENT,o?S.type===Ti?Dt=n.DEPTH_COMPONENT32F:S.type===Wi?Dt=n.DEPTH_COMPONENT24:S.type===_s?Dt=n.DEPTH24_STENCIL8:Dt=n.DEPTH_COMPONENT16:S.type===Ti&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===xs&&Dt===n.DEPTH_COMPONENT&&S.type!==Nh&&S.type!==Wi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=Wi,Xt=r.convert(S.type)),S.format===wr&&Dt===n.DEPTH_COMPONENT&&(Dt=n.DEPTH_STENCIL,S.type!==_s&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=_s,Xt=r.convert(S.type))),Fe&&(pe?e.texStorage2D(n.TEXTURE_2D,1,Dt,st.width,st.height):e.texImage2D(n.TEXTURE_2D,0,Dt,st.width,st.height,0,ce,Xt,null));else if(S.isDataTexture)if(Qt.length>0&&he){pe&&Fe&&e.texStorage2D(n.TEXTURE_2D,ie,Dt,Qt[0].width,Qt[0].height);for(let ft=0,N=Qt.length;ft<N;ft++)Et=Qt[ft],pe?e.texSubImage2D(n.TEXTURE_2D,ft,0,0,Et.width,Et.height,ce,Xt,Et.data):e.texImage2D(n.TEXTURE_2D,ft,Dt,Et.width,Et.height,0,ce,Xt,Et.data);S.generateMipmaps=!1}else pe?(Fe&&e.texStorage2D(n.TEXTURE_2D,ie,Dt,st.width,st.height),e.texSubImage2D(n.TEXTURE_2D,0,0,0,st.width,st.height,ce,Xt,st.data)):e.texImage2D(n.TEXTURE_2D,0,Dt,st.width,st.height,0,ce,Xt,st.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){pe&&Fe&&e.texStorage3D(n.TEXTURE_2D_ARRAY,ie,Dt,Qt[0].width,Qt[0].height,st.depth);for(let ft=0,N=Qt.length;ft<N;ft++)Et=Qt[ft],S.format!==kn?ce!==null?pe?e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ft,0,0,0,Et.width,Et.height,st.depth,ce,Et.data,0,0):e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ft,Dt,Et.width,Et.height,st.depth,0,Et.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):pe?e.texSubImage3D(n.TEXTURE_2D_ARRAY,ft,0,0,0,Et.width,Et.height,st.depth,ce,Xt,Et.data):e.texImage3D(n.TEXTURE_2D_ARRAY,ft,Dt,Et.width,Et.height,st.depth,0,ce,Xt,Et.data)}else{pe&&Fe&&e.texStorage2D(n.TEXTURE_2D,ie,Dt,Qt[0].width,Qt[0].height);for(let ft=0,N=Qt.length;ft<N;ft++)Et=Qt[ft],S.format!==kn?ce!==null?pe?e.compressedTexSubImage2D(n.TEXTURE_2D,ft,0,0,Et.width,Et.height,ce,Et.data):e.compressedTexImage2D(n.TEXTURE_2D,ft,Dt,Et.width,Et.height,0,Et.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):pe?e.texSubImage2D(n.TEXTURE_2D,ft,0,0,Et.width,Et.height,ce,Xt,Et.data):e.texImage2D(n.TEXTURE_2D,ft,Dt,Et.width,Et.height,0,ce,Xt,Et.data)}else if(S.isDataArrayTexture)pe?(Fe&&e.texStorage3D(n.TEXTURE_2D_ARRAY,ie,Dt,st.width,st.height,st.depth),e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,st.width,st.height,st.depth,ce,Xt,st.data)):e.texImage3D(n.TEXTURE_2D_ARRAY,0,Dt,st.width,st.height,st.depth,0,ce,Xt,st.data);else if(S.isData3DTexture)pe?(Fe&&e.texStorage3D(n.TEXTURE_3D,ie,Dt,st.width,st.height,st.depth),e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,st.width,st.height,st.depth,ce,Xt,st.data)):e.texImage3D(n.TEXTURE_3D,0,Dt,st.width,st.height,st.depth,0,ce,Xt,st.data);else if(S.isFramebufferTexture){if(Fe)if(pe)e.texStorage2D(n.TEXTURE_2D,ie,Dt,st.width,st.height);else{let ft=st.width,N=st.height;for(let _t=0;_t<ie;_t++)e.texImage2D(n.TEXTURE_2D,_t,Dt,ft,N,0,ce,Xt,null),ft>>=1,N>>=1}}else if(Qt.length>0&&he){pe&&Fe&&e.texStorage2D(n.TEXTURE_2D,ie,Dt,Qt[0].width,Qt[0].height);for(let ft=0,N=Qt.length;ft<N;ft++)Et=Qt[ft],pe?e.texSubImage2D(n.TEXTURE_2D,ft,0,0,ce,Xt,Et):e.texImage2D(n.TEXTURE_2D,ft,Dt,ce,Xt,Et);S.generateMipmaps=!1}else pe?(Fe&&e.texStorage2D(n.TEXTURE_2D,ie,Dt,st.width,st.height),e.texSubImage2D(n.TEXTURE_2D,0,0,0,ce,Xt,st)):e.texImage2D(n.TEXTURE_2D,0,Dt,ce,Xt,st);v(S,he)&&x(at),Tt.__version=et.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function Rt(A,S,k){if(S.image.length!==6)return;const at=$(A,S),it=S.source;e.bindTexture(n.TEXTURE_CUBE_MAP,A.__webglTexture,n.TEXTURE0+k);const et=i.get(it);if(it.version!==et.__version||at===!0){e.activeTexture(n.TEXTURE0+k);const Tt=xe.getPrimaries(xe.workingColorSpace),mt=S.colorSpace===Hn?null:xe.getPrimaries(S.colorSpace),bt=S.colorSpace===Hn||Tt===mt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,bt);const Nt=S.isCompressedTexture||S.image[0].isCompressedTexture,Jt=S.image[0]&&S.image[0].isDataTexture,st=[];for(let ft=0;ft<6;ft++)!Nt&&!Jt?st[ft]=_(S.image[ft],!1,!0,s.maxCubemapSize):st[ft]=Jt?S.image[ft].image:S.image[ft],st[ft]=vt(S,st[ft]);const he=st[0],ce=g(he)||o,Xt=r.convert(S.format,S.colorSpace),Dt=r.convert(S.type),Et=y(S.internalFormat,Xt,Dt,S.colorSpace),Qt=o&&S.isVideoTexture!==!0,pe=et.__version===void 0||at===!0;let Fe=T(S,he,ce);X(n.TEXTURE_CUBE_MAP,S,ce);let ie;if(Nt){Qt&&pe&&e.texStorage2D(n.TEXTURE_CUBE_MAP,Fe,Et,he.width,he.height);for(let ft=0;ft<6;ft++){ie=st[ft].mipmaps;for(let N=0;N<ie.length;N++){const _t=ie[N];S.format!==kn?Xt!==null?Qt?e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,N,0,0,_t.width,_t.height,Xt,_t.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,N,Et,_t.width,_t.height,0,_t.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Qt?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,N,0,0,_t.width,_t.height,Xt,Dt,_t.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,N,Et,_t.width,_t.height,0,Xt,Dt,_t.data)}}}else{ie=S.mipmaps,Qt&&pe&&(ie.length>0&&Fe++,e.texStorage2D(n.TEXTURE_CUBE_MAP,Fe,Et,st[0].width,st[0].height));for(let ft=0;ft<6;ft++)if(Jt){Qt?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,0,0,st[ft].width,st[ft].height,Xt,Dt,st[ft].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,Et,st[ft].width,st[ft].height,0,Xt,Dt,st[ft].data);for(let N=0;N<ie.length;N++){const xt=ie[N].image[ft].image;Qt?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,N+1,0,0,xt.width,xt.height,Xt,Dt,xt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,N+1,Et,xt.width,xt.height,0,Xt,Dt,xt.data)}}else{Qt?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,0,0,Xt,Dt,st[ft]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,Et,Xt,Dt,st[ft]);for(let N=0;N<ie.length;N++){const _t=ie[N];Qt?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,N+1,0,0,Xt,Dt,_t.image[ft]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,N+1,Et,Xt,Dt,_t.image[ft])}}}v(S,ce)&&x(n.TEXTURE_CUBE_MAP),et.__version=it.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function St(A,S,k,at,it,et){const Tt=r.convert(k.format,k.colorSpace),mt=r.convert(k.type),bt=y(k.internalFormat,Tt,mt,k.colorSpace);if(!i.get(S).__hasExternalTextures){const Jt=Math.max(1,S.width>>et),st=Math.max(1,S.height>>et);it===n.TEXTURE_3D||it===n.TEXTURE_2D_ARRAY?e.texImage3D(it,et,bt,Jt,st,S.depth,0,Tt,mt,null):e.texImage2D(it,et,bt,Jt,st,0,Tt,mt,null)}e.bindFramebuffer(n.FRAMEBUFFER,A),Z(S)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,at,it,i.get(k).__webglTexture,0,lt(S)):(it===n.TEXTURE_2D||it>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&it<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,at,it,i.get(k).__webglTexture,et),e.bindFramebuffer(n.FRAMEBUFFER,null)}function Ft(A,S,k){if(n.bindRenderbuffer(n.RENDERBUFFER,A),S.depthBuffer&&!S.stencilBuffer){let at=o===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(k||Z(S)){const it=S.depthTexture;it&&it.isDepthTexture&&(it.type===Ti?at=n.DEPTH_COMPONENT32F:it.type===Wi&&(at=n.DEPTH_COMPONENT24));const et=lt(S);Z(S)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,et,at,S.width,S.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,et,at,S.width,S.height)}else n.renderbufferStorage(n.RENDERBUFFER,at,S.width,S.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,A)}else if(S.depthBuffer&&S.stencilBuffer){const at=lt(S);k&&Z(S)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,at,n.DEPTH24_STENCIL8,S.width,S.height):Z(S)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,at,n.DEPTH24_STENCIL8,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,A)}else{const at=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let it=0;it<at.length;it++){const et=at[it],Tt=r.convert(et.format,et.colorSpace),mt=r.convert(et.type),bt=y(et.internalFormat,Tt,mt,et.colorSpace),Nt=lt(S);k&&Z(S)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Nt,bt,S.width,S.height):Z(S)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Nt,bt,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,bt,S.width,S.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Yt(A,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,A),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),U(S.depthTexture,0);const at=i.get(S.depthTexture).__webglTexture,it=lt(S);if(S.depthTexture.format===xs)Z(S)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,at,0,it):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,at,0);else if(S.depthTexture.format===wr)Z(S)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,at,0,it):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,at,0);else throw new Error("Unknown depthTexture format")}function Ct(A){const S=i.get(A),k=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!S.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");Yt(S.__webglFramebuffer,A)}else if(k){S.__webglDepthbuffer=[];for(let at=0;at<6;at++)e.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[at]),S.__webglDepthbuffer[at]=n.createRenderbuffer(),Ft(S.__webglDepthbuffer[at],A,!1)}else e.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=n.createRenderbuffer(),Ft(S.__webglDepthbuffer,A,!1);e.bindFramebuffer(n.FRAMEBUFFER,null)}function Wt(A,S,k){const at=i.get(A);S!==void 0&&St(at.__webglFramebuffer,A,A.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),k!==void 0&&Ct(A)}function I(A){const S=A.texture,k=i.get(A),at=i.get(S);A.addEventListener("dispose",D),A.isWebGLMultipleRenderTargets!==!0&&(at.__webglTexture===void 0&&(at.__webglTexture=n.createTexture()),at.__version=S.version,a.memory.textures++);const it=A.isWebGLCubeRenderTarget===!0,et=A.isWebGLMultipleRenderTargets===!0,Tt=g(A)||o;if(it){k.__webglFramebuffer=[];for(let mt=0;mt<6;mt++)if(o&&S.mipmaps&&S.mipmaps.length>0){k.__webglFramebuffer[mt]=[];for(let bt=0;bt<S.mipmaps.length;bt++)k.__webglFramebuffer[mt][bt]=n.createFramebuffer()}else k.__webglFramebuffer[mt]=n.createFramebuffer()}else{if(o&&S.mipmaps&&S.mipmaps.length>0){k.__webglFramebuffer=[];for(let mt=0;mt<S.mipmaps.length;mt++)k.__webglFramebuffer[mt]=n.createFramebuffer()}else k.__webglFramebuffer=n.createFramebuffer();if(et)if(s.drawBuffers){const mt=A.texture;for(let bt=0,Nt=mt.length;bt<Nt;bt++){const Jt=i.get(mt[bt]);Jt.__webglTexture===void 0&&(Jt.__webglTexture=n.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&A.samples>0&&Z(A)===!1){const mt=et?S:[S];k.__webglMultisampledFramebuffer=n.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let bt=0;bt<mt.length;bt++){const Nt=mt[bt];k.__webglColorRenderbuffer[bt]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,k.__webglColorRenderbuffer[bt]);const Jt=r.convert(Nt.format,Nt.colorSpace),st=r.convert(Nt.type),he=y(Nt.internalFormat,Jt,st,Nt.colorSpace,A.isXRRenderTarget===!0),ce=lt(A);n.renderbufferStorageMultisample(n.RENDERBUFFER,ce,he,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+bt,n.RENDERBUFFER,k.__webglColorRenderbuffer[bt])}n.bindRenderbuffer(n.RENDERBUFFER,null),A.depthBuffer&&(k.__webglDepthRenderbuffer=n.createRenderbuffer(),Ft(k.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(it){e.bindTexture(n.TEXTURE_CUBE_MAP,at.__webglTexture),X(n.TEXTURE_CUBE_MAP,S,Tt);for(let mt=0;mt<6;mt++)if(o&&S.mipmaps&&S.mipmaps.length>0)for(let bt=0;bt<S.mipmaps.length;bt++)St(k.__webglFramebuffer[mt][bt],A,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+mt,bt);else St(k.__webglFramebuffer[mt],A,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0);v(S,Tt)&&x(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(et){const mt=A.texture;for(let bt=0,Nt=mt.length;bt<Nt;bt++){const Jt=mt[bt],st=i.get(Jt);e.bindTexture(n.TEXTURE_2D,st.__webglTexture),X(n.TEXTURE_2D,Jt,Tt),St(k.__webglFramebuffer,A,Jt,n.COLOR_ATTACHMENT0+bt,n.TEXTURE_2D,0),v(Jt,Tt)&&x(n.TEXTURE_2D)}e.unbindTexture()}else{let mt=n.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(o?mt=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(mt,at.__webglTexture),X(mt,S,Tt),o&&S.mipmaps&&S.mipmaps.length>0)for(let bt=0;bt<S.mipmaps.length;bt++)St(k.__webglFramebuffer[bt],A,S,n.COLOR_ATTACHMENT0,mt,bt);else St(k.__webglFramebuffer,A,S,n.COLOR_ATTACHMENT0,mt,0);v(S,Tt)&&x(mt),e.unbindTexture()}A.depthBuffer&&Ct(A)}function dt(A){const S=g(A)||o,k=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let at=0,it=k.length;at<it;at++){const et=k[at];if(v(et,S)){const Tt=A.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,mt=i.get(et).__webglTexture;e.bindTexture(Tt,mt),x(Tt),e.unbindTexture()}}}function J(A){if(o&&A.samples>0&&Z(A)===!1){const S=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],k=A.width,at=A.height;let it=n.COLOR_BUFFER_BIT;const et=[],Tt=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,mt=i.get(A),bt=A.isWebGLMultipleRenderTargets===!0;if(bt)for(let Nt=0;Nt<S.length;Nt++)e.bindFramebuffer(n.FRAMEBUFFER,mt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Nt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,mt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Nt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,mt.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,mt.__webglFramebuffer);for(let Nt=0;Nt<S.length;Nt++){et.push(n.COLOR_ATTACHMENT0+Nt),A.depthBuffer&&et.push(Tt);const Jt=mt.__ignoreDepthValues!==void 0?mt.__ignoreDepthValues:!1;if(Jt===!1&&(A.depthBuffer&&(it|=n.DEPTH_BUFFER_BIT),A.stencilBuffer&&(it|=n.STENCIL_BUFFER_BIT)),bt&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,mt.__webglColorRenderbuffer[Nt]),Jt===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[Tt]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[Tt])),bt){const st=i.get(S[Nt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,st,0)}n.blitFramebuffer(0,0,k,at,0,0,k,at,it,n.NEAREST),l&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,et)}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),bt)for(let Nt=0;Nt<S.length;Nt++){e.bindFramebuffer(n.FRAMEBUFFER,mt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Nt,n.RENDERBUFFER,mt.__webglColorRenderbuffer[Nt]);const Jt=i.get(S[Nt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,mt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Nt,n.TEXTURE_2D,Jt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,mt.__webglMultisampledFramebuffer)}}function lt(A){return Math.min(s.maxSamples,A.samples)}function Z(A){const S=i.get(A);return o&&A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Pt(A){const S=a.render.frame;h.get(A)!==S&&(h.set(A,S),A.update())}function vt(A,S){const k=A.colorSpace,at=A.format,it=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===th||k!==Ci&&k!==Hn&&(xe.getTransfer(k)===Re?o===!1?t.has("EXT_sRGB")===!0&&at===kn?(A.format=th,A.minFilter=zn,A.generateMipmaps=!1):S=$p.sRGBToLinear(S):(at!==kn||it!==ji)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),S}this.allocateTextureUnit=L,this.resetTextureUnits=tt,this.setTexture2D=U,this.setTexture2DArray=F,this.setTexture3D=H,this.setTextureCube=B,this.rebindTextures=Wt,this.setupRenderTarget=I,this.updateRenderTargetMipmap=dt,this.updateMultisampleRenderTarget=J,this.setupDepthRenderbuffer=Ct,this.setupFrameBufferTexture=St,this.useMultisampledRTT=Z}function cy(n,t,e){const i=e.isWebGL2;function s(r,a=Hn){let o;const c=xe.getTransfer(a);if(r===ji)return n.UNSIGNED_BYTE;if(r===Vp)return n.UNSIGNED_SHORT_4_4_4_4;if(r===Wp)return n.UNSIGNED_SHORT_5_5_5_1;if(r===Ag)return n.BYTE;if(r===Rg)return n.SHORT;if(r===Nh)return n.UNSIGNED_SHORT;if(r===Gp)return n.INT;if(r===Wi)return n.UNSIGNED_INT;if(r===Ti)return n.FLOAT;if(r===pa)return i?n.HALF_FLOAT:(o=t.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===Cg)return n.ALPHA;if(r===kn)return n.RGBA;if(r===Lg)return n.LUMINANCE;if(r===Pg)return n.LUMINANCE_ALPHA;if(r===xs)return n.DEPTH_COMPONENT;if(r===wr)return n.DEPTH_STENCIL;if(r===th)return o=t.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===Ig)return n.RED;if(r===Xp)return n.RED_INTEGER;if(r===Dg)return n.RG;if(r===qp)return n.RG_INTEGER;if(r===Yp)return n.RGBA_INTEGER;if(r===Xc||r===qc||r===Yc||r===Kc)if(c===Re)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===Xc)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===qc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Yc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Kc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===Xc)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===qc)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Yc)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Kc)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Bu||r===ku||r===Hu||r===Gu)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===Bu)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===ku)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Hu)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Gu)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Kp)return o=t.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Vu||r===Wu)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(r===Vu)return c===Re?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===Wu)return c===Re?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Xu||r===qu||r===Yu||r===Ku||r===ju||r===Zu||r===Ju||r===$u||r===Qu||r===td||r===ed||r===nd||r===id||r===sd)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(r===Xu)return c===Re?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===qu)return c===Re?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Yu)return c===Re?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Ku)return c===Re?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===ju)return c===Re?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Zu)return c===Re?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Ju)return c===Re?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===$u)return c===Re?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Qu)return c===Re?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===td)return c===Re?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===ed)return c===Re?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===nd)return c===Re?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===id)return c===Re?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===sd)return c===Re?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===jc||r===rd||r===ad)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(r===jc)return c===Re?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===rd)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===ad)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Ng||r===od||r===cd||r===ld)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(r===jc)return o.COMPRESSED_RED_RGTC1_EXT;if(r===od)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===cd)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===ld)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===_s?i?n.UNSIGNED_INT_24_8:(o=t.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):n[r]!==void 0?n[r]:null}return{convert:s}}class ly extends yn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class pn extends De{constructor(){super(),this.isGroup=!0,this.type="Group"}}const hy={type:"move"};class vl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new pn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new pn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new pn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(const _ of t.hand.values()){const g=e.getJointPose(_,i),p=this._getHandJoint(l,_);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,m=.005;l.inputState.pinching&&d>f+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=f-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(hy)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new pn;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}class uy extends ws{constructor(t,e){super();const i=this;let s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,m=null;const _=e.getContextAttributes();let g=null,p=null;const v=[],x=[],y=new nt;let T=null;const b=new yn;b.layers.enable(1),b.viewport=new ye;const E=new yn;E.layers.enable(2),E.viewport=new ye;const D=[b,E],M=new ly;M.layers.enable(1),M.layers.enable(2);let w=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let $=v[X];return $===void 0&&($=new vl,v[X]=$),$.getTargetRaySpace()},this.getControllerGrip=function(X){let $=v[X];return $===void 0&&($=new vl,v[X]=$),$.getGripSpace()},this.getHand=function(X){let $=v[X];return $===void 0&&($=new vl,v[X]=$),$.getHandSpace()};function K(X){const $=x.indexOf(X.inputSource);if($===-1)return;const gt=v[$];gt!==void 0&&(gt.update(X.inputSource,X.frame,l||a),gt.dispatchEvent({type:X.type,data:X.inputSource}))}function tt(){s.removeEventListener("select",K),s.removeEventListener("selectstart",K),s.removeEventListener("selectend",K),s.removeEventListener("squeeze",K),s.removeEventListener("squeezestart",K),s.removeEventListener("squeezeend",K),s.removeEventListener("end",tt),s.removeEventListener("inputsourceschange",L);for(let X=0;X<v.length;X++){const $=x[X];$!==null&&(x[X]=null,v[X].disconnect($))}w=null,O=null,t.setRenderTarget(g),f=null,d=null,u=null,s=null,p=null,ut.stop(),i.isPresenting=!1,t.setPixelRatio(T),t.setSize(y.width,y.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){o=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(X){l=X},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(X){if(s=X,s!==null){if(g=t.getRenderTarget(),s.addEventListener("select",K),s.addEventListener("selectstart",K),s.addEventListener("selectend",K),s.addEventListener("squeeze",K),s.addEventListener("squeezestart",K),s.addEventListener("squeezeend",K),s.addEventListener("end",tt),s.addEventListener("inputsourceschange",L),_.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(y),s.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const $={antialias:s.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,$),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),p=new Ms(f.framebufferWidth,f.framebufferHeight,{format:kn,type:ji,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil})}else{let $=null,gt=null,Rt=null;_.depth&&(Rt=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,$=_.stencil?wr:xs,gt=_.stencil?_s:Wi);const St={colorFormat:e.RGBA8,depthFormat:Rt,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(St),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),p=new Ms(d.textureWidth,d.textureHeight,{format:kn,type:ji,depthTexture:new l0(d.textureWidth,d.textureHeight,gt,void 0,void 0,void 0,void 0,void 0,void 0,$),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0});const Ft=t.properties.get(p);Ft.__ignoreDepthValues=d.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),ut.setContext(s),ut.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function L(X){for(let $=0;$<X.removed.length;$++){const gt=X.removed[$],Rt=x.indexOf(gt);Rt>=0&&(x[Rt]=null,v[Rt].disconnect(gt))}for(let $=0;$<X.added.length;$++){const gt=X.added[$];let Rt=x.indexOf(gt);if(Rt===-1){for(let Ft=0;Ft<v.length;Ft++)if(Ft>=x.length){x.push(gt),Rt=Ft;break}else if(x[Ft]===null){x[Ft]=gt,Rt=Ft;break}if(Rt===-1)break}const St=v[Rt];St&&St.connect(gt)}}const P=new C,U=new C;function F(X,$,gt){P.setFromMatrixPosition($.matrixWorld),U.setFromMatrixPosition(gt.matrixWorld);const Rt=P.distanceTo(U),St=$.projectionMatrix.elements,Ft=gt.projectionMatrix.elements,Yt=St[14]/(St[10]-1),Ct=St[14]/(St[10]+1),Wt=(St[9]+1)/St[5],I=(St[9]-1)/St[5],dt=(St[8]-1)/St[0],J=(Ft[8]+1)/Ft[0],lt=Yt*dt,Z=Yt*J,Pt=Rt/(-dt+J),vt=Pt*-dt;$.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(vt),X.translateZ(Pt),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert();const A=Yt+Pt,S=Ct+Pt,k=lt-vt,at=Z+(Rt-vt),it=Wt*Ct/S*A,et=I*Ct/S*A;X.projectionMatrix.makePerspective(k,at,it,et,A,S),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}function H(X,$){$===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices($.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(s===null)return;M.near=E.near=b.near=X.near,M.far=E.far=b.far=X.far,(w!==M.near||O!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),w=M.near,O=M.far);const $=X.parent,gt=M.cameras;H(M,$);for(let Rt=0;Rt<gt.length;Rt++)H(gt[Rt],$);gt.length===2?F(M,b,E):M.projectionMatrix.copy(b.projectionMatrix),B(X,M,$)};function B(X,$,gt){gt===null?X.matrix.copy($.matrixWorld):(X.matrix.copy(gt.matrixWorld),X.matrix.invert(),X.matrix.multiply($.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy($.projectionMatrix),X.projectionMatrixInverse.copy($.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Tr*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(X){c=X,d!==null&&(d.fixedFoveation=X),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=X)};let q=null;function j(X,$){if(h=$.getViewerPose(l||a),m=$,h!==null){const gt=h.views;f!==null&&(t.setRenderTargetFramebuffer(p,f.framebuffer),t.setRenderTarget(p));let Rt=!1;gt.length!==M.cameras.length&&(M.cameras.length=0,Rt=!0);for(let St=0;St<gt.length;St++){const Ft=gt[St];let Yt=null;if(f!==null)Yt=f.getViewport(Ft);else{const Wt=u.getViewSubImage(d,Ft);Yt=Wt.viewport,St===0&&(t.setRenderTargetTextures(p,Wt.colorTexture,d.ignoreDepthValues?void 0:Wt.depthStencilTexture),t.setRenderTarget(p))}let Ct=D[St];Ct===void 0&&(Ct=new yn,Ct.layers.enable(St),Ct.viewport=new ye,D[St]=Ct),Ct.matrix.fromArray(Ft.transform.matrix),Ct.matrix.decompose(Ct.position,Ct.quaternion,Ct.scale),Ct.projectionMatrix.fromArray(Ft.projectionMatrix),Ct.projectionMatrixInverse.copy(Ct.projectionMatrix).invert(),Ct.viewport.set(Yt.x,Yt.y,Yt.width,Yt.height),St===0&&(M.matrix.copy(Ct.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),Rt===!0&&M.cameras.push(Ct)}}for(let gt=0;gt<v.length;gt++){const Rt=x[gt],St=v[gt];Rt!==null&&St!==void 0&&St.update(Rt,$,l||a)}q&&q(X,$),$.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:$}),m=null}const ut=new o0;ut.setAnimationLoop(j),this.setAnimationLoop=function(X){q=X},this.dispose=function(){}}}function dy(n,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function i(g,p){p.color.getRGB(g.fogColor.value,s0(n)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,v,x,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(g,p):p.isMeshToonMaterial?(r(g,p),u(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p)):p.isMeshStandardMaterial?(r(g,p),d(g,p),p.isMeshPhysicalMaterial&&f(g,p,y)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),_(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?c(g,p,v,x):p.isSpriteMaterial?l(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===bn&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===bn&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const v=t.get(p).envMap;if(v&&(g.envMap.value=v,g.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap){g.lightMap.value=p.lightMap;const x=n._useLegacyLights===!0?Math.PI:1;g.lightMapIntensity.value=p.lightMapIntensity*x,e(p.lightMap,g.lightMapTransform)}p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function c(g,p,v,x){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*v,g.scale.value=x*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function l(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function u(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function d(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),t.get(p).envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,v){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===bn&&g.clearcoatNormalScale.value.negate())),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function _(g,p){const v=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(v.matrixWorld),g.nearDistance.value=v.shadow.camera.near,g.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function fy(n,t,e,i){let s={},r={},a=[];const o=e.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(v,x){const y=x.program;i.uniformBlockBinding(v,y)}function l(v,x){let y=s[v.id];y===void 0&&(m(v),y=h(v),s[v.id]=y,v.addEventListener("dispose",g));const T=x.program;i.updateUBOMapping(v,T);const b=t.render.frame;r[v.id]!==b&&(d(v),r[v.id]=b)}function h(v){const x=u();v.__bindingPointIndex=x;const y=n.createBuffer(),T=v.__size,b=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,T,b),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,x,y),y}function u(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){const x=s[v.id],y=v.uniforms,T=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,x);for(let b=0,E=y.length;b<E;b++){const D=Array.isArray(y[b])?y[b]:[y[b]];for(let M=0,w=D.length;M<w;M++){const O=D[M];if(f(O,b,M,T)===!0){const K=O.__offset,tt=Array.isArray(O.value)?O.value:[O.value];let L=0;for(let P=0;P<tt.length;P++){const U=tt[P],F=_(U);typeof U=="number"||typeof U=="boolean"?(O.__data[0]=U,n.bufferSubData(n.UNIFORM_BUFFER,K+L,O.__data)):U.isMatrix3?(O.__data[0]=U.elements[0],O.__data[1]=U.elements[1],O.__data[2]=U.elements[2],O.__data[3]=0,O.__data[4]=U.elements[3],O.__data[5]=U.elements[4],O.__data[6]=U.elements[5],O.__data[7]=0,O.__data[8]=U.elements[6],O.__data[9]=U.elements[7],O.__data[10]=U.elements[8],O.__data[11]=0):(U.toArray(O.__data,L),L+=F.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,K,O.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(v,x,y,T){const b=v.value,E=x+"_"+y;if(T[E]===void 0)return typeof b=="number"||typeof b=="boolean"?T[E]=b:T[E]=b.clone(),!0;{const D=T[E];if(typeof b=="number"||typeof b=="boolean"){if(D!==b)return T[E]=b,!0}else if(D.equals(b)===!1)return D.copy(b),!0}return!1}function m(v){const x=v.uniforms;let y=0;const T=16;for(let E=0,D=x.length;E<D;E++){const M=Array.isArray(x[E])?x[E]:[x[E]];for(let w=0,O=M.length;w<O;w++){const K=M[w],tt=Array.isArray(K.value)?K.value:[K.value];for(let L=0,P=tt.length;L<P;L++){const U=tt[L],F=_(U),H=y%T;H!==0&&T-H<F.boundary&&(y+=T-H),K.__data=new Float32Array(F.storage/Float32Array.BYTES_PER_ELEMENT),K.__offset=y,y+=F.storage}}}const b=y%T;return b>0&&(y+=T-b),v.__size=y,v.__cache={},this}function _(v){const x={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(x.boundary=4,x.storage=4):v.isVector2?(x.boundary=8,x.storage=8):v.isVector3||v.isColor?(x.boundary=16,x.storage=12):v.isVector4?(x.boundary=16,x.storage=16):v.isMatrix3?(x.boundary=48,x.storage=48):v.isMatrix4?(x.boundary=64,x.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),x}function g(v){const x=v.target;x.removeEventListener("dispose",g);const y=a.indexOf(x.__bindingPointIndex);a.splice(y,1),n.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function p(){for(const v in s)n.deleteBuffer(s[v]);a=[],s={},r={}}return{bind:c,update:l,dispose:p}}class m0{constructor(t={}){const{canvas:e=l1(),context:i=null,depth:s=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=a;const f=new Uint32Array(4),m=new Int32Array(4);let _=null,g=null;const p=[],v=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=en,this._useLegacyLights=!1,this.toneMapping=Ki,this.toneMappingExposure=1;const x=this;let y=!1,T=0,b=0,E=null,D=-1,M=null;const w=new ye,O=new ye;let K=null;const tt=new At(0);let L=0,P=e.width,U=e.height,F=1,H=null,B=null;const q=new ye(0,0,P,U),j=new ye(0,0,P,U);let ut=!1;const X=new Bh;let $=!1,gt=!1,Rt=null;const St=new Bt,Ft=new nt,Yt=new C,Ct={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Wt(){return E===null?F:1}let I=i;function dt(R,z){for(let W=0;W<R.length;W++){const Y=R[W],V=e.getContext(Y,z);if(V!==null)return V}return null}try{const R={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Dh}`),e.addEventListener("webglcontextlost",ft,!1),e.addEventListener("webglcontextrestored",N,!1),e.addEventListener("webglcontextcreationerror",_t,!1),I===null){const z=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&z.shift(),I=dt(z,R),I===null)throw dt(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&I instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),I.getShaderPrecisionFormat===void 0&&(I.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let J,lt,Z,Pt,vt,A,S,k,at,it,et,Tt,mt,bt,Nt,Jt,st,he,ce,Xt,Dt,Et,Qt,pe;function Fe(){J=new bv(I),lt=new _v(I,J,t),J.init(lt),Et=new cy(I,J,lt),Z=new ay(I,J,lt),Pt=new Tv(I),vt=new q2,A=new oy(I,J,Z,vt,lt,Et,Pt),S=new vv(x),k=new Sv(x),at=new N1(I,lt),Qt=new mv(I,J,at,lt),it=new Ev(I,at,Pt,Qt),et=new Lv(I,it,at,Pt),ce=new Cv(I,lt,A),Jt=new xv(vt),Tt=new X2(x,S,k,J,lt,Qt,Jt),mt=new dy(x,vt),bt=new K2,Nt=new ty(J,lt),he=new pv(x,S,k,Z,et,d,c),st=new ry(x,et,lt),pe=new fy(I,Pt,lt,Z),Xt=new gv(I,J,Pt,lt),Dt=new wv(I,J,Pt,lt),Pt.programs=Tt.programs,x.capabilities=lt,x.extensions=J,x.properties=vt,x.renderLists=bt,x.shadowMap=st,x.state=Z,x.info=Pt}Fe();const ie=new uy(x,I);this.xr=ie,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const R=J.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=J.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return F},this.setPixelRatio=function(R){R!==void 0&&(F=R,this.setSize(P,U,!1))},this.getSize=function(R){return R.set(P,U)},this.setSize=function(R,z,W=!0){if(ie.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}P=R,U=z,e.width=Math.floor(R*F),e.height=Math.floor(z*F),W===!0&&(e.style.width=R+"px",e.style.height=z+"px"),this.setViewport(0,0,R,z)},this.getDrawingBufferSize=function(R){return R.set(P*F,U*F).floor()},this.setDrawingBufferSize=function(R,z,W){P=R,U=z,F=W,e.width=Math.floor(R*W),e.height=Math.floor(z*W),this.setViewport(0,0,R,z)},this.getCurrentViewport=function(R){return R.copy(w)},this.getViewport=function(R){return R.copy(q)},this.setViewport=function(R,z,W,Y){R.isVector4?q.set(R.x,R.y,R.z,R.w):q.set(R,z,W,Y),Z.viewport(w.copy(q).multiplyScalar(F).floor())},this.getScissor=function(R){return R.copy(j)},this.setScissor=function(R,z,W,Y){R.isVector4?j.set(R.x,R.y,R.z,R.w):j.set(R,z,W,Y),Z.scissor(O.copy(j).multiplyScalar(F).floor())},this.getScissorTest=function(){return ut},this.setScissorTest=function(R){Z.setScissorTest(ut=R)},this.setOpaqueSort=function(R){H=R},this.setTransparentSort=function(R){B=R},this.getClearColor=function(R){return R.copy(he.getClearColor())},this.setClearColor=function(){he.setClearColor.apply(he,arguments)},this.getClearAlpha=function(){return he.getClearAlpha()},this.setClearAlpha=function(){he.setClearAlpha.apply(he,arguments)},this.clear=function(R=!0,z=!0,W=!0){let Y=0;if(R){let V=!1;if(E!==null){const yt=E.texture.format;V=yt===Yp||yt===qp||yt===Xp}if(V){const yt=E.texture.type,Lt=yt===ji||yt===Wi||yt===Nh||yt===_s||yt===Vp||yt===Wp,Ot=he.getClearColor(),kt=he.getClearAlpha(),ee=Ot.r,Kt=Ot.g,$t=Ot.b;Lt?(f[0]=ee,f[1]=Kt,f[2]=$t,f[3]=kt,I.clearBufferuiv(I.COLOR,0,f)):(m[0]=ee,m[1]=Kt,m[2]=$t,m[3]=kt,I.clearBufferiv(I.COLOR,0,m))}else Y|=I.COLOR_BUFFER_BIT}z&&(Y|=I.DEPTH_BUFFER_BIT),W&&(Y|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ft,!1),e.removeEventListener("webglcontextrestored",N,!1),e.removeEventListener("webglcontextcreationerror",_t,!1),bt.dispose(),Nt.dispose(),vt.dispose(),S.dispose(),k.dispose(),et.dispose(),Qt.dispose(),pe.dispose(),Tt.dispose(),ie.dispose(),ie.removeEventListener("sessionstart",gn),ie.removeEventListener("sessionend",Ee),Rt&&(Rt.dispose(),Rt=null),_n.stop()};function ft(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function N(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const R=Pt.autoReset,z=st.enabled,W=st.autoUpdate,Y=st.needsUpdate,V=st.type;Fe(),Pt.autoReset=R,st.enabled=z,st.autoUpdate=W,st.needsUpdate=Y,st.type=V}function _t(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function xt(R){const z=R.target;z.removeEventListener("dispose",xt),zt(z)}function zt(R){Ut(R),vt.remove(R)}function Ut(R){const z=vt.get(R).programs;z!==void 0&&(z.forEach(function(W){Tt.releaseProgram(W)}),R.isShaderMaterial&&Tt.releaseShaderCache(R))}this.renderBufferDirect=function(R,z,W,Y,V,yt){z===null&&(z=Ct);const Lt=V.isMesh&&V.matrixWorld.determinant()<0,Ot=Vm(R,z,W,Y,V);Z.setMaterial(Y,Lt);let kt=W.index,ee=1;if(Y.wireframe===!0){if(kt=it.getWireframeAttribute(W),kt===void 0)return;ee=2}const Kt=W.drawRange,$t=W.attributes.position;let He=Kt.start*ee,Rn=(Kt.start+Kt.count)*ee;yt!==null&&(He=Math.max(He,yt.start*ee),Rn=Math.min(Rn,(yt.start+yt.count)*ee)),kt!==null?(He=Math.max(He,0),Rn=Math.min(Rn,kt.count)):$t!=null&&(He=Math.max(He,0),Rn=Math.min(Rn,$t.count));const Qe=Rn-He;if(Qe<0||Qe===1/0)return;Qt.setup(V,Y,Ot,W,kt);let fi,Ue=Xt;if(kt!==null&&(fi=at.get(kt),Ue=Dt,Ue.setIndex(fi)),V.isMesh)Y.wireframe===!0?(Z.setLineWidth(Y.wireframeLinewidth*Wt()),Ue.setMode(I.LINES)):Ue.setMode(I.TRIANGLES);else if(V.isLine){let se=Y.linewidth;se===void 0&&(se=1),Z.setLineWidth(se*Wt()),V.isLineSegments?Ue.setMode(I.LINES):V.isLineLoop?Ue.setMode(I.LINE_LOOP):Ue.setMode(I.LINE_STRIP)}else V.isPoints?Ue.setMode(I.POINTS):V.isSprite&&Ue.setMode(I.TRIANGLES);if(V.isBatchedMesh)Ue.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else if(V.isInstancedMesh)Ue.renderInstances(He,Qe,V.count);else if(W.isInstancedBufferGeometry){const se=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,kc=Math.min(W.instanceCount,se);Ue.renderInstances(He,Qe,kc)}else Ue.render(He,Qe)};function Se(R,z,W){R.transparent===!0&&R.side===Sn&&R.forceSinglePass===!1?(R.side=bn,R.needsUpdate=!0,Wa(R,z,W),R.side=Qi,R.needsUpdate=!0,Wa(R,z,W),R.side=Sn):Wa(R,z,W)}this.compile=function(R,z,W=null){W===null&&(W=R),g=Nt.get(W),g.init(),v.push(g),W.traverseVisible(function(V){V.isLight&&V.layers.test(z.layers)&&(g.pushLight(V),V.castShadow&&g.pushShadow(V))}),R!==W&&R.traverseVisible(function(V){V.isLight&&V.layers.test(z.layers)&&(g.pushLight(V),V.castShadow&&g.pushShadow(V))}),g.setupLights(x._useLegacyLights);const Y=new Set;return R.traverse(function(V){const yt=V.material;if(yt)if(Array.isArray(yt))for(let Lt=0;Lt<yt.length;Lt++){const Ot=yt[Lt];Se(Ot,W,V),Y.add(Ot)}else Se(yt,W,V),Y.add(yt)}),v.pop(),g=null,Y},this.compileAsync=function(R,z,W=null){const Y=this.compile(R,z,W);return new Promise(V=>{function yt(){if(Y.forEach(function(Lt){vt.get(Lt).currentProgram.isReady()&&Y.delete(Lt)}),Y.size===0){V(R);return}setTimeout(yt,10)}J.get("KHR_parallel_shader_compile")!==null?yt():setTimeout(yt,10)})};let be=null;function $e(R){be&&be(R)}function gn(){_n.stop()}function Ee(){_n.start()}const _n=new o0;_n.setAnimationLoop($e),typeof self<"u"&&_n.setContext(self),this.setAnimationLoop=function(R){be=R,ie.setAnimationLoop(R),R===null?_n.stop():_n.start()},ie.addEventListener("sessionstart",gn),ie.addEventListener("sessionend",Ee),this.render=function(R,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),ie.enabled===!0&&ie.isPresenting===!0&&(ie.cameraAutoUpdate===!0&&ie.updateCamera(z),z=ie.getCamera()),R.isScene===!0&&R.onBeforeRender(x,R,z,E),g=Nt.get(R,v.length),g.init(),v.push(g),St.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),X.setFromProjectionMatrix(St),gt=this.localClippingEnabled,$=Jt.init(this.clippingPlanes,gt),_=bt.get(R,p.length),_.init(),p.push(_),ei(R,z,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(H,B),this.info.render.frame++,$===!0&&Jt.beginShadows();const W=g.state.shadowsArray;if(st.render(W,R,z),$===!0&&Jt.endShadows(),this.info.autoReset===!0&&this.info.reset(),he.render(_,R),g.setupLights(x._useLegacyLights),z.isArrayCamera){const Y=z.cameras;for(let V=0,yt=Y.length;V<yt;V++){const Lt=Y[V];Tu(_,R,Lt,Lt.viewport)}}else Tu(_,R,z);E!==null&&(A.updateMultisampleRenderTarget(E),A.updateRenderTargetMipmap(E)),R.isScene===!0&&R.onAfterRender(x,R,z),Qt.resetDefaultState(),D=-1,M=null,v.pop(),v.length>0?g=v[v.length-1]:g=null,p.pop(),p.length>0?_=p[p.length-1]:_=null};function ei(R,z,W,Y){if(R.visible===!1)return;if(R.layers.test(z.layers)){if(R.isGroup)W=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(z);else if(R.isLight)g.pushLight(R),R.castShadow&&g.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||X.intersectsSprite(R)){Y&&Yt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(St);const Lt=et.update(R),Ot=R.material;Ot.visible&&_.push(R,Lt,Ot,W,Yt.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||X.intersectsObject(R))){const Lt=et.update(R),Ot=R.material;if(Y&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Yt.copy(R.boundingSphere.center)):(Lt.boundingSphere===null&&Lt.computeBoundingSphere(),Yt.copy(Lt.boundingSphere.center)),Yt.applyMatrix4(R.matrixWorld).applyMatrix4(St)),Array.isArray(Ot)){const kt=Lt.groups;for(let ee=0,Kt=kt.length;ee<Kt;ee++){const $t=kt[ee],He=Ot[$t.materialIndex];He&&He.visible&&_.push(R,Lt,He,W,Yt.z,$t)}}else Ot.visible&&_.push(R,Lt,Ot,W,Yt.z,null)}}const yt=R.children;for(let Lt=0,Ot=yt.length;Lt<Ot;Lt++)ei(yt[Lt],z,W,Y)}function Tu(R,z,W,Y){const V=R.opaque,yt=R.transmissive,Lt=R.transparent;g.setupLightsView(W),$===!0&&Jt.setGlobalState(x.clippingPlanes,W),yt.length>0&&Gm(V,yt,z,W),Y&&Z.viewport(w.copy(Y)),V.length>0&&Va(V,z,W),yt.length>0&&Va(yt,z,W),Lt.length>0&&Va(Lt,z,W),Z.buffers.depth.setTest(!0),Z.buffers.depth.setMask(!0),Z.buffers.color.setMask(!0),Z.setPolygonOffset(!1)}function Gm(R,z,W,Y){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;const yt=lt.isWebGL2;Rt===null&&(Rt=new Ms(1,1,{generateMipmaps:!0,type:J.has("EXT_color_buffer_half_float")?pa:ji,minFilter:fa,samples:yt?4:0})),x.getDrawingBufferSize(Ft),yt?Rt.setSize(Ft.x,Ft.y):Rt.setSize(rc(Ft.x),rc(Ft.y));const Lt=x.getRenderTarget();x.setRenderTarget(Rt),x.getClearColor(tt),L=x.getClearAlpha(),L<1&&x.setClearColor(16777215,.5),x.clear();const Ot=x.toneMapping;x.toneMapping=Ki,Va(R,W,Y),A.updateMultisampleRenderTarget(Rt),A.updateRenderTargetMipmap(Rt);let kt=!1;for(let ee=0,Kt=z.length;ee<Kt;ee++){const $t=z[ee],He=$t.object,Rn=$t.geometry,Qe=$t.material,fi=$t.group;if(Qe.side===Sn&&He.layers.test(Y.layers)){const Ue=Qe.side;Qe.side=bn,Qe.needsUpdate=!0,Au(He,W,Y,Rn,Qe,fi),Qe.side=Ue,Qe.needsUpdate=!0,kt=!0}}kt===!0&&(A.updateMultisampleRenderTarget(Rt),A.updateRenderTargetMipmap(Rt)),x.setRenderTarget(Lt),x.setClearColor(tt,L),x.toneMapping=Ot}function Va(R,z,W){const Y=z.isScene===!0?z.overrideMaterial:null;for(let V=0,yt=R.length;V<yt;V++){const Lt=R[V],Ot=Lt.object,kt=Lt.geometry,ee=Y===null?Lt.material:Y,Kt=Lt.group;Ot.layers.test(W.layers)&&Au(Ot,z,W,kt,ee,Kt)}}function Au(R,z,W,Y,V,yt){R.onBeforeRender(x,z,W,Y,V,yt),R.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),V.onBeforeRender(x,z,W,Y,R,yt),V.transparent===!0&&V.side===Sn&&V.forceSinglePass===!1?(V.side=bn,V.needsUpdate=!0,x.renderBufferDirect(W,z,Y,V,R,yt),V.side=Qi,V.needsUpdate=!0,x.renderBufferDirect(W,z,Y,V,R,yt),V.side=Sn):x.renderBufferDirect(W,z,Y,V,R,yt),R.onAfterRender(x,z,W,Y,V,yt)}function Wa(R,z,W){z.isScene!==!0&&(z=Ct);const Y=vt.get(R),V=g.state.lights,yt=g.state.shadowsArray,Lt=V.state.version,Ot=Tt.getParameters(R,V.state,yt,z,W),kt=Tt.getProgramCacheKey(Ot);let ee=Y.programs;Y.environment=R.isMeshStandardMaterial?z.environment:null,Y.fog=z.fog,Y.envMap=(R.isMeshStandardMaterial?k:S).get(R.envMap||Y.environment),ee===void 0&&(R.addEventListener("dispose",xt),ee=new Map,Y.programs=ee);let Kt=ee.get(kt);if(Kt!==void 0){if(Y.currentProgram===Kt&&Y.lightsStateVersion===Lt)return Cu(R,Ot),Kt}else Ot.uniforms=Tt.getUniforms(R),R.onBuild(W,Ot,x),R.onBeforeCompile(Ot,x),Kt=Tt.acquireProgram(Ot,kt),ee.set(kt,Kt),Y.uniforms=Ot.uniforms;const $t=Y.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&($t.clippingPlanes=Jt.uniform),Cu(R,Ot),Y.needsLights=Xm(R),Y.lightsStateVersion=Lt,Y.needsLights&&($t.ambientLightColor.value=V.state.ambient,$t.lightProbe.value=V.state.probe,$t.directionalLights.value=V.state.directional,$t.directionalLightShadows.value=V.state.directionalShadow,$t.spotLights.value=V.state.spot,$t.spotLightShadows.value=V.state.spotShadow,$t.rectAreaLights.value=V.state.rectArea,$t.ltc_1.value=V.state.rectAreaLTC1,$t.ltc_2.value=V.state.rectAreaLTC2,$t.pointLights.value=V.state.point,$t.pointLightShadows.value=V.state.pointShadow,$t.hemisphereLights.value=V.state.hemi,$t.directionalShadowMap.value=V.state.directionalShadowMap,$t.directionalShadowMatrix.value=V.state.directionalShadowMatrix,$t.spotShadowMap.value=V.state.spotShadowMap,$t.spotLightMatrix.value=V.state.spotLightMatrix,$t.spotLightMap.value=V.state.spotLightMap,$t.pointShadowMap.value=V.state.pointShadowMap,$t.pointShadowMatrix.value=V.state.pointShadowMatrix),Y.currentProgram=Kt,Y.uniformsList=null,Kt}function Ru(R){if(R.uniformsList===null){const z=R.currentProgram.getUniforms();R.uniformsList=Xo.seqWithValue(z.seq,R.uniforms)}return R.uniformsList}function Cu(R,z){const W=vt.get(R);W.outputColorSpace=z.outputColorSpace,W.batching=z.batching,W.instancing=z.instancing,W.instancingColor=z.instancingColor,W.skinning=z.skinning,W.morphTargets=z.morphTargets,W.morphNormals=z.morphNormals,W.morphColors=z.morphColors,W.morphTargetsCount=z.morphTargetsCount,W.numClippingPlanes=z.numClippingPlanes,W.numIntersection=z.numClipIntersection,W.vertexAlphas=z.vertexAlphas,W.vertexTangents=z.vertexTangents,W.toneMapping=z.toneMapping}function Vm(R,z,W,Y,V){z.isScene!==!0&&(z=Ct),A.resetTextureUnits();const yt=z.fog,Lt=Y.isMeshStandardMaterial?z.environment:null,Ot=E===null?x.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:Ci,kt=(Y.isMeshStandardMaterial?k:S).get(Y.envMap||Lt),ee=Y.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Kt=!!W.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),$t=!!W.morphAttributes.position,He=!!W.morphAttributes.normal,Rn=!!W.morphAttributes.color;let Qe=Ki;Y.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(Qe=x.toneMapping);const fi=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Ue=fi!==void 0?fi.length:0,se=vt.get(Y),kc=g.state.lights;if($===!0&&(gt===!0||R!==M)){const Un=R===M&&Y.id===D;Jt.setState(Y,R,Un)}let ze=!1;Y.version===se.__version?(se.needsLights&&se.lightsStateVersion!==kc.state.version||se.outputColorSpace!==Ot||V.isBatchedMesh&&se.batching===!1||!V.isBatchedMesh&&se.batching===!0||V.isInstancedMesh&&se.instancing===!1||!V.isInstancedMesh&&se.instancing===!0||V.isSkinnedMesh&&se.skinning===!1||!V.isSkinnedMesh&&se.skinning===!0||V.isInstancedMesh&&se.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&se.instancingColor===!1&&V.instanceColor!==null||se.envMap!==kt||Y.fog===!0&&se.fog!==yt||se.numClippingPlanes!==void 0&&(se.numClippingPlanes!==Jt.numPlanes||se.numIntersection!==Jt.numIntersection)||se.vertexAlphas!==ee||se.vertexTangents!==Kt||se.morphTargets!==$t||se.morphNormals!==He||se.morphColors!==Rn||se.toneMapping!==Qe||lt.isWebGL2===!0&&se.morphTargetsCount!==Ue)&&(ze=!0):(ze=!0,se.__version=Y.version);let is=se.currentProgram;ze===!0&&(is=Wa(Y,z,V));let Lu=!1,kr=!1,Hc=!1;const ln=is.getUniforms(),ss=se.uniforms;if(Z.useProgram(is.program)&&(Lu=!0,kr=!0,Hc=!0),Y.id!==D&&(D=Y.id,kr=!0),Lu||M!==R){ln.setValue(I,"projectionMatrix",R.projectionMatrix),ln.setValue(I,"viewMatrix",R.matrixWorldInverse);const Un=ln.map.cameraPosition;Un!==void 0&&Un.setValue(I,Yt.setFromMatrixPosition(R.matrixWorld)),lt.logarithmicDepthBuffer&&ln.setValue(I,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&ln.setValue(I,"isOrthographic",R.isOrthographicCamera===!0),M!==R&&(M=R,kr=!0,Hc=!0)}if(V.isSkinnedMesh){ln.setOptional(I,V,"bindMatrix"),ln.setOptional(I,V,"bindMatrixInverse");const Un=V.skeleton;Un&&(lt.floatVertexTextures?(Un.boneTexture===null&&Un.computeBoneTexture(),ln.setValue(I,"boneTexture",Un.boneTexture,A)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}V.isBatchedMesh&&(ln.setOptional(I,V,"batchingTexture"),ln.setValue(I,"batchingTexture",V._matricesTexture,A));const Gc=W.morphAttributes;if((Gc.position!==void 0||Gc.normal!==void 0||Gc.color!==void 0&&lt.isWebGL2===!0)&&ce.update(V,W,is),(kr||se.receiveShadow!==V.receiveShadow)&&(se.receiveShadow=V.receiveShadow,ln.setValue(I,"receiveShadow",V.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(ss.envMap.value=kt,ss.flipEnvMap.value=kt.isCubeTexture&&kt.isRenderTargetTexture===!1?-1:1),kr&&(ln.setValue(I,"toneMappingExposure",x.toneMappingExposure),se.needsLights&&Wm(ss,Hc),yt&&Y.fog===!0&&mt.refreshFogUniforms(ss,yt),mt.refreshMaterialUniforms(ss,Y,F,U,Rt),Xo.upload(I,Ru(se),ss,A)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(Xo.upload(I,Ru(se),ss,A),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&ln.setValue(I,"center",V.center),ln.setValue(I,"modelViewMatrix",V.modelViewMatrix),ln.setValue(I,"normalMatrix",V.normalMatrix),ln.setValue(I,"modelMatrix",V.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const Un=Y.uniformsGroups;for(let Vc=0,qm=Un.length;Vc<qm;Vc++)if(lt.isWebGL2){const Pu=Un[Vc];pe.update(Pu,is),pe.bind(Pu,is)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return is}function Wm(R,z){R.ambientLightColor.needsUpdate=z,R.lightProbe.needsUpdate=z,R.directionalLights.needsUpdate=z,R.directionalLightShadows.needsUpdate=z,R.pointLights.needsUpdate=z,R.pointLightShadows.needsUpdate=z,R.spotLights.needsUpdate=z,R.spotLightShadows.needsUpdate=z,R.rectAreaLights.needsUpdate=z,R.hemisphereLights.needsUpdate=z}function Xm(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(R,z,W){vt.get(R.texture).__webglTexture=z,vt.get(R.depthTexture).__webglTexture=W;const Y=vt.get(R);Y.__hasExternalTextures=!0,Y.__hasExternalTextures&&(Y.__autoAllocateDepthBuffer=W===void 0,Y.__autoAllocateDepthBuffer||J.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(R,z){const W=vt.get(R);W.__webglFramebuffer=z,W.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(R,z=0,W=0){E=R,T=z,b=W;let Y=!0,V=null,yt=!1,Lt=!1;if(R){const kt=vt.get(R);kt.__useDefaultFramebuffer!==void 0?(Z.bindFramebuffer(I.FRAMEBUFFER,null),Y=!1):kt.__webglFramebuffer===void 0?A.setupRenderTarget(R):kt.__hasExternalTextures&&A.rebindTextures(R,vt.get(R.texture).__webglTexture,vt.get(R.depthTexture).__webglTexture);const ee=R.texture;(ee.isData3DTexture||ee.isDataArrayTexture||ee.isCompressedArrayTexture)&&(Lt=!0);const Kt=vt.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Kt[z])?V=Kt[z][W]:V=Kt[z],yt=!0):lt.isWebGL2&&R.samples>0&&A.useMultisampledRTT(R)===!1?V=vt.get(R).__webglMultisampledFramebuffer:Array.isArray(Kt)?V=Kt[W]:V=Kt,w.copy(R.viewport),O.copy(R.scissor),K=R.scissorTest}else w.copy(q).multiplyScalar(F).floor(),O.copy(j).multiplyScalar(F).floor(),K=ut;if(Z.bindFramebuffer(I.FRAMEBUFFER,V)&&lt.drawBuffers&&Y&&Z.drawBuffers(R,V),Z.viewport(w),Z.scissor(O),Z.setScissorTest(K),yt){const kt=vt.get(R.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+z,kt.__webglTexture,W)}else if(Lt){const kt=vt.get(R.texture),ee=z||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,kt.__webglTexture,W||0,ee)}D=-1},this.readRenderTargetPixels=function(R,z,W,Y,V,yt,Lt){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ot=vt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Lt!==void 0&&(Ot=Ot[Lt]),Ot){Z.bindFramebuffer(I.FRAMEBUFFER,Ot);try{const kt=R.texture,ee=kt.format,Kt=kt.type;if(ee!==kn&&Et.convert(ee)!==I.getParameter(I.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const $t=Kt===pa&&(J.has("EXT_color_buffer_half_float")||lt.isWebGL2&&J.has("EXT_color_buffer_float"));if(Kt!==ji&&Et.convert(Kt)!==I.getParameter(I.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Kt===Ti&&(lt.isWebGL2||J.has("OES_texture_float")||J.has("WEBGL_color_buffer_float")))&&!$t){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=R.width-Y&&W>=0&&W<=R.height-V&&I.readPixels(z,W,Y,V,Et.convert(ee),Et.convert(Kt),yt)}finally{const kt=E!==null?vt.get(E).__webglFramebuffer:null;Z.bindFramebuffer(I.FRAMEBUFFER,kt)}}},this.copyFramebufferToTexture=function(R,z,W=0){const Y=Math.pow(2,-W),V=Math.floor(z.image.width*Y),yt=Math.floor(z.image.height*Y);A.setTexture2D(z,0),I.copyTexSubImage2D(I.TEXTURE_2D,W,0,0,R.x,R.y,V,yt),Z.unbindTexture()},this.copyTextureToTexture=function(R,z,W,Y=0){const V=z.image.width,yt=z.image.height,Lt=Et.convert(W.format),Ot=Et.convert(W.type);A.setTexture2D(W,0),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,W.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,W.unpackAlignment),z.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,Y,R.x,R.y,V,yt,Lt,Ot,z.image.data):z.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,Y,R.x,R.y,z.mipmaps[0].width,z.mipmaps[0].height,Lt,z.mipmaps[0].data):I.texSubImage2D(I.TEXTURE_2D,Y,R.x,R.y,Lt,Ot,z.image),Y===0&&W.generateMipmaps&&I.generateMipmap(I.TEXTURE_2D),Z.unbindTexture()},this.copyTextureToTexture3D=function(R,z,W,Y,V=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const yt=R.max.x-R.min.x+1,Lt=R.max.y-R.min.y+1,Ot=R.max.z-R.min.z+1,kt=Et.convert(Y.format),ee=Et.convert(Y.type);let Kt;if(Y.isData3DTexture)A.setTexture3D(Y,0),Kt=I.TEXTURE_3D;else if(Y.isDataArrayTexture||Y.isCompressedArrayTexture)A.setTexture2DArray(Y,0),Kt=I.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,Y.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,Y.unpackAlignment);const $t=I.getParameter(I.UNPACK_ROW_LENGTH),He=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Rn=I.getParameter(I.UNPACK_SKIP_PIXELS),Qe=I.getParameter(I.UNPACK_SKIP_ROWS),fi=I.getParameter(I.UNPACK_SKIP_IMAGES),Ue=W.isCompressedTexture?W.mipmaps[V]:W.image;I.pixelStorei(I.UNPACK_ROW_LENGTH,Ue.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Ue.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,R.min.x),I.pixelStorei(I.UNPACK_SKIP_ROWS,R.min.y),I.pixelStorei(I.UNPACK_SKIP_IMAGES,R.min.z),W.isDataTexture||W.isData3DTexture?I.texSubImage3D(Kt,V,z.x,z.y,z.z,yt,Lt,Ot,kt,ee,Ue.data):W.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),I.compressedTexSubImage3D(Kt,V,z.x,z.y,z.z,yt,Lt,Ot,kt,Ue.data)):I.texSubImage3D(Kt,V,z.x,z.y,z.z,yt,Lt,Ot,kt,ee,Ue),I.pixelStorei(I.UNPACK_ROW_LENGTH,$t),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,He),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Rn),I.pixelStorei(I.UNPACK_SKIP_ROWS,Qe),I.pixelStorei(I.UNPACK_SKIP_IMAGES,fi),V===0&&Y.generateMipmaps&&I.generateMipmap(Kt),Z.unbindTexture()},this.initTexture=function(R){R.isCubeTexture?A.setTextureCube(R,0):R.isData3DTexture?A.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?A.setTexture2DArray(R,0):A.setTexture2D(R,0),Z.unbindTexture()},this.resetState=function(){T=0,b=0,E=null,Z.reset(),Qt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ai}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Oh?"display-p3":"srgb",e.unpackColorSpace=xe.workingColorSpace===wc?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===en?vs:jp}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===vs?en:Ci}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class py extends m0{}py.prototype.isWebGL1Renderer=!0;class Hh{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new At(t),this.density=e}clone(){return new Hh(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class g0 extends De{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}}class my{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Ql,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Vn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Vn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Vn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const xn=new C;class ac{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)xn.fromBufferAttribute(this,e),xn.applyMatrix4(t),this.setXYZ(e,xn.x,xn.y,xn.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)xn.fromBufferAttribute(this,e),xn.applyNormalMatrix(t),this.setXYZ(e,xn.x,xn.y,xn.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)xn.fromBufferAttribute(this,e),xn.transformDirection(t),this.setXYZ(e,xn.x,xn.y,xn.z);return this}setX(t,e){return this.normalized&&(e=_e(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=_e(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=_e(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=_e(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=si(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=si(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=si(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=si(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=_e(e,this.array),i=_e(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=_e(e,this.array),i=_e(i,this.array),s=_e(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=_e(e,this.array),i=_e(i,this.array),s=_e(s,this.array),r=_e(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new An(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new ac(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class _0 extends hi{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new At(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Vs;const Xr=new C,Ws=new C,Xs=new C,qs=new nt,qr=new nt,x0=new Bt,po=new C,Yr=new C,mo=new C,$d=new nt,yl=new nt,Qd=new nt;class gy extends De{constructor(t=new _0){if(super(),this.isSprite=!0,this.type="Sprite",Vs===void 0){Vs=new Ne;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new my(e,5);Vs.setIndex([0,1,2,0,2,3]),Vs.setAttribute("position",new ac(i,3,0,!1)),Vs.setAttribute("uv",new ac(i,2,3,!1))}this.geometry=Vs,this.material=t,this.center=new nt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ws.setFromMatrixScale(this.matrixWorld),x0.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Xs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ws.multiplyScalar(-Xs.z);const i=this.material.rotation;let s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));const a=this.center;go(po.set(-.5,-.5,0),Xs,a,Ws,s,r),go(Yr.set(.5,-.5,0),Xs,a,Ws,s,r),go(mo.set(.5,.5,0),Xs,a,Ws,s,r),$d.set(0,0),yl.set(1,0),Qd.set(1,1);let o=t.ray.intersectTriangle(po,Yr,mo,!1,Xr);if(o===null&&(go(Yr.set(-.5,.5,0),Xs,a,Ws,s,r),yl.set(0,1),o=t.ray.intersectTriangle(po,mo,Yr,!1,Xr),o===null))return;const c=t.ray.origin.distanceTo(Xr);c<t.near||c>t.far||e.push({distance:c,point:Xr.clone(),uv:Bn.getInterpolation(Xr,po,Yr,mo,$d,yl,Qd,new nt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function go(n,t,e,i,s,r){qs.subVectors(n,e).addScalar(.5).multiply(i),s!==void 0?(qr.x=r*qs.x-s*qs.y,qr.y=s*qs.x+r*qs.y):qr.copy(qs),n.copy(t),n.x+=qr.x,n.y+=qr.y,n.applyMatrix4(x0)}const tf=new C,ef=new ye,nf=new ye,_y=new C,sf=new Bt,_o=new C,Ml=new li,rf=new Bt,Sl=new Ra;class hT extends Me{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Fu,this.bindMatrix=new Bt,this.bindMatrixInverse=new Bt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const t=this.geometry;this.boundingBox===null&&(this.boundingBox=new Ii),this.boundingBox.makeEmpty();const e=t.getAttribute("position");for(let i=0;i<e.count;i++)this.getVertexPosition(i,_o),this.boundingBox.expandByPoint(_o)}computeBoundingSphere(){const t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new li),this.boundingSphere.makeEmpty();const e=t.getAttribute("position");for(let i=0;i<e.count;i++)this.getVertexPosition(i,_o),this.boundingSphere.expandByPoint(_o)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){const i=this.material,s=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ml.copy(this.boundingSphere),Ml.applyMatrix4(s),t.ray.intersectsSphere(Ml)!==!1&&(rf.copy(s).invert(),Sl.copy(t.ray).applyMatrix4(rf),!(this.boundingBox!==null&&Sl.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,Sl)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const t=new ye,e=this.geometry.attributes.skinWeight;for(let i=0,s=e.count;i<s;i++){t.fromBufferAttribute(e,i);const r=1/t.manhattanLength();r!==1/0?t.multiplyScalar(r):t.set(1,0,0,0),e.setXYZW(i,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===Fu?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===wg?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){const i=this.skeleton,s=this.geometry;ef.fromBufferAttribute(s.attributes.skinIndex,t),nf.fromBufferAttribute(s.attributes.skinWeight,t),tf.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let r=0;r<4;r++){const a=nf.getComponent(r);if(a!==0){const o=ef.getComponent(r);sf.multiplyMatrices(i.bones[o].matrixWorld,i.boneInverses[o]),e.addScaledVector(_y.copy(tf).applyMatrix4(sf),a)}}return e.applyMatrix4(this.bindMatrixInverse)}boneTransform(t,e){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(t,e)}}class xy extends De{constructor(){super(),this.isBone=!0,this.type="Bone"}}class vy extends mn{constructor(t=null,e=1,i=1,s,r,a,o,c,l=an,h=an,u,d){super(null,a,o,c,l,h,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const af=new Bt,yy=new Bt;class v0{constructor(t=[],e=[]){this.uuid=Vn(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,s=this.bones.length;i<s;i++)this.boneInverses.push(new Bt)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){const i=new Bt;this.bones[t]&&i.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){const i=this.bones[t];i&&i.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){const i=this.bones[t];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const t=this.bones,e=this.boneInverses,i=this.boneMatrices,s=this.boneTexture;for(let r=0,a=t.length;r<a;r++){const o=t[r]?t[r].matrixWorld:yy;af.multiplyMatrices(o,e[r]),af.toArray(i,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new v0(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const e=new Float32Array(t*t*4);e.set(this.boneMatrices);const i=new vy(e,t,t,kn,Ti);return i.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=i,this}getBoneByName(t){for(let e=0,i=this.bones.length;e<i;e++){const s=this.bones[e];if(s.name===t)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let i=0,s=t.bones.length;i<s;i++){const r=t.bones[i];let a=e[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new xy),this.bones.push(a),this.boneInverses.push(new Bt().fromArray(t.boneInverses[i]))}return this.init(),this}toJSON(){const t={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;const e=this.bones,i=this.boneInverses;for(let s=0,r=e.length;s<r;s++){const a=e[s];t.bones.push(a.uuid);const o=i[s];t.boneInverses.push(o.toArray())}return t}}class oc extends An{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Ys=new Bt,of=new Bt,xo=[],cf=new Ii,My=new Bt,Kr=new Me,jr=new li;class Rr extends Me{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new oc(new Float32Array(i*16),16),this.instanceColor=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,My)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Ii),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Ys),cf.copy(t.boundingBox).applyMatrix4(Ys),this.boundingBox.union(cf)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new li),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Ys),jr.copy(t.boundingSphere).applyMatrix4(Ys),this.boundingSphere.union(jr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}raycast(t,e){const i=this.matrixWorld,s=this.count;if(Kr.geometry=this.geometry,Kr.material=this.material,Kr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),jr.copy(this.boundingSphere),jr.applyMatrix4(i),t.ray.intersectsSphere(jr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ys),of.multiplyMatrices(i,Ys),Kr.matrixWorld=of,Kr.raycast(t,xo);for(let a=0,o=xo.length;a<o;a++){const c=xo[a];c.instanceId=r,c.object=this,e.push(c)}xo.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new oc(new Float32Array(this.instanceMatrix.count*3),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class y0 extends hi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new At(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const lf=new C,hf=new C,uf=new Bt,bl=new Ra,vo=new li;class Gh extends De{constructor(t=new Ne,e=new y0){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let s=1,r=e.count;s<r;s++)lf.fromBufferAttribute(e,s-1),hf.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=lf.distanceTo(hf);t.setAttribute("lineDistance",new ne(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),vo.copy(i.boundingSphere),vo.applyMatrix4(s),vo.radius+=r,t.ray.intersectsSphere(vo)===!1)return;uf.copy(s).invert(),bl.copy(t.ray).applyMatrix4(uf);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=new C,h=new C,u=new C,d=new C,f=this.isLineSegments?2:1,m=i.index,g=i.attributes.position;if(m!==null){const p=Math.max(0,a.start),v=Math.min(m.count,a.start+a.count);for(let x=p,y=v-1;x<y;x+=f){const T=m.getX(x),b=m.getX(x+1);if(l.fromBufferAttribute(g,T),h.fromBufferAttribute(g,b),bl.distanceSqToSegment(l,h,d,u)>c)continue;d.applyMatrix4(this.matrixWorld);const D=t.ray.origin.distanceTo(d);D<t.near||D>t.far||e.push({distance:D,point:u.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{const p=Math.max(0,a.start),v=Math.min(g.count,a.start+a.count);for(let x=p,y=v-1;x<y;x+=f){if(l.fromBufferAttribute(g,x),h.fromBufferAttribute(g,x+1),bl.distanceSqToSegment(l,h,d,u)>c)continue;d.applyMatrix4(this.matrixWorld);const b=t.ray.origin.distanceTo(d);b<t.near||b>t.far||e.push({distance:b,point:u.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}const df=new C,ff=new C;class uT extends Gh{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[];for(let s=0,r=e.count;s<r;s+=2)df.fromBufferAttribute(e,s),ff.fromBufferAttribute(e,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+df.distanceTo(ff);t.setAttribute("lineDistance",new ne(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class dT extends Gh{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}}class Vh extends hi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new At(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const pf=new Bt,ih=new Ra,yo=new li,Mo=new C;class M0 extends De{constructor(t=new Ne,e=new Vh){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),yo.copy(i.boundingSphere),yo.applyMatrix4(s),yo.radius+=r,t.ray.intersectsSphere(yo)===!1)return;pf.copy(s).invert(),ih.copy(t.ray).applyMatrix4(pf);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=i.index,u=i.attributes.position;if(l!==null){const d=Math.max(0,a.start),f=Math.min(l.count,a.start+a.count);for(let m=d,_=f;m<_;m++){const g=l.getX(m);Mo.fromBufferAttribute(u,g),mf(Mo,g,c,s,t,e,this)}}else{const d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let m=d,_=f;m<_;m++)Mo.fromBufferAttribute(u,m),mf(Mo,m,c,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function mf(n,t,e,i,s,r,a){const o=ih.distanceSqToPoint(n);if(o<e){const c=new C;ih.closestPointToPoint(n,c),c.applyMatrix4(i);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:t,face:null,object:a})}}class Sy extends mn{constructor(t,e,i,s,r,a,o,c,l){super(t,e,i,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ui{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let i,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)i=this.getPoint(a/t),r+=i.distanceTo(s),e.push(r),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const i=this.getLengths();let s=0;const r=i.length;let a;e?a=e:a=t*i[r-1];let o=0,c=r-1,l;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),l=i[s]-a,l<0)o=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,i[s]===a)return s/(r-1);const h=i[s],d=i[s+1]-h,f=(a-h)/d;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),c=e||(a.isVector2?new nt:new C);return c.copy(o).sub(a).normalize(),c}getTangentAt(t,e){const i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){const i=new C,s=[],r=[],a=[],o=new C,c=new Bt;for(let f=0;f<=t;f++){const m=f/t;s[f]=this.getTangentAt(m,new C)}r[0]=new C,a[0]=new C;let l=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=l&&(l=h,i.set(1,0,0)),u<=l&&(l=u,i.set(0,1,0)),d<=l&&i.set(0,0,1),o.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();const m=Math.acos(qe(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(o,m))}a[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(qe(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let m=1;m<=t;m++)r[m].applyMatrix4(c.makeRotationAxis(s[m],f*m)),a[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Wh extends ui{constructor(t=0,e=0,i=1,s=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(t,e){const i=e||new nt,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+t*r;let c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*h-f*u+this.aX,l=d*u+f*h+this.aY}return i.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class by extends Wh{constructor(t,e,i,s,r,a){super(t,e,i,i,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Xh(){let n=0,t=0,e=0,i=0;function s(r,a,o,c){n=r,t=o,e=-3*r+3*a-2*o-c,i=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){s(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,h,u){let d=(a-r)/l-(o-r)/(l+h)+(o-a)/h,f=(o-a)/h-(c-a)/(h+u)+(c-o)/u;d*=h,f*=h,s(a,o,d,f)},calc:function(r){const a=r*r,o=a*r;return n+t*r+e*a+i*o}}}const So=new C,El=new Xh,wl=new Xh,Tl=new Xh;class S0 extends ui{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new C){const i=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t;let o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,h;this.closed||o>0?l=s[(o-1)%r]:(So.subVectors(s[0],s[1]).add(s[0]),l=So);const u=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(So.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=So),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let m=Math.pow(l.distanceToSquared(u),f),_=Math.pow(u.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(h),f);_<1e-4&&(_=1),m<1e-4&&(m=_),g<1e-4&&(g=_),El.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,m,_,g),wl.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,m,_,g),Tl.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,m,_,g)}else this.curveType==="catmullrom"&&(El.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),wl.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),Tl.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return i.set(El.calc(c),wl.calc(c),Tl.calc(c)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new C().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function gf(n,t,e,i,s){const r=(i-t)*.5,a=(s-e)*.5,o=n*n,c=n*o;return(2*e-2*i+r+a)*c+(-3*e+3*i-2*r-a)*o+r*n+e}function Ey(n,t){const e=1-n;return e*e*t}function wy(n,t){return 2*(1-n)*n*t}function Ty(n,t){return n*n*t}function ra(n,t,e,i){return Ey(n,t)+wy(n,e)+Ty(n,i)}function Ay(n,t){const e=1-n;return e*e*e*t}function Ry(n,t){const e=1-n;return 3*e*e*n*t}function Cy(n,t){return 3*(1-n)*n*n*t}function Ly(n,t){return n*n*n*t}function aa(n,t,e,i,s){return Ay(n,t)+Ry(n,e)+Cy(n,i)+Ly(n,s)}class b0 extends ui{constructor(t=new nt,e=new nt,i=new nt,s=new nt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new nt){const i=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(aa(t,s.x,r.x,a.x,o.x),aa(t,s.y,r.y,a.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Py extends ui{constructor(t=new C,e=new C,i=new C,s=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new C){const i=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(aa(t,s.x,r.x,a.x,o.x),aa(t,s.y,r.y,a.y,o.y),aa(t,s.z,r.z,a.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class E0 extends ui{constructor(t=new nt,e=new nt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new nt){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new nt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Iy extends ui{constructor(t=new C,e=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new C){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new C){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class w0 extends ui{constructor(t=new nt,e=new nt,i=new nt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new nt){const i=e,s=this.v0,r=this.v1,a=this.v2;return i.set(ra(t,s.x,r.x,a.x),ra(t,s.y,r.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Dy extends ui{constructor(t=new C,e=new C,i=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new C){const i=e,s=this.v0,r=this.v1,a=this.v2;return i.set(ra(t,s.x,r.x,a.x),ra(t,s.y,r.y,a.y),ra(t,s.z,r.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class T0 extends ui{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new nt){const i=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,c=s[a===0?a:a-1],l=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return i.set(gf(o,c.x,l.x,h.x,u.x),gf(o,c.y,l.y,h.y,u.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new nt().fromArray(s))}return this}}var sh=Object.freeze({__proto__:null,ArcCurve:by,CatmullRomCurve3:S0,CubicBezierCurve:b0,CubicBezierCurve3:Py,EllipseCurve:Wh,LineCurve:E0,LineCurve3:Iy,QuadraticBezierCurve:w0,QuadraticBezierCurve3:Dy,SplineCurve:T0});class Ny extends ui{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new sh[i](e,t))}return this}getPoint(t,e){const i=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=i){const a=s[r]-i,o=this.curves[r],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let i;for(let s=0,r=this.curves;s<r.length;s++){const a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,c=a.getPoints(o);for(let l=0;l<c.length;l++){const h=c[l];i&&i.equals(h)||(e.push(h),i=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const s=t.curves[e];this.curves.push(new sh[s.type]().fromJSON(s))}return this}}class rh extends Ny{constructor(t){super(),this.type="Path",this.currentPoint=new nt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const i=new E0(this.currentPoint.clone(),new nt(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){const r=new w0(this.currentPoint.clone(),new nt(t,e),new nt(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,r,a){const o=new b0(this.currentPoint.clone(),new nt(t,e),new nt(i,s),new nt(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),i=new T0(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,r,a){const o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+o,e+c,i,s,r,a),this}absarc(t,e,i,s,r,a){return this.absellipse(t,e,i,i,s,r,a),this}ellipse(t,e,i,s,r,a,o,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,i,s,r,a,o,c),this}absellipse(t,e,i,s,r,a,o,c){const l=new Wh(t,e,i,s,r,a,o,c);if(this.curves.length>0){const u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Ac extends Ne{constructor(t=[new nt(0,-.5),new nt(.5,0),new nt(0,.5)],e=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:i,phiLength:s},e=Math.floor(e),s=qe(s,0,Math.PI*2);const r=[],a=[],o=[],c=[],l=[],h=1/e,u=new C,d=new nt,f=new C,m=new C,_=new C;let g=0,p=0;for(let v=0;v<=t.length-1;v++)switch(v){case 0:g=t[v+1].x-t[v].x,p=t[v+1].y-t[v].y,f.x=p*1,f.y=-g,f.z=p*0,_.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case t.length-1:c.push(_.x,_.y,_.z);break;default:g=t[v+1].x-t[v].x,p=t[v+1].y-t[v].y,f.x=p*1,f.y=-g,f.z=p*0,m.copy(f),f.x+=_.x,f.y+=_.y,f.z+=_.z,f.normalize(),c.push(f.x,f.y,f.z),_.copy(m)}for(let v=0;v<=e;v++){const x=i+v*h*s,y=Math.sin(x),T=Math.cos(x);for(let b=0;b<=t.length-1;b++){u.x=t[b].x*y,u.y=t[b].y,u.z=t[b].x*T,a.push(u.x,u.y,u.z),d.x=v/e,d.y=b/(t.length-1),o.push(d.x,d.y);const E=c[3*b+0]*y,D=c[3*b+1],M=c[3*b+0]*T;l.push(E,D,M)}}for(let v=0;v<e;v++)for(let x=0;x<t.length-1;x++){const y=x+v*t.length,T=y,b=y+t.length,E=y+t.length+1,D=y+1;r.push(T,b,D),r.push(E,D,b)}this.setIndex(r),this.setAttribute("position",new ne(a,3)),this.setAttribute("uv",new ne(o,2)),this.setAttribute("normal",new ne(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ac(t.points,t.segments,t.phiStart,t.phiLength)}}class oa extends Ac{constructor(t=1,e=1,i=4,s=8){const r=new rh;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(i),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:i,radialSegments:s}}static fromJSON(t){return new oa(t.radius,t.length,t.capSegments,t.radialSegments)}}class qh extends Ne{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);const r=[],a=[],o=[],c=[],l=new C,h=new nt;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){const f=i+u/e*s;l.x=t*Math.cos(f),l.y=t*Math.sin(f),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[d]/t+1)/2,h.y=(a[d+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new ne(a,3)),this.setAttribute("normal",new ne(o,3)),this.setAttribute("uv",new ne(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qh(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Xe extends Ne{constructor(t=1,e=1,i=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],d=[],f=[];let m=0;const _=[],g=i/2;let p=0;v(),a===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new ne(u,3)),this.setAttribute("normal",new ne(d,3)),this.setAttribute("uv",new ne(f,2));function v(){const y=new C,T=new C;let b=0;const E=(e-t)/i;for(let D=0;D<=r;D++){const M=[],w=D/r,O=w*(e-t)+t;for(let K=0;K<=s;K++){const tt=K/s,L=tt*c+o,P=Math.sin(L),U=Math.cos(L);T.x=O*P,T.y=-w*i+g,T.z=O*U,u.push(T.x,T.y,T.z),y.set(P,E,U).normalize(),d.push(y.x,y.y,y.z),f.push(tt,1-w),M.push(m++)}_.push(M)}for(let D=0;D<s;D++)for(let M=0;M<r;M++){const w=_[M][D],O=_[M+1][D],K=_[M+1][D+1],tt=_[M][D+1];h.push(w,O,tt),h.push(O,K,tt),b+=6}l.addGroup(p,b,0),p+=b}function x(y){const T=m,b=new nt,E=new C;let D=0;const M=y===!0?t:e,w=y===!0?1:-1;for(let K=1;K<=s;K++)u.push(0,g*w,0),d.push(0,w,0),f.push(.5,.5),m++;const O=m;for(let K=0;K<=s;K++){const L=K/s*c+o,P=Math.cos(L),U=Math.sin(L);E.x=M*U,E.y=g*w,E.z=M*P,u.push(E.x,E.y,E.z),d.push(0,w,0),b.x=P*.5+.5,b.y=U*.5*w+.5,f.push(b.x,b.y),m++}for(let K=0;K<s;K++){const tt=T+K,L=O+K;y===!0?h.push(L,L+1,tt):h.push(L+1,L,tt),D+=3}l.addGroup(p,D,y===!0?1:2),p+=D}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xe(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Dn extends Xe{constructor(t=1,e=1,i=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,i,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new Dn(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Yh extends Ne{constructor(t=[],e=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:s};const r=[],a=[];o(s),l(i),h(),this.setAttribute("position",new ne(r,3)),this.setAttribute("normal",new ne(r.slice(),3)),this.setAttribute("uv",new ne(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(v){const x=new C,y=new C,T=new C;for(let b=0;b<e.length;b+=3)f(e[b+0],x),f(e[b+1],y),f(e[b+2],T),c(x,y,T,v)}function c(v,x,y,T){const b=T+1,E=[];for(let D=0;D<=b;D++){E[D]=[];const M=v.clone().lerp(y,D/b),w=x.clone().lerp(y,D/b),O=b-D;for(let K=0;K<=O;K++)K===0&&D===b?E[D][K]=M:E[D][K]=M.clone().lerp(w,K/O)}for(let D=0;D<b;D++)for(let M=0;M<2*(b-D)-1;M++){const w=Math.floor(M/2);M%2===0?(d(E[D][w+1]),d(E[D+1][w]),d(E[D][w])):(d(E[D][w+1]),d(E[D+1][w+1]),d(E[D+1][w]))}}function l(v){const x=new C;for(let y=0;y<r.length;y+=3)x.x=r[y+0],x.y=r[y+1],x.z=r[y+2],x.normalize().multiplyScalar(v),r[y+0]=x.x,r[y+1]=x.y,r[y+2]=x.z}function h(){const v=new C;for(let x=0;x<r.length;x+=3){v.x=r[x+0],v.y=r[x+1],v.z=r[x+2];const y=g(v)/2/Math.PI+.5,T=p(v)/Math.PI+.5;a.push(y,1-T)}m(),u()}function u(){for(let v=0;v<a.length;v+=6){const x=a[v+0],y=a[v+2],T=a[v+4],b=Math.max(x,y,T),E=Math.min(x,y,T);b>.9&&E<.1&&(x<.2&&(a[v+0]+=1),y<.2&&(a[v+2]+=1),T<.2&&(a[v+4]+=1))}}function d(v){r.push(v.x,v.y,v.z)}function f(v,x){const y=v*3;x.x=t[y+0],x.y=t[y+1],x.z=t[y+2]}function m(){const v=new C,x=new C,y=new C,T=new C,b=new nt,E=new nt,D=new nt;for(let M=0,w=0;M<r.length;M+=9,w+=6){v.set(r[M+0],r[M+1],r[M+2]),x.set(r[M+3],r[M+4],r[M+5]),y.set(r[M+6],r[M+7],r[M+8]),b.set(a[w+0],a[w+1]),E.set(a[w+2],a[w+3]),D.set(a[w+4],a[w+5]),T.copy(v).add(x).add(y).divideScalar(3);const O=g(T);_(b,w+0,v,O),_(E,w+2,x,O),_(D,w+4,y,O)}}function _(v,x,y,T){T<0&&v.x===1&&(a[x]=v.x-1),y.x===0&&y.z===0&&(a[x]=T/2/Math.PI+.5)}function g(v){return Math.atan2(v.z,-v.x)}function p(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Yh(t.vertices,t.indices,t.radius,t.details)}}class La extends rh{constructor(t){super(t),this.uuid=Vn(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let i=0,s=this.holes.length;i<s;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const s=t.holes[e];this.holes.push(new rh().fromJSON(s))}return this}}const Uy={triangulate:function(n,t,e=2){const i=t&&t.length,s=i?t[0]*e:n.length;let r=A0(n,0,s,e,!0);const a=[];if(!r||r.next===r.prev)return a;let o,c,l,h,u,d,f;if(i&&(r=ky(n,t,r,e)),n.length>80*e){o=l=n[0],c=h=n[1];for(let m=e;m<s;m+=e)u=n[m],d=n[m+1],u<o&&(o=u),d<c&&(c=d),u>l&&(l=u),d>h&&(h=d);f=Math.max(l-o,h-c),f=f!==0?32767/f:0}return ga(r,a,e,o,c,f,0),a}};function A0(n,t,e,i,s){let r,a;if(s===Jy(n,t,e,i)>0)for(r=t;r<e;r+=i)a=_f(r,n[r],n[r+1],a);else for(r=e-i;r>=t;r-=i)a=_f(r,n[r],n[r+1],a);return a&&Rc(a,a.next)&&(xa(a),a=a.next),a}function Ss(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(Rc(e,e.next)||Oe(e.prev,e,e.next)===0)){if(xa(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function ga(n,t,e,i,s,r,a){if(!n)return;!a&&r&&Xy(n,i,s,r);let o=n,c,l;for(;n.prev!==n.next;){if(c=n.prev,l=n.next,r?Fy(n,i,s,r):Oy(n)){t.push(c.i/e|0),t.push(n.i/e|0),t.push(l.i/e|0),xa(n),n=l.next,o=l.next;continue}if(n=l,n===o){a?a===1?(n=zy(Ss(n),t,e),ga(n,t,e,i,s,r,2)):a===2&&By(n,t,e,i,s,r):ga(Ss(n),t,e,i,s,r,1);break}}}function Oy(n){const t=n.prev,e=n,i=n.next;if(Oe(t,e,i)>=0)return!1;const s=t.x,r=e.x,a=i.x,o=t.y,c=e.y,l=i.y,h=s<r?s<a?s:a:r<a?r:a,u=o<c?o<l?o:l:c<l?c:l,d=s>r?s>a?s:a:r>a?r:a,f=o>c?o>l?o:l:c>l?c:l;let m=i.next;for(;m!==t;){if(m.x>=h&&m.x<=d&&m.y>=u&&m.y<=f&&hr(s,o,r,c,a,l,m.x,m.y)&&Oe(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Fy(n,t,e,i){const s=n.prev,r=n,a=n.next;if(Oe(s,r,a)>=0)return!1;const o=s.x,c=r.x,l=a.x,h=s.y,u=r.y,d=a.y,f=o<c?o<l?o:l:c<l?c:l,m=h<u?h<d?h:d:u<d?u:d,_=o>c?o>l?o:l:c>l?c:l,g=h>u?h>d?h:d:u>d?u:d,p=ah(f,m,t,e,i),v=ah(_,g,t,e,i);let x=n.prevZ,y=n.nextZ;for(;x&&x.z>=p&&y&&y.z<=v;){if(x.x>=f&&x.x<=_&&x.y>=m&&x.y<=g&&x!==s&&x!==a&&hr(o,h,c,u,l,d,x.x,x.y)&&Oe(x.prev,x,x.next)>=0||(x=x.prevZ,y.x>=f&&y.x<=_&&y.y>=m&&y.y<=g&&y!==s&&y!==a&&hr(o,h,c,u,l,d,y.x,y.y)&&Oe(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;x&&x.z>=p;){if(x.x>=f&&x.x<=_&&x.y>=m&&x.y<=g&&x!==s&&x!==a&&hr(o,h,c,u,l,d,x.x,x.y)&&Oe(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;y&&y.z<=v;){if(y.x>=f&&y.x<=_&&y.y>=m&&y.y<=g&&y!==s&&y!==a&&hr(o,h,c,u,l,d,y.x,y.y)&&Oe(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function zy(n,t,e){let i=n;do{const s=i.prev,r=i.next.next;!Rc(s,r)&&R0(s,i,i.next,r)&&_a(s,r)&&_a(r,s)&&(t.push(s.i/e|0),t.push(i.i/e|0),t.push(r.i/e|0),xa(i),xa(i.next),i=n=r),i=i.next}while(i!==n);return Ss(i)}function By(n,t,e,i,s,r){let a=n;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Ky(a,o)){let c=C0(a,o);a=Ss(a,a.next),c=Ss(c,c.next),ga(a,t,e,i,s,r,0),ga(c,t,e,i,s,r,0);return}o=o.next}a=a.next}while(a!==n)}function ky(n,t,e,i){const s=[];let r,a,o,c,l;for(r=0,a=t.length;r<a;r++)o=t[r]*i,c=r<a-1?t[r+1]*i:n.length,l=A0(n,o,c,i,!1),l===l.next&&(l.steiner=!0),s.push(Yy(l));for(s.sort(Hy),r=0;r<s.length;r++)e=Gy(s[r],e);return e}function Hy(n,t){return n.x-t.x}function Gy(n,t){const e=Vy(n,t);if(!e)return t;const i=C0(e,n);return Ss(i,i.next),Ss(e,e.next)}function Vy(n,t){let e=t,i=-1/0,s;const r=n.x,a=n.y;do{if(a<=e.y&&a>=e.next.y&&e.next.y!==e.y){const d=e.x+(a-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=r&&d>i&&(i=d,s=e.x<e.next.x?e:e.next,d===r))return s}e=e.next}while(e!==t);if(!s)return null;const o=s,c=s.x,l=s.y;let h=1/0,u;e=s;do r>=e.x&&e.x>=c&&r!==e.x&&hr(a<l?r:i,a,c,l,a<l?i:r,a,e.x,e.y)&&(u=Math.abs(a-e.y)/(r-e.x),_a(e,n)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&Wy(s,e)))&&(s=e,h=u)),e=e.next;while(e!==o);return s}function Wy(n,t){return Oe(n.prev,n,t.prev)<0&&Oe(t.next,n,n.next)<0}function Xy(n,t,e,i){let s=n;do s.z===0&&(s.z=ah(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,qy(s)}function qy(n){let t,e,i,s,r,a,o,c,l=1;do{for(e=n,n=null,r=null,a=0;e;){for(a++,i=e,o=0,t=0;t<l&&(o++,i=i.nextZ,!!i);t++);for(c=l;o>0||c>0&&i;)o!==0&&(c===0||!i||e.z<=i.z)?(s=e,e=e.nextZ,o--):(s=i,i=i.nextZ,c--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;e=i}r.nextZ=null,l*=2}while(a>1);return n}function ah(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function Yy(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function hr(n,t,e,i,s,r,a,o){return(s-a)*(t-o)>=(n-a)*(r-o)&&(n-a)*(i-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(i-o)}function Ky(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!jy(n,t)&&(_a(n,t)&&_a(t,n)&&Zy(n,t)&&(Oe(n.prev,n,t.prev)||Oe(n,t.prev,t))||Rc(n,t)&&Oe(n.prev,n,n.next)>0&&Oe(t.prev,t,t.next)>0)}function Oe(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function Rc(n,t){return n.x===t.x&&n.y===t.y}function R0(n,t,e,i){const s=Eo(Oe(n,t,e)),r=Eo(Oe(n,t,i)),a=Eo(Oe(e,i,n)),o=Eo(Oe(e,i,t));return!!(s!==r&&a!==o||s===0&&bo(n,e,t)||r===0&&bo(n,i,t)||a===0&&bo(e,n,i)||o===0&&bo(e,t,i))}function bo(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function Eo(n){return n>0?1:n<0?-1:0}function jy(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&R0(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function _a(n,t){return Oe(n.prev,n,n.next)<0?Oe(n,t,n.next)>=0&&Oe(n,n.prev,t)>=0:Oe(n,t,n.prev)<0||Oe(n,n.next,t)<0}function Zy(n,t){let e=n,i=!1;const s=(n.x+t.x)/2,r=(n.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function C0(n,t){const e=new oh(n.i,n.x,n.y),i=new oh(t.i,t.x,t.y),s=n.next,r=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function _f(n,t,e,i){const s=new oh(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function xa(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function oh(n,t,e){this.i=n,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Jy(n,t,e,i){let s=0;for(let r=t,a=e-i;r<e;r+=i)s+=(n[a]-n[r])*(n[r+1]+n[a+1]),a=r;return s}class Zi{static area(t){const e=t.length;let i=0;for(let s=e-1,r=0;r<e;s=r++)i+=t[s].x*t[r].y-t[r].x*t[s].y;return i*.5}static isClockWise(t){return Zi.area(t)<0}static triangulateShape(t,e){const i=[],s=[],r=[];xf(t),vf(i,t);let a=t.length;e.forEach(xf);for(let c=0;c<e.length;c++)s.push(a),a+=e[c].length,vf(i,e[c]);const o=Uy.triangulate(i,s);for(let c=0;c<o.length;c+=3)r.push(o.slice(c,c+3));return r}}function xf(n){const t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function vf(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}class Cc extends Ne{constructor(t=new La([new nt(.5,.5),new nt(-.5,.5),new nt(-.5,-.5),new nt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const i=this,s=[],r=[];for(let o=0,c=t.length;o<c;o++){const l=t[o];a(l)}this.setAttribute("position",new ne(s,3)),this.setAttribute("uv",new ne(r,2)),this.computeVertexNormals();function a(o){const c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,m=e.bevelSize!==void 0?e.bevelSize:f-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,v=e.UVGenerator!==void 0?e.UVGenerator:$y;let x,y=!1,T,b,E,D;p&&(x=p.getSpacedPoints(h),y=!0,d=!1,T=p.computeFrenetFrames(h,!1),b=new C,E=new C,D=new C),d||(g=0,f=0,m=0,_=0);const M=o.extractPoints(l);let w=M.shape;const O=M.holes;if(!Zi.isClockWise(w)){w=w.reverse();for(let I=0,dt=O.length;I<dt;I++){const J=O[I];Zi.isClockWise(J)&&(O[I]=J.reverse())}}const tt=Zi.triangulateShape(w,O),L=w;for(let I=0,dt=O.length;I<dt;I++){const J=O[I];w=w.concat(J)}function P(I,dt,J){return dt||console.error("THREE.ExtrudeGeometry: vec does not exist"),I.clone().addScaledVector(dt,J)}const U=w.length,F=tt.length;function H(I,dt,J){let lt,Z,Pt;const vt=I.x-dt.x,A=I.y-dt.y,S=J.x-I.x,k=J.y-I.y,at=vt*vt+A*A,it=vt*k-A*S;if(Math.abs(it)>Number.EPSILON){const et=Math.sqrt(at),Tt=Math.sqrt(S*S+k*k),mt=dt.x-A/et,bt=dt.y+vt/et,Nt=J.x-k/Tt,Jt=J.y+S/Tt,st=((Nt-mt)*k-(Jt-bt)*S)/(vt*k-A*S);lt=mt+vt*st-I.x,Z=bt+A*st-I.y;const he=lt*lt+Z*Z;if(he<=2)return new nt(lt,Z);Pt=Math.sqrt(he/2)}else{let et=!1;vt>Number.EPSILON?S>Number.EPSILON&&(et=!0):vt<-Number.EPSILON?S<-Number.EPSILON&&(et=!0):Math.sign(A)===Math.sign(k)&&(et=!0),et?(lt=-A,Z=vt,Pt=Math.sqrt(at)):(lt=vt,Z=A,Pt=Math.sqrt(at/2))}return new nt(lt/Pt,Z/Pt)}const B=[];for(let I=0,dt=L.length,J=dt-1,lt=I+1;I<dt;I++,J++,lt++)J===dt&&(J=0),lt===dt&&(lt=0),B[I]=H(L[I],L[J],L[lt]);const q=[];let j,ut=B.concat();for(let I=0,dt=O.length;I<dt;I++){const J=O[I];j=[];for(let lt=0,Z=J.length,Pt=Z-1,vt=lt+1;lt<Z;lt++,Pt++,vt++)Pt===Z&&(Pt=0),vt===Z&&(vt=0),j[lt]=H(J[lt],J[Pt],J[vt]);q.push(j),ut=ut.concat(j)}for(let I=0;I<g;I++){const dt=I/g,J=f*Math.cos(dt*Math.PI/2),lt=m*Math.sin(dt*Math.PI/2)+_;for(let Z=0,Pt=L.length;Z<Pt;Z++){const vt=P(L[Z],B[Z],lt);St(vt.x,vt.y,-J)}for(let Z=0,Pt=O.length;Z<Pt;Z++){const vt=O[Z];j=q[Z];for(let A=0,S=vt.length;A<S;A++){const k=P(vt[A],j[A],lt);St(k.x,k.y,-J)}}}const X=m+_;for(let I=0;I<U;I++){const dt=d?P(w[I],ut[I],X):w[I];y?(E.copy(T.normals[0]).multiplyScalar(dt.x),b.copy(T.binormals[0]).multiplyScalar(dt.y),D.copy(x[0]).add(E).add(b),St(D.x,D.y,D.z)):St(dt.x,dt.y,0)}for(let I=1;I<=h;I++)for(let dt=0;dt<U;dt++){const J=d?P(w[dt],ut[dt],X):w[dt];y?(E.copy(T.normals[I]).multiplyScalar(J.x),b.copy(T.binormals[I]).multiplyScalar(J.y),D.copy(x[I]).add(E).add(b),St(D.x,D.y,D.z)):St(J.x,J.y,u/h*I)}for(let I=g-1;I>=0;I--){const dt=I/g,J=f*Math.cos(dt*Math.PI/2),lt=m*Math.sin(dt*Math.PI/2)+_;for(let Z=0,Pt=L.length;Z<Pt;Z++){const vt=P(L[Z],B[Z],lt);St(vt.x,vt.y,u+J)}for(let Z=0,Pt=O.length;Z<Pt;Z++){const vt=O[Z];j=q[Z];for(let A=0,S=vt.length;A<S;A++){const k=P(vt[A],j[A],lt);y?St(k.x,k.y+x[h-1].y,x[h-1].x+J):St(k.x,k.y,u+J)}}}$(),gt();function $(){const I=s.length/3;if(d){let dt=0,J=U*dt;for(let lt=0;lt<F;lt++){const Z=tt[lt];Ft(Z[2]+J,Z[1]+J,Z[0]+J)}dt=h+g*2,J=U*dt;for(let lt=0;lt<F;lt++){const Z=tt[lt];Ft(Z[0]+J,Z[1]+J,Z[2]+J)}}else{for(let dt=0;dt<F;dt++){const J=tt[dt];Ft(J[2],J[1],J[0])}for(let dt=0;dt<F;dt++){const J=tt[dt];Ft(J[0]+U*h,J[1]+U*h,J[2]+U*h)}}i.addGroup(I,s.length/3-I,0)}function gt(){const I=s.length/3;let dt=0;Rt(L,dt),dt+=L.length;for(let J=0,lt=O.length;J<lt;J++){const Z=O[J];Rt(Z,dt),dt+=Z.length}i.addGroup(I,s.length/3-I,1)}function Rt(I,dt){let J=I.length;for(;--J>=0;){const lt=J;let Z=J-1;Z<0&&(Z=I.length-1);for(let Pt=0,vt=h+g*2;Pt<vt;Pt++){const A=U*Pt,S=U*(Pt+1),k=dt+lt+A,at=dt+Z+A,it=dt+Z+S,et=dt+lt+S;Yt(k,at,it,et)}}}function St(I,dt,J){c.push(I),c.push(dt),c.push(J)}function Ft(I,dt,J){Ct(I),Ct(dt),Ct(J);const lt=s.length/3,Z=v.generateTopUV(i,s,lt-3,lt-2,lt-1);Wt(Z[0]),Wt(Z[1]),Wt(Z[2])}function Yt(I,dt,J,lt){Ct(I),Ct(dt),Ct(lt),Ct(dt),Ct(J),Ct(lt);const Z=s.length/3,Pt=v.generateSideWallUV(i,s,Z-6,Z-3,Z-2,Z-1);Wt(Pt[0]),Wt(Pt[1]),Wt(Pt[3]),Wt(Pt[1]),Wt(Pt[2]),Wt(Pt[3])}function Ct(I){s.push(c[I*3+0]),s.push(c[I*3+1]),s.push(c[I*3+2])}function Wt(I){r.push(I.x),r.push(I.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return Qy(e,i,t)}static fromJSON(t,e){const i=[];for(let r=0,a=t.shapes.length;r<a;r++){const o=e[t.shapes[r]];i.push(o)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new sh[s.type]().fromJSON(s)),new Cc(i,t.options)}}const $y={generateTopUV:function(n,t,e,i,s){const r=t[e*3],a=t[e*3+1],o=t[i*3],c=t[i*3+1],l=t[s*3],h=t[s*3+1];return[new nt(r,a),new nt(o,c),new nt(l,h)]},generateSideWallUV:function(n,t,e,i,s,r){const a=t[e*3],o=t[e*3+1],c=t[e*3+2],l=t[i*3],h=t[i*3+1],u=t[i*3+2],d=t[s*3],f=t[s*3+1],m=t[s*3+2],_=t[r*3],g=t[r*3+1],p=t[r*3+2];return Math.abs(o-h)<Math.abs(a-l)?[new nt(a,1-c),new nt(l,1-u),new nt(d,1-m),new nt(_,1-p)]:[new nt(o,1-c),new nt(h,1-u),new nt(f,1-m),new nt(g,1-p)]}};function Qy(n,t,e){if(e.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){const r=n[i];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Kh extends Ne{constructor(t=.5,e=1,i=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:a},i=Math.max(3,i),s=Math.max(1,s);const o=[],c=[],l=[],h=[];let u=t;const d=(e-t)/s,f=new C,m=new nt;for(let _=0;_<=s;_++){for(let g=0;g<=i;g++){const p=r+g/i*a;f.x=u*Math.cos(p),f.y=u*Math.sin(p),c.push(f.x,f.y,f.z),l.push(0,0,1),m.x=(f.x/e+1)/2,m.y=(f.y/e+1)/2,h.push(m.x,m.y)}u+=d}for(let _=0;_<s;_++){const g=_*(i+1);for(let p=0;p<i;p++){const v=p+g,x=v,y=v+i+1,T=v+i+2,b=v+1;o.push(x,y,b),o.push(y,T,b)}}this.setIndex(o),this.setAttribute("position",new ne(c,3)),this.setAttribute("normal",new ne(l,3)),this.setAttribute("uv",new ne(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Kh(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class jh extends Ne{constructor(t=new La([new nt(0,.5),new nt(-.5,-.5),new nt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const i=[],s=[],r=[],a=[];let o=0,c=0;if(Array.isArray(t)===!1)l(t);else for(let h=0;h<t.length;h++)l(t[h]),this.addGroup(o,c,h),o+=c,c=0;this.setIndex(i),this.setAttribute("position",new ne(s,3)),this.setAttribute("normal",new ne(r,3)),this.setAttribute("uv",new ne(a,2));function l(h){const u=s.length/3,d=h.extractPoints(e);let f=d.shape;const m=d.holes;Zi.isClockWise(f)===!1&&(f=f.reverse());for(let g=0,p=m.length;g<p;g++){const v=m[g];Zi.isClockWise(v)===!0&&(m[g]=v.reverse())}const _=Zi.triangulateShape(f,m);for(let g=0,p=m.length;g<p;g++){const v=m[g];f=f.concat(v)}for(let g=0,p=f.length;g<p;g++){const v=f[g];s.push(v.x,v.y,0),r.push(0,0,1),a.push(v.x,v.y)}for(let g=0,p=_.length;g<p;g++){const v=_[g],x=v[0]+u,y=v[1]+u,T=v[2]+u;i.push(x,y,T),c+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return tM(e,t)}static fromJSON(t,e){const i=[];for(let s=0,r=t.shapes.length;s<r;s++){const a=e[t.shapes[s]];i.push(a)}return new jh(i,t.curveSegments)}}function tM(n,t){if(t.shapes=[],Array.isArray(n))for(let e=0,i=n.length;e<i;e++){const s=n[e];t.shapes.push(s.uuid)}else t.shapes.push(n.uuid);return t}class In extends Ne{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const c=Math.min(a+o,Math.PI);let l=0;const h=[],u=new C,d=new C,f=[],m=[],_=[],g=[];for(let p=0;p<=i;p++){const v=[],x=p/i;let y=0;p===0&&a===0?y=.5/e:p===i&&c===Math.PI&&(y=-.5/e);for(let T=0;T<=e;T++){const b=T/e;u.x=-t*Math.cos(s+b*r)*Math.sin(a+x*o),u.y=t*Math.cos(a+x*o),u.z=t*Math.sin(s+b*r)*Math.sin(a+x*o),m.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),g.push(b+y,1-x),v.push(l++)}h.push(v)}for(let p=0;p<i;p++)for(let v=0;v<e;v++){const x=h[p][v+1],y=h[p][v],T=h[p+1][v],b=h[p+1][v+1];(p!==0||a>0)&&f.push(x,y,b),(p!==i-1||c<Math.PI)&&f.push(y,T,b)}this.setIndex(f),this.setAttribute("position",new ne(m,3)),this.setAttribute("normal",new ne(_,3)),this.setAttribute("uv",new ne(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new In(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Zh extends Yh{constructor(t=1,e=0){const i=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],s=[2,1,0,0,3,2,1,3,0,2,3,1];super(i,s,t,e),this.type="TetrahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Zh(t.radius,t.detail)}}class Ri extends Ne{constructor(t=1,e=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);const a=[],o=[],c=[],l=[],h=new C,u=new C,d=new C;for(let f=0;f<=i;f++)for(let m=0;m<=s;m++){const _=m/s*r,g=f/i*Math.PI*2;u.x=(t+e*Math.cos(g))*Math.cos(_),u.y=(t+e*Math.cos(g))*Math.sin(_),u.z=e*Math.sin(g),o.push(u.x,u.y,u.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(m/s),l.push(f/i)}for(let f=1;f<=i;f++)for(let m=1;m<=s;m++){const _=(s+1)*f+m-1,g=(s+1)*(f-1)+m-1,p=(s+1)*(f-1)+m,v=(s+1)*f+m;a.push(_,g,v),a.push(g,p,v)}this.setIndex(a),this.setAttribute("position",new ne(o,3)),this.setAttribute("normal",new ne(c,3)),this.setAttribute("uv",new ne(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ri(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class eM extends hi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new At(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new At(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ec,this.normalScale=new nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class fT extends eM{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new nt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return qe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new At(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new At(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new At(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class L0 extends hi{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new At(16777215),this.specular=new At(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new At(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ec,this.normalScale=new nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Sc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class ti extends hi{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new At(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new At(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ec,this.normalScale=new nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Sc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}function wo(n,t,e){return!n||!e&&n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function nM(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function iM(n){function t(s,r){return n[s]-n[r]}const e=n.length,i=new Array(e);for(let s=0;s!==e;++s)i[s]=s;return i.sort(t),i}function yf(n,t,e){const i=n.length,s=new n.constructor(i);for(let r=0,a=0;a!==i;++r){const o=e[r]*t;for(let c=0;c!==t;++c)s[a++]=n[o+c]}return s}function P0(n,t,e,i){let s=1,r=n[0];for(;r!==void 0&&r[i]===void 0;)r=n[s++];if(r===void 0)return;let a=r[i];if(a!==void 0)if(Array.isArray(a))do a=r[i],a!==void 0&&(t.push(r.time),e.push.apply(e,a)),r=n[s++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[i],a!==void 0&&(t.push(r.time),a.toArray(e,e.length)),r=n[s++];while(r!==void 0);else do a=r[i],a!==void 0&&(t.push(r.time),e.push(a)),r=n[s++];while(r!==void 0)}class Lc{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){const e=this.parameterPositions;let i=this._cachedIndex,s=e[i],r=e[i-1];t:{e:{let a;n:{i:if(!(t<s)){for(let o=i+2;;){if(s===void 0){if(t<r)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=e[++i],t<s)break e}a=e.length;break n}if(!(t>=r)){const o=e[1];t<o&&(i=2,r=o);for(let c=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(s=r,r=e[--i-1],t>=r)break e}a=i,i=0;break n}break t}for(;i<a;){const o=i+a>>>1;t<e[o]?a=o:i=o+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){const e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=i[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class sM extends Lc{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ar,endingEnd:ar}}intervalChanged_(t,e,i){const s=this.parameterPositions;let r=t-2,a=t+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case or:r=t,o=2*e-i;break;case tc:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=i}if(c===void 0)switch(this.getSettings_().endingEnd){case or:a=t,c=2*i-e;break;case tc:a=1,c=i+s[1]-s[0];break;default:a=t-1,c=e}const l=(i-e)*.5,h=this.valueSize;this._weightPrev=l/(e-o),this._weightNext=l/(c-i),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,i,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,m=(i-e)/(s-e),_=m*m,g=_*m,p=-d*g+2*d*_-d*m,v=(1+d)*g+(-1.5-2*d)*_+(-.5+d)*m+1,x=(-1-f)*g+(1.5+f)*_+.5*m,y=f*g-f*_;for(let T=0;T!==o;++T)r[T]=p*a[h+T]+v*a[l+T]+x*a[c+T]+y*a[u+T];return r}}class I0 extends Lc{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=(i-e)/(s-e),u=1-h;for(let d=0;d!==o;++d)r[d]=a[l+d]*u+a[c+d]*h;return r}}class rM extends Lc{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}}class di{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=wo(e,this.TimeBufferType),this.values=wo(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){const e=t.constructor;let i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:wo(t.times,Array),values:wo(t.values,Array)};const s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new rM(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new I0(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new sM(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case $o:e=this.InterpolantFactoryMethodDiscrete;break;case Qo:e=this.InterpolantFactoryMethodLinear;break;case Zc:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return $o;case this.InterpolantFactoryMethodLinear:return Qo;case this.InterpolantFactoryMethodSmooth:return Zc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){const e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t}return this}scale(t){if(t!==1){const e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t}return this}trim(t,e){const i=this.times,s=i.length;let r=0,a=s-1;for(;r!==s&&i[r]<t;)++r;for(;a!==-1&&i[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);const o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0;const e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);const i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){const c=i[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),t=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),t=!1;break}a=c}if(s!==void 0&&nM(s))for(let o=0,c=s.length;o!==c;++o){const l=s[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),t=!1;break}}return t}optimize(){const t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Zc,r=t.length-1;let a=1;for(let o=1;o<r;++o){let c=!1;const l=t[o],h=t[o+1];if(l!==h&&(o!==1||l!==t[0]))if(s)c=!0;else{const u=o*i,d=u-i,f=u+i;for(let m=0;m!==i;++m){const _=e[u+m];if(_!==e[d+m]||_!==e[f+m]){c=!0;break}}}if(c){if(o!==a){t[a]=t[o];const u=o*i,d=a*i;for(let f=0;f!==i;++f)e[d+f]=e[u+f]}++a}}if(r>0){t[a]=t[r];for(let o=r*i,c=a*i,l=0;l!==i;++l)e[c+l]=e[o+l];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*i)):(this.times=t,this.values=e),this}clone(){const t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}}di.prototype.TimeBufferType=Float32Array;di.prototype.ValueBufferType=Float32Array;di.prototype.DefaultInterpolation=Qo;class Fr extends di{}Fr.prototype.ValueTypeName="bool";Fr.prototype.ValueBufferType=Array;Fr.prototype.DefaultInterpolation=$o;Fr.prototype.InterpolantFactoryMethodLinear=void 0;Fr.prototype.InterpolantFactoryMethodSmooth=void 0;class D0 extends di{}D0.prototype.ValueTypeName="color";class cc extends di{}cc.prototype.ValueTypeName="number";class aM extends Lc{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(i-e)/(s-e);let l=t*o;for(let h=l+o;l!==h;l+=4)En.slerpFlat(r,0,a,l-o,a,l,c);return r}}class Pa extends di{InterpolantFactoryMethodLinear(t){return new aM(this.times,this.values,this.getValueSize(),t)}}Pa.prototype.ValueTypeName="quaternion";Pa.prototype.DefaultInterpolation=Qo;Pa.prototype.InterpolantFactoryMethodSmooth=void 0;class zr extends di{}zr.prototype.ValueTypeName="string";zr.prototype.ValueBufferType=Array;zr.prototype.DefaultInterpolation=$o;zr.prototype.InterpolantFactoryMethodLinear=void 0;zr.prototype.InterpolantFactoryMethodSmooth=void 0;class lc extends di{}lc.prototype.ValueTypeName="vector";class Mf{constructor(t,e=-1,i,s=Uh){this.name=t,this.tracks=i,this.duration=e,this.blendMode=s,this.uuid=Vn(),this.duration<0&&this.resetDuration()}static parse(t){const e=[],i=t.tracks,s=1/(t.fps||1);for(let a=0,o=i.length;a!==o;++a)e.push(cM(i[a]).scale(s));const r=new this(t.name,t.duration,e,t.blendMode);return r.uuid=t.uuid,r}static toJSON(t){const e=[],i=t.tracks,s={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode};for(let r=0,a=i.length;r!==a;++r)e.push(di.toJSON(i[r]));return s}static CreateFromMorphTargetSequence(t,e,i,s){const r=e.length,a=[];for(let o=0;o<r;o++){let c=[],l=[];c.push((o+r-1)%r,o,(o+1)%r),l.push(0,1,0);const h=iM(c);c=yf(c,1,h),l=yf(l,1,h),!s&&c[0]===0&&(c.push(r),l.push(l[0])),a.push(new cc(".morphTargetInfluences["+e[o].name+"]",c,l).scale(1/i))}return new this(t,-1,a)}static findByName(t,e){let i=t;if(!Array.isArray(t)){const s=t;i=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<i.length;s++)if(i[s].name===e)return i[s];return null}static CreateClipsFromMorphTargetSequences(t,e,i){const s={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,c=t.length;o<c;o++){const l=t[o],h=l.name.match(r);if(h&&h.length>1){const u=h[1];let d=s[u];d||(s[u]=d=[]),d.push(l)}}const a=[];for(const o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],e,i));return a}static parseAnimation(t,e){if(!t)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=function(u,d,f,m,_){if(f.length!==0){const g=[],p=[];P0(f,g,p,m),g.length!==0&&_.push(new u(d,g,p))}},s=[],r=t.name||"default",a=t.fps||30,o=t.blendMode;let c=t.length||-1;const l=t.hierarchy||[];for(let u=0;u<l.length;u++){const d=l[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let m;for(m=0;m<d.length;m++)if(d[m].morphTargets)for(let _=0;_<d[m].morphTargets.length;_++)f[d[m].morphTargets[_]]=-1;for(const _ in f){const g=[],p=[];for(let v=0;v!==d[m].morphTargets.length;++v){const x=d[m];g.push(x.time),p.push(x.morphTarget===_?1:0)}s.push(new cc(".morphTargetInfluence["+_+"]",g,p))}c=f.length*a}else{const f=".bones["+e[u].name+"]";i(lc,f+".position",d,"pos",s),i(Pa,f+".quaternion",d,"rot",s),i(lc,f+".scale",d,"scl",s)}}return s.length===0?null:new this(r,c,s,o)}resetDuration(){const t=this.tracks;let e=0;for(let i=0,s=t.length;i!==s;++i){const r=this.tracks[i];e=Math.max(e,r.times[r.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){const t=[];for(let e=0;e<this.tracks.length;e++)t.push(this.tracks[e].clone());return new this.constructor(this.name,this.duration,t,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function oM(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return cc;case"vector":case"vector2":case"vector3":case"vector4":return lc;case"color":return D0;case"quaternion":return Pa;case"bool":case"boolean":return Fr;case"string":return zr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function cM(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const t=oM(n.type);if(n.times===void 0){const e=[],i=[];P0(n.keys,e,i,"value"),n.times=e,n.values=i}return t.parse!==void 0?t.parse(n):new t(n.name,n.times,n.values,n.interpolation)}const Xi={enabled:!1,files:{},add:function(n,t){this.enabled!==!1&&(this.files[n]=t)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class lM{constructor(t,e,i){const s=this;let r=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){const u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){const f=l[u],m=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null}}}const hM=new lM;class Ia{constructor(t){this.manager=t!==void 0?t:hM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}Ia.DEFAULT_MATERIAL_NAME="__DEFAULT";const vi={};class uM extends Error{constructor(t,e){super(t),this.response=e}}class pT extends Ia{constructor(t){super(t)}load(t,e,i,s){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=Xi.get(t);if(r!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0),r;if(vi[t]!==void 0){vi[t].push({onLoad:e,onProgress:i,onError:s});return}vi[t]=[],vi[t].push({onLoad:e,onProgress:i,onError:s});const a=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const h=vi[t],u=l.body.getReader(),d=l.headers.get("Content-Length")||l.headers.get("X-File-Size"),f=d?parseInt(d):0,m=f!==0;let _=0;const g=new ReadableStream({start(p){v();function v(){u.read().then(({done:x,value:y})=>{if(x)p.close();else{_+=y.byteLength;const T=new ProgressEvent("progress",{lengthComputable:m,loaded:_,total:f});for(let b=0,E=h.length;b<E;b++){const D=h[b];D.onProgress&&D.onProgress(T)}p.enqueue(y),v()}})}}});return new Response(g)}else throw new uM(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return l.json();default:if(o===void 0)return l.text();{const u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(m=>f.decode(m))}}}).then(l=>{Xi.add(t,l);const h=vi[t];delete vi[t];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onLoad&&f.onLoad(l)}}).catch(l=>{const h=vi[t];if(h===void 0)throw this.manager.itemError(t),l;delete vi[t];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onError&&f.onError(l)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class dM extends Ia{constructor(t){super(t)}load(t,e,i,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,a=Xi.get(t);if(a!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0),a;const o=ma("img");function c(){h(),Xi.add(t,this),e&&e(this),r.manager.itemEnd(t)}function l(u){h(),s&&s(u),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(t),o.src=t,o}}class mT extends Ia{constructor(t){super(t)}load(t,e,i,s){const r=new mn,a=new dM(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){r.image=o,r.needsUpdate=!0,e!==void 0&&e(r)},i,s),r}}class Pc extends De{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new At(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}class N0 extends Pc{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(De.DEFAULT_UP),this.updateMatrix(),this.groundColor=new At(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Al=new Bt,Sf=new C,bf=new C;class Jh{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new nt(512,512),this.map=null,this.mapPass=null,this.matrix=new Bt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Bh,this._frameExtents=new nt(1,1),this._viewportCount=1,this._viewports=[new ye(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;Sf.setFromMatrixPosition(t.matrixWorld),e.position.copy(Sf),bf.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(bf),e.updateMatrixWorld(),Al.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Al),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Al)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class fM extends Jh{constructor(){super(new yn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,i=Tr*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(i!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=i,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class gT extends Pc{constructor(t,e,i=0,s=Math.PI/3,r=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(De.DEFAULT_UP),this.updateMatrix(),this.target=new De,this.distance=i,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new fM}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const Ef=new Bt,Zr=new C,Rl=new C;class pM extends Jh{constructor(){super(new yn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new nt(4,2),this._viewportCount=6,this._viewports=[new ye(2,1,1,1),new ye(0,1,1,1),new ye(3,1,1,1),new ye(1,1,1,1),new ye(3,0,1,1),new ye(1,0,1,1)],this._cubeDirections=[new C(1,0,0),new C(-1,0,0),new C(0,0,1),new C(0,0,-1),new C(0,1,0),new C(0,-1,0)],this._cubeUps=[new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,0,1),new C(0,0,-1)]}updateMatrices(t,e=0){const i=this.camera,s=this.matrix,r=t.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),Zr.setFromMatrixPosition(t.matrixWorld),i.position.copy(Zr),Rl.copy(i.position),Rl.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(Rl),i.updateMatrixWorld(),s.makeTranslation(-Zr.x,-Zr.y,-Zr.z),Ef.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ef)}}class Da extends Pc{constructor(t,e,i=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new pM}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class mM extends Jh{constructor(){super(new c0(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class $h extends Pc{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(De.DEFAULT_UP),this.updateMatrix(),this.target=new De,this.shadow=new mM}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class _T{static decodeText(t){if(typeof TextDecoder<"u")return new TextDecoder().decode(t);let e="";for(let i=0,s=t.length;i<s;i++)e+=String.fromCharCode(t[i]);try{return decodeURIComponent(escape(e))}catch{return e}}static extractUrlBase(t){const e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}}class xT extends Ia{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(t){return this.options=t,this}load(t,e,i,s){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,a=Xi.get(t);if(a!==void 0){if(r.manager.itemStart(t),a.then){a.then(l=>{e&&e(l),r.manager.itemEnd(t)}).catch(l=>{s&&s(l)});return}return setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0),a}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;const c=fetch(t,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return Xi.add(t,l),e&&e(l),r.manager.itemEnd(t),l}).catch(function(l){s&&s(l),Xi.remove(t),r.manager.itemError(t),r.manager.itemEnd(t)});Xi.add(t,c),r.manager.itemStart(t)}}class gM{constructor(t,e,i){this.binding=t,this.valueSize=i;let s,r,a;switch(e){case"quaternion":s=this._slerp,r=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(i*6),this._workIndex=5;break;case"string":case"bool":s=this._select,r=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(i*5);break;default:s=this._lerp,r=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(i*5)}this._mixBufferRegion=s,this._mixBufferRegionAdditive=r,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(t,e){const i=this.buffer,s=this.valueSize,r=t*s+s;let a=this.cumulativeWeight;if(a===0){for(let o=0;o!==s;++o)i[r+o]=i[o];a=e}else{a+=e;const o=e/a;this._mixBufferRegion(i,r,0,o,s)}this.cumulativeWeight=a}accumulateAdditive(t){const e=this.buffer,i=this.valueSize,s=i*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(e,s,0,t,i),this.cumulativeWeightAdditive+=t}apply(t){const e=this.valueSize,i=this.buffer,s=t*e+e,r=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const c=e*this._origIndex;this._mixBufferRegion(i,s,c,1-r,e)}a>0&&this._mixBufferRegionAdditive(i,s,this._addIndex*e,1,e);for(let c=e,l=e+e;c!==l;++c)if(i[c]!==i[c+e]){o.setValue(i,s);break}}saveOriginalState(){const t=this.binding,e=this.buffer,i=this.valueSize,s=i*this._origIndex;t.getValue(e,s);for(let r=i,a=s;r!==a;++r)e[r]=e[s+r%i];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const t=this.valueSize*3;this.binding.setValue(this.buffer,t)}_setAdditiveIdentityNumeric(){const t=this._addIndex*this.valueSize,e=t+this.valueSize;for(let i=t;i<e;i++)this.buffer[i]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const t=this._origIndex*this.valueSize,e=this._addIndex*this.valueSize;for(let i=0;i<this.valueSize;i++)this.buffer[e+i]=this.buffer[t+i]}_select(t,e,i,s,r){if(s>=.5)for(let a=0;a!==r;++a)t[e+a]=t[i+a]}_slerp(t,e,i,s){En.slerpFlat(t,e,t,e,t,i,s)}_slerpAdditive(t,e,i,s,r){const a=this._workIndex*r;En.multiplyQuaternionsFlat(t,a,t,e,t,i),En.slerpFlat(t,e,t,e,t,a,s)}_lerp(t,e,i,s,r){const a=1-s;for(let o=0;o!==r;++o){const c=e+o;t[c]=t[c]*a+t[i+o]*s}}_lerpAdditive(t,e,i,s,r){for(let a=0;a!==r;++a){const o=e+a;t[o]=t[o]+t[i+a]*s}}}const Qh="\\[\\]\\.:\\/",_M=new RegExp("["+Qh+"]","g"),tu="[^"+Qh+"]",xM="[^"+Qh.replace("\\.","")+"]",vM=/((?:WC+[\/:])*)/.source.replace("WC",tu),yM=/(WCOD+)?/.source.replace("WCOD",xM),MM=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",tu),SM=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",tu),bM=new RegExp("^"+vM+yM+MM+SM+"$"),EM=["material","materials","bones","map"];class wM{constructor(t,e,i){const s=i||ge.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();const i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){const i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}}class ge{constructor(t,e,i){this.path=e,this.parsedPath=i||ge.parseTrackName(e),this.node=ge.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new ge.Composite(t,e,i):new ge(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(_M,"")}static parseTrackName(t){const e=bM.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);const i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=i.nodeName.substring(s+1);EM.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){const i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){const i=function(r){for(let a=0;a<r.length;a++){const o=r[a];if(o.name===e||o.uuid===e)return o;const c=i(o.children);if(c)return c}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node;const e=this.parsedPath,i=e.objectName,s=e.propertyName;let r=e.propertyIndex;if(t||(t=ge.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=e.objectIndex;switch(i){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}const a=t[s];if(a===void 0){const l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}ge.Composite=wM;ge.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ge.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ge.prototype.GetterByBindingType=[ge.prototype._getValue_direct,ge.prototype._getValue_array,ge.prototype._getValue_arrayElement,ge.prototype._getValue_toArray];ge.prototype.SetterByBindingTypeAndVersioning=[[ge.prototype._setValue_direct,ge.prototype._setValue_direct_setNeedsUpdate,ge.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ge.prototype._setValue_array,ge.prototype._setValue_array_setNeedsUpdate,ge.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ge.prototype._setValue_arrayElement,ge.prototype._setValue_arrayElement_setNeedsUpdate,ge.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ge.prototype._setValue_fromArray,ge.prototype._setValue_fromArray_setNeedsUpdate,ge.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class TM{constructor(t,e,i=null,s=e.blendMode){this._mixer=t,this._clip=e,this._localRoot=i,this.blendMode=s;const r=e.tracks,a=r.length,o=new Array(a),c={endingStart:ar,endingEnd:ar};for(let l=0;l!==a;++l){const h=r[l].createInterpolant(null);o[l]=h,h.settings=c}this._interpolantSettings=c,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Og,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(t){return this._startTime=t,this}setLoop(t,e){return this.loop=t,this.repetitions=e,this}setEffectiveWeight(t){return this.weight=t,this._effectiveWeight=this.enabled?t:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(t){return this._scheduleFading(t,0,1)}fadeOut(t){return this._scheduleFading(t,1,0)}crossFadeFrom(t,e,i){if(t.fadeOut(e),this.fadeIn(e),i){const s=this._clip.duration,r=t._clip.duration,a=r/s,o=s/r;t.warp(1,a,e),this.warp(o,1,e)}return this}crossFadeTo(t,e,i){return t.crossFadeFrom(this,e,i)}stopFading(){const t=this._weightInterpolant;return t!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}setEffectiveTimeScale(t){return this.timeScale=t,this._effectiveTimeScale=this.paused?0:t,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(t){return this.timeScale=this._clip.duration/t,this.stopWarping()}syncWith(t){return this.time=t.time,this.timeScale=t.timeScale,this.stopWarping()}halt(t){return this.warp(this._effectiveTimeScale,0,t)}warp(t,e,i){const s=this._mixer,r=s.time,a=this.timeScale;let o=this._timeScaleInterpolant;o===null&&(o=s._lendControlInterpolant(),this._timeScaleInterpolant=o);const c=o.parameterPositions,l=o.sampleValues;return c[0]=r,c[1]=r+i,l[0]=t/a,l[1]=e/a,this}stopWarping(){const t=this._timeScaleInterpolant;return t!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(t,e,i,s){if(!this.enabled){this._updateWeight(t);return}const r=this._startTime;if(r!==null){const c=(t-r)*i;c<0||i===0?e=0:(this._startTime=null,e=i*c)}e*=this._updateTimeScale(t);const a=this._updateTime(e),o=this._updateWeight(t);if(o>0){const c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case zg:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(a),l[h].accumulateAdditive(o);break;case Uh:default:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(a),l[h].accumulate(s,o)}}}_updateWeight(t){let e=0;if(this.enabled){e=this.weight;const i=this._weightInterpolant;if(i!==null){const s=i.evaluate(t)[0];e*=s,t>i.parameterPositions[1]&&(this.stopFading(),s===0&&(this.enabled=!1))}}return this._effectiveWeight=e,e}_updateTimeScale(t){let e=0;if(!this.paused){e=this.timeScale;const i=this._timeScaleInterpolant;if(i!==null){const s=i.evaluate(t)[0];e*=s,t>i.parameterPositions[1]&&(this.stopWarping(),e===0?this.paused=!0:this.timeScale=e)}}return this._effectiveTimeScale=e,e}_updateTime(t){const e=this._clip.duration,i=this.loop;let s=this.time+t,r=this._loopCount;const a=i===Fg;if(t===0)return r===-1?s:a&&(r&1)===1?e-s:s;if(i===Ug){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));t:{if(s>=e)s=e;else if(s<0)s=0;else{this.time=s;break t}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:t<0?-1:1})}}else{if(r===-1&&(t>=0?(r=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),s>=e||s<0){const o=Math.floor(s/e);s-=e*o,r+=Math.abs(o);const c=this.repetitions-r;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,s=t>0?e:0,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:t>0?1:-1});else{if(c===1){const l=t<0;this._setEndings(l,!l,a)}else this._setEndings(!1,!1,a);this._loopCount=r,this.time=s,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=s;if(a&&(r&1)===1)return e-s}return s}_setEndings(t,e,i){const s=this._interpolantSettings;i?(s.endingStart=or,s.endingEnd=or):(t?s.endingStart=this.zeroSlopeAtStart?or:ar:s.endingStart=tc,e?s.endingEnd=this.zeroSlopeAtEnd?or:ar:s.endingEnd=tc)}_scheduleFading(t,e,i){const s=this._mixer,r=s.time;let a=this._weightInterpolant;a===null&&(a=s._lendControlInterpolant(),this._weightInterpolant=a);const o=a.parameterPositions,c=a.sampleValues;return o[0]=r,c[0]=e,o[1]=r+t,c[1]=i,this}}const AM=new Float32Array(1);class RM extends ws{constructor(t){super(),this._root=t,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(t,e){const i=t._localRoot||this._root,s=t._clip.tracks,r=s.length,a=t._propertyBindings,o=t._interpolants,c=i.uuid,l=this._bindingsByRootAndName;let h=l[c];h===void 0&&(h={},l[c]=h);for(let u=0;u!==r;++u){const d=s[u],f=d.name;let m=h[f];if(m!==void 0)++m.referenceCount,a[u]=m;else{if(m=a[u],m!==void 0){m._cacheIndex===null&&(++m.referenceCount,this._addInactiveBinding(m,c,f));continue}const _=e&&e._propertyBindings[u].binding.parsedPath;m=new gM(ge.create(i,f,_),d.ValueTypeName,d.getValueSize()),++m.referenceCount,this._addInactiveBinding(m,c,f),a[u]=m}o[u].resultBuffer=m.buffer}}_activateAction(t){if(!this._isActiveAction(t)){if(t._cacheIndex===null){const i=(t._localRoot||this._root).uuid,s=t._clip.uuid,r=this._actionsByClip[s];this._bindAction(t,r&&r.knownActions[0]),this._addInactiveAction(t,s,i)}const e=t._propertyBindings;for(let i=0,s=e.length;i!==s;++i){const r=e[i];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(t)}}_deactivateAction(t){if(this._isActiveAction(t)){const e=t._propertyBindings;for(let i=0,s=e.length;i!==s;++i){const r=e[i];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(t)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const t=this;this.stats={actions:{get total(){return t._actions.length},get inUse(){return t._nActiveActions}},bindings:{get total(){return t._bindings.length},get inUse(){return t._nActiveBindings}},controlInterpolants:{get total(){return t._controlInterpolants.length},get inUse(){return t._nActiveControlInterpolants}}}}_isActiveAction(t){const e=t._cacheIndex;return e!==null&&e<this._nActiveActions}_addInactiveAction(t,e,i){const s=this._actions,r=this._actionsByClip;let a=r[e];if(a===void 0)a={knownActions:[t],actionByRoot:{}},t._byClipCacheIndex=0,r[e]=a;else{const o=a.knownActions;t._byClipCacheIndex=o.length,o.push(t)}t._cacheIndex=s.length,s.push(t),a.actionByRoot[i]=t}_removeInactiveAction(t){const e=this._actions,i=e[e.length-1],s=t._cacheIndex;i._cacheIndex=s,e[s]=i,e.pop(),t._cacheIndex=null;const r=t._clip.uuid,a=this._actionsByClip,o=a[r],c=o.knownActions,l=c[c.length-1],h=t._byClipCacheIndex;l._byClipCacheIndex=h,c[h]=l,c.pop(),t._byClipCacheIndex=null;const u=o.actionByRoot,d=(t._localRoot||this._root).uuid;delete u[d],c.length===0&&delete a[r],this._removeInactiveBindingsForAction(t)}_removeInactiveBindingsForAction(t){const e=t._propertyBindings;for(let i=0,s=e.length;i!==s;++i){const r=e[i];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(t){const e=this._actions,i=t._cacheIndex,s=this._nActiveActions++,r=e[s];t._cacheIndex=s,e[s]=t,r._cacheIndex=i,e[i]=r}_takeBackAction(t){const e=this._actions,i=t._cacheIndex,s=--this._nActiveActions,r=e[s];t._cacheIndex=s,e[s]=t,r._cacheIndex=i,e[i]=r}_addInactiveBinding(t,e,i){const s=this._bindingsByRootAndName,r=this._bindings;let a=s[e];a===void 0&&(a={},s[e]=a),a[i]=t,t._cacheIndex=r.length,r.push(t)}_removeInactiveBinding(t){const e=this._bindings,i=t.binding,s=i.rootNode.uuid,r=i.path,a=this._bindingsByRootAndName,o=a[s],c=e[e.length-1],l=t._cacheIndex;c._cacheIndex=l,e[l]=c,e.pop(),delete o[r],Object.keys(o).length===0&&delete a[s]}_lendBinding(t){const e=this._bindings,i=t._cacheIndex,s=this._nActiveBindings++,r=e[s];t._cacheIndex=s,e[s]=t,r._cacheIndex=i,e[i]=r}_takeBackBinding(t){const e=this._bindings,i=t._cacheIndex,s=--this._nActiveBindings,r=e[s];t._cacheIndex=s,e[s]=t,r._cacheIndex=i,e[i]=r}_lendControlInterpolant(){const t=this._controlInterpolants,e=this._nActiveControlInterpolants++;let i=t[e];return i===void 0&&(i=new I0(new Float32Array(2),new Float32Array(2),1,AM),i.__cacheIndex=e,t[e]=i),i}_takeBackControlInterpolant(t){const e=this._controlInterpolants,i=t.__cacheIndex,s=--this._nActiveControlInterpolants,r=e[s];t.__cacheIndex=s,e[s]=t,r.__cacheIndex=i,e[i]=r}clipAction(t,e,i){const s=e||this._root,r=s.uuid;let a=typeof t=="string"?Mf.findByName(s,t):t;const o=a!==null?a.uuid:t,c=this._actionsByClip[o];let l=null;if(i===void 0&&(a!==null?i=a.blendMode:i=Uh),c!==void 0){const u=c.actionByRoot[r];if(u!==void 0&&u.blendMode===i)return u;l=c.knownActions[0],a===null&&(a=l._clip)}if(a===null)return null;const h=new TM(this,a,e,i);return this._bindAction(h,l),this._addInactiveAction(h,o,r),h}existingAction(t,e){const i=e||this._root,s=i.uuid,r=typeof t=="string"?Mf.findByName(i,t):t,a=r?r.uuid:t,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[s]||null}stopAllAction(){const t=this._actions,e=this._nActiveActions;for(let i=e-1;i>=0;--i)t[i].stop();return this}update(t){t*=this.timeScale;const e=this._actions,i=this._nActiveActions,s=this.time+=t,r=Math.sign(t),a=this._accuIndex^=1;for(let l=0;l!==i;++l)e[l]._update(s,t,r,a);const o=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)o[l].apply(a);return this}setTime(t){this.time=0;for(let e=0;e<this._actions.length;e++)this._actions[e].time=0;return this.update(t)}getRoot(){return this._root}uncacheClip(t){const e=this._actions,i=t.uuid,s=this._actionsByClip,r=s[i];if(r!==void 0){const a=r.knownActions;for(let o=0,c=a.length;o!==c;++o){const l=a[o];this._deactivateAction(l);const h=l._cacheIndex,u=e[e.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,u._cacheIndex=h,e[h]=u,e.pop(),this._removeInactiveBindingsForAction(l)}delete s[i]}}uncacheRoot(t){const e=t.uuid,i=this._actionsByClip;for(const a in i){const o=i[a].actionByRoot,c=o[e];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}const s=this._bindingsByRootAndName,r=s[e];if(r!==void 0)for(const a in r){const o=r[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(t,e){const i=this.existingAction(t,e);i!==null&&(this._deactivateAction(i),this._removeInactiveAction(i))}}class CM{constructor(t,e,i=0,s=1/0){this.ray=new Ra(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new zh,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(t,e=!0,i=[]){return ch(t,this,i,e),i.sort(wf),i}intersectObjects(t,e=!0,i=[]){for(let s=0,r=t.length;s<r;s++)ch(t[s],this,i,e);return i.sort(wf),i}}function wf(n,t){return n.distance-t.distance}function ch(n,t,e,i){if(n.layers.test(t.layers)&&n.raycast(t,e),i===!0){const s=n.children;for(let r=0,a=s.length;r<a;r++)ch(s[r],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Dh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Dh);const LM=""+new URL("glocken-20-krampusse-DmDmHR1P.mp3",import.meta.url).href,Na=230,Ye=20,Gi=380,Tf=150,PM=16,IM=17,DM=12,NM=7.5,Af=260,UM=12,OM=4.5,Rf=6,$r="east",yi=3.6,Ks=4.2,js=17,Cl=10,FM=.9,Cf=7,Zs=3.4,zM=[2.7,6.2,9.6],BM=9,kM=6.5,HM=22,ls=12,U0=7,hc=4,GM=3,VM=1.6,Lf=2.6,WM=.72,qo=3.6,To=3.8,Ll=[[9,23.2],[36,21],[38.5,2],[36.5,-.4]],Pl=.5,XM=1.8,Yo=.45,bs=100,ca=5.4,O0=8.6,qM=7.6,Ic=22,Il=.55,YM=5,KM=7,jM=100,lh=2.5,ZM=.6,JM=62,$M=3,Pf=100,If=100,hh=2.5,Df=30,F0=6,QM=34,gr={runner:{name:"Läufer",designs:["rot","rost","orange","maehne"],extraHits:0,speed:6.3,radius:.5,damage:13,reach:2.1,windup:.3,score:100},rammer:{name:"Rammer",designs:["grau","zottel","graubart"],extraHits:1,speed:2.8,radius:.85,damage:26,reach:2.6,windup:.48,score:250,chargeSpeed:10.5,chargeDamage:38,chargeTime:1.25,chargeWindup:.72,chargeCooldown:3.3},jumper:{name:"Springer",designs:["bock","steinbock","weissbock"],extraHits:0,speed:4.5,radius:.5,damage:15,reach:2.1,windup:.34,score:150,leapDamage:22,leapCooldown:2.3,leapRange:10},boss:{name:"Oberteufel",designs:["ober"],extraHits:0,speed:3.2,radius:1.15,damage:18,reach:3,windup:.6,score:0}},tS=[.66,.24,.1],eS=[.22,.4,.38],nS=30,iS=.04,eu=50,sS=4,rS=6,aS=24,z0=[[-20,-78],[40,-62],[118,-2],[118,82],[30,118],[-62,112],[-80,20],[-62,-80]],B0=72,Nf=.3,oS=3.7,cS=.8,lS=.4,Uf=.0022,Dc=38,ur=2600,Dl=640,Cr={low:{name:"Niedrig",maxPixelRatio:1,minPixelRatio:.6,shadows:!1,shadowMapSize:512,snow:700,lanternLights:!1},mid:{name:"Mittel",maxPixelRatio:1.5,minPixelRatio:.85,shadows:!0,shadowMapSize:1024,snow:1500,lanternLights:!0},high:{name:"Hoch",maxPixelRatio:2,minPixelRatio:1,shadows:!0,shadowMapSize:2048,snow:ur,lanternLights:!0}},hS="high",uS="mid",dS=40,fS=2,pS=3,mS=.45,k0=58,Nl=.12,gS=.75,_S=.35,Of=.0062,xS=94,vS=68,yS=50,MS=12,SS=22,bS=.78,ES=1.2,gs={x:26,z:14,yaw:Math.PI/2},uh=.5,wS=.27,dr=.4,H0=.72,Vi=1/60,TS=5,G0=.06,AS=.5,RS=.075,CS=.045,LS=.25,PS=42,IS=18,Ff=.42,DS=.45,NS=.3,zf=1.2,US=.35,OS=6,FS=6,zS=2.2,BS=.02,Bf=3,kS=14,kf=2,HS=30,GS=.9,VS=.04,WS=1.26,XS=.85,qS=.075,YS=2.6,KS=2.2,jS=.3,ZS=.35,JS=8,$S=2,QS=32,t3=250,e3=25,n3=.5,i3=.06,s3=50,r3=3.5,a3=.25,o3=4,c3=150,l3=5e4,h3=100,u3="https://kzdbssatgjndbviuurrn.supabase.co",Ul="sb_publishable_7yrpP8G_xNnUFzLkyhb1Xg_AyA4VuoQ",Hf=10,V0=200,d3=16,dh=.72,f3=.26,nu=.16,Gf=3,p3=3,fh=.0055,Si=.011,Vf=.055,m3=.05,g3=9,fr=[9058852,7218200,9210428,13149251,10133576,8014378],Ol=15921902,Wf=90,Xf=9,qf=.16,Ao=.9,_3=.22,x3=1,Yf=17,W0=8,v3=1.5,y3=100,Kf=11,M3=5.5,S3=.55,b3=.35,E3=5,w3=14,T3=10,A3=11,Ro=4.2,R3=.35,C3=[2,3,4],L3=[3,18],P3=[.4,1],I3=[.05,.7],D3=.35,jf=9,N3=2.5,U3=[.1,.75],O3=.4,F3=2.2,Co=7,z3=1.4,ph=.6,uc=5,mh=1500,B3=120,k3=3.2,H3=1.15,G3=18,Js=1,V3=.66,W3=.33,X3=4.5,q3=9,Zf=16,Y3=.9,K3=22,j3=3,Jf=13,Z3=1.1,J3=30,$3=.7,Q3=3.5,tb=4,eb=12,$f=8,nb=2,ib=5e3,sb=350,rb=.12,X0=.32,ab=.9,q0=450,ob=.08,cb=14,lb=16,hb=.6,Qf=2.5,ub=20,Pe=Math.PI*2,Vt=(n,t,e)=>n<t?t:n>e?e:n,jt=(n,t,e)=>n+(t-n)*e,es=n=>n*n*(3-2*n),Nc=(n,t,e)=>es(Vt((e-n)/(t-n),0,1)),ri=(n,t,e,i)=>jt(n,t,1-Math.exp(-e*i));function dc(n,t){let e=(t-n)%Pe;return e>Math.PI&&(e-=Pe),e<-Math.PI&&(e+=Pe),e}function Ni(n){return function(){n|=0,n=n+1831565813|0;let t=Math.imul(n^n>>>15,1|n);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}const jn=n=>"#"+n.toString(16).padStart(6,"0"),cn=typeof document>"u",Fl=new Map;function Y0(){return{style:{},dataset:{},textContent:"",className:"",offsetWidth:0,disabled:!1,hidden:!1,classList:{add(){},remove(){},toggle(){},contains(){return!1}},appendChild(){},addEventListener(){},querySelector(){return null},querySelectorAll(){return[]},getBoundingClientRect(){return{x:0,y:0,left:0,top:0,width:0,height:0}}}}const wt=n=>cn?(Fl.has(n)||Fl.set(n,Y0()),Fl.get(n)):document.getElementById(n),tp=n=>cn?Y0():document.createElement(n),K0=()=>cn?16/9:window.innerWidth/window.innerHeight,db={addColorStop(){}},fb=new Proxy({},{get:()=>()=>db,set:()=>!0}),pb=new Ts,mb=new En,gb=new C,_b=new C;function ot(n=0,t=0,e=0,i=0,s=0,r=0,a=1,o=a,c=a){return new Bt().compose(_b.set(n,t,e),mb.setFromEuler(pb.set(i,s,r)),gb.set(a,o,c))}function qt(...n){const t=n[0].clone();for(let e=1;e<n.length;e++)t.multiply(n[e]);return t}const iu=15133941,$s=new At,xb=new At(iu);class Qn{constructor(){this.p=[],this.c=[]}add(t,e,i,s=!1){const r=t.index?t.toNonIndexed():t;e&&r.applyMatrix4(e);const a=r.attributes.position;$s.set(i);const o=this.p,c=this.c;for(let l=0;l<a.count;l+=3){const h=a.getX(l),u=a.getY(l),d=a.getZ(l),f=a.getX(l+1),m=a.getY(l+1),_=a.getZ(l+1),g=a.getX(l+2),p=a.getY(l+2),v=a.getZ(l+2);let x=$s;if(s){const y=f-h,T=m-u,b=_-d,E=g-h,D=p-u,M=v-d,w=T*M-b*D,O=b*E-y*M,K=y*D-T*E,tt=Math.sqrt(w*w+O*O+K*K)||1;O/tt>.6&&(x=xb)}o.push(h,u,d,f,m,_,g,p,v),c.push(x.r,x.g,x.b,x.r,x.g,x.b,x.r,x.g,x.b)}return r!==t&&r.dispose(),t.dispose(),this}tri(t,e,i,s){$s.set(s),this.p.push(t[0],t[1],t[2],e[0],e[1],e[2],i[0],i[1],i[2]);for(let r=0;r<3;r++)this.c.push($s.r,$s.g,$s.b);return this}quad(t,e,i,s,r){return this.tri(t,e,i,r),this.tri(t,i,s,r),this}raw(t,e){for(let i=0;i<t.length;i++)this.p.push(t[i]),this.c.push(e[i]);return this}build(){const t=new Ne;return t.setAttribute("position",new ne(this.p,3)),t.setAttribute("color",new ne(this.c,3)),t.computeVertexNormals(),t.computeBoundingSphere(),t.computeBoundingBox(),t}}function su(n,t,e,i,s,r=6,a=12){const o=new S0(t),c=o.computeFrenetFrames(a,!1),l=[],h=new C;for(let u=0;u<=a;u++){const d=u/a;o.getPointAt(d,h);const f=c.normals[u],m=c.binormals[u],_=e+(i-e)*Math.pow(d,.85),g=[];for(let p=0;p<r;p++){const v=p/r*Pe,x=Math.cos(v)*_,y=Math.sin(v)*_;g.push([h.x+f.x*x+m.x*y,h.y+f.y*x+m.y*y,h.z+f.z*x+m.z*y])}l.push(g)}for(let u=0;u<a;u++){const d=s(u/a,u);for(let f=0;f<r;f++){const m=(f+1)%r,_=l[u][f],g=l[u][m],p=l[u+1][f],v=l[u+1][m];n.tri(_,g,v,d),n.tri(_,v,p,d)}}}function Ua(n,t){if(cn)return{width:n,height:t,getContext:()=>fb};const e=document.createElement("canvas");return e.width=n,e.height=t,e}function Oa(n){const t=new Sy(n);return t.colorSpace=en,t}const ve={buffer:null,onsets:[],bedGain:null,voices:0,loading:!1,lastOnset:-1};function vb(n,t,e=lb){const i=Math.round(t*.01),s=[];let r=0;for(let c=0;c+i<n.length;c+=i){let l=0;for(let h=c;h<c+i;h++){const u=n[h]-r;r=n[h],l+=u*u}s.push(Math.sqrt(l/i))}const a=[];for(let c=8;c<s.length-2;c++){let l=0;for(let h=c-8;h<c;h++)l+=s[h];l/=8,s[c]>l*1.6&&s[c]>s[c-1]&&s[c]>=s[c+1]&&(!a.length||c-a[a.length-1].i>6)&&a.push({i:c,ratio:s[c]/(l||1e-9)})}const o=n.length/t-X0-.05;return a.filter(c=>c.i*.01<o).sort((c,l)=>l.ratio-c.ratio).slice(0,e).map(c=>c.i*.01)}async function yb(){if(!(!rt.ctx||ve.buffer||ve.loading)){ve.loading=!0;try{const n=await(await fetch(LM)).arrayBuffer(),t=await new Promise((s,r)=>rt.ctx.decodeAudioData(n,s,r));ve.onsets=vb(t.getChannelData(0),t.sampleRate),ve.onsets.length||(ve.onsets=[0]),ve.buffer=t;const e=rt.ctx.createBufferSource();e.buffer=t,e.loop=!0;const i=rt.ctx.createBiquadFilter();i.type="highpass",i.frequency.value=q0*.6,ve.bedGain=rt.ctx.createGain(),ve.bedGain.gain.value=0,e.connect(i),i.connect(ve.bedGain),ve.bedGain.connect(rt.sfx),e.start(0,Math.random()*t.duration)}catch(n){console.warn("Glockenaufnahme nicht geladen, nehme synthetische Glocken:",n.message)}ve.loading=!1}}function Mb(n,t=0,e=1){const i=rt.ctx;if(!i||!ve.buffer||n<=.002)return!!ve.buffer;if(ve.voices>=cb)return!0;try{const s=i.currentTime,r=X0;let a=Math.random()*ve.onsets.length|0;a===ve.lastOnset&&ve.onsets.length>1&&(a=(a+1)%ve.onsets.length),ve.lastOnset=a;const o=i.createBufferSource();o.buffer=ve.buffer,o.playbackRate.value=e*(1+(Math.random()*2-1)*ob);const c=i.createBiquadFilter();c.type="highpass",c.frequency.value=q0;const l=i.createGain();l.gain.setValueAtTime(1e-4,s),l.gain.linearRampToValueAtTime(n*ab,s+.006),l.gain.exponentialRampToValueAtTime(1e-4,s+r),o.connect(c),c.connect(l),Bc(l,t),o.start(s,Math.max(0,ve.onsets[a]-.008),r+.05),ve.voices++,o.onended=()=>{ve.voices=Math.max(0,ve.voices-1)}}catch{rt.errors++}return!0}function j0(n,t=0,e=1,i=0){Mb(n,t,e)||Es(n,t,i)}function Sb(n){!ve.bedGain||!rt.ctx||ve.bedGain.gain.setTargetAtTime(bb(n),rt.ctx.currentTime,.35)}function bb(n){return hb*Math.sqrt(Vt(n/ub,0,1.5))*Nc(Qf*.5,Qf*2,n)}function Eb(n,t){let e=0;for(const i of n){if(i.dying)continue;const s=Math.hypot(i.pos.x-t.pos.x,i.pos.z-t.pos.z),r=Math.hypot(i.vel.x,i.vel.z);e+=Vt(r/4,0,1)/(1+s*s*.012)}return e+Vt(Math.hypot(t.vel.x,t.vel.z)/5,0,1)}const Ke={n:0,t:0,best:0};function wb(){Ke.n=0,Ke.t=0,Ke.best=0}function Tb(){Ke.n=0,Ke.t=0}function Ab(n){Ke.t>0&&(Ke.t-=n,Ke.t<=0&&(Ke.n=0))}function Z0(n){return Math.min(o3,1+a3*Math.max(0,n-1))}function Rb(n,t,e,i,s){const r=1+n3*Math.max(0,t-1),a=1+i3*Math.max(0,e-1);return Math.round(n*r*a*Z0(i))+(s?s3:0)}function Cb(n,t,e,i){return Ke.n++,Ke.t=r3,Ke.best=Math.max(Ke.best,Ke.n),Rb(n,t,e,Ke.n,i)}function Lb(n,t){return t3*n+(t?c3*n:0)}function Pb(n){return l3+Math.max(0,Math.ceil(n))*h3}const ep=new ti({vertexColors:!0,flatShading:!0,side:Sn}),sr=nu,va=nu+dh,Qr=n=>m3*Math.sin(Math.PI*Math.min(n,va)/va);function Ib(n,t){const e=new Qn,i=fh/2,s=Math.max(1,Math.round(p3*(.5+.5*n))),r=Math.round(dh/Vf*(3+9*n));for(let a=0;a<Gf;a++)for(let o=0;o<s;o++){const c=fr[(a*2+o+Math.floor(t()*3))%fr.length],l=(o-(s-1)/2)*fh*.9,h=[];for(let u=0;u<=r;u++){const d=sr-.02+(dh+.04)*u/r,f=Pe*(d-sr)/Vf+a*Pe/Gf,m=Si*(.75+.25*Math.cos(2*f))+l;h.push(new C(Math.cos(f)*m+Qr(d),d,Math.sin(f)*m*.8))}su(e,h,i*1.1,i*.9,()=>c,3,r)}e.add(new Xe(Si*1.45,Si*1.5,nu,7),ot(Qr(sr/2),sr/2,0),Ol);for(let a=0;a<5;a++){const o=a/5*Pe;e.add(new Xe(i*.8,i,.04,3),ot(Math.cos(o)*Si*.8,-.015,Math.sin(o)*Si*.8),fr[a%fr.length])}for(const a of[sr+.01,va-.01])e.add(new Ri(Si*1.35,.0028,4,10),ot(Qr(a),a,0,Math.PI/2,0,0),Ol),e.add(new le(.004,.0025,.07),ot(Qr(a)+Si*1.35,a,.035),Ol);return e.build()}function Db(n,t){const e=new Qn,i=Math.max(4,Math.round(g3*(.5+.5*n))),s=fh/2;for(let r=0;r<i;r++){const a=r/i*Pe+t()*.5,o=.12+t()*.22,c=f3*(.7+t()*.45),l=Math.cos(a)*Math.sin(o),h=Math.sin(a)*Math.sin(o),u=Math.cos(o),d=.02+t()*.03,f=[];for(let m=0;m<=4;m++){const _=m/4;f.push(new C(Math.cos(a)*Si*.6+l*c*_+d*_*_,u*c*_,Math.sin(a)*Si*.6+h*c*_))}su(e,f,s,s*.35,()=>fr[(r+1)%fr.length],3,4)}return e.build()}const zl=new Map;function Nb(n){const t=n>=.5?1:0;if(!zl.has(t)){const e=Ni(5+t);zl.set(t,{braid:Ib(t,e),tip:Db(t,e)})}return zl.get(t)}const J0=new Set;function Fa(n=1){const t=Nb(n),e=new pn,i=-sr/2,s=new Me(t.braid,ep);s.position.y=i,e.add(s);const r=new pn;return r.position.set(Qr(va),va+i,0),r.add(new Me(t.tip,ep)),e.add(r),e.children[0].castShadow=!0,e.userData.tip=r,e.userData.sway={prev:null,vel:new C,ax:0,az:0,vx:0,vz:0},J0.add(e),e}const Qs=new C,tr=new C,np=new En;function Ub(n,t){if(t<=0)return;const e=n.userData.sway,i=n.userData.tip;if(i.getWorldPosition(Qs),!e.prev){e.prev=Qs.clone();return}const s=(Qs.x-e.prev.x)/t,r=(Qs.y-e.prev.y)/t,a=(Qs.z-e.prev.z)/t;tr.set((s-e.vel.x)/t,(r-e.vel.y)/t,(a-e.vel.z)/t),e.vel.set(s,r,a),e.prev.copy(Qs),tr.lengthSq()>1e6&&tr.setLength(1e3),n.getWorldQuaternion(np).invert(),tr.applyQuaternion(np);const o=tr.z*qf,c=-tr.x*qf;e.vx+=(o-Wf*e.ax-Xf*e.vx)*t,e.vz+=(c-Wf*e.az-Xf*e.vz)*t,e.ax=Math.max(-Ao,Math.min(Ao,e.ax+e.vx*t)),e.az=Math.max(-Ao,Math.min(Ao,e.az+e.vz*t)),i.rotation.set(e.ax,0,e.az)}function Ob(n){for(const t of J0)t.parent&&Ub(t,Math.min(n,.05))}const Fb="modulepreload",zb=function(n,t){return new URL(n,t).href},ip={},Bb=function(t,e,i){let s=Promise.resolve();if(e&&e.length>0){const a=document.getElementsByTagName("link"),o=document.querySelector("meta[property=csp-nonce]"),c=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));s=Promise.allSettled(e.map(l=>{if(l=zb(l,i),l in ip)return;ip[l]=!0;const h=l.endsWith(".css"),u=h?'[rel="stylesheet"]':"";if(!!i)for(let m=a.length-1;m>=0;m--){const _=a[m];if(_.href===l&&(!h||_.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${l}"]${u}`))return;const f=document.createElement("link");if(f.rel=h?"stylesheet":Fb,h||(f.as="script"),f.crossOrigin="",f.href=l,c&&f.setAttribute("nonce",c),document.head.appendChild(f),h)return new Promise((m,_)=>{f.addEventListener("load",m),f.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${l}`)))})}))}function r(a){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a}return s.then(a=>{for(const o of a||[])o.status==="rejected"&&r(o.reason);return t().catch(r)})};function kb(n){const t=new Map,e=new Map,i=n.clone();return $0(n,i,function(s,r){t.set(r,s),e.set(s,r)}),i.traverse(function(s){if(!s.isSkinnedMesh)return;const r=s,a=t.get(s),o=a.skeleton.bones;r.skeleton=a.skeleton.clone(),r.bindMatrix.copy(a.bindMatrix),r.skeleton.bones=o.map(function(c){return e.get(c)}),r.bind(r.skeleton,r.bindMatrix)}),i}function $0(n,t,e){e(n,t);for(let i=0;i<n.children.length;i++)$0(n.children[i],t.children[i],e)}const Hb={schloss:"schlossteufel.glb",rot:"rotlarve.glb",grau:"grauer.glb",bock:"bockshorn.glb"},Gb={schloss:2.35,rot:2.15,grau:2.6,bock:2.4},Q0={hips:["hips","hip","pelvis","becken"],head:["head","kopf"],armL:["arm_l","upperarm_l","leftarm","upper_arm.l","arm.l","oberarm_l"],armR:["arm_r","upperarm_r","rightarm","upper_arm.r","arm.r","oberarm_r"],legL:["leg_l","thigh_l","leftupleg","thigh.l","upperleg_l","oberschenkel_l"],legR:["leg_r","thigh_r","rightupleg","thigh.r","upperleg_r","oberschenkel_r"],handR:["hand_r","righthand","hand.r"]},Vb={walk:["laufen","walk","run","gehen"],attack:["schlag","attack","swing","hit"],idle:["stehen","idle"]},gh={},sp=Object.assign({});async function Wb(){if(cn)return;const n=Object.entries(Hb).filter(([,i])=>sp["/assets/models/"+i]);if(!n.length)return;const{GLTFLoader:t}=await Bb(async()=>{const{GLTFLoader:i}=await import("./GLTFLoader-BOHlOQj9.js");return{GLTFLoader:i}},[],import.meta.url),e=new t;for(const[i,s]of n)try{const r=await e.loadAsync(sp["/assets/models/"+s]);Xb(i,r.scene,r.animations)}catch(r){console.warn("Modell "+s+" nicht geladen, nehme das eingebaute:",r.message)}}function Xb(n,t,e=[]){t.updateMatrixWorld(!0);const i=new Ii().setFromObject(t),s=i.max.y-i.min.y,r=s>1e-6?Gb[n]/s:1;gh[n]={scene:t,animations:e,scale:r,offsetY:-i.min.y*r},t.traverse(a=>{a.isMesh&&(a.castShadow=!0,a.frustumCulled=!1)})}const tm=n=>n.toLowerCase().replace(/^.*[:|]/,"").replace(/\s+/g,"_");function qb(n,t){const e=Q0[t];let i=null;return n.traverse(s=>{!i&&e.includes(tm(s.name))&&(i=s)}),i}const Bl=(n,t)=>n.find(e=>Vb[t].includes(tm(e.name)))||null;function Yb(n,t,e={}){const i=new pn,s=new pn;i.add(s);const r=kb(t.scene);r.scale.setScalar(t.scale),r.position.y=t.offsetY,s.add(r);const a=f=>{const m=new De;return s.add(m),m},o={};for(const f of Object.keys(Q0))o[f]=qb(r,f);const c={root:i,body:s,kit:n,gltf:!0,hips:o.hips||a(),head:o.head||a(),armL:o.armL||a(),armR:o.armR||a(),legL:o.legL||a(),legR:o.legR||a(),eyes:a(),fur:null,mixer:null,actions:null},l=Fa(e.detail??0);(o.handR||c.armR).add(l),o.handR||(l.position.set(0,-.7,.03),l.rotation.x=1.3),c.rute=l;const h=Bl(t.animations,"walk"),u=Bl(t.animations,"attack"),d=Bl(t.animations,"idle");if(h||u||d){c.mixer=new RM(r),c.actions={};for(const[f,m]of[["walk",h],["attack",u],["idle",d]]){if(!m)continue;const _=c.mixer.clipAction(m);_.play(),_.setEffectiveWeight(0),c.actions[f]=_}c.lastTime=performance.now()}return i.scale.setScalar(1),c}function Kb(n,t,e){const i=performance.now(),s=Math.min(.05,(i-n.lastTime)/1e3);n.lastTime=i;const r=n.actions,a=Math.min(1,t);r.walk&&(r.walk.setEffectiveWeight(a),r.walk.setEffectiveTimeScale(.6+t*.6)),r.idle&&r.idle.setEffectiveWeight(1-a),r.attack&&(r.attack.setEffectiveWeight(e>=0?1:0),e>=0&&(r.attack.time=e*r.attack.getClip().duration)),n.mixer.update(s)}const Lo=.92,jb=1.58,rp=1.46,ap=.42,op=.19,bi=.22,Ei=.05,Zb=1.2,ru={schloss:{seed:11,scale:1,bulk:1,fur:[2497816,1643538,3220764,4008991],furAlt:null,mask:{rx:.19,ry:.25,rz:.2,light:15655876,skin:14273448,shade:10127199,wrinkle:4532761,tint:9194024,brow:5913122,mouthColor:4853002,teeth:15853772,ears:"round",nose:"broad",blood:!1,mouth:{w:46,yc:180,yt:150,yb:250,upper:[[-32,9],[-21,24],[-10,11],[0,10],[10,11],[21,24],[32,9]],lower:[[-28,20],[-17,9],[-6,8],[6,8],[17,9],[28,20]]}},eyes:16756784,horns:{r0:.056,pts:[[.09,.4,.02],[.3,.44,.02],[.5,.62,0],[.57,.9,-.02],[.47,1.17,-.04]],color:n=>n<.55?11565628:n<.8?8015912:1839627},bells:"back3",strap:!0},rot:{seed:23,scale:.96,bulk:.92,fur:[2104348,1446675,2761250,3088412],furAlt:null,mask:{rx:.18,ry:.25,rz:.2,light:12863274,skin:10696223,shade:5773840,wrinkle:2755078,tint:4001288,brow:2755848,mouthColor:1967108,teeth:15919826,ears:"big",nose:"hook",blood:!1,mouth:{w:38,yc:190,yt:162,yb:214,upper:[[-15,24],[-5,8],[5,8],[15,24]],lower:[[-25,15],[25,15]]}},eyes:16760864,horns:{r0:.04,pts:[[.06,.42,.02],[.1,.55,0],[.12,.68,-.03],[.1,.78,-.05]],color:(n,t)=>t%2?5904912:9054744,segs:10},horns2:{r0:.03,pts:[[.13,.36,.06],[.2,.44,.06],[.24,.54,.04]],color:(n,t)=>t%2?5904912:9054744,segs:6},beard:!0,bells:"back2",strap:!1},grau:{seed:37,scale:1.24,bulk:1.22,fur:[1842207,1315862,2763566,2236965],furAlt:[6974835,9409176,5066581,11119794],mask:{rx:.185,ry:.245,rz:.2,light:14465148,skin:13083240,shade:8807994,wrinkle:4861976,tint:8145446,brow:1839628,mouthColor:5900298,teeth:15327167,lips:10490904,ears:"pointed",nose:"hook",blood:!0,mouth:{w:32,yc:184,yt:168,yb:232,blunt:!0,upper:[[-18,7],[-11,8],[-4,8],[4,8],[11,8],[18,7]],lower:[[-15,7],[-8,7],[0,7],[8,7],[15,7]]}},eyes:16054015,horns:{r0:.05,pts:[[.09,.42,0],[.2,.55,-.03],[.28,.73,-.08],[.26,.9,-.11]],color:n=>n<.5?2759956:1051400},bells:"frontFlat",strap:!1},ober:{seed:53,scale:1.45,bulk:1.35,fur:[8011292,6171924,9391138,7025688],furAlt:[10902056,4858895],mask:{rx:.2,ry:.26,rz:.21,light:14721120,skin:12611642,shade:8010266,wrinkle:3806216,tint:6956048,brow:3806216,mouthColor:3802630,teeth:16050896,ears:"pointed",nose:"broad",blood:!1,mouth:{w:52,yc:186,yt:156,yb:254,upper:[[-34,36],[-20,14],[-7,11],[7,11],[20,14],[34,36]],lower:[[-28,30],[-12,11],[0,10],[12,11],[28,30]]}},eyes:16742928,horns:{r0:.068,pts:[[.1,.42,0],[.38,.5,-.02],[.62,.62,-.06],[.78,.84,-.08],[.8,1.04,-.03]],color:n=>n<.6?11565628:n<.82?6963746:1313798,segs:16},bells:"back3",strap:!0},bock:{seed:41,scale:1,bulk:.96,fur:[7031340,5519394,8346164,4862240],furAlt:[9660732,11042124],mask:{rx:.18,ry:.245,rz:.195,light:15131350,skin:13618111,shade:9144189,wrinkle:3814962,tint:6969936,brow:3814962,mouthColor:3803658,teeth:16052192,ears:"pointed",nose:"broad",blood:!1,mouth:{w:38,yc:180,yt:160,yb:236,upper:[[-16,21],[-6,8],[6,8],[16,21]],lower:[[-22,17],[-8,7],[8,7],[22,17]]}},eyes:16726816,horns:{r0:.052,pts:[[.07,.43,.02],[.12,.72,-.04],[.18,.98,-.2],[.22,1.1,-.42],[.24,1.07,-.62]],color:(n,t)=>t%2?8219210:12297596,segs:16},bells:"back2",strap:!1},rost:{seed:61,scale:.98,bulk:.94,name:"Rostlanghorn",fur:[9065776,7619622,10249272,6174752],furAlt:[11433542,6963236],mask:{rx:.18,ry:.25,rz:.2,light:14184538,skin:11024938,shade:5904402,wrinkle:2754566,tint:4000776,brow:1968133,mouthColor:1967108,teeth:15787724,ears:"pointed",nose:"hook",blood:!1,mouth:{w:40,yc:186,yt:160,yb:228,upper:[[-20,22],[-8,9],[8,9],[20,22]],lower:[[-24,16],[-8,8],[8,8],[24,16]]}},eyes:16765024,horns:{r0:.042,pts:[[.08,.42,.01],[.3,.52,-.02],[.55,.62,-.05],[.72,.82,-.06],[.78,1.02,-.02]],color:n=>n<.5?4861468:n<.8?3021840:1182214,segs:14},bells:"frontFlat",bellColor:2761760,strap:!1},orange:{seed:67,scale:.95,bulk:.92,name:"Orangelarve",fur:[1841174,1315088,2498592,2103830],furAlt:null,mask:{rx:.18,ry:.245,rz:.2,light:16298064,skin:14843946,shade:9059346,wrinkle:1312772,tint:4856326,brow:1312772,mouthColor:1704962,teeth:16051412,ears:"pointed",nose:"broad",blood:!1,mouth:{w:42,yc:184,yt:156,yb:236,upper:[[-26,20],[-14,10],[-4,9],[4,9],[14,10],[26,20]],lower:[[-22,18],[-8,8],[8,8],[22,18]]}},eyes:16752672,horns:{r0:.04,pts:[[.07,.42,.02],[.13,.56,-.02],[.16,.68,-.08],[.14,.76,-.14]],color:n=>n<.6?2759184:919558,segs:10},bells:"frontFlat",bellColor:2761760,strap:!1},maehne:{seed:71,scale:.97,bulk:.94,name:"Blondmähne",fur:[1578004,1117710,2235418,1840660],furAlt:null,headFur:[14205066,12888176,15127716,11572318],headFurLen:1.6,mask:{rx:.18,ry:.25,rz:.2,light:10512960,skin:8013862,shade:4071952,wrinkle:1707014,tint:2757640,brow:1707014,mouthColor:1704964,teeth:15722188,ears:"none",nose:"hook",blood:!1,mouth:{w:36,yc:188,yt:164,yb:226,upper:[[-16,20],[-5,8],[5,8],[16,20]],lower:[[-20,14],[20,14]]}},eyes:16760896,horns:{r0:.044,pts:[[.08,.42,0],[.24,.56,-.03],[.36,.74,-.08],[.36,.9,-.12]],color:n=>n<.7?13811866:5917236,segs:12},bells:"frontFlat",bellColor:2761760,strap:!1},steinbock:{seed:79,scale:1,bulk:.96,name:"Steinbock",fur:[1446418,986124,2103832,1709076],furAlt:null,mask:{rx:.18,ry:.245,rz:.195,light:14473424,skin:11972774,shade:6972508,wrinkle:1709588,tint:3814448,brow:1314832,mouthColor:2229766,teeth:15920866,ears:"pointed",nose:"broad",blood:!1,mouth:{w:40,yc:182,yt:158,yb:238,upper:[[-24,22],[-10,9],[0,9],[10,9],[24,22]],lower:[[-24,18],[-8,8],[8,8],[24,18]]}},eyes:16728096,horns:{r0:.06,pts:[[.08,.43,0],[.22,.68,-.06],[.42,.86,-.2],[.62,.9,-.4],[.74,.78,-.56]],color:(n,t)=>n>.85?657414:t%2?2760728:1709072,segs:18},bells:"frontFlat",bellColor:2761760,strap:!1},weissbock:{seed:83,scale:.98,bulk:.98,name:"Weißer Bock",fur:[14208957,12892579,15130576,11773840],furAlt:[15789024,11050118],mask:{rx:.18,ry:.245,rz:.195,light:15920870,skin:14209734,shade:10130052,wrinkle:2762274,tint:6971992,brow:3814962,mouthColor:2754568,teeth:16447210,ears:"pointed",nose:"broad",blood:!1,mouth:{w:38,yc:182,yt:160,yb:232,upper:[[-18,20],[-6,8],[6,8],[18,20]],lower:[[-22,16],[-8,7],[8,7],[22,16]]}},eyes:16732208,horns:{r0:.04,pts:[[.07,.43,.02],[.12,.56,-.04],[.16,.62,-.14],[.18,.6,-.24]],color:(n,t)=>t%2?10129014:13616040,segs:10},bells:"frontFlat",bellColor:2761760,strap:!1},zottel:{seed:89,scale:1.22,bulk:1.24,name:"Zottel",furLen:1.25,fur:[6971480,5787722,8155754,4867136],furAlt:[9076856,4077620],headFur:[15392966,14207654,16051416,13154450],headFurLen:2,fringe:!0,tongue:12851242,mask:{rx:.185,ry:.25,rz:.2,light:9071178,skin:6965808,shade:3810324,wrinkle:1707014,tint:2757640,brow:1707014,mouthColor:2754054,teeth:15656136,ears:"none",nose:"broad",blood:!1,mouth:{w:40,yc:190,yt:166,yb:236,upper:[[-18,14],[-6,8],[6,8],[18,14]],lower:[[-18,10],[18,10]]}},eyes:16769184,horns:null,bells:"frontFlat",bellColor:2761760,strap:!1},graubart:{seed:97,scale:1.2,bulk:1.2,name:"Graubart",furLen:1.15,fur:[9078400,10394260,7236198,11841704],furAlt:[3814964,2762276],headFur:[13157564,14473424,11052188,15262940],headFurLen:1.5,mask:{rx:.185,ry:.25,rz:.2,light:13813940,skin:11576976,shade:7103572,wrinkle:2761756,tint:4866100,brow:2761756,mouthColor:2754568,teeth:15788240,ears:"pointed",nose:"hook",blood:!1,mouth:{w:40,yc:186,yt:162,yb:236,upper:[[-22,18],[-8,9],[8,9],[22,18]],lower:[[-22,14],[-6,8],[6,8],[22,14]]}},eyes:16773312,horns:{r0:.052,pts:[[.09,.42,0],[.32,.5,-.02],[.5,.72,-.06],[.52,.96,-.1]],color:n=>n<.6?9071174:n<.85?5915176:1708554,segs:14},beard:!0,bells:"frontFlat",bellColor:2761760,strap:!1}},em={schloss:"Schlossteufel",rot:"Rotlarve",grau:"Grauer",ober:"Oberteufel",bock:"Bockshorn"};for(const[n,t]of Object.entries(ru))t.name&&(em[n]=t.name);const _h=new L0({vertexColors:!0,flatShading:!0,side:Sn,shininess:42,specular:6969914}),Jb=new ti({vertexColors:!0,flatShading:!0,side:Sn});function Po(n,t,e,i=0){const s=t/512*Pe,r=e/256*Math.PI;return new C(-Math.cos(s)*Math.sin(r)*(n.rx+i),Math.cos(r)*(n.ry+i)+bi,Math.sin(s)*Math.sin(r)*(n.rz+i)+Ei)}const Lr=(n,t,e)=>{const i=(t/n.w+1)/2;return n.yc*((1-i)*(1-i)+i*i)+e*2*i*(1-i)};function $b(n,t){const e=Ua(512,256),i=e.getContext("2d"),s=Ni(t);i.fillStyle=jn(n.shade),i.fillRect(0,0,512,256);const r=i.createRadialGradient(128,116,8,128,128,142);r.addColorStop(0,jn(n.light)),r.addColorStop(.45,jn(n.skin)),r.addColorStop(1,jn(n.shade)),i.fillStyle=r,i.fillRect(0,0,256,256);for(let h=0;h<700;h++)i.fillStyle=s()<.5?"rgba(0,0,0,.06)":"rgba(255,255,255,.06)",i.fillRect(s()*256,s()*256,1+s()*2,2+s()*6);i.lineCap="round",i.lineJoin="round";const a=(h,u)=>{for(const d of[1,-1]){const f=m=>128+d*(m-128);i.beginPath(),i.moveTo(f(h[0]),h[1]),i.quadraticCurveTo(f(h[2]),h[3],f(h[4]),h[5]),i.strokeStyle=jn(n.tint),i.globalAlpha=.5,i.lineWidth=u+5,i.stroke(),i.strokeStyle=jn(n.wrinkle),i.globalAlpha=.92,i.lineWidth=u,i.stroke(),i.beginPath(),i.moveTo(f(h[0]),h[1]+u),i.quadraticCurveTo(f(h[2]),h[3]+u,f(h[4]),h[5]+u),i.strokeStyle="#ffffff",i.globalAlpha=.14,i.lineWidth=1.5,i.stroke()}i.globalAlpha=1};for(let h=0;h<3;h++)a([130,54+h*15,166,36+h*15,208,50+h*16],4);a([134,84,138,96,133,108],3),a([142,130,166,140,192,126],3),a([196,104,208,100,218,92],2),a([198,113,212,113,222,108],2),a([146,142,174,158,178,192],4),a([188,140,206,160,199,190],3),a([140,228,150,238,128,242],3),a([138,112,144,130,150,146],2);for(const h of[1,-1])i.save(),i.translate(128+h*36,112),i.rotate(-h*.28),i.beginPath(),i.ellipse(0,0,21,12,0,0,Pe),i.fillStyle="#080505",i.fill(),i.strokeStyle=jn(n.tint),i.lineWidth=3,i.globalAlpha=.8,i.stroke(),i.globalAlpha=1,i.restore(),i.beginPath(),i.moveTo(128+h*12,99),i.quadraticCurveTo(128+h*36,84,128+h*63,87),i.strokeStyle=jn(n.brow),i.lineWidth=8,i.stroke(),i.beginPath(),i.ellipse(128+h*9,151,5,3.2,0,0,Pe),i.fillStyle="#120807",i.fill();const o=n.mouth;i.beginPath(),i.moveTo(128-o.w,o.yc),i.quadraticCurveTo(128,o.yt,128+o.w,o.yc),i.quadraticCurveTo(128,o.yb,128-o.w,o.yc),i.closePath();const c=i.createRadialGradient(128,(o.yt+o.yb)/2,2,128,(o.yt+o.yb)/2,o.w);c.addColorStop(0,"#0c0202"),c.addColorStop(1,jn(n.mouthColor)),i.fillStyle=c,i.fill(),i.strokeStyle=jn(n.lips||n.wrinkle),i.lineWidth=n.lips?6:3,i.stroke(),i.fillStyle=jn(n.teeth),i.strokeStyle="rgba(40,20,10,.7)",i.lineWidth=1;const l=(h,u,d)=>{const f=128+h,m=Lr(o,h,d?o.yb:o.yt)+(d?-2:2),_=d?-1:1,g=u>14?5.5:4.5;i.beginPath(),o.blunt?i.rect(f-3.2,Math.min(m,m+_*u),6.4,u):(i.moveTo(f-g,m),i.lineTo(f+g,m),i.lineTo(f,m+_*u),i.closePath()),i.fill(),i.stroke()};if(o.lower.forEach(h=>l(h[0],h[1],!0)),o.upper.forEach(h=>l(h[0],h[1],!1)),n.blood){i.strokeStyle="#8f0f14",i.lineWidth=3;for(let h=0;h<7;h++){const u=(s()-.5)*o.w*1.6,d=Lr(o,u,o.yb)-2;i.globalAlpha=.85,i.beginPath(),i.moveTo(128+u,d),i.lineTo(128+u+(s()-.5)*3,d+8+s()*22),i.stroke()}i.globalAlpha=1}return Oa(e)}const Qb=(()=>{const n=new Dn(.5,1,3,1,!0);return n.rotateX(Math.PI),n.translate(0,-.5,0),n})(),nm={value:0};function im(){const n=new ti({color:16777215,flatShading:!0}),t={uTime:nm,uMove:{value:0},uPhase:{value:0}};return n.onBeforeCompile=e=>{Object.assign(e.uniforms,t),e.vertexShader=`uniform float uTime;
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
  diffuseColor.rgb *= mix(0.5, 1.18, vFurT);`)},n.customProgramCacheKey=()=>"krampus-fell",{material:n,uniforms:t}}const tE=new C(0,-1,0),eE=new C(0,1,0);function ki(n,t,e,i,s,r,a,o,c){const l=new Float32Array(n*16),h=new Float32Array(n*3),u=new Bt,d=new C,f=new C,m=new C,_=new En,g=new En,p=new C,v=new At;for(let x=0;x<n;x++){t(x,n,c,d,f),m.set(f.x*o+(c()-.5)*.3,-1+f.y*o*.5,f.z*o+(c()-.5)*.3).normalize(),_.setFromUnitVectors(tE,m),g.setFromAxisAngle(eE,c()*Pe),_.multiply(g);const y=jt(i,s,c()),T=jt(r,a,c());u.compose(d,_,p.set(T,y,T)),u.toArray(l,x*16),v.set(e(d,c)),h[x*3]=v.r,h[x*3+1]=v.g,h[x*3+2]=v.b}return{n,mat:new oc(l,16),col:new oc(h,3)}}function cp(n,t,e,i,s,r,a){return(o,c,l,h,u)=>{for(let d=0;d<30;d++){const f=1-2*(o+l())/c,m=Math.sqrt(Math.max(0,1-f*f)),_=l()*Pe,g=Math.cos(_)*m,p=Math.sin(_)*m;if(h.set(i+g*n,s+f*t,r+p*e),u.set(g/n,f/t,p/e).normalize(),!a||a(g,f,p))return}}}function lp(n,t,e=0){return(i,s,r,a,o)=>{const c=r()*Pe,l=e-(i+r())/s*t;a.set(Math.cos(c)*n,l,Math.sin(c)*n),o.set(Math.cos(c),0,Math.sin(c))}}function Hi(n,t,e,i){const s=new Rr(Qb,i,n.n);return s.instanceMatrix=n.mat,s.instanceColor=n.col,s.boundingSphere=new li(new C(0,t,0),e),s}function nE(n,t,e){if(t<0||t>256)return 0;const i=(c,l,h,u)=>Math.exp(-((t-c)**2/(2*h*h)+(e-l)**2/(2*u*u)));let s=0;for(const c of[-1,1])s+=.024*i(128+c*34,96,26,9),s-=.026*i(128+c*36,113,15,9),s+=.02*i(128+c*52,148,18,14),s+=.012*i(128+c*12,152,6,5);s-=.012*i(128,92,6,14);const r=n.nose==="hook";s+=(r?.05:.04)*i(128,r?145:140,r?9:12,r?20:14),s+=.015*i(128,118,6,14),s+=.02*i(128,236,22,10);const a=n.mouth,o=t-128;if(Math.abs(o)<a.w+10){const c=Math.max(-a.w,Math.min(a.w,o)),l=Lr(a,c,a.yt),h=Lr(a,c,a.yb);if(Math.abs(o)<a.w&&e>l&&e<h){const u=Math.min(e-l,h-e,a.w-Math.abs(o));s-=.055*es(Math.min(1,u/12))}else{const u=Math.abs(o)<a.w?Math.min(Math.abs(e-l),Math.abs(e-h)):Math.hypot(Math.abs(o)-a.w,e-a.yc);s+=.012*Math.exp(-(u*u)/40)}}return s}function iE(n){const t=new In(1,48,32),e=t.attributes.position,i=t.attributes.uv,s=new C;for(let r=0;r<e.count;r++){const a=e.getX(r),o=e.getY(r),c=e.getZ(r);s.set(a/n.rx,o/n.ry,c/n.rz).normalize();const l=nE(n,i.getX(r)*512,(1-i.getY(r))*256);e.setXYZ(r,a*n.rx+s.x*l,o*n.ry+s.y*l+bi,c*n.rz+s.z*l+Ei)}return t.computeVertexNormals(),t}function sE(n){const t=ru[n],e=t.mask,i=Ni(t.seed),s=t.bulk,r=y=>y[i()*y.length|0],a=y=>t.furAlt&&Math.sin(y.x*9+1+t.seed)*Math.sin(y.y*7+2)+Math.sin(y.z*8+2)*.6>.25?r(t.furAlt):r(t.fur),o=t.fur[1],c={key:n,d:t,palette:t.furAlt?t.fur.concat(t.furAlt):t.fur},l=new Qn;l.add(new In(1,10,8),ot(0,.36,0,0,0,0,.4*s,.46,.33*s),o),l.add(new In(1,8,6),ot(0,.6,0,0,0,0,.47*s,.2,.3*s),o),l.add(new Ri(.4*s,.036,5,16),ot(0,.03,0,Math.PI/2,0,0,1,.84,1),3810326),t.strap&&l.add(new Ri(.43*s,.03,4,16),qt(ot(0,.36,0),new Bt().makeRotationZ(.8),ot(0,0,0,Math.PI/2,0,0,1,.8,1)),4861466);const h=(y,T,b)=>{const E=[[.001,0],[.05,-.005],[.1,-.05],[.125,-.13],[.115,-.21],[.095,-.25],[.102,-.27]].map(M=>new nt(M[0],M[1])),D=ot(y,-.02,T,.95,0,y*1.2,b,b,b);l.add(new Ac(E,9),D,12096074),l.add(new In(.03,5,4),qt(D,ot(0,-.2,0)),2760728),l.add(new Ri(.03,.008,4,8),qt(D,ot(0,.03,0)),3810326)};if(t.bells==="back3"&&(h(-.25*s,-.27*s,1.1),h(0,-.34*s,1.15),h(.25*s,-.27*s,1.1)),t.bells==="back2"&&(h(-.15*s,-.31*s,.95),h(.15*s,-.31*s,.95)),t.bells==="frontFlat"){const y=qt(ot(.05,-.16,.37*s),new Bt().makeScale(1,1,.42),new Bt().makeRotationY(Math.PI/4));l.add(new Xe(.11,.16,.32,4),y,t.bellColor??8224121),l.add(new Ri(.035,.01,4,8),ot(.05,.02,.37*s),3810326)}c.torsoGeo=l.build();const u=new Qn;u.add(new oa(.085*s,.48,3,6),ot(0,-.34,0),o),u.add(new In(.09,6,5),ot(0,-.7,.01,0,0,0,1,1.15,1),854795),c.armGeo=u.build();const d=new Qn;d.add(new oa(.115*s,.55,3,6),ot(0,-.42,0),o),d.add(new le(.17,.12,.31),ot(0,-.86,.05),986123),c.legGeo=d.build(),c.maskGeo=iE(e);const f=$b(e,t.seed);c.maskMat=new ti({map:f,emissive:2894892,emissiveMap:f});const m=new Qn,_=e.mouth;m.add(new In(1,9,7),ot(0,bi+.01,Ei-.055,0,0,0,e.rx*1.05,e.ry*1.02,e.rz*1.04),o);for(const y of[1,-1])e.ears==="big"&&m.add(new Dn(.06,.3,4),ot(y*(e.rx+.08),bi+.06,Ei-.04,-.2,0,-y*1.15,1,1,.45),e.skin),e.ears==="round"&&m.add(new In(1,6,5),ot(y*(e.rx+.012),bi+.02,Ei-.01,0,0,0,.03,.052,.04),e.skin),e.ears==="pointed"&&m.add(new Dn(.04,.19,4),ot(y*(e.rx+.05),bi+.07,Ei-.03,-.25,0,-y*1.05,1,1,.5),e.skin);if(_.upper.forEach(([y,T])=>{if(T<15)return;const b=Po(e,128+y,Lr(_,y,_.yt)+2,.006),E=T*.0034;m.add(new Dn(.012,E,4),ot(b.x,b.y-E/2,b.z+.006,Math.PI,0,0),e.teeth)}),_.lower.forEach(([y,T])=>{if(T<15)return;const b=Po(e,128+y,Lr(_,y,_.yb)-2,.006),E=T*.0034;m.add(new Dn(.012,E,4),ot(b.x,b.y+E/2,b.z+.012,0,0,0),e.teeth)}),t.tongue){const y=Po(e,128,_.yb-10,.01);m.add(new oa(.03,.13,2,6),ot(y.x,y.y-.08,y.z+.035,.35,0,0,1,1,.45),t.tongue)}for(const y of[t.horns,t.horns2])if(y)for(const T of[1,-1])su(m,y.pts.map(b=>new C(b[0]*T,b[1],b[2])),y.r0,.005,y.color,6,y.segs||12);c.headGeo=m.build();const g=new Qn;for(const y of[1,-1]){const T=Po(e,128+y*36,112,-.006);g.add(new In(.021,6,5),ot(T.x,T.y,T.z),16777215)}c.eyeGeo=g.build(),c.eyeMat=new Di({color:t.eyes,fog:!1});const p=t.furLen||1,v=t.headFurLen||1,x=()=>r(t.headFur||t.fur);return c.fur={torso:ki(290,cp(.44*s,.52,.38*s,0,.36,0,(y,T,b)=>!(T>.35&&b>.15)),a,.32*p,.6*p,.07,.13,.3,i),skirt:ki(72,(y,T,b,E,D)=>{const M=y/T*Pe+b()*.2;E.set(Math.cos(M)*.4*s,.02+b()*.14,Math.sin(M)*.34*s),D.set(Math.cos(M),0,Math.sin(M))},a,.55*p,.85*p,.08,.14,.16,i),arm:ki(64,lp(.1*s,.62,.04),a,.24,.42,.06,.11,.22,i),leg:ki(76,lp(.125*s,.8,-.02),a,.3,.5,.07,.12,.2,i),beard:t.beard?ki(26,(y,T,b,E,D)=>{const M=-.9+y/T*1.8;E.set(Math.sin(M)*e.rx*.45,bi-e.ry*.82,Ei+Math.cos(M)*e.rz*.7),D.set(Math.sin(M)*.3,-.4,.8)},()=>t.fur[0],.14,.28,.05,.08,.1,i):null,head:ki(Math.round(84*Math.min(1.6,v)),cp(e.rx*1.08,e.ry*1.02,e.rz*1.08,0,bi,Ei-.06,(y,T,b)=>b<.25-Math.max(0,T)*.5||T>.8),x,.3*v,.62*v,.07,.12,.2,i),fringe:t.fringe?ki(44,(y,T,b,E,D)=>{const M=-1+y/T*2;E.set(Math.sin(M)*e.rx*.98,bi+e.ry*(.25+b()*.6),Ei+Math.cos(M)*e.rz*.98+.015),D.set(Math.sin(M)*.4,.1,.9)},x,.26,.4,.07,.11,.12,i):null,ruff:ki(30,(y,T,b,E,D)=>{const M=Math.PI/2+.95+y/T*(Pe-1.9);E.set(Math.cos(M)*.2,.02+b()*.08,Math.sin(M)*.18+.02),D.set(Math.cos(M),0,Math.sin(M))},t.headFur?x:a,.22*Math.sqrt(v),.36*Math.sqrt(v),.1,.16,.5,i)},c}function au(n,t={}){if(gh[n.key])return Yb(n,gh[n.key],t);const e=n.d,i=im(),s=i.material,r=new pn,a=new pn,o=new pn;r.add(a),a.add(o),o.position.y=Lo;const c=p=>(p.castShadow=!0,p);o.add(c(new Me(n.torsoGeo,_h)),Hi(n.fur.torso,.3,1.1,s),Hi(n.fur.skirt,-.2,1.2,s));const l=new pn;l.position.set(0,jb-Lo,.03),l.scale.setScalar(Zb),o.add(l);const h=new Me(n.eyeGeo,n.eyeMat);l.add(new Me(n.maskGeo,n.maskMat),c(new Me(n.headGeo,Jb)),h,Hi(n.fur.head,.2,1,s),Hi(n.fur.ruff,0,.7,s)),n.fur.beard&&l.add(Hi(n.fur.beard,0,.6,s)),n.fur.fringe&&l.add(Hi(n.fur.fringe,.2,.8,s));const u=(p,v,x,y,T)=>{const b=new pn;return b.position.set(p,v,0),b.add(c(new Me(x,_h)),Hi(y,-.4,T,s)),o.add(b),b},d=u(ap*e.bulk,rp-Lo,n.armGeo,n.fur.arm,.9),f=u(-ap*e.bulk,rp-Lo,n.armGeo,n.fur.arm,.9),m=u(-op*e.bulk,0,n.legGeo,n.fur.leg,1),_=u(op*e.bulk,0,n.legGeo,n.fur.leg,1),g=Fa(t.detail??0);return g.position.set(0,-.7,.03),g.rotation.x=1.3,f.add(g),d.rotation.z=.12,f.rotation.z=-.12,r.scale.setScalar(e.scale),{root:r,body:a,hips:o,head:l,eyes:h,armL:d,armR:f,legL:m,legR:_,rute:g,kit:n,fur:i.uniforms}}function ou(n,t,e,i,s){const r=Math.sin(t),a=Math.cos(t);n.legL.rotation.x=r*.78*e,n.legR.rotation.x=-r*.78*e,n.armL.rotation.x=-r*.55*e;let o=-.45+r*.3*e,c=0,l=-.12,h=0;if(i>=0){const u=dr,d=H0;if(i<u){const f=es(i/u);o=jt(o,0,f),l=jt(-.12,-1.45,f),c=jt(0,-.55,f),h=-.4*f}else if(i<d){const f=(i-u)/(d-u),m=1-(1-f)*(1-f);o=0,l=jt(-1.45,-1.25,m),c=jt(-.55,2.3,m),h=jt(-.4,.5,m)}else{const f=es((i-d)/(1-d));o=jt(0,-.45,f),l=jt(-1.25,-.12,f),c=jt(2.3,0,f),h=jt(.5,0,f)}}n.armR.rotation.set(o,c,l),n.hips.rotation.y=h,n.body.position.y=Math.abs(a)*.05*e,n.body.rotation.x=s,n.head.rotation.z=r*.05*e,n.fur&&(n.fur.uMove.value=Math.min(1.4,e),n.fur.uPhase.value=t),n.mixer&&Kb(n,e,i)}const Br={};function rE(){for(const n of Object.keys(ru))Br[n]=sE(n)}const sm="krampuslauf_marzoll_name",rm="krampuslauf_marzoll_bestenliste",aE=8e3,Ce={entries:[],online:!1,loading:!1,error:""};function oE(){return!0}function za(n){return String(n??"").replace(/[\u0000-\u001f\u007f<>]/g,"").replace(/\s+/g," ").trim().slice(0,d3).trim()}function cE(){try{return za(localStorage.getItem(sm)||"")}catch{return""}}function lE(n){try{localStorage.setItem(sm,n)}catch{}}function Ko(n){const t=new Map;for(const e of n){const i=za(e.name),s=i.toLowerCase(),r=Math.floor(Number(e.score)||0);if(!i)continue;const a={name:i,score:r,wave:Math.floor(Number(e.wave)||0),kills:Math.floor(Number(e.kills)||0),at:e.created_at||e.at||""},o=t.get(s);(!o||a.score>o.score||a.score===o.score&&a.at&&a.at<o.at)&&t.set(s,a)}return[...t.values()].sort((e,i)=>i.score-e.score||(e.at<i.at?-1:1))}function am(n,t){const e=za(t).toLowerCase();return n.findIndex(i=>i.name.toLowerCase()===e)+1}function xh(){try{const n=JSON.parse(localStorage.getItem(rm)||"[]");return Array.isArray(n)?n:[]}catch{return[]}}function hE(n){try{localStorage.setItem(rm,JSON.stringify(Ko(n).slice(0,V0)))}catch{}}function om(n){const t={apikey:Ul,...n};return Ul.startsWith("eyJ")&&(t.Authorization="Bearer "+Ul),t}async function cm(n,t,e){const i=typeof AbortController<"u"?new AbortController:null,s=i?setTimeout(()=>i.abort(),aE):null;try{const r=await e(u3.replace(/\/+$/,"")+"/rest/v1/"+n,{...t,signal:i==null?void 0:i.signal});if(!r.ok)throw new Error("Bestenliste antwortet mit "+r.status);return r}finally{s&&clearTimeout(s)}}async function uE(n=globalThis.fetch){Ce.loading=!0,Ce.error="";try{if(oE()&&n){const t=await cm("scores?select=name,score,wave,kills,created_at&order=score.desc&limit="+V0,{headers:om()},n);Ce.entries=Ko(await t.json()),Ce.online=!0}else Ce.entries=Ko(xh()),Ce.online=!1}catch{Ce.error="Bestenliste gerade nicht erreichbar",Ce.entries=Ko(xh()),Ce.online=!1}return Ce.loading=!1,Ce}async function dE(n,t=globalThis.fetch){const e={name:za(n.name),score:Math.max(0,Math.floor(n.score)),wave:Math.max(1,Math.floor(n.wave)),kills:Math.max(0,Math.floor(n.kills))};if(!e.name||e.score<=0||(hE(xh().concat([{...e,at:new Date().toISOString()}])),!t))return!1;try{return await cm("scores",{method:"POST",headers:om({"Content-Type":"application/json",Prefer:"return=minimal"}),body:JSON.stringify(e)},t),!0}catch{return Ce.error="Lauf konnte nicht in die gemeinsame Liste – nur auf diesem Gerät gespeichert",!1}}const fE=n=>String(n).replace(/\B(?=(\d{3})+(?!\d))/g,".");function Io(n,t){if(cn||!n)return;const e=n.querySelector("ol"),i=n.querySelector(".bstatus");e.textContent="";const s=t?am(Ce.entries,t):0,r=(o,c)=>{const l=document.createElement("li");c===s&&(l.className="me");for(const[h,u]of[["r",c+"."],["n",o.name],["w","W"+o.wave],["s",fE(o.score)]]){const d=document.createElement("span");d.className=h,d.textContent=u,l.appendChild(d)}e.appendChild(l)};Ce.entries.slice(0,Hf).forEach((o,c)=>r(o,c+1)),s>Hf&&r(Ce.entries[s-1],s);let a="";Ce.loading?a="Lädt …":Ce.entries.length||(a="Noch keine Einträge. Der erste Lauf führt."),Ce.error&&(a=(a?a+" · ":"")+Ce.error),i.textContent=a}const pE={raster:21,halbeKante:200,versatz:[1.23,-.09],werte:[-11.05,-11.11,-11.28,-11.41,-11.19,-10.92,-10.6,-10.23,-9.81,-9.36,-9.11,-9.01,-9.01,-9.07,-9.27,-9.67,-10.32,-11.12,-11.92,-12.63,-13.07,-10.32,-10.46,-10.68,-10.82,-10.66,-10.37,-10.05,-9.71,-9.33,-8.87,-8.64,-8.57,-8.64,-8.85,-9.18,-9.7,-10.38,-11.17,-11.99,-12.83,-13.32,-9.34,-9.61,-9.91,-10.12,-10.06,-9.75,-9.4,-9.08,-8.77,-8.38,-8.18,-8.14,-8.27,-8.6,-9.06,-9.63,-10.31,-11.1,-11.93,-12.8,-13.36,-7.98,-8.43,-8.9,-9.19,-9.28,-9.01,-8.7,-8.42,-8.16,-7.8,-7.59,-7.54,-7.65,-7.92,-8.35,-9,-9.69,-10.49,-11.41,-12.36,-13.02,-6.55,-7.23,-7.85,-8.31,-8.41,-8.18,-7.9,-7.58,-7.24,-6.88,-6.65,-6.6,-6.69,-6.89,-7.2,-7.82,-8.57,-9.46,-10.46,-11.49,-12.18,-5.43,-6.23,-6.93,-7.48,-7.64,-7.43,-7.12,-6.74,-6.32,-5.89,-5.53,-5.35,-5.35,-5.48,-5.71,-6.27,-7.14,-8.14,-9.18,-10.18,-10.78,-4.67,-5.44,-6.15,-6.73,-6.99,-6.81,-6.42,-5.98,-5.52,-4.98,-4.42,-3.91,-3.66,-3.7,-3.94,-4.68,-5.6,-6.6,-7.63,-8.63,-9.2,-4.2,-4.82,-5.49,-6.06,-6.44,-6.32,-5.82,-5.32,-4.81,-4.17,-3.34,-2.49,-1.94,-1.75,-1.95,-2.84,-3.81,-4.8,-5.8,-6.77,-7.58,-3.95,-4.26,-4.89,-5.52,-5.86,-5.8,-5.29,-4.69,-4.05,-3.32,-2.25,-1.22,-.42,0,-.1,-.89,-1.89,-2.87,-3.9,-5.01,-6.07,-3.79,-3.76,-4.23,-4.86,-5.27,-5.07,-4.61,-4.01,-3.27,-2.35,-1.03,.06,.94,1.45,1.48,1.01,.03,-.95,-2.1,-3.44,-4.65,-2.82,-3.34,-3.84,-4.41,-4.86,-4.6,-4.13,-3.5,-2.61,-1.43,.09,1.19,2.12,2.68,2.83,2.72,1.81,.78,-.51,-2.01,-3.19,-1.58,-3.02,-3.42,-3.9,-4.54,-4.29,-3.79,-3.13,-2.1,-.66,.97,2.05,3.14,3.84,4.06,4.06,3.37,2.11,.87,-.24,-1.31,-.4,-2.09,-2.53,-3.2,-4.13,-3.96,-3.47,-2.81,-1.68,-.1,1.62,2.88,3.89,4.56,4.86,4.86,4.32,3.22,2.3,1.4,.09,.6,.56,-.73,-2.35,-3.51,-3.64,-3.17,-2.47,-1.29,.31,2.11,3.53,4.51,5.18,5.54,5.58,5.12,4.11,3.32,2.5,1.21,2.06,.78,.46,-.47,-1.97,-3.28,-2.85,-2.06,-.88,.64,2.39,3.92,5.01,5.72,6.09,6.13,5.7,4.77,3.98,3.19,2.18,3.69,2.94,2.29,1.37,-.23,-2.18,-2.09,-1.43,-.44,.89,2.5,4.11,5.41,6.19,6.51,6.46,6.03,5.26,4.49,3.79,3.12,5.84,5.47,4.61,3.53,1.8,-.36,-.94,-.63,.08,1.14,2.54,4.19,5.71,6.55,6.78,6.58,6.17,5.66,5.1,4.65,4.29,8.54,8,7.32,6.14,4.24,1.97,.48,.26,.75,1.64,2.83,4.46,6,6.84,7.06,6.88,6.58,6.25,6,5.86,5.79,11.68,11,10.07,8.96,7.18,4.87,2.83,1.63,1.67,2.28,3.26,4.76,6.23,7.08,7.36,7.3,7.24,7.27,7.24,7.36,7.55,14.25,13.65,13.2,11.88,10.15,8.09,5.67,3.37,2.82,3.07,3.86,5.17,6.5,7.33,7.67,7.79,8,8.41,8.64,9.04,9.45,16.99,16.36,15.47,14.04,12.64,11.03,8.7,5.46,4.2,4.05,4.62,5.71,6.85,7.64,8.08,8.39,8.81,9.44,10.05,10.79,11.37]},mE=[{id:126140874,tags:{name:"RFC Bad Reichenhall",leisure:"pitch",surface:"grass"},p:[[62.94,143.2],[13.39,229.87],[71.03,263.05],[121.82,176.58]]},{id:138003334,tags:{name:"Schloss Marzoll",building:"yes",historic:"castle"},p:[[5.26,13.3],[5.35,11.37],[-7.83,6.99],[-8.67,8.08],[-10.06,8.58],[-10.81,8.45],[-11.36,8.38],[-12.45,7.39],[-12.69,5.9],[-12.1,4.5],[-10.66,3.55],[-9.32,3.41],[-8.16,-1.46],[-6.41,-8.88],[-6.18,-9.87],[-7.23,-11.12],[-7.68,-12.51],[-7.23,-13.95],[-5.99,-14.84],[-4.34,-14.84],[-3.93,-14.49],[-3.15,-13.8],[-2.65,-12.21],[10.97,-8.48],[11.97,-9.37],[13.51,-9.73],[15.3,-8.78],[15.69,-7.28],[15.1,-5.4],[13.63,-4.3],[9.73,9.18],[10.92,10.97],[11.22,13.15],[10.33,14.75],[8.34,15.14],[6.35,14.94]]},{id:150181225,tags:{building:"yes"},p:[[199.19,174.6],[185.48,162.64],[178.9,170.19],[173.92,165.85],[165.5,175.48],[164.02,174.19],[160.02,178.77],[161.51,180.06],[156.65,185.63],[152.38,181.91],[146.57,188.56],[154.93,195.86],[157.4,193.03],[158.28,193.79],[154.46,198.19],[169.33,211.17],[188.67,189.03],[187.49,188]]},{id:150181228,tags:{building:"yes"},p:[[138.52,177.14],[134.7,174.95],[131.53,180.5],[135.34,182.67]]},{id:150181230,tags:{building:"yes"},p:[[189.15,130.27],[180.35,121.9],[172.54,130.11],[181.34,138.49]]},{id:150181232,tags:{building:"garage"},p:[[186.45,138.74],[181.33,143.79],[188.79,151.35],[193.91,146.3]]},{id:150181233,tags:{building:"garage"},p:[[203.48,156.45],[199.78,151.48],[192.56,156.86],[196.26,161.83]]},{id:150181234,tags:{building:"yes"},p:[[205.36,155.05],[203.48,156.45],[196.26,161.83],[204.36,172.71],[213.46,165.94]]},{id:150181235,tags:{building:"yes",amenity:"school"},p:[[162.01,145.64],[170.65,153.34],[158.08,167.43],[149.45,159.72],[155.88,152.52],[161.19,146.56]]},{id:150181236,tags:{building:"yes",amenity:"school"},p:[[150.01,142.26],[147.51,145.06],[155.88,152.52],[161.19,146.56],[154.85,140.9],[152.03,144.06]]},{id:150181237,tags:{name:"Schule Marzoll",building:"yes",amenity:"school"},p:[[162.49,132.34],[153.27,124.11],[151.5,126.1],[143.94,119.36],[135.26,129.09],[150.01,142.26],[152.03,144.06],[154.85,140.9]]},{id:150181244,tags:{amenity:"fountain"},p:[[146.11,179.73],[146.08,177.33],[143.69,177.36],[143.73,179.76]]},{id:150210307,tags:{building:"detached","roof:shape":"gabled"},p:[[121.14,67.08],[111.45,78.94],[119.92,85.87],[129.61,74]]},{id:150210309,tags:{building:"detached"},p:[[141.33,84.6],[134.55,91.91],[145.28,101.85],[152.06,94.54]]},{id:150210311,tags:{building:"garage"},p:[[150.56,112.11],[156.53,120.25],[161.24,116.79],[155.27,108.66]]},{id:150210314,tags:{building:"detached"},p:[[173.78,89.2],[167.83,95.33],[169.93,97.37],[167.23,100.15],[175.05,107.74],[183.7,98.83]]},{id:150210315,tags:{name:"Schloss Marzoll",building:"yes",historic:"castle"},p:[[-8.16,-1.46],[-15.3,-4.01],[-12.89,-11.34],[-6.41,-8.88]]},{id:150210316,tags:{name:"St. Valentin",building:"church",amenity:"place_of_worship"},p:[[45.37,48.15],[44.85,47.03],[44.67,45.77],[44.45,44.33],[44.37,43.18],[44.3,42.15],[64.91,30.53],[66.94,34.37],[67.57,34.15],[70.68,35],[72.49,38.11],[71.71,41.43],[67.46,43.88],[67.5,44.36],[53.92,52.32],[53.21,50.94],[47.49,54.38],[44.18,48.86]]},{id:150210320,tags:{"building:part":"yes",tower:"bell_tower",man_made:"tower"},p:[[45.37,48.15],[44.18,48.86],[47.49,54.38],[53.21,50.94],[49.9,45.43]]},{id:150210327,tags:{amenity:"fountain"},p:[[20.1,6.23],[20.19,7.55],[19.32,8.57],[17.99,8.65],[16.99,7.79],[16.89,6.45],[17.76,5.45],[19.09,5.36]]},{id:150237787,tags:{landuse:"residential"},p:[[310.35,-74.34],[278.36,-36.2],[289.65,-30.55],[299.06,-24.23],[304.53,-17.39],[307.1,-10.03],[286.92,20.5],[252.26,-16.83],[243.55,-17.32],[222.51,-35.95],[226.86,-41.14],[215.25,-52.27],[208.73,-43.66],[185.4,-63.86],[175.5,-52.42],[162.33,-48.57],[143.7,-51.1],[135.35,-56.18],[121.45,-62.37],[117.43,-63.58],[113.46,-64.78],[101.73,-51.71],[76.43,-69.97],[64.34,-80.13],[52.48,-95.12],[50.91,-108.19],[52.37,-115.21],[62.16,-127.43],[72.08,-127.3],[87.68,-148.95],[81.64,-155.36],[93.61,-197.32],[101.83,-196.48],[100.75,-211.83],[131.22,-260.46],[137.87,-268.68],[143.8,-264.81],[159.04,-263.96],[172.1,-277.63],[153.96,-295.29],[164.36,-306.17],[149.42,-324.32],[208.47,-371.74],[213.71,-371.74],[235.13,-390.88],[217.56,-421.79],[218.01,-426.73],[204.37,-435.39],[190.14,-475.4],[172.12,-468.59],[147.8,-447.41],[138.09,-465.57],[132.8,-472.25],[129.14,-484.86],[118.55,-497.72],[97.62,-490.66],[94.84,-479.57],[91.06,-452.08],[85.01,-426.61],[78.08,-401.52],[71.39,-384.38],[55.63,-366.22],[37.73,-378.58],[4.7,-366.93],[-9.46,-338.48],[-15.89,-338.1],[-22.97,-320.72],[-17.88,-318.57],[-34.26,-298.1],[-20.6,-285.62],[4.34,-316.66],[41.33,-291.92],[52.28,-291.02],[24.72,-239.01],[22.54,-229.58],[21.73,-226.06],[-26.16,-194.55],[-7.41,-171.26],[-19.24,-163.79],[-16.14,-143.22],[-74.41,-106.44],[-92.06,-107.36],[-100.98,-106.62],[-126.02,-146.46],[-236.07,-92.79],[-262.69,-122.36],[-250.99,-139.05],[-306.36,-185.63],[-342.22,-139.9],[-347.37,-138.61],[-376.22,-163.04],[-377.3,-172.3],[-391.26,-189.35],[-369.38,-213.9],[-399.28,-250.33],[-420,-231.26],[-462.86,-191.82],[-437.57,-168.16],[-399.59,-134.32],[-383.56,-121.47],[-357.84,-106.42],[-321.43,-95.55],[-291.56,-87.23],[-269.44,-67.71],[-243.14,-45.48],[-210.82,-30.36],[-192.33,-45.7],[-196.69,-62.4],[-172.77,-68.84],[-137.79,-84.23],[-132.47,-83.95],[-99.59,-95.98],[-96.8,-99.19],[-84.6,-97.74],[-73.29,-96.39],[-43.5,-84.23],[-32.72,-78.34],[-23.49,-69.12],[-5.3,-53.58],[12.19,-30.09],[-10.2,-18.47],[-18.18,-9.24],[-17.61,6.15],[-.71,59.18],[10.06,136.55],[5.76,171.04],[-7.89,225.26],[74.41,271.56],[87.7,279.48],[105.13,289.87],[113.48,260.88],[120.9,249.74],[134.05,240.6],[161.47,228.74],[232.93,168.79],[233.13,160.3],[206.66,127.37],[202.23,114.66],[203.23,107.94],[263.16,45.03],[281.54,31.69],[291.64,21.6],[306.18,2.81],[323.7,13.89],[328.04,6.01],[354.41,22.06],[359.49,12.52],[358.29,-2.14],[345.46,-54.25],[335.68,-62]]},{id:150237788,tags:{name:"Tennisplatz Marzoll",leisure:"pitch"},p:[[185.4,-63.86],[175.5,-52.42],[161.06,-35.75],[189,-11.55],[213.34,-39.67],[208.73,-43.66]]},{id:150237789,tags:{natural:"water"},p:[[-14.76,-52],[-24.55,-46.85],[-21.82,-42.52],[-23.45,-39.08],[-26.17,-36.96],[-23.54,-32.71],[-26.07,-31],[-31.12,-30.9],[-34.56,-30.39],[-41.52,-26.75],[-44.45,-23.33],[-43.54,-18.17],[-45.26,-16.05],[-43.74,-4.03],[-44.25,2.03],[-45.26,3.95],[-42.43,9.81],[-40.81,15.57],[-38.59,20.52],[-35.86,22.43],[-35.36,25.97],[-30.31,27.99],[-25.16,28.39],[-20.41,31.73],[-23.24,36.98],[-24.96,41.84],[-16.67,45.26],[-11.72,41.52],[-10.01,37.29],[-11.92,32.24],[-16.07,30.62],[-18.5,27.59],[-21.12,22.03],[-23.45,15.97],[-25.76,4.76],[-27.28,-3.93],[-27.18,-9.38],[-24.35,-13.93],[-20.31,-18.78],[-15.46,-23.93],[-13.24,-27.26],[-10.31,-28.37],[-6.68,-31.1],[-7.28,-34.73],[-5.97,-40.59],[-9.1,-44.43],[-12.43,-47.37]]},{id:150238547,tags:{landuse:"meadow"},p:[[-41.77,-77.65],[-56.36,-82.43],[-69.77,-87.78],[-74.53,-91.65],[-79.89,-93],[-84.06,-94.49],[-84.6,-97.74],[-96.8,-99.19],[-99.59,-95.98],[-132.47,-83.95],[-137.79,-84.23],[-172.77,-68.84],[-196.69,-62.4],[-192.33,-45.7],[-160.59,-42.65],[-142.88,-25.23],[-136.59,8.19],[-157.2,56.2],[-140.56,72.86],[-127.72,82.54],[-123.59,89.73],[-133.22,128.24],[-134.92,157],[-125.69,181.43],[-114.97,201.09],[-106.88,230.39],[-105.2,307.05],[-91.72,328.32],[-90.04,370.44],[-77.13,387.08],[-66.86,394.09],[-49.59,392.6],[-50.03,401.38],[-64.19,410.17],[-59.24,431.48],[-84.29,437.29],[-24.69,498.64],[-26.54,458.62],[-15.24,434.56],[-5.65,424.27],[-21.75,407.53],[-12.47,398.53],[-33.14,372.3],[-4.79,322.22],[-.81,324.21],[-4.79,341.31],[11.37,369.38],[6.07,376.68],[-7.71,378.52],[-1.48,406.61],[15.48,422.51],[58.72,365.32],[85.14,340.55],[103.66,292.84],[95.68,292.65],[87.15,290.06],[84.55,283.18],[87.7,279.48],[-7.89,225.26],[-.13,270.59],[-6.32,292.99],[-27.09,295.18],[-33.46,280.97],[-37.47,242.71],[-31.83,169.64],[-18.16,108.61],[-17.25,84.56],[-25.45,55.4],[-49.5,17.15],[-54.42,-5.81],[-50.41,-23.48],[-45.49,-34.78],[-59.52,-44.62],[-59.15,-53.36],[-51.68,-58.46],[-40.75,-70.13]]},{id:150478468,tags:{name:"Friedhof Marzoll",landuse:"cemetery"},p:[[70.85,111.6],[69.08,105.95],[67.33,91.65],[60.78,74.52],[59.59,70.59],[64.81,69.08],[69.47,67.97],[82.86,53.09],[83.39,48.06],[80.35,36.22],[58.92,13.95],[54.42,11.86],[50.2,14.99],[49.89,15.45],[38.03,32.55],[37.69,33.03],[33.66,42.29],[38,62.81],[-.71,59.18],[10.06,136.55],[21.82,133.42]]},{id:150478469,tags:{building:"yes"},p:[[176.18,56.39],[171.29,51.99],[174.85,48.02],[166.58,40.59],[165.45,39.58],[163.32,41.96],[156.87,49.14],[160.47,52.38],[154.99,58.49],[165.68,68.09]]},{id:150478470,tags:{building:"yes"},p:[[32.2,3.63],[36.53,-.37],[37.33,-1.11],[19.4,-22.28],[16.71,-22.09],[13.99,-18.68],[10.95,-14.84],[17.86,-9.93],[18.59,-10.48],[20.81,-9.87],[29.91,1.12]]},{id:150478475,tags:{building:"yes"},p:[[147.85,66.63],[144.07,71.92],[149.57,75.85],[153.34,70.56]]},{id:150478476,tags:{building:"yes"},p:[[75.37,103.27],[75.68,103.88],[78.62,109.23],[84.6,105.97],[81.37,100.01]]},{id:150478477,tags:{building:"yes"},p:[[152.84,22.29],[144.36,14.86],[141.98,12.78],[136.03,19.57],[130.62,25.76],[141.49,35.26]]},{id:150478478,tags:{building:"garage"},p:[[171.01,35.65],[161.6,27.2],[155.03,34.52],[163.32,41.96],[165.45,39.58],[166.58,40.59]]},{id:150478480,tags:{building:"garage"},p:[[80.6,97.38],[84.83,95.18],[84.93,95.39],[85.22,95.23],[86.93,98.51],[82.42,100.86]]},{id:150478484,tags:{building:"garage"},p:[[138.22,7.38],[131.21,15.29],[136.03,19.57],[141.98,12.78],[144.36,14.86],[145.37,13.71]]},{id:150478488,tags:{building:"garage"},p:[[183.58,75.77],[182.58,75.02],[176.72,78.23],[180.04,85.5],[187.35,81.71],[182.55,76.76]]},{id:150478489,tags:{building:"yes"},p:[[110.9,83.91],[96.64,90.99],[97.26,92.26],[95.49,93.14],[98.01,98.21],[99.78,97.32],[100.42,98.59],[114.67,91.51]]},{id:150478490,tags:{building:"yes"},p:[[82.71,91.21],[89.44,87.63],[89.1,86.98],[90.92,86.01],[93.49,90.84],[85.22,95.23],[84.93,95.39],[84.83,95.18]]},{id:150491452,tags:{building:"garage"},p:[[-37.22,-126.19],[-35.05,-127.88],[-30.35,-121.89],[-32.45,-120.25],[-35.58,-124.76]]},{id:150491454,tags:{building:"garage"},p:[[26.47,-105.88],[22.57,-99.38],[25.54,-97.64],[29.39,-104.15]]},{id:150491459,tags:{building:"yes"},p:[[103.47,-7.81],[97.23,-.24],[105.87,6.88],[112.11,-.7]]},{id:150491461,tags:{building:"yes"},p:[[108.23,-50.73],[112.86,-57.44],[118.59,-53.48],[113.96,-46.78]]},{id:150491468,tags:{building:"yes"},p:[[10.62,-103.34],[16.33,-112.81],[26.85,-106.49],[26.47,-105.88],[22.57,-99.38],[21.14,-97.01]]},{id:150512772,tags:{building:"yes"},p:[[64.03,-197.07],[62.68,-188.81],[69.66,-187.67],[69.35,-185.79],[77.15,-184.52],[77.64,-187.54],[80.51,-187.07],[81.52,-193.24],[78.65,-193.71],[78.8,-194.65]]},{id:150512779,tags:{building:"yes"},p:[[-10.86,-164.4],[-8.2,-170.74],[-.04,-167.3],[-2.71,-160.97]]},{id:150512782,tags:{building:"yes"},p:[[54.08,-152.82],[61.01,-145.73],[69.89,-154.4],[62.96,-161.5]]},{id:150512783,tags:{building:"yes"},p:[[83.07,-215.47],[79.51,-209.04],[91.72,-202.29],[95.28,-208.72]]},{id:150512794,tags:{building:"yes"},p:[[64.54,-173.89],[60.6,-167.14],[67.46,-163.15],[71.4,-169.9]]},{id:150512797,tags:{building:"hut"},p:[[8.34,-191.55],[5.89,-189.87],[8.49,-186.08],[10.93,-187.76]]},{id:150512799,tags:{building:"garage"},p:[[48.63,-248.53],[51.42,-253.65],[59.92,-249.04],[56.34,-242.45],[53.16,-244.17],[53.96,-245.64]]},{id:150520532,tags:{building:"garage"},p:[[-146.44,-109.91],[-146.22,-109.43],[-147.94,-108.66],[-146.07,-104.56],[-140.43,-107.13],[-142.52,-111.7]]},{id:150520535,tags:{building:"garage"},p:[[-149.98,-131.17],[-147.31,-125.57],[-142.07,-128.06],[-144.74,-133.67]]},{id:150520539,tags:{building:"garage"},p:[[-167.29,-103.95],[-161.65,-106.62],[-159.26,-101.55],[-165.39,-98.68],[-166.82,-102.17]]},{id:150520543,tags:{building:"garage"},p:[[-185.95,-98.56],[-180.3,-101.23],[-177.91,-96.16],[-183.55,-93.49]]},{id:150520550,tags:{building:"yes"},p:[[-194.2,-92.69],[-195.3,-95.03],[-189.13,-97.9],[-191.1,-102.13],[-199.07,-98.42],[-196.02,-91.84]]},{id:150520555,tags:{building:"yes"},p:[[-147.94,-108.66],[-148.65,-110.24],[-156.24,-106.79],[-158.75,-112.29],[-149.45,-116.53],[-146.44,-109.91],[-146.22,-109.43]]},{id:150520571,tags:{amenity:"parking"},p:[[-135,-86.33],[-134.15,-84.06],[-99.59,-96.99],[-100.45,-99.26]]},{id:217017238,tags:{amenity:"parking"},p:[[84.68,115.11],[107.12,98.69],[110.94,102.2],[119.35,93.77],[128.68,102],[95.5,132.18]]},{id:220886832,tags:{name:"Station Marzoll",building:"yes"},p:[[-132.47,-138.6],[-128.98,-132.13],[-125.35,-134.1],[-128.84,-140.56]]},{id:222695116,tags:{landuse:"meadow"},p:[[-322.41,-695.42],[-373.86,-655.61],[-443.44,-604.49],[-530.08,-542.13],[-570.79,-507.23],[-549.56,-492.39],[-496.19,-408.37],[-480.75,-392.34],[-448.69,-373.29],[-438.64,-345.81],[-429.64,-301.1],[-406.35,-256.78],[-369.48,-216.07],[-391.26,-189.35],[-377.3,-172.3],[-376.22,-163.04],[-347.37,-138.61],[-342.22,-139.9],[-306.36,-185.63],[-250.99,-139.05],[-262.69,-122.36],[-236.07,-92.79],[-126.02,-146.46],[-100.98,-106.62],[-92.06,-107.36],[-74.41,-106.44],[-16.14,-143.22],[-19.24,-163.79],[-7.41,-171.26],[-26.16,-194.55],[21.73,-226.06],[22.54,-229.58],[-47.79,-300.7],[-61.43,-323.36],[-66.64,-336.59],[-118.88,-493.17],[-168.51,-475.77],[-188.16,-525.09],[-159.29,-539.54],[-184.15,-605.71],[-134.02,-626.16],[-143.24,-650.22],[-153.37,-663.57],[-185.76,-640.99],[-221.05,-679.49],[-242.71,-666.25],[-265.27,-696.45],[-303.27,-670.27]]},{id:227576003,tags:{name:"Station Schloßberg",building:"yes"},p:[[79.22,124.64],[76.3,127.38],[80.63,132.01],[83.56,129.28]]},{id:227576004,tags:{amenity:"parking"},p:[[39.31,-85.59],[34,-70.66],[30.39,-48.6],[30.49,-38.67],[21.57,-32.15],[28.19,-23.43],[40.62,-35.77],[48.84,-39.67],[58.97,-38.57],[60.37,-59.13]]},{id:292656085,tags:{building:"yes"},p:[[49.89,-238.18],[45.84,-230.75],[34.94,-236.65],[38.99,-244.11]]},{id:292656086,tags:{building:"yes"},p:[[43.06,-251.56],[48.63,-248.53],[53.96,-245.64],[53.16,-244.17],[49.89,-238.18],[38.99,-244.11]]},{id:402048805,tags:{"building:part":"yes"},p:[[44.3,42.15],[44.37,43.18],[44.45,44.33],[44.67,45.77],[44.85,47.03],[45.37,48.15],[49.9,45.43],[53.21,50.94],[53.92,52.32],[67.5,44.36],[67.46,43.88],[71.71,41.43],[72.49,38.11],[70.68,35],[67.57,34.15],[66.94,34.37],[64.91,30.53]]},{id:414728687,tags:{leisure:"track",surface:"rubber"},p:[[66.29,141.6],[124.95,175.41],[127.47,171.05],[68.81,137.23]]},{id:414728688,tags:{building:"yes"},p:[[60.28,65.65],[65.16,65.91],[64.8,72.96],[59.9,72.7]]},{id:1059693553,tags:{building:"yes"},p:[[103.81,132.99],[115.9,143.57],[129.19,128.39],[117.1,117.8]]},{id:1060028990,tags:{building:"yes"},p:[[229.4,-15.17],[221.71,-5.1],[232.23,2.93],[239.92,-7.14]]},{id:1060028991,tags:{building:"yes"},p:[[183.58,75.77],[192.2,67.4],[200.23,75.68],[190.59,85.03],[187.35,81.71],[182.55,76.76]]},{id:1060028992,tags:{building:"yes"},p:[[89.84,67.5],[90.23,67.99],[92.62,66.06],[96.88,71.36],[85.81,80.3],[81.14,74.52]]},{id:1060028993,tags:{building:"yes"},p:[[81.14,74.52],[80.22,73.38],[78.36,74.87],[73.97,69.44],[84.52,60.93],[89.84,67.5]]},{id:1060028994,tags:{building:"yes"},p:[[119,45.19],[113.02,53.04],[123.41,60.95],[129.4,53.1]]},{id:1060028995,tags:{building:"yes"},p:[[100.87,34.61],[93.69,44.64],[104.5,52.39],[111.69,42.36]]},{id:1060028996,tags:{building:"yes"},p:[[73.14,-39.79],[63.33,-28.98],[65.45,-27.06],[56.13,-16.79],[53.63,-19.06],[43.79,-8.22],[62.92,9.14],[72.96,-1.91],[72.19,-2.6],[80.18,-11.4],[89.55,-2.9],[100.5,-14.96]]},{id:1060028997,tags:{building:"yes"},p:[[2.33,-93.28],[-5.44,-64.34],[14.93,-58.86],[18.61,-72.54],[10.4,-74.75],[14.5,-90.01]]},{id:1060028998,tags:{building:"yes"},p:[[16.95,-142.64],[13.94,-138.77],[15.51,-137.54],[11.18,-131.97],[19.22,-125.71],[24.67,-132.72],[21.32,-135.32],[23.22,-137.76]]},{id:1060028999,tags:{building:"yes"},p:[[30.21,-164.15],[18.86,-152.59],[23.22,-148.31],[24.65,-149.76],[36.96,-137.69],[46.87,-147.79]]},{id:1060029e3,tags:{building:"yes"},p:[[47.36,-201.64],[39.28,-187.07],[52.39,-179.79],[58.65,-191.08],[51.81,-194.88],[53.63,-198.16]]},{id:1060029001,tags:{building:"yes"},p:[[68.6,-239.92],[56.69,-221.13],[64.5,-216.18],[67.74,-221.3],[75.8,-216.19],[83.45,-228.27],[77.42,-232.08],[78.44,-233.68]]},{id:1060029002,tags:{building:"yes"},p:[[9.32,-204.24],[14.67,-194.47],[22.41,-198.7],[18.63,-205.6],[21.75,-207.31],[16.96,-216.07],[9.63,-212.07],[12.86,-206.17]]},{id:1060029003,tags:{building:"garage"},p:[[13.64,-173.03],[15.34,-177.42],[7.03,-180.63],[5.33,-176.24],[7.55,-175.38]]},{id:1060029004,tags:{building:"yes"},p:[[7.55,-175.38],[3.21,-164.18],[11.45,-160.98],[15.79,-172.19],[13.64,-173.03]]},{id:1060029005,tags:{building:"yes"},p:[[-15.02,-159.94],[-15.98,-157.59],[-8.77,-153.86],[-12.59,-144.47],[-7.04,-141.61],[-4.95,-144.91],[1.48,-141.35],[4.78,-147.09],[4.7,-154.72],[-1.73,-157.07],[-2.86,-154.2]]},{id:1060029006,tags:{building:"yes"},p:[[-35.58,-124.76],[-48.82,-115.56],[-43.83,-108.38],[-30.59,-117.57],[-32.45,-120.25]]},{id:1060029007,tags:{building:"yes"},p:[[-132.77,-112.63],[-128.34,-101.63],[-115.19,-106.93],[-119.62,-117.93]]},{id:1060029008,tags:{building:"yes"},p:[[-156.9,-104.58],[-151.44,-92.58],[-142.48,-96.66],[-146.07,-104.56],[-147.94,-108.66]]},{id:1060029009,tags:{building:"yes"},p:[[-175.72,-98.55],[-171.15,-87.34],[-162.25,-90.96],[-165.39,-98.68],[-166.82,-102.17]]},{id:1060029010,tags:{building:"yes"},p:[[-194.2,-92.69],[-188.99,-81.48],[-181.08,-85.16],[-186.29,-96.37]]},{id:1060029011,tags:{building:"yes"},p:[[-218.6,-89.2],[-215.37,-81.24],[-210.99,-83],[-210.45,-81.67],[-202.15,-85.04],[-207.1,-97.27],[-216.3,-93.54],[-215.11,-90.61]]},{id:1060029013,tags:{name:"Vereinshütte des Trachtenverein GTEV D Grenzler Marzoll",building:"yes"},p:[[-220.05,-48.53],[-223.81,-38.23],[-212.64,-34.16],[-211.82,-36.39],[-207.77,-34.91],[-204.82,-42.97]]},{id:1060123251,tags:{landuse:"forest"},p:[[117.43,-63.58],[121.45,-62.37],[125.19,-67.01],[161.9,-112.94],[154.55,-108.02]]},{id:1060123254,tags:{landuse:"meadow"},p:[[-20.6,-285.62],[24.72,-239.01],[52.28,-291.02],[41.33,-291.92],[4.34,-316.66]]},{id:1060123255,tags:{landuse:"meadow"},p:[[101.73,-51.71],[76.43,-69.97],[64.34,-80.13],[52.48,-95.12],[50.91,-108.19],[52.37,-115.21],[62.16,-127.43],[72.08,-127.3],[87.68,-148.95],[81.64,-155.36],[93.61,-197.32],[101.83,-196.48],[100.75,-211.83],[131.22,-260.46],[137.87,-268.68],[143.8,-264.81],[159.04,-263.96],[172.1,-277.63],[153.96,-295.29],[164.36,-306.17],[149.42,-324.32],[208.47,-371.74],[213.71,-371.74],[235.13,-390.88],[217.56,-421.79],[218.01,-426.73],[204.37,-435.39],[190.14,-475.4],[172.12,-468.59],[147.8,-447.41],[138.09,-465.57],[132.8,-472.25],[129.14,-484.86],[118.55,-497.72],[97.62,-490.66],[94.84,-479.57],[91.06,-452.08],[85.01,-426.61],[78.08,-401.52],[71.39,-384.38],[55.63,-366.22],[37.73,-378.58],[4.7,-366.93],[-9.46,-338.48],[-15.89,-338.1],[-22.97,-320.72],[-17.88,-318.57],[-34.26,-298.1],[-42.21,-307.87],[-51.77,-321.63],[-70.08,-374.82],[-95.96,-451.16],[-106.52,-483.86],[-108.21,-496.92],[-105.25,-497.95],[-12.9,-554.37],[-41.77,-607.71],[-65.93,-594.19],[-92.71,-656.64],[-73.56,-667.18],[-83.09,-682.7],[21.49,-735.75],[-.46,-778.94],[-63.83,-748.47],[-109.96,-816.23],[-11.29,-890.02],[-114.37,-1036.77],[-103.61,-1054.22],[-91.59,-1076.27],[-77.74,-1100.68],[-74.97,-1117.67],[-55.42,-1075.67],[-20.92,-1075.67],[-6.48,-1069.25],[11.96,-1068.45],[13.57,-1050.81],[25.6,-1044.39],[38.44,-993.07],[49.67,-993.07],[51.8,-999.34],[63.83,-989.98],[72.93,-968.2],[105.01,-939.33],[109.83,-879.18],[133.09,-851.12],[149.93,-835.87],[161.07,-814.92],[173.78,-814.92],[186.03,-813.41],[188.51,-798.13],[213.78,-787.35],[234.87,-781.01],[262.23,-769.31],[305.55,-741.23],[320.49,-727],[294.7,-627.08],[291.07,-536.51],[288.9,-513.46],[292.11,-485.58],[287.93,-473.91],[292.11,-459.92],[297.59,-462.02],[302.31,-444.51],[323.98,-376.5],[329.97,-352.88],[333.05,-334.17],[328.63,-333.33],[345.89,-247.33],[348.41,-247.83],[364.72,-164.59],[374.93,-114.02],[353.85,-130.9],[350.57,-121.33],[351.27,-107.9],[342.45,-106.69],[336.63,-118.72],[332.22,-120.33],[331.25,-108.24],[328.79,-100.55],[330.65,-82.75],[335.68,-62],[310.35,-74.34],[278.36,-36.2],[276.63,-32.99],[266.97,-37.54],[220.05,-70.63],[182.55,-101.51],[161.9,-112.94],[154.55,-108.02],[117.43,-63.58],[113.46,-64.78]]},{id:1060123256,tags:{landuse:"forest"},p:[[-84.6,-97.74],[-73.29,-96.39],[-43.5,-84.23],[-32.72,-78.34],[-23.49,-69.12],[-5.3,-53.58],[12.19,-30.09],[-10.2,-18.47],[-18.18,-9.24],[-17.61,6.15],[-.71,59.18],[10.06,136.55],[5.76,171.04],[-7.89,225.26],[-.13,270.59],[-6.32,292.99],[-27.09,295.18],[-33.46,280.97],[-37.47,242.71],[-31.83,169.64],[-18.16,108.61],[-17.25,84.56],[-25.45,55.4],[-49.5,17.15],[-54.42,-5.81],[-50.41,-23.48],[-45.49,-34.78],[-59.52,-44.62],[-59.15,-53.36],[-51.68,-58.46],[-40.75,-70.13],[-41.77,-77.65],[-56.36,-82.43],[-69.77,-87.78],[-74.53,-91.65],[-79.89,-93],[-84.06,-94.49]]},{id:1060123257,tags:{landuse:"meadow"},p:[[-339.73,-93.02],[-316.87,-86.93],[-321.58,-75.76],[-313.72,-63.37],[-296.82,-53.45],[-299.58,-40.5],[-276.44,-35.65],[-248.87,-10.08],[-236.17,16.62],[-219.01,24.2],[-216.58,41.38],[-203.81,68.88],[-201.33,93.04],[-212.02,101.77],[-220.03,116.75],[-217.87,134.34],[-203.59,142.48],[-213.54,153.27],[-253.97,145.44],[-266.18,160.42],[-286.45,159.4],[-285.29,174.42],[-296.81,177.78],[-299.48,199.28],[-290.25,202.87],[-281.21,222.54],[-257.22,227.2],[-258.56,247.6],[-237.71,242.39],[-229.47,253.37],[-232.69,275.83],[-325.73,279.05],[-388.3,258.19],[-381.88,320.76],[-346.59,330.37],[-335.36,360.86],[-365.84,410.6],[-394.72,380.12],[-421.99,391.35],[-444.45,367.29],[-444.45,335.2],[-452.47,315.94],[-462.1,362.47],[-481.35,360.86],[-505.42,340],[-517.44,319.96],[-519.99,286.04],[-510.22,245.36],[-495.79,251.77],[-444.45,232.51],[-433.22,203.65],[-407.55,96.15],[-391.51,72.09],[-336.96,134.65],[-372.26,49.63],[-351.4,31.98],[-299.35,59.96],[-351.33,-19.73]]},{id:1134938271,tags:{landuse:"industrial"},p:[[-16.45,596.91],[-1,601.27],[28.61,549.58],[63.23,501.54],[106.62,452.51],[151.74,410],[215.91,365.48],[255.82,341.41],[306.65,312.23],[284.97,302.18],[274.57,302.73],[243.89,260.33],[248.41,253.03],[244.34,235.45],[240.14,230.86],[231.35,228.75],[213.38,226.4],[203.14,225.87],[195.8,226.79],[184.38,229.29],[175.2,230.2],[163.39,234],[149.68,240.7],[135.02,242.92],[129.27,247.57],[123.52,253.68],[119.44,259.07],[115.54,267.42],[110.9,278.91],[107.38,290.79],[103.66,292.84],[85.14,340.55],[58.72,365.32],[15.48,422.51],[5.01,435.35],[-1.87,444.99],[-7.93,460.84],[-9.94,467],[-9.99,513.18],[-10.25,524.03],[-28.25,544.59]]}],gE=[{id:40886855,tags:{name:"Römerstraße",highway:"residential",surface:"asphalt"},p:[[38.97,-205.61],[47.81,-211.72],[66.14,-243.12],[84.33,-280.73],[104.33,-315.55],[113.49,-329.53],[131.48,-357.04],[172.31,-391.67],[215.93,-424.98]]},{id:126140861,tags:{highway:"footway"},p:[[-28.44,329.51],[-11.19,288.37],[-5.98,250.07],[-2.06,239.42],[13.17,219.5],[34.34,182.6],[45.51,164.54],[50.77,155.33],[52.8,150.55],[55.34,145.86],[58.57,136.9],[60.04,127.71],[61.17,123.54],[63.47,119.44],[70.56,114.81],[76.05,110.83]]},{id:126140864,tags:{highway:"track"},p:[[200.53,107.52],[200.71,113.22],[200.76,118.78],[202.88,125.24],[226.66,155.24],[231.39,162.17],[231.06,164.58],[230.24,166.87],[227.51,171.09],[221.75,175.85],[220.94,176.51],[181.64,207.47]]},{id:126140865,tags:{highway:"track",surface:"ground"},p:[[-102.93,-102.38],[-170.34,-215.94],[-175.72,-235.11]]},{id:126140867,tags:{highway:"service"},p:[[268.83,37.65],[261.17,24.7],[256.61,18.38],[252.84,13.37],[245.47,6.83]]},{id:126140868,tags:{highway:"service"},p:[[79.53,30.87],[125.16,-4.43],[146.46,8.8]]},{id:126140869,tags:{highway:"service"},p:[[138.56,77.57],[128.58,87.65],[87.09,126.13]]},{id:126140872,tags:{name:"Schloßberg",highway:"residential"},p:[[186.19,123.46],[200.53,107.52],[243.04,60.59],[268.83,37.65],[287.16,23.87],[295.77,14.17],[305.34,-.14],[314.13,-13.3],[325.11,-32.17]]},{id:126140873,tags:{highway:"service"},p:[[20.87,-24.38],[36.68,-36.21],[50.49,-45.5],[54.56,-51.59],[54,-59.53],[48.86,-67.73],[44.89,-73.14],[40.04,-65.53],[35.9,-47.05],[36.68,-36.21]]},{id:132659641,tags:{name:"Schloßberg",highway:"living_street",surface:"asphalt"},p:[[186.19,123.46],[138.56,77.57],[130.61,71.8],[97.01,51.7],[90.53,46.62],[85.11,40.21],[79.53,30.87],[72.91,24.49],[66.32,18.56],[53.05,7.71],[39.59,-4.13]]},{id:138003340,tags:{highway:"track"},p:[[245.47,6.83],[240.26,11.43],[236.5,13.95],[234.02,15.55],[230.13,17.57],[227.22,18.44],[223.76,19.05],[221.24,19.35],[218.14,19.33],[213.03,18.76],[210.22,17.95],[207.06,16.95],[203.19,15.2],[200.08,13.21],[196.94,11.02],[194.07,8.83],[188.28,3.44],[182.95,-2],[177.55,-7.55],[175.37,-9.74],[172.01,-12.71],[162.6,-20.2],[157.75,-23.9],[152.86,-27.35],[150.09,-28.9],[147.47,-30.86],[142.91,-34.93],[138.07,-38.37],[135.26,-39.93],[132.47,-41.08],[131.29,-41.66],[130.11,-41.99],[127.71,-42.37],[123.15,-42.92],[116.01,-43.92],[111.87,-45.44],[105.21,-48.33],[97.67,-51.98],[86.79,-58.71],[81.69,-62.27],[74.81,-66.95],[65.11,-72.85],[51.27,-78.77],[44.81,-81.94],[44.89,-73.14]]},{id:138003341,tags:{highway:"service"},p:[[237.86,55.25],[241.48,53.05],[245.32,49.34],[250.59,43.87],[252.43,39.68],[253.08,34.86],[254.48,29.04],[254.48,22.9],[252.84,13.37]]},{id:138003344,tags:{highway:"service"},p:[[146.46,8.8],[180.11,40.62],[190.6,47.86],[204.18,52.14],[237.86,55.25],[243.04,60.59]]},{id:150181238,tags:{highway:"footway",surface:"asphalt"},p:[[124.54,189.88],[135.02,170.93],[128.17,166.2],[119.6,162.06],[112.03,158.43],[105.28,154.2],[97.32,148.55],[92.98,144.21],[87.94,136.01],[87.09,126.13]]},{id:150181239,tags:{highway:"footway"},p:[[135.02,170.93],[140.87,174.86],[146.61,175.37],[154.18,174.76],[160.03,173.15],[164.35,172.59],[168.04,170.18],[170.81,166.75],[173.33,164.98],[177.51,165.9],[180.29,164.83],[183.21,162.51],[185.33,160.85],[188.76,163.32],[198.84,172.44]]},{id:150181241,tags:{highway:"footway"},p:[[154.18,174.76],[155.26,179.95],[157.83,182.44]]},{id:150181242,tags:{highway:"service",surface:"asphalt"},p:[[145.33,113.71],[132.15,128.79],[148.68,157.31]]},{id:150181243,tags:{highway:"service",surface:"asphalt"},p:[[128.58,87.65],[132.81,95.45],[145.33,113.71],[152.82,123.64]]},{id:150210321,tags:{barrier:"wall"},p:[[64.81,69.08],[69.47,67.97],[82.86,53.09],[83.39,48.06],[82.12,42.5],[81.83,41.46],[80.35,36.22],[71,25.67],[58.92,13.95],[54.42,11.86],[51.1,14.33],[50.2,14.99]]},{id:150210322,tags:{barrier:"wall"},p:[[69.08,105.95],[68.93,104.53],[68.63,101.78],[67.33,91.65],[60.78,74.52]]},{id:150210324,tags:{barrier:"wall"},p:[[56,67.15],[45.59,65.9],[38,62.81],[33.66,42.29],[37.69,33.03]]},{id:150478491,tags:{highway:"footway"},p:[[58.11,71.54],[58.89,63.83],[67.26,64.94],[77.32,53.59],[79.13,40.86],[77.31,39.36],[67.62,31.38],[64.88,28.49],[54.94,18.03],[48.54,24.06],[43.8,37.68],[42.28,41.63],[40.72,45.7],[43.5,55.96],[46.83,57.66],[58.89,63.83]]},{id:150478492,tags:{highway:"footway"},p:[[46.83,57.66],[77.31,39.36]]},{id:150478493,tags:{highway:"footway"},p:[[42.28,41.63],[64.88,28.49]]},{id:150478494,tags:{highway:"path"},p:[[76.05,110.83],[128.58,87.65]]},{id:150478495,tags:{highway:"footway"},p:[[79.13,40.86],[81.83,41.46],[85.11,40.21]]},{id:150478496,tags:{highway:"path",surface:"compacted"},p:[[76.05,110.83],[77.82,116.81],[87.09,126.13]]},{id:150478497,tags:{highway:"footway",surface:"asphalt"},p:[[54.94,18.03],[51.1,14.33],[53.05,7.71]]},{id:150478498,tags:{highway:"footway",surface:"compacted"},p:[[65.2,105.66],[60.98,111.08],[42.37,119.99],[35.12,108.24],[30.27,100.38]]},{id:150478500,tags:{highway:"footway",surface:"compacted"},p:[[42.37,119.99],[31.15,124.46],[25.91,126.21],[19.32,127.13],[17.64,113.44],[13.76,75.12]]},{id:150478502,tags:{highway:"footway",surface:"compacted"},p:[[76.05,110.83],[65.2,105.66],[47.52,95.02],[13.76,75.12],[54.11,71.46],[58.11,71.54],[65.51,92.85],[65.2,105.66]]},{id:150478504,tags:{highway:"footway",surface:"compacted"},p:[[17.64,113.44],[27.42,112.07],[35.12,108.24],[42.89,102.53],[47.52,95.02],[51.33,88.24],[52.81,80.84],[54.11,71.46]]},{id:150478505,tags:{barrier:"wall"},p:[[.64,21.03],[8.96,23.22]]},{id:150478506,tags:{barrier:"wall"},p:[[68.93,104.53],[75.68,103.88]]},{id:150478507,tags:{barrier:"wall"},p:[[13.99,-18.68],[3.31,-22.22],[-3.93,-14.49]]},{id:150478509,tags:{barrier:"wall"},p:[[-10.81,8.45],[-11.29,10.44],[-9.95,12.97],[-6.81,15.37],[.7,19.66],[.64,21.03],[-.04,37.28]]},{id:152977334,tags:{name:"Untersbergstraße",highway:"residential",surface:"asphalt"},p:[[-163.73,-687.65],[-144.67,-665.02],[-134.9,-644.8],[-129.57,-633.8],[-119.24,-607.11],[-116.89,-598.58],[-113.96,-570.3],[-114.34,-555.47],[-115.53,-508.9],[-113.51,-496.62],[-110.84,-480.28],[-61.92,-331.45],[-44.22,-300.73],[28.63,-225.28],[38.97,-205.61]]},{id:152977335,tags:{name:"Römerstraße",highway:"residential",surface:"asphalt"},p:[[38.97,-205.61],[-7.28,-101.42],[-25.96,-80.5]]},{id:174316205,tags:{name:"Römerstraße",highway:"residential",surface:"asphalt"},p:[[-310.65,-89.01],[-290.71,-83.38],[-268.17,-75.85],[-228.06,-67.51],[-204.17,-65.52],[-190.65,-67.39],[-178.73,-71.04],[-166.91,-75.78],[-155,-81.02],[-118.39,-96.68],[-108.54,-100.32],[-102.93,-102.38],[-94.56,-103.41],[-79.83,-103.35],[-53.86,-95.95],[-49.67,-93.66],[-29.5,-82.65],[-25.96,-80.5]]},{id:217015491,tags:{highway:"track",surface:"compacted"},p:[[-12.81,-67.02],[-39.65,-45.83],[-50.41,-37.15],[-57.27,-28.71],[-60.04,-22.56],[-63.01,-13.05],[-64.1,-4.53],[-63.41,4.47],[-62.91,11.5],[-60.74,19.53],[-58.76,25.07],[-53.81,33.88],[-49.74,41.21],[-43.41,52.6],[-39.24,60.13],[-36.37,63.9],[-34.29,67.35],[-30.23,73.6],[-25.48,84.69],[-23.21,92.71],[-22.51,97.37],[-22.31,107.46],[-23.1,113.71],[-24.4,119.25],[-26.77,128.76],[-29.14,140.74],[-30.93,146.68],[-32.12,153.62],[-33.8,159.36],[-36.48,167.97],[-37.86,176.79],[-38.95,184.52],[-39.54,191.65],[-39.11,198.09],[-40.01,206.87],[-39.69,218.84],[-39.74,223.69],[-41.16,230.8],[-41.58,237.68],[-41.7,244.64],[-40.54,254.71],[-39.89,260.84],[-38.51,268.43],[-37.21,274.6],[-36.04,284.9],[-35.8,290.91],[-34.92,298.31],[-33.43,309],[-30.23,319.51],[-28.44,329.51],[-29.58,338.25],[-31.67,345.83],[-35,355.08],[-36.86,363.34],[-42.17,375],[-47.42,385.04],[-51.36,390],[-61.8,392.78],[-66.12,395.55],[-75.11,397.84]]},{id:217015495,tags:{barrier:"wall",historic:"yes"},p:[[-64.63,-60.03],[-45.58,-73.21]]},{id:227576006,tags:{name:"Schloßberg",highway:"residential",surface:"asphalt"},p:[[20.87,-24.38],[-12.81,-67.02]]},{id:414728748,tags:{name:"Schloßberg",highway:"living_street",surface:"asphalt"},p:[[212.22,152.35],[209.5,147.95],[186.19,123.46]]},{id:555475633,tags:{name:"Schloßberg",highway:"residential",surface:"asphalt"},p:[[-12.81,-67.02],[-25.96,-80.5]]},{id:603888620,tags:{highway:"service",surface:"asphalt"},p:[[258.56,227.95],[248.47,220.74],[237.09,206.1],[223.99,182.69],[221.75,175.85],[221.43,174.87],[220.17,171.99],[216.73,163.48],[212.22,152.35]]},{id:706909286,tags:{name:"Schloßberg",highway:"living_street",surface:"asphalt"},p:[[39.59,-4.13],[20.87,-24.38]]},{id:828507066,tags:{highway:"path"},p:[[-185.8,-34.1],[-188.45,-37.68]]},{id:828507067,tags:{highway:"path"},p:[[-184.65,-20.07],[-185.8,-34.1]]},{id:828507068,tags:{highway:"track",surface:"compacted"},p:[[-204.17,-65.52],[-203.85,-58.23],[-202.55,-51.13],[-200.12,-46.76],[-188.45,-37.68]]}],Wn={hoehen:pE,flaechen:mE,linien:gE};function cu(n){let t=0,e=0;for(let i=0;i<n.length;i++){const s=n[i],r=n[(i+1)%n.length],a=r[0]-s[0],o=r[1]-s[1],c=a*a+o*o,l=Math.atan2(o,a)*4;t+=Math.cos(l)*c,e+=Math.sin(l)*c}return Math.atan2(e,t)/4}function ai(n,t,e,i){const s=Math.cos(i),r=Math.sin(i),a=n[0]-t,o=n[1]-e;return[a*s+o*r,-a*r+o*s]}function je(n,t,e,i,s){const r=Math.cos(s),a=Math.sin(s);return[e+n*r-t*a,i+n*a+t*r]}function ya(n){let t=0,e=0,i=0;for(let s=0;s<n.length;s++){const r=n[s],a=n[(s+1)%n.length],o=r[0]*a[1]-a[0]*r[1];t+=o,e+=(r[0]+a[0])*o,i+=(r[1]+a[1])*o}return Math.abs(t)<1e-9?[n.reduce((s,r)=>s+r[0],0)/n.length,n.reduce((s,r)=>s+r[1],0)/n.length]:[e/(3*t),i/(3*t)]}function lu(n){const t=n.length,e=n.reduce((g,p)=>g+p[0],0)/t,i=n.reduce((g,p)=>g+p[1],0)/t;let s=0,r=0,a=0,o=0,c=0,l=0,h=0;for(const g of n){const p=g[0]-e,v=g[1]-i;s+=p*p,r+=v*v,a+=p*v,o+=p*p*p,c+=v*v*v,l+=p*v*v,h+=v*p*p}const u=s*r-a*a;if(Math.abs(u)<1e-9)return{x:e,z:i,r:0};const d=.5*(o+l),f=.5*(c+h),m=(d*r-f*a)/u,_=(s*f-a*d)/u;return{x:e+m,z:i+_,r:Math.sqrt(m*m+_*_+(s+r)/t)}}function vh(n,t){const e={u0:[],u1:[],v0:[],v1:[]};for(let s=0;s<n.length;s++){const r=n[s],a=n[(s+1)%n.length],o=a[0]-r[0],c=a[1]-r[1],l=Math.hypot(o,c);l<t||(Math.abs(c)<l*.2?((r[1]+a[1])/2<0?e.v0:e.v1).push({off:(r[1]+a[1])/2,len:l}):Math.abs(o)<l*.2&&((r[0]+a[0])/2<0?e.u0:e.u1).push({off:(r[0]+a[0])/2,len:l}))}const i=(s,r)=>s.length?s.reduce((a,o)=>a+o.off*o.len,0)/s.reduce((a,o)=>a+o.len,0):r;return{u0:i(e.u0,Math.min(...n.map(s=>s[0]))),u1:i(e.u1,Math.max(...n.map(s=>s[0]))),v0:i(e.v0,Math.min(...n.map(s=>s[1]))),v1:i(e.v1,Math.max(...n.map(s=>s[1])))}}function _E(n){const t=cu(n),[e,i]=ya(n),s=n.map(u=>ai(u,e,i,t)),r=vh(s,5),a=[[r.u0,r.v0],[r.u1,r.v0],[r.u1,r.v1],[r.u0,r.v1]],o=a.map(()=>[]);for(const u of s){if(!(u[0]<r.u0-.3||u[0]>r.u1+.3||u[1]<r.v0-.3||u[1]>r.v1+.3))continue;let f=0,m=1e9;a.forEach((_,g)=>{const p=Math.hypot(u[0]-_[0],u[1]-_[1]);p<m&&(m=p,f=g)}),o[f].push(u)}const c=o.map((u,d)=>{if(u.length<3)return null;const f=lu(u),[m,_]=je(f.x,f.z,e,i,t);return{x:m,z:_,r:f.r,u:f.x,v:f.z,corner:d}}).filter(Boolean),[l,h]=je((r.u0+r.u1)/2,(r.v0+r.v1)/2,e,i,t);return{x:l,z:h,angle:t,halfU:(r.u1-r.u0)/2,halfV:(r.v1-r.v0)/2,towers:c.map(u=>({...u,u:u.u-(r.u0+r.u1)/2,v:u.v-(r.v0+r.v1)/2}))}}function xE(n,t){let e=0,i=0;for(let y=0;y<n.length;y++){const T=n[y],b=n[(y+1)%n.length],E=Math.hypot(b[0]-T[0],b[1]-T[1]);E>e&&(e=E,i=Math.atan2(b[1]-T[1],b[0]-T[0]))}const[s,r]=ya(t),[a,o]=ya(n);let c=ai([s,r],a,o,i);c[0]>0&&(i+=Math.PI,c=ai([s,r],a,o,i));const l=n.map(y=>ai(y,a,o,i)),h=vh(l,6),u=l.map((y,T)=>[y,l[(T+1)%l.length]]).filter(([y,T])=>Math.abs(T[1]-y[1])<Math.hypot(T[0]-y[0],T[1]-y[1])*.2&&Math.hypot(T[0]-y[0],T[1]-y[1])>6),d=Math.min(...u.map(([y,T])=>Math.max(y[0],T[0]))),f=l.filter(y=>y[0]>d+.3),m=f.length>=3?lu(f):null,_=cu(t),g=t.map(y=>ai(y,s,r,_)),p=vh(g,2),[v,x]=je((h.u0+d)/2,(h.v0+h.v1)/2,a,o,i);return{nave:{x:v,z:x,angle:i,halfLen:(d-h.u0)/2,halfWidth:(h.v1-h.v0)/2},apse:m?{...Object.fromEntries([["x",je(m.x,m.z,a,o,i)[0]],["z",je(m.x,m.z,a,o,i)[1]]]),r:Math.min(m.r,(h.v1-h.v0)/2)}:null,tower:{x:s,z:r,angle:_,halfU:(p.u1-p.u0)/2,halfV:(p.v1-p.v0)/2}}}function Uc(n,t,e,i,s,r){const a=s-e,o=r-i,c=a*a+o*o,l=c>0?Math.max(0,Math.min(1,((n-e)*a+(t-i)*o)/c)):0;return[e+a*l,i+o*l]}function ys(n,t,e){let i=!1;for(let s=0,r=e.length-1;s<e.length;r=s++){const a=e[s],o=e[r];a[1]>t!=o[1]>t&&n<(o[0]-a[0])*(t-a[1])/(o[1]-a[1])+a[0]&&(i=!i)}return i}function ta(n,t,e){let i=1e9;for(let s=0;s<e.length-1;s++){const r=Uc(n,t,e[s][0],e[s][1],e[s+1][0],e[s+1][1]),a=Math.hypot(n-r[0],t-r[1]);a<i&&(i=a)}return i}const fn={castle:138003334,annex:150210315,church:150210316,churchNave:402048805,churchTower:150210320,outbuilding:150478470,enclosureWalls:[150478505,150478507,150478509]},Li=n=>Wn.flaechen.find(t=>t.id===n),Ji=(n,t,e)=>n.tags&&n.tags[t]!==void 0&&(e===void 0||n.tags[t]===e),ue=(()=>{const n=_E(Li(fn.castle).p),t=(n.halfU+n.halfV)/2;return{...n,half:t,depth:Rf,inner:t-Rf}})(),Ma=xE(Li(fn.churchNave).p,Li(fn.churchTower).p),Jn=(n,t)=>je(n,t,ue.x,ue.z,ue.angle),vE=(n,t)=>ai([n,t],ue.x,ue.z,ue.angle),Te=(()=>{const n=ue.half,t={east:[n,0,1,0],west:[-n,0,-1,0],south:[0,n,0,1],north:[0,-n,0,-1]}[$r];return{u:t[0],v:t[1],nu:t[2],nv:t[3]}})(),Pr=Wn.hoehen,la=Pr.raster,Do=Pr.halbeKante;function No(n,t){return Pr.werte[Vt(t,0,la-1)*la+Vt(n,0,la-1)]}function hp(n,t,e,i,s){return t+.5*s*(e-n+s*(2*n-5*t+4*e-i+s*(3*(t-e)+i-n)))}function Oc(n,t){const e=(n-Pr.versatz[0]+Do)/(2*Do)*(la-1),i=(t-Pr.versatz[1]+Do)/(2*Do)*(la-1),s=Math.floor(e),r=Math.floor(i),a=e-s,o=i-r,c=l=>hp(No(s-1,l),No(s,l),No(s+1,l),No(s+2,l),a);return hp(c(r-1),c(r),c(r+1),c(r+2),o)}const lm=Oc(ue.x,ue.z),hm=Oc(Ma.nave.x,Ma.nave.z),hu=Wn.flaechen.filter(n=>Ji(n,"natural","water")).map(n=>{const t=n.p.map(i=>i[0]),e=n.p.map(i=>i[1]);return{pts:n.p,level:Math.min(...n.p.map(i=>Oc(i[0],i[1])))-.35,x0:Math.min(...t),x1:Math.max(...t),z0:Math.min(...e),z1:Math.max(...e)}});function up(n,t,e,i,s,r,a){const o=Math.hypot(t-i,e-s);return jt(n,r,1-Nc(a,a+DM,o))}function on(n,t){let e=Oc(n,t);e=up(e,n,t,ue.x,ue.z,lm,PM),e=up(e,n,t,Ma.nave.x,Ma.nave.z,hm,IM);for(const i of hu){if(n<i.x0-4||n>i.x1+4||t<i.z0-4||t>i.z1+4)continue;const s=ys(n,t,i.pts),r=ta(n,t,i.pts.concat([i.pts[0]])),a=s?Math.min(1,r/3):0;(s||r<1)&&(e=jt(Math.max(e,i.level+.4),i.level-.8,a))}return e}const yE={living_street:5.5,residential:6,service:3.5,track:3,footway:1.8,path:1.4};function ME(){const t=Ua(2048,2048),e=t.getContext("2d"),i=Ni(99),s=Ye-Gi/2,r=_=>(_-s)/Gi*2048,a=_=>_/Gi*2048;e.fillStyle="#dde4ef",e.fillRect(0,0,2048,2048);for(let _=0;_<1100;_++){const g=i()*2048,p=i()*2048,v=18+i()*80,x=.05+i()*.09,y=e.createRadialGradient(g,p,0,g,p,v);y.addColorStop(0,i()<.5?`rgba(255,255,255,${x})`:`rgba(140,160,205,${x})`),y.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=y,e.fillRect(g-v,p-v,v*2,v*2)}const o=(_,g)=>{e.fillStyle=g,e.beginPath(),_.forEach((p,v)=>v?e.lineTo(r(p[0]),r(p[1])):e.moveTo(r(p[0]),r(p[1]))),e.closePath(),e.fill()};for(const _ of Wn.flaechen)Ji(_,"amenity","parking")?o(_.p,"rgba(128,124,128,.45)"):Ji(_,"landuse","cemetery")&&o(_.p,"rgba(160,168,190,.28)");for(const _ of Wn.linien){const g=_.tags.highway&&yE[_.tags.highway];if(!g)continue;const p=(v,x)=>{e.strokeStyle=x,e.lineWidth=a(v),e.lineCap="round",e.lineJoin="round",e.beginPath(),_.p.forEach((y,T)=>T?e.lineTo(r(y[0]),r(y[1])):e.moveTo(r(y[0]),r(y[1]))),e.stroke()};p(g+1.2,"rgba(160,152,150,.4)"),p(g,_.tags.surface==="asphalt"?"rgba(96,92,98,.5)":"rgba(122,112,110,.42)")}const c=[[-1,-1],[1,-1],[1,1],[-1,1]].map(([_,g])=>Jn(_*ue.inner,g*ue.inner));o(c,"rgba(128,120,118,.55)");for(let _=0;_<900;_++){const[g,p]=Jn((i()*2-1)*ue.inner,(i()*2-1)*ue.inner);e.fillStyle=i()<.5?"rgba(60,56,58,.28)":"rgba(235,240,248,.35)",e.fillRect(r(g),r(p),2+i()*3,2+i()*3)}e.strokeStyle="rgba(70,78,125,.22)",e.lineWidth=a(2.2);for(const _ of Wn.flaechen)_.tags.building&&(e.beginPath(),_.p.forEach((g,p)=>p?e.lineTo(r(g[0]),r(g[1])):e.moveTo(r(g[0]),r(g[1]))),e.closePath(),e.stroke());const l=Oa(t);rn&&(l.anisotropy=Math.min(8,rn.capabilities.getMaxAnisotropy()));const h=new Ca(Gi,Gi,Tf,Tf);h.rotateX(-Math.PI/2),h.translate(Ye,0,Ye);const u=h.attributes.position;for(let _=0;_<u.count;_++)u.setY(_,on(u.getX(_),u.getZ(_)));h.computeVertexNormals();const d=new Me(h,new ti({map:l}));d.receiveShadow=!0,oe.add(d);const f=Math.min(...Pr.werte),m=new Me(new qh(1900,40),new ti({color:11187400}));m.rotation.x=-Math.PI/2,m.position.set(Ye,f-3,Ye),oe.add(m);for(const _ of hu){const g=new La(_.pts.map(([x,y])=>new nt(x,-y))),p=new jh(g);p.rotateX(-Math.PI/2),p.translate(0,_.level,0);const v=new Me(p,new L0({color:1778483,shininess:90,specular:6320288}));oe.add(v),Ir(_.pts,_.level+.5)}}function fc(n,t,e,i,s){const r=new La(t.map(([o,c])=>new nt(o,-c))),a=new Cc(r,{depth:i-e,bevelEnabled:!1});a.rotateX(-Math.PI/2),a.translate(0,e,0),n.add(a,null,s,!0)}function uu(n,t,e,i,s,r,a,o,c=.45,l=Gt.plaster){const h=(f,m,_)=>{const[g,p]=je(f,m,t,e,i);return[g,_,p]},u=s+c*.5,d=r+c;n.quad(h(-u,d,a),h(u,d,a),h(u,0,a+o),h(-u,0,a+o),Gt.snow),n.quad(h(u,-d,a),h(-u,-d,a),h(-u,0,a+o),h(u,0,a+o),Gt.snow),n.tri(h(s,r,a),h(s,-r,a),h(s,0,a+o),l),n.tri(h(-s,r,a),h(-s,-r,a),h(-s,0,a+o),l)}const um=n=>Math.min(...n.map(t=>on(t[0],t[1]))),dm=n=>n.reduce((t,e)=>t+on(e[0],e[1]),0)/n.length;function fm(n){const t=cu(n),[e,i]=ya(n),s=n.map(m=>ai(m,e,i,t)),r=Math.min(...s.map(m=>m[0])),a=Math.max(...s.map(m=>m[0])),o=Math.min(...s.map(m=>m[1])),c=Math.max(...s.map(m=>m[1])),[l,h]=je((r+a)/2,(o+c)/2,e,i,t);let u=(a-r)/2,d=(c-o)/2,f=t;return d>u&&([u,d]=[d,u],f+=Math.PI/2),{x:l,z:h,ang:f,halfL:u,halfW:d}}function Uo(n,t,e,i){const s=new La;if(s.moveTo(-n/2,-2),e>0){const r=e/2,a=i-r;s.lineTo(-r,-2),s.lineTo(-r,a),s.absarc(0,a,r,Math.PI,0,!0),s.lineTo(r,-2)}return s.lineTo(n/2,-2),s.lineTo(n/2,t),s.lineTo(-n/2,t),s.lineTo(-n/2,-2),s}function SE(){const{half:n,depth:t,inner:e,angle:i}=ue,s=UM,r=lm,a=ot(ue.x,r,ue.z,0,-i,0),o=new Bt().makeRotationY(Math.PI/2),c=L=>new Cc(L,{depth:t,bevelEnabled:!1,curveSegments:9}),l=L=>$r===L?[yi,Ks]:[0,0];dn.add(c(Uo(2*n,s,...l("north"))),qt(a,ot(0,0,-n)),Gt.plaster),dn.add(c(Uo(2*n,s,...l("south"))),qt(a,ot(0,0,e)),Gt.plaster),dn.add(c(Uo(2*e,s,...l("west"))),qt(a,ot(-n,0,0),o),Gt.plaster),dn.add(c(Uo(2*e,s,...l("east"))),qt(a,ot(e,0,0),o),Gt.plaster);const h=(L,P,U,F)=>Ir([[L,U],[P,U],[P,F],[L,F]].map(([H,B])=>Jn(H,B)),r+s),u=yi/2,d={north:[-n,n,-n,-e,"u"],south:[-n,n,e,n,"u"],west:[-n,-e,-e,e,"v"],east:[e,n,-e,e,"v"]};for(const[L,[P,U,F,H,B]]of Object.entries(d)){if(L!==$r){h(P,U,F,H);continue}B==="u"?(h(P,-u,F,H),h(u,U,F,H)):(h(P,U,F,-u),h(P,U,u,H))}const f=n+.6,m=n-t/2,_=e-.6,g=OM,p=(L,P,U)=>{const[F,H]=Jn(L,U);return[F,r+P,H]};for(let L=0;L<4;L++){const P=L*Math.PI/2,U=Math.cos(P),F=Math.sin(P),H=(B,q,j)=>p(B*U+j*F,q,-B*F+j*U);dn.quad(H(-f,s,f),H(f,s,f),H(m,s+g,m),H(-m,s+g,m),Gt.snow),dn.quad(H(-m,s+g,m),H(m,s+g,m),H(_,s,_),H(-_,s,_),Gt.snow),dn.add(new le(2*n+1.2,.3,.3),qt(a,new Bt().makeRotationY(P),ot(0,s-.1,f-.1)),Gt.tile)}for(const L of ue.towers){const P=qt(a,ot(L.u,0,L.v));dn.add(new Xe(L.r,L.r*1.04,js+2,16),qt(P,ot(0,js/2-1,0)),Gt.plaster);const U=L.r+.3,F=FM;dn.add(new Xe(U,L.r,.6,18),qt(P,ot(0,js-.3,0)),Gt.plaster),dn.add(new Xe(U,U,.5,18),qt(P,ot(0,js+.25,0)),Gt.plaster,!0);for(let B=0;B<Cl;B++){const q=B/Cl*Pe,j=Pe*U/Cl*.55;dn.add(new le(j,F,.45),qt(P,ot(Math.sin(q)*(U-.22),js+.5+F/2,Math.cos(q)*(U-.22),0,q,0)),Gt.plaster,!0)}ka(L.x,L.z,L.r+.05,r+js+.5+F);const H=Math.atan2(L.u,L.v);for(const B of[4.2,8.2,11.6])for(const q of[-.62,.62]){const j=H+q,ut=L.r+.06,[X,$]=Jn(L.u+Math.sin(j)*ut,L.v+Math.cos(j)*ut);kl(X,r+B,$,j-i)}}const v=Li(fn.annex).p;fc(dn,v,r-2,r+Cf,Gt.plasterShade),Ir(v,r+Cf);const x=(L,P)=>qt(a,ot(L,0,P),new Bt().makeRotationY(Math.atan2(Te.nu,Te.nv))),y=L=>{const P=yi/2,U=Ks-P;dn.add(new Ri(P+.22,.24,5,12,Math.PI),qt(L,ot(0,U,0)),Gt.stone);for(const F of[-1,1])dn.add(new le(.5,U+2,.42),qt(L,ot(F*(P+.22),U/2-1,0)),Gt.stone)};y(x(Te.u+Te.nu*.04,Te.v+Te.nv*.04)),y(x(Te.u-Te.nu*(t+.04),Te.v-Te.nv*(t+.04)));for(const L of[-1,1]){const P=x(Te.u-Te.nu*1.3,Te.v-Te.nv*1.3);dn.add(new le(.14,Ks-yi/2,yi/2-.1),qt(P,ot(L*(yi/2-.1),(Ks-yi/2)/2,0)),Gt.woodDark)}const T=(L,P)=>ue.towers.every(U=>Math.hypot(U.u-L,U.v-P)>U.r+1.2),b=Math.floor((2*n-6)/Zs),E=Math.floor((2*e-2)/Zs),D=[["north",0,-1],["south",0,1],["west",-1,0],["east",1,0]],M=v.map(L=>vE(L[0],L[1])),w=(L,P)=>ys(L,P,M);for(const[L,P,U]of D){const F=Math.atan2(P,U)-i;for(const H of zM){for(let B=0;B<=b;B++){const q=-(b*Zs/2)+B*Zs,j=P?P*(n+.04):q,ut=U?U*(n+.04):q;if(!T(j,ut)||w(j-P*.5,ut-U*.5)||L===$r&&Math.abs(q)<yi/2+1.2&&H<Ks+1.2)continue;const[X,$]=Jn(j,ut);kl(X,r+H,$,F)}for(let B=0;B<=E;B++){const q=-(E*Zs/2)+B*Zs,j=P?P*(e-.04):q,ut=U?U*(e-.04):q;if(L===$r&&Math.abs(q)<yi/2+1.2&&H<Ks+1.2)continue;const[X,$]=Jn(j,ut);kl(X,r+H,$,F+Math.PI)}}}const O=[];for(const[L,P]of[[-.6,-.4],[.05,.25],[.65,.45]]){const U=[];for(let F=0;F<=16;F++){const H=F/16,[B,q]=Jn(jt(-e,e,H),jt(L,P,H)*e),j=r+6.4-Math.sin(H*Math.PI)*1.3;U.push(new C(B,j,q)),F>0&&F<16&&O.push(ot(B,j-.1,q))}oe.add(new Gh(new Ne().setFromPoints(U),new y0({color:1314830})))}const K=new Rr(new In(.085,6,5),new Di({color:16765562}),O.length);O.forEach((L,P)=>K.setMatrixAt(P,L)),oe.add(K);const tt=new Da(16761466,70,26,2);tt.position.set(ue.x,r+6.2,ue.z),oe.add(tt),_c(...Jn(-e+1.6,-e+1.6)),_c(...Jn(-e+1.6,e-1.6))}function bE(){const{nave:n,apse:t,tower:e}=Ma,i=hm,s=Gt.churchWall,r=BM,a=kM,o=HM,c=ot(n.x,i,n.z,0,-n.angle,0);Ge.add(new le(2*n.halfLen,r+2,2*n.halfWidth),qt(c,ot(0,r/2-1,0)),s),uu(Ge,n.x,n.z,n.angle,n.halfLen,n.halfWidth,i+r,a,.45,s);for(const b of[-1,1])Ge.add(new le(2*n.halfLen+.5,.25,.25),qt(c,ot(0,r-.05,b*(n.halfWidth+.45))),Gt.tile);if(t){const b=r*.86,E=ot(t.x,i,t.z,0,-n.angle,0);Ge.add(new Xe(t.r,t.r,b+2,12,1,!1,0,Math.PI),qt(E,ot(0,b/2-1,0)),s),Ge.add(new Dn(t.r+.35,3.4,12,1,!1,0,Math.PI),qt(E,ot(0,b+1.7,0)),Gt.snow)}const l=ot(e.x,i,e.z,0,-e.angle,0),h=e.halfU,u=e.halfV,d=Math.min(h,u);Ge.add(new le(2*h,o+2,2*u),qt(l,ot(0,o/2-1,0)),s),Ge.add(new le(2*h+.5,.35,2*u+.5),qt(l,ot(0,o,0)),Gt.stone),Ge.add(new Dn(d*1.48,ls,4),qt(l,ot(0,o+.17+ls/2,0,0,Math.PI/4,0)),Gt.spire),Ge.add(new Dn(d*1.1,ls*.62,4),qt(l,ot(0,o+.22+ls*.31,0,0,Math.PI/4,0,1.38,1,1.38)),Gt.snow),Ge.add(new In(.3,6,5),qt(l,ot(0,o+ls+.3,0)),13214027),Ge.add(new le(.1,1.5,.1),qt(l,ot(0,o+ls+1.2,0)),13214027),Ge.add(new le(.8,.1,.1),qt(l,ot(0,o+ls+1.5,0)),13214027);for(let b=0;b<4;b++){const E=qt(l,new Bt().makeRotationY(b*Math.PI/2)),D=b%2?h:u;for(const M of[-.75,.75])Ge.add(new le(.85,2.3,.12),qt(E,ot(M,o-2.6,D)),1511951);Ge.add(new Xe(1.05,1.05,.1,14),qt(E,ot(0,o-6.2,D+.03,Math.PI/2,0,0)),15261894),Ge.add(new Xe(1.2,1.2,.06,14),qt(E,ot(0,o-6.2,D,Math.PI/2,0,0)),9071146),Ge.add(new le(.08,.8,.05),qt(E,ot(0,o-5.85,D+.1)),1511951),Ge.add(new le(.55,.08,.05),qt(E,ot(.25,o-6.2,D+.1)),1511951)}Ir(Li(fn.church).p,i+r);const f=Math.max(2,Math.floor(2*n.halfLen/4.2));for(let b=0;b<f;b++){const E=-n.halfLen+(b+.5)*(2*n.halfLen/f);for(const D of[-1,1]){const M=qt(c,ot(E,0,D*(n.halfWidth+.03)));ha.add(new le(.95,2.7,.08),qt(M,ot(0,5,0)),16756810),ha.add(new le(.67,.67,.08),qt(M,ot(0,6.35,0,0,0,Math.PI/4)),16756810),Ge.add(new le(.08,3.3,.14),qt(M,ot(0,5.3,0)),2760472),Ge.add(new le(.95,.08,.14),qt(M,ot(0,5,0)),2760472)}}const[m,_]=je(-h-.05,0,e.x,e.z,e.angle),g=-e.angle-Math.PI/2;Ge.add(new le(1.6,2.6,.12),ot(m,i+1.3,_,0,g,0),Gt.woodDark);const[p,v]=je(-h-.4,0,e.x,e.z,e.angle);ha.add(new le(.26,.34,.2),ot(p,i+3.2,v),16762743);const x=new Da(16757864,40,22,2),[y,T]=je(-h-2.4,0,e.x,e.z,e.angle);x.position.set(y,i+3.4,T),oe.add(x)}const EE=new Set([fn.castle,fn.annex,fn.church,fn.churchNave,fn.churchTower,fn.outbuilding]);function Oo(n,t,e){const i=r=>e?r[0]<=t:r[0]>=t,s=[];for(let r=0;r<n.length;r++){const a=n[r],o=n[(r+1)%n.length],c=i(a),l=i(o);if(c&&s.push(a),c!==l){const h=(t-a[0])/(o[0]-a[0]);s.push([t,a[1]+(o[1]-a[1])*h])}}return s}const Zn=(()=>{const n=Li(fn.outbuilding).p,t=fm(n),e=[je(-t.halfL,0,t.x,t.z,t.ang),je(t.halfL,0,t.x,t.z,t.ang)],s=(Math.hypot(e[0][0]-ue.x,e[0][1]-ue.z)<Math.hypot(e[1][0]-ue.x,e[1][1]-ue.z)?1:-1)*(-t.halfL+WM*2*t.halfL),r=ai([ue.x,ue.z],t.x,t.z,t.ang)[1]>0?1:-1,a=n.map(f=>ai(f,t.x,t.z,t.ang)),o=[];for(let f=0;f<a.length;f++){const m=a[f],_=a[(f+1)%a.length];(m[0]-s)*(_[0]-s)<=0&&m[0]!==_[0]&&o.push(m[1]+(_[1]-m[1])*(s-m[0])/(_[0]-m[0]))}const c=Math.min(...o),l=Math.max(...o),h=(c+l)/2,[u,d]=je(s,h,t.x,t.z,t.ang);return{x:u,z:d,u:s,rect:t,nv:r,width:qo,vGarden:r>0?l:c,vRoad:r>0?c:l}})();function wE(){const n=Li(fn.outbuilding),t=Zn.rect,e=Zn.u,i=qo/2,s=n.p.map(_=>ai(_,t.x,t.z,t.ang)),r=_=>_.map(([g,p])=>je(g,p,t.x,t.z,t.ang)),a=r(Oo(s,e-i,!0)),o=r(Oo(s,e+i,!1)),c=r(Oo(Oo(s,e-i,!1),e+i,!0)),l=um(n.p)-.4,h=dm(n.p)+U0;for(const _ of[a,o])_.length>=3&&(fc(Ae,_,l,h,Gt.plasterShade),Ir(_,h+hc));const u=on(Zn.x,Zn.z);c.length>=3&&fc(Ae,c,u+To,h,Gt.plasterShade),uu(Ae,t.x,t.z,t.ang,t.halfL,t.halfW,h,Math.min(hc,t.halfW*.9),.45,Gt.plasterShade);for(const _ of[-1,1]){const g=(_>0?Math.max(Zn.vGarden,Zn.vRoad):Math.min(Zn.vGarden,Zn.vRoad))+_*.03,[p,v]=je(e,g,t.x,t.z,t.ang),x=ot(p,u,v,0,-t.ang,0),y=i,T=To-y;Ae.add(new Ri(y+.15,.18,5,12,Math.PI),qt(x,ot(0,T,0)),Gt.stone);for(const b of[-1,1])Ae.add(new le(.36,T+1,.3),qt(x,ot(b*(y+.15),T/2-.5,0)),Gt.stone)}const[d,f]=je(e-i+.1,Zn.vGarden-Zn.nv*.4,t.x,t.z,t.ang),m=ot(d,u,f,0,-t.ang+Math.PI/2,0);Ae.add(new le(qo*.5,To-.6,.12),qt(m,ot(qo*.25,(To-.6)/2,0)),Gt.woodDark),pc.push(n.p)}function dp(n,t,e,i,s){const r=Math.hypot(e-n,i-t);if(r<.05)return;const a=on(n,t),o=on(e,i),c=(a+o)/2,l=Math.atan2(i-t,e-n);Ae.add(new le(r+Pl,s+1.5+Math.abs(a-o),Pl),ot((n+e)/2,c+(s-1.5)/2,(t+i)/2,0,-l,0),Gt.plasterShade,!0),NE(n,t,e,i,Pl,Math.max(a,o)+s)}function Fo(n,t,e=0){return Math.abs(n-Ye)<Gi/2-e&&Math.abs(t-Ye)<Gi/2-e}const pc=[];function TE(){for(const n of Wn.flaechen){if(!n.tags.building||EE.has(n.id))continue;const[t,e]=ya(n.p);if(!Fo(t,e,4))continue;const i=n.tags.building==="garage"||n.tags.building==="hut",s=um(n.p)-.4,r=dm(n.p)+(i?GM:U0),a=i?9077624:Gt.plasterShade;if(fc(Ae,n.p,s,r,a),!i&&n.p.length<=6){const o=fm(n.p);uu(Ae,o.x,o.z,o.ang,o.halfL,o.halfW,r,Math.min(hc,o.halfW*.9),.45,a)}Ir(n.p,r+(i?0:hc)),pc.push(n.p)}pc.push(Li(fn.castle).p,Li(fn.church).p),wE();for(const n of Wn.linien){if(!Ji(n,"barrier","wall"))continue;const t=fn.enclosureWalls.includes(n.id)?Lf:VM;for(let e=0;e<n.p.length-1;e++){const[i,s]=n.p[e],[r,a]=n.p[e+1];Fo(i,s)&&Fo(r,a)&&dp(i,s,r,a,t)}}for(let n=0;n<Ll.length-1;n++)dp(...Ll[n],...Ll[n+1],Lf);for(const n of Wn.flaechen){if(!Ji(n,"amenity","fountain"))continue;const t=lu(n.p);if(!Fo(t.x,t.z,4))continue;const e=on(t.x,t.z);Ae.add(new Xe(t.r,t.r*1.06,1,14),ot(t.x,e+.5,t.z),Gt.stone,!0),Ae.add(new Xe(t.r*.82,t.r*.82,.06,14),ot(t.x,e+1.01,t.z),1053724),Ae.add(new Xe(.16,.2,1.6,8),ot(t.x,e+1.3,t.z),Gt.stone),ka(t.x,t.z,t.r,e+1.1)}}function AE(){const n=Wn.flaechen.filter(_=>Ji(_,"landuse","forest")||Ji(_,"natural","wood")),t=Wn.linien.filter(_=>_.tags.highway),e=Wn.linien.filter(_=>Ji(_,"barrier","wall")),i=Ni(2026),s=[],r=Gi/2-6,a=NM;for(let _=Ye-r;_<Ye+r&&s.length<Af;_+=a)for(let g=Ye-r;g<Ye+r&&s.length<Af;g+=a){const p=g+(i()-.5)*a*.8,v=_+(i()-.5)*a*.8;n.some(x=>ys(p,v,x.p))&&(hu.some(x=>ys(p,v,x.pts)||ta(p,v,x.pts)<2.5)||Math.hypot(p-ue.x,v-ue.z)<ue.half+9||pc.some(x=>ys(p,v,x)||ta(p,v,x.concat([x[0]]))<3)||t.some(x=>ta(p,v,x.p)<3.5)||e.some(x=>ta(p,v,x.p)<2)||z0.some(x=>Math.hypot(x[0]-p,x[1]-v)<8)||Math.hypot(p-gs.x,v-gs.z)<8||s.push([p,v,.75+i()*.7]))}const o=[],c=[],l=[],h=[],u=Na/2;for(const[_,g,p]of s){const v=on(_,g),x=i()*Pe;o.push(ot(_,v+.9*p,g,0,x,0,p,p,p));for(let y=0;y<3;y++){const T=(2.5-y*.62)*p,b=(3.3-y*.3)*p,E=v+(1.5+y*1.85)*p+b/2;c.push(ot(_,E,g,0,x+y,0,T,b,T)),l.push(ot(_,E+b*.27,g,0,x+y,0,T*.62,b*.5,T*.62)),h.push(.8+i()*.4)}Math.abs(_-Ye)<u+2&&Math.abs(g-Ye)<u+2&&ka(_,g,.5*p,v+9*p)}const d=(_,g,p,v)=>{const x=new Rr(_,g,Math.max(1,p.length));return p.forEach((y,T)=>x.setMatrixAt(T,y)),x.count=p.length,x.castShadow=v,x.receiveShadow=!1,oe.add(x),x};d(new Xe(.2,.3,1.8,6),new ti({color:3483163,flatShading:!0}),o,!1);const f=d(new Dn(1,1,7),new ti({color:16777215,flatShading:!0}),c,!0),m=new At;h.forEach((_,g)=>f.setColorAt(g,m.setRGB(.045*_,.11*_,.085*_))),d(new Dn(1,1,7),new ti({color:iu,flatShading:!0}),l,!1)}function fp(n,t){const e=on(n,t);Ae.add(new le(1.2,1.2,1.2),ot(n-.62,e+.6,t-.1,0,.1,0),Gt.wood,!0),Ae.add(new le(1.2,1.2,1.2),ot(n+.62,e+.6,t+.1,0,-.06,0),6965804,!0),Ae.add(new Xe(.45,.45,1.2,9),ot(n+.1,e+.6,t+1.25),Gt.woodDark,!0),gc(n-1.25,n+1.25,t-.72,t+.72,e+1.2,e+1.2,null,"solid"),ka(n+.1,t+1.25,.48,e+1.2)}function RE(n,t,e){const r=on(n,t);Ae.add(new le(1.5,1.25+1,4.2),ot(n,r+.62-.5,t),Gt.wood,!0);const a=Ni(n*31+t*17|0);for(let o=0;o<26;o++){const c=(a()-.5)*1.2,l=.15+a()*.95,h=a()<.5?-1:1,u=ot(n+c,r+l,t+h*(4.2/2+.01),Math.PI/2,0,0);Ae.add(new Xe(.11,.11,.04,6),u,a()<.5?12162402:9071168)}gc(n-1.5/2,n+1.5/2,t-4.2/2,t+4.2/2,r+1.25,r+1.25,null,"solid")}function CE(n,t,e,i,s){const r=Math.max(on(n,e),on(t,e),on(n,i),on(t,i)),a=r+s;Ae.add(new le(t-n,.16,i-e),ot((n+t)/2,a-.08,(e+i)/2),Gt.wood,!0);for(const u of[n+.15,(n+t)/2,t-.15])for(const d of[e+.15,i-.15]){const f=on(u,d);Ae.add(new le(.18,a-f,.18),ot(u,(a+f)/2,d),Gt.woodDark)}gc(n,t,e,i,a);const o=t+3.4,c=on(o,(e+i)/2)+.02,l=e+.6,h=i-.6;Ae.quad([t,a,l],[t,a,h],[o,c,h],[o,c,l],Gt.wood),Ae.tri([t,c-.3,l],[t,a,l],[o,c-.3,l],Gt.woodDark),Ae.tri([t,c-.3,h],[t,a,h],[o,c-.3,h],Gt.woodDark),gc(t,o,l,h,a,c,"x")}const pp={x:24,z:16},sn={x:18,z:11.5,camDist:8.5};function LE(){const n=(i,s,r)=>hs(...Jn(i,s),r);n(Te.u+Te.nu*2.4+Te.nv*3,Te.v+Te.nv*2.4+Te.nu*3,!0),n(Te.u+Te.nu*2.4-Te.nv*3,Te.v+Te.nv*2.4-Te.nu*3,!0),hs(48,10,!0),hs(31,17,!0);const t=Zn,e=t.rect;hs(...je(t.u+t.width/2+1.2,t.vRoad-t.nv*1.6,e.x,e.z,e.ang),!0),hs(...je(t.u+t.width/2+1.2,t.vGarden+t.nv*1.6,e.x,e.z,e.ang),!1),hs(22,-2,!1),hs(14,26,!1),fp(31,7),fp(13,19),RE(34.5,13),CE(22,26.5,17,20.5,1.1),_c(17,20),_c(44,22)}function PE(){ME(),SE(),bE(),TE(),AE(),LE()}const mc=wt("game"),Ie={setting:"auto",level:"high",settle:0,lights:[],pixelRatio:Math.min(!cn&&window.devicePixelRatio||1,2)},rn=cn?null:new m0({canvas:mc,antialias:!0,powerPreference:"high-performance"});rn&&(rn.setPixelRatio(Ie.pixelRatio),rn.setSize(window.innerWidth,window.innerHeight),rn.shadowMap.enabled=!0,rn.shadowMap.type=Bp,rn.toneMapping=kp,rn.toneMappingExposure=1.2,rn.autoClear=!1);const Fc=4536924,oe=new g0;oe.background=new At(Fc);oe.fog=new Hh(Fc,.0105);const ae=new yn(B0,K0(),.08,2600);ae.rotation.order="YXZ";const Ba=new Me(new In(1800,24,14),new ts({side:bn,depthWrite:!1,fog:!1,uniforms:{uZenith:{value:new At(922676)},uMid:{value:new At(4864632)},uHorizon:{value:new At(13660252)},uGlow:{value:new At(16751178)},uHaze:{value:new At(Fc)},uSunDir:{value:new C(-.93,0,.36).normalize()}},vertexShader:"varying vec3 vDir; void main(){ vDir = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
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
      }`}));Ba.renderOrder=-10;Ba.frustumCulled=!1;oe.add(Ba);{const t=new Float32Array(1260),e=Ni(7);for(let r=0;r<420;r++){const a=e()*Pe,o=.25+e()*.75,c=Math.sqrt(1-o*o);t[r*3]=Math.cos(a)*c*1700,t[r*3+1]=o*1700,t[r*3+2]=Math.sin(a)*c*1700}const i=new Ne;i.setAttribute("position",new An(t,3));const s=new M0(i,new Vh({color:14673663,size:1.6,sizeAttenuation:!1,fog:!1,transparent:!0,opacity:.7,depthWrite:!1}));s.frustumCulled=!1,s.renderOrder=-9,Ba.add(s)}const IE=new N0(9083872,4011336,1.55);oe.add(IE);const ke=new $h(11123967,1.9);ke.castShadow=!0;ke.shadow.mapSize.set(2048,2048);ke.shadow.camera.left=-Dc;ke.shadow.camera.right=Dc;ke.shadow.camera.top=Dc;ke.shadow.camera.bottom=-Dc;ke.shadow.camera.near=1;ke.shadow.camera.far=170;ke.shadow.bias=-5e-4;ke.shadow.normalBias=.05;const DE=new C(34,62,40);oe.add(ke,ke.target);const pm=new $h(16747093,.75);pm.position.set(-80,16,30);oe.add(pm);function Xn(n,t){return on(n,t)}const Pi=[],oi=[],Sa=[];function ka(n,t,e,i=50,s=!0){Pi.push({kind:"circle",x:n,z:t,r:e,top:i,nav:s,x0:n-e,x1:n+e,z0:t-e,z1:t+e})}function Ir(n,t=50,e=!0){const i=n.map(r=>r[0]),s=n.map(r=>r[1]);Pi.push({kind:"poly",pts:n,top:t,nav:e,x0:Math.min(...i),x1:Math.max(...i),z0:Math.min(...s),z1:Math.max(...s)})}function NE(n,t,e,i,s,r=50,a=!0){const o=s/2;Pi.push({kind:"seg",ax:n,az:t,bx:e,bz:i,h:o,top:r,nav:a,x0:Math.min(n,e)-o,x1:Math.max(n,e)+o,z0:Math.min(t,i)-o,z1:Math.max(t,i)+o})}function gc(n,t,e,i,s,r=s,a=null,o="walk"){const c={x0:n,x1:t,z0:e,z1:i,hA:s,hB:r,axis:a,ai:o};return oi.push(c),o==="solid"&&Sa.push({kind:"box",box:!0,x0:n,x1:t,z0:e,z1:i,top:Math.max(s,r),nav:!0}),c}function Ha(n,t,e){return n.axis==="x"?jt(n.hA,n.hB,Vt((t-n.x0)/(n.x1-n.x0),0,1)):n.axis==="z"?jt(n.hA,n.hB,Vt((e-n.z0)/(n.z1-n.z0),0,1)):n.hA}function mm(n,t,e,i,s=!1){let r=Xn(n,t);for(let a=0;a<oi.length;a++){const o=oi[a];if(s&&o.ai==="solid"||n<o.x0||n>o.x1||t<o.z0||t>o.z1)continue;const c=Ha(o,n,t);c<=e+i&&c>r&&(r=c)}return r}function _r(n,t){let e=Xn(n,t);for(let i=0;i<oi.length;i++){const s=oi[i];if(n<s.x0||n>s.x1||t<s.z0||t>s.z1)continue;const r=Ha(s,n,t);r>e&&(e=r)}return e}function mp(n,t,e,i,s){for(let r=0;r<oi.length;r++){const a=oi[r],o=Vt(n,a.x0,a.x1),c=Vt(t,a.z0,a.z1),l=n-o,h=t-c;if(!(l*l+h*h>=i*i)&&Ha(a,o,c)>e+s)return!0}return!1}function du(n,t,e){const i=Vt(n.x,e.x0,e.x1),s=Vt(n.z,e.z0,e.z1),r=n.x-i,a=n.z-s,o=r*r+a*a;if(o>=t*t)return 0;if(o>1e-8){const f=Math.sqrt(o),m=(t-f)/f;return n.x+=r*m,n.z+=a*m,t-f}const c=n.x-e.x0,l=e.x1-n.x,h=n.z-e.z0,u=e.z1-n.z,d=Math.min(c,l,h,u);return d===c?n.x=e.x0-t:d===l?n.x=e.x1+t:d===h?n.z=e.z0-t:n.z=e.z1+t,d+t}function UE(n,t,e){const i=n.x-e.x,s=n.z-e.z,r=t+e.r,a=i*i+s*s;if(a>=r*r)return 0;const o=Math.sqrt(a);if(o<1e-5)return n.x+=r,r;const c=(r-o)/o;return n.x+=i*c,n.z+=s*c,r-o}function OE(n,t,e){const[i,s]=Uc(n.x,n.z,e.ax,e.az,e.bx,e.bz),r=n.x-i,a=n.z-s,o=t+e.h,c=r*r+a*a;if(c>=o*o)return 0;const l=Math.sqrt(c);if(l<1e-5){const u=e.bx-e.ax,d=e.bz-e.az,f=Math.hypot(u,d)||1;return n.x+=-d/f*o,n.z+=u/f*o,o}const h=(o-l)/l;return n.x+=r*h,n.z+=a*h,o-l}function FE(n,t,e){const i=e.pts;let s=0,r=0,a=1e9;for(let h=0,u=i.length-1;h<i.length;u=h++){const[d,f]=Uc(n.x,n.z,i[u][0],i[u][1],i[h][0],i[h][1]),m=(n.x-d)*(n.x-d)+(n.z-f)*(n.z-f);m<a&&(a=m,s=d,r=f)}const o=Math.sqrt(a),c=ys(n.x,n.z,i);if(!c&&o>=t)return 0;if(c){const h=s-n.x,u=r-n.z,d=o||1e-5;return n.x=s+h/d*t,n.z=r+u/d*t,o+t}const l=(t-o)/o;return n.x+=(n.x-s)*l,n.z+=(n.z-r)*l,t-o}function gm(n,t,e){if(n.x<e.x0-t||n.x>e.x1+t||n.z<e.z0-t||n.z>e.z1+t)return 0;switch(e.kind){case"box":return du(n,t,e);case"circle":return UE(n,t,e);case"seg":return OE(n,t,e);default:return FE(n,t,e)}}function fu(n,t,e){let i=0;for(let r=0;r<2;r++){for(let a=0;a<Pi.length;a++)i+=gm(n,t,Pi[a]);if(e)for(let a=0;a<Sa.length;a++)i+=du(n,t,Sa[a])}const s=Na/2-2;return n.x=Vt(n.x,Ye-s,Ye+s),n.z=Vt(n.z,Ye-s,Ye+s),i}function zE(n,t,e){for(let i=0;i<Pi.length;i++){const s=Pi[i];if(!(t>s.top||n<s.x0||n>s.x1||e<s.z0||e>s.z1)){if(s.kind==="box")return!0;if(s.kind==="circle"){const r=n-s.x,a=e-s.z;if(r*r+a*a<s.r*s.r)return!0}else if(s.kind==="seg"){const[r,a]=Uc(n,e,s.ax,s.az,s.bx,s.bz);if((n-r)**2+(e-a)**2<s.h*s.h)return!0}else if(ys(n,e,s.pts))return!0}}return!1}const zo={vcol:new ti({vertexColors:!0,flatShading:!0,side:Sn}),glow:new Di({vertexColors:!0,fog:!0})},Gt={plaster:15326672,plasterShade:13352366,stone:9276040,tile:7223851,wood:5913893,woodDark:3811095,iron:1841951,churchWall:15525594,spire:6106917,snow:iu},dn=new Qn,Ge=new Qn,Ae=new Qn,ha=new Qn,yh=[],Mh=[],_m=[],xm=[],pu=Ni(1527);function kl(n,t,e,i,s){(pu()<.27?Mh:yh).push(ot(n,t,e,0,i,0))}let Bo=null;function BE(){if(Bo)return Bo;const n=Ua(96,96),t=n.getContext("2d"),e=t.createRadialGradient(48,48,0,48,48,48);return e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.18,"rgba(255,255,255,.55)"),e.addColorStop(.5,"rgba(255,255,255,.14)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,96,96),Bo=Oa(n),Bo}function Sh(n,t,e=.9){const i=new gy(new _0({map:BE(),color:n,blending:ql,depthWrite:!1,transparent:!0,opacity:e}));return i.scale.set(t,t,1),i}function hs(n,t,e){const i=_r(n,t);Ae.add(new Xe(.06,.09,3.1,6),ot(n,i+1.55,t),Gt.iron),Ae.add(new Dn(.34,.3,4),ot(n,i+3.72,t,0,Math.PI/4,0),Gt.iron,!0),ha.add(new le(.3,.44,.3),ot(n,i+3.34,t),16762743);const s=Sh(16756832,2.8,.75);s.position.set(n,i+3.34,t),oe.add(s);let r=null;e&&(r=new Da(16757864,48,28,2),r.position.set(n,i+3.3,t),r.userData.lantern=!0,oe.add(r)),ka(n,t,.14,i+3.6,!1),_m.push({light:r,sprite:s,base:e?48:0,seed:pu()*10})}function _c(n,t){const e=_r(n,t);Ae.add(new Xe(.03,.03,.5,5),ot(n,e+.25,t,.15,0,.1),7999504);const i=new Da(16719677,140,30,2);i.position.set(n,e+.75,t),oe.add(i);const s=Sh(16724048,3.4,1);s.position.set(n,e+.62,t),oe.add(s);const r=Sh(16765136,.9,1);r.position.set(n,e+.58,t),oe.add(r),xm.push({x:n,y:e+.58,z:t,light:i,sprite:s,core:r,seed:pu()*10,smokeT:0})}function kE(){const n=(s,r,a,o,c)=>{const h=[],u=[],d=new At(o),f=new At(c);for(let g=0;g<220;g++){const p=g/220*Pe,v=(g+1)/220*Pe,x=a(p),y=a(v),T=Math.cos(p)*s,b=Math.sin(p)*s,E=Math.cos(v)*s,D=Math.sin(v)*s;h.push(T,r,b,E,r,D,E,y,D,T,r,b,E,y,D,T,x,b);for(const M of[0,0,1,0,1,1]){const w=M?d:f;u.push(w.r,w.g,w.b)}}const m=new Ne;m.setAttribute("position",new ne(h,3)),m.setAttribute("color",new ne(u,3));const _=new Me(m,new Di({vertexColors:!0,side:Sn,fog:!1}));_.frustumCulled=!1,_.renderOrder=-5,oe.add(_)},t=(s,r)=>Math.sin(s*7+r)*.5+Math.sin(s*17+r*2.3)*.28+Math.sin(s*41+r*.7)*.14+Math.sin(s*83+r)*.08,e=(s,r,a)=>{const o=dc(r,s);return Math.exp(-(o*o)/(a*a))},i=s=>.35+.65*Nc(-.2,.75,Math.sin(s-.25));n(1500,-60,s=>(150+t(s,1.3)*95)*i(s)+330*Math.pow(e(s,.62,.42),.6)+240*e(s,1.75,.3)+360*e(s,2.95,.16)+180*e(s,2.6,.2),5196408,7036806),n(1100,-60,s=>(70+t(s,4.1)*45)*(.5+.5*i(s))+80*e(s,.3,.5)+60*e(s,2.3,.4),3288396,Fc)}function gp(n){const t=Ua(64,96),e=t.getContext("2d");if(e.fillStyle="#b7ad9e",e.fillRect(0,0,64,96),n){const i=e.createLinearGradient(0,8,0,88);i.addColorStop(0,"#ffdc90"),i.addColorStop(1,"#ff9a38"),e.fillStyle=i}else e.fillStyle="#0f131d";e.fillRect(7,7,50,80),e.save(),e.beginPath(),e.rect(7,7,50,80),e.clip(),e.strokeStyle=n?"rgba(45,22,6,.9)":"rgba(84,92,110,.95)",e.lineWidth=2;for(let i=-96;i<170;i+=13)e.beginPath(),e.moveTo(i,7),e.lineTo(i+80,87),e.stroke(),e.beginPath(),e.moveTo(i+80,7),e.lineTo(i,87),e.stroke();return e.restore(),e.fillStyle="#eef2f8",e.fillRect(2,87,60,7),Oa(t)}const mu=[];function HE(){PE(),kE();const n=(r,a)=>{const o=new Me(r.build(),a);return o.castShadow=!0,o.receiveShadow=!0,oe.add(o),o};mu.push(n(dn,zo.vcol),n(Ge,zo.vcol),n(Ae,zo.vcol));const t=new Me(ha.build(),zo.glow);oe.add(t);const e=new Ca(1.15,1.72),i=new Rr(e,new ti({map:gp(!1)}),yh.length);yh.forEach((r,a)=>i.setMatrixAt(a,r));const s=new Rr(e,new Di({map:gp(!0)}),Mh.length);Mh.forEach((r,a)=>s.setMatrixAt(a,r)),oe.add(i,s),oe.updateMatrixWorld(!0)}const gu=1.25,de=Math.ceil(Na/gu),Gn=new Uint8Array(de*de),wn=new Uint16Array(de*de),er=new Int32Array(de*de),rr=65535,Dr=n=>Vt(Math.floor((n-Ye+Na/2)/gu),0,de-1),Nr=n=>(n+.5)*gu-Na/2+Ye;function GE(){const t=new C;for(let e=0;e<de;e++)for(let i=0;i<de;i++){const s=Nr(i),r=Nr(e);let a=!1;for(let o=0;o<Pi.length&&!a;o++){const c=Pi[o];c.nav&&(t.set(s,0,r),a=gm(t,.72,c)>0)}for(let o=0;o<Sa.length&&!a;o++)t.set(s,0,r),a=du(t,.72,Sa[o])>0;Gn[e*de+i]=a?1:0}}function vm(n,t){const e=Dr(n),i=Dr(t);if(!Gn[i*de+e])return i*de+e;for(let s=1;s<8;s++)for(let r=-s;r<=s;r++)for(let a=-s;a<=s;a++){if(Math.max(Math.abs(a),Math.abs(r))!==s)continue;const o=e+a,c=i+r;if(!(o<0||c<0||o>=de||c>=de)&&!Gn[c*de+o])return c*de+o}return-1}function VE(n,t){wn.fill(rr);const e=vm(n,t);if(e<0)return;let i=0,s=0;for(er[s++]=e,wn[e]=0;i<s;){const r=er[i++],a=wn[r]+1,o=r%de,c=r/de|0;if(o>0){const l=r-1;!Gn[l]&&wn[l]===rr&&(wn[l]=a,er[s++]=l)}if(o<de-1){const l=r+1;!Gn[l]&&wn[l]===rr&&(wn[l]=a,er[s++]=l)}if(c>0){const l=r-de;!Gn[l]&&wn[l]===rr&&(wn[l]=a,er[s++]=l)}if(c<de-1){const l=r+de;!Gn[l]&&wn[l]===rr&&(wn[l]=a,er[s++]=l)}}}function _p(n,t,e,i){const s=Math.hypot(e-n,i-t),r=Math.ceil(s/.6);for(let a=1;a<r;a++){const o=a/r;if(Gn[Dr(jt(t,i,o))*de+Dr(jt(n,e,o))])return!1}return!0}function xp(n,t,e){const i=Dr(n),s=Dr(t),r=s*de+i;let a=Gn[r]?rr:wn[r],o=0,c=0;for(let d=-1;d<=1;d++)for(let f=-1;f<=1;f++){if(!f&&!d)continue;const m=i+f,_=s+d;if(m<0||_<0||m>=de||_>=de)continue;const g=_*de+m;Gn[g]||f&&d&&(Gn[s*de+m]||Gn[_*de+i])||wn[g]<a&&(a=wn[g],o=f,c=d)}if(!o&&!c)return!1;const l=Nr(i+o)-n,h=Nr(s+c)-t,u=Math.hypot(l,h)||1;return e.x=l/u,e.z=h/u,!0}const ni=(()=>{const n=new Float32Array(ur*3),t=new Float32Array(ur),e=Ni(12);for(let c=0;c<ur;c++)n[c*3]=(e()-.5)*56,n[c*3+1]=e()*26-6,n[c*3+2]=(e()-.5)*56,t[c]=1.1+e()*1.5;const i=new Ne;i.setAttribute("position",new An(n,3));const s=Ua(32,32),r=s.getContext("2d"),a=r.createRadialGradient(16,16,0,16,16,16);a.addColorStop(0,"rgba(255,255,255,1)"),a.addColorStop(.5,"rgba(255,255,255,.6)"),a.addColorStop(1,"rgba(255,255,255,0)"),r.fillStyle=a,r.fillRect(0,0,32,32);const o=new M0(i,new Vh({map:Oa(s),size:.13,transparent:!0,opacity:.9,depthWrite:!1,color:15922687}));return o.frustumCulled=!1,oe.add(o),{pos:n,spd:t,pts:o,t:0,count:ur}})();function WE(n){ni.t+=n;const t=ni.pos,e=ae.position.x,i=ae.position.y,s=ae.position.z,r=(.9+Math.sin(ni.t*.3)*.7)*n,a=.35*n;for(let o=0;o<ni.count;o++){const c=o*3;t[c]+=r+Math.sin(ni.t*1.3+o)*.004,t[c+1]-=ni.spd[o]*n,t[c+2]+=a,t[c]-e>28?t[c]-=56:t[c]-e<-28&&(t[c]+=56),t[c+2]-s>28?t[c+2]-=56:t[c+2]-s<-28&&(t[c+2]+=56),t[c+1]<i-8?t[c+1]+=26:t[c+1]>i+18&&(t[c+1]-=26)}ni.pts.geometry.attributes.position.needsUpdate=!0}const $i=(()=>{const n=new Rr(new Zh(.5),new Di({color:16777215}),Dl);n.instanceMatrix.setUsage(ud);const t=new At(1,1,1);for(let i=0;i<Dl;i++)n.setColorAt(i,t);n.instanceColor.setUsage(ud),n.frustumCulled=!1,n.count=0,oe.add(n);const e=[];for(let i=0;i<Dl;i++)e.push({x:0,y:0,z:0,vx:0,vy:0,vz:0,life:0,max:1,size:.1,grow:0,grav:0,drag:0,stretch:1,spin:0,r:1,g:1,b:1,floor:!0});return{mesh:n,free:e,active:[]}})(),ea=new At,vp=new Bt,XE=new En,qE=new Ts,YE=new C,KE=new C;function ba(n,t,e,i,s,r,a,o,c,l){const h=$i.free.pop();h&&(h.x=n,h.y=t,h.z=e,h.vx=i,h.vy=s,h.vz=r,h.life=a,h.max=a,h.size=o,ea.set(c),h.r=ea.r,h.g=ea.g,h.b=ea.b,h.grav=l&&l.grav!==void 0?l.grav:14,h.drag=l&&l.drag||.6,h.grow=l&&l.grow||0,h.stretch=l&&l.stretch||1,h.spin=(Math.random()-.5)*16,h.floor=!(l&&l.noFloor),$i.active.push(h))}function bh(n,t,e,i,s,r=5){for(let a=0;a<s;a++){const o=Math.random()*Pe,c=Math.random()*r;ba(n+(Math.random()-.5)*.5,t+(Math.random()-.5)*.8,e+(Math.random()-.5)*.5,Math.cos(o)*c,1.5+Math.random()*r*.9,Math.sin(o)*c,.7+Math.random()*.7,.12+Math.random()*.14,i[Math.random()*i.length|0],{stretch:2.6,drag:1.4,grav:11})}}function xc(n,t,e,i,s=16760928){for(let r=0;r<i;r++){const a=Math.random()*Pe,o=2+Math.random()*7;ba(n,t,e,Math.cos(a)*o,1+Math.random()*6,Math.sin(a)*o,.25+Math.random()*.3,.05+Math.random()*.05,s,{stretch:3,drag:2})}}function Nn(n,t,e,i,s=2.5){for(let r=0;r<i;r++){const a=Math.random()*Pe,o=Math.random()*s;ba(n,t+.05,e,Math.cos(a)*o,.8+Math.random()*s,Math.sin(a)*o,.4+Math.random()*.4,.07+Math.random()*.08,15659770,{grav:9})}}function jE(n){const t=$i.active,e=$i.mesh;let i=0;for(let s=0;s<t.length;s++){const r=t[s];if(r.life-=n,r.life<=0){$i.free.push(r);continue}const a=Math.exp(-r.drag*n);if(r.vx*=a,r.vz*=a,r.vy=r.vy*a-r.grav*n,r.x+=r.vx*n,r.y+=r.vy*n,r.z+=r.vz*n,r.floor){const h=Xn(r.x,r.z)+.03;r.y<h&&(r.y=h,r.vy=0,r.vx*=.5,r.vz*=.5,r.spin=0)}const o=r.life/r.max,c=(r.size+r.grow*(1-o))*Math.min(1,o*3.3),l=r.spin*(r.max-r.life);vp.compose(YE.set(r.x,r.y,r.z),XE.setFromEuler(qE.set(l,l*.7,l*.3)),KE.set(c,c*r.stretch,c)),e.setMatrixAt(i,vp),e.setColorAt(i,ea.setRGB(r.r,r.g,r.b)),t[i++]=r}t.length=i,e.count=i,e.instanceMatrix.needsUpdate=!0,e.instanceColor.needsUpdate=!0}function ZE(n){const t=G.time;for(const e of xm){const i=.75+Math.sin(t*31+e.seed)*.12+Math.sin(t*57+e.seed*3)*.1+Math.random()*.08;e.light.intensity=140*i,e.sprite.scale.setScalar(3.2+i*.9),e.core.scale.setScalar(.7+i*.4),e.smokeT-=n,e.smokeT<=0&&(e.smokeT=.09,ba(e.x,e.y+.2,e.z,.5+Math.random()*.6,1.6+Math.random(),(Math.random()-.5)*.6,2.2,.16,9056320,{grav:-.5,drag:.5,grow:.9,noFloor:!0}),Math.random()<.5&&ba(e.x,e.y,e.z,(Math.random()-.5)*3,1+Math.random()*3,(Math.random()-.5)*3,.4,.045,16738928,{grav:6}))}for(const e of _m){const i=.93+Math.sin(t*9+e.seed)*.04+Math.sin(t*23+e.seed*2)*.03;e.light&&(e.light.intensity=e.base*i)}}const ym="krampuslauf_marzoll_grafik",Eh="krampuslauf_marzoll_grafik_auto";function wh(n){try{return localStorage.getItem(n)}catch{return null}}function Mm(n,t){try{localStorage.setItem(n,t)}catch{}}function vc(n){const t=Cr[n];Ie.level=n,Ie.pixelRatio=Math.min(window.devicePixelRatio||1,t.maxPixelRatio),rn.setPixelRatio(Ie.pixelRatio),ke.castShadow!==t.shadows&&(ke.castShadow=t.shadows),ke.shadow.mapSize.x!==t.shadowMapSize&&(ke.shadow.mapSize.set(t.shadowMapSize,t.shadowMapSize),ke.shadow.map&&(ke.shadow.map.dispose(),ke.shadow.map=null)),ni.count=Math.min(ur,t.snow),ni.pts.geometry.setDrawRange(0,ni.count);for(const e of Ie.lights)e.visible=t.lanternLights;Ie.settle=pS,Sm()}function Th(n){Ie.setting=n,Mm(ym,n),vc(n==="auto"?wh(Eh)in Cr?wh(Eh):ct.mode?uS:hS:n)}function JE(){Ie.lights=[],oe.traverse(t=>{t.isPointLight&&t.userData.lantern&&Ie.lights.push(t)});for(const t of document.querySelectorAll("[data-quality]"))t.innerHTML="<span>Grafik</span>"+[["auto","Automatisch"],["low","Niedrig"],["mid","Mittel"],["high","Hoch"]].map(([e,i])=>`<button type="button" data-q="${e}" aria-pressed="false">${i}</button>`).join("")+"<small></small>",t.addEventListener("click",e=>{const i=e.target.closest("button[data-q]");i&&Th(i.dataset.q)});const n=wh(ym);Th(n&&(n==="auto"||n in Cr)?n:"auto")}function Sm(){if(!cn)for(const n of document.querySelectorAll("[data-quality]")){for(const e of n.querySelectorAll("button"))e.setAttribute("aria-pressed",String(e.dataset.q===Ie.setting));const t=n.querySelector("small");t&&(t.textContent=Ie.setting==="auto"?`Gerade: ${Cr[Ie.level].name}. Stellt sich bei ruckelndem Bild selbst niedriger.`:"")}}function $E(n){if(G.state!=="playing"||document.visibilityState!=="visible"||Ie.settle>0)return;const t=Cr[Ie.level];if(n>=dS)return;if(Ie.pixelRatio-.15>=t.minPixelRatio){Ie.pixelRatio=Math.max(t.minPixelRatio,Ie.pixelRatio-.25),rn.setPixelRatio(Ie.pixelRatio),Ie.settle=1;return}if(Ie.setting!=="auto")return;const e=Ie.level==="high"?"mid":Ie.level==="mid"?"low":null;e&&(vc(e),Mm(Eh,e),ns("Grafik automatisch auf "+Cr[e].name+" gestellt",2.5))}const Mt={n:0,state:"break",breakT:0,queue:[],spawnT:0,mul:{speed:1,damage:1,toughChances:null},spawnIdx:[],lastTick:-1,total:0,hurt:!1},xr=[];function QE(n){if(n%uc===0){const a=(n/uc-1)*nb;return Array.from({length:a},(o,c)=>c%2?"jumper":"runner").concat(["boss"])}const t=n===1?OS:Math.round(FS+n*zS+n*n*BS),e=n>=Bf?Math.min(1+Math.floor((n-Bf)/2),kS):0,i=n>=kf?Math.min(1+Math.floor((n-kf)*.9),HS):0,s=Math.max(3,t-e-i),r=[];for(let a=0;a<s;a++)r.push("runner");for(let a=0;a<i;a++)r.push("jumper");for(let a=0;a<e;a++)r.push("rammer");for(let a=r.length-1;a>0;a--){const o=Math.random()*(a+1)|0;[r[a],r[o]]=[r[o],r[a]]}return r}function tw(n){return Math.min(WS,GS+VS*n)}function ew(n){return Math.min(YS,XS+qS*(n-1))}function bm(n){Mt.state="break",Mt.breakT=n,Mt.lastTick=-1}function nw(){Mt.n++,Mt.state="active",Mt.queue=QE(Mt.n),Mt.total=Mt.queue.length,Mt.mul.speed=tw(Mt.n),Mt.mul.damage=ew(Mt.n),Mt.mul.toughChances=Dw(Mt.n),Mt.hurt=!1,Mt.spawnT=.5;const n=Math.random()*xr.length|0,t=Math.min(xr.length,2+Mt.n);Mt.spawnIdx=[];for(let e=0;e<t;e++)Mt.spawnIdx.push((n+e)%xr.length);rt.intensity=Vt((Mt.n-1)/8,0,1),Mt.n%uc===0?(Sr("Der Oberteufel","Boss-Welle "+Mt.n+" – er kommt durch das Tor",3.6),rt.boss=!0):Sr("Welle "+Mt.n+(Mt.n===eu?" – die letzte":""),Mt.total+" Krampusse kommen den Schlossberg herauf",3.2),Ta(),ci(.5,.7,1.3,0)}function iw(n){if(Mt.state==="break"){Mt.breakT-=n;const e=Math.ceil(Mt.breakT);e!==Mt.lastTick&&e>0&&e<=5&&(Mt.lastTick=e,jw(),Mt.n>0?Sr("Welle "+Mt.n+" überstanden","Nächste Welle in "+e,1.2):Sr("Sie kommen","Erste Welle in "+e,1.2)),Mt.breakT<=0&&nw();return}const t=Le.reduce((e,i)=>e+(i.dying?0:1),0);if(Mt.queue.length){if(Mt.spawnT-=n,Mt.spawnT<=0&&t<Math.min(aS,JS+Mt.n*$S)){Mt.spawnT=Math.max(ZS,KS-Mt.n*jS);let e=null;for(let s=0;s<8&&!e;s++){const r=xr[Mt.spawnIdx[Math.random()*Mt.spawnIdx.length|0]];Math.hypot(r.x-It.pos.x,r.z-It.pos.z)>QS&&(e=r)}e||(e=xr.reduce((s,r)=>Math.hypot(r.x-It.pos.x,r.z-It.pos.z)>Math.hypot(s.x-It.pos.x,s.z-It.pos.z)?r:s));const i=Aa.set(e.x+(Math.random()-.5)*5,0,e.z+(Math.random()-.5)*5);fu(i,.9,!0),Mu(Mt.queue.pop(),i.x,i.z,Mt.mul)}}else if(t===0){const e=Lb(Mt.n,!Mt.hurt);if(Su(e),Mt.hurt||(G.perfectWaves=(G.perfectWaves||0)+1),Mt.n>=eu){aw();return}It.hp=Math.min(bs,It.hp+e3),bm(rS),Sr("Welle "+Mt.n+" überstanden","+"+e+" Punkte"+(Mt.hurt?"":" – ohne einen Treffer!"),1.6)}}const G={state:"loading",pausedAt:0,fps:0,time:0,score:0,kills:0,best:0,hitstop:0,shake:0,viewMode:"fp",hurtFlash:0,dmgDir:0,dmgDirT:0,playerName:"",perfectWaves:0,won:!1},Em="krampuslauf_marzoll_bestwert";function sw(){try{return parseInt(localStorage.getItem(Em)||"0",10)||0}catch{return 0}}function rw(n){try{localStorage.setItem(Em,String(n))}catch{}}function Ga(n){G.state=n,cn||(document.body.dataset.state=n)}function Ah(){if(!cn&&G.state==="menu"){const n=wt("playerName"),t=za(n.value);if(!t){wt("nameHint").textContent="Bitte zuerst einen Namen eingeben – unter ihm erscheint dein Punktestand in der Bestenliste.",n.focus();return}n.value=t,G.playerName=t,lE(t),n.blur()}Ea()}function wm(){return cn?Promise.resolve(Ce):(Ce.loading=!0,Io(wt("menuBoard"),G.playerName),Io(wt("overBoard"),G.playerName),uE().then(()=>(Io(wt("menuBoard"),G.playerName),Io(wt("overBoard"),G.playerName),Ce)))}function Ea(){Fm(),wa(!1),Uw();for(const n of $i.active)$i.free.push(n);$i.active.length=0,Pm(),Q.state="held",Q.mesh.visible=!1,Q.hit.clear(),G.score=0,G.kills=0,G.perfectWaves=0,G.won=!1,wb(),G.hitstop=0,G.shake=0,G.hurtFlash=0,G.dmgDirT=0,G.viewMode="fp",we.blend=0,we.dist=0,Mt.n=0,Mt.queue=[],rt.intensity=0,rt.boss=!1,Bw(),bw(),bm(sS),ht.cache={},ht.banner.classList.remove("show");for(const n in We)We[n]=!1;Ga("playing"),xu(),Rm(),ns(ct.mode?"Kam wechselt zur Schulterkamera":"V wechselt zur Schulterkamera",4)}function vr(){G.state==="playing"&&(G.pausedAt=performance.now(),Rm(),Ga("paused"),rt.ctx&&rt.ctx.state==="running"&&rt.ctx.suspend())}function Rh(){if(G.state==="paused"&&!(ct.mode&&Lm())){rt.ctx&&rt.ctx.resume();for(const n in We)We[n]=!1;Ga("playing"),xu()}}function aw(){G.score+=Pb(It.hp),G.won=!0,Tm()}function Tm(){const n=G.score>G.best;n&&(G.best=G.score,rw(G.best)),wt("oScore").textContent=String(G.score),wt("oWave").textContent=String(Math.max(1,Mt.n)),wt("oKills").textContent=String(G.kills),wt("oBest").textContent=String(G.best),wt("oCombo").textContent=Ke.best>1?Ke.best+" Kills":"–",wt("overTitle").textContent=G.won?"Der Schlossberg gehört dir":"Die Horde hat dich erwischt",wt("overSub").textContent=G.won?"Alle "+eu+" Wellen überstanden. Das hat kaum jemand geschafft.":"",wt("overRank").textContent=G.playerName&&G.score>0?"Wird in die Bestenliste eingetragen …":"";const t={name:G.playerName,score:G.score,wave:Math.max(1,Mt.n),kills:G.kills};cn||dE(t).then(()=>wm()).then(()=>{const e=am(Ce.entries,t.name),i=Ce.entries[e-1];!t.name||t.score<=0?wt("overRank").textContent="":e&&i&&i.score>t.score?wt("overRank").textContent="Platz "+e+" in der Bestenliste mit deinem besten Lauf ("+i.score+").":e&&(wt("overRank").textContent="Platz "+e+" von "+Ce.entries.length+" in der Bestenliste.")}),wt("newBest").style.display=n&&G.score>0?"block":"none",wt("menuBest").textContent=G.best>0?"Bestwert: "+G.best:"",we.orbit=It.yaw+Math.PI/2,It.model.root.visible=!0,It.model.body.rotation.x=-1.4,bh(It.pos.x,It.pos.y+1.2,It.pos.z,Br.schloss.palette,26,5),ci(.6,.55,1.6,0),Ta(),rt.intensity=0,rt.boss=!1,Ga("gameover"),!cn&&document.pointerLockElement&&document.exitPointerLock()}function _u(){let n=Vi;G.hitstop>0&&(G.hitstop-=Vi,n*=G0),G.time+=n,G.shake=Math.max(0,G.shake-Vi*2.4),Ab(n),rt.bellBudget=Math.min(4,rt.bellBudget+Vi*9),_w(n),nT(n),Fw(n),Sw(n,It),iw(n),iT(Vi)}const ko={acc:0};function ow(n){ko.acc+=n;let t=0;for(;ko.acc>=Vi&&G.state==="playing";){if(t>=TS){ko.acc=0;break}_u(),ko.acc-=Vi,t++}km(),Gw(n)}function cw(n,t){const e=Math.round(n/Vi);for(let i=0;i<e&&G.state==="playing";i++)_u(),t&&t(i)}function lw(){HE(),GE();for(const[n,t]of z0){const e=vm(n,t);xr.push(e<0?{x:n,z:t}:{x:Nr(e%de),z:Nr(e/de|0)})}rE(),It.model=au(Br.schloss,{detail:1}),oe.add(It.model.root),Q.mesh=Fa(1),Q.mesh.visible=!1,Q.mesh.scale.setScalar(1.15),oe.add(Q.mesh),sT(),Pm(),G.best=sw()}const We=Object.create(null);let Hl=!1;function xu(){if(!ct.mode)try{const n=mc.requestPointerLock();n&&n.catch&&n.catch(()=>{})}catch{}}function hw(){document.addEventListener("pointerlockchange",()=>{const n=document.pointerLockElement===mc;!n&&Hl&&G.state==="playing"&&vr(),Hl=n}),document.addEventListener("pointerlockerror",()=>{G.state==="playing"&&!ct.mode&&ns("Einmal ins Bild klicken, dann lenkt die Maus die Kamera",3)}),window.addEventListener("keydown",n=>{if(n.target&&n.target.tagName==="INPUT"){n.key==="Enter"&&(n.preventDefault(),Ah());return}(n.code==="Space"||n.code==="Tab"||n.code.startsWith("Arrow"))&&n.preventDefault(),!n.repeat&&(We[n.code]=!0,n.code==="KeyM"&&zm(),n.code==="KeyV"&&(G.state==="playing"||G.state==="paused")&&vu(),n.code==="KeyF"&&G.state==="playing"&&Um(It),n.code==="KeyG"&&G.state==="menu"&&wa(),Zt.on&&n.code==="Digit0"&&da(-1),Zt.on&&n.code==="ArrowRight"&&da(Zt.focus+1),Zt.on&&n.code==="ArrowLeft"&&da(Zt.focus-1),n.code==="Escape"&&G.state==="menu"&&wa(!1),n.code==="Escape"&&(G.state==="playing"?(vr(),document.pointerLockElement&&document.exitPointerLock()):G.state==="paused"&&performance.now()-G.pausedAt>500&&Rh()),(n.code==="Enter"||n.code==="NumpadEnter"||n.key==="Enter")&&(G.state==="playing"?yc():G.state==="menu"?Ah():G.state==="gameover"?Ea():G.state==="paused"&&Rh()),n.code==="KeyR"&&G.state==="gameover"&&Ea())}),window.addEventListener("keyup",n=>{We[n.code]=!1}),window.addEventListener("blur",()=>{for(const n in We)We[n]=!1;G.state==="playing"&&vr()}),document.addEventListener("mousemove",n=>{if(G.state!=="playing")return;const t=Vt(n.movementX||0,-260,260),e=Vt(n.movementY||0,-260,260);It.yaw-=t*Uf,It.pitch=Vt(It.pitch-e*Uf,-1.35,1.35)}),mc.addEventListener("mousedown",n=>{G.state==="playing"&&(Hl||xu(),n.button===0&&wu(),n.button===2&&yc())}),window.addEventListener("contextmenu",n=>n.preventDefault()),window.addEventListener("resize",uw)}function uw(){ct.mode&&yu(),ct.mode&&Lm()&&G.state==="playing"&&vr();const n=window.innerWidth,t=window.innerHeight;rn.setSize(n,t),ae.aspect=n/t,ae.updateProjectionMatrix(),Ih.aspect=n/t,Ih.updateProjectionMatrix()}function vu(){G.viewMode=G.viewMode==="fp"?"tp":"fp",ns(G.viewMode==="fp"?"Ego-Kamera":"Schulterkamera",1.4)}const ct={mode:!1,mx:0,my:0,sprint:!1,jump:!1,stickId:null,stickX:0,stickY:0,lookId:null,lookX:0,lookY:0,buttons:new Map,layer:null,base:null,knob:null,scale:1};function dw(){const n=new URLSearchParams(location.search).get("touch");if(n==="1")return!0;if(n==="0")return!1;const t=window.matchMedia&&matchMedia("(pointer: coarse)").matches,e=window.matchMedia&&matchMedia("(any-pointer: fine)").matches;return t||navigator.maxTouchPoints>0&&!e}function Ch(n){ct.mode!==n&&(ct.mode=n,document.body.dataset.touch=n?"1":"",n&&(yu(),document.pointerLockElement&&document.exitPointerLock()),Sm())}function yu(){const n=window.innerWidth,t=window.innerHeight,e=Vt(Math.min(n,t)/400,bS,ES);ct.scale=e;const i=xS*e,s=vS*e,r=yS*e,a=MS*e,o=SS*e;ct.safe||(ct.safe=document.createElement("div"),ct.safe.style.cssText="position:fixed;visibility:hidden;pointer-events:none;padding:0 env(safe-area-inset-right) env(safe-area-inset-bottom) 0",document.body.appendChild(ct.safe));const c=getComputedStyle(ct.safe),l=parseFloat(c.paddingRight)||0,h=parseFloat(c.paddingBottom)||0;ct.layer.style.setProperty("--stick-d",k0*2*e+"px");const u=n-l-o-i/2,d=t-h-o-i/2,f=i/2+s/2+a,m=(v,x,y,T)=>{const b=ct.layer.querySelector(`[data-btn="${v}"]`);b.style.width=b.style.height=T+"px",b.style.left=x-T/2+"px",b.style.top=y-T/2+"px"},_=v=>[u+Math.cos(v*Math.PI/180)*f,d-Math.sin(v*Math.PI/180)*f];m("hit",u,d,i),m("jump",..._(180),s),m("throw",..._(132),s),m("ram",..._(84),s);const g=n-l-o-r/2,p=d-f-s/2-a*2;m("cam",g,p-r/2,r),m("pause",g,p-r*1.5-a,r)}function yp(n,t){const e=k0*ct.scale;let i=n-ct.stickX,s=t-ct.stickY;const r=Math.hypot(i,s);r>e&&(i*=e/r,s*=e/r);let a=i/e,o=s/e;const c=Math.hypot(a,o);if(c<Nl)a=0,o=0;else{const l=(c-Nl)/(1-Nl)/c;a*=l,o*=l}ct.mx=a,ct.my=o,ct.sprint=Math.hypot(a,o)>=gS&&-o>=_S*Math.hypot(a,o),ct.layer&&(ct.knob.style.transform=`translate(${ct.stickX+i}px, ${ct.stickY+s}px)`,ct.layer.classList.toggle("sprint",ct.sprint))}function Am(){ct.stickId=null,ct.mx=0,ct.my=0,ct.sprint=!1,ct.layer&&ct.layer.classList.remove("stick","sprint")}function fw(n){n.classList.add("down");const t=n.dataset.btn;G.state==="playing"&&(Fm(),t==="hit"?wu():t==="throw"?yc():t==="jump"?ct.jump=!0:t==="cam"?vu():t==="pause"?vr():t==="ram"&&Um(It))}function pw(n){n.classList.remove("down"),n.dataset.btn==="jump"&&(ct.jump=!1)}function Rm(){Am(),ct.lookId=null,ct.jump=!1;for(const n of ct.buttons.values())n.classList.remove("down");ct.buttons.clear()}function Gl(n,t,e,i){ct.debug&&(ct.debugLog=ct.debugLog||[],ct.debugLog.unshift(`${n} ${t}${e!==void 0?" "+Math.round(e)+","+Math.round(i):""}`),ct.debugLog.length=Math.min(ct.debugLog.length,4),ct.debug.textContent=`Stick ${ct.stickId??"-"}  mx ${ct.mx.toFixed(2)}  my ${ct.my.toFixed(2)}  Sprint ${ct.sprint?"ja":"nein"}
Umsehen ${ct.lookId??"-"}  Knöpfe ${ct.buttons.size}  Zustand ${G.state}  Breite ${window.innerWidth}
`+ct.debugLog.join(`
`))}function mw(){ct.layer=wt("touch"),ct.base=wt("stickBase"),ct.knob=wt("stickKnob");const n=ct.layer,t=(a,o,c,l)=>{Gl("down",a,o,c);const h=l&&l.closest&&l.closest(".tbtn");if(h&&!h.classList.contains("reserved")){ct.buttons.set(a,h),fw(h);return}if(o<window.innerWidth*mS){if(ct.stickId!==null)return;ct.stickId=a,ct.stickX=o,ct.stickY=c,ct.base.style.transform=`translate(${o}px, ${c}px)`,n.classList.add("stick"),yp(o,c)}else ct.lookId===null&&(ct.lookId=a,ct.lookX=o,ct.lookY=c)},e=(a,o,c)=>{if(a===ct.stickId)yp(o,c);else if(a===ct.lookId&&G.state==="playing"){const l=Vt(o-ct.lookX,-120,120),h=Vt(c-ct.lookY,-120,120);ct.lookX=o,ct.lookY=c,It.yaw-=l*Of,It.pitch=Vt(It.pitch-h*Of,-1.35,1.35)}Gl("move",a,o,c)},i=a=>{a===ct.stickId&&Am(),a===ct.lookId&&(ct.lookId=null);const o=ct.buttons.get(a);o&&(ct.buttons.delete(a),pw(o)),Gl("up",a)},s={passive:!1};n.addEventListener("touchstart",a=>{a.preventDefault();for(const o of a.changedTouches)t("t"+o.identifier,o.clientX,o.clientY,o.target)},s),n.addEventListener("touchmove",a=>{a.preventDefault();for(const o of a.changedTouches)e("t"+o.identifier,o.clientX,o.clientY)},s);const r=a=>{a.preventDefault();for(const o of a.changedTouches)i("t"+o.identifier)};n.addEventListener("touchend",r,s),n.addEventListener("touchcancel",r,s),n.addEventListener("pointerdown",a=>{a.pointerType!=="touch"&&(a.preventDefault(),t(a.pointerId,a.clientX,a.clientY,a.target))}),window.addEventListener("pointermove",a=>{a.pointerType!=="touch"&&e(a.pointerId,a.clientX,a.clientY)}),window.addEventListener("pointerup",a=>{a.pointerType!=="touch"&&i(a.pointerId)}),window.addEventListener("pointercancel",a=>{a.pointerType!=="touch"&&i(a.pointerId)}),n.addEventListener("contextmenu",a=>a.preventDefault()),new URLSearchParams(location.search).get("debug")==="1"&&(ct.debug=document.createElement("pre"),ct.debug.style.cssText="position:fixed;left:50%;top:3.6rem;transform:translateX(-50%);margin:0;padding:.3rem .5rem;font:12px/1.3 monospace;color:#fff;background:rgba(0,0,0,.7);z-index:60;pointer-events:none;white-space:pre",document.body.appendChild(ct.debug)),window.addEventListener("touchstart",()=>{new URLSearchParams(location.search).get("touch")!=="0"&&Ch(!0)},{passive:!0}),wt("galleryLink").addEventListener("click",a=>{a.preventDefault(),G.state==="menu"&&wa(!0)}),document.addEventListener("pointerdown",a=>{!Zt.on||!ct.mode||a.target.closest("#galleryLink")||(Zt.focus<Zt.models.length?da(Zt.focus+1):wa(!1))}),wt("muteLink").addEventListener("click",a=>{a.preventDefault(),zm(),wt("muteLink").textContent=rt.muted?"Ton an":"Ton aus"});for(const a of document.querySelectorAll(".fsBtn"))a.addEventListener("click",gw);Vl(),document.addEventListener("fullscreenchange",Vl),document.addEventListener("webkitfullscreenchange",Vl),Ch(dw())}function Cm(){return!!(document.fullscreenElement||document.webkitFullscreenElement)}function gw(){const n=document.documentElement;if(Cm()){(document.exitFullscreen||document.webkitExitFullscreen).call(document);return}const t=n.requestFullscreen||n.webkitRequestFullscreen;if(!t){ns("Vollbild geht in diesem Browser nicht",3);return}const e=t.call(n,{navigationUI:"hide"}),i=()=>{try{const s=screen.orientation&&screen.orientation.lock&&screen.orientation.lock("landscape");s&&s.catch&&s.catch(()=>{})}catch{}};e&&e.then?e.then(i).catch(()=>{}):i()}function Vl(){const n=!!(document.fullscreenEnabled||document.webkitFullscreenEnabled);for(const t of document.querySelectorAll(".fsBtn"))t.hidden=!n,t.textContent=Cm()?"Vollbild aus":"Vollbild"}function Lm(){return window.innerHeight>window.innerWidth}const It={pos:new C,vel:new C,kb:new C,yaw:0,pitch:0,vy:0,onGround:!0,coyote:0,jumpHeld:!1,hp:bs,lastHurt:-99,iFrames:0,alive:!0,meleeCd:0,swingT:-1,swingHit:!1,phase:0,move:0,camY:0,stepIdx:0,model:null};function Pm(){const n=It;n.pos.set(gs.x,Xn(gs.x,gs.z),gs.z),n.vel.set(0,0,0),n.kb.set(0,0,0),n.yaw=gs.yaw,n.pitch=0,n.vy=0,n.onGround=!0,n.hp=bs,n.lastHurt=-99,n.iFrames=0,n.alive=!0,n.meleeCd=0,n.swingT=-1,n.camY=n.pos.y,n.model.root.visible=!0,n.model.body.rotation.set(0,0,0),n.model.root.position.copy(n.pos),n.model.root.rotation.y=n.yaw+Math.PI}function _w(n){const t=It;let e=(We.KeyD||We.ArrowRight?1:0)-(We.KeyA||We.ArrowLeft?1:0),i=(We.KeyS||We.ArrowDown?1:0)-(We.KeyW||We.ArrowUp?1:0);ct.mode&&(e+=ct.mx,i+=ct.my);const s=Math.hypot(e,i);s>1&&(e/=s,i/=s);const r=(We.ShiftLeft||We.ShiftRight||ct.sprint)&&i<0,a=r?O0:ca,o=Math.sin(t.yaw),c=Math.cos(t.yaw),l=(e*c+i*o)*a,h=(-e*o+i*c)*a,u=t.onGround?12:3.5,d=Hw(n,t,r&&Math.hypot(t.vel.x,t.vel.z)>ca*.9);d?(t.vel.x=d.x,t.vel.z=d.z,t.iFrames=Math.max(t.iFrames,.12)):(t.vel.x=ri(t.vel.x,l,u,n),t.vel.z=ri(t.vel.z,h,u,n));const f=We.Space||ct.jump;f&&!t.jumpHeld&&(t.onGround||t.coyote>0)&&(t.vy=qM,t.onGround=!1,t.coyote=0,t.jumpHeld=!0,Rp(.14)),f||(t.jumpHeld=!1),t.kb.multiplyScalar(Math.exp(-6*n));const m=t.pos.x+(t.vel.x+t.kb.x)*n;mp(m,t.pos.z,t.pos.y,Yo,Il)?(t.vel.x=0,t.kb.x=0):t.pos.x=m;const _=t.pos.z+(t.vel.z+t.kb.z)*n;mp(t.pos.x,_,t.pos.y,Yo,Il)?(t.vel.z=0,t.kb.z=0):t.pos.z=_,fu(t.pos,Yo,!1);const g=mm(t.pos.x,t.pos.z,t.pos.y,Il);t.onGround&&t.vy<=0&&t.pos.y-g<.65?t.pos.y=g:(t.vy-=Ic*n,t.pos.y+=t.vy*n,t.pos.y<=g?(t.vy<-6&&(Yw(),Nn(t.pos.x,g,t.pos.z,8),G.shake=Math.min(1,G.shake+.18)),t.pos.y=g,t.vy=0,t.onGround=!0):t.onGround=!1),t.coyote=t.onGround?.1:t.coyote-n;const p=Math.hypot(t.vel.x,t.vel.z);if(t.move=ri(t.move,t.onGround?Vt(p/ca,0,1.4):.3,10,n),t.onGround&&p>.6){t.phase+=p*n*1.75;const x=Math.floor(t.phase/Math.PI);x!==t.stepIdx&&(t.stepIdx=x,Rp(.07+p*.012),rt.bellBudget=Math.max(rt.bellBudget,1.2),j0(.1+p*.022,x%2?.15:-.15),p>6&&Nn(t.pos.x,t.pos.y,t.pos.z,2,1.2))}t.meleeCd-=n,t.iFrames-=n,t.swingT>=0&&(t.swingT+=n,!t.swingHit&&t.swingT>=wS&&(t.swingHit=!0,tT()),t.swingT>=uh&&(t.swingT=-1)),G.time-t.lastHurt>YM&&t.hp<bs&&(t.hp=Math.min(bs,t.hp+KM*n));const v=t.model;v.root.position.copy(t.pos),v.root.rotation.y=t.yaw+Math.PI,ou(v,t.phase,t.move,t.swingT>=0?t.swingT/uh:-1,r?.2:.06),v.head.rotation.x=-t.pitch*.6}function yr(n,t,e,i=4){const s=It;if(!s.alive||s.iFrames>0||G.state!=="playing")return;s.hp-=n,s.lastHurt=G.time,s.iFrames=AS,Tb(),Mt.hurt=!0,G.shake=Math.min(1,G.shake+.35+n*.012),G.hurtFlash=1;const r=s.pos.x-t,a=s.pos.z-e,o=Math.hypot(r,a)||1;s.kb.x+=r/o*i,s.kb.z+=a/o*i;const c=-Math.sin(s.yaw),l=-Math.cos(s.yaw),h=Math.cos(s.yaw),u=-Math.sin(s.yaw);G.dmgDir=Math.atan2(-(r*h+a*u),-(r*c+a*l)),G.dmgDirT=.8,bu(0),ci(.35,1.5,.28,0),s.hp<=0&&(s.hp=0,s.alive=!1,Tm())}const Mr=[],Ur={damage:1,level:1};let Ho=null,Mp=null;function xw(n){n.boss=!0,n.maxHp=mh,n.hp=mh,n.radius=H3,n.speed=k3,n.phaseNo=1,n.atk="idle",n.atkT=0,n.cd=2.5,n.charges=0,n.summonCd=0,n.lastAttack="",n.helpers=new Set,rt.boss=!0}function Im(n){const t=n.hp/n.maxHp;return t<=W3?3:t<=V3?2:1}const Pn=(n,t)=>{n.atk=t,n.atkT=0},nr=(n,t,e)=>ci(n,t,e,0);function vw(n,t,e,i){const s={wantX:0,wantZ:0,faceX:i.ndx,faceZ:i.ndz,accel:6,lean:.1,swing:-1};n.atkT+=t,n.cd-=t,n.summonCd-=t;const r=Im(n);r!==n.phaseNo&&(n.phaseNo=r,nr(.9,.5,1.6),G.shake=Math.min(1,G.shake+.4),ns(r===2?"Der Oberteufel tobt: Rammstöße!":"Der Oberteufel ruft seine Horde!",2.5),n.atk==="idle"&&(n.cd=Math.min(n.cd,.8)));const a=o=>{s.lean=-.25*o,s.swing=.3*o,n.model.eyes.scale.setScalar(1+o*1.2)};switch(n.atk){case"idle":{if(i.chase(n.speed),s.wantX=i.wantX,s.wantZ=i.wantZ,i.dist<3.2&&n.cd<=.5&&n.lastAttack!=="swipe"){Pn(n,"swipeTell"),nr(.5,.9,.5);break}if(n.cd>0)break;r===2?(n.charges=0,Pn(n,"chargeTell"),nr(.85,.6,1)):r===3&&n.summonCd<=0&&i.aliveHelpers<$f?(Pn(n,"summonTell"),nr(1,.45,1.4)):(Pn(n,"stompTell"),nr(.8,.55,1));break}case"stompTell":a(Math.min(1,n.atkT/Js)),n.atkT>=Js&&(Mw(n.pos.x,n.pos.z),G.shake=Math.min(1,G.shake+.6),Nn(n.pos.x,n.pos.y,n.pos.z,30,6),rt.bellBudget=4,Es(.6,0,130),Es(.5,0,98),Tn({f:55,f2:30,dur:.6,gain:.7}),n.model.eyes.scale.setScalar(1),n.lastAttack="stomp",Pn(n,"idle"),n.cd=X3);break;case"chargeTell":{const o=Math.min(1,n.atkT/(n.charges?Js*.6:Js));s.lean=-.15+o*.55,n.model.eyes.scale.setScalar(1+o),Math.random()<t*8&&Nn(n.pos.x,n.pos.y,n.pos.z,2,2),o>=1&&(n.cdx=i.ndx,n.cdz=i.ndz,n.chargeHit=!1,Pn(n,"charge"),nn({type:"lowpass",f:500,f2:120,dur:.6,gain:.5}));break}case"charge":{const o=Math.atan2(n.cdx,n.cdz),c=Vt(dc(o,Math.atan2(i.ndx,i.ndz)),-.5*t,.5*t);n.cdx=Math.sin(o+c),n.cdz=Math.cos(o+c),s.wantX=n.cdx*Jf,s.wantZ=n.cdz*Jf,s.accel=16,s.lean=.5,s.faceX=n.cdx,s.faceZ=n.cdz,Math.random()<t*30&&Nn(n.pos.x,n.pos.y,n.pos.z,2,3),!n.chargeHit&&i.dist<n.radius+.9&&Math.abs(e.pos.y-n.pos.y)<2&&(n.chargeHit=!0,yr(J3*Ur.damage,n.pos.x-n.cdx,n.pos.z-n.cdz,16)),(n.atkT>=Z3||n.wallHit)&&(n.wallHit=!1,yw(n));break}case"chargePause":s.lean=.25,n.atkT>=$3&&(Pn(n,"chargeTell"),nr(.6,.7,.6));break;case"summonTell":if(a(Math.min(1,n.atkT/Js)),n.atkT>=Js){const o=Math.min(tb,$f-i.aliveHelpers);for(let c=0;c<o;c++){const l=c/Math.max(1,o)*Math.PI*2+Math.random()*.5;i.spawnHelper(n.pos.x+Math.sin(l)*3.2,n.pos.z+Math.cos(l)*3.2,c)}Ta(),xc(n.pos.x,n.pos.y+2.5,n.pos.z,20,16732192),n.model.eyes.scale.setScalar(1),n.lastAttack="summon",n.summonCd=eb,Pn(n,"idle"),n.cd=2}break;case"swipeTell":s.swing=Math.min(.3,n.atkT/.55*.3),n.atkT>=.55&&(i.dist<3.4&&Math.abs(e.pos.y-n.pos.y)<2&&yr(G3*Ur.damage,n.pos.x,n.pos.z,9),nn({f:300,f2:1400,q:1.2,dur:.25,gain:.4}),n.lastAttack="swipe",Pn(n,"swipeRecover"));break;case"swipeRecover":s.swing=Math.min(1,.3+n.atkT/.5),n.atkT>=.5&&(Pn(n,"idle"),n.cd=Math.max(n.cd,1.2));break;default:Pn(n,"idle")}return s}function yw(n){n.charges++,n.charges<j3?Pn(n,"chargePause"):(n.lastAttack="charge",Pn(n,"idle"),n.cd=Q3,n.model.eyes.scale.setScalar(1))}function Mw(n,t){const e=Xn(n,t);let i=null;Ho||(Ho=new Kh(.85,1,48),Ho.rotateX(-Math.PI/2),Mp=new Di({color:16728096,transparent:!0,opacity:.8,depthWrite:!1,side:Sn})),i=new Me(Ho,Mp.clone()),i.position.set(n,e+.08,t),oe.add(i),Mr.push({x:n,z:t,y:e,r:.5,hit:!1,mesh:i})}function Sw(n,t){for(let e=Mr.length-1;e>=0;e--){const i=Mr[e];i.r+=q3*n;const s=Math.hypot(t.pos.x-i.x,t.pos.z-i.z),r=t.onGround&&t.pos.y-Xn(t.pos.x,t.pos.z)<.35;!i.hit&&r&&Math.abs(s-i.r)<Y3/2&&(i.hit=!0,yr(K3*Ur.damage,i.x,i.z,8)),i.mesh.scale.setScalar(i.r),i.mesh.material.opacity=.8*(1-i.r/Zf),i.r>=Zf&&(oe.remove(i.mesh),i.mesh.material.dispose(),Mr.splice(e,1))}}function bw(){for(const n of Mr)oe.remove(n.mesh),n.mesh.material.dispose();Mr.length=0}function Ew(n){rt.boss=!1;const t=ib*Ur.level;Su(t),Sr("Oberteufel besiegt","+"+t+" Punkte – die Horde weicht zurück",4.5),Ta(),setTimeout(()=>Ta(),900),G.shake=Math.min(1,G.shake+.5),G.bossDefeats=(G.bossDefeats||0)+1}const Sp=Math.PI*2,ww={};function Dm(n){const t=Vt((n-1)/(T3-1),0,1),e=([i,s])=>jt(i,s,t);return{tokens:C3[L3.filter(i=>n>=i).length],roleStrength:e(P3),dodgeChance:e(I3),retreatChance:e(U3),...ww}}const Mn={level:Dm(1),slotT:0,tokens:new Set};function Tw(n,t,e,i,s){Mn.level=Dm(i);for(const r of Mn.tokens)t.some(a=>a.id===r&&!a.dying)||Mn.tokens.delete(r);Mn.slotT-=n,Mn.slotT<=0&&(Mn.slotT=R3,Aw(t,e,s))}function Aw(n,t,e){const i=n.filter(d=>!d.dying&&!d.boss&&Math.hypot(d.pos.x-t.pos.x,d.pos.z-t.pos.z)<A3);for(const d of n)i.includes(d)||(d.slot=null);const s=i.length;if(!s)return;const r=d=>Math.atan2(d.pos.x-t.pos.x,d.pos.z-t.pos.z),a=r(i[0]),o=Array.from({length:s},(d,f)=>a+f*Sp/s),c=Mn.level.roleStrength,l=(d,f)=>{let m=Math.abs((r(d)-f+Math.PI*3)%Sp-Math.PI);const _=Math.cos(f-e);return d.type==="runner"&&(m+=c*(1-_)*.9),d.type==="jumper"&&(m+=c*(1+_)*.9),m},h=new Set(i),u=new Set(o.keys());for(;h.size;){let d=null,f=1/0;for(const m of h)for(const _ of u){const g=l(m,o[_]);g<f&&(f=g,d=[m,_])}d[0].slot=o[d[1]],h.delete(d[0]),u.delete(d[1])}}function Rw(n){return n.boss||Mn.tokens.has(n.id)?!0:Mn.tokens.size>=Mn.level.tokens?!1:(Mn.tokens.add(n.id),!0)}function zc(n){Mn.tokens.delete(n.id)}const jo=n=>n.boss||Mn.tokens.has(n.id);function bp(n,t,e){const i=n.pos.x,s=n.pos.z,r=e.pos.x,a=e.pos.z,o=r-i,c=a-s,l=o*o+c*c||1;for(const h of t){if(h===n||h.dying)continue;const u=Vt(((h.pos.x-i)*o+(h.pos.z-s)*c)/l,0,1);if(!(u<=0||u>=1)&&Math.hypot(h.pos.x-i-o*u,h.pos.z-s-c*u)<z3)return!1}return!0}function Cw(n,t){var l;if(t.state!=="fly"||n.dodgeCd>0||n.boss||(l=t.dodgeChecked)!=null&&l.has(n.id))return 0;const e=n.pos.x-t.pos.x,i=n.pos.z-t.pos.z,s=t.vel.x,r=t.vel.z,a=s*s+r*r;if(a<1)return 0;const o=(e*s+i*r)/a;return o<0||o>.6||Math.hypot(e-s*o,i-r*o)>n.radius+.9||(t.dodgeChecked=t.dodgeChecked||new Set,t.dodgeChecked.add(n.id),Math.random()>=Mn.level.dodgeChance)?0:(n.dodgeCd=N3,s*i-r*e>=0?1:-1)}function Lw(n){return n.boss||n.retreated||n.dying||n.hp>n.maxHp*O3?!1:(n.retreated=!0,Math.random()<Mn.level.retreatChance)}function Pw(n,t,e){const i=m=>Ha(m,t.pos.x,t.pos.z),s=oi.find(m=>m.ai==="walk"&&!m.axis&&t.pos.x>=m.x0&&t.pos.x<=m.x1&&t.pos.z>=m.z0&&t.pos.z<=m.z1&&Math.abs(t.pos.y-i(m))<.4);if(!s)return null;const r=oi.find(m=>m.axis&&m.ai==="walk"&&Math.max(m.hA,m.hB)>=s.hA-.05&&m.x0<=s.x1+.01&&m.x1>=s.x0-.01&&m.z0<=s.z1+.01&&m.z1>=s.z0-.01);if(!r)return null;if(n.pos.x>=r.x0&&n.pos.x<=r.x1&&n.pos.z>=r.z0&&n.pos.z<=r.z1)return{x:t.pos.x,z:t.pos.z,onRamp:!0};if(s.hA-n.pos.y<=e)return null;const a=r.hA<r.hB?0:1,o=(r.x0+r.x1)/2,c=(r.z0+r.z1)/2,l=r.axis==="x"?{x:a===0?r.x0-.8:r.x1+.8,z:c}:{x:o,z:a===0?r.z0-.8:r.z1+.8},h=n.radius+.7,u={x0:s.x0-h,x1:s.x1+h,z0:s.z0-h,z1:s.z1+h};if(!Ep(n.pos.x,n.pos.z,l.x,l.z,s.x0-n.radius,s.x1+n.radius,s.z0-n.radius,s.z1+n.radius))return{...l,onRamp:!1};let d=null,f=1/0;for(const[m,_]of[[u.x0,u.z0],[u.x1,u.z0],[u.x1,u.z1],[u.x0,u.z1]]){if(Math.hypot(m-n.pos.x,_-n.pos.z)<1||Ep(n.pos.x,n.pos.z,m,_,s.x0,s.x1,s.z0,s.z1))continue;const g=Math.hypot(m-n.pos.x,_-n.pos.z)+Math.hypot(l.x-m,l.z-_);g<f&&(f=g,d={x:m,z:_,onRamp:!1,corner:!0})}return d||{...l,onRamp:!1}}function Ep(n,t,e,i,s,r,a,o){let c=0,l=1;const h=e-n,u=i-t;for(const[d,f]of[[-h,n-s],[h,r-n],[-u,t-a],[u,o-t]]){if(Math.abs(d)<1e-9){if(f<0)return!1;continue}const m=f/d;if(d<0){if(m>l)return!1;m>c&&(c=m)}else{if(m<c)return!1;m<l&&(l=m)}}return c<l}const Le=[],Lh={};let Iw=1,Wl=0;const ir={x:0,z:0};function Dw(n){const t=Vt((n-1)/(nS-1),0,1);return tS.map((e,i)=>e+(eS[i]-e)*t)}function Nw(n,t=Math.random()){let e=0;for(let i=0;i<n.length;i++)if(e+=n[i],t<e)return i+1;return n.length}function Mu(n,t,e,i){const s=gr[n],r=i.design&&s.designs.includes(i.design)?i.design:s.designs[Math.random()*s.designs.length|0],o=(Lh[r]||(Lh[r]=[])).pop()||au(Br[r],{detail:n==="boss"?1:0}),c=n==="boss"?1:i.tough||(i.toughChances?Nw(i.toughChances):1),l=c+(s.extraHits||0),h=o.kit.d.scale*(1+iS*(c-1));o.root.visible=!0,o.root.rotation.set(0,0,0),o.root.scale.setScalar(h),o.body.rotation.set(0,0,0),o.body.position.set(0,0,0),o.eyes.scale.setScalar(1),oe.add(o.root);const u={id:Iw++,type:n,def:s,model:o,scale:h,radius:s.radius,pos:new C(t,Xn(t,e),e),vel:new C,yaw:Math.atan2(It.pos.x-t,It.pos.z-e),hp:If*l,maxHp:If*l,hits:l,design:r,speed:s.speed*i.speed*(.93+Math.random()*.14),dmg:i.damage,state:"chase",stateT:0,attackCd:.3,specialCd:1+Math.random()*2,stagger:0,punch:0,los:!1,losT:Math.random()*.2,side:Math.random()<.5?-1:1,phase:Math.random()*6,stepIdx:0,vy:0,air:!1,dying:!1,deathT:0,fallX:0,fallZ:1,swing:-1,lean:.1,cdx:0,cdz:0,seed:Math.random()*10,growlT:2+Math.random()*7,slot:null,tokenT:0,dodgeCd:0,dodgeX:0,dodgeZ:0,retreated:!1,boss:!1,wallHit:!1};if(n==="boss"){xw(u);const d=Math.max(0,Math.floor(Mt.n/uc)-1);u.maxHp=u.hp=mh+d*sb,Ur.damage=1+d*rb,Ur.level=d+1}return Le.push(u),u}function Nm(n){zc(n),oe.remove(n.model.root),Lh[n.design].push(n.model)}function Uw(){for(const n of Le)Nm(n);Le.length=0}function Ow(n){n.hp<=0&&(zc(n),n.boss&&Ew())}function Fn(n,t,e=0){(t==="chase"||t==="retreat"||t==="dodge")&&jo(n)&&!n.boss&&zc(n),n.state=t,n.stateT=e}function Fw(n){const t=It;Wl-=n,Wl<=0&&(Wl=LS,VE(t.pos.x,t.pos.z)),Tw(n,Le,t,Mt.n,Math.atan2(-Math.sin(t.yaw),-Math.cos(t.yaw)));const e=Le.filter(i=>i.helperOf&&!i.dying).length;for(let i=0;i<Le.length;i++){const s=Le[i],r=s.def,a=s.model;if(s.dying){s.deathT+=n;const P=Math.min(1,s.deathT/.5);a.body.rotation.x=-es(P)*1.45,a.root.position.y=s.pos.y-Math.max(0,s.deathT-.55)*1.6,a.root.scale.setScalar(s.scale*(1-Nc(.6,1,s.deathT)*.5)),a.eyes.scale.setScalar(Math.max(.01,1-P)),s.pos.x+=s.fallX*3*n*(1-P),s.pos.z+=s.fallZ*3*n*(1-P),a.root.position.x=s.pos.x,a.root.position.z=s.pos.z;continue}const o=t.pos.x-s.pos.x,c=t.pos.z-s.pos.z,l=Math.hypot(o,c)||.001,h=t.pos.y-s.pos.y,u=o/l,d=c/l;s.attackCd-=n,s.specialCd-=n,s.stagger-=n,s.stateT+=n,s.punch=Math.max(0,s.punch-n*5),s.dodgeCd-=n,s.losT-=n,s.losT<=0&&(s.losT=.18+Math.random()*.08,s.los=l<PS&&_p(s.pos.x,s.pos.z,t.pos.x,t.pos.z));let f=0,m=0,_=0,g=0,p=8,v=.1;s.swing=-1;const x=(P,U,F)=>{const H=P-s.pos.x,B=U-s.pos.z,q=Math.hypot(H,B)||1;q<.3||(_p(s.pos.x,s.pos.z,P,U)||!xp(s.pos.x,s.pos.z,ir)?(f=H/q*F,m=B/q*F):(f=ir.x*F,m=ir.z*F))},y=P=>{s.los&&l<IS||l<2.2||!xp(s.pos.x,s.pos.z,ir)?(f=u*P,m=d*P):(f=ir.x*P,m=ir.z*P)},T=l<r.reach-.35+s.radius*.4&&Math.abs(h)<1.9;if(s.boss){const P={dist:l,ndx:u,ndz:d,aliveHelpers:e,wantX:0,wantZ:0,chase(F){y(F),P.wantX=f,P.wantZ=m},spawnHelper(F,H,B){const q=Mu(B%3===2?"jumper":"runner",F,H,Mt.mul);q.helperOf=s.id,q.attackCd=1.2,Nn(F,q.pos.y,H,10,3)}},U=vw(s,n,t,P);({wantX:f,wantZ:m,faceX:_,faceZ:g,accel:p,lean:v}=U),s.swing=U.swing}else{if(s.state==="chase"||s.state==="hold"){const U=Cw(s,Q);if(U){const F=Math.hypot(Q.vel.x,Q.vel.z)||1;s.dodgeX=-Q.vel.z/F*U,s.dodgeZ=Q.vel.x/F*U,Fn(s,"dodge")}else Lw(s)&&(Fn(s,"retreat"),wi(s.pos.x,s.pos.z,me),ci(.25*me.vol,1.4,.35,me.pan))}if(jo(s)?s.tokenT+=n:s.tokenT=0,jo(s)&&(s.state==="chase"||s.state==="hold")&&(s.tokenT>5||l>16)&&zc(s),s.state==="chase"||s.state==="hold"){const U=Pw(s,t,ph);if(U)x(U.x,U.z,s.speed),v=.2;else if(s.slot==null||!s.los){if(y(s.speed),s.type==="runner"&&l>4){const F=Math.sin(G.time*3+s.seed)*.28;f+=-d*F*s.speed,m+=u*F*s.speed}s.state="chase"}else{const F=s.attackCd<=0||s.type!=="runner"&&s.specialCd<=0;if(jo(s)||F&&Rw(s)){if(s.type==="runner")s.state="chase",y(s.speed),v=.28,T&&s.attackCd<=0&&Fn(s,"windup");else if(s.type==="jumper"){s.state="chase";const B=t.pos.x+Math.sin(s.slot)*Ro*1.4,q=t.pos.z+Math.cos(s.slot)*Ro*1.4,j=Math.hypot(B-s.pos.x,q-s.pos.z)<2.2;j?y(s.speed*.5):x(B,q,s.speed*1.1),v=.14,T&&s.attackCd<=0?Fn(s,"windup"):s.specialCd<=0&&s.los&&l>3.4&&l<r.leapRange&&!s.air&&(j||l<6)&&zw(s,t,l,h)}else if(s.type==="rammer")if(s.state="chase",T&&s.attackCd<=0)Fn(s,"windup");else if(s.specialCd<=0&&s.los)if(l<Co)Fn(s,"runup");else if(bp(s,Le,t))Tp(s);else{const B=t.pos.x+Math.sin(s.slot)*Co,q=t.pos.z+Math.cos(s.slot)*Co;x(B,q,s.speed)}else y(s.speed*.8)}else{const B=t.pos.x+Math.sin(s.slot)*Ro,q=t.pos.z+Math.cos(s.slot)*Ro;x(B,q,s.speed*.75),_=u,g=d,v=.08,s.state="hold"}}}else if(s.state==="dodge")f=s.dodgeX*jf,m=s.dodgeZ*jf,p=20,_=u,g=d,v=-.1,s.stateT>=D3&&Fn(s,"chase");else if(s.state==="retreat")f=-u*s.speed*1.1,m=-d*s.speed*1.1,v=.2,s.stateT>=F3&&Fn(s,"chase");else if(s.state==="runup"){s.stateT<.05&&(s.runAng=0),s.stateT>.4&&Math.hypot(s.vel.x,s.vel.z)<s.speed*.35&&(s.runAng+=1.1*(s.side||1),s.stateT=.06);const U=Math.cos(s.runAng||0),F=Math.sin(s.runAng||0),H=-u*U+d*F,B=-d*U-u*F;f=H*s.speed*1.2,m=B*s.speed*1.2,_=u,g=d,v=-.05,l>=Co&&bp(s,Le,t)?Tp(s):s.stateT>3&&Fn(s,"chase")}else if(s.state==="windup")_=u,g=d,s.swing=Math.min(dr,s.stateT/r.windup*dr),s.stateT>=r.windup&&(l<r.reach+s.radius*.4&&Math.abs(h)<2&&yr(r.damage*s.dmg,s.pos.x,s.pos.z,s.type==="rammer"?7:3.5),wi(s.pos.x,s.pos.z,me),nn({f:400,f2:1800,q:1.2,dur:.16,gain:.25*me.vol,pan:me.pan}),s.state="recover",s.stateT=0);else if(s.state==="recover")_=u,g=d,s.swing=Math.min(1,dr+s.stateT/Ff*(1-dr)),s.stateT>=Ff&&(Fn(s,"chase"),s.attackCd=DS+Math.random()*NS);else if(s.state==="chargeWindup")_=u,g=d,v=-.12+s.stateT/r.chargeWindup*.5,a.eyes.scale.setScalar(1+s.stateT/r.chargeWindup*.9),s.stateT>=r.chargeWindup&&(s.state="charge",s.stateT=0,s.cdx=u,s.cdz=d);else if(s.state==="charge"){const U=Math.atan2(s.cdx,s.cdz),F=Vt(dc(U,Math.atan2(u,d)),-.9*n,.9*n);s.cdx=Math.sin(U+F),s.cdz=Math.cos(U+F),f=s.cdx*r.chargeSpeed,m=s.cdz*r.chargeSpeed,p=14,v=.5,_=s.cdx,g=s.cdz,Math.random()<n*30&&Nn(s.pos.x,s.pos.y,s.pos.z,1,2),l<s.radius+.85&&Math.abs(h)<1.9?(yr(r.chargeDamage*s.dmg,s.pos.x-s.cdx,s.pos.z-s.cdz,14),s.state="stun",s.stateT=0,s.specialCd=r.chargeCooldown):s.stateT>=r.chargeTime&&(s.state="stun",s.stateT=.4,s.specialCd=r.chargeCooldown)}else s.state==="stun"?(v=.25,a.eyes.scale.setScalar(.7),s.stateT>=zf&&(Fn(s,"chase"),a.eyes.scale.setScalar(s.hp<s.maxHp?.6:1))):s.state==="leap"?(v=.35,s.swing=.25,_=s.vel.x,g=s.vel.z):s.state==="thrown"?(v=-.6,_=-s.vel.x,g=-s.vel.z):s.state==="land"&&(_=u,g=d,s.swing=Math.min(1,.3+s.stateT/.35*.7),s.stateT>=US&&Fn(s,"chase"))}if(!(s.state==="leap"||s.state==="thrown")){s.stagger>0&&!s.boss&&(f=0,m=0),s.vel.x=ri(s.vel.x,f,p,n),s.vel.z=ri(s.vel.z,m,p,n);for(let U=i+1;U<Le.length;U++){const F=Le[U];if(F.dying||F.air)continue;const H=F.pos.x-s.pos.x,B=F.pos.z-s.pos.z,q=s.radius+F.radius,j=H*H+B*B;if(j>=q*q||j<1e-6)continue;const ut=Math.sqrt(j),X=(q-ut)*.5/ut,$=s.boss?.15:F.boss?1.85:1,gt=2-$;s.pos.x-=H*X*$,s.pos.z-=B*X*$,F.pos.x+=H*X*gt,F.pos.z+=B*X*gt}const P=s.radius+Yo-.08;l<P&&Math.abs(h)<1.7&&s.state!=="charge"&&s.atk!=="charge"&&(s.pos.x-=u*(P-l),s.pos.z-=d*(P-l))}const E=s.vel.x*n,D=s.vel.z*n,M=s.pos.x,w=s.pos.z,O=s.radius*.6;if((s.air||!wp(s.pos.x,s.pos.z,s.pos.x+E,s.pos.z,s.pos.y,O))&&(s.pos.x+=E),(s.air||!wp(s.pos.x,s.pos.z,s.pos.x,s.pos.z+D,s.pos.y,O))&&(s.pos.z+=D),fu(s.pos,s.radius,!0),s.state==="charge"||s.atk==="charge"){const P=Math.hypot(E,D),U=Math.hypot(s.pos.x-M,s.pos.z-w);s.stateT>.15&&(s.atkT??1)>.15&&P>.02&&U<P*.35&&(s.boss?s.wallHit=!0:(s.state="stun",s.stateT=0,s.specialCd=s.def.chargeCooldown,s.vel.set(0,0,0)),Nn(s.pos.x,s.pos.y+1,s.pos.z,12,4),G.shake=Math.min(1,G.shake+.2/(1+l*.1)),wi(s.pos.x,s.pos.z,me),Tn({f:85,f2:38,dur:.3,gain:.5*me.vol,pan:me.pan}))}const tt=mm(s.pos.x,s.pos.z,s.pos.y,ph,!0);s.air?(s.vy-=Ic*n,s.pos.y+=s.vy*n,s.vy<0&&s.pos.y<=tt&&(s.pos.y=tt,s.air=!1,s.vy=0,s.vel.multiplyScalar(.2),Nn(s.pos.x,tt,s.pos.z,12,3.5),wi(s.pos.x,s.pos.z,me),nn({type:"lowpass",f:600,f2:150,dur:.16,gain:.35*me.vol,pan:me.pan}),s.state==="leap"?(s.state="land",s.stateT=0,s.specialCd=r.leapCooldown+Math.random(),Math.hypot(t.pos.x-s.pos.x,t.pos.z-s.pos.z)<2.1&&Math.abs(t.pos.y-s.pos.y)<1.6&&yr(r.leapDamage*s.dmg,s.pos.x,s.pos.z,6)):(s.state="stun",s.stateT=zf*.45))):s.pos.y=tt>s.pos.y?tt:ri(s.pos.y,tt,14,n);const L=Math.hypot(s.vel.x,s.vel.z);if(!_&&!g&&(L>.4?(_=s.vel.x,g=s.vel.z):(_=u,g=d)),s.yaw+=dc(s.yaw,Math.atan2(_,g))*Math.min(1,11*n),s.lean=ri(s.lean,v,8,n),!s.air&&L>.5){s.phase+=L*n*1.9/s.scale;const P=Math.floor(s.phase/Math.PI);P!==s.stepIdx&&(s.stepIdx=P,l<30&&(wi(s.pos.x,s.pos.z,me),j0(.22*me.vol,me.pan,s.type==="rammer"?.85:s.boss?.7:1,s.type==="rammer"?185:s.boss?120:0)))}s.growlT-=n,s.growlT<=0&&(s.growlT=5+Math.random()*8,l<28&&(wi(s.pos.x,s.pos.z,me),ci(.3*me.vol,(s.boss?.5:.85)+Math.random()*.5,.5+Math.random()*.4,me.pan))),a.root.position.copy(s.pos),a.root.rotation.y=s.yaw,a.root.scale.setScalar(s.scale*(1+s.punch*.1)),ou(a,s.phase,Vt(L/(4.5*(s.boss?.8:1)),0,1.3),s.swing,s.lean)}for(let i=Le.length-1;i>=0;i--){const s=Le[i];s.dying&&s.deathT>(s.boss?2.5:1)&&(Nm(s),Le.splice(i,1))}}function wp(n,t,e,i,s,r){for(const a of oi){const o=(l,h)=>{const u=Vt(l,a.x0,a.x1),d=Vt(h,a.z0,a.z1);return{d:Math.hypot(l-u,h-d),cx:u,cz:d}},c=o(e,i);if(!(c.d>=r||Ha(a,c.cx,c.cz)<=s+ph)&&c.d<o(n,t).d-1e-6)return!0}return!1}function zw(n,t,e,i){const s=Vt(e/10.5,.5,.92),r=t.pos.x+t.vel.x*s*.6,a=t.pos.z+t.vel.z*s*.6;n.vel.x=(r-n.pos.x)/s,n.vel.z=(a-n.pos.z)/s,n.vy=.5*Ic*s+Vt(i,-2,2)/s,n.air=!0,n.state="leap",n.stateT=0,wi(n.pos.x,n.pos.z,me),ci(.4*me.vol+.08,1.35,.4,me.pan),Nn(n.pos.x,n.pos.y,n.pos.z,8,2.5)}function Tp(n){n.state="chargeWindup",n.stateT=0,wi(n.pos.x,n.pos.z,me),ci(.75*me.vol+.15,.62,.85,me.pan)}const Ht={state:"ready",charge:0,t:0,cooldown:0,dirX:0,dirZ:-1,hit:new Set};function Bw(){Ht.state="ready",Ht.charge=0,Ht.t=0,Ht.cooldown=0,Ht.hit.clear()}const kw=()=>Ht.state==="ready"&&Ht.charge>=1;function Um(n){return!n.alive||!kw()?!1:(Ht.state="active",Ht.t=0,Ht.charge=0,Ht.hit.clear(),Ht.dirX=-Math.sin(n.yaw),Ht.dirZ=-Math.cos(n.yaw),G.shake=Math.min(1,G.shake+S3),rt.bellBudget=Math.max(rt.bellBudget,4),Es(.45,-.2,220),Es(.45,.2,262),ci(.45,1.1,.6,0),nn({type:"lowpass",f:900,f2:200,dur:.5,gain:.35}),!0)}function Hw(n,t,e){if(Ht.t+=n,Ht.state==="cooldown"&&(Ht.cooldown-=n,Ht.cooldown<=0&&(Ht.state="ready",Ht.cooldown=0)),Ht.state!=="active")return e&&t.onGround&&(Ht.charge=Math.min(1,Ht.charge+_3*n)),null;for(const i of Le){if(i.dying||Ht.hit.has(i.id))continue;const s=i.pos.x-t.pos.x,r=i.pos.z-t.pos.z,a=Math.hypot(s,r);if(a>v3+i.radius||Math.abs(i.pos.y-t.pos.y)>1.8)continue;Ht.hit.add(i.id);const o=a>.01?s/a:Ht.dirX,c=a>.01?r/a:Ht.dirZ,l=o*.6+Ht.dirX*.7,h=c*.6+Ht.dirZ*.7,u=Math.hypot(l,h)||1;Mc(i,i.type==="runner"?i.hp:y3,Ht.dirX,Ht.dirZ,!1),i.dying?(i.fallX=l/u,i.fallZ=h/u):(i.vel.set(l/u*Kf,0,h/u*Kf),i.vy=M3,i.air=!0,i.state=i.boss?i.state:"thrown",i.stateT=0,i.boss&&(i.air=!1,i.vy=0,i.vel.multiplyScalar(.3))),G.shake=Math.min(1,G.shake+b3),G.hitstop=Math.max(G.hitstop,.05)}return Nn(t.pos.x,t.pos.y,t.pos.z,E3,3.5),Ht.t>=x3&&(Ht.state="cooldown",Ht.cooldown=W0,Ht.t=0),{x:Ht.dirX*Yf,z:Ht.dirZ*Yf}}const ht={wave:wt("hWave"),left:wt("hLeft"),score:wt("hScore"),kills:wt("hKills"),combo:wt("hCombo"),hp:wt("hHp"),hpFill:wt("hHpFill"),health:wt("hud-health"),ruteBox:wt("hud-rute"),rute:wt("hRute"),ring:wt("hRuteRing"),cross:wt("crosshair"),marker:wt("hitmarker"),vignette:wt("vignette"),ramBox:wt("hud-ram"),ram:wt("hRam"),ramRing:wt("hRamRing"),bossbar:wt("bossbar"),bossFill:wt("hBossFill"),ramBtn:null,banner:wt("banner"),bannerTitle:wt("bannerTitle"),bannerSub:wt("bannerSub"),toast:wt("toast"),threats:[],dmg:null,cache:{},bannerT:0,toastT:0};{const n=wt("threats");for(let t=0;t<5;t++){const e=tp("i");n.appendChild(e),ht.threats.push(e)}ht.dmg=tp("i"),ht.dmg.className="dmg",n.appendChild(ht.dmg)}function us(n,t,e){ht.cache[n]!==e&&(ht.cache[n]=e,t.textContent=e)}function Sr(n,t,e){ht.bannerTitle.textContent=n,ht.bannerSub.textContent=t||"",ht.banner.classList.add("show"),ht.bannerT=e}function ns(n,t){ht.toast.textContent=n,ht.toast.classList.add("show"),ht.toastT=t}function Ap(n){const t=ht.marker;t.className="",t.offsetWidth,t.className=n?"kill":"hit"}function Su(n){G.score+=n,ht.score.classList.remove("bump"),ht.score.offsetWidth,ht.score.classList.add("bump")}function Gw(n){const t=It;us("wave",ht.wave,"Welle "+Math.max(1,Mt.n));const e=Le.reduce((E,D)=>E+(D.dying?0:1),0)+(Mt.state==="active"?Mt.queue.length:0);us("left",ht.left,Mt.state==="break"?"Nächste Welle in "+Math.max(1,Math.ceil(Mt.breakT)):"noch "+e+" Gegner"),us("score",ht.score,String(G.score)),us("kills",ht.kills,G.kills+" Kills");const i=Ke.n>=2?"Kombo ×"+Z0(Ke.n).toFixed(2).replace(/0$/,"").replace(".",","):"";ht.cache.combo!==i&&(ht.cache.combo=i,ht.combo.textContent=i,i&&(ht.combo.classList.remove("bump"),ht.combo.offsetWidth,ht.combo.classList.add("bump")));const s=Math.ceil(t.hp);us("hp",ht.hp,String(s)),ht.cache.hpw!==s&&(ht.cache.hpw=s,ht.hpFill.style.transform="scaleX("+Vt(t.hp/bs,0,1)+")",ht.health.classList.toggle("low",s<=30));let r="bereit",a=1;Q.state==="return"?(r="kehrt zurück",a=1):Q.state!=="held"&&(a=Vt(Q.t/hh,0,1),r=Math.max(0,hh-Q.t).toFixed(1).replace(".",",")+" s"),us("rute",ht.rute,r);const o=(169.65*(1-a)).toFixed(1);ht.cache.ring!==o&&(ht.cache.ring=o,ht.ring.style.strokeDashoffset=o);const c=Q.state!=="held";ht.cache.away!==c&&(ht.cache.away=c,ht.ruteBox.classList.toggle("away",c));let l=Math.round(Ht.charge*100)+" %",h=Ht.charge,u="";Ht.state==="active"?(l="los!",h=1,u="active"):Ht.state==="cooldown"?(l=Ht.cooldown.toFixed(1).replace(".",",")+" s",h=1-Ht.cooldown/W0,u="cool"):Ht.charge>=1&&(l="bereit",u="ready"),us("ram",ht.ram,l);const d=(169.65*(1-h)).toFixed(1);if(ht.cache.ramRing!==d&&(ht.cache.ramRing=d,ht.ramRing.style.strokeDashoffset=d),ht.cache.ramCls!==u&&(ht.cache.ramCls=u,ht.ramBox.className=u),!ht.ramBtn&&!cn&&(ht.ramBtn=document.querySelector('#touch [data-btn="ram"]')),ht.ramBtn){const E=Math.round(h*100);ht.cache.ramFill!==E&&(ht.cache.ramFill=E,ht.ramBtn.style.setProperty("--fill",E)),ht.cache.ramBtn!==u&&(ht.cache.ramBtn=u,ht.ramBtn.classList.toggle("ready",u==="ready"),ht.ramBtn.classList.toggle("cool",u==="cool"||u===""))}const f=Le.find(E=>E.boss&&!E.dying),m=!!f;if(ht.cache.boss!==m&&(ht.cache.boss=m,ht.bossbar.classList.toggle("show",m)),f){const E=Vt(f.hp/f.maxHp,0,1).toFixed(3);ht.cache.bossFill!==E&&(ht.cache.bossFill=E,ht.bossFill.style.transform="scaleX("+E+")");const D="p"+Im(f);ht.cache.bossPh!==D&&(ht.cache.bossPh=D,ht.bossbar.className="show "+D)}Eu(!1);let _="";if(Be.enemy){const E=Be.enemy;_=Math.hypot(E.pos.x-t.pos.x,E.pos.z-t.pos.z)<=lh+E.radius?"reach":"target"}ht.cache.cross!==_&&(ht.cache.cross=_,ht.cross.className=_);const g=-Math.sin(t.yaw),p=-Math.cos(t.yaw),v=Math.cos(t.yaw),x=-Math.sin(t.yaw);let y=0;const T=[];for(const E of Le)E.dying||T.push(E);T.sort((E,D)=>E.pos.distanceToSquared(t.pos)-D.pos.distanceToSquared(t.pos));for(let E=0;E<T.length&&y<ht.threats.length;E++){const D=T[E],M=D.pos.x-t.pos.x,w=D.pos.z-t.pos.z,O=Math.hypot(M,w),K=Math.atan2(M*v+w*x,M*g+w*p);if(Math.abs(K)<.75||O>45)continue;const tt=ht.threats[y++];tt.style.opacity=String(Vt(1.15-O/45,.25,1)),tt.style.transform="rotate("+K.toFixed(2)+"rad) translateY(-150px)"}for(let E=y;E<ht.threats.length;E++)ht.threats[E].style.opacity="0";G.dmgDirT=Math.max(0,G.dmgDirT-n),ht.dmg.style.opacity=String(Math.min(1,G.dmgDirT*2)),G.dmgDirT>0&&(ht.dmg.style.transform="rotate("+G.dmgDir.toFixed(2)+"rad) translateY(-178px)"),G.hurtFlash=Math.max(0,G.hurtFlash-n*1.8);const b=Vt(G.hurtFlash*.9+(1-t.hp/bs)*.55,0,1).toFixed(2);ht.cache.vig!==b&&(ht.cache.vig=b,ht.vignette.style.opacity=b),ht.bannerT>0&&(ht.bannerT-=n,ht.bannerT<=0&&ht.banner.classList.remove("show")),ht.toastT>0&&(ht.toastT-=n,ht.toastT<=0&&ht.toast.classList.remove("show"))}const ua=["schloss",...gr.runner.designs,...gr.jumper.designs,...gr.rammer.designs,"ober"],Om={schloss:"du selbst",ober:"Boss jeder 5. Welle"};for(const n of["runner","jumper","rammer"])for(const t of gr[n].designs)Om[t]=gr[n].name;const Zt={on:!1,models:[],light:null,focus:-1};function da(n){const t=ua.length;Zt.focus=n<-1?t:n>t?-1:n;const e=wt("galleryName");if(cn||!e)return;const i=ua[Zt.focus];e.textContent=Zt.focus===-1?"Alle Krampusse":Zt.focus===t?"Die Rute":em[i];const s=document.createElement("small");s.textContent=Zt.focus===-1?ua.length+" Passen: du selbst und die Gegner":Zt.focus===t?"geflochten aus Weidenzweigen":Om[i],e.appendChild(s)}function wa(n){const t=n!==void 0?n:!Zt.on;if(t!==Zt.on){if(Zt.on=t,da(-1),t&&!Zt.models.length){const e=Math.ceil(ua.length/2);ua.forEach((i,s)=>{const r=au(Br[i],{detail:1}),a=s<e?0:1,o=a?s-e+.5:s,c=sn.x+(o-(e-1)/2)*2.4,l=sn.z-a*3.2;r.root.position.set(c,Xn(c,l),l),oe.add(r.root),Zt.models.push(r)}),Zt.rute=Fa(1),Zt.rute.position.set(sn.x+6,Xn(sn.x+6,sn.z)+.15,sn.z),oe.add(Zt.rute),Zt.light=new Da(16767400,0,18,2),Zt.light.position.set(sn.x,Xn(sn.x,sn.z)+2.8,sn.z+4.5),oe.add(Zt.light)}for(const e of Zt.models)e.root.visible=t;Zt.rute&&(Zt.rute.visible=t),Zt.light&&(Zt.light.intensity=t?20:0),cn||(document.body.dataset.gallery=t?"1":"")}}function Vw(){const n=G.time;Zt.models.forEach((s,r)=>{s.root.rotation.y=Zt.focus===r?Math.sin(n*.35)*.9:Math.sin(n*.45+r*.5)*2.7;const a=(n*.3+r*.25)%1;ou(s,n*2.4+r,.22,a<.22?a/.22:-1,.05)});const t=Xn(sn.x,sn.z),e=Zt.models[Zt.focus];if(Zt.focus===Zt.models.length&&Zt.rute){const s=Zt.rute.position;Zt.rute.rotation.y=G.time*.4,ae.position.set(s.x,s.y+.55,s.z+1.75),ae.lookAt(s.x,s.y+.55,s.z)}else if(e){const s=e.root.position,r=1.75*e.kit.d.scale;ae.position.set(s.x,s.y+r,s.z+2.3),ae.lookAt(s.x,s.y+r-.15,s.z)}else ae.position.set(sn.x,t+2.6,sn.z+sn.camDist),ae.lookAt(sn.x,t+1.1,sn.z-1.6);const i=Zt.focus===-1?56:38;ae.fov!==i&&(ae.fov=i,ae.updateProjectionMatrix()),fe.rig.visible=!1}const rt={off:!1,errors:0,ctx:null,out:null,sfx:null,music:null,noise:null,curve:null,muted:!1,nextBeat:0,beat:0,intensity:0,bellBudget:0};function Fm(){if(rt.ctx){rt.ctx.state==="suspended"&&rt.ctx.resume();return}const n=typeof window<"u"&&(window.AudioContext||window.webkitAudioContext);if(!n)return;let t;try{t=new n}catch{return}rt.ctx=t,rt.out=t.createGain(),rt.out.gain.value=rt.muted?0:.85;const e=t.createBiquadFilter();e.type="lowpass",e.frequency.value=5200;const i=t.createDynamicsCompressor();i.threshold.value=-16,i.ratio.value=4,rt.out.connect(e),e.connect(i),i.connect(t.destination),rt.sfx=t.createGain(),rt.sfx.gain.value=1,rt.sfx.connect(rt.out),rt.music=t.createGain(),rt.music.gain.value=.6,rt.music.connect(rt.out);const s=t.sampleRate*2,r=t.createBuffer(1,s,t.sampleRate),a=r.getChannelData(0);for(let o=0;o<s;o++)a[o]=Math.random()*2-1;rt.noise=r,rt.curve=new Float32Array(1024);for(let o=0;o<1024;o++)rt.curve[o]=Math.tanh((o/511.5-1)*4);Zw(),Jw(),yb()}function zm(){rt.muted=!rt.muted,rt.ctx&&rt.out.gain.setTargetAtTime(rt.muted?0:.85,rt.ctx.currentTime,.03),ns(rt.muted?"Ton aus":"Ton an",1.4)}function Bc(n,t,e){const i=rt.ctx;if(e=e||rt.sfx,t&&i.createStereoPanner){const s=i.createStereoPanner();s.pan.value=Vt(t,-1,1),n.connect(s),s.connect(e)}else n.connect(e)}function Bm(n,t,e,i,s){n.gain.setValueAtTime(1e-4,t),n.gain.linearRampToValueAtTime(Math.max(2e-4,e),t+i),n.gain.exponentialRampToValueAtTime(1e-4,t+s)}function Tn(n){const t=rt.ctx;if(t)try{const e=t.currentTime+(n.when||0),i=t.createOscillator();i.type=n.type||"sine",i.frequency.setValueAtTime(n.f,e),n.f2&&i.frequency.exponentialRampToValueAtTime(Math.max(1,n.f2),e+n.dur);const s=t.createGain();if(Bm(s,e,n.gain,n.attack||.004,n.dur),n.lp){const r=t.createBiquadFilter();r.type="lowpass",r.frequency.value=n.lp,i.connect(r),r.connect(s)}else i.connect(s);Bc(s,n.pan,n.dest),i.start(e),i.stop(e+n.dur+.05)}catch{rt.errors++}}function nn(n){const t=rt.ctx;if(t)try{const e=t.currentTime+(n.when||0),i=t.createBufferSource();i.buffer=rt.noise,i.loop=!0;const s=t.createBiquadFilter();s.type=n.type||"bandpass",s.Q.value=n.q||1,s.frequency.setValueAtTime(n.f,e),n.f2&&s.frequency.exponentialRampToValueAtTime(n.f2,e+n.dur);const r=t.createGain();Bm(r,e,n.gain,n.attack||.004,n.dur),i.connect(s),s.connect(r),Bc(r,n.pan,n.dest),i.start(e,Math.random()*1.5),i.stop(e+n.dur+.05)}catch{rt.errors++}}function Es(n=.3,t=0,e=0){if(!rt.ctx||rt.bellBudget<=0)return;rt.bellBudget-=1;const i=e||[262,311,349,392][Math.random()*4|0]*(.97+Math.random()*.06),s=[[1,1,.5],[2.02,.5,.36],[2.76,.32,.27],[4.1,.1,.16]];for(const[r,a,o]of s)Tn({type:r===1?"triangle":"sine",f:i*r,dur:o*(.8+Math.random()*.4),gain:n*a,pan:t});nn({type:"bandpass",f:1500,q:2,dur:.04,gain:n*.35,pan:t})}function Ta(){const n=[[1,1,4.2],[2,.55,3.2],[2.4,.35,2.6],[3,.2,2],[.5,.5,4.5]];for(const[t,e,i]of n)Tn({f:147*t,dur:i,gain:.3*e,attack:.008})}function Ww(){nn({f:420,f2:2400,q:1.3,dur:.2,gain:.4,attack:.03})}function Xw(){nn({f:300,f2:1700,q:.9,dur:.36,gain:.34,attack:.04}),Tn({type:"triangle",f:180,f2:90,dur:.2,gain:.15})}function bu(n=0){nn({type:"lowpass",f:1900,f2:300,dur:.13,gain:.6,pan:n}),Tn({f:160,f2:52,dur:.17,gain:.55,pan:n})}function qw(n=0){bu(n),Tn({type:"triangle",f:104,f2:40,dur:.4,gain:.5,pan:n}),rt.bellBudget=Math.max(rt.bellBudget,2),Es(.4,n,233),Es(.3,n,196)}function Rp(n=.1){nn({type:"lowpass",f:950,f2:280,dur:.08,gain:n})}function Yw(){nn({type:"lowpass",f:600,f2:150,dur:.16,gain:.3}),Tn({f:90,f2:45,dur:.14,gain:.3})}function Kw(){Tn({type:"triangle",f:300,f2:210,dur:.1,gain:.22}),nn({f:900,q:1,dur:.06,gain:.2})}function jw(){Tn({type:"triangle",f:196,dur:.14,gain:.25})}function ci(n=.5,t=1,e=.9,i=0){const s=rt.ctx;if(s)try{const r=s.currentTime,a=72*t,o=s.createOscillator(),c=s.createOscillator(),l=s.createOscillator(),h=s.createGain();o.type="sawtooth",c.type="square",l.frequency.value=26+Math.random()*6,h.gain.value=a*.18,o.frequency.setValueAtTime(a*1.25,r),o.frequency.exponentialRampToValueAtTime(a*.7,r+e),c.frequency.setValueAtTime(a*.63,r),c.frequency.exponentialRampToValueAtTime(a*.35,r+e),l.connect(h),h.connect(o.frequency),h.connect(c.frequency);const u=s.createGain();u.gain.value=1.5;const d=s.createWaveShaper();d.curve=rt.curve;const f=s.createBiquadFilter();f.type="lowpass",f.Q.value=2.5,f.frequency.setValueAtTime(950,r),f.frequency.exponentialRampToValueAtTime(250,r+e);const m=s.createGain();m.gain.setValueAtTime(1e-4,r),m.gain.linearRampToValueAtTime(n*.5,r+.07),m.gain.setValueAtTime(n*.5,r+e*.55),m.gain.exponentialRampToValueAtTime(1e-4,r+e),o.connect(u),c.connect(u),u.connect(d),d.connect(f),f.connect(m),Bc(m,i);for(const _ of[o,c,l])_.start(r),_.stop(r+e+.1);nn({type:"lowpass",f:700,f2:240,dur:e*.8,gain:n*.22,attack:.05,pan:i})}catch{rt.errors++}}function Zw(){const n=rt.ctx,t=n.createBufferSource();t.buffer=rt.noise,t.loop=!0;const e=n.createBiquadFilter();e.type="lowpass",e.frequency.value=330,e.Q.value=.7;const i=n.createGain();i.gain.value=.085;const s=n.createOscillator();s.frequency.value=.11;const r=n.createGain();r.gain.value=.045;const a=n.createOscillator();a.frequency.value=.07;const o=n.createGain();o.gain.value=130,s.connect(r),r.connect(i.gain),a.connect(o),o.connect(e.frequency),t.connect(e),e.connect(i),i.connect(rt.out),t.start(),s.start(),a.start()}function Jw(){const n=rt.ctx,t=n.createBiquadFilter();t.type="lowpass",t.frequency.value=175,t.Q.value=3;const e=n.createGain();e.gain.value=.13;for(const o of[73.42,73.42*1.008,110*.997]){const c=n.createOscillator();c.type="sawtooth",c.frequency.value=o,c.connect(t),c.start()}const i=n.createOscillator();i.frequency.value=36.71;const s=n.createGain();s.gain.value=.5,i.connect(s),s.connect(e),i.start();const r=n.createOscillator();r.frequency.value=.06;const a=n.createGain();a.gain.value=55,r.connect(a),a.connect(t.frequency),r.start(),t.connect(e),e.connect(rt.music),rt.nextBeat=n.currentTime+.3,rt.beat=0,setInterval($w,90)}const Cp=[[146.83,0,0,174.61,0,155.56,0,0,146.83,0,0,110,0,116.54,0,0],[146.83,0,0,174.61,0,196,0,0,233.08,0,220,0,174.61,0,164.81,0],[110,0,0,116.54,0,0,146.83,0,138.59,0,0,0,110,0,0,0]],Lp=[[73.42,0,73.42,0,87.31,0,77.78,0,73.42,0,73.42,0,110,0,103.83,0],[73.42,0,73.42,0,87.31,0,98,0,116.54,0,110,0,87.31,0,82.41,0]];function $w(){const n=rt.ctx;if(!n||n.state!=="running")return;rt.nextBeat<n.currentTime&&(rt.nextBeat=n.currentTime+.05);const t=rt.boss?60/132/2:60/(60+rt.intensity*30)/2;for(;rt.nextBeat<n.currentTime+.25;){const e=rt.nextBeat-n.currentTime,i=rt.beat++,s=i%16,r=rt.intensity;if((s===0||s===8||r>.25&&s===11||r>.55&&(s===14||s===6)||rt.boss&&s===12)&&(Tn({f:62,f2:34,dur:.5,gain:s===0?.6:.42,when:e,dest:rt.music}),nn({type:"lowpass",f:300,f2:90,dur:.18,gain:.25,when:e,dest:rt.music})),rt.boss){s%2===0&&s!==0&&s!==8&&nn({type:"lowpass",f:380,f2:110,dur:.12,gain:.3,when:e,dest:rt.music}),s===0&&Tn({type:"triangle",f:196,dur:1.6,gain:.16,when:e,dest:rt.music});const a=Lp[(i/16|0)%Lp.length][s];a&&Tn({type:"sawtooth",f:a,dur:t*1.8,gain:.14,attack:.03,lp:620,when:e,dest:rt.music})}else{const a=Cp[(i/16|0)%Cp.length][s];a&&Tn({type:"sawtooth",f:a,dur:t*3.4,gain:.11,attack:.12,lp:480,when:e,dest:rt.music})}rt.nextBeat+=t}}function wi(n,t,e){const i=n-It.pos.x,s=t-It.pos.z,r=Math.hypot(i,s);return e.vol=1/(1+r*r*.012),e.pan=r<.5?0:Vt((i*Math.cos(It.yaw)-s*Math.sin(It.yaw))/r,-1,1)*.8,e}const me={vol:1,pan:0},Be={point:new C,dir:new C,enemy:null,dist:0},Q={state:"held",t:0,pos:new C,vel:new C,mesh:null,hit:new Set,returnT:0};function Qw(n,t,e,i,s,r,a){const o=s-i,c=n.x-e,l=n.y-i,h=n.z-r,u=t.y*o,d=o*o,f=t.x*c+t.y*l+t.z*h,m=o*l,_=d-u*u;let g=_<1e-6?m/d:(m-u*f)/_;g=Vt(g,0,1);let p=u*g-f;p<0&&(p=0);const v=n.x+t.x*p-e,x=n.y+t.y*p-(i+o*g),y=n.z+t.z*p-r,T=v*v+x*x+y*y;return T<a*a?Math.max(0,p-Math.sqrt(a*a-T)):-1}function Eu(n=!0){const t=ae.position,e=Be.dir;ae.getWorldDirection(e);const i=Math.max(0,we.eyeDist-.4);let s=90,r=null;for(let a=0;a<Le.length;a++){const o=Le[a];if(o.dying)continue;const c=Qw(t,e,o.pos.x,o.pos.y+.35,o.pos.y+1.85*o.scale,o.pos.z,o.radius+.14);c>=0&&c>=i&&c<s&&(s=c,r=o)}if(n){qi.set(t,e),qi.near=i,qi.far=s;const a=qi.intersectObjects(mu,!1);a.length&&a[0].distance<s&&(s=a[0].distance,r=null);for(let o=Math.max(.8,i);o<s;o+=.8)if(t.y+e.y*o<Xn(t.x+e.x*o,t.z+e.z*o)){s=o,r=null;break}}return Be.point.copy(t).addScaledVector(e,s),Be.enemy=r,Be.dist=s,r&&(Be.point.x=jt(Be.point.x,r.pos.x,.6),Be.point.z=jt(Be.point.z,r.pos.z,.6),Be.point.y=Vt(Be.point.y,r.pos.y+.45,r.pos.y+1.6*r.scale)),Be}function wu(){const n=It;!n.alive||n.meleeCd>0||(n.meleeCd=ZM,n.swingT=0,n.swingHit=!1,Ww())}function tT(){const n=It;Eu();const t=n.pos.x,e=n.pos.y+1.25,i=n.pos.z;let s=Be.point.x-t,r=Be.point.z-i,a=Math.hypot(s,r);a<.6&&(s=-Math.sin(n.yaw),r=-Math.cos(n.yaw),a=1),s/=a,r/=a;const o=Math.cos(JM*Math.PI/180),c=[];for(const h of Le){if(h.dying)continue;const u=h.pos.x-t,d=h.pos.z-i,f=Math.hypot(u,d),m=h.pos.y+h.scale-e;f>lh+h.radius||Math.abs(m)>2.3||h!==Be.enemy&&f>1&&(u*s+d*r)/f<o||c.push({e:h,hd:f})}c.sort((h,u)=>h.hd-u.hd);const l=Math.min(c.length,$M);for(let h=0;h<l;h++){const u=c[h].e;Mc(u,u.boss?B3:jM,s,r,!0)}l?(G.hitstop=RS,G.shake=Math.min(1,G.shake+.45)):Be.dist<lh+.4&&(Nn(Be.point.x,Be.point.y,Be.point.z,5,1.5),nn({type:"lowpass",f:700,f2:200,dur:.07,gain:.25}))}function eT(n){const t=It,e=Math.sin(t.yaw),i=Math.cos(t.yaw);return n.set(t.pos.x+i*.4-e*.45,t.pos.y+1.5,t.pos.z-e*.4-i*.45)}function yc(){const n=It;if(!n.alive||Q.state!=="held")return;Eu(),eT(Q.pos);const t=Aa.copy(Be.point).sub(Q.pos),e=t.length();e<.5?t.copy(Be.dir):t.multiplyScalar(1/e),Q.vel.copy(t).multiplyScalar(Df),Q.vel.y+=.5*F0*(Math.max(e,1)/Df),Q.state="fly",Q.t=0,Q.returnT=0,Q.hit.clear(),Q.dodgeChecked=new Set,Q.mesh.visible=!0,Q.mesh.position.copy(Q.pos),n.swingT=.1,n.swingHit=!0,Xw()}function Pp(n,t,e){for(const i of Le){if(i.dying||Q.hit.has(i.id))continue;const s=i.pos.x-n,r=i.pos.z-e,a=i.radius+.32;if(!(s*s+r*r>a*a||t<i.pos.y-.1||t>i.pos.y+2.2*i.scale))return i}return null}function nT(n){if(Q.state==="held")return;Q.t+=n;const t=Q.mesh;if(Q.state==="fly"){const e=Math.max(1,Math.ceil(Q.vel.length()*n/.35)),i=n/e;for(let s=0;s<e&&Q.state==="fly";s++){Q.vel.y-=F0*i,Q.pos.addScaledVector(Q.vel,i);const r=Pp(Q.pos.x,Q.pos.y,Q.pos.z);if(r){Q.hit.add(r.id);const a=Math.hypot(Q.vel.x,Q.vel.z)||1;Mc(r,Pf,Q.vel.x/a,Q.vel.z/a,!1),Q.vel.set(-Q.vel.x*.12,3.5,-Q.vel.z*.12),Q.state="drop",G.hitstop=Math.max(G.hitstop,CS),G.shake=Math.min(1,G.shake+.25)}else Q.pos.y<=_r(Q.pos.x,Q.pos.z)+.05?(Q.pos.y=_r(Q.pos.x,Q.pos.z)+.06,Q.state="stuck",Nn(Q.pos.x,Q.pos.y,Q.pos.z,7,2)):zE(Q.pos.x,Q.pos.y,Q.pos.z)&&(Q.pos.addScaledVector(Q.vel,-i),xc(Q.pos.x,Q.pos.y,Q.pos.z,6,14207392),nn({type:"lowpass",f:900,f2:250,dur:.08,gain:.3}),Q.vel.set(-Q.vel.x*.1,1.5,-Q.vel.z*.1),Q.state="drop")}t.rotation.x+=n*22,t.rotation.y=Math.atan2(Q.vel.x,Q.vel.z)}else if(Q.state==="drop"){Q.vel.y-=Ic*n,Q.pos.addScaledVector(Q.vel,n);const e=_r(Q.pos.x,Q.pos.z)+.06;Q.pos.y<=e&&(Q.pos.y=e,Q.state="stuck"),t.rotation.x+=n*9}else if(Q.state==="return"){Q.returnT+=n;const e=Aa.set(It.pos.x,It.pos.y+1.3,It.pos.z),i=Ph.copy(e).sub(Q.pos),s=i.length(),r=QM*Math.min(1,.35+Q.returnT*2.2);if(s<1.1||s<r*n||Q.returnT>4){Q.state="held",t.visible=!1,Kw(),ns("Rute zurück",.9);return}Q.pos.addScaledVector(i,r*n/s);{const a=Pp(Q.pos.x,Q.pos.y,Q.pos.z);a&&(Q.hit.add(a.id),Mc(a,Pf,i.x/s,i.z/s,!1))}t.rotation.x+=n*26,t.rotation.y=Math.atan2(i.x,i.z)}(Q.state==="fly"||Q.state==="drop"||Q.state==="stuck")&&Q.t>=hh&&(Q.state="return",Q.returnT=0,Q.hit.clear(),nn({f:500,f2:1500,q:1,dur:.3,gain:.2,attack:.1})),Q.state==="stuck"&&(t.rotation.x=1.25),t.position.copy(Q.pos)}function Mc(n,t,e,i,s){if(n.dying)return;n.hp-=t;const r=n.pos.y+1.15*n.scale;wi(n.pos.x,n.pos.z,me),n.hp<=0?(n.dying=!0,n.deathT=0,n.fallX=e,n.fallZ=i,G.kills++,n.boss||Su(Cb(n.def.score,n.hits,Mt.n,!s)),bh(n.pos.x,r,n.pos.z,n.model.kit.palette,30,6.5),xc(n.pos.x,r,n.pos.z,12,16760928),qw(me.pan),ci(.3*me.vol+.1,.8+Math.random()*.3,.45,me.pan),Ap(!0)):(n.boss?(n.punch=.6,n.vel.x+=e*1,n.vel.z+=i*1):(n.stagger=.3,n.punch=1,n.vel.x+=e*7,n.vel.z+=i*7),n.model.eyes.scale.setScalar(.6),bh(n.pos.x,r,n.pos.z,n.model.kit.palette,9,4),xc(n.pos.x,r,n.pos.z,5,16769184),bu(me.pan),Ap(!1)),Ow(n)}const we={blend:0,dist:0,eyeDist:0,orbit:0},qi=new CM,Go=new En,Ip=new Ts(0,0,0,"YXZ"),Dp=new C,Np=new C,Jr=new C,Vo=new C,Aa=new C,Ph=new C;function Up(n,t,e){qi.set(n,t),qi.near=0,qi.far=e+.35;const i=qi.intersectObjects(mu,!1);return i.length?Math.max(0,Math.min(e,i[0].distance-.35)):e}function iT(n){const t=It,e=G.viewMode==="tp"?1:0;we.blend<e?we.blend=Math.min(e,we.blend+n/Nf):we.blend>e&&(we.blend=Math.max(e,we.blend-n/Nf));const i=es(we.blend);t.camY=Math.abs(t.camY-t.pos.y)>2?t.pos.y:ri(t.camY,t.pos.y,16,n);const s=Math.sin(t.phase*2)*.035*t.move*(1-i);Jr.set(t.pos.x,t.camY+XM+s,t.pos.z);const r=G.shake*G.shake,a=G.time;if(Ip.set(t.pitch+r*.035*Math.sin(a*53+1),t.yaw+r*.03*Math.sin(a*41+2),r*.045*Math.sin(a*47)),Go.setFromEuler(Ip),Dp.set(0,0,-1).applyQuaternion(Go),Np.set(1,0,0).applyQuaternion(Go),i>.001){const c=Up(Jr,Aa.copy(Np).setY(0).normalize(),cS*i);Vo.copy(Jr).addScaledVector(Aa,c),Vo.y+=lS*i;const l=oS*i,h=Up(Vo,Ph.copy(Dp).negate(),l);we.dist=h<we.dist?h:ri(we.dist,h,9,n),we.dist=Math.min(we.dist,l),ae.position.copy(Vo).addScaledVector(Ph,we.dist);const u=_r(ae.position.x,ae.position.z)+.3;ae.position.y<u&&(ae.position.y=u)}else ae.position.copy(Jr),we.dist=0;ae.quaternion.copy(Go),we.eyeDist=ae.position.distanceTo(Jr);const o=B0+Vt((Math.hypot(t.vel.x,t.vel.z)-ca)/(O0-ca),0,1)*6+(Ht.state==="active"?w3:0);Math.abs(ae.fov-o)>.05&&(ae.fov=ri(ae.fov,o,8,n),ae.updateProjectionMatrix()),t.model.root.visible=we.eyeDist>.95,fe.rig.visible=we.blend<.45&&t.alive}function Op(n,t,e,i,s,r){we.orbit+=n*.07,ae.position.set(t+Math.cos(we.orbit)*s,r,i+Math.sin(we.orbit)*s),ae.lookAt(t,e,i),ae.fov!==58&&(ae.fov=58,ae.updateProjectionMatrix()),fe.rig.visible=!1}const Zo=new g0,Ih=new yn(58,K0(),.02,10),fe={rig:new pn,right:new pn,armR:null,armL:null,rute:null};function sT(){Zo.add(new N0(10135776,4208202,1.9));const n=new $h(16763024,1.5);n.position.set(-1,1.5,1),Zo.add(n),Zo.add(fe.rig);const t=Br.schloss,e=im();fe.fur=e.uniforms;const i=()=>{const s=new pn,r=Hi(t.fur.arm,-.4,2,e.material);return r.frustumCulled=!1,s.add(new Me(t.armGeo,_h),r),s};fe.armR=i(),fe.right.position.set(.4,-.58,.06),fe.right.add(fe.armR),fe.rig.add(fe.right),fe.rute=Fa(1),fe.rute.position.set(0,-.7,0),fe.armR.add(fe.rute),fe.armL=i(),fe.armL.position.set(-.46,-.62,.08),fe.armL.rotation.set(1.72,0,-.16),fe.rig.add(fe.armL)}function km(n){const t=It,e=t.swingT>=0?t.swingT/uh:-1;let i=1.9,s=0,r=.1,a=-2.68,o=.3,c=.4,l=0;const h=dr,u=H0;if(e>=0)if(e<h){const m=es(e/h);s=jt(0,-1.05,m),c=jt(.4,.66,m),i=jt(1.9,1.62,m),r=jt(.1,-.55,m),a=jt(-2.68,-2.15,m),o=jt(.3,1.05,m),l=.16*m}else if(e<u){const m=(e-h)/(u-h),_=1-(1-m)*(1-m);s=jt(-1.05,1.3,_),c=jt(.66,.06,_),i=jt(1.62,1.52,_),r=jt(-.55,.55,_),a=jt(-2.15,-2.35,_),o=jt(1.05,-.2,_),l=.16*(1-_)}else{const m=es((e-u)/(1-u));s=jt(1.3,0,m),c=jt(.06,.4,m),i=jt(1.52,1.9,m),r=jt(.55,.1,m),a=jt(-2.35,-2.68,m),o=jt(-.2,.3,m)}fe.armR.rotation.set(i,0,r),fe.right.rotation.y=s,fe.right.position.set(c,-.58+l,.06),fe.rute.rotation.set(a,0,o),fe.rute.scale.setScalar(Q.state==="held"?.86:.7),fe.fur&&(fe.fur.uMove.value=Math.min(1,t.move),fe.fur.uPhase.value=t.phase);const d=Math.cos(t.phase)*.012*t.move,f=Math.abs(Math.sin(t.phase))*.016*t.move;fe.rig.position.set(d,-f-(t.onGround?0:Vt(t.vy*.004,-.04,.04))-we.blend*.5,-.26)}let Fp=performance.now(),Wo=0,Xl=0;function Hm(n){requestAnimationFrame(Hm);const t=Math.min(.05,Math.max(1e-4,(n-Fp)/1e3));Fp=n;let e=t;G.state==="playing"?(ow(t),G.hitstop>0&&(e*=G0)):G.state==="menu"||G.state==="loading"?(G.time+=e,Zt.on?Vw():Op(e,pp.x,4,pp.z+6,72,24)):G.state==="gameover"&&(G.time+=e,Op(e,It.pos.x,It.pos.y+1,It.pos.z,7.5,It.pos.y+3.2),It.model.root.visible=!0),G.state!=="paused"&&(nm.value+=e,Ob(t),Sb(G.state==="playing"?Eb(Le,It):0),jE(e),ZE(e),WE(e)),Ba.position.copy(ae.position);const i=G.state==="playing"||G.state==="paused"?It.pos:ae.position;if(ke.target.position.set(Math.round(i.x),0,Math.round(i.z)),ke.position.copy(ke.target.position).add(DE),rn.clear(),rn.render(oe,ae),fe.rig.visible&&G.state!=="menu"&&G.state!=="gameover"&&(rn.clearDepth(),rn.render(Zo,Ih)),Wo+=t,Xl++,Ie.settle-=t,Wo>=fS){const s=Xl/Wo;Wo=0,Xl=0,G.fps=s,$E(s)}}async function rT(){await Wb(),lw(),hw(),mw(),JE(),wt("menuBest").textContent=G.best>0?"Bestwert: "+G.best:"";const n=wt("btnStart");n.disabled=!1,n.textContent="Lauf starten",wt("btnStart").addEventListener("click",Ah),G.playerName=cE(),wt("playerName").value=G.playerName,wt("playerName").addEventListener("input",()=>{wt("nameHint").textContent=""}),wm(),wt("btnRestart").addEventListener("click",Ea),wt("btnResume").addEventListener("click",Rh),Ga("menu"),window.__krampusReady=!0,window.__krampus={step:()=>_u(),simulate:cw,camera:ae,pauseGame:vr,ram:Ht,keys:We,updateFpRig:km,touch:ct,gfx:Ie,applyQuality:vc,setQualitySetting:Th,setTouchMode:Ch,layoutTouch:yu,game:G,player:It,enemies:Le,wave:Mt,rute:Q,cam:we,startGame:Ea,spawnEnemy:Mu,tryMelee:wu,tryThrow:yc,toggleView:vu,get state(){return G.state}},requestAnimationFrame(Hm)}rT();export{xy as $,hT as A,An as B,At as C,$h as D,Me as E,pT as F,uT as G,Gh as H,Rr as I,dT as J,M0 as K,Ia as L,fT as M,Wc as N,De as O,Da as P,En as Q,Jl as R,en as S,aT as T,pn as U,nt as V,yn as W,lT as X,c0 as Y,v0 as Z,Mf as _,cT as a,$o as a0,Qo as a1,ac as a2,mn as a3,lc as a4,cc as a5,Pa as a6,xe as a7,Qi as a8,Lc as a9,Ii as aa,li as ab,oT as b,_T as c,Ci as d,gT as e,Bt as f,C as g,oc as h,mT as i,xT as j,my as k,fa as l,Tg as m,zu as n,zn as o,an as p,$l as q,$n as r,Vh as s,hi as t,y0 as u,eM as v,Sn as w,Di as x,ge as y,Ne as z};
