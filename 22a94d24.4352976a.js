(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{115:function(e,a,t){"use strict";t.d(a,"a",(function(){return b})),t.d(a,"b",(function(){return d}));var o=t(0),i=t.n(o);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);a&&(o=o.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,o)}return t}function n(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,o,i=function(e,a){if(null==e)return{};var t,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=i.a.createContext({}),p=function(e){var a=i.a.useContext(c),t=a;return e&&(t="function"==typeof e?e(a):n(n({},a),e)),t},b=function(e){var a=p(e.components);return i.a.createElement(c.Provider,{value:a},e.children)},g={inlineCode:"code",wrapper:function(e){var a=e.children;return i.a.createElement(i.a.Fragment,{},a)}},m=i.a.forwardRef((function(e,a){var t=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),b=p(t),m=o,d=b["".concat(l,".").concat(m)]||b[m]||g[m]||r;return t?i.a.createElement(d,n(n({ref:a},c),{},{components:t})):i.a.createElement(d,n({ref:a},c))}));function d(e,a){var t=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var r=t.length,l=new Array(r);l[0]=m;var n={};for(var s in a)hasOwnProperty.call(a,s)&&(n[s]=a[s]);n.originalType=e,n.mdxType="string"==typeof e?e:o,l[1]=n;for(var c=2;c<r;c++)l[c]=t[c];return i.a.createElement.apply(null,l)}return i.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},72:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return l})),t.d(a,"metadata",(function(){return n})),t.d(a,"rightToc",(function(){return s})),t.d(a,"default",(function(){return p}));var o=t(2),i=t(6),r=(t(0),t(115)),l={title:"owasp Overview",sidebar_label:"Overview"},n={unversionedId:"websites/owasp/overview",id:"websites/owasp/overview",isDocsHomePage:!1,title:"owasp Overview",description:"Installation Guide - Proxy configuration for owasp.org",source:"@site/docs/websites/owasp/overview.md",slug:"/websites/owasp/overview",permalink:"/k8-proxy-documentation/docs/websites/owasp/overview",version:"current",sidebar_label:"Overview",sidebar:"docs",previous:{title:"miniio Overview",permalink:"/k8-proxy-documentation/docs/websites/miniio/overview"},next:{title:"Sharepoint Online Solution Administration",permalink:"/k8-proxy-documentation/docs/websites/sharepoint/online/sharepoint-online-solution-administration"}},s=[{value:"Installation Guide - Proxy configuration for owasp.org",id:"installation-guide---proxy-configuration-for-owasporg",children:[]},{value:"Requirements",id:"requirements",children:[]},{value:"Installation with deployed icap server",id:"installation-with-deployed-icap-server",children:[]},{value:"Verify the installation",id:"verify-the-installation",children:[]},{value:"Installation with local deployed icap server",id:"installation-with-local-deployed-icap-server",children:[]},{value:"OWASP Search Scenario",id:"owasp-search-scenario",children:[{value:"Repository",id:"repository",children:[]},{value:"Flavor Setup",id:"flavor-setup",children:[]},{value:"Manual Website Setup",id:"manual-website-setup",children:[]},{value:"Automated Website Setup",id:"automated-website-setup",children:[]},{value:"Proxy Configuration",id:"proxy-configuration",children:[]}]}],c={rightToc:s};function p(e){var a=e.components,t=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},c,t,{components:a,mdxType:"MDXLayout"}),Object(r.b)("h3",{id:"installation-guide---proxy-configuration-for-owasporg"},"Installation Guide - Proxy configuration for owasp.org"),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"https://github.com/k8-proxy/gp-owasp-website/blob/main/sow2_0/README.md"},"https://github.com/k8-proxy/gp-owasp-website/blob/main/sow2_0/README.md")),Object(r.b)("h2",{id:"requirements"},"Requirements"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"Docker"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"Kubernetes"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"Helm 3")))),Object(r.b)("h2",{id:"installation-with-deployed-icap-server"},"Installation with deployed icap server"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"kubectl create namespace icap-adaptation")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"git clone ",Object(r.b)("a",{parentName:"p",href:"https://github.com/anejaalekh/gp-owasp-website.git"},"https://github.com/anejaalekh/gp-owasp-website.git"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"git clone ",Object(r.b)("a",{parentName:"p",href:"https://github.com/k8-proxy/k8-reverse-proxy.git"},"https://github.com/k8-proxy/k8-reverse-proxy.git")," --recursive && cd k8-reverse-proxy/stable-src/")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Update gwproxy.env with website details i.e ALLOWED_DOMAINS, SUBFILTER_ENV")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Replcae nginx/full.pem ../../gp-owasp-website/sow2_0/full.pem (gp-owasp-website is cloned in step 2)")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Build images for squid and nginx. Optionally Images can be pushed to docker repository as well."),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre"},"docker build nginx -t [docker registry]/reverse-proxy-nginx:0.0.1\ndocker build squid -t [docker registry]/reverse-proxy-squid:0.0.1\n\n"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"git clone ",Object(r.b)("a",{parentName:"p",href:"https://github.com/k8-proxy/s-k8-proxy-rebuild.git"},"https://github.com/k8-proxy/s-k8-proxy-rebuild.git")," && cd s-k8-proxy-rebuild/stable-src/  ")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Update chart/values.yaml"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre"},"set service.icap.enabled=false\nset service.nginx.additionalHosts \n    - www.owasp.org.glasswall-icap.com\n    - cse.google.com.glasswall-icap.com\n    - www.cse.google.com.glasswall-icap.com\n    - google.com.glasswall-icap.com\n    - www.google.com.glasswall-icap.com\nset service.nginx.url=owasp.org.glasswall-icap.com\n\n"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Deploy the helm chart"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre"},"helm --namespace icap-adaptation upgrade --install \\\n  --set image.nginx.repository=glasswallsolutions/reverse-proxy-nginx \\\n  --set image.nginx.tag=0.0.1 \\\n  --set image.squid.repository=glasswallsolutions/reverse-proxy-squid \\\n  --set image.squid.tag=0.0.1 \\\n  --set application.nginx.env.ICAP_URL=icap://54.77.168.168:1344/gw_rebuild \\\n  --set application.squid.env.ICAP_URL=icap://54.77.168.168:1344/gw_rebuild \\\n  --set application.nginx.env.ALLOWED_DOMAINS='owasp.org.glasswall-icap.com\\,www.owasp.org.glasswall-icap.com\\,cse.google.com.glasswall-icap.com\\,www.cse.google.com.glasswall-icap.com\\,google.com.glasswall-icap.com\\,www.google.com.glasswall-icap.com' \\\n  --set application.nginx.env.ROOT_DOMAIN='glasswall-icap.com' \\\n  --set application.nginx.env.SUBFILTER_ENV='owasp.org\\,owasp.org.glasswall-icap.com cse.google.com\\,cse.google.com.glasswall-icap.com google.com\\,google.com.glasswall-icap.com' \\\n  --set application.squid.env.ALLOWED_DOMAINS='owasp.org.glasswall-icap.com\\,www.owasp.org.glasswall-icap.com\\,cse.google.com.glasswall-icap.com\\,www.cse.google.com.glasswall-icap.com\\,google.com.glasswall-icap.com\\,www.google.com.glasswall-icap.com' \\\n  --set application.squid.env.ROOT_DOMAIN='glasswall-icap.com' \\\n  reverse-proxy chart/\n  \n")))),Object(r.b)("h2",{id:"verify-the-installation"},"Verify the installation"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"kubectl get ing -n icap-adaptation (copy the name of ingress name)"),Object(r.b)("li",{parentName:"ol"},"kubectl -n icap-adaptation edit ing ","[ingress_name_from_step1]"),Object(r.b)("li",{parentName:"ol"},"check spec->rules->host  and spec->tls->hosts check the entries here"),Object(r.b)("li",{parentName:"ol"},"kubectl get deployments -n icap-adaptation"),Object(r.b)("li",{parentName:"ol"},"verify nginx/squid deployment configuration i.e spec->containers->env . properties to check ICAP_URL, ALLOWED_DOMAINS, and SUBFILTER_ENV")),Object(r.b)("h2",{id:"installation-with-local-deployed-icap-server"},"Installation with local deployed icap server"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"kubectl create namespace icap-adaptation")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"kubectl create -n icap-adaptation secret docker-registry regcred --docker-server='",Object(r.b)("a",{parentName:"p",href:"https://index.docker.io/v1/'"},"https://index.docker.io/v1/'")," --docker-username=","[username]"," --docker-password=","[passwd]"," --docker-email=email")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"git clone ",Object(r.b)("a",{parentName:"p",href:"https://github.com/anejaalekh/gp-owasp-website.git"},"https://github.com/anejaalekh/gp-owasp-website.git"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"cd gp-owasp-website/sow2_0/adaptation/")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"helm install . --namespace icap-adaptation --generate-name")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"kubectl get pods -n icap-adaptation, Check Pods status should be Running. In case if icap-adaptation pod is not running in error state, delete the pod "),Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"Prepare Reverse Proxy Images"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"git clone ",Object(r.b)("a",{parentName:"p",href:"https://github.com/k8-proxy/k8-reverse-proxy.git"},"https://github.com/k8-proxy/k8-reverse-proxy.git")," --recursive && cd k8-reverse-proxy/stable-src/")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Update gwproxy.env with website details")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Replcae nginx/full.pem ../../gp-owasp-website/sow2_0/full.pem (gp-owasp-website is cloned in step 3)")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Build reverse proxy images"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre"}," docker build nginx -t [docker registry]/reverse-proxy-nginx:0.0.1\n docker push [docker registry]/reverse-proxy-nginx:0.0.1  # Optional\n\n docker build squid -t [docker registry]/reverse-proxy-squid:0.0.1\n docker push [docker registry]/reverse-proxy-squid:0.0.1 # Optional\n\n wget -O c-icap/Glasswall-Rebuild-SDK-Evaluation/Linux/Library/libglasswall.classic.so https://github.com/filetrust/Glasswall-Rebuild-SDK-Evaluation/releases/download/1.117/libglasswall.classic.so\n docker build c-icap -t [docker registry]/reverse-proxy-c-icap:0.0.1\n docker push [docker registry]/reverse-proxy-c-icap:0.0.1  # Optional\n"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"kubectl -n icap-adaptation get svc | grep icap-service, save this value "),Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"Install Reverse Proxy"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"git clone ",Object(r.b)("a",{parentName:"p",href:"https://github.com/k8-proxy/s-k8-proxy-rebuild.git"},"https://github.com/k8-proxy/s-k8-proxy-rebuild.git")," && cd s-k8-proxy-rebuild/stable-src/")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Update website info in charts/values.yaml file (Icap url can also be updated directly in charts/templates/deployment.yaml with value from step 10, search for ICAP_URL) ")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Install nginx, squid reverse proxy "))),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"helm --namespace icap-adaptation upgrade --install \\\n  --set image.nginx.repository=[docker registry]/reverse-proxy-nginx \\\n  --set image.nginx.tag=0.0.1 \\\n  --set image.squid.repository=[docker registry]/reverse-proxy-squid \\\n  --set image.squid.tag=0.0.1 \\\n  --set image.icap.repository=[docker registry]/reverse-proxy-c-icap \\\n  --set image.icap.tag=0.0.1 \\\n  --set application.nginx.env.ALLOWED_DOMAINS='owasp.org.glasswall-icap.com\\,www.owasp.org.glasswall-icap.com,cse.google.com.glasswall-icap.com,www,cse.google.com.glasswall-icap.com,google.com.glasswall-icap.com,www,google.com.glasswall-icap.com' \\\n  --set application.nginx.env.ROOT_DOMAIN='glasswall-icap.com' \\\n  --set application.nginx.env.SUBFILTER_ENV='owasp.org\\,owasp.org.glasswall-icap.com cse.google.com,cse.google.com.glasswall-icap.com google.com google.com.glasswall-icap.com' \\\n  --set application.squid.env.ALLOWED_DOMAINS='owasp.org.glasswall-icap.com\\,www.owasp.org.glasswall-icap.com,cse.google.com.glasswall-icap.com,www,cse.google.com.glasswall-icap.com,google.com.glasswall-icap.com,www,google.com.glasswall-icap.com' \\\n  --set application.squid.env.ROOT_DOMAIN='glasswall-icap.com' \\\n  reverse-proxy chart/\n")),Object(r.b)("ol",{start:14},Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Verify the website values for nginx ingress, squid and nginx deployment.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Update the ICAP URL in squid and nginx deployment with value from step 10, if not updated already ")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Verify all the pods in icap-adaptation namespace")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"sudo kubectl -n icap-adaptation port-forward --address 0.0.0.0 svc/reverse-proxy-reverse-proxy-nginx 443:443"),Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"Note:"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"When request is sent from browser, verify that rebuild pods are created and in Running status. Sometimes they are not able to pull images. Manually pull the images or docker login solves the problem. ")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Verify ingress details as well, host and path details should be proper.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},Object(r.b)("a",{parentName:"p",href:"https://github.com/filetrust/icap-infrastructure"},"https://github.com/filetrust/icap-infrastructure")," has issues(unbounded volume claim), so adaptation folder content is modified and placed inside sow2_0/adaptation folder"))),Object(r.b)("h2",{id:"owasp-search-scenario"},"OWASP Search Scenario"),Object(r.b)("p",null,"In owasp website search results were not working properly as Owasp use JS functions from cse.google.com and google.com. Search results were fetched by JS. As this was done on browser and we were proxing owasp.org url. Due to this search results urls were not rewritten. As a fix we are rewitting cse.google.com and google.com. Updated allowed domains are:  owasp.org.glasswall-icap.com,",Object(r.b)("a",{parentName:"p",href:"http://www.owasp.org.glasswall-icap.com,cse.google.com.glasswall-icap.com,www.cse.google.com.glasswall-icap.com,google.com.glasswall-icap.com,www.google.com.glasswall-icap.com"},"www.owasp.org.glasswall-icap.com,cse.google.com.glasswall-icap.com,www.cse.google.com.glasswall-icap.com,google.com.glasswall-icap.com,www.google.com.glasswall-icap.com")),Object(r.b)("h3",{id:"repository"},"Repository"),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"https://github.com/k8-proxy/gp-owasp-website"},"https://github.com/k8-proxy/gp-owasp-website")),Object(r.b)("h3",{id:"flavor-setup"},"Flavor Setup"),Object(r.b)("p",null,"Flavor E"),Object(r.b)("h3",{id:"manual-website-setup"},"Manual Website Setup"),Object(r.b)("p",null,"Same instructions as above."),Object(r.b)("h3",{id:"automated-website-setup"},"Automated Website Setup"),Object(r.b)("p",null,"NA"),Object(r.b)("h3",{id:"proxy-configuration"},"Proxy Configuration"),Object(r.b)("h1",{id:"versions"},"Versions"),Object(r.b)("p",null,"Kubernetes Version: 1.17.8\nOS: Centos\nHelm: 3.4.0\nIcap Flavor: Sow"),Object(r.b)("h1",{id:"online-details"},"Online Details"),Object(r.b)("p",null,"Hosted on AWS\nregions: eu-west1(Ireland)\nInstance Type: t3.2xlarge"))}p.isMDXComponent=!0}}]);