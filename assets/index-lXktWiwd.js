(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},t={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},n=1e3,r=1001,i=1002,a=1003,o=1004,s=1005,c=1006,l=1007,u=1008,d=1009,f=1010,p=1011,m=1012,h=1013,g=1014,_=1015,v=1016,y=1017,b=1018,x=1020,S=35902,C=35899,w=1021,T=1022,E=1023,D=1026,ee=1027,O=1028,k=1029,te=1030,ne=1031,re=1033,A=33776,ie=33777,j=33778,ae=33779,oe=35840,se=35841,ce=35842,le=35843,ue=36196,de=37492,M=37496,fe=37488,pe=37489,me=37490,he=37491,ge=37808,_e=37809,ve=37810,ye=37811,be=37812,xe=37813,Se=37814,Ce=37815,we=37816,Te=37817,Ee=37818,De=37819,Oe=37820,ke=37821,Ae=36492,je=36494,Me=36495,Ne=36283,Pe=36284,Fe=36285,N=36286,Ie=2300,Le=2301,Re=2302,P=2303,ze=2400,F=2401,Be=2402,Ve=3200,He=`srgb`,Ue=`srgb-linear`,We=`linear`,Ge=`srgb`,Ke=7680,qe=35044,Je=35048,Ye=2e3;function Xe(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function Ze(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function Qe(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function $e(){let e=Qe(`canvas`);return e.style.display=`block`,e}var et={};function tt(...e){let t=`THREE.`+e.shift();console.log(t,...e)}function nt(e){let t=e[0];if(typeof t==`string`&&t.startsWith(`TSL:`)){let t=e[1];t&&t.isStackTrace?e[0]+=` `+t.getLocation():e[1]=`Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.`}return e}function I(...e){e=nt(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function L(...e){e=nt(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function rt(...e){let t=e.join(` `);t in et||(et[t]=!0,I(...e))}function it(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}var at={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3},ot=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n!==void 0&&n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let e=r.indexOf(t);e!==-1&&r.splice(e,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let t=n.slice(0);for(let n=0,r=t.length;n<r;n++)t[n].call(this,e);e.target=null}}},st=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),ct=1234567,lt=Math.PI/180,ut=180/Math.PI;function dt(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(st[e&255]+st[e>>8&255]+st[e>>16&255]+st[e>>24&255]+`-`+st[t&255]+st[t>>8&255]+`-`+st[t>>16&15|64]+st[t>>24&255]+`-`+st[n&63|128]+st[n>>8&255]+`-`+st[n>>16&255]+st[n>>24&255]+st[r&255]+st[r>>8&255]+st[r>>16&255]+st[r>>24&255]).toLowerCase()}function R(e,t,n){return Math.max(t,Math.min(n,e))}function ft(e,t){return(e%t+t)%t}function pt(e,t,n,r,i){return r+(e-t)*(i-r)/(n-t)}function mt(e,t,n){return e===t?0:(n-e)/(t-e)}function ht(e,t,n){return(1-n)*e+n*t}function gt(e,t,n,r){return ht(e,t,1-Math.exp(-n*r))}function _t(e,t=1){return t-Math.abs(ft(e,t*2)-t)}function vt(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function yt(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))}function bt(e,t){return e+Math.floor(Math.random()*(t-e+1))}function xt(e,t){return e+Math.random()*(t-e)}function St(e){return e*(.5-Math.random())}function Ct(e){e!==void 0&&(ct=e);let t=ct+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function wt(e){return e*lt}function Tt(e){return e*ut}function Et(e){return e>0&&Number.isInteger(e)&&2**Math.round(Math.log2(e))===e}function Dt(e){return 2**Math.ceil(Math.log(e)/Math.LN2)}function Ot(e){return 2**Math.floor(Math.log(e)/Math.LN2)}function kt(e,t,n,r,i){let a=Math.cos,o=Math.sin,s=a(n/2),c=o(n/2),l=a((t+r)/2),u=o((t+r)/2),d=a((t-r)/2),f=o((t-r)/2),p=a((r-t)/2),m=o((r-t)/2);switch(i){case`XYX`:e.set(s*u,c*d,c*f,s*l);break;case`YZY`:e.set(c*f,s*u,c*d,s*l);break;case`ZXZ`:e.set(c*d,c*f,s*u,s*l);break;case`XZX`:e.set(s*u,c*m,c*p,s*l);break;case`YXY`:e.set(c*p,s*u,c*m,s*l);break;case`ZYZ`:e.set(c*m,c*p,s*u,s*l);break;default:I(`MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: `+i)}}function At(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:case Uint8ClampedArray:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}function jt(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}var Mt={DEG2RAD:lt,RAD2DEG:ut,generateUUID:dt,clamp:R,euclideanModulo:ft,mapLinear:pt,inverseLerp:mt,lerp:ht,damp:gt,pingpong:_t,smoothstep:vt,smootherstep:yt,randInt:bt,randFloat:xt,randFloatSpread:St,seededRandom:Ct,degToRad:wt,radToDeg:Tt,isPowerOfTwo:Et,ceilPowerOfTwo:Dt,floorPowerOfTwo:Ot,setQuaternionFromProperEuler:kt,normalize:jt,denormalize:At},z=class e{static{e.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`THREE.Vector2: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`THREE.Vector2: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=R(this.x,e.x,t.x),this.y=R(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=R(this.x,e,t),this.y=R(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(R(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(R(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Nt=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(u!==m||s!==d||c!==f||l!==p){let e=s*d+c*f+l*p+u*m;e<0&&(d=-d,f=-f,p=-p,m=-m,e=-e);let t=1-o;if(e<.9995){let n=Math.acos(e),r=Math.sin(n);t=Math.sin(t*n)/r,o=Math.sin(o*n)/r,s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o}else{s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o;let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:I(`Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(R(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,i=-i,a=-a,o=-o);let s=1-t;if(o<.9995){let e=Math.acos(o),c=Math.sin(e);s=Math.sin(s*e)/c,t=Math.sin(t*e)/c,this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this._onChangeCallback()}else this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},B=class e{static{e.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`THREE.Vector3: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`THREE.Vector3: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ft.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ft.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=R(this.x,e.x,t.x),this.y=R(this.y,e.y,t.y),this.z=R(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=R(this.x,e,t),this.y=R(this.y,e,t),this.z=R(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(R(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Pt.copy(this).projectOnVector(e),this.sub(Pt)}reflect(e){return this.sub(Pt.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(R(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Pt=new B,Ft=new Nt,V=class e{static{e.prototype.isMatrix3=!0}constructor(e,t,n,r,i,a,o,s,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return rt(`Matrix3: .scale() is deprecated. Use .makeScale() instead.`),this.premultiply(It.makeScale(e,t)),this}rotate(e){return rt(`Matrix3: .rotate() is deprecated. Use .makeRotation() instead.`),this.premultiply(It.makeRotation(-e)),this}translate(e,t){return rt(`Matrix3: .translate() is deprecated. Use .makeTranslation() instead.`),this.premultiply(It.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},It=new V,Lt=new V().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Rt=new V().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function zt(){let e={enabled:!0,workingColorSpace:Ue,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n||(this.spaces[t].transfer===`srgb`&&(e.r=Vt(e.r),e.g=Vt(e.g),e.b=Vt(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=Ht(e.r),e.g=Ht(e.g),e.b=Ht(e.b))),e},workingToColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},colorSpaceToWorking:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?We:this.spaces[e].transfer},getToneMappingMode:function(e){return this.spaces[e].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[t].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(t,n){return rt(`ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace().`),e.workingToColorSpace(t,n)},toWorkingColorSpace:function(t,n){return rt(`ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking().`),e.colorSpaceToWorking(t,n)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[Ue]:{primaries:t,whitePoint:r,transfer:We,toXYZ:Lt,fromXYZ:Rt,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:He},outputColorSpaceConfig:{drawingBufferColorSpace:He}},[He]:{primaries:t,whitePoint:r,transfer:Ge,toXYZ:Lt,fromXYZ:Rt,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:He}}}),e}var Bt=zt();function Vt(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function Ht(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var Ut,Wt=class{static getDataURL(e,t=`image/png`){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ut===void 0&&(Ut=Qe(`canvas`)),Ut.width=e.width,Ut.height=e.height;let t=Ut.getContext(`2d`);e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),n=Ut}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=Qe(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=Vt(i[e]/255)*255;return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(Vt(t[e]/255)*255):t[e]=Vt(t[e]);return{data:t,width:e.width,height:e.height}}return I(`ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},Gt=0,Kt=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Gt++}),this.uuid=dt(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<`u`&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<`u`&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t===null?e.set(0,0,0):e.set(t.width,t.height,t.depth||0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(qt(r[t].image)):e.push(qt(r[t]))}else e=qt(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function qt(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?Wt.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(I(`Texture: Unable to serialize Texture.`),{})}var Jt=0,Yt=new B,Xt=class e extends ot{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,i=r,a=r,o=c,s=u,l=E,f=d,p=e.DEFAULT_ANISOTROPY,m=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Jt++}),this.uuid=dt(),this.name=``,this.source=new Kt(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=o,this.minFilter=s,this.anisotropy=p,this.format=l,this.internalFormat=null,this.type=f,this.offset=new z(0,0),this.repeat=new z(1,1),this.center=new z(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new V,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Yt).x}get height(){return this.source.getSize(Yt).y}get depth(){return this.source.getSize(Yt).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){I(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?I(`Texture.setValues(): property '${t}' does not exist.`):r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case n:e.x-=Math.floor(e.x);break;case r:e.x=e.x<0?0:1;break;case i:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x-=Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case n:e.y-=Math.floor(e.y);break;case r:e.y=e.y<0?0:1;break;case i:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y-=Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Xt.DEFAULT_IMAGE=null,Xt.DEFAULT_MAPPING=300,Xt.DEFAULT_ANISOTROPY=1;var Zt=class e{static{e.prototype.isVector4=!0}constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`THREE.Vector4: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`THREE.Vector4: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=R(this.x,e.x,t.x),this.y=R(this.y,e.y,t.y),this.z=R(this.z,e.z,t.z),this.w=R(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=R(this.x,e,t),this.y=R(this.y,e,t),this.z=R(this.z,e,t),this.w=R(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(R(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Qt=class extends ot{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:c,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Zt(0,0,e,t),this.scissorTest=!1,this.viewport=new Zt(0,0,e,t),this.textures=[];let r=new Xt({width:e,height:t,depth:n.depth}),i=n.count;for(let e=0;e<i;e++)this.textures[e]=r.clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:c,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let e=0;e<this.textures.length;e++)this.textures[e].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new Kt(n)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null){if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture}return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:`dispose`})}},$t=class extends Qt{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},en=class extends Xt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=a,this.minFilter=a,this.wrapR=r,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},tn=class extends Xt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=a,this.minFilter=a,this.wrapR=r,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},nn=class e{static{e.prototype.isMatrix4=!0}constructor(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/rn.setFromMatrixColumn(e,0).length(),i=1/rn.setFromMatrixColumn(e,1).length(),a=1/rn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(on,e,sn)}lookAt(e,t,n){let r=this.elements;return un.subVectors(e,t),un.lengthSq()===0&&(un.z=1),un.normalize(),cn.crossVectors(n,un),cn.lengthSq()===0&&(Math.abs(n.z)===1?un.x+=1e-4:un.z+=1e-4,un.normalize(),cn.crossVectors(n,un)),cn.normalize(),ln.crossVectors(un,cn),r[0]=cn.x,r[4]=ln.x,r[8]=un.x,r[1]=cn.y,r[5]=ln.y,r[9]=un.y,r[2]=cn.z,r[6]=ln.z,r[10]=un.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],ee=r[13],O=r[2],k=r[6],te=r[10],ne=r[14],re=r[3],A=r[7],ie=r[11],j=r[15];return i[0]=a*x+o*T+s*O+c*re,i[4]=a*S+o*E+s*k+c*A,i[8]=a*C+o*D+s*te+c*ie,i[12]=a*w+o*ee+s*ne+c*j,i[1]=l*x+u*T+d*O+f*re,i[5]=l*S+u*E+d*k+f*A,i[9]=l*C+u*D+d*te+f*ie,i[13]=l*w+u*ee+d*ne+f*j,i[2]=p*x+m*T+h*O+g*re,i[6]=p*S+m*E+h*k+g*A,i[10]=p*C+m*D+h*te+g*ie,i[14]=p*w+m*ee+h*ne+g*j,i[3]=_*x+v*T+y*O+b*re,i[7]=_*S+v*E+y*k+b*A,i[11]=_*C+v*D+y*te+b*ie,i[15]=_*w+v*ee+y*ne+b*j,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15],_=s*f-c*d,v=o*f-c*u,y=o*d-s*u,b=a*f-c*l,x=a*d-s*l,S=a*u-o*l;return t*(m*_-h*v+g*y)-n*(p*_-h*b+g*x)+r*(p*v-m*b+g*S)-i*(p*y-m*x+h*S)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[1],a=e[5],o=e[9],s=e[2],c=e[6],l=e[10];return t*(a*l-o*c)-n*(i*l-o*s)+r*(i*c-a*s)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=t*o-n*a,v=t*s-r*a,y=t*c-i*a,b=n*s-r*o,x=n*c-i*o,S=r*c-i*s,C=l*m-u*p,w=l*h-d*p,T=l*g-f*p,E=u*h-d*m,D=u*g-f*m,ee=d*g-f*h,O=_*ee-v*D+y*E+b*T-x*w+S*C;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let k=1/O;return e[0]=(o*ee-s*D+c*E)*k,e[1]=(r*D-n*ee-i*E)*k,e[2]=(m*S-h*x+g*b)*k,e[3]=(d*x-u*S-f*b)*k,e[4]=(s*T-a*ee-c*w)*k,e[5]=(t*ee-r*T+i*w)*k,e[6]=(h*y-p*S-g*v)*k,e[7]=(l*S-d*y+f*v)*k,e[8]=(a*D-o*T+c*C)*k,e[9]=(n*T-t*D-i*C)*k,e[10]=(p*x-m*y+g*_)*k,e[11]=(u*y-l*x-f*_)*k,e[12]=(o*w-a*E-s*C)*k,e[13]=(t*E-n*w+r*C)*k,e[14]=(m*v-p*b-h*_)*k,e[15]=(l*b-u*v+d*_)*k,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let i=this.determinantAffine();if(i===0)return n.set(1,1,1),t.identity(),this;let a=rn.set(r[0],r[1],r[2]).length(),o=rn.set(r[4],r[5],r[6]).length(),s=rn.set(r[8],r[9],r[10]).length();i<0&&(a=-a),an.copy(this);let c=1/a,l=1/o,u=1/s;return an.elements[0]*=c,an.elements[1]*=c,an.elements[2]*=c,an.elements[4]*=l,an.elements[5]*=l,an.elements[6]*=l,an.elements[8]*=u,an.elements[9]*=u,an.elements[10]*=u,t.setFromRotationMatrix(an),n.x=a,n.y=o,n.z=s,this}makePerspective(e,t,n,r,i,a,o=Ye,s=!1){let c=this.elements,l=2*i/(t-e),u=2*i/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r),p,m;if(s)p=i/(a-i),m=a*i/(a-i);else if(o===2e3)p=-(a+i)/(a-i),m=-2*a*i/(a-i);else if(o===2001)p=-a/(a-i),m=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=Ye,s=!1){let c=this.elements,l=2/(t-e),u=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r),p,m;if(s)p=1/(a-i),m=a/(a-i);else if(o===2e3)p=-2/(a-i),m=-(a+i)/(a-i);else if(o===2001)p=-1/(a-i),m=-i/(a-i);else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},rn=new B,an=new nn,on=new B(0,0,0),sn=new B(1,1,1),cn=new B,ln=new B,un=new B,dn=new nn,fn=new Nt,pn=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(R(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-R(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(R(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-R(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(R(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-R(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:I(`Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return dn.makeRotationFromQuaternion(e),this.setFromRotationMatrix(dn,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return fn.setFromEuler(this),this.setFromQuaternion(fn,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};pn.DEFAULT_ORDER=`XYZ`;var mn=class{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&1<<e)}},hn=0,gn=new B,_n=new Nt,vn=new nn,yn=new B,bn=new B,xn=new B,Sn=new Nt,Cn=new B(1,0,0),wn=new B(0,1,0),Tn=new B(0,0,1),En={type:`added`},Dn={type:`removed`},On={type:`childadded`,child:null},kn={type:`childremoved`,child:null},An=class e extends ot{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:hn++}),this.uuid=dt(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new B,n=new pn,r=new Nt,i=new B(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new nn},normalMatrix:{value:new V}}),this.matrix=new nn,this.matrixWorld=new nn,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new mn,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return _n.setFromAxisAngle(e,t),this.quaternion.multiply(_n),this}rotateOnWorldAxis(e,t){return _n.setFromAxisAngle(e,t),this.quaternion.premultiply(_n),this}rotateX(e){return this.rotateOnAxis(Cn,e)}rotateY(e){return this.rotateOnAxis(wn,e)}rotateZ(e){return this.rotateOnAxis(Tn,e)}translateOnAxis(e,t){return gn.copy(e).applyQuaternion(this.quaternion),this.position.add(gn.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Cn,e)}translateY(e){return this.translateOnAxis(wn,e)}translateZ(e){return this.translateOnAxis(Tn,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(vn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?yn.copy(e):yn.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),bn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?vn.lookAt(bn,yn,this.up):vn.lookAt(yn,bn,this.up),this.quaternion.setFromRotationMatrix(vn),r&&(vn.extractRotation(r.matrixWorld),_n.setFromRotationMatrix(vn),this.quaternion.premultiply(_n.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(L(`Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(En),On.child=e,this.dispatchEvent(On),On.child=null):L(`Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Dn),kn.child=e,this.dispatchEvent(kn),kn.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),vn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),vn.multiply(e.parent.matrixWorld)),e.applyMatrix4(vn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(En),On.child=e,this.dispatchEvent(On),On.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bn,e,xn),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bn,Sn,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,i=this.matrix.elements;i[12]+=t-i[0]*t-i[4]*n-i[8]*r,i[13]+=n-i[1]*t-i[5]*n-i[9]*r,i[14]+=r-i[2]*t-i[6]*n-i[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let e=this.children;for(let t=0,r=e.length;t<r;t++)e[t].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox?e.boundingBox.toJSON():void 0,boundingSphere:e.boundingSphere?e.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(e=>({...e})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0){if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material)}if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot===null?null:e.pivot.clone(),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:`dispose`})}};An.DEFAULT_UP=new B(0,1,0),An.DEFAULT_MATRIX_AUTO_UPDATE=!0,An.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var H=class extends An{constructor(){super(),this.isGroup=!0,this.type=`Group`}},jn={type:`move`},Mn=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new H,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new H,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new H,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.rotation,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,s.eventsEnabled&&s.dispatchEvent({type:`gripUpdated`,data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(jn)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new H;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Nn={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Pn={h:0,s:0,l:0},Fn={h:0,s:0,l:0};function In(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var U=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=He){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Bt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=Bt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Bt.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=Bt.workingColorSpace){if(e=ft(e,1),t=R(t,0,1),n=R(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=In(i,r,e+1/3),this.g=In(i,r,e),this.b=In(i,r,e-1/3)}return Bt.colorSpaceToWorking(this,r),this}setStyle(e,t=He){function n(t){t!==void 0&&parseFloat(t)<1&&I(`Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:I(`Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);I(`Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=He){let n=Nn[e.toLowerCase()];return n===void 0?I(`Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Vt(e.r),this.g=Vt(e.g),this.b=Vt(e.b),this}copyLinearToSRGB(e){return this.r=Ht(e.r),this.g=Ht(e.g),this.b=Ht(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=He){return Bt.workingToColorSpace(Ln.copy(this),e),Math.round(R(Ln.r*255,0,255))*65536+Math.round(R(Ln.g*255,0,255))*256+Math.round(R(Ln.b*255,0,255))}getHexString(e=He){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Bt.workingColorSpace){Bt.workingToColorSpace(Ln.copy(this),t);let n=Ln.r,r=Ln.g,i=Ln.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=Bt.workingColorSpace){return Bt.workingToColorSpace(Ln.copy(this),t),e.r=Ln.r,e.g=Ln.g,e.b=Ln.b,e}getStyle(e=He){Bt.workingToColorSpace(Ln.copy(this),e);let t=Ln.r,n=Ln.g,r=Ln.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(Pn),this.setHSL(Pn.h+e,Pn.s+t,Pn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Pn),e.getHSL(Fn);let n=ht(Pn.h,Fn.h,t),r=ht(Pn.s,Fn.s,t),i=ht(Pn.l,Fn.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ln=new U;U.NAMES=Nn;var Rn=class e{constructor(e,t=1,n=1e3){this.isFog=!0,this.name=``,this.color=new U(e),this.near=t,this.far=n}clone(){return new e(this.color,this.near,this.far)}toJSON(){return{type:`Fog`,name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},zn=class extends An{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new pn,this.environmentIntensity=1,this.environmentRotation=new pn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Bn=new B,Vn=new B,Hn=new B,Un=new B,Wn=new B,Gn=new B,Kn=new B,qn=new B,Jn=new B,Yn=new B,Xn=new Zt,Zn=new Zt,Qn=new Zt,$n=class e{constructor(e=new B,t=new B,n=new B){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Bn.subVectors(e,t),r.cross(Bn);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){Bn.subVectors(r,t),Vn.subVectors(n,t),Hn.subVectors(e,t);let a=Bn.dot(Bn),o=Bn.dot(Vn),s=Bn.dot(Hn),c=Vn.dot(Vn),l=Vn.dot(Hn),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Un)!==null&&Un.x>=0&&Un.y>=0&&Un.x+Un.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,Un)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,Un.x),s.addScaledVector(a,Un.y),s.addScaledVector(o,Un.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return Xn.setScalar(0),Zn.setScalar(0),Qn.setScalar(0),Xn.fromBufferAttribute(e,t),Zn.fromBufferAttribute(e,n),Qn.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Xn,i.x),a.addScaledVector(Zn,i.y),a.addScaledVector(Qn,i.z),a}static isFrontFacing(e,t,n,r){return Bn.subVectors(n,t),Vn.subVectors(e,t),Bn.cross(Vn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Bn.subVectors(this.c,this.b),Vn.subVectors(this.a,this.b),Bn.cross(Vn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;Wn.subVectors(r,n),Gn.subVectors(i,n),qn.subVectors(e,n);let s=Wn.dot(qn),c=Gn.dot(qn);if(s<=0&&c<=0)return t.copy(n);Jn.subVectors(e,r);let l=Wn.dot(Jn),u=Gn.dot(Jn);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0)return a=s/(s-l),t.copy(n).addScaledVector(Wn,a);Yn.subVectors(e,i);let f=Wn.dot(Yn),p=Gn.dot(Yn);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(Gn,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return Kn.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(Kn,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(Wn,a).addScaledVector(Gn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},er=class{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(nr.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(nr.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=nr.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,nr):nr.fromBufferAttribute(r,t),nr.applyMatrix4(e.matrixWorld),this.expandByPoint(nr);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),rr.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),rr.copy(e.boundingBox)),rr.applyMatrix4(e.matrixWorld),this.union(rr)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,nr),nr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ur),dr.subVectors(this.max,ur),ir.subVectors(e.a,ur),ar.subVectors(e.b,ur),or.subVectors(e.c,ur),sr.subVectors(ar,ir),cr.subVectors(or,ar),lr.subVectors(ir,or);let t=[0,-sr.z,sr.y,0,-cr.z,cr.y,0,-lr.z,lr.y,sr.z,0,-sr.x,cr.z,0,-cr.x,lr.z,0,-lr.x,-sr.y,sr.x,0,-cr.y,cr.x,0,-lr.y,lr.x,0];return!mr(t,ir,ar,or,dr)||(t=[1,0,0,0,1,0,0,0,1],!mr(t,ir,ar,or,dr))?!1:(fr.crossVectors(sr,cr),t=[fr.x,fr.y,fr.z],mr(t,ir,ar,or,dr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,nr).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(nr).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(tr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),tr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),tr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),tr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),tr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),tr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),tr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),tr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(tr)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},tr=[new B,new B,new B,new B,new B,new B,new B,new B],nr=new B,rr=new er,ir=new B,ar=new B,or=new B,sr=new B,cr=new B,lr=new B,ur=new B,dr=new B,fr=new B,pr=new B;function mr(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){pr.fromArray(e,a);let o=i.x*Math.abs(pr.x)+i.y*Math.abs(pr.y)+i.z*Math.abs(pr.z),s=t.dot(pr),c=n.dot(pr),l=r.dot(pr);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var hr=new B,gr=new z,_r=0,vr=class extends ot{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:_r++}),this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=qe,this.updateRanges=[],this.gpuType=_,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)gr.fromBufferAttribute(this,t),gr.applyMatrix3(e),this.setXY(t,gr.x,gr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)hr.fromBufferAttribute(this,t),hr.applyMatrix3(e),this.setXYZ(t,hr.x,hr.y,hr.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)hr.fromBufferAttribute(this,t),hr.applyMatrix4(e),this.setXYZ(t,hr.x,hr.y,hr.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)hr.fromBufferAttribute(this,t),hr.applyNormalMatrix(e),this.setXYZ(t,hr.x,hr.y,hr.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)hr.fromBufferAttribute(this,t),hr.transformDirection(e),this.setXYZ(t,hr.x,hr.y,hr.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=At(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=jt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=At(t,this.array)),t}setX(e,t){return this.normalized&&(t=jt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=At(t,this.array)),t}setY(e,t){return this.normalized&&(t=jt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=At(t,this.array)),t}setZ(e,t){return this.normalized&&(t=jt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=At(t,this.array)),t}setW(e,t){return this.normalized&&(t=jt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=jt(t,this.array),n=jt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=jt(t,this.array),n=jt(n,this.array),r=jt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=jt(t,this.array),n=jt(n,this.array),r=jt(r,this.array),i=jt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:`dispose`})}},yr=class extends vr{constructor(e,t,n){super(new Uint16Array(e),t,n)}},br=class extends vr{constructor(e,t,n){super(new Uint32Array(e),t,n)}},xr=class extends vr{constructor(e,t,n){super(new Float32Array(e),t,n)}},Sr=new er,Cr=new B,wr=new B,Tr=class{constructor(e=new B,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?Sr.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Cr.subVectors(e,this.center);let t=Cr.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(Cr,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(wr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Cr.copy(e.center).add(wr)),this.expandByPoint(Cr.copy(e.center).sub(wr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Er=0,Dr=new nn,Or=new An,kr=new B,Ar=new er,jr=new er,Mr=new B,Nr=class e extends ot{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Er++}),this.uuid=dt(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return this.index=Array.isArray(e)?new(Xe(e)?br:yr)(e,1):e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new V().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Dr.makeRotationFromQuaternion(e),this.applyMatrix4(Dr),this}rotateX(e){return Dr.makeRotationX(e),this.applyMatrix4(Dr),this}rotateY(e){return Dr.makeRotationY(e),this.applyMatrix4(Dr),this}rotateZ(e){return Dr.makeRotationZ(e),this.applyMatrix4(Dr),this}translate(e,t,n){return Dr.makeTranslation(e,t,n),this.applyMatrix4(Dr),this}scale(e,t,n){return Dr.makeScale(e,t,n),this.applyMatrix4(Dr),this}lookAt(e){return Or.lookAt(e),Or.updateMatrix(),this.applyMatrix4(Or.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(kr).negate(),this.translate(kr.x,kr.y,kr.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new xr(t,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}e.length>t.count&&I(`BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new er);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)L(`BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));else{if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Ar.setFromBufferAttribute(n),this.morphTargetsRelative?(Mr.addVectors(this.boundingBox.min,Ar.min),this.boundingBox.expandByPoint(Mr),Mr.addVectors(this.boundingBox.max,Ar.max),this.boundingBox.expandByPoint(Mr)):(this.boundingBox.expandByPoint(Ar.min),this.boundingBox.expandByPoint(Ar.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&L(`BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Tr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)L(`BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new B,1/0);else if(e){let n=this.boundingSphere.center;if(Ar.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];jr.setFromBufferAttribute(n),this.morphTargetsRelative?(Mr.addVectors(Ar.min,jr.min),Ar.expandByPoint(Mr),Mr.addVectors(Ar.max,jr.max),Ar.expandByPoint(Mr)):(Ar.expandByPoint(jr.min),Ar.expandByPoint(jr.max))}Ar.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)Mr.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(Mr));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)Mr.fromBufferAttribute(a,t),o&&(kr.fromBufferAttribute(e,t),Mr.add(kr)),r=Math.max(r,n.distanceToSquared(Mr))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&L(`BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){L(`BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv,a=this.getAttribute(`tangent`);(a===void 0||a.count!==n.count)&&(a=new vr(new Float32Array(4*n.count),4),this.setAttribute(`tangent`,a));let o=[],s=[];for(let e=0;e<n.count;e++)o[e]=new B,s[e]=new B;let c=new B,l=new B,u=new B,d=new z,f=new z,p=new z,m=new B,h=new B;function g(e,t,r){c.fromBufferAttribute(n,e),l.fromBufferAttribute(n,t),u.fromBufferAttribute(n,r),d.fromBufferAttribute(i,e),f.fromBufferAttribute(i,t),p.fromBufferAttribute(i,r),l.sub(c),u.sub(c),f.sub(d),p.sub(d);let a=1/(f.x*p.y-p.x*f.y);isFinite(a)&&(m.copy(l).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(a),h.copy(u).multiplyScalar(f.x).addScaledVector(l,-p.x).multiplyScalar(a),o[e].add(m),o[t].add(m),o[r].add(m),s[e].add(h),s[t].add(h),s[r].add(h))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)g(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let v=new B,y=new B,b=new B,x=new B;function S(e){b.fromBufferAttribute(r,e),x.copy(b);let t=o[e];v.copy(t),v.sub(b.multiplyScalar(b.dot(t))).normalize(),y.crossVectors(x,t);let n=y.dot(s[e])<0?-1:1;a.setXYZW(e,v.x,v.y,v.z,n)}for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)S(e.getX(t+0)),S(e.getX(t+1)),S(e.getX(t+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0||n.count!==t.count)n=new vr(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new B,i=new B,a=new B,o=new B,s=new B,c=new B,l=new B,u=new B;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Mr.fromBufferAttribute(e,t),Mr.normalize(),e.setXYZ(t,Mr.x,Mr.y,Mr.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new vr(a,r,i)}if(this.index===null)return I(`BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?`BufferGeometry`:this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:`dispose`})}},Pr=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e===void 0?0:e.length/t,this.usage=qe,this.updateRanges=[],this.version=0,this.uuid=dt()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,i=this.stride;r<i;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=dt()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=dt()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},Fr=new B,Ir=class e{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name=``,this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Fr.fromBufferAttribute(this,t),Fr.applyMatrix4(e),this.setXYZ(t,Fr.x,Fr.y,Fr.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Fr.fromBufferAttribute(this,t),Fr.applyNormalMatrix(e),this.setXYZ(t,Fr.x,Fr.y,Fr.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Fr.fromBufferAttribute(this,t),Fr.transformDirection(e),this.setXYZ(t,Fr.x,Fr.y,Fr.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=At(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=jt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=jt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=jt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=jt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=jt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=At(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=At(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=At(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=At(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=jt(t,this.array),n=jt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=jt(t,this.array),n=jt(n,this.array),r=jt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=jt(t,this.array),n=jt(n,this.array),r=jt(r,this.array),i=jt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=i,this}clone(t){if(t===void 0){tt(`InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return new vr(new this.array.constructor(e),this.itemSize,this.normalized)}return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new e(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){tt(`InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Lr=new B,Rr=new B,zr=new V,Br=class{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=Lr.subVectors(n,t).cross(Rr.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(Lr),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/i;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||zr.getNormalMatrix(e),r=this.coplanarPoint(Lr).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Vr=0,Hr=class extends ot{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Vr++}),this.uuid=dt(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new U(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ke,this.stencilZFail=Ke,this.stencilZPass=Ke,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){I(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?I(`Material: '${t}' is not a property of THREE.${this.type}.`):r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(e=>e.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new U().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(e=>new Br().fromJSON(e))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(this.vertexColors=typeof e.vertexColors==`number`?e.vertexColors>0:e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let t=e.normalScale;Array.isArray(t)===!1&&(t=[t,t]),this.normalScale=new z().fromArray(t)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new z().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},Ur=class extends Hr{constructor(e){super(),this.isSpriteMaterial=!0,this.type=`SpriteMaterial`,this.color=new U(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Wr,Gr=new B,Kr=new B,qr=new B,Jr=new z,Yr=new z,Xr=new nn,Zr=new B,Qr=new B,$r=new B,ei=new z,ti=new z,ni=new z,ri=class extends An{constructor(e=new Ur){if(super(),this.isSprite=!0,this.type=`Sprite`,Wr===void 0){Wr=new Nr;let e=new Pr(new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),5);Wr.setIndex([0,1,2,0,2,3]),Wr.setAttribute(`position`,new Ir(e,3,0,!1)),Wr.setAttribute(`uv`,new Ir(e,2,3,!1))}this.geometry=Wr,this.material=e,this.center=new z(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&L(`Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.`),Kr.setFromMatrixScale(this.matrixWorld),Xr.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),qr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Kr.multiplyScalar(-qr.z);let n=this.material.rotation,r,i;n!==0&&(i=Math.cos(n),r=Math.sin(n));let a=this.center;ii(Zr.set(-.5,-.5,0),qr,a,Kr,r,i),ii(Qr.set(.5,-.5,0),qr,a,Kr,r,i),ii($r.set(.5,.5,0),qr,a,Kr,r,i),ei.set(0,0),ti.set(1,0),ni.set(1,1);let o=e.ray.intersectTriangle(Zr,Qr,$r,!1,Gr);if(o===null&&(ii(Qr.set(-.5,.5,0),qr,a,Kr,r,i),ti.set(0,1),o=e.ray.intersectTriangle(Zr,$r,Qr,!1,Gr),o===null))return;let s=e.ray.origin.distanceTo(Gr);s<e.near||s>e.far||t.push({distance:s,point:Gr.clone(),uv:$n.getInterpolation(Gr,Zr,Qr,$r,ei,ti,ni,new z),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function ii(e,t,n,r,i,a){Jr.subVectors(e,n).addScalar(.5).multiply(r),i===void 0?Yr.copy(Jr):(Yr.x=a*Jr.x-i*Jr.y,Yr.y=i*Jr.x+a*Jr.y),e.copy(t),e.x+=Yr.x,e.y+=Yr.y,e.applyMatrix4(Xr)}var ai=new B,oi=new B,si=new B,ci=new B,li=class{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ai)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ai.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ai.copy(this.origin).addScaledVector(this.direction,t),ai.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){oi.copy(e).add(t).multiplyScalar(.5),si.copy(t).sub(e).normalize(),ci.copy(this.origin).sub(oi);let i=e.distanceTo(t)*.5,a=-this.direction.dot(si),o=ci.dot(this.direction),s=-ci.dot(si),c=ci.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0){if(u=a*s-o,d=a*o-s,p=i*l,u>=0){if(d>=-p){if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c)}else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(oi).addScaledVector(si,d),f}intersectSphere(e,t){if(e.radius<0)return null;ai.subVectors(e.center,this.origin);let n=ai.dot(this.direction),r=ai.dot(ai)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,ai)!==null}intersectTriangle(e,t,n,r,i){let a=this.origin,o=this.direction,s=o.x,c=o.y,l=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,p=t.x-a.x,m=t.y-a.y,h=t.z-a.z,g=n.x-a.x,_=n.y-a.y,v=n.z-a.z,y=Math.abs(s),b=Math.abs(c),x=Math.abs(l),S,C,w,T,E,D,ee,O,k,te,ne,re;if(y>=b&&y>=x?(w=s,D=u,k=p,re=g,s>=0?(S=c,C=l,T=d,E=f,ee=m,O=h,te=_,ne=v):(S=l,C=c,T=f,E=d,ee=h,O=m,te=v,ne=_)):b>=x?(w=c,D=d,k=m,re=_,c>=0?(S=l,C=s,T=f,E=u,ee=h,O=p,te=v,ne=g):(S=s,C=l,T=u,E=f,ee=p,O=h,te=g,ne=v)):(w=l,D=f,k=h,re=v,l>=0?(S=s,C=c,T=u,E=d,ee=p,O=m,te=g,ne=_):(S=c,C=s,T=d,E=u,ee=m,O=p,te=_,ne=g)),w===0)return null;let A=S/w,ie=C/w,j=1/w,ae=T-A*D,oe=E-ie*D,se=ee-A*k,ce=O-ie*k,le=te-A*re,ue=ne-ie*re,de=le*ce-ue*se,M=ae*ue-oe*le,fe=se*oe-ce*ae;if(r){if(de<0||M<0||fe<0)return null}else if((de<0||M<0||fe<0)&&(de>0||M>0||fe>0))return null;let pe=de+M+fe;if(pe===0)return null;let me=j*(de*D+M*k+fe*re);return(pe>0?me<0:me>0)?null:this.at(me/pe,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ui=class extends Hr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new U(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pn,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},di=new nn,fi=new li,pi=new Tr,mi=new B,hi=new B,gi=new B,_i=new B,vi=new B,yi=new B,bi=new B,xi=new B,W=class extends An{constructor(e=new Nr,t=new ui){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){yi.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(vi.fromBufferAttribute(s,e),a?yi.addScaledVector(vi,r):yi.addScaledVector(vi.sub(t),r))}t.add(yi)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),pi.copy(n.boundingSphere),pi.applyMatrix4(i),fi.copy(e.ray).recast(e.near),!(pi.containsPoint(fi.origin)===!1&&(fi.intersectSphere(pi,mi)===null||fi.origin.distanceToSquared(mi)>(e.far-e.near)**2))&&(di.copy(i).invert(),fi.copy(e.ray).applyMatrix4(di),(n.boundingBox===null||fi.intersectsBox(n.boundingBox)!==!1)&&this._computeIntersections(e,t,fi)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null){if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=Ci(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=Ci(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}else if(s!==void 0){if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=Ci(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=Ci(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}}};function Si(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;xi.copy(s),xi.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(xi);return l<n.near||l>n.far?null:{distance:l,point:xi.clone(),object:e}}function Ci(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,hi),e.getVertexPosition(c,gi),e.getVertexPosition(l,_i);let u=Si(e,t,n,r,hi,gi,_i,bi);if(u){let e=new B;$n.getBarycoord(bi,hi,gi,_i,e),i&&(u.uv=$n.getInterpolatedAttribute(i,s,c,l,e,new z)),a&&(u.uv1=$n.getInterpolatedAttribute(a,s,c,l,e,new z)),o&&(u.normal=$n.getInterpolatedAttribute(o,s,c,l,e,new B),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new B,materialIndex:0};$n.getNormal(hi,gi,_i,t.normal),u.face=t,u.barycoord=e}return u}var wi=class extends Xt{constructor(e=null,t=1,n=1,r,i,o,s,c,l=a,u=a,d,f){super(null,o,s,c,l,u,r,i,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Ti=class extends vr{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Ei=new nn,Di=new nn,Oi=[],ki=new er,Ai=new nn,ji=new W,Mi=new Tr,Ni=class extends W{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ti(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let e=0;e<n;e++)this.setMatrixAt(e,Ai)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new er),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ei),ki.copy(e.boundingBox).applyMatrix4(Ei),this.boundingBox.union(ki)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Tr),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ei),Mi.copy(e.boundingSphere).applyMatrix4(Ei),this.boundingSphere.union(Mi)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,i=e*(n.length+1)+1;for(let e=0;e<n.length;e++)n[e]=r[i+e]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(ji.geometry=this.geometry,ji.material=this.material,ji.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Mi.copy(this.boundingSphere),Mi.applyMatrix4(n),e.ray.intersectsSphere(Mi)!==!1))for(let i=0;i<r;i++){this.getMatrixAt(i,Ei),Di.multiplyMatrices(n,Ei),ji.matrixWorld=Di,ji.raycast(e,Oi);for(let e=0,n=Oi.length;e<n;e++){let n=Oi[e];n.instanceId=i,n.object=this,t.push(n)}Oi.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Ti(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new wi(new Float32Array(r*this.count),r,this.count,O,_));let i=this.morphTexture.source.data.data,a=0;for(let e=0;e<n.length;e++)a+=n[e];let o=this.geometry.morphTargetsRelative?1:1-a,s=r*e;return i[s]=o,i.set(n,s+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Pi=new Tr,Fi=new z(.5,.5),Ii=new B,Li=class{constructor(e=new Br,t=new Br,n=new Br,r=new Br,i=new Br,a=new Br){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ye,n=!1){let r=this.planes,i=e.elements,a=i[0],o=i[1],s=i[2],c=i[3],l=i[4],u=i[5],d=i[6],f=i[7],p=i[8],m=i[9],h=i[10],g=i[11],_=i[12],v=i[13],y=i[14],b=i[15];if(r[0].setComponents(c-a,f-l,g-p,b-_).normalize(),r[1].setComponents(c+a,f+l,g+p,b+_).normalize(),r[2].setComponents(c+o,f+u,g+m,b+v).normalize(),r[3].setComponents(c-o,f-u,g-m,b-v).normalize(),n)r[4].setComponents(s,d,h,y).normalize(),r[5].setComponents(c-s,f-d,g-h,b-y).normalize();else if(r[4].setComponents(c-s,f-d,g-h,b-y).normalize(),t===2e3)r[5].setComponents(c+s,f+d,g+h,b+y).normalize();else if(t===2001)r[5].setComponents(s,d,h,y).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Pi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Pi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Pi)}intersectsSprite(e){return Pi.center.set(0,0,0),Pi.radius=.7071067811865476+Fi.distanceTo(e.center),Pi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Pi)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(Ii.x=r.normal.x>0?e.max.x:e.min.x,Ii.y=r.normal.y>0?e.max.y:e.min.y,Ii.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ii)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Ri=class extends Hr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type=`LineBasicMaterial`,this.color=new U(16777215),this.map=null,this.linewidth=1,this.linecap=`round`,this.linejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},zi=new B,Bi=new B,Vi=new nn,Hi=new li,Ui=new Tr,Wi=new B,Gi=new B,Ki=class extends An{constructor(e=new Nr,t=new Ri){super(),this.isLine=!0,this.type=`Line`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let e=1,r=t.count;e<r;e++)zi.fromBufferAttribute(t,e-1),Bi.fromBufferAttribute(t,e),n[e]=n[e-1],n[e]+=zi.distanceTo(Bi);e.setAttribute(`lineDistance`,new xr(n,1))}else I(`Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ui.copy(n.boundingSphere),Ui.applyMatrix4(r),Ui.radius+=i,e.ray.intersectsSphere(Ui)===!1)return;Vi.copy(r).invert(),Hi.copy(e.ray).applyMatrix4(Vi);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=this.isLineSegments?2:1,l=n.index,u=n.attributes.position;if(l!==null){let n=Math.max(0,a.start),r=Math.min(l.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=l.getX(i),r=l.getX(i+1),a=qi(this,e,Hi,s,n,r,i);a&&t.push(a)}if(this.isLineLoop){let i=l.getX(r-1),a=l.getX(n),o=qi(this,e,Hi,s,i,a,r-1);o&&t.push(o)}}else{let n=Math.max(0,a.start),r=Math.min(u.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=qi(this,e,Hi,s,i,i+1,i);n&&t.push(n)}if(this.isLineLoop){let i=qi(this,e,Hi,s,r-1,n,r-1);i&&t.push(i)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function qi(e,t,n,r,i,a,o){let s=e.geometry.attributes.position;if(zi.fromBufferAttribute(s,i),Bi.fromBufferAttribute(s,a),n.distanceSqToSegment(zi,Bi,Wi,Gi)>r)return;Wi.applyMatrix4(e.matrixWorld);let c=t.ray.origin.distanceTo(Wi);if(!(c<t.near||c>t.far))return{distance:c,point:Gi.clone().applyMatrix4(e.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:e}}var Ji=new B,Yi=new B,Xi=class extends Ki{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type=`LineSegments`}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let e=0,r=t.count;e<r;e+=2)Ji.fromBufferAttribute(t,e),Yi.fromBufferAttribute(t,e+1),n[e]=e===0?0:n[e-1],n[e+1]=n[e]+Ji.distanceTo(Yi);e.setAttribute(`lineDistance`,new xr(n,1))}else I(`LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}},Zi=class extends Hr{constructor(e){super(),this.isPointsMaterial=!0,this.type=`PointsMaterial`,this.color=new U(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Qi=new nn,$i=new li,ea=new Tr,ta=new B,na=class extends An{constructor(e=new Nr,t=new Zi){super(),this.isPoints=!0,this.type=`Points`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ea.copy(n.boundingSphere),ea.applyMatrix4(r),ea.radius+=i,e.ray.intersectsSphere(ea)===!1)return;Qi.copy(r).invert(),$i.copy(e.ray).applyMatrix4(Qi);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=n.index,l=n.attributes.position;if(c!==null){let n=Math.max(0,a.start),i=Math.min(c.count,a.start+a.count);for(let a=n,o=i;a<o;a++){let n=c.getX(a);ta.fromBufferAttribute(l,n),ra(ta,n,s,r,e,t,this)}}else{let n=Math.max(0,a.start),i=Math.min(l.count,a.start+a.count);for(let a=n,o=i;a<o;a++)ta.fromBufferAttribute(l,a),ra(ta,a,s,r,e,t,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function ra(e,t,n,r,i,a,o){let s=$i.distanceSqToPoint(e);if(s<n){let n=new B;$i.closestPointToPoint(e,n),n.applyMatrix4(r);let c=i.ray.origin.distanceTo(n);if(c<i.near||c>i.far)return;a.push({distance:c,distanceToRay:Math.sqrt(s),point:n,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var ia=class extends Xt{constructor(e=[],t=301,n,r,i,a,o,s,c,l){super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},aa=class extends Xt{constructor(e,t,n,r,i,a,o,s,c){super(e,t,n,r,i,a,o,s,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},oa=class extends Xt{constructor(e,t,n=g,r,i,o,s=a,c=a,l,u=D,d=1){if(u!==1026&&u!==1027)throw Error(`THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:e,height:t,depth:d},r,i,o,s,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Kt(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},sa=class extends oa{constructor(e,t=g,n=301,r,i,o=a,s=a,c,l=D){let u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,n,r,i,o,s,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},ca=class extends Xt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},la=class e extends Nr{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new xr(c,3)),this.setAttribute(`normal`,new xr(l,3)),this.setAttribute(`uv`,new xr(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new B;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},ua=class e extends Nr{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new xr(p,3)),this.setAttribute(`normal`,new xr(m,3)),this.setAttribute(`uv`,new xr(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},da=class e extends Nr{constructor(e=1,t=32,n=16,r=0,i=Math.PI*2,a=0,o=Math.PI){super(),this.type=`SphereGeometry`,this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:i,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let s=Math.min(a+o,Math.PI),c=0,l=[],u=new B,d=new B,f=[],p=[],m=[],h=[];for(let f=0;f<=n;f++){let g=[],_=f/n,v=a+_*o,y=e*Math.cos(v),b=Math.sqrt(e*e-y*y),x=0;f===0&&a===0?x=.5/t:f===n&&s===Math.PI&&(x=-.5/t);for(let e=0;e<=t;e++){let n=e/t,a=r+n*i;u.x=-b*Math.cos(a),u.y=y,u.z=b*Math.sin(a),p.push(u.x,u.y,u.z),d.copy(u).normalize(),m.push(d.x,d.y,d.z),h.push(n+x,1-_),g.push(c++)}l.push(g)}for(let e=0;e<n;e++)for(let r=0;r<t;r++){let t=l[e][r+1],i=l[e][r],o=l[e+1][r],c=l[e+1][r+1];(e!==0||a>0)&&f.push(t,i,c),(e!==n-1||s<Math.PI)&&f.push(i,o,c)}this.setIndex(f),this.setAttribute(`position`,new xr(p,3)),this.setAttribute(`normal`,new xr(m,3)),this.setAttribute(`uv`,new xr(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},fa=class extends Nr{constructor(e=null){if(super(),this.type=`WireframeGeometry`,this.parameters={geometry:e},e!==null){let t=[],n=new Set,r=new B,i=new B;if(e.index!==null){let a=e.attributes.position,o=e.index,s=e.groups;s.length===0&&(s=[{start:0,count:o.count,materialIndex:0}]);for(let e=0,c=s.length;e<c;++e){let c=s[e],l=c.start,u=c.count;for(let e=l,s=l+u;e<s;e+=3)for(let s=0;s<3;s++){let c=o.getX(e+s),l=o.getX(e+(s+1)%3);r.fromBufferAttribute(a,c),i.fromBufferAttribute(a,l),pa(r,i,n)===!0&&(t.push(r.x,r.y,r.z),t.push(i.x,i.y,i.z))}}}else{let a=e.attributes.position;for(let e=0,o=a.count/3;e<o;e++)for(let o=0;o<3;o++){let s=3*e+o,c=3*e+(o+1)%3;r.fromBufferAttribute(a,s),i.fromBufferAttribute(a,c),pa(r,i,n)===!0&&(t.push(r.x,r.y,r.z),t.push(i.x,i.y,i.z))}}this.setAttribute(`position`,new xr(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};function pa(e,t,n){let r=`${e.x},${e.y},${e.z}-${t.x},${t.y},${t.z}`,i=`${t.x},${t.y},${t.z}-${e.x},${e.y},${e.z}`;return n.has(r)===!0||n.has(i)===!0?!1:(n.add(r),n.add(i),!0)}function ma(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];if(ga(i))i.isRenderTargetTexture?(I(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone();else if(Array.isArray(i)){if(ga(i[0])){let e=[];for(let t=0,n=i.length;t<n;t++)e[t]=i[t].clone();t[n][r]=e}else t[n][r]=i.slice()}else t[n][r]=i}}return t}function ha(e){let t={};for(let n=0;n<e.length;n++){let r=ma(e[n]);for(let e in r)t[e]=r[e]}return t}function ga(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function _a(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function va(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Bt.workingColorSpace}var ya={clone:ma,merge:ha},ba=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,xa=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Sa=class extends Hr{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ba,this.fragmentShader=xa,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ma(e.uniforms),this.uniformsGroups=_a(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case`t`:this.uniforms[n].value=t[r.value]||null;break;case`c`:this.uniforms[n].value=new U().setHex(r.value);break;case`v2`:this.uniforms[n].value=new z().fromArray(r.value);break;case`v3`:this.uniforms[n].value=new B().fromArray(r.value);break;case`v4`:this.uniforms[n].value=new Zt().fromArray(r.value);break;case`m3`:this.uniforms[n].value=new V().fromArray(r.value);break;case`m4`:this.uniforms[n].value=new nn().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let t in e.extensions)this.extensions[t]=e.extensions[t];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Ca=class extends Sa{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}},wa=class extends Hr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type=`MeshStandardMaterial`,this.defines={STANDARD:``},this.color=new U(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new U(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new z(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:``},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Ta=class extends Hr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=Ve,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Ea=class extends Hr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Da(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}function Oa(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}var ka=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`THREE.Interpolant: Call to abstract method.`)}intervalChanged_(){}},Aa=class extends ka{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ze,endingEnd:ze}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case F:i=e,o=2*t-n;break;case Be:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case F:a=e,s=2*n-t;break;case Be:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},ja=class extends ka{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},Ma=class extends ka{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Na=class extends ka{interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this.inTangents,u=this.outTangents;if(!l||!u){let e=(n-t)/(r-t),l=1-e;for(let t=0;t!==o;++t)i[t]=a[c+t]*l+a[s+t]*e;return i}let d=o*2,f=e-1;for(let p=0;p!==o;++p){let o=a[c+p],m=a[s+p],h=f*d+p*2,g=u[h],_=u[h+1],v=e*d+p*2,y=l[v],b=l[v+1],x=Ia(n,t,g,y,r);i[p]=Pa(x,o,_,b,m)}return i}};function Pa(e,t,n,r,i){let a=1-e;return a*a*a*t+3*a*a*e*n+3*a*e*e*r+e*e*e*i}function Fa(e,t,n,r,i){let a=1-e;return 3*a*a*(n-t)+6*a*e*(r-n)+3*e*e*(i-r)}function Ia(e,t,n,r,i){let a=(e-t)/(i-t);for(let o=0;o<8;o++){let o=Pa(a,t,n,r,i)-e;if(Math.abs(o)<1e-10)break;let s=Fa(a,t,n,r,i);if(Math.abs(s)<1e-10)break;a=Math.max(0,Math.min(1,a-o/s))}return a}var La=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=Da(t,this.TimeBufferType),this.values=Da(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Da(e.times,Array),values:Da(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t),Oa(e.settings)&&(n.settings={inTangents:Da(e.settings.inTangents,Array),outTangents:Da(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Ma(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ja(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Aa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Na(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Ie:t=this.InterpolantFactoryMethodDiscrete;break;case Le:t=this.InterpolantFactoryMethodLinear;break;case Re:t=this.InterpolantFactoryMethodSmooth;break;case P:t=this.InterpolantFactoryMethodBezier}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0){if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t)}return I(`KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ie;case this.InterpolantFactoryMethodLinear:return Le;case this.InterpolantFactoryMethodSmooth:return Re;case this.InterpolantFactoryMethodBezier:return P}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e;Oa(this.settings)&&(Ra(this.settings.inTangents,e),Ra(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(L(`KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(L(`KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){L(`KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){L(`KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&Ze(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){L(`KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Re,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0])){if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,Oa(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function Ra(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]*=t}La.prototype.ValueTypeName=``,La.prototype.TimeBufferType=Float32Array,La.prototype.ValueBufferType=Float32Array,La.prototype.DefaultInterpolation=Le;var za=class extends La{constructor(e,t,n){super(e,t,n)}};za.prototype.ValueTypeName=`bool`,za.prototype.ValueBufferType=Array,za.prototype.DefaultInterpolation=Ie,za.prototype.InterpolantFactoryMethodLinear=void 0,za.prototype.InterpolantFactoryMethodSmooth=void 0;var Ba=class extends La{constructor(e,t,n,r){super(e,t,n,r)}};Ba.prototype.ValueTypeName=`color`;var Va=class extends La{constructor(e,t,n,r){super(e,t,n,r)}};Va.prototype.ValueTypeName=`number`;var Ha=class extends ka{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)Nt.slerpFlat(i,0,a,c-o,a,c,s);return i}},Ua=class extends La{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new Ha(this.times,this.values,this.getValueSize(),e)}};Ua.prototype.ValueTypeName=`quaternion`,Ua.prototype.InterpolantFactoryMethodSmooth=void 0;var Wa=class extends La{constructor(e,t,n){super(e,t,n)}};Wa.prototype.ValueTypeName=`string`,Wa.prototype.ValueBufferType=Array,Wa.prototype.DefaultInterpolation=Ie,Wa.prototype.InterpolantFactoryMethodLinear=void 0,Wa.prototype.InterpolantFactoryMethodSmooth=void 0;var Ga=class extends La{constructor(e,t,n,r){super(e,t,n,r)}};Ga.prototype.ValueTypeName=`vector`;var Ka=class extends An{constructor(e,t=1){super(),this.isLight=!0,this.type=`Light`,this.color=new U(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},qa=class extends Ka{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type=`HemisphereLight`,this.position.copy(An.DEFAULT_UP),this.updateMatrix(),this.groundColor=new U(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Ja=new nn,Ya=new B,Xa=new B,Za=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new z(512,512),this.mapType=d,this.map=null,this.mapPass=null,this.matrix=new nn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Li,this._frameExtents=new z(1,1),this._viewportCount=1,this._viewports=[new Zt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Ya.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ya),Xa.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Xa),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,r){Ja.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Ja,e.coordinateSystem,e.reversedDepth);let i=this._frameExtents,a=r?r.z/i.x:1,o=r?r.w/i.y:1,s=r?r.x/i.x:0,c=r?r.y/i.y:0;e.coordinateSystem===2001||e.reversedDepth?t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(Ja)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Qa=new B,$a=new Nt,eo=new B,to=class extends An{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new nn,this.projectionMatrix=new nn,this.projectionMatrixInverse=new nn,this.coordinateSystem=Ye,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Qa,$a,eo),eo.x===1&&eo.y===1&&eo.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Qa,$a,eo.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Qa,$a,eo),eo.x===1&&eo.y===1&&eo.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Qa,$a,eo.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},no=new B,ro=new z,io=new z,ao=class extends to{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ut*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(lt*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ut*2*Math.atan(Math.tan(lt*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){no.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(no.x,no.y).multiplyScalar(-e/no.z),no.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(no.x,no.y).multiplyScalar(-e/no.z)}getViewSize(e,t){return this.getViewBounds(e,ro,io),t.subVectors(io,ro)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(lt*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},oo=class extends Za{constructor(){super(new ao(90,1,.5,500)),this.isPointLightShadow=!0}},so=class extends Ka{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type=`PointLight`,this.distance=n,this.decay=r,this.shadow=new oo}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},co=class extends to{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},lo=class extends Za{constructor(){super(new co(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},uo=class extends Ka{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type=`DirectionalLight`,this.position.copy(An.DEFAULT_UP),this.updateMatrix(),this.target=new An,this.shadow=new lo}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},fo=class extends Ka{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type=`AmbientLight`}},po=class extends Nr{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type=`InstancedBufferGeometry`,this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}},mo=-90,ho=1,go=class extends An{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new ao(mo,ho,e,t);r.layers=this.layers,this.add(r);let i=new ao(mo,ho,e,t);i.layers=this.layers,this.add(i);let a=new ao(mo,ho,e,t);a.layers=this.layers,this.add(a);let o=new ao(mo,ho,e,t);o.layers=this.layers,this.add(o);let s=new ao(mo,ho,e,t);s.layers=this.layers,this.add(s);let c=new ao(mo,ho,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let h=!1;h=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(n,0,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,i),e.setRenderTarget(n,1,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,4,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},_o=class extends ao{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},vo=`\\[\\]\\.:\\/`,yo=RegExp(`[\\[\\]\\.:\\/]`,`g`),bo=`[^\\[\\]\\.:\\/]`,xo=`[^`+vo.replace(`\\.`,``)+`]`,So=`((?:WC+[\\/:])*)`.replace(`WC`,bo),Co=`(WCOD+)?`.replace(`WCOD`,xo),wo=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,bo),To=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,bo),Eo=RegExp(`^`+So+Co+wo+To+`$`),Do=[`material`,`materials`,`bones`,`map`],Oo=class{constructor(e,t,n){let r=n||ko.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},ko=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(yo,``)}static parseTrackName(e){let t=Eo.exec(e);if(t===null)throw Error(`THREE.PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);Do.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`THREE.PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){I(`PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){L(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){L(`PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){L(`PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){L(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){L(`PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){L(`PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){L(`PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;L(`PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?s=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){L(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){L(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ko.Composite=Oo,ko.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},ko.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},ko.prototype.GetterByBindingType=[ko.prototype._getValue_direct,ko.prototype._getValue_array,ko.prototype._getValue_arrayElement,ko.prototype._getValue_toArray],ko.prototype.SetterByBindingTypeAndVersioning=[[ko.prototype._setValue_direct,ko.prototype._setValue_direct_setNeedsUpdate,ko.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ko.prototype._setValue_array,ko.prototype._setValue_array_setNeedsUpdate,ko.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ko.prototype._setValue_arrayElement,ko.prototype._setValue_arrayElement_setNeedsUpdate,ko.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ko.prototype._setValue_fromArray,ko.prototype._setValue_fromArray_setNeedsUpdate,ko.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Ao=class extends Pr{constructor(e,t,n=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){let t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){let t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}},jo=class{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){let e=1e-6;return this.phi=R(this.phi,e,Math.PI-e),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(R(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};(class e{static{e.prototype.isMatrix2=!0}constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let i=this.elements;return i[0]=e,i[2]=t,i[1]=n,i[3]=r,this}});var Mo=new B,No=new B,Po=new B,Fo=new B,Io=new B,Lo=new B,Ro=new B,zo=class{constructor(e=new B,t=new B){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){Mo.subVectors(e,this.start),No.subVectors(this.end,this.start);let n=No.dot(No);if(n===0)return 0;let r=No.dot(Mo)/n;return t&&(r=R(r,0,1)),r}closestPointToPoint(e,t,n){let r=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(r).add(this.start)}distanceSqToLine3(e,t=Lo,n=Ro){let r=1e-8*1e-8,i,a,o=this.start,s=e.start,c=this.end,l=e.end;Po.subVectors(c,o),Fo.subVectors(l,s),Io.subVectors(o,s);let u=Po.dot(Po),d=Fo.dot(Fo),f=Fo.dot(Io);if(u<=r&&d<=r)return t.copy(o),n.copy(s),t.sub(n),t.dot(t);if(u<=r)i=0,a=f/d,a=R(a,0,1);else{let e=Po.dot(Io);if(d<=r)a=0,i=R(-e/u,0,1);else{let t=Po.dot(Fo),n=u*d-t*t;i=n===0?0:R((t*f-e*d)/n,0,1),a=(t*i+f)/d,a<0?(a=0,i=R(-e/u,0,1)):a>1&&(a=1,i=R((t-e)/u,0,1))}}return t.copy(o).addScaledVector(Po,i),n.copy(s).addScaledVector(Fo,a),t.distanceToSquared(n)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}},Bo=class extends ot{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function Vo(e,t,n,r){let i=Ho(r);switch(n){case w:return e*t;case O:return e*t/i.components*i.byteLength;case k:return e*t/i.components*i.byteLength;case te:return e*t*2/i.components*i.byteLength;case ne:return e*t*2/i.components*i.byteLength;case T:return e*t*3/i.components*i.byteLength;case E:return e*t*4/i.components*i.byteLength;case re:return e*t*4/i.components*i.byteLength;case A:case ie:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case j:case ae:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case se:case le:return Math.max(e,16)*Math.max(t,8)/4;case oe:case ce:return Math.max(e,8)*Math.max(t,8)/2;case ue:case de:case fe:case pe:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case M:case me:case he:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case ge:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case _e:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case ve:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case ye:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case be:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case xe:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case Se:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case Ce:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case we:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case Te:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Ee:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case De:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Oe:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case ke:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Ae:case je:case Me:return Math.ceil(e/4)*Math.ceil(t/4)*16;case Ne:case Pe:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Fe:case N:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function Ho(e){switch(e){case d:case f:return{byteLength:1,components:1};case m:case p:case v:return{byteLength:2,components:1};case y:case b:return{byteLength:2,components:4};case g:case h:case _:return{byteLength:4,components:1};case S:case C:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`186`}})),typeof window<`u`&&(window.__THREE__?I(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`186`);function Uo(){let e=null,t=!1,n=null,r=null;function i(t,a){r=e.requestAnimationFrame(i),n(t,a)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function Wo(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var Go={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
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
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
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
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
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
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
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
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
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
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
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
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,common:`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
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
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
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
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
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
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
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
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
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
#endif
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
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
		return 0.5 / max( gv + gl, EPSILON );
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
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
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
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
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
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
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
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
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
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
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
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
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
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
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
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
	#include <morphinstance_vertex>
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
}`,depth_frag:`#if DEPTH_PACKING == 3200
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distance_vert:`#define DISTANCE
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
	#include <morphinstance_vertex>
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
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
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
	#include <morphinstance_vertex>
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
}`,meshbasic_frag:`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,meshlambert_vert:`#define LAMBERT
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
	#include <morphinstance_vertex>
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
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,meshmatcap_vert:`#define MATCAP
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
	#include <morphinstance_vertex>
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
}`,meshmatcap_frag:`#define MATCAP
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,meshnormal_vert:`#define NORMAL
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
	#include <morphinstance_vertex>
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
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
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
	#include <morphinstance_vertex>
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
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,meshphysical_vert:`#define STANDARD
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
	#include <morphinstance_vertex>
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
}`,meshphysical_frag:`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,meshtoon_vert:`#define TOON
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
	#include <morphinstance_vertex>
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
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,points_vert:`uniform float size;
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
	#include <morphinstance_vertex>
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
}`,points_frag:`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,sprite_frag:`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`},G={common:{diffuse:{value:new U(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new V},alphaMap:{value:null},alphaMapTransform:{value:new V},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new V}},envmap:{envMap:{value:null},envMapRotation:{value:new V},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new V}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new V}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new V},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new V},normalScale:{value:new z(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new V},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new V}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new V}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new V}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new U(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new B},probesMax:{value:new B},probesResolution:{value:new B}},points:{diffuse:{value:new U(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new V},alphaTest:{value:0},uvTransform:{value:new V}},sprite:{diffuse:{value:new U(16777215)},opacity:{value:1},center:{value:new z(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new V},alphaMap:{value:null},alphaMapTransform:{value:new V},alphaTest:{value:0}}},Ko={basic:{uniforms:ha([G.common,G.specularmap,G.envmap,G.aomap,G.lightmap,G.fog]),vertexShader:Go.meshbasic_vert,fragmentShader:Go.meshbasic_frag},lambert:{uniforms:ha([G.common,G.specularmap,G.envmap,G.aomap,G.lightmap,G.emissivemap,G.bumpmap,G.normalmap,G.displacementmap,G.fog,G.lights,{emissive:{value:new U(0)},envMapIntensity:{value:1}}]),vertexShader:Go.meshlambert_vert,fragmentShader:Go.meshlambert_frag},phong:{uniforms:ha([G.common,G.specularmap,G.envmap,G.aomap,G.lightmap,G.emissivemap,G.bumpmap,G.normalmap,G.displacementmap,G.fog,G.lights,{emissive:{value:new U(0)},specular:{value:new U(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Go.meshphong_vert,fragmentShader:Go.meshphong_frag},standard:{uniforms:ha([G.common,G.envmap,G.aomap,G.lightmap,G.emissivemap,G.bumpmap,G.normalmap,G.displacementmap,G.roughnessmap,G.metalnessmap,G.fog,G.lights,{emissive:{value:new U(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Go.meshphysical_vert,fragmentShader:Go.meshphysical_frag},toon:{uniforms:ha([G.common,G.aomap,G.lightmap,G.emissivemap,G.bumpmap,G.normalmap,G.displacementmap,G.gradientmap,G.fog,G.lights,{emissive:{value:new U(0)}}]),vertexShader:Go.meshtoon_vert,fragmentShader:Go.meshtoon_frag},matcap:{uniforms:ha([G.common,G.bumpmap,G.normalmap,G.displacementmap,G.fog,{matcap:{value:null}}]),vertexShader:Go.meshmatcap_vert,fragmentShader:Go.meshmatcap_frag},points:{uniforms:ha([G.points,G.fog]),vertexShader:Go.points_vert,fragmentShader:Go.points_frag},dashed:{uniforms:ha([G.common,G.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Go.linedashed_vert,fragmentShader:Go.linedashed_frag},depth:{uniforms:ha([G.common,G.displacementmap]),vertexShader:Go.depth_vert,fragmentShader:Go.depth_frag},normal:{uniforms:ha([G.common,G.bumpmap,G.normalmap,G.displacementmap,{opacity:{value:1}}]),vertexShader:Go.meshnormal_vert,fragmentShader:Go.meshnormal_frag},sprite:{uniforms:ha([G.sprite,G.fog]),vertexShader:Go.sprite_vert,fragmentShader:Go.sprite_frag},background:{uniforms:{uvTransform:{value:new V},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Go.background_vert,fragmentShader:Go.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new V}},vertexShader:Go.backgroundCube_vert,fragmentShader:Go.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Go.cube_vert,fragmentShader:Go.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Go.equirect_vert,fragmentShader:Go.equirect_frag},distance:{uniforms:ha([G.common,G.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Go.distance_vert,fragmentShader:Go.distance_frag},shadow:{uniforms:ha([G.lights,G.fog,{color:{value:new U(0)},opacity:{value:1}}]),vertexShader:Go.shadow_vert,fragmentShader:Go.shadow_frag}};Ko.physical={uniforms:ha([Ko.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new V},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new V},clearcoatNormalScale:{value:new z(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new V},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new V},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new V},sheen:{value:0},sheenColor:{value:new U(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new V},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new V},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new V},transmissionSamplerSize:{value:new z},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new V},attenuationDistance:{value:0},attenuationColor:{value:new U(0)},specularColor:{value:new U(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new V},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new V},anisotropyVector:{value:new z},anisotropyMap:{value:null},anisotropyMapTransform:{value:new V}}]),vertexShader:Go.meshphysical_vert,fragmentShader:Go.meshphysical_frag};var qo={r:0,b:0,g:0},Jo=new nn,Yo=new V;Yo.set(-1,0,0,0,1,0,0,0,1);function Xo(e,t,n,r,i,a){let o=new U(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&(i.isCubeTexture||i.mapping===306)?(l===void 0&&(l=new W(new la(1,1,1),new Sa({name:`BackgroundCubeMaterial`,uniforms:ma(Ko.backgroundCube.uniforms),vertexShader:Ko.backgroundCube.vertexShader,fragmentShader:Ko.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Jo.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isCubeTexture&&i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Yo),l.material.toneMapped=Bt.getTransfer(i.colorSpace)!==Ge,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new W(new ua(2,2),new Sa({name:`BackgroundMaterial`,uniforms:ma(Ko.background.uniforms),vertexShader:Ko.background.vertexShader,fragmentShader:Ko.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=Bt.getTransfer(i.colorSpace)!==Ge,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB(qo,va(e)),n.buffers.color.setClear(qo.r,qo.g,qo.b,r,a)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:_}}function Zo(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.stride,p=s.offset;if(t.isInstancedInterleavedBuffer){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function Qo(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function $o(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&n!==1015&&!i&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(I(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`);n.reversedDepthBuffer===!0&&f===!1&&I(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function es(e){let t=this,n=null,r=0,i=!1,a=!1,o=new Br,s=new V,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var ts=4,ns=6,rs=20,is=256,as=new co,os=new U,ss=null,cs=0,ls=0,us=!1,ds=new B,fs=new B,ps=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=ds}=i;ss=this._renderer.getRenderTarget(),cs=this._renderer.getActiveCubeFace(),ls=this._renderer.getActiveMipmapLevel(),us=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s,o),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=bs(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ys(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=2**this._lodMax}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(ss,cs,ls),this._renderer.xr.enabled=us,e.scissorTest=!1,gs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ss=this._renderer.getRenderTarget(),cs=this._renderer.getActiveCubeFace(),ls=this._renderer.getActiveMipmapLevel(),us=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:c,minFilter:c,generateMipmaps:!1,type:v,format:E,colorSpace:Ue,depthBuffer:!1},r=hs(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=hs(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=ms(r)),this._blurMaterial=vs(r,e,t),this._ggxMaterial=_s(r,e,t)}return r}_compileMaterial(e){let t=new W(new Nr,e);this._renderer.compile(t,as)}_sceneToCubeUV(e,t,n,r,i){let a=new ao(90,1,t,n),o=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],c=this._renderer,l=c.autoClear,u=c.toneMapping;c.getClearColor(os),c.toneMapping=0,c.autoClear=!1,c.state.buffers.depth.getReversed()&&(c.setRenderTarget(r),c.clearDepth(),c.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new W(new la,new ui({name:`PMREM.Background`,side:1,depthWrite:!1,depthTest:!1})));let d=this._backgroundBox,f=d.material,p=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,p=!0):(f.color.copy(os),p=!0);for(let t=0;t<6;t++){let n=t%3;n===0?(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x+s[t],i.y,i.z)):n===1?(a.up.set(0,0,o[t]),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y+s[t],i.z)):(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y,i.z+s[t]));let l=this._cubeSize;gs(r,n*l,t>2?l:0,l,l),c.setRenderTarget(r),p&&c.render(d,a),c.render(e,a)}c.toneMapping=u,c.autoClear=l,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=bs()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ys());let i=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=i;let o=i.uniforms;o.envMap.value=e;let s=this._cubeSize;gs(t,0,0,3*s,2*s),n.setRenderTarget(t),n.render(a,as)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let t=1;t<r;t++)this._applyGGXFilter(e,t-1,t);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,i=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let s=a.uniforms,c=n/(this._lodMeshes.length-1),l=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-l*l)*(c*1.25),{_lodMax:d}=this,f=this._sizeLods[n],p=3*f*(n>d-ts?n-d+ts:0),m=4*(this._cubeSize-f);s.envMap.value=e.texture,s.roughness.value=u,s.mipInt.value=d-t,gs(i,p,m,3*f,2*f),r.setRenderTarget(i),r.render(o,as),s.envMap.value=i.texture,s.roughness.value=0,s.mipInt.value=d-n,gs(e,p,m,3*f,2*f),r.setRenderTarget(e),r.render(o,as)}_blur(e,t,n,r){let i=this._pingPongRenderTarget,a=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,i,t,n,a),this._blurPass(i,e,n,n,a)}_blurPass(e,t,n,r,i){let a=this._renderer,o=this._blurMaterial,s=this._lodMeshes[r];s.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=i,c.mipInt.value=this._lodMax-n;let l=this._sizeLods[r];gs(t,3*l*(r>this._lodMax-ts?r-this._lodMax+ts:0),4*(this._cubeSize-l),3*l,2*l),a.setRenderTarget(t),a.render(s,as)}};function ms(e){let t=[],n=[],r=e,i=e-ts+1+ns;for(let e=0;e<i;e++){let e=2**r;t.push(e);let i=1/(e-2),a=-i,o=1+i,s=[a,a,o,a,o,o,a,a,o,o,a,o],c=new Float32Array(108),l=new Float32Array(108);for(let e=0;e<6;e++){let t=e%3*2/3-1,n=e>2?0:-1,r=[t,n,0,t+2/3,n,0,t+2/3,n+1,0,t,n,0,t+2/3,n+1,0,t,n+1,0];c.set(r,18*e);for(let t=0;t<6;t++){let n=s[t*2]*2-1,r=s[t*2+1]*2-1;e===0?fs.set(1,r,n):e===1?fs.set(-n,1,-r):e===2?fs.set(-n,r,1):e===3?fs.set(-1,r,-n):e===4?fs.set(-n,-1,r):fs.set(n,r,-1),fs.toArray(l,(e*6+t)*3)}}let u=new Nr;u.setAttribute(`position`,new vr(c,3)),u.setAttribute(`outputDirection`,new vr(l,3)),n.push(new W(u,null)),r>ts&&r--}return{lodMeshes:n,sizeLods:t}}function hs(e,t,n){let r=new $t(e,t,n);return r.texture.mapping=306,r.texture.name=`PMREM.cubeUv`,r.scissorTest=!0,r}function gs(e,t,n,r,i){e.viewport.set(t,n,r,i),e.scissor.set(t,n,r,i)}function _s(e,t,n){return new Sa({name:`PMREMGGXConvolution`,defines:{GGX_SAMPLES:is,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:xs(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function vs(e,t,n){return new Sa({name:`SphericalGaussianBlur`,defines:{SAMPLES:rs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:xs(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function ys(){return new Sa({name:`EquirectangularToCubeUV`,uniforms:{envMap:{value:null}},vertexShader:xs(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function bs(){return new Sa({name:`CubemapToCubeUV`,uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:xs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function xs(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Ss=class extends $t{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new ia(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new la(5,5,5),i=new Sa({name:`CubemapFromEquirect`,uniforms:ma(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new W(r,i),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=c),new go(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}};function Cs(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304){if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}{let r=n.image;if(r&&r.height>0){let i=new Ss(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}return null}}}return n}function o(t){if(t&&t.isTexture){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new ps(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new ps(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function ws(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&rt(`WebGLRenderer: `+e+` extension not supported.`),t}}}function Ts(e,t,n,r){let i={},a=new WeakMap;function o(e){let s=e.target;s.index!==null&&t.remove(s.index);for(let e in s.attributes)t.remove(s.attributes[e]);s.removeEventListener(`dispose`,o),delete i[s.id];let c=a.get(s);c&&(t.remove(c),a.delete(s)),r.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,n.memory.geometries--}function s(e,t){return i[t.id]===!0||(t.addEventListener(`dispose`,o),i[t.id]=!0,n.memory.geometries++),t}function c(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function l(e){let n=[],r=e.index,i=e.attributes.position,o=0;if(i===void 0)return;if(r!==null){let e=r.array;o=r.version;for(let t=0,r=e.length;t<r;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];n.push(r,i,i,a,a,r)}}else{let e=i.array;o=i.version;for(let t=0,r=e.length/3-1;t<r;t+=3){let e=t+0,r=t+1,i=t+2;n.push(e,r,r,i,i,e)}}let s=new(i.count>=65535?br:yr)(n,1);s.version=o;let c=a.get(e);c&&t.remove(c),a.set(e,s)}function u(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&l(e)}else l(e);return a.get(e)}return{get:s,update:c,getWireframeAttribute:u}}function Es(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function Ds(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:L(`WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function Os(e,t,n){let r=new WeakMap,i=new Zt;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let h=new Float32Array(p*m*4*u),g=new en(h,p,m,u);g.type=_,g.needsUpdate=!0;let v=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*v;e===!0&&(i.fromBufferAttribute(r,t),h[d+s+0]=i.x,h[d+s+1]=i.y,h[d+s+2]=i.z,h[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),h[d+s+4]=i.x,h[d+s+5]=i.y,h[d+s+6]=i.z,h[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),h[d+s+8]=i.x,h[d+s+9]=i.y,h[d+s+10]=i.z,h[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:g,size:new z(p,m)},r.set(o,d);function y(){g.dispose(),r.delete(o),o.removeEventListener(`dispose`,y)}o.addEventListener(`dispose`,y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function ks(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var As={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function js(e,t,n,r,i,a){let o=new $t(t,n,{type:e,depthBuffer:i,stencilBuffer:a,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),s=null,c=null,l=new Nr;l.setAttribute(`position`,new xr([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute(`uv`,new xr([0,2,0,0,2,0],2));let u=new Ca({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new W(l,u),f=new co(-1,1,1,-1,0,1),p=null,m=null,h=!1,g,_=null,y=[],b=!1;this.setSize=function(e,t){o.setSize(e,t),s!==null&&s.setSize(e,t),c!==null&&c.setSize(e,t);for(let n=0;n<y.length;n++){let r=y[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){y=e,b=y.length>0&&y[0].isRenderPass===!0;let t=o.width,n=o.height;y.length>0&&s===null&&(s=new $t(t,n,{type:v,depthBuffer:!1,stencilBuffer:!1}),c=new $t(t,n,{type:v,depthBuffer:!1,stencilBuffer:!1}));for(let e=0;e<y.length;e++){let r=y[e];r.setSize&&r.setSize(t,n)}},this.begin=function(e,t){if(h||e.toneMapping===0&&y.length===0)return!1;if(_=t,t!==null){let e=t.width,n=t.height;(o.width!==e||o.height!==n)&&this.setSize(e,n)}return b===!1&&e.setRenderTarget(o),g=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return b},this.end=function(e,t){e.toneMapping=g,h=!0;let n=o,r=s;for(let i=0;i<y.length;i++){let a=y[i];a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1&&(n=r,r=r===s?c:s))}if(p!==e.outputColorSpace||m!==e.toneMapping){p=e.outputColorSpace,m=e.toneMapping,u.defines={},Bt.getTransfer(p)===`srgb`&&(u.defines.SRGB_TRANSFER=``);let t=As[m];t&&(u.defines[t]=``),u.needsUpdate=!0}u.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(_),e.render(d,f),_=null,h=!1},this.isCompositing=function(){return h},this.dispose=function(){o.dispose(),s!==null&&s.dispose(),c!==null&&c.dispose(),l.dispose(),u.dispose()}}var Ms=new Xt,Ns=new oa(1,1),Ps=new en,Fs=new tn,Is=new ia,Ls=[],Rs=[],zs=new Float32Array(16),Bs=new Float32Array(9),Vs=new Float32Array(4);function Hs(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=Ls[i];if(a===void 0&&(a=new Float32Array(i),Ls[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function Us(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function Ws(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function Gs(e,t){let n=Rs[t];n===void 0&&(n=new Int32Array(t),Rs[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function Ks(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function qs(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Us(n,t))return;e.uniform2fv(this.addr,t),Ws(n,t)}}function Js(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Us(n,t))return;e.uniform3fv(this.addr,t),Ws(n,t)}}function Ys(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Us(n,t))return;e.uniform4fv(this.addr,t),Ws(n,t)}}function Xs(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Us(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),Ws(n,t)}else{if(Us(n,r))return;Vs.set(r),e.uniformMatrix2fv(this.addr,!1,Vs),Ws(n,r)}}function Zs(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Us(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),Ws(n,t)}else{if(Us(n,r))return;Bs.set(r),e.uniformMatrix3fv(this.addr,!1,Bs),Ws(n,r)}}function Qs(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Us(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),Ws(n,t)}else{if(Us(n,r))return;zs.set(r),e.uniformMatrix4fv(this.addr,!1,zs),Ws(n,r)}}function $s(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function ec(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Us(n,t))return;e.uniform2iv(this.addr,t),Ws(n,t)}}function tc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Us(n,t))return;e.uniform3iv(this.addr,t),Ws(n,t)}}function nc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Us(n,t))return;e.uniform4iv(this.addr,t),Ws(n,t)}}function rc(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function ic(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Us(n,t))return;e.uniform2uiv(this.addr,t),Ws(n,t)}}function ac(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Us(n,t))return;e.uniform3uiv(this.addr,t),Ws(n,t)}}function oc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Us(n,t))return;e.uniform4uiv(this.addr,t),Ws(n,t)}}function sc(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;this.type===e.SAMPLER_2D_SHADOW?(Ns.compareFunction=n.isReversedDepthBuffer()?518:515,a=Ns):a=Ms,n.setTexture2D(t||a,i)}function cc(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||Fs,i)}function lc(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(t||Is,i)}function uc(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||Ps,i)}function dc(e){switch(e){case 5126:return Ks;case 35664:return qs;case 35665:return Js;case 35666:return Ys;case 35674:return Xs;case 35675:return Zs;case 35676:return Qs;case 5124:case 35670:return $s;case 35667:case 35671:return ec;case 35668:case 35672:return tc;case 35669:case 35673:return nc;case 5125:return rc;case 36294:return ic;case 36295:return ac;case 36296:return oc;case 35678:case 36198:case 36298:case 36306:case 35682:return sc;case 35679:case 36299:case 36307:return cc;case 35680:case 36300:case 36308:case 36293:return lc;case 36289:case 36303:case 36311:case 36292:return uc}}function fc(e,t){e.uniform1fv(this.addr,t)}function pc(e,t){let n=Hs(t,this.size,2);e.uniform2fv(this.addr,n)}function mc(e,t){let n=Hs(t,this.size,3);e.uniform3fv(this.addr,n)}function hc(e,t){let n=Hs(t,this.size,4);e.uniform4fv(this.addr,n)}function gc(e,t){let n=Hs(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function _c(e,t){let n=Hs(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function vc(e,t){let n=Hs(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function yc(e,t){e.uniform1iv(this.addr,t)}function bc(e,t){e.uniform2iv(this.addr,t)}function xc(e,t){e.uniform3iv(this.addr,t)}function Sc(e,t){e.uniform4iv(this.addr,t)}function Cc(e,t){e.uniform1uiv(this.addr,t)}function wc(e,t){e.uniform2uiv(this.addr,t)}function Tc(e,t){e.uniform3uiv(this.addr,t)}function Ec(e,t){e.uniform4uiv(this.addr,t)}function Dc(e,t,n){let r=this.cache,i=t.length,a=Gs(n,i);Us(r,a)||(e.uniform1iv(this.addr,a),Ws(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?Ns:Ms;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function Oc(e,t,n){let r=this.cache,i=t.length,a=Gs(n,i);Us(r,a)||(e.uniform1iv(this.addr,a),Ws(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||Fs,a[e])}function kc(e,t,n){let r=this.cache,i=t.length,a=Gs(n,i);Us(r,a)||(e.uniform1iv(this.addr,a),Ws(r,a));for(let e=0;e!==i;++e)n.setTextureCube(t[e]||Is,a[e])}function Ac(e,t,n){let r=this.cache,i=t.length,a=Gs(n,i);Us(r,a)||(e.uniform1iv(this.addr,a),Ws(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||Ps,a[e])}function jc(e){switch(e){case 5126:return fc;case 35664:return pc;case 35665:return mc;case 35666:return hc;case 35674:return gc;case 35675:return _c;case 35676:return vc;case 5124:case 35670:return yc;case 35667:case 35671:return bc;case 35668:case 35672:return xc;case 35669:case 35673:return Sc;case 5125:return Cc;case 36294:return wc;case 36295:return Tc;case 36296:return Ec;case 35678:case 36198:case 36298:case 36306:case 35682:return Dc;case 35679:case 36299:case 36307:return Oc;case 35680:case 36300:case 36308:case 36293:return kc;case 36289:case 36303:case 36311:case 36292:return Ac}}var Mc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=dc(t.type)}},Nc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=jc(t.type)}},Pc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},Fc=/(\w+)(\])?(\[|\.)?/g;function Ic(e,t){e.seq.push(t),e.map[t.id]=t}function Lc(e,t,n){let r=e.name,i=r.length;for(Fc.lastIndex=0;;){let a=Fc.exec(r),o=Fc.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){Ic(n,l===void 0?new Mc(s,e,t):new Nc(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new Pc(s),Ic(n,e)),n=e}}}var Rc=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);Lc(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function zc(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var Bc=37297,Vc=0;function Hc(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var Uc=new V;function Wc(e){Bt._getMatrix(Uc,Bt.workingColorSpace,e);let t=`mat3( ${Uc.elements.map(e=>e.toFixed(4))} )`;switch(Bt.getTransfer(e)){case We:return[t,`LinearTransferOETF`];case Ge:return[t,`sRGBTransferOETF`];default:return I(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function Gc(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+Hc(e.getShaderSource(t),r)}return i}function Kc(e,t){let n=Wc(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,`}`].join(`
`)}var qc={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function Jc(e,t){let n=qc[t];return n===void 0?(I(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var Yc=new B;function Xc(){return Bt.getLuminanceCoefficients(Yc),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${Yc.x.toFixed(4)}, ${Yc.y.toFixed(4)}, ${Yc.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function Zc(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(el).join(`
`)}function Qc(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function $c(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function el(e){return e!==``}function tl(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function nl(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var rl=/^[ \t]*#include +<([\w\d./]+)>/gm;function il(e){return e.replace(rl,ol)}var al=new Map;function ol(e,t){let n=Go[t];if(n===void 0){let e=al.get(t);if(e!==void 0)n=Go[e],I(`WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.`,t,e);else throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`)}return il(n)}var sl=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function cl(e){return e.replace(sl,ll)}function ll(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function ul(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}var dl={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function fl(e){return dl[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var pl={301:`ENVMAP_TYPE_CUBE`,302:`ENVMAP_TYPE_CUBE`,306:`ENVMAP_TYPE_CUBE_UV`};function ml(e){return e.envMap===!1?`ENVMAP_TYPE_CUBE`:pl[e.envMapMode]||`ENVMAP_TYPE_CUBE`}var hl={302:`ENVMAP_MODE_REFRACTION`};function gl(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:hl[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var _l={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function vl(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:_l[e.combine]||`ENVMAP_BLENDING_NONE`}function yl(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(2**n,112)),texelHeight:r,maxMip:n}}function bl(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=fl(n),l=ml(n),u=gl(n),d=vl(n),f=yl(n),p=Zc(n),m=Qc(a),h=i.createProgram(),g,_,v=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(el).join(`
`),g.length>0&&(g+=`
`),_=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(el).join(`
`),_.length>0&&(_+=`
`)):(g=[ul(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(el).join(`
`),_=[ul(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,f?`#define CUBEUV_TEXEL_WIDTH `+f.texelWidth:``,f?`#define CUBEUV_TEXEL_HEIGHT `+f.texelHeight:``,f?`#define CUBEUV_MAX_MIP `+f.maxMip+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.retroreflection?`#define USE_RETROREFLECTION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.numLightProbeGrids>0?`#define USE_LIGHT_PROBES_GRID`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:Go.tonemapping_pars_fragment,n.toneMapping===0?``:Jc(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,Go.colorspace_pars_fragment,Kc(`linearToOutputTexel`,n.outputColorSpace),Xc(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(el).join(`
`)),o=il(o),o=tl(o,n),o=nl(o,n),s=il(s),s=tl(s,n),s=nl(s,n),o=cl(o),s=cl(s),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[p,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+g,_=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+_);let y=v+g+o,b=v+_+s,x=zc(i,i.VERTEX_SHADER,y),S=zc(i,i.FRAGMENT_SHADER,b);i.attachShader(h,x),i.attachShader(h,S),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&i.bindAttribLocation(h,0,`position`):i.bindAttribLocation(h,0,n.index0AttributeName),i.linkProgram(h);function C(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(h)||``,r=i.getShaderInfoLog(x)||``,a=i.getShaderInfoLog(S)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(h,i.LINK_STATUS)===!1){if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,h,x,S);else{let e=Gc(i,x,`vertex`),n=Gc(i,S,`fragment`);L(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(h,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}}else o===``?(s===``||c===``)&&(u=!1):I(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:g},fragmentShader:{log:c,prefix:_}})}i.deleteShader(x),i.deleteShader(S),w=new Rc(i,h),T=$c(i,h)}let w;this.getUniforms=function(){return w===void 0&&C(this),w};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(h,Bc)),E},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(h),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Vc++,this.cacheKey=t,this.usedTimes=1,this.program=h,this.vertexShader=x,this.fragmentShader=S,this}var xl=0,Sl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Cl(e),t.set(e,n)),n}},Cl=class{constructor(e){this.id=xl++,this.code=e,this.usedTimes=0}};function wl(e){return e===1030||e===37490||e===36285}function Tl(e,t,n,r,i,a){let o=new mn,s=new Sl,c=new Set,l=[],u=new Map,d=r.logarithmicDepthBuffer,f=r.precision,p={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function m(e){return c.add(e),e===0?`uv`:`uv${e}`}function h(i,o,l,u,h,g){let _=u.fog,v=h.geometry,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,b=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,x=t.get(i.envMap||y,b),S=x&&x.mapping===306?x.image.height:null,C=p[i.type];i.precision!==null&&(f=r.getMaxPrecision(i.precision),f!==i.precision&&I(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,f,`instead.`));let w=v.morphAttributes.position||v.morphAttributes.normal||v.morphAttributes.color,T=w===void 0?0:w.length,E=0;v.morphAttributes.position!==void 0&&(E=1),v.morphAttributes.normal!==void 0&&(E=2),v.morphAttributes.color!==void 0&&(E=3);let D,ee,O,k;if(C){let e=Ko[C];D=e.vertexShader,ee=e.fragmentShader}else{D=i.vertexShader,ee=i.fragmentShader;let e=s.getVertexShaderStage(i),t=s.getFragmentShaderStage(i);s.update(i,e,t),O=e.id,k=t.id}let te=e.getRenderTarget(),ne=e.state.buffers.depth.getReversed(),re=h.isInstancedMesh===!0,A=h.isBatchedMesh===!0,ie=!!i.map,j=!!i.matcap,ae=!!x,oe=!!i.aoMap,se=!!i.lightMap,ce=!!i.bumpMap&&i.wireframe===!1,le=!!i.normalMap,ue=!!i.displacementMap,de=!!i.emissiveMap,M=!!i.metalnessMap,fe=!!i.roughnessMap,pe=i.anisotropy>0,me=i.clearcoat>0,he=i.dispersion>0,ge=i.retroreflectivity>0,_e=i.iridescence>0,ve=i.sheen>0,ye=i.transmission>0,be=pe&&!!i.anisotropyMap,xe=me&&!!i.clearcoatMap,Se=me&&!!i.clearcoatNormalMap,Ce=me&&!!i.clearcoatRoughnessMap,we=_e&&!!i.iridescenceMap,Te=_e&&!!i.iridescenceThicknessMap,Ee=ve&&!!i.sheenColorMap,De=ve&&!!i.sheenRoughnessMap,Oe=!!i.specularMap,ke=!!i.specularColorMap,Ae=!!i.specularIntensityMap,je=ye&&!!i.transmissionMap,Me=ye&&!!i.thicknessMap,Ne=!!i.gradientMap,Pe=!!i.alphaMap,Fe=i.alphaTest>0,N=!!i.alphaHash,Ie=!!i.extensions,Le=0;i.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(Le=e.toneMapping);let Re={shaderID:C,shaderType:i.type,shaderName:i.name,vertexShader:D,fragmentShader:ee,defines:i.defines,customVertexShaderID:O,customFragmentShaderID:k,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:f,batching:A,batchingColor:A&&h._colorsTexture!==null,instancing:re,instancingColor:re&&h.instanceColor!==null,instancingMorph:re&&h.morphTexture!==null,outputColorSpace:te===null?e.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:Bt.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:ie,matcap:j,envMap:ae,envMapMode:ae&&x.mapping,envMapCubeUVHeight:S,aoMap:oe,lightMap:se,bumpMap:ce,normalMap:le,displacementMap:ue,emissiveMap:de,normalMapObjectSpace:le&&i.normalMapType===1,normalMapTangentSpace:le&&i.normalMapType===0,packedNormalMap:le&&i.normalMapType===0&&wl(i.normalMap.format),metalnessMap:M,roughnessMap:fe,anisotropy:pe,anisotropyMap:be,clearcoat:me,clearcoatMap:xe,clearcoatNormalMap:Se,clearcoatRoughnessMap:Ce,dispersion:he,retroreflection:ge,iridescence:_e,iridescenceMap:we,iridescenceThicknessMap:Te,sheen:ve,sheenColorMap:Ee,sheenRoughnessMap:De,specularMap:Oe,specularColorMap:ke,specularIntensityMap:Ae,transmission:ye,transmissionMap:je,thicknessMap:Me,gradientMap:Ne,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:Pe,alphaTest:Fe,alphaHash:N,combine:i.combine,mapUv:ie&&m(i.map.channel),aoMapUv:oe&&m(i.aoMap.channel),lightMapUv:se&&m(i.lightMap.channel),bumpMapUv:ce&&m(i.bumpMap.channel),normalMapUv:le&&m(i.normalMap.channel),displacementMapUv:ue&&m(i.displacementMap.channel),emissiveMapUv:de&&m(i.emissiveMap.channel),metalnessMapUv:M&&m(i.metalnessMap.channel),roughnessMapUv:fe&&m(i.roughnessMap.channel),anisotropyMapUv:be&&m(i.anisotropyMap.channel),clearcoatMapUv:xe&&m(i.clearcoatMap.channel),clearcoatNormalMapUv:Se&&m(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ce&&m(i.clearcoatRoughnessMap.channel),iridescenceMapUv:we&&m(i.iridescenceMap.channel),iridescenceThicknessMapUv:Te&&m(i.iridescenceThicknessMap.channel),sheenColorMapUv:Ee&&m(i.sheenColorMap.channel),sheenRoughnessMapUv:De&&m(i.sheenRoughnessMap.channel),specularMapUv:Oe&&m(i.specularMap.channel),specularColorMapUv:ke&&m(i.specularColorMap.channel),specularIntensityMapUv:Ae&&m(i.specularIntensityMap.channel),transmissionMapUv:je&&m(i.transmissionMap.channel),thicknessMapUv:Me&&m(i.thicknessMap.channel),alphaMapUv:Pe&&m(i.alphaMap.channel),vertexTangents:!!v.attributes.tangent&&(le||pe),vertexNormals:!!v.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!v.attributes.color&&v.attributes.color.itemSize===4,pointsUvs:h.isPoints===!0&&!!v.attributes.uv&&(ie||Pe),fog:!!_,useFog:i.fog===!0,fogExp2:!!_&&_.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||v.attributes.normal===void 0&&le===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ne,skinning:h.isSkinnedMesh===!0,hasPositionAttribute:v.attributes.position!==void 0,morphTargets:v.morphAttributes.position!==void 0,morphNormals:v.morphAttributes.normal!==void 0,morphColors:v.morphAttributes.color!==void 0,morphTargetsCount:T,morphTextureStride:E,numSunLights:o.sun.length,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numSunLightShadows:o.sunShadowMap.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numLightProbeGrids:g.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:Le,decodeVideoTexture:ie&&i.map.isVideoTexture===!0&&Bt.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:de&&i.emissiveMap.isVideoTexture===!0&&Bt.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:Ie&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(Ie&&i.extensions.multiDraw===!0||A)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return Re.vertexUv1s=c.has(1),Re.vertexUv2s=c.has(2),Re.vertexUv3s=c.has(3),c.clear(),Re}function g(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(_(n,t),v(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function _(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapCubeUVHeight),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.morphAttributeCount),e.push(t.numSunLights),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numSunLightShadows),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function v(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.retroreflection&&o.enable(24),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),t.packedNormalMap&&o.enable(22),t.vertexNormals&&o.enable(23),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),t.numLightProbeGrids>0&&o.enable(22),t.hasPositionAttribute&&o.enable(23),e.push(o.mask)}function y(e){let t=p[e.type],n;if(t){let e=Ko[t];n=ya.clone(e.uniforms)}else n=e.uniforms;return n}function b(t,n){let r=u.get(n);return r===void 0?(r=new bl(e,n,t,i),l.push(r),u.set(n,r)):++r.usedTimes,r}function x(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),u.delete(e.cacheKey),e.destroy()}}function S(e){s.remove(e)}function C(){s.dispose()}return{getParameters:h,getProgramCacheKey:g,getUniforms:y,acquireProgram:b,releaseProgram:x,releaseShaderCache:S,programs:l,dispose:C}}function El(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function Dl(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Ol(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function kl(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l,u){u.reversedDepth===!0&&(c=-c);let d=s(e,t,a,o,c,l);a.transmission>0?r.push(d):a.transparent===!0?i.push(d):n.push(d)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t){n.length>1&&n.sort(e||Dl),r.length>1&&r.sort(t||Ol),i.length>1&&i.sort(t||Ol)}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function Al(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new kl,e.set(t,[i])):n>=r.length?(i=new kl,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function jl(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={direction:new B,color:new U};break;case`SpotLight`:n={position:new B,direction:new B,color:new U,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new B,color:new U,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new B,skyColor:new U,groundColor:new U};break;case`RectAreaLight`:n={color:new U,position:new B,halfWidth:new B,halfHeight:new B}}return e[t.id]=n,n}}}function Ml(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new z};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new z};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new z,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var Nl=0;function Pl(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function Fl(e){let t=new jl,n=Ml(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new B);let i=new B,a=new nn,o=new nn;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0,y=0,b=0,x=0;i.sort(Pl);for(let e=0,S=i.length;e<S;e++){let S=i[e],C=S.color,w=S.intensity,T=S.distance,E=null;if(S.shadow&&S.shadow.map&&(E=S.shadow.map.texture.format===1030?S.shadow.map.texture:S.shadow.map.depthTexture||S.shadow.map.texture),S.isAmbientLight)a+=C.r*w,o+=C.g*w,s+=C.b*w;else if(S.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(S.sh.coefficients[e],w);x++}else if(S.isSunLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize.copy(e.mapSize).multiply(e.getFrameExtents()),r.sunShadow[l]=t,r.sunShadowMap[l]=E;let i=e.getViewportCount();for(let t=0;t<i;t++)r.sunShadowMatrix[u+t]=e.getMatrix(t),r.sunShadowCascade[u+t]=e._cascadeData[t];u+=i,l++}r.sun[c]=e,c++}else if(S.isDirectionalLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[d]=t,r.directionalShadowMap[d]=E,r.directionalShadowMatrix[d]=S.shadow.matrix,g++}r.directional[d]=e,d++}else if(S.isSpotLight){let e=t.get(S);e.position.setFromMatrixPosition(S.matrixWorld),e.color.copy(C).multiplyScalar(w),e.distance=T,e.coneCos=Math.cos(S.angle),e.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),e.decay=S.decay,r.spot[p]=e;let i=S.shadow;if(S.map&&(r.spotLightMap[y]=S.map,y++,i.updateMatrices(S),S.castShadow&&b++),r.spotLightMatrix[p]=i.matrix,S.castShadow){let e=n.get(S);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[p]=e,r.spotShadowMap[p]=E,v++}p++}else if(S.isRectAreaLight){let e=t.get(S);e.color.copy(C).multiplyScalar(w),e.halfWidth.set(S.width*.5,0,0),e.halfHeight.set(0,S.height*.5,0),r.rectArea[m]=e,m++}else if(S.isPointLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),e.distance=S.distance,e.decay=S.decay,S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[f]=t,r.pointShadowMap[f]=E,r.pointShadowMatrix[f]=S.shadow.matrix,_++}r.point[f]=e,f++}else if(S.isHemisphereLight){let e=t.get(S);e.skyColor.copy(S.color).multiplyScalar(w),e.groundColor.copy(S.groundColor).multiplyScalar(w),r.hemi[h]=e,h++}}m>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=G.LTC_FLOAT_1,r.rectAreaLTC2=G.LTC_FLOAT_2):(r.rectAreaLTC1=G.LTC_HALF_1,r.rectAreaLTC2=G.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let S=r.hash;(S.sunLength!==c||S.directionalLength!==d||S.pointLength!==f||S.spotLength!==p||S.rectAreaLength!==m||S.hemiLength!==h||S.numSunShadows!==l||S.numDirectionalShadows!==g||S.numPointShadows!==_||S.numSpotShadows!==v||S.numSpotMaps!==y||S.numLightProbes!==x)&&(r.sun.length=c,r.directional.length=d,r.spot.length=p,r.rectArea.length=m,r.point.length=f,r.hemi.length=h,r.sunShadow.length=l,r.sunShadowMap.length=l,r.sunShadowMatrix.length=u,r.sunShadowCascade.length=u,r.directionalShadow.length=g,r.directionalShadowMap.length=g,r.directionalShadowMatrix.length=g,r.pointShadow.length=_,r.pointShadowMap.length=_,r.pointShadowMatrix.length=_,r.spotShadow.length=v,r.spotShadowMap.length=v,r.spotLightMatrix.length=v+y-b,r.spotLightMap.length=y,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=x,S.sunLength=c,S.directionalLength=d,S.pointLength=f,S.spotLength=p,S.rectAreaLength=m,S.hemiLength=h,S.numSunShadows=l,S.numDirectionalShadows=g,S.numPointShadows=_,S.numSpotShadows=v,S.numSpotMaps=y,S.numLightProbes=x,r.version=Nl++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=0,f=t.matrixWorldInverse;for(let t=0,p=e.length;t<p;t++){let p=e[t];if(p.isSunLight){let e=r.sun[n];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),n++}else if(p.isDirectionalLight){let e=r.directional[s];e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),s++}else if(p.isSpotLight){let e=r.spot[l];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),l++}else if(p.isRectAreaLight){let e=r.rectArea[u];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),o.identity(),a.copy(p.matrixWorld),a.premultiply(f),o.extractRotation(a),e.halfWidth.set(p.width*.5,0,0),e.halfHeight.set(0,p.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),u++}else if(p.isPointLight){let e=r.point[c];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),c++}else if(p.isHemisphereLight){let e=r.hemi[d];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),d++}}}return{setup:s,setupView:c,state:r}}function Il(e){let t=new Fl(e),n=[],r=[],i=[];function a(e){d.camera=e,n.length=0,r.length=0,i.length=0}function o(e){n.push(e)}function s(e){r.push(e)}function c(e){i.push(e)}function l(){t.setup(n)}function u(e){t.setupView(n,e)}let d={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:d,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:s,pushLightProbeGrid:c}}function Ll(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new Il(e),t.set(n,[a])):r>=i.length?(a=new Il(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var Rl=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,zl=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Bl=[new B(1,0,0),new B(-1,0,0),new B(0,1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1)],Vl=[new B(0,-1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1),new B(0,-1,0),new B(0,-1,0)],Hl=new nn,Ul=new B,Wl=new B;function Gl(e,t,n){let r=new Li,i=new z,o=new z,s=new Zt,l=new Ta,u=new Ea,d={},f=n.maxTextureSize,p={0:1,1:0,2:2},m=new Sa({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new z},radius:{value:4}},vertexShader:Rl,fragmentShader:zl}),h=m.clone();h.defines.HORIZONTAL_PASS=1;let y=new Nr;y.setAttribute(`position`,new vr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new W(y,m),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let S=this.type;this.render=function(t,n,l){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||t.length===0)return;this.type===2&&(I(`WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead.`),this.type=1);let u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),m=e.state;m.setBlending(0),m.buffers.depth.getReversed()===!0?m.buffers.color.setClear(0,0,0,0):m.buffers.color.setClear(1,1,1,1),m.buffers.depth.setTest(!0),m.setScissorTest(!1);let h=S!==this.type;h&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let u=0,d=t.length;u<d;u++){let d=t[u],p=d.shadow;if(p===void 0){I(`WebGLShadowMap:`,d,`has no shadow.`);continue}if(p.autoUpdate===!1&&p.needsUpdate===!1)continue;i.copy(p.mapSize);let y=p.getFrameExtents();i.multiply(y),o.copy(p.mapSize),(i.x>f||i.y>f)&&(i.x>f&&(o.x=Math.floor(f/y.x),i.x=o.x*y.x,p.mapSize.x=o.x),i.y>f&&(o.y=Math.floor(f/y.y),i.y=o.y*y.y,p.mapSize.y=o.y));let b=e.state.buffers.depth.getReversed();if(p.camera._reversedDepth=b,p.map===null||h===!0){if(p.map!==null&&(p.map.depthTexture!==null&&(p.map.depthTexture.dispose(),p.map.depthTexture=null),p.map.dispose()),this.type===3){if(d.isPointLight){I(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}p.map=new $t(i.x,i.y,{format:te,type:v,minFilter:c,magFilter:c,generateMipmaps:!1}),p.map.texture.name=d.name+`.shadowMap`,p.map.depthTexture=new oa(i.x,i.y,_),p.map.depthTexture.name=d.name+`.shadowMapDepth`,p.map.depthTexture.format=D,p.map.depthTexture.compareFunction=null,p.map.depthTexture.minFilter=a,p.map.depthTexture.magFilter=a}else d.isPointLight?(p.map=new Ss(i.x),p.map.depthTexture=new sa(i.x,g)):(p.map=new $t(i.x,i.y),p.map.depthTexture=new oa(i.x,i.y,g)),p.map.depthTexture.name=d.name+`.shadowMap`,p.map.depthTexture.format=D,this.type===1?(p.map.depthTexture.compareFunction=b?518:515,p.map.depthTexture.minFilter=c,p.map.depthTexture.magFilter=c):(p.map.depthTexture.compareFunction=null,p.map.depthTexture.minFilter=a,p.map.depthTexture.magFilter=a);p.camera.updateProjectionMatrix()}p.map.isWebGLCubeRenderTarget!==!0&&(p.map.width!==i.x||p.map.height!==i.y)&&p.map.setSize(i.x,i.y);let x=p.map.isWebGLCubeRenderTarget?6:p.getViewportCount();d.isPointLight!==!0&&p.updateMatrices(d,l);for(let t=0;t<x;t++){let i=p.getCamera(t);if(d.isPointLight){let e=p.camera,n=p.matrix,r=d.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),Ul.setFromMatrixPosition(d.matrixWorld),e.position.copy(Ul),Wl.copy(e.position),Wl.add(Bl[t]),e.up.copy(Vl[t]),e.lookAt(Wl),e.updateMatrixWorld(),n.makeTranslation(-Ul.x,-Ul.y,-Ul.z),Hl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),p._frustum.setFromProjectionMatrix(Hl,e.coordinateSystem,e.reversedDepth)}if(p.map.isWebGLCubeRenderTarget)e.setRenderTarget(p.map,t),e.clear();else{t===0&&(e.setRenderTarget(p.map),e.clear());let n=p.getViewport(t);s.set(o.x*n.x,o.y*n.y,o.x*n.z,o.y*n.w),m.viewport(s)}r=p.getFrustum(t),T(n,l,i,d,this.type)}p.isPointLightShadow!==!0&&this.type===3&&C(p,l),p.needsUpdate=!1}S=this.type,x.needsUpdate=!1,e.setRenderTarget(u,d,p)};function C(n,r){let a=t.update(b);m.defines.VSM_SAMPLES!==n.blurSamples&&(m.defines.VSM_SAMPLES=n.blurSamples,h.defines.VSM_SAMPLES=n.blurSamples,m.needsUpdate=!0,h.needsUpdate=!0),n.mapPass===null?n.mapPass=new $t(i.x,i.y,{format:te,type:v}):(n.mapPass.width!==n.map.width||n.mapPass.height!==n.map.height)&&n.mapPass.setSize(n.map.width,n.map.height),m.uniforms.shadow_pass.value=n.map.depthTexture,m.uniforms.resolution.value.set(n.map.width,n.map.height),m.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,a,m,b,null),h.uniforms.shadow_pass.value=n.mapPass.texture,h.uniforms.resolution.value.set(n.map.width,n.map.height),h.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,a,h,b,null)}function w(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?u:l,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=d[e];r===void 0&&(r={},d[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,E)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?p[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function T(n,i,a,o,s){if(n.visible===!1)return;if(n.layers.test(i.layers)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&s===3)&&(!n.frustumCulled||n.intersectsFrustum(r))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let r=t.update(n),c=n.material;if(Array.isArray(c)){let t=r.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=c[u.materialIndex];if(d&&d.visible){let t=w(n,d,o,s);n.onBeforeShadow(e,n,i,a,r,t,u),e.renderBufferDirect(a,null,r,t,n,u),n.onAfterShadow(e,n,i,a,r,t,u)}}}else if(c.visible){let t=w(n,c,o,s);n.onBeforeShadow(e,n,i,a,r,t,null),e.renderBufferDirect(a,null,r,t,n,null),n.onAfterShadow(e,n,i,a,r,t,null)}}let c=n.children;for(let e=0,t=c.length;e<t;e++)T(c[e],i,a,o,s)}function E(e){e.target.removeEventListener(`dispose`,E);for(let t in d){let n=d[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function Kl(e,t){function n(){let t=!1,n=new Zt,r=null,i=new Zt(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?M(e.DEPTH_TEST):fe(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=at[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?M(e.STENCIL_TEST):fe(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c=new WeakMap,l=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new U(0,0,0),T=0,E=!1,D=null,ee=null,O=null,k=null,te=null,ne=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),re=!1,A=0,ie=e.getParameter(e.VERSION);ie.indexOf(`WebGL`)===-1?ie.indexOf(`OpenGL ES`)!==-1&&(A=parseFloat(/^OpenGL ES (\d)/.exec(ie)[1]),re=A>=2):(A=parseFloat(/^WebGL (\d)/.exec(ie)[1]),re=A>=1);let j=null,ae={},oe=e.getParameter(e.SCISSOR_BOX),se=e.getParameter(e.VIEWPORT),ce=new Zt().fromArray(oe),le=new Zt().fromArray(se);function ue(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let de={};de[e.TEXTURE_2D]=ue(e.TEXTURE_2D,e.TEXTURE_2D,1),de[e.TEXTURE_CUBE_MAP]=ue(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),de[e.TEXTURE_2D_ARRAY]=ue(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),de[e.TEXTURE_3D]=ue(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),M(e.DEPTH_TEST),o.setFunc(3),be(!1),xe(1),M(e.CULL_FACE),ve(0);function M(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function fe(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function pe(t,n){return f[t]!==n&&(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function me(t,n){let r=m,i=!1;if(t){r=p.get(n),r===void 0&&(r=[],p.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function he(t){return h!==t&&(e.useProgram(t),h=t,!0)}let ge={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};ge[103]=e.MIN,ge[104]=e.MAX;let _e={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function ve(t,n,r,i,a,o,s,c,l,u){if(t===0)g===!0&&(fe(e.BLEND),g=!1);else if(g===!1&&(M(e.BLEND),g=!0),t!==5){if(t!==_||u!==E){if((v!==100||x!==100)&&(e.blendEquation(e.FUNC_ADD),v=100,x=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:L(`WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:L(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:L(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:L(`WebGLState: Invalid blending: `,t)}y=null,b=null,S=null,C=null,w.set(0,0,0),T=0,_=t,E=u}}else a||=n,o||=r,s||=i,(n!==v||a!==x)&&(e.blendEquationSeparate(ge[n],ge[a]),v=n,x=a),(r!==y||i!==b||o!==S||s!==C)&&(e.blendFuncSeparate(_e[r],_e[i],_e[o],_e[s]),y=r,b=i,S=o,C=s),(c.equals(w)===!1||l!==T)&&(e.blendColor(c.r,c.g,c.b,l),w.copy(c),T=l),_=t,E=!1}function ye(t,n){t.side===2?fe(e.CULL_FACE):M(e.CULL_FACE);let r=t.side===1;n&&(r=!r),be(r),t.blending===1&&t.transparent===!1?ve(0):ve(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),Ce(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?M(e.SAMPLE_ALPHA_TO_COVERAGE):fe(e.SAMPLE_ALPHA_TO_COVERAGE)}function be(t){D!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),D=t)}function xe(t){t===0?fe(e.CULL_FACE):(M(e.CULL_FACE),t!==ee&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),ee=t}function Se(t){t!==O&&(re&&e.lineWidth(t),O=t)}function Ce(t,n,r){t?(M(e.POLYGON_OFFSET_FILL),(k!==n||te!==r)&&(k=n,te=r,o.getReversed()&&(n=-n),e.polygonOffset(n,r))):fe(e.POLYGON_OFFSET_FILL)}function we(t){t?M(e.SCISSOR_TEST):fe(e.SCISSOR_TEST)}function Te(t){t===void 0&&(t=e.TEXTURE0+ne-1),j!==t&&(e.activeTexture(t),j=t)}function Ee(t,n,r){r===void 0&&(r=j===null?e.TEXTURE0+ne-1:j);let i=ae[r];i===void 0&&(i={type:void 0,texture:void 0},ae[r]=i),(i.type!==t||i.texture!==n)&&(j!==r&&(e.activeTexture(r),j=r),e.bindTexture(t,n||de[t]),i.type=t,i.texture=n)}function De(){let t=ae[j];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function Oe(){try{e.compressedTexImage2D(...arguments)}catch(e){L(`WebGLState:`,e)}}function ke(){try{e.compressedTexImage3D(...arguments)}catch(e){L(`WebGLState:`,e)}}function Ae(){try{e.texSubImage2D(...arguments)}catch(e){L(`WebGLState:`,e)}}function je(){try{e.texSubImage3D(...arguments)}catch(e){L(`WebGLState:`,e)}}function Me(){try{e.compressedTexSubImage2D(...arguments)}catch(e){L(`WebGLState:`,e)}}function Ne(){try{e.compressedTexSubImage3D(...arguments)}catch(e){L(`WebGLState:`,e)}}function Pe(){try{e.texStorage2D(...arguments)}catch(e){L(`WebGLState:`,e)}}function Fe(){try{e.texStorage3D(...arguments)}catch(e){L(`WebGLState:`,e)}}function N(){try{e.texImage2D(...arguments)}catch(e){L(`WebGLState:`,e)}}function Ie(){try{e.texImage3D(...arguments)}catch(e){L(`WebGLState:`,e)}}function Le(t){return d[t]===void 0?e.getParameter(t):d[t]}function Re(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function P(t){ce.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),ce.copy(t))}function ze(t){le.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),le.copy(t))}function F(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),r.set(t,i))}function Be(t,n){let r=l.get(n).get(t);c.get(n)!==r&&(e.uniformBlockBinding(n,r,t.__bindingPointIndex),c.set(n,r))}function Ve(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},j=null,ae={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new U(0,0,0),T=0,E=!1,D=null,ee=null,O=null,k=null,te=null,ce.set(0,0,e.canvas.width,e.canvas.height),le.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:M,disable:fe,bindFramebuffer:pe,drawBuffers:me,useProgram:he,setBlending:ve,setMaterial:ye,setFlipSided:be,setCullFace:xe,setLineWidth:Se,setPolygonOffset:Ce,setScissorTest:we,activeTexture:Te,bindTexture:Ee,unbindTexture:De,compressedTexImage2D:Oe,compressedTexImage3D:ke,texImage2D:N,texImage3D:Ie,pixelStorei:Re,getParameter:Le,updateUBOMapping:F,uniformBlockBinding:Be,texStorage2D:Pe,texStorage3D:Fe,texSubImage2D:Ae,texSubImage3D:je,compressedTexSubImage2D:Me,compressedTexSubImage3D:Ne,scissor:P,viewport:ze,reset:Ve}}function ql(e,t,d,f,p,m,h){let g=t.has(`WEBGL_multisampled_render_to_texture`)?t.get(`WEBGL_multisampled_render_to_texture`):null,_=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),v=new z,y=new WeakMap,b=new Set,x,S=new WeakMap,C=!1;try{C=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function w(e,t){return C?new OffscreenCanvas(e,t):Qe(`canvas`)}function T(e,t,n){let r=1,i=Le(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);x===void 0&&(x=w(n,a));let o=t?w(n,a):x;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),I(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&I(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function E(e){return e.generateMipmaps}function D(t){e.generateMipmap(t)}function O(t){return t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:t.isWebGL3DRenderTarget?e.TEXTURE_3D:t.isWebGLArrayRenderTarget||t.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function k(n,r,i,a,o,s=!1){if(n!==null){if(e[n]!==void 0)return e[n];I(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+n+`'`)}let c;a&&(c=t.get(`EXT_texture_norm16`),c||I(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let l=r;if(r===e.RED&&(i===e.FLOAT&&(l=e.R32F),i===e.HALF_FLOAT&&(l=e.R16F),i===e.UNSIGNED_BYTE&&(l=e.R8),i===e.UNSIGNED_SHORT&&c&&(l=c.R16_EXT),i===e.SHORT&&c&&(l=c.R16_SNORM_EXT)),r===e.RED_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.R8UI),i===e.UNSIGNED_SHORT&&(l=e.R16UI),i===e.UNSIGNED_INT&&(l=e.R32UI),i===e.BYTE&&(l=e.R8I),i===e.SHORT&&(l=e.R16I),i===e.INT&&(l=e.R32I)),r===e.RG&&(i===e.FLOAT&&(l=e.RG32F),i===e.HALF_FLOAT&&(l=e.RG16F),i===e.UNSIGNED_BYTE&&(l=e.RG8),i===e.UNSIGNED_SHORT&&c&&(l=c.RG16_EXT),i===e.SHORT&&c&&(l=c.RG16_SNORM_EXT)),r===e.RG_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RG8UI),i===e.UNSIGNED_SHORT&&(l=e.RG16UI),i===e.UNSIGNED_INT&&(l=e.RG32UI),i===e.BYTE&&(l=e.RG8I),i===e.SHORT&&(l=e.RG16I),i===e.INT&&(l=e.RG32I)),r===e.RGB_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGB8UI),i===e.UNSIGNED_SHORT&&(l=e.RGB16UI),i===e.UNSIGNED_INT&&(l=e.RGB32UI),i===e.BYTE&&(l=e.RGB8I),i===e.SHORT&&(l=e.RGB16I),i===e.INT&&(l=e.RGB32I)),r===e.RGBA_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGBA8UI),i===e.UNSIGNED_SHORT&&(l=e.RGBA16UI),i===e.UNSIGNED_INT&&(l=e.RGBA32UI),i===e.BYTE&&(l=e.RGBA8I),i===e.SHORT&&(l=e.RGBA16I),i===e.INT&&(l=e.RGBA32I)),r===e.RGB&&(i===e.UNSIGNED_SHORT&&c&&(l=c.RGB16_EXT),i===e.SHORT&&c&&(l=c.RGB16_SNORM_EXT),i===e.UNSIGNED_INT_5_9_9_9_REV&&(l=e.RGB9_E5),i===e.UNSIGNED_INT_10F_11F_11F_REV&&(l=e.R11F_G11F_B10F)),r===e.RGBA){let t=s?We:Bt.getTransfer(o);i===e.FLOAT&&(l=e.RGBA32F),i===e.HALF_FLOAT&&(l=e.RGBA16F),i===e.UNSIGNED_BYTE&&(l=t===`srgb`?e.SRGB8_ALPHA8:e.RGBA8),i===e.UNSIGNED_SHORT&&c&&(l=c.RGBA16_EXT),i===e.SHORT&&c&&(l=c.RGBA16_SNORM_EXT),i===e.UNSIGNED_SHORT_4_4_4_4&&(l=e.RGBA4),i===e.UNSIGNED_SHORT_5_5_5_1&&(l=e.RGB5_A1)}return(l===e.R16F||l===e.R32F||l===e.RG16F||l===e.RG32F||l===e.RGBA16F||l===e.RGBA32F)&&t.get(`EXT_color_buffer_float`),l}function te(t,n){let r;return t?n===null||n===1014||n===1020?r=e.DEPTH24_STENCIL8:n===1015?r=e.DEPTH32F_STENCIL8:n===1012&&(r=e.DEPTH24_STENCIL8,I(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):n===null||n===1014||n===1020?r=e.DEPTH_COMPONENT24:n===1015?r=e.DEPTH_COMPONENT32F:n===1012&&(r=e.DEPTH_COMPONENT16),r}function ne(e,t){return E(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps!==void 0&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function re(e){let t=e.target;t.removeEventListener(`dispose`,re),ie(t),t.isVideoTexture&&y.delete(t),t.isHTMLTexture&&b.delete(t)}function A(e){let t=e.target;t.removeEventListener(`dispose`,A),ae(t)}function ie(e){let t=f.get(e);if(t.__webglInit===void 0)return;let n=e.source,r=S.get(n);if(r){let i=r[t.__cacheKey];i.usedTimes--,i.usedTimes===0&&j(e),Object.keys(r).length===0&&S.delete(n)}f.remove(e)}function j(t){let n=f.get(t);e.deleteTexture(n.__webglTexture);let r=t.source,i=S.get(r);delete i[n.__cacheKey],h.memory.textures--}function ae(t){let n=f.get(t);if(t.depthTexture&&(t.depthTexture.dispose(),f.remove(t.depthTexture)),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(n.__webglFramebuffer[t]))for(let r=0;r<n.__webglFramebuffer[t].length;r++)e.deleteFramebuffer(n.__webglFramebuffer[t][r]);else e.deleteFramebuffer(n.__webglFramebuffer[t]);n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[t])}else{if(Array.isArray(n.__webglFramebuffer))for(let t=0;t<n.__webglFramebuffer.length;t++)e.deleteFramebuffer(n.__webglFramebuffer[t]);else e.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&e.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let t=0;t<n.__webglColorRenderbuffer.length;t++)n.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);n.__webglDepthRenderbuffer&&e.deleteRenderbuffer(n.__webglDepthRenderbuffer)}let r=t.textures;for(let t=0,n=r.length;t<n;t++){let n=f.get(r[t]);n.__webglTexture&&(e.deleteTexture(n.__webglTexture),h.memory.textures--),f.remove(r[t])}f.remove(t)}let oe=0;function se(){oe=0}function ce(){return oe}function le(e){oe=e}function ue(){let e=oe;return e>=p.maxTextures&&I(`WebGLTextures: Trying to use `+(e+1)+` texture units while this GPU supports only `+p.maxTextures),oe+=1,e}function de(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function M(t,n){let r=f.get(t);if(t.isVideoTexture&&N(t),t.isRenderTargetTexture===!1&&t.isExternalTexture!==!0&&t.version>0&&r.__version!==t.version){let e=t.image;if(e===null)I(`WebGLRenderer: Texture marked for update but no image data found.`);else if(e.complete===!1)I(`WebGLRenderer: Texture marked for update but image is incomplete`);else{Se(r,t,n);return}}else t.isExternalTexture&&(r.__webglTexture=t.sourceTexture?t.sourceTexture:null);d.bindTexture(e.TEXTURE_2D,r.__webglTexture,e.TEXTURE0+n)}function fe(t,n){let r=f.get(t);t.isRenderTargetTexture===!1&&t.version>0&&r.__version!==t.version?Se(r,t,n):(t.isExternalTexture&&(r.__webglTexture=t.sourceTexture?t.sourceTexture:null),d.bindTexture(e.TEXTURE_2D_ARRAY,r.__webglTexture,e.TEXTURE0+n))}function pe(t,n){let r=f.get(t);t.isRenderTargetTexture===!1&&t.version>0&&r.__version!==t.version?Se(r,t,n):d.bindTexture(e.TEXTURE_3D,r.__webglTexture,e.TEXTURE0+n)}function me(t,n){let r=f.get(t);t.isCubeDepthTexture!==!0&&t.version>0&&r.__version!==t.version?Ce(r,t,n):d.bindTexture(e.TEXTURE_CUBE_MAP,r.__webglTexture,e.TEXTURE0+n)}let he={[n]:e.REPEAT,[r]:e.CLAMP_TO_EDGE,[i]:e.MIRRORED_REPEAT},ge={[a]:e.NEAREST,[o]:e.NEAREST_MIPMAP_NEAREST,[s]:e.NEAREST_MIPMAP_LINEAR,[c]:e.LINEAR,[l]:e.LINEAR_MIPMAP_NEAREST,[u]:e.LINEAR_MIPMAP_LINEAR},_e={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function ve(n,r){if(r.type===1015&&t.has(`OES_texture_float_linear`)===!1&&(r.magFilter===1006||r.magFilter===1007||r.magFilter===1005||r.magFilter===1008||r.minFilter===1006||r.minFilter===1007||r.minFilter===1005||r.minFilter===1008)&&I(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),e.texParameteri(n,e.TEXTURE_WRAP_S,he[r.wrapS]),e.texParameteri(n,e.TEXTURE_WRAP_T,he[r.wrapT]),(n===e.TEXTURE_3D||n===e.TEXTURE_2D_ARRAY)&&e.texParameteri(n,e.TEXTURE_WRAP_R,he[r.wrapR]),e.texParameteri(n,e.TEXTURE_MAG_FILTER,ge[r.magFilter]),e.texParameteri(n,e.TEXTURE_MIN_FILTER,ge[r.minFilter]),r.compareFunction&&(e.texParameteri(n,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(n,e.TEXTURE_COMPARE_FUNC,_e[r.compareFunction])),t.has(`EXT_texture_filter_anisotropic`)===!0){if(r.magFilter===1003||r.minFilter!==1005&&r.minFilter!==1008||r.type===1015&&t.has(`OES_texture_float_linear`)===!1)return;if(r.anisotropy>1||f.get(r).__currentAnisotropy){let i=t.get(`EXT_texture_filter_anisotropic`);e.texParameterf(n,i.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(r.anisotropy,p.getMaxAnisotropy())),f.get(r).__currentAnisotropy=r.anisotropy}}}function ye(t,n){let r=!1;t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,re));let i=n.source,a=S.get(i);a===void 0&&(a={},S.set(i,a));let o=de(n);if(o!==t.__cacheKey){a[o]===void 0&&(a[o]={texture:e.createTexture(),usedTimes:0},h.memory.textures++,r=!0),a[o].usedTimes++;let i=a[t.__cacheKey];i!==void 0&&(a[t.__cacheKey].usedTimes--,i.usedTimes===0&&j(n)),t.__cacheKey=o,t.__webglTexture=a[o].texture}return r}function be(e,t,n){return Math.floor(Math.floor(e/n)/t)}function xe(t,n,r,i){let a=t.updateRanges;if(a.length===0)d.texSubImage2D(e.TEXTURE_2D,0,0,0,n.width,n.height,r,i,n.data);else{a.sort((e,t)=>e.start-t.start);let o=0;for(let e=1;e<a.length;e++){let t=a[o],r=a[e],i=t.start+t.count,s=be(r.start,n.width,4),c=be(t.start,n.width,4);r.start<=i+1&&s===c&&be(r.start+r.count-1,n.width,4)===s?t.count=Math.max(t.count,r.start+r.count-t.start):(++o,a[o]=r)}a.length=o+1;let s=d.getParameter(e.UNPACK_ROW_LENGTH),c=d.getParameter(e.UNPACK_SKIP_PIXELS),l=d.getParameter(e.UNPACK_SKIP_ROWS);d.pixelStorei(e.UNPACK_ROW_LENGTH,n.width);for(let t=0,o=a.length;t<o;t++){let o=a[t],s=Math.floor(o.start/4),c=Math.ceil(o.count/4),l=s%n.width,u=Math.floor(s/n.width),f=c;d.pixelStorei(e.UNPACK_SKIP_PIXELS,l),d.pixelStorei(e.UNPACK_SKIP_ROWS,u),d.texSubImage2D(e.TEXTURE_2D,0,l,u,f,1,r,i,n.data)}t.clearUpdateRanges(),d.pixelStorei(e.UNPACK_ROW_LENGTH,s),d.pixelStorei(e.UNPACK_SKIP_PIXELS,c),d.pixelStorei(e.UNPACK_SKIP_ROWS,l)}}function Se(t,n,r){let i=e.TEXTURE_2D;(n.isDataArrayTexture||n.isCompressedArrayTexture)&&(i=e.TEXTURE_2D_ARRAY),n.isData3DTexture&&(i=e.TEXTURE_3D);let a=ye(t,n),o=n.source;d.bindTexture(i,t.__webglTexture,e.TEXTURE0+r);let s=f.get(o);if(o.version!==s.__version||a===!0){if(d.activeTexture(e.TEXTURE0+r),!(typeof ImageBitmap<`u`&&n.image instanceof ImageBitmap)){let t=Bt.getPrimaries(Bt.workingColorSpace),r=n.colorSpace===``?null:Bt.getPrimaries(n.colorSpace),i=n.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;d.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,n.flipY),d.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,n.premultiplyAlpha),d.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,i)}d.pixelStorei(e.UNPACK_ALIGNMENT,n.unpackAlignment);let t=T(n.image,!1,p.maxTextureSize);t=Ie(n,t);let c=m.convert(n.format,n.colorSpace),l=m.convert(n.type),u=k(n.internalFormat,c,l,n.normalized,n.colorSpace,n.isVideoTexture);ve(i,n);let f,h=n.mipmaps,g=n.isVideoTexture!==!0,_=s.__version===void 0||a===!0,v=o.dataReady,y=ne(n,t);if(n.isDepthTexture)u=te(n.format===ee,n.type),_&&(g?d.texStorage2D(e.TEXTURE_2D,1,u,t.width,t.height):d.texImage2D(e.TEXTURE_2D,0,u,t.width,t.height,0,c,l,null));else if(n.isDataTexture){if(h.length>0){g&&_&&d.texStorage2D(e.TEXTURE_2D,y,u,h[0].width,h[0].height);for(let t=0,n=h.length;t<n;t++)f=h[t],g?v&&d.texSubImage2D(e.TEXTURE_2D,t,0,0,f.width,f.height,c,l,f.data):d.texImage2D(e.TEXTURE_2D,t,u,f.width,f.height,0,c,l,f.data);n.generateMipmaps=!1}else g?(_&&d.texStorage2D(e.TEXTURE_2D,y,u,t.width,t.height),v&&xe(n,t,c,l)):d.texImage2D(e.TEXTURE_2D,0,u,t.width,t.height,0,c,l,t.data)}else if(n.isCompressedTexture){if(n.isCompressedArrayTexture){g&&_&&d.texStorage3D(e.TEXTURE_2D_ARRAY,y,u,h[0].width,h[0].height,t.depth);for(let r=0,i=h.length;r<i;r++)if(f=h[r],n.format!==1023){if(c!==null){if(g){if(v){if(n.layerUpdates.size>0){let t=Vo(f.width,f.height,n.format,n.type);for(let i of n.layerUpdates){let n=f.data.subarray(i*t/f.data.BYTES_PER_ELEMENT,(i+1)*t/f.data.BYTES_PER_ELEMENT);d.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,r,0,0,i,f.width,f.height,1,c,n)}}else d.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,r,0,0,0,f.width,f.height,t.depth,c,f.data)}}else d.compressedTexImage3D(e.TEXTURE_2D_ARRAY,r,u,f.width,f.height,t.depth,0,f.data,0,0)}else I(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else g?v&&d.texSubImage3D(e.TEXTURE_2D_ARRAY,r,0,0,0,f.width,f.height,t.depth,c,l,f.data):d.texImage3D(e.TEXTURE_2D_ARRAY,r,u,f.width,f.height,t.depth,0,c,l,f.data);n.layerUpdates.size>0&&n.clearLayerUpdates()}else{g&&_&&d.texStorage2D(e.TEXTURE_2D,y,u,h[0].width,h[0].height);for(let t=0,r=h.length;t<r;t++)f=h[t],n.format===1023?g?v&&d.texSubImage2D(e.TEXTURE_2D,t,0,0,f.width,f.height,c,l,f.data):d.texImage2D(e.TEXTURE_2D,t,u,f.width,f.height,0,c,l,f.data):c===null?I(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):g?v&&d.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,f.width,f.height,c,f.data):d.compressedTexImage2D(e.TEXTURE_2D,t,u,f.width,f.height,0,f.data)}}else if(n.isDataArrayTexture){if(g){if(_&&d.texStorage3D(e.TEXTURE_2D_ARRAY,y,u,t.width,t.height,t.depth),v){if(n.layerUpdates.size>0){let r=Vo(t.width,t.height,n.format,n.type);for(let i of n.layerUpdates){let n=t.data.subarray(i*r/t.data.BYTES_PER_ELEMENT,(i+1)*r/t.data.BYTES_PER_ELEMENT);d.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,i,t.width,t.height,1,c,l,n)}n.clearLayerUpdates()}else d.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,t.width,t.height,t.depth,c,l,t.data)}}else d.texImage3D(e.TEXTURE_2D_ARRAY,0,u,t.width,t.height,t.depth,0,c,l,t.data)}else if(n.isData3DTexture)g?(_&&d.texStorage3D(e.TEXTURE_3D,y,u,t.width,t.height,t.depth),v&&d.texSubImage3D(e.TEXTURE_3D,0,0,0,0,t.width,t.height,t.depth,c,l,t.data)):d.texImage3D(e.TEXTURE_3D,0,u,t.width,t.height,t.depth,0,c,l,t.data);else if(n.isFramebufferTexture){if(_){if(g)d.texStorage2D(e.TEXTURE_2D,y,u,t.width,t.height);else{let n=t.width,r=t.height;for(let t=0;t<y;t++)d.texImage2D(e.TEXTURE_2D,t,u,n,r,0,c,l,null),n>>=1,r>>=1}}}else if(n.isHTMLTexture){if(`texElementImage2D`in e){let r=e.canvas;if(r.hasAttribute(`layoutsubtree`)||r.setAttribute(`layoutsubtree`,`true`),t.parentNode!==r){r.appendChild(t),b.add(n),r.onpaint=e=>{let t=e.changedElements;for(let e of b)t.includes(e.image)&&(e.needsUpdate=!0)},r.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,t);else{let n=e.RGBA,r=e.RGBA,i=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,n,r,i,t)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(h.length>0){if(g&&_){let t=Le(h[0]);d.texStorage2D(e.TEXTURE_2D,y,u,t.width,t.height)}for(let t=0,n=h.length;t<n;t++)f=h[t],g?v&&d.texSubImage2D(e.TEXTURE_2D,t,0,0,c,l,f):d.texImage2D(e.TEXTURE_2D,t,u,c,l,f);n.generateMipmaps=!1}else if(g){if(_){let n=Le(t);d.texStorage2D(e.TEXTURE_2D,y,u,n.width,n.height)}v&&d.texSubImage2D(e.TEXTURE_2D,0,0,0,c,l,t)}else d.texImage2D(e.TEXTURE_2D,0,u,c,l,t);E(n)&&D(i),s.__version=o.version,n.onUpdate&&n.onUpdate(n)}t.__version=n.version}function Ce(t,n,r){if(n.image.length!==6)return;let i=ye(t,n),a=n.source;d.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+r);let o=f.get(a);if(a.version!==o.__version||i===!0){d.activeTexture(e.TEXTURE0+r);let t=Bt.getPrimaries(Bt.workingColorSpace),s=n.colorSpace===``?null:Bt.getPrimaries(n.colorSpace),c=n.colorSpace===``||t===s?e.NONE:e.BROWSER_DEFAULT_WEBGL;d.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,n.flipY),d.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,n.premultiplyAlpha),d.pixelStorei(e.UNPACK_ALIGNMENT,n.unpackAlignment),d.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,c);let l=n.isCompressedTexture||n.image[0].isCompressedTexture,u=n.image[0]&&n.image[0].isDataTexture,f=[];for(let e=0;e<6;e++)!l&&!u?f[e]=T(n.image[e],!0,p.maxCubemapSize):f[e]=u?n.image[e].image:n.image[e],f[e]=Ie(n,f[e]);let h=f[0],g=m.convert(n.format,n.colorSpace),_=m.convert(n.type),v=k(n.internalFormat,g,_,n.normalized,n.colorSpace),y=n.isVideoTexture!==!0,b=o.__version===void 0||i===!0,x=a.dataReady,S=ne(n,h);ve(e.TEXTURE_CUBE_MAP,n);let C;if(l){y&&b&&d.texStorage2D(e.TEXTURE_CUBE_MAP,S,v,h.width,h.height);for(let t=0;t<6;t++){C=f[t].mipmaps;for(let r=0;r<C.length;r++){let i=C[r];n.format===1023?y?x&&d.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,g,_,i.data):d.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,v,i.width,i.height,0,g,_,i.data):g===null?I(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):y?x&&d.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,g,i.data):d.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,v,i.width,i.height,0,i.data)}}}else{if(C=n.mipmaps,y&&b){C.length>0&&S++;let t=Le(f[0]);d.texStorage2D(e.TEXTURE_CUBE_MAP,S,v,t.width,t.height)}for(let t=0;t<6;t++)if(u){y?x&&d.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,f[t].width,f[t].height,g,_,f[t].data):d.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,v,f[t].width,f[t].height,0,g,_,f[t].data);for(let n=0;n<C.length;n++){let r=C[n].image[t].image;y?x&&d.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,n+1,0,0,r.width,r.height,g,_,r.data):d.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,n+1,v,r.width,r.height,0,g,_,r.data)}}else{y?x&&d.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,g,_,f[t]):d.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,v,g,_,f[t]);for(let n=0;n<C.length;n++){let r=C[n];y?x&&d.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,n+1,0,0,g,_,r.image[t]):d.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,n+1,v,g,_,r.image[t])}}}E(n)&&D(e.TEXTURE_CUBE_MAP),o.__version=a.version,n.onUpdate&&n.onUpdate(n)}t.__version=n.version}function we(t,n,r,i,a,o){let s=m.convert(r.format,r.colorSpace),c=m.convert(r.type),l=k(r.internalFormat,s,c,r.normalized,r.colorSpace),u=f.get(n),p=f.get(r);if(p.__renderTarget=n,!u.__hasExternalTextures){let t=Math.max(1,n.width>>o),r=Math.max(1,n.height>>o);a===e.TEXTURE_3D||a===e.TEXTURE_2D_ARRAY?d.texImage3D(a,o,l,t,r,n.depth,0,s,c,null):d.texImage2D(a,o,l,t,r,0,s,c,null)}d.bindFramebuffer(e.FRAMEBUFFER,t),Fe(n)?g.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,i,a,p.__webglTexture,0,Pe(n)):(a===e.TEXTURE_2D||a>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&a<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,i,a,p.__webglTexture,o),d.bindFramebuffer(e.FRAMEBUFFER,null)}function Te(t,n,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer){let i=n.depthTexture,a=i&&i.isDepthTexture?i.type:null,o=te(n.stencilBuffer,a),s=n.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;Fe(n)?g.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Pe(n),o,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Pe(n),o,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,o,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,s,e.RENDERBUFFER,t)}else{let t=n.textures;for(let i=0;i<t.length;i++){let a=t[i],o=m.convert(a.format,a.colorSpace),s=m.convert(a.type),c=k(a.internalFormat,o,s,a.normalized,a.colorSpace);Fe(n)?g.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Pe(n),c,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Pe(n),c,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,c,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function Ee(t,n,r){let i=n.isWebGLCubeRenderTarget===!0;if(d.bindFramebuffer(e.FRAMEBUFFER,t),!(n.depthTexture&&n.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let a=f.get(n.depthTexture);if(a.__renderTarget=n,(!a.__webglTexture||n.depthTexture.image.width!==n.width||n.depthTexture.image.height!==n.height)&&(n.depthTexture.image.width=n.width,n.depthTexture.image.height=n.height,n.depthTexture.needsUpdate=!0),i){if(a.__webglInit===void 0&&(a.__webglInit=!0,n.depthTexture.addEventListener(`dispose`,re)),a.__webglTexture===void 0){a.__webglTexture=e.createTexture(),d.bindTexture(e.TEXTURE_CUBE_MAP,a.__webglTexture),ve(e.TEXTURE_CUBE_MAP,n.depthTexture);let t=m.convert(n.depthTexture.format),r=m.convert(n.depthTexture.type),i;n.depthTexture.format===1026?i=e.DEPTH_COMPONENT24:n.depthTexture.format===1027&&(i=e.DEPTH24_STENCIL8);for(let a=0;a<6;a++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+a,0,i,n.width,n.height,0,t,r,null)}}else M(n.depthTexture,0);let o=a.__webglTexture,s=Pe(n),c=i?e.TEXTURE_CUBE_MAP_POSITIVE_X+r:e.TEXTURE_2D,l=n.depthTexture.format===1027?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(n.depthTexture.format===1026)Fe(n)?g.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,l,c,o,0,s):e.framebufferTexture2D(e.FRAMEBUFFER,l,c,o,0);else if(n.depthTexture.format===1027)Fe(n)?g.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,l,c,o,0,s):e.framebufferTexture2D(e.FRAMEBUFFER,l,c,o,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function De(t){let n=f.get(t),r=t.isWebGLCubeRenderTarget===!0;if(n.__boundDepthTexture!==t.depthTexture){let e=t.depthTexture;if(n.__depthDisposeCallback&&n.__depthDisposeCallback(),e){let t=()=>{delete n.__boundDepthTexture,delete n.__depthDisposeCallback,e.removeEventListener(`dispose`,t)};e.addEventListener(`dispose`,t),n.__depthDisposeCallback=t}n.__boundDepthTexture=e}if(t.depthTexture&&!n.__autoAllocateDepthBuffer){if(r)for(let e=0;e<6;e++)Ee(n.__webglFramebuffer[e],t,e);else{let e=t.texture.mipmaps;e&&e.length>0?Ee(n.__webglFramebuffer[0],t,0):Ee(n.__webglFramebuffer,t,0)}}else if(r){n.__webglDepthbuffer=[];for(let r=0;r<6;r++)if(d.bindFramebuffer(e.FRAMEBUFFER,n.__webglFramebuffer[r]),n.__webglDepthbuffer[r]===void 0)n.__webglDepthbuffer[r]=e.createRenderbuffer(),Te(n.__webglDepthbuffer[r],t,!1);else{let i=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,a=n.__webglDepthbuffer[r];e.bindRenderbuffer(e.RENDERBUFFER,a),e.framebufferRenderbuffer(e.FRAMEBUFFER,i,e.RENDERBUFFER,a)}}else{let r=t.texture.mipmaps;if(r&&r.length>0?d.bindFramebuffer(e.FRAMEBUFFER,n.__webglFramebuffer[0]):d.bindFramebuffer(e.FRAMEBUFFER,n.__webglFramebuffer),n.__webglDepthbuffer===void 0)n.__webglDepthbuffer=e.createRenderbuffer(),Te(n.__webglDepthbuffer,t,!1);else{let r=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,i=n.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,i),e.framebufferRenderbuffer(e.FRAMEBUFFER,r,e.RENDERBUFFER,i)}}d.bindFramebuffer(e.FRAMEBUFFER,null)}function Oe(t,n,r){let i=f.get(t);n!==void 0&&we(i.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),r!==void 0&&De(t)}function ke(t){let n=t.texture,r=f.get(t),i=f.get(n);t.addEventListener(`dispose`,A);let a=t.textures,o=t.isWebGLCubeRenderTarget===!0,s=a.length>1;if(s||(i.__webglTexture===void 0&&(i.__webglTexture=e.createTexture()),i.__version=n.version,h.memory.textures++),o){r.__webglFramebuffer=[];for(let t=0;t<6;t++)if(n.mipmaps&&n.mipmaps.length>0){r.__webglFramebuffer[t]=[];for(let i=0;i<n.mipmaps.length;i++)r.__webglFramebuffer[t][i]=e.createFramebuffer()}else r.__webglFramebuffer[t]=e.createFramebuffer()}else{if(n.mipmaps&&n.mipmaps.length>0){r.__webglFramebuffer=[];for(let t=0;t<n.mipmaps.length;t++)r.__webglFramebuffer[t]=e.createFramebuffer()}else r.__webglFramebuffer=e.createFramebuffer();if(s)for(let t=0,n=a.length;t<n;t++){let n=f.get(a[t]);n.__webglTexture===void 0&&(n.__webglTexture=e.createTexture(),h.memory.textures++)}if(t.samples>0&&Fe(t)===!1){r.__webglMultisampledFramebuffer=e.createFramebuffer(),r.__webglColorRenderbuffer=[],d.bindFramebuffer(e.FRAMEBUFFER,r.__webglMultisampledFramebuffer);for(let n=0;n<a.length;n++){let i=a[n];r.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,r.__webglColorRenderbuffer[n]);let o=m.convert(i.format,i.colorSpace),s=m.convert(i.type),c=k(i.internalFormat,o,s,i.normalized,i.colorSpace,t.isXRRenderTarget===!0),l=Pe(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,l,c,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,r.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(r.__webglDepthRenderbuffer=e.createRenderbuffer(),Te(r.__webglDepthRenderbuffer,t,!0)),d.bindFramebuffer(e.FRAMEBUFFER,null)}}if(o){d.bindTexture(e.TEXTURE_CUBE_MAP,i.__webglTexture),ve(e.TEXTURE_CUBE_MAP,n);for(let i=0;i<6;i++)if(n.mipmaps&&n.mipmaps.length>0)for(let a=0;a<n.mipmaps.length;a++)we(r.__webglFramebuffer[i][a],t,n,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+i,a);else we(r.__webglFramebuffer[i],t,n,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+i,0);E(n)&&D(e.TEXTURE_CUBE_MAP),d.unbindTexture()}else if(s){for(let n=0,i=a.length;n<i;n++){let i=a[n],o=f.get(i),s=e.TEXTURE_2D;(t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(s=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),d.bindTexture(s,o.__webglTexture),ve(s,i),we(r.__webglFramebuffer,t,i,e.COLOR_ATTACHMENT0+n,s,0),E(i)&&D(s)}d.unbindTexture()}else{let a=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(a=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),d.bindTexture(a,i.__webglTexture),ve(a,n),n.mipmaps&&n.mipmaps.length>0)for(let i=0;i<n.mipmaps.length;i++)we(r.__webglFramebuffer[i],t,n,e.COLOR_ATTACHMENT0,a,i);else we(r.__webglFramebuffer,t,n,e.COLOR_ATTACHMENT0,a,0);E(n)&&D(a),d.unbindTexture()}t.depthBuffer&&De(t)}function Ae(e){let t=e.textures;for(let n=0,r=t.length;n<r;n++){let r=t[n];if(E(r)){let t=O(e),n=f.get(r).__webglTexture;d.bindTexture(t,n),D(t),d.unbindTexture()}}}let je=[],Me=[];function Ne(t){if(t.samples>0){if(Fe(t)===!1){let n=t.textures,r=t.width,i=t.height,a=e.COLOR_BUFFER_BIT,o=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,s=f.get(t),c=n.length>1;if(c)for(let t=0;t<n.length;t++)d.bindFramebuffer(e.FRAMEBUFFER,s.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),d.bindFramebuffer(e.FRAMEBUFFER,s.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);d.bindFramebuffer(e.READ_FRAMEBUFFER,s.__webglMultisampledFramebuffer);let l=t.texture.mipmaps;l&&l.length>0?d.bindFramebuffer(e.DRAW_FRAMEBUFFER,s.__webglFramebuffer[0]):d.bindFramebuffer(e.DRAW_FRAMEBUFFER,s.__webglFramebuffer);for(let l=0;l<n.length;l++){if(t.resolveDepthBuffer&&(t.depthBuffer&&(a|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&t.resolveStencilBuffer&&(a|=e.STENCIL_BUFFER_BIT)),c){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,s.__webglColorRenderbuffer[l]);let t=f.get(n[l]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,r,i,0,0,r,i,a,e.NEAREST),_===!0&&(je.length=0,Me.length=0,je.push(e.COLOR_ATTACHMENT0+l),t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&(je.push(o),Me.push(o),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,Me)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,je))}if(d.bindFramebuffer(e.READ_FRAMEBUFFER,null),d.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),c)for(let t=0;t<n.length;t++){d.bindFramebuffer(e.FRAMEBUFFER,s.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,s.__webglColorRenderbuffer[t]);let r=f.get(n[t]).__webglTexture;d.bindFramebuffer(e.FRAMEBUFFER,s.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,r,0)}d.bindFramebuffer(e.DRAW_FRAMEBUFFER,s.__webglMultisampledFramebuffer)}else if(t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&_){let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[n])}}}function Pe(e){return Math.min(p.maxSamples,e.samples)}function Fe(e){let n=f.get(e);return e.samples>0&&t.has(`WEBGL_multisampled_render_to_texture`)===!0&&n.__useRenderToTexture!==!1}function N(e){let t=h.render.frame;y.get(e)!==t&&(y.set(e,t),e.update())}function Ie(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(Bt.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&I(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):L(`WebGLTextures: Unsupported texture color space:`,n)),t}function Le(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(v.width=e.naturalWidth||e.width,v.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(v.width=e.displayWidth,v.height=e.displayHeight):(v.width=e.width,v.height=e.height),v}this.allocateTextureUnit=ue,this.resetTextureUnits=se,this.getTextureUnits=ce,this.setTextureUnits=le,this.setTexture2D=M,this.setTexture2DArray=fe,this.setTexture3D=pe,this.setTextureCube=me,this.rebindTextures=Oe,this.setupRenderTarget=ke,this.updateRenderTargetMipmap=Ae,this.updateMultisampleRenderTarget=Ne,this.setupDepthRenderbuffer=De,this.setupFrameBufferTexture=we,this.useMultisampledRTT=Fe,this.isReversedDepthBuffer=function(){return d.buffers.depth.getReversed()}}function Jl(e,t){function n(n,r=``){let i,a=Bt.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var Yl=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Xl=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Zl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new ca(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Sa({vertexShader:Yl,fragmentShader:Xl,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new W(new ua(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ql=class extends ot{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,l=null,u=null,f=null,p=null,m=null,h=typeof XRWebGLBinding<`u`,_=new Zl,v={},y=t.getContextAttributes(),b=null,S=null,C=[],w=[],T=new z,O=null,k=null,te=new ao;te.viewport=new Zt;let ne=new ao;ne.viewport=new Zt;let re=[te,ne],A=new _o,ie=null,j=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=C[e];return t===void 0&&(t=new Mn,C[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=C[e];return t===void 0&&(t=new Mn,C[e]=t),t.getGripSpace()},this.getHand=function(e){let t=C[e];return t===void 0&&(t=new Mn,C[e]=t),t.getHandSpace()};function ae(e){let t=w.indexOf(e.inputSource);if(t===-1)return;let n=C[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function oe(){r.removeEventListener(`select`,ae),r.removeEventListener(`selectstart`,ae),r.removeEventListener(`selectend`,ae),r.removeEventListener(`squeeze`,ae),r.removeEventListener(`squeezestart`,ae),r.removeEventListener(`squeezeend`,ae),r.removeEventListener(`end`,oe),r.removeEventListener(`inputsourceschange`,se);for(let e=0;e<C.length;e++){let t=w[e];t!==null&&(w[e]=null,C[e].disconnect(t))}ie=null,j=null,_.reset();for(let e in v)delete v[e];if(e.setRenderTarget(b),p=null,f=null,u=null,r=null,S=null,me.stop(),n.isPresenting=!1,e.setPixelRatio(O),e.setSize(T.width,T.height,!1),k!==null){let e=k.camera;e.fov=k.fov,e.zoom=k.zoom,e.updateProjectionMatrix(),k=null}n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&I(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&I(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return f===null?p:f},this.getBinding=function(){return u===null&&h&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(l){if(r=l,r!==null){if(b=e.getRenderTarget(),r.addEventListener(`select`,ae),r.addEventListener(`selectstart`,ae),r.addEventListener(`selectend`,ae),r.addEventListener(`squeeze`,ae),r.addEventListener(`squeezestart`,ae),r.addEventListener(`squeezeend`,ae),r.addEventListener(`end`,oe),r.addEventListener(`inputsourceschange`,se),y.xrCompatible!==!0&&await t.makeXRCompatible(),O=e.getPixelRatio(),e.getSize(T),h&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;y.depth&&(o=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=y.stencil?ee:D,a=y.stencil?x:g);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};u=this.getBinding(),f=u.createProjectionLayer(s),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),S=new $t(f.textureWidth,f.textureHeight,{format:E,type:d,depthTexture:new oa(f.textureWidth,f.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let n={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:i};p=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new $t(p.framebufferWidth,p.framebufferHeight,{format:E,type:d,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),me.setContext(r),me.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function se(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=w.indexOf(n);r>=0&&(w[r]=null,C[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=w.indexOf(n);if(r===-1){for(let e=0;e<C.length;e++)if(e>=w.length){w.push(n),r=e;break}else if(w[e]===null){w[e]=n,r=e;break}if(r===-1)break}let i=C[r];i&&i.connect(n)}}let ce=new B,le=new B;function ue(e,t,n){ce.setFromMatrixPosition(t.matrixWorld),le.setFromMatrixPosition(n.matrixWorld);let r=ce.distanceTo(le),i=t.projectionMatrix.elements,a=n.projectionMatrix.elements,o=i[14]/(i[10]-1),s=i[14]/(i[10]+1),c=(i[9]+1)/i[5],l=(i[9]-1)/i[5],u=(i[8]-1)/i[0],d=(a[8]+1)/a[0],f=o*u,p=o*d,m=r/(-u+d),h=m*-u;if(t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(h),e.translateZ(m),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert(),i[10]===-1)e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse);else{let t=o+m,n=s+m,i=f-h,a=p+(r-h),u=c*s/n*t,d=l*s/n*t;e.projectionMatrix.makePerspective(i,a,u,d,t,n),e.projectionMatrixInverse.copy(e.projectionMatrix).invert()}}function de(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;_.texture!==null&&(_.depthNear>0&&(t=_.depthNear),_.depthFar>0&&(n=_.depthFar)),A.near=ne.near=te.near=t,A.far=ne.far=te.far=n,(ie!==A.near||j!==A.far)&&(r.updateRenderState({depthNear:A.near,depthFar:A.far}),ie=A.near,j=A.far),A.layers.mask=e.layers.mask|6,te.layers.mask=A.layers.mask&-5,ne.layers.mask=A.layers.mask&-3;let i=e.parent,a=A.cameras;de(A,i);for(let e=0;e<a.length;e++)de(a[e],i);a.length===2?ue(A,te,ne):A.projectionMatrix.copy(te.projectionMatrix),k===null&&e.isPerspectiveCamera&&(k={camera:e,fov:e.fov,zoom:e.zoom}),M(e,A,i)};function M(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=ut*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(f!==null||p!==null)return s},this.setFoveation=function(e){s=e,f!==null&&(f.fixedFoveation=e),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=e)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(A)},this.getCameraTexture=function(e){return v[e]};let fe=null;function pe(t,i){if(l=i.getViewerPose(c||a),m=i,l!==null){let t=l.views;p!==null&&(e.setRenderTargetFramebuffer(S,p.framebuffer),e.setRenderTarget(S));let i=!1;t.length!==A.cameras.length&&(A.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(p!==null)a=p.getViewport(r);else{let t=u.getViewSubImage(f,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(S,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(S))}let o=re[n];o===void 0&&(o=new ao,o.layers.enable(n),o.viewport=new Zt,re[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(A.matrix.copy(o.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),i===!0&&A.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&h){u=n.getBinding();let e=u.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&_.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&h){e.state.unbindTexture(),u=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=v[n];e||(e=new ca,v[n]=e);let t=u.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<C.length;e++){let t=w[e],n=C[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}fe&&fe(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),m=null}let me=new Uo;me.setAnimationLoop(pe),this.setAnimationLoop=function(e){fe=e},this.dispose=function(){}}},$l=new nn,eu=new V;eu.set(-1,0,0,0,1,0,0,0,1);function tu(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,va(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4($l.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(eu),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.retroreflectivity>0&&(e.retroreflectivity.value=t.retroreflectivity),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessRange[0],e.iridescenceThicknessMaximum.value=t.iridescenceThicknessRange[1],t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function nu(e,t,n,r){let i={},a={},o=[],s=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function c(e,t){let n=t.program;r.uniformBlockBinding(e,n)}function l(e,n){let o=i[e.id];o===void 0&&(g(e),o=u(e),i[e.id]=o,e.addEventListener(`dispose`,v));let s=n.program;r.updateUBOMapping(e,s);let c=t.render.frame;a[e.id]!==c&&(f(e),a[e.id]=c)}function u(t){let n=d();t.__bindingPointIndex=n;let r=e.createBuffer(),i=t.__size,a=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,r),e.bufferData(e.UNIFORM_BUFFER,i,a),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,n,r),r}function d(){for(let e=0;e<s;e++)if(o.indexOf(e)===-1)return o.push(e),e;return L(`WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.`),0}function f(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)p(t[n],e,n,a);else p(t,e,0,a)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(t,n,r,i){if(h(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=_(i);m(i,t.__data,e),typeof i!=`number`&&typeof i!=`boolean`&&!i.isMatrix3&&!ArrayBuffer.isView(i)&&(e+=a.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function m(e,t,n){typeof e==`number`||typeof e==`boolean`?t[0]=e:e.isMatrix3?(t[0]=e.elements[0],t[1]=e.elements[1],t[2]=e.elements[2],t[3]=0,t[4]=e.elements[3],t[5]=e.elements[4],t[6]=e.elements[5],t[7]=0,t[8]=e.elements[6],t[9]=e.elements[7],t[10]=e.elements[8],t[11]=0):ArrayBuffer.isView(e)?t.set(new e.constructor(e.buffer,e.byteOffset,t.length)):e.toArray(t,n)}function h(e,t,n,r){let i=e.value,a=t+`_`+n;if(r[a]===void 0)return r[a]=typeof i==`number`||typeof i==`boolean`?i:ArrayBuffer.isView(i)?i.slice():i.clone(),!0;{let e=r[a];if(typeof i==`number`||typeof i==`boolean`){if(e!==i)return r[a]=i,!0}else if(ArrayBuffer.isView(i))return!0;else if(e.equals(i)===!1)return e.copy(i),!0}return!1}function g(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let e=0,t=r.length;e<t;e++){let t=r[e],i=Array.isArray(t.value)?t.value:[t.value];for(let e=0,r=i.length;e<r;e++){let r=i[e],a=_(r),o=n%16,s=o%a.boundary,c=o+s;n+=s,c!==0&&16-c<a.storage&&(n+=16-c),t.__data=new Float32Array(a.storage/Float32Array.BYTES_PER_ELEMENT),t.__offset=n,n+=a.storage}}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function _(e){let t={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(t.boundary=4,t.storage=4):e.isVector2?(t.boundary=8,t.storage=8):e.isVector3||e.isColor?(t.boundary=16,t.storage=12):e.isVector4?(t.boundary=16,t.storage=16):e.isMatrix3?(t.boundary=48,t.storage=48):e.isMatrix4?(t.boundary=64,t.storage=64):e.isTexture?I(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(t.boundary=16,t.storage=e.byteLength):I(`WebGLRenderer: Unsupported uniform value type.`,e),t}function v(t){let n=t.target;n.removeEventListener(`dispose`,v);let r=o.indexOf(n.__bindingPointIndex);o.splice(r,1),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function y(){for(let t in i)e.deleteBuffer(i[t]);o=[],i={},a={}}return{bind:c,update:l,dispose:y}}var ru=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),iu=null;function au(){return iu===null&&(iu=new wi(ru,16,16,te,v),iu.name=`DFG_LUT`,iu.minFilter=c,iu.magFilter=c,iu.wrapS=r,iu.wrapT=r,iu.generateMipmaps=!1,iu.needsUpdate=!0),iu}var ou=class{constructor(e={}){let{canvas:t=$e(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:c=!1,powerPreference:l=`default`,failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:p=!1,outputBufferType:h=d}=e;this.isWebGLRenderer=!0;let _;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);_=n.getContextAttributes().alpha}else _=a;let S=h,C=new Set([re,ne,k]),w=new Set([d,g,m,x,y,b]),T=new Uint32Array(4),E=new Int32Array(4),D=new B,ee=null,O=null,te=[],A=[],ie=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let j=this,ae=!1,oe=null,se=null,ce=null,le=null;this._outputColorSpace=He;let ue=0,de=0,M=null,fe=-1,pe=null,me=new Zt,he=new Zt,ge=null,_e=new U(0),ve=0,ye=t.width,be=t.height,xe=1,Se=null,Ce=null,we=new Zt(0,0,ye,be),Te=new Zt(0,0,ye,be),Ee=!1,De=new Li,Oe=!1,ke=!1,Ae=new nn,je=new B,Me=new Zt,Ne={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Pe=!1;function Fe(){return M===null?xe:1}let N=n;function Ie(e,n){return t.getContext(e,n)}let Le,Re,P,ze,F,Be,Ve,Ue,We,Ge,Ke,qe,Je,Xe,Ze,Qe,et,nt,rt,at,ot,st,ct;try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:f};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r186`),t.addEventListener(`webglcontextlost`,dt,!1),t.addEventListener(`webglcontextrestored`,R,!1),t.addEventListener(`webglcontextcreationerror`,ft,!1),N===null){let t=`webgl2`;if(N=Ie(t,e),N===null)throw Ie(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}lt()}catch(e){throw t.removeEventListener(`webglcontextlost`,dt,!1),t.removeEventListener(`webglcontextrestored`,R,!1),t.removeEventListener(`webglcontextcreationerror`,ft,!1),L(`WebGLRenderer: `+e.message),e}function lt(){Le=new ws(N),Le.init(),ot=new Jl(N,Le),Re=new $o(N,Le,e,ot),P=new Kl(N,Le),Re.reversedDepthBuffer&&p&&P.buffers.depth.setReversed(!0),se=N.createFramebuffer(),ce=N.createFramebuffer(),le=N.createFramebuffer(),ze=new Ds(N),F=new El,Be=new ql(N,Le,P,F,Re,ot,ze),Ve=new Cs(j),Ue=new Wo(N),st=new Zo(N,Ue),We=new Ts(N,Ue,ze,st),Ge=new ks(N,We,Ue,st,ze),nt=new Os(N,Re,Be),Ze=new es(F),Ke=new Tl(j,Ve,Le,Re,st,Ze),qe=new tu(j,F),Je=new Al,Xe=new Ll(Le),et=new Xo(j,Ve,P,Ge,_,s),Qe=new Gl(j,Ge,Re),ct=new nu(N,ze,Re,P),rt=new Qo(N,Le,ze),at=new Es(N,Le,ze),ze.programs=Ke.programs,j.capabilities=Re,j.extensions=Le,j.properties=F,j.renderLists=Je,j.shadowMap=Qe,j.state=P,j.info=ze}S!==1009&&(ie=new js(S,t.width,t.height,o,r,i));let ut=new Ql(j,N);this.xr=ut,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let e=Le.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=Le.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return xe},this.setPixelRatio=function(e){e!==void 0&&(xe=e,this.setSize(ye,be,!1))},this.getSize=function(e){return e.set(ye,be)},this.setSize=function(e,n,r=!0){ut.isPresenting?I(`WebGLRenderer: Can't change size while VR device is presenting.`):(ye=e,be=n,t.width=Math.floor(e*xe),t.height=Math.floor(n*xe),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),ie!==null&&ie.setSize(t.width,t.height),this.setViewport(0,0,e,n))},this.getDrawingBufferSize=function(e){return e.set(ye*xe,be*xe).floor()},this.setDrawingBufferSize=function(e,n,r){ye=e,be=n,xe=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(S===1009)L(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);else{if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){I(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}ie.setEffects(e||[])}},this.getCurrentViewport=function(e){return e.copy(me)},this.getViewport=function(e){return e.copy(we)},this.setViewport=function(e,t,n,r){e.isVector4?we.set(e.x,e.y,e.z,e.w):we.set(e,t,n,r),P.viewport(me.copy(we).multiplyScalar(xe).round())},this.getScissor=function(e){return e.copy(Te)},this.setScissor=function(e,t,n,r){e.isVector4?Te.set(e.x,e.y,e.z,e.w):Te.set(e,t,n,r),P.scissor(he.copy(Te).multiplyScalar(xe).round())},this.getScissorTest=function(){return Ee},this.setScissorTest=function(e){P.setScissorTest(Ee=e)},this.setOpaqueSort=function(e){Se=e},this.setTransparentSort=function(e){Ce=e},this.getClearColor=function(e){return e.copy(et.getClearColor())},this.setClearColor=function(){et.setClearColor(...arguments)},this.getClearAlpha=function(){return et.getClearAlpha()},this.setClearAlpha=function(){et.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(M!==null){let t=M.texture.format;e=C.has(t)}if(e){let e=M.texture.type,t=w.has(e),n=et.getClearColor(),r=et.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(T[0]=i,T[1]=a,T[2]=o,T[3]=r,N.clearBufferuiv(N.COLOR,0,T)):(E[0]=i,E[1]=a,E[2]=o,E[3]=r,N.clearBufferiv(N.COLOR,0,E))}else r|=N.COLOR_BUFFER_BIT}t&&(r|=N.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&N.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),oe=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,dt,!1),t.removeEventListener(`webglcontextrestored`,R,!1),t.removeEventListener(`webglcontextcreationerror`,ft,!1),et.dispose(),Je.dispose(),Xe.dispose(),F.dispose(),Ve.dispose(),Ge.dispose(),st.dispose(),ct.dispose(),Ke.dispose(),ut.dispose(),ut.removeEventListener(`sessionstart`,yt),ut.removeEventListener(`sessionend`,bt),xt.stop()};function dt(e){e.preventDefault(),tt(`WebGLRenderer: Context Lost.`),ae=!0}function R(){tt(`WebGLRenderer: Context Restored.`),ae=!1;let e=ze.autoReset,t=Qe.enabled,n=Qe.autoUpdate,r=Qe.needsUpdate,i=Qe.type;lt(),ze.autoReset=e,Qe.enabled=t,Qe.autoUpdate=n,Qe.needsUpdate=r,Qe.type=i}function ft(e){L(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function pt(e){let t=e.target;t.removeEventListener(`dispose`,pt),mt(t)}function mt(e){ht(e),F.remove(e)}function ht(e){let t=F.get(e).programs;t!==void 0&&(t.forEach(function(e){Ke.releaseProgram(e)}),e.isShaderMaterial&&Ke.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=Ne);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=jt(e,t,n,r,i);P.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=We.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;st.setup(i,r,s,n,c);let h,g=rt;if(c!==null&&(h=Ue.get(c),g=at,g.setIndex(h)),i.isMesh)r.wireframe===!0?(P.setLineWidth(r.wireframeLinewidth*Fe()),g.setMode(N.LINES)):g.setMode(N.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),P.setLineWidth(e*Fe()),i.isLineSegments?g.setMode(N.LINES):i.isLineLoop?g.setMode(N.LINE_LOOP):g.setMode(N.LINE_STRIP)}else i.isPoints?g.setMode(N.POINTS):i.isSprite&&g.setMode(N.TRIANGLES);if(i.isBatchedMesh){if(Le.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?Ue.get(c).bytesPerElement:1,o=F.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(N,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function gt(e,t,n,r){oe!==null&&e.isNodeMaterial&&oe.setObject(r,e),Oe===!0&&Ze.setState(e,n,!1),e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,Dt(e,t,r),e.side=0,e.needsUpdate=!0,Dt(e,t,r),e.side=2):Dt(e,t,r)}this.compile=function(e,t,n=null){n===null&&(n=e),oe!==null&&oe.renderStart(e,t,n),O=Xe.get(n),O.init(t),A.push(O),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(O.pushLight(e),e.castShadow&&O.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(O.pushLight(e),e.castShadow&&O.pushShadow(e))}),O.setupLights(),oe!==null&&oe.updateLights(O.state.lightsArray),ke=this.localClippingEnabled,Oe=Ze.init(this.clippingPlanes,ke),Oe===!0&&Ze.setGlobalState(this.clippingPlanes,t),oe!==null&&Qe.render(O.state.shadowsArray,n,t);let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let i=e.material;if(i){if(Array.isArray(i))for(let a=0;a<i.length;a++){let o=i[a];gt(o,n,t,e),r.add(o)}else gt(i,n,t,e),r.add(i)}}),O=A.pop(),oe!==null&&oe.renderEnd(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){r.forEach(function(e){let t=F.get(e).currentProgram;(t===void 0||t.isReady())&&r.delete(e)}),r.size===0?t(e):setTimeout(n,10)}Le.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let _t=null;function vt(e){_t&&_t(e)}function yt(){xt.stop()}function bt(){xt.start()}let xt=new Uo;xt.setAnimationLoop(vt),typeof self<`u`&&xt.setContext(self),this.setAnimationLoop=function(e){_t=e,ut.setAnimationLoop(e),e===null?xt.stop():xt.start()},ut.addEventListener(`sessionstart`,yt),ut.addEventListener(`sessionend`,bt),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){L(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(ae===!0)return;oe!==null&&oe.renderStart(e,t);let n=ut.enabled===!0&&ut.isPresenting===!0,r=ie!==null&&(M===null||n)&&ie.begin(j,M);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),ut.enabled===!0&&ut.isPresenting===!0&&(ie===null||ie.isCompositing()===!1)&&(ut.cameraAutoUpdate===!0&&ut.updateCamera(t),t=ut.getCamera()),e.isScene===!0&&e.onBeforeRender(j,e,t,M),O=Xe.get(e,A.length),O.init(t),O.state.textureUnits=Be.getTextureUnits(),A.push(O),Ae.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),De.setFromProjectionMatrix(Ae,Ye,t.reversedDepth),ke=this.localClippingEnabled,Oe=Ze.init(this.clippingPlanes,ke),ee=Je.get(e,te.length),ee.init(),te.push(ee),ut.enabled===!0&&ut.isPresenting===!0){let e=j.xr.getDepthSensingMesh();e!==null&&St(e,t,-1/0,j.sortObjects)}St(e,t,0,j.sortObjects),ee.finish(),oe!==null&&oe.updateLights(O.state.lightsArray),j.sortObjects===!0&&ee.sort(Se,Ce),Pe=ut.enabled===!1||ut.isPresenting===!1||ut.hasDepthSensing()===!1,Pe&&et.addToRenderList(ee,e),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Oe===!0&&Ze.beginShadows();let i=O.state.shadowsArray;if(Qe.render(i,e,t),Oe===!0&&Ze.endShadows(),(r&&ie.hasRenderPass())===!1){let n=ee.opaque,r=ee.transmissive;if(O.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];wt(n,r,e,a)}Pe&&et.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];Ct(ee,e,n,n.viewport)}}else r.length>0&&wt(n,r,e,t),Pe&&et.render(e),Ct(ee,e,t)}M!==null&&de===0&&(Be.updateMultisampleRenderTarget(M),Be.updateRenderTargetMipmap(M)),r&&ie.end(j),e.isScene===!0&&e.onAfterRender(j,e,t),st.resetDefaultState(),fe=-1,pe=null,A.pop(),A.length>0?(O=A[A.length-1],Be.setTextureUnits(O.state.textureUnits),Oe===!0&&Ze.setGlobalState(j.clippingPlanes,O.state.camera)):O=null,te.pop(),ee=te.length>0?te[te.length-1]:null,oe!==null&&oe.renderEnd()};function St(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLightProbeGrid)O.pushLightProbeGrid(e);else if(e.isLight)O.pushLight(e),e.castShadow&&O.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||e.intersectsFrustum(De)){r&&Me.setFromMatrixPosition(e.matrixWorld).applyMatrix4(Ae);let i=Ge.update(e),a=e.material;a.visible&&ee.push(e,i,a,n,Me.z,null,t)}}else if((e.isMesh||e.isLine||e.isPoints)&&(!e.frustumCulled||e.intersectsFrustum(De))){let i=Ge.update(e),a=e.material;if(r&&(e.boundingSphere===void 0?(i.boundingSphere===null&&i.computeBoundingSphere(),Me.copy(i.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),Me.copy(e.boundingSphere.center)),Me.applyMatrix4(e.matrixWorld).applyMatrix4(Ae)),Array.isArray(a)){let r=i.groups;for(let o=0,s=r.length;o<s;o++){let s=r[o],c=a[s.materialIndex];c&&c.visible&&ee.push(e,i,c,n,Me.z,s,t)}}else a.visible&&ee.push(e,i,a,n,Me.z,null,t)}}let i=e.children;for(let e=0,a=i.length;e<a;e++)St(i[e],t,n,r)}function Ct(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;O.setupLightsView(n),Oe===!0&&Ze.setGlobalState(j.clippingPlanes,n),r&&P.viewport(me.copy(r)),i.length>0&&Tt(i,t,n),a.length>0&&Tt(a,t,n),o.length>0&&Tt(o,t,n),P.buffers.depth.setTest(!0),P.buffers.depth.setMask(!0),P.buffers.color.setMask(!0),P.setPolygonOffset(!1)}function wt(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(O.state.transmissionRenderTarget[r.id]===void 0){let e=Le.has(`EXT_color_buffer_half_float`)||Le.has(`EXT_color_buffer_float`);O.state.transmissionRenderTarget[r.id]=new $t(1,1,{generateMipmaps:!0,type:e?v:d,minFilter:u,samples:Math.max(4,Re.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Bt.workingColorSpace})}let a=O.state.transmissionRenderTarget[r.id],o=r.viewport||me;a.setSize(o.z*j.transmissionResolutionScale,o.w*j.transmissionResolutionScale);let s=j.getRenderTarget(),c=j.getActiveCubeFace(),l=j.getActiveMipmapLevel();j.setRenderTarget(a),j.getClearColor(_e),ve=j.getClearAlpha(),ve<1&&j.setClearColor(16777215,.5),j.clear(),Pe&&et.render(n);let f=j.toneMapping;j.toneMapping=0;let p=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),O.setupLightsView(r),Oe===!0&&Ze.setGlobalState(j.clippingPlanes,r),Tt(e,n,r),Be.updateMultisampleRenderTarget(a),Be.updateRenderTargetMipmap(a),Le.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,Et(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(Be.updateMultisampleRenderTarget(a),Be.updateRenderTargetMipmap(a))}j.setRenderTarget(s,c,l),j.setClearColor(_e,ve),p!==void 0&&(r.viewport=p),j.toneMapping=f}function Tt(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&Et(o,t,n,s,l,c)}}function Et(e,t,n,r,i,a){oe!==null&&i.isNodeMaterial&&oe.setObject(e,i),e.onBeforeRender(j,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(j,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,j.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,j.renderBufferDirect(n,t,r,i,e,a),i.side=2):j.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(j,t,n,r,i,a)}function Dt(e,t,n){t.isScene!==!0&&(t=Ne);let r=F.get(e),i=O.state.lights,a=O.state.shadowsArray,o=i.state.version,s=Ke.getParameters(e,i.state,a,t,n,O.state.lightProbeGridArray),c=Ke.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=Ve.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,pt),l=new Map,r.programs=l);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return kt(e,s),d}else s.uniforms=Ke.getUniforms(e),oe!==null&&e.isNodeMaterial&&oe.build(e,n,s),e.onBeforeCompile(s,j),d=Ke.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=Ze.uniform),kt(e,s),r.needsLights=z(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.sunLights.value=i.state.sun,f.sunLightShadows.value=i.state.sunShadow,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.sunShadowMatrix.value=i.state.sunShadowMatrix,f.sunShadowCascade.value=i.state.sunShadowCascade,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.lightProbeGrid=O.state.lightProbeGridArray.length>0,r.currentProgram=d,r.uniformsList=null,d}function Ot(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=Rc.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function kt(e,t){let n=F.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function At(e,t){if(e.length===0)return null;if(e.length===1)return e[0].texture===null?null:e[0];D.setFromMatrixPosition(t.matrixWorld);for(let t=0,n=e.length;t<n;t++){let n=e[t];if(n.texture!==null&&n.boundingBox.containsPoint(D))return n}return null}function jt(e,t,n,r,i){t.isScene!==!0&&(t=Ne),Be.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=M===null?j.outputColorSpace:M.isXRRenderTarget===!0?M.texture.colorSpace:Bt.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=Ve.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(M===null||M.isXRRenderTarget===!0)&&(h=j.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=F.get(r),y=O.state.lights;if(Oe===!0&&(ke===!0||e!==pe)){let t=e===pe&&r.id===fe;Ze.setState(r,e,t)}let b=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==y.state.version?b=!0:v.outputColorSpace===s?i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i._colorsTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i._colorsTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?b=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==Ze.numPlanes||v.numIntersection!==Ze.numIntersection)?b=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.toneMapping===h&&v.morphTargetsCount===_?!!v.lightProbeGrid!=O.state.lightProbeGridArray.length>0&&(b=!0):b=!0:b=!0:b=!0:(b=!0,v.__version=r.version);let x=v.currentProgram;b===!0&&(x=Dt(r,t,i),oe&&r.isNodeMaterial&&oe.onUpdateProgram(r,x,v));let S=!1,C=!1,w=!1,T=x.getUniforms(),E=v.uniforms;if(P.useProgram(x.program)&&(S=!0,C=!0,w=!0),r.id!==fe&&(fe=r.id,C=!0),v.needsLights){let e=At(O.state.lightProbeGridArray,i);v.lightProbeGrid!==e&&(v.lightProbeGrid=e,C=!0)}if(S||pe!==e){P.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),T.setValue(N,`projectionMatrix`,e.projectionMatrix),T.setValue(N,`viewMatrix`,e.matrixWorldInverse);let t=T.map.cameraPosition;t!==void 0&&t.setValue(N,je.setFromMatrixPosition(e.matrixWorld)),Re.logarithmicDepthBuffer&&T.setValue(N,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&T.setValue(N,`isOrthographic`,e.isOrthographicCamera===!0),pe!==e&&(pe=e,C=!0,w=!0)}if(v.needsLights&&(y.state.sunShadowMap.length>0&&T.setValue(N,`sunShadowMap`,y.state.sunShadowMap,Be),y.state.directionalShadowMap.length>0&&T.setValue(N,`directionalShadowMap`,y.state.directionalShadowMap,Be),y.state.spotShadowMap.length>0&&T.setValue(N,`spotShadowMap`,y.state.spotShadowMap,Be),y.state.pointShadowMap.length>0&&T.setValue(N,`pointShadowMap`,y.state.pointShadowMap,Be)),i.isSkinnedMesh){T.setOptional(N,i,`bindMatrix`),T.setOptional(N,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),T.setValue(N,`boneTexture`,e.boneTexture,Be))}i.isBatchedMesh&&(T.setOptional(N,i,`batchingTexture`),T.setValue(N,`batchingTexture`,i._matricesTexture,Be),T.setOptional(N,i,`batchingIdTexture`),T.setValue(N,`batchingIdTexture`,i._indirectTexture,Be),T.setOptional(N,i,`batchingColorTexture`),i._colorsTexture!==null&&T.setValue(N,`batchingColorTexture`,i._colorsTexture,Be));let D=n.morphAttributes;if((D.position!==void 0||D.normal!==void 0||D.color!==void 0)&&nt.update(i,n,x),(C||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,T.setValue(N,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(E.envMapIntensity.value=t.environmentIntensity),E.dfgLUT!==void 0&&(E.dfgLUT.value=au()),C){if(T.setValue(N,`toneMappingExposure`,j.toneMappingExposure),v.needsLights&&Mt(E,w),a&&r.fog===!0&&qe.refreshFogUniforms(E,a),qe.refreshMaterialUniforms(E,r,xe,be,O.state.transmissionRenderTarget[e.id]),v.needsLights&&v.lightProbeGrid){let e=v.lightProbeGrid;E.probesSH.value=e.texture,E.probesMin.value.copy(e.boundingBox.min),E.probesMax.value.copy(e.boundingBox.max),E.probesResolution.value.copy(e.resolution)}Rc.upload(N,Ot(v),E,Be)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(Rc.upload(N,Ot(v),E,Be),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&T.setValue(N,`center`,i.center),T.setValue(N,`modelViewMatrix`,i.modelViewMatrix),T.setValue(N,`normalMatrix`,i.normalMatrix),T.setValue(N,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];ct.update(n,x),ct.bind(n,x)}}return x}function Mt(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.sunLights.needsUpdate=t,e.sunLightShadows.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function z(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return ue},this.getActiveMipmapLevel=function(){return de},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(e,t,n){let r=F.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),F.get(e.texture).__webglTexture=t,F.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=F.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){M=e,ue=t,de=n;let r=null,i=!1,a=!1;if(e){let o=F.get(e);if(o.__useDefaultFramebuffer!==void 0){P.bindFramebuffer(N.FRAMEBUFFER,o.__webglFramebuffer),me.copy(e.viewport),he.copy(e.scissor),ge=e.scissorTest,P.viewport(me),P.scissor(he),P.setScissorTest(ge),fe=-1;return}if(o.__webglFramebuffer===void 0)Be.setupRenderTarget(e);else if(o.__hasExternalTextures)Be.rebindTextures(e,F.get(e.texture).__webglTexture,F.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&F.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);Be.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=F.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&Be.useMultisampledRTT(e)===!1?F.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,me.copy(e.viewport),he.copy(e.scissor),ge=e.scissorTest}else me.copy(we).multiplyScalar(xe).floor(),he.copy(Te).multiplyScalar(xe).floor(),ge=Ee;if(n!==0&&(r=se),P.bindFramebuffer(N.FRAMEBUFFER,r)&&P.drawBuffers(e,r),P.viewport(me),P.scissor(he),P.setScissorTest(ge),i){let r=F.get(e.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=F.get(e.textures[t]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=F.get(e.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,t.__webglTexture,n)}fe=-1};function Nt(e){let t=F.get(e);return(t.__readFormat!==e.format||t.__readType!==e.type)&&(t.__readFormat=e.format,t.__readType=e.type,t.__formatReadable=Re.textureFormatReadable(e.format),t.__typeReadable=Re.textureTypeReadable(e.type)),t}this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){L(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=F.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){P.bindFramebuffer(N.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;e.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+s);let u=Nt(o);if(u.__formatReadable===!1){L(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(u.__typeReadable===!1){L(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&N.readPixels(t,n,r,i,ot.convert(c),ot.convert(l),a)}finally{let e=M===null?null:F.get(M).__webglFramebuffer;P.bindFramebuffer(N.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=F.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){P.bindFramebuffer(N.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;e.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+s);let d=Nt(o);if(d.__formatReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(d.__typeReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let f=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,f),N.bufferData(N.PIXEL_PACK_BUFFER,a.byteLength,N.STREAM_READ),N.readPixels(t,n,r,i,ot.convert(l),ot.convert(u),0),N.bindBuffer(N.PIXEL_PACK_BUFFER,null);let p=M===null?null:F.get(M).__webglFramebuffer;P.bindFramebuffer(N.FRAMEBUFFER,p);let m=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await it(N,m,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,f),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,a),N.bindBuffer(N.PIXEL_PACK_BUFFER,null),N.deleteBuffer(f),N.deleteSync(m),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;Be.setTexture2D(e,0),N.copyTexSubImage2D(N.TEXTURE_2D,n,0,0,o,s,i,a),P.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=ot.convert(t.format),_=ot.convert(t.type),v;t.isData3DTexture?(Be.setTexture3D(t,0),v=N.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(Be.setTexture2DArray(t,0),v=N.TEXTURE_2D_ARRAY):(Be.setTexture2D(t,0),v=N.TEXTURE_2D),P.activeTexture(N.TEXTURE0),P.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,t.flipY),P.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),P.pixelStorei(N.UNPACK_ALIGNMENT,t.unpackAlignment);let y=P.getParameter(N.UNPACK_ROW_LENGTH),b=P.getParameter(N.UNPACK_IMAGE_HEIGHT),x=P.getParameter(N.UNPACK_SKIP_PIXELS),S=P.getParameter(N.UNPACK_SKIP_ROWS),C=P.getParameter(N.UNPACK_SKIP_IMAGES);P.pixelStorei(N.UNPACK_ROW_LENGTH,h.width),P.pixelStorei(N.UNPACK_IMAGE_HEIGHT,h.height),P.pixelStorei(N.UNPACK_SKIP_PIXELS,l),P.pixelStorei(N.UNPACK_SKIP_ROWS,u),P.pixelStorei(N.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=F.get(e),r=F.get(t),h=F.get(n.__renderTarget),g=F.get(r.__renderTarget);P.bindFramebuffer(N.READ_FRAMEBUFFER,h.__webglFramebuffer),P.bindFramebuffer(N.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,F.get(e).__webglTexture,i,d+n),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,F.get(t).__webglTexture,a,m+n)),N.blitFramebuffer(l,u,o,s,f,p,o,s,N.DEPTH_BUFFER_BIT,N.NEAREST);P.bindFramebuffer(N.READ_FRAMEBUFFER,null),P.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||F.has(e)){let n=F.get(e),r=F.get(t);P.bindFramebuffer(N.READ_FRAMEBUFFER,ce),P.bindFramebuffer(N.DRAW_FRAMEBUFFER,le);for(let e=0;e<c;e++)w?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,n.__webglTexture,i),T?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,r.__webglTexture,a),i===0?T?N.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):N.copyTexSubImage2D(v,a,f,p,l,u,o,s):N.blitFramebuffer(l,u,o,s,f,p,o,s,N.COLOR_BUFFER_BIT,N.NEAREST);P.bindFramebuffer(N.READ_FRAMEBUFFER,null),P.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?N.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?N.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):N.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):N.texSubImage2D(N.TEXTURE_2D,a,f,p,o,s,g,_,h);P.pixelStorei(N.UNPACK_ROW_LENGTH,y),P.pixelStorei(N.UNPACK_IMAGE_HEIGHT,b),P.pixelStorei(N.UNPACK_SKIP_PIXELS,x),P.pixelStorei(N.UNPACK_SKIP_ROWS,S),P.pixelStorei(N.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps&&N.generateMipmap(v),P.unbindTexture()},this.initRenderTarget=function(e){F.get(e).__webglFramebuffer===void 0&&Be.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?Be.setTextureCube(e,0):e.isData3DTexture?Be.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?Be.setTexture2DArray(e,0):Be.setTexture2D(e,0),P.unbindTexture()},this.resetState=function(){ue=0,de=0,M=null,P.reset(),st.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return Ye}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Bt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Bt._getUnpackColorSpace()}},su=class{handlers=new Map;on(e,t){let n=this.handlers.get(e);return n||(n=new Set,this.handlers.set(e,n)),n.add(t),()=>this.off(e,t)}off(e,t){this.handlers.get(e)?.delete(t)}emit(e,t){let n=this.handlers.get(e);if(n)for(let r of[...n])try{r(t)}catch(t){console.error(`[EventBus] handler for "${String(e)}" failed`,t)}}clear(){this.handlers.clear()}},cu={camera:`iso`,follow:!1,clock:`fast`,dayLengthMin:30,speed:1,sound:!0,debug:!1,language:`en`},lu=`voxel-castaway:settings`,uu=class{bus;value;constructor(e){this.bus=e,this.value={...cu,...this.read()}}read(){try{let e=localStorage.getItem(lu);if(!e)return{};let t=JSON.parse(e);return t&&typeof t==`object`?t:{}}catch{return{}}}set(e,t){this.value[e]!==t&&(this.value={...this.value,[e]:t},this.persist(),this.bus.emit(`settings:changed`,this.value))}patch(e){this.value={...this.value,...e},this.persist(),this.bus.emit(`settings:changed`,this.value)}reset(){this.value={...cu},this.persist(),this.bus.emit(`settings:changed`,this.value)}persist(){try{localStorage.setItem(lu,JSON.stringify(this.value))}catch{}}},du=`voxel-castaway`,fu=`world`,pu=`slot-1`,mu=`voxel-castaway:save-fallback`,hu=class{dbPromise=null;open(){return this.dbPromise||=new Promise(e=>{if(typeof indexedDB>`u`){e(null);return}let t;try{t=indexedDB.open(du,1)}catch{e(null);return}t.onupgradeneeded=()=>{let e=t.result;e.objectStoreNames.contains(fu)||e.createObjectStore(fu)},t.onsuccess=()=>e(t.result),t.onerror=()=>e(null),t.onblocked=()=>e(null),setTimeout(()=>e(null),2500)}),this.dbPromise}async save(e){let t=await this.open();if(t&&await new Promise(n=>{try{let r=t.transaction(fu,`readwrite`);r.objectStore(fu).put(e,pu),r.oncomplete=()=>n(!0),r.onerror=()=>n(!1),r.onabort=()=>n(!1)}catch{n(!1)}}))return!0;try{return localStorage.setItem(mu,JSON.stringify(e)),!0}catch{return!1}}async load(){let e=await this.open();if(e){let t=await new Promise(t=>{try{let n=e.transaction(fu,`readonly`).objectStore(fu).get(pu);n.onsuccess=()=>t(n.result??null),n.onerror=()=>t(null)}catch{t(null)}});if(t)return t}try{let e=localStorage.getItem(mu);if(e)return JSON.parse(e)}catch{}return null}async clear(){try{localStorage.removeItem(mu)}catch{}let e=await this.open();e&&await new Promise(t=>{try{let n=e.transaction(fu,`readwrite`);n.objectStore(fu).delete(pu),n.oncomplete=()=>t(),n.onerror=()=>t(),n.onabort=()=>t()}catch{t()}})}},gu=class e{s;constructor(e=2654435769){this.s=e>>>0}get state(){return this.s}set state(e){this.s=e>>>0}next(){let e=this.s+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}float(e=0,t=1){return e+this.next()*(t-e)}int(e,t){return t<e&&([e,t]=[t,e]),Math.floor(this.float(e,t+1))}chance(e){return this.next()<e}pick(e){return e[Math.min(e.length-1,Math.floor(this.next()*e.length))]}shuffle(e){for(let t=e.length-1;t>0;t--){let n=Math.floor(this.next()*(t+1));[e[t],e[n]]=[e[n],e[t]]}return e}weighted(e){let t=0;for(let[,n]of e)t+=Math.max(0,n);let n=this.next()*t;for(let[t,r]of e)if(n-=Math.max(0,r),n<=0)return t;return e[e.length-1][0]}fork(t){let n=(this.s^Math.imul(t|0,668265261))>>>0;return n=Math.imul(n^n>>>15,2246822507)>>>0,new e(n)}static seedFromString(e){let t=2166136261;for(let n=0;n<e.length;n++)t^=e.charCodeAt(n),t=Math.imul(t,16777619)>>>0;return t>>>0}},_u=class{day;fraction;mode;dayLengthSec;totalSeconds;lastLocalDayStamp;constructor(e){this.mode=e?.mode??`fast`,this.dayLengthSec=Math.max(600,(e?.dayLengthMin??30)*60),this.day=e?.day??1,this.totalSeconds=e?.totalSeconds??0,this.lastLocalDayStamp=Math.floor(Date.now()/864e5),this.fraction=this.mode===`real`?this.localFraction():e?.fraction??.345}localFraction(){let e=new Date;return(e.getHours()*3600+e.getMinutes()*60+e.getSeconds())/86400}setMode(e){e!==this.mode&&(this.mode=e,this.lastLocalDayStamp=Math.floor(Date.now()/864e5),e===`real`&&(this.fraction=this.localFraction()))}setDayLength(e){this.dayLengthSec=Math.max(600,e*60)}advanceHours(e){this.fraction=(this.fraction+e/24)%1,this.totalSeconds+=e*3600}update(e){if(this.totalSeconds+=e,this.mode===`real`){this.fraction=this.localFraction();let e=Math.floor(Date.now()/864e5);e!==this.lastLocalDayStamp&&(this.day+=Math.max(1,Math.min(4,e-this.lastLocalDayStamp)),this.lastLocalDayStamp=e)}else{for(this.fraction+=e/this.dayLengthSec;this.fraction>=1;)--this.fraction,this.day+=1;for(;this.fraction<0;)this.fraction+=1,--this.day}}get isNight(){return this.fraction<.245||this.fraction>.785}get phase(){let e=this.fraction;return e>=.21&&e<.305?`dawn`:e>=.305&&e<.705?`day`:e>=.705&&e<.815?`dusk`:`night`}get info(){let e=Math.floor(this.fraction*24*60),t=Math.floor(e/60)%24,n=e%60;return{day:this.day,fraction:this.fraction,hours:t,minutes:n,timeString:`${String(t).padStart(2,`0`)}:${String(n).padStart(2,`0`)}`,dayLengthSec:this.dayLengthSec,phase:this.phase,night:this.isNight,sunAngle:this.fraction}}},K={sand:15259048,sandLight:15917756,sandDark:13876102,wetSand:12757111,sandShadow:11901546,grass:7314005,grassLight:8826216,grassDark:5799493,grassDeep:4614969,soil:10124115,soilDark:8217154,stone:9278103,stoneLight:11185841,stoneDark:7172984,wood:9658687,woodDark:7357996,woodLight:11565647,woodGrey:9142125,bark:8017467,trunk:10121808,trunkDark:8215101,trunkRing:7031859,leaf:4165455,leafLight:5811044,leafDark:3044416,leafDry:9083466,coconut:7031343,coconutLight:9069112,coconutFlesh:15787983,skin:14920058,skinLight:15909010,skinDark:13209443,shirt:14178367,shirtDark:11354672,shirtLight:15233623,shorts:4152693,shortsDark:3164767,hair:4862759,hairLight:6440239,beard:5980464,eyeWhite:16249314,eyeDark:2762272,foam:15924214,waterShallow:6472903,waterMid:3119784,waterDeep:1402239,fire:16751164,fireLight:16765790,ember:16738858,ash:4867648,smoke:10134435,shellPink:15776176,shellCream:15918024,shellPurple:12159920,fish:8370633,fishDark:4950944,fishBelly:14477536,crab:14903882,crabDark:11881524,turtle:7248491,turtleDark:5207376,turtleShell:9075278,mermaid:9427144,mermaidHair:4161423,sail:15787468,sailDark:14075556,ship:7162421,shipDark:5256230,ghost:10475716,balloon:14838094,balloonStripe:15781770,chest:9067062,chestMetal:13214284,sos:15327951,white:16117728,black:2367773,grey:5659228,glass:7323546,berry:13193054,flower:15912810,sea:5815492,gold:15775840},vu=new U;function yu(e,t){let n=Math.min(255,Math.max(0,Math.round((e>>16&255)*t))),r=Math.min(255,Math.max(0,Math.round((e>>8&255)*t))),i=Math.min(255,Math.max(0,Math.round((e&255)*t)));return n<<16|r<<8|i}function bu(e,t,n){let r=e>>16&255,i=e>>8&255,a=e&255,o=t>>16&255,s=t>>8&255,c=t&255;return Math.round(r+(o-r)*n)<<16|Math.round(i+(s-i)*n)<<8|Math.round(a+(c-a)*n)}function xu(e,t,n=.055){return yu(e,1+(t()*2-1)*n)}function Su(e){return vu.setHex(e),[vu.r,vu.g,vu.b]}var Cu=2048,wu=4096,Tu=[{normal:[1,0,0],corners:[[1,0,1],[1,0,0],[1,1,0],[1,1,1]],delta:16777216,shade:.94},{normal:[-1,0,0],corners:[[0,0,0],[0,0,1],[0,1,1],[0,1,0]],delta:-16777216,shade:.9},{normal:[0,1,0],corners:[[0,1,1],[1,1,1],[1,1,0],[0,1,0]],delta:wu,shade:1},{normal:[0,-1,0],corners:[[0,0,0],[1,0,0],[1,0,1],[0,0,1]],delta:-4096,shade:.78},{normal:[0,0,1],corners:[[0,0,1],[1,0,1],[1,1,1],[0,1,1]],delta:1,shade:.96},{normal:[0,0,-1],corners:[[1,0,0],[0,0,0],[0,1,0],[1,1,0]],delta:-1,shade:.88}],q=class{colors=new Map;keys=[];colorCache=new Map;voxel;variation;seed;faceCount=0;constructor(e={}){this.voxel=Math.max(.01,e.voxel??.05),this.variation=e.variation??.045,this.seed=e.seed??1}range(e,t){if(t<this.voxel*.75){let t=Math.round(e/this.voxel-.5);return[t,t]}let n=Math.round((e-t/2)/this.voxel-.5),r=Math.round((e+t/2)/this.voxel-.5);return r<n&&(r=n),[n,r]}key(e,t,n){return((e+Cu)*wu+(t+Cu))*wu+(n+Cu)}box(e,t,n,r,i,a,o){let[s,c]=this.range(e,r),[l,u]=this.range(t,i),[d,f]=this.range(n,a);for(let e=s;e<=c;e++)for(let t=l;t<=u;t++)for(let n=d;n<=f;n++){let r=this.key(e,t,n);this.colors.has(r)||this.keys.push(r),this.colors.set(r,o)}return this}at(e,t,n,r,i){return this.box(e*r,t*r,n*r,r,r,r,i)}column(e,t,n,r,i,a){let o=Math.max(this.voxel,r-n);return this.box(e,(n+r)/2,t,i,o,i,a)}bar(e,t,n,r,i=n*.85){let a=new B().subVectors(t,e),o=a.length();if(o<1e-5)return this;let s=Math.max(1,Math.ceil(o/Math.max(this.voxel*.75,i)));for(let t=0;t<=s;t++){let i=t/s;this.box(e.x+a.x*i,e.y+a.y*i,e.z+a.z*i,n,n,n,r)}return this}get triangles(){return this.faceCount*2}get boxes(){return this.colors.size}get faces(){return this.faceCount}get isEmpty(){return this.colors.size===0}hash(e,t,n){let r=Math.sin(e*127.1+t*311.7+n*74.7+this.seed*19.19)*43758.5453;return r-Math.floor(r)}linear(e){let t=this.colorCache.get(e);return t||(t=Su(e),this.colorCache.set(e,t)),t}build(){let e=[],t=[],n=[],r=[],i=0,a=this.voxel;for(let o of this.keys){let s=o%wu,c=(o-s)/wu,l=c%wu,u=(c-l)/wu-Cu,d=l-Cu,f=s-Cu,p=this.colors.get(o),m=this.linear(p),h=1+(this.hash(u,d,f)-.5)*this.variation,g=u*a,_=d*a,v=f*a;for(let s of Tu){if(this.colors.has(o+s.delta))continue;let[c,l,u]=s.normal,d=s.shade*h;for(let[r,i,o]of s.corners)e.push(g+r*a,_+i*a,v+o*a),t.push(c,l,u),n.push(m[0]*d,m[1]*d,m[2]*d);r.push(i,i+1,i+2,i,i+2,i+3),i+=4,this.faceCount++}}let o=new Nr;return o.setAttribute(`position`,new xr(e,3)),o.setAttribute(`normal`,new xr(t,3)),o.setAttribute(`color`,new xr(n,3)),o.setIndex(r),o.computeBoundingSphere(),o.computeBoundingBox(),o}mesh(e=J(),t=!0,n=!0){let r=new W(this.build(),e);return r.castShadow=t,r.receiveShadow=n,r}},Eu=null;function J(){return Eu||=new wa({vertexColors:!0,roughness:.94,metalness:0}),Eu}var Du=9.4,Ou=7.4,ku=.25,Y={palm:{x:2.9,z:1.4},fire:{x:-1.6,z:1.4},shelter:{x:-3,z:-2.6},raft:{x:8.2,z:-.6,rot:-.22},lookout:{x:-4.6,z:-1.4},sos:{x:2,z:6},sandcastle:{x:6.2,z:5},wreck:{x:-5.6,z:4.8},bottleShore:{x:-7.9,z:4}},Au=[{key:`beach_west`,label:`zachodnia plaża`,x:-8,z:3.2,facing:-Math.PI/2},{key:`fishing`,label:`miejsce na ryby`,x:-8.1,z:1.3,facing:-Math.PI/2},{key:`beach_south`,label:`południowa plaża`,x:-1.6,z:6.5,facing:Math.PI},{key:`beach_east`,label:`wschodnia plaża`,x:8.1,z:1.9,facing:Math.PI/2},{key:`beach_north`,label:`północna plaża`,x:1.2,z:-6.3,facing:0},{key:`bottle_shore`,label:`spokojna zatoczka`,x:-7.8,z:4.2,facing:-Math.PI/2},{key:`palm`,label:`pod palmą`,x:2.9,z:2.55,facing:0},{key:`palm_shade`,label:`cień palmy`,x:4,z:.9,facing:Math.PI},{key:`fire`,label:`ognisko`,x:-1.6,z:2.55,facing:Math.PI},{key:`fire_side`,label:`obok ogniska`,x:-3.05,z:1.5,facing:Math.PI/2},{key:`shelter`,label:`zadaszenie`,x:-3,z:-1.15,facing:0},{key:`shelter_inside`,label:`w środku zadaszenia`,x:-3,z:-2.4,facing:0},{key:`raft`,label:`tratwa`,x:7.15,z:.25,facing:Math.PI/2},{key:`raft_launch`,label:`miejsce wodowania`,x:8.35,z:-.35,facing:Math.PI/2},{key:`lookout`,label:`punkt widokowy`,x:-4.5,z:-.3,facing:0},{key:`sos`,label:`napis SOS`,x:2,z:5.2,facing:0},{key:`sandcastle`,label:`zamek z piasku`,x:6.2,z:4.2,facing:Math.PI},{key:`wreck`,label:`wraki na plaży`,x:-5.2,z:4,facing:Math.PI},{key:`bush1`,label:`krzew jagodowy`,x:1.6,z:-1.2,facing:Math.PI/2},{key:`bush2`,label:`krzew jagodowy`,x:-4.2,z:2.1,facing:-Math.PI/2},{key:`bush3`,label:`krzew jagodowy`,x:-.4,z:3.7,facing:Math.PI},{key:`bush4`,label:`krzew jagodowy`,x:5.4,z:.9,facing:-Math.PI/2},{key:`grass_center`,label:`środek wyspy`,x:-3.8,z:.6},{key:`grass_north`,label:`północna trawa`,x:-.6,z:-3.8},{key:`grass_east`,label:`wschodni skraj trawy`,x:4.2,z:-3.8},{key:`grass_west`,label:`zachodni skraj trawy`,x:-5.4,z:-2.4},{key:`hill`,label:`trawiasta górka`,x:3.6,z:-2.6},{key:`shore_north`,label:`północny brzeg`,x:4.2,z:-5.9},{key:`shore_south`,label:`południowy brzeg`,x:3.4,z:6.6},{key:`horizon_watch`,label:`widok na horyzont`,x:-6.1,z:5.6,facing:-Math.PI/2},{key:`swim_west`,label:`płytka woda`,x:-9.9,z:1.6,water:!0},{key:`swim_south`,label:`płytka woda`,x:-1.2,z:7.9,water:!0},{key:`swim_east`,label:`płytka woda`,x:9.7,z:1.4,water:!0}];Object.fromEntries(Au.map(e=>[e.key,e.label]));var ju=class{group=new H;crown=new H;coconuts=[];swaySeed;constructor(e,t,n,r){this.group.position.set(e,n,t),this.swaySeed=r.float(0,Math.PI*2);let i=.05,a=new q({voxel:i,variation:.03}),o=0;for(let e=0;e<80;e++){let t=e/79,n=.1+e*i,r=.02+.66*t*t;o=r;let s=e<7?(1-e/7)*.075:0,c=.185-.03*t+s+Math.sin(t*38)*.008,l=Math.ceil(c/i);for(let t=-l;t<=l;t++)for(let o=-l;o<=l;o++){let s=t*i,l=o*i,u=Math.hypot(s,l);if(u>c)continue;let d=u>c-i*.85,f=this.hash(e*1.31,t*2.17,o*3.31);if(d&&f>.72)continue;let p=Math.atan2(l,s),m;m=e%8==0||e%8==1&&d?K.trunkRing:d&&Math.sin(p*7+e*.31)>.45?K.trunkDark:e%2?K.trunk:K.trunkDark,a.box(r+s,n,l,i,i,i,m)}}for(let e of[.4,1.8,3.1,4.4,5.6])for(let t=0;t<5;t++){let n=.13+t*.045,r=.06+t*.018;a.box(Math.cos(e)*n,r,Math.sin(e)*n,i*(2.2-t*.22),i*1.4,i*(1.8-t*.16),t%2?K.trunkDark:K.trunkRing)}let s=a.mesh(J());this.group.add(s);let c=new q({voxel:i,variation:.03});for(let e=0;e<9;e++){let t=e/9*Math.PI*2;c.box(Math.cos(t)*.13,-.1-e%2*.04,Math.sin(t)*.13,.1,.12,.1,K.trunkRing)}for(let e=0;e<10;e++){let t=e/10*Math.PI*2+r.float(-.13,.13),n=r.int(10,13),i=e%3,a=i===0?r.float(.016,.026):i===2?r.float(.05,.07):r.float(.03,.045),o=.1+(i===0?.12:i===2?-.06:.02),s=e%3==0?K.leaf:e%3==1?K.leafLight:K.leafDark,l=Math.cos(t),u=Math.sin(t),d=Math.cos(t+Math.PI/2),f=Math.sin(t+Math.PI/2);for(let e=0;e<n;e++){let t=.24+e*.18,r=.04+e*a+e*e*.0075,p=i===0?Math.sin(e/n*Math.PI)*.17:i===1?Math.sin(e/n*Math.PI)*.05:0,m=o-r+p,h=l*t,g=u*t,_=new B(h,m,g);if(c.box(h,m,g,.075,.055,.075,K.leafDark),e>0){let t=.24+(e-1)*.18,r=i===0?Math.sin((e-1)/n*Math.PI)*.17:i===1?Math.sin((e-1)/n*Math.PI)*.05:0,s=o-(.04+(e-1)*a+(e-1)*(e-1)*.0075)+r;c.bar(new B(l*t,s,u*t),_,.045,K.leafDark,.04)}if(c.box(h,m-.008,g,.11,.03,.11,s),e>0&&e<n-1)for(let t of[-1,1])for(let n=1;n<=3;n++){let r=.055+n*.075,a=new B(h+d*r*t,m-.012-n*.01+(i===0?n*.02:i===2?-n*.012:0),g+f*r*t);c.bar(_,a,.045,n===3?K.leafDark:(e+n)%7==0?K.leafLight:s,.045)}e===n-1&&c.bar(_,new B(h+l*.16,m-.05,g+u*.16),.04,K.leafDark,.05)}}for(let e=0;e<5;e++)c.box(Math.sin(e*.8)*.03,.16+e*.1,Math.cos(e*1.1)*.03,.075-e*.006,.12,.075-e*.006,e%2?K.leafLight:K.leaf);for(let e of[.9,4.3])for(let t=0;t<7;t++){let n=.2+t*.16;c.box(Math.cos(e)*n,-.12-t*.105-t*t*.012,Math.sin(e)*n,.08,.05,.12,t%3?K.leafDry:K.trunkRing)}let l=c.mesh(J());this.crown.position.set(o+.01,4.069999999999999,0),this.crown.add(l);for(let[e,t,n,r]of[[.3,-.16,.12,.2],[-.16,-.19,.3,.18],[.02,-.22,-.27,.17]]){let i=new q({voxel:.025,variation:.03});i.box(0,0,0,r,r*1.05,r,K.coconut),i.box(.02,r*.36,.02,r*.6,r*.2,r*.6,K.coconutLight),i.box(-r*.34,0,0,r*.14,r*.35,r*.4,K.trunkDark),i.box(r*.36,0,-r*.12,r*.12,r*.2,r*.16,K.trunkRing);let a=i.mesh(J());a.position.set(e,t,n),this.crown.add(a),this.coconuts.push(a)}this.group.add(this.crown),this.group.traverse(e=>{e instanceof W&&(e.castShadow=!0,e.receiveShadow=!0)})}hash(e,t,n){let r=Math.sin(e*127.1+t*311.7+n*74.7)*43758.5453;return r-Math.floor(r)}setCoconuts(e){let t=Math.max(0,Math.min(this.coconuts.length,Math.round(e)));this.coconuts.forEach((e,n)=>{e.visible=n<t})}get coconutCount(){return this.coconuts.filter(e=>e.visible).length}update(e,t){this.crown.rotation.x=Math.sin(e*.62+this.swaySeed)*.014-t*.05,this.crown.rotation.z=Math.cos(e*.47+this.swaySeed*1.7)*.02+t*.035,this.crown.rotation.y=Math.sin(e*.21+this.swaySeed)*.01}},Mu=.05,Nu=-10.5,Pu=-8.5,Fu=420,Iu=340;function Lu(e){let t=Math.max(0,Math.min(1,e));return t*t*(3-2*t)}var Ru=class{group=new H;berries=[];leaves;swaySeed;stock=4;constructor(e,t,n,r){this.group.position.set(e,n,t),this.swaySeed=r.float(0,6.28);let i=new q({voxel:.05,variation:.03}),a=r.int(18,24);for(let e=0;e<a;e++){let t=e/a*Math.PI*2+r.float(-.2,.2),n=r.float(.1,.48),o=r.float(.2,.66),s=r.float(.08,.16);for(let e=0;e<3;e++)i.box(Math.cos(t)*n+r.float(-.09,.09),o+r.float(-.07,.07),Math.sin(t)*n+r.float(-.09,.09),s*r.float(.7,1.15),s*r.float(.6,1.05),s*r.float(.7,1.15),r.pick([K.leaf,K.leafDark,K.leafLight,K.leaf,K.grassDark]))}i.box(0,.15,0,.13,.24,.13,K.woodDark);for(let e=0;e<4;e++){let t=e/4*Math.PI*2+.4;i.box(Math.cos(t)*.1,.3,Math.sin(t)*.1,.045,.3,.045,K.wood)}this.leaves=i.mesh(J()),this.group.add(this.leaves);for(let e=0;e<4;e++){let e=new q({voxel:.025,variation:.025});e.box(0,0,0,.09,.09,.09,K.berry),e.box(.03,.03,.03,.04,.04,.04,K.shellPink);let t=e.mesh(J()),n=r.float(0,Math.PI*2);t.position.set(Math.cos(n)*.4,r.float(.3,.55),Math.sin(n)*.4),this.group.add(t),this.berries.push(t)}this.group.traverse(e=>{e instanceof W&&(e.castShadow=!0,e.receiveShadow=!0)})}setStock(e){this.stock=Math.max(0,Math.min(4,e)),this.berries.forEach((e,t)=>{e.visible=t<this.stock})}update(e,t){this.leaves.rotation.z=Math.sin(e*1.1+this.swaySeed)*.012+t*.03,this.leaves.rotation.x=Math.cos(e*.9+this.swaySeed)*.01}},zu=class{group=new H;cell=ku;width=84;height=68;heights;blocked;spots=new Map;palm;shorelineTexture;shoreHalfSize=12;center=new z(0,0);rand;bushes=[];rockColliders=[];time=0;fineHeights;flatSpots=[];microDetails=null;constructor(e){this.rand=new gu(e^523124044),this.heights=new Uint8Array(5712),this.blocked=new Uint8Array(5712),this.fineHeights=new Uint8Array(Fu*Iu),this.buildHeights(),this.buildFlatSpots(),this.buildFineHeights(),this.buildTerrain(),this.addRockCluster(Y.lookout.x,Y.lookout.z,1.35,!0),this.addRockCluster(7.7,2.9,.72,!1),this.addRockCluster(-2.1,-5.6,.8,!1),this.addRockCluster(-8.5,5,.62,!1),this.addRockCluster(6.4,-4.5,.7,!1),this.buildWreck(),this.buildBushes(),this.buildDetails();let t=this.heightAt(Y.palm.x,Y.palm.z);this.palm=new ju(Y.palm.x,Y.palm.z,t,this.rand),this.group.add(this.palm.group),this.reserveCircle(Y.palm.x,Y.palm.z,.55),this.palm.setCoconuts(3),this.shorelineTexture=this.buildShoreTexture()}landFactor(e,t){let n=e/Du,r=t/Ou,i=Math.hypot(n,r);if(i>1.4)return-.5;let a=Math.atan2(r,n);return 1-i/(1+.055*Math.sin(a*3+.7)+.04*Math.sin(a*5-1.1)+.025*Math.sin(a*9+2.3)+.012*Math.sin(e*.55+t*.35)+.006*Math.sin(a*37+1.7)+.004*Math.sin(e*3.9+t*2.7))}heightLayers(e,t){let n=this.landFactor(e,t);if(n<=.012)return 0;if(n<.2)return 2;if(n>.48){let n=e-3.4,r=t+2.5;if(n*n+r*r<2.56)return 6}return 4}buildHeights(){for(let e=0;e<68;e++)for(let t=0;t<84;t++){let n=this.cellX(t),r=this.cellZ(e);this.heights[e*84+t]=this.heightLayers(n,r)}}cellX(e){return(e-83/2)*ku}cellZ(e){return(e-67/2)*ku}cellCoords(e,t){let n=Math.round(e/ku+83/2),r=Math.round(t/ku+67/2);return n<0||r<0||n>=84||r>=68?null:[n,r]}layerAt(e,t){let n=this.heightAt(e,t);return n<=.02?0:n<.72?2:4}heightAt(e,t){let n=Math.floor((e-Nu)/Mu),r=Math.floor((t-Pu)/Mu);return n<0||r<0||n>=Fu||r>=Iu?0:this.fineHeights[r*Fu+n]*Mu}baseHeight(e,t,n){if(e<=.012)return 0;let r;r=e<.2?.24+Lu(e/.2)*.36:e<.48?.6+Lu((e-.2)/.28)*.4:1;let i=t-3.4,a=n+2.5,o=Math.hypot(i,a);return o<2.2&&(r+=(1-Lu(o/2.2))*.5),r}buildFlatSpots(){let e=[[Y.palm.x,Y.palm.z,.55],[Y.fire.x,Y.fire.z,.95],[Y.shelter.x,Y.shelter.z,1.4],[Y.raft.x,Y.raft.z,.95],[Y.sos.x,Y.sos.z,.9],[Y.sandcastle.x,Y.sandcastle.z,.85],[Y.wreck.x,Y.wreck.z,1.15],[Y.lookout.x,Y.lookout.z,.9]];this.flatSpots=e.map(([e,t,n])=>({x:e,z:t,r:n,h:this.baseHeight(this.landFactor(e,t),e,t)}))}buildFineHeights(){for(let e=0;e<Iu;e++)for(let t=0;t<Fu;t++){let n=Nu+(t+.5)*Mu,r=Pu+(e+.5)*Mu,i=this.landFactor(n,r);if(i<=.012){this.fineHeights[e*Fu+t]=0;continue}let a=this.baseHeight(i,n,r),o=0,s=a;for(let e of this.flatSpots){let t=Math.hypot(n-e.x,r-e.z);if(t>=e.r+.55)continue;let i=1-Lu((t-e.r)/.55);i>o&&(o=i,s=e.h)}o>0&&(a=a*(1-o)+s*o),a=Math.max(Mu,Math.round(a/Mu)*Mu),this.fineHeights[e*Fu+t]=Math.min(255,Math.round(a/Mu))}}isWalkable(e,t){let n=this.cellCoords(e,t);if(!n)return!1;let[r,i]=n;return this.heights[i*84+r]>0&&this.blocked[i*84+r]===0}walkableCell(e,t){return e<0||t<0||e>=84||t>=68?!1:this.heights[t*84+e]>0&&this.blocked[t*84+e]===0}topAt(e,t){return this.heightAt(this.cellX(e),this.cellZ(t))}reserveCircle(e,t,n){let r=Math.ceil(n/ku),[i,a]=this.cellCoords(e,t)??[42,34];for(let o=-r;o<=r;o++)for(let s=-r;s<=r;s++){let r=i+s,c=a+o;if(r<0||c<0||r>=84||c>=68)continue;let l=this.cellX(r)-e,u=this.cellZ(c)-t;l*l+u*u<=n*n&&(this.blocked[c*84+r]=1)}}fineTopColor(e,t,n,r){if(n<.68||r<.21)return r<.055||n<.3?K.wetSand:r<.125?K.sandDark:r<.185?K.sand:K.sandLight;let i=Math.sin(e*.37+t*.23)*.5+Math.cos(t*.29-e*.17)*.5,a=i>.58?K.grassLight:i<-.55?K.grassDark:K.grass;i<-.82&&(a=K.grassDeep),r<.27&&(a=bu(a,K.sandDark,.28));let o=Math.hypot(e-Y.fire.x,t-Y.fire.z),s=Math.hypot(e-Y.shelter.x,t-Y.shelter.z);return(o<1.15||s<1.25)&&(a=bu(K.soil,K.sandDark,.3)),Math.hypot(e-Y.palm.x,t-Y.palm.z)<.9&&(a=bu(a,K.soilDark,.32)),a}fineSideColor(e,t,n,r){return n<.28?K.wetSand:n<.64?r<.1?K.sandDark:K.sandShadow:n<1.02?bu(K.soilDark,K.sandShadow,.3):r>.45?K.stoneDark:K.grassDark}buildTerrain(){let e=[],t=[],n=[],r=[],i=new Map,a=0,o=(o,s,c,l=1)=>{let u=i.get(c);u||(u=Su(c),i.set(c,u));for(let[t,n,r]of o)e.push(t,n,r);for(let e=0;e<4;e++)t.push(s[0],s[1],s[2]);for(let e=0;e<4;e++)n.push(u[0]*l,u[1]*l,u[2]*l);r.push(a,a+1,a+2,a,a+2,a+3),a+=4},s=(o,s,c,l,u=1)=>{let d=i.get(c);d||(d=Su(c),i.set(c,d));let f=i.get(l);f||(f=Su(l),i.set(l,f));for(let[t,n,r]of o)e.push(t,n,r);for(let e=0;e<4;e++)t.push(s[0],s[1],s[2]);for(let e=0;e<4;e++){let t=e<2?d:f;n.push(t[0]*u,t[1]*u,t[2]*u)}r.push(a,a+1,a+2,a,a+2,a+3),a+=4},c=(e,t)=>e<0||t<0||e>=Fu||t>=Iu?0:this.fineHeights[t*Fu+e];for(let e=0;e<Iu;e++)for(let t=0;t<Fu;t++){let n=Nu+t*Mu,r=n+Mu,i=Pu+e*Mu,a=i+Mu,l=this.fineHeights[e*Fu+t];if(l===0){let e=n+Mu/2,t=i+Mu/2,s=this.landFactor(e,t);if(s>-.36&&s<.012){let e=Math.max(.1,.1+Math.min(.45,-s*1.55)),t=-Math.round(e/Mu)*Mu,c=bu(K.wetSand,K.sandDark,.35);o([[n,t,a],[r,t,a],[r,t,i],[n,t,i]],[0,1,0],c)}continue}let u=l*Mu,d=n+Mu/2,f=i+Mu/2,p=this.landFactor(d,f),m=this.fineTopColor(d,f,u,p);o([[n,u,a],[r,u,a],[r,u,i],[n,u,i]],[0,1,0],m);let h=[[1,0,1,[1,0,0],[[r,0,a],[r,0,i],[r,1,i],[r,1,a]],[1,0,0]],[-1,0,-1,[-1,0,0],[[n,0,i],[n,0,a],[n,1,a],[n,1,i]],[-1,0,0]],[0,1,1,[0,0,1],[[n,0,a],[r,0,a],[r,1,a],[n,1,a]],[0,0,1]],[0,-1,-1,[0,0,-1],[[r,0,i],[n,0,i],[n,1,i],[r,1,i]],[0,0,-1]]];for(let[n,r,,i,a]of h){let o=c(t+n,e+r)*Mu;if(u<=o+1e-6)continue;let l=a.map(([e,t,n])=>[e,t===0?o:u,n]);u-o>.2?s(l,i,this.fineSideColor(d,f,o+Mu*.5,p),this.fineSideColor(d,f,u-Mu*.5,p),1):s(l,[0,1,0],m,m,1)}}let l=new Nr;l.setAttribute(`position`,new xr(e,3)),l.setAttribute(`normal`,new xr(t,3)),l.setAttribute(`color`,new xr(n,3)),l.setIndex(r),l.computeBoundingSphere(),l.computeBoundingBox();let u=new W(l,J());u.name=`terrain-fine`,u.castShadow=!0,u.receiveShadow=!0,this.group.add(u)}addRockCluster(e,t,n,r){let i=this.heightAt(e,t),a=new q({voxel:.05,variation:.02}),o=this.rand,s=r?24:o.int(8,12);for(let e=0;e<s;e++){let e=o.float(0,Math.PI*2),t=o.float(0,n*.8),i=o.float(.22,.58)*(r?1.25:1),s=o.float(0,r?n*1.2:n*.5),c=Math.cos(e)*t,l=Math.sin(e)*t,u=s+i*.35,d=u-i*.28,f=i*o.float(.72,.98),p=o.int(3,5);for(let e=0;e<p;e++){let e=i*o.float(.13,.22);a.box(c+o.float(-i*.07,i*.07),d+e/2,l+o.float(-i*.07,i*.07),f,e,f*o.float(.72,1),o.pick([K.stone,K.stoneDark,K.stoneLight,K.stone])),a.box(c,d+e+.006,l,f*.86,.02,f*.78,K.stoneDark),d+=e+.025,f*=o.float(.78,.94)}for(let e=0;e<5;e++)a.box(c+o.float(-i*.55,i*.55),.035,l+o.float(-i*.55,i*.55),i*o.float(.1,.22),i*o.float(.08,.18),i*o.float(.1,.22),o.pick([K.stone,K.stoneDark,K.stoneLight]));a.box(c,u+i*.05,l+i*.42,i*.5,.025,.02,K.black),o.chance(.18)&&a.box(Math.cos(e)*t+o.float(-.1,.1),s+i*.8,Math.sin(e)*t+o.float(-.1,.1),i*.5,.05,i*.5,o.pick([K.grassDark,K.grass,K.grassDeep]))}if(r){a.box(0,1.15,0,1.1,.36,.95,K.stoneLight),a.box(.12,1.4,.06,.5,.14,.5,K.stone),a.box(-.2,1.55,-.08,.28,.24,.28,K.stoneDark),a.box(-.18,1.72,-.06,.18,.14,.18,K.stone),a.box(-.16,1.83,-.05,.12,.1,.12,K.stoneLight),a.box(.25,1.5,-.2,.4,.12,.3,K.stoneDark);for(let e=0;e<5;e++){let t=e/5*Math.PI*2+.6;a.box(Math.cos(t)*.9,.12,Math.sin(t)*.9,.18,.2,.18,K.grassDark)}}let c=a.mesh(J());c.position.set(e,i,t),this.group.add(c),this.reserveCircle(e,t,n*.8),this.rockColliders.push({x:e,z:t,y:i})}buildWreck(){let{x:e,z:t}=Y.wreck,n=this.heightAt(e,t),r=new q({voxel:.05,variation:.03});for(let e=0;e<10;e++){let t=-.95+e*.2,n=1.62-Math.abs(e-4.5)*.1,i=Math.sin(e*.55)*.05;r.box(0,.13+i,t,n,.1,.19,e%2?K.wood:K.woodDark),r.box(n/2,.3+i,t,.1,.42,.1,K.woodLight),r.box(-n/2,.3+i,t,.1,.42,.1,K.woodLight),e%3==0&&r.box(n/2-.06,.12,t,.08,.1,.3,K.woodGrey)}for(let e=0;e<5;e++)r.box(-.85+e*.43,.08,-.2,.1,.09,2,K.woodGrey);r.box(.28,.95,.18,.13,1.9,.13,K.woodDark),r.box(.62,1.62,.18,.8,.08,.08,K.wood);for(let e=0;e<4;e++)for(let t=0;t<3;t++)(e!==3||t!==2)&&r.box(.3+t*.22,1.1+e*.2,.18,.2,.18,.04,(e+t)%2?K.sailDark:K.sail);r.box(.22,1.92,.18,.22,.22,.05,K.shirt),r.box(-.5,.38,-.45,.5,.55,.5,K.wood),r.box(-.5,.38,-.45,.54,.08,.54,K.woodDark),r.box(-.5,.58,-.45,.54,.06,.54,K.woodDark),r.box(.65,.35,-.55,.36,.32,.36,K.woodGrey),r.box(.65,.5,-.55,.4,.05,.4,K.woodDark),r.box(.02,.18,.55,.32,.08,.32,K.woodDark),r.box(.02,.23,.55,.26,.04,.26,K.woodGrey),r.box(.02,.27,.55,.2,.03,.2,K.woodDark),r.box(-1,.12,.5,.32,.05,.1,K.leafDark),r.box(-.85,.1,.65,.24,.04,.08,K.leaf),r.box(.9,.1,.6,.18,.04,.6,K.woodGrey),r.box(1.05,.09,-.1,.14,.04,.5,K.wood);let i=r.mesh(J());i.position.set(e,n,t),i.rotation.y=.45,this.group.add(i),this.reserveCircle(e,t,1.3);let a=new q({voxel:.05,variation:.03});a.box(0,.14,0,1.4,.22,.26,K.woodGrey),a.box(-.62,.2,.03,.4,.16,.2,K.woodDark),a.box(.55,.26,.02,.2,.12,.18,K.wood),a.box(.62,.32,.02,.08,.16,.08,K.woodGrey);let o=a.mesh(J());o.position.set(.4,this.heightAt(.4,7.1),7.1),o.rotation.y=-.3,this.group.add(o)}buildBushes(){for(let[e,t]of[[.8,-1.2],[-5,2.1],[-1.2,3.7],[4.6,.9]]){let n=new Ru(e,t,this.heightAt(e,t),this.rand);this.bushes.push(n),this.group.add(n.group),this.reserveCircle(e,t,.38)}}nearStructure(e,t,n=1){return[Y.fire,Y.shelter,Y.raft,Y.sos,Y.sandcastle,Y.wreck,Y.palm,Y.lookout].some(r=>Math.hypot(e-r.x,t-r.z)<n)}setMicroDetailVisible(e){this.microDetails&&(this.microDetails.visible=e)}buildDetails(){let e=this.rand.fork(77),t=new q({voxel:.025,variation:.025}),n=new q({voxel:.025,variation:.02}),r=(e,t)=>{let n=this.cellCoords(e,t);return!n||this.blocked[n[1]*84+n[0]]===1},i=(t,n,i,a,o)=>{for(let s=0;s<30;s++){let s=e.float(0,Math.PI*2),c=Math.sqrt(e.next())*i,l=t+Math.cos(s)*c,u=n+Math.sin(s)*c;if(!(this.heightAt(l,u)<=.02||r(l,u))&&this.layerAt(l,u)===(a===`beach`?2:4)&&!this.nearStructure(l,u,o))return{x:l,z:u,y:this.heightAt(l,u)}}return null},a=[[-6.5,5.8,7],[.9,6.9,8],[7.1,6.3,7],[4.2,-5.9,6],[-2.1,-6.2,5]],o=0;for(let[n,r,s]of a)for(let a=0;a<s;a++){let s=i(n,r,.7,`beach`,.7);if(s){if(a===0&&o<2){o++;for(let e=0;e<5;e++){let n=e/5*Math.PI*2;t.box(s.x+Math.cos(n)*.06,s.y+.025,s.z+Math.sin(n)*.06,.08,.03,.05,K.shellPink)}t.box(s.x,s.y+.03,s.z,.06,.04,.06,K.shellPink)}else{let n=e.pick([K.shellCream,K.shellPink,K.white]);t.box(s.x,s.y+.035,s.z,.09,.05,.08,n),t.box(s.x+.02,s.y+.055,s.z+.01,.05,.03,.05,bu(n,K.white,.35))}}}for(let[n,r]of[[-4.2,5.7],[8.5,3.1],[.2,-6.7],[-7.7,1.9]])for(let a=0;a<7;a++){let a=i(n,r,.65,`beach`,.7);a&&t.box(a.x,a.y+.03,a.z,e.float(.06,.11),.055,e.float(.06,.1),e.pick([K.stone,K.stoneDark,K.sandShadow]))}for(let[n,r]of[[-4.7,6.2],[5.8,6.8],[2.4,-6.5]])for(let a=0;a<4;a++){let o=i(n,r,.8,`beach`,.65);if(!o)continue;let s=e.float(0,Math.PI*2),c=e.float(.22,a===0?.62:.38);t.bar(new B(o.x,o.y+.035,o.z),new B(o.x+Math.cos(s)*c,o.y+.035,o.z+Math.sin(s)*c),.03,a===0?K.woodGrey:K.woodDark,.04)}let s=[[-5.8,.9,0],[-4.6,-3.7,1],[-1.3,-3.4,2],[1,-4.6,3],[4.3,3,4],[6.3,.5,5],[-2.6,4.4,6],[6.4,-2.6,7],[-6.6,-1.6,8],[2.2,-1.9,9]];for(let[t,r,a]of s){for(let o=0;o<7;o++){let o=i(t,r,.7,`grass`,1);if(!o)continue;let s=e.int(2,4);for(let t=0;t<s;t++){let r=e.float(0,Math.PI*2);n.box(o.x+Math.cos(r)*.035,o.y+.07,o.z+Math.sin(r)*.035,.03,e.float(.12,.2),.03,(a+t)%2?K.grass:K.grassLight)}}if(a<5)for(let a=0;a<2;a++){let a=i(t,r,.65,`grass`,1);if(!a)continue;let o=e.float(.13,.19);n.box(a.x,a.y+o/2,a.z,.025,o,.025,K.grassDark),n.box(a.x,a.y+o+.025,a.z,.065,.065,.065,e.pick([K.flower,K.white,K.shellPink]))}}for(let n=0;n<8;n++){let r=s[n%s.length],a=i(r[0],r[1],.55,`grass`,1);if(a)for(let n=0;n<3;n++){let r=e.float(0,Math.PI*2);t.box(a.x+Math.cos(r)*.05,a.y+.08,a.z+Math.sin(r)*.05,.04,e.float(.14,.22),.04,n%2?K.grass:K.grassDark)}}for(let[t,r]of[[-8.3,6.1],[7.2,6.8]])for(let a=0;a<5;a++){let a=i(t,r,.6,`beach`,.5);!a||this.landFactor(a.x,a.z)>.07||n.box(a.x,a.y+.03,a.z,e.float(.05,.09),.04,e.float(.05,.12),e.pick([K.leafDark,K.leafDry]))}for(let t=0;t<8;t++){let r=s[t%s.length],a=i(r[0],r[1],.55,`grass`,.9);if(a)for(let t=0;t<3;t++)n.box(a.x+e.float(-.07,.07),a.y+.025,a.z+e.float(-.07,.07),e.float(.035,.06),.03,e.float(.035,.06),e.pick([K.stoneDark,K.sandShadow,K.leafDry]))}for(let[e,n]of[[2.15,2.3],[3.55,2.9]]){let r=this.heightAt(e,n);t.box(e,r+.11,n,.18,.18,.18,K.coconut),t.box(e-.05,r+.19,n,.08,.04,.08,K.coconutLight)}let c=t.mesh(J(),!1,!0);c.name=`details`,this.group.add(c);let l=n.mesh(J(),!1,!0);l.name=`details-micro`,l.visible=!1,this.microDetails=l,this.group.add(l)}buildShoreTexture(){let e=new Uint8Array(65536);for(let t=0;t<128;t++)for(let n=0;n<128;n++){let r=(n/127*2-1)*this.shoreHalfSize,i=(t/127*2-1)*this.shoreHalfSize,a=this.landFactor(r,i),o=Math.max(0,Math.min(1,-a/.32)),s=(t*128+n)*4;e[s]=Math.round(o*255),e[s+1]=a>0?255:0,e[s+2]=0,e[s+3]=255}let t=new wi(e,128,128,E);return t.minFilter=c,t.magFilter=c,t.wrapS=r,t.wrapT=r,t.needsUpdate=!0,t}nearestWalkable(e,t,n=5){let r=this.cellCoords(e,t);if(!r)return null;let[i,a]=r,o=Math.ceil(n/ku);for(let n=0;n<=o;n++){let r=null;for(let o=-n;o<=n;o++)for(let s=-n;s<=n;s++){if(Math.max(Math.abs(s),Math.abs(o))!==n)continue;let c=i+s,l=a+o;if(!this.walkableCell(c,l))continue;let u=this.cellX(c),d=this.cellZ(l),f=Math.hypot(u-e,d-t);(!r||f<r.d)&&(r={x:u,z:d,y:this.topAt(c,l),i:c,j:l,d:f})}if(r)return r}return null}prepareSpots(){this.spots.clear();for(let e of Au){if(e.water){this.spots.set(e.key,{key:e.key,label:e.label,x:e.x,z:e.z,y:0,facing:e.facing,water:!0});continue}let t=this.nearestWalkable(e.x,e.z,4.5);t&&this.spots.set(e.key,{key:e.key,label:e.label,x:t.x,z:t.z,y:t.y,facing:e.facing,water:!1})}}getSpot(e){return this.spots.get(e)}randomWalkablePoint(e,t,n=99){for(let r=0;r<50;r++){let r=e.int(0,83),i=e.int(0,67);if(!this.walkableCell(r,i))continue;let a=this.cellX(r),o=this.cellZ(i);if(!(t&&Math.hypot(a-t.x,o-t.z)>n))return{x:a,z:o,y:this.topAt(r,i)}}return null}findBeachPoint(e){for(let t=0;t<40;t++){let t=e.int(0,83),n=e.int(0,67);if(!(this.heights[n*84+t]!==2||this.blocked[n*84+t]))return{x:this.cellX(t),z:this.cellZ(n),y:this.topAt(t,n)}}return this.nearestWalkable(-8,3,4)}groundAt(e,t){return this.heightAt(e,t)}isNearWater(e,t,n=2.4){let[r,i]=this.cellCoords(e,t)??[0,0],a=Math.ceil(n/ku);for(let e=-a;e<=a;e++)for(let t=-a;t<=a;t++){let n=r+t,a=i+e;if(!(n<0||a<0||n>=84||a>=68)&&this.heights[a*84+n]===0)return!0}return!1}setBushStocks(e){this.bushes.forEach((t,n)=>t.setStock(e[n]??0))}get bushCount(){return this.bushes.length}update(e,t,n){this.time=n,this.palm.update(n,t);for(let e of this.bushes)e.update(n,t)}get rockCount(){return this.rockColliders.length}};function Bu(){let e=document.createElement(`canvas`);e.width=64,e.height=64;let t=e.getContext(`2d`),n=t.createRadialGradient(32,32,2,32,32,31);n.addColorStop(0,`rgba(255,220,150,0.9)`),n.addColorStop(.35,`rgba(255,150,60,0.35)`),n.addColorStop(1,`rgba(255,120,40,0)`),t.fillStyle=n,t.fillRect(0,0,64,64);let r=new aa(e);return r.colorSpace=He,r}var Vu=class{group=new H;light;position;lit=!1;big=!1;flames=[];glow;glowBase=0;flameMats=[];embers;smoke;emberData=[];smokeData=[];time=0;constructor(e,t,n,r){this.position=new B(e,n,t),this.group.position.copy(this.position);let i=new q({voxel:.05,variation:.03});for(let e=0;e<20;e++){let t=e/20*Math.PI*2+.17,n=.54+r.float(-.07,.07),a=r.float(.1,.18);i.box(Math.cos(t)*n,a*.45,Math.sin(t)*n,a,a*r.float(.65,.95),a*r.float(.8,1.1),e%3==0?K.stoneLight:e%2?K.stone:K.stoneDark)}for(let e=0;e<7;e++){let t=e/7*Math.PI*2+.5;i.box(Math.cos(t)*.3,.07,Math.sin(t)*.3,.12,.1,.12,K.stoneDark)}i.box(0,.025,0,.95,.05,.95,K.ash),i.box(.16,.06,.12,.22,.05,.18,K.black),i.box(-.2,.06,-.06,.16,.04,.12,K.ash),i.box(-.22,.15,0,.85,.13,.16,K.woodDark),i.box(.18,.19,.1,.76,.13,.15,K.wood),i.box(.06,.25,-.12,.14,.16,.72,K.woodDark),i.box(-.08,.2,.18,.5,.11,.15,K.woodGrey),i.box(-.3,.16,.02,.9,.14,.18,K.woodDark),i.box(.24,.18,.12,.82,.14,.17,K.wood),i.box(.08,.24,-.18,.16,.16,.8,K.woodDark),i.box(-.08,.2,.22,.54,.12,.16,K.woodGrey),i.box(-.62,.14,.03,.2,.12,.16,K.black),i.box(.55,.16,.15,.18,.11,.14,K.black);for(let[e,t]of[[-.2,.06],[.18,-.12],[.02,.26],[.28,.22],[-.32,.18]])i.box(e,.06,t,.12,.05,.1,K.ember);i.box(.02,.06,.02,.55,.04,.42,K.ash);let a=new B(0,1.1,0);for(let e of[.25,2.35,4.45])i.bar(new B(Math.cos(e)*.58,.06,Math.sin(e)*.58),a,.04,K.woodDark);i.box(0,1.1,0,.18,.07,.18,K.wood),i.bar(new B(0,1.08,0),new B(0,.86,0),.018,K.woodLight),i.box(0,.78,.02,.26,.2,.26,bu(K.soil,K.stoneDark,.4)),i.box(0,.89,.02,.3,.035,.3,K.sandDark),i.box(-.15,.88,.02,.035,.11,.035,K.stoneDark),i.box(.15,.88,.02,.035,.11,.035,K.stoneDark),i.box(0,.7,.02,.22,.04,.22,K.ember);for(let e=0;e<5;e++){let t=.86+e%2*.13,n=.1+Math.floor(e/2)*.12;i.box(t,n,-.42,.12,.12,.52,e%2?K.wood:K.woodDark),i.box(t,n,-.68,.11,.11,.04,K.woodLight),i.box(t,n,-.16,.1,.1,.035,K.woodGrey)}i.box(.86,.08,-.42,.45,.035,.72,K.woodGrey),i.box(-.92,.2,.62,.24,.32,.24,K.wood),i.box(-.92,.2,.62,.26,.04,.26,K.chestMetal),i.box(-.92,.34,.62,.26,.04,.26,K.chestMetal),i.box(-.92,.36,.62,.2,.02,.2,K.waterShallow),i.bar(new B(-1.04,.36,.62),new B(-.8,.36,.62),.018,K.woodDark),i.box(1.08,.13,.62,.18,.12,.56,K.wood),i.box(1.08,.2,.62,.15,.02,.5,K.woodLight),i.box(1.08,.07,.62,.22,.06,.6,K.woodDark);for(let e=0;e<6;e++){let e=r.float(0,Math.PI*2),t=r.float(.72,1);i.box(Math.cos(e)*t,.035,Math.sin(e)*t,r.float(.06,.12),.05,r.float(.06,.12),K.stoneDark)}for(let[e,t]of[[-.12,.34],[.2,.3],[-.26,.3]])i.box(e,.08,t,.023,.14,.023,K.woodGrey);this.group.add(i.mesh(J())),K.ember,K.fire,K.fireLight,K.fireLight,K.fire;for(let e=0;e<30;e++){let t=e<10?0:e<22?1:2,n=t===0?r.float(.03,.12):t===1?r.float(.14,.26):r.float(.26,.36),i=r.float(0,Math.PI*2),a=t===0?r.float(.04,.065):r.float(.045,.085),o=t===0?r.float(.22,.42):t===1?r.float(.35,.72):r.float(.22,.52),s=new ui({color:t===0?e%2?K.fireLight:K.fire:t===1?e%3==0?K.fireLight:K.fire:K.ember,transparent:!0,opacity:t===2?.7:.86,toneMapped:!1}),c=new W(new la(a,o,a),s);c.position.set(Math.cos(i)*n,.06+o/2+r.float(-.01,.04),Math.sin(i)*n),c.rotation.z=r.float(-.22,.22),c.rotation.x=r.float(-.16,.16),c.castShadow=!1,this.group.add(c),this.flames.push(c),this.flameMats.push(s)}let o=new Ur({map:Bu(),color:16742954,transparent:!0,opacity:.32,depthWrite:!1,blending:2});this.glow=new ri(o),this.glow.position.set(0,.7,0),this.glow.scale.set(2.4,2.4,1),this.group.add(this.glow),this.light=new so(16751164,0,10,1.7),this.light.position.set(0,.9,0),this.group.add(this.light);let s=new Float32Array(138);for(let e=0;e<46;e++)this.emberData.push(this.spawnParticle(`ember`,r)),s[e*3+1]=-10;let c=new Nr;c.setAttribute(`position`,new vr(s,3)),this.embers=new na(c,new Zi({color:16756838,size:.07,transparent:!0,opacity:.9,depthWrite:!1,blending:2})),this.group.add(this.embers);let l=new Float32Array(102);for(let e=0;e<34;e++)this.smokeData.push(this.spawnParticle(`smoke`,r)),l[e*3+1]=-10;let u=new Nr;u.setAttribute(`position`,new vr(l,3)),this.smoke=new na(u,new Zi({color:12041398,size:.22,transparent:!0,opacity:.24,depthWrite:!1})),this.group.add(this.smoke),this.setLit(!1),this.group.traverse(e=>{e instanceof W&&!(e instanceof na)&&(e.castShadow=!0,e.receiveShadow=!0)});for(let e of this.flames)e.castShadow=!1}spawnParticle(e,t){let n=e===`ember`?t.float(.8,2.2):t.float(2.6,5.2);return{x:t.float(-.18,.18),y:t.float(.35,.6),z:t.float(-.18,.18),vx:t.float(-.08,.08),vy:e===`ember`?t.float(.45,.9):t.float(.22,.4),vz:t.float(-.08,.08),life:t.float(0,n),max:n}}setLit(e,t=!1){this.lit=e,this.big=t&&e,this.group.visible=!0,this.embers.visible=e,this.smoke.visible=e,this.glow.visible=e;for(let t of this.flames)t.visible=e;e||(this.light.intensity=0)}setBig(e){this.big=e&&this.lit}update(e,t,n,r){if(this.time=t,!this.lit)return;let i=this.big?1.45:1;for(let e=0;e<this.flames.length;e++){let n=this.flames[e],r=.72+Math.sin(t*(7.5+e*1.7)+e*2.1)*.18+Math.sin(t*17+e)*.08;n.scale.set((.8+Math.sin(t*9+e*1.3)*.18)*i,(.9+r*.7)*i,(.8+Math.cos(t*8+e)*.18)*i),n.position.x=Math.sin(t*3+e*1.9)*.07,n.position.z=Math.cos(t*2.4+e*1.1)*.07,n.rotation.y=t*(1.2+e*.3),this.flameMats[e].opacity=.6+Math.sin(t*11+e)*.18}let a=.82+Math.sin(t*13.2)*.1+Math.sin(t*7.3+1)*.08;this.light.intensity=(.9+n*6.2)*a*i,this.glowBase=(.12+n*.3)*a*i,this.glow.material.opacity=this.glowBase,this.glow.scale.setScalar((1.7+Math.sin(t*9)*.1)*i);let o=this.embers.geometry.getAttribute(`position`).array;for(let t=0;t<this.emberData.length;t++){let n=this.emberData[t];n.life+=e,n.life>=n.max&&(n.life=0,n.x=Math.sin(t*12.9898)*.16,n.z=Math.cos(t*78.233)*.16,n.y=.32),n.x+=(n.vx+r*.25)*e,n.y+=n.vy*e,n.z+=n.vz*e,o[t*3]=n.x,o[t*3+1]=n.y,o[t*3+2]=n.z}this.embers.geometry.getAttribute(`position`).needsUpdate=!0;let s=this.smoke.geometry.getAttribute(`position`).array;for(let t=0;t<this.smokeData.length;t++){let n=this.smokeData[t];n.life+=e,n.life>=n.max&&(n.life=0,n.x=Math.sin(t*4.1)*.2,n.z=Math.cos(t*2.7)*.2,n.y=.5),n.x+=(n.vx+r*.55)*e,n.y+=n.vy*e,n.z+=n.vz*e,s[t*3]=n.x,s[t*3+1]=n.y,s[t*3+2]=n.z}this.smoke.geometry.getAttribute(`position`).needsUpdate=!0}},Hu=class{group=new H;frame;complete;level=0;constructor(e,t,n){this.group.position.set(e,n,t),this.frame=new H,this.complete=new H;let r=new q({voxel:.05,variation:.03}),i=.14;for(let[e,t,n]of[[-.95,.85,1.72],[.95,.85,1.72],[-.95,-.85,2.08],[.95,-.85,2.08]]){r.box(e,n/2,t,i,n,i,K.wood),r.box(e,n,t,.2,.1,.2,K.woodDark);for(let n of[.36,.92,1.46])r.box(e,n,t,.2,.05,.2,K.woodDark)}r.box(0,1.74,.85,2.05,.12,.14,K.woodDark),r.box(0,2.1,-.85,2.05,.12,.14,K.woodDark);for(let e of[-1,1]){let t=new B(e*.95,1.76,.9);r.bar(t,new B(e*.95,2.12,-.9),.1,K.wood),r.box(e*.98,1.05,.88,.07,.9,.07,K.woodDark)}r.box(-.42,1.28,-.88,.62,.05,.28,K.woodLight),r.box(-.7,1.06,-.88,.05,.44,.05,K.woodDark),r.box(-.14,1.06,-.88,.05,.44,.05,K.woodDark),r.box(-.42,1.36,-.88,.16,.12,.16,K.coconut),r.box(-.24,1.33,-.88,.1,.07,.1,K.shellPink),r.box(1.03,.2,-.4,.34,.3,.34,K.wood),r.box(1.03,.36,-.4,.37,.05,.37,K.woodDark),r.bar(new B(-1.12,.08,.92),new B(-.8,1.55,.82),.032,K.woodDark),r.box(-.78,1.6,.81,.05,.2,.05,K.stoneLight),this.frame.add(r.mesh(J()));let a=new q({voxel:.05,variation:.03});for(let e=0;e<11;e++){let t=e/10,n=.99-t*1.98,r=1.78+t*.38;for(let t=0;t<11;t++){let i=-1.34+t*.27+e%2*.045,o=t===0||t===10,s=(e+t)%3;a.box(i,r+t%2*.012,n,.245,o?.085:.1,.23,o?K.trunkRing:s===0?K.leafDry:s===1?K.leaf:K.leafDry),t<10&&a.box(i+.13,r+.04,n+.1,.11,.06,.16,K.leaf)}a.box(0,r-.045,n+.11,2.72,.055,.09,K.leafDry)}for(let e=0;e<10;e++)a.box(-1.24+e*.27,1.72-e%3*.045,.99,.075,.24-e%2*.06,.12,K.leafDark);for(let e of[-1,1])for(let t=0;t<5;t++)for(let n=0;n<4;n++)a.box(e*1.04,.6+t*.3,-.55+n*.38,.085,.26-n%2*.06,.3,(t+n)%2?K.leafDry:K.leaf);a.box(0,2.17,-.85,2.35,.06,.08,K.woodDark),a.box(0,.15,-.3,1.5,.14,1.08,K.leafDry),a.box(-.12,.24,-.62,.56,.12,.32,K.sandLight),a.box(.25,.24,-.1,.62,.1,.7,K.leaf),a.box(.25,.3,-.1,.56,.04,.62,K.leafLight),a.box(-.5,.28,.05,.14,.05,.14,K.shellCream),a.box(.94,1.52,.86,.02,.25,.02,K.woodDark),a.box(.94,1.36,.86,.1,.1,.08,K.shellPink),a.box(.88,1.28,.86,.06,.08,.06,K.shellCream),a.box(.99,1.24,.86,.05,.07,.05,K.shellCream),this.complete.add(a.mesh(J()));let o=new q({voxel:.025,variation:.03});o.box(0,0,0,.11,.14,.11,K.glass),o.box(0,.08,0,.13,.03,.13,K.woodDark),o.box(0,.09,0,.04,.03,.04,K.fireLight);let s=o.mesh(new wa({color:K.glass,emissive:16754253,emissiveIntensity:1.1,transparent:!0,opacity:.92,roughness:.4}),!1,!1);s.position.set(-.95,1.34,.86),this.complete.add(s),this.frame.add(this.complete),this.group.add(this.frame),this.group.traverse(e=>{e instanceof W&&(e.castShadow=!0,e.receiveShadow=!0)}),this.setLevel(0)}setLevel(e){this.level=Math.max(0,Math.min(2,Math.round(e))),this.group.visible=this.level>0,this.complete.visible=this.level>=2}},Uu=class{group=new H;parts=[];progress=0;spot;constructor(e,t,n,r){this.group.position.set(e,n,t),this.group.rotation.y=r,this.spot=new B(e,n,t);let i=(e,t)=>{let n=new q({voxel:.05,variation:.03});t(n);let r=n.mesh(J());this.group.add(r),this.parts.push({object:r,level:e})};for(let e=0;e<7;e++)i(e<3?1:e<5?2:3,t=>{let n=-.6+e*.2;t.box(n,.09,0,.19,.18,2.08,e%2?K.wood:K.woodLight),t.box(n,.09,1.04,.17,.16,.05,K.woodDark),t.box(n,.09,-1.04,.17,.16,.05,K.woodDark),t.box(n,.19,0,.12,.03,1.95,K.woodDark),t.box(n,.09,1.065,.11,.11,.02,K.woodLight),t.box(n,.09,-1.065,.11,.11,.02,K.woodLight),t.box(n-.095,.09,0,.012,.13,1.9,K.woodDark),t.box(n+.095,.09,0,.012,.13,1.9,K.woodGrey);for(let e of[-.72,.02,.72])t.box(n,.2,e,.2,.04,.08,K.woodDark),t.box(n+.06,.2,e+.05,.05,.05,.05,K.sailDark)});i(3,e=>{for(let t of[-.72,.72]){e.box(0,.24,t,1.62,.09,.14,K.woodDark);for(let n=0;n<7;n++){let r=-.6+n*.2;e.box(r,.28,t,.12,.05,.17,K.sailDark)}}e.box(0,.18,0,1.5,.06,1.95,K.woodGrey)}),i(4,e=>{for(let t=0;t<5;t++){e.box(0,.31,-.62+t*.31,1.28,.07,.24,t%2?K.woodLight:K.wood),e.box(-.58,.31,-.62+t*.31,.06,.06,.22,K.woodDark),e.box(.58,.31,-.62+t*.31,.06,.06,.22,K.woodDark);for(let n of[-.48,.48])e.box(n,.35,-.62+t*.31,.025,.02,.025,K.chestMetal)}e.box(.36,.49,.4,.38,.32,.38,K.wood),e.box(.36,.66,.4,.42,.05,.42,K.woodDark),e.box(.36,.5,.59,.12,.12,.04,K.chestMetal);for(let t of[-.12,0,.12])e.box(.36+t,.49,.592,.025,.24,.012,K.woodDark);e.box(.36,.65,.4,.2,.015,.12,K.woodLight),e.box(-.38,.47,-.16,.3,.28,.3,K.woodGrey),e.box(-.38,.62,-.16,.32,.04,.32,K.woodDark),e.box(-.38,.44,-.16,.32,.04,.32,K.woodDark);for(let t=0;t<4;t++){let n=t/4*Math.PI*2;e.box(-.38+Math.cos(n)*.145,.51,-.16+Math.sin(n)*.145,.025,.22,.025,K.woodLight)}e.box(.12,.37,-.3,.2,.08,.2,K.sailDark),e.box(.12,.42,-.3,.16,.05,.16,K.woodDark),e.box(-.1,.38,.28,.16,.16,.16,K.coconut),e.box(-.1,.46,.28,.08,.04,.08,K.coconutLight);for(let t=0;t<3;t++)e.box(-.16+t*.06,.36,.36,.035,.035,.035,K.sailDark)}),i(5,e=>{e.box(0,1.2,-.1,.1,2.25,.1,K.woodDark),e.box(0,2.3,-.1,.36,.08,.36,K.wood),e.box(0,1.85,-.1,1.35,.07,.07,K.wood);for(let[t,n]of[[-.62,.95],[.62,.95],[-.62,-.95],[.62,-.95]])e.bar(new B(0,2.28,-.1),new B(t,.32,n),.022,K.woodDark);e.bar(new B(0,2.28,-.1),new B(0,.32,1),.02,K.sailDark),e.box(.62,.42,1,.06,.82,.06,K.wood),e.box(.62,.08,1,.16,.06,.3,K.woodLight),e.box(-.45,.4,.9,.05,.7,.05,K.wood),e.box(-.45,.58,.9,.12,.04,.28,K.woodLight)}),i(5,e=>{for(let t of[-.72,.72])e.box(1.02,.38,t,1.42,.09,.11,K.woodDark),e.box(.58,.3,t,.13,.13,.13,K.wood),e.box(1.72,.34,t,.16,.16,.16,K.woodDark),e.box(1.72,.22,t,.08,.24,.08,K.woodGrey),e.box(1.72,.1,t,.08,.06,.38,K.sailDark);e.box(1.72,.06,0,.18,.13,1.95,K.wood),e.box(1.72,.15,0,.11,.035,1.84,K.woodLight),e.box(1.72,-.005,0,.13,.035,1.8,K.woodDark),e.box(1.72,.24,0,.06,.06,.06,K.woodDark),e.bar(new B(.58,.38,.72),new B(1.72,.3,.72),.022,K.sailDark),e.bar(new B(.58,.38,-.72),new B(1.72,.3,-.72),.022,K.sailDark),e.box(0,2.06,-.1,.5,.06,.5,K.woodDark);for(let[t,n]of[[-.23,-.23],[.23,-.23],[-.23,.23],[.23,.23]])e.box(t,2.14,-.1+n,.045,.16,.045,K.woodDark);e.box(0,1.62,-.1,.12,.16,.12,K.fireLight),e.box(0,1.72,-.1,.16,.03,.16,K.woodDark),e.box(0,1.54,-.1,.16,.03,.16,K.woodDark),e.bar(new B(0,2.28,-.1),new B(1.54,.3,.7),.018,K.sailDark),e.bar(new B(0,2.28,-.1),new B(1.54,.3,-.7),.018,K.sailDark);for(let t=0;t<3;t++)e.box(.1,.38+t*.05,-.3,.24-t*.03,.035,.24-t*.03,K.woodGrey)}),i(6,e=>{for(let t=0;t<9;t++)for(let n=0;n<8;n++){let r=t===2&&n===5||t===6&&n===2||t===4&&n===1,i=t===2?K.shirt:t===4?K.leafDry:K.woodGrey;e.box(-.56+n*.16,.8+t*.16,-.13,.15,.15,.05,r?i:n%2?K.sail:K.sailDark)}e.box(0,1,-.1,1.3,.025,.05,K.sailDark),e.box(0,1.62,-.1,1.3,.025,.05,K.sailDark),e.box(0,1.52,-.17,.28,.24,.02,K.shirt),e.box(0,2.48,-.1,.05,.4,.05,K.woodDark),e.box(.18,2.56,-.1,.3,.18,.04,K.shirt),e.box(-.65,1.48,-.13,.03,1.35,.04,K.woodGrey),e.box(.65,1.48,-.13,.03,1.35,.04,K.woodGrey);for(let t=0;t<8;t+=2)for(let n=0;n<7;n+=2)e.box(-.55+n*.16,.84+t*.16,-.16,.03,.03,.02,K.sailDark);for(let t=3;t<6;t++)for(let n=1;n<4;n++)e.box(-.56+n*.16,.8+t*.16,-.135,.25,.14,.045,t===3&&n===1?K.leafDry:K.shirt);e.bar(new B(0,2.26,-.1),new B(.8,2.06,.4),.018,K.sailDark)}),this.group.traverse(e=>{e instanceof W&&(e.castShadow=!0,e.receiveShadow=!0)}),this.setProgress(0)}setProgress(e){this.progress=Math.max(0,Math.min(6,Math.round(e)));for(let e of this.parts)e.object.visible=e.level<=this.progress}get ready(){return this.progress>=6}},Wu=class{group=new H;first;rest;level=0;constructor(e,t,n){this.group.position.set(e,n,t),this.first=new H,this.rest=new H;let r=new q({voxel:.05,variation:.03});r.box(-1.22,.6,-.02,.13,1.25,.13,K.woodDark),r.box(1.22,.6,-.02,.13,1.25,.13,K.woodDark),r.box(0,1.2,-.02,2.6,.11,.11,K.wood),r.box(1.3,1.43,-.02,.05,.55,.05,K.woodDark),r.box(1.46,1.65,-.02,.3,.18,.035,K.shirt),r.box(-1.12,1.12,-.02,.12,.35,.11,K.wood),r.box(1.12,1.12,-.02,.12,.35,.11,K.wood),r.box(-.6,.16,.08,.22,.16,.22,K.stoneDark),r.box(.62,.15,.08,.22,.15,.22,K.stone),this.first.add(r.mesh(J()));let i=new q({voxel:.05,variation:.03});this.letterS(i,-.86,K.sos),this.first.add(i.mesh(J()));let a=new q({voxel:.05,variation:.03});this.letterO(a,0,K.sos),this.first.add(a.mesh(J()));let o=new q({voxel:.05,variation:.03});this.letterS(o,.86,K.sos),this.rest.add(o.mesh(J())),this.group.add(this.first,this.rest),this.group.traverse(e=>{e instanceof W&&(e.castShadow=!0,e.receiveShadow=!0)}),this.setLevel(0)}letterS(e,t,n){let r=.56,i=.11,a=.07;e.box(t,1.03,a,r,i,.13,n),e.box(t-r/2+i/2,1.6099999999999999/2,a,i,.45000000000000007,.13,n),e.box(t,.58,a,r,i,.13,n),e.box(t+r/2-i/2,.72/2,a,i,.43999999999999995,.13,n),e.box(t,.14,a,r,i,.13,n)}letterO(e,t,n){let r=.62,i=.11,a=.07;e.box(t,1.03,a,r,i,.13,n),e.box(t,.14,a,r,i,.13,n),e.box(t-r/2+i/2,1.17/2,a,i,.89,.13,n),e.box(t+r/2-i/2,1.17/2,a,i,.89,.13,n)}setLevel(e){this.level=Math.max(0,Math.min(2,Math.round(e))),this.group.visible=this.level>0,this.first.visible=this.level>=1,this.rest.visible=this.level>=2}},Gu=class{group=new H;towers;flag;level=0;constructor(e,t,n){this.group.position.set(e,n,t);let r=new q({voxel:.05,variation:.03});r.box(0,.06,0,1.72,.12,1.42,K.wetSand);for(let e=0;e<12;e++){let t=e/12*Math.PI*2;r.box(Math.cos(t)*.78,.055,Math.sin(t)*.62,.24,.05,.16,K.sandShadow)}r.box(0,.2,0,1.5,.18,1.2,K.sand),r.box(0,.31,0,1.22,.12,.92,K.sandLight);for(let e=0;e<8;e++){let t=e/8*Math.PI*2+.2;r.box(Math.cos(t)*.58,.43,Math.sin(t)*.42,.18,.22,.18,K.sand),r.box(Math.cos(t)*.58,.57,Math.sin(t)*.42,.12,.08,.12,K.sandLight)}r.box(-.17,.44,.55,.12,.34,.14,K.sand),r.box(.17,.44,.55,.12,.34,.14,K.sand),r.box(0,.63,.55,.48,.1,.16,K.sandLight),r.box(0,.38,.56,.22,.22,.05,K.sandShadow),this.group.add(r.mesh(J())),this.towers=new H;let i=new q({voxel:.05,variation:.03});for(let[e,t,n]of[[-.52,-.38,.78],[.52,-.38,.64],[-.52,.4,.55],[.52,.4,.68]]){i.box(e,.3+n/2,t,.32,n,.32,K.sand),i.box(e,.32+n,t,.4,.08,.4,K.sandLight);for(let r=0;r<4;r++)i.box(e-.14+r*.095,.37+n,t-.14,.06,.14,.06,K.sandLight),i.box(e-.14+r*.095,.37+n,t+.14,.06,.14,.06,K.sandLight);i.box(e,.3+n*.62,t+.17,.08,.12,.04,K.sandShadow)}i.box(0,.72,-.06,.46,.82,.46,K.sand),i.box(0,1.16,-.06,.56,.1,.56,K.sandLight);for(let e=0;e<3;e++)i.box(-.18+e*.18,1.26,-.06,.08,.12,.08,K.sandLight);i.box(0,.8,.19,.1,.16,.04,K.sandShadow),i.box(0,.66,.19,.1,.1,.04,K.sandShadow),this.towers.add(i.mesh(J())),this.flag=new H;let a=new q({voxel:.05,variation:.03});a.box(0,1.56,-.06,.04,.55,.04,K.woodDark),a.box(.17,1.76,-.06,.3,.18,.035,K.shirt),a.box(.17,1.88,-.06,.2,.04,.03,K.shellPink),a.box(-.5,.58,.42,.1,.06,.1,K.shellPink),a.box(.44,.56,.38,.09,.05,.09,K.shellCream),a.box(.6,.5,-.3,.1,.05,.08,K.shellPurple),a.box(-.25,.52,.6,.12,.04,.16,K.woodDark),this.flag.add(a.mesh(J())),this.towers.add(this.flag),this.group.add(this.towers),this.group.traverse(e=>{e instanceof W&&(e.castShadow=!0,e.receiveShadow=!0)}),this.setLevel(0)}setLevel(e){this.level=Math.max(0,Math.min(3,Math.round(e))),this.group.visible=this.level>0,this.towers.visible=this.level>=2,this.flag.visible=this.level>=3}},Ku=class{group=new H;campfire;shelter;raft;sos;sandcastle;constructor(e,t){let n=e.heightAt(Y.fire.x,Y.fire.z);this.campfire=new Vu(Y.fire.x,Y.fire.z,n,t);let r=e.heightAt(Y.shelter.x,Y.shelter.z);this.shelter=new Hu(Y.shelter.x,Y.shelter.z,r);let i=e.heightAt(Y.raft.x,Y.raft.z);this.raft=new Uu(Y.raft.x,Y.raft.z,i,Y.raft.rot);let a=e.heightAt(Y.sos.x,Y.sos.z);this.sos=new Wu(Y.sos.x,Y.sos.z,a);let o=e.heightAt(Y.sandcastle.x,Y.sandcastle.z);this.sandcastle=new Gu(Y.sandcastle.x,Y.sandcastle.z,o),this.group.add(this.campfire.group,this.shelter.group,this.raft.group,this.sos.group,this.sandcastle.group),e.reserveCircle(Y.fire.x,Y.fire.z,.72);for(let[t,n]of[[-.95,.85],[.95,.85],[-.95,-.85],[.95,-.85]])e.reserveCircle(Y.shelter.x+t,Y.shelter.z+n,.16);e.reserveCircle(Y.raft.x,Y.raft.z,.95),e.reserveCircle(Y.sos.x,Y.sos.z,.42),e.reserveCircle(Y.sandcastle.x,Y.sandcastle.z,.7)}update(e,t,n,r){this.campfire.update(e,t,n,r)}},qu=[`none`,`halloween`,`christmas`,`newyear`,`stpatrick`,`independence`];function Ju(e=new Date){let t=e.getMonth()+1,n=e.getDate();return t===10&&n===31?`halloween`:t===12&&(n===24||n===25||n===26)?`christmas`:t===12&&n===31||t===1&&n===1?`newyear`:t===3&&n===17?`stpatrick`:t===7&&n===4?`independence`:`none`}var Yu=class{group=new H;sets=new Map;kind=`none`;island;constructor(e,t){this.island=t,e.add(this.group),this.sets.set(`halloween`,this.halloween()),this.sets.set(`christmas`,this.christmas()),this.sets.set(`newyear`,this.newyear()),this.sets.set(`stpatrick`,this.stpatrick()),this.sets.set(`independence`,this.independence());for(let e of this.sets.values())e.visible=!1,this.group.add(e),e.traverse(e=>{e instanceof W&&(e.castShadow=!0,e.receiveShadow=!0)});this.setKind(Ju())}setKind(e){this.kind=e;for(let[t,n]of this.sets)n.visible=t===e}cycle(){let e=qu[(qu.indexOf(this.kind)+1)%qu.length];return this.setKind(e),e}place(e,t,n){let r=e.mesh(J());return r.position.set(t,this.island.heightAt(t,n),n),r}halloween(){let e=new H,t=new q({voxel:.025,variation:.03}),n=bu(K.fire,K.ember,.65),r=bu(K.ember,K.woodDark,.25);t.box(0,.18,0,.34,.3,.32,n),t.box(0,.18,0,.38,.24,.36,r),t.box(0,.35,0,.3,.06,.28,n),t.box(0,.42,0,.07,.1,.07,K.leafDark),t.box(-.08,.08,.17,.05,.08,.02,K.black),t.box(.08,.08,.17,.05,.08,.02,K.black),t.box(0,.02,.17,.17,.04,.02,K.black),t.box(-.05,.01,.17,.03,.045,.02,K.black),t.box(.05,.01,.17,.03,.045,.02,K.black);let i=this.place(t,-2.7,3.15);e.add(i);let a=new q({voxel:.025,variation:.03});return a.box(0,.5,0,.04,.9,.04,K.woodGrey),a.box(0,.62,.02,.24,.28,.05,K.white),a.box(-.08,.68,.05,.035,.04,.02,K.black),a.box(.08,.68,.05,.035,.04,.02,K.black),e.add(this.place(a,-3.35,2.85)),e}christmas(){let e=new H,t=new q({voxel:.05,variation:.03});t.box(0,.22,0,.16,.44,.16,K.woodDark),t.box(0,.52,0,.62,.24,.62,K.leafDark),t.box(0,.7,0,.48,.22,.48,K.leaf),t.box(0,.87,0,.32,.2,.32,K.leafLight),t.box(0,1,0,.18,.1,.18,K.gold);for(let e=0;e<7;e++){let n=e/7*Math.PI*2+.3;t.box(Math.cos(n)*.26,.58+e%3*.1,Math.sin(n)*.26,.07,.07,.07,e%2?K.shirt:K.gold)}let n=this.place(t,-4.6,1.5);n.scale.setScalar(.9),e.add(n);let r=new q({voxel:.025,variation:.03});for(let e=0;e<12;e++){let t=e/12*Math.PI*2;r.box(Math.cos(t)*.28,Math.sin(t)*.28,0,.12,.12,.06,e%3==0?K.leafLight:K.leafDark)}r.box(0,-.28,.04,.16,.08,.06,K.shirt);let i=r.mesh(J());return i.position.set(-3,this.island.heightAt(-3,-1.15)+1.55,-.5299999999999999),e.add(i),e}newyear(){let e=new H,t=new q({voxel:.05,variation:.03});for(let e of[-1,1])t.box(e,1,0,.08,2,.08,K.woodDark),t.box(e,2.03,0,.14,.08,.14,K.gold);t.box(0,2,0,2.1,.035,.035,K.woodGrey);let n=[K.shirt,K.gold,K.leaf,K.white];for(let e=0;e<9;e++)t.box(-.9+e*.22,1.85,.02,.15,.2,.025,n[e%n.length]),t.box(-.9+e*.22,1.95,.02,.03,.12,.03,K.woodDark);return e.add(this.place(t,-2.4,3.65)),e}stpatrick(){let e=new H,t=new q({voxel:.025,variation:.03});t.box(0,.35,0,.05,1,.05,K.woodDark),t.box(0,.72,.03,.3,.3,.04,K.leafDark),t.box(-.09,.78,.06,.14,.14,.04,K.leaf),t.box(.09,.78,.06,.14,.14,.04,K.leaf),t.box(0,.9,.06,.14,.14,.04,K.leafLight),t.box(0,.52,.04,.18,.16,.08,K.gold),e.add(this.place(t,-3.6,3));let n=new q({voxel:.025,variation:.03});for(let e=0;e<6;e++)n.box(-1+e*.4,1.25-e*.05,0,.22,.18,.02,e%2?K.leaf:K.gold);return e.add(this.place(n,-2.8,1.5)),e}independence(){let e=new H,t=new q({voxel:.025,variation:.03});for(let[e,n,r]of[[-3.2,3.1,K.shirt],[-2.6,3.3,K.white],[-3,3.6,K.shorts]])t.box(e,.5,n,.04,1,.04,K.woodGrey),t.box(e+.18,.9,n,.32,.2,.03,r);return e.add(this.place(t,0,0)),e}},Xu=`
varying vec3 vDir;
void main() {
  vDir = position;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,Zu=`
uniform vec3 uTop;
uniform vec3 uHorizon;
uniform vec3 uSunColor;
uniform vec3 uSunDir;
uniform float uGlow;
varying vec3 vDir;
void main() {
  vec3 dir = normalize(vDir);
  float h = dir.y;
  vec3 col = mix(uHorizon, uTop, smoothstep(-0.02, 0.09, h));
  float sunDot = max(dot(dir, normalize(uSunDir)), 0.0);
  col += uSunColor * (pow(sunDot, 220.0) * 0.55 + pow(sunDot, 14.0) * 0.14) * uGlow;
  gl_FragColor = vec4(col, 1.0);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}
`;function Qu(){let e=document.createElement(`canvas`);e.width=64,e.height=64;let t=e.getContext(`2d`),n=t.createRadialGradient(32,32,1,32,32,31);n.addColorStop(0,`rgba(255,250,225,0.85)`),n.addColorStop(.3,`rgba(255,225,160,0.35)`),n.addColorStop(1,`rgba(255,200,120,0)`),t.fillStyle=n,t.fillRect(0,0,64,64);let r=new aa(e);return r.colorSpace=He,r}var $u=class{group=new H;dome;domeUniforms;sunGroup=new H;moonGroup=new H;sunGlow;moonGlow;stars;starMaterial;clouds=[];cloudMaterial;time=0;glowMap;constructor(e){this.glowMap=Qu(),this.domeUniforms={uTop:{value:new U(7321293)},uHorizon:{value:new U(14216418)},uSunColor:{value:new U(16773320)},uSunDir:{value:new B(.4,.8,.5).normalize()},uGlow:{value:1}};let t=new Sa({uniforms:this.domeUniforms,vertexShader:Xu,fragmentShader:Zu,side:1,depthWrite:!1,fog:!1});this.dome=new W(new da(260,32,20),t),this.dome.frustumCulled=!1,this.dome.renderOrder=-10,this.group.add(this.dome);let n=new ui({color:16774092,toneMapped:!1}),r=new W(new la(6,6,6),n);this.sunGroup.add(r),this.sunGlow=new ri(new Ur({map:this.glowMap,color:16769960,transparent:!0,opacity:.8,depthWrite:!1,blending:2})),this.sunGlow.scale.set(38,38,1),this.sunGroup.add(this.sunGlow),this.group.add(this.sunGroup);let i=new ui({color:15264988,toneMapped:!1});this.moonGroup.add(new W(new la(4.5,4.5,3),i)),this.moonGlow=new ri(new Ur({map:this.glowMap,color:11454942,transparent:!0,opacity:.35,depthWrite:!1,blending:2})),this.moonGlow.scale.set(22,22,1),this.moonGroup.add(this.moonGlow),this.moonGroup.add(new W(new la(1.4,1.4,.5),new ui({color:13095877,toneMapped:!1}))),this.group.add(this.moonGroup);let a=new Nr,o=new Float32Array(2100);for(let t=0;t<700;t++){let n=e.float(0,Math.PI*2),r=e.next()**.65,i=Math.sqrt(1-r*r);o[t*3]=Math.cos(n)*i*240,o[t*3+1]=r*240-10,o[t*3+2]=Math.sin(n)*i*240}a.setAttribute(`position`,new vr(o,3)),this.starMaterial=new Zi({color:16773842,size:1.45,sizeAttenuation:!1,transparent:!0,opacity:0,depthWrite:!1,fog:!1,toneMapped:!1}),this.stars=new na(a,this.starMaterial),this.stars.frustumCulled=!1,this.group.add(this.stars),this.cloudMaterial=new wa({vertexColors:!0,roughness:1,metalness:0,transparent:!0,opacity:.92,color:16183522});for(let t=0;t<15;t++){let n=new q({voxel:.1,variation:.02});for(let t=0;t<3;t++){let r=t===0?6:t===1?4:2,i=1-t*.28;for(let a=0;a<r;a++){let r=e.float(1.3,2.4)*i,a=e.float(.55,.9),o=e.float(1,1.9)*i,s=e.float(-2.4,2.4)*i,c=t*.55+e.float(-.12,.12),l=e.float(-.7,.7);n.box(s,c,l,r,a,o,xu(K.white,()=>e.next(),.035))}}e.chance(.7)&&n.box(e.float(2.2,3.3),e.float(.1,.5),e.float(-.5,.5),e.float(.7,1.2),.5,1,K.white);let r=n.mesh(this.cloudMaterial,!1,!1),i=new H;i.add(r);let a=e.float(.85,1.6);i.scale.setScalar(a),i.position.set(e.float(-95,95),e.float(13,24),e.float(-90,-26)),this.clouds.push({group:i,speed:e.float(.5,1.4),baseY:i.position.y,phase:e.float(0,6.28),threshold:(t+1)/15,baseScale:a}),this.group.add(i)}}applyState(e){this.domeUniforms.uTop.value.copy(e.top),this.domeUniforms.uHorizon.value.copy(e.horizon),this.domeUniforms.uSunColor.value.copy(e.sunColor),this.domeUniforms.uSunDir.value.copy(e.sunDir),this.domeUniforms.uGlow.value=e.sunGlow,this.sunGroup.position.copy(e.sunDir).multiplyScalar(232),this.moonGroup.position.copy(e.sunDir).multiplyScalar(-232),this.sunGroup.visible=e.sunDir.y>-.08,this.moonGroup.visible=e.sunDir.y<.06&&e.night>.12,this.sunGlow.material.opacity=.25+e.sunGlow*.55,this.moonGlow.material.opacity=.15+e.night*.35,this.starMaterial.opacity=e.night**1.4*(1-e.cloudCover*.7)*.95,this.stars.visible=this.starMaterial.opacity>.01,this.cloudMaterial.color.copy(e.cloudTint),this.cloudMaterial.opacity=e.cloudOpacity,this.cloudMaterial.emissive.copy(e.cloudTint).multiplyScalar(.08),this.cloudMaterial.emissiveIntensity=1-e.night*.6;for(let t of this.clouds)t.group.visible=e.cloudCover>=t.threshold*.95,t.group.scale.set(t.baseScale,t.baseScale*(.82+e.storm*.5),t.baseScale),t.group.position.y=t.baseY+Math.sin(this.time*.08+t.phase)*.35}update(e,t,n,r){this.time=t;for(let t of this.clouds)t.group.visible&&(t.group.position.x+=(t.speed+n*2.2)*e,t.group.position.x>115&&(t.group.position.x=-115));this.stars.rotation.y=t*.004}},ed=`
uniform float uTime;
uniform float uStorm;
uniform float uWind;
varying vec3 vWorld;
varying vec3 vNormal;
varying float vWave;

void main() {
  vec2 p = position.xy;
  float t = uTime;

  vec2 d1 = normalize(vec2(0.8, 0.6));
  vec2 d2 = normalize(vec2(-0.5, 0.86));
  vec2 d3 = normalize(vec2(0.3, -0.95));
  vec2 d4 = normalize(vec2(0.95, -0.3));

  float a1 = 0.16 * (1.0 + uStorm * 1.7);
  float a2 = 0.08 * (1.0 + uStorm * 1.3);
  float a3 = 0.035 * (1.0 + uStorm * 1.9);

  float w1 = sin(dot(p, d1) * 0.55 + t * 0.9);
  float w2 = sin(dot(p, d2) * 1.15 + t * 1.35);
  float w3 = sin(dot(p, d3) * 2.4 + t * 2.1);
  float w4 = sin(dot(p, d4) * 4.1 + t * 3.0);

  float h = w1 * a1 + w2 * a2 + w3 * a3 + w4 * 0.012;
  h += sin(dot(p, d1) * 0.22 + t * 0.4) * 0.05 * (1.0 + uStorm);

  float dhdx = cos(dot(p, d1) * 0.55 + t * 0.9) * 0.55 * d1.x * a1
             + cos(dot(p, d2) * 1.15 + t * 1.35) * 1.15 * d2.x * a2
             + cos(dot(p, d3) * 2.4 + t * 2.1) * 2.4 * d3.x * a3
             + cos(dot(p, d4) * 4.1 + t * 3.0) * 4.1 * d4.x * 0.012;
  float dhdy = cos(dot(p, d1) * 0.55 + t * 0.9) * 0.55 * d1.y * a1
             + cos(dot(p, d2) * 1.15 + t * 1.35) * 1.15 * d2.y * a2
             + cos(dot(p, d3) * 2.4 + t * 2.1) * 2.4 * d3.y * a3
             + cos(dot(p, d4) * 4.1 + t * 3.0) * 4.1 * d4.y * 0.012;

  vec3 n = normalize(vec3(-dhdx * 2.4, -dhdy * 2.4, 1.0));
  vec4 world = modelMatrix * vec4(position.x, position.y, h, 1.0);
  vWorld = world.xyz;
  vNormal = normalize(mat3(modelMatrix) * n);
  vWave = h;

  gl_Position = projectionMatrix * viewMatrix * world;
}
`,td=`
uniform float uTime;
uniform float uStorm;
uniform vec3 uSunDir;
uniform vec3 uSunColor;
uniform float uSunIntensity;
uniform vec3 uSkyColor;
uniform vec3 uDeep;
uniform vec3 uShallow;
uniform vec3 uFogColor;
uniform float uFogNear;
uniform float uFogFar;
uniform sampler2D uShore;
uniform float uShoreHalf;
varying vec3 vWorld;
varying vec3 vNormal;
varying float vWave;

void main() {
  vec3 N = normalize(vNormal);
  vec3 V = normalize(cameraPosition - vWorld);
  vec2 uv = (vWorld.xz + uShoreHalf) / (2.0 * uShoreHalf);
  float inBounds = step(0.0, uv.x) * step(uv.x, 1.0) * step(0.0, uv.y) * step(uv.y, 1.0);
  float depth = mix(1.0, texture2D(uShore, clamp(uv, 0.0, 1.0)).r, inBounds);

  vec3 water = mix(uShallow, uDeep, smoothstep(0.02, 0.6, depth));
  water = mix(water, uSkyColor * 0.3, 0.1);

  float fres = pow(1.0 - max(dot(N, V), 0.0), 3.0);
  vec3 refl = uSkyColor * (0.38 + 0.45 * fres);
  water = mix(water, refl, fres * 0.3);

  vec3 H = normalize(uSunDir + V);
  float spec = pow(max(dot(N, H), 0.0), 180.0) * 2.2;
  float glint = pow(max(dot(N, H), 0.0), 900.0) * 5.0;
  water += uSunColor * (spec * 1.4 + glint) * uSunIntensity;

  float band = smoothstep(0.1, 0.0, depth);
  float wobble = sin(vWorld.x * 1.3 + vWorld.z * 1.7 + uTime * 1.1) * 0.5 + 0.5;
  float ripple = sin(depth * 95.0 - uTime * 2.6 + wobble * 3.0) * 0.5 + 0.5;
  float foam = band * smoothstep(0.3, 0.95, ripple);
  float crest = smoothstep(0.14, 0.34, vWave) * smoothstep(0.45, 0.9, wobble) * 0.45;
  foam = clamp(foam + crest, 0.0, 1.0);
  water = mix(water, vec3(0.93, 0.98, 0.95), foam * 0.55);

  water *= 1.0 - uStorm * 0.24;
  water = mix(water, vec3(dot(water, vec3(0.3333))), uStorm * 0.3);
  float dist = distance(cameraPosition, vWorld);
  float fogF = smoothstep(uFogNear, uFogFar, dist);
  water = mix(water, uFogColor, fogF);

  float alpha = mix(0.72, 1.0, smoothstep(0.02, 0.3, depth));
  gl_FragColor = vec4(water, alpha);

  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}
`,nd=class{mesh;uniforms;material;constructor(e,t){let n=new ua(620,620,240,240);this.uniforms={uTime:{value:0},uStorm:{value:0},uWind:{value:0},uSunDir:{value:new B(.4,.8,.5).normalize()},uSunColor:{value:new U(K.fireLight)},uSunIntensity:{value:1},uSkyColor:{value:new U(10472408)},uDeep:{value:new U(K.waterDeep)},uShallow:{value:new U(K.waterShallow)},uFogColor:{value:new U(12178644)},uFogNear:{value:30},uFogFar:{value:160},uShore:{value:e},uShoreHalf:{value:t}},this.material=new Sa({uniforms:this.uniforms,vertexShader:ed,fragmentShader:td,side:0,transparent:!0,depthWrite:!1}),this.mesh=new W(n,this.material),this.mesh.rotation.x=-Math.PI/2,this.mesh.position.y=0,this.mesh.receiveShadow=!1,this.mesh.frustumCulled=!1,this.mesh.name=`ocean`}update(e,t){this.uniforms.uTime.value=t.time,this.uniforms.uStorm.value=t.storm,this.uniforms.uWind.value=t.wind,this.uniforms.uSunDir.value.copy(t.sunDir),this.uniforms.uSunColor.value.copy(t.sunColor),this.uniforms.uSunIntensity.value=t.sunIntensity,this.uniforms.uSkyColor.value.copy(t.skyColor),this.uniforms.uDeep.value.copy(t.deep),this.uniforms.uShallow.value.copy(t.shallow),this.uniforms.uFogColor.value.copy(t.fogColor),this.uniforms.uFogNear.value=t.fogNear,this.uniforms.uFogFar.value=t.fogFar}},rd=[{t:0,top:266269,horizon:795441,sun:9680598,sunI:.32,hemiSky:2770268,hemiGround:464412,hemiI:.42,fog:729648,fogNear:18,fogFar:95,deep:535611,shallow:1134943,cloud:5069928},{t:.2,top:728368,horizon:2570315,sun:10795214,sunI:.38,hemiSky:4216682,hemiGround:860196,hemiI:.58,fog:1321784,fogNear:18,fogFar:100,deep:668482,shallow:1727336,cloud:7043712},{t:.26,top:5074834,horizon:15774846,sun:16758903,sunI:1.7,hemiSky:10466244,hemiGround:4864562,hemiI:.92,fog:14268825,fogNear:22,fogFar:122,deep:1397347,shallow:4168355,cloud:16043950},{t:.32,top:4169671,horizon:12574941,sun:16770744,sunI:2.5,hemiSky:12375770,hemiGround:7038802,hemiI:1.15,fog:13623772,fogNear:30,fogFar:150,deep:1336701,shallow:5815488,cloud:16183263},{t:.5,top:3907272,horizon:12904163,sun:16774877,sunI:3,hemiSky:13099490,hemiGround:7828572,hemiI:1.25,fog:12902362,fogNear:34,fogFar:170,deep:941176,shallow:5620422,cloud:16775402},{t:.66,top:4497348,horizon:13165269,sun:16771512,sunI:2.6,hemiSky:12769491,hemiGround:7827536,hemiI:1.1,fog:13229264,fogNear:30,fogFar:155,deep:1138550,shallow:5815740,cloud:16314329},{t:.735,top:4874124,horizon:15829594,sun:16751704,sunI:1.8,hemiSky:11901600,hemiGround:4995636,hemiI:.92,fog:13933180,fogNear:24,fogFar:125,deep:1789798,shallow:5216928,cloud:15972241},{t:.8,top:2372178,horizon:9396080,sun:14256774,sunI:.62,hemiSky:7041417,hemiGround:2564649,hemiI:.65,fog:5196380,fogNear:20,fogFar:105,deep:1194827,shallow:2911093,cloud:9141636},{t:.87,top:464422,horizon:1191229,sun:9680598,sunI:.34,hemiSky:3033697,hemiGround:530719,hemiI:.48,fog:861748,fogNear:18,fogFar:98,deep:667712,shallow:1332323,cloud:5596271},{t:1,top:266269,horizon:795441,sun:9680598,sunI:.32,hemiSky:2770268,hemiGround:464412,hemiI:.42,fog:729648,fogNear:18,fogFar:95,deep:535611,shallow:1134943,cloud:5069928}],id=rd.map(e=>({top:new U(e.top),horizon:new U(e.horizon),sun:new U(e.sun),hemiSky:new U(e.hemiSky),hemiGround:new U(e.hemiGround),fog:new U(e.fog),deep:new U(e.deep),shallow:new U(e.shallow),cloud:new U(e.cloud)})),ad=class{scene;sky;ocean;sun;hemi;fill;sunDir=new B(.5,.7,.5);nightFactor=0;top=new U;horizon=new U;sunColor=new U;cloudColor=new U;hemiSky=new U;hemiGround=new U;fogColor=new U;deep=new U;shallow=new U;sunI=1;hemiI=1;fogNear=30;fogFar=150;grey=new U(9279643);stormGrey=new U(3095876);nightGrey=new U(1846067);scratch=new U;lightDirVec=new B;skyState;sampledIndex=0;constructor(e,t,n){this.scene=e,this.sky=t,this.ocean=n,this.hemi=new qa(13625060,7038802,1.1),this.scene.add(this.hemi),this.sun=new uo(16773584,2.6),this.sun.castShadow=!0,this.sun.shadow.mapSize.set(2048,2048),this.sun.shadow.camera.left=-15,this.sun.shadow.camera.right=15,this.sun.shadow.camera.top=15,this.sun.shadow.camera.bottom=-15,this.sun.shadow.camera.near=1,this.sun.shadow.camera.far=90,this.sun.shadow.bias=-2e-4,this.sun.shadow.normalBias=.03,this.sun.shadow.normalBias=.025,this.scene.add(this.sun),this.scene.add(this.sun.target),this.fill=new fo(12572114,.16),this.scene.add(this.fill),this.scene.fog=new Rn(13623772,30,150),this.skyState={top:this.top,horizon:this.horizon,sunColor:this.sunColor,sunGlow:1,cloudTint:this.cloudColor,cloudOpacity:.9,night:0,sunDir:this.sunDir,storm:0,cloudCover:.2}}update(e,t,n,r=0,i=1/60){let a=e.fraction,o=this.sampledIndex;for(a<rd[o].t&&(o=0);o<rd.length-2&&a>=rd[o+1].t;)o++;this.sampledIndex=o;let s=rd[o],c=rd[o+1],l=Mt.clamp((a-s.t)/Math.max(1e-5,c.t-s.t),0,1),u=id[o],d=id[o+1];this.top.lerpColors(u.top,d.top,l),this.horizon.lerpColors(u.horizon,d.horizon,l),this.sunColor.lerpColors(u.sun,d.sun,l),this.hemiSky.lerpColors(u.hemiSky,d.hemiSky,l),this.hemiGround.lerpColors(u.hemiGround,d.hemiGround,l),this.fogColor.lerpColors(u.fog,d.fog,l),this.deep.lerpColors(u.deep,d.deep,l),this.shallow.lerpColors(u.shallow,d.shallow,l),this.cloudColor.lerpColors(u.cloud,d.cloud,l),this.sunI=Mt.lerp(s.sunI,c.sunI,l),this.hemiI=Mt.lerp(s.hemiI,c.hemiI,l),this.fogNear=Mt.lerp(s.fogNear,c.fogNear,l),this.fogFar=Mt.lerp(s.fogFar,c.fogFar,l);let f=(a-.25)*Math.PI*2;this.sunDir.set(Math.cos(f)*.78,Math.sin(f),.52).normalize();let p=this.sunDir.y;this.nightFactor=1-Mt.smoothstep(p,-.16,.2);let m=t.cloud,h=t.rain,g=t.kind===`storm`?.35+t.intensity*.65:0,_=t.fog,v=Mt.clamp(this.sunI/3,.08,1),y=Mt.clamp(m*.42+h*.16+_*.12,0,.85);this.top.lerp(this.grey,y*.7),this.horizon.lerp(this.grey,y*.78),this.top.lerp(this.stormGrey,g*.58),this.horizon.lerp(this.stormGrey,g*.5),this.scratch.copy(this.fogColor).lerp(this.grey,y*.55),this.fogColor.copy(this.scratch);let b=Mt.clamp(1-m*.45-h*.25-g*.42,.07,1),x=p>=0?this.sunDir:this.lightDirVec.copy(this.sunDir).negate();this.sun.position.copy(x).multiplyScalar(48),this.sun.position.y+=2,this.sun.target.position.set(0,.5,0),this.sun.color.copy(this.sunColor),this.sun.intensity=this.sunI*b+r*2.6,this.hemi.color.copy(this.hemiSky),this.hemi.groundColor.copy(this.hemiGround),this.hemi.intensity=this.hemiI*(1-m*.18-g*.24)+r*.35,this.fill.intensity=.12+this.nightFactor*.06;let S=Mt.lerp(this.fogFar,34,_*.9),C=Mt.lerp(this.fogNear,7,_*.75),w=Mt.lerp(S,S*.52,g*.65),T=C;this.fogColor.lerp(this.nightGrey,this.nightFactor*.35),this.fogColor.lerp(this.stormGrey,g*.55);let E=this.scene.fog;E.color.copy(this.fogColor),E.near=T,E.far=w,this.cloudColor.lerp(this.grey,m*.35),this.cloudColor.lerp(this.stormGrey,g*.55),this.skyState.top=this.top,this.skyState.horizon=this.horizon,this.skyState.sunColor=this.sunColor,this.skyState.sunGlow=Mt.clamp((.35+v*.9)*(1-m*.55)*(1-g*.6),0,1.4)+r,this.skyState.cloudTint=this.cloudColor,this.skyState.cloudOpacity=.78+m*.18,this.skyState.night=this.nightFactor,this.skyState.storm=g,this.skyState.cloudCover=Mt.clamp(m+_*.4,0,1),this.sky.applyState(this.skyState),this.sky.update(i,n,t.wind,m),this.ocean.update(i,{time:n,storm:g,wind:t.wind,sunDir:this.sunDir,sunColor:this.sunColor,sunIntensity:Mt.clamp((v*.9+.05)*b+r,0,1.4),skyColor:this.horizon,deep:this.deep,shallow:this.shallow,fogColor:this.fogColor,fogNear:T,fogFar:w,night:this.nightFactor})}get sunDirection(){return this.sunDir}},od={clear:{rain:0,wind:.12,cloud:.16,fog:.015,intensity:0,label:`słońce`},cloudy:{rain:0,wind:.34,cloud:.7,fog:.035,intensity:.2,label:`chmury`},rain:{rain:.68,wind:.5,cloud:.9,fog:.09,intensity:.55,label:`deszcz`},storm:{rain:1,wind:1,cloud:1,fog:.2,intensity:1,label:`burza`},fog:{rain:0,wind:.1,cloud:.42,fog:.86,intensity:.15,label:`mgła`}},sd=`
attribute float aEnd;
attribute float aSpeed;
uniform float uTime;
uniform float uWind;
uniform float uHeight;
uniform float uIntensity;
varying float vFade;

void main() {
  vec3 p = position;
  float y = mod(p.y - uTime * aSpeed * 15.0, uHeight);
  p.y = y;
  p.x += uWind * y * 0.32;
  p.z += uWind * y * 0.08;
  p += aEnd * vec3(uWind * 0.5, -0.55, 0.1);
  float nearFade = smoothstep(0.0, 1.5, y) * smoothstep(uHeight, uHeight - 7.0, y);
  vFade = nearFade * (1.0 - aEnd * 0.45) * uIntensity;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
}
`,cd=`
varying float vFade;
void main() {
  if (vFade < 0.01) discard;
  gl_FragColor = vec4(0.74, 0.84, 0.9, vFade * 0.55);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}
`,ld=class{scene;state;target=`clear`;flash=0;onLightning=null;rand;timer;forcedTimer=0;lightningTimer;rain;rainUniforms;rainMaterial;time=0;constructor(e,t){this.scene=e,this.rand=t.fork(911),this.timer=this.rand.float(180,300),this.lightningTimer=this.rand.float(5,12);let n=od.clear;this.state={kind:`clear`,intensity:0,rain:0,wind:n.wind,cloud:n.cloud,fog:n.fog,label:n.label},this.rain=this.buildRain(),this.rainUniforms=this.rain.material.uniforms,this.rainMaterial=this.rain.material,this.scene.add(this.rain)}buildRain(){let e=1500,t=new Float32Array(e*2*3),n=new Float32Array(e*2),r=new Float32Array(e*2);for(let i=0;i<e;i++){let e=this.rand.float(-38,38),a=this.rand.float(0,22),o=this.rand.float(-38,38),s=this.rand.float(.7,1.5);for(let c=0;c<2;c++){let l=(i*2+c)*3;t[l]=e,t[l+1]=a,t[l+2]=o,n[i*2+c]=c,r[i*2+c]=s}}let i=new Nr;i.setAttribute(`position`,new vr(t,3)),i.setAttribute(`aEnd`,new vr(n,1)),i.setAttribute(`aSpeed`,new vr(r,1)),i.boundingSphere=new Tr(new B(0,11,0),55);let a=new Xi(i,new Sa({uniforms:{uTime:{value:0},uWind:{value:.2},uHeight:{value:22},uIntensity:{value:0}},vertexShader:sd,fragmentShader:cd,transparent:!0,depthWrite:!1}));return a.frustumCulled=!1,a.visible=!1,a}force(e,t=80){this.target=e,this.forcedTimer=t,this.state.kind=e,this.state.label=od[e].label,this.timer=Math.max(this.timer,t)}get sunShade(){return Mt.clamp(1-this.state.cloud*.42-this.state.rain*.18,.16,1)}update(e,t){this.time+=e;let n=!1;this.forcedTimer>0?(this.forcedTimer-=e,this.forcedTimer<=0&&(this.pickNext(t),n=!0)):(this.timer-=e,this.timer<=0&&(this.pickNext(t),n=!0));let r=od[this.target],i=Math.min(1,e*.11);return this.state.rain+=(r.rain-this.state.rain)*i,this.state.wind+=(r.wind-this.state.wind)*i,this.state.cloud+=(r.cloud-this.state.cloud)*i,this.state.fog+=(r.fog-this.state.fog)*i,this.state.intensity+=(r.intensity-this.state.intensity)*i,this.state.kind=this.target,this.state.label=r.label,this.target===`storm`&&this.state.intensity>.45?(this.lightningTimer-=e,this.lightningTimer<=0&&(this.flash=1,this.lightningTimer=this.rand.float(5,15),this.onLightning?.())):this.lightningTimer=Math.max(this.lightningTimer,3),this.flash=Math.max(0,this.flash-e*3.2),this.rain.visible=this.state.rain>.02,this.rainUniforms.uTime.value=this.time,this.rainUniforms.uWind.value=this.state.wind*1.4,this.rainUniforms.uIntensity.value=Math.min(1,this.state.rain*1.3),this.rainMaterial.uniformsNeedUpdate=!1,this.rain.position.set(0,0,0),n}pickNext(e){let t=[[`clear`,5.2],[`cloudy`,3.4],[`rain`,2.1],[`storm`,.9],[`fog`,.9]];e.night&&(t[0][1]*=.55,t[4][1]+=1.6,t[1][1]+=.8),e.phase===`dawn`&&(t[4][1]+=1.2),e.phase===`day`&&(t[4][1]*=.35,t[0][1]+=1.6);for(let e of t)e[0]===this.target&&(e[1]*=.25);this.target=this.rand.weighted(t),this.state.kind=this.target,this.timer=this.rollDuration(this.target)}rollDuration(e){switch(e){case`storm`:return this.rand.float(50,110);case`rain`:return this.rand.float(80,180);case`fog`:return this.rand.float(70,150);case`cloudy`:return this.rand.float(100,220);default:return this.rand.float(150,300)}}},ud=e=>({bodyY:Math.sin(e*1.5)*.007,torso:[.03+Math.sin(e*1.5)*.008,Math.sin(e*.23)*.02,0],head:[Math.sin(e*.37)*.05,Math.sin(e*.27)*.32+Math.sin(e*.11)*.1,0],armL:[Math.sin(e*.8)*.035,0,-.06],armR:[-Math.sin(e*.73)*.035,0,.06],legL:[0,0,-.02],legR:[0,0,.02]}),dd={idle:(e,t)=>ud(t.globalTime),walk:(e,t)=>{let n=t.walkPhase,r=Math.sin(n);return{bodyY:-Math.abs(Math.sin(n))*.035-.004,torso:[.06,r*.06,0],head:[0,r*.05,0],armL:[-r*.46,0,-.07],armR:[r*.46,0,.07],legL:[r*.56,0,-.03],legR:[-r*.56,0,.03]}},run:(e,t)=>{let n=t.walkPhase,r=Math.sin(n);return{bodyY:-Math.abs(Math.sin(n))*.075-.01,bodyX:.06,torso:[.18,r*.1,0],head:[-.08,r*.06,0],armL:[-r*.8,0,-.12],armR:[r*.8,0,.12],legL:[r*.85,0,-.04],legR:[-r*.85,0,.04]}},sit:()=>({bodyY:-.51,torso:[-.12,0,0],head:[.04,0,0],armL:[.14,0,-.22],armR:[.14,0,.22],legL:[-1.55,0,-.3],legR:[-1.48,0,.3],kneeL:.05,kneeR:.05}),sleep:e=>({hipsX:-1.52,bodyY:-.525+Math.sin(e*1.05)*.008,bodyZ:.04,torso:[.01+Math.sin(e*1.05)*.01,0,0],head:[.02,.1,.02],armL:[-.08,0,-1.15],armR:[-.04,0,1.15],legL:[-.02,0,-.1],legR:[.01,0,.1],kneeL:.03,kneeR:.03}),nap:e=>({hipsX:-1.5,bodyY:-.48+Math.sin(e*1.1)*.006,bodyZ:.05,torso:[.02,0,0],head:[.08,.3,.12],armL:[-.15,0,-1.05],armR:[-.55,0,.75],legL:[-.07,0,-.14],legR:[.04,0,.14],kneeL:.28,kneeR:.12}),stretch:()=>({bodyY:.035,torso:[-.14,0,0],head:[-.22,0,0],armL:[-2.95,0,-.3],armR:[-2.95,0,.3],legL:[.05,0,-.03],legR:[-.05,0,.03]}),yawn:()=>({bodyY:.015,torso:[-.1,0,0],head:[-.28,0,0],armR:[-2,0,.36],armL:[.12,0,-.12]}),wave:e=>({torso:[0,.1,0],head:[-.04,.12,0],armR:[-2.65,0,.3+Math.sin(e*8)*.34],armL:[.03,0,-.1]}),fishCast:e=>({bodyY:-.03,torso:[.1,-.32,0],head:[.16,.3,0],armR:[-.85-Math.sin(Math.min(2.2,e)*2.1)*.9,0,.28],armL:[-.4,0,-.45],legL:[.1,0,-.12],legR:[-.12,0,.12]}),fishWait:e=>({bodyY:-.025+Math.sin(e*.7)*.008,torso:[.14,-.26,0],head:[.3,.24,0],armR:[-1.02,0,.24],armL:[-.32,0,-.5],legL:[.12,0,-.12],legR:[-.14,0,.12]}),fishReel:e=>({bodyY:-.04,torso:[-.09+Math.sin(e*7)*.04,-.2,0],head:[.22,.2,0],armR:[-.95+Math.sin(e*9)*.24,0,.26],armL:[-1.05+Math.sin(e*9+1)*.12,0,-.35],legL:[.16,0,-.14],legR:[-.18,0,.14]}),fishFall:()=>({bodyX:-.28,bodyY:-.05,torso:[-.2,.2,0],head:[-.12,.2,0],armL:[-2.4,0,-1.1],armR:[-1.7,0,.85],legL:[-.3,0,-.25],legR:[.3,0,.25]}),shakeTree:e=>({bodyY:.02,torso:[-.15,Math.sin(e*7)*.06,0],head:[-.3,0,0],armL:[-2.55+Math.sin(e*7)*.18,0,-.42],armR:[-2.55-Math.sin(e*7)*.18,0,.42],legL:[0,0,-.08],legR:[0,0,.08]}),crackCoconut:e=>({bodyY:-.18,torso:[.38,0,0],head:[.42,0,0],armL:[-1.35,0,-.26],armR:[-1.2+Math.sin(e*9)*.5,0,.26],legL:[-.5,0,-.12],legR:[-.45,0,.12]}),eat:e=>({bodyY:-.02,torso:[.06,.08,0],head:[.12+Math.sin(e*3)*.03,.05,0],armR:[-2.15+Math.sin(e*3.2)*.16,0,.34],armL:[-.5,0,-.32]}),drink:()=>({bodyY:.01,torso:[-.07,0,0],head:[-.32,0,0],armR:[-2.35,0,.2],armL:[.02,0,-.1]}),cook:e=>({bodyY:-.19,torso:[.36,0,0],head:[.4,.06,0],armL:[-1.15,0,-.28],armR:[-1.1+Math.sin(e*3)*.22,0,.28],legL:[-.6,0,-.12],legR:[-.52,0,.12]}),pokeFire:e=>({bodyY:-.2,torso:[.42,0,0],head:[.38,0,0],armR:[-.95+Math.sin(e*4)*.35,0,.22],armL:[-.4,0,-.35],legL:[-.55,0,-.12],legR:[-.5,0,.12]}),lightFire:e=>({bodyY:-.34,torso:[.5,0,0],head:[.45,0,0],armL:[-1.25,0,-.2],armR:[-1.1+Math.sin(e*5)*.35,0,.2],legL:[-1.2,0,-.15],legR:[-1.1,0,.15]}),hammer:e=>({bodyY:-.06,torso:[.22+Math.sin(e*6)*.08,.1,0],head:[.2,.14,0],armL:[-1.35,0,-.4],armR:[-1.05+Math.sin(e*6)*.65,0,.3],legL:[.12,0,-.1],legR:[-.12,0,.1],kneeL:.12}),carry:()=>({bodyY:-.02,torso:[.04,0,0],head:[.1,0,0],armL:[-1.25,0,-.25],armR:[-1.25,0,.25],legL:[.05,0,-.04],legR:[-.05,0,.04]}),row:e=>({bodyY:-.24,torso:[.12,Math.sin(e*2)*.1,0],head:[.06,0,0],armL:[-1.2+Math.sin(e*2)*.65,0,-.5],armR:[-1.2-Math.sin(e*2)*.65,0,.5],legL:[-1.25,0,-.16],legR:[-1.25,0,.16]}),swim:e=>({hipsX:-1.35,bodyY:-.45,torso:[.02,0,0],head:[-.55,0,0],armL:[-1.2+Math.sin(e*4)*1,0,-.35],armR:[-1.2-Math.sin(e*4)*1,0,.35],legL:[Math.sin(e*8)*.3,0,-.14],legR:[-Math.sin(e*8)*.3,0,.14],kneeL:.25,kneeR:.25}),float:e=>({hipsX:-1.4,bodyY:-.42,bodyZ:Math.sin(e*.7)*.07,torso:[.02,0,0],head:[-.3,0,0],armL:[-.2,0,-1.35],armR:[-.2,0,1.35],legL:[-.1,0,-.2],legR:[.1,0,.2]}),dig:e=>({bodyY:-.24,torso:[.46,.08,0],head:[.3,0,0],armL:[-1.05+Math.sin(e*6)*.25,0,-.25],armR:[-1.15-Math.sin(e*6)*.25,0,.35],legL:[-.55,0,-.14],legR:[-.5,0,.14]}),inspect:()=>({bodyY:-.01,torso:[.1,.16,0],head:[.42,.2,0],armR:[-1.65,0,.36],armL:[-1.4,0,-.26]}),throw:e=>{let t=Math.min(1,e/1.3);return{bodyY:-.02,torso:[.08,.5-t*.85,0],head:[.05,.15,0],armR:[-2.5+t*2.2,0,.35],armL:[-.8,0,-.3],legL:[.15,0,-.1],legR:[-.2,0,.1]}},skipStone:e=>({bodyY:-.02,torso:[.06,-.35,0],head:[.05,-.3,0],armR:[-1,0,-.55+Math.sin(e*6)*.45],armL:[-.35,0,-.2],legL:[-.2,0,-.12],legR:[.2,0,.12]}),dance:e=>({bodyY:Math.abs(Math.sin(e*6))*.075,bodyZ:Math.sin(e*3)*.12,bodyYaw:Math.sin(e*1.5)*.28,torso:[.04,Math.sin(e*3)*.15,0],head:[0,Math.sin(e*3)*.3,Math.sin(e*3)*.1],armL:[-2.2+Math.sin(e*6)*.5,0,-.65-Math.sin(e*3)*.35],armR:[-2.2-Math.sin(e*6)*.5,0,.65+Math.sin(e*3)*.35],legL:[Math.sin(e*6)*.32,0,-.16],legR:[-Math.sin(e*6)*.32,0,.16]}),cheer:e=>({bodyY:Math.abs(Math.sin(e*4))*.16,torso:[-.08,0,0],head:[-.25,0,0],armL:[-2.85,0,-.6],armR:[-2.85,0,.6],legL:[-Math.abs(Math.sin(e*4))*.3,0,-.2],legR:[Math.abs(Math.sin(e*4))*.3,0,.2]}),laugh:e=>({bodyY:Math.abs(Math.sin(e*7))*.04,torso:[.15+Math.sin(e*9)*.08,0,0],head:[-.4,0,Math.sin(e*9)*.08],armL:[-1.5,0,-.4],armR:[-1.5,0,.4],legL:[.1,0,-.1],legR:[-.1,0,.1]}),cry:e=>({bodyY:-.06,torso:[.36,0,Math.sin(e*6)*.03],head:[.48,0,0],armL:[-2.05,0,-.42],armR:[-2.05,0,.42],legL:[-.1,0,-.06],legR:[.1,0,.06]}),angry:e=>({bodyY:-.03,torso:[.18,0,0],head:[.12,Math.sin(e*9)*.16,0],armL:[-.35,0,-.2],armR:[-.35,0,.2],legL:[0,0,-.08],legR:[-Math.abs(Math.sin(e*4))*.7,0,.1]}),scared:()=>({bodyX:-.25,bodyY:.02,torso:[-.1,0,0],head:[-.18,0,0],armL:[-2.4,0,-.85],armR:[-2.4,0,.85],legL:[-.35,0,-.18],legR:[.35,0,.18]}),stumble:e=>({bodyX:.32,bodyY:-.03,torso:[.2,0,Math.sin(e*7)*.08],head:[.2,0,0],armL:[-1.4+Math.sin(e*8)*.6,0,-1.2],armR:[-1.2-Math.sin(e*8)*.6,0,1.1],legL:[.4,0,-.2],legR:[-.3,0,.2]}),think:()=>({bodyY:.01,torso:[.05,0,0],head:[.12,.22,.05],armR:[-2.1,0,.55],armL:[-.2,0,-.35]}),cloudWatch:e=>({hipsX:-1.52,bodyY:-.4,torso:[.03,0,0],head:[-.2,Math.sin(e*.4)*.18,0],armL:[-2.5,0,-1],armR:[-2.5,0,1],legL:[-.1,0,-.2],legR:[.15,0,.2]}),stargaze:e=>({hipsX:-1.52,bodyY:-.42,torso:[.02,0,0],head:[-.32,0,0],armL:[-1.6,0,-.32],armR:[-1.6,0,.32],legL:[-.08,0,-.18],legR:[.12,0,.18]}),sunsetWatch:e=>({bodyY:-.46,bodyYaw:-.2,torso:[.07,-.1,0],head:[-.04,-.55,0],armL:[-.5,0,-.32],armR:[-2.55+Math.sin(e*.5)*.05,0,.4],legL:[-1.4,0,-.16],legR:[-1.33,0,.16],kneeL:.35,kneeR:.35}),playStick:e=>({bodyY:Math.abs(Math.sin(e*3.5))*.09,torso:[.04,.08,0],head:[-.1,.22,0],armR:[-2.1+Math.sin(e*7)*.3,0,.4+Math.sin(e*7)*.35],armL:[-.6,0,-.5],legL:[0,0,-.1],legR:[0,0,.1]}),drawSand:e=>({bodyY:-.38,torso:[.55,.1,0],head:[.5,0,0],armR:[-.8,0,.15+Math.sin(e*3)*.35],armL:[-.6,0,-.3],legL:[-1,0,-.15],legR:[-.8,0,.15]}),bottle:()=>({bodyY:-.01,torso:[.08,.1,0],head:[.2,.15,0],armR:[-1.6,0,.24],armL:[-1.2,0,-.3]}),spear:e=>({bodyY:-.03,torso:[.02,-.3,0],head:[.05,.35,0],armR:[-2.3+Math.sin(e*2)*.12,0,.24],armL:[-1.3,0,-.3],legL:[.1,0,-.1],legR:[-.15,0,.15]}),sharpen:e=>({bodyY:-.3,torso:[.25,0,0],head:[.3,0,0],armL:[-1.1,0,-.2],armR:[-1.15+Math.sin(e*5)*.35,0,.25],legL:[-1.4,0,-.16],legR:[-1.3,0,.16]}),lookHorizon:e=>({bodyY:.01,torso:[.12,0,0],head:[-.04,Math.sin(e*.5)*.2,0],armR:[-2.5,0,.42],armL:[-.25,0,-.35]}),shrug:()=>({bodyY:.02,torso:[.02,0,0],head:[.05,0,.13],armL:[-.4,0,-1],armR:[-.4,0,1]}),repair:e=>({bodyY:-.04,torso:[.12,.22,0],head:[.12,.2,0],armL:[-1.2,0,-.4],armR:[-1.9+Math.sin(e*6)*.9,0,.3],legL:[.1,0,-.1],legR:[-.1,0,.1]}),point:()=>({bodyY:.01,torso:[0,.16,0],head:[.04,.24,0],armR:[-1.6,0,.16],armL:[0,0,-.12]}),readLetter:()=>({bodyY:-.01,torso:[.08,0,0],head:[.36,0,0],armL:[-1.3,0,-.34],armR:[-1.3,0,.34]}),juggle:e=>({bodyY:Math.abs(Math.sin(e*5))*.04,torso:[-.04,0,0],head:[-.2,0,0],armL:[-2.2+Math.sin(e*5)*.5,0,-.5],armR:[-2.2-Math.sin(e*5)*.5,0,.5]}),warmHands:()=>({bodyY:-.06,torso:[.3,0,0],head:[.32,0,0],armL:[-1.35,0,-.18],armR:[-1.35,0,.18],legL:[-.2,0,-.1],legR:[-.15,0,.1]}),washFace:()=>({bodyY:-.22,torso:[.45,0,0],head:[.35,0,0],armL:[-2.1,0,-.25],armR:[-2.1,0,.25],legL:[-.8,0,-.12],legR:[-.7,0,.12]}),startle:()=>({bodyY:.14,bodyX:-.08,torso:[-.12,0,0],head:[-.2,0,0],armL:[-2.2,0,-.9],armR:[-2.2,0,.9],legL:[-.3,0,-.2],legR:[.3,0,.2]})},fd=class{model;name=`idle`;animTime=0;bodyY=0;bodyX=0;bodyYaw=0;bodyZ=0;hipsX=0;kneeL=0;kneeR=0;ankleL=0;ankleR=0;torso=[0,0,0];head=[0,0,0];armL=[0,0,0];armR=[0,0,0];legL=[0,0,0];legR=[0,0,0];constructor(e){this.model=e}play(e){this.name!==e&&(this.name=e,this.animTime=0)}get current(){return this.name}gaitPose(e,t){let n=t?.55:.6,r=(t?1:.833)*n,i=r/2,a=t?.14:.09,o=t?-.08:-.04,s=.68+o,c=.34,l=.3,u=e.walkPhase/(Math.PI*2),d=e=>{let t=e%1,o,u;if(t<n){let e=t/n;o=i-e*r,u=0}else{let e=(t-n)/(1-n);o=-i+e*r,u=Math.sin(Math.PI*e)*a}let d=.02+u,f=s-d,p=Math.min(Math.hypot(o,f),.636),m=Math.max(-1,Math.min(1,(p*p-c*c-l*l)/(2*c*l))),h=Math.acos(m),g=Math.atan2(l*Math.sin(h),c+l*Math.cos(h)),_=-(Math.atan2(o,f)+g);return{leg:_,knee:h,ankle:-(_+h)}},f=d(u),p=d(u+.5);return{bodyY:o,legL:[f.leg,0,-.02],legR:[p.leg,0,.02],kneeL:f.knee,kneeR:p.knee,ankleL:f.ankle,ankleR:p.ankle}}update(e,t){this.animTime+=e;let n=t.moving?t.speed>1.35?`run`:`walk`:this.name,r=dd[n]??dd.idle,i=ud(t.globalTime),a=r(this.animTime,t),o={...i,...a};if(t.moving&&(n===`walk`||n===`run`)){let e=this.gaitPose(t,n===`run`);o.bodyY=e.bodyY,o.legL=e.legL,o.legR=e.legR,o.kneeL=e.kneeL,o.kneeR=e.kneeR,o.ankleL=e.ankleL,o.ankleR=e.ankleR}let s=1-Math.exp(-15*e),c=1-Math.exp(-9*e),l=1-Math.exp(-6.5*e);this.bodyY+=((o.bodyY??0)-this.bodyY)*c,this.bodyX+=((o.bodyX??0)-this.bodyX)*l,this.bodyYaw+=((o.bodyYaw??0)-this.bodyYaw)*c,this.bodyZ+=((o.bodyZ??0)-this.bodyZ)*c,this.hipsX+=((o.hipsX??0)-this.hipsX)*l;let u=o.legL??i.legL??[0,0,0],d=o.legR??i.legR??[0,0,0],f=(o.bodyY??0)<-.12,p=e=>e>0?Math.min(1.35,e*.9):f?Math.min(1.35,Math.abs(e)*.85):.04,m=o.kneeL??p(u[0]),h=o.kneeR??p(d[0]);this.kneeL+=(m-this.kneeL)*s,this.kneeR+=(h-this.kneeR)*s;let g=(e,n)=>t.moving||f?Math.max(-.7,Math.min(.7,-(e+n)*.5)):0,_=o.ankleL??g(u[0],m),v=o.ankleR??g(d[0],h);this.ankleL+=(_-this.ankleL)*s,this.ankleR+=(v-this.ankleR)*s,this.torso=this.smoothJoint(this.torso,o.torso??i.torso??[0,0,0],s),this.head=this.smoothJoint(this.head,o.head??i.head??[0,0,0],s),this.armL=this.smoothJoint(this.armL,o.armL??i.armL??[0,0,0],s),this.armR=this.smoothJoint(this.armR,o.armR??i.armR??[0,0,0],s),this.legL=this.smoothJoint(this.legL,o.legL??i.legL??[0,0,0],s),this.legR=this.smoothJoint(this.legR,o.legR??i.legR??[0,0,0],s);let y=this.model.rig;y.body.position.y=this.bodyY,y.body.rotation.set(this.bodyX,this.bodyYaw,this.bodyZ),y.torso.rotation.set(this.torso[0],this.torso[1],this.torso[2]),y.head.rotation.set(this.head[0],this.head[1],this.head[2]),y.armL.rotation.set(this.armL[0],this.armL[1],this.armL[2]),y.armR.rotation.set(this.armR[0],this.armR[1],this.armR[2]),y.legL.rotation.set(this.legL[0],this.legL[1],this.legL[2]),y.legR.rotation.set(this.legR[0],this.legR[1],this.legR[2]),y.hips.rotation.x=this.hipsX,y.kneeL.rotation.x=this.kneeL,y.kneeR.rotation.x=this.kneeR,y.ankleL.rotation.x=this.ankleL,y.ankleR.rotation.x=this.ankleR,this.model.setEyesClosed(n===`sleep`||n===`nap`),this.model.setBlanket(!1),this.model.updateFace(e,t.globalTime)}smoothJoint(e,t,n){return e[0]+=(t[0]-e[0])*n,e[1]+=(t[1]-e[1])*n,e[2]+=(t[2]-e[2])*n,e}snap(e){this.name=e,this.animTime=0}},pd=class{rig;root;props=new Map;eyes=[];blanket;hat;necklace;rodTip=null;shortsMeshes=[];blinkTimer=2.2;blinkPhase=0;closed=!1;activeProp=null;constructor(){this.root=new H,this.root.name=`castaway`,this.root.scale.setScalar(1.15);let e=new H,t=new H;t.position.y=.68;let n=new H,r=new H;r.position.y=.59;let i=new H;i.position.set(-.28,.45,0);let a=new H;a.position.set(.28,.45,0);let o=new H;o.position.set(-.12,0,0);let s=new H;s.position.set(.12,0,0);let c=new H;c.position.set(0,-.51,.02);let l=new q({voxel:.05,variation:.02}),u=[[.1,.32,.22,K.shirtDark],[.15,.35,.23,K.shirt],[.2,.38,.24,K.shirt],[.25,.4,.25,K.shirt],[.3,.43,.26,K.shirt],[.35,.45,.27,K.shirt],[.4,.44,.27,K.shirt],[.45,.42,.26,K.shirt],[.5,.38,.24,K.shirt],[.54,.32,.21,K.shirtDark]];for(let[e,t,n,r]of u)l.box(0,e,0,t,.065,n,r);l.box(-.23,.47,0,.12,.14,.27,K.shirt),l.box(.23,.47,0,.12,.14,.27,K.shirt),l.box(-.27,.43,0,.06,.05,.27,K.shirtDark),l.box(.27,.43,0,.06,.05,.27,K.shirtDark),l.box(0,.45,.14,.15,.12,.025,K.skin),l.box(0,.53,.04,.25,.05,.2,K.shirtDark),l.box(-.08,.44,.145,.03,.16,.02,K.shirtDark),l.box(.14,.34,.14,.025,.18,.02,K.shirtDark),l.box(-.17,.25,.135,.22,.02,.02,K.shirtLight),l.box(.08,.3,.145,.15,.11,.025,K.shirtLight),l.box(.08,.3,.16,.16,.02,.012,K.shirtDark),l.box(0,.065,0,.35,.05,.22,K.woodDark);for(let[e,t,n,r]of[[-.14,.02,.12,.2],[.12,.025,.14,.2],[-.02,0,.08,.21],[.2,.015,.07,.18]])l.box(e,t,.01,n,.07,r,K.shirtDark);l.box(-.11,.32,.145,.045,.35,.022,K.wood),l.box(.02,.47,.15,.05,.05,.022,K.wood),l.box(-.3,.2,.03,.12,.19,.17,K.wood),l.box(-.3,.3,.03,.13,.045,.18,K.woodDark),l.box(-.36,.24,.09,.03,.06,.03,K.chestMetal),l.box(0,.58,0,.15,.08,.15,K.skin),this.torsoMesh(l,n);let d=new q({voxel:.025,variation:.03});d.box(0,.25,0,.4,.27,.36,K.skin),d.box(0,.11,.015,.33,.12,.33,K.skin),d.box(0,.035,.02,.24,.06,.26,K.skin),d.box(0,.16,.183,.34,.09,.015,K.skinLight),d.box(-.15,.17,.19,.05,.05,.02,K.skinLight),d.box(.15,.17,.19,.05,.05,.02,K.skinLight),d.box(0,.335,.188,.26,.04,.015,K.skinLight),d.box(-.21,.19,.02,.05,.12,.08,K.skinDark),d.box(.21,.19,.02,.05,.12,.08,K.skinDark),d.box(0,.41,-.01,.42,.1,.37,K.hair),d.box(0,.34,-.16,.42,.18,.1,K.hair),d.box(-.21,.32,0,.06,.18,.3,K.hair),d.box(.21,.32,0,.06,.18,.3,K.hair),d.box(-.12,.47,.05,.12,.08,.12,K.hairLight),d.box(.08,.46,-.04,.16,.09,.14,K.hair),d.box(.18,.44,.08,.07,.1,.06,K.hairLight),d.box(-.16,.46,-.05,.08,.08,.12,K.hairLight),d.box(.03,.475,.07,.07,.06,.09,K.hair),d.box(.2,.41,-.1,.05,.13,.08,K.hairLight),d.box(-.22,.37,-.03,.04,.12,.08,K.hair),d.box(0,.31,.19,.1,.03,.03,K.hair),d.box(-.11,.31,.195,.08,.03,.02,K.hair),d.box(.11,.31,.195,.08,.03,.02,K.hair),d.box(0,.17,.21,.07,.09,.05,K.skinDark),d.box(0,.095,.19,.15,.035,.02,K.black),d.box(0,.055,.17,.3,.09,.07,K.beard),d.box(0,.1,.185,.1,.04,.02,K.beard),d.box(-.18,.12,.16,.06,.08,.03,K.beard),d.box(.18,.12,.16,.06,.08,.03,K.beard),d.box(.1,.24,.19,.03,.04,.02,K.black),d.box(-.1,.24,.19,.03,.04,.02,K.black),this.headMesh(d,r);for(let e of[-1,1]){let t=new H;t.position.set(e*.1,.245,.182);let n=new q({voxel:.025,variation:.03});n.box(0,0,0,.085,.07,.02,K.eyeWhite),n.box(e*.012,0,.012,.036,.05,.015,K.eyeDark);let i=n.mesh(J(),!1,!1);t.add(i),r.add(t),this.eyes.push(t)}this.hat=new H;let f=new q({voxel:.025,variation:.025});f.box(0,0,0,.58,.045,.54,K.leafDry),f.box(0,.06,0,.34,.12,.34,K.leafDry),f.box(0,.13,0,.26,.05,.26,K.sandLight),f.box(0,.05,.17,.36,.035,.035,K.woodDark),f.box(.28,.08,.02,.06,.2,.045,K.shirt),f.box(.3,.17,.02,.05,.08,.04,K.shellPink),this.hat.add(f.mesh(J())),this.hat.position.set(0,.47,.005),this.hat.visible=!1,r.add(this.hat),this.necklace=new H;let p=new q({voxel:.025,variation:.025});p.box(0,0,0,.3,.02,.02,K.woodDark),p.box(-.12,.03,.005,.02,.03,.02,K.woodDark),p.box(.12,.03,.005,.02,.03,.02,K.woodDark);for(let[e,t,n,r]of[[-.08,-.015,.06,K.shellPink],[0,-.03,.05,K.shellCream],[.08,-.015,.055,K.shellPink]])p.box(e,t,.005,n,n,.025,r);this.necklace.add(p.mesh(J())),this.necklace.position.set(0,.49,.135),this.necklace.visible=!1,n.add(this.necklace);for(let[e,t]of[[i,-1],[a,1]]){let t=new q({voxel:.025,variation:.03});t.box(0,-.04,0,.17,.14,.18,K.shirt),t.box(0,-.12,0,.16,.055,.18,K.shirtDark),t.box(0,-.16,0,.12,.06,.14,K.skin);for(let e=0;e<4;e++)t.box(0,-.19-e*.04,0,.105-e*.004,.045,.125,K.skin);t.box(0,-.33,0,.11,.04,.13,K.skinDark),t.box(0,-.37,0,.105,.04,.125,K.skin),t.box(0,-.41,0,.1,.04,.12,K.skinDark),t.box(0,-.45,0,.1,.05,.12,K.skin),t.box(0,-.49,.005,.115,.045,.13,K.skinDark),t.box(0,-.525,.015,.135,.065,.145,K.skinLight);for(let[e,n,r]of[[-.045,.075,.035],[0,.085,.04],[.045,.075,.035]])t.box(e,-.575,n,r,.075,.045,K.skin),t.box(e,-.61,n+.008,r*.85,.04,.04,K.skinLight);t.box(-.075,-.54,.035,.035,.06,.05,K.skin),t.box(.02,-.55,.04,.1,.02,.1,K.skinDark),this.limbMesh(t,e)}a.add(c);let m=new H;m.position.y=-.34,o.add(m);let h=new H;h.position.y=-.34,s.add(h);let g=new H;g.position.y=-.3,m.add(g);let _=new H;_.position.y=-.3,h.add(_);for(let[e,t]of[[o,-1],[s,1]]){let n=t<0?m:h,r=new q({voxel:.025,variation:.03});r.box(0,-.05,0,.21,.16,.24,K.shorts),r.box(t*.02,-.09,.085,.16,.05,.09,K.shortsDark),r.box(0,-.15,0,.19,.07,.23,K.shortsDark);let i=r.mesh(J());i.castShadow=!0,i.receiveShadow=!0,e.add(i),this.shortsMeshes.push(i);let a=new q({voxel:.025,variation:.03});a.box(0,-.21,0,.16,.08,.18,K.skin),a.box(0,-.27,0,.15,.08,.17,K.skin),a.box(0,-.325,0,.14,.04,.16,K.skinDark),this.limbMesh(a,e);let o=new q({voxel:.025,variation:.03});o.box(0,-.015,0,.14,.05,.16,K.skinDark),o.box(0,-.07,0,.135,.12,.15,K.skin),o.box(0,-.16,0,.125,.1,.14,K.skinDark),o.box(0,-.23,0,.115,.06,.12,K.skin),o.box(0,-.285,0,.12,.045,.13,K.skinDark),this.limbMesh(o,n);let s=t<0?g:_,c=new q({voxel:.025,variation:.03});c.box(0,-.015,.01,.14,.055,.14,K.skinDark),c.box(0,-.035,.055,.17,.05,.23,K.skinDark),c.box(0,-.025,.055,.19,.04,.27,K.skin),c.box(0,-.03,-.075,.13,.05,.08,K.skinDark);for(let[e,t]of[[-.055,.045],[0,.05],[.055,.045]])c.box(e,-.05,.17,t,.035,.055,K.skinLight);c.box(0,-.02,.11,.08,.03,.08,K.skinDark),this.limbMesh(c,s)}let v=new q({voxel:.05});v.box(0,.34,.02,.62,.08,.82,K.leafDry),v.box(0,.4,.02,.5,.05,.6,K.leaf),v.box(.2,.37,-.3,.16,.04,.2,K.leafDark),this.blanket=v.mesh(J()),this.blanket.visible=!1,n.add(this.blanket),t.add(n,o,s),n.add(r,i,a),e.add(t),this.root.add(e),this.rig={root:this.root,body:e,hips:t,torso:n,head:r,armL:i,armR:a,legL:o,legR:s,kneeL:m,kneeR:h,ankleL:g,ankleR:_,handR:c},this.buildProps(),this.root.traverse(e=>{e instanceof W&&(e.castShadow=!0,e.receiveShadow=!0)})}torsoMesh(e,t){t.add(e.mesh(J()))}headMesh(e,t){t.add(e.mesh(J()))}limbMesh(e,t){t.add(e.mesh(J()))}buildProps(){let e=(e,t)=>{let n=new q({voxel:.025,variation:.03});t(n);let r=n.mesh(J());e===`stick`&&(r.rotation.x=Math.PI/2),e===`rod`&&(this.rodTip=new An,this.rodTip.position.set(0,0,1.52),r.add(this.rodTip)),r.visible=!1,r.traverse(e=>{e instanceof W&&(e.castShadow=!0,e.receiveShadow=!0)}),this.rig.handR.add(r),this.props.set(e,r)};e(`rod`,e=>{e.box(0,0,.12,.035,.035,.3,K.woodDark),e.box(0,.005,.75,.024,.024,1.1,K.wood),e.box(0,.01,1.34,.018,.018,.2,K.woodLight),e.box(0,-.055,.36,.09,.09,.06,K.stoneDark)}),e(`coconut`,e=>{e.box(0,-.04,.02,.2,.2,.2,K.coconut),e.box(.03,.05,.04,.12,.05,.12,K.coconutLight),e.box(-.11,-.02,-.02,.04,.09,.09,K.coconut)}),e(`fish`,e=>{e.box(0,-.03,.1,.12,.12,.34,K.fish),e.box(0,-.06,.08,.1,.04,.24,K.fishBelly),e.box(0,0,.3,.03,.16,.16,K.fishDark),e.box(.04,.03,.22,.02,.03,.03,K.black),e.box(0,-.03,-.06,.02,.14,.12,K.fishDark)}),e(`spear`,e=>{e.box(0,0,.7,.035,.035,1.4,K.wood),e.box(0,0,1.44,.02,.14,.18,K.stoneLight),e.box(0,0,1.56,.02,.02,.1,K.stone),e.box(0,0,.5,.05,.05,.06,K.woodDark)}),e(`log`,e=>{e.box(-.3,-.02,.12,.72,.17,.17,K.wood),e.box(-.3,.07,.12,.68,.02,.15,K.woodDark),e.box(-.63,-.02,.12,.06,.15,.15,K.woodLight),e.box(.02,-.02,.12,.05,.15,.15,K.woodLight)}),e(`hammer`,e=>{e.box(.18,0,.04,.36,.035,.035,K.wood),e.box(.38,0,.04,.15,.2,.17,K.stone),e.box(.38,0,.04,.16,.1,.18,K.stoneDark)}),e(`stick`,e=>{e.box(0,0,.4,.03,.03,.8,K.woodDark),e.box(.02,.02,.78,.05,.05,.08,K.wood)}),e(`bottle`,e=>{e.box(0,-.02,.04,.12,.24,.12,K.glass),e.box(0,.12,.04,.06,.08,.06,K.glass),e.box(0,.17,.04,.07,.04,.07,K.woodDark),e.box(0,-.02,.105,.07,.16,.015,K.sos)}),e(`shell`,e=>{e.box(0,-.02,.03,.14,.06,.12,K.shellPink),e.box(0,.015,.03,.08,.04,.07,K.shellCream)}),e(`berries`,e=>{e.box(0,-.02,.03,.12,.07,.12,K.leaf);for(let t=0;t<3;t++)e.box(-.03+t*.035,.04,.02+t%2*.04,.05,.05,.05,K.berry)}),e(`paddle`,e=>{e.box(0,0,.4,.04,.04,.8,K.wood),e.box(0,0,.88,.16,.04,.26,K.woodLight)}),e(`plank`,e=>{e.box(0,-.02,.22,.24,.06,.44,K.woodLight),e.box(0,.02,.22,.2,.02,.36,K.wood)}),e(`letter`,e=>{e.box(0,-.02,.1,.2,.02,.26,K.sos),e.box(0,0,.1,.14,.015,.18,K.white)}),e(`stone`,e=>{e.box(0,-.02,.04,.13,.1,.14,K.stone),e.box(.03,.03,.05,.06,.04,.07,K.stoneLight)})}setProp(e){if(this.activeProp!==e){for(let[t,n]of this.props)n.visible=t===e;this.activeProp=e}}get prop(){return this.activeProp}setBlanket(e){this.blanket.visible=e}setEyesClosed(e){this.closed=e}setShorts(e){for(let t of this.shortsMeshes)t.visible=e}setHat(e){this.hat.visible!==e&&(this.hat.visible=e)}setNecklace(e){this.necklace.visible!==e&&(this.necklace.visible=e)}updateFace(e,t){this.blinkTimer-=e,this.blinkTimer<=0&&(this.blinkTimer=3.2+(Math.sin(t*13.7)*.5+.5)*3.8,this.blinkPhase=.13),this.blinkPhase>0&&(this.blinkPhase-=e);let n=this.closed||this.blinkPhase>0?.1:1,r=1-Math.exp(-28*e);for(let e of this.eyes)e.scale.y+=(n-e.scale.y)*r}},md=[[1,0,1],[-1,0,1],[0,1,1],[0,-1,1],[1,1,1.4142],[1,-1,1.4142],[-1,1,1.4142],[-1,-1,1.4142]],hd=class{island;constructor(e){this.island=e}findPath(e,t){let n=this.island.cellCoords(e.x,e.z),r=this.island.cellCoords(t.x,t.z);if(!n||!r)return null;let[i,a]=n;if(!this.island.walkableCell(i,a)){let t=this.island.nearestWalkable(e.x,e.z,3);if(!t)return null;i=t.i,a=t.j}let[o,s]=r;if(!this.island.walkableCell(o,s)){let e=this.island.nearestWalkable(t.x,t.z,5);if(!e)return null;o=e.i,s=e.j}let c=this.island.cellX(o),l=this.island.cellZ(s);if(this.isLineWalkable(e.x,e.z,c,l))return[new B(c,this.island.heightAt(c,l),l)];let u=5712,d=new Float32Array(u).fill(1/0),f=new Uint8Array(u),p=new Int32Array(u).fill(-1),m=[],h=a*84+i,g=s*84+o,_=(e,t)=>{let n=Math.abs(e-o),r=Math.abs(t-s);return n+r+(1.4142-2)*Math.min(n,r)};d[h]=0,m.push({i,j:a,g:0,f:_(i,a),parent:-1});let v=0;for(;m.length>0&&v++<12e3;){let t=0;for(let e=1;e<m.length;e++)m[e].f<m[t].f&&(t=e);let n=m.splice(t,1)[0],r=n.j*84+n.i;if(!f[r]){if(f[r]=1,p[r]=n.parent,r===g)return this.reconstruct(p,r,e,c,l);for(let[e,t,i]of md){let a=n.i+e,o=n.j+t;if(!this.island.walkableCell(a,o)||e!==0&&t!==0&&(!this.island.walkableCell(n.i+e,n.j)||!this.island.walkableCell(n.i,n.j+t)))continue;let s=o*84+a;if(f[s])continue;let c=Math.abs(this.island.topAt(a,o)-this.island.topAt(n.i,n.j));if(c>.5501)continue;let l=n.g+i+c*.6;l<d[s]&&(d[s]=l,p[s]=r,m.push({i:a,j:o,g:l,f:l+_(a,o),parent:r}))}}}return null}reconstruct(e,t,n,r,i){let a=[],o=t,s=0;for(;o>=0&&s++<5e3;)a.push(o),o=e[o];a.reverse();let c=a.map(e=>{let t=e%84,n=Math.floor(e/84),r=this.island.cellX(t),i=this.island.cellZ(n);return new B(r,this.island.heightAt(r,i),i)});return this.island.isWalkable(r,i)&&(c[c.length-1]=new B(r,this.island.heightAt(r,i),i)),this.smooth(c,n)}smooth(e,t){if(e.length<=2)return e;let n=[],r=new B(t.x,0,t.z),i=0;for(;i<e.length;){let t=i;for(let n=e.length-1;n>i;n--)if(this.isLineWalkable(r.x,r.z,e[n].x,e[n].z)){t=n;break}n.push(e[t]),r=e[t],i=t+1}return n}isLineWalkable(e,t,n,r){let i=n-e,a=r-t,o=Math.hypot(i,a);if(o<.05)return!0;let s=Math.ceil(o/.12);for(let n=1;n<=s;n++){let r=n/s,o=e+i*r,c=t+a*r;if(!this.island.isWalkable(o,c))return!1}return!0}},gd=new er,_d=new B,vd=class extends po{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type=`LineSegmentsGeometry`,this.setIndex([0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5]),this.setAttribute(`position`,new xr([-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],3)),this.setAttribute(`uv`,new xr([-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],2))}applyMatrix4(e){let t=this.attributes.instanceStart,n=this.attributes.instanceEnd;return t!==void 0&&(t.applyMatrix4(e),n.applyMatrix4(e),t.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));let n=new Ao(t,6,1);return this.setAttribute(`instanceStart`,new Ir(n,3,0)),this.setAttribute(`instanceEnd`,new Ir(n,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));let n=new Ao(t,6,1);return this.setAttribute(`instanceColorStart`,new Ir(n,3,0)),this.setAttribute(`instanceColorEnd`,new Ir(n,3,3)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new fa(e.geometry)),this}fromLineSegments(e){let t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new er);let e=this.attributes.instanceStart,t=this.attributes.instanceEnd;e!==void 0&&t!==void 0&&(this.boundingBox.setFromBufferAttribute(e),gd.setFromBufferAttribute(t),this.boundingBox.union(gd))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Tr),this.boundingBox===null&&this.computeBoundingBox();let e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(e!==void 0&&t!==void 0){let n=this.boundingSphere.center;this.boundingBox.getCenter(n);let r=0;for(let i=0,a=e.count;i<a;i++)_d.fromBufferAttribute(e,i),r=Math.max(r,n.distanceToSquared(_d)),_d.fromBufferAttribute(t,i),r=Math.max(r,n.distanceToSquared(_d));this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error(`THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.`,this)}}toJSON(){}};G.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new z},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}},Ko.line={uniforms:ya.merge([G.common,G.fog,G.line]),vertexShader:`
		#include <common>
		#include <color_pars_vertex>
		#include <fog_pars_vertex>
		#include <logdepthbuf_pars_vertex>
		#include <clipping_planes_pars_vertex>

		uniform float linewidth;
		uniform vec2 resolution;

		attribute vec3 instanceStart;
		attribute vec3 instanceEnd;

		attribute vec3 instanceColorStart;
		attribute vec3 instanceColorEnd;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#ifdef USE_DASH

			uniform float dashScale;
			attribute float instanceDistanceStart;
			attribute float instanceDistanceEnd;
			varying float vLineDistance;

		#endif

		float trimSegmentAlpha( const in vec4 start, const in vec4 end ) {

			// compute the interpolation factor needed to trim the segment so it terminates
			// between the camera plane and the near plane

			// conservative estimate of the near plane
			float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
			float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column

			// we need different nearEstimate formula for reversed and default depth buffer
			// a is positive with a reversed depth buffer so it can be used for controlling the code flow
			float nearEstimate = ( a > 0.0 ) ? ( - b / ( a + 1.0 ) ) : ( - 0.5 * b / a );

			return ( nearEstimate - start.z ) / ( end.z - start.z );

		}

		void main() {

			#ifdef USE_COLOR

				vColor.xyz = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

			#endif

			float aspect = resolution.x / resolution.y;

			// camera space
			vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

			#ifdef USE_DASH

				float lineDistanceStart = dashScale * instanceDistanceStart;
				float lineDistanceEnd = dashScale * instanceDistanceEnd;

			#endif

			#ifdef WORLD_UNITS

				worldStart = start.xyz;
				worldEnd = end.xyz;

			#else

				vUv = uv;

			#endif

			// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
			// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
			// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
			// perhaps there is a more elegant solution -- WestLangley

			bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

			if ( perspective ) {

				if ( start.z < 0.0 && end.z >= 0.0 ) {

					float alpha = trimSegmentAlpha( start, end );
					end.xyz = mix( start.xyz, end.xyz, alpha );

					#ifdef USE_DASH

						lineDistanceEnd = mix( lineDistanceStart, lineDistanceEnd, alpha );

					#endif

				} else if ( end.z < 0.0 && start.z >= 0.0 ) {

					float alpha = trimSegmentAlpha( end, start );
					start.xyz = mix( end.xyz, start.xyz, alpha );

					#ifdef USE_DASH

						lineDistanceStart = mix( lineDistanceEnd, lineDistanceStart, alpha );

					#endif

				}

			}

			#ifdef USE_DASH

				vLineDistance = ( position.y < 0.5 ) ? lineDistanceStart : lineDistanceEnd;
				vUv = uv;

			#endif

			// clip space
			vec4 clipStart = projectionMatrix * start;
			vec4 clipEnd = projectionMatrix * end;

			// ndc space
			vec3 ndcStart = clipStart.xyz / clipStart.w;
			vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

			// direction
			vec2 dir = ndcEnd.xy - ndcStart.xy;

			// account for clip-space aspect ratio
			dir.x *= aspect;
			dir = normalize( dir );

			#ifdef WORLD_UNITS

				vec3 worldDir = normalize( end.xyz - start.xyz );
				vec3 tmpFwd = normalize( mix( start.xyz, end.xyz, 0.5 ) );
				vec3 worldUp = normalize( cross( worldDir, tmpFwd ) );
				vec3 worldFwd = cross( worldDir, worldUp );
				worldPos = position.y < 0.5 ? start: end;

				// height offset
				float hw = linewidth * 0.5;
				worldPos.xyz += position.x < 0.0 ? hw * worldUp : - hw * worldUp;

				// don't extend the line if we're rendering dashes because we
				// won't be rendering the endcaps
				#ifndef USE_DASH

					// cap extension
					worldPos.xyz += position.y < 0.5 ? - hw * worldDir : hw * worldDir;

					// add width to the box
					worldPos.xyz += worldFwd * hw;

					// endcaps
					if ( position.y > 1.0 || position.y < 0.0 ) {

						worldPos.xyz -= worldFwd * 2.0 * hw;

					}

				#endif

				// project the worldpos
				vec4 clip = projectionMatrix * worldPos;

				// shift the depth of the projected points so the line
				// segments overlap neatly
				vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
				clip.z = clipPose.z * clip.w;

			#else

				vec2 offset = vec2( dir.y, - dir.x );
				// undo aspect ratio adjustment
				dir.x /= aspect;
				offset.x /= aspect;

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				// endcaps
				if ( position.y < 0.0 ) {

					offset += - dir;

				} else if ( position.y > 1.0 ) {

					offset += dir;

				}

				// adjust for linewidth
				offset *= linewidth;

				// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
				offset /= resolution.y;

				// select end
				vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

				// back to clip space
				offset *= clip.w;

				clip.xy += offset;

			#endif

			gl_Position = clip;

			vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

			#include <logdepthbuf_vertex>
			#include <clipping_planes_vertex>
			#include <fog_vertex>

		}
		`,fragmentShader:`
		uniform vec3 diffuse;
		uniform float opacity;
		uniform float linewidth;

		#ifdef USE_DASH

			uniform float dashOffset;
			uniform float dashSize;
			uniform float gapSize;

		#endif

		varying float vLineDistance;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#include <common>
		#include <color_pars_fragment>
		#include <fog_pars_fragment>
		#include <logdepthbuf_pars_fragment>
		#include <clipping_planes_pars_fragment>

		vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

			float mua;
			float mub;

			vec3 p13 = p1 - p3;
			vec3 p43 = p4 - p3;

			vec3 p21 = p2 - p1;

			float d1343 = dot( p13, p43 );
			float d4321 = dot( p43, p21 );
			float d1321 = dot( p13, p21 );
			float d4343 = dot( p43, p43 );
			float d2121 = dot( p21, p21 );

			float denom = d2121 * d4343 - d4321 * d4321;

			float numer = d1343 * d4321 - d1321 * d4343;

			mua = numer / denom;
			mua = clamp( mua, 0.0, 1.0 );
			mub = ( d1343 + d4321 * ( mua ) ) / d4343;
			mub = clamp( mub, 0.0, 1.0 );

			return vec2( mua, mub );

		}

		void main() {

			float alpha = opacity;
			vec4 diffuseColor = vec4( diffuse, alpha );

			#include <clipping_planes_fragment>

			#ifdef USE_DASH

				if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

				if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

			#endif

			#ifdef WORLD_UNITS

				// Find the closest points on the view ray and the line segment
				vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
				vec3 lineDir = worldEnd - worldStart;
				vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

				vec3 p1 = worldStart + lineDir * params.x;
				vec3 p2 = rayEnd * params.y;
				vec3 delta = p1 - p2;
				float len = length( delta );
				float norm = len / linewidth;

				#ifndef USE_DASH

					#ifdef USE_ALPHA_TO_COVERAGE

						float dnorm = fwidth( norm );
						alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

					#else

						if ( norm > 0.5 ) {

							discard;

						}

					#endif

				#endif

			#else

				#ifdef USE_ALPHA_TO_COVERAGE

					// artifacts appear on some hardware if a derivative is taken within a conditional
					float a = vUv.x;
					float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
					float len2 = a * a + b * b;
					float dlen = fwidth( len2 );

					if ( abs( vUv.y ) > 1.0 ) {

						alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

					}

				#else

					if ( abs( vUv.y ) > 1.0 ) {

						float a = vUv.x;
						float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
						float len2 = a * a + b * b;

						if ( len2 > 1.0 ) discard;

					}

				#endif

			#endif

			#include <logdepthbuf_fragment>
			#include <color_fragment>

			gl_FragColor = vec4( diffuseColor.rgb, alpha );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>
			#include <fog_fragment>
			#include <premultiplied_alpha_fragment>

		}
		`};var yd=class extends Sa{constructor(e){super({type:`LineMaterial`,uniforms:ya.clone(Ko.line.uniforms),vertexShader:Ko.line.vertexShader,fragmentShader:Ko.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(e)}get color(){return this.uniforms.diffuse.value}set color(e){this.uniforms.diffuse.value=e}get worldUnits(){return`WORLD_UNITS`in this.defines}set worldUnits(e){e===!0!==this.worldUnits&&(this.needsUpdate=!0),e===!0?this.defines.WORLD_UNITS=``:delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(e){this.uniforms.linewidth&&(this.uniforms.linewidth.value=e)}get dashed(){return`USE_DASH`in this.defines}set dashed(e){e===!0!==this.dashed&&(this.needsUpdate=!0),e===!0?this.defines.USE_DASH=``:delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(e){this.uniforms.dashScale.value=e}get dashSize(){return this.uniforms.dashSize.value}set dashSize(e){this.uniforms.dashSize.value=e}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(e){this.uniforms.dashOffset.value=e}get gapSize(){return this.uniforms.gapSize.value}set gapSize(e){this.uniforms.gapSize.value=e}get opacity(){return this.uniforms.opacity.value}set opacity(e){this.uniforms&&(this.uniforms.opacity.value=e)}get resolution(){return this.uniforms.resolution.value}set resolution(e){this.uniforms.resolution.value.copy(e)}get alphaToCoverage(){return`USE_ALPHA_TO_COVERAGE`in this.defines}set alphaToCoverage(e){this.defines&&(e===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),e===!0?this.defines.USE_ALPHA_TO_COVERAGE=``:delete this.defines.USE_ALPHA_TO_COVERAGE)}},bd=new Zt,xd=new B,Sd=new B,Cd=new Zt,wd=new Zt,Td=new Zt,Ed=new B,Dd=new nn,Od=new zo,kd=new B,Ad=new er,jd=new Tr,Md=new Zt,Nd,Pd;function Fd(e,t,n){return Md.set(0,0,-t,1).applyMatrix4(e.projectionMatrix),Md.multiplyScalar(1/Md.w),Md.x=Pd/n.width,Md.y=Pd/n.height,Md.applyMatrix4(e.projectionMatrixInverse),Md.multiplyScalar(1/Md.w),Math.abs(Math.max(Md.x,Md.y))}function Id(e,t){let n=e.matrixWorld,r=e.geometry,i=r.attributes.instanceStart,a=r.attributes.instanceEnd,o=Math.min(r.instanceCount,i.count);for(let r=0,s=o;r<s;r++){Od.start.fromBufferAttribute(i,r),Od.end.fromBufferAttribute(a,r),Od.applyMatrix4(n);let o=new B,s=new B;Nd.distanceSqToSegment(Od.start,Od.end,s,o),s.distanceTo(o)<Pd*.5&&t.push({point:s,pointOnLine:o,distance:Nd.origin.distanceTo(s),object:e,face:null,faceIndex:r,uv:null,uv1:null})}}function Ld(e,t,n){let r=t.projectionMatrix,i=e.material.resolution,a=e.matrixWorld,o=e.geometry,s=o.attributes.instanceStart,c=o.attributes.instanceEnd,l=Math.min(o.instanceCount,s.count),u=-t.near;Nd.at(1,Td),Td.w=1,Td.applyMatrix4(t.matrixWorldInverse),Td.applyMatrix4(r),Td.multiplyScalar(1/Td.w),Td.x*=i.x/2,Td.y*=i.y/2,Td.z=0,Ed.copy(Td),Dd.multiplyMatrices(t.matrixWorldInverse,a);for(let t=0,o=l;t<o;t++){if(Cd.fromBufferAttribute(s,t),wd.fromBufferAttribute(c,t),Cd.w=1,wd.w=1,Cd.applyMatrix4(Dd),wd.applyMatrix4(Dd),Cd.z>u&&wd.z>u)continue;if(Cd.z>u){let e=Cd.z-wd.z,t=(Cd.z-u)/e;Cd.lerp(wd,t)}else if(wd.z>u){let e=wd.z-Cd.z,t=(wd.z-u)/e;wd.lerp(Cd,t)}Cd.applyMatrix4(r),wd.applyMatrix4(r),Cd.multiplyScalar(1/Cd.w),wd.multiplyScalar(1/wd.w),Cd.x*=i.x/2,Cd.y*=i.y/2,wd.x*=i.x/2,wd.y*=i.y/2,Od.start.copy(Cd),Od.start.z=0,Od.end.copy(wd),Od.end.z=0;let o=Od.closestPointToPointParameter(Ed,!0);Od.at(o,kd);let l=Mt.lerp(Cd.z,wd.z,o),d=l>=-1&&l<=1,f=Ed.distanceTo(kd)<Pd*.5;if(d&&f){Od.start.fromBufferAttribute(s,t),Od.end.fromBufferAttribute(c,t),Od.start.applyMatrix4(a),Od.end.applyMatrix4(a);let r=new B,i=new B;Nd.distanceSqToSegment(Od.start,Od.end,i,r),n.push({point:i,pointOnLine:r,distance:Nd.origin.distanceTo(i),object:e,face:null,faceIndex:t,uv:null,uv1:null})}}}var Rd=class extends W{constructor(e=new vd,t=new yd({color:Math.random()*16777215})){super(e,t),this.isLineSegments2=!0,this.type=`LineSegments2`}computeLineDistances(){let e=this.geometry,t=e.attributes.instanceStart,n=e.attributes.instanceEnd,r=new Float32Array(2*t.count);for(let e=0,i=0,a=t.count;e<a;e++,i+=2)xd.fromBufferAttribute(t,e),Sd.fromBufferAttribute(n,e),r[i]=i===0?0:r[i-1],r[i+1]=r[i]+xd.distanceTo(Sd);let i=new Ao(r,2,1);return e.setAttribute(`instanceDistanceStart`,new Ir(i,1,0)),e.setAttribute(`instanceDistanceEnd`,new Ir(i,1,1)),this}raycast(e,t){let n=this.material.worldUnits,r=e.camera;if(r===null&&!n&&console.error(`LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.`),n===!1&&(this.material.resolution.x===0||this.material.resolution.y===0))return;let i=e.params.Line2===void 0?0:e.params.Line2.threshold||0;Nd=e.ray;let a=this.matrixWorld,o=this.geometry,s=this.material;Pd=s.linewidth+i,o.boundingSphere===null&&o.computeBoundingSphere(),jd.copy(o.boundingSphere).applyMatrix4(a);let c;if(c=n?Pd*.5:Fd(r,Math.max(r.near,jd.distanceToPoint(Nd.origin)),s.resolution),jd.radius+=c,Nd.intersectsSphere(jd)===!1)return;o.boundingBox===null&&o.computeBoundingBox(),Ad.copy(o.boundingBox).applyMatrix4(a);let l;l=n?Pd*.5:Fd(r,Math.max(r.near,Ad.distanceToPoint(Nd.origin)),s.resolution),Ad.expandByScalar(l),Nd.intersectsBox(Ad)!==!1&&(n?Id(this,t):Ld(this,r,t))}onBeforeRender(e){let t=this.material.uniforms;t&&t.resolution&&(e.getViewport(bd),this.material.uniforms.resolution.value.set(bd.z,bd.w))}},zd=class extends vd{constructor(){super(),this.isLineGeometry=!0,this.type=`LineGeometry`}setPositions(e){let t=e.length-3,n=new Float32Array(2*t);for(let r=0;r<t;r+=3)n[2*r]=e[r],n[2*r+1]=e[r+1],n[2*r+2]=e[r+2],n[2*r+3]=e[r+3],n[2*r+4]=e[r+4],n[2*r+5]=e[r+5];return super.setPositions(n),this}setColors(e){let t=e.length-3,n=new Float32Array(2*t);for(let r=0;r<t;r+=3)n[2*r]=e[r],n[2*r+1]=e[r+1],n[2*r+2]=e[r+2],n[2*r+3]=e[r+3],n[2*r+4]=e[r+4],n[2*r+5]=e[r+5];return super.setColors(n),this}setFromPoints(e){let t=e.length-1,n=new Float32Array(6*t);for(let r=0;r<t;r++)n[6*r]=e[r].x,n[6*r+1]=e[r].y,n[6*r+2]=e[r].z||0,n[6*r+3]=e[r+1].x,n[6*r+4]=e[r+1].y,n[6*r+5]=e[r+1].z||0;return super.setPositions(n),this}fromLine(e){let t=e.geometry;return this.setPositions(t.attributes.position.array),this}},Bd=class extends Rd{constructor(e=new zd,t=new yd({color:Math.random()*16777215})){super(e,t),this.isLine2=!0,this.type=`Line2`}},Vd=.035,Hd=class{island;line;lineMaterial;linePositions;points=16;bobber=new H;target=new B;tip=new B;current=new B;visible=!1;constructor(e,t){this.island=t,this.linePositions=new Float32Array(this.points*3);let n=new zd;n.setPositions(Array(this.points*3).fill(0)),this.lineMaterial=new yd({color:16249823,linewidth:2.4,transparent:!0,opacity:.9,depthWrite:!1,worldUnits:!1}),this.lineMaterial.resolution.set(window.innerWidth,window.innerHeight),this.line=new Bd(n,this.lineMaterial),this.line.frustumCulled=!1,this.line.visible=!1,this.line.renderOrder=3,e.add(this.line);let r=new wa({color:14241599,roughness:.7}),i=new wa({color:15920866,roughness:.8}),a=new wa({color:3811869,roughness:.9}),o=new W(new la(.105,.06,.105),r);o.position.y=.025,o.castShadow=!1,o.receiveShadow=!1;let s=new W(new la(.085,.05,.085),i);s.position.y=-.03,s.castShadow=!1,s.receiveShadow=!1;let c=new W(new la(.022,.12,.022),a);c.position.y=.1,c.castShadow=!1,c.receiveShadow=!1,this.bobber.add(o,s,c),this.bobber.visible=!1,e.add(this.bobber)}findWaterTarget(e,t,n){let r=Math.sin(n),i=Math.cos(n),a=-1;for(let n=.4;n<=4.5;n+=.25)if(this.island.heightAt(e+r*n,t+i*n)<=.06){a=n;break}if(a<0)return!1;let o=a+.55,s=e+r*o,c=t+i*o;return this.island.heightAt(s,c)>.08?!1:(this.target.set(s,Vd,c),!0)}update(e,t,n,r,i,a,o,s){if(!s||i!==`fishCast`&&i!==`fishWait`&&i!==`fishReel`&&i!==`fishFall`||!r.rodTip||r.prop!==`rod`||!this.findWaterTarget(t.x,t.z,n)){this.setVisible(!1);return}r.root.updateMatrixWorld(!0),r.rodTip.getWorldPosition(this.tip);let c=1;i===`fishCast`?(c=Math.min(1,a/1.15),c=c*c*(3-2*c)):i===`fishReel`&&(c=Math.max(0,1-Math.min(1,a/1.2)*.55));let l=i===`fishWait`?Math.sin(o*2.1)*.018:0;this.current.lerpVectors(this.tip,this.target,c),this.current.y=Mt.lerp(this.tip.y,this.target.y+l,c),i===`fishCast`&&c<1&&(this.current.y+=Math.sin(Math.PI*c)*.7),this.bobber.position.copy(this.current),this.bobber.visible=!0;let u=i===`fishWait`?.14:i===`fishReel`?.06:.02;for(let e=0;e<this.points;e++){let t=e/(this.points-1),n=Mt.lerp(this.tip.x,this.current.x,t),r=Mt.lerp(this.tip.z,this.current.z,t),i=Mt.lerp(this.tip.y,this.current.y,t)-Math.sin(Math.PI*t)*u;this.linePositions[e*3]=n,this.linePositions[e*3+1]=i,this.linePositions[e*3+2]=r}this.line.geometry.setPositions(Array.from(this.linePositions)),this.lineMaterial.resolution.set(window.innerWidth,window.innerHeight),this.line.visible=!0,this.visible=!0}setVisible(e){this.line.visible=e,this.bobber.visible=e,this.visible=e}get isVisible(){return this.visible}},Ud=.044,Wd=class{island;model=new pd;animator;root;position=new B;facing=0;facingTarget=0;nav;path=[];pathIndex=0;running=!1;walking=!1;speed=0;walkPhase=0;actionAnim=`idle`;actionProp=null;reaction=null;wadeMode=`none`;wadeTarget=new B;landPoint=new B;time=0;yOverride=null;fishing;actionElapsed=0;constructor(e,t,n){this.island=e,this.nav=new hd(e),this.animator=new fd(this.model),this.fishing=new Hd(e.group,e),this.root=this.model.root,this.position.set(t,e.heightAt(t,n),n),this.root.position.set(this.position.x,this.position.y+Ud,this.position.z)}spawn(e,t,n=0){this.path=[],this.wadeMode=`none`,this.position.set(e,this.island.heightAt(e,t),t),this.facing=n,this.facingTarget=n,this.root.position.set(this.position.x,this.position.y+Ud,this.position.z),this.root.rotation.y=n}teleport(e,t,n){this.spawn(e,t,n)}get isWalking(){return this.walking}get isWading(){return this.wadeMode!==`none`}get isMoving(){return this.walking||this.wadeMode===`out`||this.wadeMode===`back`}get hasPath(){return this.path.length>0}get arrived(){return this.path.length===0&&this.wadeMode===`none`}get currentAnimation(){return this.reaction?this.reaction.anim:this.isMoving?this.walkAnimation:this.actionAnim}get walkAnimation(){return this.speed>1.35?`run`:`walk`}goTo(e,t,n=!1){let r=this.nav.findPath(this.position,{x:e,z:t});return!r||r.length===0?(this.path=[],!1):(this.path=r,this.pathIndex=0,this.running=n,this.wadeMode=`none`,!0)}stop(){this.path=[],this.walking=!1,this.speed=0}faceToward(e,t){this.facingTarget=Math.atan2(e-this.position.x,t-this.position.z)}setAction(e,t=null){this.actionAnim=e,this.actionElapsed=0,this.actionProp=t,!this.isMoving&&!this.reaction&&(this.animator.play(e),this.model.setProp(t))}setReaction(e,t=1.8){this.reaction={anim:e,elapsed:0,duration:t},this.actionProp=null,this.model.setProp(null),this.wadeMode!==`none`&&this.wadeBack(),this.stop()}clearReaction(){this.reaction=null}get hasReaction(){return this.reaction!==null}wadeOut(e=1.5){this.stop(),this.landPoint.copy(this.position);let t=this.position.x,n=this.position.z,r=Math.hypot(t,n);r<.1?(t=Math.sin(this.facing),n=Math.cos(this.facing)):(t/=r,n/=r);let i=this.position.x+t*e,a=this.position.z+n*e;this.wadeTarget.set(i,.02,a),this.wadeMode=`out`,this.facingTarget=Math.atan2(t,n)}wadeBack(){if(this.wadeMode===`none`)return;let e=this.island.nearestWalkable(this.landPoint.x,this.landPoint.z,5)??{x:this.landPoint.x,z:this.landPoint.z};this.wadeTarget.set(e.x,.02,e.z),this.wadeMode=`back`}finishWade(){if(this.wadeMode===`none`)return;let e=this.island.nearestWalkable(this.landPoint.x,this.landPoint.z,5)??{x:this.landPoint.x,z:this.landPoint.z};this.position.x=e.x,this.position.z=e.z,this.position.y=this.island.heightAt(e.x,e.z),this.wadeMode=`none`}setYOverride(e){this.yOverride=e}getFocusPoint(e=new B){return e.set(this.position.x,this.position.y+1.15,this.position.z)}getHeadPoint(e=new B){return this.model.root.updateWorldMatrix(!0,!1),this.model.rig.head.getWorldPosition(e),e.y+=.78,e}update(e,t){this.time=t,this.actionElapsed+=e;let n=this.position.x,r=this.position.z,i=!1,a=0,o=this.yOverride??this.island.heightAt(this.position.x,this.position.z);if(this.wadeMode!==`none`){let t=this.wadeTarget.x-this.position.x,n=this.wadeTarget.z-this.position.z,r=Math.hypot(t,n);if(r>.05){let o=Math.min(r,.85*e);this.position.x+=t/r*o,this.position.z+=n/r*o,this.facingTarget=Math.atan2(t,n),i=!0,a=.7}else this.wadeMode===`back`&&(this.wadeMode=`none`,this.position.y=o);this.wadeMode!==`none`&&(o=.02),i=!0}else if(this.path.length>0){let t=this.path[this.pathIndex],n=t.x-this.position.x,r=t.z-this.position.z,o=Math.hypot(n,r),s=this.running?1.85:.95;if(o<.07)this.pathIndex++,this.pathIndex>=this.path.length&&(this.path=[],this.walking=!1,this.speed=0);else{let t=Math.min(o,s*e);this.position.x+=n/o*t,this.position.z+=r/o*t,this.facingTarget=Math.atan2(n,r),i=!0,a=s}this.walking=this.path.length>0}else this.walking=!1;this.speed=i?a:0;let s=Math.hypot(this.position.x-n,this.position.z-r);if(this.walking&&!this.isWading){let e=this.running?1:.833;this.walkPhase+=s/e*Math.PI*2}this.position.y+=(o-this.position.y)*(1-Math.exp(-14*e)),this.yOverride!==null&&(o=this.yOverride);let c=this.facingTarget-this.facing;for(;c>Math.PI;)c-=Math.PI*2;for(;c<-Math.PI;)c+=Math.PI*2;this.facing+=c*(1-Math.exp(-10*e)),this.root.position.set(this.position.x,this.position.y+Ud,this.position.z),this.root.rotation.y=this.facing,this.reaction?(this.reaction.elapsed+=e,this.animator.play(this.reaction.anim),this.model.setProp(null),this.reaction.elapsed>=this.reaction.duration&&(this.reaction=null)):this.isWading?(this.animator.play(this.actionAnim),this.model.setProp(this.actionProp)):this.walking?(this.animator.play(this.walkAnimation),this.model.setProp(null)):(this.animator.play(this.actionAnim),this.model.setProp(this.actionProp));let l={walkPhase:this.walkPhase,speed:this.speed,moving:this.walking&&!this.reaction,globalTime:t};this.animator.update(e,l),this.fishing.update(e,this.position,this.facing,this.model,this.actionAnim,this.actionElapsed,t,!this.reaction&&!this.isMoving&&this.actionProp===`rod`)}};function Gd(e,t,n){let r=new Float32Array(t*3),i=new Float32Array(t*3),a=new Float32Array(t),o=new Float32Array(t);for(let e=0;e<t;e++)r[e*3+1]=-999;let s=new Nr;s.setAttribute(`position`,new vr(r,3)),s.setAttribute(`aColor`,new vr(i,3)),s.setAttribute(`aSize`,new vr(a,1)),s.setAttribute(`aAlpha`,new vr(o,1)),s.boundingSphere=new Tr(new B(0,2,0),45);let c=new na(s,new Sa({transparent:!0,depthWrite:!1,blending:n?2:1,vertexShader:`
      attribute vec3 aColor;
      attribute float aSize;
      attribute float aAlpha;
      varying vec3 vColor;
      varying float vAlpha;
      void main() {
        vec4 mv = modelViewMatrix * vec4(position, 1.0);
        gl_PointSize = aSize * (280.0 / max(1.0, -mv.z));
        gl_Position = projectionMatrix * mv;
        vColor = aColor;
        vAlpha = aAlpha;
      }
    `,fragmentShader:`
      varying vec3 vColor;
      varying float vAlpha;
      void main() {
        vec2 uv = gl_PointCoord - 0.5;
        float d = length(uv);
        if (d > 0.5) discard;
        float alpha = vAlpha * smoothstep(0.5, 0.12, d);
        gl_FragColor = vec4(vColor, alpha);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }
    `}));c.frustumCulled=!1,e.add(c);let l=[];for(let e=0;e<t;e++)l.push({x:0,y:-999,z:0,vx:0,vy:0,vz:0,life:0,max:1,size:.1,gravity:0,drag:.98,color:new U(1,1,1),floor:.03,active:!1});return{points:c,data:l,positions:r,colors:i,sizes:a,alphas:o}}var Kd=class{normal;glow;cursor={normal:0,glow:0};constructor(e){this.normal=Gd(e,420,!1),this.glow=Gd(e,320,!0)}spawn(e,t,n,r,i,a){let o=e===`normal`?this.normal:this.glow;for(let s=0;s<i;s++){let i=-1,s=e===`normal`?this.cursor.normal:this.cursor.glow;for(let e=0;e<o.data.length;e++){let t=(s+e)%o.data.length;if(!o.data[t].active){i=t;break}}if(i<0)return;e===`normal`?this.cursor.normal=(i+1)%o.data.length:this.cursor.glow=(i+1)%o.data.length;let c=o.data[i],l=a.spread??1,u=Math.random()*Math.PI*2,d=Math.random()*.25*l;c.x=t+Math.cos(u)*d,c.y=n+Math.random()*.15,c.z=r+Math.sin(u)*d;let f=Math.random()*a.speed;c.vx=Math.cos(u)*f,c.vz=Math.sin(u)*f,c.vy=a.up*(.4+Math.random()*.9),c.max=a.life*(.6+Math.random()*.8),c.life=c.max,c.size=a.size*(.6+Math.random()*.8),c.gravity=a.gravity,c.drag=a.drag??.985,c.color.setHex(a.colors[Math.floor(Math.random()*a.colors.length)]),c.floor=a.floor??.03,c.active=!0,o.positions[i*3]=c.x,o.positions[i*3+1]=c.y,o.positions[i*3+2]=c.z,o.colors[i*3]=c.color.r,o.colors[i*3+1]=c.color.g,o.colors[i*3+2]=c.color.b,o.sizes[i]=c.size,o.alphas[i]=1}}splash(e,t,n,r=24){this.spawn(`normal`,e,t,n,r,{colors:[K.foam,K.waterShallow,K.white,K.waterMid],speed:1.5,up:2.6,size:.12,life:.9,gravity:5.5,spread:1.4})}dust(e,t,n,r=14){this.spawn(`normal`,e,t+.05,n,r,{colors:[K.sand,K.sandLight,K.sandDark],speed:.7,up:1,size:.14,life:.8,gravity:2.4,spread:1.2,floor:t})}confetti(e,t,n,r=30){this.spawn(`normal`,e,t+.8,n,r,{colors:[K.shirt,K.flower,K.sea,K.shellPink,K.white],speed:1.1,up:2.4,size:.11,life:1.6,gravity:2,spread:1.5,floor:t})}sparkle(e,t,n,r=14){this.spawn(`glow`,e,t,n,r,{colors:[K.fireLight,K.white,K.fireLight],speed:.8,up:1.8,size:.09,life:.9,gravity:.4,spread:1.2})}fireBurst(e,t,n,r=30){this.spawn(`glow`,e,t,n,r,{colors:[K.fire,K.fireLight,K.ember,K.fire],speed:1.2,up:2.8,size:.13,life:1,gravity:1.2,spread:1.4})}smoke(e,t,n,r=8){this.spawn(`normal`,e,t,n,r,{colors:[K.smoke,K.grey,K.ash],speed:.4,up:1.1,size:.2,life:1.8,gravity:-.3,spread:1.5,drag:.99})}update(e){this.step(this.normal,e),this.step(this.glow,e)}step(e,t){let{positions:n,colors:r,sizes:i,alphas:a,data:o}=e,s=!1;for(let e=0;e<o.length;e++){let c=o[e];if(!c.active)continue;if(s=!0,c.life-=t,c.life<=0){c.active=!1,a[e]=0,n[e*3+1]=-999;continue}c.vy-=c.gravity*t,c.vx*=c.drag**(t*60),c.vy*=c.drag**(t*60),c.vz*=c.drag**(t*60),c.x+=c.vx*t,c.y+=c.vy*t,c.z+=c.vz*t,c.y<c.floor&&c.gravity>0&&(c.y=c.floor,c.vy*=-.22,c.vx*=.7,c.vz*=.7);let l=c.life/c.max;n[e*3]=c.x,n[e*3+1]=c.y,n[e*3+2]=c.z,r[e*3]=c.color.r,r[e*3+1]=c.color.g,r[e*3+2]=c.color.b,i[e]=c.size*(.6+l*.6),a[e]=Math.min(1,l*1.6)}s&&(e.points.geometry.getAttribute(`position`).needsUpdate=!0,e.points.geometry.getAttribute(`aColor`).needsUpdate=!0,e.points.geometry.getAttribute(`aSize`).needsUpdate=!0,e.points.geometry.getAttribute(`aAlpha`).needsUpdate=!0)}},qd=class{mesh;prints=[];dummy=new An;cursor=0;max=96;life=26;side=1;constructor(e){let t=new la(.11,.012,.19);t.translate(0,.006,0);let n=new ui({color:7033398,transparent:!0,opacity:.5,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,toneMapped:!1});this.mesh=new Ni(t,n,this.max),this.mesh.instanceMatrix.setUsage(Je),this.mesh.frustumCulled=!1,this.mesh.renderOrder=2,e.add(this.mesh);for(let e=0;e<this.max;e++)this.prints.push({x:0,y:-10,z:0,rotation:0,age:0,active:!1}),this.dummy.position.set(0,-10,0),this.dummy.scale.setScalar(0),this.dummy.updateMatrix(),this.mesh.setMatrixAt(e,this.dummy.matrix);this.mesh.instanceMatrix.needsUpdate=!0}add(e,t,n,r){let i=this.cursor++%this.max,a=this.prints[i],o=this.side;this.side*=-1;let s=Math.sin(r),c=Math.cos(r),l=Math.cos(r),u=-Math.sin(r);a.x=e-s*.12+l*o*.075,a.z=n-c*.12+u*o*.075,a.y=t+.008,a.rotation=r,a.age=0,a.active=!0,this.writeMatrix(i,a,1)}writeMatrix(e,t,n){this.dummy.position.set(t.x,t.y,t.z),this.dummy.rotation.set(0,t.rotation,0),this.dummy.scale.set(n,1,n),this.dummy.updateMatrix(),this.mesh.setMatrixAt(e,this.dummy.matrix)}update(e){let t=!1;for(let n=0;n<this.prints.length;n++){let r=this.prints[n];if(!r.active)continue;if(r.age+=e,r.age>=this.life){r.active=!1,this.writeMatrix(n,r,0),t=!0;continue}let i=r.age>this.life-5?1-(r.age-(this.life-5))/5:1;this.writeMatrix(n,r,Math.max(.001,i)),t=!0}t&&(this.mesh.instanceMatrix.needsUpdate=!0)}},Jd=class{group=new H;leftWing;rightWing;radius;height;speed;angle;flap;phase;constructor(e){this.radius=e.float(8,13),this.height=e.float(6.5,9.5),this.speed=e.float(.16,.26)*(e.chance(.5)?1:-1),this.angle=e.float(0,Math.PI*2),this.flap=e.float(5.5,8.5),this.phase=e.float(0,6.28);let t=new q({voxel:.05,variation:.025});t.box(0,0,0,.22,.13,.42,K.white),t.box(0,.055,.02,.17,.06,.3,K.sandLight),t.box(0,.02,.27,.15,.13,.14,K.white),t.box(0,0,.36,.06,.04,.12,K.flower),t.box(0,.02,-.28,.16,.05,.22,K.stoneLight),t.box(0,.08,.3,.03,.03,.03,K.black),this.group.add(t.mesh(J()));let n=e=>{let t=new H;t.position.set(e*.08,.03,0);let n=new q({voxel:.05,variation:.025});for(let t=0;t<5;t++)n.box(e*(.08+t*.095),.02+t*.018,-.06+t*.025,.12,.045,.2-t*.018,t>2?K.stoneLight:K.white);return n.box(e*.5,.08,.02,.08,.035,.12,K.stoneDark),t.add(n.mesh(J())),this.group.add(t),t};this.leftWing=n(-1),this.rightWing=n(1),this.group.scale.setScalar(.8),this.group.traverse(e=>{e instanceof W&&(e.castShadow=!1,e.receiveShadow=!1)})}update(e,t){this.angle+=this.speed*e;let n=Math.cos(this.angle)*this.radius,r=Math.sin(this.angle)*this.radius,i=this.height+Math.sin(t*.5+this.phase)*.35;this.group.position.set(n,i,r),this.group.rotation.y=-this.angle;let a=Math.sin(t*this.flap+this.phase)*.55+.12;this.rightWing.rotation.z=a,this.leftWing.rotation.z=-a,this.rightWing.rotation.x=Math.sin(t*1.4+this.phase)*.05,this.leftWing.rotation.x=this.rightWing.rotation.x}},Yd=class{group=new H;gulls=[];constructor(e,t){for(let e=0;e<3;e++){let e=new Jd(t);this.gulls.push(e),this.group.add(e.group)}e.add(this.group)}update(e,t,n,r){let i=n<.45&&!r;if(this.group.visible=i,i)for(let n of this.gulls)n.update(e,t)}};function Xd(e,t=J()){return e.mesh(t,!0,!0)}var Zd=class{group=new H;smoke=[];sail;phase;constructor(e=!1){this.phase=Math.random()*6;let t=new q({voxel:.05,variation:.03}),n=e?K.ghost:K.ship,r=e?6197126:K.shipDark,i=e?10470584:K.sail,a=e?8366237:K.sailDark;for(let e=0;e<9;e++){let i=e/8,a=1.8*Math.sin(Math.PI*(.15+i*.75));t.box(0,.18+Math.sin(i*Math.PI)*.22,-2.4+e*.6,a,.5,.62,e%3==0?r:n)}t.box(0,.55,.2,1.2,.14,2.8,r),t.box(0,.82,-.9,1.1,.55,1.1,n),t.box(0,1.1,-.9,1.3,.12,1.3,r),t.box(0,.78,-1.4,.5,.5,.5,r);for(let n of[-1,1]){t.box(n*.92,.72,.2,.06,.06,2.9,r);for(let e=0;e<6;e++)t.box(n*.92,.6,-1.2+e*.55,.06,.24,.06,r);for(let r of[-1.2,-.4,.4,1.2])t.box(n*.87,.38,r,.04,.12,.12,e?3108710:K.black)}t.box(0,.84,.36,.2,.36,.06,e?3108710:2825236);for(let n of[-1,1])t.box(n*.3,.95,.36,.18,.15,.05,e?9427140:K.fireLight);for(let e=0;e<6;e++){let n=e/6*Math.PI*2;t.box(Math.cos(n)*.2,.95+Math.sin(n)*.2,1.55,.06,.06,.06,r)}t.box(0,.95,1.55,.12,.12,.12,e?8366237:K.wood),t.box(0,2.3,-.2,.12,3.7,.12,e?8366237:K.woodDark),t.box(0,4.1,-.2,.5,.12,.12,r),t.box(0,3.55,-.2,.58,.08,.58,r);for(let[e,n]of[[-.24,-.24],[.24,-.24],[-.24,.24],[.24,.24]])t.box(e,3.7,-.2+n,.05,.26,.05,r);t.box(.22,4.28,-.2,.4,.22,.04,e?11061693:K.shirt),t.bar(new B(0,4.05,-.2),new B(0,.66,2.5),.028,r),t.bar(new B(0,4.05,-.2),new B(0,.66,-2.5),.028,r),t.bar(new B(0,4.05,-.2),new B(.95,.68,.2),.026,r),t.bar(new B(0,4.05,-.2),new B(-.95,.68,.2),.026,r),t.box(0,.78,2.35,.1,.12,.7,r),this.sail=Xd((()=>{let t=new q({voxel:.05,variation:.03});for(let e=0;e<8;e++)for(let n=0;n<7;n++){let r=n===0||n===6||e===0;t.box(-.94+n*.3,1.4+e*.3,-.2,.3,.29,.06,r?a:i)}t.box(0,3.9,-.2,.16,.16,.16,e?11061693:K.shirt);for(let e of[1,4,6])t.box(0,1.4+e*.3,-.17,2.08,.03,.03,a);for(let e of[1,3,5])t.box(-.94+e*.3,2.35,-.17,.025,2.3,.025,a);return t.box(0,2.1,-.23,.34,.34,.02,e?10470584:K.shirt),t.box(0,2.1,-.25,.14,.14,.02,i),t})(),e?new wa({vertexColors:!0,transparent:!0,opacity:.6,emissive:3108710,emissiveIntensity:.5}):J()),this.group.add(this.sail);let o=Xd(t,e?new wa({vertexColors:!0,transparent:!0,opacity:.55,emissive:3108710,emissiveIntensity:.45}):J());if(this.group.add(o),!e){let e=new q({voxel:.05,variation:.03});e.box(0,1.05,.6,.12,.14,.12,K.fireLight);let t=e.mesh(new ui({color:K.fireLight,toneMapped:!1}),!1,!1);this.group.add(t)}let s=new ui({color:e?10470584:14476253,transparent:!0,opacity:e?.18:.4});for(let e=0;e<5;e++){let e=new W(new la(.2,.2,.2),s.clone());e.position.set(.1,3.9,0),this.group.add(e),this.smoke.push(e)}this.group.traverse(e=>{e instanceof W&&(e.castShadow=!1,e.receiveShadow=!1)})}update(e){this.phase+=e,this.group.rotation.z=Math.sin(this.phase*.5)*.025,this.sail.rotation.y=Math.sin(this.phase*.35)*.04;for(let t=0;t<this.smoke.length;t++){let n=this.smoke[t];n.position.y+=e*(.35+t*.04),n.position.x+=e*.16,n.position.y>6&&n.position.set(.1,3.9,0);let r=n.material;r.opacity=Math.max(0,.35*(1-(n.position.y-3.9)/2.2))}}},Qd=class{group=new H;tail;hair;phase=0;constructor(){let e=new q({voxel:.05,variation:.03});e.box(0,.25,0,1.2,.6,.9,K.stoneDark),e.box(.2,.62,.1,.7,.25,.6,K.stone),this.group.add(e.mesh(J()));let t=new q({voxel:.05,variation:.03});t.box(0,1.05,0,.34,.55,.24,K.mermaid),t.box(0,1.4,.02,.28,.28,.26,K.skinLight),t.box(0,1.6,0,.24,.22,.24,K.skin),t.box(0,1.66,.12,.05,.04,.02,K.black),t.box(.08,1.66,.12,.05,.04,.02,K.black),t.box(0,1.58,.14,.06,.02,.02,K.shellPink),t.box(-.24,1.12,0,.14,.4,.14,K.skinLight),t.box(.24,1.12,0,.14,.4,.14,K.skinLight),t.box(-.08,.9,.1,.22,.12,.18,K.shellPink),this.group.add(t.mesh(J())),this.hair=new H;let n=new q({voxel:.05,variation:.03});n.box(0,1.7,-.06,.34,.24,.3,K.mermaidHair),n.box(-.16,1.5,-.1,.1,.42,.2,K.mermaidHair),n.box(.16,1.52,-.08,.1,.36,.2,K.mermaidHair),n.box(0,1.36,-.18,.28,.3,.1,K.mermaidHair),this.hair.add(n.mesh(J())),this.group.add(this.hair),this.tail=new H;let r=new q({voxel:.05,variation:.03});for(let e=0;e<7;e++){let t=e/6;r.box(.1+Math.sin(t*2.4)*.28,.7-t*.5,.25+t*.5,.3-t*.05,.22,.26,e%2?K.mermaid:7323569)}r.box(.35,.1,.85,.46,.08,.5,5941406),this.tail.add(r.mesh(J())),this.group.add(this.tail),this.group.traverse(e=>{e instanceof W&&(e.castShadow=!0,e.receiveShadow=!0)})}update(e){this.phase+=e,this.group.position.y=.03+Math.sin(this.phase*1.1)*.04,this.tail.rotation.y=Math.sin(this.phase*1.4)*.18,this.hair.rotation.z=Math.sin(this.phase*.7)*.04}},$d=class{group=new H;phase=0;constructor(){let e=new q({voxel:.05,variation:.025});for(let t=0;t<10;t++){let n=t/9,r=2.7*Math.sin(Math.PI*(.1+n*.8));for(let n=0;n<7;n++){let i=(-.5+n/6)*r,a=n%3==1;e.box(i,3.35+t*.31,0,r/5.8,.3,r*.8,a?K.balloonStripe:K.balloon)}(t===0||t===9)&&e.box(0,3.35+t*.31+.08,0,r*.5,.06,r*.5,K.balloonStripe)}e.box(0,6.55,0,.3,.12,.3,K.woodDark),e.box(0,2.98,0,1.4,.08,1.4,K.woodDark),e.box(0,2.1,0,.7,.55,.7,K.wood);for(let t=0;t<4;t++)e.box(0,2+t*.12,.36,.72,.035,.03,K.woodDark),e.box(.36,2+t*.12,0,.03,.035,.72,K.woodDark);e.box(0,2.4,0,.8,.1,.8,K.woodDark);for(let t of[-1,1])e.bar(new B(t*.6,2.4,.5),new B(t*.5,3,.3),.035,K.woodDark),e.bar(new B(t*.6,2.4,-.5),new B(t*.5,3,-.3),.035,K.woodDark);e.box(.1,2.2,.1,.25,.3,.25,K.skin),e.box(.1,2.45,.1,.25,.22,.25,K.shirt),e.box(.1,2.62,.1,.18,.16,.18,K.skin),e.box(.1,2.7,.1,.15,.05,.15,K.hair),e.box(.26,2.55,.1,.06,.22,.06,K.shirt),e.box(.3,2.68,.1,.08,.08,.08,K.skin),e.box(-.2,2,.3,.18,.24,.14,K.wood),this.group.add(e.mesh(J())),this.group.traverse(e=>{e instanceof W&&(e.castShadow=!1,e.receiveShadow=!1)})}update(e){this.phase+=e,this.group.rotation.z=Math.sin(this.phase*.4)*.05,this.group.position.y+=Math.sin(this.phase*.7)*e*.12}},ef=class{group=new H;flippers=[];phase=0;constructor(){let e=new q({voxel:.05,variation:.03});e.box(0,.3,0,1,.34,1.25,K.turtleShell),e.box(0,.48,0,.75,.14,.95,K.turtle),e.box(.1,.2,.7,.36,.28,.4,K.turtle),e.box(.1,.28,.9,.06,.06,.05,K.black),e.box(.26,.28,.9,.06,.06,.05,K.black),e.box(0,.18,-.7,.2,.14,.22,K.turtleDark),this.group.add(e.mesh(J()));for(let[e,t,n]of[[-.55,.45,-1],[.55,.45,1],[-.55,-.35,-1],[.55,-.35,1]]){let r=new H;r.position.set(e,.18,t);let i=new q({voxel:.05,variation:.03});i.box(n*.18,0,0,.42,.1,.3,K.turtle),r.add(i.mesh(J())),this.group.add(r),this.flippers.push(r)}this.group.traverse(e=>{e instanceof W&&(e.castShadow=!0,e.receiveShadow=!0)})}update(e){this.phase+=e*3,this.flippers.forEach((e,t)=>{e.rotation.x=Math.sin(this.phase+t*1.7)*.35}),this.group.position.y=Math.sin(this.phase*.5)*.01}},tf=class{group=new H;legs=[];claws=[];phase=0;constructor(){let e=new q({voxel:.05,variation:.03});e.box(0,.22,0,.5,.2,.34,K.crab),e.box(0,.33,.04,.28,.12,.24,K.crab),e.box(-.1,.4,.12,.05,.12,.05,K.crab),e.box(.1,.4,.12,.05,.12,.05,K.crab),e.box(-.1,.47,.12,.04,.04,.04,K.black),e.box(.1,.47,.12,.04,.04,.04,K.black),this.group.add(e.mesh(J()));for(let e of[-1,1]){let t=new H;t.position.set(e*.32,.24,.18);let n=new q({voxel:.05,variation:.03});n.box(e*.12,0,0,.22,.16,.2,K.crabDark),n.box(e*.24,.04,.02,.14,.1,.1,K.crab),t.add(n.mesh(J())),this.group.add(t),this.claws.push(t)}for(let e=0;e<3;e++)for(let t of[-1,1]){let n=new H;n.position.set(t*.24,.16,-.1+e*.14);let r=new q({voxel:.05,variation:.03});r.box(t*.18,-.06,0,.36,.05,.05,K.crabDark),n.add(r.mesh(J())),this.group.add(n),this.legs.push(n)}this.group.traverse(e=>{e instanceof W&&(e.castShadow=!0,e.receiveShadow=!0)})}update(e,t=!0){this.phase+=e*(t?10:2);for(let e=0;e<this.legs.length;e++)this.legs[e].rotation.z=Math.sin(this.phase+e*1.3)*(t?.5:.06);for(let e=0;e<this.claws.length;e++)this.claws[e].rotation.x=Math.sin(this.phase*.8+e)*.2;this.group.position.y=Math.abs(Math.sin(this.phase))*(t?.04:.01)}},nf=class{group=new H;lid;phase=0;open=!1;constructor(){let e=new q({voxel:.05,variation:.03});e.box(0,.26,0,.72,.42,.5,K.chest),e.box(0,.26,0,.76,.08,.54,K.chestMetal),e.box(-.24,.26,0,.08,.44,.52,K.chestMetal),e.box(.24,.26,0,.08,.44,.52,K.chestMetal),e.box(0,.09,.26,.14,.14,.05,K.chestMetal),this.group.add(e.mesh(J())),this.lid=new H,this.lid.position.set(0,.47,-.24);let t=new q({voxel:.05,variation:.03});t.box(0,.04,.24,.78,.12,.54,K.chest),t.box(0,.1,.24,.72,.06,.46,K.woodDark),t.box(0,.04,.48,.14,.14,.05,K.chestMetal),this.lid.add(t.mesh(J())),this.group.add(this.lid),this.group.traverse(e=>{e instanceof W&&(e.castShadow=!0,e.receiveShadow=!0)})}setOpen(e){this.open=e}update(e){this.phase+=e;let t=this.open?-1.5:0;this.lid.rotation.x+=(t-this.lid.rotation.x)*(1-Math.exp(-4*e)),this.open||(this.group.rotation.z=Math.sin(this.phase*.9)*.03)}},rf=class{group=new H;fin;log;phase=0;constructor(){let e=new q({voxel:.05,variation:.03});e.box(0,.4,0,.18,.9,.62,K.stoneDark),e.box(.15,.7,0,.12,.5,.4,K.stone),e.box(-.12,.55,.1,.1,.3,.25,K.stoneLight),this.fin=e.mesh(J()),this.group.add(this.fin);let t=new q({voxel:.05,variation:.03});t.box(0,.14,0,1.5,.22,.3,K.woodGrey),t.box(-.68,.22,.06,.3,.16,.22,K.woodDark),t.box(.68,.22,-.04,.3,.16,.22,K.woodDark),t.box(.1,.32,0,.3,.2,.12,K.woodDark),this.log=t.mesh(J()),this.log.visible=!1,this.group.add(this.log),this.group.traverse(e=>{e instanceof W&&(e.castShadow=!0,e.receiveShadow=!0)})}reveal(){this.fin.visible=!1,this.log.visible=!0}update(e){this.phase+=e,this.group.position.y=.1+Math.sin(this.phase*1.2)*.05,this.fin.visible&&(this.fin.rotation.z=Math.sin(this.phase*.9)*.08)}},af=class{group=new H;wingL=new H;wingR=new H;phase=Math.random()*6;constructor(){let e=new q({voxel:.05,variation:.03});e.box(0,0,0,.34,.28,.62,K.white),e.box(0,.1,.32,.22,.2,.2,K.white),e.box(0,.08,.48,.1,.08,.16,K.fireLight),e.box(0,.02,-.38,.22,.08,.22,K.woodGrey),e.box(0,-.16,.02,.12,.08,.1,K.fireLight),this.group.add(e.mesh(J(),!0,!0));let t=new q({voxel:.05,variation:.03});t.box(0,0,0,.5,.06,.24,K.white),t.box(.22,-.01,-.02,.3,.05,.2,K.smoke),this.wingL.add(t.mesh(J(),!0,!0)),this.wingL.position.set(-.18,.08,0);let n=new q({voxel:.05,variation:.03});n.box(0,0,0,.5,.06,.24,K.white),n.box(.22,-.01,-.02,.3,.05,.2,K.smoke),this.wingR.add(n.mesh(J(),!0,!0)),this.wingR.position.set(.18,.08,0),this.wingR.rotation.y=Math.PI,this.group.add(this.wingL,this.wingR),this.group.scale.setScalar(2),this.group.traverse(e=>{e instanceof W&&(e.castShadow=!0,e.receiveShadow=!0)})}update(e){this.phase+=e;let t=Math.sin(this.phase*9)*.5;this.wingL.rotation.z=t,this.wingR.rotation.z=-t,this.group.position.y+=Math.sin(this.phase*2.2)*.003,this.group.rotation.z=Math.sin(this.phase*1.7)*.08}},of=class{group=new H;phase=Math.random()*6;constructor(){let e=new q({voxel:.025,variation:.03});for(let t=0;t<5;t++)e.box(0,.08,-.6+t*.3,.9-t%2*.1,.16,.28,t%2?K.wood:K.woodDark);e.box(0,.2,0,.72,.1,1.45,K.woodGrey),e.box(0,.98,0,.06,1.55,.06,K.woodDark),e.box(.02,1.26,0,.9,.6,.04,K.sailDark),e.box(.02,1.44,0,.9,.04,.05,K.woodDark),e.box(0,1.78,0,.28,.15,.03,K.black);for(let t=0;t<3;t++){let n=-.24+t*.24,r=.3-t%2*.25;e.box(n,.38,r,.13,.26,.13,t%2?K.shirt:K.shortsDark),e.box(n,.56,r,.1,.1,.1,K.skin),e.box(n,.64,r,.16,.04,.16,K.black),e.box(n,.69,r,.09,.07,.09,K.black),e.box(n+.11,.43,r,.02,.3,.02,K.stoneLight)}e.box(0,.3,-.45,.2,.16,.2,K.wood),e.box(0,.3,.45,.16,.14,.16,K.chest),this.group.add(e.mesh(J(),!0,!0)),this.group.scale.setScalar(1.3),this.group.traverse(e=>{e instanceof W&&(e.castShadow=!0,e.receiveShadow=!0)})}update(e){this.phase+=e,this.group.position.y=.03+Math.sin(this.phase*1.6)*.04,this.group.rotation.z=Math.sin(this.phase*1.2)*.04,this.group.rotation.x=Math.sin(this.phase*1.1)*.02}},sf=class{island;rand;group=new H;actor=new tf;target=null;timer;speed=.24;constructor(e,t){this.island=e,this.rand=t,this.actor.group.scale.setScalar(.6),this.group.add(this.actor.group);let n=e.findBeachPoint(t)??{x:7.4,z:3,y:.5};this.group.position.set(n.x,e.heightAt(n.x,n.z),n.z),this.timer=t.float(1,3)}update(e,t){this.timer-=e;let n=this.group.position;if(Math.hypot(n.x-t.x,n.z-t.z)<1.6&&this.timer<=0){let e=n.x-t.x,r=n.z-t.z,i=Math.max(.01,Math.hypot(e,r));this.target={x:n.x+e/i*1.8,z:n.z+r/i*1.8},this.timer=2.5,this.speed=.5}if(!this.target&&this.timer<=0){for(let e=0;e<8;e++){let e=this.island.findBeachPoint(this.rand);if(!e)continue;let r=Math.hypot(e.x-n.x,e.z-n.z),i=Math.hypot(e.x-t.x,e.z-t.z);if(r>1.2&&r<6&&i>2){this.target={x:e.x,z:e.z},this.speed=.22;break}}this.timer=this.rand.float(1.2,3.5)}let r=!1;if(this.target){let t=this.target.x-n.x,i=this.target.z-n.z,a=Math.hypot(t,i);if(a<.14)this.target=null,this.timer=this.rand.float(1.5,4.5);else{let o=Math.min(a,this.speed*e),s=n.x+t/a*o,c=n.z+i/a*o;this.island.layerAt(s,c)===2&&this.island.isWalkable(s,c)?(n.x=s,n.z=c,n.y=this.island.heightAt(s,c),this.group.rotation.y=Math.atan2(t,i)+Math.PI/2,r=!0):(this.target=null,this.timer=.4)}}this.actor.update(e,r)}},cf=class{phase=`idle`;def=null;spot=null;beatIndex=0;beatElapsed=0;travelElapsed=0;onFinish=null;onFail=null;get beat(){return this.def?this.def.beats[this.beatIndex]??null:null}get totalBeats(){return this.def?.beats.length??0}start(e,t,n){return this.phase!==`idle`&&this.cancel(n),this.def=e,this.spot=t,this.beatIndex=0,this.beatElapsed=0,this.travelElapsed=0,n.onActionStart(e,t),t&&Math.hypot(t.x-n.castaway.position.x,t.z-n.castaway.position.z)>.28?n.castaway.goTo(t.x,t.z,e.run)?(this.phase=`travel`,!0):(this.fail(n,`nie ma przejścia`),!1):(this.beginAct(n),!0)}beginAct(e){this.def&&(this.phase=`act`,this.beatIndex=0,e.castaway.stop(),this.spot&&e.faceAction(this.def,this.spot),this.enterBeat(e))}enterBeat(e){if(!this.def)return;let t=this.def.beats[this.beatIndex];if(!t)return;let n=t.prop===void 0?this.def.prop??null:t.prop;e.castaway.setAction(t.anim,n),t.onStart?.(e),this.beatElapsed=0}update(e,t){if(this.phase===`idle`||!this.def||t.scripted)return;if(this.phase===`travel`){this.travelElapsed+=e,t.castaway.arrived?this.beginAct(t):t.castaway.hasPath?this.travelElapsed>45&&this.fail(t,`za długo idzie`):this.fail(t,`droga się urwała`);return}if(t.castaway.hasReaction)return;let n=this.def.beats[this.beatIndex];n?(this.beatElapsed+=e,this.beatElapsed>=n.duration&&(n.onEnd?.(t),this.beatIndex++,this.beatIndex>=this.def.beats.length?this.resolve(t):this.enterBeat(t))):this.resolve(t)}resolve(e){if(!this.def)return;let t=this.def,n=e.pickOutcome(t);this.phase=`idle`,this.def=null,this.spot=null,this.beatIndex=0,this.beatElapsed=0,e.castaway.finishWade(),e.castaway.setAction(`idle`),e.completeAction(t,n),this.onFinish?.(t,n)}cancel(e,t=!0){let n=this.def;this.phase=`idle`,this.def=null,this.spot=null,this.beatIndex=0,this.beatElapsed=0,e.castaway.stop(),e.castaway.finishWade(),e.castaway.setAction(`idle`),n&&t&&e.onActionCancelled(n)}fail(e,t){let n=this.def;this.phase=`idle`,this.def=null,this.spot=null,e.castaway.stop(),n&&(e.onActionCancelled(n),this.onFail?.(n,t))}},lf={hunger:e=>e.hunger/100,energy:e=>(100-e.energy)/100,boredom:e=>e.boredom/100,mood:e=>(100-e.mood)/100,hope:e=>(100-e.hope)/100,curiosity:e=>e.curiosity/100};function uf(e,t){return Math.min(1,Math.max(0,lf[t](e)))}function df(e,t,n,r,i,a,o){if((n.get(e.id)??0)>0||e.requires&&!e.requires(t))return null;let s=t.needs,c=t.clock.info,l=t.weather.state,u=e.baseWeight;if(e.drives)for(let[t,n]of Object.entries(e.drives))u*=1+uf(s,t)*n*.95;e.time?u*=e.time[c.phase]??1:c.night&&(u*=.8),e.weather&&(u*=e.weather[l.kind]??1);let d=e.tags??[];if(l.kind===`storm`?u*=d.includes(`indoor`)?1.5:d.includes(`shelter`)?1.9:.45:l.kind===`rain`?u*=d.includes(`indoor`)||d.includes(`shelter`)?1.3:.72:l.kind===`fog`&&(u*=d.includes(`explore`)?.55:.9),e.energyCost){let t=s.energy/Math.max(1,e.energyCost);t<.8&&(u*=Math.max(.1,t))}let f=r.lastIndexOf(e.id);if(f>=0){let e=r.length-f;e<=2?u*=.16:e<=4?u*=.4:e<=7?u*=.68:e<=11&&(u*=.86)}i.includes(e.id)&&(u*=7.5);let p=a.get(e.id);return p&&(u*=p),e.utility&&(u=e.utility(t,u)),!Number.isFinite(u)||u<=0?null:(u*=.82+o.next()*.36,u)}function ff(e,t,n,r,i,a,o){let s=[];for(let c of t){let t=df(c,e,n,r,i,a,o);t!==null&&s.push({def:c,score:t,base:c.baseWeight})}return s.sort((e,t)=>t.score-e.score),s}function pf(e,t){if(e.length===0)return null;if(e.length===1)return e[0];let n=e.slice(0,Math.min(5,e.length));if(t.chance(.12))return n[1+t.int(0,n.length-2)];let r=n.map(e=>[e,e.score**1.45]);return t.weighted(r)}var mf=[`beach_west`,`beach_south`,`beach_east`,`beach_north`,`bottle_shore`,`horizon_watch`,`shore_north`,`shore_south`],hf=[`grass_center`,`grass_north`,`grass_east`,`grass_west`,`hill`,`palm_shade`],gf=[`fishing`,`beach_west`,`shore_south`,`bottle_shore`,`beach_east`],_f=[`bush1`,`bush2`,`bush3`,`bush4`],vf=class{actions;byId=new Map;runner=new cf;lastScores=[];lastChoice=null;lastChoiceScore=0;lastFailReason=``;restTimer=.8;deciding=!1;time=0;cooldowns=new Map;history=[];intents=[];bias=new Map;biasUntil=new Map;decisionCooldown=0;rng=null;constructor(e){this.actions=e;for(let t of e)this.byId.set(t.id,t);this.runner.onFinish=(e,t)=>this.handleFinish(e,t),this.runner.onFail=(e,t)=>this.handleFail(e,t)}update(e,t){this.rng??=t.rng,this.time+=e;for(let[t,n]of this.cooldowns)n>0&&this.cooldowns.set(t,Math.max(0,n-e));this.intents=this.intents.filter(e=>e.expires>this.time);for(let[e,t]of this.biasUntil)t<=this.time&&(this.bias.delete(e),this.biasUntil.delete(e));t.scripted||(this.runner.phase===`idle`?t.castaway.hasReaction||(this.restTimer>0?this.restTimer-=e:this.decisionCooldown>0?this.decisionCooldown-=e:this.decide(t)):this.runner.update(e,t))}decide(e){this.deciding=!0,this.decisionCooldown=.4;let t=new Map(this.bias),n=e.needs;if(n.energy<16&&t.set(`sleep`,Math.max(t.get(`sleep`)??1,2.4)),n.hunger>80)for(let e of[`eat_coconut`,`eat_fish`,`eat_berries`,`gather_coconuts`,`fish`])t.set(e,Math.max(t.get(e)??1,1.7));if(e.clock.isNight&&e.flag(`fire`)<1&&e.inventory.wood>0&&t.set(`light_fire`,Math.max(t.get(`light_fire`)??1,2.2)),e.weather.state.kind===`storm`&&(t.set(`sleep`,Math.max(t.get(`sleep`)??1,1.4)),t.set(`build_shelter`,Math.max(t.get(`build_shelter`)??1,1.5))),this.intents.length>0&&e.rng.chance(.78)){let t=[...this.intents].sort((e,t)=>e.expires-t.expires);for(let n of t){let t=this.byId.get(n.id);if(!t||(this.cooldowns.get(t.id)??0)>0||t.requires&&!t.requires(e))continue;let r=this.resolveLocation(t,e);if(r!==void 0&&this.runner.start(t,r,e)){this.intents=this.intents.filter(e=>e!==n),this.lastChoice=t,this.lastChoiceScore=999,this.restTimer=0,this.deciding=!1;return}}}let r=ff(e,this.actions,this.cooldowns,this.history,this.intents.map(e=>e.id),t,e.rng);this.lastScores=r;let i=pf(r,e.rng);if(!i){this.restTimer=1.5,this.deciding=!1;return}let a=this.resolveLocation(i.def,e);a===void 0?(this.cooldowns.set(i.def.id,16),this.restTimer=1.2,this.deciding=!1):this.runner.start(i.def,a,e)?(this.lastChoice=i.def,this.lastChoiceScore=i.score,this.lastFailReason=``,this.restTimer=0,this.deciding=!1):(this.cooldowns.set(i.def.id,18),this.restTimer=1.4,this.deciding=!1)}resolveLocation(e,t){if(!e.location)return null;let n;if(n=typeof e.location==`function`?e.location(t):e.location,n!==null){if(Array.isArray(n)){let e=n.map(e=>t.island.getSpot(e)).filter(e=>!!e);return e.length===0?void 0:t.rng.pick(e)}if(n===`any`){let e=t.island.randomWalkablePoint(t.rng,t.castaway.position,10);return e?{key:`any`,label:`na wyspie`,x:e.x,z:e.z,y:e.y}:void 0}if(n===`beach`)return this.pickFrom(mf,t);if(n===`grass`)return this.pickFrom(hf,t);if(n===`shore`)return this.pickFrom(gf,t);if(n===`bush`){let e=_f.filter((e,n)=>t.berryStock(n)>0),n=e.length>0?e:_f;return this.pickFrom(n,t)}return t.island.getSpot(n)??void 0}}pickFrom(e,t){let n=e.map(e=>t.island.getSpot(e)).filter(e=>!!e);if(n.length!==0)return t.rng.pick(n)}handleFinish(e,t){this.history.push(e.id),this.history.length>18&&this.history.shift();let n=this.rng??void 0;if(this.cooldowns.set(e.id,e.cooldown*(n?.85+n.next()*.3:1)),this.restTimer=n?.9+n.next()*2:1.4,t.intents)for(let e of t.intents)this.addIntent(e);this.lastChoice=e}handleFail(e,t){this.lastFailReason=`${e.id}: ${t}`,this.history.push(e.id),this.history.length>18&&this.history.shift(),this.cooldowns.set(e.id,20),this.restTimer=1.2}addIntent(e,t=180){this.intents.some(t=>t.id===e)||this.intents.push({id:e,expires:this.time+t})}nudge(e,t,n=240){this.bias.set(e,t),this.biasUntil.set(e,this.time+n)}clearBias(){this.bias.clear(),this.biasUntil.clear()}force(e,t){let n=this.byId.get(e);if(!n)return!1;this.interrupt(t);let r=this.resolveLocation(n,t);if(r===void 0)return!1;let i=this.runner.start(n,r,t);return i&&(this.lastChoice=n,this.restTimer=0,this.cooldowns.set(e,0)),i}interrupt(e){this.runner.cancel(e,!1),this.restTimer=.4}getCooldown(e){return this.cooldowns.get(e)??0}get historyList(){return this.history}get intentList(){return this.intents.map(e=>e.id)}get busy(){return this.runner.phase!==`idle`}get debugBias(){return this.bias}snapshot(){return{cooldowns:Object.fromEntries(this.cooldowns),history:[...this.history],intents:this.intentList.slice()}}restore(e){this.cooldowns.clear();for(let[t,n]of Object.entries(e.cooldowns??{}))n>0&&this.cooldowns.set(t,n);this.history=[...e.history??[]];for(let t of e.intents??[])this.addIntent(t)}reset(e){this.interrupt(e),this.cooldowns.clear(),this.history=[],this.intents=[],this.bias.clear(),this.biasUntil.clear(),this.restTimer=1.2,this.lastScores=[],this.lastChoice=null,this.lastFailReason=``}},yf=[{index:1,days:`dni 1–2`,title:`Rozpoznanie`,summary:`Budzi się na piasku. Uczy się, gdzie rosną kokosy, gdzie żerują ryby i którędy przechodzi krab.`},{index:2,days:`dni 3–5`,title:`Pierwsze konstrukcje`,summary:`Zadaszenie, ognisko i pierwsze deski tratwy. Wyspa przestaje być tylko miejscem, w którym się jest.`},{index:3,days:`dni 6–10`,title:`Sygnały`,summary:`Napis SOS, słup dymu, list w butelce. Rozbitek zaczyna mówić do horyzontu.`},{index:4,days:`dni 11–15`,title:`Próba ucieczki`,summary:`Tratwa jest gotowa. Morze ma jednak własne zdanie na temat jej dzielności.`},{index:5,days:`dzień 16 i później`,title:`Życie na wyspie`,summary:`Wyspa staje się domem. Codzienność wraca, a wieczorami zdarzają się rzeczy, których nie da się wyjaśnić.`}],bf=class{chapter=1;lastDay=0;attemptTimer=40;prologueShown=!1;onNewDay(e,t){if(e===this.lastDay)return;this.lastDay=e,this.chapter=this.chapterFor(e);let n=yf[this.chapter-1],r={2:`Dzień 2. Piasek w koszuli, słońce w oczy, ale jakoś się żyje. Zaczyna myśleć o zadaszeniu.`,3:`Dzień 3. Po raz pierwszy patrzy na horyzont inaczej. Gdzieś tam jest tratwa.`,4:`Dzień 4. Układa pierwsze litery SOS. Wyspa nagle wydaje się mniejsza.`,5:`Dzień 5. Dym, butelki, deski. Rozbitek zaczyna mówić do morza.`,6:`Dzień 6. Coś przepłynęło nocą po horyzoncie. Nie był pewien, czy to statek.`,8:`Dzień 8. Tratwa rośnie. Coraz częściej staje i patrzy w wodę.`,10:`Dzień 10. Pakuje zapasy. Jeszcze nie dziś. Ale niedługo.`,11:`Dzień 11. Morze wygląda dziś inaczej. Spokojniej. Zapraszająco.`,12:`Dzień 12. Wyspa zdążyła już polubić jego poranne krzątanie.`,16:`Dzień 16. Wyspa przestała być wyspą. Jest domem.`};switch(r[e]&&t.log(r[e],`story`),e===3&&t.log(`Rozdział ${n.index}: ${n.title}.`,`story`),e===11&&t.log(`Rozdział ${n.index}: ${n.title}.`,`story`),e===16&&t.log(`Rozdział ${n.index}: ${n.title}.`,`story`),e){case 2:t.director.nudge(`gather_wood`,1.5,300),t.director.nudge(`build_shelter`,1.6,300);break;case 3:t.director.nudge(`build_raft`,1.7,400),t.director.nudge(`make_rope`,1.4,300),t.director.nudge(`gather_wood`,1.4,300);break;case 4:t.director.nudge(`build_raft`,1.5,400),t.director.nudge(`build_sos`,1.7,400);break;case 6:t.director.nudge(`look_horizon`,1.5,400),t.director.nudge(`smoke_signal`,1.5,400),t.director.nudge(`bottle_letter`,1.4,400);break;case 8:t.director.nudge(`build_raft`,1.6,400),t.director.nudge(`repair_raft`,1.4,300);break;case 10:t.director.nudge(`pack_supplies`,1.7,500),t.director.nudge(`launch_raft`,1.5,500);break;case 11:this.attemptTimer=35;break;case 16:t.director.nudge(`dance`,1.4,400),t.director.nudge(`build_sandcastle`,1.4,400),t.director.nudge(`cloudwatch`,1.3,300),t.director.nudge(`bottle_letter`,1.3,400)}e>=3&&t.flag(`raft`)<6&&t.director.nudge(`build_raft`,1.3,500),e>=4&&t.flag(`sos`)<2&&t.director.nudge(`build_sos`,1.2,500),e>=6&&t.director.nudge(`look_horizon`,1.15,500)}update(e,t){this.prologueShown||(this.prologueShown=!0,this.chapter=this.chapterFor(t.clock.day)),this.chapter=this.chapterFor(t.clock.day),t.clock.day>=11&&t.flag(`raft`)>=6&&t.flag(`packed`)>=1&&t.flag(`escapeAttempts`)===0&&!t.rare.busy&&!t.scripted&&(this.attemptTimer-=e,this.attemptTimer<=0&&(this.attemptTimer=240,t.rare.startRaftAttempt(t)))}chapterFor(e){return e<=2?1:e<=5?2:e<=10?3:e<=15?4:5}getJournal(e){let t=this.chapterFor(e);return yf.map(e=>({...e,unlocked:e.index<=t}))}get currentChapter(){return{...yf[this.chapter-1],unlocked:!0}}};function X(e,t,n={}){return{anim:e,duration:t,...n}}function Z(e,t,n={}){return{weight:e,text:t,...n}}function Q(e){return e}var xf={rod:`rod`,coconut:`coconut`,fish:`fish`,spear:`spear`,log:`log`,hammer:`hammer`,stick:`stick`,bottle:`bottle`,shell:`shell`,paddle:`paddle`,plank:`plank`,letter:`letter`,stone:`stone`,berries:`berries`},Sf=[Q({id:`wander`,label:`przechadza się`,category:`life`,baseWeight:.62,cooldown:30,location:`any`,drives:{boredom:.75,curiosity:.3},beats:[X(`idle`,1.8),X(`lookHorizon`,2.4)],outcomes:[Z(36,`Przystaje i patrzy na morze. Chyba liczy fale.`,{effects:{mood:3,boredom:-1}}),Z(22,`Rozdeptuje muszlę. Chrupnięcie słychać na całej wyspie.`,{effects:{mood:-2,curiosity:3}}),Z(22,`Zapomina, dokąd szedł. Zawraca z wielką powagą.`,{effects:{mood:1,boredom:-4}}),Z(12,`Zauważa w piasku wzór, którego wcześniej nie było.`,{effects:{curiosity:9}}),Z(8,`Kica przez trzy kroki, bo tak mu się zachciało.`,{effects:{mood:4,boredom:-6}})]}),Q({id:`sit_beach`,label:`siedzi na plaży`,category:`life`,baseWeight:.7,cooldown:55,location:`beach`,drives:{boredom:.85,mood:.45},time:{day:1.25,dawn:1.1,dusk:1.2,night:.5},beats:[X(`sit`,13)],outcomes:[Z(40,`Siedzi i wpatruje się w horyzont. Wiatr rozwiewa mu włosy.`,{effects:{mood:6,boredom:-12,hope:2}}),Z(25,`Krab przechodzi mu tuż przed stopami. Udaje, że tego nie widzi.`,{effects:{mood:3,curiosity:6,boredom:-8}}),Z(20,`Rysuje palcem kółko w piasku. Potem drugie. Potem całą mapę.`,{effects:{mood:4,curiosity:5,boredom:-10}}),Z(15,`Piasek wsypuje mu się do sandałów, których przecież nie ma.`,{effects:{mood:-2,boredom:-4}})]}),Q({id:`sit_grass`,label:`siedzi na trawie`,category:`life`,baseWeight:.55,cooldown:60,location:`grass`,drives:{boredom:.7,mood:.35},time:{day:1.2,dusk:1.3,night:.5},beats:[X(`sit`,12)],outcomes:[Z(45,`Słucha wyspy: wiatr, owady, leniwe fale.`,{effects:{mood:5,boredom:-11,curiosity:3}}),Z(30,`Zrywa źdźbło trawy i obgryza je z namysłem.`,{effects:{mood:2,boredom:-9}}),Z(25,`Mrówka wchodzi mu na rękę. Obserwuje ją z ogromnym skupieniem.`,{effects:{curiosity:7,mood:3,boredom:-8}})]}),Q({id:`sleep`,label:`śpi`,category:`life`,baseWeight:.42,cooldown:45,location:e=>e.flag(`shelter`)>=2?`shelter`:`palm_shade`,drives:{energy:1,mood:.2},time:{night:3.4,dusk:1.7,dawn:1.3,day:.12},energyCost:0,tags:[`shelter`],requires:e=>e.needs.energy<88,beats:[X(`sleep`,14)],outcomes:[Z(55,`Śpi. Oddycha spokojnie, a wyspa pilnuje go w ciemności.`,{effects:{energy:60,hunger:9,mood:4}}),Z(25,`Śpi twardo. Przez sen mamrocze coś o kokosach.`,{effects:{energy:55,hunger:8,mood:6,curiosity:2}}),Z(12,`Przewraca się na drugi bok i zsuwa z posłania. Nie budzi się.`,{effects:{energy:48,hunger:8,mood:-1}}),Z(8,`Śni mu się statek. Uśmiecha się przez sen.`,{effects:{energy:52,hunger:8,hope:6}})]}),Q({id:`nap`,label:`drzemie na plaży`,category:`life`,baseWeight:.4,cooldown:70,location:`beach`,drives:{energy:.8,boredom:.2},time:{day:1.2,dawn:.8,dusk:.8,night:.4},requires:e=>e.needs.energy<72,beats:[X(`nap`,10)],outcomes:[Z(55,`Drzemie w słońcu. Piasek przykleja mu się do policzka.`,{effects:{energy:22,mood:3}}),Z(30,`Budzi się z odciskiem muszli na czole. Nie zauważa.`,{effects:{energy:20,mood:4,curiosity:3}}),Z(15,`Krab przemyka obok jego głowy. Rozbitek śni o wielkim obiedzie.`,{effects:{energy:22,hunger:4,mood:2}})]}),Q({id:`stargaze`,label:`patrzy w gwiazdy`,category:`life`,baseWeight:.45,cooldown:80,location:`beach`,drives:{curiosity:.9,hope:.45,boredom:.5},time:{night:5,dusk:1.4,day:.05},weather:{clear:1.7,cloudy:.4,rain:.05,storm:.05,fog:.2},beats:[X(`stargaze`,14)],outcomes:[Z(40,`Leży i patrzy w gwiazdy. Wyspa wydaje się wtedy mniejsza.`,{effects:{mood:9,hope:6,boredom:-14,curiosity:4}}),Z(25,`Widzi spadającą gwiazdę. Składa życzenie, ale nie mówi jakie.`,{effects:{hope:11,mood:7}}),Z(20,`Coś jasnego przemyka po niebie. Satelita? Na pewno satelita.`,{effects:{curiosity:13,hope:4}}),Z(15,`Komar bzyczy mu nad uchem. Cała magia pryska.`,{effects:{mood:-4,boredom:-3}})]}),Q({id:`cloudwatch`,label:`obserwuje chmury`,category:`life`,baseWeight:.58,cooldown:65,location:`grass`,drives:{boredom:.85,curiosity:.45},time:{day:1.7,dawn:1.2,dusk:1.1,night:.15},weather:{clear:1.2,cloudy:1.8},beats:[X(`cloudWatch`,13)],outcomes:[Z(30,`W chmurze widzi żaglowiec. W następnej — wielką rybę.`,{effects:{mood:6,boredom:-12,hope:5,curiosity:3}}),Z(25,`Chmura wygląda dokładnie jak jego własna twarz. Nie jest zadowolony.`,{effects:{mood:2,boredom:-10,curiosity:4}}),Z(25,`Zamyka oczy i nasłuchuje. Wyspa oddycha razem z nim.`,{effects:{mood:7,boredom:-11,energy:4}}),Z(20,`Mewa przelatuje nisko. Rozbitek instynktownie zasłania twarz.`,{effects:{mood:-2,curiosity:8,boredom:-8}})]}),Q({id:`sunset_watch`,label:`patrzy na zachód słońca`,category:`life`,baseWeight:.4,cooldown:100,location:[`horizon_watch`,`beach_west`],drives:{mood:.7,hope:.65,boredom:.4},time:{dusk:6,day:.15,night:.2},weather:{clear:1.6,cloudy:.7,rain:.15,storm:.1,fog:.3},beats:[X(`sunsetWatch`,13)],outcomes:[Z(45,`Słońce topi się w oceanie. Przez chwilę wszystko wydaje się możliwe.`,{effects:{mood:9,hope:8,boredom:-12}}),Z(25,`Rysuje palcem słońce na piasku, żeby zostało trochę dłużej.`,{effects:{mood:6,hope:4,curiosity:5}}),Z(20,`Westchnienie ucieka mu gdzieś w stronę horyzontu.`,{effects:{mood:2,hope:-2,boredom:-8}}),Z(10,`Komary urządzają sobie przyjęcie wokół jego głowy.`,{effects:{mood:-4,energy:-2}})]}),Q({id:`warm_hands`,label:`grzeje ręce przy ogniu`,category:`life`,baseWeight:.5,cooldown:40,location:`fire`,drives:{mood:.55,energy:.2},time:{night:2.8,dusk:1.8,dawn:.7,day:.45},weather:{rain:1.3,storm:1.1,fog:1.2},tags:[`shelter`],requires:e=>e.flag(`fire`)>=1,beats:[X(`warmHands`,8)],outcomes:[Z(50,`Wyciąga dłonie nad ogniem. Twarz ma pomarańczową od blasku.`,{effects:{mood:6,energy:3,boredom:-9,hope:2}}),Z(30,`Wpatruje się w ogień tak długo, że widzi w nim obrazy.`,{effects:{mood:4,hope:4,curiosity:6,boredom:-11}}),Z(20,`Iskra pryska mu na rękę. Odskakuje i dmucha w dłoń.`,{effects:{mood:-3,energy:-1,boredom:-6}})]}),Q({id:`pace`,label:`chodzi i myśli`,category:`life`,baseWeight:.35,cooldown:50,location:`any`,drives:{boredom:.5,curiosity:.6},beats:[X(`think`,6),X(`idle`,2)],outcomes:[Z(40,`Chodzi w kółko, mrucząc pod nosem plan. Plan ma dziurę w środku.`,{effects:{boredom:-8,curiosity:4}}),Z(30,`Wpada na pomysł. Zaraz go zapomina. Wpada na niego drugi raz.`,{effects:{mood:3,curiosity:6},intents:[`build_raft`]}),Z(30,`Przystaje i kiwa głową do własnych myśli.`,{effects:{mood:2,boredom:-6,hope:2}})]}),Q({id:`tidy_shelter`,label:`porządkuje zadaszenie`,category:`life`,baseWeight:.32,cooldown:90,location:`shelter`,drives:{boredom:.55,mood:.25},time:{day:1.2,dusk:1,night:.4},tags:[`shelter`],requires:e=>e.flag(`shelter`)>=1,beats:[X(`repair`,7)],outcomes:[Z(45,`Układa liście równo, potem i tak je rozrzuca. Ależ porządek.`,{effects:{mood:4,boredom:-10}}),Z(25,`Znajduje kawałek liny, o którym zapomniał.`,{effects:{mood:3,curiosity:5},items:{rope:1}}),Z(30,`Zamiata piasek piaskiem. Wyspa nie komentuje.`,{effects:{mood:1,boredom:-7}})]}),Q({id:`wash_face`,label:`przemywa twarz w morzu`,category:`life`,baseWeight:.32,cooldown:90,location:`shore`,drives:{mood:.4,boredom:.3},time:{day:1.4,dawn:1.1,dusk:.8,night:.15},beats:[X(`washFace`,5)],outcomes:[Z(55,`Woda jest zimna i słona. Nagle czuje się całkiem przytomny.`,{effects:{energy:6,mood:4,boredom:-8}}),Z(25,`Chlapie sobie wodę za kołnierz. Parska jak foka.`,{effects:{mood:2,energy:2,boredom:-6}}),Z(20,`W wodzie mija go srebrna ryba. Patrzą na siebie przez chwilę.`,{effects:{curiosity:8,mood:4}})]}),Q({id:`swim`,label:`pływa`,category:`life`,baseWeight:.42,cooldown:70,location:`shore`,drives:{boredom:.9,mood:.5},time:{day:1.4,dawn:.8,dusk:1,night:.2},weather:{clear:1.2,cloudy:1,rain:.4,storm:.05},energyCost:22,requires:e=>e.needs.energy>22,beats:[X(`swim`,6,{onStart:e=>e.castaway.wadeOut(1.7)}),X(`swim`,3,{onStart:e=>e.castaway.wadeBack()})],outcomes:[Z(40,`Płynie równolegle do brzegu. Ręce i nogi pracują w rytmie fal.`,{effects:{mood:8,boredom:-16,energy:-8}}),Z(25,`Zanurza głowę i wynurza się z głośnym westchnieniem.`,{effects:{mood:6,energy:-6,boredom:-14}}),Z(20,`Coś muska go w kostkę. Wychodzi z wody dwa razy szybciej.`,{effects:{mood:-2,curiosity:9,energy:-5,boredom:-10}}),Z(15,`Połyka wodę. Kaszel słychać chyba na drugim końcu oceanu.`,{effects:{mood:-4,energy:-4,boredom:-8}})]}),Q({id:`float`,label:`leży na plecach w wodzie`,category:`life`,baseWeight:.3,cooldown:100,location:`shore`,drives:{mood:.7,boredom:.6},time:{day:1.5,dusk:1.1,night:.2},weather:{clear:1.4,cloudy:.8,rain:.2,storm:.02},energyCost:15,requires:e=>e.needs.energy>18,beats:[X(`float`,5,{onStart:e=>e.castaway.wadeOut(1.5)}),X(`float`,2.5,{onStart:e=>e.castaway.wadeBack()})],outcomes:[Z(45,`Unosi się na wodzie. Chmury przesuwają się nad nim bardzo powoli.`,{effects:{mood:7,boredom:-13,energy:-3,curiosity:3}}),Z(30,`Fala przelewa mu się przez twarz. Nie rusza się. Ma plan.`,{effects:{mood:4,boredom:-10,energy:-2}}),Z(25,`Mewa krąży nisko. Rozbitek udaje, że jest częścią oceanu.`,{effects:{mood:5,curiosity:6,boredom:-11}})]}),Q({id:`sunbathe`,label:`wygrzewa się na słońcu`,category:`life`,baseWeight:.33,cooldown:95,location:`beach`,drives:{mood:.5,energy:.35,boredom:.4},time:{day:1.8,dawn:1.1,dusk:.4,night:.02},weather:{clear:2.2,cloudy:.5,rain:.02,storm:.02,fog:.2},beats:[X(`sit`,10)],outcomes:[Z(45,`Wystawia twarz do słońca. Przez chwilę nie ma żadnych zmartwień.`,{effects:{mood:6,energy:5,boredom:-10}}),Z(25,`Zasypia na chwilę i budzi się z piekącym nosem.`,{effects:{mood:-3,energy:7,boredom:-6}}),Z(30,`Przewraca się na drugi bok, żeby opalić się równo.`,{effects:{mood:4,energy:3,boredom:-8}})]}),Q({id:`stretch`,label:`rozciąga się`,category:`life`,baseWeight:.2,cooldown:120,drives:{energy:.25,boredom:.2},beats:[X(`stretch`,3.4)],outcomes:[Z(55,`Przeciąga się tak, że słychać strzyknięcie w plecach.`,{effects:{energy:4,mood:2,boredom:-5}}),Z(30,`Wyciąga ręce ku niebu, jakby chciał je dotknąć.`,{effects:{energy:3,mood:4,hope:2,boredom:-6}}),Z(15,`Krew odpływa mu z ręki. Macha nią energicznie.`,{effects:{energy:2,mood:1,boredom:-4}})]}),Q({id:`yawn`,label:`ziewa`,category:`life`,baseWeight:.12,cooldown:160,drives:{energy:.15,boredom:.1},beats:[X(`yawn`,2.6)],outcomes:[Z(50,`Ziewa tak szeroko, że sam się temu dziwi.`,{effects:{energy:1,mood:2,curiosity:2}}),Z(30,`Ziewa, a potem ziewa jeszcze raz, bo pierwsze nie wyszło.`,{effects:{energy:2,mood:1,boredom:-2}}),Z(20,`Połyka muchę. Kaszel, łzy, godność w strzępach.`,{effects:{mood:-3,energy:1,curiosity:4}})]})],Cf=[Q({id:`fish`,label:`łowi ryby`,category:`food`,baseWeight:.62,cooldown:38,location:`fishing`,drives:{hunger:.95,boredom:.25,hope:.2},time:{dawn:1.35,day:1.5,dusk:1.15,night:.25},weather:{clear:1.1,cloudy:1.15,rain:1.05,storm:.15,fog:.8},energyCost:18,requires:e=>e.needs.energy>12,prop:xf.rod,beats:[X(`fishCast`,2.4),X(`fishWait`,4.4),X(`fishReel`,2.6)],outcomes:[Z(44,`Wyciąga srebrną rybę. Ryba wygląda na bardziej zaskoczoną niż on.`,{kind:`good`,items:{fish:1},effects:{mood:8,curiosity:3,boredom:-6,hope:3},intents:[`cook_fish`,`eat_fish`],onApply:e=>{e.keeper.fishCaught++,e.splash(18)}}),Z(17,`Wyciąga stary but. But jest za mały, ale przynajmniej coś złowił.`,{kind:`weird`,effects:{mood:-2,curiosity:7}}),Z(12,`Na końcu żyłki wisi ośmiornica. Ośmiornica trzyma się jego ręki.`,{kind:`weird`,effects:{mood:-3,energy:-4,curiosity:10},onApply:e=>e.splash(26)}),Z(19,`Żyłka pęka. Rozbitek traci równowagę i wpada po pas do wody.`,{kind:`bad`,effects:{mood:-8,energy:-4,boredom:-4},onApply:e=>e.splash(34)}),Z(8,`Wyciąga wodorosty oplecione wokół czegoś, co wygląda jak zegarek.`,{kind:`weird`,effects:{curiosity:11,mood:2,hope:2}})]}),Q({id:`spearfish`,label:`poluje z włócznią`,category:`food`,baseWeight:.34,cooldown:55,location:`shore`,drives:{hunger:.8,hope:.25,boredom:.2},time:{dawn:1.2,day:1.4,dusk:1,night:.2},energyCost:20,requires:e=>e.needs.energy>16,prop:xf.spear,beats:[X(`spear`,5.5)],outcomes:[Z(38,`Wbija włócznię w wodę i wyciąga rybę. Bez mrugnięcia okiem.`,{kind:`good`,items:{fish:1},effects:{mood:7,curiosity:4},intents:[`cook_fish`,`eat_fish`],onApply:e=>{e.keeper.fishCaught++,e.splash(20)}}),Z(22,`Włócznia wbija się w piasek. Ryba odpływa z godnością.`,{effects:{mood:-3,boredom:-2}}),Z(25,`Trafia w coś twardego. Włócznia drga, woda się burzy.`,{effects:{mood:2,curiosity:8,energy:-3},onApply:e=>e.splash(28)}),Z(15,`Zamach jest tak mocny, że ląduje w wodzie razem z włócznią.`,{kind:`bad`,effects:{mood:-7,energy:-6},onApply:e=>e.splash(40)})]}),Q({id:`gather_coconuts`,label:`zbiera kokosy`,category:`food`,baseWeight:.55,cooldown:45,location:`palm`,drives:{hunger:.75,boredom:.2,curiosity:.15},time:{dawn:1.1,day:1.3,dusk:1,night:.2},requires:e=>e.coconutStock()>0,beats:[X(`shakeTree`,3.4),X(`inspect`,1.6)],outcomes:[Z(42,`Trzęsie palmą. Jeden kokos spada, odbija się i ląduje w jego rękach.`,{kind:`good`,items:{coconuts:1},effects:{mood:5,hunger:-4,boredom:-5},onApply:e=>e.takeCoconuts(1)}),Z(26,`Trzęsie mocniej. Dwa kokosy spadają — jeden trafia go w ramię.`,{items:{coconuts:2},effects:{mood:-2,energy:-3,hunger:-4},onApply:e=>e.takeCoconuts(2)}),Z(20,`Kokos spada mu wprost na głowę. Wyspa ma poczucie humoru.`,{kind:`bad`,items:{coconuts:1},effects:{mood:-6,energy:-4,curiosity:2},onApply:e=>{e.takeCoconuts(1),e.dust(16)}}),Z(12,`Trzęsie palmą, ale kokosy trzymają się zawzięcie. Palmie też jest głupio.`,{effects:{mood:-1,boredom:-2}})]}),Q({id:`crack_coconut`,label:`rozbija kokos`,category:`food`,baseWeight:.42,cooldown:30,location:e=>e.flag(`fire`)>=1?`fire_side`:`palm_shade`,drives:{hunger:.7,boredom:.2},requires:e=>e.itemCount(`coconuts`)>0,beats:[X(`crackCoconut`,4.2)],outcomes:[Z(50,`Uderza kokosem o kamień. Pęka równo, miąższ pachnie słońcem.`,{effects:{mood:5,curiosity:3},flagAdd:{openedCoconut:1},intents:[`eat_coconut`],onApply:e=>{e.addItem(`coconuts`,-1),e.keeper.coconutsEaten++}}),Z(28,`Kokos wyślizguje się i turla po piasku. Rozbitek goni go bez godności.`,{effects:{mood:-2,boredom:-4},onApply:e=>e.addItem(`coconuts`,-1)}),Z(14,`Uderza z całej siły i trafia się w palec. Kokos jest nietknięty.`,{kind:`bad`,effects:{mood:-5,energy:-2}}),Z(8,`Kokos pęka z hukiem, a w środku jest tylko mleko i rozczarowanie.`,{effects:{mood:-1,hunger:-6},onApply:e=>e.addItem(`coconuts`,-1)})]}),Q({id:`eat_coconut`,label:`je kokos`,category:`food`,baseWeight:.35,cooldown:25,location:`palm_shade`,drives:{hunger:.9,mood:.2},requires:e=>e.itemCount(`coconuts`)>0||e.flag(`openedCoconut`)>0,beats:[X(`eat`,3.6),X(`drink`,1.6)],outcomes:[Z(55,`Je kokosa. Miąższ jest słodki, a mleko spływa mu po brodzie.`,{kind:`good`,effects:{hunger:-30,mood:6,energy:4},onApply:e=>{e.flag(`openedCoconut`)>0?e.addFlag(`openedCoconut`,-1):e.addItem(`coconuts`,-1)}}),Z(25,`Kokos jest starszy, niż wyglądał. Rozbitek je z zamkniętymi oczami.`,{effects:{hunger:-18,mood:-2,energy:2},onApply:e=>e.addItem(`coconuts`,-1)}),Z(20,`Wypija mleko jednym haustem i przez chwilę patrzy w niebo.`,{effects:{hunger:-12,mood:5,energy:6,hope:2},onApply:e=>{e.flag(`openedCoconut`)>0?e.addFlag(`openedCoconut`,-1):e.addItem(`coconuts`,-1)}})]}),Q({id:`drink_coconut`,label:`pije mleko kokosowe`,category:`food`,baseWeight:.24,cooldown:60,location:`palm_shade`,drives:{mood:.3,energy:.25},requires:e=>e.itemCount(`coconuts`)>0,beats:[X(`drink`,3)],outcomes:[Z(60,`Pije łapczywie. Kilka kropel ląduje na piasku.`,{effects:{energy:8,mood:3,hunger:-3},onApply:e=>e.addItem(`coconuts`,-1)}),Z(40,`Mleko jest ciepłe i dziwnie słone. Ale to zawsze coś.`,{effects:{energy:5,mood:1},onApply:e=>e.addItem(`coconuts`,-1)})]}),Q({id:`gather_berries`,label:`zbiera jagody`,category:`food`,baseWeight:.4,cooldown:55,location:`bush`,drives:{hunger:.65,curiosity:.2,boredom:.2},time:{dawn:1.3,day:1.2,dusk:1.1,night:.15},requires:e=>e.berryTotal()>0,beats:[X(`shakeTree`,2.6),X(`inspect`,1.4)],outcomes:[Z(48,`Zbiera garść czerwonych jagód. Dwie zjada od razu, na próbę.`,{kind:`good`,items:{berries:2},effects:{mood:4,hunger:-5,curiosity:3},onApply:e=>e.takeBerries(2)}),Z(27,`Krzew okazuje się bardziej kolczasty, niż wyglądał.`,{kind:`bad`,effects:{mood:-3,energy:-2}}),Z(15,`Ptak uprzedza go i zjada najlepsze jagody. Patrzą na siebie.`,{effects:{mood:-1,curiosity:5}}),Z(10,`Jagody są gorzkie. Rozbitek wypluwa je z miną znawcy.`,{effects:{mood:-2,hunger:-2,curiosity:2}})]}),Q({id:`eat_berries`,label:`je jagody`,category:`food`,baseWeight:.2,cooldown:35,location:`palm_shade`,drives:{hunger:.8},requires:e=>e.itemCount(`berries`)>0,beats:[X(`eat`,2.8)],outcomes:[Z(70,`Zjada jagody garściami. Usta ma czerwone jak nigdy.`,{effects:{hunger:-14,mood:3},onApply:e=>e.addItem(`berries`,-1)}),Z(30,`Znajduje wśród jagód jedną zieloną. Je ją. Żałuje.`,{effects:{hunger:-8,mood:-3,curiosity:2},onApply:e=>e.addItem(`berries`,-1)})]}),Q({id:`cook_fish`,label:`piecze rybę`,category:`food`,baseWeight:.5,cooldown:30,location:`fire`,drives:{hunger:.8,mood:.2},tags:[`shelter`],requires:e=>e.itemCount(`fish`)>0&&e.flag(`fire`)>=1,prop:xf.fish,beats:[X(`cook`,6)],outcomes:[Z(55,`Ryba skwierczy nad ogniem. Zapach przyciąga nawet kraba.`,{kind:`good`,effects:{mood:6,hunger:-5,hope:2},flagAdd:{cookedFish:1},intents:[`eat_fish`],onApply:e=>{e.addItem(`fish`,-1),e.keeper.fishCooked++}}),Z(25,`Ryba przypala się z jednej strony. Rozbitek obraca ją z miną fachowca.`,{effects:{mood:2,hunger:-3},flagAdd:{cookedFish:1},intents:[`eat_fish`],onApply:e=>{e.addItem(`fish`,-1),e.keeper.fishCooked++}}),Z(20,`Tłuszcz kapie do ognia. Płomień strzela w górę i przypala mu brew.`,{kind:`bad`,effects:{mood:-4,energy:-2,curiosity:4},flagAdd:{cookedFish:1},intents:[`eat_fish`],onApply:e=>{e.addItem(`fish`,-1),e.fireBurst(20)}})]}),Q({id:`eat_fish`,label:`je rybę`,category:`food`,baseWeight:.32,cooldown:20,location:`fire`,drives:{hunger:1,mood:.3},requires:e=>e.flag(`cookedFish`)>0||e.itemCount(`fish`)>0,beats:[X(`eat`,4.4)],outcomes:[Z(60,`Je rybę łapczywie. Ości wypluwa na bok, z wprawą bywalca wysp.`,{kind:`good`,effects:{hunger:-44,mood:9,energy:5,hope:2},onApply:e=>{e.flag(`cookedFish`)>0?e.addFlag(`cookedFish`,-1):e.addItem(`fish`,-1)}}),Z(25,`Ryba jest dobra. Rozbitek zamyka oczy i przez chwilę jest w domu.`,{effects:{hunger:-38,mood:12,hope:6},onApply:e=>{e.flag(`cookedFish`)>0?e.addFlag(`cookedFish`,-1):e.addItem(`fish`,-1)}}),Z(15,`Ość zacina się w gardle. Kilka kropel wody i przerażona mina.`,{kind:`bad`,effects:{hunger:-24,mood:-4,energy:-2},onApply:e=>{e.flag(`cookedFish`)>0?e.addFlag(`cookedFish`,-1):e.addItem(`fish`,-1)}})]}),Q({id:`crab_hunt`,label:`poluje na kraba`,category:`food`,baseWeight:.28,cooldown:80,location:`beach`,drives:{hunger:.55,boredom:.5,curiosity:.3},time:{dawn:1.3,day:1,dusk:1.4,night:.5},energyCost:14,beats:[X(`dig`,5)],outcomes:[Z(38,`Wykopuje kraba. Krab wygląda na oburzonego, ale trafia do garnka.`,{kind:`good`,effects:{hunger:-12,mood:6,curiosity:3},intents:[`cook_fish`,`eat_fish`]}),Z(27,`Krab szczypie go w palec i ucieka bokiem. Bardzo szybko.`,{kind:`bad`,effects:{mood:-4,energy:-2,curiosity:4}}),Z(20,`Krab siedzi w dołku i patrzy na niego wyzywająco. Rozbitek odpuszcza.`,{effects:{mood:2,curiosity:7,boredom:-6}}),Z(15,`Znajduje tylko muszlę i kawałek liny. Też coś.`,{effects:{curiosity:5},items:{shells:1,rope:1}})]}),Q({id:`collect_shells`,label:`zbiera muszle`,category:`food`,baseWeight:.25,cooldown:75,location:`beach`,drives:{curiosity:.5,boredom:.5,mood:.2},time:{dawn:1.4,day:1,dusk:1.2,night:.2},beats:[X(`inspect`,4.5)],outcomes:[Z(45,`Znajduje muszlę w kształcie spirali. Wkłada ją do kieszeni.`,{kind:`good`,items:{shells:2},effects:{curiosity:7,mood:3,boredom:-8}}),Z(30,`Muszla okazuje się domkiem kraba pustelnika. Krab protestuje.`,{effects:{curiosity:10,mood:4,boredom:-9},onApply:e=>e.dust(8)}),Z(25,`Zbiera trzy muszle, potem gubi jedną po drodze. Zostają dwie.`,{items:{shells:1},effects:{curiosity:4,boredom:-6}})]})],wf=[Q({id:`gather_wood`,label:`zbiera drewno`,category:`build`,baseWeight:.72,cooldown:24,location:[`wreck`,`beach_south`,`beach_west`],drives:{boredom:.25,hope:.3},time:{dawn:1.2,day:1.3,dusk:1.1,night:.3},energyCost:12,requires:e=>e.needs.energy>10,prop:xf.log,beats:[X(`carry`,5.5)],outcomes:[Z(48,`Znosi kilka desek z plaży. Drewno pachnie solą i słońcem.`,{kind:`good`,items:{wood:2},effects:{energy:-5,mood:2,boredom:-7}}),Z(25,`Przynosi jedną belkę i kawałek liny. Lina jest prawie cała.`,{items:{wood:1,rope:1},effects:{energy:-4,curiosity:4,boredom:-6}}),Z(17,`Drzazga wbija mu się w palec. Drewno i tak przynosi.`,{items:{wood:1},effects:{energy:-3,mood:-3}}),Z(10,`Pod deską znajduje kokos. Wyspa czasem jednak coś daje.`,{items:{wood:1,coconuts:1},effects:{mood:4,curiosity:6}})]}),Q({id:`light_fire`,label:`rozpala ognisko`,category:`build`,baseWeight:.58,cooldown:42,location:`fire`,drives:{mood:.4,hope:.4,energy:.2},time:{night:2.2,dusk:2.4,dawn:.8,day:.35},weather:{rain:.25,storm:.1},tags:[`shelter`],requires:e=>e.flag(`fire`)<1&&e.itemCount(`wood`)>0,beats:[X(`lightFire`,4.5),X(`pokeFire`,2.5)],outcomes:[Z(50,`Krzesze iskry. Ogień łapie, najpierw nieśmiało, potem z hukiem.`,{kind:`good`,effects:{mood:8,hope:7,energy:-3,boredom:-8},onApply:e=>{e.addItem(`wood`,-1),e.setFire(!0),e.setFlag(`fireFuel`,100),e.keeper.firesLit++,e.fireBurst(26)}}),Z(28,`Ogień tli się, dymi i gaśnie. Rozbitek dmucha z całych sił.`,{effects:{mood:-3,energy:-2},onApply:e=>e.addItem(`wood`,-1)}),Z(14,`Iskra trafia go w rękę. Ogień w końcu płonie, ale on już nie tańczy.`,{kind:`weird`,effects:{mood:4,energy:-4,curiosity:3},onApply:e=>{e.addItem(`wood`,-1),e.setFire(!0),e.setFlag(`fireFuel`,100),e.keeper.firesLit++}}),Z(8,`Ogień bucha tak nagle, że śpiewa mu brwi. Ale płonie!`,{kind:`weird`,effects:{mood:2,energy:-3,curiosity:5},onApply:e=>{e.addItem(`wood`,-1),e.setFire(!0,!0),e.setFlag(`fireFuel`,100),e.keeper.firesLit++,e.fireBurst(50)}})]}),Q({id:`tend_fire`,label:`dokłada do ogniska`,category:`build`,baseWeight:.28,cooldown:60,location:`fire`,drives:{mood:.35,hope:.2},time:{night:1.8,dusk:1.8,dawn:1,day:.4},tags:[`shelter`],requires:e=>e.flag(`fire`)>=1&&e.flag(`fireFuel`)<88,beats:[X(`pokeFire`,4)],outcomes:[Z(55,`Dokłada gałęzi. Ogień rośnie i odgania cień od obozu.`,{effects:{mood:3,hope:2,boredom:-5},flagAdd:{fireFuel:30}}),Z(30,`Grzebie patykiem w popiele. Znajduje żar, który jeszcze żyje.`,{effects:{curiosity:4,mood:2},flagAdd:{fireFuel:22}}),Z(15,`Ogień pryska iskrami. Rozbitek odskakuje, ale ogień ma się świetnie.`,{effects:{mood:1,energy:-1},flagAdd:{fireFuel:25}})]}),Q({id:`build_shelter`,label:`buduje zadaszenie`,category:`build`,baseWeight:.52,cooldown:40,location:`shelter`,drives:{hope:.6,mood:.35,boredom:.3},time:{day:1.5,dawn:.9,dusk:1.1,night:.3},weather:{rain:1.4,storm:1.8},tags:[`shelter`],utility:(e,t)=>t*(1+Math.max(0,(e.clock.day-1)*.22)),requires:e=>e.flag(`shelter`)<2&&e.itemCount(`wood`)>0,prop:xf.hammer,beats:[X(`hammer`,7)],outcomes:[Z(46,`Wbija kołki i wiąże belki. Konstrukcja trzyma się kupy. Na razie.`,{kind:`good`,effects:{mood:6,hope:5,energy:-6,boredom:-10},onApply:e=>{e.addItem(`wood`,-1),e.addFlag(`shelter`,1),e.refreshBuilds(),e.flag(`shelter`)===1&&e.log(`Szkielet zadaszenia stoi. Wiatr go testuje.`,`good`),e.flag(`shelter`)>=2&&e.log(`Zadaszenie gotowe. Pachnie palmą i deszczem.`,`story`)}}),Z(26,`Bije młotkiem tak długo, że belka pęka. Musi zaczynać od nowa.`,{kind:`bad`,effects:{mood:-4,energy:-5},onApply:e=>e.addItem(`wood`,-1)}),Z(18,`Młotek ześlizguje się i trafia w palec. Świat robi się biały.`,{kind:`bad`,effects:{mood:-6,energy:-4}}),Z(10,`Zadaszenie stoi krzywo, ale stoi. Rozbitek patrzy na nie z dumą.`,{effects:{mood:7,hope:4,energy:-5},onApply:e=>{e.addItem(`wood`,-1),e.addFlag(`shelter`,1),e.refreshBuilds()}})]}),Q({id:`build_raft`,label:`buduje tratwę`,category:`build`,baseWeight:.35,cooldown:55,location:`raft`,drives:{hope:.9,mood:.3,boredom:.2},time:{day:1.5,dawn:1,dusk:1.2,night:.35},weather:{rain:.7,storm:.1},energyCost:18,utility:(e,t)=>{let n=e.itemCount(`wood`);return t*(1+Math.max(0,e.clock.day-2)*.16)*(n>=2?1.25:.65)},requires:e=>e.clock.day>=2&&e.flag(`raft`)<6&&e.itemCount(`wood`)>=1,prop:xf.plank,beats:[X(`hammer`,8)],outcomes:[Z(48,`Przywiązuje kolejną kłodę. Tratwa rośnie, choć wygląda jak stos desek.`,{kind:`good`,effects:{mood:5,hope:7,energy:-7,boredom:-8},onApply:e=>{e.addItem(`wood`,-1),e.addFlag(`raft`,1),e.refreshBuilds(),e.checkRaftMilestone()}}),Z(24,`Deski rozjeżdżają się pod młotkiem. Rozbitek wiąże je jeszcze raz.`,{effects:{mood:-3,energy:-6,hope:2},onApply:e=>{e.addItem(`wood`,-1),e.addFlag(`raft`,1),e.refreshBuilds()}}),Z(18,`Wiąże węzeł, który wygląda dobrze. Potem go rozwiązuje i wiąże lepiej.`,{effects:{mood:2,hope:4,energy:-5,curiosity:4},onApply:e=>{e.addItem(`wood`,-1),e.addFlag(`raft`,1),e.refreshBuilds()}}),Z(10,`Młotek spada mu z ręki wprost do stopy. Tratwa musi poczekać.`,{kind:`bad`,effects:{mood:-7,energy:-5}})]}),Q({id:`repair_raft`,label:`naprawia tratwę`,category:`build`,baseWeight:.22,cooldown:90,location:`raft`,drives:{hope:.6,mood:.2},time:{day:1.2,dusk:1,night:.25},requires:e=>e.flag(`raft`)>=3,prop:xf.hammer,beats:[X(`repair`,6)],outcomes:[Z(50,`Dociąga luźne węzły i uszczelnia szpary. Tratwa wygląda pewniej.`,{effects:{hope:5,mood:3,energy:-4}}),Z(30,`Odkrywa słaby punkt. Wymienia deskę, zanim ktokolwiek to zauważy.`,{effects:{hope:4,mood:4,energy:-5},onApply:e=>e.addItem(`wood`,-1)}),Z(20,`Węzeł pęka i cała konstrukcja się przekrzywia. Poprawia ją z westchnieniem.`,{kind:`bad`,effects:{hope:2,mood:-3,energy:-4}})]}),Q({id:`build_sos`,label:`układa napis SOS`,category:`build`,baseWeight:.3,cooldown:80,location:`sos`,drives:{hope:.8,curiosity:.2},time:{day:1.4,dawn:1.1,dusk:1.2,night:.2},weather:{rain:.6,storm:.1},utility:(e,t)=>t*(1+Math.max(0,e.clock.day-3)*.12),requires:e=>e.clock.day>=3&&e.flag(`sos`)<2&&e.itemCount(`wood`)>0,prop:xf.plank,beats:[X(`carry`,8)],outcomes:[Z(48,`Układa litery z desek. Z góry wyglądają jak SOS. Z ziemi jak deski.`,{kind:`good`,effects:{mood:5,hope:6,energy:-7},onApply:e=>{e.addItem(`wood`,-1),e.addFlag(`sos`,1),e.refreshBuilds(),e.flag(`sos`)>=2&&e.log(`Napis SOS jest gotowy. Widać go z daleka.`,`story`)}}),Z(28,`Mewa siada dokładnie na środku litery O. Rozbitek przegania ją bez przekonania.`,{effects:{mood:-3,curiosity:4},onApply:e=>{e.addItem(`wood`,-1),e.addFlag(`sos`,1),e.refreshBuilds()}}),Z(24,`Fala zabiera jedną deskę, zanim zdąży ją położyć. Morze ma własny plan.`,{effects:{mood:-4,hope:1}})]}),Q({id:`build_sandcastle`,label:`buduje zamek z piasku`,category:`build`,baseWeight:.25,cooldown:100,location:`sandcastle`,drives:{boredom:.95,mood:.5},time:{day:1.6,dusk:1,night:.15},weather:{clear:1.7,cloudy:1,rain:.1},beats:[X(`dig`,8)],outcomes:[Z(44,`Wznosi kolejną wieżę. Zamek rośnie i robi się coraz bardziej absurdalny.`,{kind:`good`,effects:{mood:8,boredom:-16,curiosity:4},onApply:e=>{e.addFlag(`castle`,1),e.refreshBuilds()}}),Z(26,`Fala zabiera połowę zamku. Rozbitek patrzy na morze z urazą.`,{kind:`bad`,effects:{mood:-6,boredom:-6},onApply:e=>{e.flag(`castle`)>0&&e.addFlag(`castle`,-1),e.refreshBuilds()}}),Z(20,`Rzeźbi w piasku fosę. Woda natychmiast ją wypełnia. To też sukces.`,{effects:{mood:4,boredom:-11,curiosity:5},onApply:e=>{e.addFlag(`castle`,1),e.refreshBuilds()}}),Z(10,`Krab przechodzi przez zamek i niszczy bramę. Rozbitek salutuje mu.`,{kind:`weird`,effects:{mood:3,curiosity:9,boredom:-8},onApply:e=>e.refreshBuilds()})]}),Q({id:`sharpen_spear`,label:`ostrzy włócznię`,category:`build`,baseWeight:.18,cooldown:120,location:[`lookout`,`grass_center`],drives:{boredom:.45,curiosity:.2,mood:.15},time:{day:1.2,dusk:1,night:.2},requires:e=>e.needs.energy>10,prop:xf.spear,beats:[X(`sharpen`,5)],outcomes:[Z(55,`Ostrzy kamień o kamień. Włócznia robi się naprawdę ostra.`,{effects:{mood:4,boredom:-9,curiosity:3},flags:{spearSharp:1}}),Z(25,`Sprawdza ostrość na palcu. Nie powinien. Ale włócznia jest ostra.`,{effects:{mood:-2,energy:-1,curiosity:3},flags:{spearSharp:1}}),Z(20,`Kamień wysuwa mu się z ręki i spada do wody. Zaczyna od nowa.`,{effects:{mood:-2,boredom:-5}})]}),Q({id:`make_rope`,label:`skręca linę z włókien`,category:`build`,baseWeight:.24,cooldown:85,location:[`grass_center`,`shelter`],drives:{boredom:.5,hope:.35},time:{day:1.3,dusk:1.1,night:.15},utility:(e,t)=>t*(e.flag(`raft`)>=2?1.4:1),requires:e=>e.clock.day>=2,beats:[X(`carry`,6)],outcomes:[Z(50,`Skręca włókna w mocną linę. Ręce ma zdarte, ale lina trzyma.`,{kind:`good`,items:{rope:1},effects:{mood:4,hope:4,energy:-3,boredom:-7}}),Z(30,`Lina plącze się w supeł, którego nie da się rozplątać. Rozcina go.`,{effects:{mood:-2,boredom:-5}}),Z(20,`Udaje mu się zrobić linę i bransoletkę. Bransoletka jest zbędna.`,{items:{rope:1},effects:{mood:6,curiosity:5,boredom:-8}})]}),Q({id:`patch_roof`,label:`łata dach zadaszenia`,category:`build`,baseWeight:.14,cooldown:140,location:`shelter`,drives:{mood:.2,boredom:.3},time:{day:1.2,dusk:1.1,night:.3},tags:[`indoor`,`shelter`],requires:e=>e.flag(`shelter`)>=2,prop:xf.hammer,beats:[X(`repair`,5)],outcomes:[Z(55,`Poprawia liście na dachu. Zadaszenie pachnie nową palmą.`,{effects:{mood:4,boredom:-8,energy:-2}}),Z(30,`Znajduje w dachu gniazdo. Mieszka w nim jaszczurka. Zostawia ją.`,{effects:{curiosity:9,mood:3,boredom:-7}}),Z(15,`Cała warstwa liści zsuwa się mu na głowę. Wygląda jak choinka.`,{kind:`bad`,effects:{mood:-3,boredom:-5}})]})],Tf=[Q({id:`skip_stones`,label:`puszcza kaczki na wodzie`,category:`play`,baseWeight:.4,cooldown:40,location:[`beach_west`,`shore_south`,`horizon_watch`],drives:{boredom:.95,mood:.5},time:{day:1.4,dusk:1.3,dawn:1,night:.15},weather:{clear:1.3,cloudy:1,rain:.3,storm:.05},prop:xf.stone,energyCost:10,beats:[X(`skipStone`,5)],outcomes:[Z(36,`Kamień odbija się od wody pięć razy. Pięć! Rozbitek podnosi ręce.`,{kind:`good`,effects:{mood:9,boredom:-15,curiosity:3}}),Z(26,`Trzy odbicia. Nieźle. Rozbitek kiwa głową jak sędzia.`,{effects:{mood:4,boredom:-10}}),Z(22,`Kamień od razu idzie na dno. Wyspa nie jest pod wrażeniem.`,{effects:{mood:-2,boredom:-5}}),Z(10,`Kamień leci w tył i ląduje na jego własnej stopie.`,{kind:`bad`,effects:{mood:-5,energy:-2}}),Z(6,`Kamień odbija się sześć razy, potem wraca fala i psuje cały występ.`,{kind:`weird`,effects:{mood:5,curiosity:7,boredom:-12}})]}),Q({id:`play_stick`,label:`bawi się patykiem`,category:`play`,baseWeight:.32,cooldown:60,drives:{boredom:1,mood:.3},time:{day:1.3,dusk:1.1,night:.3},weather:{clear:1.2,rain:.5},prop:xf.stick,beats:[X(`playStick`,6)],outcomes:[Z(32,`Wielki pojedynek na patyki. Rozbitek wygrywa i przegrywa jednocześnie.`,{effects:{mood:6,boredom:-13,curiosity:3}}),Z(26,`Patyk staje się mieczem. Rozbitek odpiera atak niewidzialnego pirata.`,{effects:{mood:8,boredom:-15}}),Z(22,`Patyk pęka. Rozbitek patrzy na połowę w ręku i czuje dziwny smutek.`,{effects:{mood:-2,boredom:-6}}),Z(12,`Rzuca patyk, a pies przynosi go z powrotem. Psa nie ma.`,{kind:`weird`,effects:{curiosity:11,mood:4,boredom:-10,hope:3}}),Z(8,`Patyk trafia go w czoło po ambitnym zakręcie. Wyspa klaszcze.`,{kind:`bad`,effects:{mood:-3,energy:-1,boredom:-8}})]}),Q({id:`throw_stones`,label:`rzuca kamieniami do wody`,category:`play`,baseWeight:.28,cooldown:55,location:`beach`,drives:{boredom:.8,mood:.3},time:{day:1.3,dusk:1,night:.2},prop:xf.stone,beats:[X(`throw`,4)],outcomes:[Z(36,`Kamień znika z pluskiem. Rozbitek zadowolony z siebie otrzepuje ręce.`,{effects:{mood:4,boredom:-9}}),Z(24,`Kamień uderza w palmę. Spada kokos. Wyspa chyba mu sprzyja.`,{kind:`good`,items:{coconuts:1},effects:{mood:6,curiosity:4,boredom:-10}}),Z(22,`Mewa krzyczy na niego z góry. Rozbitek udaje, że nie rozumie.`,{effects:{mood:2,curiosity:5}}),Z(18,`Kamień odbija się rykoszetem od skały i wpada do wody. Trudno uwierzyć.`,{effects:{mood:3,curiosity:7,boredom:-8}})]}),Q({id:`dance`,label:`tańczy`,category:`play`,baseWeight:.3,cooldown:75,drives:{boredom:.95,mood:.6},time:{day:1.1,dusk:1.6,night:.7},requires:e=>e.needs.mood>50,beats:[X(`dance`,8)],outcomes:[Z(30,`Tańczy z cieniem rzucanym przez palmę. Cień dotrzymuje kroku.`,{kind:`good`,effects:{mood:10,boredom:-18,hope:3}}),Z(24,`Wymyśla krok, który wygląda jak obrażanie się na własne nogi.`,{effects:{mood:7,boredom:-15,curiosity:4}}),Z(18,`Krab przygląda się z boku. Potem zaczyna ruszać szczypcami w rytm.`,{kind:`weird`,effects:{mood:8,curiosity:10,boredom:-16}}),Z(16,`Potyka się o własną stopę i ląduje na piasku. Wstaje z godnością.`,{effects:{mood:3,energy:-2,boredom:-10}}),Z(12,`Tańczy tak długo, że zapomina, iż jest sam. Potem sobie przypomina.`,{effects:{mood:4,hope:-2,boredom:-12}})]}),Q({id:`draw_sand`,label:`rysuje na piasku`,category:`play`,baseWeight:.26,cooldown:70,location:`beach`,drives:{boredom:.9,curiosity:.4,hope:.25},time:{day:1.3,dusk:1.1,night:.15},prop:xf.stick,beats:[X(`drawSand`,7)],outcomes:[Z(30,`Rysuje wielki żaglowiec. Z góry wygląda jak wielki żaglowiec.`,{kind:`good`,effects:{mood:5,hope:6,boredom:-13,curiosity:4}}),Z(24,`Fala zabiera rysunek. Rozbitek przez chwilę patrzy na czysty piasek.`,{effects:{mood:-3,hope:-1,boredom:-8}}),Z(22,`Rysuje mapę wyspy. Potem dorysowuje skarb. Potem siebie z koroną.`,{effects:{mood:7,boredom:-14,curiosity:5}}),Z(14,`Rysuje twarz, którą pamięta z domu. Nie pokazuje jej nikomu.`,{effects:{mood:3,hope:7,boredom:-11}}),Z(10,`Krab przechodzi przez rysunek i robi w nim dziurę. Rozbitek się śmieje.`,{kind:`weird`,effects:{mood:6,curiosity:7,boredom:-12}})]}),Q({id:`talk_to_crab`,label:`rozmawia z krabem`,category:`play`,baseWeight:.2,cooldown:100,location:`beach`,drives:{boredom:.8,curiosity:.6,mood:.3},time:{dawn:1.2,day:1,dusk:1.5,night:.5},beats:[X(`inspect`,5),X(`laugh`,3)],outcomes:[Z(32,`Opowiada krabowi o swoim planie. Krab słucha. Chyba.`,{effects:{mood:7,hope:4,curiosity:5,boredom:-12}}),Z(24,`Krab szczypie go w palec. Rozmowa dobiega końca.`,{kind:`bad`,effects:{mood:-3,energy:-1,boredom:-7}}),Z(22,`Krab odchodzi bokiem. Rozbitek macha mu na pożegnanie.`,{effects:{mood:3,curiosity:6,boredom:-9}}),Z(14,`Krab przynosi muszlę i kładzie ją przed nim. To chyba prezent.`,{kind:`weird`,items:{shells:1},effects:{mood:8,curiosity:10,boredom:-12}}),Z(8,`Rozbitek zdaje sobie sprawę, że rozmawia z krabem. Krab też to wie.`,{effects:{mood:4,curiosity:7,boredom:-10}})]}),Q({id:`juggle_coconuts`,label:`żongluje kokosami`,category:`play`,baseWeight:.16,cooldown:120,drives:{boredom:.9,mood:.5},time:{day:1.2,dusk:1.4,night:.5},requires:e=>e.itemCount(`coconuts`)>=2,prop:xf.coconut,beats:[X(`juggle`,6)],outcomes:[Z(30,`Żongluje dwoma kokosami. Przez chwilę jest najszczęśliwszym rozbitkiem.`,{kind:`good`,effects:{mood:9,boredom:-16,curiosity:4}}),Z(28,`Kokos spada mu na głowę. Drugi na stopę. Publiczność jest zachwycona.`,{kind:`bad`,effects:{mood:-4,energy:-2,boredom:-10}}),Z(22,`Próbuje żonglować trzema, ale trzeci jest wyimaginowany.`,{effects:{mood:5,curiosity:6,boredom:-12}}),Z(20,`Udaje mu się. Przez pół sekundy. Potem kokosy wracają do piasku.`,{effects:{mood:6,boredom:-13,curiosity:3}})]}),Q({id:`sand_angel`,label:`robi anioła z piasku`,category:`play`,baseWeight:.18,cooldown:130,location:`beach`,drives:{boredom:.9,mood:.4},time:{day:1.4,dusk:1.1,night:.1},weather:{clear:1.3,cloudy:.9,rain:.05},beats:[X(`cloudWatch`,6)],outcomes:[Z(40,`Kładzie się i macha rękami. Na piasku zostaje anioł z rozcapierzonymi skrzydłami.`,{kind:`good`,effects:{mood:7,boredom:-14,curiosity:4}}),Z(30,`Piasek wchodzi mu za koszulkę. Anioł jest, swędzi całe plecy.`,{effects:{mood:2,energy:-2,boredom:-10}}),Z(18,`Fala zalewa połowę anioła. Wygląda teraz jak anioł z jednym skrzydłem.`,{effects:{mood:3,curiosity:6,boredom:-11}}),Z(12,`Zasypia. Budzi się z piaskiem w ustach i aniołem, którego nie pamięta.`,{effects:{mood:-2,energy:6,curiosity:5}})]})],Ef=[Q({id:`inspect_shell`,label:`ogląda muszlę`,category:`explore`,baseWeight:.22,cooldown:75,location:`beach`,drives:{curiosity:.85,boredom:.4},time:{dawn:1.2,day:1.1,dusk:1.3,night:.3},requires:e=>e.itemCount(`shells`)>0,prop:xf.shell,beats:[X(`inspect`,4)],outcomes:[Z(36,`Przykłada muszlę do ucha. Słyszy morze, choć morze jest tuż obok.`,{effects:{curiosity:8,mood:5,hope:3,boredom:-9}}),Z(24,`W muszli siedzi krab pustelnik. Rozbitek odkłada ją bardzo ostrożnie.`,{kind:`weird`,effects:{curiosity:11,mood:4,boredom:-10}}),Z(20,`Muszla jest piękna. Rozbitek postanawia ją zatrzymać. Ma już kolekcję.`,{effects:{curiosity:5,mood:3,boredom:-7}}),Z(12,`W muszli znajduje perłę. Małą, ale prawdziwą.`,{kind:`good`,effects:{hope:9,mood:7,curiosity:8}}),Z(8,`Muszla kruszy się w palcach. Zostaje piasek i wspomnienie.`,{effects:{mood:-2,curiosity:4}})]}),Q({id:`follow_crab`,label:`śledzi kraba`,category:`explore`,baseWeight:.26,cooldown:65,location:`beach`,drives:{curiosity:.95,boredom:.6},time:{dawn:1.4,day:1,dusk:1.5,night:.4},energyCost:10,beats:[X(`inspect`,5.5)],outcomes:[Z(32,`Krab prowadzi go do swojej kryjówki. W środku jest czyjś stary zegarek.`,{kind:`good`,effects:{curiosity:12,hope:6,mood:4,boredom:-12}}),Z(26,`Krab znika między skałami. Rozbitek udaje, że wcale nie śledził.`,{effects:{curiosity:4,mood:-1,boredom:-7}}),Z(22,`Krab odwraca się i idzie w jego stronę. Rozbitek robi to samo.`,{kind:`weird`,effects:{curiosity:9,mood:6,boredom:-11}}),Z(20,`Trop prowadzi go w kółko. Wraca dokładnie tam, gdzie zaczął.`,{effects:{curiosity:5,mood:-2,boredom:-8}})]}),Q({id:`dig_treasure`,label:`kopie w piasku`,category:`explore`,baseWeight:.32,cooldown:75,location:`beach`,drives:{curiosity:1,hope:.5,boredom:.4},time:{day:1.3,dawn:1.2,dusk:1.3,night:.2},energyCost:18,requires:e=>e.needs.energy>15,beats:[X(`dig`,8)],outcomes:[Z(28,`Na dnie dołka znajduje butelkę z zaszytym listem. Pismo jest nieczytelne.`,{kind:`good`,effects:{hope:10,curiosity:13,mood:6,boredom:-14},onApply:e=>e.dust(18)}),Z(24,`Znajduje starą monetę. Nie ma pojęcia, co można nią kupić na wyspie.`,{effects:{hope:6,curiosity:10,mood:5,boredom:-11},onApply:e=>e.dust(14)}),Z(24,`Kopie, kopie, kopie. Nic. Ale przynajmniej się zmęczył.`,{effects:{energy:-8,boredom:-9,mood:-2},onApply:e=>e.dust(12)}),Z(14,`W dołku siedzi krab. Krab jest wściekły. Rozbitek zasypuje dołek.`,{kind:`bad`,effects:{energy:-4,mood:-4,curiosity:6}}),Z(10,`Wykopuje kawałek czegoś, co wygląda jak kość. Odkłada to i zasypuje.`,{kind:`weird`,effects:{curiosity:15,mood:-2,hope:3}})]}),Q({id:`explore_rocks`,label:`bada skały`,category:`explore`,baseWeight:.26,cooldown:80,location:`lookout`,drives:{curiosity:.9,boredom:.5,mood:.2},time:{dawn:1.2,day:1.2,dusk:1.4,night:.4},energyCost:12,beats:[X(`inspect`,6)],outcomes:[Z(30,`Zagląda pod kamień. Pod kamieniem jest cały mały świat.`,{effects:{curiosity:10,mood:5,boredom:-11}}),Z(24,`Znajduje kamień z błyszczącymi żyłkami. Może to coś cennego. Może nie.`,{effects:{curiosity:12,hope:5,mood:4,boredom:-10}}),Z(22,`Krab obserwuje go z góry skały. Rozbitek udaje, że są tu razem.`,{effects:{curiosity:7,mood:6,boredom:-9}}),Z(14,`Wchodzi na skałę i przez chwilę widzi całą wyspę. Jest mniejsza, niż myślał.`,{effects:{hope:4,curiosity:6,mood:3,boredom:-10}}),Z(10,`Kamień rusza się pod jego stopą. To nie kamień. To krab. Wielki krab.`,{kind:`weird`,effects:{curiosity:14,energy:-3,mood:-1}})]}),Q({id:`examine_wreck`,label:`przeszukuje wrak`,category:`explore`,baseWeight:.3,cooldown:85,location:`wreck`,drives:{curiosity:.9,hope:.4,boredom:.4},time:{day:1.3,dawn:1.1,dusk:1.3,night:.2},requires:e=>e.needs.energy>10,beats:[X(`inspect`,7)],outcomes:[Z(30,`Pod deskami znajduje zwój liny. Lina jest w lepszym stanie niż wrak.`,{items:{rope:1},effects:{curiosity:7,mood:4,hope:3,boredom:-10}}),Z(24,`W kadłubie tkwi stary list. Adres jest rozmazany przez sól.`,{kind:`good`,effects:{hope:10,curiosity:12,mood:5,boredom:-12}}),Z(20,`Wypada stary but. Drugi but. Rozbitek ma teraz parę, ale nie ma butów.`,{kind:`weird`,effects:{curiosity:8,mood:2,boredom:-8}}),Z(14,`Coś rusza się w ciemnej części wraku. Rozbitek postanawia wrócić później.`,{kind:`weird`,effects:{curiosity:9,energy:-2,mood:-2}}),Z(12,`Wyciąga dwie deski i gwóźdź. Gwóźdź jest najcenniejszy.`,{items:{wood:1},effects:{curiosity:5,mood:3,boredom:-8}})]}),Q({id:`look_horizon`,label:`wypatruje statków`,category:`explore`,baseWeight:.38,cooldown:55,location:[`horizon_watch`,`lookout`],drives:{hope:1,curiosity:.35,boredom:.3},time:{dawn:1.5,day:1.4,dusk:2,night:.35},weather:{clear:1.5,fog:.25,rain:.7,storm:.1},beats:[X(`lookHorizon`,10)],outcomes:[Z(34,`Horyzont jest pusty. Rozbitek wpatruje się w niego jeszcze długo.`,{effects:{hope:-2,boredom:-8,mood:1}}),Z(24,`Na horyzoncie pojawia się biały punkcik. To mewa. Rozbitek macha i jej.`,{effects:{mood:3,hope:-1,curiosity:4,boredom:-8}}),Z(18,`W oddali coś błyska. Może światło. Może statek. Serce mu przyspiesza.`,{effects:{hope:9,curiosity:8,mood:4,boredom:-10}}),Z(14,`Delfin wyskakuje z wody. Rozbitek klaszcze jak na przedstawieniu.`,{kind:`good`,effects:{mood:9,hope:5,curiosity:7,boredom:-11}}),Z(10,`Przez lornetkę z dłoni widzi własny nos. To nie lornetka.`,{effects:{mood:-2,curiosity:4,boredom:-5}})]}),Q({id:`watch_ships`,label:`nasłuchuje morza`,category:`explore`,baseWeight:.24,cooldown:90,location:`horizon_watch`,drives:{hope:.9,curiosity:.4},time:{dusk:2,night:1.6,dawn:1.4,day:.8},weather:{clear:1.2,fog:1.4},beats:[X(`lookHorizon`,9)],outcomes:[Z(30,`Nasłuchuje. Morze szumi tak samo jak wczoraj.`,{effects:{hope:-1,boredom:-7,mood:1}}),Z(24,`Słyszy dzwon. Albo mu się wydaje. Albo to wiatr w muszli.`,{kind:`weird`,effects:{curiosity:10,hope:5,mood:3}}),Z(22,`Daleko, bardzo daleko, coś świeci rytmicznie. Światło gaśnie.`,{effects:{hope:7,curiosity:8,mood:4}}),Z(14,`Foka wynurza się obok skał i patrzy na niego. Rozbitek patrzy na nią.`,{effects:{mood:8,curiosity:9,boredom:-10}}),Z(10,`W oddali słychać silnik. Cichnie. Rozbitek zostaje z podniesioną ręką.`,{effects:{hope:3,mood:-2,curiosity:5}})]}),Q({id:`bottle_letter`,label:`wysyła list w butelce`,category:`explore`,baseWeight:.24,cooldown:110,location:`bottle_shore`,drives:{hope:.8,boredom:.3},time:{day:1.2,dawn:1.4,dusk:1.3,night:.2},requires:e=>e.clock.day>=2,prop:xf.bottle,beats:[X(`bottle`,6)],outcomes:[Z(42,`Wrzuca butelkę do morza. List jest krótki: „Jestem tu”.`,{kind:`good`,effects:{hope:9,mood:6,boredom:-10},onApply:e=>{e.keeper.bottlesSent++,e.addFlag(`bottlesSent`,1),e.log(`Butelka z listem odpływa. Rozbitek patrzy za nią, aż znika.`,`story`)}}),Z(26,`Fala wyrzuca butelkę z powrotem pod jego stopy. Morze ma poczucie humoru.`,{kind:`weird`,effects:{hope:2,mood:-2,curiosity:5},onApply:e=>{e.keeper.bottlesSent++,e.addFlag(`bottlesSent`,1)}}),Z(20,`Mewa porywa butelkę w locie. List poleci gdzieś indziej.`,{kind:`weird`,effects:{curiosity:8,hope:3,mood:3},onApply:e=>{e.keeper.bottlesSent++,e.addFlag(`bottlesSent`,1)}}),Z(12,`Butelka tonie tuż przy brzegu. Rozbitek wyławia ją i próbuje jeszcze raz.`,{effects:{mood:-3,hope:-1,boredom:-6}})]}),Q({id:`search_shallows`,label:`przeszukuje płytką wodę`,category:`explore`,baseWeight:.3,cooldown:60,location:`shore`,drives:{curiosity:.9,hunger:.35,boredom:.4},time:{dawn:1.4,day:1.2,dusk:1.1,night:.2},energyCost:10,beats:[X(`inspect`,6)],outcomes:[Z(28,`Znajduje muszlę i kawałek szkła oszlifowanego przez fale.`,{items:{shells:1},effects:{curiosity:8,mood:4,boredom:-9}}),Z(24,`Coś rusza się pod jego stopą. To krab. Krab jest szybszy.`,{effects:{curiosity:9,mood:2,energy:-2,boredom:-8}}),Z(20,`W płytkiej wodzie leży stara butelka. W środku jest piasek i nic więcej.`,{effects:{curiosity:7,hope:2,boredom:-7}}),Z(16,`Widzi małą rybę, która patrzy na niego z ciekawością. Ryba nie ucieka.`,{effects:{curiosity:10,mood:6,boredom:-10}}),Z(12,`Nadepnięcie na jeżowca. Ból, syk, taniec na jednej nodze.`,{kind:`bad`,effects:{mood:-6,energy:-4}})]}),Q({id:`investigate_noise`,label:`sprawdza dziwny dźwięk`,category:`explore`,baseWeight:.16,cooldown:90,location:`any`,drives:{curiosity:1,boredom:.4},time:{night:1.5,dusk:1.3,dawn:1.2,day:.8},requires:e=>e.needs.curiosity>55,beats:[X(`think`,2),X(`scared`,2.5),X(`inspect`,3.5)],outcomes:[Z(28,`To tylko gałąź uderzająca o palmę. Rozbitek wzdycha z ulgą.`,{effects:{curiosity:-12,mood:2,boredom:-8}}),Z(24,`Za krzakiem siedzi krab. Krab wygląda, jakby to on był tu gospodarzem.`,{effects:{curiosity:7,mood:4,boredom:-9}}),Z(20,`Nic. Ale cisza po tym dźwięku jest głośniejsza niż sam dźwięk.`,{effects:{curiosity:4,hope:2,mood:-1,boredom:-7}}),Z(16,`W trawie znajduje ślad. Duży. Bardzo duży. Postanawia o nim nie myśleć.`,{kind:`weird`,effects:{curiosity:15,mood:-3,hope:3}}),Z(12,`To była własna stopa. Rozbitek przez chwilę nie wie, co o tym sądzić.`,{effects:{mood:5,curiosity:5,boredom:-10}})]})],Df=[Q({id:`smoke_signal`,label:`wznosi sygnał dymny`,category:`escape`,baseWeight:.3,cooldown:100,location:`fire`,drives:{hope:.9,mood:.2},time:{dawn:1.6,day:1.5,dusk:1.4,night:.4},weather:{clear:1.4,cloudy:1.1,rain:.15,storm:.05,fog:.5},tags:[`shelter`],requires:e=>e.flag(`fire`)>=1,beats:[X(`pokeFire`,5)],outcomes:[Z(42,`Dorzuca mokre liście. Słup dymu unosi się wysoko nad wyspę.`,{kind:`good`,effects:{hope:9,mood:4,energy:-3,boredom:-10},flagAdd:{fireFuel:-18},onApply:e=>{e.fireBurst(30),e.log(`Słup dymu idzie w niebo. Rozbitek macha do niego, jakby ktoś tam był.`,`story`)}}),Z(24,`Dym idzie prosto w jego twarz. Kaszle, ale sygnał leci dalej.`,{effects:{hope:5,mood:-2,energy:-2},flagAdd:{fireFuel:-14},onApply:e=>e.fireBurst(18)}),Z(18,`Deszcz dusi ogień, zanim dym zdąży się wznieść. Ognisko gaśnie.`,{kind:`bad`,effects:{hope:-6,mood:-5},onApply:e=>e.setFire(!1)}),Z(16,`Wiatr zgarnia dym i roznosi go po plaży. Rozbitek wdycha własny sygnał.`,{effects:{hope:2,mood:-1,curiosity:4},flagAdd:{fireFuel:-10}})]}),Q({id:`signal_mirror`,label:`nadaje lustrem`,category:`escape`,baseWeight:.18,cooldown:150,location:`lookout`,drives:{hope:.8,boredom:.3},time:{day:2,dawn:1.2,dusk:1.2,night:.05},weather:{clear:2,cloudy:.4,rain:.1,storm:.05,fog:.15},requires:e=>!e.clock.isNight&&e.weather.state.rain<.3,beats:[X(`inspect`,5)],outcomes:[Z(40,`Łapie słońce w kawałek szkła. Błysk leci w stronę horyzontu.`,{kind:`good`,effects:{hope:7,mood:5,curiosity:4,boredom:-9},onApply:e=>e.sparkle(16)}),Z(28,`Błysk odbija się od wody i trafia go prosto w oko. Chwila ciemności.`,{kind:`bad`,effects:{mood:-4,hope:1,energy:-1}}),Z(20,`Chmura zasłania słońce dokładnie wtedy, gdy udaje mu się złapać kąt.`,{effects:{hope:-1,mood:-3,boredom:-6}}),Z(12,`Błyska w stronę palm. Odbłysk wraca. Rozbitek salutuje sam sobie.`,{effects:{mood:6,hope:3,curiosity:5}})]}),Q({id:`pack_supplies`,label:`pakuje zapasy na tratwę`,category:`escape`,baseWeight:.2,cooldown:120,location:`raft`,drives:{hope:.7,mood:.2},time:{day:1.2,dawn:1.1,dusk:1,night:.3},requires:e=>e.flag(`raft`)>=4,beats:[X(`carry`,7)],outcomes:[Z(46,`Układa na tratwie kokosy, rybę i linę. Wszystko zabezpiecza węzłami.`,{kind:`good`,effects:{hope:8,mood:5,energy:-4},flags:{packed:1}}),Z(28,`Pakuje zapasy, potem przepakowuje je jeszcze raz. I jeszcze raz.`,{effects:{hope:5,mood:2,energy:-5,boredom:-8},flags:{packed:1}}),Z(16,`Zapomina o wodzie. Wraca po nią. Potem zapomina, po co wracał.`,{effects:{hope:2,mood:-2,boredom:-6}}),Z(10,`Krab wchodzi do skrzyni z zapasami. Rozbitek pakuje go razem z resztą.`,{kind:`weird`,effects:{hope:4,mood:7,curiosity:8},flags:{packed:1}})]}),Q({id:`launch_raft`,label:`wypływa tratwą`,category:`escape`,baseWeight:.12,cooldown:300,location:`raft`,drives:{hope:1,mood:.3},time:{dawn:1.8,day:1.5,dusk:1.3,night:.2},weather:{clear:1.5,cloudy:1,rain:.5,storm:.05,fog:.6},story:`raft`,utility:(e,t)=>e.flag(`raft`)<6?t*.15:t*3.2,requires:e=>e.flag(`raft`)>=6&&e.clock.day>=10&&e.flag(`packed`)>=1,beats:[X(`row`,9)],outcomes:[Z(55,`Wypycha tratwę na wodę. Wskakuje na pokład i odbija od brzegu.`,{kind:`good`,effects:{hope:10,mood:6,energy:-8},onApply:e=>e.startRaftAttempt()}),Z(25,`Tratwa utyka na mieliźnie. Rozbitek popycha ją, brodząc po pas.`,{effects:{hope:4,mood:-2,energy:-6},onApply:e=>e.startRaftAttempt()}),Z(20,`Odbija z hałasem, jakiego wyspa dawno nie słyszała.`,{effects:{hope:8,mood:4,energy:-7},onApply:e=>e.startRaftAttempt()})]})],Of=[...Sf,...Cf,...wf,...Tf,...Ef,...Df];Of.length;var kf=class{scripted;duration;tick;cleanup;elapsed=0;stepIndex=0;steps;constructor(e,t,n,r,i){this.scripted=e,this.duration=t,this.tick=r,this.cleanup=i,this.steps=[...n].sort((e,t)=>e.at-t.at)}update(e,t){for(this.elapsed+=e;this.stepIndex<this.steps.length&&this.elapsed>=this.steps[this.stepIndex].at;)this.steps[this.stepIndex].run(),this.stepIndex++;return this.tick?.(e,this.elapsed),this.elapsed>=this.duration}dispose(e){this.scripted&&(e.scripted=!1),e.scriptedActivity=``,this.cleanup?.()}},Af={east:{x:10.6,z:4},west:{x:-10.6,z:2.2},south:{x:-1.5,z:8.4}},jf=[{id:`ship`,title:`Statek na horyzoncie`,teaser:`Na horyzoncie pojawia się żagiel.`,text:`Prawdziwy statek przepływa obok wyspy. Rozbitek macha, krzyczy i skacze. Statek płynie dalej.`,minDay:5,weight:1,cooldown:900,dayOnly:!0,weather:[`clear`,`cloudy`],run:(e,t)=>{let n=new Zd;n.group.position.set(-42,.02,-42),n.group.rotation.y=-.18,n.group.scale.setScalar(1.2),t.group.add(n.group);let r=!1;return new kf(!0,38,[{at:.2,run:()=>{e.log(`Na horyzoncie pojawia się żagiel. Prawdziwy żagiel.`,`rare`,`ship`),e.shiftNeeds({hope:7,curiosity:8})}},{at:1.4,run:()=>{e.director.interrupt(e),e.castaway.faceToward(n.group.position.x,n.group.position.z),e.castaway.setReaction(`wave`,8),e.log(`Rozbitek macha. Macha całym ciałem.`,`info`,`ship`)}},{at:8.5,run:()=>{r=e.flag(`fire`)>=1&&e.flag(`fireFuel`)>50,e.scripted=!1,e.scriptedActivity=``,r?(e.castaway.setReaction(`scared`,3),e.log(`Statek przepływa obok, a rozbitek jest zajęty gaszeniem ognia, który wymknął się spod kontroli.`,`rare`,`ship`),e.fireBurst(40),e.shiftNeeds({hope:-6,mood:-7})):(e.log(`Statek nie zmienia kursu. Znika za horyzontem.`,`info`,`ship`),e.shiftNeeds({hope:-2,mood:-3,curiosity:4}))}},{at:14,run:()=>{r||e.log(`Zostaje tylko cisza i ta sama wyspa.`,`info`,`ship`)}}],e=>{n.update(e),n.group.position.x+=2.4*e},()=>t.group.remove(n.group))}},{id:`mermaid`,title:`Tajemnicza syrena`,teaser:`W nocy woda śpiewa.`,text:`Ktoś siedział na skale i śpiewał. Kiedy rozbitek się obudził, w wodzie został tylko krąg fal.`,minDay:6,weight:.9,cooldown:1100,nightOnly:!0,weather:[`clear`,`cloudy`,`fog`],run:(e,t)=>{let n=new Qd;n.group.position.set(-10.7,.02,1.6),n.group.rotation.y=Math.PI/2;let r=new so(9431258,2.4,6.5,2);return r.position.set(0,1.1,0),n.group.add(r),t.group.add(n.group),new kf(!0,23,[{at:.4,run:()=>{e.director.interrupt(e),e.log(`Z wody dobiega śpiew. Cichy, wysoki, niemożliwy.`,`weird`,`mermaid`),e.shiftNeeds({curiosity:9,hope:4})}},{at:2.5,run:()=>{e.log(`Na skale w wodzie siedzi postać z długimi włosami.`,`rare`,`mermaid`),e.fx.sparkle(n.group.position.x,.9,n.group.position.z,16)}},{at:11,run:()=>{e.castaway.setReaction(`startle`,2.2),e.scripted=!0,e.scriptedActivity=`coś jest w wodzie`,e.castaway.faceToward(n.group.position.x,n.group.position.z),e.log(`Rozbitek budzi się. Postać patrzy prosto na niego.`,`rare`,`mermaid`)}},{at:14,run:()=>{n.group.visible=!1,e.log(`Nieznajoma wskakuje do wody. Zostaje tylko krąg fal.`,`weird`,`mermaid`),e.shiftNeeds({curiosity:17,hope:6,mood:5}),e.fx.splash(n.group.position.x,.08,n.group.position.z,34)}},{at:16,run:()=>{e.scripted=!1,e.scriptedActivity=``,e.log(`Rozbitek nie jest pewien, co widział. Ale pamięta melodię.`,`info`,`mermaid`)}}],e=>n.update(e),()=>t.group.remove(n.group))}},{id:`ghost_ship`,title:`Statek widmo`,teaser:`We mgle coś płynie bez załogi.`,text:`Statek bez załogi przepłynął przez mgłę. Światła na pokładzie paliły się zimnym, zielonym ogniem.`,minDay:8,weight:.6,cooldown:1300,nightOnly:!0,run:(e,t)=>{e.weather.force(`fog`,150);let n=new Zd(!0);return n.group.position.set(-30,.02,-46),n.group.rotation.y=.1,n.group.scale.setScalar(1.6),t.group.add(n.group),new kf(!0,42,[{at:.4,run:()=>{e.director.interrupt(e),e.log(`Mgła gęstnieje. W oddali pojawia się statek bez świateł.`,`rare`,`ghost_ship`),e.weather.force(`fog`,130)}},{at:3,run:()=>{e.castaway.faceToward(n.group.position.x,n.group.position.z),e.castaway.setReaction(`scared`,5),e.log(`Statek nie ma załogi. Ma za to dzwon, który bije pod wodą.`,`weird`,`ghost_ship`)}},{at:14,run:()=>{e.scripted=!1,e.scriptedActivity=``,e.shiftNeeds({curiosity:18,hope:3,mood:-4})}},{at:34,run:()=>{e.log(`Statek widmo rozpływa się we mgle, jakby nigdy go nie było.`,`weird`,`ghost_ship`)}}],e=>{n.update(e),n.group.position.x+=.7*e},()=>t.group.remove(n.group))}},{id:`balloon`,title:`Balon nad wyspą`,teaser:`Coś unosi się nad horyzontem.`,text:`Kolorowy balon przeleciał wysoko nad wyspą. Rozbitek machał tak długo, aż rozbolało go ramię.`,minDay:3,weight:1.1,cooldown:700,dayOnly:!0,weather:[`clear`,`cloudy`],run:(e,t)=>{let n=new $d;return n.group.position.set(-28,6,-32),n.group.scale.setScalar(.95),t.group.add(n.group),new kf(!1,50,[{at:1,run:()=>{e.director.interrupt(e),e.castaway.faceToward(-20,-10),e.castaway.setReaction(`wave`,5),e.log(`Nad wyspą przelatuje kolorowy balon. Ktoś w koszu macha.`,`rare`,`balloon`),e.shiftNeeds({hope:8,curiosity:9,mood:5})}},{at:8,run:()=>{e.log(`Balon znika za chmurami. Rozbitek nadal macha.`,`info`,`balloon`)}}],e=>{n.update(e),n.group.position.x+=1.2*e},()=>t.group.remove(n.group))}},{id:`seagull`,title:`Mewa z zaskoczenia`,teaser:`Coś białego krąży nad plażą.`,text:`Mewa poderwała mu spodenki i odleciała z nimi nad lagunę. Wrócił w liściu i z godnością, której nikt nie kupił.`,minDay:2,weight:1.15,cooldown:720,dayOnly:!0,weather:[`clear`,`cloudy`],run:(e,t)=>{let n=new af,r=e.castaway.position.clone(),i=new B(r.x+.8,r.y+2.35,r.z-.7);n.group.position.set(r.x+4.5,r.y+2.8,r.z+3.2),t.group.add(n.group);let a=!1;return new kf(!0,17,[{at:.2,run:()=>{e.log(`Nad plażą krąży mewa. Zbyt nisko, zbyt pewnie.`,`rare`,`seagull`),e.showThought(`🐦`,`Ta mewa coś kombinuje.`,`That gull is up to something.`,5)}},{at:1.2,run:()=>{e.director.interrupt(e),e.castaway.stop(),e.castaway.faceToward(n.group.position.x,n.group.position.z),e.castaway.setReaction(`startle`,2.2),e.log(`Mewa pikuje wprost na niego.`,`info`,`seagull`)}},{at:2.4,run:()=>{a=!0,e.castaway.model.setShorts(!1),e.castaway.setReaction(`scared`,3.4),e.shiftNeeds({mood:-5,curiosity:8}),e.showThought(`😳`,`Moje spodenki. Mewa ma moje spodenki.`,`My shorts. The gull has my shorts.`,7),e.log(`Mewa chwyta spodenki i zrywa się do lotu. Rozbitek zostaje w morzu do pasa.`,`rare`,`seagull`)}},{at:4,run:()=>{e.castaway.setReaction(`angry`,2.6),e.log(`Krzyczy. Mewa nie przejmuje się. Mewa ma spodenki.`,`info`,`seagull`)}},{at:9,run:()=>{e.castaway.setReaction(`cry`,2.2),e.log(`Mewa zatacza koło nad laguną i nuci coś, co brzmi jak kpina.`,`info`,`seagull`)}},{at:13,run:()=>{e.castaway.model.setShorts(!0),a=!1,e.showThought(`😤`,`Już nigdy. Nigdy więcej.`,`Never again. Never.`,6),e.log(`Spodenki spadają na piasek. Rozbitek podnosi je bez słowa i zakłada z godnością.`,`rare`,`seagull`),e.shiftNeeds({mood:6,curiosity:4})}}],(e,t)=>{if(n.update(e),t<2.4){let e=Math.min(1,t/2.4);n.group.position.lerpVectors(new B(r.x+4.5,r.y+2.8,r.z+3.2),i,e)}else{let e=(t-2.4)*1.15,i=1.6;n.group.position.set(r.x+Math.cos(e)*i,r.y+3.2+Math.sin(e*1.7)*.25,r.z+Math.sin(e)*i),n.group.rotation.y=-e+Math.PI}},()=>{a&&e.castaway.model.setShorts(!0),e.castaway.setAction(`idle`),t.group.remove(n.group)})}},{id:`pirates`,title:`Lilipucia piraci`,teaser:`Na wodzie pojawia się żagiel wielkości liścia.`,text:`Trójka lilipucich piratów przybiła do brzegu, skradła kokos i odpłynęła, kłócąc się o podział łupu. Rozbitek pomachał im na pożegnanie.`,minDay:4,weight:.85,cooldown:900,dayOnly:!0,weather:[`clear`,`cloudy`],run:(e,t)=>{let n=new of,r=e.castaway.position.x-1.2,i=e.castaway.position.z+5.4;n.group.position.set(r,.03,i),n.group.rotation.y=-.15,t.group.add(n.group);let a=!1;return new kf(!0,24,[{at:.3,run:()=>{e.log(`Na wodzie pojawia się żagiel wielkości liścia. Coś na nim macha.`,`rare`,`pirates`),e.showThought(`🏴‍☠️`,`Piraci? Tacy mali?`,`Pirates? That small?`,6)}},{at:1.4,run:()=>{e.director.interrupt(e),e.castaway.stop(),e.castaway.faceToward(n.group.position.x,n.group.position.z),e.castaway.setReaction(`inspect`,4)}},{at:4,run:()=>{a=!0,e.log(`Łódka przybija do brzegu. Trójka lilipucich piratów zeskakuje na piasek.`,`rare`,`pirates`)}},{at:8,run:()=>{e.castaway.setReaction(`laugh`,3.2),e.log(`Piraci kłócą się o jednego kokosa. Kokos jest większy od nich.`,`info`,`pirates`),e.shiftNeeds({mood:8,curiosity:10})}},{at:13,run:()=>{e.castaway.setReaction(`wave`,3),e.log(`Piraci wracają na łódkę i odpływają, wciąż kłócąc się o kokosa.`,`info`,`pirates`)}},{at:19,run:()=>{e.log(`Na piasku zostaje maleńka flaga i ślad trzech par butów.`,`rare`,`pirates`),e.shiftNeeds({hope:2,curiosity:4})}}],(e,t)=>{n.update(e),a&&t<12?(n.group.position.x-=.035*e,n.group.rotation.z+=Math.sin(t*2)*.01):t>=12&&(n.group.position.x+=.09*e)},()=>{t.group.remove(n.group)})}},{id:`driftwood`,title:`Rekin, który nie był rekinem`,teaser:`W wodzie coś tnie fale.`,text:`Wielka płetwa zbliżała się do brzegu. Okazała się dryfującym pniem z gałęzią. Rozbitek do końca życia będzie o tym opowiadał.`,minDay:3,weight:1,cooldown:700,dayOnly:!0,run:(e,t)=>{let n=new rf,r=0;return n.group.position.set(-10.4,.02,.6),n.group.scale.setScalar(1.35),n.group.rotation.y=Math.PI/2,t.group.add(n.group),new kf(!0,20,[{at:.3,run:()=>{e.director.interrupt(e),e.castaway.faceToward(Af.west.x,Af.west.z),e.castaway.setReaction(`scared`,3),e.log(`W wodzie pojawia się płetwa. Duża płetwa. Bardzo duża.`,`rare`,`driftwood`),e.shiftNeeds({curiosity:8,mood:-3})}},{at:7,run:()=>{n.reveal(),e.fx.splash(n.group.position.x,.08,n.group.position.z,26),e.log(`Płetwa nieruchomieje. To pień z gałęzią. Rozbitek oddycha.`,`weird`,`driftwood`),e.shiftNeeds({curiosity:14,mood:6,hope:3,energy:-2})}},{at:12,run:()=>{e.scripted=!1,e.scriptedActivity=``,e.director.nudge(`gather_wood`,1.5,120)}}],t=>{n.update(t),n.group.position.x<-9&&(n.group.position.x+=.3*t),r+=t,r>1.4&&n.group.position.x<-9&&(r=0,e.fx.splash(n.group.position.x,.08,n.group.position.z,10))},()=>t.group.remove(n.group))}},{id:`turtle`,title:`Żółw morski`,teaser:`Plaża ma niespodziewanego gościa.`,text:`Żółw morski wygrzebał się z oceanu, przeszedł plażę i wrócił do wody. Nikt mu nie przeszkadzał.`,minDay:3,weight:1.3,cooldown:560,dayOnly:!0,weather:[`clear`,`cloudy`],run:(e,t)=>{let n=new ef;n.group.position.set(-4.2,.02,8.3),n.group.rotation.y=Math.PI,n.group.scale.setScalar(1.3),t.group.add(n.group);let r=`in`,i=0;return new kf(!1,32,[{at:.5,run:()=>{e.log(`Na plażę wchodzi żółw morski. Idzie, jakby miał na to cały dzień.`,`rare`,`turtle`),e.fx.splash(n.group.position.x,.08,n.group.position.z,18),e.shiftNeeds({curiosity:8,mood:3})}},{at:2,run:()=>{e.director.interrupt(e),e.castaway.faceToward(n.group.position.x,n.group.position.z),e.castaway.setReaction(`inspect`,4)}},{at:17,run:()=>{e.log(`Żółw zawraca i znika w falach. Zostają ślady na piasku.`,`info`,`turtle`),e.fx.splash(n.group.position.x,.08,n.group.position.z,14),e.shiftNeeds({curiosity:10,mood:5,hope:2})}}],t=>{n.update(t),i+=t,r===`in`?(n.group.position.z-=.24*t,n.group.position.y=Math.max(.02,e.island.heightAt(n.group.position.x,n.group.position.z)),n.group.position.z<6.8&&(r=`wait`,i=0)):r===`wait`?i>4&&(r=`out`,n.group.rotation.y=0):(n.group.position.z+=.2*t,n.group.position.y=Math.max(.02,e.island.heightAt(n.group.position.x,n.group.position.z)))},()=>t.group.remove(n.group))}},{id:`crab_thief`,title:`Krab złodziej`,teaser:`Ktoś kręci się wokół zapasów.`,text:`Krab zakradł się do obozu i ukradł jedzenie. Uciekał bokiem, dumnie, jakby to był jego plan od początku.`,minDay:2,weight:1.4,cooldown:480,run:(e,t)=>{let n=new tf,r={x:e.castaway.position.x+2.4,z:e.castaway.position.z+1.8};n.group.position.set(r.x,e.island.heightAt(r.x,r.z),r.z),t.group.add(n.group);let i=!1;return new kf(!1,16,[{at:.4,run:()=>{e.log(`Krab wchodzi do obozu. Rozgląda się. Udaje, że nie jest krabem.`,`weird`,`crab_thief`)}},{at:5,run:()=>{let t=[`fish`,`coconuts`,`berries`].find(t=>e.itemCount(t)>0);t?(e.addItem(t,-1),i=!0,e.director.interrupt(e),e.castaway.setReaction(`angry`,3.5),e.log(t===`fish`?`Krab porywa rybę i ucieka bokiem przez plażę.`:`Krab porywa jedzenie i ucieka, nie oglądając się za siebie.`,`rare`,`crab_thief`),e.shiftNeeds({mood:-4,curiosity:7,hunger:3})):(e.log(`Krab przyszedł, popatrzył i poszedł. Nie było czego kraść.`,`info`,`crab_thief`),e.shiftNeeds({mood:3,curiosity:6}))}},{at:9,run:()=>{i&&e.log(`Rozbitek grozi krabowi palcem. Krab już dawno go nie słyszy.`,`info`,`crab_thief`)}}],e=>{n.update(e),i?(n.group.position.x+=.9*e,n.group.position.z+=.4*e):n.group.position.x-=.15*e},()=>t.group.remove(n.group))}},{id:`chest`,title:`Tajemnicza skrzynia`,teaser:`Morze wyrzuciło coś ciężkiego.`,text:`Na brzeg wypłynęła skrzynia. W środku było coś, co kiedyś należało do kogoś innego.`,minDay:3,weight:1,cooldown:760,dayOnly:!0,run:(e,t)=>{let n=new nf,r={x:5,z:8.4};n.group.position.set(r.x,.02,r.z),n.group.rotation.y=-.4,t.group.add(n.group);let i=!1;return new kf(!0,24,[{at:.5,run:()=>{e.director.interrupt(e),e.log(`Do brzegu dobija skrzynia. Ciężka, ciemna, z metalowymi okuciami.`,`rare`,`chest`)}},{at:7,run:()=>{i=!0;let t=6.7;n.group.position.set(5,e.island.heightAt(5,t),t),e.castaway.faceToward(5,t),e.castaway.setReaction(`inspect`,3),e.log(`Rozbitek przyklęka i otwiera wieko.`,`info`,`chest`),n.setOpen(!0),e.fx.sparkle(5,.8,t,18)}},{at:9,run:()=>{let t=e.rng.weighted([[`rope`,28],[`wood`,24],[`shells`,18],[`coconuts`,14],[`nothing`,10],[`boot`,6]]);t===`rope`?(e.addItem(`rope`,1),e.log(`W skrzyni leży zwój liny. Prawdziwej, morskiej liny.`,`good`,`chest`)):t===`wood`?(e.addItem(`wood`,2),e.log(`W skrzyni są suche deski. Pachną żywicą, nie solą.`,`good`,`chest`)):t===`shells`?(e.addItem(`shells`,2),e.log(`W skrzyni są muszle. Ktoś je kiedyś zbierał. Jak on.`,`good`,`chest`)):t===`coconuts`?(e.addItem(`coconuts`,2),e.log(`W skrzyni są kokosy. Skrzynia pachnie kokosami do dziś.`,`good`,`chest`)):t===`boot`?e.log(`W skrzyni jest jeden but. Lewy. Rozbitek ma już prawy.`,`weird`,`chest`):(e.log(`Skrzynia jest pusta. Ale sama skrzynia to już coś.`,`info`,`chest`),e.addItem(`wood`,1)),e.shiftNeeds({hope:7,curiosity:12,mood:5}),e.director.nudge(`build_raft`,1.4,180)}},{at:15,run:()=>{e.scripted=!1,e.scriptedActivity=``}}],e=>{n.update(e),!i&&n.group.position.z>6.7&&(n.group.position.z-=.3*e)},()=>t.group.remove(n.group))}},{id:`storm`,title:`Burza z piorunami`,teaser:`Niebo robi się granatowe.`,text:`Nad wyspą przeszła burza. Pioruny biły w ocean, a deszcz zgasił ognisko. Rozbitek przeczekał ją pod liśćmi.`,minDay:4,weight:1.2,cooldown:720,run:(e,t)=>(e.weather.force(`storm`,110),new kf(!1,50,[{at:.4,run:()=>{e.director.interrupt(e),e.log(`Niebo ciemnieje. Nad oceanem zbiera się burza.`,`rare`,`storm`),e.shiftNeeds({curiosity:7,mood:-2})}},{at:3,run:()=>{e.castaway.setReaction(`scared`,3),e.director.nudge(`sleep`,2,150),e.director.nudge(`build_shelter`,1.6,150),e.weather.force(`storm`,100)}},{at:8,run:()=>{e.flag(`fire`)>=1&&(e.setFire(!1),e.log(`Deszcz gasi ognisko. Zostaje syk i dym.`,`bad`,`storm`))}},{at:30,run:()=>{e.log(`Burza odchodzi tak szybko, jak przyszła.`,`info`,`storm`),e.shiftNeeds({mood:2,hope:2,energy:-4}),e.director.nudge(`tend_fire`,1.5,120)}}],()=>void 0,()=>void 0))},{id:`raft_attempt`,title:`Nieudana ucieczka`,teaser:`Tratwa jest gotowa. Morze czeka.`,text:`Rozbitek wypłynął tratwą. Fala przewróciła ją i wyrzuciła go z powrotem na brzeg. Tratwa wróciła w kawałkach.`,minDay:10,weight:0,cooldown:900,run:(e,t)=>{let n=e.structures.raft,r=n.group.position.clone(),i=n.group.rotation.y,a=e.island.getSpot(`raft_launch`)??e.island.getSpot(`raft`),o=a?.x??8.35,s=a?.z??-.35;e.director.interrupt(e),e.castaway.stop(),e.castaway.setYOverride(.16),e.castaway.position.set(n.group.position.x+.15,.16,n.group.position.z),e.castaway.facing=Math.PI/2,e.castaway.facingTarget=Math.PI/2,e.castaway.setAction(`row`,`paddle`);let c=!1;return new kf(!0,40,[{at:.3,run:()=>{e.log(`Rozbitek wypycha tratwę na wodę. Wiosła są gotowe.`,`story`,`raft_attempt`),e.shiftNeeds({hope:10,mood:5})}},{at:5,run:()=>{e.log(`Tratwa odbija od brzegu. Wiosła pracują, wyspa maleje.`,`info`,`raft_attempt`)}},{at:21,run:()=>{c=!0,e.splash(55),e.castaway.setReaction(`fishFall`,2.4),e.log(`Wielka fala uderza w burtę. Tratwa przechyla się gwałtownie.`,`rare`,`raft_attempt`),e.shiftNeeds({hope:-8,mood:-8,energy:-8,curiosity:3})}},{at:25,run:()=>{e.castaway.spawn(o,s,-Math.PI/2),e.castaway.setYOverride(null),e.castaway.setReaction(`stumble`,2.4),e.splash(35),e.log(`Woda wyrzuca go na piasek. Tratwa wraca za nim, w kawałkach.`,`rare`,`raft_attempt`)}},{at:30,run:()=>{e.addFlag(`raft`,-2),e.refreshBuilds(),e.setFlag(`packed`,0),e.addFlag(`escapeAttempts`,1),e.shiftNeeds({hope:-11,mood:-7}),e.keeper.raftLaunches++,e.log(`Nie tym razem. Ale tratwa wciąż tu jest — i on też.`,`story`,`raft_attempt`),e.director.nudge(`repair_raft`,2,240)}}],(t,r)=>{r>4&&r<21?(n.group.position.x+=.15*t,e.castaway.position.x=n.group.position.x+.12,e.castaway.position.z=n.group.position.z,e.castaway.position.y=.16,n.group.rotation.z=Math.sin(r*.7)*.03):c&&(n.group.position.x-=.24*t,n.group.rotation.z+=(.22-n.group.rotation.z)*t,n.group.rotation.x=Math.sin(r*2.2)*.05)},()=>{n.group.position.copy(r),n.group.rotation.set(0,i,0),e.castaway.setYOverride(null),e.castaway.setAction(`idle`),e.castaway.spawn(o,s,-Math.PI/2)})}}],Mf=new Map(jf.map(e=>[e.id,e])),Nf=jf.map(e=>({id:e.id,title:e.title,teaser:e.teaser,minDay:e.minDay})),Pf=class{group=new H;activeId=``;lastEventTitle=``;active=null;cooldowns=new Map;timer;grace;rng;constructor(e,t){this.rng=t.fork(4242),this.timer=this.rng.float(280,460),this.grace=180,e.add(this.group)}update(e,t){for(let[t,n]of this.cooldowns)n>0&&this.cooldowns.set(t,Math.max(0,n-e));if(this.grace=Math.max(0,this.grace-e),this.active){if(this.active.instance.update(e,t)){let{def:e,instance:n}=this.active;n.dispose(t),n.scripted&&(t.scripted=!1,t.scriptedActivity=``),this.cooldowns.set(e.id,e.cooldown),this.active=null,this.activeId=``,this.timer=this.rng.float(420,780)}}else t.scripted||(this.timer-=e,!(this.timer>0||this.grace>0)&&(this.timer=this.rng.float(60,150),this.tryTrigger(t)))}tryTrigger(e){let t=e.clock.day,n=[];for(let r of jf){if(r.id===`raft_attempt`||t<r.minDay||r.nightOnly&&!e.clock.isNight||r.dayOnly&&e.clock.isNight||r.weather&&!r.weather.includes(e.weather.state.kind)||(this.cooldowns.get(r.id)??0)>0)continue;let i=e.discoveries.includes(r.id),a=r.weight*(i?.45:1);(r.id===`turtle`||r.id===`crab_thief`)&&(a*=1.25),e.needs.curiosity>70&&(a*=1.2),n.push([r,a])}if(n.length===0)return;let r=this.rng.weighted(n);this.triggerDef(r,e)}triggerDef(e,t){if(this.active)return!1;t.director.interrupt(t),t.currentAction=null,t.currentSpotLabel=``;let n=e.run(t,this);return n?(this.active={def:e,instance:n},this.activeId=e.id,this.lastEventTitle=e.title,this.cooldowns.set(e.id,e.cooldown),this.timer=this.rng.float(420,780),t.discover(e.id,e.title,e.text)&&(t.log(e.text,`rare`,e.id),t.bus.emit(`toast`,{text:`Odkrycie: ${e.title}`})),t.scripted=n.scripted,n.scripted&&(t.scriptedActivity=e.title),!0):!1}force(e,t){let n=Mf.get(e);return n?(this.active&&(this.active.instance.dispose(t),this.active=null,this.activeId=``,t.scripted=!1,t.scriptedActivity=``),this.grace=0,this.triggerDef(n,t)):!1}startRaftAttempt(e){if(this.active||!e.structures.raft)return!1;let t=Mf.get(`raft_attempt`);return t?this.triggerDef(t,e):this.raftAttempt(e)}raftAttempt(e){return!1}get busy(){return this.active!==null}get cooldownSnapshot(){return Object.fromEntries(this.cooldowns)}};function Ff(e){return Math.max(0,Math.min(100,e))}function If(){return{fish:0,coconuts:0,shells:0,wood:0,rope:0,berries:0}}function Lf(){return{fish:0,coconuts:0,shells:0,wood:0,rope:0,berries:0,fishCooked:0,fishCaught:0,coconutsEaten:0,firesLit:0,raftLaunches:0,bottlesSent:0,actionsDone:0,rareSeen:0,daysSurvived:0}}var Rf=new Set([`fire`,`fireFuel`,`shelter`,`raft`,`sos`,`castle`,`packed`]),zf={fire:0,fireFuel:55,shelter:0,raft:0,sos:0,castle:0,packed:0,spearSharp:0,openedCoconut:0,cookedFish:0,bottlesSent:0,escapeAttempts:0,coconutsOnPalm:3,bush0:4,bush1:4,bush2:4,bush3:4,raftReadyNotified:0,raftHalfNotified:0},Bf={fire:Y.fire,fire_side:Y.fire,shelter:Y.shelter,shelter_inside:Y.shelter,palm:Y.palm,palm_shade:Y.palm,raft:Y.raft,raft_launch:Y.raft,sos:Y.sos,sandcastle:Y.sandcastle,wreck:Y.wreck,lookout:Y.lookout,bush1:{x:.8,z:-1.2},bush2:{x:-5,z:2.1},bush3:{x:-1.2,z:3.7},bush4:{x:4.6,z:.9},fishing:{x:-20,z:3},beach_west:{x:-20,z:6},beach_south:{x:0,z:20},beach_east:{x:20,z:0},beach_north:{x:0,z:-20},bottle_shore:{x:-20,z:10},horizon_watch:{x:-20,z:14},shore_north:{x:8,z:-20},shore_south:{x:8,z:20}},Vf=[`Wyspa wstaje razem z nim. Piasek jest chłodny, morze spokojne.`,`Nowy dzień. Rozbitek sprawdza, czy horyzont się nie zmienił.`,`Wstaje, przeciąga się i nasłuchuje. Wyspa brzmi tak samo.`,`Dzień zaczyna się od liczenia fal. Fal jest zawsze tyle samo.`,`Znowu słońce. Znowu piasek. Znowu on. Ale jakoś chce mu się żyć.`],Hf=class{scene;bus;settings;seed;rng;island;structures;holidays;sky;ocean;dayNight;weather;castaway;fx;footprints;birds;crab;director;story;rare;needs;inventory;keeper;clock;simTime=0;scripted=!1;scriptedActivity=``;currentActivity=`rozgląda się po wyspie`;currentSpotLabel=``;thought=null;thoughtNext=7;discoveries=[];flags={...zf};bushStock=[4,4,4,4];coconutStockValue=3;journal=[];logId=1;lastDay=1;needsEmitTimer=0;interruptTimer=0;lastWeatherKind=`clear`;stormLogAt=-999;lastStepPos=new B;constructor(e,t,n,r){this.scene=e,this.bus=t,this.settings=n,this.seed=r?.seed??(Date.now()^1597463007)>>>0,this.rng=new gu(this.seed),this.island=new zu(this.seed),this.holidays=new Yu(this.island.group,this.island),this.structures=new Ku(this.island,this.rng.fork(3)),this.island.prepareSpots(),this.sky=new $u(this.rng.fork(4)),this.ocean=new nd(this.island.shorelineTexture,this.island.shoreHalfSize),this.dayNight=new ad(e,this.sky,this.ocean),this.weather=new ld(e,this.rng.fork(5)),e.add(this.island.group,this.structures.group,this.sky.group,this.ocean.mesh);let i=this.island.getSpot(`grass_center`)??{x:-3.8,z:.6,y:1,key:`grass_center`,label:`środek wyspy`};this.castaway=new Wd(this.island,i.x,i.z),this.castaway.facing=.4,this.castaway.facingTarget=.4,e.add(this.castaway.root),this.fx=new Kd(e),this.footprints=new qd(e),this.birds=new Yd(e,this.rng.fork(12)),this.crab=new sf(this.island,this.rng.fork(13)),e.add(this.crab.group),this.lastStepPos.copy(this.castaway.position),this.director=new vf(Of),this.story=new bf,this.rare=new Pf(e,this.rng.fork(6)),this.needs={hunger:38,energy:80,boredom:52,mood:62,hope:56,curiosity:58},this.inventory=If(),this.keeper=Lf(),this.inventory.wood=4,this.inventory.rope=1;let a=r?.fraction,o=r?.clockMode??n.value.clock,s=o===`fast`&&a!==void 0&&(a<.245||a>.785)?.345:a??.345;this.clock=new _u({mode:o,dayLengthMin:r?.dayLengthMin??n.value.dayLengthMin,day:r?.day??1,fraction:s,totalSeconds:r?.totalSeconds??0}),this.weather.onLightning=()=>this.bus.emit(`cue`,{name:`thunder`}),this.bus.on(`settings:changed`,e=>{this.clock.setMode(e.clock),this.clock.setDayLength(e.dayLengthMin)}),r&&r.version===1?(this.applySave(r),this.log(`Wyspa pamięta poprzednie dni. Rozbitek wraca do swoich spraw.`,`story`)):(this.log(`Rozbitek budzi się na piasku. Wyspa jest mała, ale wystarczająco duża.`,`story`),this.log(`Ma dwie deski, kawałek liny i upór. Reszta się znajdzie.`,`info`),this.log(`Nikt nim nie steruje. Wystarczy patrzeć.`,`info`)),this.lastDay=this.clock.day,this.syncBuilds(),this.emitActivity()}applySave(e){if(this.rng.state=e.rngState,e.needs)for(let t of Object.keys(this.needs))this.needs[t]=Ff(Number(e.needs[t]??this.needs[t]));Object.assign(this.inventory,If(),e.inventory??{}),Object.assign(this.keeper,Lf(),e.keeper??{}),this.flags={...zf,...e.flags??{}},this.bushStock=[0,1,2,3].map(e=>Number(this.flags[`bush${e}`]??4)),this.coconutStockValue=Math.max(0,Math.min(3,Number(this.flags.coconutsOnPalm??3))),this.discoveries=Array.isArray(e.discoveries)?[...e.discoveries]:[],this.journal=Array.isArray(e.journal)?[...e.journal].slice(-80):[],this.logId=this.journal.reduce((e,t)=>Math.max(e,t.id),0)+1,this.director.restore(e),e.castaway&&Number.isFinite(e.castaway.x)&&this.castaway.teleport(e.castaway.x,e.castaway.z,e.castaway.rot??0),this.lastDay=this.clock.day}toSave(){let e=this.director.snapshot();this.flags.bush0=this.bushStock[0],this.flags.bush1=this.bushStock[1],this.flags.bush2=this.bushStock[2],this.flags.bush3=this.bushStock[3],this.flags.coconutsOnPalm=this.coconutStockValue;let t=this.clock.info;return{version:1,savedAt:Date.now(),seed:this.seed,rngState:this.rng.state,totalSeconds:this.clock.totalSeconds,day:t.day,fraction:t.fraction,clockMode:this.clock.mode,dayLengthMin:Math.round(this.clock.dayLengthSec/60),needs:{...this.needs},inventory:{...this.inventory},keeper:{...this.keeper},flags:{...this.flags},cooldowns:e.cooldowns,discoveries:[...this.discoveries],journal:[...this.journal],castaway:{x:this.castaway.position.x,z:this.castaway.position.z,rot:this.castaway.facing},actionHistory:e.history}}flag(e){return this.flags[e]??0}setFlag(e,t){let n={fire:1,shelter:2,raft:6,sos:2,castle:3,packed:1};n[e]!==void 0&&(t=Math.max(0,Math.min(n[e],t))),this.flags[e]=t,Rf.has(e)&&this.syncBuilds(),e===`fireFuel`&&this.structures.campfire.setBig(t>80)}addFlag(e,t){this.setFlag(e,(this.flags[e]??0)+t)}itemCount(e){return this.inventory[e]??0}hasItem(e,t=1){return this.itemCount(e)>=t}addItem(e,t){this.inventory[e]=Math.max(0,(this.inventory[e]??0)+t),e===`fish`&&t>0&&(this.keeper.fish=this.inventory.fish)}coconutStock(){return this.coconutStockValue}takeCoconuts(e){let t=Math.min(this.coconutStockValue,Math.max(0,Math.floor(e)));return this.coconutStockValue-=t,this.island.palm.setCoconuts(this.coconutStockValue),t}berryStock(e){return this.bushStock[e]??0}berryTotal(){return this.bushStock.reduce((e,t)=>e+t,0)}takeBerries(e){let t=Math.max(0,Math.floor(e)),n=0;for(let e=0;e<this.bushStock.length&&t>0;e++)for(;t>0&&this.bushStock[e]>0;)this.bushStock[e]--,t--,n++;return this.island.setBushStocks(this.bushStock),n}setBerryStock(e,t){this.bushStock[e]=Math.max(0,Math.min(4,Math.round(t))),this.island.setBushStocks(this.bushStock)}shiftNeeds(e){let t={mood:.22,hope:.15,curiosity:.2};for(let[n,r]of Object.entries(e)){if(typeof r!=`number`||!Number.isFinite(r))continue;let e=r,i=t[n];i!==void 0&&e>0&&(e*=i),n===`boredom`&&e<0&&(e*=.25),this.needs[n]=Ff(this.needs[n]+e)}}log(e,t=`info`,n){let r=this.clock.info,i={id:this.logId++,day:r.day,time:r.timeString,text:e,kind:t,tag:n};this.journal.push(i),this.journal.length>220&&this.journal.shift(),this.bus.emit(`log`,i)}discover(e,t,n){return!this.discoveries.includes(e)&&(this.discoveries.push(e),this.keeper.rareSeen=this.discoveries.length,this.bus.emit(`rare:event`,{id:e,title:t,text:n}),!0)}refreshBuilds(){this.syncBuilds()}syncBuilds(){let e=this.flag(`fire`)>=1;this.structures.campfire.setLit(e,this.flag(`fireFuel`)>80),this.structures.shelter.setLevel(this.flag(`shelter`)),this.structures.raft.setProgress(this.flag(`raft`)),this.structures.sos.setLevel(this.flag(`sos`)),this.structures.sandcastle.setLevel(this.flag(`castle`)),this.island.palm.setCoconuts(this.coconutStockValue),this.island.setBushStocks(this.bushStock)}setFire(e,t=!1){this.flags.fire=+!!e,e&&this.flags.fireFuel<=0&&(this.flags.fireFuel=45),this.structures.campfire.setLit(e,t||this.flags.fireFuel>80)}checkRaftMilestone(){let e=this.flag(`raft`);e>=6&&this.flag(`raftReadyNotified`)<1?(this.setFlag(`raftReadyNotified`,1),this.log(`Tratwa jest gotowa. Wystarczy spakować zapasy i odbić od brzegu.`,`story`),this.director.nudge(`pack_supplies`,2.2,400),this.director.nudge(`launch_raft`,1.8,400),this.shiftNeeds({hope:10,mood:6})):e>=3&&this.flag(`raftHalfNotified`)<1&&(this.setFlag(`raftHalfNotified`,1),this.log(`Połowa tratwy stoi na plaży. Wygląda jak tratwa. To dobry znak.`,`story`),this.shiftNeeds({hope:6,mood:3}))}startRaftAttempt(){this.rare.startRaftAttempt(this)}splash(e=20){let t=Math.sin(this.castaway.facing),n=Math.cos(this.castaway.facing);this.fx.splash(this.castaway.position.x+t*.9,.08,this.castaway.position.z+n*.9,e)}dust(e=12){this.fx.dust(this.castaway.position.x,this.castaway.position.y,this.castaway.position.z,e)}fireBurst(e=24){let t=this.structures.campfire.position;this.fx.fireBurst(t.x,t.y+.45,t.z,e)}sparkle(e=12){let t=this.castaway.getFocusPoint();this.fx.sparkle(t.x,t.y+.4,t.z,e)}onActionStart(e,t){this.currentAction=e,this.actionThought(e),this.currentSpotLabel=t?.label??``,this.emitActivity(),this.bus.emit(`action:start`,{id:e.id,label:e.label,spot:t?.label})}onActionCancelled(e){this.currentAction=null,this.currentSpotLabel=``,this.bus.emit(`action:end`,{id:e.id,label:e.label,outcome:`przerwane`}),this.emitActivity()}showThought(e,t,n,r=6){this.thought={icon:e,pl:t,en:n,until:this.simTime+r},this.thoughtNext=this.simTime+this.rng.float(9,17)}updateThought(e){this.thought&&this.simTime>=this.thought.until&&(this.thought=null),!this.thought&&(this.thoughtNext-=e,this.thoughtNext<=0&&this.think())}actionThought(e){if(this.thought&&this.rng.chance(.7))return;let t=e.id,n=`💭`,r=`Co teraz?`,i=`What now?`;if(t.includes(`fish`))n=`🐟`,r=`Rybko, ugryź. Tylko raz.`,i=`Come on, fish. Just once.`;else if(t===`sleep`||t===`nap`)n=`💤`,r=`Sen. Wreszcie.`,i=`Sleep. Finally.`;else if(t.includes(`fire`)||t.includes(`cook`))n=`🔥`,r=`Ogień. Ciepło. Może i jedzenie.`,i=`Fire. Warmth. Maybe food, too.`;else if(t.includes(`raft`)||t.includes(`row`))n=`🛶`,r=`Może tym razem dopłynę.`,i=`Maybe this time I will make it.`;else if(t.includes(`shelter`)||t.includes(`repair`))n=`🛖`,r=`Dach nad głową. Luksus.`,i=`A roof over my head. Luxury.`;else if(t.includes(`coconut`)||t.includes(`palm`)||t.includes(`shake`))n=`🥥`,r=`Kokos. Zawsze jest kokos.`,i=`Coconut. There is always coconut.`;else if(t.includes(`sit`)||t.includes(`stargaze`)||t.includes(`cloud`))n=`🌅`,r=`Horyzont. Ciągle ten sam.`,i=`The horizon. Always the same.`;else if(t.includes(`bottle`))n=`🍾`,r=`Może ktoś przeczyta.`,i=`Maybe someone will read it.`;else if(t.includes(`explore`)||t.includes(`wreck`)||t.includes(`dig`))n=`🧭`,r=`Co jeszcze kryje ta wyspa?`,i=`What else is hiding on this island?`;else return;this.showThought(n,r,i,this.rng.float(5.5,8))}think(){let e=100-this.needs.hunger,t=this.needs.energy,n=this.needs.hope,r=this.needs.boredom,i=this.needs.curiosity,a=this.currentAction?.id??``;if(e<35)this.showThought(`🐟`,`Zjadłbym rybę. Dużą.`,`I could eat a whole fish.`,6);else if(t<30)this.showThought(`💤`,`Pięć minut snu. Tylko pięć.`,`Five minutes of sleep. Just five.`,6);else if(n<35)this.showThought(`⛵`,`Dziś może przypłynie statek. Może.`,`A ship might come today. Maybe.`,6);else if(r>68)this.showThought(`🪵`,`Może zbuduję coś. Cokolwiek.`,`Maybe I will build something. Anything.`,6);else if(i>76)this.showThought(`🌊`,`Co jest za horyzontem?`,`What is beyond the horizon?`,6);else if(a.includes(`fish`))this.showThought(`🐟`,`Rybko, ugryź. Tylko raz.`,`Come on, fish. Just once.`,6);else if(a.includes(`raft`))this.showThought(`🛶`,`Może tym razem dopłynę.`,`Maybe this time I will make it.`,6);else{let e=this.rng.pick([{icon:`🦀`,pl:`Czy ten krab mnie obgaduje?`,en:`Is that crab talking about me?`},{icon:`🥥`,pl:`Kokos. Znów kokos.`,en:`Coconut. Coconut again.`},{icon:`🧜‍♀️`,pl:`Ta syrena. Czy ona tu była?`,en:`That mermaid. Was she really here?`},{icon:`🏝️`,pl:`Może zostanę. Tu jest spokój.`,en:`Maybe I will stay. It is peaceful here.`},{icon:`🪵`,pl:`Gdybym miał choć jeden gwóźdź...`,en:`If I only had one nail...`},{icon:`☀️`,pl:`Słońce. Znowu słońce.`,en:`Sun. Sun again.`}]);this.showThought(e.icon,e.pl,e.en,5.5)}}faceAction(e,t){let n=Bf[t.key];n?this.castaway.faceToward(n.x,n.z):t.facing!==void 0&&Number.isFinite(t.facing)?this.castaway.facingTarget=t.facing:e.location&&this.castaway.faceToward(t.x*2,t.z*2)}pickOutcome(e){let t=e.outcomes.map(e=>[e,Math.max(0,e.weight)]);return this.rng.weighted(t)}completeAction(e,t){if(this.keeper.actionsDone++,t.effects&&this.shiftNeeds(t.effects),t.items)for(let[e,n]of Object.entries(t.items))this.addItem(e,n);if(t.flags)for(let[e,n]of Object.entries(t.flags))this.setFlag(e,n);if(t.flagAdd)for(let[e,n]of Object.entries(t.flagAdd))this.addFlag(e,n);t.onApply?.(this);let n=t.kind??`info`;(n!==`info`||this.rng.chance(.4))&&this.log(t.text,n,e.story??e.category),this.currentAction=null,this.currentSpotLabel=``,this.checkRaftMilestone(),this.refreshBuilds(),this.bus.emit(`action:end`,{id:e.id,label:e.label,outcome:t.text}),this.emitActivity(),this.emitNeeds()}currentAction=null;update(e){let t=this.settings.value.speed,n=Math.min(.16,Math.max(1e-4,e)*t);this.simTime+=n,this.clock.update(n),this.tickNeeds(n),this.weather.update(n,this.clock.info)&&this.onWeatherChanged(),this.updateFire(n),this.island.update(n,this.weather.state.wind,this.simTime),this.structures.update(n,this.simTime,this.dayNight.nightFactor,this.weather.state.wind),this.castaway.update(n,this.simTime),this.updateFootprints(n),this.birds.update(n,this.simTime,this.dayNight.nightFactor,this.weather.state.kind===`storm`),this.crab.update(n,this.castaway.position),this.castaway.model.setHat(this.clock.day>=3),this.castaway.model.setNecklace(this.inventory.shells>=3),this.director.update(n,this),this.story.update(n,this),this.rare.update(n,this),this.dayNight.update(this.clock.info,this.weather.state,this.simTime,this.weather.flash,Math.min(.05,e)),this.fx.update(Math.min(.05,e)),this.handleDayChange(),this.checkInterruptions(n),this.updateThought(n),this.emitActivity(),this.needsEmitTimer-=n,this.needsEmitTimer<=0&&(this.needsEmitTimer=.4,this.emitNeeds())}updateFootprints(e){let t=this.castaway.position,n=t.x-this.lastStepPos.x,r=t.z-this.lastStepPos.z,i=Math.hypot(n,r);i>2?this.lastStepPos.copy(t):i>.27&&!this.scripted&&!this.castaway.isWading&&this.island.layerAt(t.x,t.z)===2&&(this.footprints.add(t.x,this.island.heightAt(t.x,t.z)+.004,t.z,this.castaway.facing),this.lastStepPos.copy(t)),this.footprints.update(e)}tickNeeds(e){let t=e/60,n=this.castaway.currentAnimation===`sleep`||this.castaway.currentAnimation===`nap`;this.needs.hunger+=2*t,this.needs.energy-=(n?.12:1.55)*t,this.needs.boredom+=(n?.15:3.6)*t,this.needs.mood+=(50-this.needs.mood)*.05*t,this.needs.hope-=.7*t,this.needs.curiosity+=.8*t,this.needs.curiosity>45&&(this.needs.curiosity-=1*t),this.needs.hunger>80&&(this.needs.mood-=.8*t),this.needs.energy<22&&(this.needs.mood-=.4*t),this.needs.boredom>78&&(this.needs.mood-=.5*t),this.needs.mood>72&&(this.needs.hope+=.12*t),this.flag(`fire`)>=1&&this.clock.isNight&&(this.needs.mood+=.25*t);for(let e of Object.keys(this.needs))this.needs[e]=Ff(this.needs[e]);this.needs.energy<4&&!this.scripted&&!this.director.busy&&(this.director.nudge(`sleep`,4,60),this.director.force(`sleep`,this))}updateFire(e){if(this.flag(`fire`)<1)return;let t=this.flag(`fireFuel`),n=.26*e,r=this.weather.state.rain;r>.2&&(n+=r*1.6*e),this.weather.state.kind===`storm`&&(n+=2.2*e),t-=n,t<=0?(this.flags.fireFuel=0,this.setFire(!1),this.log(`Ognisko gaśnie. Zostaje popiół i dym.`,`info`)):(this.flags.fireFuel=Math.min(100,t),this.structures.campfire.setBig(t>80))}onWeatherChanged(){let e=this.weather.target;e!==this.lastWeatherKind&&(this.lastWeatherKind=e,e===`storm`?this.log(`Nad wyspą zbierają się chmury. Będzie burza.`,`info`):e===`rain`?this.log(`Zaczyna padać. Krople bębnią o liście palmy.`,`info`):e===`fog`?this.log(`Mgła wychodzi z oceanu i siada na wyspie.`,`info`):e===`clear`&&this.log(`Chmury się rozchodzą. Wyspa znów jest w słońcu.`,`info`))}handleDayChange(){if(this.clock.day===this.lastDay)return;let e=Math.min(6,this.clock.day-this.lastDay);for(let t=0;t<e;t++)this.lastDay+=1,this.onNewDay(this.lastDay)}onNewDay(e){this.keeper.daysSurvived=Math.max(0,e-1),this.coconutStockValue=Math.min(3,this.coconutStockValue+1),this.bushStock=this.bushStock.map(e=>Math.min(4,e+1)),this.story.onNewDay(e,this);let t=this.clock.info;this.log(`Dzień ${e}. ${this.rng.pick(Vf)}`,`story`),t.phase===`dawn`&&this.bus.emit(`cue`,{name:`bird`}),this.refreshBuilds(),this.checkRaftMilestone()}checkInterruptions(e){if(this.scripted||(this.interruptTimer-=e,this.interruptTimer>0||!this.director.busy))return;let t=this.director.runner.def;t&&this.weather.state.kind===`storm`&&!t.tags?.includes(`shelter`)&&!t.tags?.includes(`indoor`)&&this.rng.chance(.6)&&(this.director.interrupt(this),this.director.nudge(`sleep`,2.2,120),this.director.nudge(`build_shelter`,1.3,120),this.simTime-this.stormLogAt>100&&(this.stormLogAt=this.simTime,this.log(`Burza przegania go w stronę zadaszenia.`,`info`)),this.interruptTimer=26)}emitActivity(){let e;this.scripted?(e=this.scriptedActivity||`obserwuje coś niezwykłego`,this.currentSpotLabel&&=``):e=this.currentAction?this.currentAction.label:this.director.runner.def?this.director.runner.def.label:this.castaway.isWalking?`idzie przez wyspę`:this.director.restTimer>.5?`rozgląda się po wyspie`:`myśli o czymś`,e!==this.currentActivity&&(this.currentActivity=e,this.bus.emit(`activity:changed`,{text:e,spot:this.currentSpotLabel}))}emitNeeds(){this.bus.emit(`needs:changed`,this.needs)}forceRare(e){return this.rare.force(e,this)}forceAction(e){return this.director.force(e,this)}forceWeather(e){this.weather.force(e,90),this.log(`Pogoda: ${this.weather.state.label}. (diagnostyka)`,`info`)}skipHours(e){this.clock.advanceHours(e)}resetAI(){this.director.reset(this)}get journalEntries(){return this.journal}get actionCount(){return Of.length}get bushStocks(){return this.bushStock}get fireLit(){return this.flag(`fire`)>=1}dispose(){this.scene.remove(this.island.group,this.structures.group,this.sky.group,this.ocean.mesh,this.castaway.root,this.rare.group,this.birds.group,this.crab.group)}},Uf=class{callback;raf=0;last=0;acc=0;frames=0;elapsed=0;pausedByUser=!1;hidden=!1;fps=60;slowFrames=0;constructor(e){this.callback=e,document.addEventListener(`visibilitychange`,()=>{this.hidden=document.hidden,this.last=0})}start(){this.raf||=(this.last=0,requestAnimationFrame(this.tick))}stop(){this.raf&&cancelAnimationFrame(this.raf),this.raf=0,this.last=0}setPaused(e){this.pausedByUser=e,this.last=0}get paused(){return this.pausedByUser}get isHidden(){return this.hidden}tick=e=>{if(this.raf=requestAnimationFrame(this.tick),this.hidden||this.pausedByUser||!this.last){this.last=e;return}let t=(e-this.last)/1e3;this.last=e,!(!Number.isFinite(t)||t<=0)&&(t=Math.min(t,.06),this.elapsed+=t,this.frames++,this.acc+=t,this.acc>.35&&(this.fps=this.frames/this.acc,this.fps<40?this.slowFrames++:this.slowFrames=Math.max(0,this.slowFrames-1),this.frames=0,this.acc=0),this.callback(t,this.elapsed))}},Wf={type:`change`},Gf={type:`start`},Kf={type:`end`},qf=new li,Jf=new Br,Yf=Math.cos(70*Mt.DEG2RAD),Xf=new B,Zf=2*Math.PI,Qf={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},$f=1e-6,ep=class extends Bo{constructor(n,r=null){super(n,r),this.state=Qf.NONE,this.target=new B,this.cursor=new B,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:`ArrowLeft`,UP:`ArrowUp`,RIGHT:`ArrowRight`,BOTTOM:`ArrowDown`},this.mouseButtons={LEFT:e.ROTATE,MIDDLE:e.DOLLY,RIGHT:e.PAN},this.touches={ONE:t.ROTATE,TWO:t.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle=`auto`,this._domElementKeyEvents=null,this._lastPosition=new B,this._lastQuaternion=new Nt,this._lastTargetPosition=new B,this._quat=new Nt().setFromUnitVectors(n.up,new B(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new jo,this._sphericalDelta=new jo,this._scale=1,this._panOffset=new B,this._rotateStart=new z,this._rotateEnd=new z,this._rotateDelta=new z,this._panStart=new z,this._panEnd=new z,this._panDelta=new z,this._dollyStart=new z,this._dollyEnd=new z,this._dollyDelta=new z,this._dollyDirection=new B,this._mouse=new z,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=np.bind(this),this._onPointerDown=tp.bind(this),this._onPointerUp=rp.bind(this),this._onContextMenu=up.bind(this),this._onMouseWheel=op.bind(this),this._onKeyDown=sp.bind(this),this._onTouchStart=cp.bind(this),this._onTouchMove=lp.bind(this),this._onMouseDown=ip.bind(this),this._onMouseMove=ap.bind(this),this._interceptControlDown=dp.bind(this),this._interceptControlUp=fp.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e===`grab`?this.domElement.style.cursor=`grab`:this.domElement.style.cursor=`auto`}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener(`pointerdown`,this._onPointerDown),this.domElement.addEventListener(`pointercancel`,this._onPointerUp),this.domElement.addEventListener(`contextmenu`,this._onContextMenu),this.domElement.addEventListener(`wheel`,this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener(`keydown`,this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction=`none`}disconnect(){this.state=Qf.NONE,this.domElement.removeEventListener(`pointerdown`,this._onPointerDown),this.domElement.ownerDocument.removeEventListener(`pointermove`,this._onPointerMove),this.domElement.ownerDocument.removeEventListener(`pointerup`,this._onPointerUp),this.domElement.removeEventListener(`pointercancel`,this._onPointerUp),this.domElement.removeEventListener(`wheel`,this._onMouseWheel),this.domElement.removeEventListener(`contextmenu`,this._onContextMenu),this.stopListenToKeyEvents();let e=this.domElement.getRootNode();e.removeEventListener(`keydown`,this._interceptControlDown,{capture:!0}),e.removeEventListener(`keyup`,this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction=``,this.domElement.style.cursor=`auto`}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener(`keydown`,this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener(`keydown`,this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Wf),this.update(),this.state=Qf.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){let t=this.object.position;Xf.copy(t).sub(this.target),Xf.applyQuaternion(this._quat),this._spherical.setFromVector3(Xf),this.autoRotate&&this.state===Qf.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(n)&&isFinite(r)&&(n<-Math.PI?n+=Zf:n>Math.PI&&(n-=Zf),r<-Math.PI?r+=Zf:r>Math.PI&&(r-=Zf),n<=r?this._spherical.theta=Math.max(n,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+r)/2?Math.max(n,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let i=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let e=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),i=e!=this._spherical.radius}if(Xf.setFromSpherical(this._spherical),Xf.applyQuaternion(this._quatInverse),t.copy(this.target).add(Xf),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let e=null;if(this.object.isPerspectiveCamera){let t=Xf.length();e=this._clampDistance(t*this._scale);let n=t-e;this.object.position.addScaledVector(this._dollyDirection,n),this.object.updateMatrixWorld(),i=!!n}else if(this.object.isOrthographicCamera){let t=new B(this._mouse.x,this._mouse.y,0);t.unproject(this.object);let n=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),i=n!==this.object.zoom;let r=new B(this._mouse.x,this._mouse.y,0);r.unproject(this.object),this.object.position.sub(r).add(t),this.object.updateMatrixWorld(),e=Xf.length()}else console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled.`),this.zoomToCursor=!1;e!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(e).add(this.object.position):(qf.origin.copy(this.object.position),qf.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(qf.direction))<Yf?this.object.lookAt(this.target):(Jf.setFromNormalAndCoplanarPoint(this.object.up,this.target),qf.intersectPlane(Jf,this.target))))}else if(this.object.isOrthographicCamera){let e=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),e!==this.object.zoom&&(this.object.updateProjectionMatrix(),i=!0)}return this._scale=1,this._performCursorZoom=!1,i||this._lastPosition.distanceToSquared(this.object.position)>$f||8*(1-this._lastQuaternion.dot(this.object.quaternion))>$f||this._lastTargetPosition.distanceToSquared(this.target)>$f?(this.dispatchEvent(Wf),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e===null?Zf/60/60*this.autoRotateSpeed:Zf/60*this.autoRotateSpeed*e}_getZoomScale(e){let t=Math.abs(e*.01);return .95**(this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Xf.setFromMatrixColumn(t,0),Xf.multiplyScalar(-e),this._panOffset.add(Xf)}_panUp(e,t){this.screenSpacePanning===!0?Xf.setFromMatrixColumn(t,1):(Xf.setFromMatrixColumn(t,0),Xf.crossVectors(this.object.up,Xf)),Xf.multiplyScalar(e),this._panOffset.add(Xf)}_pan(e,t){let n=this.domElement;if(this.object.isPerspectiveCamera){let r=this.object.position;Xf.copy(r).sub(this.target);let i=Xf.length();i*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*i/n.clientHeight,this.object.matrix),this._panUp(2*t*i/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - pan disabled.`),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.`),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.`),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),r=e-n.left,i=t-n.top,a=n.width,o=n.height;this._mouse.x=r/a*2-1,this._mouse.y=-(i/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Zf*this._rotateDelta.x/t.clientHeight),this._rotateUp(Zf*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Zf*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Zf*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Zf*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Zf*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(n,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(n,r)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,i=Math.sqrt(n*n+r*r);this._dollyStart.set(0,i)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateEnd.set(n,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Zf*this._rotateDelta.x/t.clientHeight),this._rotateUp(Zf*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(n,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,i=Math.sqrt(n*n+r*r);this._dollyEnd.set(0,i),this._dollyDelta.set(0,(this._dollyEnd.y/this._dollyStart.y)**+this.zoomSpeed),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new z,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function tp(e){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(e.pointerId),this.domElement.ownerDocument.addEventListener(`pointermove`,this._onPointerMove),this.domElement.ownerDocument.addEventListener(`pointerup`,this._onPointerUp)),!this._isTrackingPointer(e)&&(this._addPointer(e),e.pointerType===`touch`?this._onTouchStart(e):this._onMouseDown(e),this._cursorStyle===`grab`&&(this.domElement.style.cursor=`grabbing`)))}function np(e){this.enabled!==!1&&(e.pointerType===`touch`?this._onTouchMove(e):this._onMouseMove(e))}function rp(e){switch(this._removePointer(e),this._pointers.length){case 0:this.domElement.releasePointerCapture(e.pointerId),this.domElement.ownerDocument.removeEventListener(`pointermove`,this._onPointerMove),this.domElement.ownerDocument.removeEventListener(`pointerup`,this._onPointerUp),this.dispatchEvent(Kf),this.state=Qf.NONE,this._cursorStyle===`grab`&&(this.domElement.style.cursor=`grab`);break;case 1:let t=this._pointers[0],n=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:n.x,pageY:n.y})}}function ip(t){let n;switch(t.button){case 0:n=this.mouseButtons.LEFT;break;case 1:n=this.mouseButtons.MIDDLE;break;case 2:n=this.mouseButtons.RIGHT;break;default:n=-1}switch(n){case e.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(t),this.state=Qf.DOLLY;break;case e.ROTATE:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=Qf.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=Qf.ROTATE}break;case e.PAN:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=Qf.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=Qf.PAN}break;default:this.state=Qf.NONE}this.state!==Qf.NONE&&this.dispatchEvent(Gf)}function ap(e){switch(this.state){case Qf.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(e);break;case Qf.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(e);break;case Qf.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(e)}}function op(e){this.enabled!==!1&&this.enableZoom!==!1&&this.state===Qf.NONE&&(e.preventDefault(),this.dispatchEvent(Gf),this._handleMouseWheel(this._customWheelEvent(e)),this.dispatchEvent(Kf))}function sp(e){this.enabled!==!1&&this._handleKeyDown(e)}function cp(e){switch(this._trackPointer(e),this._pointers.length){case 1:switch(this.touches.ONE){case t.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(e),this.state=Qf.TOUCH_ROTATE;break;case t.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(e),this.state=Qf.TOUCH_PAN;break;default:this.state=Qf.NONE}break;case 2:switch(this.touches.TWO){case t.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(e),this.state=Qf.TOUCH_DOLLY_PAN;break;case t.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(e),this.state=Qf.TOUCH_DOLLY_ROTATE;break;default:this.state=Qf.NONE}break;default:this.state=Qf.NONE}this.state!==Qf.NONE&&this.dispatchEvent(Gf)}function lp(e){switch(this._trackPointer(e),this.state){case Qf.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(e),this.update();break;case Qf.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(e),this.update();break;case Qf.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(e),this.update();break;case Qf.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(e),this.update();break;default:this.state=Qf.NONE}}function up(e){this.enabled!==!1&&e.preventDefault()}function dp(e){e.key===`Control`&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener(`keyup`,this._interceptControlUp,{passive:!0,capture:!0}))}function fp(e){e.key===`Control`&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener(`keyup`,this._interceptControlUp,{passive:!0,capture:!0}))}var pp=new B(17.5,9,19.5),mp=new B(0,2.2,0),hp=class{dom;camera;controls;mode=`iso`;follow=!1;focus=mp.clone();isoZoom=.8;pointer=new z;smoothPointer=new z;followProvider=null;right=new B;forward=new B;desired=new B;goal=new B;delta=new B;up=new B(0,1,0);constructor(e,t){this.dom=e,this.camera=new ao(48,t,.1,460),this.camera.position.copy(pp),this.camera.lookAt(mp),this.controls=new ep(this.camera,e),this.controls.enableDamping=!0,this.controls.dampingFactor=.06,this.controls.rotateSpeed=.55,this.controls.zoomSpeed=.8,this.controls.panSpeed=.6,this.controls.screenSpacePanning=!1,this.controls.minDistance=8,this.controls.maxDistance=38,this.controls.minPolarAngle=.22,this.controls.maxPolarAngle=1.36,this.controls.target.copy(mp),this.controls.enabled=!1,e.addEventListener(`pointermove`,this.onPointerMove),e.addEventListener(`wheel`,this.onWheel,{passive:!1}),document.addEventListener(`pointerleave`,this.resetPointer)}setFollowProvider(e){this.followProvider=e}setMode(e){e!==this.mode&&(this.mode=e,e===`free`?(this.controls.target.copy(this.focus),this.controls.enabled=!0,this.controls.update()):(this.controls.enabled=!1,this.isoZoom=1))}setFollow(e){if(this.follow=e,e&&this.mode===`free`&&this.followProvider){let e=this.followProvider();this.controls.target.copy(e).add(this.up.clone().multiplyScalar(.55))}}setIsoZoom(e){this.isoZoom=Mt.clamp(e,.58,1.9)}onPointerMove=e=>{let t=this.dom.getBoundingClientRect();this.pointer.set((e.clientX-t.left)/t.width*2-1,(e.clientY-t.top)/t.height*2-1)};resetPointer=()=>{this.pointer.set(0,0)};onWheel=e=>{this.mode===`iso`&&(e.preventDefault(),this.setIsoZoom(this.isoZoom*(e.deltaY>0?1.075:.93)))};update(e){let t=1-Math.exp(-3.2*e);if(this.smoothPointer.lerp(this.pointer,1-Math.exp(-2.2*e)),this.mode===`iso`){let n=this.follow&&this.followProvider?this.followProvider():mp;this.goal.set(n.x,n.y+.1,n.z),this.focus.lerp(this.goal,1-Math.exp(-2.6*e)),this.forward.copy(pp).normalize(),this.right.crossVectors(this.forward,this.up).normalize(),this.desired.copy(this.focus).addScaledVector(pp,this.isoZoom).addScaledVector(this.right,this.smoothPointer.x*.85).addScaledVector(this.up,-this.smoothPointer.y*.3),this.camera.position.lerp(this.desired,t),this.camera.lookAt(this.focus.x,this.focus.y+.35,this.focus.z)}else{if(this.follow&&this.followProvider){let t=this.followProvider();this.delta.set(t.x,t.y+.55,t.z).sub(this.controls.target).multiplyScalar(1-Math.exp(-2.4*e)),this.controls.target.add(this.delta),this.camera.position.add(this.delta)}this.controls.target.x=Mt.clamp(this.controls.target.x,-10,10),this.controls.target.y=Mt.clamp(this.controls.target.y,.1,5),this.controls.target.z=Mt.clamp(this.controls.target.z,-10,10),this.controls.update()}}resize(e,t){this.camera.aspect=e/Math.max(1,t),this.camera.updateProjectionMatrix()}get isoZoomFactor(){return this.isoZoom}dispose(){this.dom.removeEventListener(`pointermove`,this.onPointerMove),this.dom.removeEventListener(`wheel`,this.onWheel),document.removeEventListener(`pointerleave`,this.resetPointer),this.controls.dispose()}},gp=class{bus;ctx=null;master=null;oceanGain=null;windGain=null;fireGain=null;cricketsGain=null;noiseBuffer=null;enabled=!1;unlocked=!1;nextBird=3;nextCricket=0;nextCrackle=0;lastSync=0;constructor(e){this.bus=e,this.bus.on(`cue`,({name:e})=>{e===`thunder`?this.thunder():e===`bell`&&this.bell()}),this.bus.on(`settings:changed`,e=>this.setEnabled(e.sound)),document.addEventListener(`visibilitychange`,()=>{this.ctx&&(document.hidden?this.ctx.suspend():this.unlocked&&this.enabled&&this.ctx.resume())})}get isUnlocked(){return this.unlocked}unlock(){if(this.ctx)this.ctx.state===`suspended`&&this.ctx.resume();else try{let e=window.AudioContext??window.webkitAudioContext;if(!e)return;this.ctx=new e,this.buildGraph(),this.unlocked=!0,this.enabled&&this.applyMaster()}catch(e){console.warn(`[audio] unavailable`,e)}}setEnabled(e){this.enabled=e,this.ctx&&(e&&this.unlock(),this.applyMaster())}applyMaster(){if(!this.ctx||!this.master)return;let e=this.enabled?.62:0;this.master.gain.setTargetAtTime(e,this.ctx.currentTime,.5)}buildGraph(){let e=this.ctx,t=e.createGain();t.gain.value=0,t.connect(e.destination),this.master=t;let n=e.createBuffer(1,e.sampleRate*3,e.sampleRate),r=n.getChannelData(0),i=0;for(let e=0;e<r.length;e++){let t=Math.random()*2-1;i=i*.94+t*.06,r[e]=i*2.6+t*.12}this.noiseBuffer=n;let a=e.createBufferSource();a.buffer=n,a.loop=!0;let o=e.createBiquadFilter();o.type=`lowpass`,o.frequency.value=520,o.Q.value=.6;let s=e.createGain();s.gain.value=.12,a.connect(o).connect(s).connect(t),a.start(),this.oceanGain=s;let c=e.createBufferSource();c.buffer=n,c.loop=!0;let l=e.createBiquadFilter();l.type=`bandpass`,l.frequency.value=760,l.Q.value=.8;let u=e.createGain();u.gain.value=.01,c.connect(l).connect(u).connect(t),c.start(),this.windGain=u;let d=e.createBufferSource();d.buffer=n,d.loop=!0;let f=e.createBiquadFilter();f.type=`lowpass`,f.frequency.value=380;let p=e.createGain();p.gain.value=0,d.connect(f).connect(p).connect(t),d.start(),this.fireGain=p;let m=e.createOscillator();m.type=`sine`,m.frequency.value=4300;let h=e.createGain();h.gain.value=0,m.connect(h).connect(t),m.start(),this.cricketsGain=h}update(e,t){if(!this.ctx||!this.enabled||t-this.lastSync<.15)return;this.lastSync=t;let n=this.ctx.currentTime,r=e.clock.isNight,i=e.fireLit;this.oceanGain?.gain.setTargetAtTime(.1+e.weather.state.intensity*.07,n,.8),this.windGain?.gain.setTargetAtTime(.012+e.weather.state.wind*.09,n,.8),this.fireGain?.gain.setTargetAtTime(i?.04+(r?.02:0):0,n,.4);let a=r?.014*(1-e.weather.state.rain*.7):0,o=.5+.5*Math.sin(n*9.2);this.cricketsGain?.gain.setTargetAtTime(a*(.35+o*.65),n,.2),n>this.nextCrackle&&(this.nextCrackle=n+.12+Math.random()*.55,i&&this.crackle()),n>this.nextBird&&!r&&e.weather.state.rain<.25&&(this.nextBird=n+3.5+Math.random()*7.5,this.chirp()),n>this.nextCricket&&(this.nextCricket=n+2.5+Math.random()*4)}noiseBurst(e,t,n,r,i=1){if(!this.ctx||!this.master||!this.noiseBuffer)return;let a=this.ctx,o=a.createBufferSource();o.buffer=this.noiseBuffer,o.playbackRate.value=.8+Math.random()*.6;let s=a.createBiquadFilter();s.type=t,s.frequency.value=n,s.Q.value=i;let c=a.createGain(),l=a.currentTime;c.gain.setValueAtTime(r,l),c.gain.exponentialRampToValueAtTime(1e-4,l+e),o.connect(s).connect(c).connect(this.master),o.start(l),o.stop(l+e+.05)}crackle(){this.noiseBurst(.05+Math.random()*.08,`highpass`,1400+Math.random()*1600,.035+Math.random()*.03)}chirp(){if(!this.ctx||!this.master)return;let e=this.ctx,t=e.currentTime,n=1+Math.floor(Math.random()*3);for(let r=0;r<n;r++){let n=t+r*.11,i=e.createOscillator();i.type=`sine`,i.frequency.setValueAtTime(1900+Math.random()*600,n),i.frequency.exponentialRampToValueAtTime(2600+Math.random()*900,n+.07);let a=e.createGain();a.gain.setValueAtTime(1e-4,n),a.gain.exponentialRampToValueAtTime(.028,n+.015),a.gain.exponentialRampToValueAtTime(1e-4,n+.1),i.connect(a).connect(this.master),i.start(n),i.stop(n+.12)}}thunder(){this.noiseBurst(2.2,`lowpass`,180,.4,.7),setTimeout(()=>this.noiseBurst(1.4,`lowpass`,120,.22,.7),260)}bell(){if(!this.ctx||!this.master)return;let e=this.ctx,t=e.currentTime;for(let[n,r]of[[196,.05],[392,.025],[588,.012]]){let i=e.createOscillator();i.type=`sine`,i.frequency.value=n;let a=e.createGain();a.gain.setValueAtTime(r,t),a.gain.exponentialRampToValueAtTime(1e-4,t+1.8),i.connect(a).connect(this.master),i.start(t),i.stop(t+1.9)}}},_p={"<h4>świat</h4>":`<h4>world</h4>`,"Balon nad wyspą":`Balloon over the island`,"Bije młotkiem tak długo, że belka pęka. Musi zaczynać od nowa.":`He hammers so long the beam splits. He has to start over.`,"Budzi się na piasku. Uczy się, gdzie rosną kokosy, gdzie żerują ryby i którędy przechodzi krab.":`He wakes on the sand. He learns where the coconuts grow, where the fish feed, and which way the crab walks.`,"Budzi się z odciskiem muszli na czole. Nie zauważa.":`He wakes with a shell print on his forehead. He doesn't notice.`,"Burza odchodzi tak szybko, jak przyszła.":`The storm leaves as fast as it came.`,"Burza przegania go w stronę zadaszenia.":`The storm drives him toward the shelter.`,"Butelka tonie tuż przy brzegu. Rozbitek wyławia ją i próbuje jeszcze raz.":`The bottle sinks just offshore. The castaway fishes it out and tries again.`,"Butelka z listem odpływa. Rozbitek patrzy za nią, aż znika.":`The bottle drifts away. The castaway watches until it's gone.`,"Błysk odbija się od wody i trafia go prosto w oko. Chwila ciemności.":`The glare bounces off the water straight into his eye. A moment of darkness.`,"Błyska w stronę palm. Odbłysk wraca. Rozbitek salutuje sam sobie.":`He flashes toward the palms. The glint comes back. The castaway salutes himself.`,"Cała warstwa liści zsuwa się mu na głowę. Wygląda jak choinka.":`A whole layer of leaves slides onto his head. He looks like a Christmas tree.`,"Chlapie sobie wodę za kołnierz. Parska jak foka.":`He splashes water down his collar. Snorts like a seal.`,"Chmura wygląda dokładnie jak jego własna twarz. Nie jest zadowolony.":`The cloud looks exactly like his own face. He is not pleased.`,"Chmura zasłania słońce dokładnie wtedy, gdy udaje mu się złapać kąt.":`The cloud covers the sun exactly when he finds the right angle.`,"Chmury się rozchodzą. Wyspa znów jest w słońcu.":`The clouds part. The island is in the sun again.`,"Chodzi w kółko, mrucząc pod nosem plan. Plan ma dziurę w środku.":`He paces in circles, muttering a plan. The plan has a hole in the middle.`,Ciekawość:`Curiosity`,"Coś białego krąży nad plażą.":`Something white circles over the beach.`,"Coś jasnego przemyka po niebie. Satelita? Na pewno satelita.":`Something bright streaks across the sky. A satellite? Definitely a satellite.`,"Coś muska go w kostkę. Wychodzi z wody dwa razy szybciej.":`Something brushes his ankle. He leaves the water twice as fast.`,"Coś rusza się pod jego stopą. To krab. Krab jest szybszy.":`Something moves under his foot. It's a crab. The crab is faster.`,"Coś rusza się w ciemnej części wraku. Rozbitek postanawia wrócić później.":`Something moves in the dark part of the wreck. The castaway decides to come back later.`,"Coś unosi się nad horyzontem.":`Something hovers over the horizon.`,"Dach nad głową. Luksus.":`A roof over his head. Luxury.`,"Daleko, bardzo daleko, coś świeci rytmicznie. Światło gaśnie.":`Far, very far away, something flashes rhythmically. The light goes out.`,"Deski rozjeżdżają się pod młotkiem. Rozbitek wiąże je jeszcze raz.":`The planks slide apart under the hammer. The castaway ties them again.`,"Deszcz dusi ogień, zanim dym zdąży się wznieść. Ognisko gaśnie.":`The rain smothers the fire before the smoke can rise. The campfire goes out.`,"Do brzegu dobija skrzynia. Ciężka, ciemna, z metalowymi okuciami.":`A crate washes ashore. Heavy, dark, with metal fittings.`,"Dociąga luźne węzły i uszczelnia szpary. Tratwa wygląda pewniej.":`He tightens the loose knots and seals the gaps. The raft looks more confident.`,"Dokłada gałęzi. Ogień rośnie i odgania cień od obozu.":`He adds branches. The fire grows and pushes the shadow back from camp.`,"Dorzuca mokre liście. Słup dymu unosi się wysoko nad wyspę.":`He throws on wet leaves. A column of smoke rises high over the island.`,"Drzazga wbija mu się w palec. Drewno i tak przynosi.":`A splinter lodges in his finger. He brings the wood anyway.`,"Drzemie w słońcu. Piasek przykleja mu się do policzka.":`He dozes in the sun. Sand sticks to his cheek.`,"Dym idzie prosto w jego twarz. Kaszle, ale sygnał leci dalej.":`The smoke blows straight into his face. He coughs, but the signal keeps rising.`,"Dzień ${day}. ${this.rng.pick(DAY_LINES)}":"Day ${day}. ${this.rng.pick(DAY_LINES)}","Dzień 10. Pakuje zapasy. Jeszcze nie dziś. Ale niedługo.":`Day 10. He packs supplies. Not today. But soon.`,"Dzień 11. Morze wygląda dziś inaczej. Spokojniej. Zapraszająco.":`Day 11. The sea looks different today. Calmer. Inviting.`,"Dzień 12. Wyspa zdążyła już polubić jego poranne krzątanie.":`Day 12. The island has already grown fond of his morning bustle.`,"Dzień 16. Wyspa przestała być wyspą. Jest domem.":`Day 16. The island has stopped being an island. It's home.`,"Dzień 2. Piasek w koszuli, słońce w oczy, ale jakoś się żyje. Zaczyna myśleć o zadaszeniu.":`Day 2. Sand in his shirt, sun in his eyes, but life goes on. He starts thinking about a roof.`,"Dzień 3. Po raz pierwszy patrzy na horyzont inaczej. Gdzieś tam jest tratwa.":`Day 3. For the first time he looks at the horizon differently. Somewhere out there is a raft.`,"Dzień 4. Układa pierwsze litery SOS. Wyspa nagle wydaje się mniejsza.":`Day 4. He lays out the first SOS letters. The island suddenly feels smaller.`,"Dzień 5. Dym, butelki, deski. Rozbitek zaczyna mówić do morza.":`Day 5. Smoke, bottles, planks. The castaway starts talking to the sea.`,"Dzień 6. Coś przepłynęło nocą po horyzoncie. Nie był pewien, czy to statek.":`Day 6. Something crossed the horizon at night. He wasn't sure it was a ship.`,"Dzień 8. Tratwa rośnie. Coraz częściej staje i patrzy w wodę.":`Day 8. The raft grows. More and more often he stops and stares at the water.`,"Dzień zaczyna się od liczenia fal. Fal jest zawsze tyle samo.":`The day begins with counting waves. There are always the same number.`,"Dziś może przypłynie statek. Może.":`Maybe a ship will come today. Maybe.`,"Dźwięki otoczenia włączone.":`Ambient sounds on.`,"Dźwięki wyciszone.":`Ambient sounds muted.`,"Fala przelewa mu się przez twarz. Nie rusza się. Ma plan.":`A wave washes over his face. He doesn't move. He has a plan.`,"Fala wyrzuca butelkę z powrotem pod jego stopy. Morze ma poczucie humoru.":`The wave throws the bottle back at his feet. The sea has a sense of humor.`,"Fala zabiera jedną deskę, zanim zdąży ją położyć. Morze ma własny plan.":`A wave takes one plank before he can lay it down. The sea has its own plan.`,"Fala zabiera połowę zamku. Rozbitek patrzy na morze z urazą.":`A wave takes half the castle. The castaway looks at the sea with resentment.`,"Fala zabiera rysunek. Rozbitek przez chwilę patrzy na czysty piasek.":`A wave takes the drawing. For a moment the castaway stares at clean sand.`,"Fala zalewa połowę anioła. Wygląda teraz jak anioł z jednym skrzydłem.":`A wave floods half the angel. Now it looks like an angel with one wing.`,"Foka wynurza się obok skał i patrzy na niego. Rozbitek patrzy na nią.":`A seal surfaces by the rocks and looks at him. The castaway looks back.`,"Grzebie patykiem w popiele. Znajduje żar, który jeszcze żyje.":`He pokes the ashes with a stick. He finds an ember still alive.`,Głód:`Hunger`,"Horyzont jest pusty. Rozbitek wpatruje się w niego jeszcze długo.":`The horizon is empty. The castaway stares at it for a long while.`,"Horyzont. Ciągle ten sam.":`The horizon. Always the same.`,"Iskra pryska mu na rękę. Odskakuje i dmucha w dłoń.":`A spark pops onto his hand. He jumps back and blows on his palm.`,"Iskra trafia go w rękę. Ogień w końcu płonie, ale on już nie tańczy.":`A spark catches his hand. The fire finally burns, but he's done dancing.`,"Jagody są gorzkie. Rozbitek wypluwa je z miną znawcy.":`The berries are bitter. The castaway spits them out with a connoisseur's face.`,"Je kokosa. Miąższ jest słodki, a mleko spływa mu po brodzie.":`He eats a coconut. The flesh is sweet and the milk runs down his chin.`,"Je rybę łapczywie. Ości wypluwa na bok, z wprawą bywalca wysp.":`He eats the fish greedily. He spits the bones aside with the skill of an island regular.`,"Już nigdy. Nigdy więcej.":`Never again. Never again.`,"Kamień leci w tył i ląduje na jego własnej stopie.":`The stone flies backwards and lands on his own foot.`,"Kamień od razu idzie na dno. Wyspa nie jest pod wrażeniem.":`The stone sinks straight away. The island is not impressed.`,"Kamień odbija się od wody pięć razy. Pięć! Rozbitek podnosi ręce.":`The stone skips five times. Five! The castaway raises his hands.`,"Kamień odbija się rykoszetem od skały i wpada do wody. Trudno uwierzyć.":`The stone ricochets off a rock and drops into the water. Hard to believe.`,"Kamień odbija się sześć razy, potem wraca fala i psuje cały występ.":`The stone skips six times, then a wave comes back and ruins the whole show.`,"Kamień rusza się pod jego stopą. To nie kamień. To krab. Wielki krab.":`The stone moves under his foot. It's not a stone. It's a crab. A big crab.`,"Kamień uderza w palmę. Spada kokos. Wyspa chyba mu sprzyja.":`The stone hits the palm. A coconut falls. The island seems to be on his side.`,"Kamień wysuwa mu się z ręki i spada do wody. Zaczyna od nowa.":`The stone slips from his hand into the water. He starts over.`,"Kamień znika z pluskiem. Rozbitek zadowolony z siebie otrzepuje ręce.":`The stone vanishes with a splash. Smug, the castaway dusts off his hands.`,"Kica przez trzy kroki, bo tak mu się zachciało.":`He hops for three steps, just because he felt like it.`,"Kokos jest starszy, niż wyglądał. Rozbitek je z zamkniętymi oczami.":`The coconut is older than it looked. The castaway eats it with his eyes closed.`,"Kokos pęka z hukiem, a w środku jest tylko mleko i rozczarowanie.":`The coconut cracks loudly, and inside there's only milk and disappointment.`,"Kokos spada mu na głowę. Drugi na stopę. Publiczność jest zachwycona.":`One coconut lands on his head. Another on his foot. The audience is delighted.`,"Kokos spada mu wprost na głowę. Wyspa ma poczucie humoru.":`A coconut drops right on his head. The island has a sense of humor.`,"Kokos wyślizguje się i turla po piasku. Rozbitek goni go bez godności.":`The coconut slips out and rolls across the sand. The castaway chases it without dignity.`,"Kolorowy balon przeleciał wysoko nad wyspą. Rozbitek machał tak długo, aż rozbolało go ramię.":`A colorful balloon flew high over the island. The castaway waved until his arm ached.`,"Komar bzyczy mu nad uchem. Cała magia pryska.":`A mosquito buzzes by his ear. The magic is gone.`,"Komary urządzają sobie przyjęcie wokół jego głowy.":`The mosquitoes are having a party around his head.`,"Kontekst WebGL został utracony. Odśwież stronę.":`WebGL context lost. Refresh the page.`,"Kopie, kopie, kopie. Nic. Ale przynajmniej się zmęczył.":`He digs and digs and digs. Nothing. At least he's tired.`,"Krab obserwuje go z góry skały. Rozbitek udaje, że są tu razem.":`A crab watches him from the top of a rock. The castaway pretends they're here together.`,"Krab odchodzi bokiem. Rozbitek macha mu na pożegnanie.":`The crab walks off sideways. The castaway waves goodbye.`,"Krab odwraca się i idzie w jego stronę. Rozbitek robi to samo.":`The crab turns and heads toward him. The castaway does the same.`,"Krab porywa jedzenie i ucieka, nie oglądając się za siebie.":`The crab snatches the food and runs off without looking back.`,"Krab porywa rybę i ucieka bokiem przez plażę.":`The crab snatches the fish and escapes sideways across the beach.`,"Krab prowadzi go do swojej kryjówki. W środku jest czyjś stary zegarek.":`The crab leads him to its hiding place. Inside is someone's old watch.`,"Krab przechodzi mu tuż przed stopami. Udaje, że tego nie widzi.":`The crab passes right in front of his feet. He pretends not to see it.`,"Krab przechodzi przez rysunek i robi w nim dziurę. Rozbitek się śmieje.":`The crab walks across the drawing and leaves a hole in it. The castaway laughs.`,"Krab przechodzi przez zamek i niszczy bramę. Rozbitek salutuje mu.":`The crab walks over the castle and wrecks the gate. The castaway salutes it.`,"Krab przemyka obok jego głowy. Rozbitek śni o wielkim obiedzie.":`A crab scuttles past his head. The castaway dreams of a big dinner.`,"Krab przygląda się z boku. Potem zaczyna ruszać szczypcami w rytm.":`The crab watches from the side. Then it starts clicking its claws to the rhythm.`,"Krab przynosi muszlę i kładzie ją przed nim. To chyba prezent.":`The crab brings a shell and sets it in front of him. It's probably a gift.`,"Krab przyszedł, popatrzył i poszedł. Nie było czego kraść.":`The crab came, looked, and left. There was nothing to steal.`,"Krab siedzi w dołku i patrzy na niego wyzywająco. Rozbitek odpuszcza.":`The crab sits in the hole, staring him down. The castaway gives up.`,"Krab szczypie go w palec. Rozmowa dobiega końca.":`The crab pinches his finger. The conversation is over.`,"Krab wchodzi do obozu. Rozgląda się. Udaje, że nie jest krabem.":`A crab walks into camp. Looks around. Pretends not to be a crab.`,"Krab wchodzi do skrzyni z zapasami. Rozbitek pakuje go razem z resztą.":`A crab climbs into the supply crate. The castaway packs it with the rest.`,"Krab zakradł się do obozu i ukradł jedzenie. Uciekał bokiem, dumnie, jakby to był jego plan od początku.":`A crab sneaked into camp and stole the food. It fled sideways, proudly, as if this had been its plan all along.`,"Krab znika między skałami. Rozbitek udaje, że wcale nie śledził.":`The crab disappears among the rocks. The castaway pretends he wasn't following.`,"Krab złodziej":`Crab thief`,"Krew odpływa mu z ręki. Macha nią energicznie.":`The blood drains from his hand. He waves it vigorously.`,"Krzesze iskry. Ogień łapie, najpierw nieśmiało, potem z hukiem.":`He strikes sparks. The fire catches, shy at first, then with a roar.`,"Krzew okazuje się bardziej kolczasty, niż wyglądał.":`The bush turns out more prickly than it looked.`,"Krzyczy. Mewa nie przejmuje się. Mewa ma spodenki.":`He shouts. The seagull doesn't care. The seagull has his shorts.`,"Ktoś kręci się wokół zapasów.":`Someone is prowling around the supplies.`,"Ktoś siedział na skale i śpiewał. Kiedy rozbitek się obudził, w wodzie został tylko krąg fal.":`Someone sat on the rock and sang. When the castaway woke, only a ring of ripples was left in the water.`,"Kładzie się i macha rękami. Na piasku zostaje anioł z rozcapierzonymi skrzydłami.":`He lies down and sweeps his arms. A sand angel is left behind, wings spread.`,"Leży i patrzy w gwiazdy. Wyspa wydaje się wtedy mniejsza.":`He lies and looks at the stars. The island feels smaller then.`,"Lina plącze się w supeł, którego nie da się rozplątać. Rozcina go.":`The rope tangles into a knot that can't be undone. He cuts it.`,"Ma dwie deski, kawałek liny i upór. Reszta się znajdzie.":`He has two planks, a length of rope, and stubbornness. The rest will turn up.`,"Mewa chwyta spodenki i zrywa się do lotu. Rozbitek zostaje w morzu do pasa.":`The seagull grabs his shorts and takes off. The castaway is left waist-deep in the sea.`,"Mewa krzyczy na niego z góry. Rozbitek udaje, że nie rozumie.":`The seagull screams at him from above. The castaway pretends not to understand.`,"Mewa krąży nisko. Rozbitek udaje, że jest częścią oceanu.":`The seagull circles low. The castaway pretends to be part of the ocean.`,"Mewa poderwała mu spodenki i odleciała z nimi nad lagunę. Wrócił w liściu i z godnością, której nikt nie kupił.":`The seagull snatched his shorts and flew off over the lagoon. He came back in a leaf, with dignity no one was buying.`,"Mewa porywa butelkę w locie. List poleci gdzieś indziej.":`The seagull snatches the bottle mid-flight. The letter will go somewhere else.`,"Mewa przelatuje nisko. Rozbitek instynktownie zasłania twarz.":`A seagull flies low. The castaway instinctively covers his face.`,"Mewa siada dokładnie na środku litery O. Rozbitek przegania ją bez przekonania.":`The seagull lands right in the middle of the letter O. The castaway shoos it away half-heartedly.`,"Mewa zatacza koło nad laguną i nuci coś, co brzmi jak kpina.":`The seagull circles over the lagoon, humming something that sounds like mockery.`,"Mgła gęstnieje. W oddali pojawia się statek bez świateł.":`The fog thickens. In the distance, a ship without lights appears.`,"Mgła wychodzi z oceanu i siada na wyspie.":`The fog climbs out of the ocean and settles on the island.`,"Mleko jest ciepłe i dziwnie słone. Ale to zawsze coś.":`The milk is warm and oddly salty. But it's always something.`,"Morze wyrzuciło coś ciężkiego.":`The sea has washed up something heavy.`,"Może ktoś przeczyta.":`Maybe someone will read it.`,"Może tym razem dopłynę.":`Maybe this time I'll make it across.`,"Może zbuduję coś. Cokolwiek.":`Maybe I'll build something. Anything.`,"Mrówka wchodzi mu na rękę. Obserwuje ją z ogromnym skupieniem.":`An ant climbs onto his hand. He watches it with enormous focus.`,"Muszla jest piękna. Rozbitek postanawia ją zatrzymać. Ma już kolekcję.":`The shell is beautiful. The castaway decides to keep it. He already has a collection.`,"Muszla kruszy się w palcach. Zostaje piasek i wspomnienie.":`The shell crumbles in his fingers. Only sand and a memory remain.`,"Muszla okazuje się domkiem kraba pustelnika. Krab protestuje.":`The shell turns out to be a hermit crab's house. The crab protests.`,"Młotek spada mu z ręki wprost do stopy. Tratwa musi poczekać.":`The hammer slips from his hand straight onto his foot. The raft will have to wait.`,"Młotek ześlizguje się i trafia w palec. Świat robi się biały.":`The hammer slips and hits his finger. The world goes white.`,"Na brzeg wypłynęła skrzynia. W środku było coś, co kiedyś należało do kogoś innego.":`A crate washed ashore. Inside was something that once belonged to someone else.`,"Na dnie dołka znajduje butelkę z zaszytym listem. Pismo jest nieczytelne.":`At the bottom of the hole he finds a bottle with a stitched-up letter. The handwriting is illegible.`,"Na horyzoncie pojawia się biały punkcik. To mewa. Rozbitek macha i jej.":`A white dot appears on the horizon. It's a seagull. The castaway waves at it too.`,"Na horyzoncie pojawia się żagiel.":`A sail appears on the horizon.`,"Na horyzoncie pojawia się żagiel. Prawdziwy żagiel.":`A sail appears on the horizon. A real sail.`,"Na końcu żyłki wisi ośmiornica. Ośmiornica trzyma się jego ręki.":`An octopus hangs from the end of the line. The octopus is holding on to his hand.`,"Na plażę wchodzi żółw morski. Idzie, jakby miał na to cały dzień.":`A sea turtle comes up the beach. It walks as if it has all day.`,"Na skale w wodzie siedzi postać z długimi włosami.":`A figure with long hair sits on a rock in the water.`,"Nad plażą krąży mewa. Zbyt nisko, zbyt pewnie.":`A seagull circles over the beach. Too low, too confident.`,"Nad wyspą przelatuje kolorowy balon. Ktoś w koszu macha.":`A colorful balloon passes over the island. Someone in the basket is waving.`,"Nad wyspą przeszła burza. Pioruny biły w ocean, a deszcz zgasił ognisko. Rozbitek przeczekał ją pod liśćmi.":`A storm passed over the island. Lightning struck the ocean and the rain put out the campfire. The castaway waited it out under the leaves.`,"Nad wyspą zbierają się chmury. Będzie burza.":`Clouds gather over the island. There will be a storm.`,"Nadepnięcie na jeżowca. Ból, syk, taniec na jednej nodze.":`Stepping on a sea urchin. Pain, hissing, a dance on one leg.`,"Napis SOS jest gotowy. Widać go z daleka.":`The SOS sign is ready. It can be seen from far away.`,"Napis SOS, słup dymu, list w butelce. Rozbitek zaczyna mówić do horyzontu.":`An SOS sign, a column of smoke, a letter in a bottle. The castaway starts talking to the horizon.`,Nastrój:`Mood`,"Nasłuchuje. Morze szumi tak samo jak wczoraj.":`He listens. The sea sounds just like yesterday.`,"Nic. Ale cisza po tym dźwięku jest głośniejsza niż sam dźwięk.":`Nothing. But the silence after the sound is louder than the sound itself.`,"Nie tym razem. Ale tratwa wciąż tu jest — i on też.":`Not this time. But the raft is still here — and so is he.`,"Niebo ciemnieje. Nad oceanem zbiera się burza.":`The sky darkens. A storm is gathering over the ocean.`,"Niebo robi się granatowe.":`The sky turns navy blue.`,"Nieznajoma wskakuje do wody. Zostaje tylko krąg fal.":`The stranger slips into the water. Only a ring of ripples remains.`,"Nikt nim nie steruje. Wystarczy patrzeć.":`No one is steering it. Watching is enough.`,"Nowy dzień. Rozbitek sprawdza, czy horyzont się nie zmienił.":`A new day. The castaway checks whether the horizon has changed.`,"Odbija z hałasem, jakiego wyspa dawno nie słyszała.":`He pushes off with a noise the island hasn't heard in a long time.`,"Odkrywa słaby punkt. Wymienia deskę, zanim ktokolwiek to zauważy.":`He finds a weak spot. He swaps the plank before anyone notices.`,"Ogień bucha tak nagle, że śpiewa mu brwi. Ale płonie!":`The fire flares up so suddenly it singes his eyebrows. But it burns!`,"Ogień pryska iskrami. Rozbitek odskakuje, ale ogień ma się świetnie.":`The fire spits sparks. The castaway jumps back, but the fire is doing great.`,"Ogień tli się, dymi i gaśnie. Rozbitek dmucha z całych sił.":`The fire smolders, smokes, and dies. The castaway blows with all his might.`,"Ogień. Ciepło. Może i jedzenie.":`Fire. Warmth. Maybe even food.`,"Ognisko gaśnie. Zostaje popiół i dym.":`The campfire goes out. Ashes and smoke remain.`,"Opowiada krabowi o swoim planie. Krab słucha. Chyba.":`He tells the crab about his plan. The crab listens. Probably.`,"Ostrzy kamień o kamień. Włócznia robi się naprawdę ostra.":`He sharpens stone on stone. The spear gets genuinely sharp.`,"Ość zacina się w gardle. Kilka kropel wody i przerażona mina.":`A bone catches in his throat. A few drops of water and a terrified face.`,"Patyk pęka. Rozbitek patrzy na połowę w ręku i czuje dziwny smutek.":`The stick snaps. The castaway looks at the half in his hand and feels oddly sad.`,"Patyk staje się mieczem. Rozbitek odpiera atak niewidzialnego pirata.":`The stick becomes a sword. The castaway parries an invisible pirate's attack.`,"Patyk trafia go w czoło po ambitnym zakręcie. Wyspa klaszcze.":`The stick hits his forehead after an ambitious swing. The island applauds.`,"Piasek wchodzi mu za koszulkę. Anioł jest, swędzi całe plecy.":`Sand gets down his shirt. The angel is there; his whole back itches.`,"Piasek wsypuje mu się do sandałów, których przecież nie ma.":`Sand pours into sandals he doesn't actually own.`,"Pije łapczywie. Kilka kropel ląduje na piasku.":`He drinks greedily. A few drops land on the sand.`,"Pięć minut snu. Tylko pięć.":`Five minutes of sleep. Just five.`,"Plaża ma niespodziewanego gościa.":`The beach has an unexpected guest.`,"Pod deskami znajduje zwój liny. Lina jest w lepszym stanie niż wrak.":`Under the planks he finds a coil of rope. The rope is in better shape than the wreck.`,"Pod deską znajduje kokos. Wyspa czasem jednak coś daje.":`Under a plank he finds a coconut. Sometimes the island does give.`,"Poprawia liście na dachu. Zadaszenie pachnie nową palmą.":`He adjusts the leaves on the roof. The shelter smells of fresh palm.`,"Potyka się o własną stopę i ląduje na piasku. Wstaje z godnością.":`He trips over his own foot and lands on the sand. He gets up with dignity.`,"Połowa tratwy stoi na plaży. Wygląda jak tratwa. To dobry znak.":`Half a raft stands on the beach. It looks like a raft. A good sign.`,"Połyka muchę. Kaszel, łzy, godność w strzępach.":`He swallows a fly. Coughing, tears, dignity in tatters.`,"Połyka wodę. Kaszel słychać chyba na drugim końcu oceanu.":`He swallows water. The coughing can probably be heard at the other end of the ocean.`,"Prawdziwy statek przepływa obok wyspy. Rozbitek macha, krzyczy i skacze. Statek płynie dalej.":`A real ship passes the island. The castaway waves, shouts, and jumps. The ship sails on.`,"Przeciąga się tak, że słychać strzyknięcie w plecach.":`He stretches until his back cracks audibly.`,"Przesunięto czas o godzinę.":`Time shifted by one hour.`,"Przewraca się na drugi bok i zsuwa z posłania. Nie budzi się.":`He rolls over and slides off his bed. He doesn't wake up.`,"Przewraca się na drugi bok, żeby opalić się równo.":`He rolls onto his other side to tan evenly.`,"Przez lornetkę z dłoni widzi własny nos. To nie lornetka.":`Through hand binoculars he sees his own nose. They're not binoculars.`,"Przykłada muszlę do ucha. Słyszy morze, choć morze jest tuż obok.":`He holds a shell to his ear. He hears the sea, though the sea is right there.`,"Przynosi jedną belkę i kawałek liny. Lina jest prawie cała.":`He brings one beam and a piece of rope. The rope is almost whole.`,"Przystaje i kiwa głową do własnych myśli.":`He stops and nods at his own thoughts.`,"Przywiązuje kolejną kłodę. Tratwa rośnie, choć wygląda jak stos desek.":`He ties on another log. The raft grows, though it looks like a pile of planks.`,"Próba ucieczki":`Escape attempt`,"Próbuje żonglować trzema, ale trzeci jest wyimaginowany.":`He tries to juggle three, but the third is imaginary.`,"Ptak uprzedza go i zjada najlepsze jagody. Patrzą na siebie.":`A bird beats him to it and eats the best berries. They look at each other.`,"Płetwa nieruchomieje. To pień z gałęzią. Rozbitek oddycha.":`The fin goes still. It's a log with a branch. The castaway breathes.`,"Płynie równolegle do brzegu. Ręce i nogi pracują w rytmie fal.":`He swims parallel to the shore. Arms and legs move to the rhythm of the waves.`,"Rekin, który nie był rekinem":`The shark that wasn't a shark`,"Rozbitek budzi się na piasku. Wyspa jest mała, ale wystarczająco duża.":`The castaway wakes on the sand. The island is small, but big enough.`,"Rozbitek budzi się. Postać patrzy prosto na niego.":`The castaway wakes. The figure is looking right at him.`,"Rozbitek grozi krabowi palcem. Krab już dawno go nie słyszy.":`The castaway wags a finger at the crab. The crab stopped listening long ago.`,"Rozbitek macha. Macha całym ciałem.":`The castaway waves. Waves with his whole body.`,"Rozbitek nie jest pewien, co widział. Ale pamięta melodię.":`The castaway isn't sure what he saw. But he remembers the melody.`,"Rozbitek przyklęka i otwiera wieko.":`The castaway kneels and opens the lid.`,"Rozbitek wypycha tratwę na wodę. Wiosła są gotowe.":`The castaway pushes the raft into the water. The oars are ready.`,"Rozbitek wypłynął tratwą. Fala przewróciła ją i wyrzuciła go z powrotem na brzeg. Tratwa wróciła w kawałkach.":`The castaway set out on the raft. A wave capsized it and threw him back onto the shore. The raft came back in pieces.`,"Rozbitek zdaje sobie sprawę, że rozmawia z krabem. Krab też to wie.":`The castaway realizes he's talking to a crab. The crab knows it too.`,"Rozdeptuje muszlę. Chrupnięcie słychać na całej wyspie.":`He steps on a shell. The crunch is heard all over the island.`,"Rozdział ${entry.index}: ${entry.title}.":"Chapter ${entry.index}: ${entry.title}.","Ryba jest dobra. Rozbitek zamyka oczy i przez chwilę jest w domu.":`The fish is good. The castaway closes his eyes and is home for a moment.`,"Ryba przypala się z jednej strony. Rozbitek obraca ją z miną fachowca.":`The fish burns on one side. The castaway turns it with an expert's face.`,"Ryba skwierczy nad ogniem. Zapach przyciąga nawet kraba.":`The fish sizzles over the fire. The smell attracts even the crab.`,"Rybko, ugryź. Tylko raz.":`Little fish, bite. Just once.`,"Rysuje mapę wyspy. Potem dorysowuje skarb. Potem siebie z koroną.":`He draws a map of the island. Then adds a treasure. Then himself with a crown.`,"Rysuje palcem kółko w piasku. Potem drugie. Potem całą mapę.":`He draws a circle in the sand with his finger. Then another. Then a whole map.`,"Rysuje palcem słońce na piasku, żeby zostało trochę dłużej.":`He draws the sun in the sand with his finger, so it stays a little longer.`,"Rysuje twarz, którą pamięta z domu. Nie pokazuje jej nikomu.":`He draws a face he remembers from home. He shows it to no one.`,"Rysuje wielki żaglowiec. Z góry wygląda jak wielki żaglowiec.":`He draws a big sailing ship. From above it looks like a big sailing ship.`,"Rzeźbi w piasku fosę. Woda natychmiast ją wypełnia. To też sukces.":`He carves a moat in the sand. The water fills it at once. That's a success too.`,"Siedzi i wpatruje się w horyzont. Wiatr rozwiewa mu włosy.":`He sits and stares at the horizon. The wind ruffles his hair.`,"Skrzynia jest pusta. Ale sama skrzynia to już coś.":`The crate is empty. But the crate itself is something.`,"Skręca włókna w mocną linę. Ręce ma zdarte, ale lina trzyma.":`He twists fibers into a strong rope. His hands are raw, but the rope holds.`,"Spodenki spadają na piasek. Rozbitek podnosi je bez słowa i zakłada z godnością.":`The shorts drop onto the sand. The castaway picks them up without a word and puts them on with dignity.`,"Sprawdza ostrość na palcu. Nie powinien. Ale włócznia jest ostra.":`He tests the sharpness on his finger. He shouldn't. But the spear is sharp.`,"Statek bez załogi przepłynął przez mgłę. Światła na pokładzie paliły się zimnym, zielonym ogniem.":`A ship without a crew passed through the fog. The lights on deck burned with a cold green fire.`,"Statek nie ma załogi. Ma za to dzwon, który bije pod wodą.":`The ship has no crew. It does have a bell that rings underwater.`,"Statek przepływa obok, a rozbitek jest zajęty gaszeniem ognia, który wymknął się spod kontroli.":`A ship passes by while the castaway is busy putting out a fire that got out of hand.`,"Statek widmo rozpływa się we mgle, jakby nigdy go nie było.":`The ghost ship dissolves into the fog, as if it had never been.`,Sygnały:`Signals`,"Słońce topi się w oceanie. Przez chwilę wszystko wydaje się możliwe.":`The sun melts into the ocean. For a moment everything seems possible.`,"Słucha wyspy: wiatr, owady, leniwe fale.":`He listens to the island: wind, insects, lazy waves.`,"Słup dymu idzie w niebo. Rozbitek macha do niego, jakby ktoś tam był.":`The column of smoke rises into the sky. The castaway waves at it as if someone were up there.`,"Słyszy dzwon. Albo mu się wydaje. Albo to wiatr w muszli.":`He hears a bell. Or imagines it. Or it's the wind in a shell.`,"Ta mewa coś kombinuje.":`That seagull is up to something.`,"Ta syrena. Czy ona tu była?":`That mermaid. Was she here?`,"Tańczy tak długo, że zapomina, iż jest sam. Potem sobie przypomina.":`He dances so long he forgets he's alone. Then he remembers.`,"Tańczy z cieniem rzucanym przez palmę. Cień dotrzymuje kroku.":`He dances with the shadow cast by the palm. The shadow keeps up.`,"To była własna stopa. Rozbitek przez chwilę nie wie, co o tym sądzić.":`It was his own foot. For a moment the castaway doesn't know what to think.`,"To tylko gałąź uderzająca o palmę. Rozbitek wzdycha z ulgą.":`It's just a branch knocking against a palm. The castaway sighs with relief.`,"Trafia w coś twardego. Włócznia drga, woda się burzy.":`He hits something hard. The spear shudders, the water churns.`,"Tratwa jest gotowa. Morze ma jednak własne zdanie na temat jej dzielności.":`The raft is ready. The sea, however, has its own opinion of its seaworthiness.`,"Tratwa jest gotowa. Wystarczy spakować zapasy i odbić od brzegu.":`The raft is ready. Just pack the supplies and push off.`,"Tratwa odbija od brzegu. Wiosła pracują, wyspa maleje.":`The raft pushes off. The oars work, the island shrinks.`,"Tratwa utyka na mieliźnie. Rozbitek popycha ją, brodząc po pas.":`The raft runs aground. The castaway pushes it, wading waist-deep.`,"Trop prowadzi go w kółko. Wraca dokładnie tam, gdzie zaczął.":`The trail leads him in circles. He ends up exactly where he started.`,"Tryb obserwacji. Porusz myszą, by wrócić.":`Observation mode. Move the mouse to return.`,"Trzy odbicia. Nieźle. Rozbitek kiwa głową jak sędzia.":`Three skips. Not bad. The castaway nods like a judge.`,"Trzęsie mocniej. Dwa kokosy spadają — jeden trafia go w ramię.":`He shakes harder. Two coconuts fall — one hits his shoulder.`,"Trzęsie palmą, ale kokosy trzymają się zawzięcie. Palmie też jest głupio.":`He shakes the palm, but the coconuts hold on stubbornly. The palm is embarrassed too.`,"Trzęsie palmą. Jeden kokos spada, odbija się i ląduje w jego rękach.":`He shakes the palm. One coconut falls, bounces, and lands in his hands.`,"Tłuszcz kapie do ognia. Płomień strzela w górę i przypala mu brew.":`Fat drips into the fire. The flame leaps up and singes his eyebrow.`,"Udaje mu się zrobić linę i bransoletkę. Bransoletka jest zbędna.":`He manages to make rope and a bracelet. The bracelet is unnecessary.`,"Udaje mu się. Przez pół sekundy. Potem kokosy wracają do piasku.":`He manages it. For half a second. Then the coconuts return to the sand.`,"Uderza kokosem o kamień. Pęka równo, miąższ pachnie słońcem.":`He cracks the coconut against a stone. It splits cleanly, the flesh smells of sun.`,"Uderza z całej siły i trafia się w palec. Kokos jest nietknięty.":`He swings with all his might and hits his finger. The coconut is untouched.`,"Układa litery z desek. Z góry wyglądają jak SOS. Z ziemi jak deski.":`He lays out the letters in planks. From above they look like SOS. From the ground, like planks.`,"Układa liście równo, potem i tak je rozrzuca. Ależ porządek.":`He arranges the leaves neatly, then scatters them anyway. Such order.`,"Układa na tratwie kokosy, rybę i linę. Wszystko zabezpiecza węzłami.":`He stacks coconuts, fish, and rope on the raft. He secures it all with knots.`,"Unosi się na wodzie. Chmury przesuwają się nad nim bardzo powoli.":`He floats on the water. The clouds drift over him very slowly.`,"W chmurze widzi żaglowiec. W następnej — wielką rybę.":`In one cloud he sees a sailing ship. In the next — a giant fish.`,"W dołku siedzi krab. Krab jest wściekły. Rozbitek zasypuje dołek.":`A crab sits in the hole. The crab is furious. The castaway fills the hole in.`,"W kadłubie tkwi stary list. Adres jest rozmazany przez sól.":`An old letter is stuck in the hull. The address is blurred by salt.`,"W muszli siedzi krab pustelnik. Rozbitek odkłada ją bardzo ostrożnie.":`A hermit crab sits in the shell. The castaway puts it down very carefully.`,"W muszli znajduje perłę. Małą, ale prawdziwą.":`He finds a pearl in the shell. Small, but real.`,"W nocy woda śpiewa.":`At night the water sings.`,"W oddali coś błyska. Może światło. Może statek. Serce mu przyspiesza.":`Something flashes in the distance. Maybe a light. Maybe a ship. His heart speeds up.`,"W oddali słychać silnik. Cichnie. Rozbitek zostaje z podniesioną ręką.":`An engine sounds in the distance. It fades. The castaway is left with his hand raised.`,"W płytkiej wodzie leży stara butelka. W środku jest piasek i nic więcej.":`An old bottle lies in the shallow water. Inside is sand and nothing else.`,"W skrzyni jest jeden but. Lewy. Rozbitek ma już prawy.":`In the crate is one boot. Left. The castaway already has the right one.`,"W skrzyni leży zwój liny. Prawdziwej, morskiej liny.":`In the crate lies a coil of rope. Real, seafaring rope.`,"W skrzyni są kokosy. Skrzynia pachnie kokosami do dziś.":`The crate holds coconuts. It smells of coconuts to this day.`,"W skrzyni są muszle. Ktoś je kiedyś zbierał. Jak on.":`The crate holds shells. Someone once collected them. Like him.`,"W skrzyni są suche deski. Pachną żywicą, nie solą.":`The crate holds dry planks. They smell of resin, not salt.`,"W trawie znajduje ślad. Duży. Bardzo duży. Postanawia o nim nie myśleć.":`He finds a track in the grass. Big. Very big. He decides not to think about it.`,"W wodzie coś tnie fale.":`Something cuts through the water.`,"W wodzie mija go srebrna ryba. Patrzą na siebie przez chwilę.":`A silver fish swims past him in the water. They look at each other for a moment.`,"W wodzie pojawia się płetwa. Duża płetwa. Bardzo duża.":`A fin appears in the water. A big fin. A very big fin.`,"Wbija kołki i wiąże belki. Konstrukcja trzyma się kupy. Na razie.":`He drives pegs and ties beams. The structure holds together. For now.`,"Wbija włócznię w wodę i wyciąga rybę. Bez mrugnięcia okiem.":`He drives the spear into the water and pulls out a fish. Without blinking.`,"Wchodzi na skałę i przez chwilę widzi całą wyspę. Jest mniejsza, niż myślał.":`He climbs the rock and for a moment sees the whole island. It's smaller than he thought.`,"We mgle coś płynie bez załogi.":`Something sails through the fog without a crew.`,"Westchnienie ucieka mu gdzieś w stronę horyzontu.":`A sigh escapes him somewhere toward the horizon.`,"Wiatr zgarnia dym i roznosi go po plaży. Rozbitek wdycha własny sygnał.":`The wind scoops up the smoke and spreads it along the beach. The castaway inhales his own signal.`,"Widzi małą rybę, która patrzy na niego z ciekawością. Ryba nie ucieka.":`He sees a small fish watching him with curiosity. The fish doesn't flee.`,"Widzi spadającą gwiazdę. Składa życzenie, ale nie mówi jakie.":`He sees a shooting star. He makes a wish, but doesn't say what.`,"Wielka fala uderza w burtę. Tratwa przechyla się gwałtownie.":`A big wave hits the side. The raft lurches violently.`,"Wielka płetwa zbliżała się do brzegu. Okazała się dryfującym pniem z gałęzią. Rozbitek do końca życia będzie o tym opowiadał.":`The big fin was heading for shore. It turned out to be a drifting log with a branch. The castaway will tell this story for the rest of his life.`,"Wielki pojedynek na patyki. Rozbitek wygrywa i przegrywa jednocześnie.":`A grand duel of sticks. The castaway wins and loses at the same time.`,"Wiąże węzeł, który wygląda dobrze. Potem go rozwiązuje i wiąże lepiej.":`He ties a knot that looks good. Then unties it and ties a better one.`,"Woda jest zimna i słona. Nagle czuje się całkiem przytomny.":`The water is cold and salty. Suddenly he feels very awake.`,"Woda wyrzuca go na piasek. Tratwa wraca za nim, w kawałkach.":`The water throws him onto the sand. The raft follows, in pieces.`,"Wpada na pomysł. Zaraz go zapomina. Wpada na niego drugi raz.":`He gets an idea. Forgets it at once. Gets it again.`,"Wpatruje się w ogień tak długo, że widzi w nim obrazy.":`He stares into the fire so long he sees pictures in it.`,"Wrzuca butelkę do morza. List jest krótki: „Jestem tu”.":`He throws the bottle into the sea. The letter is short: „I'm here”.`,"Wróć na wyspę":`Back to the island`,"Wstaje, przeciąga się i nasłuchuje. Wyspa brzmi tak samo.":`He gets up, stretches, and listens. The island sounds the same.`,"Wyciąga dwie deski i gwóźdź. Gwóźdź jest najcenniejszy.":`He pulls out two planks and a nail. The nail is the most valuable.`,"Wyciąga dłonie nad ogniem. Twarz ma pomarańczową od blasku.":`He holds his palms over the fire. His face is orange in the glow.`,"Wyciąga ręce ku niebu, jakby chciał je dotknąć.":`He reaches for the sky as if he wants to touch it.`,"Wyciąga srebrną rybę. Ryba wygląda na bardziej zaskoczoną niż on.":`He pulls out a silver fish. The fish looks more surprised than he is.`,"Wyciąga stary but. But jest za mały, ale przynajmniej coś złowił.":`He pulls out an old boot. The boot is too small, but at least he caught something.`,"Wyciąga wodorosty oplecione wokół czegoś, co wygląda jak zegarek.":`He pulls out seaweed wrapped around something that looks like a watch.`,"Wykopuje kawałek czegoś, co wygląda jak kość. Odkłada to i zasypuje.":`He digs up something that looks like a bone. He puts it back and fills in the hole.`,"Wykopuje kraba. Krab wygląda na oburzonego, ale trafia do garnka.":`He digs up a crab. The crab looks offended, but it goes into the pot.`,"Wymyśla krok, który wygląda jak obrażanie się na własne nogi.":`He invents a step that looks like sulking at his own legs.`,"Wypada stary but. Drugi but. Rozbitek ma teraz parę, ale nie ma butów.":`An old boot falls out. The other boot. Now the castaway has a pair, but no shoes.`,"Wypija mleko jednym haustem i przez chwilę patrzy w niebo.":`He drinks the milk in one gulp and looks at the sky for a while.`,"Wypycha tratwę na wodę. Wskakuje na pokład i odbija od brzegu.":`He pushes the raft into the water. Hops aboard and pushes off.`,"Wyspa pamięta poprzednie dni. Rozbitek wraca do swoich spraw.":`The island remembers the previous days. The castaway returns to his business.`,"Wyspa staje się domem. Codzienność wraca, a wieczorami zdarzają się rzeczy, których nie da się wyjaśnić.":`The island becomes home. Routine returns, and in the evenings things happen that can't be explained.`,"Wyspa wstaje razem z nim. Piasek jest chłodny, morze spokojne.":`The island rises with him. The sand is cool, the sea calm.`,"Wystawia twarz do słońca. Przez chwilę nie ma żadnych zmartwień.":`He turns his face to the sun. For a moment he has no worries.`,"Wznosi kolejną wieżę. Zamek rośnie i robi się coraz bardziej absurdalny.":`He raises another tower. The castle grows and gets more and more absurd.`,"Węzeł pęka i cała konstrukcja się przekrzywia. Poprawia ją z westchnieniem.":`The knot snaps and the whole structure tilts. He straightens it with a sigh.`,"Włócznia wbija się w piasek. Ryba odpływa z godnością.":`The spear sticks in the sand. The fish swims away with dignity.`,"Z wody dobiega śpiew. Cichy, wysoki, niemożliwy.":`Singing comes from the water. Quiet, high, impossible.`,"Za krzakiem siedzi krab. Krab wygląda, jakby to on był tu gospodarzem.":`A crab sits behind the bush. The crab looks like the host here.`,"Zaczyna padać. Krople bębnią o liście palmy.":`It starts to rain. Drops drum on the palm leaves.`,"Zadaszenie gotowe. Pachnie palmą i deszczem.":`The shelter is done. It smells of palm and rain.`,"Zadaszenie stoi krzywo, ale stoi. Rozbitek patrzy na nie z dumą.":`The shelter stands crooked, but it stands. The castaway looks at it with pride.`,"Zadaszenie, ognisko i pierwsze deski tratwy. Wyspa przestaje być tylko miejscem, w którym się jest.":`A shelter, a campfire, and the first planks of a raft. The island stops being just a place you're in.`,"Zagląda pod kamień. Pod kamieniem jest cały mały świat.":`He looks under a stone. Under the stone is a whole little world.`,"Zamach jest tak mocny, że ląduje w wodzie razem z włócznią.":`The swing is so hard he lands in the water with the spear.`,"Zamyka oczy i nasłuchuje. Wyspa oddycha razem z nim.":`He closes his eyes and listens. The island breathes with him.`,"Zanurza głowę i wynurza się z głośnym westchnieniem.":`He ducks his head under and surfaces with a loud sigh.`,"Zapomina o wodzie. Wraca po nią. Potem zapomina, po co wracał.":`He forgets the water. Goes back for it. Then forgets why he went back.`,"Zapomina, dokąd szedł. Zawraca z wielką powagą.":`He forgets where he was going. He turns back with great seriousness.`,"Zasypia na chwilę i budzi się z piekącym nosem.":`He falls asleep for a moment and wakes with a stinging nose.`,"Zasypia. Budzi się z piaskiem w ustach i aniołem, którego nie pamięta.":`He falls asleep. Wakes with sand in his mouth and an angel he doesn't remember.`,"Zauważa w piasku wzór, którego wcześniej nie było.":`He notices a pattern in the sand that wasn't there before.`,"Zbiera garść czerwonych jagód. Dwie zjada od razu, na próbę.":`He gathers a handful of red berries. Eats two straight away, to test them.`,"Zbiera trzy muszle, potem gubi jedną po drodze. Zostają dwie.":`He collects three shells, then loses one on the way. Two left.`,"Ziewa tak szeroko, że sam się temu dziwi.":`He yawns so wide he surprises himself.`,"Ziewa, a potem ziewa jeszcze raz, bo pierwsze nie wyszło.":`He yawns, then yawns again, because the first one didn't come out right.`,"Zjada jagody garściami. Usta ma czerwone jak nigdy.":`He eats berries by the handful. His mouth is redder than ever.`,"Zjadłbym rybę. Dużą.":`I could go for a fish. A big one.`,"Znajduje kamień z błyszczącymi żyłkami. Może to coś cennego. Może nie.":`He finds a stone with shiny veins. Maybe it's valuable. Maybe not.`,"Znajduje kawałek liny, o którym zapomniał.":`He finds a piece of rope he'd forgotten about.`,"Znajduje muszlę i kawałek szkła oszlifowanego przez fale.":`He finds a shell and a piece of glass polished by the waves.`,"Znajduje muszlę w kształcie spirali. Wkłada ją do kieszeni.":`He finds a spiral shell. Puts it in his pocket.`,"Znajduje starą monetę. Nie ma pojęcia, co można nią kupić na wyspie.":`He finds an old coin. He has no idea what you can buy with it on the island.`,"Znajduje tylko muszlę i kawałek liny. Też coś.":`He finds only a shell and a piece of rope. Something, at least.`,"Znajduje w dachu gniazdo. Mieszka w nim jaszczurka. Zostawia ją.":`He finds a nest in the roof. A lizard lives in it. He leaves it be.`,"Znajduje wśród jagód jedną zieloną. Je ją. Żałuje.":`He finds one green berry among them. Eats it. Regrets it.`,"Znosi kilka desek z plaży. Drewno pachnie solą i słońcem.":`He carries some planks up from the beach. The wood smells of salt and sun.`,"Znowu słońce. Znowu piasek. Znowu on. Ale jakoś chce mu się żyć.":`Sun again. Sand again. Him again. But somehow he wants to live.`,"Zresetować historię wyspy? Rozbitek zapomni wszystkie dni i odkrycia.":`Reset the island's history? The castaway will forget all the days and discoveries.`,"Zrywa źdźbło trawy i obgryza je z namysłem.":`He picks a blade of grass and chews it thoughtfully.`,"bada skały":`explores the rocks`,"bawi się patykiem":`plays with a stick`,"buduje tratwę":`builds a raft`,błąd:`error`,"chodzi i myśli":`walks and thinks`,"cień palmy":`palm shadow`,codzienność:`daily life`,"coś jest w wodzie":`something is in the water`,"dokłada do ogniska":`adds to the fire`,"droga się urwała":`the path ran out`,"drzemie na plaży":`dozes on the beach`,"dzień ${info.day}":"day ${info.day}","dzień / czas":`day / time`,"dzień 16 i później":`day 16 and later`,"grzeje ręce przy ogniu":`warms his hands by the fire`,"idzie przez wyspę":`walks across the island`,"je rybę":`eats fish`,"leży na plecach w wodzie":`floats on his back in the water`,mgła:`fog`,"myśli o czymś":`thinks about something`,"naprawia tratwę":`repairs the raft`,"nasłuchuje morza":`listens to the sea`,"nie ma przejścia":`no way through`,"obserwuje coś niezwykłego":`watches something unusual`,"odkryte · dzień ${entry.day}":"discovered · day ${entry.day}",ogień:`fire`,"ogląda muszlę":`examines a shell`,"ostrzy włócznię":`sharpens a spear`,"pakuje zapasy na tratwę":`packs supplies onto the raft`,"patrzy na zachód słońca":`watches the sunset`,"piecze rybę":`roasts a fish`,"pod palmą":`under the palm`,"poluje z włócznią":`hunts with a spear`,"porządkuje zadaszenie":`tidies the shelter`,"południowa plaża":`south beach`,"południowy brzeg":`south shore`,"przechadza się":`takes a stroll`,"przeszukuje płytką wodę":`searches the shallow water`,przygnębiony:`downcast`,prędkość:`speed`,"północna plaża":`north beach`,"północna trawa":`north grass`,"północny brzeg":`north shore`,płonie:`burning`,"płytka woda":`shallow water`,pływa:`swims`,"robi anioła z piasku":`makes a sand angel`,"rozciąga się":`stretches`,"rozgląda się po wyspie":`looks around the island`,"siedzi na plaży":`sits on the beach`,"skręca linę z włókien":`twists rope from fibers`,"sprawdza dziwny dźwięk":`investigates a strange sound`,szczęśliwy:`happy`,słońce:`sun`,tańczy:`dances`,"trawiasta górka":`grassy hillock`,trójkąty:`triangles`,"układa napis SOS":`spells out SOS`,"w środku zadaszenia":`inside the shelter`,"wraki na plaży":`wrecks on the beach`,"wschodnia plaża":`east beach`,"wygrzewa się na słońcu":`basks in the sun`,"wypatruje statków":`scans for ships`,"wypływa tratwą":`sets out on the raft`,"wysyła list w butelce":`sends a message in a bottle`,"wznosi sygnał dymny":`builds a smoke signal`,"za długo idzie":`walking too long`,"zachodnia plaża":`west beach`,załamany:`heartbroken`,"Łapie słońce w kawałek szkła. Błysk leci w stronę horyzontu.":`He catches the sun in a piece of glass. A flash shoots toward the horizon.`,"łata dach zadaszenia":`patches the shelter roof`,"łowi ryby":`fishes`,"Śni mu się statek. Uśmiecha się przez sen.":`He dreams of a ship. He smiles in his sleep.`,"Śpi twardo. Przez sen mamrocze coś o kokosach.":`He sleeps deeply. Mumbles something about coconuts in his sleep.`,"Śpi. Oddycha spokojnie, a wyspa pilnuje go w ciemności.":`He sleeps. Breathes calmly, and the island watches over him in the dark.`,"śledzi kraba":`follows a crab`,śpi:`sleeps`,"środek wyspy":`middle of the island`,"Żongluje dwoma kokosami. Przez chwilę jest najszczęśliwszym rozbitkiem.":`He juggles two coconuts. For a moment he is the happiest castaway.`,"Życie na wyspie":`Island life`,"Żyłka pęka. Rozbitek traci równowagę i wpada po pas do wody.":`The line snaps. The castaway loses his balance and falls waist-deep into the water.`,"Żółw morski":`Sea turtle`,"Żółw morski wygrzebał się z oceanu, przeszedł plażę i wrócił do wody. Nikt mu nie przeszkadzał.":`A sea turtle crawled out of the ocean, crossed the beach, and went back into the water. Nobody bothered it.`,"Żółw zawraca i znika w falach. Zostają ślady na piasku.":`The turtle turns back and vanishes into the waves. Tracks remain in the sand.`,"żongluje kokosami":`juggles coconuts`},vp=`pl`;function yp(e){vp=e,typeof document<`u`&&(document.documentElement.lang=e)}function bp(){return vp}function $(e,t){return vp===`en`?t:e}var xp={słońce:`sun`,chmury:`clouds`,deszcz:`rain`,burza:`storm`,mgła:`fog`,ognisko:`campfire`,tratwa:`raft`,zadaszenie:`shelter`,"w środku zadaszenia":`inside the shelter`,"miejsce na ryby":`fishing spot`,"zachodnia plaża":`west beach`,"południowa plaża":`south beach`,"wschodnia plaża":`east beach`,"północna plaża":`north beach`,"spokojna zatoczka":`quiet cove`,"pod palmą":`under the palm`,"cień palmy":`palm shade`,"obok ogniska":`by the fire`,"miejsce wodowania":`launch spot`,"punkt widokowy":`lookout`,"napis SOS":`SOS sign`,"zamek z piasku":`sandcastle`,"wraki na plaży":`wrecks on the beach`,"krzew jagodowy":`berry bush`,"środek wyspy":`island center`,"północna trawa":`north grass`,"wschodni skraj trawy":`eastern grass edge`,"zachodni skraj trawy":`western grass edge`,"trawiasta górka":`grassy knoll`,"północny brzeg":`north shore`,"południowy brzeg":`south shore`,"widok na horyzont":`horizon view`,"płytka woda":`shallow water`,"kopie w piasku":`digs in the sand`,"przeszukuje wrak":`searches the wreck`,"siedzi na trawie":`sits on the grass`,"patrzy w gwiazdy":`looks at the stars`,"obserwuje chmury":`watches the clouds`,"przemywa twarz w morzu":`washes his face in the sea`,ziewa:`yawns`,"zbiera kokosy":`gathers coconuts`,"rozbija kokos":`cracks a coconut`,"je kokos":`eats a coconut`,"pije mleko kokosowe":`drinks coconut milk`,"zbiera jagody":`picks berries`,"je jagody":`eats berries`,"poluje na kraba":`hunts a crab`,"zbiera muszle":`collects shells`,"puszcza kaczki na wodzie":`skips stones across the water`,"rzuca kamieniami do wody":`throws stones into the water`,"rysuje na piasku":`draws in the sand`,"rozmawia z krabem":`talks to a crab`,"nadaje lustrem":`signals with a mirror`,"zbiera drewno":`gathers wood`,"rozpala ognisko":`lights the campfire`,"buduje zadaszenie":`builds a shelter`,"buduje zamek z piasku":`builds a sandcastle`,"Coś białego krąży nad plażą.":`Something white is circling over the beach.`,"Mewa poderwała mu spodenki i odleciała z nimi nad lagunę. Wrócił w liściu i z godnością, której nikt nie kupił.":`The gull snatched his shorts and carried them over the lagoon. He returned in a leaf and with a dignity no one bought.`,"Nad plażą krąży mewa. Zbyt nisko, zbyt pewnie.":`A gull circles the beach. Too low, too confident.`,"Mewa pikuje wprost na niego.":`The gull dives straight at him.`,"Mewa chwyta spodenki i zrywa się do lotu. Rozbitek zostaje w morzu do pasa.":`The gull grabs the shorts and takes off. The castaway is left waist-deep in the sea.`,"Krzyczy. Mewa nie przejmuje się. Mewa ma spodenki.":`He shouts. The gull does not care. The gull has the shorts.`,"Mewa zatacza koło nad laguną i nuci coś, co brzmi jak kpina.":`The gull circles the lagoon and hums something that sounds like mockery.`,"Spodenki spadają na piasek. Rozbitek podnosi je bez słowa i zakłada z godnością.":`The shorts fall onto the sand. The castaway picks them up without a word and puts them on with dignity.`,"Balon znika za chmurami. Rozbitek nadal macha.":`The balloon disappears behind the clouds. The castaway keeps waving.`,"Delfin wyskakuje z wody. Rozbitek klaszcze jak na przedstawieniu.":`A dolphin leaps out of the water. The castaway applauds like he is at a show.`,"Deszcz gasi ognisko. Zostaje syk i dym.":`Rain puts out the fire. A hiss and smoke remain.`,"Krab szczypie go w palec i ucieka bokiem. Bardzo szybko.":`The crab pinches his finger and scuttles away sideways. Very fast.`,"Pakuje zapasy, potem przepakowuje je jeszcze raz. I jeszcze raz.":`He packs the supplies, then repacks them. And again.`,"Przystaje i patrzy na morze. Chyba liczy fale.":`He stops and looks at the sea. He seems to be counting waves.`,"Rzuca patyk, a pies przynosi go z powrotem. Psa nie ma.":`He throws a stick and a dog brings it back. There is no dog.`,"Statek nie zmienia kursu. Znika za horyzontem.":`The ship does not change course. It disappears beyond the horizon.`,"Szkielet zadaszenia stoi. Wiatr go testuje.":`The shelter frame stands. The wind tests it.`,"Zamiata piasek piaskiem. Wyspa nie komentuje.":`He sweeps sand with sand. The island does not comment.`,"Zostaje tylko cisza i ta sama wyspa.":`Only silence and the same island remain.`,Rozpoznanie:`Landfall`,"Pierwsze konstrukcje":`First Builds`,"Tratwa jest gotowa. Morze czeka.":`The raft is ready. The sea waits.`,"Lilipucia piraci":`The Lilliputian Pirates`,"Na wodzie pojawia się żagiel wielkości liścia.":`A sail the size of a leaf appears on the water.`,"Trójka lilipucich piratów przybiła do brzegu, skradła kokos i odpłynęła, kłócąc się o podział łupu. Rozbitek pomachał im na pożegnanie.":`Three tiny pirates came ashore, stole a coconut and sailed away arguing over the loot. The castaway waved goodbye.`,"Na wodzie pojawia się żagiel wielkości liścia. Coś na nim macha.":`A sail the size of a leaf appears on the water. Something on it is waving.`,"Łódka przybija do brzegu. Trójka lilipucich piratów zeskakuje na piasek.":`The little boat reaches the shore. Three tiny pirates jump onto the sand.`,"Piraci kłócą się o jednego kokosa. Kokos jest większy od nich.":`The pirates argue over a single coconut. The coconut is bigger than they are.`,"Piraci wracają na łódkę i odpływają, wciąż kłócąc się o kokosa.":`The pirates return to their boat and sail away, still arguing over the coconut.`,"Na piasku zostaje maleńka flaga i ślad trzech par butów.":`A tiny flag and the prints of three pairs of boots remain on the sand.`,"Mewa z zaskoczenia":`A Gull Out of Nowhere`},Sp=[[`Odkrycie: `,`Discovery: `],[`Nowe odkrycie: `,`New discovery: `],[`Nowy rozdział: `,`New chapter: `],[`Przesunięto czas o godzinę.`,`Time moved forward one hour.`],[`Ustawienia skopiowane do schowka.`,`Settings copied to clipboard.`],[`Dźwięki otoczenia włączone.`,`Ambient sound enabled.`],[`AI zresetowane.`,`AI reset.`],[`Kamera izometryczna.`,`Isometric camera.`],[`Kamera swobodna.`,`Free camera.`],[`Tryb obserwacji. Porusz myszą, by wrócić.`,`Watch mode. Move the mouse to return.`]];function Cp(e){if(vp!==`en`)return e;if(_p[e])return _p[e];if(xp[e])return xp[e];for(let[t,n]of Sp)if(e.startsWith(t))return n+Cp(e.slice(t.length));return e.startsWith(`dni `)?`days ${e.slice(4)}`:e.startsWith(`dzień `)?`day ${e.slice(6)}`:e.startsWith(`Dzień `)?`Day ${e.slice(6)}`:e.includes(` · `)?e.split(` · `).map(e=>Cp(e)).join(` · `):e}var wp={"🐟":`fish`,"🥥":`coconut`,"💤":`bed`,"⛵":`ship`,"🚢":`ship`,"🧜‍♀️":`mermaid`,"🔥":`fire`,"🛶":`raft`,"🛖":`shelter`,"🌅":`sun`,"🌊":`sun`,"🍾":`bottle`,"🧭":`compass`,"❓":`compass`,"🦀":`crab`,"🐦":`gull`,"🕊️":`gull`,"😳":`shorts`,"😤":`shorts`,"🏴‍☠️":`pirates`,"🪵":`wood`,"🔨":`wood`,"🏝️":`island`,"🏝":`island`,"🌩️":`storm`,"⛈️":`storm`,"💰":`chest`,"☀️":`sun`,"💭":`moon`};function Tp(e){return wp[e]??`moon`}function Ep(e){return`./thought-icons/${Tp(e)}.png`}var Dp=e=>{let t=document.getElementById(e);if(!t)throw Error(`Missing element #${e}`);return t},Op=e=>e.replace(/[&<>"']/g,e=>{switch(e){case`&`:return`&amp;`;case`<`:return`&lt;`;case`>`:return`&gt;`;case`"`:return`&quot;`;default:return`&#39;`}}),kp=class{bus;settings;sim;hooks;dayLabel=Dp(`dayLabel`);timeLabel=Dp(`timeLabel`);weatherLabel=Dp(`weatherLabel`);moodWord=Dp(`moodWord`);activityText=Dp(`activityText`);vitals=Dp(`vitals`);journal=Dp(`journal`);journalBody=Dp(`journalBody`);settingsPanel=Dp(`settings`);debugPanel=Dp(`debugPanel`);debugBody=Dp(`debugBody`);intro=Dp(`intro`);introStart=Dp(`introStart`);toast=Dp(`toast`);audioHint=Dp(`audioHint`);pauseBadge=Dp(`pauseBadge`);thoughtBubble=Dp(`thoughtBubble`);thoughtIcon=Dp(`thoughtIcon`);revealHint=Dp(`revealHint`);dayLength=Dp(`dayLength`);dayLengthOut=Dp(`dayLengthOut`);soundToggle=Dp(`sound`);followToggle=Dp(`follow`);debugToggle=Dp(`debug`);languageSelect=Dp(`language`);speedButtons=Array.from(document.querySelectorAll(`#speedSeg button`));vitalRows=Array.from(document.querySelectorAll(`.vital`));tab=`log`;hudTimer=0;debugTimer=0;toastTimer=0;screensaver=!1;introDismissed=!1;paused=!1;lastLogCount=-1;revealTimer=0;thoughtKey=``;thoughtArtKey=``;thoughtX=0;thoughtY=0;thoughtOnScreen=!1;constructor(e,t,n,r){this.bus=e,this.settings=t,this.sim=n,this.hooks=r,yp(t.value.language),this.bind(),this.applyLanguage(),this.syncControls(),this.setDebugVisible(t.value.debug),this.soundToggle.checked=t.value.sound,this.renderHud(),n.keeper.actionsDone>0&&(this.introStart.textContent=`Wróć na wyspę`),window.setInterval(()=>this.quizIntro(),1500)}applyLanguage(){let e=(e,t,n)=>{let r=document.querySelector(e);r&&(r.textContent=$(t,n))},t=(e,t,n)=>{let r=document.querySelector(e);r&&(r.innerHTML=$(t,n))},n=(e,t,n)=>{let r=document.querySelector(e);r&&(r.title=$(t,n),r.setAttribute(`aria-label`,$(t,n)))},r=(e,t,n,r,i,a)=>{let o=document.querySelector(`#settings input[name="${e}"][value="${t}"]`)?.closest(`label`);if(!o)return;let s=o.querySelector(`span`),c=o.querySelector(`em`);s&&(s.textContent=$(n,r)),c&&(c.textContent=$(i,a))},i=(e,t,n)=>{let r=document.querySelector(e)?.closest(`label`)?.querySelector(`span`);r&&(r.textContent=$(t,n))};document.title=$(`Voxel Castaway — samotnik z wyspy`,`Voxel Castaway — a castaway's island`);let a=document.querySelector(`meta[name="description"]`);a&&(a.content=$(`Voxel Castaway — autonomiczna voxelowa wyspa. Obserwuj rozbitka, który żyje własnym życiem.`,`Voxel Castaway — an autonomous voxel island. Watch a castaway live a life of his own.`)),e(`.brand p`,`samotnik z wyspy`,`alone on the island`),e(`#vitals .panel-head > span:first-child`,`Stan rozbitka`,`Castaway's state`);let o={hunger:[`Głód`,`Hunger`],energy:[`Energia`,`Energy`],boredom:[`Nuda`,`Boredom`],mood:[`Nastrój`,`Mood`],hope:[`Nadzieja`,`Hope`],curiosity:[`Ciekawość`,`Curiosity`]};for(let e of this.vitalRows){let t=e.dataset.need;if(!t||!o[t])continue;let n=e.querySelector(`span`);n&&(n.textContent=$(o[t][0],o[t][1]))}document.getElementById(`vitals`)?.setAttribute(`aria-label`,$(`Stan rozbitka`,`Castaway's state`)),e(`#journal .panel-head > span:first-child`,`Dziennik`,`Journal`),e(`[data-tab="log"]`,`Zapiski`,`Log`),e(`[data-tab="finds"]`,`Odkrycia`,`Finds`),e(`[data-tab="story"]`,`Historia`,`Story`),document.getElementById(`journal`)?.setAttribute(`aria-label`,$(`Dziennik`,`Journal`)),e(`#btnJournal span:last-child`,`dziennik`,`journal`),e(`#btnScreensaver span:last-child`,`tylko patrz`,`watch only`),e(`#btnSettings span:last-child`,`ustawienia`,`settings`),n(`#btnJournal`,`Dziennik (J)`,`Journal (J)`),n(`#btnScreensaver`,`Tryb wygaszacza (H)`,`Screensaver mode (H)`),n(`#btnSettings`,`Ustawienia (S)`,`Settings (S)`),e(`#revealHint`,`najedź kursorem, aby przywołać panel`,`move the cursor to bring the panel back`),e(`#settings .panel-head > span:first-child`,`Ustawienia obserwacji`,`Observation settings`);let s=document.querySelectorAll(`#settings fieldset legend`),c=[[`Kamera`,`Camera`],[`Upływ czasu`,`Time`],[`Prędkość symulacji`,`Simulation speed`],[`Dźwięk`,`Sound`],[`Język / Language`,`Język / Language`],[`Diagnostyka`,`Diagnostics`]];s.forEach((e,t)=>{let n=c[t];n&&(e.textContent=n[0]===`Język / Language`?n[1]:$(n[0],n[1]))}),r(`camera`,`iso`,`Izometryczna`,`Isometric`,`nieruchoma miniatura`,`fixed miniature`),r(`camera`,`free`,`Swobodna`,`Free`,`obrót i zoom`,`orbit and zoom`),i(`#follow`,`Śledź rozbitka`,`Follow the castaway`),r(`clock`,`fast`,`Przyspieszony`,`Fast`,`doba co 30 minut`,`one day every 30 minutes`),r(`clock`,`real`,`Zegar systemowy`,`System clock`,`pora dnia jak u Ciebie`,`time of day like yours`);let l=document.querySelector(`#dayLength`)?.closest(`label`)?.querySelector(`span`);l&&(l.textContent=$(`Długość doby`,`Day length`));let u=this.languageSelect.closest(`label`)?.querySelector(`span`);u&&(u.textContent=$(`Język`,`Language`)),i(`#sound`,`Dźwięki otoczenia`,`Ambient sounds`),e(`#soundNote`,`Fale, wiatr, ogień i nocne świerszcze. Dźwięk włącza się po kliknięciu.`,`Waves, wind, fire and night crickets. Sound starts after a click.`),i(`#debug`,`Panel diagnostyczny`,`Diagnostic panel`),e(`#btnFullscreen`,`Pełny ekran`,`Fullscreen`),e(`#btnCopy`,`Kopiuj ustawienia`,`Copy settings`),e(`#btnReset`,`Resetuj historię`,`Reset story`),e(`#settings .note.tiny`,`Obserwacja trwa. Wszystko, co widzisz, dzieje się bez Twojego udziału.`,`The observation continues. Everything you see happens without your input.`),e(`#debugPanel .panel-head > span:first-child`,`Diagnostyka`,`Diagnostics`);let d={skipHour:[`+1 godzina`,`+1 hour`],forceRain:[`deszcz`,`rain`],forceClear:[`słońce`,`clear`],forceShip:[`statek`,`ship`],forceMermaid:[`syrena`,`mermaid`],forceChest:[`skrzynia`,`chest`],forceSeagull:[`mewa`,`gull`],forcePirates:[`piraci`,`pirates`],forceHoliday:[`święto`,`holiday`],forceStorm:[`burza`,`storm`],resetAI:[`reset AI`,`reset AI`]};document.querySelectorAll(`[data-debug]`).forEach(e=>{let t=d[e.dataset.debug??``];t&&(e.textContent=$(t[0],t[1]))}),document.getElementById(`debugPanel`)?.setAttribute(`aria-label`,$(`Diagnostyka`,`Diagnostics`)),t(`#audioHint`,`<span>♪</span> kliknij, by usłyszeć wyspę`,`<span>♪</span> click to hear the island`),e(`.intro .eyebrow`,`pewnego dnia morze wyrzuciło go na brzeg`,`one day the sea washed him ashore`),t(`.intro .sub`,`Mała wyspa. Jeden rozbitek. Żadnych poleceń.<br />Po prostu patrz, jak żyje.`,`A small island. One castaway. No commands.<br />Just watch him live.`),e(`.intro-foot`,`Wyspa działa także bez Ciebie.`,`The island works without you, too.`),e(`#pauseBadge`,`pauza`,`paused`),this.introStart.textContent=this.sim.keeper.actionsDone>0?$(`Wróć na wyspę`,`Return to the island`):$(`Zacznij obserwację`,`Start watching`),this.quizIntro()}bind(){Dp(`btnSettings`).addEventListener(`click`,()=>this.togglePanel(`settings`)),Dp(`btnJournal`).addEventListener(`click`,()=>this.togglePanel(`journal`)),Dp(`btnScreensaver`).addEventListener(`click`,()=>this.toggleScreensaver()),document.querySelectorAll(`[data-close]`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.dataset.close;t===`settings`&&this.settingsPanel.classList.add(`hidden`),t===`journal`&&this.journal.classList.add(`hidden`),t===`debug`&&this.setDebugVisible(!1)})}),document.querySelectorAll(`input[name="camera"]`).forEach(e=>{e.addEventListener(`change`,()=>{e.checked&&this.settings.set(`camera`,e.value)})}),document.querySelectorAll(`input[name="clock"]`).forEach(e=>{e.addEventListener(`change`,()=>{e.checked&&this.settings.set(`clock`,e.value)})}),this.languageSelect.addEventListener(`change`,()=>{let e=this.languageSelect.value===`en`?`en`:`pl`;this.settings.set(`language`,e);let t=new URL(window.location.href);t.searchParams.set(`lang`,e),window.history.replaceState(null,``,t),yp(e),this.applyLanguage(),this.thoughtKey=``,this.renderHud(),this.renderJournal(),this.renderDebug()}),this.followToggle.addEventListener(`change`,()=>{this.settings.set(`follow`,this.followToggle.checked)}),this.dayLength.addEventListener(`input`,()=>{this.dayLengthOut.textContent=`${this.dayLength.value} min`}),this.dayLength.addEventListener(`change`,()=>{this.settings.set(`dayLengthMin`,Number(this.dayLength.value)),this.showToast(`Doba trwa teraz ${this.dayLength.value} minut.`)}),this.speedButtons.forEach(e=>{e.addEventListener(`click`,()=>{let t=Number(e.dataset.speed);this.settings.set(`speed`,t)})}),this.soundToggle.addEventListener(`change`,()=>{this.settings.set(`sound`,this.soundToggle.checked),this.soundToggle.checked?(this.hooks.audioUnlock(),this.audioHint.classList.add(`hidden`),this.showToast(`Dźwięki otoczenia włączone.`)):this.showToast(`Dźwięki wyciszone.`)}),this.debugToggle.addEventListener(`change`,()=>{let e=this.debugToggle.checked;this.settings.set(`debug`,e),this.setDebugVisible(e)}),document.querySelectorAll(`.journal-tabs .tab`).forEach(e=>{e.addEventListener(`click`,()=>{this.tab=e.dataset.tab??`log`,document.querySelectorAll(`.journal-tabs .tab`).forEach(t=>{t.classList.toggle(`active`,t===e)}),this.renderJournal()})}),Dp(`btnFullscreen`).addEventListener(`click`,()=>this.hooks.onFullscreen()),Dp(`btnCopy`).addEventListener(`click`,()=>{let e={...this.settings.value,seed:this.sim.seed,day:this.sim.clock.day,actionCount:this.sim.actionCount};this.hooks.onCopy(JSON.stringify(e,null,2)),this.showToast(`Ustawienia skopiowane do schowka.`)}),Dp(`btnReset`).addEventListener(`click`,()=>{window.confirm($(`Zresetować historię wyspy? Rozbitek zapomni wszystkie dni i odkrycia.`,`Reset the island story? The castaway will forget all days and discoveries.`))&&this.hooks.onReset()}),this.$debugActions(),this.bindKeyboard(),this.intro.addEventListener(`click`,()=>this.dismissIntro()),this.introStart.addEventListener(`click`,e=>{e.stopPropagation(),this.dismissIntro()}),this.audioHint.addEventListener(`click`,e=>{e.stopPropagation(),this.settings.set(`sound`,!0),this.soundToggle.checked=!0,this.hooks.audioUnlock(),this.audioHint.classList.add(`hidden`),this.showToast(`Dźwięki otoczenia włączone.`)}),document.addEventListener(`pointerdown`,()=>{this.hooks.audioUnlock(),this.audioHint.classList.add(`hidden`)}),document.addEventListener(`pointermove`,()=>{this.screensaver&&(this.revealTimer=1.4,this.revealHint.classList.remove(`hidden`),window.setTimeout(()=>{this.screensaver&&this.toggleScreensaver(!1)},260))}),this.bus.on(`log`,()=>{!this.journal.classList.contains(`hidden`)&&this.tab===`log`&&this.renderJournal()}),this.bus.on(`rare:event`,()=>{!this.journal.classList.contains(`hidden`)&&this.tab===`finds`&&this.renderJournal()}),this.bus.on(`toast`,({text:e})=>this.showToast(e)),this.bus.on(`settings:changed`,()=>{bp()!==this.settings.value.language&&(yp(this.settings.value.language),this.thoughtKey=``,this.applyLanguage(),this.renderHud(),this.renderJournal(),this.renderDebug()),this.syncControls(),this.setDebugVisible(this.settings.value.debug)}),this.bus.on(`activity:changed`,()=>this.renderActivity()),this.bus.on(`needs:changed`,()=>{this.hudTimer<=0&&this.renderVitals(this.sim.needs)})}$debugActions(){document.querySelectorAll(`[data-debug]`).forEach(e=>{e.addEventListener(`click`,()=>{switch(e.dataset.debug){case`skipHour`:this.sim.skipHours(1),this.showToast(`Przesunięto czas o godzinę.`);break;case`forceRain`:this.sim.forceWeather(`rain`);break;case`forceClear`:this.sim.forceWeather(`clear`);break;case`forceStorm`:this.sim.forceWeather(`storm`);break;case`forceShip`:this.sim.forceRare(`ship`);break;case`forceMermaid`:this.sim.forceRare(`mermaid`);break;case`forceChest`:this.sim.forceRare(`chest`);break;case`forceSeagull`:this.sim.forceRare(`seagull`);break;case`forcePirates`:this.sim.forceRare(`pirates`);break;case`forceHoliday`:{let e=this.sim.holidays.cycle();this.showToast($(`Święto: ${e}`,`Holiday: ${e}`));break}case`resetAI`:this.sim.resetAI(),this.showToast(`AI zresetowane.`)}})})}bindKeyboard(){document.addEventListener(`keydown`,e=>{let t=e.target;if(t&&[`INPUT`,`TEXTAREA`,`SELECT`].includes(t.tagName))return;let n=e.key.toLowerCase();if(n===`h`)e.preventDefault(),this.toggleScreensaver();else if(n===`s`)e.preventDefault(),this.togglePanel(`settings`);else if(n===`j`)e.preventDefault(),this.togglePanel(`journal`);else if(n===`d`)e.preventDefault(),this.setDebugVisible(!this.settings.value.debug);else if(n===`f`)e.preventDefault(),this.hooks.onFullscreen();else if(n===`c`)e.preventDefault(),this.settings.set(`camera`,this.settings.value.camera===`iso`?`free`:`iso`),this.showToast(this.settings.value.camera===`iso`?`Kamera izometryczna.`:`Kamera swobodna.`);else if(e.code===`Space`)e.preventDefault(),this.togglePause();else if(n===`escape`)this.settingsPanel.classList.add(`hidden`),this.journal.classList.add(`hidden`),this.setDebugVisible(!1);else if(n===`1`||n===`2`||n===`5`){let e=Number(n);this.settings.set(`speed`,e)}})}quizIntro(){this.introDismissed||this.sim.keeper.actionsDone>0&&(this.introStart.textContent=$(`Wróć na wyspę`,`Return to the island`))}dismissIntro(){this.introDismissed||(this.introDismissed=!0,document.body.classList.remove(`intro-open`),this.intro.classList.add(`dismissed`),this.hooks.audioUnlock(),this.settings.value.sound||(this.audioHint.classList.remove(`hidden`),window.setTimeout(()=>this.audioHint.classList.add(`hidden`),9e3)))}togglePanel(e){if(e===`settings`){let e=this.settingsPanel.classList.contains(`hidden`);this.settingsPanel.classList.toggle(`hidden`),this.journal.classList.add(`hidden`),e&&this.syncControls()}else{let e=this.journal.classList.contains(`hidden`);this.journal.classList.toggle(`hidden`),this.settingsPanel.classList.add(`hidden`),e&&this.renderJournal()}}setDebugVisible(e){this.debugPanel.classList.toggle(`hidden`,!e),this.debugToggle.checked=e,this.settings.value.debug!==e&&this.settings.set(`debug`,e),e&&this.renderDebug()}toggleScreensaver(e){let t=e??!this.screensaver;this.screensaver=t,document.body.classList.toggle(`ui-hidden`,t),this.revealHint.classList.toggle(`hidden`,!t),t?(this.settingsPanel.classList.add(`hidden`),this.journal.classList.add(`hidden`),this.showToast(`Tryb obserwacji. Porusz myszą, by wrócić.`,2200)):this.revealHint.classList.add(`hidden`),this.hooks.onScreensaver(t)}togglePause(){this.paused=!this.paused,this.pauseBadge.classList.toggle(`hidden`,!this.paused),this.hooks.onPause(this.paused)}isPaused(){return this.paused}showToast(e,t=3200){this.toast.textContent=Cp(e),this.toast.classList.add(`show`),window.clearTimeout(this.toastTimer),this.toastTimer=window.setTimeout(()=>this.toast.classList.remove(`show`),t)}update(e){this.renderThought(),this.hudTimer-=e,this.hudTimer<=0&&(this.hudTimer=.2,this.renderHud()),this.debugPanel.classList.contains(`hidden`)||(this.debugTimer-=e,this.debugTimer<=0&&(this.debugTimer=.5,this.renderDebug()))}positionThought(e,t,n){this.thoughtX=e,this.thoughtY=t,this.thoughtOnScreen=n}renderThought(){let e=this.sim.thought;if(!(e&&this.introDismissed&&this.thoughtOnScreen&&this.sim.simTime<e.until)||!e){this.thoughtBubble.classList.add(`hidden`);return}let t=`${bp()}|${e.icon}|${e.pl}|${e.en}`;t!==this.thoughtKey&&(this.thoughtKey=t,this.thoughtBubble.setAttribute(`aria-label`,bp()===`en`?e.en:e.pl)),e.icon!==this.thoughtArtKey&&(this.thoughtArtKey=e.icon,this.thoughtIcon.src=Ep(e.icon)),this.thoughtBubble.style.left=`${this.thoughtX}px`,this.thoughtBubble.style.top=`${this.thoughtY}px`,this.thoughtBubble.classList.remove(`hidden`)}renderHud(){let e=this.sim.clock.info;this.dayLabel.textContent=`${$(`dzień`,`day`)} ${e.day}`,this.timeLabel.textContent=e.timeString,this.weatherLabel.textContent=Cp(this.sim.weather.state.label),this.renderVitals(this.sim.needs),this.renderActivity();let t=this.sim.journalEntries;this.lastLogCount!==t.length&&(this.lastLogCount=t.length)}renderActivity(){let e=this.sim.currentSpotLabel,t=Cp(e),n=Cp(this.sim.currentActivity),r=t&&n.toLowerCase().includes(t.toLowerCase());this.activityText.textContent=t&&!r?`${n} · ${t}`:n}renderVitals(e){let t=e.mood>78?$(`szczęśliwy`,`happy`):e.mood>62?$(`dobry humor`,`good mood`):e.mood>45?$(`spokojny`,`calm`):e.mood>28?$(`przygnębiony`,`downcast`):$(`załamany`,`heartbroken`);this.moodWord.textContent=t;for(let t of this.vitalRows){let n=t.dataset.need;if(!n)continue;let r=Math.round(e[n]),i=t.querySelector(`.track i`),a=t.querySelector(`b`);i&&(i.style.width=`${Math.max(2,r)}%`),a&&(a.textContent=String(r));let o=n===`hunger`&&r>76||n===`energy`&&r<24||n===`boredom`&&r>82;t.classList.toggle(`warn`,o)}}syncControls(){let e=this.settings.value;this.languageSelect.value=e.language,document.querySelectorAll(`input[name="camera"]`).forEach(t=>{t.checked=t.value===e.camera}),document.querySelectorAll(`input[name="clock"]`).forEach(t=>{t.checked=t.value===e.clock}),this.followToggle.checked=e.follow,this.soundToggle.checked=e.sound,this.debugToggle.checked=e.debug,this.dayLength.value=String(e.dayLengthMin),this.dayLengthOut.textContent=`${e.dayLengthMin} min`,this.speedButtons.forEach(t=>{t.classList.toggle(`active`,Number(t.dataset.speed)===e.speed)})}renderJournal(){if(this.tab===`log`){let e=[...this.sim.journalEntries].reverse().slice(0,60);if(e.length===0){this.journalBody.innerHTML=`<p class="storyline">${$(`Jeszcze nic się nie wydarzyło.`,`Nothing has happened yet.`)}</p>`;return}this.journalBody.innerHTML=e.map(e=>`
          <div class="entry ${e.kind}">
            <time>${$(`dzień`,`day`)} ${e.day}<br>${e.time}</time>
            <span>${Op(Cp(e.text))}</span>
          </div>`).join(``),this.journalBody.scrollTop=0}else if(this.tab===`finds`){let e=new Set(this.sim.discoveries),t=Nf.map(t=>{if(!e.has(t.id))return`
            <div class="find locked">
              <span class="sigil">?</span>
              <div><b>???</b><small>${Op(Cp(t.teaser))}</small></div>
            </div>`;let n=this.sim.journalEntries.find(e=>e.tag===t.id),r=n?`${$(`odkryte`,`discovered`)} · ${$(`dzień`,`day`)} ${n.day}`:$(`odkryte`,`discovered`);return`
          <div class="find">
            <span class="sigil">✦</span>
            <div><b>${Op(Cp(t.title))}</b><small>${r}</small></div>
          </div>`}).join(``);this.journalBody.innerHTML=`
        <div class="storyline" style="margin-bottom:10px;font-size:10px;color:var(--cream-faint);letter-spacing:.08em;">
          ${$(`Odkryto ${this.sim.discoveries.length} z ${Nf.length}. Rzadkie chwile wracają, ale tylko niektóre zostają w pamięci.`,`Discovered ${this.sim.discoveries.length} of ${Nf.length}. Rare moments return, but only some stay in memory.`)}
        </div>
        <div class="finds">${t}</div>`}else{let e=this.sim.story.getJournal(this.sim.clock.day);this.journalBody.innerHTML=e.map(e=>`
          <div class="storyline" style="margin-bottom:16px;">
            <h3>${e.index}. ${Op(Cp(e.title))} <span style="font-family:var(--mono);font-size:8px;letter-spacing:.12em;color:var(--cream-faint);text-transform:uppercase;">${Op(Cp(e.days))}</span></h3>
            ${e.unlocked?`<p>${Op(Cp(e.summary))}</p>`:`<p class="locked">${$(`Ta część historii jeszcze się nie wydarzyła.`,`This part of the story has not happened yet.`)}</p>`}
          </div>`).join(``)}}renderDebug(){let e=this.sim,t=e.clock.info,n=this.hooks.getStats(),r=e.director.runner,i=e.director.lastScores.slice(0,6),a=Object.entries(e.director.snapshot().cooldowns).filter(([,e])=>e>0).sort((e,t)=>t[1]-e[1]).slice(0,4),o=[],s=(e,t)=>{o.push(`<div class="row"><span>${e}</span><b>${t}</b></div>`)};s(`fps`,n.fps.toFixed(0)),s(`draw calls`,String(n.drawCalls)),s($(`trójkąty`,`triangles`),n.triangles.toLocaleString(bp()===`en`?`en-US`:`pl-PL`)),s($(`dzień / czas`,`day / time`),`${t.day} · ${t.timeString}`),s($(`faza`,`phase`),Cp(t.phase)),s($(`pogoda`,`weather`),`${Cp(e.weather.state.label)} (${e.weather.state.intensity.toFixed(2)})`),s($(`wiatr`,`wind`),e.weather.state.wind.toFixed(2)),s($(`prędkość`,`speed`),`${e.settings.value.speed}×`),s($(`pozycja`,`position`),`${e.castaway.position.x.toFixed(1)}, ${e.castaway.position.z.toFixed(1)}`),s(`seed`,String(e.seed>>>0)),s($(`akcje`,`actions`),String(e.keeper.actionsDone)),s($(`odkrycia`,`discoveries`),`${e.discoveries.length}/${Nf.length}`),s($(`rzadkie`,`rare`),e.rare.activeId?e.rare.activeId:`—`),s($(`skrypt`,`script`),e.scripted?Cp(e.scriptedActivity)||$(`tak`,`yes`):$(`nie`,`no`)),o.push(`<h4>${$(`potrzeby`,`needs`)}</h4>`);for(let[t,n]of Object.entries(e.needs))o.push(`<div class="row"><span>${t}</span><b>${n.toFixed(1)}</b></div>`);o.push(`<h4>AI</h4>`),s($(`stan`,`phase`),Cp(r.phase)),s($(`akcja`,`action`),r.def?.id??e.director.lastChoice?.id??`—`),s(`beat`,r.def?`${r.beatIndex+1}/${r.totalBeats}`:`—`),s($(`cel`,`target`),r.spot?.label?Cp(r.spot.label):`—`),s($(`odpoczynek`,`rest`),e.director.restTimer.toFixed(1)),s($(`intencje`,`intents`),e.director.intentList.join(`, `)||`—`),s($(`błąd`,`error`),e.director.lastFailReason?Cp(e.director.lastFailReason):`—`),o.push(`<h4>utility — top</h4>`);let c=Math.max(1,...i.map(e=>e.score));for(let e of i)o.push(`<div class="row"><span>${e.def.id}</span><b>${e.score.toFixed(1)} <span class="bar" style="width:${Math.round(e.score/c*34)}px"></span></b></div>`);i.length===0&&o.push(`<div class="row"><span>—</span><b>—</b></div>`),o.push(`<h4>${$(`cooldowny`,`cooldowns`)}</h4>`);for(let[e,t]of a)o.push(`<div class="row"><span>${e}</span><b>${t.toFixed(0)}s</b></div>`);a.length===0&&o.push(`<div class="row"><span>—</span><b>—</b></div>`),o.push(`<h4>${$(`świat`,`world`)}</h4>`),s($(`ogień`,`fire`),`${e.fireLit?$(`płonie`,`burning`):$(`zgaszony`,`out`)} · ${e.flag(`fireFuel`).toFixed(0)}%`),s($(`zadaszenie`,`shelter`),String(e.flag(`shelter`))),s($(`tratwa`,`raft`),`${e.flag(`raft`)}/6`),s(`SOS`,String(e.flag(`sos`))),s($(`kokosy na palmie`,`coconuts on the palm`),String(e.coconutStock())),s($(`jagody`,`berries`),e.bushStocks.join(` / `)),s($(`inwentarz`,`inventory`),`${$(`ryby`,`fish`)} ${e.inventory.fish}, ${$(`kokosy`,`coconuts`)} ${e.inventory.coconuts}, ${$(`drewno`,`wood`)} ${e.inventory.wood}, ${$(`lina`,`rope`)} ${e.inventory.rope}`),this.debugBody.innerHTML=o.join(``)}};new class{bus=new su;settings=new uu(this.bus);saves=new hu;renderer;scene;camera;loop;sim;audio;ui;saveTimer=0;saveQueued=!1;saving=!1;started=!1;pixelRatio=1;qualityTimer=0;detailFocus=new B(0,2.2,0);headPoint=new B;headProjection=new B;async init(){let e=document.getElementById(`world`);if(!e)throw Error(`Brak canvasu #world.`);let t=await this.saves.load();t&&this.settings.patch({clock:t.clockMode,dayLengthMin:t.dayLengthMin}),this.setupRenderer(e),this.scene=new zn,this.scene.background=new U(729648),this.audio=new gp(this.bus),this.sim=new Hf(this.scene,this.bus,this.settings,t),this.camera=new hp(e,window.innerWidth/window.innerHeight),this.camera.setFollowProvider(()=>this.sim.castaway.getFocusPoint()),this.bus.on(`settings:changed`,e=>{this.camera.setMode(e.camera),this.camera.setFollow(e.follow),this.audio.setEnabled(e.sound),e.sound&&this.audio.unlock()}),this.camera.setMode(this.settings.value.camera),this.camera.setFollow(this.settings.value.follow),this.audio.setEnabled(this.settings.value.sound);let n=new URLSearchParams(window.location.search).get(`lang`);this.settings.set(`language`,n===`pl`?`pl`:`en`),this.ui=new kp(this.bus,this.settings,this.sim,this.hooks()),this.loop=new Uf((e,t)=>this.frame(e,t)),window.addEventListener(`resize`,()=>this.onResize()),window.addEventListener(`orientationchange`,()=>this.onResize()),document.addEventListener(`visibilitychange`,()=>{document.hidden&&this.persist()}),window.addEventListener(`pagehide`,()=>void this.persist()),window.addEventListener(`beforeunload`,()=>void this.persist()),document.addEventListener(`pointerdown`,()=>this.unlockAudio(),{passive:!0}),e.addEventListener(`webglcontextlost`,e=>{e.preventDefault(),this.ui?.showToast(`Kontekst WebGL został utracony. Odśwież stronę.`,8e3)}),this.bus.on(`action:end`,()=>this.queueSave()),this.bus.on(`rare:event`,()=>this.queueSave()),this.onResize(),this.loop.start(),this.started=!0,this.registerServiceWorker(),window.__castaway={sim:this.sim,settings:this.settings,ui:this.ui,camera:this.camera,renderer:this.renderer,scene:this.scene,getStats:()=>this.hooks().getStats(),save:()=>this.persist(),project:(e,t,n)=>{let r=new B(e,t,n).project(this.camera.camera);return{x:(r.x*.5+.5)*window.innerWidth,y:(-r.y*.5+.5)*window.innerHeight,depth:r.z}}}}setupRenderer(e){this.renderer=new ou({canvas:e,antialias:!0,alpha:!1,powerPreference:`high-performance`,preserveDrawingBuffer:!1}),this.pixelRatio=Math.min(window.devicePixelRatio||1,window.innerWidth<720?1.5:2),this.renderer.setPixelRatio(this.pixelRatio),this.renderer.setSize(window.innerWidth,window.innerHeight,!1),this.renderer.outputColorSpace=He,this.renderer.toneMapping=4,this.renderer.toneMappingExposure=1.06,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=2,this.renderer.info.autoReset=!1}frame(e,t){if(!this.started)return;this.renderer.info.reset(),this.sim.update(e),this.sim.island.setMicroDetailVisible(this.camera.camera.position.distanceTo(this.detailFocus)<17),this.camera.update(e),this.sim.castaway.getHeadPoint(this.headPoint),this.headProjection.copy(this.headPoint).project(this.camera.camera);let n=this.headProjection.z>-1&&this.headProjection.z<1&&Math.abs(this.headProjection.x)<1.25&&Math.abs(this.headProjection.y)<1.25;this.ui.positionThought((this.headProjection.x*.5+.5)*window.innerWidth,(-this.headProjection.y*.5+.5)*window.innerHeight,n),this.renderer.render(this.scene,this.camera.camera),this.ui.update(e),this.audio.update(this.sim,t),this.qualityTimer+=e,this.qualityTimer>2.5&&(this.qualityTimer=0,this.loop.fps<45&&this.pixelRatio>1&&(this.pixelRatio=Math.max(1,this.pixelRatio-.25),this.renderer.setPixelRatio(this.pixelRatio),this.renderer.setSize(window.innerWidth,window.innerHeight,!1))),this.saveTimer+=e,this.saveTimer>16&&(this.saveTimer=0,this.persist())}onResize(){if(!this.renderer||!this.camera)return;let e=window.innerWidth,t=window.innerHeight;this.renderer.setPixelRatio(this.pixelRatio),this.renderer.setSize(e,t,!1),this.camera.resize(e,t)}unlockAudio(){this.settings.value.sound&&this.audio.unlock()}queueSave(){this.saveQueued||(this.saveQueued=!0,window.setTimeout(()=>{this.saveQueued=!1,this.persist()},1200))}async persist(){if(this.sim&&!this.saving){this.saving=!0;try{await this.saves.save(this.sim.toSave())&&this.bus.emit(`save:done`,{at:Date.now()})}finally{this.saving=!1}}}hooks(){return{audioUnlock:()=>{this.audio.unlock(),this.settings.value.sound&&this.audio.setEnabled(!0)},getStats:()=>({fps:this.loop?.fps??0,drawCalls:this.renderer?.info.render.calls??0,triangles:this.renderer?.info.render.triangles??0}),onPause:e=>{this.loop?.setPaused(e),e&&this.persist()},onScreensaver:()=>void 0,onFullscreen:()=>{document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen?.().catch(()=>void 0)},onReset:()=>{this.saves.clear().finally(()=>window.location.reload())},onCopy:e=>{navigator.clipboard?.writeText&&navigator.clipboard.writeText(e).catch(()=>void 0)}}}async registerServiceWorker(){if(`serviceWorker`in navigator)try{await navigator.serviceWorker.register(`./sw.js`)}catch{}}}().init().catch(e=>{console.error(`[voxel-castaway] failed to start`,e);let t=document.createElement(`div`);t.style.cssText=`
    position: fixed; inset: 0; display: grid; place-items: center; z-index: 9999;
    background: #08252b; color: #f4ead6; font-family: Georgia, serif; text-align: center; padding: 32px;
  `,t.innerHTML=`
    <div>
      <h1 style="font-weight:500;font-size:36px;margin:0 0 12px;">Wyspa nie odpowiedziała</h1>
      <p style="opacity:.7;font-size:14px;line-height:1.7;">
        Nie udało się uruchomić sceny WebGL. Sprawdź, czy przeglądarka obsługuje WebGL2 i spróbuj odświeżyć stronę.
      </p>
      <pre style="opacity:.45;font-size:11px;white-space:pre-wrap;max-width:560px;margin:18px auto 0;">${String(e)}</pre>
    </div>`,document.body.appendChild(t)});