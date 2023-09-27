"use strict";(self.webpackChunksauron_docusaurus=self.webpackChunksauron_docusaurus||[]).push([[108],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),d=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=d(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=d(a),b=r,m=p["".concat(c,".").concat(b)]||p[b]||f[b]||o;return a?n.createElement(m,s(s({ref:t},u),{},{components:a})):n.createElement(m,s({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=b;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:r,s[1]=i;for(var d=2;d<o;d++)s[d]=a[d];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}b.displayName="MDXCreateElement"},1684:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>f,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var n=a(7462),r=(a(7294),a(3905));const o={sidebar_position:1},s="The Basics",i={unversionedId:"developer-docs/dotsauron/theory",id:"developer-docs/dotsauron/theory",title:"The Basics",description:"The .sauron file format is the standard format utilized for all Sauron recordings. This format, essentially an",source:"@site/docs/developer-docs/dotsauron/theory.md",sourceDirName:"developer-docs/dotsauron",slug:"/developer-docs/dotsauron/theory",permalink:"/docs/developer-docs/dotsauron/theory",draft:!1,editUrl:"https://github.com/karkkikuppi/sauron/tree/main/sauron-docusaurus/docs/developer-docs/dotsauron/theory.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"dotsauron",permalink:"/docs/category/dotsauron"},next:{title:"Playback system",permalink:"/docs/category/playback-system"}},c={},d=[{value:"Structure",id:"structure",level:2},{value:"<code>recording</code>",id:"recording",level:3},{value:"<code>metadata</code>",id:"metadata",level:3},{value:"<code>keyframes</code>",id:"keyframes",level:3},{value:"Reconstructing Packets",id:"reconstructing-packets",level:2},{value:"Writing Packets to the Database",id:"writing-packets-to-the-database",level:2}],u={toc:d},p="wrapper";function f(e){let{components:t,...o}=e;return(0,r.kt)(p,(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"the-basics"},"The Basics"),(0,r.kt)("p",null,"The .sauron file format is the standard format utilized for all Sauron recordings. This format, essentially an\nSQLite database, is designed with simplicity in mind. It encapsulates packet data and relevant metadata crucial\nfor Sauron recordings."),(0,r.kt)("h2",{id:"structure"},"Structure"),(0,r.kt)("p",null,"The .sauron file is organized into three main tables: recording, metadata, and keyframes. The recording table\ncomprehensively stores the packet data."),(0,r.kt)("h3",{id:"recording"},(0,r.kt)("inlineCode",{parentName:"h3"},"recording")),(0,r.kt)("p",null,"The recording table primarily encompasses timestamp data (measured in milliseconds from the replay start),\na unique packet identifier, and the raw packet data stored as a binary large object (BLOB)."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"img/dotsauron/recording_table_structure",src:a(4702).Z,width:"487",height:"161"})),(0,r.kt)("h3",{id:"metadata"},(0,r.kt)("inlineCode",{parentName:"h3"},"metadata")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"metadata")," table isn't implemented yet."),(0,r.kt)("h3",{id:"keyframes"},(0,r.kt)("inlineCode",{parentName:"h3"},"keyframes")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"keyframes")," table isn't implemented yet."),(0,r.kt)("h2",{id:"reconstructing-packets"},"Reconstructing Packets"),(0,r.kt)("p",null,"Dotsauron can reconstruct packets from raw binary data. The ",(0,r.kt)("inlineCode",{parentName:"p"},"dotsauron.packets.PacketMap#deserializePacket"),"\nmethod facilitates packet deserialization by utilizing packet IDs and binary data. For most use cases, utilizing\n",(0,r.kt)("inlineCode",{parentName:"p"},"StoredPacket")," is recommended, as it conveniently combines packet data and timestamp information. The ",(0,r.kt)("inlineCode",{parentName:"p"},"StoredPacket"),"\ncan then be effectively applied in the network handler using ",(0,r.kt)("inlineCode",{parentName:"p"},"StoredPacket#applyPacket"),"."),(0,r.kt)("h2",{id:"writing-packets-to-the-database"},"Writing Packets to the Database"),(0,r.kt)("p",null,"To persist packets into the database, the SauronRecording#writePacket method is employed. This method receives a\nMinecraft packet, automatically optimizing and forwarding it to the database writer thread pool."),(0,r.kt)("admonition",{title:"scuffed system",type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"In case you attempt to write a packet lacking an assigned ID in the packet map, the mentioned method will fail.\nThis issue is currently being addressed and will be resolved shortly.")))}f.isMDXComponent=!0},4702:(e,t,a)=>{a.d(t,{Z:()=>n});const n="data:image/png;base64,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"}}]);