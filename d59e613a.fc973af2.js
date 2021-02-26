(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{106:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return p}));var n=a(2),r=a(6),i=(a(0),a(116)),o={title:"adarma Overview",sidebar_label:"Overview"},c={unversionedId:"websites/adarma/overview",id:"websites/adarma/overview",isDocsHomePage:!1,title:"adarma Overview",description:"see Development Websites Dashboard for details",source:"@site/docs/websites/adarma/overview.md",slug:"/websites/adarma/overview",permalink:"/k8-proxy-documentation/docs/websites/adarma/overview",version:"current",sidebar_label:"Overview",sidebar:"docs",previous:{title:"gwfiledrop Overview",permalink:"/k8-proxy-documentation/docs/websites/gwfiledrop/overview"},next:{title:"bsigroup Overview",permalink:"/k8-proxy-documentation/docs/websites/bsigroup/overview"}},l=[{value:"Requirements",id:"requirements",children:[]},{value:"Preparation",id:"preparation",children:[{value:"Finding domains of interest",id:"finding-domains-of-interest",children:[]},{value:"Configuration",id:"configuration",children:[]}]},{value:"Installation",id:"installation",children:[]}],s={rightToc:l};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"see ",Object(i.b)("a",{parentName:"p",href:"/k8-proxy-documentation/docs/dashboards/websites/development"},"Development Websites Dashboard for details")),Object(i.b)("h1",{id:"reverse-proxy-configuration-for-adarmacom"},"Reverse proxy configuration for adarma.com"),Object(i.b)("h2",{id:"requirements"},"Requirements"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Ubuntu LTS")," (Tested on Ubuntu 20.04 LTS)*")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Docker"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Docker compose"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Git")))),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"*WSL (Windows Subsystem Linux) is not supported")),Object(i.b)("h2",{id:"preparation"},"Preparation"),Object(i.b)("p",null,"We needed to check the website requests to check domains of interest, (domains that should be proxied), which typically are:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Website main domain and www subdomain (if applicable)")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Domains used in redirects between website pages (example: authentication redirections)")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Domains that hosts files that should be rebuilt against Glasswall rebuild engine"))),Object(i.b)("h3",{id:"finding-domains-of-interest"},"Finding domains of interest"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Open a browser that included dev tools (i.e : ",Object(i.b)("strong",{parentName:"p"},"Mozilla Firefox"),")")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Open dev tools and switch to ",Object(i.b)("strong",{parentName:"p"},"Network")," tab (CTRL+SHIFT+E in ",Object(i.b)("strong",{parentName:"p"},"Firefox"),")")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Visit target website main page, surf the website and try to download files while watching requested domains ")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Save domains in question to be used in configuration"))),Object(i.b)("h3",{id:"configuration"},"Configuration"),Object(i.b)("p",null,"Use ",Object(i.b)("a",{parentName:"p",href:"https://github.com/k8-proxy/k8-reverse-proxy/blob/master/stable-src/gwproxy.env"},"this configuration file")," as example"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"ROOT_DOMAIN"),": Domain used by the proxy (example: ",Object(i.b)("a",{parentName:"p",href:"http://www.gov.uk.glasswall-icap.com"},"www.gov.uk.glasswall-icap.com")," is proxying ",Object(i.b)("a",{parentName:"p",href:"http://www.gov.uk"},"www.gov.uk"),") ")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"ALLOWED_DOMAINS")," : Comma separated domains accepted by the proxy, typically this should be domains of interest with the ",Object(i.b)("inlineCode",{parentName:"p"},"ROOT_DOMAIN")," value appended")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"SQUID_IP")," IP address of squid proxy, used by nginx, should be only changed on advanced usage of the docker image (example: Kubernetes)")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"SUBFILTER_ENV"),": Space separated text substitution rules in response body, foramtted as ",Object(i.b)("strong",{parentName:"p"},"match,replace")," , used for url rewriting as in ",Object(i.b)("strong",{parentName:"p"},".gov.uk,.gov.uk.glasswall-icap.com")))),Object(i.b)("h2",{id:"installation"},"Installation"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Execute the following to install the dependencies mentioned above"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-bash"},'  sudo apt install -y curl git\n  curl https://get.docker.com | bash -\n  sudo curl -L "https://github.com/docker/compose/releases/download/1.27.4/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose\n  sudo chmod +x /usr/local/bin/docker-compose\n  sudo usermod -aG docker $(whoami)\n')),Object(i.b)("p",{parentName:"li"},"You need to logout and re-login after this step")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Prepare the repositories"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-bash"},"  git clone --recursive https://github.com/k8-proxy/k8-reverse-proxy\n  git clone https://github.com/k8-proxy/gp-engineering-website\n  wget https://github.com/filetrust/sdk-rebuild-eval/raw/master/libs/rebuild/linux/libglasswall.classic.so -O k8-reverse-proxy/stable-src/c-icap/Glasswall-Rebuild-SDK-Evaluation/Linux/Library/libglasswall.classic.so\n  cp -rf gp-engineering-website/* k8-reverse-proxy/stable-src/\n  cd k8-reverse-proxy/stable-src/\n"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Tweak ",Object(i.b)("inlineCode",{parentName:"p"},"openssl.cnf")," to include domains of interest in ",Object(i.b)("strong",{parentName:"p"},"alt_names")," section & tweak the ",Object(i.b)("strong",{parentName:"p"},"ALLOWED_DOMAINS")," & ",Object(i.b)("strong",{parentName:"p"},"SUBFILTER_ENV")," in ",Object(i.b)("inlineCode",{parentName:"p"},"gwproxy.env")," ")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Generate new SSL credentials"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-bash"},"  ./gencert.sh\n  mv full.pem nginx/\n"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Start the deployment    "),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-bash"},"  docker-compose up -d --build\n")),Object(i.b)("p",{parentName:"li"},"You will need to use this command after every change to any of the configuration files ",Object(i.b)("strong",{parentName:"p"},"gwproxy.env"),", ",Object(i.b)("strong",{parentName:"p"},"subfilter.sh"),", ",Object(i.b)("strong",{parentName:"p"},"docker-compose.yaml"),", if any."),Object(i.b)("h2",{parentName:"li",id:"client-configuration"},"Client configuration")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Add hosts records to your client system hosts file ( i.e ",Object(i.b)("strong",{parentName:"p"},"Windows"),": C:\\Windows\\System32\\drivers\\etc\\hosts , ",Object(i.b)("strong",{parentName:"p"},"Linux, macOS and  Unix-like:")," /etc/hosts ) as follows"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre"},"127.0.0.1 www.adarma.com.glasswall-icap.com adarma.com.glasswall-icap.com cdn1.adarma.com.glasswall-icap.com\n")),Object(i.b)("p",{parentName:"li"},"In case the machine running the project is not your local computer, replace ",Object(i.b)("strong",{parentName:"p"},"127.0.0.1")," with the project host IP,"),Object(i.b)("p",{parentName:"li"},"make sure that tcp ports ",Object(i.b)("strong",{parentName:"p"},"80")," and ",Object(i.b)("strong",{parentName:"p"},"443")," are reachable and not blocked by firewall."),Object(i.b)("h2",{parentName:"li",id:"setting-up-cert-for-proxied-site"},"Setting up cert for proxied site"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"all domains from ",Object(i.b)("strong",{parentName:"li"},"ALLOWED_DOMAINS")," should be added to DNS for this setup"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-bash"},"  docker-compose down\n"))),Object(i.b)("li",{parentName:"ul"},"SSH into the instance for proxied site and run",Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-bash"},"  sudo apt update\n  sudo apt upgrade -y\n  sudo apt-get install certbot python3-certbot-nginx -y\n  sudo certbot certonly --nginx\n"))),Object(i.b)("li",{parentName:"ul"},"add your email and registered domains as requested"),Object(i.b)("li",{parentName:"ul"},"when successful, the following will be generated:",Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre"}," ``` \n/etc/letsencrypt/live/www.adarma.com.glasswall-icap.com/fullchain.pem\n/etc/letsencrypt/live/www.adarma.com.glasswall-icap.com/privkey.pem\n```\n"))),Object(i.b)("li",{parentName:"ul"},"copy contents of these files to ",Object(i.b)("inlineCode",{parentName:"li"},"full.pem")," in the nginx folder (make sure private key's content is followed by contents of fullchain)")),Object(i.b)("h2",{parentName:"li",id:"access-the-proxied-site"},"Access the proxied site"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Local Setup"),": You can access the proxied site by browsing ",Object(i.b)("a",{parentName:"li",href:"https://www.adarma.com.glasswall-icap.com"},"www.adarma.com.glasswall-icap.com")," after adding ",Object(i.b)("inlineCode",{parentName:"li"},"k8-reverse-proxy/stable-src/ca.pem")," to your browser/system ssl trust store."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"DNS Setup"),": You can now access the proxied site by browsing ",Object(i.b)("a",{parentName:"li",href:"https://www.adarma.com.glasswall-icap.com"},"www.adarma.com.glasswall-icap.com"),", where you can verify that a valid certificate has been setup.")))))}p.isMDXComponent=!0},116:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},b=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=p(a),u=n,d=b["".concat(o,".").concat(u)]||b[u]||m[u]||i;return a?r.a.createElement(d,c(c({ref:t},s),{},{components:a})):r.a.createElement(d,c({ref:t},s))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var s=2;s<i;s++)o[s]=a[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);