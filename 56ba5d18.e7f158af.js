(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{73:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return p})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return s}));var o=n(2),r=n(6),a=(n(0),n(99)),p={title:"GW Desktop Integration",sidebar_label:"GW Desktop Integration"},l={unversionedId:"products/gw cloud sdk/d-desktop-integration",id:"products/gw cloud sdk/d-desktop-integration",isDocsHomePage:!1,title:"GW Desktop Integration",description:"Integrate Glasswall Desktop App to GW SDK VM",source:"@site/docs/products/gw cloud sdk/d-desktop-integration.md",slug:"/products/gw cloud sdk/d-desktop-integration",permalink:"/k8-proxy-documentation/docs/products/gw cloud sdk/d-desktop-integration",version:"current",sidebar_label:"GW Desktop Integration",sidebar:"docs",previous:{title:"FileDrop Integration ESXi",permalink:"/k8-proxy-documentation/docs/products/gw cloud sdk/c-fd-integration"},next:{title:"Automated Deployment",permalink:"/k8-proxy-documentation/docs/products/gw cloud sdk/deployment"}},i=[{value:"Integrate Glasswall Desktop App to GW SDK VM",id:"integrate-glasswall-desktop-app-to-gw-sdk-vm",children:[]},{value:"GW Cloud SDK integration with GW Desktop video",id:"gw-cloud-sdk-integration-with-gw-desktop-video",children:[]}],c={rightToc:i};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"integrate-glasswall-desktop-app-to-gw-sdk-vm"},"Integrate Glasswall Desktop App to GW SDK VM"),Object(a.b)("p",null,"In order to integrate Glasswall Desktop App, make sure both of the machines are on the same network subnet."),Object(a.b)("p",null,"Ignore Step 1 to Step 3 If you are already using ",Object(a.b)("inlineCode",{parentName:"p"},"OfflineDesktop.ova")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Step 1:")," Download Glasswall Desktop App from ",Object(a.b)("a",{parentName:"p",href:"https://github.com/k8-proxy/glasswall-desktop/releases/download/v1.0.5/glasswall-desktop-1.0.5.AppImage"},"here")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Step 2:")," Make the downloaded package as an executable by running below command."),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"chmod a+x glasswall-desktop-1.0.5.AppImage\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Step 3:")," Run below command to launch the desktop application"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"./glasswall-desktop-1.0.5.AppImage\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Step 4:")," Configure GW-SDK-VM endpoint in Glasswall Desktop App Setting"),Object(a.b)("p",null,Object(a.b)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/60857664/115527413-52eaa880-a291-11eb-8932-a00afa904043.png",alt:"image"})),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Example Value:")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"REBUILD ENGINE URL = /api/rebuild/base64\n\nREBUILD ANALYSIS URL = /api/Analyse/base64\n")),Object(a.b)("p",null,"Once you are done with the above setting, you are using GW-SDK-VM now with Glasswall Desktop App to process the files."),Object(a.b)("h2",{id:"gw-cloud-sdk-integration-with-gw-desktop-video"},"GW Cloud SDK integration with GW Desktop video"),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=RIcSlZvcNC0"},Object(a.b)("img",{parentName:"a",src:"https://img.youtube.com/vi/RIcSlZvcNC0/hqdefault.jpg",alt:"Desktop Integration"}))))}s.isMDXComponent=!0},99:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return g}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),s=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=s(n),b=o,g=u["".concat(p,".").concat(b)]||u[b]||d[b]||a;return n?r.a.createElement(g,l(l({ref:t},c),{},{components:n})):r.a.createElement(g,l({ref:t},c))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,p=new Array(a);p[0]=b;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,p[1]=l;for(var c=2;c<a;c++)p[c]=n[c];return r.a.createElement.apply(null,p)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);