import{u as d}from"./asyncData.2c31d0af.js";import{a as l,aB as f,R as v,z as p,ah as m,aC as g,aj as h,aH as y,at as r,ae as _}from"./entry.82bed599.js";const N=l({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(u){const{query:a}=f(u),n=v(()=>{var t;return typeof((t=a.value)==null?void 0:t.params)=="function"?a.value.params():a.value});if(!n.value&&p("dd-navigation").value){const{navigation:t}=m();return{navigation:t}}const{data:o}=await d(`content-navigation-${g(n.value)}`,()=>y(n.value));return{navigation:o}},render(u){const a=h(),{navigation:n}=u,o=e=>r(_,{to:e._path},()=>e.title),t=(e,i)=>r("ul",i?{"data-level":i}:null,e.map(s=>s.children?r("li",null,[o(s),t(s.children,i+1)]):r("li",null,o(s)))),c=e=>t(e,0);return a!=null&&a.default?a.default({navigation:n,...this.$attrs}):c(n)}});export{N as default};
