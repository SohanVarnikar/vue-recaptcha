import{d as _,aj as p,J as a,ac as f,b as o,Y as s,w as m,f as g,$ as x,n as S,K as b,a1 as h,G as k,k as y}from"./entry.a267521f.js";const z=_({__name:"ButtonLink",props:{blank:{type:Boolean,required:!1,default:!1},color:p("primary"),href:{type:String,required:!0,default:""},icon:{type:String,default:""},size:{required:!1,type:[String,Object],default:"medium"},transparent:{required:!1,type:[Boolean,Object],default:!1}},setup(e){const n=e,i=a(()=>((t=n)=>`{color.${t.color}.600}`)()),c=a(()=>((t=n)=>`{color.${t.color}.500}`)()),r={size:{small:{padding:"{space.2} {space.4}",fontSize:"{text.sm.fontSize}",lineHeight:"{text.sm.lineHeight}"},medium:{padding:"{space.rem.625} {space.5}",fontSize:"{text.base.fontSize}",lineHeight:"{text.base.lineHeight}"},large:{padding:"{space.3} {space.6}",fontSize:"{text.lg.fontSize}",lineHeight:"{text.lg.lineHeight}"},giant:{padding:"{space.4} {space.8}",fontSize:"{text.lg.fontSize}",lineHeight:"{text.lg.lineHeight}"}},transparent:{true:{backgroundColor:"transparent"}}},{$pinceau:l}=f(n,r,{_YM9_buttonPrimary:i,_A23_buttonSecondary:c});return(t,H)=>{const u=h,d=k;return o(),s(d,{class:S(["button-link",[b(l)]]),to:e.href,target:e.blank?"_blank":void 0},{default:m(()=>[e.icon?(o(),s(u,{key:0,name:e.icon},null,8,["name"])):g("",!0),x(t.$slots,"default",{unwrap:"p ul li"},void 0,!0)]),_:3},8,["to","target","class"])}}});const B=y(z,[["__scopeId","data-v-c9c0da25"]]);export{B as default};
