import{t as b,w as g,c as v}from"./index.847bce45.js";import{an as m,r as x,ao as C,I as y,a2 as D}from"./entry.93faa443.js";var c=(r=>(r.Init="init",r.Verified="verified",r.Expired="expired",r.Error="error",r))(c||{});function K({root:r=x(),options:f={}}){const e=m(),t=x(),n=C(),i=v(),s=v(),u=v(),l=b(r),a=x("init");return g(l,async p=>{const d=await n.render(p,{...f,sitekey:e,callback:i.trigger,"expired-callback":s.trigger,"error-callback":u.trigger});t.value=d}),i.on(()=>{a.value="verified"}),s.on(()=>{a.value="expired"}),u.on(()=>{a.value="error"}),{root:l,widgetID:t,execute(){typeof t.value<"u"&&n.execute(t.value)},reset(){a.value="init",typeof t.value<"u"&&n.reset(t.value)},state:a,onVerify:i.on,onExpired:s.on,onError:u.on}}function A(r,f,e){const{root:t,state:n,widgetID:i,onError:s,onExpired:u,onVerify:l,reset:a,execute:p}=K({options:r||{}}),d=y(()=>n.value===c.Expired),V=y(()=>n.value===c.Error),w=y(()=>n.value===c.Verified);return g(i,o=>{e("load",o),e("update:widgetId",o)}),D(f,(o,I)=>{!o&&I&&!d.value&&E()}),u(()=>{e("update:modelValue",null),e("expired",i.value)}),s(o=>{e("error",o)}),l(o=>{e("success",o),e("update:modelValue",o)}),{root:t,widgetID:i,state:n,isError:V,isExpired:d,isVerified:w,reset:E,execute:p};function E(){a(),k()}function k(){e("update:modelValue",null)}}export{c as R,A as u};
