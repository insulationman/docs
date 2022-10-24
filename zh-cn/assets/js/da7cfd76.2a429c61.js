"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[7110],{49613:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return c}});var n=a(59496);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=u(a),c=o,m=p["".concat(s,".").concat(c)]||p[c]||g[c]||r;return a?n.createElement(m,i(i({ref:t},d),{},{components:a})):n.createElement(m,i({ref:t},d))}));function c(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<r;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},55799:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return g},default:function(){return f},frontMatter:function(){return d},metadata:function(){return p},toc:function(){return m}});var n=a(665),o=a(40151),r=(a(59496),a(49613)),i=a.p+"assets/images/add-new-language-26ecd0a1b3a31b7912f19702fbb0855f.png",l=a.p+"assets/images/manage-language-f09d089902fd0a3756c34bc65435928d.png",s=a.p+"assets/images/sie-others-02c023eac61714050cbfa7a3644df14e.png",u=["components"],d={sidebar_position:8},g="\ud83c\udf10 Localization",p={unversionedId:"docs/recipes/localization/README",id:"docs/recipes/localization/README",title:"\ud83c\udf10 Localization",description:"The Sign-in Experience i18n is a powerful tool that allows you to create and manage your own unique set of language options.",source:"@site/docs/docs/recipes/localization/README.mdx",sourceDirName:"docs/recipes/localization",slug:"/docs/recipes/localization/",permalink:"/zh-cn/docs/recipes/localization/",draft:!1,editUrl:"https://github.com/logto-io/docs/tree/master/docs/docs/recipes/localization/README.mdx",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"docsSidebar",previous:{title:"\ud83d\ude80 \u90e8\u7f72",permalink:"/zh-cn/docs/recipes/deployment/"},next:{title:"\ud83d\udcf1 \u5e94\u7528",permalink:"/zh-cn/docs/references/applications/"}},c={},m=[{value:"Set your language mode",id:"set-your-language-mode",level:2},{value:"Customize the existing language",id:"customize-the-existing-language",level:2},{value:"Add a new language",id:"add-a-new-language",level:2},{value:"How added language appear to end customers",id:"how-added-language-appear-to-end-customers",level:2},{value:"FAQ",id:"faq",level:2}],h={toc:m};function f(e){var t=e.components,a=(0,o.Z)(e,u);return(0,r.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"-localization"},"\ud83c\udf10 Localization"),(0,r.kt)("p",null,"The Sign-in Experience i18n is a powerful tool that allows you to create and manage your own unique set of language options."),(0,r.kt)("p",null,"Logto supports 6 different languages pre-defined from v1.0.0-beta.11. Now, 113 language tags are also included. You can make your own translation of the product's user interface and apply it in a different language."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Currently, this language setting only affects the Sign-in UI and has no bearing on the language used in the Admin Console.")),(0,r.kt)("p",null,"Let's back up for a second and look at the framework and terminology used to describe the Sign-in Experience.",(0,r.kt)("br",{parentName:"p"}),"\n",'A JSON file stores the text for the Logto sign-in user interface. A "key", or unique identifier, and its associated "value" define each phrase.'),(0,r.kt)("p",null,"For example,"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const translation = {\n  input: {\n    username: 'Username',\n    password: 'Password',\n    email: 'Email',\n    phone_number: 'Phone number',\n    confirm_password: 'Confirm password',\n  },\n  secondary: {\n    sign_in_with: 'Sign in with {{methods, list(type: disjunction;)}}',\n    social_bind_with:\n      'Already have an account? Sign in to link {{methods, list(type: disjunction;)}} with your social identity.',\n  },\n  // ....\n};\n\nexport default translation;\n")),(0,r.kt)("p",null,"As a result, localization's emphasis is on making it simple and intuitive for you to edit those values (code in red) with no code needed.",(0,r.kt)("br",{parentName:"p"}),"\n","Your developers will then have a great deal of leeway and will be happy to embrace a customized experience based on the business's specific requirements."),(0,r.kt)("p",null,"Let's see how we did in the following sections."),(0,r.kt)("h2",{id:"set-your-language-mode"},"Set your language mode"),(0,r.kt)("img",{alt:"Sign-in experience - Others",src:s}),(0,r.kt)("p",null,"Go to ",(0,r.kt)("strong",{parentName:"p"},"Sign-in Experience > Others > Language")," to configure your languages.",(0,r.kt)("br",{parentName:"p"}),"\n","You may have already configured your language mode during the initial launch; for a refresher, see ",(0,r.kt)("a",{parentName:"p",href:"/zh-cn/docs/tutorials/get-started/customize-sign-in-experience#language"},"Get started - Language"),"."),(0,r.kt)("h2",{id:"customize-the-existing-language"},"Customize the existing language"),(0,r.kt)("p",null,"There is also a ",(0,r.kt)("strong",{parentName:"p"},"Manage language")," button beneath the toggle. This is the location where you can manage your language library."),(0,r.kt)("p",null,"We make every effort to make language customization as simple as possible, but we may refer to a few terms throughout the documentation. Here are a few definitions you should be aware of:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Definition"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Language tag"),(0,r.kt)("td",{parentName:"tr",align:null},"The language tag identifies the language of the content. A language tag is made up of a language code (for example, en, fr, zh) and a country/region code (for example, US, UK, KR) separated by hyphens. A language tag looks like this: en-US.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Logto provided language"),(0,r.kt)("td",{parentName:"tr",align:null},"Logto provided language is Logto official language and is stored in Logto original code base.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Added language"),(0,r.kt)("td",{parentName:"tr",align:null},"Added language is the language added by users.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Logto source values"),(0,r.kt)("td",{parentName:"tr",align:null},"Logto source values are Logto-supplied values that have not been customized by users.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Custom values"),(0,r.kt)("td",{parentName:"tr",align:null},"Custom values are values that have already been customized by users. Logto source values will be overwritten.")))),(0,r.kt)("p",null,"When you click the ",(0,r.kt)("strong",{parentName:"p"},"Manage language")," button, a modal screen will appear.",(0,r.kt)("br",{parentName:"p"}),"\n","Logto provides the languages on the left side, and you can see Logto provided next to the language tag. Although pre-defined languages cannot be deleted, they can be customized. When it loads in front of end users, your custom values will overwrite Logto source values."),(0,r.kt)("img",{alt:"Manage language",src:l}),(0,r.kt)("h2",{id:"add-a-new-language"},"Add a new language"),(0,r.kt)("img",{alt:"Add a new language",src:i}),(0,r.kt)("p",null,"You can also add your own language in addition to the ones Logto offers. Click the ",(0,r.kt)("strong",{parentName:"p"},"Add language")," button, select a language tag, add your own translation, and then save your changes. You can then find the added language in the dropdown menu on the left side of the screen. The new language version is now available!"),(0,r.kt)("h2",{id:"how-added-language-appear-to-end-customers"},"How added language appear to end customers"),(0,r.kt)("p",null,"Let's say you have a website where English is the default language and auto-detect is turned on. A user from Japan happens upon your site and decides to create an account. If he/she uses Japanese as their app language but Logto doesn't yet support the language, the sign-in screen will appear in English."),(0,r.kt)("p",null,"Now SIE i18n makes customized language possible.",(0,r.kt)("br",{parentName:"p"}),"\n","Click the ",(0,r.kt)("inlineCode",{parentName:"p"},"ja")," language tag to add your own Japanese translation.",(0,r.kt)("br",{parentName:"p"}),"\n","In this way, the user accessing your site from Japan will be able to read content in Japanese, which you have just translated from English."),(0,r.kt)("h2",{id:"faq"},"FAQ"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"What if the language I added becomes Logto provided language?")),(0,r.kt)("p",null,"Next to the language tag on the left, a Logto-provided tag will appear, and the language you added will no longer be removable. The modified values continue to function and replace the original Logto values. Erase the user-supplied values to use the values provided by Logto's default configuration."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"What if I only added a few custom values?")),(0,r.kt)("p",null,"What the final users see is the result of the two columns merging.",(0,r.kt)("br",{parentName:"p"}),"\n","Suppose, that you only want to make adjustments to a subset of the original content copies that Logto supplied. The only difference between your signup screen and the one provided by Logto will be the keys you edited. The rest of the content will remain unchanged."))}f.isMDXComponent=!0}}]);