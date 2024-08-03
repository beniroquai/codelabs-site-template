"use strict";(self.webpackChunkuc_2_docs=self.webpackChunkuc_2_docs||[]).push([[8895],{3905:(e,t,i)=>{i.d(t,{Zo:()=>c,kt:()=>u});var a=i(67294);function o(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function n(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function r(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?n(Object(i),!0).forEach((function(t){o(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,a,o=function(e,t){if(null==e)return{};var i,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)i=n[a],t.indexOf(i)>=0||(o[i]=e[i]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)i=n[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(o[i]=e[i])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):r(r({},t),e)),i},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var i=e.components,o=e.mdxType,n=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(i),u=o,h=m["".concat(l,".").concat(u)]||m[u]||d[u]||n;return i?a.createElement(h,r(r({ref:t},c),{},{components:i})):a.createElement(h,r({ref:t},c))}));function u(e,t){var i=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=i.length,r=new Array(n);r[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var p=2;p<n;p++)r[p]=i[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,i)}m.displayName="MDXCreateElement"},34857:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>n,metadata:()=>s,toc:()=>p});var a=i(87462),o=(i(67294),i(3905));const n={},r="openUC2 XIAO Microscope Documentation",s={unversionedId:"Toolboxes/DiscoveryElectronics/04_1_seeedmicroscope",id:"Toolboxes/DiscoveryElectronics/04_1_seeedmicroscope",title:"openUC2 XIAO Microscope Documentation",description:"If you have any question, please refer to our forum: openuc2.discourse.group",source:"@site/docs/01_Toolboxes/02_DiscoveryElectronics/04_1_seeedmicroscope.md",sourceDirName:"01_Toolboxes/02_DiscoveryElectronics",slug:"/Toolboxes/DiscoveryElectronics/04_1_seeedmicroscope",permalink:"/docs/Toolboxes/DiscoveryElectronics/04_1_seeedmicroscope",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"openUC2 *Spectrometer*",permalink:"/docs/Toolboxes/DiscoveryElectronics/spectrometer"},next:{title:"openUC2 Interferometer Introduction",permalink:"/docs/Toolboxes/DiscoveryInterferometer/Interferometer_intro"}},l={},p=[{value:"Introduction",id:"introduction",level:2},{value:"Key Features",id:"key-features",level:2},{value:"Product Description",id:"product-description",level:2},{value:"Specifications",id:"specifications",level:3},{value:"Main Applications",id:"main-applications",level:2},{value:"Comparison with Existing Microscopes",id:"comparison-with-existing-microscopes",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Experiments",id:"experiments",level:2},{value:"Experiment 1: Field Microscopy with the openUC2 XIAO Microscope",id:"experiment-1-field-microscopy-with-the-openuc2-xiao-microscope",level:3},{value:"Materials Needed",id:"materials-needed",level:4},{value:"Steps",id:"steps",level:4},{value:"1. Preparation",id:"1-preparation",level:5},{value:"2. Setting Up the Microscope",id:"2-setting-up-the-microscope",level:5},{value:"3. Analyzing the Sample",id:"3-analyzing-the-sample",level:5},{value:"4. Sharing Your Findings",id:"4-sharing-your-findings",level:5},{value:"Tips and Tricks",id:"tips-and-tricks",level:4},{value:"Example Observations",id:"example-observations",level:4},{value:"Conclusion",id:"conclusion",level:4},{value:"Experiment 2: Autofocus and Miniaturized Stage for Large Samples with the UC2 Electronic",id:"experiment-2-autofocus-and-miniaturized-stage-for-large-samples-with-the-uc2-electronic",level:3},{value:"Add motorized focussing",id:"add-motorized-focussing",level:2},{value:"Add motorized flow-stop microscopy",id:"add-motorized-flow-stop-microscopy",level:2},{value:"Add stage scanning",id:"add-stage-scanning",level:2},{value:"Experiment 3: Timelapse of Yeast Cells",id:"experiment-3-timelapse-of-yeast-cells",level:3},{value:"Community and Support",id:"community-and-support",level:2}],c={toc:p};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"openuc2-xiao-microscope-documentation"},"openUC2 XIAO Microscope Documentation"),(0,o.kt)("admonition",{type:"warning"},(0,o.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"mdxAdmonitionTitle"},"OpenUC2 Forum and Helpdesk")),(0,o.kt)("p",{parentName:"admonition"},"If you have any question, please refer to our forum: openuc2.discourse.group")),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"The openUC2 XIAO Microscope is a revolutionary step towards making high-quality, automated microscopy accessible to everyone. Created in collaboration with Seeed Studio, this device is ideal for hackers, optics newcomers, and biologists. It offers more functionalities than a standard USB microscope, including timelapse, autofocusing, and autonomous operation with image storage on an SD card. This guide will help you understand the capabilities of the openUC2 XIAO Microscope and provide a comprehensive tutorial for its use."),(0,o.kt)("p",null,(0,o.kt)("img",{src:i(65122).Z,width:"3066",height:"1562"}),"\n",(0,o.kt)("em",{parentName:"p"},"From Rapid Prototyping in Optics to a powerful microscopy-engine for your tinkering project")),(0,o.kt)("h2",{id:"key-features"},"Key Features"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Powerful Camera"),": Equipped with the ESP32-S3 camera and an OV2560 sensor, it streams high-resolution microscopic images to your screen, supported by Arduino and CircuitPython."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Micrometer-Precise Focus"),": The met kal-based focusing mechanism ensures precise movement of the objective lens, allowing for detailed studies. It supports motorized focus stacking for automation."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Robust Power Design"),": The solid housing ensures reliability for everyday field research."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Swappable Microscope Objectives"),": Easily change magnifications to observe live samples from different angles."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Customized Firmware"),": Utilizes TinyML for on-the-fly image processing directly on the MCU, integrating sensors and other hardware for automated experiments.")),(0,o.kt)("p",null,(0,o.kt)("img",{src:i(45720).Z,width:"3648",height:"2736"}),"\n",(0,o.kt)("em",{parentName:"p"},"It's so easy to operate that even a 3-year old can do it \ud83d\ude03")),(0,o.kt)("h2",{id:"product-description"},"Product Description"),(0,o.kt)("p",null,"The openUC2 XIAO Microscope features a solid body, a high-quality camera for image transfer, and optics for magnification. The modular design allows for the integration of various optical elements like lenses, mirrors, or cameras housed in cubes. These cubes can be combined to create sophisticated optical assemblies, including microscopes, with the flexibility to add autofocusing modules or motorized stages."),(0,o.kt)("p",null,(0,o.kt)("img",{src:i(49590).Z,width:"3648",height:"2736"}),"\n",(0,o.kt)("em",{parentName:"p"},"It's very compact and can be transported in your backpack. Ideal e.g. for a hike")),(0,o.kt)("h3",{id:"specifications"},"Specifications"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Processor"),(0,o.kt)("td",{parentName:"tr",align:null},"ESP32-S3 SoC with a RISC-V single-core 32-bit chip, up to 160 MHz")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Wireless"),(0,o.kt)("td",{parentName:"tr",align:null},"2.4GHz Wi-Fi, Bluetooth 5.0/Bluetooth mesh")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Optical Resolution"),(0,o.kt)("td",{parentName:"tr",align:null},"10x, 0.3 NA Objective Lens, resolution down to 4\xb5m")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Interface"),(0,o.kt)("td",{parentName:"tr",align:null},"UART, IIC, SPI, 11x GPIO (PWM), 4x ADC, Reset button, Boot button")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Dimensions"),(0,o.kt)("td",{parentName:"tr",align:null},"150 x 100 x 50 mm")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Power"),(0,o.kt)("td",{parentName:"tr",align:null},"Input voltage (VIN): 5V")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Working Temperature"),(0,o.kt)("td",{parentName:"tr",align:null},"-40\xb0C to 85\xb0C")))),(0,o.kt)("h2",{id:"main-applications"},"Main Applications"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Timelapse Imaging")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Education")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Environmental Research")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Field Research")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Health Monitoring")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Rapid Prototyping"))),(0,o.kt)("h2",{id:"comparison-with-existing-microscopes"},"Comparison with Existing Microscopes"),(0,o.kt)("p",null,"Traditional microscopes are often limited by fixed functionalities and high costs. The openUC2 XIAO Microscope's modular, open-source design offers unparalleled flexibility and affordability, making advanced microscopy accessible for educational, research, and field applications."),(0,o.kt)("p",null,(0,o.kt)("img",{src:i(22830).Z,width:"3648",height:"2736"}),"\n",(0,o.kt)("em",{parentName:"p"},"The objective lens can easily be swapped by unscrewing it from the RMS thread")),(0,o.kt)("h2",{id:"getting-started"},"Getting Started"),(0,o.kt)("p",null,"The openUC2 XIAO Microscope is a combination of the MatchboxScope (based on the ESP32 camera) and the UC2 modular system. The firmware is open-source and can be flashed using a web interface."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Connect the Xiao via USB-C to your computer."),(0,o.kt)("li",{parentName:"ol"},"Visit ",(0,o.kt)("a",{parentName:"li",href:"https://matchboxscope.github.io/firmware/FLASH.html"},"Matchboxscope Firmware")," to flash the Xiao firmware."),(0,o.kt)("li",{parentName:"ol"},"The microscope creates a Wi-Fi hotspot named ",(0,o.kt)("inlineCode",{parentName:"li"},"OpenUC2xSeeed-XXXXX")," (where ",(0,o.kt)("inlineCode",{parentName:"li"},"XXXXX")," is the MAC address)."),(0,o.kt)("li",{parentName:"ol"},"Connect to this hotspot using your laptop, tablet, or smartphone."),(0,o.kt)("li",{parentName:"ol"},"Access the web interface at ",(0,o.kt)("inlineCode",{parentName:"li"},"192.168.4.1")," to stream images and adjust settings.")),(0,o.kt)("p",null,"For enhanced functionality, download the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Matchboxscope/Anglerfish-APP/releases"},"Anglerfish APP")," for additional features like video storage and external hardware control."),(0,o.kt)("h2",{id:"experiments"},"Experiments"),(0,o.kt)("h3",{id:"experiment-1-field-microscopy-with-the-openuc2-xiao-microscope"},"Experiment 1: Field Microscopy with the openUC2 XIAO Microscope"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Take the microscope and explore the microverse wherever you go"),"\nIn this experiment, we will take the Seeed Studio openUC2 XIAO Microscope on a field trip to explore microscopic details of water samples from various natural sources. This tutorial will guide you through setting up the microscope, collecting samples, and analyzing them."),(0,o.kt)("p",null,(0,o.kt)("img",{src:i(83648).Z,width:"4175",height:"2250"})),(0,o.kt)("h4",{id:"materials-needed"},"Materials Needed"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"openUC2 XIAO Microscope"),(0,o.kt)("li",{parentName:"ul"},"USB cable"),(0,o.kt)("li",{parentName:"ul"},"Power bank or smartphone (for power)"),(0,o.kt)("li",{parentName:"ul"},"Flashlight (for illumination)"),(0,o.kt)("li",{parentName:"ul"},"Plastic petri dish"),(0,o.kt)("li",{parentName:"ul"},"Syringe or spoon (for collecting samples)"),(0,o.kt)("li",{parentName:"ul"},"Android device with the openUC2 app (optional)")),(0,o.kt)("h4",{id:"steps"},"Steps"),(0,o.kt)("h5",{id:"1-preparation"},"1. Preparation"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Pack the Equipment"),": Secure the openUC2 XIAO Microscope in a protective box. Ensure you have a USB cable, a power bank or smartphone, a flashlight, and a plastic petri dish.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Collect Samples"),": During your field trip, use a syringe or spoon to collect water samples from ponds, lakes, or puddles. Transfer the water into the plastic petri dish."))),(0,o.kt)("h5",{id:"2-setting-up-the-microscope"},"2. Setting Up the Microscope"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Power Up"),": Connect the openUC2 XIAO Microscope to a power source using the USB cable. This can be either a power bank or your smartphone.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Illumination"),": Use the flashlight to illuminate the sample from above or below, as needed."))),(0,o.kt)("h5",{id:"3-analyzing-the-sample"},"3. Analyzing the Sample"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Connecting to the Microscope"),":"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Turn on the openUC2 XIAO Microscope."),(0,o.kt)("li",{parentName:"ul"},"Connect your smartphone to the microscope's Wi-Fi hotspot, named ",(0,o.kt)("inlineCode",{parentName:"li"},"OpenUC2xSeeed-XXXXX")," (where ",(0,o.kt)("inlineCode",{parentName:"li"},"XXXXX")," is the MAC address)."),(0,o.kt)("li",{parentName:"ul"},"Open a web browser and navigate to ",(0,o.kt)("inlineCode",{parentName:"li"},"192.168.4.1")," to access the microscope's web interface."),(0,o.kt)("li",{parentName:"ul"},"Alternatively, you can use the openUC2 Android app to view the live stream."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Placing the Sample"),":"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Place the petri dish with your water sample on the microscope stage."),(0,o.kt)("li",{parentName:"ul"},"Ensure that the sample is directly under the objective lens."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Focusing the Microscope"),":"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Start the live stream on the web interface or the Android app."),(0,o.kt)("li",{parentName:"ul"},"Observe the live feed and adjust the position of the sample to find areas with potential microscopic details."),(0,o.kt)("li",{parentName:"ul"},"Use the focus knob to move the objective lens up and down while observing the live stream for changes in contrast and sharpness."),(0,o.kt)("li",{parentName:"ul"},"Continue adjusting until the sample is in sharp focus."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Exploring the Sample"),":"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Once focused, move the sample in the XY direction to explore different areas."),(0,o.kt)("li",{parentName:"ul"},"Look for interesting microscopic structures such as single-celled organisms, fibers, or particles.")))),(0,o.kt)("p",null,(0,o.kt)("img",{src:i(37765).Z,width:"480",height:"997"}),"\n",(0,o.kt)("em",{parentName:"p"},"This is our Android APP that enables you to save video files as well")),(0,o.kt)("h5",{id:"4-sharing-your-findings"},"4. Sharing Your Findings"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Capture images or record videos of interesting findings directly from the web interface or app."),(0,o.kt)("li",{parentName:"ul"},"Share your discoveries on social media using the hashtag #openUC2. You can also post your images on the openUC2 Twitter channel to share with the community.")),(0,o.kt)("h4",{id:"tips-and-tricks"},"Tips and Tricks"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Ensure the sample is relatively still to get clear images."),(0,o.kt)("li",{parentName:"ul"},"If the sample contains a lot of debris, let it settle before placing it under the microscope."),(0,o.kt)("li",{parentName:"ul"},"Use different lighting angles to enhance the visibility of certain structures.")),(0,o.kt)("h4",{id:"example-observations"},"Example Observations"),(0,o.kt)("p",null,"During our field trip to the Bavarian Alps, we collected various water samples and observed the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Microplastics"),": Small fibers from textiles and plastics were clearly visible."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Microorganisms"),": Single-celled organisms were observed moving through the water, searching for food."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Debris"),": Various small particles, including tiny stones, were also present.")),(0,o.kt)("p",null,(0,o.kt)("img",{src:i(51238).Z,width:"960",height:"540"}),"\n",(0,o.kt)("em",{parentName:"p"},"Is this a fiber or a worm?")),(0,o.kt)("h4",{id:"conclusion"},"Conclusion"),(0,o.kt)("p",null,"Field microscopy with the openUC2 XIAO Microscope allows for real-time exploration of microscopic worlds directly in nature. This portable setup is perfect for educational purposes, environmental research, and hobbyist exploration. Enjoy your microscopy adventures and share your findings with the openUC2 community!"),(0,o.kt)("p",null,(0,o.kt)("img",{src:i(83140).Z,width:"500",height:"281"}),"\n",(0,o.kt)("em",{parentName:"p"},"It's alive and hunting for prey")),(0,o.kt)("h3",{id:"experiment-2-autofocus-and-miniaturized-stage-for-large-samples-with-the-uc2-electronic"},"Experiment 2: Autofocus and Miniaturized Stage for Large Samples with the UC2 Electronic"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Implement a motorized stage for precise sample positioning and autofocusing."),(0,o.kt)("li",{parentName:"ul"},"Use external electronics to control fluid samples and capture images as they move. Curious? Click ",(0,o.kt)("a",{parentName:"li",href:"./"},"here"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"More coming soon!")),(0,o.kt)("p",null,(0,o.kt)("img",{src:i(42833).Z,width:"4303",height:"2025"})),(0,o.kt)("p",null,(0,o.kt)("img",{src:i(46063).Z,width:"500",height:"378"})),(0,o.kt)("h2",{id:"add-motorized-focussing"},"Add motorized focussing"),(0,o.kt)("p",null,(0,o.kt)("img",{src:i(10332).Z,width:"3648",height:"2736"})),(0,o.kt)("p",null,(0,o.kt)("img",{src:i(53241).Z,width:"3648",height:"2736"})),(0,o.kt)("p",null,(0,o.kt)("img",{src:i(63199).Z,width:"3648",height:"2736"})),(0,o.kt)("p",null,(0,o.kt)("img",{src:i(70403).Z,width:"2736",height:"3648"})),(0,o.kt)("p",null,(0,o.kt)("img",{src:i(85526).Z,width:"640",height:"360"})),(0,o.kt)("p",null,(0,o.kt)("img",{src:i(3357).Z,width:"640",height:"360"})),(0,o.kt)("p",null,(0,o.kt)("img",{src:i(76398).Z,width:"800",height:"450"})),(0,o.kt)("p",null,(0,o.kt)("img",{src:i(28332).Z,width:"500",height:"281"})),(0,o.kt)("h2",{id:"add-motorized-flow-stop-microscopy"},"Add motorized flow-stop microscopy"),(0,o.kt)("p",null,(0,o.kt)("img",{src:i(70332).Z,width:"800",height:"450"})),(0,o.kt)("p",null,(0,o.kt)("img",{src:i(14563).Z,width:"2736",height:"3648"})),(0,o.kt)("h2",{id:"add-stage-scanning"},"Add stage scanning"),(0,o.kt)("p",null,(0,o.kt)("img",{src:i(4394).Z,width:"640",height:"360"})),(0,o.kt)("h3",{id:"experiment-3-timelapse-of-yeast-cells"},"Experiment 3: Timelapse of Yeast Cells"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Capture the growth of yeast cells over time to study their behavior and development.")),(0,o.kt)("p",null,"HeLa Cells"),(0,o.kt)("h2",{id:"community-and-support"},"Community and Support"),(0,o.kt)("p",null,"Join our community on Discord in the #tinyml channel for support and collaboration. Explore the extensive library of UC2-compatible parts to expand the capabilities of your microscope."),(0,o.kt)("p",null,"For detailed tutorials and further information, visit ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/openUC2/openUC2-SEEED-XIAO-Camera"},"openUC2 GitHub Repository"),"."),(0,o.kt)("p",null,"By combining the best components from the MatchboxScope and UC2 modular systems, the openUC2 XIAO Microscope offers a powerful and flexible tool for a wide range of applications, making advanced microscopy accessible to a broader audience."))}d.isMDXComponent=!0},46063:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/Bildschirmaufnahme2024-07-29um10.11.30-ffd2ca00e3ee645f7cef0c126d3137a6.gif"},42833:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/ConnectionDiagram-591f1d4cadd62a06b4f18bb0fa41a49e.png"},22830:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/IMG_20240708_125521-6a7e33acf22c8bf7d471d2a33cdf587a.jpg"},45720:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/IMG_20240708_125607-8a6c08bea0404be32a524b6d82ed8d26.jpg"},49590:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/IMG_20240708_131620-e2b37e5a53511a8e5abf7d47b896df6d.jpg"},14563:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/IMG_20240721_164131-b73315b740cecf7c54242db1d857f3e6.jpg"},10332:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/IMG_20240726_081131-e2e5099b53e20e874a97db006cb627a4.jpg"},63199:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/IMG_20240726_081400-3d9f995ae456b327cdf6cee8834573b0.jpg"},53241:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/IMG_20240726_081427-9d3781c171b9ff38bf1a4767e4171b78.jpg"},70403:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/IMG_20240726_081547-7fe0332b825979955697b7487f83df63.jpg"},51238:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/MeinFilm21-7b1aee6a4513f583c2d5969878ed8a30.gif"},83140:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/MeinFilm22-b072220e9c9d52bfc110d0211d8551d6.gif"},83648:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/PontWater-1a37a910b5ddae74d62fe990b8679148.png"},37765:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/SVID_20240721_113753_1-630b0cdb8ee830416021aa2fb052211a.gif"},70332:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/VID_20240721_164303-bb15a1d95c8af3ea5dfafaf9b73a57de.gif"},4394:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/VID_20240729_100942-8d8b835d1bba17d0c6dec66e7c4c7b1d.gif"},85526:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/VID_20240731_091903-411e446df4cdce10476af46da7cac458.gif"},3357:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/VID_20240731_091926-26c173b7d1c8757f0e173eecf723ffb6.gif"},76398:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/VID_20240731_170805-ae829159297583ecc80d59fe0acef8d1.gif"},28332:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/VID_20240731_170950-0c455bd747f60656fed78a917104bb56.gif"},65122:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/openUC2xSeeed-9c9dd4faeaa0e045dbcbca9c2b25e37a.png"}}]);