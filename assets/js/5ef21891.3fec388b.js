"use strict";(self.webpackChunkuc_2_docs=self.webpackChunkuc_2_docs||[]).push([[6676],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),h=a,d=m["".concat(s,".").concat(h)]||m[h]||u[h]||i;return n?r.createElement(d,o(o({ref:t},p),{},{components:n})):r.createElement(d,o({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},47959:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const i={},o="ImSwitch in Docker II Tutorial",l={unversionedId:"ImSwitchDocker2",id:"ImSwitchDocker2",title:"ImSwitch in Docker II Tutorial",description:"This tutorial outlines how to set up and run ImSwitch using Docker, where ImSwitch is deployed as a Python application inside a container. The container uses an Ubuntu image with all required libraries and dependencies, including UC2-REST for ESP32 control, and provides access to ImSwitch via a FastAPI-based REST API server.",source:"@site/docs/ImSwitchDocker2.md",sourceDirName:".",slug:"/ImSwitchDocker2",permalink:"/docs/ImSwitchDocker2",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Apertures",permalink:"/docs/PRODUCTION/Modules/APERTURES"},next:{title:"openUC2 Documentation",permalink:"/docs/intro"}},s={},c=[{value:"Setup Overview",id:"setup-overview",level:2},{value:"One-Step Installation",id:"one-step-installation",level:3},{value:"Building the Docker Image",id:"building-the-docker-image",level:3},{value:"Running ImSwitch via Docker",id:"running-imswitch-via-docker",level:3},{value:"Key Entry Points",id:"key-entry-points",level:3},{value:"Accessing the REST API",id:"accessing-the-rest-api",level:3}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"imswitch-in-docker-ii-tutorial"},"ImSwitch in Docker II Tutorial"),(0,a.kt)("p",null,"This tutorial outlines how to set up and run ImSwitch using Docker, where ImSwitch is deployed as a Python application inside a container. The container uses an Ubuntu image with all required libraries and dependencies, including UC2-REST for ESP32 control, and provides access to ImSwitch via a FastAPI-based REST API server."),(0,a.kt)("h2",{id:"setup-overview"},"Setup Overview"),(0,a.kt)("p",null,"ImSwitch is a modular Python application installed inside a Docker container. The process includes:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Creating an isolated environment with all necessary libraries."),(0,a.kt)("li",{parentName:"ul"},"Pulling and installing ImSwitch from the latest GitHub master branch."),(0,a.kt)("li",{parentName:"ul"},"Installing the UC2-REST library to control external devices like ESP32."),(0,a.kt)("li",{parentName:"ul"},"Setting up FastAPI to expose a REST API interface for remote control."),(0,a.kt)("li",{parentName:"ul"},"Running a React app on top of the REST API for web-based control.")),(0,a.kt)("h3",{id:"one-step-installation"},"One-Step Installation"),(0,a.kt)("p",null,"For Debian-based systems (Raspberry Pi and others), there is a one-step installation script that installs Docker, camera drivers, and pulls the Docker container for ImSwitch:"),(0,a.kt)("p",null,"Repository: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/openUC2/ImSwitchDockerInstall"},"openUC2/ImSwitchDockerInstall"),"\nScript: ",(0,a.kt)("inlineCode",{parentName:"p"},"install_all.sh")," installs everything you need."),(0,a.kt)("h3",{id:"building-the-docker-image"},"Building the Docker Image"),(0,a.kt)("p",null,"ImSwitch and UC2-REST are cloned and installed into the Docker image directly from the latest commits. During each build, the Git archives are fetched again, ensuring the installation is up-to-date without starting from scratch."),(0,a.kt)("p",null,"The Dockerfile for ImSwitch can be found here:\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/openUC2/ImSwitch/blob/master/dockerfile"},"Dockerfile")),(0,a.kt)("h3",{id:"running-imswitch-via-docker"},"Running ImSwitch via Docker"),(0,a.kt)("p",null,"After the Docker image is built, you can run the container with ImSwitch by specifying the necessary parameters. Here\u2019s an example startup script:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'params=()\nif [[ $HEADLESS == "1" || $HEADLESS == "True" || $HEADLESS == "true" ]]; then\n    params+=" --headless"\nfi;\nif [[ $ssl == "0" || $ssl == "False" || $ssl == "false" ]]; then\n    params+=" --no-ssl"\nfi;\nparams+=" --http-port ${HTTP_PORT:-8001}"\nparams+=" --config-folder ${CONFIG_PATH:-None}"\nparams+=" --config-file ${CONFIG_FILE:-None}"\nparams+=" --ext-data-folder ${DATA_PATH:-None}"\n\necho \'Starting ImSwitch with the following parameters:\'\necho "${params[@]}"\npython3 /tmp/ImSwitch/main.py $params\n')),(0,a.kt)("h3",{id:"key-entry-points"},"Key Entry Points"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Main Execution"),":\nImSwitch is launched from the main Python script, where configuration files and parameters are passed to set up the environment."),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Entry point file:\n",(0,a.kt)("a",{parentName:"li",href:"https://github.com/openUC2/ImSwitch/blob/master/main.py"},"main.py"),(0,a.kt)("a",{parentName:"li",href:"https://github.com/openUC2/ImSwitch/blob/master/imswitch/__main__.py"},(0,a.kt)("strong",{parentName:"a"},"main"),".py")))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"API Decorators"),":\nFunctions decorated with ",(0,a.kt)("inlineCode",{parentName:"p"},"@APIExport")," are automatically exposed as API endpoints in the FastAPI server."),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"API definition:\n",(0,a.kt)("a",{parentName:"li",href:"https://github.com/openUC2/ImSwitch/blob/acd12e24d124e0dbf7759af2a9afa7eb9a02eed6/imswitch/imcontrol/controller/server/ImSwitchServer.py#L171"},"ImSwitchServer.py#L171"))))),(0,a.kt)("h3",{id:"accessing-the-rest-api"},"Accessing the REST API"),(0,a.kt)("p",null,"The REST API server runs on port 8001 by default, with SSL enabled. You can interact with the API through the following interfaces:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Swagger UI"),":\nAccess the API documentation here:\n",(0,a.kt)("inlineCode",{parentName:"p"},"https://localhost:8001/docs"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Web Interface"),":\nA React app is served on top of the REST API:\n",(0,a.kt)("inlineCode",{parentName:"p"},"https://localhost:8001/imswitch/index.html")))),(0,a.kt)("p",null,"With this setup, you now have a running ImSwitch instance inside Docker, accessible via both API and web-based interfaces for control and configuration."))}u.isMDXComponent=!0}}]);