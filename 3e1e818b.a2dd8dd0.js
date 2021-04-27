(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{159:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/manual-install-1-e90048adbfc279e243eab257b0f1f0e5.png"},160:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/manual-install-2-98ee272018855114dadae15df449448b.png"},161:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/manual-install-3-e09ba42b713cbb61e10f32325eb81c95.png"},162:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/manual-install-4-b652b0d216a11d9126de5b5fd8318343.png"},163:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/manual-install-5-5c0659d0e4cd20924bdae2d962310bd2.png"},164:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/manual-install-6-a56dad2fbb8ea725d37340b567ac43bd.png"},165:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/manual-install-7-214aae948f0ff6a1f63ed89acdd31d2f.png"},166:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/manual-install-8-461c0862bec052ba08a46fb9caf4354b.png"},167:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/manual-install-9-6c7745b4b859e5cbb732cf85906146d0.png"},168:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/manual-install-10-d3273634c7346acc113a52b16ce7422f.png"},169:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/manual-install-11-4e25a4c8725d62ec911d39913f628fed.png"},170:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/manual-install-12-428a918a1ba33efa208a333e6b9286b9.png"},171:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/manual-install-13-e71dbc73bd08f3c8cefc3778f2d54cf3.png"},172:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/manual-install-14-2042de71929fd1fabdab5e462acb1b26.png"},69:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return o})),a.d(t,"default",(function(){return u}));var n=a(2),r=a(6),l=(a(0),a(98)),s={title:"Sharepoint Server Manual Install",sidebar_label:"Sharepoint VM - Manual Install"},i={unversionedId:"products/sharepoint plugin/server/server-setup/2. sp-vm-manual-install",id:"products/sharepoint plugin/server/server-setup/2. sp-vm-manual-install",isDocsHomePage:!1,title:"Sharepoint Server Manual Install",description:"General info",source:"@site/docs/products/sharepoint plugin/server/server-setup/2. sp-vm-manual-install.md",slug:"/products/sharepoint plugin/server/server-setup/2. sp-vm-manual-install",permalink:"/k8-proxy-documentation/docs/products/sharepoint plugin/server/server-setup/2. sp-vm-manual-install",version:"current",sidebar_label:"Sharepoint VM - Manual Install",sidebar:"docs",previous:{title:"Sharepoint Server VM Setup Overview",permalink:"/k8-proxy-documentation/docs/products/sharepoint plugin/server/server-setup/1. overview"},next:{title:"Sharepoint Server OVA",permalink:"/k8-proxy-documentation/docs/products/sharepoint plugin/server/server-setup/3. sp-vhd-to-ova"}},o=[{value:"Steps",id:"steps",children:[]}],c={rightToc:o};function u(e){var t=e.components,s=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},c,s,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h1",{id:"general-info"},"General info"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Version: Sharepoint 2019"),Object(l.b)("li",{parentName:"ul"},"Topology: Single Server Farm"),Object(l.b)("li",{parentName:"ul"},"Target: Azure VM")),Object(l.b)("h2",{id:"steps"},"Steps"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"Basic System set up:")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"It is recommended to go through Microsoft docs prior to installing Sharepoint Server 2019: ",Object(l.b)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/sharepoint/install/install-sharepoint-server-2016-on-one-server"},"https://docs.microsoft.com/en-us/sharepoint/install/install-sharepoint-server-2016-on-one-server"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Make sure your System is Windows Server 2016 or later, if not you need to  install Windows Server 2019 first: ",Object(l.b)("a",{parentName:"p",href:"https://www.microsoft.com/en-us/evalcenter/evaluate-windows-server-2019"},"https://www.microsoft.com/en-us/evalcenter/evaluate-windows-server-2019")))),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"- Microsoft SQL Server set up:")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Sharepoint requires Microsoft SQL Server set up in the system, you can download and install SQL Server 2017 from here: ",Object(l.b)("a",{parentName:"p",href:"https://www.microsoft.com/en-us/evalcenter/evaluate-sql-server-2017-rtm"},"https://www.microsoft.com/en-us/evalcenter/evaluate-sql-server-2017-rtm"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"During installation, make sure to set up a User account to access the MSSQL Database instance. It is recommended to keep a note on the Database Server name and User account details for later use during Sharepoint set up. It is recommended to download and install SQL Server Management Studio as well: ",Object(l.b)("a",{parentName:"p",href:"https://docs.microsoft.com/en-gb/sql/ssms/download-sql-server-management-studio-ssms?view=sql-server-ver15"},"https://docs.microsoft.com/en-gb/sql/ssms/download-sql-server-management-studio-ssms?view=sql-server-ver15")))),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"- Microsoft Sharepoint Server installation:")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"You can download and install Sharepoint Server 2019 here: ",Object(l.b)("a",{parentName:"p",href:"https://www.microsoft.com/en-us/download/details.aspx?id=57462"},"https://www.microsoft.com/en-us/download/details.aspx?id=57462"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Additional reading:"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://spdocs.blob.core.windows.net/preview/SharePoint%20Server%202019%20Quick%20Start%20Guide.pdf"},"SharePoint Server 2019 Quick Start Guide.pdf")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://andreasglaser.com/blog/install-sharepoint-2019"},"Install SharePoint 2019 - Step by Step"))))),Object(l.b)("ol",{start:2},Object(l.b)("li",{parentName:"ol"},"Setting up Sharepoing Configurtion.")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Launch ",Object(l.b)("strong",{parentName:"li"},"Sharepoint Product Configuration Wizard")," from start menu and attempt to set up, with the Server Database and the User account you set up in the previous step,")),Object(l.b)("p",null,Object(l.b)("img",{alt:"step 2",src:a(159).default})),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"If you don't have a AD Domain Services set up in your Server, then you will get the above error message. We need to set it up first before continuing Sharepoint configuration.")),Object(l.b)("ol",{start:3},Object(l.b)("li",{parentName:"ol"},"Enable Active Directory (AD) Domain Services")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"We need to enable a server level feature, the AD Domain Services, in your Server. Go to ",Object(l.b)("strong",{parentName:"li"},"Server Manager")," \u2192 Dashboard \u2192 Quick Start \u2192 Configure this local server \u2192 click on Add roles and features option and move ahead in the Wizard as follows,")),Object(l.b)("p",null,Object(l.b)("img",{alt:"step 3",src:a(160).default})),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"In the ",Object(l.b)("strong",{parentName:"li"},"Server Roles")," \u2192 select ",Object(l.b)("strong",{parentName:"li"},"Active Directory Domain Services"))),Object(l.b)("p",null,Object(l.b)("img",{alt:"step 3",src:a(161).default})),Object(l.b)("ol",{start:4},Object(l.b)("li",{parentName:"ol"},"Promote the new Server to a Domain Controller.")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Next go to AD DS \u2192 under ",Object(l.b)("strong",{parentName:"p"},"SERVERS")," list select the the new server")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Select under ",Object(l.b)("strong",{parentName:"p"},"Action")," column \u2192 click on ",Object(l.b)("strong",{parentName:"p"},"Promote this server to a domain controller")," "))),Object(l.b)("p",null,Object(l.b)("img",{alt:"step 4",src:a(162).default})),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"In the Deployment Configuration \u2192 select ",Object(l.b)("strong",{parentName:"li"},"Add a new forest")," \u2192 Provide a Root domain name ")),Object(l.b)("p",null,Object(l.b)("img",{alt:"step 4",src:a(163).default})),Object(l.b)("ol",{start:5},Object(l.b)("li",{parentName:"ol"},"Configure Active Direction Domain Service.")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Provide a password to proceed ahead.")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"At the end of the configuration set up the server will restart. Then after the restart there will be a long process of setting up Group Police Client, which we should wait for it to finish itself. Once all finished, you will see AD DS up and live,"))),Object(l.b)("p",null,Object(l.b)("img",{alt:"step 5",src:a(164).default})),Object(l.b)("ol",{start:6},Object(l.b)("li",{parentName:"ol"},"Relaunch Sharepoint Product Configuration Wizard and finish set up.")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Let\u2019s re-launch Sharepoint Product Configuration Wizard from Windows start menu and proceed ahead,")),Object(l.b)("p",null,Object(l.b)("img",{alt:"step 6",src:a(165).default})),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"You should be able to proceed ahead with the Database configuration and User account information,")),Object(l.b)("p",null,Object(l.b)("img",{alt:"step 6",src:a(166).default})),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Proceed ahead with the configuration, which might take a while to complete.")),Object(l.b)("p",null,Object(l.b)("img",{alt:"step 6",src:a(167).default})),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Once completed, you should be able to see ",Object(l.b)("strong",{parentName:"li"},"Sharepoint 2019 Central Administration")," enabled in Windows start menu, which you can use to launch your Sharepoint instance as follows,")),Object(l.b)("p",null,Object(l.b)("img",{alt:"step 6",src:a(168).default})),Object(l.b)("ol",{start:7},Object(l.b)("li",{parentName:"ol"},"Configure the Alternate Access Mapping")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"On SharePoint Server Central Administration, go to 'Central Admin > Application Management > Alternate Access Mappings > Edit Zone URL'",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Edit the Public Zone URLs:"))),Object(l.b)("li",{parentName:"ul"},"The default entry should be the system internal URL. The intranet entry should be the public IP.")),Object(l.b)("p",null,Object(l.b)("img",{alt:"step 7",src:a(169).default})),Object(l.b)("ol",{start:8},Object(l.b)("li",{parentName:"ol"},"Configure The SQL Server Service account to manage services")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"On the server, Follow the steps for 'Method 2' on this guide ",Object(l.b)("a",{parentName:"p",href:"https://social.technet.microsoft.com/wiki/contents/articles/5752.how-to-grant-users-rights-to-manage-services-start-stop-etc.aspx"},"How to Grant Users Rights to Manage Services"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Failing to do so will fail to start the SQL Server Service and Sharepoint will not work.")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"You can verify the SQL Server is started by either:")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Opening to the windows service snap in and check the status"))),Object(l.b)("p",null,Object(l.b)("img",{alt:"step 8",src:a(170).default})),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Opening the sql server management app")),Object(l.b)("p",null,Object(l.b)("img",{alt:"step 8",src:a(171).default})),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Check the Sql Server Service status")),Object(l.b)("p",null,Object(l.b)("img",{alt:"step 8",src:a(172).default})),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"That should lead you to Completed set up of Sharepoint 2019 in your VM.")))}u.isMDXComponent=!0},98:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=r.a.createContext({}),u=function(e){var t=r.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},b=function(e){var t=u(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),b=u(a),m=n,d=b["".concat(s,".").concat(m)]||b[m]||p[m]||l;return a?r.a.createElement(d,i(i({ref:t},c),{},{components:a})):r.a.createElement(d,i({ref:t},c))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,s=new Array(l);s[0]=m;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var c=2;c<l;c++)s[c]=a[c];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);