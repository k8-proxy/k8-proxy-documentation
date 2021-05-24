(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{101:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return f}));var n=r(0),o=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(r),d=n,f=u["".concat(a,".").concat(d)]||u[d]||b[d]||i;return r?o.a.createElement(f,c(c({ref:t},l),{},{components:r})):o.a.createElement(f,c({ref:t},l))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,a[1]=c;for(var l=2;l<i;l++)a[l]=r[l];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},75:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return p}));var n=r(2),o=r(6),i=(r(0),r(101)),a={title:"Rebuilding ZIP files with Compliant Kubernetes",sidebar_label:"Rebuilding ZIP files with Compliant Kubernetes"},c={unversionedId:"products/gw cloud sdk/zip_scenarios",id:"products/gw cloud sdk/zip_scenarios",isDocsHomePage:!1,title:"Rebuilding ZIP files with Compliant Kubernetes",description:"- ### Scenario-1 (Status 200)",source:"@site/docs/products/gw cloud sdk/zip_scenarios.md",slug:"/products/gw cloud sdk/zip_scenarios",permalink:"/k8-proxy-documentation/docs/products/gw cloud sdk/zip_scenarios",version:"current",sidebar_label:"Rebuilding ZIP files with Compliant Kubernetes",sidebar:"docs",previous:{title:"Python/PHP/JS Code Sample",permalink:"/k8-proxy-documentation/docs/products/gw cloud sdk/python-sample"},next:{title:"GW Desktop App",permalink:"/k8-proxy-documentation/docs/products/gw desktop app/overview"}},s=[],l={rightToc:s};function p(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("h3",{parentName:"li",id:"scenario-1-status-200"},"Scenario-1 (Status 200)"),Object(i.b)("p",{parentName:"li"},"All files are processed and the response returns a ZipFile with the sanitized files inside")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("h3",{parentName:"li",id:"scenario-2-status-207"},"Scenario-2 (Status 207)"),Object(i.b)("p",{parentName:"li"},"In this scenario the Zip file is processed, however some of the files inside it could not be processed. Nevertheless the response will return a Zip file with the sanitized files\nplus an ",Object(i.b)("inlineCode",{parentName:"p"},"ErrorReport.html")," for each file that could not be rebuilded."))),Object(i.b)("p",null,"Example of the output of the ",Object(i.b)("inlineCode",{parentName:"p"},"ErrorReport.html")," is:"),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/6232283/118471256-d8823c80-b707-11eb-81c8-9ae51204a387.png",alt:"image"})),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("h3",{parentName:"li",id:"scenario-3-status-gw_error"},"Scenario-3 (Status GW_ERROR)"),"If a file exceeds the set limit for processing a zip file, the following error occurs.")),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/60857664/118820823-e924e500-b8b6-11eb-8ff0-253a8750c800.png",alt:"image"})))}p.isMDXComponent=!0}}]);