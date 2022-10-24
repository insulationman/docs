"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[5424],{49613:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(n),m=a,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},47663:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return u}});var r=n(665),a=n(40151),o=(n(59496),n(49613)),i=["components"],c={sidebar_position:7},s="\ud83d\ude9d Interact with Management API",l={unversionedId:"docs/recipes/interact-with-management-api/README",id:"docs/recipes/interact-with-management-api/README",title:"\ud83d\ude9d Interact with Management API",description:"Admin Console is great, but we know it does not always fit the scenario.",source:"@site/docs/docs/recipes/interact-with-management-api/README.md",sourceDirName:"docs/recipes/interact-with-management-api",slug:"/docs/recipes/interact-with-management-api/",permalink:"/docs/recipes/interact-with-management-api/",draft:!1,editUrl:"https://github.com/logto-io/docs/tree/master/docs/docs/recipes/interact-with-management-api/README.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"docsSidebar",previous:{title:"You don't need a user table",permalink:"/docs/recipes/manage-users/you-dont-need-a-user-table"},next:{title:"\ud83c\udf10 Localization",permalink:"/docs/recipes/localization/"}},p={},u=[{value:"How to?",id:"how-to",level:2}],d={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"-interact-with-management-api"},"\ud83d\ude9d Interact with Management API"),(0,o.kt)("p",null,"Admin Console is great, but we know it does not always fit the scenario."),(0,o.kt)("p",null,"For example, we don't enable a normal API to update the current user's profile, because it may cause unexpected results (imagine a user updates his role to \"admin\"), and things may vary by the actual business."),(0,o.kt)("p",null,"In this case, you need to use a backend service that directly talks to ",(0,o.kt)("a",{parentName:"p",href:"/api"},"Logto Management API"),", and decide what to expose on demand."),(0,o.kt)("h2",{id:"how-to"},"How to?"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Follow the tutorial ",(0,o.kt)("a",{parentName:"li",href:"/docs/tutorials/get-started/create-and-integrate-the-first-app"},"Create and integrate the first application")," to create a Machine to Machine app in Admin Console."),(0,o.kt)("li",{parentName:"ol"},"Follow the guide ",(0,o.kt)("a",{parentName:"li",href:"/docs/recipes/integrate-logto/machine-to-machine"},"Machine to Machine: Auth with Logto")," to fetch an Access Token for the API identifier ",(0,o.kt)("inlineCode",{parentName:"li"},"https://api.logto.io")," (indicates Management API)."),(0,o.kt)("li",{parentName:"ol"},"Interact with Management API with Bearer authorization using the Access Token.")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Usually the Access Token has a short expiration. If you have a local cache, remember to check and fetch a new Access Token if needed before sending requests.")))}m.isMDXComponent=!0}}]);