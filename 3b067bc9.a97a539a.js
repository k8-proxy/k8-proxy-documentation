(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{116:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),p=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=p(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),b=p(n),m=a,d=b["".concat(i,".").concat(m)]||b[m]||u[m]||o;return n?r.a.createElement(d,l(l({ref:t},c),{},{components:n})):r.a.createElement(d,l({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},78:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var a=n(2),r=n(6),o=(n(0),n(116)),i={title:"Production Websites",sidebar_label:"Deployment notes"},l={unversionedId:"dashboards/websites/deployment-notes",id:"dashboards/websites/deployment-notes",isDocsHomePage:!1,title:"Production Websites",description:"Adittional information for production websites",source:"@site/docs/dashboards/websites/deployment-notes.md",slug:"/dashboards/websites/deployment-notes",permalink:"/k8-proxy-documentation/docs/dashboards/websites/deployment-notes",version:"current",sidebar_label:"Deployment notes",sidebar:"someSidebar",previous:{title:"index",permalink:"/k8-proxy-documentation/docs/dashboards/client-welcome/index"},next:{title:"Development Websites",permalink:"/k8-proxy-documentation/docs/dashboards/websites/development"}},s=[{value:"Adittional information for production websites",id:"adittional-information-for-production-websites",children:[]},{value:"Updated IP reservation list for ESXi",id:"updated-ip-reservation-list-for-esxi",children:[]},{value:"SOW based ICAP servers:",id:"sow-based-icap-servers",children:[]},{value:"DNS mappings:",id:"dns-mappings",children:[]},{value:"Other notes:",id:"other-notes",children:[]}],c={rightToc:s};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h3",{id:"adittional-information-for-production-websites"},"Adittional information for production websites"),Object(o.b)("h3",{id:"updated-ip-reservation-list-for-esxi"},"Updated IP reservation list for ESXi"),Object(o.b)("p",null,"ESXi server: 46.165.225.145 / ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://esxi01.glasswall-icap.com/"}),"https://esxi01.glasswall-icap.com/")),Object(o.b)("p",null,"Status: UP>Up, UN>Unknown, DO> Down"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"91.109.26.19/27\tGW: 91.109.26.30 UP (Controller)"),Object(o.b)("li",{parentName:"ul"},"91.109.25.70/27\tGW: 91.109.25.94 UN (CentosICAPAWSTestFramework)"),Object(o.b)("li",{parentName:"ul"},"91.109.25.76/27\tGW: 91.109.25.94 UP (Showcase)"),Object(o.b)("li",{parentName:"ul"},"91.109.25.77/27\tGW: 91.109.25.94 NA (k8s-sow)"),Object(o.b)("li",{parentName:"ul"},"91.109.25.79/27\tGW: 91.109.25.94 UP (minio-server)"),Object(o.b)("li",{parentName:"ul"},"91.109.25.80/27\tGW: 91.109.25.94"),Object(o.b)("li",{parentName:"ul"},"91.109.25.81/27\tGW: 91.109.25.94"),Object(o.b)("li",{parentName:"ul"},"91.109.25.86/27\tGW: 91.109.25.94"),Object(o.b)("li",{parentName:"ul"},"91.109.25.87/27\tGW: 91.109.25.94"),Object(o.b)("li",{parentName:"ul"},"91.109.25.88/27\tGW: 91.109.25.94"),Object(o.b)("li",{parentName:"ul"},"91.109.26.21/27\tGW: 91.109.26.30"),Object(o.b)("li",{parentName:"ul"},"91.109.26.22/27\tGW: 91.109.26.30")),Object(o.b)("h3",{id:"sow-based-icap-servers"},"SOW based ICAP servers:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"icap-client.northeurope.cloudapp.azure.com (its running in AKS on large nodes)"),Object(o.b)("li",{parentName:"ul"},"icap01.glasswall-icap.com\t54.155.107.189"),Object(o.b)("li",{parentName:"ul"},"icap02.glasswall-icap.com\t34.240.204.39"),Object(o.b)("li",{parentName:"ul"},"3.129.78.231"),Object(o.b)("li",{parentName:"ul"},"3.139.106.69"),Object(o.b)("li",{parentName:"ul"},"Load balancer icap.glasswall-icap.com - 54.77.168.168"),Object(o.b)("li",{parentName:"ul"},"Load balancer 3.139.22.215"),Object(o.b)("li",{parentName:"ul"},"Both running on port 1344")),Object(o.b)("h3",{id:"dns-mappings"},"DNS mappings:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"gw-demo-sample-files-eu1.s3-eu-west-1.amazonaws.com.glasswall-icap.com : 54.170.84.172"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"http://www.glasswallsolutions.com.glasswall-icap.com"}),"www.glasswallsolutions.com.glasswall-icap.com")," : 54.78.209.23"),Object(o.b)("li",{parentName:"ul"},"*.gov.uk.glasswall-icap.com , assets.publishing.service.gov.uk.glasswall-icap.com , ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"http://www.gov.uk.glasswall-icap.com"}),"www.gov.uk.glasswall-icap.com")," : 51.11.8.179"),Object(o.b)("li",{parentName:"ul"},"For owasp: cse.google.com.glasswall-icap.com - 34.247.160.95 and google.com.glasswall-icap.com - 34.247.160.95")),Object(o.b)("h3",{id:"other-notes"},"Other notes:"),Object(o.b)("p",null,"*Flavour A for Proxy & ICAP from Flavour E SOW v0.3 (October 28th)"))}p.isMDXComponent=!0}}]);