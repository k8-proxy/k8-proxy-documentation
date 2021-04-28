(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{70:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return p})),a.d(t,"default",(function(){return b}));var n=a(2),r=a(6),o=(a(0),a(98)),i={title:"GW Proxy",sidebar_label:"GW Proxy"},c={unversionedId:"products/gw proxy/overview",id:"products/gw proxy/overview",isDocsHomePage:!1,title:"GW Proxy",description:"Reverse Proxy setup (example)",source:"@site/docs/products/gw proxy/overview.md",slug:"/products/gw proxy/overview",permalink:"/k8-proxy-documentation/docs/products/gw proxy/overview",version:"current",sidebar_label:"GW Proxy",sidebar:"docs",previous:{title:"GW Desktop App",permalink:"/k8-proxy-documentation/docs/products/gw desktop app/overview"},next:{title:"Deploying ICAP Server on AWS",permalink:"/k8-proxy-documentation/docs/products/icap server/icap-aws"}},p=[{value:"Requirements",id:"requirements",children:[]},{value:"Preparation",id:"preparation",children:[{value:"Finding domains of interest",id:"finding-domains-of-interest",children:[]},{value:"Configuration",id:"configuration",children:[]}]},{value:"Installation",id:"installation",children:[]},{value:"Access the proxied site",id:"access-the-proxied-site",children:[]},{value:"Demo videos for proxied websites",id:"demo-videos-for-proxied-websites",children:[]}],l={rightToc:p};function b(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"reverse-proxy-setup-example"},"Reverse Proxy setup (example)"),Object(o.b)("p",null,"These instructions are provided as an example to proxy a website."),Object(o.b)("h2",{id:"requirements"},"Requirements"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Ubuntu LTS")," (Tested on Ubuntu 20.04 LTS)*")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Docker"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Docker compose"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Git")))),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"*WSL (Windows Subsystem Linux) is not supported")),Object(o.b)("h2",{id:"preparation"},"Preparation"),Object(o.b)("p",null,"We needed to check the website requests to check domains of interest, (domains that should be proxied), which typically are:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Website main domain and www subdomain (if applicable)")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Domains used in redirects between website pages (example: authentication redirections)")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Domains that hosts files that should be rebuilt against Glasswall rebuild engine"))),Object(o.b)("h3",{id:"finding-domains-of-interest"},"Finding domains of interest"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Open a browser that included dev tools (i.e: ",Object(o.b)("strong",{parentName:"p"},"Mozilla Firefox"),")")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Open dev tools and switch to ",Object(o.b)("strong",{parentName:"p"},"Network")," tab (CTRL+SHIFT+E in ",Object(o.b)("strong",{parentName:"p"},"Firefox"),")")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Visit target website main page, surf the website and try to download files while watching requested domains ")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Save domains in question to be used in configuration"))),Object(o.b)("h3",{id:"configuration"},"Configuration"),Object(o.b)("p",null,"Use ",Object(o.b)("a",{parentName:"p",href:"https://github.com/k8-proxy/k8-reverse-proxy/blob/master/stable-src/gwproxy.env"},"this configuration file")," as an example"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"ROOT_DOMAIN"),": Domain used by the proxy (example: ",Object(o.b)("a",{parentName:"p",href:"http://www.gov.uk.glasswall-icap.com"},"www.gov.uk.glasswall-icap.com")," is proxying ",Object(o.b)("a",{parentName:"p",href:"http://www.gov.uk"},"www.gov.uk"),") ")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"ALLOWED_DOMAINS")," : Comma separated domains accepted by the proxy, typically this should be domains of interest with the ",Object(o.b)("inlineCode",{parentName:"p"},"ROOT_DOMAIN")," value appended")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"SQUID_IP")," IP address of squid proxy, used by nginx, should be only changed on advanced usage of the docker image (example: Kubernetes)")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"SUBFILTER_ENV"),": Space separated text substitution rules in response body, formatted as ",Object(o.b)("strong",{parentName:"p"},"match,replace"),", used for URL rewriting as in ",Object(o.b)("strong",{parentName:"p"},".gov.uk,.gov.uk.glasswall-icap.com"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"ICAP_URL"),": ICAP server endpoint. "))),Object(o.b)("h2",{id:"installation"},"Installation"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Execute the following to install the dependencies mentioned above"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-bash"},'  sudo apt install -y curl git\n  curl https://get.docker.com | bash -\n  sudo curl -L "https://github.com/docker/compose/releases/download/1.27.4/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose\n  sudo chmod +x /usr/local/bin/docker-compose\n  sudo usermod -aG docker $(whoami)\n')),Object(o.b)("p",{parentName:"li"},"You need to logout and re-login after this step")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Prepare the repositories"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-bash"},"  git clone --recursive https://github.com/k8-proxy/k8-reverse-proxy\n  git clone https://github.com/k8-proxy/gp-engineering-website\n  wget https://github.com/filetrust/sdk-rebuild-eval/raw/master/libs/rebuild/linux/libglasswall.classic.so -O k8-reverse-proxy/stable-src/c-icap/Glasswall-Rebuild-SDK-Evaluation/Linux/Library/libglasswall.classic.so\n  cp -rf gp-engineering-website/* k8-reverse-proxy/stable-src/\n  cd k8-reverse-proxy/stable-src/\n"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Tweak ",Object(o.b)("inlineCode",{parentName:"p"},"openssl.cnf")," to include domains of interest in ",Object(o.b)("strong",{parentName:"p"},"alt_names")," section & tweak the ",Object(o.b)("strong",{parentName:"p"},"ALLOWED_DOMAINS")," & ",Object(o.b)("strong",{parentName:"p"},"SUBFILTER_ENV")," in ",Object(o.b)("inlineCode",{parentName:"p"},"gwproxy.env")," ")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Generate new SSL credentials"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-bash"},"  ./gencert.sh\n  mv full.pem nginx/\n"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Start the deployment    "),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-bash"},"  docker-compose up -d --build\n")),Object(o.b)("p",{parentName:"li"},"You will need to use this command after every change to any of the configuration files ",Object(o.b)("strong",{parentName:"p"},"gwproxy.env"),", ",Object(o.b)("strong",{parentName:"p"},"subfilter.sh"),", ",Object(o.b)("strong",{parentName:"p"},"docker-compose.yaml"),", if any."),Object(o.b)("h2",{parentName:"li",id:"client-configuration"},"Client configuration")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Add hosts records to your client system hosts file (i.e ",Object(o.b)("strong",{parentName:"p"},"Windows"),": C:\\Windows\\System32\\drivers\\etc\\hosts - ",Object(o.b)("strong",{parentName:"p"},"Linux, macOS and Unix-like:")," /etc/hosts) as follows:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre"},"127.0.0.1 www.adarma.com.glasswall-icap.com adarma.com.glasswall-icap.com cdn1.adarma.com.glasswall-icap.com\n")),Object(o.b)("p",{parentName:"li"},"In case the machine running the project is not your local computer, replace ",Object(o.b)("strong",{parentName:"p"},"127.0.0.1")," with the project host IP."),Object(o.b)("p",{parentName:"li"},"Make sure that tcp ports ",Object(o.b)("strong",{parentName:"p"},"80")," and ",Object(o.b)("strong",{parentName:"p"},"443")," are reachable and not blocked by firewall."),Object(o.b)("h2",{parentName:"li",id:"setting-up-cert-for-proxied-site"},"Setting up cert for proxied site"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"all domains from ",Object(o.b)("strong",{parentName:"li"},"ALLOWED_DOMAINS")," should be added to DNS for this setup",Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-bash"},"  docker-compose down\n"))),Object(o.b)("li",{parentName:"ul"},"SSH into the instance for proxied site and run",Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-bash"},"  sudo apt update\n  sudo apt upgrade -y\n  sudo apt-get install certbot python3-certbot-nginx -y\n  sudo certbot certonly --nginx\n"))),Object(o.b)("li",{parentName:"ul"},"add your email and registered domains as requested"),Object(o.b)("li",{parentName:"ul"},"when successful, the following will be generated:",Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre"}," ``` \n/etc/letsencrypt/live/www.adarma.com.glasswall-icap.com/fullchain.pem\n/etc/letsencrypt/live/www.adarma.com.glasswall-icap.com/privkey.pem\n```\n"))),Object(o.b)("li",{parentName:"ul"},"copy contents of these files to ",Object(o.b)("inlineCode",{parentName:"li"},"full.pem")," in the nginx folder (make sure private key's content is followed by contents of fullchain)")))),Object(o.b)("h2",{id:"access-the-proxied-site"},"Access the proxied site"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Local Setup"),": You can access the proxied site by browsing ",Object(o.b)("a",{parentName:"li",href:"https://www.adarma.com.glasswall-icap.com"},"www.adarma.com.glasswall-icap.com")," after adding ",Object(o.b)("inlineCode",{parentName:"li"},"k8-reverse-proxy/stable-src/ca.pem")," to your browser/system ssl trust store."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"DNS Setup"),": You can now access the proxied site by browsing ",Object(o.b)("a",{parentName:"li",href:"https://www.adarma.com.glasswall-icap.com"},"www.adarma.com.glasswall-icap.com"),", where you can verify that a valid certificate has been setup.")),Object(o.b)("h2",{id:"demo-videos-for-proxied-websites"},"Demo videos for proxied websites"),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"http://www.youtube.com/watch?v=pDFHgD6EdOQ"},Object(o.b)("img",{parentName:"a",src:"http://img.youtube.com/vi/pDFHgD6EdOQ/0.jpg",alt:null}))),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"http://www.youtube.com/watch?v=Y7cuplbEn8o"},Object(o.b)("img",{parentName:"a",src:"http://img.youtube.com/vi/Y7cuplbEn8o/0.jpg",alt:null}))),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"http://www.youtube.com/watch?v=mdCaZRQmg5M"},Object(o.b)("img",{parentName:"a",src:"http://img.youtube.com/vi/mdCaZRQmg5M/0.jpg",alt:null}))))}b.isMDXComponent=!0},98:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),b=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},s=function(e){var t=b(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),s=b(a),u=n,d=s["".concat(i,".").concat(u)]||s[u]||m[u]||o;return a?r.a.createElement(d,c(c({ref:t},l),{},{components:a})):r.a.createElement(d,c({ref:t},l))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=u;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<o;l++)i[l]=a[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);