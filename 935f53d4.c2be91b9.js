(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{100:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return m}));var a=r(0),n=r.n(a);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var b=n.a.createContext({}),u=function(e){var t=n.a.useContext(b),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=u(e.components);return n.a.createElement(b.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},s=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),d=u(r),s=a,m=d["".concat(l,".").concat(s)]||d[s]||p[s]||i;return r?n.a.createElement(m,o(o({ref:t},b),{},{components:r})):n.a.createElement(m,o({ref:t},b))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=s;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var b=2;b<i;b++)l[b]=r[b];return n.a.createElement.apply(null,l)}return n.a.createElement.apply(null,r)}s.displayName="MDXCreateElement"},83:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return l})),r.d(t,"metadata",(function(){return o})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return u}));var a=r(2),n=r(6),i=(r(0),r(100)),l={title:"Overview",sidebar_label:"Overview"},o={unversionedId:"products/gw cloud sdk/a-overview",id:"products/gw cloud sdk/a-overview",isDocsHomePage:!1,title:"Overview",description:"Introduction",source:"@site/docs/products/gw cloud sdk/a-overview.md",slug:"/products/gw cloud sdk/a-overview",permalink:"/k8-proxy-documentation/docs/products/gw cloud sdk/a-overview",version:"current",sidebar_label:"Overview",sidebar:"docs",previous:{title:"How to use File Drop",permalink:"/k8-proxy-documentation/docs/products/filedrop/fd-howto"},next:{title:"Endpoints",permalink:"/k8-proxy-documentation/docs/products/gw cloud sdk/b-endpoints"}},c=[{value:"Overview",id:"overview",children:[]},{value:"Architecture Overview",id:"architecture-overview",children:[]},{value:"Architecture Diagram",id:"architecture-diagram",children:[]},{value:"Dataflow Diagram",id:"dataflow-diagram",children:[]},{value:"Glasswall Cloud SDK with Compliant Kubernetes",id:"glasswall-cloud-sdk-with-compliant-kubernetes",children:[]},{value:"File Drop integrated with GW Cloud SDK",id:"file-drop-integrated-with-gw-cloud-sdk",children:[]},{value:"GW Cloud SDK on compliant Kubernetes",id:"gw-cloud-sdk-on-compliant-kubernetes",children:[]}],b={rightToc:c};function u(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},b,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"introduction"},"Introduction"),Object(i.b)("h2",{id:"overview"},"Overview"),Object(i.b)("p",null,"GW Cloud SDK is a Kubernetes service that can be added to ICAP infrastructure to provide access to Glasswall Solutions file rebuild service through RESTful APIs."),Object(i.b)("h2",{id:"architecture-overview"},"Architecture Overview"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Implemented as a K8s service"),Object(i.b)("li",{parentName:"ul"},"Easy to deploy within ICAP Service cluster"),Object(i.b)("li",{parentName:"ul"},"Interacts with Adaptation Service with RabbitMQ"),Object(i.b)("li",{parentName:"ul"},"Accessible on :8080")),Object(i.b)("h2",{id:"architecture-diagram"},"Architecture Diagram"),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/60857664/115525291-3e0d1580-a28f-11eb-8258-32da3b5d0ace.png",alt:"image"})),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"The C# service receives files for a rebuild on the REST API endpoints."),Object(i.b)("li",{parentName:"ul"},"After preliminary processing (at least must verify the file has been received), the request is passed to the ",Object(i.b)("inlineCode",{parentName:"li"},"Adaption Service")," with ",Object(i.b)("inlineCode",{parentName:"li"},"Adaption request")," RabbitMQ message."),Object(i.b)("li",{parentName:"ul"},"The file to be rebuilt is uploaded to the ",Object(i.b)("inlineCode",{parentName:"li"},"Original Store"),"."),Object(i.b)("li",{parentName:"ul"},"Once the processing is completed, C# service gets informed with a RabbitMQ ",Object(i.b)("inlineCode",{parentName:"li"},"Adaption outcome")," message."),Object(i.b)("li",{parentName:"ul"},"C# service get the rebuilt file from the ",Object(i.b)("inlineCode",{parentName:"li"},"Rebuild Store")," and passes it to the user.")),Object(i.b)("h2",{id:"dataflow-diagram"},"Dataflow Diagram"),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://github.com/k8-proxy/cs-k8s-api/blob/main/images/gw-cloud-sdk-dataflow-diagram.png?raw=true",alt:"image"})),Object(i.b)("h2",{id:"glasswall-cloud-sdk-with-compliant-kubernetes"},"Glasswall Cloud SDK with Compliant Kubernetes"),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/60857664/115548813-2f7f2800-a2a8-11eb-8ba3-e7569db39fe0.png",alt:"image"})),Object(i.b)("h1",{id:"supported-file-types"},"Supported File Types"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"File Types"),Object(i.b)("th",{parentName:"tr",align:null},"File Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"PDF"),Object(i.b)("td",{parentName:"tr",align:null},"Adobe Portable Document")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"JPG GIF PNG EMF WMF TIFF GeoTIFF BMP"),Object(i.b)("td",{parentName:"tr",align:null},"Images")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"DOC DOT"),Object(i.b)("td",{parentName:"tr",align:null},"MS Word 97-2003")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"XLS XLT"),Object(i.b)("td",{parentName:"tr",align:null},"MS Excel 97-2003")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"PPT POT"),Object(i.b)("td",{parentName:"tr",align:null},"MS PowerPoint 97-2003")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"DOCX DOCM DOTX DOTM"),Object(i.b)("td",{parentName:"tr",align:null},"MS Word 2003 & later")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"XLSX XLAM XLSM XLTX XLTM"),Object(i.b)("td",{parentName:"tr",align:null},"MS Excel 2003 & later")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"XPPTX POTX POTM PPTM PPSX PPAM PPSM"),Object(i.b)("td",{parentName:"tr",align:null},"MS PowerPoint 2003 & later")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"WAV MP3"),Object(i.b)("td",{parentName:"tr",align:null},"Audio")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"MPG MP4"),Object(i.b)("td",{parentName:"tr",align:null},"Video")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"PE DLL MUI EXE MACH-0 COFF ELF"),Object(i.b)("td",{parentName:"tr",align:null},"Portable executables")))),Object(i.b)("h1",{id:"demos"},"Demos"),Object(i.b)("h2",{id:"file-drop-integrated-with-gw-cloud-sdk"},"File Drop integrated with GW Cloud SDK"),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=_ZnCP1GY2-w"},Object(i.b)("img",{parentName:"a",src:"https://img.youtube.com/vi/_ZnCP1GY2-w/hqdefault.jpg",alt:"Installation Video (OVA)"}))),Object(i.b)("h2",{id:"gw-cloud-sdk-on-compliant-kubernetes"},"GW Cloud SDK on compliant Kubernetes"),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=_0VVsgnVSnA"},Object(i.b)("img",{parentName:"a",src:"https://img.youtube.com/vi/_0VVsgnVSnA/hqdefault.jpg",alt:"Installation Video (OVA)"}))))}u.isMDXComponent=!0}}]);