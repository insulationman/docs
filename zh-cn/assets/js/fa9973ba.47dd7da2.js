"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[5178],{9613:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var r=t(9496);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(t),m=a,g=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return t?r.createElement(g,s(s({ref:n},p),{},{components:t})):r.createElement(g,s({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=u;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=t[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},8661:function(e,n,t){t.d(n,{Z:function(){return s}});var r=t(9496),a=t(1626),o="tabItem_ZZXe";function s(e){var n=e.children,t=e.hidden,s=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,s),hidden:t},n)}},2418:function(e,n,t){t.d(n,{Z:function(){return m}});var r=t(5443),a=t(9496),o=t(1626),s=t(5874),i=t(2103),l=t(3299),c=t(2821),p="tabList_kQjL",d="tabItem_wrqk";function u(e){var n,t,s=e.lazy,u=e.block,m=e.defaultValue,g=e.values,k=e.groupId,h=e.className,f=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=g?g:f.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),N=(0,i.l)(v,(function(e,n){return e.value===n.value}));if(N.length>0)throw new Error('Docusaurus error: Duplicate values "'+N.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===m?m:null!=(n=null!=m?m:null==(t=f.find((function(e){return e.props.default})))?void 0:t.props.value)?n:f[0].props.value;if(null!==b&&!v.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=(0,l.U)(),w=y.tabGroupChoices,x=y.setTabGroupChoices,T=(0,a.useState)(b),C=T[0],I=T[1],j=[],q=(0,c.o5)().blockElementScrollPositionUntilNextRender;if(null!=k){var E=w[k];null!=E&&E!==C&&v.some((function(e){return e.value===E}))&&I(E)}var O=function(e){var n=e.currentTarget,t=j.indexOf(n),r=v[t].value;r!==C&&(q(n),I(r),null!=k&&x(k,String(r)))},U=function(e){var n,t=null;switch(e.key){case"ArrowRight":var r,a=j.indexOf(e.currentTarget)+1;t=null!=(r=j[a])?r:j[0];break;case"ArrowLeft":var o,s=j.indexOf(e.currentTarget)-1;t=null!=(o=j[s])?o:j[j.length-1]}null==(n=t)||n.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",p)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":u},h)},v.map((function(e){var n=e.value,t=e.label,s=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:C===n?0:-1,"aria-selected":C===n,key:n,ref:function(e){return j.push(e)},onKeyDown:U,onFocus:O,onClick:O},s,{className:(0,o.Z)("tabs__item",d,null==s?void 0:s.className,{"tabs__item--active":C===n})}),null!=t?t:n)}))),s?(0,a.cloneElement)(f.filter((function(e){return e.props.value===C}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},f.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==C})}))))}function m(e){var n=(0,s.Z)();return a.createElement(u,(0,r.Z)({key:String(n)},e))}},6903:function(e,n,t){t.d(n,{ZP:function(){return l}});var r=t(5443),a=t(3010),o=(t(9496),t(9613)),s=["components"],i={toc:[]};function l(e){var n=e.components,t=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},i,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",null,"\u672c\u7bc7\u6559\u7a0b\u9ed8\u8ba4\u4f60\u5df2\u7ecf\u5728\u7ba1\u7406\u754c\u9762\u4e2d\u6210\u529f\u521b\u5efa\u4e86\u4e00\u4e2a\u300c",t.type,"\u300d\u7c7b\u578b\u7684\u5e94\u7528\u3002\u5982\u679c\u4f60\u8fd8\u6ca1\u6709\u5b8c\u6210\u8fd9\u4e00\u6b65\u64cd\u4f5c\uff0c\u8bf7\u53c2\u9605 ",(0,o.kt)("a",{href:"../../tutorials/get-started/create-and-integrate-the-first-app"},"\u8fd9\u7bc7\u6559\u7a0b"),"\uff0c\u521b\u5efa\u5e94\u7528\u4e4b\u540e\u518d\u7ee7\u7eed\u3002"))))}l.isMDXComponent=!0},6404:function(e,n,t){t.d(n,{ZP:function(){return l}});var r=t(5443),a=t(3010),o=(t(9496),t(9613)),s=["components"],i={toc:[]};function l(e){var n=e.components,t=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},i,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/zh-cn/docs/recipes/customize-sie/"},"\u81ea\u5b9a\u4e49\u767b\u5f55\u4f53\u9a8c")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/zh-cn/docs/tutorials/get-started/enable-passcode-sign-in"},"\u542f\u7528\u77ed\u4fe1\u6216\u90ae\u4ef6\u9a8c\u8bc1\u7801\u767b\u5f55")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/zh-cn/docs/tutorials/get-started/enable-social-sign-in"},"\u542f\u7528\u793e\u4ea4\u767b\u5f55")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/zh-cn/docs/recipes/protect-your-api/"},"\u4fdd\u62a4\u4f60\u7684 API"))))}l.isMDXComponent=!0},4692:function(e,n,t){t.d(n,{ZP:function(){return l}});var r=t(5443),a=t(3010),o=(t(9496),t(9613)),s=["components"],i={toc:[]};function l(e){var n=e.components,t=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},i,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",null,"\u5728\u8c03\u7528 ",(0,o.kt)("code",null,t.calling)," \u4e4b\u524d\uff0c\u8bf7\u5148\u786e\u4fdd\u5df2\u7ecf\u5728\u300c\u7ba1\u7406\u63a7\u5236\u53f0\u300d\u4e2d\u6b63\u786e\u914d\u7f6e\u4e86 Redirect URI\u3002"))))}l.isMDXComponent=!0},59:function(e,n,t){t.r(n),t.d(n,{assets:function(){return g},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return d},metadata:function(){return m},toc:function(){return k}});var r=t(5443),a=t(3010),o=(t(9496),t(9613)),s=t(2418),i=t(8661),l=t(6903),c=(t(4692),t(6404)),p=["components"],d={sidebar_label:"\u4f20\u7edf Web"},u="\u4f20\u7edf Web\uff1a\u96c6\u6210 Logto",m={unversionedId:"docs/recipes/integrate-logto/traditional",id:"docs/recipes/integrate-logto/traditional",title:"\u4f20\u7edf Web\uff1a\u96c6\u6210 Logto",description:"\u5982\u679c\u4f60\u7684\u5e94\u7528\u501f\u52a9 Django\u3001Express\u3001Laravel\u3001NextJS \u7b49\u6846\u67b6\u5f00\u53d1\uff0c\u5e76\u4e14\u8fd0\u884c\u5728\u670d\u52a1\u7aef\u800c\u4e0d\u662f\u6d4f\u89c8\u5668\u3002\u6211\u4eec\u79f0\u4e4b\u4e3a\u300c\u4f20\u7edf Web \u5e94\u7528\u300d\u3002",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/docs/recipes/integrate-logto/traditional.mdx",sourceDirName:"docs/recipes/integrate-logto",slug:"/docs/recipes/integrate-logto/traditional",permalink:"/zh-cn/docs/recipes/integrate-logto/traditional",draft:!1,editUrl:"https://github.com/logto-io/docs/tree/master/i18n/zh-cn/docusaurus-plugin-content-docs/current/docs/recipes/integrate-logto/traditional.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"\u4f20\u7edf Web"},sidebar:"docsSidebar",previous:{title:"React",permalink:"/zh-cn/docs/recipes/integrate-logto/react"},next:{title:"\u539f\u751f JS",permalink:"/zh-cn/docs/recipes/integrate-logto/vanilla-js"}},g={},k=[{value:"\u83b7\u53d6\u6e90\u4ee3\u7801",id:"\u83b7\u53d6\u6e90\u4ee3\u7801",level:2},{value:"\u65b0\u5efa Express \u9879\u76ee",id:"\u65b0\u5efa-express-\u9879\u76ee",level:2},{value:"\u5b89\u88c5\u4f9d\u8d56",id:"\u5b89\u88c5\u4f9d\u8d56",level:2},{value:"\u4f7f\u7528 session",id:"\u4f7f\u7528-session",level:2},{value:"\u7528\u4e8e\u7528\u6237\u8ba4\u8bc1\u7684\u76f8\u5173\u51fd\u6570",id:"\u7528\u4e8e\u7528\u6237\u8ba4\u8bc1\u7684\u76f8\u5173\u51fd\u6570",level:2},{value:"\u767b\u5f55",id:"\u767b\u5f55",level:2},{value:"\u9000\u51fa\u767b\u5f55",id:"\u9000\u51fa\u767b\u5f55",level:2},{value:"\u8bbf\u95ee\u53d7\u4fdd\u62a4\u8d44\u6e90",id:"\u8bbf\u95ee\u53d7\u4fdd\u62a4\u8d44\u6e90",level:2},{value:"\u5ef6\u5c55\u9605\u8bfb",id:"\u5ef6\u5c55\u9605\u8bfb",level:2}],h={toc:k};function f(e){var n=e.components,t=(0,a.Z)(e,p);return(0,o.kt)("wrapper",(0,r.Z)({},h,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u4f20\u7edf-web\u96c6\u6210-logto"},"\u4f20\u7edf Web\uff1a\u96c6\u6210 Logto"),(0,o.kt)(l.ZP,{type:"\u4f20\u7edf Web",mdxType:"AppNote"}),(0,o.kt)("p",null,"\u5982\u679c\u4f60\u7684\u5e94\u7528\u501f\u52a9 Django\u3001Express\u3001Laravel\u3001NextJS \u7b49\u6846\u67b6\u5f00\u53d1\uff0c\u5e76\u4e14\u8fd0\u884c\u5728\u670d\u52a1\u7aef\u800c\u4e0d\u662f\u6d4f\u89c8\u5668\u3002\u6211\u4eec\u79f0\u4e4b\u4e3a\u300c\u4f20\u7edf Web \u5e94\u7528\u300d\u3002"),(0,o.kt)("p",null,"\u76ee\u524d\uff0c\u4f60\u9700\u8981\u624b\u52a8\u96c6\u6210 Logto\u3002\u672c\u6587\u5c06\u6307\u5f15\u4f60\u4e00\u6b65\u6b65\u5b9e\u73b0 Logto \u96c6\u6210\u3002\u4e0b\u9762\u6211\u4eec\u5047\u8bbe\u5728 Node.js \u91cc\u4f7f\u7528 Express \u5f00\u53d1\u3002"),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u672c\u6587\u4e0d\u4ec5\u4ec5\u9002\u7528\u4e8e Express\uff0c\u5982\u679c\u4f60\u4f7f\u7528\u7684\u662f\u5176\u4ed6\u6846\u67b6\uff0c\u751a\u81f3\u662f\u5176\u4ed6\u8bed\u8a00\uff0c\u4f60\u9700\u8981\u628a ",(0,o.kt)("inlineCode",{parentName:"p"},"@logto/js")," \u66ff\u6362\u6210\u5176\u4ed6\u8bed\u8a00\u7684\u6838\u5fc3 SDK\uff0c\u5e76\u5bf9\u6b65\u9aa4\u505a\u9002\u5f53\u8c03\u6574\u3002"))),(0,o.kt)("h2",{id:"\u83b7\u53d6\u6e90\u4ee3\u7801"},"\u83b7\u53d6\u6e90\u4ee3\u7801"),(0,o.kt)("p",null,"\u5230 ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/logto-io/express-example"},"GitHub")," \u4e0b\u8f7d\u672c\u6559\u7a0b\u7684\u6700\u7ec8\u4ee3\u7801\u3002"),(0,o.kt)("h2",{id:"\u65b0\u5efa-express-\u9879\u76ee"},"\u65b0\u5efa Express \u9879\u76ee"),(0,o.kt)("p",null,"\u901a\u8fc7 ",(0,o.kt)("inlineCode",{parentName:"p"},"express-generator")," \u5feb\u901f\u521b\u5efa\u4e00\u4e2a Express \u9879\u76ee\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir express-logto\ncd express-logto\nnpx express-generator\n")),(0,o.kt)("h2",{id:"\u5b89\u88c5\u4f9d\u8d56"},"\u5b89\u88c5\u4f9d\u8d56"),(0,o.kt)("p",null,"\u672c\u6f14\u793a\u9879\u76ee\u9700\u8981\u5b89\u88c5 4 \u4e2a\u4f9d\u8d56\u5305\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"@logto/js"),": Logto \u6838\u5fc3 JavaScript SDK\u3002"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"node-fetch"),": \u6700\u5c0f\u4ee3\u7801\u5728 Node.js \u8fd0\u884c\u73af\u5883\u4e2d\u5b9e\u73b0 ",(0,o.kt)("inlineCode",{parentName:"li"},"window.fetch")," \u517c\u5bb9\u3002"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"express-session"),": session \u4e2d\u95f4\u4ef6, \u7528\u4e8e\u5b58\u50a8\u7528\u6237 token\u3002"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"js-base64"),": Base64 \u8f6c\u6362\u5de5\u5177\u3002")),(0,o.kt)(s.Z,{mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"npm",label:"npm",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm i @logto/js node-fetch@v2 express-session js-base64\n"))),(0,o.kt)(i.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @logto/js node-fetch@v2 express-session js-base64\n"))),(0,o.kt)(i.Z,{value:"pnpm",label:"pnpm",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"pnpm add @logto/js node-fetch@v2 express-session js-base64\n")))),(0,o.kt)("h2",{id:"\u4f7f\u7528-session"},"\u4f7f\u7528 session"),(0,o.kt)("p",null,"\u7528\u6237\u5b8c\u6210\u767b\u5f55\u540e\uff0c\u5c06\u4f1a\u5f97\u5230\u4e00\u7cfb\u5217\u7684 token\uff08Access Token, ID Token, Refresh Token\uff09\u548c\u4ea4\u4e92\u6570\u636e\uff0c\u6211\u4eec\u5c06\u8fd9\u4e9b\u6570\u636e\u4fdd\u5b58\u5230 session \u4e2d\u3002"),(0,o.kt)("p",null,"\u5728\u4e0a\u4e00\u4e2a\u6b65\u9aa4\u4e2d\u5df2\u7ecf\u5b89\u88c5\u4e86 ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/expressjs/session"},"express-session"),"\uff0c\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"app.js")," \u4e2d\u5b8c\u6210\u521d\u59cb\u5316\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const session = require('express-session');\n\napp.use(\n  session({\n    secret: 'keyboard cat', // \u6539\u4e3a\u4f60\u81ea\u5df1\u7684\u5bc6\u94a5\n    cookie: { maxAge: 86400 },\n  })\n);\n")),(0,o.kt)("h2",{id:"\u7528\u4e8e\u7528\u6237\u8ba4\u8bc1\u7684\u76f8\u5173\u51fd\u6570"},"\u7528\u4e8e\u7528\u6237\u8ba4\u8bc1\u7684\u76f8\u5173\u51fd\u6570"),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u5728\u4e4b\u540e\u7684\u4ee3\u7801\u7247\u6bb5\u4e2d\uff0c\u6211\u4eec\u5047\u8bbe\u5e94\u7528\u8fd0\u884c\u4e8e ",(0,o.kt)("inlineCode",{parentName:"p"},"http://localhost:3000"),"\u3002"))),(0,o.kt)("p",null,"\u5728\u672c\u6b65\u9aa4\u4e2d\uff0c\u6211\u4eec\u5c06\u4f1a\u5b9e\u73b0\u5982\u4e0b\u51e0\u4e2a\u7528\u6237\u8ba4\u8bc1\u6240\u9700\u51fd\u6570\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"getSignInUrl"),": \u6784\u5efa\u5e76\u8fd4\u56de\u5b8c\u6574\u7684\u7528\u4e8e Logto \u8ba4\u8bc1\u670d\u52a1\u7684 URL\uff0c\u7528\u6237\u5c06\u88ab\u91cd\u5b9a\u5411\u5230\u8fd9\u4e2a URL \u4ee5\u5b8c\u6210\u767b\u5f55\u3002"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"handleSignIn"),": \u89e3\u6790\u56de\u8c03 URL\uff0c \u4ece query \u53c2\u6570\u4e2d\u83b7\u53d6 code\uff0c \u5e76\u7528\u5b83\u83b7\u53d6\u5176\u4ed6 token (an access token, the refresh token, and an ID token)\uff0c\u5b8c\u6210\u6574\u4e2a\u767b\u5f55\u6d41\u7a0b\u3002"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"refreshTokens"),": \u4f7f\u7528 refresh token \u83b7\u53d6\u65b0\u7684 access token\u3002")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// logto.js\n\nconst {\n  withReservedScopes,\n  fetchOidcConfig,\n  discoveryPath,\n  createRequester,\n  generateSignInUri,\n  verifyAndParseCodeFromCallbackUri,\n  fetchTokenByAuthorizationCode,\n  fetchTokenByRefreshToken,\n} = require('@logto/js');\nconst fetch = require('node-fetch');\nconst { randomFillSync, createHash } = require('crypto');\nconst { fromUint8Array } = require('js-base64');\n\nconst config = {\n  endpoint: 'https://logto.dev',\n  appId: 'foo',\n  redirectUri: 'http://localhost:3000/callback', // You may need to replace it with your app's production address\n  scopes: withReservedScopes().split(' '),\n};\n\nconst requester = createRequester(fetch);\n\nconst generateRandomString = (length = 64) => {\n  return fromUint8Array(randomFillSync(new Uint8Array(length)), true);\n};\n\nconst generateCodeChallenge = async (codeVerifier) => {\n  const encodedCodeVerifier = new TextEncoder().encode(codeVerifier);\n  const hash = createHash('sha256');\n  hash.update(encodedCodeVerifier);\n  const codeChallenge = hash.digest();\n  return fromUint8Array(codeChallenge, true);\n};\n\nconst getOidcConfig = async () => {\n  return fetchOidcConfig(new URL(discoveryPath, config.endpoint).toString(), requester);\n};\n\nexports.getSignInUrl = async () => {\n  const { authorizationEndpoint } = await getOidcConfig();\n  const codeVerifier = generateRandomString();\n  const codeChallenge = await generateCodeChallenge(codeVerifier);\n  const state = generateRandomString();\n\n  const { redirectUri, scopes, appId: clientId } = config;\n\n  const signInUri = generateSignInUri({\n    authorizationEndpoint,\n    clientId,\n    redirectUri: redirectUri,\n    codeChallenge,\n    state,\n    scopes,\n  });\n\n  return { redirectUri, codeVerifier, state, signInUri };\n};\n\nexports.handleSignIn = async (signInSession, callbackUri) => {\n  const { redirectUri, state, codeVerifier } = signInSession;\n  const code = verifyAndParseCodeFromCallbackUri(callbackUri, redirectUri, state);\n\n  const { appId: clientId } = config;\n  const { tokenEndpoint } = await getOidcConfig();\n  const codeTokenResponse = await fetchTokenByAuthorizationCode(\n    {\n      clientId,\n      tokenEndpoint,\n      redirectUri,\n      codeVerifier,\n      code,\n    },\n    requester\n  );\n\n  return codeTokenResponse;\n};\n\nexports.refreshTokens = async (refreshToken) => {\n  const { appId: clientId, scopes } = config;\n  const { tokenEndpoint } = await getOidcConfig();\n  const tokenResponse = await fetchTokenByRefreshToken(\n    {\n      clientId,\n      tokenEndpoint,\n      refreshToken,\n      scopes,\n    },\n    requester\n  );\n\n  return tokenResponse;\n};\n")),(0,o.kt)("h2",{id:"\u767b\u5f55"},"\u767b\u5f55"),(0,o.kt)("p",null,"\u5728 Express \u91cc\u521b\u5efa\u4e00\u4e2a\u7528\u4e8e\u767b\u5f55\u7684\u8def\u7531\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const { getSignInUrl } = require('./logto');\n\napp.get('/sign-in', async (req, res) => {\n  const { redirectUri, codeVerifier, state, signInUri } = await getSignInUrl();\n  req.session.signIn = { codeVerifier, state, redirectUri };\n  res.redirect(signInUri);\n});\n")),(0,o.kt)("p",null,"\u4ee5\u53ca\u5904\u7406\u767b\u5f55\u56de\u8c03\u7684\u8def\u7531:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"app.get('/callback', async (req, res) => {\n  if (!req.session.signIn) {\n    res.send('Bad request.');\n    return;\n  }\n\n  const response = await handleSignIn(\n    req.session.signIn,\n    `${req.protocol}://${req.get('host')}${req.originalUrl}`\n  );\n  req.session.tokens = {\n    ...response,\n    expiresAt: response.expiresIn + Date.now(),\n    idToken: decodeIdToken(response.idToken),\n  };\n  req.session.signIn = null;\n\n  res.redirect('/');\n});\n")),(0,o.kt)("h2",{id:"\u9000\u51fa\u767b\u5f55"},"\u9000\u51fa\u767b\u5f55"),(0,o.kt)("p",null,'TODO: link to the "session & cookies" chapter in users reference.'),(0,o.kt)("p",null,"\u6e05\u7a7a session \u91cc\u7684 token \u4fe1\u606f\u5373\u53ef\u5b9e\u73b0\u9000\u51fa\u5f53\u524d App\u3002\u53c2\u9605\u672c\u94fe\u63a5\u67e5\u770b\u66f4\u591a\u5173\u4e8e\u300c\u9000\u51fa\u767b\u5f55\u300d\u7684\u8bf4\u660e\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"app.get('/sign-out', (req, res) => {\n  req.session.tokens = null;\n  res.send('\u6210\u529f\u9000\u51fa\u767b\u5f55');\n});\n")),(0,o.kt)("h2",{id:"\u8bbf\u95ee\u53d7\u4fdd\u62a4\u8d44\u6e90"},"\u8bbf\u95ee\u53d7\u4fdd\u62a4\u8d44\u6e90"),(0,o.kt)("p",null,"\u521b\u5efa\u4e2d\u95f4\u4ef6 ",(0,o.kt)("inlineCode",{parentName:"p"},"withAuth"),"\uff0c\u7528\u4e8e\u9a8c\u8bc1\u7528\u6237\u662f\u5426\u767b\u5f55\uff0c\u5e76\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"req")," \u91cc\u6dfb\u52a0 ",(0,o.kt)("inlineCode",{parentName:"p"},"auth"),"\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// auth.js\n\nconst { decodeIdToken } = require('@logto/js');\nconst { refreshTokens } = require('./logto');\n\nconst withAuth =\n  ({ requireAuth } = { requireAuth: true }) =>\n  async (req, res, next) => {\n    if (requireAuth && !req.session.tokens) {\n      res.redirect('/sign-in');\n      return;\n    }\n\n    if (req.session.tokens) {\n      if (req.session.tokens.expiresAt >= Date.now()) {\n        // Access token \u5df2\u8fc7\u671f, \u5237\u65b0 token\n        try {\n          const response = await refreshTokens(req.session.tokens.refreshToken);\n          req.session.tokens = {\n            ...response,\n            expiresAt: response.expiresIn + Date.now(),\n            idToken: decodeIdToken(response.idToken),\n          };\n        } catch {\n          // \u53d1\u751f\u9519\u8bef\uff0c\u91cd\u5b9a\u5411\u5230\u767b\u5f55\u9875\u9762\n          res.redirect('/sign-in');\n          return;\n        }\n      }\n\n      req.auth = req.session.tokens.idToken.sub;\n    }\n\n    next();\n  };\n\nmodule.exports = withAuth;\n")),(0,o.kt)("p",null,"\u521b\u5efa ",(0,o.kt)("inlineCode",{parentName:"p"},"index")," \u9875\u9762, \u4e3a\u6e38\u5ba2\u5c55\u793a\u4e00\u4e2a\u767b\u5f55\u94fe\u63a5, \u4e3a\u5df2\u767b\u5f55\u7528\u6237\u5c55\u793a\u67e5\u770b\u7528\u6237\u4fe1\u606f\u7684\u94fe\u63a5\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"router.get('/', withAuth({ requireAuth: false }), function (req, res, next) {\n  res.render('index', { auth: Boolean(req.auth) });\n});\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jade"},'extends layout\n\nblock content\n  h1 Hello logto\n  if auth\n    p: a(href="/user") \u67e5\u770b\u7528\u6237\u4fe1\u606f\n  else\n    p: a(href="/sign-in") \u70b9\u51fb\u6b64\u5904\u767b\u5f55\n')),(0,o.kt)("p",null,"\u521b\u5efa ",(0,o.kt)("inlineCode",{parentName:"p"},"user")," \u9875\u9762\uff0c\u5e76\u5c55\u793a ",(0,o.kt)("inlineCode",{parentName:"p"},"userId")," (",(0,o.kt)("inlineCode",{parentName:"p"},"subject"),"):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"app.get('/user', withAuth(), (req, res, next) => {\n  res.render('user', { userId: req.auth });\n});\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jade"},"extends layout\n\nblock content\n  h1 Hello logto\n  p userId: #{userId}\n")),(0,o.kt)("h2",{id:"\u5ef6\u5c55\u9605\u8bfb"},"\u5ef6\u5c55\u9605\u8bfb"),(0,o.kt)(c.ZP,{mdxType:"FurtherReadings"}))}f.isMDXComponent=!0}}]);