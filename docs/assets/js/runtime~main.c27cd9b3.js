(()=>{"use strict";var e,r,t,o,a,n={},d={};function f(e){var r=d[e];if(void 0!==r)return r.exports;var t=d[e]={id:e,loaded:!1,exports:{}};return n[e].call(t.exports,t,t.exports,f),t.loaded=!0,t.exports}f.m=n,f.c=d,e=[],f.O=(r,t,o,a)=>{if(!t){var n=1/0;for(i=0;i<e.length;i++){t=e[i][0],o=e[i][1],a=e[i][2];for(var d=!0,u=0;u<t.length;u++)(!1&a||n>=a)&&Object.keys(f.O).every((e=>f.O[e](t[u])))?t.splice(u--,1):(d=!1,a<n&&(n=a));if(d){e.splice(i--,1);var c=o();void 0!==c&&(r=c)}}return r}a=a||0;for(var i=e.length;i>0&&e[i-1][2]>a;i--)e[i]=e[i-1];e[i]=[t,o,a]},f.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return f.d(r,{a:r}),r},t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,f.t=function(e,o){if(1&o&&(e=this(e)),8&o)return e;if("object"==typeof e&&e){if(4&o&&e.__esModule)return e;if(16&o&&"function"==typeof e.then)return e}var a=Object.create(null);f.r(a);var n={};r=r||[null,t({}),t([]),t(t)];for(var d=2&o&&e;"object"==typeof d&&!~r.indexOf(d);d=t(d))Object.getOwnPropertyNames(d).forEach((r=>n[r]=()=>e[r]));return n.default=()=>e,f.d(a,n),a},f.d=(e,r)=>{for(var t in r)f.o(r,t)&&!f.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},f.f={},f.e=e=>Promise.all(Object.keys(f.f).reduce(((r,t)=>(f.f[t](e,r),r)),[])),f.u=e=>"assets/js/"+({53:"935f2afb",84:"f8e5de60",85:"1f391b9e",108:"42b20a4c",195:"c4f5d8e4",205:"54b1e2b8",277:"5a544230",282:"497326d7",341:"fb626884",414:"393be207",514:"1be78505",603:"b91cc13b",706:"d8ffe7c1",817:"14eb3368",829:"f1e190b4",885:"dd76b4de",918:"17896441",971:"090b3b97"}[e]||e)+"."+{53:"dcedbb2a",84:"0cbcc09e",85:"e7d95fae",108:"0865d32f",195:"fde3d74c",205:"f99f5b7d",277:"6ac705ef",282:"ca6c7ef2",341:"6bfd9259",376:"8d9a8a8b",414:"2da1e7e5",514:"f48dff38",603:"af3c0e31",706:"a394fda8",817:"a8921508",829:"f18d4478",885:"8e908686",918:"9975e938",971:"279f4979",972:"fcc81ffd"}[e]+".js",f.miniCssF=e=>{},f.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),f.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),o={},a="sauron-docusaurus:",f.l=(e,r,t,n)=>{if(o[e])o[e].push(r);else{var d,u;if(void 0!==t)for(var c=document.getElementsByTagName("script"),i=0;i<c.length;i++){var b=c[i];if(b.getAttribute("src")==e||b.getAttribute("data-webpack")==a+t){d=b;break}}d||(u=!0,(d=document.createElement("script")).charset="utf-8",d.timeout=120,f.nc&&d.setAttribute("nonce",f.nc),d.setAttribute("data-webpack",a+t),d.src=e),o[e]=[r];var s=(r,t)=>{d.onerror=d.onload=null,clearTimeout(l);var a=o[e];if(delete o[e],d.parentNode&&d.parentNode.removeChild(d),a&&a.forEach((e=>e(t))),r)return r(t)},l=setTimeout(s.bind(null,void 0,{type:"timeout",target:d}),12e4);d.onerror=s.bind(null,d.onerror),d.onload=s.bind(null,d.onload),u&&document.head.appendChild(d)}},f.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},f.p="/sauron-documentation/",f.gca=function(e){return e={17896441:"918","935f2afb":"53",f8e5de60:"84","1f391b9e":"85","42b20a4c":"108",c4f5d8e4:"195","54b1e2b8":"205","5a544230":"277","497326d7":"282",fb626884:"341","393be207":"414","1be78505":"514",b91cc13b:"603",d8ffe7c1:"706","14eb3368":"817",f1e190b4:"829",dd76b4de:"885","090b3b97":"971"}[e]||e,f.p+f.u(e)},(()=>{var e={303:0,532:0};f.f.j=(r,t)=>{var o=f.o(e,r)?e[r]:void 0;if(0!==o)if(o)t.push(o[2]);else if(/^(303|532)$/.test(r))e[r]=0;else{var a=new Promise(((t,a)=>o=e[r]=[t,a]));t.push(o[2]=a);var n=f.p+f.u(r),d=new Error;f.l(n,(t=>{if(f.o(e,r)&&(0!==(o=e[r])&&(e[r]=void 0),o)){var a=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src;d.message="Loading chunk "+r+" failed.\n("+a+": "+n+")",d.name="ChunkLoadError",d.type=a,d.request=n,o[1](d)}}),"chunk-"+r,r)}},f.O.j=r=>0===e[r];var r=(r,t)=>{var o,a,n=t[0],d=t[1],u=t[2],c=0;if(n.some((r=>0!==e[r]))){for(o in d)f.o(d,o)&&(f.m[o]=d[o]);if(u)var i=u(f)}for(r&&r(t);c<n.length;c++)a=n[c],f.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return f.O(i)},t=self.webpackChunksauron_docusaurus=self.webpackChunksauron_docusaurus||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})()})();