(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{110:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return l})),r.d(t,"metadata",(function(){return s})),r.d(t,"rightToc",(function(){return i})),r.d(t,"default",(function(){return u}));var a=r(2),n=r(6),o=(r(0),r(115)),l={title:"Sharepoint Server Manual Install",sidebar_label:"Sharepoint VM - Manual Install"},s={unversionedId:"websites/sharepoint/server/server-setup/2. sp-vm-manual-install",id:"websites/sharepoint/server/server-setup/2. sp-vm-manual-install",isDocsHomePage:!1,title:"Sharepoint Server Manual Install",description:"Version: Sharepoint 2019",source:"@site/docs/websites/sharepoint/server/server-setup/2. sp-vm-manual-install.md",slug:"/websites/sharepoint/server/server-setup/2. sp-vm-manual-install",permalink:"/k8-proxy-documentation/docs/websites/sharepoint/server/server-setup/2. sp-vm-manual-install",version:"current",sidebar_label:"Sharepoint VM - Manual Install",sidebar:"docs",previous:{title:"Sharepoint Server VM Setup Overview",permalink:"/k8-proxy-documentation/docs/websites/sharepoint/server/server-setup/1. overview"},next:{title:"Sharepoint Server OVA",permalink:"/k8-proxy-documentation/docs/websites/sharepoint/server/server-setup/3. sp-vhd-to-ova"}},i=[{value:"Version: Sharepoint 2019",id:"version-sharepoint-2019",children:[]},{value:"Topology: Single Server Farm",id:"topology-single-server-farm",children:[]},{value:"Target: Azure VM",id:"target-azure-vm",children:[]}],c={rightToc:i};function u(e){var t=e.components,l=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},c,l,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"version-sharepoint-2019"},"Version: Sharepoint 2019"),Object(o.b)("h2",{id:"topology-single-server-farm"},"Topology: Single Server Farm"),Object(o.b)("h2",{id:"target-azure-vm"},"Target: Azure VM"),Object(o.b)("h1",{id:"steps"},"Steps"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Basic System set up:")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"It is recommended to go through Microsoft docs prior to installing Sharepoint Server 2019: ",Object(o.b)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/sharepoint/install/install-sharepoint-server-2016-on-one-server"},"https://docs.microsoft.com/en-us/sharepoint/install/install-sharepoint-server-2016-on-one-server"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Make sure your System is Windows Server 2016 or later, if not you need to  install Windows Server 2019 first: ",Object(o.b)("a",{parentName:"p",href:"https://www.microsoft.com/en-us/evalcenter/evaluate-windows-server-2019"},"https://www.microsoft.com/en-us/evalcenter/evaluate-windows-server-2019")))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"- Microsoft SQL Server set up:")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Sharepoint requires Microsoft SQL Server set up in the system, you can download and install SQL Server 2017 from here: ",Object(o.b)("a",{parentName:"p",href:"https://www.microsoft.com/en-us/evalcenter/evaluate-sql-server-2017-rtm"},"https://www.microsoft.com/en-us/evalcenter/evaluate-sql-server-2017-rtm"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"During installation, make sure to set up a User account to access the MSSQL Database instance. It is recommended to keep a note on the Database Server name and User account details for later use during Sharepoint set up. It is recommended to download and install SQL Server Management Studio as well: ",Object(o.b)("a",{parentName:"p",href:"https://docs.microsoft.com/en-gb/sql/ssms/download-sql-server-management-studio-ssms?view=sql-server-ver15"},"https://docs.microsoft.com/en-gb/sql/ssms/download-sql-server-management-studio-ssms?view=sql-server-ver15")))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"- Microsoft Sharepoint Server installation:")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"You can download and install Sharepoint Server 2019 here: ",Object(o.b)("a",{parentName:"p",href:"https://www.microsoft.com/en-us/download/details.aspx?id=57462"},"https://www.microsoft.com/en-us/download/details.aspx?id=57462"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Additional reading:"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://spdocs.blob.core.windows.net/preview/SharePoint%20Server%202019%20Quick%20Start%20Guide.pdf"},"SharePoint Server 2019 Quick Start Guide.pdf")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://andreasglaser.com/blog/install-sharepoint-2019"},"Install SharePoint 2019 - Step by Step"))))),Object(o.b)("ol",{start:2},Object(o.b)("li",{parentName:"ol"},"Setting up Sharepoing Configurtion.")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Launch ",Object(o.b)("strong",{parentName:"li"},"Sharepoint Product Configuration Wizard")," from start menu and attempt to set up, with the Server Database and the User account you set up in the previous step,")),Object(o.b)("p",null,Object(o.b)("img",{alt:"step 2",src:r(320).default})),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"If you don't have a AD Domain Services set up in your Server, then you will get the above error message. We need to set it up first before continuing Sharepoint configuration.")),Object(o.b)("ol",{start:3},Object(o.b)("li",{parentName:"ol"},"Enable Active Directory (AD) Domain Services")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"We need to enable a server level feature, the AD Domain Services, in your Server. Go to ",Object(o.b)("strong",{parentName:"li"},"Server Manager")," \u2192 Dashboard \u2192 Quick Start \u2192 Configure this local server \u2192 click on Add roles and features option and move ahead in the Wizard as follows,")),Object(o.b)("p",null,Object(o.b)("img",{alt:"step 3",src:r(321).default})),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"In the ",Object(o.b)("strong",{parentName:"li"},"Server Roles")," \u2192 select ",Object(o.b)("strong",{parentName:"li"},"Active Directory Domain Services"))),Object(o.b)("p",null,Object(o.b)("img",{alt:"step 3",src:r(322).default})),Object(o.b)("ol",{start:4},Object(o.b)("li",{parentName:"ol"},"Promote the new Server to a Domain Controller.")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Next go to AD DS \u2192 under ",Object(o.b)("strong",{parentName:"p"},"SERVERS")," list select the the new server")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Select under ",Object(o.b)("strong",{parentName:"p"},"Action")," column \u2192 click on ",Object(o.b)("strong",{parentName:"p"},"Promote this server to a domain controller")," "))),Object(o.b)("p",null,Object(o.b)("img",{alt:"step 4",src:r(323).default})),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"In the Deployment Configuration \u2192 select ",Object(o.b)("strong",{parentName:"li"},"Add a new forest")," \u2192 Provide a Root domain name ")),Object(o.b)("p",null,Object(o.b)("img",{alt:"step 4",src:r(324).default})),Object(o.b)("ol",{start:5},Object(o.b)("li",{parentName:"ol"},"Configure Active Direction Domain Service.")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Provide a password to proceed ahead.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"At the end of the configuration set up the server will restart. Then after the restart there will be a long process of setting up Group Police Client, which we should wait for it to finish itself. Once all finished, you will see AD DS up and live,"))),Object(o.b)("p",null,Object(o.b)("img",{alt:"step 5",src:r(325).default})),Object(o.b)("ol",{start:6},Object(o.b)("li",{parentName:"ol"},"Relaunch Sharepoint Product Configuration Wizard and finish set up.")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Let\u2019s re-launch Sharepoint Product Configuration Wizard from Windows start menu and proceed ahead,")),Object(o.b)("p",null,Object(o.b)("img",{alt:"step 6",src:r(326).default})),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"You should be able to proceed ahead with the Database configuration and User account information,")),Object(o.b)("p",null,Object(o.b)("img",{alt:"step 6",src:r(327).default})),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Proceed ahead with the configuration, which might take a while to complete.")),Object(o.b)("p",null,Object(o.b)("img",{alt:"step 6",src:r(328).default})),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Once completed, you should be able to see ",Object(o.b)("strong",{parentName:"li"},"Sharepoint 2019 Central Administration")," enabled in Windows start menu, which you can use to launch your Sharepoint instance as follows,")),Object(o.b)("p",null,Object(o.b)("img",{alt:"step 6",src:r(329).default})),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"That should lead you to Completed set up of Sharepoint 2019 in your VM.")))}u.isMDXComponent=!0},115:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return d}));var a=r(0),n=r.n(a);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=n.a.createContext({}),u=function(e){var t=n.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},b=function(e){var t=u(e.components);return n.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),b=u(r),m=a,d=b["".concat(l,".").concat(m)]||b[m]||p[m]||o;return r?n.a.createElement(d,s(s({ref:t},c),{},{components:r})):n.a.createElement(d,s({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var c=2;c<o;c++)l[c]=r[c];return n.a.createElement.apply(null,l)}return n.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},320:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/manual-install-1-e90048adbfc279e243eab257b0f1f0e5.png"},321:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/manual-install-2-98ee272018855114dadae15df449448b.png"},322:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/manual-install-3-e09ba42b713cbb61e10f32325eb81c95.png"},323:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/manual-install-4-b652b0d216a11d9126de5b5fd8318343.png"},324:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/manual-install-5-5c0659d0e4cd20924bdae2d962310bd2.png"},325:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/manual-install-6-a56dad2fbb8ea725d37340b567ac43bd.png"},326:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/manual-install-7-214aae948f0ff6a1f63ed89acdd31d2f.png"},327:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/manual-install-8-461c0862bec052ba08a46fb9caf4354b.png"},328:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/manual-install-9-6c7745b4b859e5cbb732cf85906146d0.png"},329:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/manual-install-10-d3273634c7346acc113a52b16ce7422f.png"}}]);