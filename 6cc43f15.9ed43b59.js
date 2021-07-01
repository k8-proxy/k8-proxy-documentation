(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{106:function(e,t,a){"use strict";a.d(t,"a",(function(){return c})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=r.a.createContext({}),p=function(e){var t=r.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):b(b({},t),e)),a},c=function(e){var t=p(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},s=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,o=d(e,["components","mdxType","originalType","parentName"]),c=p(a),s=n,m=c["".concat(i,".").concat(s)]||c[s]||u[s]||l;return a?r.a.createElement(m,b(b({ref:t},o),{},{components:a})):r.a.createElement(m,b({ref:t},o))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=s;var b={};for(var d in t)hasOwnProperty.call(t,d)&&(b[d]=t[d]);b.originalType=e,b.mdxType="string"==typeof e?e:n,i[1]=b;for(var o=2;o<l;o++)i[o]=a[o];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}s.displayName="MDXCreateElement"},80:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return d})),a.d(t,"rightToc",(function(){return o})),a.d(t,"default",(function(){return c}));var n=a(2),r=a(6),l=(a(0),a(106)),i=["components"],b={title:"Endpoints",sidebar_label:"Endpoints"},d={unversionedId:"products/gw cloud sdk/b-endpoints",id:"products/gw cloud sdk/b-endpoints",isDocsHomePage:!1,title:"Endpoints",description:"Glasswall File Rebuild Product API (Swagger)",source:"@site/docs/products/gw cloud sdk/b-endpoints.md",slug:"/products/gw cloud sdk/b-endpoints",permalink:"/k8-proxy-documentation/docs/products/gw cloud sdk/b-endpoints",version:"current",sidebar_label:"Endpoints",sidebar:"docs",previous:{title:"Overview",permalink:"/k8-proxy-documentation/docs/products/gw cloud sdk/a-overview"},next:{title:"Cloud SDK Security Architecture and Secure Deployment",permalink:"/k8-proxy-documentation/docs/products/gw cloud sdk/bcloudsdk_dep"}},o=[{value:"Glasswall File Rebuild Product API (Swagger)",id:"glasswall-file-rebuild-product-api-swagger",children:[]},{value:"Endpoints available",id:"endpoints-available",children:[]}],p={rightToc:o};function c(e){var t=e.components,a=Object(r.a)(e,i);return Object(l.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"glasswall-file-rebuild-product-api-swagger"},"Glasswall File Rebuild Product API (Swagger)"),Object(l.b)("p",null,Object(l.b)("a",{parentName:"p",href:"https://cloud-sdk.glasswallsolutions.com/swagger/index.html"},"https://cloud-sdk.glasswallsolutions.com/swagger/index.html")),Object(l.b)("h2",{id:"endpoints-available"},"Endpoints available"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"API Endpoint"),Object(l.b)("th",{parentName:"tr",align:null},"Method"),Object(l.b)("th",{parentName:"tr",align:null},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"/api/health"),Object(l.b)("td",{parentName:"tr",align:null},"GET"),Object(l.b)("td",{parentName:"tr",align:null},"This endpoint is to check the health of the system")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"/api/rebuild/file"),Object(l.b)("td",{parentName:"tr",align:null},"POST"),Object(l.b)("td",{parentName:"tr",align:null},"Rebuilds a file using its binary data")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"/api/rebuild/base64"),Object(l.b)("td",{parentName:"tr",align:null},"POST"),Object(l.b)("td",{parentName:"tr",align:null},"Rebuilds a file using the Base64 encoded representation")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"/api/rebuild/zipfile"),Object(l.b)("td",{parentName:"tr",align:null},"POST"),Object(l.b)("td",{parentName:"tr",align:null},"Rebuilds a zip file using its binary data")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"/api/rebuild/protectedzipfile"),Object(l.b)("td",{parentName:"tr",align:null},"POST"),Object(l.b)("td",{parentName:"tr",align:null},"Rebuilds a protected zip file using its binary data and password")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"/api/analyse/base64"),Object(l.b)("td",{parentName:"tr",align:null},"POST"),Object(l.b)("td",{parentName:"tr",align:null},"Analyse a file using the Base64 encoded representation")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"/api/analyse/file"),Object(l.b)("td",{parentName:"tr",align:null},"POST"),Object(l.b)("td",{parentName:"tr",align:null},"Analyse a file using it's binary data")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"/api/analyse/xmlreport"),Object(l.b)("td",{parentName:"tr",align:null},"GET"),Object(l.b)("td",{parentName:"tr",align:null},"Returns a xml report file using its FileId")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"/api/analyse/rebuild-zip-from-base64"),Object(l.b)("td",{parentName:"tr",align:null},"POST"),Object(l.b)("td",{parentName:"tr",align:null},"Returns a zip file with all available data using the Base64 encoded representation")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"/api/analyse/rebuild-zip-from-file"),Object(l.b)("td",{parentName:"tr",align:null},"POST"),Object(l.b)("td",{parentName:"tr",align:null},"Returns a zip file with all available data using its binary data")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"/api/SDK/rebuild-zip-from-base64"),Object(l.b)("td",{parentName:"tr",align:null},"POST"),Object(l.b)("td",{parentName:"tr",align:null},"Returns a zip file with all available data using the Base64 encoded representation")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"/api/SDK/rebuild-zip-from-file"),Object(l.b)("td",{parentName:"tr",align:null},"POST"),Object(l.b)("td",{parentName:"tr",align:null},"Returns a zip file with all available data using its binary data")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"/api/filetypedetection/base64"),Object(l.b)("td",{parentName:"tr",align:null},"POST"),Object(l.b)("td",{parentName:"tr",align:null},"Detect a file type and other information using the Base64 encoded representation")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"/api/detail/version"),Object(l.b)("td",{parentName:"tr",align:null},"GET"),Object(l.b)("td",{parentName:"tr",align:null},"Return the versions of the API and SDK engine")))))}c.isMDXComponent=!0}}]);