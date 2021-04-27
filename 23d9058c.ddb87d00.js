(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{67:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(2),o=n(6),a=(n(0),n(98)),i={title:"FileDrop Integration ESXi",sidebar_label:"FileDrop Integration ESXi"},c={unversionedId:"products/gw cloud sdk/c-fd-integration",id:"products/gw cloud sdk/c-fd-integration",isDocsHomePage:!1,title:"FileDrop Integration ESXi",description:"image",source:"@site/docs/products/gw cloud sdk/c-fd-integration.md",slug:"/products/gw cloud sdk/c-fd-integration",permalink:"/EAP-documentation/docs/products/gw cloud sdk/c-fd-integration",version:"current",sidebar_label:"FileDrop Integration ESXi",sidebar:"docs",previous:{title:"FileDrop Integration AWS",permalink:"/EAP-documentation/docs/products/gw cloud sdk/c-fd-integration-aws"},next:{title:"GW Desktop Integration",permalink:"/EAP-documentation/docs/products/gw cloud sdk/d-desktop-integration"}},l=[{value:"Deploying OVA on ESXi: GW Cloud SDK compliant kubernetes with File Drop",id:"deploying-ova-on-esxi-gw-cloud-sdk-compliant-kubernetes-with-file-drop",children:[]},{value:"How to use FileDrop",id:"how-to-use-filedrop",children:[]}],u={rightToc:l};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/60857664/115526387-4154d100-a290-11eb-8876-357a22900a0d.png",alt:"image"})),Object(a.b)("h2",{id:"deploying-ova-on-esxi-gw-cloud-sdk-compliant-kubernetes-with-file-drop"},"Deploying OVA on ESXi: GW Cloud SDK compliant kubernetes with File Drop"),Object(a.b)("p",null,"1.- Download OVA"),Object(a.b)("p",null,"2.- Deploy OVA on VMware ESXi"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"From left bar navigate to Virtual machines"),Object(a.b)("li",{parentName:"ul"},"From top bar on the right choose Create / Register VM"),Object(a.b)("li",{parentName:"ul"},"Choose Deploy a virtual machine from OVF or OVA file"),Object(a.b)("li",{parentName:"ul"},"Type VM name"),Object(a.b)("li",{parentName:"ul"},"Click on section Click to select files or drag/drop and select the downloaded OVA file"),Object(a.b)("li",{parentName:"ul"},"Select desired storage and optionally tweak VM configuration"),Object(a.b)("li",{parentName:"ul"},"Before importing, uncheck the box for Power on automatically"),Object(a.b)("li",{parentName:"ul"},"Click on Actions > Edit Settings > Increase the following (16GB RAM, 8 Cores, 50 GB disk)"),Object(a.b)("li",{parentName:"ul"},"Wait for the import to finish"),Object(a.b)("li",{parentName:"ul"},"Once VM is imported, click on the VM name")),Object(a.b)("p",null,Object(a.b)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/64204445/115719302-96c8d500-a399-11eb-8d6e-c8a506ed22c7.png",alt:"image"})),Object(a.b)("p",null,"3.- Configure IP and credentials"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},'Click on Console in top left corner and select "Open browser console"'),Object(a.b)("li",{parentName:"ul"},"Login to VM using provided credentials"),Object(a.b)("li",{parentName:"ul"},"Change network configuration by running network wizard:")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"wizard\n")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Add IP, Gateway and DNS addresses",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"Note: Use bottom arrow to navigate through these 3 fields and tab to move to Submit button"),Object(a.b)("li",{parentName:"ul"},"Note: To set up your OVA without internet access, for DNS, enter the same IP as your VM IP.")))),Object(a.b)("p",null,Object(a.b)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/64204445/115719636-ec04e680-a399-11eb-8ec0-3a37b1c5d267.png",alt:"image"})),Object(a.b)("p",null,Object(a.b)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/64204445/115719445-b7912a80-a399-11eb-9e38-619c622fb2e5.png",alt:"image"})),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Important note: After the IP change wizard will return to the same window, navigate back to CMD by pressing Cancel"),Object(a.b)("li",{parentName:"ul"},"If needed you can use wizard to change password by selecting Change password"),Object(a.b)("li",{parentName:"ul"},"Verify that correct IP address is set by running ip -4 a and verifying IP for eth0")),Object(a.b)("p",null,"4.- Launch FileDrop"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Give the VM ~10 minutes to initialize, then open your browser and access FileDrop UI on ",Object(a.b)("inlineCode",{parentName:"li"},"http://<VM IP>"))),Object(a.b)("p",null,Object(a.b)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/64204445/115719738-03dc6a80-a39a-11eb-93d0-39597d65e6ee.png",alt:"image"})),Object(a.b)("h2",{id:"how-to-use-filedrop"},"How to use FileDrop"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"How to use file-drop ",Object(a.b)("a",{parentName:"li",href:"https://k8-proxy.github.io/k8-proxy-documentation/docs/products/filedrop/fd-howto"}," Link "))))}p.isMDXComponent=!0},98:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),p=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=p(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),b=p(n),d=r,m=b["".concat(i,".").concat(d)]||b[d]||s[d]||a;return n?o.a.createElement(m,c(c({ref:t},u),{},{components:n})):o.a.createElement(m,c({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);