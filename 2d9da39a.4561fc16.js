(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{68:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(2),i=n(6),o=(n(0),n(98)),a={title:"Python Code Sample",sidebar_label:"Python Code Sample"},s={unversionedId:"products/gw cloud sdk/python-sample",id:"products/gw cloud sdk/python-sample",isDocsHomePage:!1,title:"Python Code Sample",description:"Python",source:"@site/docs/products/gw cloud sdk/python-sample.md",slug:"/products/gw cloud sdk/python-sample",permalink:"/k8-proxy-documentation/docs/products/gw cloud sdk/python-sample",version:"current",sidebar_label:"Python Code Sample",sidebar:"docs",previous:{title:"Deployment",permalink:"/k8-proxy-documentation/docs/products/gw cloud sdk/deployment"},next:{title:"GW Desktop App",permalink:"/k8-proxy-documentation/docs/products/gw desktop app/overview"}},l=[{value:"api/rebuild/base64",id:"apirebuildbase64",children:[]},{value:"api/rebuild/file",id:"apirebuildfile",children:[]},{value:"api/rebuild/zipfile",id:"apirebuildzipfile",children:[]}],d={rightToc:l};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"python"},"Python"),Object(o.b)("p",null,"The following code snippets are examples of calling the Rebuild API using Python. The requests library is used to execute calls to the API."),Object(o.b)("h2",{id:"apirebuildbase64"},"api/rebuild/base64"),Object(o.b)("p",null,"\u200bIn this example files are loaded from the OS and a request with the content type of 'application/json' is formed. The request is then sent to the API using the POST method. The JSON body also contains the content management flags."),Object(o.b)("p",null,"The rebuilt file is returned as Base64, decoded by the client and written to disk."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},'import base64\nimport requests\n\u200b\n\u200b\nurl = "https://<host>:<port>/api/rebuild/base64"\n\u200b\n""" rebuild a single file using the base64 endpoint.\nallow (0) review comments in microsoft word files """\n\u200b\n# open a local file\nwith open("data/doc/embedded_images_12kb.docx", "rb") as f:\n    # convert from bytes to str of base64 string\n    base64_string_input = base64.b64encode(f.read()).decode()\n\u200b\n# send post request to /base64 endpoint, returns base64 encoded bytes\nresponse = requests.post(\n    url=url,\n    json={\n        "Base64": base64_string_input,\n        "ContentManagementFlags": {\n            "WordContentManagement": {\n                "ReviewComments": 0,\n            }\n        }\n    }\n)\n\u200b\n# convert base64 encoded bytes to string\nbase64_string_output = response.content.decode()\n\u200b\n# metadata has been removed, base64 strings differ\nassert base64_string_input != base64_string_output\n\u200b\n# decode base64 string to bytes\nsanitised_file_bytes = base64.b64decode(base64_string_output)\n\u200b\n# write file locally\nwith open("data/doc/embedded_images_12kb_gwsanitised.docx", "wb") as f:\n')),Object(o.b)("h2",{id:"apirebuildfile"},"api/rebuild/file"),Object(o.b)("p",null,"In this example the contents of the raw file are uploaded in a body with a content type of 'multipart/form-data'. The content management flags are serialised and sent as part of the form."),Object(o.b)("p",null,"The rebuilt file contents are returned to the client and written to disk."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},'import json\nimport os\nimport requests\n\u200b\nurl = "https://<host>:<port>/api/rebuild/file"\n\u200b\n""" rebuild all files in the "data" directory, writing to a new "data_gwsanitised" directory with the same folder structure.\ndisallow (2) excel files that contain macros and don\'t write them to the new directory.\nallow (0) internal and external hyperlinks found in word documents, but sanitise other content\nsanitise (1, default) and write all other files. """\ndirectory = "data"\nfor root, dirs, files in os.walk(directory):\n    for file_ in files:\n        # create input and out file file paths\n        input_file = os.path.join(root, file_)\n        output_file = os.path.join(f"{directory}_gwsanitised", os.path.relpath(input_file, directory))\n        with open(input_file, "rb") as f:\n            # send post request\n            response = requests.post(\n                url=url,\n                files=[("file", f)],\n                headers={                    \n                    "accept": "application/octet-stream"\n                },\n                data={\n                    "contentManagementFlagJson": json.dumps({\n                        "ExcelContentManagement": {\n                            "Macros": 2,\n                        },\n                        "WordContentManagement": {\n                            "InternalHyperlinks": 0,\n                            "ExternalHyperlinks": 0,\n                            "EmbeddedFiles": 1,\n                            "EmbeddedImages": 1,\n                        }\n                    })\n                }\n            )\n        if response.status_code == 200 and response.content:\n            # glasswall successfully sanitised this file, write it to the new directory\n            os.makedirs(os.path.dirname(output_file), exist_ok=True)\n            with open(output_file, "wb") as f:\n                f.write(response.content)\n')),Object(o.b)("h2",{id:"apirebuildzipfile"},"api/rebuild/zipfile"),Object(o.b)("p",null,"In this example the contents of the zip file are uploaded in a body with a content type of 'application/zip'."),Object(o.b)("p",null,"The rebuilt file contents are returned to the client and written to disk."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},'import json\nimport os\nimport requests\n\u200b\nurl = "https://<host>:<port>/api/rebuild/zipfile"\n\u200b\n""" rebuild all files in the "data" directory, writing to a new "data_gwsanitised" directory with the same folder structure.\ndisallow (2) excel files that contain macros and don\'t write them to the new directory.\nallow (0) internal and external hyperlinks found in word documents, but sanitise other content\nsanitise (1, default) and write all other files. """\ndirectory = "data"\nfor root, dirs, files in os.walk(directory):\n    for file_ in files:\n        # create input and out file file paths\n        input_file = os.path.join(root, file_)\n        output_file = os.path.join(f"{directory}_gwsanitised", os.path.relpath(input_file, directory))\n        with open(input_file, "rb") as f:\n            # send post request\n            response = requests.post(\n                url=url,\n                files=[("file", f)],\n                headers={     \n                    "content-type":"application/zip",               \n                    "accept": "application/octet-stream"\n                }\n            )\n        if response.status_code == 200 and response.content:\n            # glasswall successfully sanitised this file, write it to the new directory\n            os.makedirs(os.path.dirname(output_file), exist_ok=True)\n            with open(output_file, "wb") as f:\n                f.write(response.content)\n')))}p.isMDXComponent=!0},98:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return b}));var r=n(0),i=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=i.a.createContext({}),p=function(e){var t=i.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return i.a.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},f=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(n),f=r,b=c["".concat(a,".").concat(f)]||c[f]||u[f]||o;return n?i.a.createElement(b,s(s({ref:t},d),{},{components:n})):i.a.createElement(b,s({ref:t},d))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var d=2;d<o;d++)a[d]=n[d];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);