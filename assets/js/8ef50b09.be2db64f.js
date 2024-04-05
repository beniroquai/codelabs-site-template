"use strict";(self.webpackChunkuc_2_docs=self.webpackChunkuc_2_docs||[]).push([[7974],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var a=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=a.createContext({}),l=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):n(n({},t),e)),r},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(r),d=o,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||i;return r?a.createElement(f,n(n({ref:t},p),{},{components:r})):a.createElement(f,n({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,n=new Array(i);n[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,n[1]=s;for(var l=2;l<i;l++)n[l]=r[l];return a.createElement.apply(null,n)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},21963:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>n,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var a=r(87462),o=(r(67294),r(3905));const i={id:"DPCmicroscopy",title:"Differential Phase Contrast Microscopy"},n="Differential Phase Contrast",s={unversionedId:"Toolboxes/DiscoveryPhaseMicroscopy/DPCmicroscopy",id:"Toolboxes/DiscoveryPhaseMicroscopy/DPCmicroscopy",title:"Differential Phase Contrast Microscopy",description:"Differential Phase Contrast Microscopy is a Computational Imaging technique that uses partial coherent sources to illuminate a sample at various angles. The angle determines the illumination NA which contributes to the final resolution due to the oblique illumination.",source:"@site/docs/01_Toolboxes/07_DiscoveryPhaseMicroscopy/DPC.md",sourceDirName:"01_Toolboxes/07_DiscoveryPhaseMicroscopy",slug:"/Toolboxes/DiscoveryPhaseMicroscopy/DPCmicroscopy",permalink:"/docs/Toolboxes/DiscoveryPhaseMicroscopy/DPCmicroscopy",draft:!1,tags:[],version:"current",frontMatter:{id:"DPCmicroscopy",title:"Differential Phase Contrast Microscopy"},sidebar:"tutorialSidebar",previous:{title:"Phase Microscopy",permalink:"/docs/Toolboxes/DiscoveryPhaseMicroscopy/"},next:{title:"Unpack the openUC2 Z-Microscope",permalink:"/docs/Investigator/ZMicroscope/UpackZMicroscope"}},c={},l=[{value:"Tutorial: DPC setup",id:"tutorial-dpc-setup",level:2},{value:"Materials needed:",id:"materials-needed",level:3},{value:"Diagram:",id:"diagram",level:3},{value:"Instructions for assembling the DPC setup:",id:"instructions-for-assembling-the-dpc-setup",level:3}],p={toc:l};function u(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"differential-phase-contrast"},"Differential Phase Contrast"),(0,o.kt)("p",null,"Differential Phase Contrast Microscopy is a Computational Imaging technique that uses partial coherent sources to illuminate a sample at various angles. The angle determines the illumination NA which contributes to the final resolution due to the oblique illumination.\n..."),(0,o.kt)("h2",{id:"tutorial-dpc-setup"},"Tutorial: DPC setup"),(0,o.kt)("h3",{id:"materials-needed"},"Materials needed:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"LED array"),(0,o.kt)("li",{parentName:"ul"},"Hikrobot Camera (MV-CE060-10UC) with USB cable (",(0,o.kt)("a",{parentName:"li",href:"Camera_Software_tutorial.md"},"Hikrobot Camera Software installation"),")"),(0,o.kt)("li",{parentName:"ul"},"Microscope Objective"),(0,o.kt)("li",{parentName:"ul"},"Motorized Linear stage"),(0,o.kt)("li",{parentName:"ul"},"Non-Kinematic Mirror"),(0,o.kt)("li",{parentName:"ul"},"Sample holder (in cube)"),(0,o.kt)("li",{parentName:"ul"},"One empty cube"),(0,o.kt)("li",{parentName:"ul"},"11 base plates"),(0,o.kt)("li",{parentName:"ul"},"Tube lens (with camera adapter)")),(0,o.kt)("p",null,(0,o.kt)("img",{src:r(24473).Z,width:"2406",height:"1576"})),(0,o.kt)("h3",{id:"diagram"},"Diagram:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:r(17216).Z,width:"2745",height:"1746"})),(0,o.kt)("h3",{id:"instructions-for-assembling-the-dpc-setup"},"Instructions for assembling the DPC setup:"),(0,o.kt)("p",null,"...\nAttach the LED array to the LED array base plate."),(0,o.kt)("p",null,(0,o.kt)("img",{src:r(76217).Z,width:"2328",height:"1599"})),(0,o.kt)("p",null,"Congrats! You have created a DPC microscope!"),(0,o.kt)("p",null,(0,o.kt)("img",{src:r(98881).Z,width:"444",height:"324"})))}u.isMDXComponent=!0},17216:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/DPC_diagram-437794b4873b51ffc6590e1ec7b158c0.png"},98881:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/DPC_final_setup-407a5715d1d4fb096ae2f860da4b7b1f.png"},24473:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/DPC_setup-66cd389954b1866d4e307077542e9a37.png"},76217:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/LED_base-d91956214ccc22e4b5e89b50bd125d29.png"}}]);