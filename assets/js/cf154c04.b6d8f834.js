"use strict";(self.webpackChunkuc_2_docs=self.webpackChunkuc_2_docs||[]).push([[8895],{3905:(e,t,i)=>{i.d(t,{Zo:()=>p,kt:()=>u});var o=i(67294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function n(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,o)}return i}function r(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?n(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,o,a=function(e,t){if(null==e)return{};var i,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)i=n[o],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)i=n[o],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var l=o.createContext({}),c=function(e){var t=o.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):r(r({},t),e)),i},p=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var i=e.components,a=e.mdxType,n=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(i),u=a,h=d["".concat(l,".").concat(u)]||d[u]||m[u]||n;return i?o.createElement(h,r(r({ref:t},p),{},{components:i})):o.createElement(h,r({ref:t},p))}));function u(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=i.length,r=new Array(n);r[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var c=2;c<n;c++)r[c]=i[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,i)}d.displayName="MDXCreateElement"},34857:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>m,frontMatter:()=>n,metadata:()=>s,toc:()=>c});var o=i(87462),a=(i(67294),i(3905));const n={},r="openUC2 XIAO Microscope Documentation",s={unversionedId:"Toolboxes/DiscoveryElectronics/04_1_seeedmicroscope",id:"Toolboxes/DiscoveryElectronics/04_1_seeedmicroscope",title:"openUC2 XIAO Microscope Documentation",description:"If you have any question, please refer to our forum: openuc2.discourse.group",source:"@site/docs/01_Toolboxes/02_DiscoveryElectronics/04_1_seeedmicroscope.md",sourceDirName:"01_Toolboxes/02_DiscoveryElectronics",slug:"/Toolboxes/DiscoveryElectronics/04_1_seeedmicroscope",permalink:"/docs/Toolboxes/DiscoveryElectronics/04_1_seeedmicroscope",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"openUC2 *Spectrometer*",permalink:"/docs/Toolboxes/DiscoveryElectronics/spectrometer"},next:{title:"openUC2 Interferometer Introduction",permalink:"/docs/Toolboxes/DiscoveryInterferometer/Interferometer_intro"}},l={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Key Features",id:"key-features",level:2},{value:"Product Description",id:"product-description",level:2},{value:"Specifications",id:"specifications",level:3},{value:"Main Applications",id:"main-applications",level:2},{value:"Comparison with Existing Microscopes",id:"comparison-with-existing-microscopes",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Experiments",id:"experiments",level:2},{value:"Experiment 1: Flow Microscopy with External UC2 Electronics",id:"experiment-1-flow-microscopy-with-external-uc2-electronics",level:3},{value:"Experiment 2: Autofocus and Miniaturized Stage for Large Samples",id:"experiment-2-autofocus-and-miniaturized-stage-for-large-samples",level:3},{value:"Experiment 3: Timelapse of Yeast Cells",id:"experiment-3-timelapse-of-yeast-cells",level:3},{value:"Community and Support",id:"community-and-support",level:2}],p={toc:c};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"openuc2-xiao-microscope-documentation"},"openUC2 XIAO Microscope Documentation"),(0,a.kt)("admonition",{title:"Avoid colliding IDs",type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"If you have any question, please refer to our forum: openuc2.discourse.group")),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"The openUC2 XIAO Microscope is a revolutionary step towards making high-quality, automated microscopy accessible to everyone. Created in collaboration with Seeed Studio, this device is ideal for hackers, optics newcomers, and biologists. It offers more functionalities than a standard USB microscope, including timelapse, autofocusing, and autonomous operation with image storage on an SD card. This guide will help you understand the capabilities of the openUC2 XIAO Microscope and provide a comprehensive tutorial for its use."),(0,a.kt)("p",null,(0,a.kt)("img",{src:i(65122).Z,width:"3066",height:"1562"}),"\n",(0,a.kt)("em",{parentName:"p"},"From Rapid Prototyping in Optics to a powerful microscopy-engine for your tinkering project")),(0,a.kt)("h2",{id:"key-features"},"Key Features"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Powerful Camera"),": Equipped with the ESP32-S3 camera and an OV2560 sensor, it streams high-resolution microscopic images to your screen, supported by Arduino and CircuitPython."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Micrometer-Precise Focus"),": The metal-based focusing mechanism ensures precise movement of the objective lens, allowing for detailed studies. It supports motorized focus stacking for automation."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Robust Power Design"),": The solid housing ensures reliability for everyday field research."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Swappable Microscope Objectives"),": Easily change magnifications to observe live samples from different angles."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Customized Firmware"),": Utilizes TinyML for on-the-fly image processing directly on the MCU, integrating sensors and other hardware for automated experiments.")),(0,a.kt)("p",null,(0,a.kt)("img",{src:i(45720).Z,width:"3648",height:"2736"}),"\n",(0,a.kt)("em",{parentName:"p"},"It's so easy to operate that even a 3-year old can do it \ud83d\ude03")),(0,a.kt)("h2",{id:"product-description"},"Product Description"),(0,a.kt)("p",null,"The openUC2 XIAO Microscope features a solid body, a high-quality camera for image transfer, and optics for magnification. The modular design allows for the integration of various optical elements like lenses, mirrors, or cameras housed in cubes. These cubes can be combined to create sophisticated optical assemblies, including microscopes, with the flexibility to add autofocusing modules or motorized stages."),(0,a.kt)("p",null,(0,a.kt)("img",{src:i(49590).Z,width:"3648",height:"2736"}),"\n",(0,a.kt)("em",{parentName:"p"},"It's very compact and can be transported in your backpack. Ideal e.g. for a hike")),(0,a.kt)("h3",{id:"specifications"},"Specifications"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Processor"),(0,a.kt)("td",{parentName:"tr",align:null},"ESP32-S3 SoC with a RISC-V single-core 32-bit chip, up to 160 MHz")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Wireless"),(0,a.kt)("td",{parentName:"tr",align:null},"2.4GHz Wi-Fi, Bluetooth 5.0/Bluetooth mesh")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Optical Resolution"),(0,a.kt)("td",{parentName:"tr",align:null},"10x, 0.3 NA Objective Lens, resolution down to 4\xb5m")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Interface"),(0,a.kt)("td",{parentName:"tr",align:null},"UART, IIC, SPI, 11x GPIO (PWM), 4x ADC, Reset button, Boot button")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Dimensions"),(0,a.kt)("td",{parentName:"tr",align:null},"150 x 100 x 50 mm")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Power"),(0,a.kt)("td",{parentName:"tr",align:null},"Input voltage (VIN): 5V")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Working Temperature"),(0,a.kt)("td",{parentName:"tr",align:null},"-40\xb0C to 85\xb0C")))),(0,a.kt)("h2",{id:"main-applications"},"Main Applications"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Timelapse Imaging")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Education")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Environmental Research")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Field Research")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Health Monitoring")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Rapid Prototyping"))),(0,a.kt)("h2",{id:"comparison-with-existing-microscopes"},"Comparison with Existing Microscopes"),(0,a.kt)("p",null,"Traditional microscopes are often limited by fixed functionalities and high costs. The openUC2 XIAO Microscope's modular, open-source design offers unparalleled flexibility and affordability, making advanced microscopy accessible for educational, research, and field applications."),(0,a.kt)("p",null,(0,a.kt)("img",{src:i(45720).Z,width:"3648",height:"2736"}),"\n*The objective lens can easily"),(0,a.kt)("h2",{id:"getting-started"},"Getting Started"),(0,a.kt)("p",null,"The openUC2 XIAO Microscope is a combination of the MatchboxScope (based on the ESP32 camera) and the UC2 modular system. The firmware is open-source and can be flashed using a web interface."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Connect the Xiao via USB-C to your computer."),(0,a.kt)("li",{parentName:"ol"},"Visit ",(0,a.kt)("a",{parentName:"li",href:"https://matchboxscope.github.io/firmware/FLASH.html"},"Matchboxscope Firmware")," to flash the Xiao firmware."),(0,a.kt)("li",{parentName:"ol"},"The microscope creates a Wi-Fi hotspot named ",(0,a.kt)("inlineCode",{parentName:"li"},"OpenUC2xSeeed-XXXXX")," (where ",(0,a.kt)("inlineCode",{parentName:"li"},"XXXXX")," is the MAC address)."),(0,a.kt)("li",{parentName:"ol"},"Connect to this hotspot using your laptop, tablet, or smartphone."),(0,a.kt)("li",{parentName:"ol"},"Access the web interface at ",(0,a.kt)("inlineCode",{parentName:"li"},"192.168.4.1")," to stream images and adjust settings.")),(0,a.kt)("p",null,"For enhanced functionality, download the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Matchboxscope/Anglerfish-APP/releases"},"Anglerfish APP")," for additional features like video storage and external hardware control."),(0,a.kt)("h2",{id:"experiments"},"Experiments"),(0,a.kt)("h3",{id:"experiment-1-flow-microscopy-with-external-uc2-electronics"},"Experiment 1: Flow Microscopy with External UC2 Electronics"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Use external electronics to control fluid samples and capture images as they move. Curious? Click ",(0,a.kt)("a",{parentName:"li",href:"./"},"here"))),(0,a.kt)("h3",{id:"experiment-2-autofocus-and-miniaturized-stage-for-large-samples"},"Experiment 2: Autofocus and Miniaturized Stage for Large Samples"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Implement a motorized stage for precise sample positioning and autofocusing.")),(0,a.kt)("h3",{id:"experiment-3-timelapse-of-yeast-cells"},"Experiment 3: Timelapse of Yeast Cells"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Capture the growth of yeast cells over time to study their behavior and development.")),(0,a.kt)("h2",{id:"community-and-support"},"Community and Support"),(0,a.kt)("p",null,"Join our community on Discord in the #tinyml channel for support and collaboration. Explore the extensive library of UC2-compatible parts to expand the capabilities of your microscope."),(0,a.kt)("p",null,"For detailed tutorials and further information, visit ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/openUC2/openUC2-SEEED-XIAO-Camera"},"openUC2 GitHub Repository"),"."),(0,a.kt)("h1",{id:"experiment-1---flow-microscopy"},"Experiment 1 - Flow Microscopy"),(0,a.kt)("p",null,(0,a.kt)("img",{src:i(83648).Z,width:"4175",height:"2250"})),(0,a.kt)("p",null,(0,a.kt)("img",{src:i(37765).Z,width:"480",height:"997"})),(0,a.kt)("p",null,(0,a.kt)("img",{src:i(51238).Z,width:"960",height:"540"})),(0,a.kt)("p",null,(0,a.kt)("img",{src:i(83140).Z,width:"500",height:"281"})),(0,a.kt)("h1",{id:"experiment-2---uc2e--microscopy"},"Experiment 2 - UC2e + Microscopy"),(0,a.kt)("p",null,(0,a.kt)("img",{src:i(42833).Z,width:"4303",height:"2025"})),(0,a.kt)("p",null,(0,a.kt)("img",{src:i(70332).Z,width:"800",height:"450"})),(0,a.kt)("p",null,(0,a.kt)("img",{src:i(14563).Z,width:"2736",height:"3648"})),(0,a.kt)("h1",{id:"experiment-3---timelapse-imaging"},"Experiment 3 - Timelapse Imaging"),(0,a.kt)("p",null,"HeLa Cells "),(0,a.kt)("p",null,"By combining the best components from the MatchboxScope and UC2 modular systems, the openUC2 XIAO Microscope offers a powerful and flexible tool for a wide range of applications, making advanced microscopy accessible to a broader audience."))}m.isMDXComponent=!0},42833:(e,t,i)=>{i.d(t,{Z:()=>o});const o=i.p+"assets/images/ConnectionDiagram-591f1d4cadd62a06b4f18bb0fa41a49e.png"},45720:(e,t,i)=>{i.d(t,{Z:()=>o});const o=i.p+"assets/images/IMG_20240708_125607-8a6c08bea0404be32a524b6d82ed8d26.jpg"},49590:(e,t,i)=>{i.d(t,{Z:()=>o});const o=i.p+"assets/images/IMG_20240708_131620-e2b37e5a53511a8e5abf7d47b896df6d.jpg"},14563:(e,t,i)=>{i.d(t,{Z:()=>o});const o=i.p+"assets/images/IMG_20240721_164131-b73315b740cecf7c54242db1d857f3e6.jpg"},51238:(e,t,i)=>{i.d(t,{Z:()=>o});const o=i.p+"assets/images/MeinFilm21-7b1aee6a4513f583c2d5969878ed8a30.gif"},83140:(e,t,i)=>{i.d(t,{Z:()=>o});const o=i.p+"assets/images/MeinFilm22-b072220e9c9d52bfc110d0211d8551d6.gif"},83648:(e,t,i)=>{i.d(t,{Z:()=>o});const o=i.p+"assets/images/PontWater-1a37a910b5ddae74d62fe990b8679148.png"},37765:(e,t,i)=>{i.d(t,{Z:()=>o});const o=i.p+"assets/images/SVID_20240721_113753_1-630b0cdb8ee830416021aa2fb052211a.gif"},70332:(e,t,i)=>{i.d(t,{Z:()=>o});const o=i.p+"assets/images/VID_20240721_164303-bb15a1d95c8af3ea5dfafaf9b73a57de.gif"},65122:(e,t,i)=>{i.d(t,{Z:()=>o});const o=i.p+"assets/images/openUC2xSeeed-9c9dd4faeaa0e045dbcbca9c2b25e37a.png"}}]);