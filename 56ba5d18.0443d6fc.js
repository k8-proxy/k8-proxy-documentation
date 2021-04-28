(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{74:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return p})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return s}));var r=n(2),o=n(6),a=(n(0),n(99)),p={title:"GW Desktop Integration",sidebar_label:"GW Desktop Integration"},l={unversionedId:"products/gw cloud sdk/d-desktop-integration",id:"products/gw cloud sdk/d-desktop-integration",isDocsHomePage:!1,title:"GW Desktop Integration",description:"Integrate Glasswall Desktop App to GW SDK VM",source:"@site/docs/products/gw cloud sdk/d-desktop-integration.md",slug:"/products/gw cloud sdk/d-desktop-integration",permalink:"/k8-proxy-documentation/docs/products/gw cloud sdk/d-desktop-integration",version:"current",sidebar_label:"GW Desktop Integration",sidebar:"docs",previous:{title:"FileDrop Integration ESXi",permalink:"/k8-proxy-documentation/docs/products/gw cloud sdk/c-fd-integration"},next:{title:"Deployment",permalink:"/k8-proxy-documentation/docs/products/gw cloud sdk/deployment"}},i=[{value:"Integrate Glasswall Desktop App to GW SDK VM",id:"integrate-glasswall-desktop-app-to-gw-sdk-vm",children:[]},{value:"GW Cloud SDK integration with GW Desktop video",id:"gw-cloud-sdk-integration-with-gw-desktop-video",children:[]}],c={rightToc:i};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"integrate-glasswall-desktop-app-to-gw-sdk-vm"},"Integrate Glasswall Desktop App to GW SDK VM"),Object(a.b)("p",null,"In order to integrate Glasswall Desktop App, make sure both of the machines are on the same network subnet."),Object(a.b)("p",null,"Ignore Step 1 to Step 3 If you are already using ",Object(a.b)("inlineCode",{parentName:"p"},"OfflineDesktop.ova")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Step 1:")," Download Glasswall Desktop App from ",Object(a.b)("a",{parentName:"p",href:"https://github.com/k8-proxy/glasswall-desktop/releases/download/v1.0.5/glasswall-desktop-1.0.5.AppImage"},"here")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Step 2:")," Make the downloaded package as an executable by running below command."),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"chmod a+x glasswall-desktop-1.0.5.AppImage\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Step 3:")," Run below command to launch the desktop application"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"./glasswall-desktop-1.0.5.AppImage\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Step 4:")," Configure GW-SDK-VM endpoint in Glasswall Desktop App Setting"),Object(a.b)("p",null,Object(a.b)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/60857664/115527413-52eaa880-a291-11eb-8932-a00afa904043.png",alt:"image"})),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Example Value:")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"REBUILD ENGINE URL = /api/rebuild/base64\n\nREBUILD ANALYSIS URL = /api/Analyse/base64\n")),Object(a.b)("p",null,"Once you are done with the above setting, you are using GW-SDK-VM now with Glasswall Desktop App to process the files."),Object(a.b)("h2",{id:"gw-cloud-sdk-integration-with-gw-desktop-video"},"GW Cloud SDK integration with GW Desktop video"),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=RIcSlZvcNC0"},Object(a.b)("img",{parentName:"a",src:"https://img.youtube.com/vi/RIcSlZvcNC0/hqdefault.jpg",alt:"Desktop Integration"}))))}s.isMDXComponent=!0},99:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return g}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=o.a.createContext({}),s=function(e){var t=o.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=s(n),b=r,g=u["".concat(p,".").concat(b)]||u[b]||d[b]||a;return n?o.a.createElement(g,l(l({ref:t},c),{},{components:n})):o.a.createElement(g,l({ref:t},c))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,p=new Array(a);p[0]=b;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,p[1]=l;for(var c=2;c<a;c++)p[c]=n[c];return o.a.createElement.apply(null,p)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);