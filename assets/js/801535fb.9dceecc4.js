"use strict";(self.webpackChunkuc_2_docs=self.webpackChunkuc_2_docs||[]).push([[4830],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>h});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),c=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(r),h=n,d=u["".concat(p,".").concat(h)]||u[h]||m[h]||i;return r?a.createElement(d,o(o({ref:t},s),{},{components:r})):a.createElement(d,o({ref:t},s))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},59037:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=r(87462),n=(r(67294),r(3905));const i={},o=void 0,l={unversionedId:"ImSwitch/ImSwitchUpdate",id:"ImSwitch/ImSwitchUpdate",title:"ImSwitchUpdate",description:"Updated openUC2 ImSwitch",source:"@site/docs/04_ImSwitch/ImSwitchUpdate.md",sourceDirName:"04_ImSwitch",slug:"/ImSwitch/ImSwitchUpdate",permalink:"/docs/ImSwitch/ImSwitchUpdate",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Quickstart to use the Raspberry Pi with our ImSwitch and UC2-ESP",permalink:"/docs/ImSwitch/ImSwitchOnRaspi"},next:{title:"openUC2 Workshops",permalink:"/docs/WORKSHOPS/"}},p={},c=[{value:"Updated openUC2 ImSwitch",id:"updated-openuc2-imswitch",level:2},{value:"1. Updating the ImSwitch UC2 Version",id:"1-updating-the-imswitch-uc2-version",level:3},{value:"2. Updating the UC2-REST to Interface the UC2 Electronics",id:"2-updating-the-uc2-rest-to-interface-the-uc2-electronics",level:3},{value:"3. Updating the UC2-ESP32 Firmware",id:"3-updating-the-uc2-esp32-firmware",level:3}],s={toc:c};function m(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"updated-openuc2-imswitch"},"Updated openUC2 ImSwitch"),(0,n.kt)("p",null,"In this guide, we'll walk you through the process of updating ImSwitch ",(0,n.kt)("strong",{parentName:"p"},"after")," you've installed it using pip. The update consists of three main steps:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Updating the ImSwitch UC2 version")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Updating the UC2-REST")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Updating the UC2-ESP32 firmware"))),(0,n.kt)("h3",{id:"1-updating-the-imswitch-uc2-version"},"1. Updating the ImSwitch UC2 Version"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Assumption:")," You have previously cloned the ImSwitch repository using git."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Open your terminal.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Activate the ImSwitch environment:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"conda activate imswitch\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Navigate to the directory where you cloned ImSwitch:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"cd <DIRECTORY/WHERE/YOU/DOWNLOADED/IMSWITCH>\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Pull the latest version from the repository and install:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"git pull https://github.com/openUC2/ImSwitch/\npip install -e .\n")))),(0,n.kt)("h3",{id:"2-updating-the-uc2-rest-to-interface-the-uc2-electronics"},"2. Updating the UC2-REST to Interface the UC2 Electronics"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Assumption:")," You have previously cloned the UC2-REST repository using git."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"In the terminal, navigate to the directory where you cloned UC2-REST:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"cd <DIRECTORY/WHERE/YOU/DOWNLOADED/UC2-REST>\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Pull the latest version from the repository and install:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"git pull https://github.com/openUC2/UC2-REST/\npip install -e .\n")))),(0,n.kt)("h3",{id:"3-updating-the-uc2-esp32-firmware"},"3. Updating the UC2-ESP32 Firmware"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Visit the ",(0,n.kt)("a",{parentName:"li",href:"https://youseetoo.github.io/"},"UC2 Firmware Page"),"."),(0,n.kt)("li",{parentName:"ol"},"Select the board you're using. If you're uncertain about this, feel free to reach out via email."),(0,n.kt)("li",{parentName:"ol"},'Click on the "Connect" button.'),(0,n.kt)("li",{parentName:"ol"},"From the browser-provided list, select the COM port."),(0,n.kt)("li",{parentName:"ol"},'Click on "Flash Firmware".'),(0,n.kt)("li",{parentName:"ol"},"Wait for the installation process to complete."),(0,n.kt)("li",{parentName:"ol"},"Test the firmware on the ",(0,n.kt)("a",{parentName:"li",href:"https://youseetoo.github.io/indexWebSerialTest.html"},"UC2 Web Serial Test Page"),"."),(0,n.kt)("li",{parentName:"ol"},"Close the browser window to release the serial port.")),(0,n.kt)("p",null,"Finally, you can start ImSwitch:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"python -m imswitch\n")))}m.isMDXComponent=!0}}]);