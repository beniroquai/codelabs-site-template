"use strict";(self.webpackChunkuc_2_docs=self.webpackChunkuc_2_docs||[]).push([[7058],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,h=d["".concat(l,".").concat(m)]||d[m]||c[m]||i;return n?a.createElement(h,r(r({ref:t},u),{},{components:n})):a.createElement(h,r({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var p=2;p<i;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},78888:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=n(87462),o=(n(67294),n(3905));const i={id:"Camera Setup",title:"openUC2 Camera Setup"},r=void 0,s={unversionedId:"Toolboxes/DiscoveryElectronics/Camera Setup",id:"Toolboxes/DiscoveryElectronics/Camera Setup",title:"openUC2 Camera Setup",description:"We provide Docker Containers for our 3 major camera manufacturers//github.com/openUC2/ImSwitchDockerInstall",source:"@site/docs/01_Toolboxes/02_DiscoveryElectronics/02_camera_setup.md",sourceDirName:"01_Toolboxes/02_DiscoveryElectronics",slug:"/Toolboxes/DiscoveryElectronics/Camera Setup",permalink:"/docs/Toolboxes/DiscoveryElectronics/Camera Setup",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"Camera Setup",title:"openUC2 Camera Setup"},sidebar:"tutorialSidebar",previous:{title:"openUC2 Discovery Electronics Kit - Extended Tutorial",permalink:"/docs/Toolboxes/DiscoveryElectronics/automation_intro"},next:{title:"XYZ Micrometer Stage for Precise Motion Control",permalink:"/docs/Toolboxes/DiscoveryElectronics/XYZ_stage_mico"}},l={},p=[{value:"Webcam",id:"webcam",level:2},{value:"On Windows",id:"on-windows",level:3},{value:"On Mac",id:"on-mac",level:3},{value:"Alternative Method",id:"alternative-method",level:3},{value:"Daheng Cameras",id:"daheng-cameras",level:2},{value:"On Windows",id:"on-windows-1",level:3},{value:"Using Jetson Nano with Docker",id:"using-jetson-nano-with-docker",level:3},{value:"On Linux (Mac not supported)",id:"on-linux-mac-not-supported",level:3},{value:"On Android Phones",id:"on-android-phones",level:3},{value:"HIK Cameras",id:"hik-cameras",level:2},{value:"On Windows",id:"on-windows-2",level:3},{value:"On Linux (Ubuntu)",id:"on-linux-ubuntu",level:3},{value:"Using Jetson Nano with Docker",id:"using-jetson-nano-with-docker-1",level:3},{value:"Video Tutorial",id:"video-tutorial",level:2},{value:"XIAO Sense Camera",id:"xiao-sense-camera",level:2}],u={toc:p};function c(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"We provide Docker Containers for our 3 major camera manufacturers: ",(0,o.kt)("a",{parentName:"strong",href:"https://github.com/openUC2/ImSwitchDockerInstall"},"https://github.com/openUC2/ImSwitchDockerInstall"))),(0,o.kt)("p",null,"The openUC2 Camera Setup provides guidance on configuring and using webcams and Daheng cameras for imaging purposes within the openUC2 ecosystem. This setup allows users to seamlessly integrate cameras into their experimental setups and utilize them for imaging and data acquisition. Below are detailed instructions for setting up cameras on different platforms:"),(0,o.kt)("h2",{id:"webcam"},"Webcam"),(0,o.kt)("h3",{id:"on-windows"},"On Windows"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Users can utilize the built-in webcam functionality provided by Windows. They need to open the webcam using the Windows internal software and start streaming.")),(0,o.kt)("h3",{id:"on-mac"},"On Mac"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"For Mac users, the Photobooth application can be used to access the webcam. Simply open the Photobooth application and select the camera to start capturing images or videos.")),(0,o.kt)("h3",{id:"alternative-method"},"Alternative Method"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Users can also use the openUC2 Web Serial interface available at ",(0,o.kt)("inlineCode",{parentName:"li"},"https://youseetoo.github.io/indexWebSerialTest.html")," to open the camera stream.")),(0,o.kt)("h2",{id:"daheng-cameras"},"Daheng Cameras"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(31171).Z,width:"3648",height:"2736"}),"\n",(0,o.kt)("em",{parentName:"p"},"This may look completely different now, but important: A camera is inside the cube :)")),(0,o.kt)("h3",{id:"on-windows-1"},"On Windows"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"To use Daheng cameras on Windows, users should visit the ",(0,o.kt)("a",{parentName:"li",href:"https://www.get-cameras.com/customerdownloads?submissionGuid=93704570-544a-43e8-83d6-f5f3cf0b97fb"},"Get-camera supplier website"),"."),(0,o.kt)("li",{parentName:"ul"},'From the provided options, select the "Windows SDK USB2+USB3+GigE (including Directshow + Python) Galaxy V1.23.2305.9161" package.'),(0,o.kt)("li",{parentName:"ul"},"Install the software and drivers from the downloaded package."),(0,o.kt)("li",{parentName:"ul"},'Once installed, users can start the "Galaxy Viewer" application to begin capturing images using the Daheng camera.')),(0,o.kt)("h3",{id:"using-jetson-nano-with-docker"},"Using Jetson Nano with Docker"),(0,o.kt)("p",null,"If you're using Jetson Nano for image acquisition, you can set up a Docker container:\n",(0,o.kt)("strong",{parentName:"p"},"We provide Docker Containers for our 3 major camera manufacturers: ",(0,o.kt)("a",{parentName:"strong",href:"https://github.com/openUC2/ImSwitchDockerInstall"},"https://github.com/openUC2/ImSwitchDockerInstall"))),(0,o.kt)("h3",{id:"on-linux-mac-not-supported"},"On Linux (Mac not supported)"),(0,o.kt)("p",null,"You can install the driver and test the frame acquistion using the following commands:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'# We use Ubuntu\n# Install necessary dependencies\nsudo apt-get update && apt-get install -y \\\n    wget \\\n    unzip \\\n    python3 \\\n    python3-pip \\\n    usbutils \\\n    sudo \\\n    nano \\\n    git \\\n    expect\n\n# Create the udev rules directory\nsudo mkdir -p /etc/udev/rules.d\n\n# Download and install the appropriate Hik driver based on architecture\ncd /tmp && \\\n    wget https://dahengimaging.com/downloads/Galaxy_Linux_Python_2.0.2106.9041.tar_1.gz && \\\n    wget https://dahengimaging.com/downloads/Galaxy_Linux-armhf_Gige-U3_32bits-64bits_1.5.2303.9202.zip && \\\n    unzip Galaxy_Linux-armhf_Gige-U3_32bits-64bits_1.5.2303.9202.zip && \\\n    tar -zxvf Galaxy_Linux_Python_2.0.2106.9041.tar_1.gz && \\\n    cd Galaxy_Linux-armhf_Gige-U3_32bits-64bits_1.5.2303.9202 && \\\n    chmod +x Galaxy_camera.run && \\\n    cd /tmp/Galaxy_Linux_Python_2.0.2106.9041/api && \\\n    python3 setup.py build && \\\n    python3 setup.py install\n\n# Run the installer script using expect to automate Enter key presses\necho "Y En Y" | /tmp/Galaxy_Linux-armhf_Gige-U3_32bits-64bits_1.5.2303.9202/Galaxy_camera.run\n\n# Copy libgxiapi.so to /usr/lib and set the library path\ncp /usr/lib/libgxiapi.so /usr/lib && \\\n    cp /tmp/Galaxy_Linux-armhf_Gige-U3_32bits-64bits_1.5.2303.9202/libgxiapi.so /usr/lib && \\\n    ldconfig\n\n# Ensure the library path is set\nLD_LIBRARY_PATH="/usr/lib:/tmp/Galaxy_Linux-armhf_Gige-U3_32bits-64bits_1.5.2303.9202:$LD_LIBRARY_PATH"\n\npip install pillow numpy\n')),(0,o.kt)("p",null,"Then checkout the files under ",(0,o.kt)("inlineCode",{parentName:"p"},"/tmp/Galaxy_Linux_Python_2.0.2106.9041/")),(0,o.kt)("h3",{id:"on-android-phones"},"On Android Phones"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"To use Daheng cameras on Android phones, users should first visit ",(0,o.kt)("inlineCode",{parentName:"li"},"https://www.get-cameras.com/customerdownloads?submissionGuid=93704570-544a-43e8-83d6-f5f3cf0b97fb"),"."),(0,o.kt)("li",{parentName:"ul"},'From the provided options, select the "Android USB3 SDK v1.2.2112.9201" package and download it.'),(0,o.kt)("li",{parentName:"ul"},'After downloading, unzip the package and install the "GxViewer_GetRawImage.apk" on the Android phone (users may need to allow installation of apps from unknown sources or 3rd party apps).'),(0,o.kt)("li",{parentName:"ul"},"Connect the Daheng camera to the Android phone using a USB-C to Daheng cable (adapter)."),(0,o.kt)("li",{parentName:"ul"},'Open the installed app ("GxViewer_GetRawImage") and grant access to the USB connection when prompted.'),(0,o.kt)("li",{parentName:"ul"},"Users can adjust camera settings by swiping left in the app and then proceed to capture images.")),(0,o.kt)("p",null,"Here is an extended documentation for the HIK camera setup:"),(0,o.kt)("h2",{id:"hik-cameras"},"HIK Cameras"),(0,o.kt)("p",null,"We use the MV-CS060-10UM/UC-PRO 600 with the IMX179 sensor."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(31171).Z,width:"3648",height:"2736"}),"\n",(0,o.kt)("em",{parentName:"p"},"This may look completely different now, but important: A camera is inside the cube :)")),(0,o.kt)("h3",{id:"on-windows-2"},"On Windows"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Visit the ",(0,o.kt)("a",{parentName:"li",href:"https://www.hikrobotics.com/en/support/download"},"HIK supplier website")," for the latest software."),(0,o.kt)("li",{parentName:"ul"},'Download the "MVS V2.1.2" package (or the latest version) for Windows.'),(0,o.kt)("li",{parentName:"ul"},"Install the software and drivers from the package."),(0,o.kt)("li",{parentName:"ul"},'Use the "MVS Viewer" to capture and configure images with the HIK camera.')),(0,o.kt)("h3",{id:"on-linux-ubuntu"},"On Linux (Ubuntu)"),(0,o.kt)("p",null,"Install the HIK driver and run the camera with the following steps:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# Update system and install necessary dependencies\nsudo apt-get update && sudo apt-get install -y \\\n    wget \\\n    unzip \\\n    python3 \\\n    python3-pip \\\n    usbutils\n\n# Download and unzip the HIK driver package\ncd /tmp && \\\n    wget https://www.hikrobotics.com/en/source/support/software/MVS_STD_GML_V2.1.2_231116.zip && \\\n    unzip MVS_STD_GML_V2.1.2_231116.zip\n\n# Install the driver\nsudo dpkg -i MVS-2.1.2_aarch64_20231116.deb\n\n# Set up environment variables\nexport MVCAM_COMMON_RUNENV=/opt/MVS/lib\nexport LD_LIBRARY_PATH=/opt/MVS/lib/64:/opt/MVS/lib/32:$LD_LIBRARY_PATH\n\n# Install Python dependencies\npip install pillow numpy\n\n# Run the Python example to grab images\npython3 /opt/MVS/Samples/aarch64/Python/MvImport/GrabImage.py\n")),(0,o.kt)("h3",{id:"using-jetson-nano-with-docker-1"},"Using Jetson Nano with Docker"),(0,o.kt)("p",null,"If you're using Jetson Nano for image acquisition, you can set up a Docker container:\n",(0,o.kt)("strong",{parentName:"p"},"We provide Docker Containers for our 3 major camera manufacturers: ",(0,o.kt)("a",{parentName:"strong",href:"https://github.com/openUC2/ImSwitchDockerInstall"},"https://github.com/openUC2/ImSwitchDockerInstall"))),(0,o.kt)("p",null,"This setup ensures that the HIK camera can be used on various platforms, providing flexibility across different devices."),(0,o.kt)("h2",{id:"video-tutorial"},"Video Tutorial"),(0,o.kt)("p",null,"A video tutorial demonstrating the camera setup is available at ",(0,o.kt)("inlineCode",{parentName:"p"},"https://youtu.be/PtdU5qE6BSc"),"."),(0,o.kt)("p",null,"The openUC2 Camera Setup provides users with easy-to-follow instructions for configuring and utilizing webcams and Daheng cameras on different platforms, enabling seamless integration into various imaging applications and experiments."),(0,o.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/PtdU5qE6BSc",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}),(0,o.kt)("h2",{id:"xiao-sense-camera"},"XIAO Sense Camera"),(0,o.kt)("p",null,"Coming Soon."),(0,o.kt)("p",null,"You can have a glimpse here ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/openUC2/openUC2-SEEED-XIAO-Camera/"},"https://github.com/openUC2/openUC2-SEEED-XIAO-Camera/")),(0,o.kt)("p",null,"and Here ",(0,o.kt)("a",{parentName:"p",href:"https://openuc2.github.io/docs/Toolboxes/DiscoveryElectronics/04_1_seeedmicroscope"},"https://openuc2.github.io/docs/Toolboxes/DiscoveryElectronics/04_1_seeedmicroscope")))}c.isMDXComponent=!0},31171:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/dahenguc2-68b2770b26045af7bcee5c0fb4f25d9c.jpeg"}}]);