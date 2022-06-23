"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[1539],{9613:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return g}});var o=n(9496);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function a(t,e){if(null==t)return{};var n,o,r=function(t,e){if(null==t)return{};var n,o,r={},i=Object.keys(t);for(o=0;o<i.length;o++)n=i[o],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(o=0;o<i.length;o++)n=i[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var d=o.createContext({}),s=function(t){var e=o.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},u=function(t){var e=s(t.components);return o.createElement(d.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},p=o.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,d=t.parentName,u=a(t,["components","mdxType","originalType","parentName"]),p=s(n),g=r,m=p["".concat(d,".").concat(g)]||p[g]||c[g]||i;return n?o.createElement(m,l(l({ref:e},u),{},{components:n})):o.createElement(m,l({ref:e},u))}));function g(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,l=new Array(i);l[0]=p;var a={};for(var d in e)hasOwnProperty.call(e,d)&&(a[d]=e[d]);a.originalType=t,a.mdxType="string"==typeof t?t:r,l[1]=a;for(var s=2;s<i;s++)l[s]=n[s];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8323:function(t,e,n){n.r(e),n.d(e,{assets:function(){return u},contentTitle:function(){return d},default:function(){return g},frontMatter:function(){return a},metadata:function(){return s},toc:function(){return c}});var o=n(5443),r=n(3010),i=(n(9496),n(9613)),l=["components"],a={},d="LogtoUtils",s={unversionedId:"sdk/Kotlin/android/io.logto.sdk.android.util/-logto-utils/index",id:"sdk/Kotlin/android/io.logto.sdk.android.util/-logto-utils/index",title:"LogtoUtils",description:"object LogtoUtils",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/sdk/Kotlin/android/io.logto.sdk.android.util/-logto-utils/index.md",sourceDirName:"sdk/Kotlin/android/io.logto.sdk.android.util/-logto-utils",slug:"/sdk/Kotlin/android/io.logto.sdk.android.util/-logto-utils/",permalink:"/zh-cn/sdk/Kotlin/android/io.logto.sdk.android.util/-logto-utils/",draft:!1,editUrl:"https://github.com/logto-io/docs/tree/master/docs/sdk/Kotlin/android/io.logto.sdk.android.util/-logto-utils/index.md",tags:[],version:"current",frontMatter:{},sidebar:"sdkSidebar",previous:{title:"io.logto.sdk.android.util",permalink:"/zh-cn/sdk/Kotlin/android/io.logto.sdk.android.util/"},next:{title:"@logto-io/swift",permalink:"/zh-cn/sdk/Swift/"}},u={},c=[{value:"Functions",id:"functions",level:2}],p={toc:c};function g(t){var e=t.components,n=(0,r.Z)(t,l);return(0,i.kt)("wrapper",(0,o.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"logtoutils"},"LogtoUtils"),(0,i.kt)("p",null,"object LogtoUtils"),(0,i.kt)("h2",{id:"functions"},"Functions"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,i.kt)("th",{parentName:"tr",align:null},"\u6982\u8981"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"expiresAtFrom"),(0,i.kt)("td",{parentName:"tr",align:null},"fun expiresAtFrom(startTime: ",(0,i.kt)("a",{parentName:"td",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html"},"Long"),", lifetime: ",(0,i.kt)("a",{parentName:"td",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html"},"Long"),"): ",(0,i.kt)("a",{parentName:"td",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html"},"Long"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"isDependencyInstalled"),(0,i.kt)("td",{parentName:"tr",align:null},"fun isDependencyInstalled(identifyClassName: ",(0,i.kt)("a",{parentName:"td",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"),"): ",(0,i.kt)("a",{parentName:"td",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html"},"Boolean"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"nowRoundToSec"),(0,i.kt)("td",{parentName:"tr",align:null},"fun nowRoundToSec(): ",(0,i.kt)("a",{parentName:"td",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html"},"Long"))))))}g.isMDXComponent=!0}}]);