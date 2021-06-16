(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{100:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return l})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return u})),r.d(t,"default",(function(){return b}));var n=r(2),i=r(6),a=(r(0),r(105)),o=["components"],l={title:"Deploying ICAP Server on ESXI & Virtualbox",sidebar_label:"Deploying ICAP Server on ESXI & Virtualbox"},c={unversionedId:"products/icap server/icap-esxi",id:"products/icap server/icap-esxi",isDocsHomePage:!1,title:"Deploying ICAP Server on ESXI & Virtualbox",description:"Installation video",source:"@site/docs/products/icap server/icap-esxi.md",slug:"/products/icap server/icap-esxi",permalink:"/k8-proxy-documentation/docs/products/icap server/icap-esxi",version:"current",sidebar_label:"Deploying ICAP Server on ESXI & Virtualbox",sidebar:"docs",previous:{title:"Deploying ICAP Server on AWS",permalink:"/k8-proxy-documentation/docs/products/icap server/icap-aws"},next:{title:"How to use ICAP Server",permalink:"/k8-proxy-documentation/docs/products/icap server/icap-howto"}},u=[{value:"Installation video",id:"installation-video",children:[{value:"Deploying ICAP Server OVA on ESXI",id:"deploying-icap-server-ova-on-esxi",children:[]},{value:"Deploying ICAP Server OVA on VirtualBox",id:"deploying-icap-server-ova-on-virtualbox",children:[]}]},{value:"Troubleshooting",id:"troubleshooting",children:[]}],p={rightToc:u};function b(e){var t=e.components,r=Object(i.a)(e,o);return Object(a.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"installation-video"},"Installation video"),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=fEPJvVb0y-o&feature=youtu.be"},Object(a.b)("img",{parentName:"a",src:"https://img.youtube.com/vi/fEPJvVb0y-o/hqdefault.jpg",alt:"Installation Video (OVA)"}))),Object(a.b)("h3",{id:"deploying-icap-server-ova-on-esxi"},"Deploying ICAP Server OVA on ESXI"),Object(a.b)("p",null,"From VMWare ESXi console or VMware workstation:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Select ",Object(a.b)("strong",{parentName:"li"},"Virtual machines")," > ",Object(a.b)("strong",{parentName:"li"},"Create / Register VM")," > ",Object(a.b)("strong",{parentName:"li"},"Deploy a virtual machine from OVF or  OVA file")),Object(a.b)("li",{parentName:"ul"},"Browse and import ICAP Server OVA (downloaded from S3 bucket) "),Object(a.b)("li",{parentName:"ul"},"Before importing, uncheck the box for ",Object(a.b)("inlineCode",{parentName:"li"},"Power on automatically")),Object(a.b)("li",{parentName:"ul"},"Click on Actions > Edit Settings > Increase the following (8GB RAM, 4 Cores, and 20 GB disk)"),Object(a.b)("li",{parentName:"ul"},"Wait for the import to finish"),Object(a.b)("li",{parentName:"ul"},"Once VM is imported, click on the VM name")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Note"),": If using the ESXI01 Server, please make sure your network adapter is set to VMs"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Start the VM and login with provided credentials"),Object(a.b)("li",{parentName:"ul"},"Run ",Object(a.b)("inlineCode",{parentName:"li"},"/usr/local/bin/wizard")," ",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"Configure Network > Change IP, Gateway, and DNS (navigate using up down buttons, then tab to go to submit)",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Note"),": To set up your OVA ",Object(a.b)("strong",{parentName:"li"},"without internet access"),", for ",Object(a.b)("inlineCode",{parentName:"li"},"DNS"),", enter the same IP as your VM IP"))),Object(a.b)("li",{parentName:"ul"},"Give the VM ~10 minutes before jumping to usage"),Object(a.b)("li",{parentName:"ul"},"Configure Password > Type new password ")))),Object(a.b)("h3",{id:"deploying-icap-server-ova-on-virtualbox"},"Deploying ICAP Server OVA on VirtualBox"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Download ICAP Server OVA"),Object(a.b)("li",{parentName:"ul"},"Open VirtualBox and Import downloaded OVA minimum (8GB RAM, 2 Cores, and 20 GB disk)",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"To increase disk size, ",Object(a.b)("inlineCode",{parentName:"li"},"Ctrl+D")," > Pick your ICAP-Server VM > Properties > Increase size"),Object(a.b)("li",{parentName:"ul"},"Give the VM ~10 minutes before jumping to usage")))),Object(a.b)("h2",{id:"troubleshooting"},"Troubleshooting"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"If the UI does not load, run ",Object(a.b)("inlineCode",{parentName:"li"},"kubectl get pod -A")," to check the status of pods"),Object(a.b)("li",{parentName:"ul"},"If their status is not ",Object(a.b)("inlineCode",{parentName:"li"},"ready"),", in home directory run ",Object(a.b)("inlineCode",{parentName:"li"},"./flush_iptables.sh")),Object(a.b)("li",{parentName:"ul"},"Then run ",Object(a.b)("inlineCode",{parentName:"li"},"sudo systemctl restart k3s")),Object(a.b)("li",{parentName:"ul"},"Give it ~10 minutes before usage"),Object(a.b)("li",{parentName:"ul"},"In case you see ",Object(a.b)("inlineCode",{parentName:"li"},"metricbit")," pod crashing, bare in mind, this will not impact the system setup. In case there is an elasticsearch in private network which can be connected by metricbeat, then the metricbeat pod will run fine, if there is no elasticsearch then it will keep crashing but without any impact. ")))}b.isMDXComponent=!0},105:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return m}));var n=r(0),i=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=i.a.createContext({}),p=function(e){var t=i.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},b=function(e){var t=p(e.components);return i.a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),b=p(r),d=n,m=b["".concat(o,".").concat(d)]||b[d]||s[d]||a;return r?i.a.createElement(m,l(l({ref:t},u),{},{components:r})):i.a.createElement(m,l({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var u=2;u<a;u++)o[u]=r[u];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);