(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{103:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),l=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=l(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),s=l(n),b=r,m=s["".concat(o,".").concat(b)]||s[b]||d[b]||i;return n?a.a.createElement(m,c(c({ref:t},u),{},{components:n})):a.a.createElement(m,c({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=b;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var u=2;u<i;u++)o[u]=n[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},94:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return p})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return s}));var r=n(2),a=n(6),i=(n(0),n(103)),o=["components"],c={title:"Upgrading cs-api in an existing deployment",sidebar_label:"Upgrading cs-api in an existing deployment"},p={unversionedId:"products/gw cloud sdk/upgrade",id:"products/gw cloud sdk/upgrade",isDocsHomePage:!1,title:"Upgrading cs-api in an existing deployment",description:"Instructions",source:"@site/docs/products/gw cloud sdk/upgrade.md",slug:"/products/gw cloud sdk/upgrade",permalink:"/k8-proxy-documentation/docs/products/gw cloud sdk/upgrade",version:"current",sidebar_label:"Upgrading cs-api in an existing deployment",sidebar:"docs",previous:{title:"Python/PHP/JS Code Sample",permalink:"/k8-proxy-documentation/docs/products/gw cloud sdk/python-sample"},next:{title:"Rebuilding ZIP files",permalink:"/k8-proxy-documentation/docs/products/gw cloud sdk/zip_scenarios"}},u=[],l={rightToc:u};function s(e){var t=e.components,n=Object(a.a)(e,o);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"instructions"},"Instructions"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"SSH into Worker Cluster ")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Run:"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"sudo su")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"git clone -b main https://github.com/k8-proxy/cs-k8s-api && cd cs-k8s-api")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"helm upgrade --install -n icap-adaptation rebuild-api --set k8s_version=1.18 infra/kubernetes/chart  --atomic")))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Example Result:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre"},'Release "rebuild-api" has been upgraded. Happy Helming!\nNAME: rebuild-api\nLAST DEPLOYED: Tue Jun  8 11:23:12 2021\nNAMESPACE: icap-adaptation\nSTATUS: deployed\nREVISION: 4\nTEST SUITE: None\n')))))}s.isMDXComponent=!0}}]);