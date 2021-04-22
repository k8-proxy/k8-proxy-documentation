(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{55:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return p})),a.d(t,"default",(function(){return b}));var n=a(2),r=a(6),o=(a(0),a(95)),i={title:"Deployment",sidebar_label:"Deployment"},c={unversionedId:"products/gw cloud sdk/deployment",id:"products/gw cloud sdk/deployment",isDocsHomePage:!1,title:"Deployment",description:"Deployment in AWS",source:"@site/docs/products/gw cloud sdk/deployment.md",slug:"/products/gw cloud sdk/deployment",permalink:"/k8-proxy-documentation/docs/products/gw cloud sdk/deployment",version:"current",sidebar_label:"Deployment",sidebar:"docs",previous:{title:"GW Desktop Integration",permalink:"/k8-proxy-documentation/docs/products/gw cloud sdk/d-desktop-integration"},next:{title:"GW Desktop App",permalink:"/k8-proxy-documentation/docs/products/gw desktop app/overview"}},p=[{value:"Deployment in AWS",id:"deployment-in-aws",children:[]},{value:"Deployment instructions using AMI",id:"deployment-instructions-using-ami",children:[]},{value:"Testing",id:"testing",children:[]}],l={rightToc:p};function b(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"deployment-in-aws"},"Deployment in AWS"),Object(o.b)("h1",{id:"deploy-gw-cloud-sdk-with-compliant-kubernetes-worker-and-service-cluster"},"Deploy GW Cloud SDK with compliant kubernetes (worker and service cluster)"),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/58347752/115372624-64697d00-a1cb-11eb-96e0-7f6ba5cdc595.png",alt:"image"})),Object(o.b)("h2",{id:"deployment-instructions-using-ami"},"Deployment instructions using AMI"),Object(o.b)("p",null,"Both worker and service cluster AMIs are automatically created by running ",Object(o.b)("strong",{parentName:"p"},"CK8icap-GW_CloudSDK")," workflow in GitHub Actions using Packer.\nAmazon CloudFormation launch Template is provided  in the repository to facilitate configuration of the deployment."),Object(o.b)("p",null,"Use ",Object(o.b)("inlineCode",{parentName:"p"},"Compliant_Kubernetes_ICAP_Service_with_Service_Cluster_Proxy_REST_API.json")," CloudFormation template to deploy a number of Workload Clusters behind a loadbalancer and a single Service Cluster."),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Region"),Object(o.b)("th",{parentName:"tr",align:null},"Stack"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"Ireland"),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("a",{parentName:"td",href:"https://console.aws.amazon.com/cloudformation/home?region=eu-west-1#/stacks/new?stackName=compliant-k8s-stack&templateURL=https://cf-templates-compliant-k8s-eu-west-1.s3-eu-west-1.amazonaws.com/Compliant_Kubernetes_ICAP_Service_with_Service_Cluster_Proxy_REST_API.json"},Object(o.b)("img",{parentName:"a",src:"https://s3.amazonaws.com/cloudformation-examples/cloudformation-launch-stack.png",alt:"Launch Stack"})))))),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Or click on one of the buttons above depending on the region you want to work on")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"When prompted with the image below, click Next"),Object(o.b)("p",{parentName:"li"},Object(o.b)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/7603614/112506566-2fb20380-8d8e-11eb-9476-909cc8a751ed.png",alt:"Screenshot from 2021-03-25 17-13-06"}))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Enter ",Object(o.b)("inlineCode",{parentName:"p"},"Stack name")),Object(o.b)("p",{parentName:"li"},Object(o.b)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/7603614/112506657-45bfc400-8d8e-11eb-91a9-59e3c0b558ef.png",alt:"Screenshot from 2021-03-25 17-13-45"})),Object(o.b)("p",{parentName:"li"},"Set ",Object(o.b)("strong",{parentName:"p"},"Credentials"),":"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"Service Cluster Key Name")," and ",Object(o.b)("inlineCode",{parentName:"p"},"Workload Cluster Key Name")," to the names of key pairs (previously uploaded to AWS) that will be allowed to SSH into VMs"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"})),Object(o.b)("p",{parentName:"li"},Object(o.b)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/7603614/112506741-55d7a380-8d8e-11eb-8627-8427d194eeed.png",alt:"Screenshot from 2021-03-25 17-14-04"}))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"Logging Password"),"  Fluentd password")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"Monitoring Password")," to plain text of InfluxDB WC writer password"),Object(o.b)("p",{parentName:"li"},"The ",Object(o.b)("strong",{parentName:"p"},"Logging Password")," & ",Object(o.b)("strong",{parentName:"p"},"Monitoring Password")," are the elasticsearch.fluentdPassword & influxDB.wcWriterPassword Values respectively that are generated during the github action run which produced the used service cluster AMI"),Object(o.b)("p",{parentName:"li"},Object(o.b)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/58347752/115334524-d75aff80-a19b-11eb-94da-6784912c8b0a.png",alt:"image"})))))),Object(o.b)("p",null,"  Make sure that the following configuration parameters for ",Object(o.b)("strong",{parentName:"p"},"Load Balancer")," are not used by other stacks in the AWS region:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"Load Balancer Name"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"Target Group Name"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"Elastic IP")),Object(o.b)("p",{parentName:"li"},Object(o.b)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/7603614/112506814-66881980-8d8e-11eb-9658-1a75fc15e043.png",alt:"Screenshot from 2021-03-25 17-14-34"})))),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Service Cluster")," specification mainly AMI ID and Instance size, make sure the AMI is the one generated in the same github action run where you get the logging and monitory passwords above."),Object(o.b)("p",{parentName:"li"},Object(o.b)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/58347752/115334763-3de01d80-a19c-11eb-9b90-c51201b81b29.png",alt:"image"}))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Workload Cluster")," specification mainly AMI ID, Instance size and number of instances."),Object(o.b)("p",{parentName:"li"},Object(o.b)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/58347752/115334920-88619a00-a19c-11eb-9ca6-a0de8f8855e1.png",alt:"image"}))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Docker Images")," used for the Glasswall services (by default latest images will be pre-provided)")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"When the stack creation is complete, in the ",Object(o.b)("strong",{parentName:"p"},"Outputs")," tab you can find:"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"Load Balancer DNS Name")," which stand in-front of the workload cluster instances and accept requests on port ",Object(o.b)("inlineCode",{parentName:"li"},"8080")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"Service Cluster IP"),"  that exposes Grafana on port ",Object(o.b)("inlineCode",{parentName:"li"},"3000")," and Kibana on port ",Object(o.b)("inlineCode",{parentName:"li"},"5601"))),Object(o.b)("p",{parentName:"li"},Object(o.b)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/7603614/112513618-ced9f980-8d94-11eb-9559-61cee07e7a93.png",alt:"Screenshot from 2021-03-25 18-05-43"})))),Object(o.b)("h2",{id:"testing"},"Testing"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Testing workload cluster :"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Send and http request to ",Object(o.b)("inlineCode",{parentName:"p"},"<LoadBalancer DNS Name>:8080/api/health"),"  you should receive ",Object(o.b)("inlineCode",{parentName:"p"},"200 OK")," which indicates healthy workload cluster "),Object(o.b)("p",{parentName:"li"},Object(o.b)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/58347752/115336433-877e3780-a19f-11eb-81b7-0ce2b0e70faa.png",alt:"image"}))))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Testing service cluster :"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"From your browser go to service cluster IP provided in the outputs tab above on port 3000 to access Grafana and on port 5601 to acces Kibana")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Grafana's Password")," & ",Object(o.b)("strong",{parentName:"p"},"Kibana's Password")," are the user.grafanaPassword & elasticsearch.adminPassword Values respectively that are generated during the github action run which produced the used service cluster AMI"),Object(o.b)("p",{parentName:"li"},Object(o.b)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/58347752/115337642-a4b40580-a1a1-11eb-9fd3-d13246de3f54.png",alt:"image"})))))))}b.isMDXComponent=!0},95:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),b=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},s=function(e){var t=b(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),s=b(a),u=n,d=s["".concat(i,".").concat(u)]||s[u]||m[u]||o;return a?r.a.createElement(d,c(c({ref:t},l),{},{components:a})):r.a.createElement(d,c({ref:t},l))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=u;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<o;l++)i[l]=a[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);