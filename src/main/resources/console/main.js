var PluginMoments=function(e){"use strict";var p="";function l(n){return n}var r=(n,o)=>{const t=n.__vccOpts||n;for(const[s,a]of o)t[s]=a;return t};const m=e.defineComponent({name:"MomentsList",setup(){return{name:e.ref("Ryan")}}});function i(n,o,t,s,a,f){return e.openBlock(),e.createElementBlock("div",null,"Hello "+e.toDisplayString(n.name),1)}var c=r(m,[["render",i]]),u={name:"PluginMoments",components:[],routes:[{parentName:"Root",route:{path:"functional/moments",name:"Moments",component:c,meta:{permissions:["plugin:moments:view"]}}}],extensionPoints:{PAGES:n=>{n.value.functionalPages.push({name:"\u77AC\u95F4",url:"/moments",path:"/pages/functional/moments"})}}};return u}(Vue);
