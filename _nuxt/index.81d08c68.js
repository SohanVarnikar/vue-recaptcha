import{r as D,a8 as M,u as N,aa as x,ab as F,W as I,f as k,L as J,U as S,J as L}from"./entry.82bed599.js";var C;const U=typeof window<"u",_=n=>typeof n<"u",j=n=>typeof n=="function",q=n=>typeof n=="string",z=()=>{},E=U&&((C=window==null?void 0:window.navigator)==null?void 0:C.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function m(n){return typeof n=="function"?n():N(n)}function O(n,o=!1,t="Timeout"){return new Promise((s,r)=>{setTimeout(o?()=>r(t):s,n)})}function G(n){return n}function R(n){return x()?(F(n),!0):!1}function H(n,o=!0){I()?k(n):o?n():J(n)}function B(n,o=!1){function t(e,{flush:i="sync",deep:u=!1,timeout:c,throwOnTimeout:g}={}){let l=null;const P=[new Promise(T=>{l=S(n,d=>{e(d)!==o&&(l==null||l(),T(d))},{flush:i,deep:u,immediate:!0})})];return c!=null&&P.push(O(c,g).then(()=>m(n)).finally(()=>l==null?void 0:l())),Promise.race(P)}function s(e,i){if(!L(e))return t(d=>d===e,i);const{flush:u="sync",deep:c=!1,timeout:g,throwOnTimeout:l}=i??{};let f=null;const T=[new Promise(d=>{f=S([n,e],([A,b])=>{o!==(A===b)&&(f==null||f(),d(A))},{flush:u,deep:c,immediate:!0})})];return g!=null&&T.push(O(g,l).then(()=>m(n)).finally(()=>(f==null||f(),m(n)))),Promise.race(T)}function r(e){return t(i=>!!i,e)}function a(e){return s(null,e)}function p(e){return s(void 0,e)}function y(e){return t(Number.isNaN,e)}function w(e,i){return t(u=>{const c=Array.from(u);return c.includes(e)||c.includes(m(e))},i)}function h(e){return v(1,e)}function v(e=1,i){let u=-1;return t(()=>(u+=1,u>=e),i)}return Array.isArray(m(n))?{toMatch:t,toContains:w,changed:h,changedTimes:v,get not(){return B(n,!o)}}:{toMatch:t,toBe:s,toBeTruthy:r,toBeNull:a,toBeNaN:y,toBeUndefined:p,changed:h,changedTimes:v,get not(){return B(n,!o)}}}function K(n){return B(n)}function Q(n,o,t={}){const{immediate:s=!0}=t,r=D(!1);let a=null;function p(){a&&(clearTimeout(a),a=null)}function y(){r.value=!1,p()}function w(...h){p(),r.value=!0,a=setTimeout(()=>{r.value=!1,a=null,n(...h)},m(o))}return s&&(r.value=!0,U&&w()),R(y),{isPending:M(r),start:w,stop:y}}export{Q as a,q as b,E as c,H as d,G as e,j as f,_ as g,U as i,z as n,m as r,R as t,K as u};
