"use strict";(self.webpackChunksauron_docusaurus=self.webpackChunksauron_docusaurus||[]).push([[205],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>u});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var m=a.createContext({}),l=function(e){var n=a.useContext(m),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=l(e.components);return a.createElement(m.Provider,{value:n},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},f=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,m=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=l(t),f=r,u=c["".concat(m,".").concat(f)]||c[f]||p[f]||i;return t?a.createElement(u,o(o({ref:n},d),{},{components:t})):a.createElement(u,o({ref:n},d))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=f;var s={};for(var m in n)hasOwnProperty.call(n,m)&&(s[m]=n[m]);s.originalType=e,s[c]="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=t[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},4891:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var a=t(7462),r=(t(7294),t(3905));const i={sidebar_position:1},o="Keyframes",s={unversionedId:"developer-docs/editor/keyframes",id:"developer-docs/editor/keyframes",title:"Keyframes",description:"https://en.wikipedia.org/wiki/Key_frame",source:"@site/docs/developer-docs/editor/keyframes.md",sourceDirName:"developer-docs/editor",slug:"/developer-docs/editor/keyframes",permalink:"/sauron-documentation/docs/developer-docs/editor/keyframes",draft:!1,editUrl:"https://github.com/karkkikuppi/sauron-documentation/tree/main/sauron-docusaurus/docs/developer-docs/editor/keyframes.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Playback system",permalink:"/sauron-documentation/docs/category/playback-system"},next:{title:"Understanding Sauron",permalink:"/sauron-documentation/docs/developer-docs/understanding-sauron"}},m={},l=[{value:"Making a new keyframe",id:"making-a-new-keyframe",level:2},{value:"Interpolation",id:"interpolation",level:2},{value:"Keyframe Demands",id:"keyframe-demands",level:2}],d={toc:l},c="wrapper";function p(e){let{components:n,...t}=e;return(0,r.kt)(c,(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"keyframes"},"Keyframes"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Key_frame"},"https://en.wikipedia.org/wiki/Key_frame")),(0,r.kt)("p",null,"For a comprehensive grasp of the Sauron editor's functionality, keyframes play a pivotal role akin to those in\ntraditional video editing. Drawing parallels to keyframes in a typical video editing tool, we delve into their\nsignificance and usage within Sauron:"),(0,r.kt)("h2",{id:"making-a-new-keyframe"},"Making a new keyframe"),(0,r.kt)("p",null,"Every keyframe adheres to the SauronKeyframe interface, mandating the provision of functions to obtain the timestamp\nand perform interpolation to the subsequent keyframe. In this context, the interpolation function is expected to yield\na HashMap encapsulating the keyframe demands, crucial for further understanding."),(0,r.kt)("h2",{id:"interpolation"},"Interpolation"),(0,r.kt)("p",null,"Interpolation, a fundamental process, involves computing the keyframe's value at a given timestamp. This entails\ncalculating the temporal difference between the present keyframe and the following one, followed by determining the\nviewport's state during that specific time. An exemplar interpolation mechanism is showcased below through the Camera\nKeyframe, offering valuable insights into its functionality:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"@Override\n    public HashMap<Integer, KeyframeDemand> interpolateKeyframes(SauronKeyframe nextKeyframe) {\n        HashMap<Integer, KeyframeDemand> interpolatedCameraLocations = new HashMap<>();\n        CameraKeyframe nextCameraKeyframe = (CameraKeyframe) nextKeyframe;\n        int framesBetweenKeyframes = nextCameraKeyframe.framePosition - framePosition;\n        double xDifference = nextCameraKeyframe.x - x;\n        double yDifference = nextCameraKeyframe.y - y;\n        double zDifference = nextCameraKeyframe.z - z;\n        double yawDifference = nextCameraKeyframe.yaw - yaw;\n        double pitchDifference = nextCameraKeyframe.pitch - pitch;\n        for (int i = 0; i < framesBetweenKeyframes; i++) {\n            double x = this.x + (xDifference / framesBetweenKeyframes) * i;\n            double y = this.y + (yDifference / framesBetweenKeyframes) * i;\n            double z = this.z + (zDifference / framesBetweenKeyframes) * i;\n            double yaw = this.yaw + (yawDifference / framesBetweenKeyframes) * i;\n            double pitch = this.pitch + (pitchDifference / framesBetweenKeyframes) * i;\n            interpolatedCameraLocations.put(framePosition + i, new CameraDemand(x, y, z, yaw, pitch));\n        }\n        return interpolatedCameraLocations;\n    }\n")),(0,r.kt)("h2",{id:"keyframe-demands"},"Keyframe Demands"),(0,r.kt)("p",null,"A keyframe demand represents a singular, interpolated frame between two keyframes of the same type. It issues directives on rendering the\nviewport at a specified timestamp. A pertinent example can be found in the CameraDemand, a demand emanating from the\nCamera Keyframe. Within this demand, crucial viewport information, such as position and rotation, is encapsulated."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="sauron.editor.keyframe.demands.CameraDemand"',title:'"sauron.editor.keyframe.demands.CameraDemand"'},"public class CameraDemand implements KeyframeDemand {\n    public double x;\n    public double y;\n    public double z;\n    public double yaw;\n    public double pitch;\n\n    public CameraDemand(double x, double y, double z, double yaw, double pitch) {\n        this.x = x;\n        this.y = y;\n        this.z = z;\n        this.yaw = yaw;\n        this.pitch = pitch;\n    }\n\n    @Override\n    public void issue() {\n        Camera camera = MinecraftUtils.getMinecraft().gameRenderer.getCamera();\n        MinecraftUtils.getMinecraft().player.updatePositionAndAngles(x, y, z, (float) yaw, (float) pitch);\n    }\n}\n")),(0,r.kt)("p",null,"As you can see, the ",(0,r.kt)("inlineCode",{parentName:"p"},"CameraDemand")," contains the position & rotation of the camera. The ",(0,r.kt)("inlineCode",{parentName:"p"},"issue")," method is called when\nthe demand is to be rendered. In this case, the demand is to be rendered by updating the player's position & rotation."))}p.isMDXComponent=!0}}]);