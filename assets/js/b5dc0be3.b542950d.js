"use strict";(self.webpackChunkuc_2_docs=self.webpackChunkuc_2_docs||[]).push([[7156],{3905:(e,n,a)=>{a.d(n,{Zo:()=>s,kt:()=>d});var t=a(67294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function i(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function o(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?i(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function c(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=t.createContext({}),m=function(e){var n=t.useContext(l),a=n;return e&&(a="function"==typeof e?e(n):o(o({},n),e)),a},s=function(e){var n=m(e.components);return t.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},p=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=m(a),d=r,g=p["".concat(l,".").concat(d)]||p[d]||u[d]||i;return a?t.createElement(g,o(o({ref:n},s),{},{components:a})):t.createElement(g,o({ref:n},s))}));function d(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=p;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var m=2;m<i;m++)o[m]=a[m];return t.createElement.apply(null,o)}return t.createElement.apply(null,a)}p.displayName="MDXCreateElement"},21530:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>m});var t=a(87462),r=(a(67294),a(3905));const i={},o="Install driver for Daheng Camera",c={unversionedId:"ImSwitch/DahengCamera",id:"ImSwitch/DahengCamera",title:"Install driver for Daheng Camera",description:"Windows",source:"@site/docs/04_ImSwitch/DahengCamera.md",sourceDirName:"04_ImSwitch",slug:"/ImSwitch/DahengCamera",permalink:"/docs/ImSwitch/DahengCamera",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Firmware Callback Functionality Documentation",permalink:"/docs/Electronics/UC2-REST/ESP32_Messaging_Callback"},next:{title:"ImSwitchConfig",permalink:"/docs/ImSwitch/ImSwitchConfig"}},l={},m=[{value:"Windows",id:"windows",level:2},{value:"Linux",id:"linux",level:2},{value:"ARM",id:"arm",level:3}],s={toc:m};function u(e){let{components:n,...a}=e;return(0,r.kt)("wrapper",(0,t.Z)({},s,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"install-driver-for-daheng-camera"},"Install driver for Daheng Camera"),(0,r.kt)("h2",{id:"windows"},"Windows"),(0,r.kt)("p",null,"Have a look here: ",(0,r.kt)("a",{parentName:"p",href:"https://www.get-cameras.com/requestdownload"},"https://www.get-cameras.com/requestdownload")," and install the drivers. / SDK (newer version of ImSwitch ships drivers.)"),(0,r.kt)("h2",{id:"linux"},"Linux"),(0,r.kt)("h3",{id:"arm"},"ARM"),(0,r.kt)("p",null,"You can use the camera on the Raspberry Pi or Jetson Nano.\nFor this you can do the following steps:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd ~\ncd Downloads\nwget https://dahengimaging.com/downloads/Galaxy_Linux-armhf_Gige-U3_32bits-64bits_1.5.2303.9202.zip\ncd Galaxy_Linux-armhf_Gige-U3_32bits-64bits_1.5.2303.9202\nchmod +x Galaxy_camera.run\nsudo ./Galaxy_camera.run\n# go through questionaire\nsudo reboot\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Install Python bindings")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd ~/Downlodas\nwget https://dahengimaging.com/downloads/Galaxy_Linux_Python_2.0.2106.9041.tar.gz\ntar -xvf Galaxy_Linux_Python_2.0.2106.9041.tar.gz\ncd ~/Downlodas/Galaxy_Linux_Python_2.0.2106.9041/api\n# conda activate ****ENV\npip install -e .\ncd ~/Downlodas/Galaxy_Linux_Python_2.0.2106.9041/api\npython ~/Downloads/Galaxy_Linux_Python_2.0.2106.9041/sample/GxSingleCamMono  GxSingleCamMono.py\n")),(0,r.kt)("p",null,"The result will be:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'/home/uc2/Downloads/Galaxy_Linux_Python_2.0.2106.9041/sample/GxSingleCamMono/GxSingleCamMono.py:19: SyntaxWarning: "is" with a literal. Did you mean "=="?\n  if dev_num is 0:\n\n-------------------------------------------------------------\nSample to show how to acquire mono image continuously and show acquired image.\n-------------------------------------------------------------\n\nInitializing......\n\nFrame ID: 0   Height: 3036   Width: 4024\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Sample Script"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# version:1.0.1905.9051\nimport gxipy as gx\nfrom PIL import Image\n\n\ndef main():\n    # print the demo information\n    print("")\n    print("-------------------------------------------------------------")\n    print("Sample to show how to acquire mono image continuously and show acquired image.")\n    print("-------------------------------------------------------------")\n    print("")\n    print("Initializing......")\n    print("")\n\n    # create a device manager\n    device_manager = gx.DeviceManager()\n    dev_num, dev_info_list = device_manager.update_device_list()\n    if dev_num is 0:\n        print("Number of enumerated devices is 0")\n        return\n\n    # open the first device\n    cam = device_manager.open_device_by_index(1)\n\n    # exit when the camera is a color camera\n    if cam.PixelColorFilter.is_implemented() is True:\n        print("This sample does not support color camera.")\n        cam.close_device()\n        return\n\n    # set continuous acquisition\n    cam.TriggerMode.set(gx.GxSwitchEntry.OFF)\n\n    # set exposure\n    cam.ExposureTime.set(10000)\n\n    # set gain\n    cam.Gain.set(10.0)\n\n    # start data acquisition\n    cam.stream_on()\n\n    # acquire image: num is the image number\n    num = 1\n    for i in range(num):\n        # get raw image\n        raw_image = cam.data_stream[0].get_image()\n        if raw_image is None:\n            print("Getting image failed.")\n            continue\n\n        # create numpy array with data from raw image\n        numpy_image = raw_image.get_numpy_array()\n        if numpy_image is None:\n            continue\n\n        # print height, width, and frame ID of the acquisition image\n        print("Frame ID: %d   Height: %d   Width: %d"\n              % (raw_image.get_frame_id(), raw_image.get_height(), raw_image.get_width()))\n\n    # stop data acquisition\n    cam.stream_off()\n\n    # close device\n    cam.close_device()\n\nif __name__ == "__main__":\n    main()\n')))}u.isMDXComponent=!0}}]);