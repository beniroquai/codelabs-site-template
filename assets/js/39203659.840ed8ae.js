"use strict";(self.webpackChunkuc_2_docs=self.webpackChunkuc_2_docs||[]).push([[2261],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),d=c(n),u=i,h=d["".concat(s,".").concat(u)]||d[u]||m[u]||l;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,o=new Array(l);o[0]=d;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:i,o[1]=r;for(var c=2;c<l;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},34337:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>r,toc:()=>c});var a=n(87462),i=(n(67294),n(3905));const l={},o=void 0,r={unversionedId:"ImSwitch/ImSwitchInstallWindows",id:"ImSwitch/ImSwitchInstallWindows",title:"ImSwitchInstallWindows",description:"ImSwitch Installation on Windows",source:"@site/docs/04_ImSwitch/ImSwitchInstallWindows.md",sourceDirName:"04_ImSwitch",slug:"/ImSwitch/ImSwitchInstallWindows",permalink:"/docs/ImSwitch/ImSwitchInstallWindows",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ImSwitchInstallUbuntu",permalink:"/docs/ImSwitch/ImSwitchInstallUbuntu"},next:{title:"Install ImSwitch using the ImSwitch Installer (CONDA INSTALLER OUTDATED)",permalink:"/docs/ImSwitch/ImSwitchInstaller"}},s={},c=[{value:"ImSwitch Installation on Windows",id:"imswitch-installation-on-windows",level:3},{value:"Step 1: Install Visual Studio Code (VS Code)",id:"step-1-install-visual-studio-code-vs-code",level:4},{value:"Step 2: Install Miniconda",id:"step-2-install-miniconda",level:4},{value:"Step 3: Clone Necessary Repositories",id:"step-3-clone-necessary-repositories",level:4},{value:"Step 4: Install ImSwitch and Related Packages",id:"step-4-install-imswitch-and-related-packages",level:4},{value:"Step 5: Install Camera Drivers for Daheng Cameras",id:"step-5-install-camera-drivers-for-daheng-cameras",level:4},{value:"Step 6: Clone ImSwitch Configuration and Set Permissions",id:"step-6-clone-imswitch-configuration-and-set-permissions",level:4},{value:"Step 7: Start",id:"step-7-start",level:4},{value:"Problems and Solutions",id:"problems-and-solutions",level:2}],p={toc:c};function m(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"imswitch-installation-on-windows"},"ImSwitch Installation on Windows"),(0,i.kt)("h4",{id:"step-1-install-visual-studio-code-vs-code"},"Step 1: Install Visual Studio Code (VS Code)"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Open a web browser and go to the ",(0,i.kt)("a",{parentName:"li",href:"https://code.visualstudio.com/Download"},"VS Code download page"),"."),(0,i.kt)("li",{parentName:"ol"},"Download the Windows Installer."),(0,i.kt)("li",{parentName:"ol"},"Once the download is complete, locate the installer and double-click to run it."),(0,i.kt)("li",{parentName:"ol"},"Follow the on-screen instructions to complete the installation.")),(0,i.kt)("h4",{id:"step-2-install-miniconda"},"Step 2: Install Miniconda"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Open a web browser and navigate to the ",(0,i.kt)("a",{parentName:"li",href:"https://docs.conda.io/en/latest/miniconda.html"},"Miniconda download page"),"."),(0,i.kt)("li",{parentName:"ol"},"Download the Windows installer for the 64-bit version of Miniconda."),(0,i.kt)("li",{parentName:"ol"},"Run the installer by double-clicking the downloaded file."),(0,i.kt)("li",{parentName:"ol"},"Follow the installer prompts to install Miniconda to a directory of your choice (e.g., ",(0,i.kt)("inlineCode",{parentName:"li"},"C:\\Miniconda3"),")."),(0,i.kt)("li",{parentName:"ol"},'During installation, ensure that the option to "Add Anaconda to my PATH environment variable" is selected.')),(0,i.kt)("h4",{id:"step-3-clone-necessary-repositories"},"Step 3: Clone Necessary Repositories"),(0,i.kt)("ol",{start:0},(0,i.kt)("li",{parentName:"ol"},"Ensure you have installed ",(0,i.kt)("em",{parentName:"li"},"GIT")," for windows"),(0,i.kt)("li",{parentName:"ol"},"Open the Command Prompt:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Press ",(0,i.kt)("inlineCode",{parentName:"li"},"Win + R"),", type ",(0,i.kt)("inlineCode",{parentName:"li"},"cmd"),", and press Enter."))),(0,i.kt)("li",{parentName:"ol"},"Navigate to your preferred directory where you want to clone the repositories (e.g., ",(0,i.kt)("inlineCode",{parentName:"li"},"C:\\Users\\<YourUsername>\\Downloads"),"):",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cd C:\\Users\\<YourUsername>\\Downloads\n"))),(0,i.kt)("li",{parentName:"ol"},"Clone the required repositories:",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/openUC2/UC2-REST\ngit clone https://github.com/openUC2/ImSwitch\ngit clone https://gitlab.com/bionanoimaging/nanoimagingpack\n")))),(0,i.kt)("h4",{id:"step-4-install-imswitch-and-related-packages"},"Step 4: Install ImSwitch and Related Packages"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Open the Command Prompt."),(0,i.kt)("li",{parentName:"ol"},"Create a new Conda environment named ",(0,i.kt)("inlineCode",{parentName:"li"},"imswitch")," with Python 3.10:",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"conda create -n imswitch python=3.10\n"))),(0,i.kt)("li",{parentName:"ol"},"Activate the ",(0,i.kt)("inlineCode",{parentName:"li"},"imswitch")," environment:",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"conda activate imswitch\n"))),(0,i.kt)("li",{parentName:"ol"},"Navigate to the ImSwitch directory and install it:\n(The ",(0,i.kt)("em",{parentName:"li"},"e")," just states to install the packages in editable mode)",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cd C:\\Users\\<YourUsername>\\Downloads\\ImSwitch\npip install -e .\n"))),(0,i.kt)("li",{parentName:"ol"},"Repeat for UC2-REST and nanoimagingpack:",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cd C:\\Users\\<YourUsername>\\Downloads\\UC2-REST\npip install -e .\ncd C:\\Users\\<YourUsername>\\Downloads\\nanoimagingpack\npip install -e .\n")))),(0,i.kt)("h4",{id:"step-5-install-camera-drivers-for-daheng-cameras"},"Step 5: Install Camera Drivers for Daheng Cameras"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Download the galaxy camera sdk for windows here ",(0,i.kt)("a",{parentName:"li",href:"https://www.get-cameras.com/requestdownload"},"https://www.get-cameras.com/requestdownload")),(0,i.kt)("li",{parentName:"ol"},"Double-click on the installation executable file (",(0,i.kt)("inlineCode",{parentName:"li"},"Galaxy_camera.exe"),") to run it."),(0,i.kt)("li",{parentName:"ol"},"Follow the on-screen instructions to complete the installation.")),(0,i.kt)("h4",{id:"step-6-clone-imswitch-configuration-and-set-permissions"},"Step 6: Clone ImSwitch Configuration and Set Permissions"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Navigate to the Documents directory using the Command Prompt:",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cd C:\\Users\\<YourUsername>\\Documents\n"))),(0,i.kt)("li",{parentName:"ol"},"Clone the ImSwitch configuration:",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/openUC2/ImSwitchConfig\n")))),(0,i.kt)("h4",{id:"step-7-start"},"Step 7: Start"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"conda activate imswitch\nimswitch\n")),(0,i.kt)("h2",{id:"problems-and-solutions"},"Problems and Solutions"),(0,i.kt)("p",null,"Very likely, there will be a PyQt issue."),(0,i.kt)("p",null,"Try:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"pip install PyQt5 --force-reinstall\n")),(0,i.kt)("p",null,"Congratulations! You have successfully installed ImSwitch and related dependencies on Windows."))}m.isMDXComponent=!0}}]);