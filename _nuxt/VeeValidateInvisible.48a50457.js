import v from"./PrimaryButton.40a543cd.js";import{_ as x}from"./ChallengeV2.vue.357126af.js";import{a as b,N as g,O as y,r as S,o as u,i,k as n,P as N,Q as h,u as a,J as d,t as k,l as w,m as p,w as c,I as B}from"./entry.82bed599.js";import{u as C,a as $}from"./vee-validate.esm.13f0cd89.js";import{u as D}from"./index.81d08c68.js";import"./component-v2.1326a395.js";import"./index.fea84b4c.js";const E={key:0,class:"text-red"},J=b({__name:"VeeValidateInvisible",setup(F){const{handleSubmit:f}=C({validationSchema:g({name:y().required()})}),{value:s,errorMessage:r}=$("name"),t=S(),l=f(async m=>{await D(t).changed(),console.log({...m,response:t.value})});return(m,e)=>{const _=v,V=x;return u(),i("form",{class:"flex flex-col gap-2",onSubmit:e[2]||(e[2]=(...o)=>a(l)&&a(l)(...o))},[n("div",null,[N(n("input",{"onUpdate:modelValue":e[0]||(e[0]=o=>d(s)?s.value=o:null),class:"border border-blue p-1",type:"text",placeholder:"Your name"},null,512),[[h,a(s)]]),a(r)?(u(),i("div",E,k(a(r)),1)):w("",!0)]),n("div",null,[p(V,{modelValue:a(t),"onUpdate:modelValue":e[1]||(e[1]=o=>d(t)?t.value=o:null)},{default:c(()=>[p(_,{type:"submit"},{default:c(()=>[B("Submit")]),_:1})]),_:1},8,["modelValue"])])],32)}}});export{J as default};
