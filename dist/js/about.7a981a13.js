"use strict";(self["webpackChunkurl_shortener"]=self["webpackChunkurl_shortener"]||[]).push([[443],{3214:function(e,t,r){var s=r(4311);t["Z"]={async signIn({username:e,password:t}){return await s.Z.post("/auth/sign-in",{username:e,password:t})},async signUp({username:e,password:t}){return await s.Z.post("/auth/sign-up",{username:e,password:t})},logout(){localStorage.clear()}}},2192:function(e,t,r){var s=r(4311);t["Z"]={async createShortUrl(e){return await s.Z.post("/re/create",e)},getRedirectionUrl(e){return s.Z.get(e)}}},6529:function(e,t,r){r.r(t),r.d(t,{default:function(){return c}});var s=r(3396);const a={class:"flex"},n=(0,s._)("p",null,"About",-1),l=[n];function o(e,t){return(0,s.wg)(),(0,s.iD)("div",a,l)}var u=r(89);const i={},d=(0,u.Z)(i,[["render",o]]);var c=d},981:function(e,t,r){r.r(t),r.d(t,{default:function(){return D}});var s=r(3396);const a={class:"home-body"},n={class:"body-left-col"},l=(0,s._)("div",{class:"body-right-col"},[(0,s._)("p",{class:"text-center"}," Lorem ipsum dolor sit amet, consectetur adipisicing elit. A culpa distinctio, dolor eius error facere facilis laboriosam modi neque nobis nostrum quae repudiandae, sapiente sequi sint tempora tenetur ut voluptatibus. ")],-1);function o(e,t,r,o,u,i){const d=(0,s.up)("UrlShortner");return(0,s.wg)(),(0,s.iD)("div",a,[(0,s._)("div",n,[(0,s.Wm)(d)]),l])}var u=r(8825),i=r(9242),d=r(4870),c=r(7139),p=r(2192);const m=["onSubmit"],_={class:"card group"},f=(0,s._)("div",{class:"card-header"},[(0,s._)("h1",{class:""},"Create a Short url")],-1),v={class:"card-body"},w={class:"flex flex-col text-left"},b={class:"input-field w-64"},h=(0,s._)("label",null,null,-1),y=(0,s._)("div",{class:"flex flex-row items-center justify-center w-full h-12 pt-16 cursor-pointer"},[(0,s._)("label"),(0,s._)("button",{class:"button w-48",type:"submit"},"Submit")],-1),g={class:"card-footer"},S={key:0,class:"text-white"};var U={__name:"UrlShortner",setup(e){const t=(0,d.qj)({url:""}),r=(0,s.f3)("toast");let a=(0,d.qj)({url:"",visitedTimes:"",shortenedTimes:""});const n=(0,d.iH)(!1),l=()=>{p.Z.createShortUrl(t).then((e=>{n.value=!0,r.show("created "+e.data.url,{type:"info",duration:!1,queue:!0,onClick:()=>{navigator.clipboard.writeText(e.data.url),r.show("link copied to clipboard",{type:"success"})}}),a=e.data,console.log(a)})).catch((e=>{r.show(e.response.data,{type:"error"})}))};return(e,r)=>((0,s.wg)(),(0,s.iD)("form",{onSubmit:(0,i.iM)(l,["prevent"])},[(0,s._)("div",_,[f,(0,s._)("div",v,[(0,s._)("div",w,[(0,s._)("div",b,[h,(0,s.wy)((0,s._)("input",{type:"text","onUpdate:modelValue":r[0]||(r[0]=e=>t.url=e),required:"",placeholder:"Put your url here"},null,512),[[i.nr,t.url]])])]),y]),(0,s._)("div",g,[(0,d.SU)(a)?((0,s.wg)(),(0,s.iD)("span",S,(0,c.zw)((0,d.SU)(a).url),1)):(0,s.kq)("",!0)])])],40,m))}};const x=U;var q=x,Z={name:"Home",components:{UrlShortner:q,Sidebar:u.Z}},k=r(89);const V=(0,k.Z)(Z,[["render",o]]);var D=V},7285:function(e,t,r){r.r(t),r.d(t,{default:function(){return g}});r(7658);var s=r(3396),a=r(9242),n=r(5916),l=r(4870),o=r(3214),u=r(1120);const i=["onSubmit"],d={class:"card group"},c=(0,s._)("div",{class:"card-header"},[(0,s._)("h1",{class:""},"SignIn")],-1),p={class:"card-body"},m={class:"flex flex-col text-left"},_={class:"input-field"},f=(0,s._)("label",null,"Username",-1),v={class:"input-field"},w=(0,s._)("label",null,"Password",-1),b=(0,s._)("div",{class:"card-footer"},[(0,s._)("button",{class:"button",type:"submit"},"Submit")],-1);var h={__name:"SignIn",setup(e){const t=(0,n.C)(),r=(0,s.f3)("toast"),h=(0,l.qj)({username:"",password:""}),y=()=>{o.Z.signIn(h).then((e=>{const s=e.data;t.saveUser(s),r.show("welcome back mr "+s.username+"!",{type:"success"}),location.reload(),u.Z.push("/about")})).catch((e=>r.show(e.response.data,{type:"error"})))};return(e,t)=>((0,s.wg)(),(0,s.iD)("form",{onSubmit:(0,a.iM)(y,["prevent"])},[(0,s._)("div",d,[c,(0,s._)("div",p,[(0,s._)("div",m,[(0,s._)("div",_,[f,(0,s.wy)((0,s._)("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=e=>h.username=e),required:""},null,512),[[a.nr,h.username]])]),(0,s._)("div",v,[w,(0,s.wy)((0,s._)("input",{type:"password","onUpdate:modelValue":t[1]||(t[1]=e=>h.password=e),required:""},null,512),[[a.nr,h.password]])])])]),b])],40,i))}};const y=h;var g=y},1763:function(e,t,r){r.r(t),r.d(t,{default:function(){return U}});var s=r(3396),a=r(9242),n=r(4870),l=r(3214);const o=["onSubmit"],u={class:"card group"},i=(0,s._)("div",{class:"card-header"},[(0,s._)("h1",{class:""},"SignUp")],-1),d={class:"card-body"},c={class:"flex flex-col text-left"},p={class:"input-field"},m=(0,s._)("label",null,"Username",-1),_={class:"input-field"},f=(0,s._)("label",null,"Password",-1),v={class:"input-field"},w=(0,s._)("label",null,"Email",-1),b={class:"input-field"},h=(0,s._)("label",null,"Full Name",-1),y=(0,s._)("div",{class:"card-footer"},[(0,s._)("button",{class:"button",type:"submit"},"Submit")],-1);var g={__name:"SignUp",setup(e){const t=(0,n.qj)({username:"",password:""}),r=(0,s.f3)("toast");function g(){l.Z.signUp(t).then((e=>r.show(e.data,{type:"success"}))).catch((e=>r.show(e.response.data,{type:"error"})))}return(e,r)=>((0,s.wg)(),(0,s.iD)("form",{onSubmit:(0,a.iM)(g,["prevent"])},[(0,s._)("div",u,[i,(0,s._)("div",d,[(0,s._)("div",c,[(0,s._)("div",p,[m,(0,s.wy)((0,s._)("input",{type:"text","onUpdate:modelValue":r[0]||(r[0]=e=>t.username=e),required:""},null,512),[[a.nr,t.username]])]),(0,s._)("div",_,[f,(0,s.wy)((0,s._)("input",{type:"password","onUpdate:modelValue":r[1]||(r[1]=e=>t.password=e),required:""},null,512),[[a.nr,t.password]])]),(0,s._)("div",v,[w,(0,s.wy)((0,s._)("input",{type:"email","onUpdate:modelValue":r[2]||(r[2]=e=>t.password=e),required:""},null,512),[[a.nr,t.password]])]),(0,s._)("div",b,[h,(0,s.wy)((0,s._)("input",{type:"email","onUpdate:modelValue":r[3]||(r[3]=e=>t.password=e),required:""},null,512),[[a.nr,t.password]])])])]),y])],40,o))}};const S=g;var U=S}}]);
//# sourceMappingURL=about.7a981a13.js.map