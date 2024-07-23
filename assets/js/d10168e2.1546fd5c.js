"use strict";(self.webpackChunkuc_2_docs=self.webpackChunkuc_2_docs||[]).push([[8584],{3905:(t,e,a)=>{a.d(e,{Zo:()=>s,kt:()=>u});var n=a(67294);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,l=function(t,e){if(null==t)return{};var a,n,l={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(l[a]=t[a]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(l[a]=t[a])}return l}var p=n.createContext({}),m=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},s=function(t){var e=m(t.components);return n.createElement(p.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},g=n.forwardRef((function(t,e){var a=t.components,l=t.mdxType,r=t.originalType,p=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),g=m(a),u=l,c=g["".concat(p,".").concat(u)]||g[u]||d[u]||r;return a?n.createElement(c,i(i({ref:e},s),{},{components:a})):n.createElement(c,i({ref:e},s))}));function u(t,e){var a=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=a.length,i=new Array(r);i[0]=g;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:l,i[1]=o;for(var m=2;m<r;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},67288:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>m});var n=a(87462),l=(a(67294),a(3905));const r={id:"LightSheet",title:"openUC2 Light-Sheet Microscope"},i="Workshop Manual: Building a Light-Sheet Microscope with UC2",o={unversionedId:"Investigator/Lightsheet/LightSheet",id:"Investigator/Lightsheet/LightSheet",title:"openUC2 Light-Sheet Microscope",description:"In this experiment, we will explore the concept of optical sectioning to improve the resolution along the optical axis and the XY plane. The Light-Sheet Microscope, also known as the Light-Sheet Microscopy or Lattice Light-Sheet Microscopy, is a powerful technique used to acquire volumetric images of samples, such as zebrafishes. This technique enables us to visualize biological specimens in three dimensions with high resolution and minimal phototoxicity.",source:"@site/docs/02_Investigator/04_Lightsheet/03_LightSheet.md",sourceDirName:"02_Investigator/04_Lightsheet",slug:"/Investigator/Lightsheet/LightSheet",permalink:"/docs/Investigator/Lightsheet/LightSheet",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"LightSheet",title:"openUC2 Light-Sheet Microscope"},sidebar:"tutorialSidebar",previous:{title:"Stage Scanning and Image Stitching (ASHLAR)",permalink:"/docs/Investigator/XYZMicroscope/StageScanning"},next:{title:"openUC2 Light-Sheet Microscope (Old Version)",permalink:"/docs/Investigator/Lightsheet/LightSheetOld"}},p={},m=[{value:"Background Information",id:"background-information",level:2},{value:"Learning Objectives:",id:"learning-objectives",level:2},{value:"UC2 Light-sheet setup",id:"uc2-light-sheet-setup",level:2},{value:"Step 1: Assembling the Basic Components",id:"step-1-assembling-the-basic-components",level:2},{value:"A Video walk-through the process of the light-sheet assembly",id:"a-video-walk-through-the-process-of-the-light-sheet-assembly",level:3},{value:"Final assembly",id:"final-assembly",level:3},{value:"Step 2: Light-Sheet Generation and Sample Preparation",id:"step-2-light-sheet-generation-and-sample-preparation",level:2},{value:"Step 3: Image Acquisition",id:"step-3-image-acquisition",level:2},{value:"Benefits of Light-Sheet Microscopy",id:"benefits-of-light-sheet-microscopy",level:2},{value:"Bill-of-Material",id:"bill-of-material",level:2},{value:"Conclusion",id:"conclusion",level:2}],s={toc:m};function d(t){let{components:e,...r}=t;return(0,l.kt)("wrapper",(0,n.Z)({},s,r,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"workshop-manual-building-a-light-sheet-microscope-with-uc2"},"Workshop Manual: Building a Light-Sheet Microscope with UC2"),(0,l.kt)("p",null,"In this experiment, we will explore the concept of optical sectioning to improve the resolution along the optical axis and the XY plane. The Light-Sheet Microscope, also known as the Light-Sheet Microscopy or Lattice Light-Sheet Microscopy, is a powerful technique used to acquire volumetric images of samples, such as zebrafishes. This technique enables us to visualize biological specimens in three dimensions with high resolution and minimal phototoxicity."),(0,l.kt)("h2",{id:"background-information"},"Background Information"),(0,l.kt)("p",null,"Traditional microscopy techniques have limitations in both axial and lateral resolution. Optical sectioning is a method that aims to improve the resolution along the optical axis, enabling better separation of different components within a sample. One well-known technique for optical sectioning is confocal microscopy, but it requires complex setups and scanning of the sample."),(0,l.kt)("p",null,"Approximately 200 years ago, ultramicroscopy was established as a method to improve optical sectioning. Unlike traditional transmission microscopy, ultramicroscopy illuminates the sample from the side, creating dark-field illumination, where only scattered light is used for image formation. Light-sheet microscopy takes this concept further and shapes an optical sheet to illuminate a single plane of the sample. This plane is then imaged by a microscope objective oriented perpendicularly to the sheet. By moving the sample through this setup step by step, a three-dimensional stack can be acquired."),(0,l.kt)("h2",{id:"learning-objectives"},"Learning Objectives:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Understand the principles of light-sheet microscopy and optical sectioning."),(0,l.kt)("li",{parentName:"ol"},"Assemble the basic components of the light-sheet microscope using the UC2 toolbox."),(0,l.kt)("li",{parentName:"ol"},"Construct a three-dimensional stack of a sample using the light-sheet microscope.")),(0,l.kt)("h2",{id:"uc2-light-sheet-setup"},"UC2 Light-sheet setup"),(0,l.kt)("p",null,"This is the sketch of the microscope that we will realize with UC2 cubes:"),(0,l.kt)("p",null,(0,l.kt)("img",{src:a(31063).Z,width:"2415",height:"1636"})),(0,l.kt)("h2",{id:"step-1-assembling-the-basic-components"},"Step 1: Assembling the Basic Components"),(0,l.kt)("p",null,"The core components of the light-sheet microscope are as follows:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"A fiber-coupled laser emitting at 488 nanometers, collimated with a polarimeter.\n",(0,l.kt)("img",{src:a(47620).Z,width:"3648",height:"2736"})),(0,l.kt)("li",{parentName:"ul"},"A cylindrical lens with a focal length of 100 mm to create a one-dimensional focus."),(0,l.kt)("li",{parentName:"ul"},"A kinematic mirror to adjust the laser beam position.\n",(0,l.kt)("img",{src:a(11136).Z,width:"3648",height:"2736"})),(0,l.kt)("li",{parentName:"ul"},"A lens with a focal length of approximately 10 mm to shape the laser beam."),(0,l.kt)("li",{parentName:"ul"},"A four-fold objective lens to transform the light sheet into the sample plane.\n",(0,l.kt)("img",{src:a(28193).Z,width:"3648",height:"2736"})),(0,l.kt)("li",{parentName:"ul"},"An aquarium to hold the sample, with windows for excitation and detection.\n",(0,l.kt)("img",{src:a(47830).Z,width:"3648",height:"2736"})),(0,l.kt)("li",{parentName:"ul"},"A LED for transmission illumination.\n",(0,l.kt)("img",{src:a(60271).Z,width:"2736",height:"3648"})),(0,l.kt)("li",{parentName:"ul"},"A ten-fold objective lens with a long working distance for detection.\n",(0,l.kt)("img",{src:a(30157).Z,width:"2736",height:"3648"}),(0,l.kt)("img",{src:a(16869).Z,width:"3648",height:"2736"})),(0,l.kt)("li",{parentName:"ul"},"An emission filter and a tube lens connected to a monochromatic CMOS camera for image acquisition.\n",(0,l.kt)("img",{src:a(50104).Z,width:"3648",height:"2736"}),(0,l.kt)("img",{src:a(81065).Z,width:"3648",height:"2736"}),(0,l.kt)("img",{src:a(17443).Z,width:"3648",height:"2736"})),(0,l.kt)("li",{parentName:"ul"},"A micrometer-precise XYZ stage to move the sample.\n",(0,l.kt)("img",{src:a(6055).Z,width:"2736",height:"3648"}))),(0,l.kt)("h3",{id:"a-video-walk-through-the-process-of-the-light-sheet-assembly"},"A Video walk-through the process of the light-sheet assembly"),(0,l.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/FLtDSjuhrro",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}),(0,l.kt)("h3",{id:"final-assembly"},"Final assembly"),(0,l.kt)("p",null,(0,l.kt)("img",{src:a(76915).Z,width:"3648",height:"2736"}),"\n",(0,l.kt)("em",{parentName:"p"},"Z-stage for the objective lens")),(0,l.kt)("p",null,(0,l.kt)("img",{src:a(53263).Z,width:"3648",height:"2736"}),"\n",(0,l.kt)("em",{parentName:"p"},"Almost Fully assembled UC2 Lighthseet microscope")),(0,l.kt)("h2",{id:"step-2-light-sheet-generation-and-sample-preparation"},"Step 2: Light-Sheet Generation and Sample Preparation"),(0,l.kt)("p",null,"The fiber-coupled laser emits light at a wavelength of 488 nanometers, which is ideal for exciting fluorescent molecules commonly used in biological imaging, such as green fluorescent protein (GFP). The collimated laser beam passes through a cylindrical lens, creating a one-dimensional focus with a width of approximately 10 mm."),(0,l.kt)("p",null,"The kinematic mirror allows precise control of the laser beam position, ensuring proper alignment. The lens further shapes the laser beam into an optical sheet, which is then directed into the sample plane by the four-fold objective lens."),(0,l.kt)("p",null,"The sample, such as a zebrafish embryo, is held in a small aquarium filled with water. The sample is positioned such that the light sheet intersects it, and fluorescence signals are emitted only where the light sheet illuminates."),(0,l.kt)("h2",{id:"step-3-image-acquisition"},"Step 3: Image Acquisition"),(0,l.kt)("p",null,"Using the XYZ stage, move the sample in the focal plane of the ten-fold objective lens. The camera will capture images as the sample is moved, allowing you to create a three-dimensional stack of the object. The long working distance of the objective lens allows sufficient space between the lens and the sample, reducing the potential for photodamage and phototoxicity."),(0,l.kt)("h2",{id:"benefits-of-light-sheet-microscopy"},"Benefits of Light-Sheet Microscopy"),(0,l.kt)("p",null,"Light-sheet microscopy offers several advantages for imaging biological samples:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Optical sectioning: The light-sheet illuminates only the focal plane, minimizing background noise and out-of-focus signals."),(0,l.kt)("li",{parentName:"ul"},"Reduced phototoxicity: With the sample illuminated only in the focal plane, light-sheet microscopy reduces photodamage and photobleaching, allowing long-term imaging of live samples."),(0,l.kt)("li",{parentName:"ul"},"High-speed imaging: Light-sheet microscopy enables rapid volumetric imaging, capturing dynamic processes in real-time."),(0,l.kt)("li",{parentName:"ul"},"High resolution: The combination of optical sectioning and minimal scattering allows for high-resolution imaging, revealing fine cellular structures.")),(0,l.kt)("h2",{id:"bill-of-material"},"Bill-of-Material"),(0,l.kt)("p",null,"This is a list of components that are used in the latest version of the openUC2 light-sheet microscope. This is subject to changes. If you are interested to build one of these devices and need a kit, please, don't hesitate to contact us via Mail, Github or other channels :)\nFind more information on ",(0,l.kt)("a",{parentName:"p",href:"http://www.openuc2.com"},"www.openuc2.com")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Category"),(0,l.kt)("th",{parentName:"tr",align:null},"Amount"),(0,l.kt)("th",{parentName:"tr",align:null},"Part"),(0,l.kt)("th",{parentName:"tr",align:null},"Shop"),(0,l.kt)("th",{parentName:"tr",align:null},"Price (\u20ac)"),(0,l.kt)("th",{parentName:"tr",align:null},"Comment"),(0,l.kt)("th",{parentName:"tr",align:null},"Quantity"),(0,l.kt)("th",{parentName:"tr",align:null},"URL/Source"),(0,l.kt)("th",{parentName:"tr",align:null},"Alternative"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"External Parts"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"Cylindrical lens, comar"),(0,l.kt)("td",{parentName:"tr",align:null},"Thorolabs"),(0,l.kt)("td",{parentName:"tr",align:null},"150"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://www.thorlabs.com/thorproduct.cfm?partnumber=LJ1567L1"},"Link")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"Camera, monochrome, CMOS"),(0,l.kt)("td",{parentName:"tr",align:null},"Daheng"),(0,l.kt)("td",{parentName:"tr",align:null},"350"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://www.machinevisionkamera.de/USB3-Bildverarbeitungskamera-12.2MP-Monochrome-Sony-IMX226-MER2-1220-32U3M"},"Link")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"Focusing stage, micrometer, motorized (NEMA12)"),(0,l.kt)("td",{parentName:"tr",align:null},"China"),(0,l.kt)("td",{parentName:"tr",align:null},"100"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"Haoran"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"10x objective, NA0.3, long-working distance"),(0,l.kt)("td",{parentName:"tr",align:null},"USA"),(0,l.kt)("td",{parentName:"tr",align:null},"250"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://bolioptics.com/10x-infinity-corrected-plan-achromatic-microscope-objective-lens-bm05073332/"},"Link")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"XYZ stage, AliExpress, micrometer"),(0,l.kt)("td",{parentName:"tr",align:null},"China"),(0,l.kt)("td",{parentName:"tr",align:null},"250"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://de.aliexpress.com/item/33013923564.html?gatewayAdapt=glo2deu"},"Link")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://www.mjkzz.de/products/xyz-40x40mm-manual-microstage?variant=43281669488885"},"Link"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},"Motor for stage"),(0,l.kt)("td",{parentName:"tr",align:null},"China"),(0,l.kt)("td",{parentName:"tr",align:null},"80"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://eckstein-shop.de/PololuStepperMotorNEMA11Bipolar200StepsRev28C39732mm38V067APhase"},"Link")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://de.nanotec.com/produkte/2604-captive-nema8-linear-actuator-lga20"},"Link"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"Tube lens"),(0,l.kt)("td",{parentName:"tr",align:null},"China"),(0,l.kt)("td",{parentName:"tr",align:null},"200"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://www.berrybase.de/100mm-teleobjektiv-c-mount"},"Link")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"Fiber laser"),(0,l.kt)("td",{parentName:"tr",align:null},"China"),(0,l.kt)("td",{parentName:"tr",align:null},"200"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"Haoran"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://www.lasertack.com/en/50mw-488nm-fiber-coupled-laser-nds7175-nds4116-nds4216/"},"Link"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"Mirror"),(0,l.kt)("td",{parentName:"tr",align:null},"PGI"),(0,l.kt)("td",{parentName:"tr",align:null},"5"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://pgi-shop.de/vorderflaechen-glasspiegel-30-0-x-40-0-mm/"},"Link")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"4x objective lens finite"),(0,l.kt)("td",{parentName:"tr",align:null},"China"),(0,l.kt)("td",{parentName:"tr",align:null},"10"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"Haoran"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"Fiber Collimator"),(0,l.kt)("td",{parentName:"tr",align:null},"China"),(0,l.kt)("td",{parentName:"tr",align:null},"100"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"Haoran"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"14"),(0,l.kt)("td",{parentName:"tr",align:null},"Baseplates"),(0,l.kt)("td",{parentName:"tr",align:null},"openUC2"),(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"14"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"8"),(0,l.kt)("td",{parentName:"tr",align:null},"Cubes"),(0,l.kt)("td",{parentName:"tr",align:null},"openUC2"),(0,l.kt)("td",{parentName:"tr",align:null},"5"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"10"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"Solid baseplate (aluminium)"),(0,l.kt)("td",{parentName:"tr",align:null},"openUC2"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"Excitation filter (Thorlabs)"),(0,l.kt)("td",{parentName:"tr",align:null},"Thorolabs"),(0,l.kt)("td",{parentName:"tr",align:null},"120"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://www.thorlabs.com/thorproduct.cfm?partnumber=FELH0500"},"Link")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Inserts"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"Fiber Collimator Mount"),(0,l.kt)("td",{parentName:"tr",align:null},"openUC2"),(0,l.kt)("td",{parentName:"tr",align:null},"5"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"Cylindrical Lens Mount"),(0,l.kt)("td",{parentName:"tr",align:null},"openUC2"),(0,l.kt)("td",{parentName:"tr",align:null},"5"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"45\xb0 Mirror Mount (kinematic)"),(0,l.kt)("td",{parentName:"tr",align:null},"openUC2"),(0,l.kt)("td",{parentName:"tr",align:null},"25"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"RMS Lens Mount"),(0,l.kt)("td",{parentName:"tr",align:null},"openUC2"),(0,l.kt)("td",{parentName:"tr",align:null},"5"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"Sample mount (printed)"),(0,l.kt)("td",{parentName:"tr",align:null},"openUC2"),(0,l.kt)("td",{parentName:"tr",align:null},"30"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"Base for XYZ Stage"),(0,l.kt)("td",{parentName:"tr",align:null},"openUC2"),(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"Sample mount for XYZ Stage"),(0,l.kt)("td",{parentName:"tr",align:null},"openUC2"),(0,l.kt)("td",{parentName:"tr",align:null},"15"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"Holder for Z-stage motorized"),(0,l.kt)("td",{parentName:"tr",align:null},"openuc2"),(0,l.kt)("td",{parentName:"tr",align:null},"30"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"Holder for Tubelens"),(0,l.kt)("td",{parentName:"tr",align:null},"openUC2"),(0,l.kt)("td",{parentName:"tr",align:null},"10"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"Holder for UC2 Electronics"),(0,l.kt)("td",{parentName:"tr",align:null},"openUC2"),(0,l.kt)("td",{parentName:"tr",align:null},"30"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Electronics"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"Electronics, Powersupply, Stepper driver"),(0,l.kt)("td",{parentName:"tr",align:null},"openUC2"),(0,l.kt)("td",{parentName:"tr",align:null},"100"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"USB cables (camera, micro)"),(0,l.kt)("td",{parentName:"tr",align:null},"Germany"),(0,l.kt)("td",{parentName:"tr",align:null},"60"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"Playstation Controller"),(0,l.kt)("td",{parentName:"tr",align:null},"Germany"),(0,l.kt)("td",{parentName:"tr",align:null},"50"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"Box + Foam insert"),(0,l.kt)("td",{parentName:"tr",align:null},"openUC2"),(0,l.kt)("td",{parentName:"tr",align:null},"100"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://www.contorion.de/p/stier-universal-outdoor-koffer-flugtauglich-lxbxh-418x317x151-mm-86520627?aid=&targetid=&campaignid=19484268152&utm_medium=SEA&utm_source=google&utm_campaign=%5B4%5D_Shopping_STIER_PMax&gclid=Cj0KCQiAw8OeBhCeARIsAGxWtUyHb9BCPHC_ap3qEnnl6NLGITkMEiZFRu66OuupmgptESC4aGEiri8aAgdREALw_wcB"},"Link")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Labour & Shipping"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"Labour + Shipping"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"500"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"TOTAL"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"2790"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("p",null,"The 3D printing files can be found ",(0,l.kt)("a",{parentName:"p",href:"./STL.zip"},"here")),(0,l.kt)("h2",{id:"conclusion"},"Conclusion"),(0,l.kt)("p",null,"Congratulations! You have successfully built a light-sheet microscope using the UC2 modular toolbox. This powerful technique allows you to acquire high-resolution three-dimensional images of samples like zebrafishes. With the ability to perform optical sectioning and minimal phototoxicity, light-sheet microscopy is a valuable tool for studying biological structures in 3D. You can now explore the fascinating world of 3D biological imaging and discover new insights into the complexities of life at the microscopic level. Happy imaging!"))}d.isMDXComponent=!0},76915:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/IMG_20230729_080521-aff53db45859ac150c78ee915573379d.jpg"},53263:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/IMG_20230729_084550-7d8c605fcbc476489b677a6a964e4967.jpg"},47620:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/IMG_20240607_111929-b920b01723346d633c73feef509fe537.jpg"},11136:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/IMG_20240607_112600-7d2283bf4c6c7e1f58d10c2893de8ff6.jpg"},28193:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/IMG_20240607_112750-8b40b09fe252952ffa78ebb6efb50569.jpg"},47830:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/IMG_20240607_113058-dd5e453bd212d4fb67e4aa37f2347ed8.jpg"},60271:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/IMG_20240607_113421-a9c6a8fb05df7f65f387cf4973076038.jpg"},30157:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/IMG_20240607_113542-5fa2ce7336eac86e56bd8a977c80d3f5.jpg"},16869:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/IMG_20240607_114005-58591cd2ec930c16511fabf958fc42a5.jpg"},50104:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/IMG_20240607_114202-31f8b38fec7bcae7145df2afd4dfccd9.jpg"},81065:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/IMG_20240607_114304-5086e0349a967d1854202d1a51720f0f.jpg"},17443:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/IMG_20240607_114311-e8e09022bcf74e5b7af907045260af39.jpg"},6055:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/IMG_20240607_114908-2ed4e38edb0b0b8141685e8edacffd36.jpg"},31063:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/UC2_Lightsheet_Setup-7ea3537c91f87437ae945937791714f3.png"}}]);