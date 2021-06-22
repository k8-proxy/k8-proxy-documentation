(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{105:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),b=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=b(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=b(n),m=r,d=u["".concat(o,".").concat(m)]||u[m]||s[m]||i;return n?a.a.createElement(d,c(c({ref:t},l),{},{components:n})):a.a.createElement(d,c({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},92:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return p})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(2),a=n(6),i=(n(0),n(105)),o=["components"],c={title:"Check Logs for client IP of request",sidebar_label:"Monitoring"},p={unversionedId:"products/compliant kubernetes/p-monitoring",id:"products/compliant kubernetes/p-monitoring",isDocsHomePage:!1,title:"Check Logs for client IP of request",description:"Method 1: Kibana",source:"@site/docs/products/compliant kubernetes/p-monitoring.md",slug:"/products/compliant kubernetes/p-monitoring",permalink:"/k8-proxy-documentation/docs/products/compliant kubernetes/p-monitoring",version:"current",sidebar_label:"Monitoring",sidebar:"docs",previous:{title:"Compliant Kubernetes",permalink:"/k8-proxy-documentation/docs/products/compliant kubernetes/overview"},next:{title:"Troubleshooting",permalink:"/k8-proxy-documentation/docs/products/compliant kubernetes/troubleshooting"}},l=[{value:"Method 1: Kibana",id:"method-1-kibana",children:[]},{value:"Method 2: SSH",id:"method-2-ssh",children:[]}],b={rightToc:l};function u(e){var t=e.components,n=Object(a.a)(e,o);return Object(i.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"method-1-kibana"},"Method 1: Kibana"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Navigate to ",Object(i.b)("inlineCode",{parentName:"p"},"http://service-cluster-ip:5601")," for Kibana and log in.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"From settings choose ",Object(i.b)("inlineCode",{parentName:"p"},"Discover"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Change index pattern from ",Object(i.b)("inlineCode",{parentName:"p"},"kubeaudit")," to ",Object(i.b)("inlineCode",{parentName:"p"},"kubernetes")),Object(i.b)("p",{parentName:"li"},"  ",Object(i.b)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/60857664/121914319-72063380-cd32-11eb-8321-b23f7af2f6a6.png",alt:"image"}))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Under ",Object(i.b)("inlineCode",{parentName:"p"},"Available Fields")," > click on ",Object(i.b)("inlineCode",{parentName:"p"},"kubernetes.namespace_name")," > Top 5 Values > click on any ",Object(i.b)("inlineCode",{parentName:"p"},"+")," "),Object(i.b)("p",{parentName:"li"},"  ",Object(i.b)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/60857664/121915237-52bbd600-cd33-11eb-8d87-617c1544925a.png",alt:"image"}))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"This creates a filter on top > ",Object(i.b)("inlineCode",{parentName:"p"},"Edit Filter")," > Set ",Object(i.b)("inlineCode",{parentName:"p"},"Value")," to ",Object(i.b)("inlineCode",{parentName:"p"},"ingress-nginx")," > Save"),Object(i.b)("p",{parentName:"li"},"  ",Object(i.b)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/60857664/121915407-7a12a300-cd33-11eb-947c-e7140ce5f8f8.png",alt:"image"}))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Under ",Object(i.b)("inlineCode",{parentName:"p"},"Available Fields")," > click on ",Object(i.b)("inlineCode",{parentName:"p"},"kubernetes.namespace_name")," > Top 5 Values > click the ",Object(i.b)("inlineCode",{parentName:"p"},"+")," for ",Object(i.b)("inlineCode",{parentName:"p"},"ingress-nginx-controller-#####")),Object(i.b)("p",{parentName:"li"},"  ",Object(i.b)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/60857664/121915864-e7becf00-cd33-11eb-80fd-4d0192919980.png",alt:"image"})))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Expand a request > scroll to ",Object(i.b)("inlineCode",{parentName:"li"},"message")," > First entry is the client IP")),Object(i.b)("h2",{id:"method-2-ssh"},"Method 2: SSH"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"SSh into workload cluster")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Run:"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"sudo kubectl get pods -n ingress-nginx")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"sudo kubectl logs -f -n ingress-nginx ingress-nginx-controller-#####")))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"First entry is the client IP"))))}u.isMDXComponent=!0}}]);