import{a as m,r as l,U as b,o as a,i as s,F as v,ao as x,k as u,l as g,a0 as k,j as y,t as I,L as T,s as S,v as C,x as $}from"./entry.82bed599.js";const U=t=>(S("data-v-ad7417d7"),t=t(),C(),t),w={class:"tabs-header"},B=["onClick"],L=U(()=>u("span",{class:"tab"},null,-1)),N=[L],q=m({__name:"TabsHeader",props:{tabs:{type:Array,required:!0},activeTabIndex:{type:Number,required:!0}},emits:["update:activeTabIndex"],setup(t,{emit:h}){const p=t,n=l(),r=l(),i=e=>{e&&(r.value.style.insetInlineStart=`${e.offsetLeft}px`,r.value.style.width=`${e.clientWidth}px`)},f=(e,d)=>{h("update:activeTabIndex",d),T(()=>i(e.target))};return b(n,e=>{e&&setTimeout(()=>{i(n.value.children[p.activeTabIndex])},50)},{immediate:!0}),(e,d)=>(a(),s("div",w,[t.tabs?(a(),s("div",{key:0,ref_key:"tabsRef",ref:n,class:"tabs"},[(a(!0),s(v,null,x(t.tabs,({label:c},o)=>(a(),s("button",{key:`${o}${c}`,class:y([t.activeTabIndex===o?"active":"not-active"]),onClick:_=>f(_,o)},I(c),11,B))),128)),u("span",{ref_key:"highlightUnderline",ref:r,class:"highlight-underline"},N,512)],512)):g("",!0),k(e.$slots,"footer",{},void 0,!0)]))}}),H=$(q,[["__scopeId","data-v-ad7417d7"]]);export{H as default};
