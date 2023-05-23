"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[82566],{49613:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var o=n(59496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return n?o.createElement(f,i(i({ref:t},p),{},{components:n})):o.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},47154:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return d}});var o=n(665),r=n(40151),a=(n(59496),n(49613)),i=["components"],l={sidebar_position:9},s="\ud83d\ude80 Deployment",c={unversionedId:"docs/recipes/deployment/README",id:"docs/recipes/deployment/README",title:"\ud83d\ude80 Deployment",description:"Environment Variables",source:"@site/docs/docs/recipes/deployment/README.md",sourceDirName:"docs/recipes/deployment",slug:"/docs/recipes/deployment/",permalink:"/next/docs/recipes/deployment/",draft:!1,editUrl:"https://github.com/logto-io/docs/tree/master/docs/docs/recipes/deployment/README.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"docsSidebar",previous:{title:"Protect your API Resource with RBAC",permalink:"/next/docs/recipes/rbac/protect-resource"},next:{title:"\ud83d\udcbe File storage provider",permalink:"/next/docs/recipes/configure-storage-providers/"}},p={},d=[{value:"Environment Variables",id:"environment-variables",level:2},{value:"Essentials",id:"essentials",level:3},{value:"HTTPS",id:"https",level:3},{value:"Reverse proxy",id:"reverse-proxy",level:3},{value:"How can I upgrade Logto safely?",id:"how-can-i-upgrade-logto-safely",level:2},{value:"Database alteration",id:"database-alteration",level:3},{value:"Containerization",id:"containerization",level:2},{value:"Shared connectors folder",id:"shared-connectors-folder",level:3},{value:"Database alteration",id:"database-alteration-1",level:3}],u={toc:d};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"-deployment"},"\ud83d\ude80 Deployment"),(0,a.kt)("h2",{id:"environment-variables"},"Environment Variables"),(0,a.kt)("p",null,"We use a generated preset of environment variables in our demo (",(0,a.kt)("inlineCode",{parentName:"p"},"docker-compose.yml"),"), which you should replace with your own and maintain consistency across multiple Logto instances."),(0,a.kt)("p",null,"You can set env directly or put a ",(0,a.kt)("inlineCode",{parentName:"p"},".env")," file inside the Logto project root. If you are testing with Docker, check out the image's generated ",(0,a.kt)("inlineCode",{parentName:"p"},".env")," in ",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/logto"),"."),(0,a.kt)("h3",{id:"essentials"},"Essentials"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"DB_URL")," The ",(0,a.kt)("a",{parentName:"li",href:"https://www.postgresql.org/docs/14/libpq-connect.html#id-1.7.3.8.3.6"},"Postgres DSN")," for Logto database."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"PORT")," The port that Logto listens to. Default ",(0,a.kt)("inlineCode",{parentName:"li"},"3001"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ENDPOINT")," You may specify a URL with your custom domain for production (E.g. ",(0,a.kt)("inlineCode",{parentName:"li"},"ENDPOINT=https://logto.domain.com"),"). This will also affect the value of the ",(0,a.kt)("a",{parentName:"li",href:"https://openid.net/specs/openid-connect-core-1_0.html#IssuerIdentifier"},"OIDC issuer identifier"),".")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Enable Admin Console")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ADMIN_PORT")," The port that Logto Admin Console listens to. Default ",(0,a.kt)("inlineCode",{parentName:"li"},"3002"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ADMIN_ENDPOINT")," You may specify a URL with your custom domain for production (E.g. ",(0,a.kt)("inlineCode",{parentName:"li"},"ADMIN_ENDPOINT=https://admin.domain.com"),"). This will also affect the value of Admin Console Redirect URIs.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Disable Admin Console")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ADMIN_DISABLE_LOCALHOST")," Set it to ",(0,a.kt)("inlineCode",{parentName:"li"},"1")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"true")," to close the port for Admin Console. With ",(0,a.kt)("inlineCode",{parentName:"li"},"ADMIN_ENDPOINT")," unset, it'll completely disable the Admin Console.")),(0,a.kt)("p",null,"For more details about environment variables, see ",(0,a.kt)("a",{parentName:"p",href:"/next/docs/references/core/configuration"},"Configuration"),"."),(0,a.kt)("h3",{id:"https"},"HTTPS"),(0,a.kt)("p",null,"You may use Node.js to serve HTTPS directly or set up an HTTPS proxy / balancer in front of Node.js. See ",(0,a.kt)("a",{parentName:"p",href:"/next/docs/references/core/configuration#enabling-https"},"Enabling HTTPS")," for details."),(0,a.kt)("h3",{id:"reverse-proxy"},"Reverse proxy"),(0,a.kt)("p",null,"If you want to use reverse proxy on your server, for example Nginx or Apache, you need to map 3001 and 3002 ports separately in your proxy pass settings.\nAssuming you are using Nginx, your Logto auth endpoint is running on port 3001, and your Logto admin console is running on 3002, put the following config in nginx.conf:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"server {\n  listen 443 ssl;\n  server_name <your_endpoint_url>; // e.g. auth.your-domain.com\n  ...\n\n  location / {\n    proxy_set_header Host $host;\n    proxy_set_header X-Real-IP $remote_addr;\n    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\n    proxy_set_header X-Forwarded-Proto https;\n\n    proxy_pass http://127.0.0.1:3001;\n  }\n\n  ssl_certificate <path-to-your-certificate-for-auth-endpoint>;\n  ssl_certificate_key <path-to-your-certificate-key-for-auth-endpoint>\n  ...\n}\n")),(0,a.kt)("p",null,"Then add the similar config for your admin console:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"server {\n  listen 443 ssl;\n  server_name <your_admin_endpoint_url>; // e.g. admin.your-domain.com\n  ...\n\n  location / {\n    proxy_set_header Host $host;\n    proxy_set_header X-Real-IP $remote_addr;\n    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\n    proxy_set_header X-Forwarded-Proto https;\n\n    proxy_pass http://127.0.0.1:3002;\n  }\n\n  ssl_certificate <path-to-your-certificate-for-admin-endpoint>;\n  ssl_certificate_key <path-to-your-certificate-key-for-admin-endpoint>\n  ...\n}\n")),(0,a.kt)("p",null,"Reload Nginx config to pick up the latest changes:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"nginx -s reload\n")),(0,a.kt)("p",null,"You are all set. Open the browser and visit ",(0,a.kt)("inlineCode",{parentName:"p"},"https://admin.your-domain.com"),", you should be able to see Logto welcome page."),(0,a.kt)("h2",{id:"how-can-i-upgrade-logto-safely"},"How can I upgrade Logto safely?"),(0,a.kt)("p",null,"If we don't mention it in the changelog, you can feel free to upgrade Logto without changing your code or database schema. Our API follows ",(0,a.kt)("a",{parentName:"p",href:"https://semver.org/"},"semver"),"."),(0,a.kt)("h3",{id:"database-alteration"},"Database alteration"),(0,a.kt)("p",null,"If a schema change is inevitable, we will provide an alteration script. Simply run ",(0,a.kt)("inlineCode",{parentName:"p"},"npm run alteration deploy")," in the Logto project root with ease to upgrade your database schema."),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"/next/docs/tutorials/using-cli/database-alteration"},"Database alteration")," for details about the alteration command."),(0,a.kt)("h2",{id:"containerization"},"Containerization"),(0,a.kt)("p",null,"For production, you may use Docker to containerize Logto. You can find the Dockerfile in the root directory of the project. If you want to run multiple instances of Logto, for instance, deploy Logto in a Kubernetes cluster, There are some additional steps you need to take."),(0,a.kt)("h3",{id:"shared-connectors-folder"},"Shared connectors folder"),(0,a.kt)("p",null,"By default, Logto will create a ",(0,a.kt)("inlineCode",{parentName:"p"},"connectors")," folder in the root directory of the ",(0,a.kt)("inlineCode",{parentName:"p"},"core")," folder. We recommend sharing the folder between multiple instances of Logto, you need to mount the ",(0,a.kt)("inlineCode",{parentName:"p"},"packages/core/connectors")," folder to the container and run ",(0,a.kt)("inlineCode",{parentName:"p"},"npm run cli connector add -- --official")," to deploy the connectors."),(0,a.kt)("p",null,"There is a minimum example ",(0,a.kt)("inlineCode",{parentName:"p"},"deployment")," for Kubernetes:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: extensions/v1beta1\nkind: Deployment\nmetadata:\n  name: logto\n  namespace: default\nspec:\n  template:\n    spec:\n      volumes:\n        - name: connectors\n          emptyDir: {}\n      initContainers:\n        - image: ghcr.io/logto-io/logto\n          command:\n            - /bin/sh\n          args:\n            - '-c'\n            - 'npm run cli connector add -- --official'\n          name: init\n          volumeMounts:\n            - name: connectors\n              mountPath: /etc/logto/packages/core/connectors\n      containers:\n        - image: ghcr.io/logto-io/logto\n          name: logto\n          volumeMounts:\n            - name: connectors\n              mountPath: /etc/logto/packages/core/connectors\n")),(0,a.kt)("p",null,"In this example, we create an empty directory as a volume and mount it to containers. Then we run ",(0,a.kt)("inlineCode",{parentName:"p"},"npm run cli connector add -- --official")," in the init container to download the connectors. Finally, every container will share the same connectors folder with our official connectors already inside."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"This is an example yaml, in order to run Logto, you need to set envs properly.")),(0,a.kt)("p",null,'For production, you can replace the "empty dir" volume with a persistent volume, and do the "init" job by your own way, you know what you are doing!'),(0,a.kt)("h3",{id:"database-alteration-1"},"Database alteration"),(0,a.kt)("p",null,"Similar to connectors, the database alteration need to run in a single instance. You can use a job to run the alteration script.",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"CI=true")," environment variable is necessary when alteration is ran noninteractive."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: batch/v1\nkind: Job\nmetadata:\n  name: alteration\nspec:\n  template:\n    spec:\n      containers:\n        - name: alteration\n          image: ghcr.io/logto-io/logto\n          imagePullPolicy: always\n          env:\n            - name: CI\n              value: true\n            - name: DB_URL\n              value: postgresql://user:password@localhost:5432/logto\n            command:\n              - /bin/sh\n            args:\n              - '-c'\n              - 'npm run alteration deploy latest'\n      restartPolicy: Never\n")),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"/next/docs/tutorials/using-cli/database-alteration"},"Database alteration")," for details about the alteration command."))}m.isMDXComponent=!0}}]);