(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{71:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return b}));var a=n(2),r=n(6),i=(n(0),n(99)),o={title:"Deploying ICAP Server on AWS",sidebar_label:"Deploying ICAP Server on AWS"},l={unversionedId:"products/icap server/icap-aws",id:"products/icap server/icap-aws",isDocsHomePage:!1,title:"Deploying ICAP Server on AWS",description:"Installation video",source:"@site/docs/products/icap server/icap-aws.md",slug:"/products/icap server/icap-aws",permalink:"/k8-proxy-documentation/docs/products/icap server/icap-aws",version:"current",sidebar_label:"Deploying ICAP Server on AWS",sidebar:"docs",previous:{title:"GW Proxy",permalink:"/k8-proxy-documentation/docs/products/gw proxy/overview"},next:{title:"Deploying ICAP Server on ESXI & Virtualbox",permalink:"/k8-proxy-documentation/docs/products/icap server/icap-esxi"}},c=[{value:"Installation video",id:"installation-video",children:[]},{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Setup AWS access",id:"setup-aws-access",children:[]},{value:"Deploying ICAP Server OVA",id:"deploying-icap-server-ova",children:[]},{value:"Deploying ICAP Server AMI",id:"deploying-icap-server-ami",children:[]},{value:"Remove Internet Access From ICAP Server (Optional)",id:"remove-internet-access-from-icap-server-optional",children:[]},{value:"Troubleshooting",id:"troubleshooting",children:[]}],s={rightToc:c};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"installation-video"},"Installation video"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Installation Video (OVA)")),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=f5ETATR7eX4&feature=youtu.be"},Object(i.b)("img",{parentName:"a",src:"https://img.youtube.com/vi/f5ETATR7eX4/hqdefault.jpg",alt:"Installation Video (OVA)"}))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Installation Video (AMI)")),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=DUo-Qnw4ojE&feature=youtu.be"},Object(i.b)("img",{parentName:"a",src:"https://img.youtube.com/vi/DUo-Qnw4ojE/hqdefault.jpg",alt:"Installation Video (OVA)"}))),Object(i.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"ICAP Server AMI ID or OVA"),Object(i.b)("li",{parentName:"ul"},"Enable AWS Security Token Service (AWS STS) in the Region where you plan to use VM Import"),Object(i.b)("li",{parentName:"ul"},"AWS CLI")),Object(i.b)("h2",{id:"setup-aws-access"},"Setup AWS access"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Install ",Object(i.b)("a",{parentName:"p",href:"https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2.html"},"AWS CLI")," on your local machine"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"AWS CLI installation ",Object(i.b)("a",{parentName:"li",href:"https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2-linux.html"},"Linux"),":",Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre"},'curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"\nunzip awscliv2.zip\nsudo ./aws/install\n'))),Object(i.b)("li",{parentName:"ul"},"AWS CLI installation ",Object(i.b)("a",{parentName:"li",href:"https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2-windows.html"},"WIN"),":",Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre"},"- Download and install msi: https://awscli.amazonaws.com/AWSCLIV2.msi\n- To verify AWS CLI was installed succesufully open CMD and run: aws --version\n- Result should be like: aws-cli/2.1.1 Python/3.7.4 Windows/10 botocore/2.0.0\n"))))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",{parentName:"p",href:"https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-quickstart.html"},"Setup AWS Console access")),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"From CMD run: ",Object(i.b)("inlineCode",{parentName:"li"},"aws configure")," "),Object(i.b)("li",{parentName:"ul"},"Enter the data for values as they pop up.",Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre"},"example:\n    AWS Access Key ID [None]: AKIAIOSFODNN7EXAMPLE\n    AWS Secret Access Key [None]: wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY\n    Default region name [None]: eu-west-1\n    Default output format [None]: json\n"))))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"If you have MFA token enabled for authentication to AWS account, you should ",Object(i.b)("a",{parentName:"p",href:"https://aws.amazon.com/premiumsupport/knowledge-center/authenticate-mfa-cli/"},"set up MFA token authenticate through AWS CLI"),"."),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Run: ",Object(i.b)("inlineCode",{parentName:"li"},"aws sts get-session-token --serial-number arn-of-the-mfa-device --token-code code-from-token")),Object(i.b)("li",{parentName:"ul"},"Replace arn-of-the-mfa-device with your username and AWS number and enter MFA code as code-from-token "),Object(i.b)("li",{parentName:"ul"},"Then export the values",Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre"},"export AWS_ACCESS_KEY_ID=<Value>\nexport AWS_SECRET_ACCESS_KEY=<Value>\nexport AWS_SESSION_TOKEN= <Value>\n")))))),Object(i.b)("h2",{id:"deploying-icap-server-ova"},"Deploying ICAP Server OVA"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"After downloading ICAP Server OVA, navigate to AWS S3 > Buckets > Create Bucket > Upload ICAP Server OVA"),Object(i.b)("li",{parentName:"ul"},"In your local machine, run ",Object(i.b)("inlineCode",{parentName:"li"},"aws configure"),", specifying the region of where the bucket was created"),Object(i.b)("li",{parentName:"ul"},"Create Service Role as instructed ",Object(i.b)("a",{parentName:"li",href:"https://docs.aws.amazon.com/vm-import/latest/userguide/vmie_prereqs.html#vmimport-role"},"here")),Object(i.b)("li",{parentName:"ul"},"Create a ",Object(i.b)("inlineCode",{parentName:"li"},"containers.json")," file as shown below:",Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre"},'[\n{\n  "Description": "My Server OVA",\n  "Format": "ova",\n  "UserBucket": {\n      "S3Bucket": "my-import-bucket", \n      "S3Key": "vms/my-server-vm.ova" \n  }\n}]\n')))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Run ",Object(i.b)("inlineCode",{parentName:"p"},'aws ec2 import-image --description "My server disks" --disk-containers "file://PATH_TO_containers.json"'))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Monitor import by running "))),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"aws ec2 describe-import-image-tasks --import-task-ids import-ami-ID\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Use final AMI ID you got and follow the steps in next section")),Object(i.b)("h2",{id:"deploying-icap-server-ami"},"Deploying ICAP Server AMI"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Navigate to AWS > EC2 > Launch Instance > AMIs")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Search for the AMI with the specific ID"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Instance Type: ",Object(i.b)("inlineCode",{parentName:"li"},"t2.large")),Object(i.b)("li",{parentName:"ul"},"Storage: 20 GB"),Object(i.b)("li",{parentName:"ul"},"Security Group: ",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Create a new security group > Add Rule:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Custom TCP > Port 1344 ","[ICAP Client Connection]"),Object(i.b)("li",{parentName:"ul"},"SSH > Port 22 ","[SSH to ICAP Instance]"),Object(i.b)("li",{parentName:"ul"},"HTTPS > Port 443 ","[ICAP Management UI]"),Object(i.b)("li",{parentName:"ul"},"Custom TCP > 1345 ","[ICAP client connection over TLS]"),Object(i.b)("li",{parentName:"ul"},"Custom TCP > 7000 ","[Instance based health check metrics]"))))))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Review & Launch")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Create or use existing key pair ","[",Object(i.b)("strong",{parentName:"p"},"Note"),": Your key pair is important for SSH]")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Once the instance is in running state, it takes around 5-10 minutes for all the services to be healthy"))),Object(i.b)("h2",{id:"remove-internet-access-from-icap-server-optional"},"Remove Internet Access From ICAP Server (Optional)"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"EC2 > Navigate to your instance > Under your Instance Summary > Security\n",Object(i.b)("img",{parentName:"li",src:"https://user-images.githubusercontent.com/60857664/108712705-d735df00-751f-11eb-9bdb-388cbf43a687.png",alt:"security-tab"})),Object(i.b)("li",{parentName:"ul"},"Security Details > Security Groups > Click on ",Object(i.b)("inlineCode",{parentName:"li"},"sg-...")," (your launch-wizard)"),Object(i.b)("li",{parentName:"ul"},"Outbound rules tab > Edit outbound rules > Delete the outbound rule & save rules\n",Object(i.b)("img",{parentName:"li",src:"https://user-images.githubusercontent.com/60857664/108713672-36e0ba00-7521-11eb-93d1-e10246562216.png",alt:"Screenshot from 2021-02-22 15-18-03"}))),Object(i.b)("h2",{id:"troubleshooting"},"Troubleshooting"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"If the UI does not load, run ",Object(i.b)("inlineCode",{parentName:"li"},"kubectl get pod -A")," to check the status of pods"),Object(i.b)("li",{parentName:"ul"},"If their status is not ",Object(i.b)("inlineCode",{parentName:"li"},"ready"),", in home directory run ",Object(i.b)("inlineCode",{parentName:"li"},"./flush_iptables.sh")),Object(i.b)("li",{parentName:"ul"},"Then run ",Object(i.b)("inlineCode",{parentName:"li"},"sudo systemctl restart k3s")),Object(i.b)("li",{parentName:"ul"},"Give it ~10 minutes before usage"),Object(i.b)("li",{parentName:"ul"},"In case you see ",Object(i.b)("inlineCode",{parentName:"li"},"metricbit")," pod crashing, bare in mind, this will not impact the system setup. In case there is an elasticsearch in private network which can be connected by metricbeat, then the metricbeat pod will run fine, if there is no elasticsearch then it will keep crashing but without any impact. ")))}b.isMDXComponent=!0},99:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),b=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=b(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=b(n),m=a,d=p["".concat(o,".").concat(m)]||p[m]||u[m]||i;return n?r.a.createElement(d,l(l({ref:t},s),{},{components:n})):r.a.createElement(d,l({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);