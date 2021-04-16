(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{109:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/files/SharePoint-Server-Installation-9cccde0d6b5c0c688cc9733608cf782b.mp4"},183:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/install-1-426d6be2a81f9aca13d4abb082046730.png"},184:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/install-2-bcc3e349c9c927427af629904c513af9.png"},185:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/install-3-c1180dc3807c2385ed3d31b657b58992.png"},186:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/install-4-6187af485388e7cbea79cd7a58ea291c.png"},187:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/install-5-1f997ac4abf166ab8b246f380b637c15.png"},188:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/SP-onpremInst-7b1488fb5589b1eec67abfe2b6fe9dff.png"},77:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return b}));var a=n(2),l=n(6),r=(n(0),n(91)),i={title:"SharePoint Server - Solution Deployment",sidebar_label:"SharePoint Server - Solution Deployment"},o={unversionedId:"products/sharepoint plugin/server/sharepoint-server-solution-deployment",id:"products/sharepoint plugin/server/sharepoint-server-solution-deployment",isDocsHomePage:!1,title:"SharePoint Server - Solution Deployment",description:"This section will outline how to go about installing Glasswall SharePoint solutions to your environment. Glasswall SharePoint solution is offered in 2 flavors. They are:",source:"@site/docs/products/sharepoint plugin/server/sharepoint-server-solution-deployment.md",slug:"/products/sharepoint plugin/server/sharepoint-server-solution-deployment",permalink:"/k8-proxy-documentation/docs/products/sharepoint plugin/server/sharepoint-server-solution-deployment",version:"current",sidebar_label:"SharePoint Server - Solution Deployment",sidebar:"docs",previous:{title:"Sharepoint Server Solution Administration",permalink:"/k8-proxy-documentation/docs/products/sharepoint plugin/server/sharepoint-server-solution-administration"},next:{title:"Sharepoint Online File Handler App Uninstall",permalink:"/k8-proxy-documentation/docs/products/sharepoint plugin/server/sharepoint-server-solution-uninstall"}},s=[{value:"Glasswall - SharePoint Server - Solution Deployment",id:"glasswall---sharepoint-server---solution-deployment",children:[{value:"Overview",id:"overview",children:[]},{value:"Installation Guide",id:"installation-guide",children:[]}]}],c={rightToc:s};function b(e){var t=e.components,i=Object(l.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},c,i,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"This section will outline how to go about installing Glasswall SharePoint solutions to your environment. Glasswall SharePoint solution is offered in 2 flavors. They are:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Glasswall - SharePoint Online - Solution")," - ",Object(r.b)("a",{parentName:"li",href:"../online/sharepoint-online-solution-deployment.md"},"link")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Glasswall - SharePoint Server - Solution"))),Object(r.b)("h2",{id:"glasswall---sharepoint-server---solution-deployment"},"Glasswall - SharePoint Server - Solution Deployment"),Object(r.b)("h3",{id:"overview"},"Overview"),Object(r.b)("p",null,"The Sharepoint Server plugin allows to delegate all download and uploads activities in the SharePoint User Interface to the GlassWall Rebuild engine. This keeps the all sharepoint documents safe."),Object(r.b)("h3",{id:"installation-guide"},"Installation Guide"),Object(r.b)("h4",{id:"introduction"},"Introduction"),Object(r.b)("p",null,"This document provides the step-by-step installation guide. This installation procedure is for only SharePoint 2019 On Prem. The installation of Glasswall.FileHandler.wsp will activate several Feature within the SharePoint web and Central Administration. Below are the changes:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Web Application level Feature Activation.\n",Object(r.b)("img",{src:n(183).default}))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Central Administration Feature for Custom Settings\n",Object(r.b)("img",{src:n(184).default}))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Web level document library Event Receiver\n",Object(r.b)("img",{src:n(185).default})))),Object(r.b)("h4",{id:"download-software"},"Download Software"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Go to ",Object(r.b)("strong",{parentName:"li"},"GW GitHub Releases")," page: ",Object(r.b)("a",{parentName:"li",href:"https://github.com/k8-proxy/gp-sharepoint-plugins/releases"},"https://github.com/k8-proxy/gp-sharepoint-plugins/releases"),"."),Object(r.b)("li",{parentName:"ol"},"Download the latest release of ",Object(r.b)("strong",{parentName:"li"},"GW SP Server Solution")," - ",Object(r.b)("strong",{parentName:"li"},"GWSharePointSolution.zip"),"."),Object(r.b)("li",{parentName:"ol"},"Unzip to a local folder. You will find a package ",Object(r.b)("strong",{parentName:"li"},"Glasswall.FileHandler.wsp")," which needs to be deployed. You will also find install & removal PowerShell scripts which can be used.")),Object(r.b)("h4",{id:"installation-files"},"Installation Files"),Object(r.b)("p",null,"The zip file GWSharePointSolution.zip contains below files for the installation"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Glasswall.FileHandler.wsp"),Object(r.b)("li",{parentName:"ol"},"InstallFileHandler.ps1"),Object(r.b)("li",{parentName:"ol"},"RemoveFileHandler.ps1")),Object(r.b)("h4",{id:"installation-steps"},"Installation Steps"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"RDP / Login to the SharePoint Server where the Central Administration is installed. In the multiple server farm environment login to the Application Server. The account used to login should be the farm Admin account and have local server administrator."),Object(r.b)("li",{parentName:"ol"},"Copy the Glasswall release folder content to the server local folder. Ex: Downloads folder"),Object(r.b)("li",{parentName:"ol"},"With Administrator privileges, click on Start->Microsoft SharePoint 2019 Products->SharePoint 2019 Management Shell. This will open the PowerShell terminal for SharePoint 2019")),Object(r.b)("p",null,Object(r.b)("img",{src:n(186).default})),Object(r.b)("p",null,Object(r.b)("img",{src:n(187).default})),Object(r.b)("ol",{start:4},Object(r.b)("li",{parentName:"ol"},"In the command prompt navigate to the the location of the Glasswall release folder.")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"Ex: cd C:\\Users\\USERNAME\\Downloads\\Glasswall.FileHandler\n")),Object(r.b)("ol",{start:5},Object(r.b)("li",{parentName:"ol"},"Type the file name ",Object(r.b)("inlineCode",{parentName:"li"},"InstallFileHandler.ps1 <path of Glasswall.FileHandler.wsp>"),"  and press enter to install the wsp. This command will install and activate all the features.")),Object(r.b)("p",null,Object(r.b)("img",{src:n(188).default})),Object(r.b)("ol",{start:6},Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"If the error 'PSSECURITYEXCEPTION' occurs, then do as below:"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"With PowerShell, run ",Object(r.b)("inlineCode",{parentName:"li"},"Get-ExecutionPolicy")," and inssure that it is set correctly (not Restrected or Reserved). "),Object(r.b)("li",{parentName:"ul"},"Use Bypass to bypass the policy to get things installed or AllSigned for quite a bit more secure. Run ",Object(r.b)("inlineCode",{parentName:"li"},"Set-ExecutionPolicy AllSigned")," and/or ",Object(r.b)("inlineCode",{parentName:"li"},"Set-ExecutionPolicy Bypass -Scope Process"),"."),Object(r.b)("li",{parentName:"ul"},"Click ",Object(r.b)("a",{parentName:"li",href:"https://go.microsoft.com/fwlink/?LinkID=135170"},"here")," for more information."))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"After successful installation, the features will be activated."))),Object(r.b)("h4",{id:"configuration"},"Configuration"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Navigate to Central Administration Site of your SharePoint by navigating to Start->Microsoft SharePoint 2019 Products->SharePoint 2019 Central Administration.",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Note: If ",Object(r.b)("strong",{parentName:"li"},"Central Administration")," cannot be started, make sure that SQL Server is running (navigate to Start > search for Services and in the list of services search the ones starting with SQL. Make sure they all have ",Object(r.b)("strong",{parentName:"li"},"running")," status)."),Object(r.b)("li",{parentName:"ul"},"Starting ",Object(r.b)("strong",{parentName:"li"},"Central Administration")," will open your Browser and load ",Object(r.b)("inlineCode",{parentName:"li"},"http://sps2019-plugin/")," URL"))),Object(r.b)("li",{parentName:"ol"},"Once page is loaded, new section, in left bar menu, will be created called ",Object(r.b)("strong",{parentName:"li"},"Glasswall"),". Click on Glasswall section."),Object(r.b)("li",{parentName:"ol"},"Set the Glasswall Rebuild API URL & Access Key. ")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"NOTE: Add ",Object(r.b)("inlineCode",{parentName:"li"},"/Rebuild/base64")," in the end of the provided Glasswall Rebuild API URL")),Object(r.b)("ol",{start:5},Object(r.b)("li",{parentName:"ol"},"Save the configuration.")),Object(r.b)("h4",{id:"verify-solution"},"Verify Solution"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Navigate to your OnPrem Server SharePoint site/subsite/shared directory or oneDrive"),Object(r.b)("li",{parentName:"ol"},"Open any Document Library."),Object(r.b)("li",{parentName:"ol"},"Select any file. "),Object(r.b)("li",{parentName:"ol"},"Download the file."),Object(r.b)("li",{parentName:"ol"},"The downloaded file will be rebuilt by Glasswall."),Object(r.b)("li",{parentName:"ol"},"You can verify that file got rebuild by uploading file to ",Object(r.b)("inlineCode",{parentName:"li"},"http://file-drop.co.uk"))),Object(r.b)("h4",{id:"supported-browsers"},"Supported Browsers"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Edge, Chrome, Firefox, Brave, Opera (Mac & Windows)"),Object(r.b)("li",{parentName:"ul"},"Safari (Mac)")),Object(r.b)("h4",{id:"repository"},"Repository"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"SharePoint Server - Solution : ",Object(r.b)("a",{parentName:"li",href:"https://github.com/k8-proxy/gp-sharepoint-plugins/tree/main/Server/src"},"https://github.com/k8-proxy/gp-sharepoint-plugins/tree/main/Server/src"))),Object(r.b)("h4",{id:"resources"},"Resources"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("a",{parentName:"p",href:"https://github.com/k8-proxy/gp-sharepoint-plugins/blob/main/Server/doc/SharePointCloudPlugin-v1.pdf"},"Plugin Brochure"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("a",{target:"_blank",href:n(109).default},"Watch the video")))))}b.isMDXComponent=!0},91:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),l=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var c=l.a.createContext({}),b=function(e){var t=l.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=b(e.components);return l.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},d=l.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=b(n),d=a,m=p["".concat(i,".").concat(d)]||p[d]||u[d]||r;return n?l.a.createElement(m,o(o({ref:t},c),{},{components:n})):l.a.createElement(m,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var c=2;c<r;c++)i[c]=n[c];return l.a.createElement.apply(null,i)}return l.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);