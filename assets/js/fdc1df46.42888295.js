"use strict";(self.webpackChunkuc_2_docs=self.webpackChunkuc_2_docs||[]).push([[7502],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>d});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},m=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=p(t),d=i,g=u["".concat(s,".").concat(d)]||u[d]||c[d]||r;return t?a.createElement(g,o(o({ref:n},m),{},{components:t})):a.createElement(g,o({ref:n},m))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},35775:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=t(87462),i=(t(67294),t(3905));const r={},o=void 0,l={unversionedId:"ImSwitch/ImSwitchConfig",id:"ImSwitch/ImSwitchConfig",title:"ImSwitchConfig",description:"ImSwitch Config File",source:"@site/docs/04_ImSwitch/ImSwitchConfig.md",sourceDirName:"04_ImSwitch",slug:"/ImSwitch/ImSwitchConfig",permalink:"/docs/ImSwitch/ImSwitchConfig",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Install driver for Daheng Camera",permalink:"/docs/ImSwitch/DahengCamera"},next:{title:"Install ImSwitch",permalink:"/docs/ImSwitch/ImSwitchInstall"}},s={},p=[{value:"ImSwitch Config File",id:"imswitch-config-file",level:2},{value:"Configuration File Documentation",id:"configuration-file-documentation",level:3},{value:"Overview",id:"overview",level:4},{value:"Sections",id:"sections",level:4},{value:"Conclusion",id:"conclusion",level:4}],m={toc:p};function c(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"imswitch-config-file"},"ImSwitch Config File"),(0,i.kt)("p",null,"This is a sample ",(0,i.kt)("inlineCode",{parentName:"p"},"uc2_hik_histo.json"),"configuration file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "positioners": {\n    "ESP32Stage": {\n      "managerName": "ESP32StageManager",\n      "managerProperties": {\n        "rs232device": "ESP32",\n        "isEnable": true,\n        "enableauto": false,\n        "stepsizeX": -0.3125,\n        "stepsizeY": -0.3125,\n        "stepsizeZ": 0.3125,\n        "homeSpeedX": 15000,\n        "homeSpeedY": 15000,\n        "homeSpeedZ": 15000,\n        "isDualaxis": true,\n        "homeDirectionX": 1,\n        "backlashXOld": 15,\n        "backlashYOld": 40,\n        "backlashX": 0,\n        "backlashY": 0,\n        "homeEndstoppolarityY": 0,\n        "homeDirectionY": -1,\n        "homeDirectionZ": 0,\n        "homeXenabled": 1,\n        "homeYenabled": 1,\n        "homeZenabled": 0,\n        "initialSpeed": {\n          "X": 15000,\n          "Y": 15000,\n          "Z": 15000\n        }\n      },\n      "axes": [\n        "X",\n        "Y",\n        "Z"\n      ],\n      "forScanning": true,\n      "forPositioning": true\n    }\n  },\n  "rs232devices": {\n    "ESP32": {\n      "managerName": "ESP32Manager",\n      "managerProperties": {\n        "host_": "192.168.43.129",\n        "serialport": "COM3"\n      }\n    }\n  },\n  "lasers": {\n    "LED": {\n      "analogChannel": null,\n      "digitalLine": null,\n      "managerName": "ESP32LEDLaserManager",\n      "managerProperties": {\n        "rs232device": "ESP32",\n        "channel_index": 1\n      },\n      "wavelength": 635,\n      "valueRangeMin": 0,\n      "valueRangeMax": 1023\n    }\n  },\n  "detectors": {\n    "WidefieldCamera": {\n      "analogChannel": null,\n      "digitalLine": null,\n      "managerName": "HikCamManager",\n      "managerProperties": {\n        "isRGB": 1,\n        "cameraListIndex": 0,\n        "cameraEffPixelsize": 0.2257,\n        "hikcam": {\n          "exposure": 0,\n          "gain": 0,\n          "blacklevel": 100,\n          "image_width": 1000,\n          "image_height": 1000\n        }\n      },\n      "forAcquisition": true,\n      "forFocusLock": true\n    },\n    "Observer": {\n      "analogChannel": null,\n      "digitalLine": null,\n      "managerName": "OpenCVCamManager",\n      "managerProperties": {\n        "cameraListIndex": 1,\n        "cameraListIndexWIN": 0,\n        "isRGB":1,\n        "opencvcam": {\n          "exposure": 10\n        }\n      },\n      "forAcquisition": true\n    }\n  },\n  "autofocus": {\n    "camera": "WidefieldCamera",\n    "positioner": "ESP32Stage",\n    "updateFreq": 10,\n    "frameCropx": 780,\n    "frameCropy": 400,\n    "frameCropw": 500,\n    "frameCroph": 100\n  },\n  "mct": {\n    "monitorIdx": 2,\n    "width": 1080,\n    "height": 1920,\n    "wavelength": 0,\n    "pixelSize": 0,\n    "angleMount": 0,\n    "patternsDirWin": "C:\\\\Users\\\\wanghaoran\\\\Documents\\\\ImSwitchConfig\\\\imcontrol_slm\\\\488\\\\",\n    "patternsDir": "/users/bene/ImSwitchConfig/imcontrol_sim/488"\n  },\n  "dpc": {\n    "wavelength": 0.53,\n    "pixelsize": 0.2,\n    "NA": 0.3,\n    "NAi": 0.3,\n    "n": 1.0,\n    "rotations": [\n      0,\n      180,\n      90,\n      270\n    ]\n  },\n  "webrtc": {},\n  "PixelCalibration": {},\n  "focusLock": {\n    "camera": "WidefieldCamera",\n    "positioner": "ESP32StageManager",\n    "updateFreq": 4,\n    "frameCropx": 0,\n    "frameCropy": 0,\n    "frameCropw": 0,\n    "frameCroph": 0\n  },\n  "LEDMatrixs": {\n    "ESP32 LEDMatrix": {\n      "analogChannel": null,\n      "digitalLine": null,\n      "managerName": "ESP32LEDMatrixManager",\n      "managerProperties": {\n        "rs232device": "ESP32",\n        "Nx": 4,\n        "Ny": 4,\n        "wavelength": 488,\n        "valueRangeMin": 0,\n        "valueRangeMax": 32768\n      }\n    }\n  },\n  "availableWidgets": [\n    "Settings",\n    "View",\n    "Recording",\n    "Image",\n    "Laser",\n    "Positioner",\n    "Autofocus",\n    "MCT",\n    "UC2Config",\n    "ImSwitchServer",\n    "PixelCalibration",\n    "HistoScan",\n    "LEDMatrix",\n    "Joystick",\n    "Flatfield",\n    "ROIScan"\n  ],\n  "nonAvailableWidgets": [\n    "STORMRecon",\n    "DPC",\n    "Hypha",\n    "FocusLock",\n    "HistoScan",\n    "FocusLock",\n    "FOVLock"\n  ]\n}\n')),(0,i.kt)("h3",{id:"configuration-file-documentation"},"Configuration File Documentation"),(0,i.kt)("h4",{id:"overview"},"Overview"),(0,i.kt)("p",null,"This configuration file is designed to manage settings and properties of various components in a complex system, such as positioners, RS232 devices, lasers, detectors, autofocus settings, etc. It is structured in JSON format for ease of reading and editing."),(0,i.kt)("h4",{id:"sections"},"Sections"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Positioners")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ESP32Stage"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"managerName"),": Specifies the manager responsible for handling this positioner, in this case, ",(0,i.kt)("inlineCode",{parentName:"li"},"ESP32StageManager"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"managerProperties"),": Contains detailed settings for the positioner, such as RS232 device identification, step sizes for different axes, home speeds, axis enable/disable settings, and other mechanical properties."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"axes"),": Lists the axes controlled by this positioner (X, Y, Z)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"forScanning")," & ",(0,i.kt)("inlineCode",{parentName:"li"},"forPositioning"),": Boolean flags to indicate if the positioner is used for scanning and/or positioning."))))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"RS232 Devices")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ESP32"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"managerName"),": The manager handling RS232 devices, here ",(0,i.kt)("inlineCode",{parentName:"li"},"ESP32Manager"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"managerProperties"),": Network and port settings for the RS232 device."))))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Lasers")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"LED"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Details for managing LED laser settings, including the manager name (",(0,i.kt)("inlineCode",{parentName:"li"},"ESP32LEDLaserManager"),"), RS232 device reference, channel index, wavelength, and value range."))))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Detectors")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"WidefieldCamera")," & ",(0,i.kt)("inlineCode",{parentName:"li"},"Observer"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Configuration for different camera detectors, including manager names (",(0,i.kt)("inlineCode",{parentName:"li"},"HikCamManager"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"OpenCVCamManager"),"), properties like RGB support, camera indexes, pixel size, and acquisition settings."))))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Autofocus")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Configuration for autofocus feature, linking a camera with a positioner and setting parameters like update frequency and frame cropping dimensions."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"MCT (Multichannel Tissue)")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Settings for monitor index, dimensions, wavelength, pixel size, angle mount, and directories for pattern files."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"DPC (Differential Phase Contrast)")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Settings related to DPC imaging, including wavelength, pixel size, numerical aperture, refractive index, and rotation angles."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"WebRTC")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"An empty section possibly reserved for WebRTC configuration."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Pixel Calibration")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"An empty section likely intended for pixel calibration settings."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Focus Lock")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Focus lock settings similar to autofocus but with its distinct configuration."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"LED Matrixes")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ESP32 LEDMatrix"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Configuration for LED matrixes, specifying manager details, RS232 device, dimensions, wavelength, and value range."))))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Available Widgets")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"A list of widgets that are available in the system, indicating the features or components that can be controlled or monitored."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Non-Available Widgets")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"A list of widgets that are not available, possibly indicating features not supported or deactivated in the current setup.")))),(0,i.kt)("h4",{id:"conclusion"},"Conclusion"),(0,i.kt)("p",null,"This configuration file is a comprehensive document that outlines the settings and parameters for various hardware and software components in a specialized system. It is critical for ensuring the correct operation of the equipment it is designed to control."))}c.isMDXComponent=!0}}]);