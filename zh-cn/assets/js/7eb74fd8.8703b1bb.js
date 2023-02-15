"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[4842],{49613:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return p}});var r=t(59496);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),d=s(t),p=a,m=d["".concat(l,".").concat(p)]||d[p]||f[p]||o;return t?r.createElement(m,i(i({ref:n},c),{},{components:t})):r.createElement(m,i({ref:n},c))}));function p(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var u={};for(var l in n)hasOwnProperty.call(n,l)&&(u[l]=n[l]);u.originalType=e,u.mdxType="string"==typeof e?e:a,i[1]=u;for(var s=2;s<o;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},67245:function(e,n,t){t.d(n,{Z:function(){return i}});t(59496);var r=t(45924),a="tabItem_wP3Q",o=t(4637);function i(e){var n=e.children,t=e.hidden,i=e.className;return(0,o.jsx)("div",{role:"tabpanel",className:(0,r.Z)(a,i),hidden:t,children:n})}},31614:function(e,n,t){t.d(n,{Z:function(){return w}});var r=t(59496),a=t(45924),o=t(43226),i=t(59630),u=t(84534),l=t(27995);function s(e){return function(e){return r.Children.map(e,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')}))}(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}function c(e){var n=e.values,t=e.children;return(0,r.useMemo)((function(){var e=null!=n?n:s(t);return function(e){var n=(0,u.l)(e,(function(e,n){return e.value===n.value}));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function f(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function d(e){var n=e.queryString,t=void 0!==n&&n,a=e.groupId,u=(0,o.k6)(),l=function(e){var n=e.queryString,t=void 0!==n&&n,r=e.groupId;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:t,groupId:a});return[(0,i._X)(l),(0,r.useCallback)((function(e){if(l){var n=new URLSearchParams(u.location.search);n.set(l,e),u.replace(Object.assign({},u.location,{search:n.toString()}))}}),[l,u])]}function p(e){var n,t,a,o,i=e.defaultValue,u=e.queryString,s=void 0!==u&&u,p=e.groupId,m=c(e),g=(0,r.useState)((function(){return function(e){var n,t=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!f({value:t,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}var a=null!=(n=r.find((function(e){return e.default})))?n:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:i,tabValues:m})})),v=g[0],b=g[1],h=d({queryString:s,groupId:p}),y=h[0],k=h[1],O=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:p}.groupId),t=(0,l.Nk)(n),a=t[0],o=t[1],[a,(0,r.useCallback)((function(e){n&&o.set(e)}),[n,o])]),w=O[0],I=O[1],T=function(){var e=null!=y?y:w;return f({value:e,tabValues:m})?e:null}();return(0,r.useLayoutEffect)((function(){T&&b(T)}),[T]),{selectedValue:v,selectValue:(0,r.useCallback)((function(e){if(!f({value:e,tabValues:m}))throw new Error("Can't select invalid tab value="+e);b(e),k(e),I(e)}),[k,I,m]),tabValues:m}}var m=t(80274),g=t(45605),v="tabList_npZo",b="tabItem_InYg",h=t(4637);function y(e){var n=e.className,t=e.block,r=e.selectedValue,o=e.selectValue,i=e.tabValues,u=[],l=(0,m.o5)().blockElementScrollPositionUntilNextRender,s=function(e){var n=e.currentTarget,t=u.indexOf(n),a=i[t].value;a!==r&&(l(n),o(a))},c=function(e){var n,t=null;switch(e.key){case"Enter":s(e);break;case"ArrowRight":var r,a=u.indexOf(e.currentTarget)+1;t=null!=(r=u[a])?r:u[0];break;case"ArrowLeft":var o,i=u.indexOf(e.currentTarget)-1;t=null!=(o=u[i])?o:u[u.length-1]}null==(n=t)||n.focus()};return(0,h.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":t},n),children:i.map((function(e){var n=e.value,t=e.label,o=e.attributes;return(0,h.jsx)("li",Object.assign({role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:function(e){return u.push(e)},onKeyDown:c,onClick:s},o,{className:(0,a.Z)("tabs__item",b,null==o?void 0:o.className,{"tabs__item--active":r===n}),children:null!=t?t:n}),n)}))})}function k(e){var n=e.lazy,t=e.children,a=e.selectedValue;if(t=Array.isArray(t)?t:[t],n){var o=t.find((function(e){return e.props.value===a}));return o?(0,r.cloneElement)(o,{className:"margin-top--md"}):null}return(0,h.jsx)("div",{className:"margin-top--md",children:t.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a})}))})}function O(e){var n=p(e);return(0,h.jsxs)("div",{className:(0,a.Z)("tabs-container",v),children:[(0,h.jsx)(y,Object.assign({},e,n)),(0,h.jsx)(k,Object.assign({},e,n))]})}function w(e){var n=(0,g.Z)();return(0,h.jsx)(O,Object.assign({},e),String(n))}},11752:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return c},default:function(){return g},frontMatter:function(){return s},metadata:function(){return f},toc:function(){return p}});var r=t(665),a=t(40151),o=(t(59496),t(49613)),i=t(67245),u=t(31614),l=["components"],s={sidebar_position:5},c="Migrate configs from env",f={unversionedId:"docs/tutorials/using-cli/migrate-from-env",id:"docs/tutorials/using-cli/migrate-from-env",title:"Migrate configs from env",description:"You can skip this page if your Logto version is greater than or equal to v1.0.0-beta.11.",source:"@site/docs/docs/tutorials/using-cli/migrate-from-env.mdx",sourceDirName:"docs/tutorials/using-cli",slug:"/docs/tutorials/using-cli/migrate-from-env",permalink:"/zh-cn/docs/tutorials/using-cli/migrate-from-env",draft:!1,editUrl:"https://github.com/logto-io/docs/tree/master/docs/docs/tutorials/using-cli/migrate-from-env.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"docsSidebar",previous:{title:"Manage database configs",permalink:"/zh-cn/docs/tutorials/using-cli/manage-database-configs"},next:{title:"\ud83d\udd17 \u5728\u4f60\u7684\u5e94\u7528\u4e2d\u96c6\u6210 Logto",permalink:"/zh-cn/docs/recipes/integrate-logto/"}},d={},p=[],m={toc:p};function g(e){var n=e.components,t=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"migrate-configs-from-env"},"Migrate configs from env"),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"You can skip this page if your Logto version is greater than or equal to ",(0,o.kt)("inlineCode",{parentName:"p"},"v1.0.0-beta.11"),".")),(0,o.kt)("p",null,"Managing too many environment variables are not efficient and flexible, and it\u2019s hard to keep a single source of truth when you have multiple containers running."),(0,o.kt)("p",null,"So we decided to move all possible technical configs to the database, including OIDC-related keys."),(0,o.kt)("p",null,"To make it smooth, make sure you have an original ",(0,o.kt)("inlineCode",{parentName:"p"},".env")," file, or run the command in an environment that has the following variables:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"OIDC_PRIVATE_KEYS=some_secret_key # Or OIDC_PRIVATE_KEY_PATHS\nOIDC_COOKIE_KEYS=key1,key2\nDB_URL=postgresql://localhost:5432/logto\n")),(0,o.kt)("p",null,"Then run the command below:"),(0,o.kt)(u.Z,{groupId:"cmd",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"cli",label:"CLI",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"logto db seed oidc\n# Or\nlogto db seed oidc --env /your/path/to/.env\n"))),(0,o.kt)(i.Z,{value:"npx",label:"npx",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npx @logto/cli db seed oidc\n# Or\nnpx @logto/cli db seed oidc --env /your/path/to/.env\n")))),(0,o.kt)("p",null,"If everything goes well, you will see the message like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"[info] Read config oidc.privateKeys from env\n[info] Read config oidc.cookieKeys from env\n[info] Generated config oidc.refreshTokenReuseInterval\n[info] \u2714 Seed OIDC config\n")),(0,o.kt)("p",null,"From now on, you can safely remove ",(0,o.kt)("inlineCode",{parentName:"p"},"OIDC_PRIVATE_KEYS")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"OIDC_COOKIE_KEYS")," from the environment variables. Remember to restart your Logto instance to get the changes reflected."))}g.isMDXComponent=!0}}]);