!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=6)}([function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",o=e[3];if(!o)return n;if(t&&"function"==typeof btoa){var r=(a=o,c=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),u="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(u," */")),i=o.sources.map((function(e){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(e," */")}));return[n].concat(i).concat([r]).join("\n")}var a,c,u;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,o){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(o)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(r[a]=!0)}for(var c=0;c<e.length;c++){var u=[].concat(e[c]);o&&r[u[0]]||(n&&(u[2]?u[2]="".concat(n," and ").concat(u[2]):u[2]=n),t.push(u))}},t}},function(e,t,n){"use strict";var o,r=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},i=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),a=[];function c(e){for(var t=-1,n=0;n<a.length;n++)if(a[n].identifier===e){t=n;break}return t}function u(e,t){for(var n={},o=[],r=0;r<e.length;r++){var i=e[r],u=t.base?i[0]+t.base:i[0],l=n[u]||0,d="".concat(u," ").concat(l);n[u]=l+1;var s=c(d),f={css:i[1],media:i[2],sourceMap:i[3]};-1!==s?(a[s].references++,a[s].updater(f)):a.push({identifier:d,updater:v(f,t),references:1}),o.push(d)}return o}function l(e){var t=document.createElement("style"),o=e.attributes||{};if(void 0===o.nonce){var r=n.nc;r&&(o.nonce=r)}if(Object.keys(o).forEach((function(e){t.setAttribute(e,o[e])})),"function"==typeof e.insert)e.insert(t);else{var a=i(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var d,s=(d=[],function(e,t){return d[e]=t,d.filter(Boolean).join("\n")});function f(e,t,n,o){var r=n?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(e.styleSheet)e.styleSheet.cssText=s(t,r);else{var i=document.createTextNode(r),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function p(e,t,n){var o=n.css,r=n.media,i=n.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var m=null,b=0;function v(e,t){var n,o,r;if(t.singleton){var i=b++;n=m||(m=l(t)),o=f.bind(null,n,i,!1),r=f.bind(null,n,i,!0)}else n=l(t),o=p.bind(null,n,t),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else r()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=r());var n=u(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var o=0;o<n.length;o++){var r=c(n[o]);a[r].references--}for(var i=u(e,t),l=0;l<n.length;l++){var d=c(n[l]);0===a[d].references&&(a[d].updater(),a.splice(d,1))}n=i}}}},function(e,t,n){var o=n(1),r=n(3);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var i={insert:"head",singleton:!1};o(r,i);e.exports=r.locals||{}},function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o)()(!1);r.push([e.i,"/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}",""]),t.default=r},function(e,t,n){var o=n(1),r=n(5);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var i={insert:"head",singleton:!1};o(r,i);e.exports=r.locals||{}},function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o)()(!1);r.push([e.i,"#navbar {\n    position: fixed;\n    top: 0px;\n    height: 75px;\n    width: 100%;\n    background-color: rgb(43, 51, 49);\n    z-index: 1;\n}\n\n#content {\n    position: relative;\n    top: 75px;\n}\n\nimg {\n    width: 500px;\n}",""]),t.default=r},function(e,t,n){"use strict";n.r(t);n(2),n(4);const o=(()=>{const e=document.querySelector("#content"),t=document.createElement("h1"),n=document.createElement("img"),o=document.createElement("p");return t.textContent="The Pizza Temple - Best pizza in town",n.setAttribute("src","/img/pizza.jpg"),n.setAttribute("alt","Sliced pizza"),o.textContent="Lorem ipsum dolor sit amet, consectetur adipiscing \n                elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut \n                enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut \n                aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit \n                in voluptate velit esse cillum dolore eu fugiat nulla pariatur. \n                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia \n                deserunt mollit anim id est laborum.",{fill:function(){e.appendChild(t),e.appendChild(n),e.appendChild(o)}}})(),r=(()=>{const e=document.querySelector("#content"),t=document.createElement("div"),n=document.createElement("div"),o=document.createElement("div"),r=document.createElement("div");return n.textContent="The Pizza Temple",o.textContent="Boulevard of Dreams 99",r.textContent="12345 Los Angeles",{fill:function(){e.appendChild(t),t.appendChild(n),t.appendChild(o),t.appendChild(r)}}})(),i=(()=>{const e=document.querySelector("#content"),t=document.createElement("div"),n=document.createElement("div"),o=document.createElement("div"),r=document.createElement("div");return n.textContent="Margherita",o.textContent="Tomatoes, Mozarella, Oregano",r.textContent="10$",{fill:function(){e.appendChild(t),t.appendChild(n),t.appendChild(o),t.appendChild(r)}}})();!function(){const e=document.querySelector("body"),t=document.querySelector("#content"),n=document.createElement("div"),a=document.createElement("button"),c=document.createElement("button"),u=document.createElement("button");function l(e){switch(function(){for(;t.childElementCount>0;)t.lastChild.remove()}(),e.target.id){case"main-btn":o.fill();break;case"menu-btn":i.fill();break;case"contact-btn":r.fill()}}n.setAttribute("id","navbar"),a.setAttribute("id","main-btn"),c.setAttribute("id","menu-btn"),u.setAttribute("id","contact-btn"),a.setAttribute("class","nav-btn"),c.setAttribute("class","nav-btn"),u.setAttribute("class","nav-btn"),a.textContent="Home",c.textContent="Menu",u.textContent="Contact",a.addEventListener("click",l),c.addEventListener("click",l),u.addEventListener("click",l),e.appendChild(n),n.appendChild(a),n.appendChild(c),n.appendChild(u)}(),o.fill()}]);