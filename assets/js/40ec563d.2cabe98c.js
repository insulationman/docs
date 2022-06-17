"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[5654],{9613:function(t,e,a){a.d(e,{Zo:function(){return c},kt:function(){return k}});var n=a(9496);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},o=Object.keys(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var d=n.createContext({}),s=function(t){var e=n.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},c=function(t){var e=s(t.components);return n.createElement(d.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,o=t.originalType,d=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),m=s(a),k=r,u=m["".concat(d,".").concat(k)]||m[k]||p[k]||o;return a?n.createElement(u,i(i({ref:e},c),{},{components:a})):n.createElement(u,i({ref:e},c))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var d in e)hasOwnProperty.call(e,d)&&(l[d]=e[d]);l.originalType=t,l.mdxType="string"==typeof t?t:r,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},4263:function(t,e,a){a.r(e),a.d(e,{assets:function(){return c},contentTitle:function(){return d},default:function(){return k},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p}});var n=a(5443),r=a(3010),o=(a(9496),a(9613)),i=["components"],l={},d="WechatSocialSession",s={unversionedId:"sdk/Kotlin/android/io.logto.sdk.android.auth.social.wechat/-wechat-social-session/index",id:"sdk/Kotlin/android/io.logto.sdk.android.auth.social.wechat/-wechat-social-session/index",title:"WechatSocialSession",description:"class WechatSocialSession(val context String, val callbackUri Completion&lt;SocialException, String&gt;) : SocialSession",source:"@site/docs/sdk/Kotlin/android/io.logto.sdk.android.auth.social.wechat/-wechat-social-session/index.md",sourceDirName:"sdk/Kotlin/android/io.logto.sdk.android.auth.social.wechat/-wechat-social-session",slug:"/sdk/Kotlin/android/io.logto.sdk.android.auth.social.wechat/-wechat-social-session/",permalink:"/sdk/Kotlin/android/io.logto.sdk.android.auth.social.wechat/-wechat-social-session/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/sdk/Kotlin/android/io.logto.sdk.android.auth.social.wechat/-wechat-social-session/index.md",tags:[],version:"current",frontMatter:{},sidebar:"sdkSidebar",previous:{title:"Companion",permalink:"/sdk/Kotlin/android/io.logto.sdk.android.auth.social.wechat/-wechat-social-result-activity/-companion/"},next:{title:"Companion",permalink:"/sdk/Kotlin/android/io.logto.sdk.android.auth.social.wechat/-wechat-social-session/-companion/"}},c={},p=[{value:"Constructors",id:"constructors",level:2},{value:"Types",id:"types",level:2},{value:"Functions",id:"functions",level:2},{value:"Properties",id:"properties",level:2}],m={toc:p};function k(t){var e=t.components,a=(0,r.Z)(t,i);return(0,o.kt)("wrapper",(0,n.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"wechatsocialsession"},"WechatSocialSession"),(0,o.kt)("p",null,"class WechatSocialSession(val context: ",(0,o.kt)("a",{parentName:"p",href:"https://developer.android.com/reference/kotlin/android/app/Activity.html"},"Activity"),", val redirectTo: ",(0,o.kt)("a",{parentName:"p",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"),", val callbackUri: ",(0,o.kt)("a",{parentName:"p",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"),", val completion: ",(0,o.kt)("a",{parentName:"p",href:"/sdk/Kotlin/android/io.logto.sdk.android.completion/-completion/"},"Completion"),"<",(0,o.kt)("a",{parentName:"p",href:"/sdk/Kotlin/android/io.logto.sdk.android.auth.social/-social-exception/"},"SocialException"),", ",(0,o.kt)("a",{parentName:"p",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"),">",") : ",(0,o.kt)("a",{parentName:"p",href:"/sdk/Kotlin/android/io.logto.sdk.android.auth.social/-social-session/"},"SocialSession")),(0,o.kt)("h2",{id:"constructors"},"Constructors"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Summary"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"WechatSocialSession"),(0,o.kt)("td",{parentName:"tr",align:null},"fun WechatSocialSession(context: ",(0,o.kt)("a",{parentName:"td",href:"https://developer.android.com/reference/kotlin/android/app/Activity.html"},"Activity"),", redirectTo: ",(0,o.kt)("a",{parentName:"td",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"),", callbackUri: ",(0,o.kt)("a",{parentName:"td",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"),", completion: ",(0,o.kt)("a",{parentName:"td",href:"/sdk/Kotlin/android/io.logto.sdk.android.completion/-completion/"},"Completion"),"<",(0,o.kt)("a",{parentName:"td",href:"/sdk/Kotlin/android/io.logto.sdk.android.auth.social/-social-exception/"},"SocialException"),", ",(0,o.kt)("a",{parentName:"td",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"),">",")")))),(0,o.kt)("h2",{id:"types"},"Types"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Summary"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/sdk/Kotlin/android/io.logto.sdk.android.auth.social.wechat/-wechat-social-session/-companion/"},"Companion")),(0,o.kt)("td",{parentName:"tr",align:null},"object ",(0,o.kt)("a",{parentName:"td",href:"/sdk/Kotlin/android/io.logto.sdk.android.auth.social.wechat/-wechat-social-session/-companion/"},"Companion"))))),(0,o.kt)("h2",{id:"functions"},"Functions"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Summary"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"handleMissingAppIdError"),(0,o.kt)("td",{parentName:"tr",align:null},"fun handleMissingAppIdError()")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"handleResult"),(0,o.kt)("td",{parentName:"tr",align:null},"fun handleResult(result: BaseResp?)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"start"),(0,o.kt)("td",{parentName:"tr",align:null},"open override fun start()")))),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Summary"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"callbackUri"),(0,o.kt)("td",{parentName:"tr",align:null},"open override val callbackUri: ",(0,o.kt)("a",{parentName:"td",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"completion"),(0,o.kt)("td",{parentName:"tr",align:null},"open override val completion: ",(0,o.kt)("a",{parentName:"td",href:"/sdk/Kotlin/android/io.logto.sdk.android.completion/-completion/"},"Completion"),"<",(0,o.kt)("a",{parentName:"td",href:"/sdk/Kotlin/android/io.logto.sdk.android.auth.social/-social-exception/"},"SocialException"),", ",(0,o.kt)("a",{parentName:"td",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"),">")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"context"),(0,o.kt)("td",{parentName:"tr",align:null},"open override val context: ",(0,o.kt)("a",{parentName:"td",href:"https://developer.android.com/reference/kotlin/android/app/Activity.html"},"Activity"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"redirectTo"),(0,o.kt)("td",{parentName:"tr",align:null},"open override val redirectTo: ",(0,o.kt)("a",{parentName:"td",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"))))))}k.isMDXComponent=!0}}]);