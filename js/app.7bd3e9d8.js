(function(){"use strict";var e={6626:function(e,t,n){var r=n(9242),o=n(3396),i=n(7718),a=n(9271);function u(e,t,n,r,u,l){const f=(0,o.up)("router-view");return(0,o.wg)(),(0,o.j4)(i.q,null,{default:(0,o.w5)((()=>[(0,o.Wm)(a.O,null,{default:(0,o.w5)((()=>[(0,o.Wm)(f)])),_:1})])),_:1})}var l={name:"App",data:()=>({})},f=n(89);const s=(0,f.Z)(l,[["render",u]]);var c=s,d=n(2483),m=(n(7658),n(4870)),p=n(9117),v=n(3053),h=n(702),g=n(4166),b=n(1888),y=n(1334),w=n(6422),_=n(9234),O=n(2719),j=n(7471),k=n(5030),C={__name:"LoginView",setup(e){const t=(0,m.qj)({email:"",password:""}),n={email:{required:p.C1,email:p.Do},password:{required:p.C1,minLength:(0,p.Ei)(6)}},i=(0,m.iH)((0,v.ZP)(n,t));async function a(){const e=await i.value.$validate();e&&await T.push({path:"/game"})}return(e,n)=>((0,o.wg)(),(0,o.j4)(g._,{class:"mx-auto mt-8","max-width":"500"},{default:(0,o.w5)((()=>[(0,o.Wm)(j.i,{color:"secondary"},{default:(0,o.w5)((()=>[(0,o.Wm)(k.q,null,{default:(0,o.w5)((()=>[(0,o.Uk)("SignIn to Aivia")])),_:1})])),_:1}),(0,o.Wm)(b.Z,null,{default:(0,o.w5)((()=>[(0,o.Wm)(w.O,{onSubmit:(0,r.iM)(a,["prevent"])},{default:(0,o.w5)((()=>[(0,o.Wm)(O.h,{modelValue:t.email,"onUpdate:modelValue":n[0]||(n[0]=e=>t.email=e),modelModifiers:{trim:!0},"error-messages":i.value?.email?.$errors[0]?.$message,label:"E-mail Address",type:"email",required:""},null,8,["modelValue","error-messages"]),(0,o.Wm)(O.h,{modelValue:t.password,"onUpdate:modelValue":n[1]||(n[1]=e=>t.password=e),modelModifiers:{trim:!0},"error-messages":i.value?.password?.$errors[0]?.$message,label:"Passphrase",type:"password",required:""},null,8,["modelValue","error-messages"])])),_:1},8,["onSubmit"])])),_:1}),(0,o.Wm)(y.h,null,{default:(0,o.w5)((()=>[(0,o.Wm)(_.C),(0,o.Wm)(h.T,{type:"submit",color:"secondary",onClick:a},{default:(0,o.w5)((()=>[(0,o.Uk)("Log in")])),_:1})])),_:1})])),_:1}))}};const E=C;var P=E;const S=[{path:"/",name:"login",component:P},{path:"/game",name:"game",component:()=>n.e(639).then(n.bind(n,4639))}],A=(0,d.p7)({history:(0,d.PO)(""),routes:S});var T=A,W=n(65),N=(0,W.MT)({state:{},getters:{},mutations:{},actions:{},modules:{}}),q=(n(9773),n(8957)),x=(0,q.Rd)();async function L(){const e=await n.e(461).then(n.t.bind(n,3657,23));e.load({google:{families:["Roboto:100,300,400,500,700,900&display=swap"]}})}L(),(0,r.ri)(c).use(T).use(N).use(x).mount("#app")}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,r,o,i){if(!r){var a=1/0;for(s=0;s<e.length;s++){r=e[s][0],o=e[s][1],i=e[s][2];for(var u=!0,l=0;l<r.length;l++)(!1&i||a>=i)&&Object.keys(n.O).every((function(e){return n.O[e](r[l])}))?r.splice(l--,1):(u=!1,i<a&&(a=i));if(u){e.splice(s--,1);var f=o();void 0!==f&&(t=f)}}return t}i=i||0;for(var s=e.length;s>0&&e[s-1][2]>i;s--)e[s]=e[s-1];e[s]=[r,o,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){var e,t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__};n.t=function(r,o){if(1&o&&(r=this(r)),8&o)return r;if("object"===typeof r&&r){if(4&o&&r.__esModule)return r;if(16&o&&"function"===typeof r.then)return r}var i=Object.create(null);n.r(i);var a={};e=e||[null,t({}),t([]),t(t)];for(var u=2&o&&r;"object"==typeof u&&!~e.indexOf(u);u=t(u))Object.getOwnPropertyNames(u).forEach((function(e){a[e]=function(){return r[e]}}));return a["default"]=function(){return r},n.d(i,a),i}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+(461===e?"webfontloader":e)+"."+{461:"8d1f2acc",639:"74f147f6"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+".aba6f15a.css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="aivia_my:";n.l=function(r,o,i,a){if(e[r])e[r].push(o);else{var u,l;if(void 0!==i)for(var f=document.getElementsByTagName("script"),s=0;s<f.length;s++){var c=f[s];if(c.getAttribute("src")==r||c.getAttribute("data-webpack")==t+i){u=c;break}}u||(l=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,n.nc&&u.setAttribute("nonce",n.nc),u.setAttribute("data-webpack",t+i),u.src=r),e[r]=[o];var d=function(t,n){u.onerror=u.onload=null,clearTimeout(m);var o=e[r];if(delete e[r],u.parentNode&&u.parentNode.removeChild(u),o&&o.forEach((function(e){return e(n)})),t)return t(n)},m=setTimeout(d.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=d.bind(null,u.onerror),u.onload=d.bind(null,u.onload),l&&document.head.appendChild(u)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p=""}(),function(){if("undefined"!==typeof document){var e=function(e,t,n,r,o){var i=document.createElement("link");i.rel="stylesheet",i.type="text/css";var a=function(n){if(i.onerror=i.onload=null,"load"===n.type)r();else{var a=n&&("load"===n.type?"missing":n.type),u=n&&n.target&&n.target.href||t,l=new Error("Loading CSS chunk "+e+" failed.\n("+u+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=a,l.request=u,i.parentNode&&i.parentNode.removeChild(i),o(l)}};return i.onerror=i.onload=a,i.href=t,n?n.parentNode.insertBefore(i,n.nextSibling):document.head.appendChild(i),i},t=function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=n[r],i=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(i===e||i===t))return o}var a=document.getElementsByTagName("style");for(r=0;r<a.length;r++){o=a[r],i=o.getAttribute("data-href");if(i===e||i===t)return o}},r=function(r){return new Promise((function(o,i){var a=n.miniCssF(r),u=n.p+a;if(t(a,u))return o();e(r,u,null,o,i)}))},o={143:0};n.f.miniCss=function(e,t){var n={639:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=r(e).then((function(){o[e]=0}),(function(t){throw delete o[e],t})))}}}(),function(){var e={143:0};n.f.j=function(t,r){var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var i=new Promise((function(n,r){o=e[t]=[n,r]}));r.push(o[2]=i);var a=n.p+n.u(t),u=new Error,l=function(r){if(n.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var i=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;u.message="Loading chunk "+t+" failed.\n("+i+": "+a+")",u.name="ChunkLoadError",u.type=i,u.request=a,o[1](u)}};n.l(a,l,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,i,a=r[0],u=r[1],l=r[2],f=0;if(a.some((function(t){return 0!==e[t]}))){for(o in u)n.o(u,o)&&(n.m[o]=u[o]);if(l)var s=l(n)}for(t&&t(r);f<a.length;f++)i=a[f],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(s)},r=self["webpackChunkaivia_my"]=self["webpackChunkaivia_my"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(6626)}));r=n.O(r)})();
//# sourceMappingURL=app.7bd3e9d8.js.map