(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{101:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return m}));var n=a(0),l=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=l.a.createContext({}),c=function(e){var t=l.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},b=function(e){var t=c(e.components);return l.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},d=l.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,r=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),b=c(a),d=n,m=b["".concat(r,".").concat(d)]||b[d]||u[d]||o;return a?l.a.createElement(m,i(i({ref:t},s),{},{components:a})):l.a.createElement(m,i({ref:t},s))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,r=new Array(o);r[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,r[1]=i;for(var s=2;s<o;s++)r[s]=a[s];return l.a.createElement.apply(null,r)}return l.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},87:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return p})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return b}));var n=a(2),l=a(6),o=(a(0),a(101)),r=["components"],i={title:"Sharepoint Online Solution Deployment",sidebar_label:"Sharepoint Online Solution Deployment"},p={unversionedId:"products/sharepoint plugin/online/sharepoint-online-solution-deployment",id:"products/sharepoint plugin/online/sharepoint-online-solution-deployment",isDocsHomePage:!1,title:"Sharepoint Online Solution Deployment",description:"This section will outline how to go about installing Glasswall SharePoint solutions to your environment. Glasswall SharePoint solution is offered in 2 flavors. They are:",source:"@site/docs/products/sharepoint plugin/online/sharepoint-online-solution-deployment.md",slug:"/products/sharepoint plugin/online/sharepoint-online-solution-deployment",permalink:"/k8-proxy-documentation/docs/products/sharepoint plugin/online/sharepoint-online-solution-deployment",version:"current",sidebar_label:"Sharepoint Online Solution Deployment",sidebar:"docs",previous:{title:"Sharepoint Online Solution Administration",permalink:"/k8-proxy-documentation/docs/products/sharepoint plugin/online/sharepoint-online-solution-administration"},next:{title:"Sharepoint Server VM Setup Overview",permalink:"/k8-proxy-documentation/docs/products/sharepoint plugin/server/server-setup/1. overview"}},s=[{value:"Glasswall - SharePoint Online - Solution Deployment",id:"glasswall---sharepoint-online---solution-deployment",children:[{value:"Prerequsites",id:"prerequsites",children:[]},{value:"GW SPO Extension Deployment",id:"gw-spo-extension-deployment",children:[]},{value:"GW FileHandler Web App Deployment",id:"gw-filehandler-web-app-deployment",children:[]}]}],c={rightToc:s};function b(e){var t=e.components,a=Object(l.a)(e,r);return Object(o.b)("wrapper",Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This section will outline how to go about installing Glasswall SharePoint solutions to your environment. Glasswall SharePoint solution is offered in 2 flavors. They are:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Glasswall - SharePoint Online - Solution")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Glasswall - SharePoint Server - Solution")," - ",Object(o.b)("a",{parentName:"li",href:"https://k8-proxy.github.io/k8-proxy-documentation/docs/products/sharepoint%20plugin/server/sharepoint-server-solution-deployment"},"link"))),Object(o.b)("h2",{id:"glasswall---sharepoint-online---solution-deployment"},"Glasswall - SharePoint Online - Solution Deployment"),Object(o.b)("p",null,"GW SPO solution consists of the following components:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"GW SPO Extension")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"GW FileHandler Web App"))),Object(o.b)("p",null,"Both components need to be deployed to your environments (M365 + Azure) as described below."),Object(o.b)("h3",{id:"prerequsites"},"Prerequsites"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"You have setup your Microsoft account (M365 + Azure)."),Object(o.b)("li",{parentName:"ul"},"You have setup ",Object(o.b)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/azure/cost-management-billing/manage/create-subscription"},"Azure subscription"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Note"),": You can use 30-day free trial option by setting up account following ",Object(o.b)("a",{parentName:"li",href:"https://signup.microsoft.com/Signup?OfferId=B07A1127-DE83-4a6d-9F85-2C104BDAE8B4&dl=ENTERPRISEPACK&culture=en-US&country=US&ali=1"},"steps"),". This will setup both Sharepoint and Azure account, accessible on:",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Sharepoint"),": ",Object(o.b)("inlineCode",{parentName:"li"},"https://<yourTenant>.sharepoint.com/")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Azure"),": ",Object(o.b)("inlineCode",{parentName:"li"},"https://portal.azure.com/"))))),Object(o.b)("h3",{id:"gw-spo-extension-deployment"},"GW SPO Extension Deployment"),Object(o.b)("p",null,"Following are the steps to deploy GW SPO Extension:"),Object(o.b)("h4",{id:"1-download-software"},"1. Download Software"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Go to ",Object(o.b)("strong",{parentName:"li"},"GW GitHub Releases")," page: ",Object(o.b)("a",{parentName:"li",href:"https://github.com/k8-proxy/gp-sharepoint-plugins/releases"},"https://github.com/k8-proxy/gp-sharepoint-plugins/releases"),"."),Object(o.b)("li",{parentName:"ol"},"Download the latest release of ",Object(o.b)("strong",{parentName:"li"},"GW SPO Extension")," - ",Object(o.b)("strong",{parentName:"li"},"GWO365FileHandlerExtension.zip"),"."),Object(o.b)("li",{parentName:"ol"},'Unzip to a local folder. You will find a package "glasswall-hide-download-ext.sppkg" which needs to be deployed.')),Object(o.b)("h4",{id:"2-create-app-catalog-site"},"2. Create App Catalog Site"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Go to the ",Object(o.b)("strong",{parentName:"li"},"SharePoint Admin Center")," by entering the following URL in your browser: ",Object(o.b)("strong",{parentName:"li"},"https://{tenant}-admin.sharepoint.com"),", where {tenant} is string next to your domain (ex. ",Object(o.b)("inlineCode",{parentName:"li"},"glasswall@share.onmicrosoft.com"),", {tenant} is ",Object(o.b)("inlineCode",{parentName:"li"},"share"),")"),Object(o.b)("li",{parentName:"ol"},"In the left sidebar, select ",Object(o.b)("strong",{parentName:"li"},"More features"),"."),Object(o.b)("li",{parentName:"ol"},"Locate the section ",Object(o.b)("strong",{parentName:"li"},"Apps")," and select ",Object(o.b)("strong",{parentName:"li"},"Open"),"."),Object(o.b)("li",{parentName:"ol"},"On the ",Object(o.b)("strong",{parentName:"li"},"Apps")," page, select ",Object(o.b)("strong",{parentName:"li"},"App Catalog"),"."),Object(o.b)("li",{parentName:"ol"},"Select ",Object(o.b)("strong",{parentName:"li"},"OK")," to create a new app catalog site."),Object(o.b)("li",{parentName:"ol"},"On the next page, enter the following details:"),Object(o.b)("li",{parentName:"ol"},Object(o.b)("strong",{parentName:"li"},"Title"),": Enter ",Object(o.b)("strong",{parentName:"li"},"App Catalog"),"."),Object(o.b)("li",{parentName:"ol"},Object(o.b)("strong",{parentName:"li"},"Web Site Address suffix"),": Enter your preferred suffix (at the empty field at the end of the line) for the app catalog; for example: ",Object(o.b)("strong",{parentName:"li"},"apps"),"."),Object(o.b)("li",{parentName:"ol"},Object(o.b)("strong",{parentName:"li"},"Administrator"),": Enter your ",Object(o.b)("strong",{parentName:"li"},"username"),", and then select to ",Object(o.b)("strong",{parentName:"li"},"Check Names")," and resolve the username."),Object(o.b)("li",{parentName:"ol"},"Select ",Object(o.b)("strong",{parentName:"li"},"OK")," to create the app catalog site."),Object(o.b)("li",{parentName:"ol"},"SharePoint creates the app catalog site, and you can see its progress in the SharePoint admin center."),Object(o.b)("li",{parentName:"ol"},"Click ",Object(o.b)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/sharepoint/dev/spfx/set-up-your-developer-tenant#create-app-catalog-site"},"here")," for more info.")),Object(o.b)("h4",{id:"3-deploy-package-to-app-catalog-site"},"3. Deploy Package to App Catalog Site"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Open your tenant's ",Object(o.b)("strong",{parentName:"li"},"app catalog site")," (i.e. https://{tenant}.sharepoint.com/sites/apps)."),Object(o.b)("li",{parentName:"ol"},"Click on ",Object(o.b)("strong",{parentName:"li"},"Apps for SharePoint")," on Left Navigation Menu."),Object(o.b)("li",{parentName:"ol"},"Click on ",Object(o.b)("strong",{parentName:"li"},"Upload"),". Browse and select ",Object(o.b)("strong",{parentName:"li"},"glasswall-hide-download-ext.sppkg")," package downloaded at earlier step from your local drive."),Object(o.b)("li",{parentName:"ol"},"Check ",Object(o.b)("strong",{parentName:"li"},"Make this solution available to all sites in the organization")," and click on ",Object(o.b)("strong",{parentName:"li"},"Deploy")," to deploy the solution tenant-wide."),Object(o.b)("li",{parentName:"ol"},"Verify deployment ended without any issues (check the last column in the table on the current page). In case there were errors, delete uploaded package and try again.")),Object(o.b)("h4",{id:"4-verify-solution"},"4. Verify Solution"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Navigate to SharePoint Online (O365) Site."),Object(o.b)("li",{parentName:"ol"},"Open any Document Library (make sure you have some files uploaded there)."),Object(o.b)("li",{parentName:"ol"},"Select any file (click on the checkbox) and then in the toolbar, you will not see the default 'Download' button anymore.")),Object(o.b)("h4",{id:"repository"},"Repository"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"GW SPO Extension: ",Object(o.b)("a",{parentName:"li",href:"https://github.com/k8-proxy/gp-sharepoint-plugins/tree/main/Online/glasswall-hide-download-ext"},"https://github.com/k8-proxy/gp-sharepoint-plugins/tree/main/Online/glasswall-hide-download-ext"),"  ")),Object(o.b)("h3",{id:"gw-filehandler-web-app-deployment"},"GW FileHandler Web App Deployment"),Object(o.b)("p",null,"Following are the steps to deploy GW FileHandler web app:"),Object(o.b)("h4",{id:"1-download-software-1"},"1. Download Software"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Go to GW GitHub releases page: ",Object(o.b)("a",{parentName:"li",href:"https://github.com/k8-proxy/gp-sharepoint-plugins/releases"},"https://github.com/k8-proxy/gp-sharepoint-plugins/releases"),"."),Object(o.b)("li",{parentName:"ol"},"Download the latest release of GW FileHandler web app - GWO365FileHandlerWebApp.zip."),Object(o.b)("li",{parentName:"ol"},"Unzip to a local folder. ")),Object(o.b)("h4",{id:"2-create-filehandler-web-app"},"2. Create FileHandler Web App"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Go to your ",Object(o.b)("a",{parentName:"li",href:"https://portal.azure.com/"},"Azure Portal"),"."),Object(o.b)("li",{parentName:"ol"},"Create a resource group. For r.g. rg-glasswallfilehandler-prod"),Object(o.b)("li",{parentName:"ol"},"Create a new web app with appropriate plan by selecting resource group created in step 2, clicking on ",Object(o.b)("inlineCode",{parentName:"li"},"Add")," button in top toolbar and selecting ",Object(o.b)("inlineCode",{parentName:"li"},"Web App")," from the list."),Object(o.b)("li",{parentName:"ol"},"For runtime stack choose ",Object(o.b)("inlineCode",{parentName:"li"},".Net 5")),Object(o.b)("li",{parentName:"ol"},"Carefully select proper plan. For test, you can go with ",Object(o.b)("inlineCode",{parentName:"li"},"Free sku and size"),", last option."),Object(o.b)("li",{parentName:"ol"},"Example name for web app can be: ",Object(o.b)("strong",{parentName:"li"},"app-glasswallfilehandler-prod"),". Once the web app is created, make a note of the URI. For e.g. ",Object(o.b)("a",{parentName:"li",href:"https://app-glasswallfilehandler-prod.azurewebsites.net"},"https://app-glasswallfilehandler-prod.azurewebsites.net"))),Object(o.b)("h4",{id:"3-register-a-new-application"},"3. Register a new application"),Object(o.b)("p",null,"The following steps will allow you to register your file handler application.\nTo register a new application with Azure Active Directory, log into your ",Object(o.b)("a",{parentName:"p",href:"https://portal.azure.com"},Object(o.b)("strong",{parentName:"a"},"Azure Portal")),"."),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Navigate to the ",Object(o.b)("strong",{parentName:"li"},"Azure Active Directory")," module."),Object(o.b)("li",{parentName:"ol"},"Select ",Object(o.b)("strong",{parentName:"li"},"App registrations")," and click ",Object(o.b)("strong",{parentName:"li"},"New application registration"),".",Object(o.b)("ol",{parentName:"li"},Object(o.b)("li",{parentName:"ol"},"Type the name of your file handler application. For e.g. ",Object(o.b)("strong",{parentName:"li"},"GlasswallFileHandlerApp")),Object(o.b)("li",{parentName:"ol"},"Ensure ",Object(o.b)("strong",{parentName:"li"},"Application Type")," is set to ",Object(o.b)("strong",{parentName:"li"},"Web app / API")),Object(o.b)("li",{parentName:"ol"},"Enter a sign-on URL for your application. This will be ",Object(o.b)("inlineCode",{parentName:"li"},"https://app-glasswallfilehandler-prod.azurewebsites.net"),"."),Object(o.b)("li",{parentName:"ol"},"Click ",Object(o.b)("strong",{parentName:"li"},"Create")," to create the app."))),Object(o.b)("li",{parentName:"ol"},"After the app has been created successfully, from Azure Active Directory, left side menu choose ",Object(o.b)("strong",{parentName:"li"},"App registrations")," and select the app (created in step 2) from the list of applications."),Object(o.b)("li",{parentName:"ol"},"Make a note of ",Object(o.b)("strong",{parentName:"li"},"Application ID")," for the app you registered. "),Object(o.b)("li",{parentName:"ol"},"Make a note of the ",Object(o.b)("strong",{parentName:"li"},"Object ID")," for this application, since you will need this later to register the file handler manifest."),Object(o.b)("li",{parentName:"ol"},"Configure the application settings for this sample:",Object(o.b)("ol",{parentName:"li"},Object(o.b)("li",{parentName:"ol"},"Select ",Object(o.b)("strong",{parentName:"li"},"Authentication")," from left bar, choose to ",Object(o.b)("strong",{parentName:"li"},"Add platform"),", select ",Object(o.b)("strong",{parentName:"li"},"web")," and add ",Object(o.b)("strong",{parentName:"li"},"Redirect URIs")," as the one setup in 2.3 (e.g. ",Object(o.b)("inlineCode",{parentName:"li"},"https://app-glasswallfilehandler-prod.azurewebsites.net/signin-oidc"),") is added."),Object(o.b)("li",{parentName:"ol"},"Select ",Object(o.b)("strong",{parentName:"li"},"API Permissions"),", click to ",Object(o.b)("strong",{parentName:"li"},"Add a permission"),", choose ",Object(o.b)("strong",{parentName:"li"},"Microsoft Graph")," and select ",Object(o.b)("strong",{parentName:"li"},"Deligated permissions"),". Under ",Object(o.b)("strong",{parentName:"li"},"Files")," find the permission ",Object(o.b)("strong",{parentName:"li"},"Have full access to all files user can access")," and check the box next to it, then click ",Object(o.b)("strong",{parentName:"li"},"Select"),", and then ",Object(o.b)("strong",{parentName:"li"},"Done"),"."),Object(o.b)("li",{parentName:"ol"},"Under ",Object(o.b)("strong",{parentName:"li"},"API Permissions"),", click ",Object(o.b)("strong",{parentName:"li"},"Grant Admin Consent")," button, to grant access for above permission."),Object(o.b)("li",{parentName:"ol"},"Select ",Object(o.b)("strong",{parentName:"li"},"Ceriticates and Secrets")," and choose to add ",Object(o.b)("strong",{parentName:"li"},"New Client Secret")," by entering a description for the key, selecting a duration, and then click ",Object(o.b)("strong",{parentName:"li"},"Save"),". Make a note of the ",Object(o.b)("inlineCode",{parentName:"li"},"Client Value")," and ",Object(o.b)("inlineCode",{parentName:"li"},"Client ID")," displayed, since it will only be displayed once."))),Object(o.b)("li",{parentName:"ol"},"From Azure Active Directory, left side menu choose ",Object(o.b)("strong",{parentName:"li"},"Enterprise application")," and select the app (created in step 2) from the list of applications.",Object(o.b)("ol",{parentName:"li"},Object(o.b)("li",{parentName:"ol"},"From the left side menu select ",Object(o.b)("strong",{parentName:"li"},"Properties")),Object(o.b)("li",{parentName:"ol"},"Set ",Object(o.b)("strong",{parentName:"li"},"Enabled for users to sign-in?")," to ",Object(o.b)("inlineCode",{parentName:"li"},"Yes")),Object(o.b)("li",{parentName:"ol"},"Set ",Object(o.b)("strong",{parentName:"li"},"Visible to users?")," to ",Object(o.b)("inlineCode",{parentName:"li"},"Yes")),Object(o.b)("li",{parentName:"ol"},"Click ",Object(o.b)("strong",{parentName:"li"},"Save")," in top bar menu")))),Object(o.b)("h4",{id:"4-register-the-file-handler-manifest"},"4. Register the file handler manifest"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"After registering your app with Azure Active Directory, you can upload the file handler manifest information into the application.")),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Select ",Object(o.b)("strong",{parentName:"li"},"Manifest")," from left menu"),Object(o.b)("li",{parentName:"ol"},"In displayed editor under ",Object(o.b)("strong",{parentName:"li"},"Addins")," add below file handler manifest (make sure to change url to correspond to the one you added and add new ID by generating random GUID) and Save")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},'[\n    {\n        "id": "<Enter New GUID here>",\n        "type": "FileHandler",\n        "properties": [\n            { "key": "version","value": "2"},\n            { "key": "appIcon", "value": "{\\"svg\\":\\"<Enter application icon here>\\" }"},\n            { "key": "actions", "value": "[{\\"type\\":\\"custom\\",\\"url\\":\\"https://app-glasswallfilehandler-prod.azurewebsites.net/filehandler/download\\",\\"displayName\\": \\"Download (Glasswall)\\",\\"shortDisplayName\\": \\"Download (Glasswall)\\", \\"availableOn\\":{\\"file\\":{\\"extensions\\":[\\"*\\"]}}}]"}\n        ]\n    }\n]\n')),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"For detailed instructions on how to upload the file handler manifest, see ",Object(o.b)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/onedrive/developer/file-handlers/register-manually"},"Registering file handlers"),".")),Object(o.b)("h4",{id:"5-update-filehandler-application-settings"},"5. Update FileHandler Application Settings"),Object(o.b)("p",null,"Following application settings of FileHandler web app configuration needs to be updated."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Navigate to ",Object(o.b)("strong",{parentName:"li"},"App Service")," and choose web app you created in previous steps. "),Object(o.b)("li",{parentName:"ul"},"Select ",Object(o.b)("strong",{parentName:"li"},"Configuration")," from left bar menu and click ",Object(o.b)("strong",{parentName:"li"},"New application settings")," button in top bar."),Object(o.b)("li",{parentName:"ul"},"Add below values (ex. ",Object(o.b)("inlineCode",{parentName:"li"},"Name")," is ",Object(o.b)("inlineCode",{parentName:"li"},"AzureAd:ClientId"),", ",Object(o.b)("inlineCode",{parentName:"li"},"Value")," is ",Object(o.b)("inlineCode",{parentName:"li"},"client ID from step 3.7"))),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"AzureAd:ClientId - Client Id of the App registered with Azure Active Directory "),Object(o.b)("li",{parentName:"ol"},"AzureAd:ClientSecret - Client Secret created in App registered with Azure Active Directory "),Object(o.b)("li",{parentName:"ol"},"AzureAd:Domain - Domain of your O365 subscription. For e.g. glasswall.onmicrosoft.com."),Object(o.b)("li",{parentName:"ol"},"AzureAd:TenantId - Tenant id of your Azure Active Directory tenant.  "),Object(o.b)("li",{parentName:"ol"},"Glasswall:BaseUrl - Base url of your Glasswall GW Cloud SDK endpoint. Make sure you are using valid URL."),Object(o.b)("li",{parentName:"ol"},"Glasswall:ApiKey - Api Key to access the Glasswall GW Cloud SDK (can be found ",Object(o.b)("a",{parentName:"li",href:"https://glasswall-store.com/products/glasswall-rebuild-cloud-in-shared-cloud-environment?variant=33739907006604"},"here"),").")),Object(o.b)("h4",{id:"6-deploy-filehandler-code"},"6. Deploy FileHandler Code"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Navigate to local folder where GWO365FileHandlerWebApp.zip was downloaded (from ",Object(o.b)("a",{parentName:"li",href:"https://github.com/k8-proxy/gp-sharepoint-plugins/releases"},"FileHandler release"),")."),Object(o.b)("li",{parentName:"ol"},"Make sure you have ",Object(o.b)("strong",{parentName:"li"},"az cli")," install on your workstation."),Object(o.b)("li",{parentName:"ol"},"Deploy the code to your Azure Web App by following instructions from ",Object(o.b)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/azure/app-service/deploy-run-package"},"here")," or based on example below (make sure to add corresponding values for resource-group, app name and path to fileHandler).")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"az login\naz webapp deployment source config-zip --resource-group <group-name> --name <app-name> --src /path/to/<filename>.zip\n")),Object(o.b)("h4",{id:"7-verify-solution"},"7. Verify Solution"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Clean cache",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"File handlers are cached locally in the browser and on the server. These caches have a timeout of 24 hours, meaning it can take up to 48 hours for updates to a File Handler manifest to appear for users. More details about this can be found ",Object(o.b)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/onedrive/developer/file-handlers/reset-cache?view=odsp-graph-online"},"here"),"."),Object(o.b)("li",{parentName:"ul"},"In case you want to test your changes in less then 24h, you will need to clean cache. While being authenticate to your sharepoint account in new tab, run: ",Object(o.b)("inlineCode",{parentName:"li"},"https://{tenant}-my.sharepoint.com/_api/v2.0/drive/apps?forceRefresh=1")),Object(o.b)("li",{parentName:"ul"},"Navigate to your sharepoint ",Object(o.b)("inlineCode",{parentName:"li"},"https://{tenant}.sharepoint.com/")," and from dev console, clean local and session storage cache."),Object(o.b)("li",{parentName:"ul"},"Navigate to your oneDrive ",Object(o.b)("inlineCode",{parentName:"li"},"https://{tenant}-my.sharepoint.com/")," and from dev console, clean local and session storage cache."),Object(o.b)("li",{parentName:"ul"},"Close your Browser."),Object(o.b)("li",{parentName:"ul"},"Open your Browser again and access your Sharepoint (e.g. ",Object(o.b)("inlineCode",{parentName:"li"},"https://{tenant}.sharepoint.com/"),")."),Object(o.b)("li",{parentName:"ul"},"In the new tab run ",Object(o.b)("inlineCode",{parentName:"li"},"https://{tenant}-my.sharepoint.com/_api/v2.0/drive/apps"),"."),Object(o.b)("li",{parentName:"ul"},"Make sure as an output you get your addins content.")))),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},'{"@odata.context":"https://{tenant}.sharepoint.com/_api/v2.0/$metadata#driveApps","value":[{"application":{"id":"  <APPID>","displayName":"GlasswallFileHandlerApp"},"fileHandler":{"appIcon":{"png1x":"https://glasswallsolutions.com/wp-content/uploads/2020/05/File-Drop-700.png"},"fileTypeDisplayName":"Glasswall(.NETFW)","fileTypeIcon":{"png1x":"https://glasswallsolutions.com/wp-content/uploads/2020/05/File-Drop-700.png"},"fileTypeIconUrl":"https://glasswallsolutions.com/wp-content/uploads/2020/05/File-Drop-700.png","version":2},"hidden":false,"id":"<GUID>"}]}\n')),Object(o.b)("ol",{start:2},Object(o.b)("li",{parentName:"ol"},"Navigate back to SharePoint Online (O365) Site."),Object(o.b)("li",{parentName:"ol"},"Open any Document Library."),Object(o.b)("li",{parentName:"ol"},"Select any file. "),Object(o.b)("li",{parentName:"ol"},"Verify custom Download button is present. "),Object(o.b)("li",{parentName:"ol"},"Download the file.",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"In case you are not able to ",Object(o.b)("strong",{parentName:"li"},"Download")," file, verify that correct Glasswall Rebuild URL and GW Cloud SDK are set in section 5."))),Object(o.b)("li",{parentName:"ol"},"Verify that downloaded file is rebuilt by Glasswall (you can upload file to ",Object(o.b)("inlineCode",{parentName:"li"},"https://file-drop.co.uk")," and verify it comes clean).",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"If the file is not rebuild correctly, the issue has to do with Glasswall Rebuild rather than solution provided.")))),Object(o.b)("h4",{id:"supported-browsers"},"Supported Browsers"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Edge, Chrome, Firefox, Brave, Opera (Mac & Windows)"),Object(o.b)("li",{parentName:"ul"},"Safari (Mac)")),Object(o.b)("h4",{id:"repository-1"},"Repository"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"File Handler: ",Object(o.b)("a",{parentName:"li",href:"https://github.com/k8-proxy/gp-sharepoint-plugins/tree/main/Online/glasswall.o365.filehandler/Net5"},"https://github.com/k8-proxy/gp-sharepoint-plugins/tree/main/Online/glasswall.o365.filehandler/Net5"),".")),Object(o.b)("h4",{id:"deployment-video"},"Deployment Video"),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=eg7StJR8yuU&ab_channel=GlasswallEngineering"},Object(o.b)("img",{parentName:"a",src:"https://img.youtube.com/vi/yaBPLn9ISSg/hqdefault.jpg",alt:"Installation Video (OVA)"}))))}b.isMDXComponent=!0}}]);