(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{101:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),p=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(n),b=r,f=u["".concat(i,".").concat(b)]||u[b]||d[b]||a;return n?o.a.createElement(f,l(l({ref:t},s),{},{components:n})):o.a.createElement(f,l({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=b;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},222:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/ova-1-fbbb34f0e3aa61f3225c6b0482bf7a82.png"},223:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/ova-2-9b17040782267450c5086bd4e88d6d35.png"},224:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/ova-3-90801d73228a929aa30347be0330c6b0.png"},225:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/ova-4-56149cdf7fa8fce032c2d98c3c5ddbbf.png"},226:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/ova-5-903979bb671caf5737e5f48a44aa051d.png"},227:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/ova-6-bb9438b5db85da2433ee6a2ea85add49.png"},228:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/ova-7-8283262892968a5d41f3638e2eb573d7.png"},229:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/ova-8-a610f19bc5157cdec4248d2405d4f78e.png"},230:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/ova-9-3a901a937543ab2d58db771099095aaf.png"},93:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(2),o=n(6),a=(n(0),n(101)),i=["components"],l={title:"Sharepoint Server OVA",sidebar_label:"Sharepoint VHD to OVA"},c={unversionedId:"products/sharepoint plugin/server/server-setup/3. sp-vhd-to-ova",id:"products/sharepoint plugin/server/server-setup/3. sp-vhd-to-ova",isDocsHomePage:!1,title:"Sharepoint Server OVA",description:"Geneeral info:",source:"@site/docs/products/sharepoint plugin/server/server-setup/3. sp-vhd-to-ova.md",slug:"/products/sharepoint plugin/server/server-setup/3. sp-vhd-to-ova",permalink:"/k8-proxy-documentation/docs/products/sharepoint plugin/server/server-setup/3. sp-vhd-to-ova",version:"current",sidebar_label:"Sharepoint VHD to OVA",sidebar:"docs",previous:{title:"Sharepoint Server Manual Install",permalink:"/k8-proxy-documentation/docs/products/sharepoint plugin/server/server-setup/2. sp-vm-manual-install"},next:{title:"Sharepoint OVA in AWS",permalink:"/k8-proxy-documentation/docs/products/sharepoint plugin/server/server-setup/4. sp-ova-aws"}},s=[{value:"Pre-Requisites",id:"pre-requisites",children:[]},{value:"Download Source VHD file",id:"download-source-vhd-file",children:[]},{value:"Convert VHD to OVA",id:"convert-vhd-to-ova",children:[{value:"Import VHD and Create Virtual Machine",id:"import-vhd-and-create-virtual-machine",children:[]},{value:"Exporting to OVA",id:"exporting-to-ova",children:[]}]}],p={rightToc:s};function u(e){var t=e.components,l=Object(o.a)(e,i);return Object(a.b)("wrapper",Object(r.a)({},p,l,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"geneeral-info"},"Geneeral info:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Version: Sharepoint 2019       "),Object(a.b)("li",{parentName:"ul"},"Topology: Single Server Farm       "),Object(a.b)("li",{parentName:"ul"},"Target: OVA")),Object(a.b)("h2",{id:"pre-requisites"},"Pre-Requisites"),Object(a.b)("p",null,"VM running Sharepoint 2019 on Azure (VHD)\n",Object(a.b)("a",{parentName:"p",href:"./sp-vm-manual-install"},"Follow these steps")),Object(a.b)("h2",{id:"download-source-vhd-file"},"Download Source VHD file"),Object(a.b)("p",null,"Log in into your Azure subscription to download the VHD file of SharePoint Server. To download the VHD file we followed below steps."),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Logged In to the Azure Portal, navigated to the specific virtual machine for which we need to download VHD file."),Object(a.b)("li",{parentName:"ol"},"Selected \u2018Disks\u2019 on the management portal and selected the \u2018OS disk\u2019 that needed to be exported.")),Object(a.b)("p",null,Object(a.b)("img",{src:n(222).default})),Object(a.b)("ol",{start:3},Object(a.b)("li",{parentName:"ol"},"Once the disk has been selected, it navigated to the configuration of the Disk."),Object(a.b)("li",{parentName:"ol"},"On the configuration of the Disk, selected \u2018Disk Export\u2019. Extended the \u2018URL Expires\u2019 and clicked on \u2018Generate URL\u2019.")),Object(a.b)("p",null,Object(a.b)("img",{src:n(223).default})),Object(a.b)("ol",{start:5},Object(a.b)("li",{parentName:"ol"},"After clicking on \u2018Generate URL\u2019 an url to download will get appear as well as you will able to see \u2018Download the VHD file\u2019. "),Object(a.b)("li",{parentName:"ol"},"Click on \u2018Download the VHD file\u2019 to download VHD, it might takes hours depending upon the size of file.")),Object(a.b)("p",null,Object(a.b)("img",{src:n(224).default})),Object(a.b)("h2",{id:"convert-vhd-to-ova"},"Convert VHD to OVA"),Object(a.b)("p",null,"Once VHD file is completely downloaded on your Machine, the next process is to convert it into OVA. To convert it into OVA, we require \u2018Oracle VM VirtualBox Manager\u2019. You can download Virutal Box from this ",Object(a.b)("a",{parentName:"p",href:"https://www.virtualbox.org/wiki/Downloads"},"link"),". For the Process of Installing Virutal BOX you can visit to Annex-1 (Installation of Oracle VM Virtual BOX) . After Installing Virtual Box, follow below steps to convert VHD into OVA."),Object(a.b)("h3",{id:"import-vhd-and-create-virtual-machine"},"Import VHD and Create Virtual Machine"),Object(a.b)("p",null,"First of all you need to import the VHD file which has been downloaded from Azure Machine to create a Virtual machine. To import virtual machine follow below steps."),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Open Virtual Box and click on ",Object(a.b)("strong",{parentName:"li"},"New"),".")),Object(a.b)("p",null,Object(a.b)("img",{src:n(225).default})),Object(a.b)("ol",{start:2},Object(a.b)("li",{parentName:"ol"},"Provided the specification to the Virtual machine as of below. Located VM file which was downloaded and clicked on ",Object(a.b)("strong",{parentName:"li"},"Create"),Object(a.b)("img",{src:n(226).default}))),Object(a.b)("h3",{id:"exporting-to-ova"},"Exporting to OVA"),Object(a.b)("p",null,"After Creation of VM, it has been tested for the smooth operation. Once the testing has been completed, followed below steps to export it into OVA file."),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Right clicked on VM and selected ",Object(a.b)("strong",{parentName:"p"},"Export to OCI*"),"\n",Object(a.b)("img",{src:n(227).default}))),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Specified the location to export OVA file and clicked on ",Object(a.b)("strong",{parentName:"p"},"Next"),"\n",Object(a.b)("img",{src:n(228).default}))),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Validated for the Virtual Application configuration and clicked on ",Object(a.b)("strong",{parentName:"p"},"Export"),".\n",Object(a.b)("img",{src:n(229).default}))),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"It took around 1-2 hours to complete the export. Duration depends upon the size of file.\n",Object(a.b)("img",{src:n(230).default})))))}u.isMDXComponent=!0}}]);