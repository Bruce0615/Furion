(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{136:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return m}));var a=t(0),r=t.n(a);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function b(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=r.a.createContext({}),s=function(e){var n=r.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},d=function(e){var n=s(e.components);return r.a.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},p=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,l=b(e,["components","mdxType","originalType","parentName"]),d=s(t),p=a,m=d["".concat(o,".").concat(p)]||d[p]||u[p]||i;return t?r.a.createElement(m,c(c({ref:n},l),{},{components:t})):r.a.createElement(m,c({ref:n},l))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=p;var c={};for(var b in n)hasOwnProperty.call(n,b)&&(c[b]=n[b]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=t[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},137:function(e,n,t){"use strict";var a=t(0),r=t(19);n.a=function(){const e=Object(a.useContext)(r.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},138:function(e,n,t){"use strict";t.d(n,"b",(function(){return i})),t.d(n,"a",(function(){return o}));var a=t(137),r=t(139);function i(){const{siteConfig:{baseUrl:e="/",url:n}={}}=Object(a.a)();return{withBaseUrl:(t,a)=>function(e,n,t,{forcePrependBaseUrl:a=!1,absolute:i=!1}={}){if(!t)return t;if(t.startsWith("#"))return t;if(Object(r.b)(t))return t;if(a)return n+t;const o=t.startsWith(n)?t:n+t.replace(/^\//,"");return i?e+o:o}(n,e,t,a)}}function o(e,n={}){const{withBaseUrl:t}=i();return t(e,n)}},139:function(e,n,t){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!a(e)}t.d(n,"b",(function(){return a})),t.d(n,"a",(function(){return r}))},69:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return b})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return d}));var a=t(2),r=t(6),i=(t(0),t(136)),o=t(138),c={id:"saas",title:"9. SaaS \u591a\u79df\u6237",sidebar_label:"9. SaaS \u591a\u79df\u6237"},b={unversionedId:"saas",id:"saas",isDocsHomePage:!1,title:"9. SaaS \u591a\u79df\u6237",description:"9.1 \u4ec0\u4e48\u662f SaaS",source:"@site/docs\\saas.mdx",slug:"/saas",permalink:"/docs/saas",editUrl:"https://gitee.com/monksoul/Fur/tree/main/handbook/docs/saas.mdx",version:"current",sidebar_label:"9. SaaS \u591a\u79df\u6237",sidebar:"docs",previous:{title:"8.27 \u5206\u8868\u5206\u5e93",permalink:"/docs/split-db"},next:{title:"10. \u4f9d\u8d56\u6ce8\u5165/\u63a7\u5236\u53cd\u8f6c",permalink:"/docs/dependency-injection"}},l=[{value:"9.1 \u4ec0\u4e48\u662f <code>SaaS</code>",id:"91-\u4ec0\u4e48\u662f-saas",children:[]},{value:"9.2 \u4ec0\u4e48\u662f\u591a\u79df\u6237",id:"92-\u4ec0\u4e48\u662f\u591a\u79df\u6237",children:[]},{value:"9.3 \u5b9e\u73b0\u591a\u79df\u6237\u65b9\u6848",id:"93-\u5b9e\u73b0\u591a\u79df\u6237\u65b9\u6848",children:[{value:"9.3.1 \u72ec\u7acb\u6570\u636e\u5e93",id:"931-\u72ec\u7acb\u6570\u636e\u5e93",children:[]},{value:"9.3.2 \u5171\u4eab\u6570\u636e\u5e93\uff0c\u72ec\u7acb <code>Schema</code>",id:"932-\u5171\u4eab\u6570\u636e\u5e93\uff0c\u72ec\u7acb-schema",children:[]},{value:"9.3.3 \u5171\u4eab\u6570\u636e\u5e93\uff0c\u5171\u4eab <code>Schema</code>",id:"933-\u5171\u4eab\u6570\u636e\u5e93\uff0c\u5171\u4eab-schema",children:[]}]},{value:"9.4 \u591a\u79df\u6237\u4f7f\u7528\u65b9\u6848",id:"94-\u591a\u79df\u6237\u4f7f\u7528\u65b9\u6848",children:[]},{value:"9.5 \u57fa\u4e8e <code>TenantId</code> \u7684\u65b9\u5f0f",id:"95-\u57fa\u4e8e-tenantid-\u7684\u65b9\u5f0f",children:[{value:"9.5.1 \u521b\u5efa\u79df\u6237\u6570\u636e\u5e93\u4e0a\u4e0b\u6587",id:"951-\u521b\u5efa\u79df\u6237\u6570\u636e\u5e93\u4e0a\u4e0b\u6587",children:[]},{value:"9.5.2 \u6ce8\u518c\u591a\u79df\u6237\u6570\u636e\u5e93\u4e0a\u4e0b\u6587",id:"952-\u6ce8\u518c\u591a\u79df\u6237\u6570\u636e\u5e93\u4e0a\u4e0b\u6587",children:[]},{value:"9.5.3 \u6dfb\u52a0 <code>Tenant</code> \u79cd\u5b50\u6570\u636e",id:"953-\u6dfb\u52a0-tenant-\u79cd\u5b50\u6570\u636e",children:[]},{value:"9.5.4 \u6839\u636e\u6a21\u578b\u521b\u5efa <code>Tenant</code> \u8868",id:"954-\u6839\u636e\u6a21\u578b\u521b\u5efa-tenant-\u8868",children:[]},{value:"9.5.6 \u5b9e\u73b0 <code>IMultiTenantOnTable</code> \u63a5\u53e3",id:"956-\u5b9e\u73b0-imultitenantontable-\u63a5\u53e3",children:[]},{value:"9.5.7 \u5b9e\u73b0 <code>IModelBuilderFilter</code> \u63a5\u53e3",id:"957-\u5b9e\u73b0-imodelbuilderfilter-\u63a5\u53e3",children:[]},{value:"9.5.8 \u91cd\u5199 <code>SavingChangesEvent</code> \u4e8b\u4ef6\u65b9\u6cd5",id:"958-\u91cd\u5199-savingchangesevent-\u4e8b\u4ef6\u65b9\u6cd5",children:[]}]},{value:"9.6 \u57fa\u4e8e <code>Database</code> \u7684\u65b9\u5f0f",id:"96-\u57fa\u4e8e-database-\u7684\u65b9\u5f0f",children:[]}],s={rightToc:l};function d(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"91-\u4ec0\u4e48\u662f-saas"},"9.1 \u4ec0\u4e48\u662f ",Object(i.b)("inlineCode",{parentName:"h2"},"SaaS")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"SaaS \u662f Software-as-a-Service\uff08\u8f6f\u4ef6\u5373\u670d\u52a1\uff09\u7684\u7b80\u79f0\uff0c\u968f\u7740\u4e92\u8054\u7f51\u6280\u672f\u7684\u53d1\u5c55\u548c\u5e94\u7528\u8f6f\u4ef6\u7684\u6210\u719f\uff0c \u5728 21 \u4e16\u7eaa\u5f00\u59cb\u5174\u8d77\u7684\u4e00\u79cd\u5b8c\u5168\u521b\u65b0\u7684\u8f6f\u4ef6\u5e94\u7528\u6a21\u5f0f\u3002\u5b83\u4e0e\u201con-demand software\u201d\uff0cthe application service provider(ASP\uff0c\u5e94\u7528\u670d\u52a1\u63d0\u4f9b\u5546)\uff0chosted software(\u6258\u7ba1\u8f6f\u4ef6)\u6240\u5177\u6709\u76f8\u4f3c\u7684\u542b\u4e49\u3002"),Object(i.b)("p",{parentName:"blockquote"},"\u5b83\u662f\u4e00\u79cd\u901a\u8fc7 Internet \u63d0\u4f9b\u8f6f\u4ef6\u7684\u6a21\u5f0f\uff0c\u5382\u5546\u5c06\u5e94\u7528\u8f6f\u4ef6\u7edf\u4e00\u90e8\u7f72\u5728\u81ea\u5df1\u7684\u670d\u52a1\u5668\u4e0a\uff0c\u5ba2\u6237\u53ef\u4ee5\u6839\u636e\u81ea\u5df1\u5b9e\u9645\u9700\u6c42\uff0c\u901a\u8fc7\u4e92\u8054\u7f51\u5411\u5382\u5546\u5b9a\u8d2d\u6240\u9700\u7684\u5e94\u7528\u8f6f\u4ef6\u670d\u52a1\uff0c\u6309\u5b9a\u8d2d\u7684\u670d\u52a1\u591a\u5c11\u548c\u65f6\u95f4\u957f\u77ed\u5411\u5382\u5546\u652f\u4ed8\u8d39\u7528\uff0c\u5e76\u901a\u8fc7\u4e92\u8054\u7f51\u83b7\u5f97\u5382\u5546\u63d0\u4f9b\u7684\u670d\u52a1\u3002\u7528\u6237\u4e0d\u7528\u518d\u8d2d\u4e70\u8f6f\u4ef6\uff0c\u800c\u6539\u7528\u5411\u63d0\u4f9b\u5546\u79df\u7528\u57fa\u4e8e Web \u7684\u8f6f\u4ef6\uff0c\u6765\u7ba1\u7406\u4f01\u4e1a\u7ecf\u8425\u6d3b\u52a8\uff0c\u4e14\u65e0\u9700\u5bf9\u8f6f\u4ef6\u8fdb\u884c\u7ef4\u62a4\uff0c\u670d\u52a1\u63d0\u4f9b\u5546\u4f1a\u5168\u6743\u7ba1\u7406\u548c\u7ef4\u62a4\u8f6f\u4ef6\uff0c\u8f6f\u4ef6\u5382\u5546\u5728\u5411\u5ba2\u6237\u63d0\u4f9b\u4e92\u8054\u7f51\u5e94\u7528\u7684\u540c\u65f6\uff0c\u4e5f\u63d0\u4f9b\u8f6f\u4ef6\u7684\u79bb\u7ebf\u64cd\u4f5c\u548c\u672c\u5730\u6570\u636e\u5b58\u50a8\uff0c\u8ba9\u7528\u6237\u968f\u65f6\u968f\u5730\u90fd\u53ef\u4ee5\u4f7f\u7528\u5176\u5b9a\u8d2d\u7684\u8f6f\u4ef6\u548c\u670d\u52a1\u3002"),Object(i.b)("p",{parentName:"blockquote"},"\u5bf9\u4e8e\u8bb8\u591a\u5c0f\u578b\u4f01\u4e1a\u6765\u8bf4\uff0cSaaS \u662f\u91c7\u7528\u5148\u8fdb\u6280\u672f\u7684\u6700\u597d\u9014\u5f84\uff0c\u5b83\u6d88\u9664\u4e86\u4f01\u4e1a\u8d2d\u4e70\u3001\u6784\u5efa\u548c\u7ef4\u62a4\u57fa\u7840\u8bbe\u65bd\u548c\u5e94\u7528\u7a0b\u5e8f\u7684\u9700\u8981\u3002")),Object(i.b)("h2",{id:"92-\u4ec0\u4e48\u662f\u591a\u79df\u6237"},"9.2 \u4ec0\u4e48\u662f\u591a\u79df\u6237"),Object(i.b)("p",null,"\u591a\u79df\u6237\u6280\u672f\u6216\u79f0\u591a\u91cd\u79df\u8d41\u6280\u672f\uff0c\u7b80\u79f0 ",Object(i.b)("inlineCode",{parentName:"p"},"SaaS"),"\uff0c\u662f\u4e00\u79cd\u8f6f\u4ef6\u67b6\u6784\u6280\u672f\uff0c\u662f\u5b9e\u73b0\u5982\u4f55\u5728\u591a\u7528\u6237\u73af\u5883\u4e0b\uff08\u6b64\u5904\u7684\u591a\u7528\u6237\u4e00\u822c\u662f\u9762\u5411\u4f01\u4e1a\u7528\u6237\uff09\u5171\u7528\u76f8\u540c\u7684\u7cfb\u7edf\u6216\u7a0b\u5e8f\u7ec4\u4ef6\uff0c\u5e76\u4e14\u53ef\u786e\u4fdd\u5404\u7528\u6237\u95f4\u6570\u636e\u7684\u9694\u79bb\u6027\u3002"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"\u7b80\u5355\u8bb2\uff1a\u5728\u4e00\u53f0\u670d\u52a1\u5668\u4e0a\u8fd0\u884c\u5355\u4e2a\u5e94\u7528\u5b9e\u4f8b\uff0c\u5b83\u4e3a\u591a\u4e2a\u79df\u6237\uff08\u5ba2\u6237\uff09\u63d0\u4f9b\u670d\u52a1\u3002"),"\u4ece\u5b9a\u4e49\u4e2d\u6211\u4eec\u53ef\u4ee5\u7406\u89e3\uff1a\u591a\u79df\u6237\u662f\u4e00\u79cd\u67b6\u6784\uff0c\u76ee\u7684\u662f\u4e3a\u4e86\u8ba9\u591a\u7528\u6237\u73af\u5883\u4e0b\u4f7f\u7528\u540c\u4e00\u5957\u7a0b\u5e8f\uff0c\u4e14\u4fdd\u8bc1\u7528\u6237\u95f4\u6570\u636e\u9694\u79bb\u3002\u90a3\u4e48\u91cd\u70b9\u5c31\u5f88\u6d45\u663e\u6613\u61c2\u4e86\uff0c\u591a\u79df\u6237\u7684\u91cd\u70b9\u5c31\u662f\u540c\u4e00\u5957\u7a0b\u5e8f\u4e0b\u5b9e\u73b0\u591a\u7528\u6237\u6570\u636e\u7684\u9694\u79bb\u3002"),Object(i.b)("h2",{id:"93-\u5b9e\u73b0\u591a\u79df\u6237\u65b9\u6848"},"9.3 \u5b9e\u73b0\u591a\u79df\u6237\u65b9\u6848"),Object(i.b)("h3",{id:"931-\u72ec\u7acb\u6570\u636e\u5e93"},"9.3.1 \u72ec\u7acb\u6570\u636e\u5e93"),Object(i.b)("p",null,"\u8fd9\u662f\u7b2c\u4e00\u79cd\u65b9\u6848\uff0c\u5373\u4e00\u4e2a\u79df\u6237\u4e00\u4e2a\u6570\u636e\u5e93\uff0c\u8fd9\u79cd\u65b9\u6848\u7684\u7528\u6237\u6570\u636e\u9694\u79bb\u7ea7\u522b\u6700\u9ad8\uff0c\u5b89\u5168\u6027\u6700\u597d\uff0c\u4f46\u6210\u672c\u8f83\u9ad8\u3002"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"\u4f18\u70b9\uff1a"),"\n\u4e3a\u4e0d\u540c\u7684\u79df\u6237\u63d0\u4f9b\u72ec\u7acb\u7684\u6570\u636e\u5e93\uff0c\u6709\u52a9\u4e8e\u7b80\u5316\u6570\u636e\u6a21\u578b\u7684\u6269\u5c55\u8bbe\u8ba1\uff0c\u6ee1\u8db3\u4e0d\u540c\u79df\u6237\u7684\u72ec\u7279\u9700\u6c42\uff1b\u5982\u679c\u51fa\u73b0\u6545\u969c\uff0c\u6062\u590d\u6570\u636e\u6bd4\u8f83\u7b80\u5355\u3002")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"\u7f3a\u70b9\uff1a"),"\n\u589e\u591a\u4e86\u6570\u636e\u5e93\u7684\u5b89\u88c5\u6570\u91cf\uff0c\u968f\u4e4b\u5e26\u6765\u7ef4\u62a4\u6210\u672c\u548c\u8d2d\u7f6e\u6210\u672c\u7684\u589e\u52a0\u3002 \u8fd9\u79cd\u65b9\u6848\u4e0e\u4f20\u7edf\u7684\u4e00\u4e2a\u5ba2\u6237\u3001\u4e00\u5957\u6570\u636e\u3001\u4e00\u5957\u90e8\u7f72\u7c7b\u4f3c\uff0c\u5dee\u522b\u53ea\u5728\u4e8e\u8f6f\u4ef6\u7edf\u4e00\u90e8\u7f72\u5728\u8fd0\u8425\u5546\u90a3\u91cc\u3002\u5982\u679c\u9762\u5bf9\u7684\u662f\u94f6\u884c\u3001\u533b\u9662\u7b49\u9700\u8981\u975e\u5e38\u9ad8\u6570\u636e\u9694\u79bb\u7ea7\u522b\u7684\u79df\u6237\uff0c\u53ef\u4ee5\u9009\u62e9\u8fd9\u79cd\u6a21\u5f0f\uff0c\u63d0\u9ad8\u79df\u7528\u7684\u5b9a\u4ef7\u3002\u5982\u679c\u5b9a\u4ef7\u8f83\u4f4e\uff0c\u4ea7\u54c1\u8d70\u4f4e\u4ef7\u8def\u7ebf\uff0c\u8fd9\u79cd\u65b9\u6848\u4e00\u822c\u5bf9\u8fd0\u8425\u5546\u6765\u8bf4\u662f\u65e0\u6cd5\u627f\u53d7\u7684\u3002"))),Object(i.b)("h3",{id:"932-\u5171\u4eab\u6570\u636e\u5e93\uff0c\u72ec\u7acb-schema"},"9.3.2 \u5171\u4eab\u6570\u636e\u5e93\uff0c\u72ec\u7acb ",Object(i.b)("inlineCode",{parentName:"h3"},"Schema")),Object(i.b)("p",null,"\u8fd9\u662f\u7b2c\u4e8c\u79cd\u65b9\u6848\uff0c\u5373\u591a\u4e2a\u6216\u6240\u6709\u79df\u6237\u5171\u4eab ",Object(i.b)("inlineCode",{parentName:"p"},"Database"),"\uff0c\u4f46\u662f\u6bcf\u4e2a\u79df\u6237\u4e00\u4e2a ",Object(i.b)("inlineCode",{parentName:"p"},"Schema"),"\uff08\u4e5f\u53ef\u53eb\u505a\u4e00\u4e2a user\uff09\u3002\u5e95\u5c42\u5e93\u6bd4\u5982\u662f\uff1a",Object(i.b)("inlineCode",{parentName:"p"},"SqlServer"),"\u3001",Object(i.b)("inlineCode",{parentName:"p"},"Oracle")," \u7b49\uff0c\u4e00\u4e2a\u6570\u636e\u5e93\u4e0b\u53ef\u4ee5\u6709\u591a\u4e2a ",Object(i.b)("inlineCode",{parentName:"p"},"Schema"),"\u3002"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"\u4f18\u70b9\uff1a"),"\n\u4e3a\u5b89\u5168\u6027\u8981\u6c42\u8f83\u9ad8\u7684\u79df\u6237\u63d0\u4f9b\u4e86\u4e00\u5b9a\u7a0b\u5ea6\u7684\u903b\u8f91\u6570\u636e\u9694\u79bb\uff0c\u5e76\u4e0d\u662f\u5b8c\u5168\u9694\u79bb\uff1b\u6bcf\u4e2a\u6570\u636e\u5e93\u53ef\u652f\u6301\u66f4\u591a\u7684\u79df\u6237\u6570\u91cf\u3002")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"\u7f3a\u70b9\uff1a"),"\n\u5982\u679c\u51fa\u73b0\u6545\u969c\uff0c\u6570\u636e\u6062\u590d\u6bd4\u8f83\u56f0\u96be\uff0c\u56e0\u4e3a\u6062\u590d\u6570\u636e\u5e93\u5c06\u7275\u6d89\u5230\u5176\u4ed6\u79df\u6237\u7684\u6570\u636e\uff1b \u5982\u679c\u9700\u8981\u8de8\u79df\u6237\u7edf\u8ba1\u6570\u636e\uff0c\u5b58\u5728\u4e00\u5b9a\u56f0\u96be\u3002"))),Object(i.b)("h3",{id:"933-\u5171\u4eab\u6570\u636e\u5e93\uff0c\u5171\u4eab-schema"},"9.3.3 \u5171\u4eab\u6570\u636e\u5e93\uff0c\u5171\u4eab ",Object(i.b)("inlineCode",{parentName:"h3"},"Schema")),Object(i.b)("p",null,"\u5171\u4eab\u6570\u636e\u8868 \u8fd9\u662f\u7b2c\u4e09\u79cd\u65b9\u6848\uff0c\u5373\u79df\u6237\u5171\u4eab\u540c\u4e00\u4e2a ",Object(i.b)("inlineCode",{parentName:"p"},"Database"),"\u3001\u540c\u4e00\u4e2a ",Object(i.b)("inlineCode",{parentName:"p"},"Schema"),"\uff0c\u4f46\u5728\u8868\u4e2d\u589e\u52a0 ",Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"TenantId"))," \u591a\u79df\u6237\u7684\u6570\u636e\u5b57\u6bb5\u3002\u8fd9\u662f\u5171\u4eab\u7a0b\u5ea6\u6700\u9ad8\u3001\u9694\u79bb\u7ea7\u522b\u6700\u4f4e\u7684\u6a21\u5f0f\u3002 \u5373\u6bcf\u63d2\u5165\u4e00\u6761\u6570\u636e\u65f6\u90fd\u9700\u8981\u6709\u4e00\u4e2a\u5ba2\u6237\u7684\u6807\u8bc6\u3002\u8fd9\u6837\u624d\u80fd\u5728\u540c\u4e00\u5f20\u8868\u4e2d\u533a\u5206\u51fa\u4e0d\u540c\u5ba2\u6237\u7684\u6570\u636e\u3002"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"\u4f18\u70b9\uff1a"),"\n\u4e09\u79cd\u65b9\u6848\u6bd4\u8f83\uff0c\u7b2c\u4e09\u79cd\u65b9\u6848\u7684\u7ef4\u62a4\u548c\u8d2d\u7f6e\u6210\u672c\u6700\u4f4e\uff0c\u5141\u8bb8\u6bcf\u4e2a\u6570\u636e\u5e93\u652f\u6301\u7684\u79df\u6237\u6570\u91cf\u6700\u591a\u3002")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"\u7f3a\u70b9\uff1a"),"\n\u9694\u79bb\u7ea7\u522b\u6700\u4f4e\uff0c\u5b89\u5168\u6027\u6700\u4f4e\uff0c\u9700\u8981\u5728\u8bbe\u8ba1\u5f00\u53d1\u65f6\u52a0\u5927\u5bf9\u5b89\u5168\u7684\u5f00\u53d1\u91cf\uff1b \u6570\u636e\u5907\u4efd\u548c\u6062\u590d\u6700\u56f0\u96be\uff0c\u9700\u8981\u9010\u8868\u9010\u6761\u5907\u4efd\u548c\u8fd8\u539f\u3002"))),Object(i.b)("h2",{id:"94-\u591a\u79df\u6237\u4f7f\u7528\u65b9\u6848"},"9.4 \u591a\u79df\u6237\u4f7f\u7528\u65b9\u6848"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"Fur")," \u6846\u67b6\u652f\u6301\u4ee5\u4e0a\u4e09\u79cd\u591a\u79df\u6237\u5b9e\u73b0\u65b9\u6848\uff0c\u4f7f\u7528\u7b80\u5355\u4e14\u5bb9\u6613\u7ef4\u62a4\u3002\u4e0b\u9762\u5206\u522b\u4f7f\u7528\u4e09\u79cd\u4e0d\u540c\u65b9\u5f0f\u6f14\u793a\u591a\u79df\u6237\u65b9\u6848\u7528\u6cd5\u3002"),Object(i.b)("h2",{id:"95-\u57fa\u4e8e-tenantid-\u7684\u65b9\u5f0f"},"9.5 \u57fa\u4e8e ",Object(i.b)("inlineCode",{parentName:"h2"},"TenantId")," \u7684\u65b9\u5f0f"),Object(i.b)("p",null,"\u6b64\u65b9\u5f0f\u5728\u4e2d\u5c0f\u578b\u4f01\u4e1a\u7cfb\u7edf\u4e2d\u6700\u4e3a\u5e38\u7528\uff0c\u7ef4\u62a4\u6210\u672c\u4f4e\uff0c\u8d2d\u7f6e\u6210\u672c\u4f4e\u3002"),Object(i.b)("h3",{id:"951-\u521b\u5efa\u79df\u6237\u6570\u636e\u5e93\u4e0a\u4e0b\u6587"},"9.5.1 \u521b\u5efa\u79df\u6237\u6570\u636e\u5e93\u4e0a\u4e0b\u6587"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cs",metastring:'{6-7} title="Fur.EntityFramework.Core\\DbContexts\\MultiTenantDbContext.cs"',"{6-7}":!0,title:'"Fur.EntityFramework.Core\\DbContexts\\MultiTenantDbContext.cs"'}),'using Fur.DatabaseAccessor;\nusing Microsoft.EntityFrameworkCore;\n\nnamespace Fur.EntityFramework.Core\n{\n    [AppDbContext("Sqlite3ConnectionString")]\n    public class MultiTenantDbContext : AppDbContext<MultiTenantDbContext, MultiTenantDbContextLocator>\n    {\n        public MultiTenantDbContext(DbContextOptions<MultiTenantDbContext> options) : base(options)\n        {\n        }\n    }\n}\n')),Object(i.b)("div",{className:"admonition admonition-important alert alert--info"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"\u7279\u522b\u6ce8\u610f")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"\u591a\u79df\u6237\u64cd\u4f5c\u5efa\u8bae\u5355\u72ec\u4e00\u4e2a\u6570\u636e\u5e93\u4e0a\u4e0b\u6587\uff0c\u800c\u4e14\u9700\u6307\u5b9a ",Object(i.b)("inlineCode",{parentName:"p"},"MultiTenantDbContextLocator")," \u6570\u636e\u5e93\u4e0a\u4e0b\u6587\u5b9a\u4f4d\u5668\u3002"))),Object(i.b)("h3",{id:"952-\u6ce8\u518c\u591a\u79df\u6237\u6570\u636e\u5e93\u4e0a\u4e0b\u6587"},"9.5.2 \u6ce8\u518c\u591a\u79df\u6237\u6570\u636e\u5e93\u4e0a\u4e0b\u6587"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cs",metastring:"{14}","{14}":!0}),"using Fur.DatabaseAccessor;\nusing Microsoft.Extensions.DependencyInjection;\n\nnamespace Fur.EntityFramework.Core\n{\n    [Startup(600)]\n    public sealed class FurEntityFrameworkCoreStartup : AppStartup\n    {\n        public void ConfigureServices(IServiceCollection services)\n        {\n            services.AddDatabaseAccessor(options =>\n            {\n                options.AddDbPool<FurDbContext>(DbProvider.Sqlite);\n                options.AddDbPool<MultiTenantDbContext, MultiTenantDbContextLocator>(DbProvider.Sqlite);\n            });\n        }\n    }\n}\n")),Object(i.b)("h3",{id:"953-\u6dfb\u52a0-tenant-\u79cd\u5b50\u6570\u636e"},"9.5.3 \u6dfb\u52a0 ",Object(i.b)("inlineCode",{parentName:"h3"},"Tenant")," \u79cd\u5b50\u6570\u636e"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cs",metastring:'{8,12-28} title="Fur.EntityFramework.Core\\SeedDatas\\TenantSeedData.cs"',"{8,12-28}":!0,title:'"Fur.EntityFramework.Core\\SeedDatas\\TenantSeedData.cs"'}),'using Fur.DatabaseAccessor;\nusing Microsoft.EntityFrameworkCore;\nusing System;\nusing System.Collections.Generic;\n\nnamespace Fur.EntityFramework.Core\n{\n    public class TenantSeedData : IEntitySeedData<Tenant, MultiTenantDbContextLocator>\n    {\n        public IEnumerable<Tenant> HasData(DbContext dbContext, Type dbContextLocator)\n        {\n            return new List<Tenant>\n            {\n                new Tenant\n                {\n                    TenantId=Guid.Parse("383AFB88-F519-FFF8-B364-6D563BF3687F"),\n                    Name="\u9ed8\u8ba4\u79df\u6237",\n                    Host="localhost:44313",\n                    CreatedTime=DateTime.Parse("2020-10-06 20:19:07")\n                },\n                new Tenant\n                {\n                    TenantId=Guid.Parse("C5798CB6-16D6-0F42-EB56-59C695353BC0"),\n                    Name="\u5176\u4ed6\u79df\u6237",\n                    Host="localhost:5000",\n                    CreatedTime=DateTime.Parse("2020-10-06 20:20:32")\n                }\n            };\n        }\n    }\n}\n')),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"\u7279\u522b\u8bf4\u660e")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"\u8be5\u6b65\u9aa4\u53ea\u5728 ",Object(i.b)("inlineCode",{parentName:"p"},"Code First")," \u65b9\u5f0f\u6267\u884c\uff0c",Object(i.b)("inlineCode",{parentName:"p"},"Database First")," \u65e0\u9700\u914d\u7f6e\u79cd\u5b50\u6570\u636e\u3002"))),Object(i.b)("h3",{id:"954-\u6839\u636e\u6a21\u578b\u521b\u5efa-tenant-\u8868"},"9.5.4 \u6839\u636e\u6a21\u578b\u521b\u5efa ",Object(i.b)("inlineCode",{parentName:"h3"},"Tenant")," \u8868"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"Add-Migration add_tenant_table -Context MultiTenantDbContext\n")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"Update-Database -Context MultiTenantDbContext\n")),Object(i.b)("h3",{id:"956-\u5b9e\u73b0-imultitenantontable-\u63a5\u53e3"},"9.5.6 \u5b9e\u73b0 ",Object(i.b)("inlineCode",{parentName:"h3"},"IMultiTenantOnTable")," \u63a5\u53e3"),Object(i.b)("p",null,"\u5728\u9700\u8981\u591a\u79df\u6237\u7684\u6570\u636e\u5e93\u4e0a\u4e0b\u6587\u4e2d\u5b9e\u73b0 ",Object(i.b)("inlineCode",{parentName:"p"},"IMultiTenantOnTable")," \u63a5\u53e3\uff0c\u5982\uff1a"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cs",metastring:"{8,14-17}","{8,14-17}":!0}),'using Fur.DatabaseAccessor;\nusing Microsoft.EntityFrameworkCore;\nusing System;\n\nnamespace Fur.EntityFramework.Core\n{\n    [AppDbContext("Sqlite3ConnectionString")]\n    public class FurDbContext : AppDbContext<FurDbContext>, IMultiTenantOnTable, IModelBuilderFilter\n    {\n        public FurDbContext(DbContextOptions<FurDbContext> options) : base(options)\n        {\n        }\n\n        public Guid? GetTenantId()\n        {\n            return base.TenantId;\n        }\n    }\n}\n')),Object(i.b)("p",null,"\u5728 ",Object(i.b)("inlineCode",{parentName:"p"},"GetTenantId()")," \u65b9\u6cd5\u4e2d\uff0c\u9996\u5148\u83b7\u53d6\u8bf7\u6c42\u7684 ",Object(i.b)("inlineCode",{parentName:"p"},"\u4e3b\u673a\u5730\u5740"),"\uff0c\u7136\u540e\u6839\u636e\u4e3b\u673a\u5730\u5740\u67e5\u8be2\u5bf9\u5e94\u7684\u79df\u6237 ",Object(i.b)("inlineCode",{parentName:"p"},"TenantIdId"),"\uff0c\u907f\u514d\u591a\u6b21\u67e5\u8be2\u6570\u636e\u5e93\uff0c\u8fd9\u91cc\u4f7f\u7528\u4e86 ",Object(i.b)("inlineCode",{parentName:"p"},"IMemoryCache")," \u5185\u5b58\u7f13\u5b58\u3002"),Object(i.b)("h3",{id:"957-\u5b9e\u73b0-imodelbuilderfilter-\u63a5\u53e3"},"9.5.7 \u5b9e\u73b0 ",Object(i.b)("inlineCode",{parentName:"h3"},"IModelBuilderFilter")," \u63a5\u53e3"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"IModelBuilderFilter")," \u63a5\u53e3\u662f\u5168\u5c40\u67e5\u8be2\u8fc7\u6ee4\u5668\u5b9e\u73b0\u63a5\u53e3\uff0c\u6240\u4ee5\u6211\u4eec\u9700\u8981\u914d\u7f6e\u5b9e\u4f53 ",Object(i.b)("inlineCode",{parentName:"p"},"TenantId")," \u8fc7\u6ee4\u5668"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cs",metastring:"{9,20-23}","{9,20-23}":!0}),'using Fur.DatabaseAccessor;\nusing Microsoft.EntityFrameworkCore;\nusing Microsoft.EntityFrameworkCore.Metadata.Builders;\nusing System;\n\nnamespace Fur.EntityFramework.Core\n{\n    [AppDbContext("Sqlite3ConnectionString")]\n    public class FurDbContext : AppDbContext<FurDbContext>, IMultiTenantOnTable, IModelBuilderFilter\n    {\n        public FurDbContext(DbContextOptions<FurDbContext> options) : base(options)\n        {\n        }\n\n        public Guid? GetTenantId()\n        {\n            return base.TenantId;\n        }\n\n        public void OnCreating(ModelBuilder modelBuilder, EntityTypeBuilder entityBuilder, DbContext dbContext, Type dbContextLocator)\n        {\n            entityBuilder.HasQueryFilter(TenantIdQueryFilterExpression(entityBuilder, GetTenantId().Value));\n        }\n    }\n}\n')),Object(i.b)("h3",{id:"958-\u91cd\u5199-savingchangesevent-\u4e8b\u4ef6\u65b9\u6cd5"},"9.5.8 \u91cd\u5199 ",Object(i.b)("inlineCode",{parentName:"h3"},"SavingChangesEvent")," \u4e8b\u4ef6\u65b9\u6cd5"),Object(i.b)("p",null,"\u901a\u8fc7\u4e0a\u9762\u7684\u6b65\u9aa4\uff0c\u6211\u4eec\u5df2\u7ecf\u89e3\u51b3\u4e86 ",Object(i.b)("inlineCode",{parentName:"p"},"\u67e5\u8be2")," \u79df\u6237\u8fc7\u6ee4\u529f\u80fd\uff0c\u4f46\u662f ",Object(i.b)("inlineCode",{parentName:"p"},"\u65b0\u589e")," \u548c ",Object(i.b)("inlineCode",{parentName:"p"},"\u66f4\u65b0")," \u8fd8\u672a\u5904\u7406\u3002"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"\u65b0\u589e")," \u6570\u636e\u7684\u65f6\u5019\u81ea\u52a8\u8bbe\u7f6e ",Object(i.b)("inlineCode",{parentName:"li"},"TenantId")," \u7684\u503c"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"\u66f4\u65b0")," \u6570\u636e\u7684\u65f6\u5019\u6392\u9664 ",Object(i.b)("inlineCode",{parentName:"li"},"TenantId")," \u5c5e\u6027\u66f4\u65b0")),Object(i.b)("p",null,"\u5b9e\u73b0\u4e0a\u9762\u7684\u6b65\u9aa4\u5f88\u7b80\u5355\uff0c\u53ea\u9700\u8981\u91cd\u5199 ",Object(i.b)("inlineCode",{parentName:"p"},"SavingChangesEvent")," \u4e8b\u4ef6\u65b9\u6cd5\u5373\u53ef\u3002"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cs",metastring:"{26-48}","{26-48}":!0}),'using Fur.DatabaseAccessor;\nusing Microsoft.EntityFrameworkCore;\nusing Microsoft.EntityFrameworkCore.Metadata.Builders;\nusing System;\nusing System.Linq;\n\nnamespace Fur.EntityFramework.Core\n{\n    [AppDbContext("Sqlite3ConnectionString")]\n    public class FurDbContext : AppDbContext<FurDbContext>, IMultiTenantOnTable, IModelBuilderFilter\n    {\n        public FurDbContext(DbContextOptions<FurDbContext> options) : base(options)\n        {\n        }\n\n        public Guid? GetTenantId()\n        {\n            return base.TenantId;\n        }\n\n        public void OnCreating(ModelBuilder modelBuilder, EntityTypeBuilder entityBuilder, DbContext dbContext, Type dbContextLocator)\n        {\n            entityBuilder.HasQueryFilter(TenantIdQueryFilterExpression(entityBuilder, GetTenantId().Value));\n        }\n\n        protected override void SavingChangesEvent(object sender, SavingChangesEventArgs e)\n        {\n            // \u83b7\u53d6\u5f53\u524d\u4e8b\u4ef6\u5bf9\u5e94\u4e0a\u4e0b\u6587\n            var dbContext = sender as FurDbContext;\n\n            // \u83b7\u53d6\u6240\u6709\u65b0\u589e\u548c\u66f4\u65b0\u7684\u5b9e\u4f53\n            var entities = dbContext.ChangeTracker.Entries().Where(u => u.State == EntityState.Added || u.State == EntityState.Modified);\n\n            foreach (var entity in entities)\n            {\n                switch (entity.State)\n                {\n                    // \u81ea\u52a8\u8bbe\u7f6e\u79df\u6237Id\n                    case EntityState.Added:\n                        entity.Property(nameof(Entity.TenantId)).CurrentValue = base.TenantId;\n                        break;\n                    // \u6392\u9664\u79df\u6237Id\n                    case EntityState.Modified:\n                        entity.Property(nameof(Entity.TenantId)).IsModified = false;\n                        break;\n                }\n            }\n        }\n    }\n}\n')),Object(i.b)("img",{src:Object(o.a)("img/saas1.png")}),Object(i.b)("h2",{id:"96-\u57fa\u4e8e-database-\u7684\u65b9\u5f0f"},"9.6 \u57fa\u4e8e ",Object(i.b)("inlineCode",{parentName:"h2"},"Database")," \u7684\u65b9\u5f0f"),Object(i.b)("p",null,"\u6b64\u65b9\u5f0f\u5728\u4e2d\u5927\u578b\u4f01\u4e1a\u7cfb\u7edf\u4e2d\u6700\u4e3a\u5e38\u7528\uff0c\u4e00\u4e2a\u79df\u6237\uff08\u5ba2\u6237\uff09\u4e00\u4e2a\u72ec\u7acb\u7684\u6570\u636e\u5e93\u3002"))}d.isMDXComponent=!0}}]);