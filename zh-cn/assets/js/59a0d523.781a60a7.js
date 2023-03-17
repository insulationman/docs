(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[3759],{54604:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return p}});var s=r(45933),n=r(86475),i=JSON.parse('{"openapi":"3.0.1","info":{"title":"Logto Core","version":"0.1.0"},"paths":{"/api/interaction":{"put":{"tags":["Interaction"],"parameters":[],"requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","required":["event"],"properties":{"event":{"type":"string","enum":["SignIn","Register","ForgotPassword"]},"identifier":{"oneOf":[{"type":"object","required":["username","password"],"properties":{"username":{"type":"string","minLength":1},"password":{"type":"string","minLength":1}}},{"type":"object","required":["email","password"],"properties":{"email":{"type":"string","minLength":1},"password":{"type":"string","minLength":1}}},{"type":"object","required":["phone","password"],"properties":{"phone":{"type":"string","minLength":1},"password":{"type":"string","minLength":1}}},{"type":"object","required":["email","verificationCode"],"properties":{"email":{"type":"string","format":"regex","pattern":"/^\\\\S+@\\\\S+\\\\.\\\\S+$/"},"verificationCode":{"type":"string","minLength":1}}},{"type":"object","required":["phone","verificationCode"],"properties":{"phone":{"type":"string","format":"regex","pattern":"/^\\\\d+$/"},"verificationCode":{"type":"string","minLength":1}}},{"type":"object","required":["connectorId","connectorData"],"properties":{"connectorId":{"type":"string"},"connectorData":{"type":"object","description":"arbitrary"}}},{"type":"object","required":["connectorId","email"],"properties":{"connectorId":{"type":"string"},"email":{"type":"string"}}},{"type":"object","required":["connectorId","phone"],"properties":{"connectorId":{"type":"string"},"phone":{"type":"string"}}}]},"profile":{"type":"object","properties":{"username":{"type":"string","format":"regex","pattern":"/^[A-Z_a-z]\\\\w*$/"},"email":{"type":"string","format":"regex","pattern":"/^\\\\S+@\\\\S+\\\\.\\\\S+$/"},"phone":{"type":"string","format":"regex","pattern":"/^\\\\d+$/"},"connectorId":{"type":"string"},"password":{"type":"string","format":"regex","pattern":"/^((?=.*\\\\d)(?=.*[A-Za-z])|(?=.*\\\\d)(?=.*[!\\"#$%&\'()*+,./:;<=>?@[\\\\]^_`{|}~-])|(?=.*[A-Za-z])(?=.*[!\\"#$%&\'()*+,./:;<=>?@[\\\\]^_`{|}~-]))[\\\\w!\\"#$%&\'()*+,./:;<=>?@[\\\\]^`{|}~-]{8,}$/"}}}}}}}},"responses":{"200":{"description":"OK"}}},"delete":{"tags":["Interaction"],"parameters":[],"responses":{"200":{"description":"OK"}}}},"/api/interaction/event":{"put":{"tags":["Interaction"],"parameters":[],"requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","required":["event"],"properties":{"event":{"type":"string","enum":["SignIn","Register","ForgotPassword"]}}}}}},"responses":{"200":{"description":"OK"}}}},"/api/interaction/identifiers":{"patch":{"tags":["Interaction"],"parameters":[],"requestBody":{"required":true,"content":{"application/json":{"schema":{"oneOf":[{"type":"object","required":["username","password"],"properties":{"username":{"type":"string","minLength":1},"password":{"type":"string","minLength":1}}},{"type":"object","required":["email","password"],"properties":{"email":{"type":"string","minLength":1},"password":{"type":"string","minLength":1}}},{"type":"object","required":["phone","password"],"properties":{"phone":{"type":"string","minLength":1},"password":{"type":"string","minLength":1}}},{"type":"object","required":["email","verificationCode"],"properties":{"email":{"type":"string","format":"regex","pattern":"/^\\\\S+@\\\\S+\\\\.\\\\S+$/"},"verificationCode":{"type":"string","minLength":1}}},{"type":"object","required":["phone","verificationCode"],"properties":{"phone":{"type":"string","format":"regex","pattern":"/^\\\\d+$/"},"verificationCode":{"type":"string","minLength":1}}},{"type":"object","required":["connectorId","connectorData"],"properties":{"connectorId":{"type":"string"},"connectorData":{"type":"object","description":"arbitrary"}}},{"type":"object","required":["connectorId","email"],"properties":{"connectorId":{"type":"string"},"email":{"type":"string"}}},{"type":"object","required":["connectorId","phone"],"properties":{"connectorId":{"type":"string"},"phone":{"type":"string"}}}]}}}},"responses":{"200":{"description":"OK"}}}},"/api/interaction/profile":{"put":{"tags":["Interaction"],"parameters":[],"requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"username":{"type":"string","format":"regex","pattern":"/^[A-Z_a-z]\\\\w*$/"},"email":{"type":"string","format":"regex","pattern":"/^\\\\S+@\\\\S+\\\\.\\\\S+$/"},"phone":{"type":"string","format":"regex","pattern":"/^\\\\d+$/"},"connectorId":{"type":"string"},"password":{"type":"string","format":"regex","pattern":"/^((?=.*\\\\d)(?=.*[A-Za-z])|(?=.*\\\\d)(?=.*[!\\"#$%&\'()*+,./:;<=>?@[\\\\]^_`{|}~-])|(?=.*[A-Za-z])(?=.*[!\\"#$%&\'()*+,./:;<=>?@[\\\\]^_`{|}~-]))[\\\\w!\\"#$%&\'()*+,./:;<=>?@[\\\\]^`{|}~-]{8,}$/"}}}}}},"responses":{"200":{"description":"OK"}}},"patch":{"tags":["Interaction"],"parameters":[],"requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"username":{"type":"string","format":"regex","pattern":"/^[A-Z_a-z]\\\\w*$/"},"email":{"type":"string","format":"regex","pattern":"/^\\\\S+@\\\\S+\\\\.\\\\S+$/"},"phone":{"type":"string","format":"regex","pattern":"/^\\\\d+$/"},"connectorId":{"type":"string"},"password":{"type":"string","format":"regex","pattern":"/^((?=.*\\\\d)(?=.*[A-Za-z])|(?=.*\\\\d)(?=.*[!\\"#$%&\'()*+,./:;<=>?@[\\\\]^_`{|}~-])|(?=.*[A-Za-z])(?=.*[!\\"#$%&\'()*+,./:;<=>?@[\\\\]^_`{|}~-]))[\\\\w!\\"#$%&\'()*+,./:;<=>?@[\\\\]^`{|}~-]{8,}$/"}}}}}},"responses":{"200":{"description":"OK"}}},"delete":{"tags":["Interaction"],"parameters":[],"responses":{"200":{"description":"OK"}}}},"/api/interaction/submit":{"post":{"tags":["Interaction"],"parameters":[],"responses":{"200":{"description":"OK"}}}},"/api/interaction/verification/social-authorization-uri":{"post":{"tags":["Interaction"],"parameters":[],"requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","required":["connectorId","state","redirectUri"],"properties":{"connectorId":{"type":"string"},"state":{"type":"string"},"redirectUri":{"type":"object","description":"Validator function"}}}}}},"responses":{"200":{"description":"OK"}}}},"/api/interaction/verification/verification-code":{"post":{"tags":["Interaction"],"parameters":[],"requestBody":{"required":true,"content":{"application/json":{"schema":{"oneOf":[{"type":"object","required":["email"],"properties":{"email":{"type":"string","format":"regex","pattern":"/^\\\\S+@\\\\S+\\\\.\\\\S+$/"}}},{"type":"object","required":["phone"],"properties":{"phone":{"type":"string","format":"regex","pattern":"/^\\\\d+$/"}}}]}}}},"responses":{"200":{"description":"OK"}}}},"/api/interaction/consent":{"post":{"tags":["Interaction"],"parameters":[],"responses":{"200":{"description":"OK"}}}},"/api/applications":{"get":{"tags":["Applications"],"parameters":[{"name":"page","in":"query","required":false,"schema":{"type":"integer","minimum":1,"default":1}},{"name":"page_size","in":"query","required":false,"schema":{"type":"integer","minimum":1,"default":20}}],"responses":{"200":{"description":"OK"}}},"post":{"tags":["Applications"],"parameters":[],"requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","required":["name","type"],"properties":{"tenantId":{"type":"string","maxLength":21},"name":{"type":"string","maxLength":256},"secret":{"type":"string","maxLength":64},"description":{"nullable":true,"type":"string"},"type":{"type":"string","enum":["Native","SPA","Traditional","MachineToMachine"]},"oidcClientMetadata":{"type":"object","required":["redirectUris","postLogoutRedirectUris"],"properties":{"redirectUris":{"type":"array","items":{"oneOf":[{"type":"object","description":"Validator function"},{"type":"object","description":"Validator function"}]}},"postLogoutRedirectUris":{"type":"array","items":{"type":"string","format":"url"}},"logoUri":{"type":"string"}}},"customClientMetadata":{"type":"object","properties":{"corsAllowedOrigins":{"type":"array","items":{"type":"string","format":"url"}},"idTokenTtl":{"type":"number"},"refreshTokenTtl":{"type":"number"},"tenantId":{"type":"string"}}}}}}}},"responses":{"200":{"description":"OK"}}}},"/api/applications/:id":{"get":{"tags":["Applications"],"parameters":[{"name":"id","in":"path","required":true,"schema":{"type":"string","minLength":1}}],"responses":{"200":{"description":"OK"}}},"patch":{"tags":["Applications"],"parameters":[{"name":"id","in":"path","required":true,"schema":{"type":"string","minLength":1}}],"requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"tenantId":{"type":"string","maxLength":21},"name":{"type":"string","maxLength":256},"secret":{"type":"string","maxLength":64},"description":{"nullable":true,"type":"string"},"type":{"type":"string","enum":["Native","SPA","Traditional","MachineToMachine"]},"oidcClientMetadata":{"type":"object","properties":{"redirectUris":{"type":"array","items":{"oneOf":[{"type":"object","description":"Validator function"},{"type":"object","description":"Validator function"}]}},"postLogoutRedirectUris":{"type":"array","items":{"type":"string","format":"url"}},"logoUri":{"type":"string"}}},"customClientMetadata":{"type":"object","properties":{"corsAllowedOrigins":{"type":"array","items":{"type":"string","format":"url"}},"idTokenTtl":{"type":"number"},"refreshTokenTtl":{"type":"number"},"tenantId":{"type":"string"}}},"isAdmin":{"type":"boolean"}}}}}},"responses":{"200":{"description":"OK"}}},"delete":{"tags":["Applications"],"parameters":[{"name":"id","in":"path","required":true,"schema":{"type":"string","minLength":1}}],"responses":{"204":{"description":"No Content"}}}},"/api/configs/admin-console":{"get":{"tags":["Configs"],"parameters":[],"responses":{"200":{"description":"OK"}}},"patch":{"tags":["Configs"],"parameters":[],"requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"livePreviewChecked":{"type":"boolean"},"applicationCreated":{"type":"boolean"},"signInExperienceCustomized":{"type":"boolean"},"passwordlessConfigured":{"type":"boolean"},"communityChecked":{"type":"boolean"},"furtherReadingsChecked":{"type":"boolean"},"roleCreated":{"type":"boolean"},"m2mApplicationCreated":{"type":"boolean"}}}}}},"responses":{"200":{"description":"OK"}}}},"/api/connectors":{"get":{"tags":["Connectors"],"parameters":[{"name":"target","in":"query","required":false,"schema":{"type":"string"}}],"responses":{"200":{"description":"OK"}}},"post":{"tags":["Connectors"],"parameters":[],"requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","required":["connectorId"],"properties":{"config":{"type":"object","description":"arbitrary"},"connectorId":{"type":"string","maxLength":128},"metadata":{"type":"object","properties":{"target":{"type":"string"},"name":{"type":"object","description":"Validator function"},"logo":{"type":"string"},"logoDark":{"nullable":true,"type":"string"}}},"syncProfile":{"type":"boolean"},"id":{"type":"string","maxLength":128}}}}}},"responses":{"200":{"description":"OK"}}}},"/api/connector-factories":{"get":{"tags":["Connector Factories"],"parameters":[],"responses":{"200":{"description":"OK"}}}},"/api/connector-factories/:id":{"get":{"tags":["Connector Factories"],"parameters":[{"name":"id","in":"path","required":true,"schema":{"type":"string","minLength":1}}],"responses":{"200":{"description":"OK"}}}},"/api/connectors/:id":{"get":{"tags":["Connectors"],"parameters":[{"name":"id","in":"path","required":true,"schema":{"type":"string","minLength":1}}],"responses":{"200":{"description":"OK"}}},"patch":{"tags":["Connectors"],"parameters":[{"name":"id","in":"path","required":true,"schema":{"type":"string","minLength":1}}],"requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"config":{"type":"object","description":"arbitrary"},"metadata":{"type":"object","properties":{"target":{"type":"string"},"name":{"type":"object","description":"Validator function"},"logo":{"type":"string"},"logoDark":{"nullable":true,"type":"string"}}},"syncProfile":{"type":"boolean"}}}}}},"responses":{"200":{"description":"OK"}}},"delete":{"tags":["Connectors"],"parameters":[{"name":"id","in":"path","required":true,"schema":{"type":"string","minLength":1}}],"responses":{"200":{"description":"OK"}}}},"/api/connectors/:id/test":{"post":{"tags":["Connectors"],"parameters":[{"name":"id","in":"path","required":true,"schema":{"type":"string","minLength":1}}],"requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","required":["config"],"properties":{"phone":{"type":"string","format":"regex","pattern":"/^\\\\d+$/"},"email":{"type":"string","format":"regex","pattern":"/^\\\\S+@\\\\S+\\\\.\\\\S+$/"},"config":{"type":"object","description":"arbitrary"}}}}}},"responses":{"200":{"description":"OK"}}}},"/api/resources":{"get":{"tags":["Resources"],"parameters":[{"name":"includeScopes","in":"query","required":false,"schema":{"type":"string"}},{"name":"page","in":"query","required":false,"schema":{"type":"integer","minimum":1,"default":1}},{"name":"page_size","in":"query","required":false,"schema":{"type":"integer","minimum":1,"default":20}}],"responses":{"200":{"description":"OK"}}},"post":{"tags":["Resources"],"parameters":[],"requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","required":["name","indicator"],"properties":{"tenantId":{"type":"string","maxLength":21},"name":{"type":"string"},"indicator":{"type":"string"},"accessTokenTtl":{"type":"number"}}}}}},"responses":{"200":{"description":"OK"}}}},"/api/resources/:id":{"get":{"tags":["Resources"],"parameters":[{"name":"id","in":"path","required":true,"schema":{"type":"string","minLength":1}}],"responses":{"200":{"description":"OK"}}},"patch":{"tags":["Resources"],"parameters":[{"name":"id","in":"path","required":true,"schema":{"type":"string","minLength":1}}],"requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"tenantId":{"type":"string","maxLength":21},"name":{"type":"string"},"indicator":{"type":"string"},"accessTokenTtl":{"type":"number"}}}}}},"responses":{"200":{"description":"OK"}}},"delete":{"tags":["Resources"],"parameters":[{"name":"id","in":"path","required":true,"schema":{"type":"string","minLength":1}}],"responses":{"204":{"description":"No Content"}}}},"/api/resources/:resourceId/scopes":{"get":{"tags":["Resources"],"parameters":[{"name":"resourceId","in":"path","required":true,"schema":{"type":"string","minLength":1}},{"name":"page","in":"query","required":false,"schema":{"type":"integer","minimum":1,"default":1}},{"name":"page_size","in":"query","required":false,"schema":{"type":"integer","minimum":1,"default":20}}],"responses":{"200":{"description":"OK"}}},"post":{"tags":["Resources"],"parameters":[{"name":"resourceId","in":"path","required":true,"schema":{"type":"string","minLength":1}}],"requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","required":["name","description"],"properties":{"name":{"type":"string","maxLength":256},"description":{"type":"string"}}}}}},"responses":{"200":{"description":"OK"}}}},"/api/resources/:resourceId/scopes/:scopeId":{"patch":{"tags":["Resources"],"parameters":[{"name":"resourceId","in":"path","required":true,"schema":{"type":"string","minLength":1}},{"name":"scopeId","in":"path","required":true,"schema":{"type":"string","minLength":1}}],"requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","required":["name","description"],"properties":{"name":{"type":"string","maxLength":256},"description":{"type":"string"}}}}}},"responses":{"200":{"description":"OK"}}},"delete":{"tags":["Resources"],"parameters":[{"name":"resourceId","in":"path","required":true,"schema":{"type":"string","minLength":1}},{"name":"scopeId","in":"path","required":true,"schema":{"type":"string","minLength":1}}],"responses":{"200":{"description":"OK"}}}},"/api/sign-in-exp":{"get":{"tags":["Sign In Exp"],"parameters":[],"responses":{"200":{"description":"OK"}}},"patch":{"tags":["Sign In Exp"],"parameters":[{"name":"removeUnusedDemoSocialConnector","in":"query","required":false,"schema":{"type":"string"}}],"requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"tenantId":{"type":"string","maxLength":21},"color":{"type":"object","required":["primaryColor","isDarkModeEnabled","darkPrimaryColor"],"properties":{"primaryColor":{"type":"string","format":"regex","pattern":"/^#[\\\\da-f]{3}([\\\\da-f]{3})?$/i"},"isDarkModeEnabled":{"type":"boolean"},"darkPrimaryColor":{"type":"string","format":"regex","pattern":"/^#[\\\\da-f]{3}([\\\\da-f]{3})?$/i"}}},"branding":{"type":"object","properties":{"logoUrl":{"type":"string","format":"url"},"darkLogoUrl":{"type":"string","format":"url"},"favicon":{"type":"string","format":"url"}}},"languageInfo":{"type":"object","required":["autoDetect","fallbackLanguage"],"properties":{"autoDetect":{"type":"boolean"},"fallbackLanguage":{"type":"string","enum":["af-ZA","am-ET","ar-AR","as-IN","az-AZ","be-BY","bg-BG","bn-IN","br-FR","bs-BA","ca-ES","cb-IQ","co-FR","cs-CZ","cx-PH","cy-GB","da-DK","de","de-DE","el-GR","en","en-GB","en-US","eo-EO","es","es-ES","es-419","et-EE","eu-ES","fa-IR","ff-NG","fi-FI","fo-FO","fr","fr-CA","fr-FR","fy-NL","ga-IE","gl-ES","gn-PY","gu-IN","ha-NG","he-IL","hi-IN","hr-HR","ht-HT","hu-HU","hy-AM","id-ID","ik-US","is-IS","it","it-IT","iu-CA","ja","ja-JP","ja-KS","jv-ID","ka-GE","kk-KZ","km-KH","kn-IN","ko","ko-KR","ku-TR","ky-KG","lo-LA","lt-LT","lv-LV","mg-MG","mk-MK","ml-IN","mn-MN","mr-IN","ms-MY","mt-MT","my-MM","nb-NO","ne-NP","nl-BE","nl-NL","nn-NO","or-IN","pa-IN","pl-PL","ps-AF","pt","pt-BR","pt-PT","ro-RO","ru","ru-RU","rw-RW","sc-IT","si-LK","sk-SK","sl-SI","sn-ZW","sq-AL","sr-RS","sv-SE","sw-KE","sy-SY","sz-PL","ta-IN","te-IN","tg-TJ","th-TH","tl-PH","tr","tr-TR","tt-RU","tz-MA","uk-UA","ur-PK","uz-UZ","vi-VN","zh","zh-CN","zh-HK","zh-MO","zh-TW","zz-TR"]}}},"signIn":{"type":"object","required":["methods"],"properties":{"methods":{"type":"array","items":{"type":"object","required":["identifier","password","verificationCode","isPasswordPrimary"],"properties":{"identifier":{"type":"string","enum":["username","email","phone"]},"password":{"type":"boolean"},"verificationCode":{"type":"boolean"},"isPasswordPrimary":{"type":"boolean"}}}}}},"signUp":{"type":"object","required":["identifiers","password","verify"],"properties":{"identifiers":{"type":"array","items":{"type":"string","enum":["username","email","phone"]}},"password":{"type":"boolean"},"verify":{"type":"boolean"}}},"socialSignInConnectorTargets":{"type":"array","items":{"type":"string"}},"signInMode":{"type":"string","enum":["SignIn","Register","SignInAndRegister"]},"customCss":{"nullable":true,"type":"string"},"customContent":{"type":"object","additionalProperties":{"type":"string"}},"termsOfUseUrl":{"oneOf":[{"nullable":true,"type":"string","format":"url"},{"type":"string","format":"empty"}]},"privacyPolicyUrl":{"oneOf":[{"nullable":true,"type":"string","format":"url"},{"type":"string","format":"empty"}]}}}}}},"responses":{"200":{"description":"OK"}}}},"/api/users":{"get":{"tags":["Users"],"parameters":[{"name":"page","in":"query","required":false,"schema":{"type":"integer","minimum":1,"default":1}},{"name":"page_size","in":"query","required":false,"schema":{"type":"integer","minimum":1,"default":20}}],"responses":{"200":{"description":"OK"}}},"post":{"tags":["Users"],"parameters":[],"requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"primaryPhone":{"type":"string","format":"regex","pattern":"/^\\\\d+$/"},"primaryEmail":{"type":"string","format":"regex","pattern":"/^\\\\S+@\\\\S+\\\\.\\\\S+$/"},"username":{"type":"string","format":"regex","pattern":"/^[A-Z_a-z]\\\\w*$/"},"password":{"type":"string","format":"regex","pattern":"/^((?=.*\\\\d)(?=.*[A-Za-z])|(?=.*\\\\d)(?=.*[!\\"#$%&\'()*+,./:;<=>?@[\\\\]^_`{|}~-])|(?=.*[A-Za-z])(?=.*[!\\"#$%&\'()*+,./:;<=>?@[\\\\]^_`{|}~-]))[\\\\w!\\"#$%&\'()*+,./:;<=>?@[\\\\]^`{|}~-]{8,}$/"},"name":{"type":"string"}}}}}},"responses":{"200":{"description":"OK"}}}},"/api/users/:userId":{"get":{"tags":["Users"],"parameters":[{"name":"userId","in":"path","required":true,"schema":{"type":"string"}}],"responses":{"200":{"description":"OK"}}},"patch":{"tags":["Users"],"parameters":[{"name":"userId","in":"path","required":true,"schema":{"type":"string"}}],"requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"username":{"nullable":true,"oneOf":[{"type":"string","format":"regex","pattern":"/^[A-Z_a-z]\\\\w*$/"},{"type":"string","format":"empty"}]},"primaryEmail":{"nullable":true,"oneOf":[{"type":"string","format":"regex","pattern":"/^\\\\S+@\\\\S+\\\\.\\\\S+$/"},{"type":"string","format":"empty"}]},"primaryPhone":{"nullable":true,"oneOf":[{"type":"string","format":"regex","pattern":"/^\\\\d+$/"},{"type":"string","format":"empty"}]},"name":{"nullable":true,"oneOf":[{"type":"string"},{"type":"string","format":"empty"}]},"avatar":{"nullable":true,"oneOf":[{"type":"string","format":"url"},{"type":"string","format":"empty"}]},"customData":{"type":"object","description":"arbitrary"}}}}}},"responses":{"200":{"description":"OK"}}},"delete":{"tags":["Users"],"parameters":[{"name":"userId","in":"path","required":true,"schema":{"type":"string"}}],"responses":{"204":{"description":"No Content"}}}},"/api/users/:userId/custom-data":{"get":{"tags":["Users"],"parameters":[{"name":"userId","in":"path","required":true,"schema":{"type":"string"}}],"responses":{"200":{"description":"OK"}}},"patch":{"tags":["Users"],"parameters":[{"name":"userId","in":"path","required":true,"schema":{"type":"string"}}],"requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","required":["customData"],"properties":{"customData":{"type":"object","description":"arbitrary"}}}}}},"responses":{"200":{"description":"OK"}}}},"/api/users/:userId/password":{"patch":{"tags":["Users"],"parameters":[{"name":"userId","in":"path","required":true,"schema":{"type":"string"}}],"requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","required":["password"],"properties":{"password":{"type":"string","format":"regex","pattern":"/^((?=.*\\\\d)(?=.*[A-Za-z])|(?=.*\\\\d)(?=.*[!\\"#$%&\'()*+,./:;<=>?@[\\\\]^_`{|}~-])|(?=.*[A-Za-z])(?=.*[!\\"#$%&\'()*+,./:;<=>?@[\\\\]^_`{|}~-]))[\\\\w!\\"#$%&\'()*+,./:;<=>?@[\\\\]^`{|}~-]{8,}$/"}}}}}},"responses":{"200":{"description":"OK"}}}},"/api/users/:userId/is-suspended":{"patch":{"tags":["Users"],"parameters":[{"name":"userId","in":"path","required":true,"schema":{"type":"string"}}],"requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","required":["isSuspended"],"properties":{"isSuspended":{"type":"boolean"}}}}}},"responses":{"200":{"description":"OK"}}}},"/api/users/:userId/identities/:target":{"delete":{"tags":["Users"],"parameters":[{"name":"userId","in":"path","required":true,"schema":{"type":"string"}},{"name":"target","in":"path","required":true,"schema":{"type":"string"}}],"responses":{"200":{"description":"OK"}}}},"/api/users/:userId/roles":{"get":{"tags":["Users"],"parameters":[{"name":"userId","in":"path","required":true,"schema":{"type":"string"}},{"name":"page","in":"query","required":false,"schema":{"type":"integer","minimum":1,"default":1}},{"name":"page_size","in":"query","required":false,"schema":{"type":"integer","minimum":1,"default":20}}],"responses":{"200":{"description":"OK"}}},"post":{"tags":["Users"],"parameters":[{"name":"userId","in":"path","required":true,"schema":{"type":"string"}}],"requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","required":["roleIds"],"properties":{"roleIds":{"type":"array","items":{"type":"string","minLength":1}}}}}}},"responses":{"200":{"description":"OK"}}},"put":{"tags":["Users"],"parameters":[{"name":"userId","in":"path","required":true,"schema":{"type":"string"}}],"requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","required":["roleIds"],"properties":{"roleIds":{"type":"array","items":{"type":"string","minLength":1}}}}}}},"responses":{"200":{"description":"OK"}}}},"/api/users/:userId/roles/:roleId":{"delete":{"tags":["Users"],"parameters":[{"name":"userId","in":"path","required":true,"schema":{"type":"string"}},{"name":"roleId","in":"path","required":true,"schema":{"type":"string"}}],"responses":{"200":{"description":"OK"}}}},"/api/logs":{"get":{"tags":["Logs"],"parameters":[{"name":"userId","in":"query","required":false,"schema":{"type":"string"}},{"name":"applicationId","in":"query","required":false,"schema":{"type":"string"}},{"name":"logKey","in":"query","required":false,"schema":{"type":"string"}},{"name":"page","in":"query","required":false,"schema":{"type":"integer","minimum":1,"default":1}},{"name":"page_size","in":"query","required":false,"schema":{"type":"integer","minimum":1,"default":20}}],"responses":{"200":{"description":"OK"}}}},"/api/logs/:id":{"get":{"tags":["Logs"],"parameters":[{"name":"id","in":"path","required":true,"schema":{"type":"string","minLength":1}}],"responses":{"200":{"description":"OK"}}}},"/api/roles":{"get":{"tags":["Roles"],"parameters":[{"name":"page","in":"query","required":false,"schema":{"type":"integer","minimum":1,"default":1}},{"name":"page_size","in":"query","required":false,"schema":{"type":"integer","minimum":1,"default":20}}],"responses":{"200":{"description":"OK"}}},"post":{"tags":["Roles"],"parameters":[],"requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","required":["name","description"],"properties":{"tenantId":{"type":"string","maxLength":21},"name":{"type":"string","maxLength":128},"description":{"type":"string","maxLength":128},"scopeIds":{"type":"array","items":{"type":"string","minLength":1}}}}}}},"responses":{"200":{"description":"OK"}}}},"/api/roles/:id":{"get":{"tags":["Roles"],"parameters":[{"name":"id","in":"path","required":true,"schema":{"type":"string","minLength":1}}],"responses":{"200":{"description":"OK"}}},"patch":{"tags":["Roles"],"parameters":[{"name":"id","in":"path","required":true,"schema":{"type":"string","minLength":1}}],"requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"name":{"type":"string","maxLength":128},"description":{"type":"string","maxLength":128}}}}}},"responses":{"200":{"description":"OK"}}},"delete":{"tags":["Roles"],"parameters":[{"name":"id","in":"path","required":true,"schema":{"type":"string","minLength":1}}],"responses":{"200":{"description":"OK"}}}},"/api/roles/:id/users":{"get":{"tags":["Roles"],"parameters":[{"name":"id","in":"path","required":true,"schema":{"type":"string","minLength":1}},{"name":"page","in":"query","required":false,"schema":{"type":"integer","minimum":1,"default":1}},{"name":"page_size","in":"query","required":false,"schema":{"type":"integer","minimum":1,"default":20}}],"responses":{"200":{"description":"OK"}}},"post":{"tags":["Roles"],"parameters":[{"name":"id","in":"path","required":true,"schema":{"type":"string","minLength":1}}],"requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","required":["userIds"],"properties":{"userIds":{"type":"array","items":{"type":"string","minLength":1}}}}}}},"responses":{"200":{"description":"OK"}}}},"/api/roles/:id/users/:userId":{"delete":{"tags":["Roles"],"parameters":[{"name":"id","in":"path","required":true,"schema":{"type":"string","minLength":1}},{"name":"userId","in":"path","required":true,"schema":{"type":"string","minLength":1}}],"responses":{"200":{"description":"OK"}}}},"/api/roles/:id/scopes":{"get":{"tags":["Roles"],"parameters":[{"name":"id","in":"path","required":true,"schema":{"type":"string","minLength":1}},{"name":"page","in":"query","required":false,"schema":{"type":"integer","minimum":1,"default":1}},{"name":"page_size","in":"query","required":false,"schema":{"type":"integer","minimum":1,"default":20}}],"responses":{"200":{"description":"OK"}}},"post":{"tags":["Roles"],"parameters":[{"name":"id","in":"path","required":true,"schema":{"type":"string","minLength":1}}],"requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","required":["scopeIds"],"properties":{"scopeIds":{"type":"array","items":{"type":"string","minLength":1}}}}}}},"responses":{"200":{"description":"OK"}}}},"/api/roles/:id/scopes/:scopeId":{"delete":{"tags":["Roles"],"parameters":[{"name":"id","in":"path","required":true,"schema":{"type":"string","minLength":1}},{"name":"scopeId","in":"path","required":true,"schema":{"type":"string","minLength":1}}],"responses":{"200":{"description":"OK"}}}},"/api/dashboard/users/total":{"get":{"tags":["Dashboard"],"parameters":[],"responses":{"200":{"description":"OK"}}}},"/api/dashboard/users/new":{"get":{"tags":["Dashboard"],"parameters":[],"responses":{"200":{"description":"OK"}}}},"/api/dashboard/users/active":{"get":{"tags":["Dashboard"],"parameters":[{"name":"date","in":"query","required":false,"schema":{"type":"string","format":"regex","pattern":"/^\\\\d{4}(-\\\\d{2}){2}/"}}],"responses":{"200":{"description":"OK"}}}},"/api/custom-phrases":{"get":{"tags":["Custom Phrases"],"parameters":[],"responses":{"200":{"description":"OK"}}}},"/api/custom-phrases/:languageTag":{"get":{"tags":["Custom Phrases"],"parameters":[{"name":"languageTag","in":"path","required":true,"schema":{"type":"string","enum":["af-ZA","am-ET","ar-AR","as-IN","az-AZ","be-BY","bg-BG","bn-IN","br-FR","bs-BA","ca-ES","cb-IQ","co-FR","cs-CZ","cx-PH","cy-GB","da-DK","de","de-DE","el-GR","en","en-GB","en-US","eo-EO","es","es-ES","es-419","et-EE","eu-ES","fa-IR","ff-NG","fi-FI","fo-FO","fr","fr-CA","fr-FR","fy-NL","ga-IE","gl-ES","gn-PY","gu-IN","ha-NG","he-IL","hi-IN","hr-HR","ht-HT","hu-HU","hy-AM","id-ID","ik-US","is-IS","it","it-IT","iu-CA","ja","ja-JP","ja-KS","jv-ID","ka-GE","kk-KZ","km-KH","kn-IN","ko","ko-KR","ku-TR","ky-KG","lo-LA","lt-LT","lv-LV","mg-MG","mk-MK","ml-IN","mn-MN","mr-IN","ms-MY","mt-MT","my-MM","nb-NO","ne-NP","nl-BE","nl-NL","nn-NO","or-IN","pa-IN","pl-PL","ps-AF","pt","pt-BR","pt-PT","ro-RO","ru","ru-RU","rw-RW","sc-IT","si-LK","sk-SK","sl-SI","sn-ZW","sq-AL","sr-RS","sv-SE","sw-KE","sy-SY","sz-PL","ta-IN","te-IN","tg-TJ","th-TH","tl-PH","tr","tr-TR","tt-RU","tz-MA","uk-UA","ur-PK","uz-UZ","vi-VN","zh","zh-CN","zh-HK","zh-MO","zh-TW","zz-TR"]}}],"responses":{"200":{"description":"OK"}}},"put":{"tags":["Custom Phrases"],"parameters":[{"name":"languageTag","in":"path","required":true,"schema":{"type":"string","enum":["af-ZA","am-ET","ar-AR","as-IN","az-AZ","be-BY","bg-BG","bn-IN","br-FR","bs-BA","ca-ES","cb-IQ","co-FR","cs-CZ","cx-PH","cy-GB","da-DK","de","de-DE","el-GR","en","en-GB","en-US","eo-EO","es","es-ES","es-419","et-EE","eu-ES","fa-IR","ff-NG","fi-FI","fo-FO","fr","fr-CA","fr-FR","fy-NL","ga-IE","gl-ES","gn-PY","gu-IN","ha-NG","he-IL","hi-IN","hr-HR","ht-HT","hu-HU","hy-AM","id-ID","ik-US","is-IS","it","it-IT","iu-CA","ja","ja-JP","ja-KS","jv-ID","ka-GE","kk-KZ","km-KH","kn-IN","ko","ko-KR","ku-TR","ky-KG","lo-LA","lt-LT","lv-LV","mg-MG","mk-MK","ml-IN","mn-MN","mr-IN","ms-MY","mt-MT","my-MM","nb-NO","ne-NP","nl-BE","nl-NL","nn-NO","or-IN","pa-IN","pl-PL","ps-AF","pt","pt-BR","pt-PT","ro-RO","ru","ru-RU","rw-RW","sc-IT","si-LK","sk-SK","sl-SI","sn-ZW","sq-AL","sr-RS","sv-SE","sw-KE","sy-SY","sz-PL","ta-IN","te-IN","tg-TJ","th-TH","tl-PH","tr","tr-TR","tt-RU","tz-MA","uk-UA","ur-PK","uz-UZ","vi-VN","zh","zh-CN","zh-HK","zh-MO","zh-TW","zz-TR"]}}],"requestBody":{"required":true,"content":{"application/json":{"schema":{"$ref":"#/components/schemas/TranslationObject"}}}},"responses":{"200":{"description":"OK"}}},"delete":{"tags":["Custom Phrases"],"parameters":[{"name":"languageTag","in":"path","required":true,"schema":{"type":"string","enum":["af-ZA","am-ET","ar-AR","as-IN","az-AZ","be-BY","bg-BG","bn-IN","br-FR","bs-BA","ca-ES","cb-IQ","co-FR","cs-CZ","cx-PH","cy-GB","da-DK","de","de-DE","el-GR","en","en-GB","en-US","eo-EO","es","es-ES","es-419","et-EE","eu-ES","fa-IR","ff-NG","fi-FI","fo-FO","fr","fr-CA","fr-FR","fy-NL","ga-IE","gl-ES","gn-PY","gu-IN","ha-NG","he-IL","hi-IN","hr-HR","ht-HT","hu-HU","hy-AM","id-ID","ik-US","is-IS","it","it-IT","iu-CA","ja","ja-JP","ja-KS","jv-ID","ka-GE","kk-KZ","km-KH","kn-IN","ko","ko-KR","ku-TR","ky-KG","lo-LA","lt-LT","lv-LV","mg-MG","mk-MK","ml-IN","mn-MN","mr-IN","ms-MY","mt-MT","my-MM","nb-NO","ne-NP","nl-BE","nl-NL","nn-NO","or-IN","pa-IN","pl-PL","ps-AF","pt","pt-BR","pt-PT","ro-RO","ru","ru-RU","rw-RW","sc-IT","si-LK","sk-SK","sl-SI","sn-ZW","sq-AL","sr-RS","sv-SE","sw-KE","sy-SY","sz-PL","ta-IN","te-IN","tg-TJ","th-TH","tl-PH","tr","tr-TR","tt-RU","tz-MA","uk-UA","ur-PK","uz-UZ","vi-VN","zh","zh-CN","zh-HK","zh-MO","zh-TW","zz-TR"]}}],"responses":{"200":{"description":"OK"}}}},"/api/hooks":{"get":{"tags":["Hooks"],"parameters":[],"responses":{"200":{"description":"OK"}}},"post":{"tags":["Hooks"],"parameters":[],"requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","required":["event","config"],"properties":{"tenantId":{"type":"string","maxLength":21},"event":{"type":"string","enum":["PostRegister","PostSignIn","PostResetPassword"]},"config":{"type":"object","required":["url","retries"],"properties":{"url":{"type":"string"},"headers":{"type":"object","additionalProperties":{"type":"string"}},"retries":{"type":"number"}}},"createdAt":{"type":"number"}}}}}},"responses":{"200":{"description":"OK"}}}},"/api/hooks/:id":{"get":{"tags":["Hooks"],"parameters":[{"name":"id","in":"path","required":true,"schema":{"type":"string","minLength":1}}],"responses":{"200":{"description":"OK"}}},"patch":{"tags":["Hooks"],"parameters":[{"name":"id","in":"path","required":true,"schema":{"type":"string","minLength":1}}],"requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"tenantId":{"type":"string","maxLength":21},"event":{"type":"string","enum":["PostRegister","PostSignIn","PostResetPassword"]},"config":{"type":"object","required":["url","retries"],"properties":{"url":{"type":"string"},"headers":{"type":"object","additionalProperties":{"type":"string"}},"retries":{"type":"number"}}},"createdAt":{"type":"number"}}}}}},"responses":{"200":{"description":"OK"}}},"delete":{"tags":["Hooks"],"parameters":[{"name":"id","in":"path","required":true,"schema":{"type":"string","minLength":1}}],"responses":{"200":{"description":"OK"}}}},"/api/verification-codes":{"post":{"tags":["Verification Codes"],"parameters":[],"requestBody":{"required":true,"content":{"application/json":{"schema":{"oneOf":[{"type":"object","required":["email"],"properties":{"email":{"type":"string","format":"regex","pattern":"/^\\\\S+@\\\\S+\\\\.\\\\S+$/"}}},{"type":"object","required":["phone"],"properties":{"phone":{"type":"string","format":"regex","pattern":"/^\\\\d+$/"}}}]}}}},"responses":{"200":{"description":"OK"}}}},"/api/verification-codes/verify":{"post":{"tags":["Verification Codes"],"parameters":[],"requestBody":{"required":true,"content":{"application/json":{"schema":{"oneOf":[{"type":"object","required":["email","verificationCode"],"properties":{"email":{"type":"string","format":"regex","pattern":"/^\\\\S+@\\\\S+\\\\.\\\\S+$/"},"verificationCode":{"type":"string","minLength":1}}},{"type":"object","required":["phone","verificationCode"],"properties":{"phone":{"type":"string","format":"regex","pattern":"/^\\\\d+$/"},"verificationCode":{"type":"string","minLength":1}}}]}}}},"responses":{"200":{"description":"OK"}}}},"/api/user-assets/service-status":{"get":{"tags":["User Assets"],"parameters":[],"responses":{"200":{"description":"OK"}}}},"/api/user-assets":{"post":{"tags":["User Assets"],"parameters":[],"responses":{"200":{"description":"OK"}}}},"/api/.well-known/sign-in-exp":{"get":{"tags":[".well-known"],"parameters":[],"responses":{"200":{"description":"OK"},"304":{"description":"No Modified"}}}},"/api/.well-known/phrases":{"get":{"tags":[".well-known"],"parameters":[{"name":"lng","in":"query","required":false,"schema":{"type":"string"}}],"responses":{"200":{"description":"OK"}}}},"/api/status":{"get":{"tags":["Status"],"parameters":[],"responses":{"204":{"description":"No Content"}}}},"/api/authn/hasura":{"get":{"tags":["Authn"],"parameters":[{"name":"resource","in":"query","required":true,"schema":{"type":"string","minLength":1}},{"name":"unauthorizedRole","in":"query","required":false,"schema":{"type":"string"}}],"responses":{"200":{"description":"OK"}}}},"/api/authn/saml/:connectorId":{"post":{"tags":["Authn"],"parameters":[{"name":"connectorId","in":"path","required":true,"schema":{"type":"string","minLength":1}}],"requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","description":"arbitrary"}}}},"responses":{"200":{"description":"OK"}}}},"/api/swagger.json":{"get":{"tags":["Swagger.json"],"parameters":[],"responses":{"200":{"description":"OK"}}}}},"components":{"schemas":{"TranslationObject":{"type":"object","properties":{"[translationKey]":{"$ref":"#/components/schemas/Translation"}},"example":{"input":{"username":"Username","password":"Password"},"action":{"sign_in":"Sign In","continue":"Continue"}}},"Translation":{"oneOf":[{"type":"string"},{"$ref":"#/components/schemas/Translation"}]}}}}'),a=r(4637),p=function(){return(0,a.jsx)(s.Z,{title:"API",children:(0,a.jsx)(n.Z,{spec:i})})}},63965:function(){},15526:function(){},49592:function(){},98597:function(){},29559:function(){},6615:function(){}}]);