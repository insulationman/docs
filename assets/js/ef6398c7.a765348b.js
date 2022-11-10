"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[3874],{49613:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var o=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),u=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||r;return n?o.createElement(h,l(l({ref:t},c),{},{components:n})):o.createElement(h,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var u=2;u<r;u++)l[u]=n[u];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},84546:function(e,t,n){n.d(t,{Z:function(){return l}});n(59496);var o=n(45924),a="tabItem_wG3F",r=n(4637);function l(e){var t=e.children,n=e.hidden,l=e.className;return(0,r.jsx)("div",{role:"tabpanel",className:(0,o.Z)(a,l),hidden:n,children:t})}},84568:function(e,t,n){n.d(t,{Z:function(){return m}});var o=n(59496),a=n(45924),r=n(19991),l=n(97829),i=n(80721),s=n(46739),u="tabList_gma_",c="tabItem_KB2d",p=n(4637);function d(e){var t,n,r=e.lazy,d=e.block,m=e.defaultValue,h=e.values,g=e.groupId,k=e.className,f=o.Children.map(e.children,(function(e){if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=h?h:f.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),v=(0,l.l)(b,(function(e,t){return e.value===t.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===m?m:null!=(t=null!=m?m:null==(n=f.find((function(e){return e.props.default})))?void 0:n.props.value)?t:f[0].props.value;if(null!==y&&!b.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,i.U)(),N=w.tabGroupChoices,C=w.setTabGroupChoices,T=(0,o.useState)(y),O=T[0],x=T[1],E=[],D=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=g){var P=N[g];null!=P&&P!==O&&b.some((function(e){return e.value===P}))&&x(P)}var I=function(e){var t=e.currentTarget,n=E.indexOf(t),o=b[n].value;o!==O&&(D(t),x(o),null!=g&&C(g,String(o)))},L=function(e){var t,n=null;switch(e.key){case"Enter":I(e);break;case"ArrowRight":var o,a=E.indexOf(e.currentTarget)+1;n=null!=(o=E[a])?o:E[0];break;case"ArrowLeft":var r,l=E.indexOf(e.currentTarget)-1;n=null!=(r=E[l])?r:E[E.length-1]}null==(t=n)||t.focus()};return(0,p.jsxs)("div",{className:(0,a.Z)("tabs-container",u),children:[(0,p.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":d},k),children:b.map((function(e){var t=e.value,n=e.label,o=e.attributes;return(0,p.jsx)("li",Object.assign({role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,ref:function(e){return E.push(e)},onKeyDown:L,onClick:I},o,{className:(0,a.Z)("tabs__item",c,null==o?void 0:o.className,{"tabs__item--active":O===t}),children:null!=n?n:t}),t)}))}),r?(0,o.cloneElement)(f.filter((function(e){return e.props.value===O}))[0],{className:"margin-top--md"}):(0,p.jsx)("div",{className:"margin-top--md",children:f.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))})]})}function m(e){var t=(0,r.Z)();return(0,p.jsx)(d,Object.assign({},e),String(t))}},1761:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return p},default:function(){return k},frontMatter:function(){return c},metadata:function(){return d},toc:function(){return h}});var o=n(665),a=n(40151),r=(n(59496),n(49613)),l=n(84546),i=n(84568),s=n.p+"assets/images/gitpod-running-b10e27a7c1a1dd8eb2202034cdfa7a1f.png",u=["components"],c={},p="\u26a1 Get started",d={unversionedId:"docs/tutorials/get-started/README",id:"docs/tutorials/get-started/README",title:"\u26a1 Get started",description:"Launch Logto",source:"@site/docs/docs/tutorials/get-started/README.mdx",sourceDirName:"docs/tutorials/get-started",slug:"/docs/tutorials/get-started/",permalink:"/docs/tutorials/get-started/",draft:!1,editUrl:"https://github.com/logto-io/docs/tree/master/docs/docs/tutorials/get-started/README.mdx",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"\ud83d\udc81 Introduction",permalink:"/"},next:{title:"Check out the demo app",permalink:"/docs/tutorials/get-started/check-out-demo"}},m={},h=[{value:"Launch Logto",id:"launch-logto",level:2},{value:"Online",id:"online",level:3},{value:"Local",id:"local",level:3},{value:"Quick troubleshooting",id:"quick-troubleshooting",level:3},{value:"Create an admin account",id:"create-an-admin-account",level:2},{value:"The Get Started tab",id:"the-get-started-tab",level:2}],g={toc:h};function k(e){var t=e.components,c=(0,a.Z)(e,u);return(0,r.kt)("wrapper",(0,o.Z)({},g,c,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"-get-started"},"\u26a1 Get started"),(0,r.kt)("h2",{id:"launch-logto"},"Launch Logto"),(0,r.kt)("h3",{id:"online"},"Online"),(0,r.kt)("p",null,(0,r.kt)("a",{href:"https://gitpod.io/#https://github.com/logto-io/demo",target:"_blank",rel:"noopener"},"Click here"),"\xa0",(0,r.kt)("span",null,"to start a GitPod workspace for Logto. Wait a few moment, you'll see the message like:")),(0,r.kt)("img",{src:s,alt:"Gitpod is running",width:"600px"}),(0,r.kt)("p",null,"Press Ctrl (or Cmd) and click the link that starts with ",(0,r.kt)("inlineCode",{parentName:"p"},"https://3001-...")," to continue your Logto journey. Enjoy!"),(0,r.kt)("h3",{id:"local"},"Local"),(0,r.kt)(i.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"docker-compose",label:"Docker Compose",mdxType:"TabItem"},(0,r.kt)("p",null,"Docker Compose CLI usually comes with ",(0,r.kt)("a",{parentName:"p",href:"https://www.docker.com/products/docker-desktop"},"Docker Desktop"),"."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Do not use our docker compose command for production! Since we currently have a built-in Postgres database bundled together with the Logto app in ",(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose.yml"),",\nevery time you re-execute the command a new database instance will be created, and any data persisted previously will be lost.")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Before the first stable version is available, we use the ",(0,r.kt)("inlineCode",{parentName:"p"},"prerelease")," tag for the Docker image.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -fsSL https://raw.githubusercontent.com/logto-io/logto/HEAD/docker-compose.yml | TAG=prerelease docker compose -p logto -f - up\n")),(0,r.kt)("p",null,"After a successful composition, you will see the message like:")),(0,r.kt)(l.Z,{value:"docker",label:"Docker",mdxType:"TabItem"},(0,r.kt)("h3",null,"Step 1"),(0,r.kt)("p",null,"Prepare a ",(0,r.kt)("a",{parentName:"p",href:"https://www.postgresql.org/"},"PostgreSQL"),"@^14.0 instance, and using ",(0,r.kt)("a",{href:"/docs/tutorials/using-cli/"},"Logto CLI")," to seed a database for Logto:"),(0,r.kt)(i.Z,{groupId:"cmd",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"cli",label:"CLI",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"logto db seed\n"))),(0,r.kt)(l.Z,{value:"npx",label:"npx",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npx @logto/cli db seed\n")))),(0,r.kt)("h3",null,"Step 2"),(0,r.kt)("p",null,"Pull the image:"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Before the first stable version is available, we use the ",(0,r.kt)("inlineCode",{parentName:"p"},"prerelease")," tag for the Docker image.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# ghcr\ndocker pull ghcr.io/logto-io/logto:prerelease\n# DockerHub\ndocker pull svhd/logto:prerelease\n")),(0,r.kt)("h3",null,"Step 3"),(0,r.kt)("p",null,"Map the container port, e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"3001:3001"),"; and set the following environment variables to the container:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"TRUST_PROXY_HEADER: 1 # Set to 1 if you have an HTTPS proxy (e.g. Nginx) in front of Logto\nENDPOINT: http://localhost:3001 # Replace with your Logto endpoint URL if you are using a custom domain\nDB_URL: postgres://username:password@your_postgres_url:port # Replace with your Postgres DSN\n")),(0,r.kt)("p",null,"Run the container with all the environment variables above:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker run \\\n--name logto \\\n-p 3001:3001 \\\n-e TRUST_PROXY_HEADER=1 \\\n-e ENDPOINT=https://your-domain-url \\\n-e DB_URL=postgres://username:password@your_postgres_url:port \\\nghcr.io/logto-io/logto:prerelease\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"If you are using Docker Hub, use ",(0,r.kt)("inlineCode",{parentName:"li"},"svhd/logto:prerelease")," instead of ",(0,r.kt)("inlineCode",{parentName:"li"},"ghcr.io/logto-io/logto:prerelease"),"."),(0,r.kt)("li",{parentName:"ul"},"Use ",(0,r.kt)("inlineCode",{parentName:"li"},"host.docker.internal")," in ",(0,r.kt)("inlineCode",{parentName:"li"},"DB_URL")," to refer to the host IP."))),(0,r.kt)("p",null,"Finally, you will see the message like:")),(0,r.kt)(l.Z,{value:"npm",label:"npm-init",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Prerequisites")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://nodejs.org/"},"Node.js")," ",(0,r.kt)("inlineCode",{parentName:"li"},"^16.13.0")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://postgresql.org/"},"PostgreSQL")," ",(0,r.kt)("inlineCode",{parentName:"li"},"^14.0"))),(0,r.kt)("p",null,"Higher versions usually work but are not guaranteed."),(0,r.kt)("p",null,"We recommend using a new empty database which is dedicated for Logto, while it","'","s not a hard requirement."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Download and start")),(0,r.kt)("p",null,"In your terminal:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm init @logto\n")),(0,r.kt)("p",null,"Once you complete the init process and start Logto, you will see the message like:"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"App is running at http://localhost:3001\nApp is running at https://your-domain-url\n")),(0,r.kt)("p",null,"Heading to ",(0,r.kt)("a",{target:"_blank",href:"http://localhost:3001/",rel:"noopener"},"http://localhost:3001/")," to continue your Logto journey. Enjoy!"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Configuration (optional)"),(0,r.kt)("p",null,"Logto uses environment variables for configuration, along with ",(0,r.kt)("inlineCode",{parentName:"p"},".env")," file support. See ",(0,r.kt)("a",{parentName:"p",href:"/docs/references/core/configuration"},"Configuration")," for detailed usage and full variable list.")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Check out ",(0,r.kt)("a",{parentName:"em",href:"/docs/references/core/"},"Core Service")," if you want more advanced controls or programmatic access to Logto.")),(0,r.kt)("h3",{id:"quick-troubleshooting"},"Quick troubleshooting"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"My browser cannot load Admin Console (showing error ",(0,r.kt)("code",null,"Crypto.subtle is unavailable..."),")"),(0,r.kt)("p",null,"Admin Console uses ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Web_Crypto_API"},"Web Crypto API"),", which requires ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/Security/Secure_Contexts"},"secure contexts"),", i.e. HTTPS or HTTP with ",(0,r.kt)("inlineCode",{parentName:"p"},"localhost"),"."),(0,r.kt)("p",null,"If you use HTTP with an IP address or custom domain, then the browser cannot load Admin Console.")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"I'm using a custom domain, but my browser cannot load Admin Console (showing error"," ",(0,r.kt)("code",null,'"code": "oidc.invalid_redirect_uri"'),")"),(0,r.kt)("p",null,"If you are using a custom domain rather than ",(0,r.kt)("inlineCode",{parentName:"p"},"localhost"),", you need to set the environment variable ",(0,r.kt)("inlineCode",{parentName:"p"},"ENDPOINT")," to the Logto URL. It is because of the strict requirement of Redirect URI in OIDC. See ",(0,r.kt)("a",{parentName:"p",href:"/docs/references/core/configuration#general"},"Configuration")," for details.")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"I'm using an HTTPS proxy (e.g., Nginx) in front of Logto, but I failed on sign-in (showing error"," ",(0,r.kt)("code",null,"TypeError: Failed to fetch"),")"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"First, make sure you have set the node environment variable ",(0,r.kt)("inlineCode",{parentName:"li"},"TRUST_PROXY_HEADER")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"true"),". See ",(0,r.kt)("a",{parentName:"li",href:"/docs/references/core/configuration#using-a-https-proxy"},"Configuration")," for details."),(0,r.kt)("li",{parentName:"ul"},"Also, you need to set ",(0,r.kt)("inlineCode",{parentName:"li"},"X-Forward-Proto")," header to ",(0,r.kt)("inlineCode",{parentName:"li"},"https")," in your proxy config. See ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/panva/node-oidc-provider/blob/main/docs/README.md#trusting-tls-offloading-proxies"},"Trusting TLS offloading proxies")," for details."))),(0,r.kt)("h2",{id:"create-an-admin-account"},"Create an admin account"),(0,r.kt)("p",null,'Open the link and you will see a welcome page that briefly introduces Admin Console. Click "Create Account" to create an admin account.'),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"For now, you cannot create multiple admin accounts via Admin Console, and only the first account will have admin access. If you want to create multiple admin accounts, use the Management API instead.")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Once you create the first account, the welcome page will be unavailable.")),(0,r.kt)("p",null,"On the create account page, enter your username and password to continue."),(0,r.kt)("h2",{id:"the-get-started-tab"},"The Get Started tab"),(0,r.kt)("p",null,'Once you create the admin account, the browser will redirect you to the "Get Started" tab in Admin Console, which shows a few things that Logto can do at a glance.'),(0,r.kt)("p",null,"Our tutorial will follow the order you are seeing. So let's begin!"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Get started",src:n(29703).Z,width:"1920",height:"1160"})))}k.isMDXComponent=!0},29703:function(e,t,n){t.Z=n.p+"assets/images/get-started-0a25fd0e75ae7746aab3830e1380049f.png"}}]);