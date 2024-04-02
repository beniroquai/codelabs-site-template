"use strict";(self.webpackChunkuc_2_docs=self.webpackChunkuc_2_docs||[]).push([[4705],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>s});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var o=r.createContext({}),u=function(t){var e=r.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=u(t.components);return r.createElement(o.Provider,{value:e},t.children)},N={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},k=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,o=t.parentName,m=p(t,["components","mdxType","originalType","parentName"]),k=u(a),s=n,c=k["".concat(o,".").concat(s)]||k[s]||N[s]||l;return a?r.createElement(c,i(i({ref:e},m),{},{components:a})):r.createElement(c,i({ref:e},m))}));function s(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,i=new Array(l);i[0]=k;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p.mdxType="string"==typeof t?t:n,i[1]=p;for(var u=2;u<l;u++)i[u]=a[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}k.displayName="MDXCreateElement"},14950:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>o,contentTitle:()=>i,default:()=>N,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var r=a(87462),n=(a(67294),a(3905));const l={},i=void 0,p={unversionedId:"Electronics/APIDescription/PinConfig",id:"Electronics/APIDescription/PinConfig",title:"PinConfig",description:"UC2 System Version 2 and 3, and WEMOS Board Pinout Description",source:"@site/docs/03_Electronics/APIDescription/PinConfig.md",sourceDirName:"03_Electronics/APIDescription",slug:"/Electronics/APIDescription/PinConfig",permalink:"/docs/Electronics/APIDescription/PinConfig",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Motor",permalink:"/docs/Electronics/APIDescription/Motor"},next:{title:"Firmware Callback Functionality Documentation",permalink:"/docs/Electronics/UC2-REST/ESP32_Messaging_Callback"}},o={},u=[],m={toc:u};function N(t){let{components:e,...a}=t;return(0,n.kt)("wrapper",(0,r.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"UC2 System Version 2 and 3, and WEMOS Board Pinout Description")),(0,n.kt)("p",null,"The provided code defines the pinout configuration for different versions of the UC2 system and the WEMOS board when running on an ESP32. Here's a breakdown of the pinout descriptions for each of these configurations:"),(0,n.kt)("p",null,"You can find all the details here: ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/youseetoo/uc2-esp32/blob/main/main/PinConfig.h"},"https://github.com/youseetoo/uc2-esp32/blob/main/main/PinConfig.h"),"\nThe different board versions are also documented here: ",(0,n.kt)("a",{parentName:"p",href:"https://youseetoo.github.io/"},"https://youseetoo.github.io/"),". The online flashing tool can be used to update to the latest firmware."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"UC2 System Version 2 (UC2_2):")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Motor Pins:")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Motor A Direction: GPIO_NUM_21"),(0,n.kt)("li",{parentName:"ul"},"Motor X Direction: GPIO_NUM_33"),(0,n.kt)("li",{parentName:"ul"},"Motor Y Direction: GPIO_NUM_16"),(0,n.kt)("li",{parentName:"ul"},"Motor Z Direction: GPIO_NUM_14"),(0,n.kt)("li",{parentName:"ul"},"Motor A Step: GPIO_NUM_22"),(0,n.kt)("li",{parentName:"ul"},"Motor X Step: GPIO_NUM_2"),(0,n.kt)("li",{parentName:"ul"},"Motor Y Step: GPIO_NUM_27"),(0,n.kt)("li",{parentName:"ul"},"Motor Z Step: GPIO_NUM_12"),(0,n.kt)("li",{parentName:"ul"},"Motor Enable: GPIO_NUM_13"),(0,n.kt)("li",{parentName:"ul"},"Motor Enable Inverted: true"),(0,n.kt)("li",{parentName:"ul"},"Motor Auto-enable: true"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Lasers:")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Laser 1: GPIO_NUM_17"),(0,n.kt)("li",{parentName:"ul"},"Laser 2: GPIO_NUM_4"),(0,n.kt)("li",{parentName:"ul"},"Laser 3: GPIO_NUM_15"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"LEDs:")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"LED Pin: GPIO_NUM_32"),(0,n.kt)("li",{parentName:"ul"},"LED Count: 64"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Endstops and Digital Inputs:")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Digital Input 1: GPIO_NUM_34"),(0,n.kt)("li",{parentName:"ul"},"Digital Input 2: GPIO_NUM_39"),(0,n.kt)("li",{parentName:"ul"},"Digital Input 3: Disabled"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"PlayStation (PSX) Controller:")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},'MAC Address: "1a:2b:3c:01:01:04"'),(0,n.kt)("li",{parentName:"ul"},"Controller Type: PS4 (2)"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Joystick Settings:")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Joystick Speed Multiplier: 30"),(0,n.kt)("li",{parentName:"ul"},"Joystick Max Illumination: 100"),(0,n.kt)("li",{parentName:"ul"},"Joystick Speed Multiplier for Z: 30"))))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"UC2 WEMOS Board (UC2_WEMOS):")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Motor Pins:")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Motor A Direction: GPIO_NUM_23"),(0,n.kt)("li",{parentName:"ul"},"Motor X Direction: GPIO_NUM_16"),(0,n.kt)("li",{parentName:"ul"},"Motor Y Direction: GPIO_NUM_27"),(0,n.kt)("li",{parentName:"ul"},"Motor Z Direction: GPIO_NUM_14"),(0,n.kt)("li",{parentName:"ul"},"Motor A Step: GPIO_NUM_5"),(0,n.kt)("li",{parentName:"ul"},"Motor X Step: GPIO_NUM_26"),(0,n.kt)("li",{parentName:"ul"},"Motor Y Step: GPIO_NUM_25"),(0,n.kt)("li",{parentName:"ul"},"Motor Z Step: GPIO_NUM_17"),(0,n.kt)("li",{parentName:"ul"},"Motor Enable: GPIO_NUM_12"),(0,n.kt)("li",{parentName:"ul"},"Motor Enable Inverted: true"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Lasers:")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Laser 1: GPIO_NUM_18"),(0,n.kt)("li",{parentName:"ul"},"Laser 2: GPIO_NUM_19"),(0,n.kt)("li",{parentName:"ul"},"Laser 3: GPIO_NUM_13"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"LEDs:")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"LED Pin: GPIO_NUM_4"),(0,n.kt)("li",{parentName:"ul"},"LED Count: 64"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Endstops and Digital Inputs:")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Digital Input 1: Disabled"),(0,n.kt)("li",{parentName:"ul"},"Digital Input 2: Disabled"),(0,n.kt)("li",{parentName:"ul"},"Digital Input 3: Disabled"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"PlayStation (PSX) Controller:")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},'MAC Address: "1a:2b:3c:01:01:03"'),(0,n.kt)("li",{parentName:"ul"},"Controller Type: PS4 (2)"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Joystick Settings:")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Joystick Speed Multiplier: 5"),(0,n.kt)("li",{parentName:"ul"},"Joystick Speed Multiplier for Z: 3"))))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"UC2 System Version 3 (UC2_3):")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Motor Pins:")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Motor A Step: GPIO_NUM_15"),(0,n.kt)("li",{parentName:"ul"},"Motor X Step: GPIO_NUM_16"),(0,n.kt)("li",{parentName:"ul"},"Motor Y Step: GPIO_NUM_14"),(0,n.kt)("li",{parentName:"ul"},"Motor Z Step: GPIO_NUM_0"),(0,n.kt)("li",{parentName:"ul"},"Motor Enable Inverted: true"),(0,n.kt)("li",{parentName:"ul"},"Motor Auto-enable: true"),(0,n.kt)("li",{parentName:"ul"},"Use Fast AccelStepper: true"),(0,n.kt)("li",{parentName:"ul"},"AccelStepper Motor Type: 1 (Driver)"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Lasers:")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Laser 1: GPIO_NUM_12"),(0,n.kt)("li",{parentName:"ul"},"Laser 2: GPIO_NUM_4"),(0,n.kt)("li",{parentName:"ul"},"Laser 3: GPIO_NUM_2"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"LEDs:")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"LED Pin: GPIO_NUM_13"),(0,n.kt)("li",{parentName:"ul"},"LED Count: 64"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Endstops and Digital Inputs:")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Digital Input 1: GPIO_NUM_105 (I2C TCA)"),(0,n.kt)("li",{parentName:"ul"},"Digital Input 2: GPIO_NUM_106"),(0,n.kt)("li",{parentName:"ul"},"Digital Input 3: GPIO_NUM_107"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Joystick Settings:")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Joystick Speed Multiplier: 30"),(0,n.kt)("li",{parentName:"ul"},"Joystick Max Illumination: 100"),(0,n.kt)("li",{parentName:"ul"},"Joystick Speed Multiplier for Z: 30"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Caliper and I2C:")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"X_CAL_DATA: GPIO_NUM_32"),(0,n.kt)("li",{parentName:"ul"},"Y_CAL_DATA: GPIO_NUM_34"),(0,n.kt)("li",{parentName:"ul"},"Z_CAL_DATA: GPIO_NUM_36"),(0,n.kt)("li",{parentName:"ul"},"X_CAL_CLK: GPIO_NUM_33"),(0,n.kt)("li",{parentName:"ul"},"Y_CAL_CLK: GPIO_NUM_35"),(0,n.kt)("li",{parentName:"ul"},"Z_CAL_CLK: GPIO_NUM_17"),(0,n.kt)("li",{parentName:"ul"},"I2C_SCL: GPIO_NUM_22"),(0,n.kt)("li",{parentName:"ul"},"I2C_SDA: GPIO_NUM_21"),(0,n.kt)("li",{parentName:"ul"},"I2C Address: 0x27"),(0,n.kt)("li",{parentName:"ul"},"I2C Interrupt: GPIO_NUM_27"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"SPI:")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"SPI MOSI: GPIO_NUM_23"),(0,n.kt)("li",{parentName:"ul"},"SPI MISO: GPIO_NUM_19"),(0,n.kt)("li",{parentName:"ul"},"SPI SCK: GPIO_NUM_18"),(0,n.kt)("li",{parentName:"ul"},"SPI CS: GPIO_NUM_5")))))),(0,n.kt)("p",null,"This pinout configuration provides a comprehensive overview of how different components are connected to the ESP32 in the UC2 system versions 2 and 3 and the WEMOS board, making it easier to understand the hardware connections for your project."))}N.isMDXComponent=!0}}]);