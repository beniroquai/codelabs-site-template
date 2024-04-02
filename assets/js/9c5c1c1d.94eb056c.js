"use strict";(self.webpackChunkuc_2_docs=self.webpackChunkuc_2_docs||[]).push([[6872],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=o.createContext({}),s=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=s(e.components);return o.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(n),d=r,h=u["".concat(p,".").concat(d)]||u[d]||m[d]||i;return n?o.createElement(h,a(a({ref:t},c),{},{components:n})):o.createElement(h,a({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var s=2;s<i;s++)a[s]=n[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},77072:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var o=n(87462),r=(n(67294),n(3905));const i={},a=void 0,l={unversionedId:"Electronics/APIDescription/Home",id:"Electronics/APIDescription/Home",title:"Home",description:"UC2-ESP Motor Homing Interface API Description",source:"@site/docs/03_Electronics/APIDescription/Home.md",sourceDirName:"03_Electronics/APIDescription",slug:"/Electronics/APIDescription/Home",permalink:"/docs/Electronics/APIDescription/Home",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"AS 5311 linear encoder for real-time feedback loop",permalink:"/docs/Electronics/APIDescription/Encoder"},next:{title:"LED array",permalink:"/docs/Electronics/APIDescription/LEDArray"}},p={},s=[{value:"Endpoint",id:"endpoint",level:2},{value:"Request Format",id:"request-format",level:2},{value:"Stopping the Motor During Homing Procedure",id:"stopping-the-motor-during-homing-procedure",level:2},{value:"Response",id:"response",level:2},{value:"Conclusion",id:"conclusion",level:2}],c={toc:s};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"UC2-ESP Motor Homing Interface API Description")),(0,r.kt)("p",null,"This API provides a means to perform homing procedures for motors in the UC2-ESP firmware using JSON documents transmitted over USB serial communication. The homing process involves finding the endstop for a motor, and the API allows for flexible configuration of this procedure."),(0,r.kt)("h2",{id:"endpoint"},"Endpoint"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Endpoint:")," ",(0,r.kt)("inlineCode",{parentName:"p"},"/home_act")),(0,r.kt)("p",null,"The endpoint ",(0,r.kt)("inlineCode",{parentName:"p"},"/home_act")," is utilized to initiate motor homing procedures and configure the parameters associated with homing."),(0,r.kt)("h2",{id:"request-format"},"Request Format"),(0,r.kt)("p",null,"The API expects a JSON document with the following structure:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "task": "/home_act",\n  "home": {\n    "steppers": [\n      {\n        "stepperid": 1,\n        "timeout": 20000,\n        "speed": 10000,\n        "direction": 1,\n        "endposrelease": 3000,\n        "endstoppolarity": 1\n      }\n    ]\n  }\n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'"task"'),": Specifies the task to perform, in this case, it is ",(0,r.kt)("inlineCode",{parentName:"li"},"/home_act"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'"home"'),": This object contains parameters related to the homing procedure.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'"steppers"'),": An array of stepper motor configurations for homing.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'"stepperid"'),": The ID of the motor to home. It can be values 0 to 3, corresponding to different motors (e.g., A, X, Y, Z)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'"timeout"'),": The maximum time (in milliseconds) the homing procedure is allowed to take. If the timeout is reached without successfully finding the endstop, the motor will stop."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'"speed"'),": The speed at which the motor homes (in steps per second)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'"direction"'),": Indicates the rotation direction of the motor to find the endstop. A value of ",(0,r.kt)("inlineCode",{parentName:"li"},"1")," means a positive direction, and ",(0,r.kt)("inlineCode",{parentName:"li"},"-1")," means a negative direction."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'"endposrelease"'),": The number of steps the motor will run in the opposite direction after reaching the endstop, intended to release the endstop."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'"endstoppolarity"'),": Indicates whether the endstop is normally closed (",(0,r.kt)("inlineCode",{parentName:"li"},"1"),") or normally open (",(0,r.kt)("inlineCode",{parentName:"li"},"0"),").")))))),(0,r.kt)("h2",{id:"stopping-the-motor-during-homing-procedure"},"Stopping the Motor During Homing Procedure"),(0,r.kt)("p",null,"You can stop the motor during the homing procedure with a separate API request. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "task": "/motor_act",\n  "motor": {\n    "steppers": [\n      {\n        "stepperid": 2,\n        "isstop": 1\n      }\n    ]\n  }\n}\n')),(0,r.kt)("p",null,"In this request:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'"task"'),": Specifies the task to perform, which is ",(0,r.kt)("inlineCode",{parentName:"li"},"/motor_act"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'"motor"'),": This object contains motor control parameters.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'"steppers"'),": An array of stepper motor configurations.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'"stepperid"'),": The ID of the motor to stop."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'"isstop"'),": Set to ",(0,r.kt)("inlineCode",{parentName:"li"},"1")," to indicate that the motor should stop.")))))),(0,r.kt)("h2",{id:"response"},"Response"),(0,r.kt)("p",null,"The response from the motor homing interface API will depend on the execution of the homing procedure or the motor stopping request. It may include status updates, completion notifications, or relevant error messages."),(0,r.kt)("p",null,"Refer to the specific implementation or documentation for details on response formats and meanings."),(0,r.kt)("h2",{id:"conclusion"},"Conclusion"),(0,r.kt)("p",null,"The UC2-ESP Motor Homing Interface API offers a straightforward way to initiate and configure homing procedures for motors within the UC2-ESP firmware environment. It enables precise control over homing parameters and allows for motor stopping during the homing process, enhancing the reliability and efficiency of motor homing operations."))}m.isMDXComponent=!0}}]);