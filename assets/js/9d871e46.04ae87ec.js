"use strict";(self.webpackChunkuc_2_docs=self.webpackChunkuc_2_docs||[]).push([[7810],{3905:(e,i,t)=>{t.d(i,{Zo:()=>p,kt:()=>h});var n=t(67294);function a(e,i,t){return i in e?Object.defineProperty(e,i,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[i]=t,e}function r(e,i){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);i&&(n=n.filter((function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var i=1;i<arguments.length;i++){var t=null!=arguments[i]?arguments[i]:{};i%2?r(Object(t),!0).forEach((function(i){a(e,i,t[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(t,i))}))}return e}function s(e,i){if(null==e)return{};var t,n,a=function(e,i){if(null==e)return{};var t,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],i.indexOf(t)>=0||(a[t]=e[t]);return a}(e,i);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],i.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),m=function(e){var i=n.useContext(l),t=i;return e&&(t="function"==typeof e?e(i):o(o({},i),e)),t},p=function(e){var i=m(e.components);return n.createElement(l.Provider,{value:i},e.children)},c={inlineCode:"code",wrapper:function(e){var i=e.children;return n.createElement(n.Fragment,{},i)}},g=n.forwardRef((function(e,i){var t=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),g=m(t),h=a,u=g["".concat(l,".").concat(h)]||g[h]||c[h]||r;return t?n.createElement(u,o(o({ref:i},p),{},{components:t})):n.createElement(u,o({ref:i},p))}));function h(e,i){var t=arguments,a=i&&i.mdxType;if("string"==typeof e||a){var r=t.length,o=new Array(r);o[0]=g;var s={};for(var l in i)hasOwnProperty.call(i,l)&&(s[l]=i[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var m=2;m<r;m++)o[m]=t[m];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}g.displayName="MDXCreateElement"},69522:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>m});var n=t(87462),a=(t(67294),t(3905));const r={},o="Stage Scanning and Image Stitching (ASHLAR)",s={unversionedId:"Investigator/XYZMicroscope/StageScanning",id:"Investigator/XYZMicroscope/StageScanning",title:"Stage Scanning and Image Stitching (ASHLAR)",description:"We have multiple ways to perform stage scanning and stitching using ImSwitch. Below you can find dedicated documentation for some of them:",source:"@site/docs/02_Investigator/02_XYZMicroscope/StageScanning.md",sourceDirName:"02_Investigator/02_XYZMicroscope",slug:"/Investigator/XYZMicroscope/StageScanning",permalink:"/docs/Investigator/XYZMicroscope/StageScanning",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Stage Mapping and Stage Calibration",permalink:"/docs/Investigator/XYZMicroscope/StageCalibration"},next:{title:"openUC2 Light-Sheet Microscope",permalink:"/docs/Investigator/Lightsheet/LightSheet"}},l={},m=[{value:"1. Using Imswitch for Image Retrieval and Stitching with Interactive ImScripting",id:"1-using-imswitch-for-image-retrieval-and-stitching-with-interactive-imscripting",level:2},{value:"Overview",id:"overview",level:3},{value:"Additional Image Processing",id:"additional-image-processing",level:3},{value:"In action",id:"in-action",level:3},{value:"2. Perform GUI-based stitching and perform stitching using ASHLAR in the Main GUI",id:"2-perform-gui-based-stitching-and-perform-stitching-using-ashlar-in-the-main-gui",level:2}],p={toc:m};function c(e){let{components:i,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:i,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"stage-scanning-and-image-stitching-ashlar"},"Stage Scanning and Image Stitching (ASHLAR)"),(0,a.kt)("p",null,"We have multiple ways to perform stage scanning and stitching using ImSwitch. Below you can find dedicated documentation for some of them:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Use ImScripting to take snapshots, save them locally and perform stitching using ASHLAR offline"),(0,a.kt)("li",{parentName:"ol"},"Perform GUI-based stitching and perform stitching using ASHLAR / simple pixel assignmens online (e.g. within/after the scanning process)"),(0,a.kt)("li",{parentName:"ol"},"Coming soon")),(0,a.kt)("h2",{id:"1-using-imswitch-for-image-retrieval-and-stitching-with-interactive-imscripting"},"1. Using Imswitch for Image Retrieval and Stitching with Interactive ImScripting"),(0,a.kt)("h3",{id:"overview"},"Overview"),(0,a.kt)("p",null,"This documentation outlines the steps to use Imswitch and Interactive IMScripting to retrieve images and stitch them together. The process involves configuring the motor settings, capturing images in a grid pattern, and stitching these images using ASHLAR."),(0,a.kt)("p",null,"The following code can be executed inside the ImSwitch's ImScripting editor."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"# install a modified version of ashlar that enables loading numpy arrays directly without going through a file\n# python -m pip install https://github.com/openUC2/ashlar/archive/refs/heads/master.zip\nimport numpy as np\nimport time\nimport threading\nimport os\nimport tifffile\nimport re\nfrom ashlar.scripts import ashlar\nfrom ashlar.scripts.ashlar import process_images\nfrom pathlib import Path\n\n# Calculate the image size and the overlap of the images based on pixel size and resolution.\nmPixelSize = 1.0  # micron - use a calibration chart to get this right!\ninput_dir = \"./mScanImages\"\noutput_dir = \"./mStitchedImage\"\ninput_name = \"TmpTileFile.ome.tif\"\noutput_name = \"ResultingStitchedImage.ome.tif\"\ninitialPosX = 0\ninitialPosY = 0\nmaximum_shift_microns = 1000\nNx = 5\nNy = 5\n# please try changing these two values to make it match!\nflip_x=True\nflip_y=False\n\n# create the folders and names\nPath(input_dir).mkdir(parents=True, exist_ok=True)\nPath(output_dir).mkdir(parents=True, exist_ok=True)\nashlar_output_file = os.path.join(output_dir, output_name)\nashlar_input_file = os.path.join(input_dir, input_name)\n\nmFrameShape = api.imcontrol.snapImage(True, False).shape\nxDim = mFrameShape[1] * mPixelSize\nyDim = mFrameShape[0] * mPixelSize\nmOverlap = 0.8  # 90% overlap at the edges\n\n# Set the motor control to 0 and define the motor speeds for the X, Y, and Z axes.\npositionerName = api.imcontrol.getPositionerNames()[0]\napi.imcontrol.setPositionerSpeed(positionerName, \"X\", 20000)\napi.imcontrol.setPositionerSpeed(positionerName, \"Y\", 20000)\napi.imcontrol.setPositionerSpeed(positionerName, \"Z\", 2000)\n\n## Capture images in a 2x3 grid pattern. The stage moves to the start position and captures images at each step. Each image is saved with coordinates as the filename.\niiter = 0\n\nUSE_OME = False\nif USE_OME:# on MAC ARM M1 it may not work..\n    with tifffile.TiffWriter(input_name) as tif: ## Define the input and output directories, and the pixel size. Open a new TIFF file to write the collected tiles, read each image, extract the position from the filename, prepare metadata, and write the image with metadata into the TIFF file. Finally, use ASHLAR to stitch the images together.\n        for ix in np.arange(Nx):\n            for iy in np.arange(Ny):\n                mPos = (ix * xDim * mOverlap + initialPosX, iy * yDim * mOverlap + initialPosY)\n                api.imcontrol.movePositioner(positionerName, \"XY\", mPos, True, True)\n                time.sleep(0.5)\n                mFrame = api.imcontrol.snapImage(True, False)\n                metadata = {\n                  'Pixels': {'PhysicalSizeX': mPixelSize, 'PhysicalSizeXUnit': 'm', 'PhysicalSizeY': mPixelSize, 'PhysicalSizeYUnit': 'm'},\n                  'Plane': {'PositionX': ix, 'PositionY': iy}\n                }\n                tif.write(mFrame, metadata=metadata)\n                iiter += 1\n    ashlar.main(['', ashlar_input_file, '-o', ashlar_output_file, '--pyramid', '-m%s' % maximum_shift_microns, \"-flip_x\", flip_x, \"-flip_y\", flip_y])\n\nelse: # this is a workaround with a numpy reader instead\n    mImageList = []\n    position_list = []\n    for ix in range(Nx):\n        for iy in range(Ny):\n            mPos = (ix * xDim * mOverlap + initialPosX, iy * yDim * mOverlap + initialPosY)\n            api.imcontrol.movePositioner(positionerName, \"XY\", mPos, True, True)\n            time.sleep(0.5)\n            mFrame = api.imcontrol.snapImage(True, False)\n            mImageList.append(mFrame)\n            position_list.append(mPos)\n            print(mPos)\n    arrays = [np.expand_dims(np.array(mImageList),1)]  # (num_images, num_channels, height, width)\n    # create a 2D list of xy positions\n    position_list = np.array(position_list)\n\n    # Process numpy arrays\n    process_images(filepaths=arrays,\n                    output='ashlar_output.tif',\n                    align_channel=0,\n                    flip_x=flip_x,\n                    flip_y=flip_y,\n                    flip_mosaic_x=False,\n                    flip_mosaic_y=False,\n                    output_channels=None,\n                    maximum_shift=maximum_shift_microns,\n                    stitch_alpha=0.01,\n                    maximum_error=None,\n                    filter_sigma=0,\n                    filename_format='cycle_{cycle}_channel_{channel}.tif',\n                    pyramid=False,\n                    tile_size=1024,\n                    ffp=None,\n                    dfp=None,\n                    barrel_correction=0,\n                    plates=False,\n                    quiet=False,\n                    position_list=position_list,\n                    pixel_size=mPixelSize)\n    mImage = tifffile.imread('ashlar_output.tif')\n\n    #display the resulting tiles\n    api.imcontrol.displayImageNapari(\"Tiles\", arrays[0], isRGB=False)\n\n    print(position_list)\n    # display the resulting image\n    api.imcontrol.displayImageNapari(\"StitchedImage\", mImage, isRGB=False)\n")),(0,a.kt)("h3",{id:"additional-image-processing"},"Additional Image Processing"),(0,a.kt)("p",null,"Additional commands can be used to manipulate the stitched image if needed (depends if the image looks weird or not..):"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Flip X-Axis")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"ashlar.main(['', collected_tiles_file, '-o', ashlar_output_file, '--pyramid', '-m%s' % maximum_shift_microns, \"--flip-x\"])\n")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Flip Both Axes and Mirror Images in X-Direction")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"ashlar.main(['', collected_tiles_file, '-o', ashlar_output_file, '--pyramid', '-m%s' % maximum_shift_microns, \"--flip-mosaic-x\"])\n")),(0,a.kt)("h3",{id:"in-action"},"In action"),(0,a.kt)("p",null,"Here we use the loading of numpy images inside ImSwitch and process them with Ashlar to directly dipslay them in Napari.\nMake sure the orientation is set as in the animation below according to the ",(0,a.kt)("a",{parentName:"p",href:"/docs/Investigator/XYZMicroscope/StageCalibration"},"Stage Calibration")," results."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},"# keep this number low (e.g. 1-2 to check the correction direction of X/Y)\nNx = 2\nNy = 2\n# please try changing these two values to make it match!\nflip_x=True\nflip_y=False\n")),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(65327).Z,width:"800",height:"519"})),(0,a.kt)("h2",{id:"2-perform-gui-based-stitching-and-perform-stitching-using-ashlar-in-the-main-gui"},"2. Perform GUI-based stitching and perform stitching using ASHLAR in the Main GUI"),(0,a.kt)("p",null,"Navigate to the HistoScan Menu and perform the grid-based scanning. Select ASHLAR stitching and the appropriate flipping of the axes (will be suggested by the previously performed stage mapping) and run the scanning. The stitched result will be displayed after some computational time which may vary depending on your CPU and memory availabililty."),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(89047).Z,width:"800",height:"519"})))}c.isMDXComponent=!0},89047:(e,i,t)=>{t.d(i,{Z:()=>n});const n=t.p+"assets/images/ASHLARStitching-a37bf6fe41fd84810634297793e070d5.gif"},65327:(e,i,t)=>{t.d(i,{Z:()=>n});const n=t.p+"assets/images/ASHLARWalkthrough-2aa33723464f2fc9b4b8cee966384357.gif"}}]);