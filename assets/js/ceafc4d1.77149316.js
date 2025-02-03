"use strict";(self.webpackChunkuc_2_docs=self.webpackChunkuc_2_docs||[]).push([[178],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),h=a,d=u["".concat(s,".").concat(h)]||u[h]||m[h]||i;return n?r.createElement(d,o(o({ref:t},p),{},{components:n})):r.createElement(d,o({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},40549:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const i={},o="Quickstart to use the Raspberry Pi with our ImSwitch and UC2-ESP",l={unversionedId:"ImSwitch/ImSwitchOnRaspi",id:"ImSwitch/ImSwitchOnRaspi",title:"Quickstart to use the Raspberry Pi with our ImSwitch and UC2-ESP",description:"The Raspberry Pi connects the UC2-ESP via USB and the USB3 camera to the ImSwitch that runs in Docker. You can access the frontend via your browser on a phone or laptop. It's experimental at the moment!",source:"@site/docs/04_ImSwitch/ImSwitchOnRaspi.md",sourceDirName:"04_ImSwitch",slug:"/ImSwitch/ImSwitchOnRaspi",permalink:"/docs/ImSwitch/ImSwitchOnRaspi",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Install ImSwitch using the ImSwitch Installer (CONDA INSTALLER OUTDATED)",permalink:"/docs/ImSwitch/ImSwitchInstallerConda"},next:{title:"ImSwitchUpdate",permalink:"/docs/ImSwitch/ImSwitchUpdate"}},s={},c=[{value:"Login Data for Raspberry Pi (SSH / Login)",id:"login-data-for-raspberry-pi-ssh--login",level:2},{value:"WiFi Hotspot",id:"wifi-hotspot",level:2},{value:"Accessing ImSwitch",id:"accessing-imswitch",level:2},{value:"Connecting via SSH",id:"connecting-via-ssh",level:2},{value:"Changing ImSwitch Parameters",id:"changing-imswitch-parameters",level:2},{value:"Hardware Connection",id:"hardware-connection",level:2},{value:"Accessing ImSwitch via Web Browser",id:"accessing-imswitch-via-web-browser",level:2}],p={toc:c};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"quickstart-to-use-the-raspberry-pi-with-our-imswitch-and-uc2-esp"},"Quickstart to use the Raspberry Pi with our ImSwitch and UC2-ESP"),(0,a.kt)("p",null,"The Raspberry Pi connects the UC2-ESP via USB and the USB3 camera to the ImSwitch that runs in Docker. You can access the frontend via your browser on a phone or laptop. It's experimental at the moment!"),(0,a.kt)("h2",{id:"login-data-for-raspberry-pi-ssh--login"},"Login Data for Raspberry Pi (SSH / Login)"),(0,a.kt)("p",null,"The Raspberry Pi login credentials are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Username:")," ",(0,a.kt)("inlineCode",{parentName:"li"},"UC2")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Password:")," ",(0,a.kt)("inlineCode",{parentName:"li"},"youseetoo"))),(0,a.kt)("p",null,"It runs the Raspberry Pi OS Light version with a Docker integration of our systems, linked on Twitter. You can log in via SSH and start the ImSwitch server."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/openUC2/ImSwitchDockerInstall?tab=readme-ov-file#imswitch--docker-on-raspi"},"ImSwitch Docker Installation Guide")),(0,a.kt)("h2",{id:"wifi-hotspot"},"WiFi Hotspot"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"SSID:")," ",(0,a.kt)("inlineCode",{parentName:"li"},"openuc2-RANDOMNUMBER")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Password:")," ",(0,a.kt)("inlineCode",{parentName:"li"},"youseetoo"))),(0,a.kt)("p",null,"Configure the hotspot using RaspAP:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Go to ",(0,a.kt)("a",{parentName:"li",href:"http://10.3.141.1/"},"http://10.3.141.1/")),(0,a.kt)("li",{parentName:"ul"},"Login: ",(0,a.kt)("strong",{parentName:"li"},"admin")," / ",(0,a.kt)("strong",{parentName:"li"},"secret")),(0,a.kt)("li",{parentName:"ul"},"(Refer to RaspAP GitHub for more details)")),(0,a.kt)("h2",{id:"accessing-imswitch"},"Accessing ImSwitch"),(0,a.kt)("p",null,"If the Docker image has started automatically, you can access ImSwitch at:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://10.3.141.1:8001/imswitch/index.html"},"https://10.3.141.1:8001/imswitch/index.html")),(0,a.kt)("li",{parentName:"ul"},"(Self-signed certificate warning: Accept untrusted, this will be fixed in the future.)")),(0,a.kt)("h2",{id:"connecting-via-ssh"},"Connecting via SSH"),(0,a.kt)("p",null,"To SSH into the Raspberry Pi and manually start ImSwitch:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"ssh uc2@10.3.141.1  # Password: youseetoo\n# Start ImSwitch\ncd ~/Desktop\n./launch_docker_container.sh\n")),(0,a.kt)("h2",{id:"changing-imswitch-parameters"},"Changing ImSwitch Parameters"),(0,a.kt)("p",null,"Configuration file path:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"nano ~/ImSwitchConfig/config/imcontrol_options.json\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Active setup file:")," ",(0,a.kt)("inlineCode",{parentName:"li"},"example_uc2_vimba.json"))),(0,a.kt)("p",null,"Example JSON snippet:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "setupFileName": "example_uc2_vimba.json",\n    "recording": {\n        "outputFolder": "./ImSwitch/ImSwitch/recordings",\n        "includeDateInOutputFolder": true\n    }\n}\n')),(0,a.kt)("p",null,"To modify configurations:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"nano ~/ImSwitchConfig/imcontrol_setups/example_histo_daheng.json\n")),(0,a.kt)("p",null,"Example positioner settings:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'"positioners":{\n    "ESP32Stage":{\n        "managerName":"ESP32StageManager",\n        "managerProperties":{\n            "rs232device":"ESP32",\n            "isEnable":true,\n            "stepsizeX":-0.3125,\n            "stepsizeY":-0.3125,\n            "stepsizeZ":0.3125,\n            "homeSpeedX":15000,\n            "homeSpeedY":15000,\n            "homeSpeedZ":25000\n        }\n    }\n}\n')),(0,a.kt)("p",null,"For more details, visit: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/openUC2/imswitchconfig"},"ImSwitchConfig GitHub")),(0,a.kt)("p",null,"Close the application with:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"CTRL + C\n")),(0,a.kt)("h2",{id:"hardware-connection"},"Hardware Connection"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Connect ",(0,a.kt)("strong",{parentName:"li"},"UC2-ESP Board")," via USB to Raspberry Pi"),(0,a.kt)("li",{parentName:"ul"},"Connect ",(0,a.kt)("strong",{parentName:"li"},"USB3 Camera")," to Raspberry Pi")),(0,a.kt)("h2",{id:"accessing-imswitch-via-web-browser"},"Accessing ImSwitch via Web Browser"),(0,a.kt)("p",null,"Open the following URL in a browser:\n",(0,a.kt)("a",{parentName:"p",href:"https://10.3.141.1:8001/imswitch/index.html"},"https://10.3.141.1:8001/imswitch/index.html")))}m.isMDXComponent=!0}}]);