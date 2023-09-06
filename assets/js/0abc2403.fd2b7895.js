"use strict";(self.webpackChunkuc_2_docs=self.webpackChunkuc_2_docs||[]).push([[9907],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>c});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),o=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=o(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=o(a),c=n,k=u["".concat(p,".").concat(c)]||u[c]||d[c]||l;return a?r.createElement(k,i(i({ref:t},m),{},{components:a})):r.createElement(k,i({ref:t},m))}));function c(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var o=2;o<l;o++)i[o]=a[o];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},40114:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>o});var r=a(87462),n=(a(67294),a(3905));const l={},i="USB Camera",s={unversionedId:"PRODUCTION/Modules/Camera",id:"PRODUCTION/Modules/Camera",title:"USB Camera",description:"Duration: 1",source:"@site/docs/09_PRODUCTION/Modules/01_Camera.md",sourceDirName:"09_PRODUCTION/Modules",slug:"/PRODUCTION/Modules/Camera",permalink:"/docs/PRODUCTION/Modules/Camera",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Assemble the XYZ Microscope",permalink:"/docs/PRODUCTION/INVESTIGATOR/ProductionXYZMicroscope"},next:{title:"Eyepiece",permalink:"/docs/PRODUCTION/Modules/Eyepiece"}},p={},o=[{value:"Bill of material",id:"bill-of-material",level:2},{value:"3D printing files",id:"3d-printing-files",level:3},{value:"Additional parts",id:"additional-parts",level:3},{value:"Assembly",id:"assembly",level:2},{value:"IMX219 (Arducam)",id:"imx219-arducam",level:3},{value:"IMX179 (Waveshare)",id:"imx179-waveshare",level:3},{value:"Design files",id:"design-files",level:3}],m={toc:o};function d(e){let{components:t,...l}=e;return(0,n.kt)("wrapper",(0,r.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"usb-camera"},"USB Camera"),(0,n.kt)("p",null,"Duration: 1"),(0,n.kt)("p",null,"This page describes how to assemble the camera module. It has two different variations:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"IMX214 (Arducam, LINK)"),(0,n.kt)("li",{parentName:"ul"},"IMX179 (Waveshare, LINK)")),(0,n.kt)("h2",{id:"bill-of-material"},"Bill of material"),(0,n.kt)("p",null,"Below you will find all components necessary to build this device"),(0,n.kt)("h3",{id:"3d-printing-files"},"3D printing files"),(0,n.kt)("p",null,"All these files need to be printed."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Printing parameters:")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Infill"),(0,n.kt)("th",{parentName:"tr",align:null},"Layerheight"),(0,n.kt)("th",{parentName:"tr",align:null},"Special Profile"),(0,n.kt)("th",{parentName:"tr",align:null},"Material"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"~20%"),(0,n.kt)("td",{parentName:"tr",align:null},"0.25/0.3mm"),(0,n.kt)("td",{parentName:"tr",align:null},"mini/i3"),(0,n.kt)("td",{parentName:"tr",align:null},"PLA (black)")))),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Details"),(0,n.kt)("th",{parentName:"tr",align:null},"Link"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Camera holder"),(0,n.kt)("td",{parentName:"tr",align:null},"holds IMX179/214"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"./STL/"},"Part.stl"))))),(0,n.kt)("h3",{id:"additional-parts"},"Additional parts"),(0,n.kt)("p",null,"This is used in the current version of the setup"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Details"),(0,n.kt)("th",{parentName:"tr",align:null},"Price"),(0,n.kt)("th",{parentName:"tr",align:null},"Link"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"USB Camera"),(0,n.kt)("td",{parentName:"tr",align:null},"Arducam USB IMX214"),(0,n.kt)("td",{parentName:"tr",align:null},"40 \u20ac"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"NONE"},"Amazon"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"or"),(0,n.kt)("td",{parentName:"tr",align:null},"---"),(0,n.kt)("td",{parentName:"tr",align:null},"---"),(0,n.kt)("td",{parentName:"tr",align:null},"---")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"USB Camera"),(0,n.kt)("td",{parentName:"tr",align:null},"Arducam USB IMX214"),(0,n.kt)("td",{parentName:"tr",align:null},"40 \u20ac"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"NONE"},"Amazon"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Mounting screws"),(0,n.kt)("td",{parentName:"tr",align:null},"DIN912 M3x12mm Screws"),(0,n.kt)("td",{parentName:"tr",align:null},"0.40 \u20ac"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"NONE"},"W\xfcrth"))))),(0,n.kt)("h2",{id:"assembly"},"Assembly"),(0,n.kt)("p",null,"Duration: 1"),(0,n.kt)("p",null,"Below we describe how the device can be build and assembled in order to replicate the whole system."),(0,n.kt)("h3",{id:"imx219-arducam"},"IMX219 (Arducam)"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"STEP 1")),(0,n.kt)("p",null,"All parts you need to assemble the module:"),(0,n.kt)("p",null,"Remove the lens (M12/cellphone) from the camera board."),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(10275).Z,width:"3648",height:"2736"})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"STEP 2")),(0,n.kt)("p",null,"Use the DIN912 M3x12mm screws to mount the camera securely.\n",(0,n.kt)("strong",{parentName:"p"},"ATTENTION:")," Use the decentered holes such that the Camera is placed in the inserts's center!"),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(65021).Z,width:"3648",height:"2736"})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"STEP 3")),(0,n.kt)("p",null,"Add the insert to the cube, close it and store the cable safely."),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(19090).Z,width:"3648",height:"2736"})),(0,n.kt)("h3",{id:"imx179-waveshare"},"IMX179 (Waveshare)"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"STEP 1")),(0,n.kt)("p",null,"All parts you need to assemble the module:"),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(10275).Z,width:"3648",height:"2736"})),(0,n.kt)("p",{align:"center"},(0,n.kt)("img",{src:"/img/IMG_01_CAMERA/UC2_cameraIMX179_4.jpg",width:"400"})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"STEP 2")),(0,n.kt)("p",null,"Remove the lens (M12) from the camera board using a cross key."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"STEP 3")),(0,n.kt)("p",null,"Use the DIN912 M3x12mm screws to mount the camera securely.\n",(0,n.kt)("strong",{parentName:"p"},"ATTENTION"),": Use the centered screws to have the camera's lens in the center of the module!"),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(72182).Z,width:"3648",height:"2736"})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"STEP 4")),(0,n.kt)("p",null,"To remove the lens take a cloth/tissue and pliers and knock it of with some force. Don't break the part!"),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(80533).Z,width:"3648",height:"2736"})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"STEP 5")),(0,n.kt)("p",null,"Add the part to the cube and you're done."),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(47164).Z,width:"3648",height:"2736"})),(0,n.kt)("h3",{id:"design-files"},"Design files"),(0,n.kt)("p",null,"The original design files are in the ",(0,n.kt)("a",{parentName:"p",href:"../INVENTOR"},"INVENTOR")," folder."))}d.isMDXComponent=!0},47164:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/UC2_cameraIMX179_0-104d535c62cc4cd9e24171047ed7a008.jpg"},80533:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/UC2_cameraIMX179_1-efc69dcc6664cee4087e6dfd81d37a0a.jpg"},72182:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/UC2_cameraIMX179_2-14602541fc41bb65f92fa8778118ade1.jpg"},10275:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/UC2_camera_0-c93a6604576733b729f941118c32c8c2.jpg"},65021:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/UC2_camera_1-d84d3ab3f6b989e5d54a2dc2110fa49d.jpg"},19090:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/UC2_camera_2-36d159e590a0acdf1d13915e933d0594.jpg"}}]);