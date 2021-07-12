(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{106:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),p=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=p(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),l=p(r),d=n,m=l["".concat(c,".").concat(d)]||l[d]||b[d]||o;return r?a.a.createElement(m,i(i({ref:t},u),{},{components:r})):a.a.createElement(m,i({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var u=2;u<o;u++)c[u]=r[u];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},86:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return s})),r.d(t,"rightToc",(function(){return u})),r.d(t,"default",(function(){return l}));var n=r(2),a=r(6),o=(r(0),r(106)),c=["components"],i={title:"Other Features",sidebar_label:"Other Features"},s={unversionedId:"products/gw cloud sdk/zother-features",id:"products/gw cloud sdk/zother-features",isDocsHomePage:!1,title:"Other Features",description:"Jaeger",source:"@site/docs/products/gw cloud sdk/zother-features.md",slug:"/products/gw cloud sdk/zother-features",permalink:"/k8-proxy-documentation/docs/products/gw cloud sdk/zother-features",version:"current",sidebar_label:"Other Features",sidebar:"docs",previous:{title:"Rebuilding ZIP files",permalink:"/k8-proxy-documentation/docs/products/gw cloud sdk/zip_scenarios"},next:{title:"GW Desktop App",permalink:"/k8-proxy-documentation/docs/products/gw desktop app/overview"}},u=[{value:"Jaeger",id:"jaeger",children:[]}],p={rightToc:u};function l(e){var t=e.components,r=Object(a.a)(e,c);return Object(o.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"jaeger"},"Jaeger"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Jaeger")," is open source software for ",Object(o.b)("strong",{parentName:"p"},"tracing")," transactions between distributed services. It's used for monitoring and troubleshooting complex microservices environments.\nIntegration of Jaeger, helps us to have some visualizations and be able to detect issues."),Object(o.b)("p",null,"You can access Jaeger in ",Object(o.b)("inlineCode",{parentName:"p"},"<vm ip>:9001")),Object(o.b)("p",null,"Select ",Object(o.b)("inlineCode",{parentName:"p"},"GWFileProcess")," from the dropDown menu in Service"),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/60857664/123621417-7723b200-d80b-11eb-9bf1-69100246f24c.png",alt:"image"})),Object(o.b)("p",null,"You will be able to see the traces of the traffic in the UI"),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/60857664/123621561-a508f680-d80b-11eb-9b12-e160d0e46c98.png",alt:"image"})),Object(o.b)("p",null,"Selecting one of the traces you will see a more detailed view of the processes"),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/60857664/123621671-c1a52e80-d80b-11eb-8ea3-eb47a4122712.png",alt:"image"})),Object(o.b)("p",null,"You can use Trace Timeline"),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/60857664/123621720-cd90f080-d80b-11eb-956a-46ce1ea9740d.png",alt:"image"})),Object(o.b)("p",null,"Or a trace Graph"),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/60857664/123621880-f2856380-d80b-11eb-8049-245b9a4f7697.png",alt:"image"})),Object(o.b)("p",null,"Or a Trace Statistics"),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/60857664/123621998-0a5ce780-d80c-11eb-838b-e80438cabf9f.png",alt:"image"})),Object(o.b)("p",null,"Or a trace JSON file"))}l.isMDXComponent=!0}}]);