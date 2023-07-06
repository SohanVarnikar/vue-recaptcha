import{a as V,i as T,b as B,n as Q,r as w,t as W,c as M,d as R,e as $,f as J,g as U}from"./index.71df2ec7.js";import{I as F,r as h,a2 as E,a4 as j}from"./entry.93faa443.js";function _(n){var e;const o=w(n);return(e=o==null?void 0:o.$el)!=null?e:o}const L=T?window:void 0,D=T?window.navigator:void 0;function b(...n){let e,o,s,f;if(B(n[0])||Array.isArray(n[0])?([o,s,f]=n,e=L):[e,o,s,f]=n,!e)return Q;Array.isArray(o)||(o=[o]),Array.isArray(s)||(s=[s]);const p=[],v=()=>{p.forEach(i=>i()),p.length=0},c=(i,O,t,a)=>(i.addEventListener(O,t,a),()=>i.removeEventListener(O,t,a)),m=E(()=>[_(e),w(f)],([i,O])=>{v(),i&&p.push(...o.flatMap(t=>s.map(a=>c(i,t,a,O))))},{immediate:!0,flush:"post"}),d=()=>{m(),v()};return W(d),d}let S=!1;function ee(n,e,o={}){const{window:s=L,ignore:f=[],capture:p=!0,detectIframe:v=!1}=o;if(!s)return;M&&!S&&(S=!0,Array.from(s.document.body.children).forEach(t=>t.addEventListener("click",Q)));let c=!0;const m=t=>f.some(a=>{if(typeof a=="string")return Array.from(s.document.querySelectorAll(a)).some(l=>l===t.target||t.composedPath().includes(l));{const l=_(a);return l&&(t.target===l||t.composedPath().includes(l))}}),i=[b(s,"click",t=>{const a=_(n);if(!(!a||a===t.target||t.composedPath().includes(a))){if(t.detail===0&&(c=!m(t)),!c){c=!0;return}e(t)}},{passive:!0,capture:p}),b(s,"pointerdown",t=>{const a=_(n);a&&(c=!t.composedPath().includes(a)&&!m(t))},{passive:!0}),v&&b(s,"blur",t=>{var a;const l=_(n);((a=s.document.activeElement)==null?void 0:a.tagName)==="IFRAME"&&!(l!=null&&l.contains(s.document.activeElement))&&e(t)})].filter(Boolean);return()=>i.forEach(t=>t())}function G(n,e=!1){const o=h(),s=()=>o.value=!!n();return s(),R(s,e),o}function te(n={}){const{navigator:e=D,read:o=!1,source:s,copiedDuring:f=1500,legacy:p=!1}=n,v=["copy","cut"],c=G(()=>e&&"clipboard"in e),m=F(()=>c.value||p),d=h(""),i=h(!1),O=V(()=>i.value=!1,f);function t(){c.value?e.clipboard.readText().then(r=>{d.value=r}):d.value=g()}if(m.value&&o)for(const r of v)b(r,t);async function a(r=w(s)){m.value&&r!=null&&(c.value?await e.clipboard.writeText(r):l(r),d.value=r,i.value=!0,O.start())}function l(r){const u=document.createElement("textarea");u.value=r??"",u.style.position="absolute",u.style.opacity="0",document.body.appendChild(u),u.select(),document.execCommand("copy"),u.remove()}function g(){var r,u,y;return(y=(u=(r=document==null?void 0:document.getSelection)==null?void 0:r.call(document))==null?void 0:u.toString())!=null?y:""}return{isSupported:m,text:d,copied:i,copy:a}}function H(n){return JSON.parse(JSON.stringify(n))}const C=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},P="__vueuse_ssr_handlers__";C[P]=C[P]||{};var x;(function(n){n.UP="UP",n.RIGHT="RIGHT",n.DOWN="DOWN",n.LEFT="LEFT",n.NONE="NONE"})(x||(x={}));var q=Object.defineProperty,N=Object.getOwnPropertySymbols,K=Object.prototype.hasOwnProperty,z=Object.prototype.propertyIsEnumerable,A=(n,e,o)=>e in n?q(n,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):n[e]=o,X=(n,e)=>{for(var o in e||(e={}))K.call(e,o)&&A(n,o,e[o]);if(N)for(var o of N(e))z.call(e,o)&&A(n,o,e[o]);return n};const Y={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};X({linear:$},Y);function ne(n,e,o,s={}){var f,p,v;const{clone:c=!1,passive:m=!1,eventName:d,deep:i=!1,defaultValue:O}=s,t=j(),a=o||(t==null?void 0:t.emit)||((f=t==null?void 0:t.$emit)==null?void 0:f.bind(t))||((v=(p=t==null?void 0:t.proxy)==null?void 0:p.$emit)==null?void 0:v.bind(t==null?void 0:t.proxy));let l=d;e||(e="modelValue"),l=d||l||`update:${e.toString()}`;const g=u=>c?J(c)?c(u):H(u):u,r=()=>U(n[e])?g(n[e]):O;if(m){const u=r(),y=h(u);return E(()=>n[e],I=>y.value=g(I)),E(y,I=>{(I!==n[e]||i)&&a(l,I)},{deep:i}),y}else return F({get(){return r()},set(u){a(l,u)}})}export{te as a,ee as o,ne as u};
