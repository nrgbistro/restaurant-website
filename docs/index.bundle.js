var myLibrary;(()=>{"use strict";var e={316:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(645),o=n.n(r)()((function(e){return e[1]}));o.push([e.id,":root {\n\t--navBar-item-border: 3px rgba(255,255,255,0.75) solid;\n}\n\n\nhtml, body {\n\tmargin: 0;\n\twidth: 100%;\n\theight: 100vh;\n}\n\na {\n\tcolor: red;\n}\n\n#content {\n\theight: 100%;\n\tbackground-size: cover;\n\tbox-sizing: border-box;\n}\n\n#navBar {\n\tbox-sizing: border-box;\n\tposition: absolute;\n\twidth: 100%;\n\theight: 100px;\n\tbackground-color: rgba(0,0,0,0.4);\n\tdisplay: flex;\n\tflex-direction: row;\n}\n\n#navBar #navBarLogo {\n\tmargin: 8px 8px 8px 20px;\n}\n\n#navBar div {\n\tcolor: white;\n\tcursor: pointer;\n\tborder-right: var(--navBar-item-border);\n\tborder-bottom: var(--navBar-item-border);\n\tbox-sizing: border-box;\n\tfont-size: 32px;\n\tpadding: 28px 15px;\n\tfont-family: sans-serif;\n}\n\n#navBar div:nth-child(2) {\n\tborder-left: var(--navBar-item-border);\n\tmargin-left: 20px;\n}\n\n#navBar div:hover {\n\tbackground-color: rgba(0,0,0,0.8);\n}",""]);const a=o},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(o[i]=!0)}for(var c=0;c<e.length;c++){var s=[].concat(e[c]);r&&o[s[0]]||(n&&(s[2]?s[2]="".concat(n," and ").concat(s[2]):s[2]=n),t.push(s))}},t}},695:e=>{var t={};e.exports=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},i=[],c=0;c<e.length;c++){var s=e[c],d=r.base?s[0]+r.base:s[0],u=a[d]||0,l="".concat(d," ").concat(u);a[d]=u+1;var p=n(l),f={css:s[1],media:s[2],sourceMap:s[3]};-1!==p?(t[p].references++,t[p].updater(f)):t.push({identifier:l,updater:o(f,r),references:1}),i.push(l)}return i}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=n(a[i]);t[c].references--}for(var s=r(e,o),d=0;d<a.length;d++){var u=n(a[d]);0===t[u].references&&(t[u].updater(),t.splice(u,1))}a=s}}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t),t}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r=n.css,o=n.media,a=n.sourceMap;o?e.setAttribute("media",o):e.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},597:(e,t,n)=>{e.exports=n.p+"09cb781f53f3108cf5b0.png"},921:(e,t,n)=>{e.exports=n.p+"159384793b29b7b9a518.png"}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,exports:{}};return e[r](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})();var r={};(()=>{n.r(r);var e=n(379),t=n.n(e),o=n(795),a=n.n(o),i=n(695),c=n.n(i),s=n(216),d=n.n(s),u=n(316),l={styleTagTransform:function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}},setAttributes:function(e){var t=n.nc;t&&e.setAttribute("nonce",t)},insert:function(e){var t=c()("head");if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}};l.domAPI=a(),l.insertStyleElement=d(),t()(u.Z,l),u.Z&&u.Z.locals&&u.Z.locals;var p=n(597),f=n(921);function v(e){const t=document.createElement("div");return t.classList.add("tab"),t.id=e,t.textContent=e,t.addEventListener("click",(()=>{console.log(e)})),t}!function(){const e=document.querySelector("div#content");e.style.backgroundImage=`url(${p}`,e.appendChild(function(){const e=document.createElement("div");e.id="navBar";const t=new Image;t.src=f,t.id="navBarLogo",e.appendChild(t);const n=["Home","Menu","Contact"];for(let t=0;t<n.length;t++)e.appendChild(v(n[t]));return console.log("created nav bar"),e}()),console.log("finished creating page")}()})(),myLibrary=r})();