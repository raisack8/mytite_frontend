(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{25:function(t,e,r){t.exports=r(42)},34:function(t,e,r){},36:function(t,e,r){},42:function(t,e,r){"use strict";r.r(e);var n=r(1),a=r.n(n),o=r(23),i=r.n(o),c=(r(34),r(6)),l=r(4),u=r(0),s=function(t){var e=Object(n.useState)(!1),r=Object(l.a)(e,2),o=r[0],i=r[1];return t.isVisibled&&!o?a.a.createElement("div",{className:""},a.a.createElement("div",{id:"defaultModal",className:"fixed top-0 z-50 w-1/2 p-4 overflow-x-hidden  overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"},a.a.createElement("div",{className:"relative w-full max-w-2xl max-h-full"},a.a.createElement("div",{className:"relative bg-red-300  border border-8 border-red-400 rounded-xl shadow"},a.a.createElement("div",{className:"flex justify-center item-center text-center p-4"},a.a.createElement("h3",{className:"text-md font-semibold text-gray-900"},"\u30a8\u30e9\u30fc\u304c\u767a\u751f\u3057\u307e\u3057\u305f"),a.a.createElement("button",{type:"button",className:"text-gray-400 bg-transparent hover:bg-red-600 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center",onClick:i(!0)},a.a.createElement("svg",{className:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"}))),a.a.createElement("div",{className:"p-6 space-y-6"},a.a.createElement("p",{className:"text-base leading-relaxed text-slate-700"},t.message)))))):null},f=function(t){var e=t.wholeTime,r=e.start,o=e.end,i=Object(n.useState)([]),c=Object(l.a)(i,2),u=c[0],s=c[1];return Object(n.useEffect)(function(){!function(){for(var t=o,e=[],n=r;n<=t;){var a=n.toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit",hour12:!1});e.push(a),n=new Date(n.getTime()+3e5)}s(e)}()},[r,o]),a.a.createElement(a.a.Fragment,null,a.a.createElement("div",null,a.a.createElement("div",null,u.map(function(t,e){var r=t.split(":")[0],n=t.split(":")[1],o="font-normal",i="text-xs";"00"===n?(o="font-bold",i="text-base"):"15"!==n&&"30"!==n&&"45"!==n||(o="font-normal",i="text-base");var c=r.startsWith("0")?r.slice(1):r;return a.a.createElement("div",{key:e,className:"".concat(o," ").concat(i," mt-1 h-6 flex items-center justify-end pr-2")},c,":",n)}))))},h=r(45),m=function(t){var e=t.section,r=Object(n.useState)(!1),o=Object(l.a)(r,2),i=o[0],c=o[1],u=Object(n.useContext)(k),s=parseInt(e.allotted_time),f=Math.floor(s/5),h=function(t){var e=new Date(t),r=e.getUTCHours(),n=e.getUTCMinutes().toString().padStart(2,"0");return"".concat(r,":").concat(n)},m=h(e.start_time),d=new Date(e.start_time);d.setMinutes(d.getMinutes()+s);var p=h(d),v=Array.from({length:f},function(t,r){return 0===r?a.a.createElement("div",{className:"mx-2 mt-1 rounded-t-md ".concat(i?"bg-red-200":"bg-white"),key:r},a.a.createElement("div",{className:"mx-1"},a.a.createElement("p",null,m,"~",p))):1===r?a.a.createElement("div",{className:"mx-2 pt-1 ".concat(i?"bg-red-200":"bg-white"),key:r},a.a.createElement("div",{className:"mx-2"},e.artist_name)):r===f-1?a.a.createElement("div",{className:"mx-2 pt-1 rounded-b-md ".concat(i?"bg-red-200":"bg-white"),key:r},a.a.createElement("br",null)):a.a.createElement("div",{className:"mx-2 pt-1 ".concat(i?"bg-red-200":"bg-white"),key:r},a.a.createElement("br",null))});return a.a.createElement("div",{onClick:function(){return t=e.id,c(!i),void u.setSection(t);var t}},v)},d=function(t){var e=t.getHours().toString().padStart(2,"0"),r=t.getMinutes().toString().padStart(2,"0");return"".concat(e,":").concat(r)},p=function(t){var e=t.stageInfo,r=t.sections,n=t.wholeTime,o=function(t,e){for(var r=[],n=new Date(t);n<=e;)r.push({time:d(n),flag:!1}),n.setMinutes(n.getMinutes()+5);return r}(n.start,n.end);o=function(t){var e=t;return r.map(function(r){var n=new Date(r.start_time).getTime(),a=new Date(n-324e5),o=d(a);t.map(function(t,n){t.time==o&&(r.flag=!0,e[n].flag=!0)})}),e}(o);var i=-1,c=0,l=!1;return a.a.createElement("div",{className:""},a.a.createElement("div",{key:e.id,className:"w-60 h-full",style:{backgroundColor:e.color}},a.a.createElement("div",{key:Object(h.a)(),className:"flex h-16 items-center justify-center text-white text-white-outline text-4xl font-extrabold"},e.name),o.map(function(t){return t.flag?++i<=r.length-1?(c=r[i].allotted_time,l=!0,c-=5,a.a.createElement(m,{section:r[i],key:Object(h.a)()})):void 0:l?((c-=5)<=0&&(l=!1),null):a.a.createElement("p",{className:"mt-1 h-6 text-gray-300 text-center",key:Object(h.a)()},"---------------------------------")})))},v=(r(36),function(t){var e=t.stages,r=t.sections,n=t.wholeTime,o=function(){var t={};return e.map(function(e){var n=r.filter(function(t){return t.stage==e.id});t[e.id]=n}),t}();return a.a.createElement("div",{className:"flex"},e.map(function(t){return a.a.createElement(p,{stageInfo:t,sections:o[t.id],wholeTime:n,key:t.id})}))}),g=r(44);function y(){y=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(_){l=function(t,e,r){return t[e]=r}}function u(t,e,r,a){var o=e&&e.prototype instanceof h?e:h,i=Object.create(o.prototype),c=new N(a||[]);return n(i,"_invoke",{value:x(t,r,c)}),i}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(_){return{type:"throw",arg:_}}}t.wrap=u;var f={};function h(){}function m(){}function d(){}var p={};l(p,o,function(){return this});var v=Object.getPrototypeOf,g=v&&v(v(T([])));g&&g!==e&&r.call(g,o)&&(p=g);var b=d.prototype=h.prototype=Object.create(p);function w(t){["next","throw","return"].forEach(function(e){l(t,e,function(t){return this._invoke(e,t)})})}function E(t,e){var a;n(this,"_invoke",{value:function(n,o){function i(){return new e(function(a,i){!function n(a,o,i,c){var l=s(t[a],t,o);if("throw"!==l.type){var u=l.arg,f=u.value;return f&&"object"==typeof f&&r.call(f,"__await")?e.resolve(f.__await).then(function(t){n("next",t,i,c)},function(t){n("throw",t,i,c)}):e.resolve(f).then(function(t){u.value=t,i(u)},function(t){return n("throw",t,i,c)})}c(l.arg)}(n,o,a,i)})}return a=a?a.then(i,i):i()}})}function x(t,e,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return k()}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var c=j(i,r);if(c){if(c===f)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=s(t,e,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===f)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}function j(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,j(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),f;var a=s(n,t.iterator,e.arg);if("throw"===a.type)return e.method="throw",e.arg=a.arg,e.delegate=null,f;var o=a.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function L(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function T(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,a=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return a.next=a}}return{next:k}}function k(){return{value:void 0,done:!0}}return m.prototype=d,n(b,"constructor",{value:d,configurable:!0}),n(d,"constructor",{value:m,configurable:!0}),m.displayName=l(d,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,l(t,c,"GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},w(E.prototype),l(E.prototype,i,function(){return this}),t.AsyncIterator=E,t.async=function(e,r,n,a,o){void 0===o&&(o=Promise);var i=new E(u(e,r,n,a),o);return t.isGeneratorFunction(r)?i:i.next().then(function(t){return t.done?t.value:i.next()})},w(b),l(b,c,"Generator"),l(b,o,function(){return this}),l(b,"toString",function(){return"[object Generator]"}),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=T,N.prototype={constructor:N,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var c=r.call(o,"catchLoc"),l=r.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,f):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),O(r),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var a=n.arg;O(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:T(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},t}var b=function(t){var e=t.wholeTime,r=Object(n.useContext)(k),o=Object(u.n)(),i=function(){var t=Object(c.a)(y().mark(function t(){var n,a;return y().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n={id:r.sectionData},t.next=4,g.a.post("https://mytite-backend-cnszbfeguq-uc.a.run.app//api/api/",n);case 4:if(a=t.sent,console.log(a),0!==Object.keys(a.data.message.myTiteSections).length){t.next=9;break}return alert(a.data.message.errorMsg),t.abrupt("return");case 9:if(""===a.data.message.errorMsg){t.next=12;break}return alert(a.data.message.errorMsg),t.abrupt("return");case 12:o("/test",{state:{data:a.data,wholeTime:e}}),t.next=19;break;case 15:t.prev=15,t.t0=t.catch(0),alert("\u30b7\u30b9\u30c6\u30e0\u30a8\u30e9\u30fc\u304c\u767a\u751f\u3057\u307e\u3057\u305f"),console.error("Error sending POST request:",t.t0);case 19:case"end":return t.stop()}},t,null,[[0,15]])}));return function(){return t.apply(this,arguments)}}();return a.a.createElement("div",null,a.a.createElement("button",{type:"button",className:"text-blue-700 border border-blue-700  hover:bg-blue-700 hover:text-white  focus:ring-4 focus:outline-none focus:ring-blue-300  font-medium rounded-full text-sm p-2.5 text-center  inline-flex items-center",onClick:function(){return i()}},a.a.createElement("span",{className:"p-2 text-xl"},"GO")),a.a.createElement("button",null,"Push"))};function w(){w=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(_){l=function(t,e,r){return t[e]=r}}function u(t,e,r,a){var o=e&&e.prototype instanceof h?e:h,i=Object.create(o.prototype),c=new N(a||[]);return n(i,"_invoke",{value:x(t,r,c)}),i}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(_){return{type:"throw",arg:_}}}t.wrap=u;var f={};function h(){}function m(){}function d(){}var p={};l(p,o,function(){return this});var v=Object.getPrototypeOf,g=v&&v(v(T([])));g&&g!==e&&r.call(g,o)&&(p=g);var y=d.prototype=h.prototype=Object.create(p);function b(t){["next","throw","return"].forEach(function(e){l(t,e,function(t){return this._invoke(e,t)})})}function E(t,e){var a;n(this,"_invoke",{value:function(n,o){function i(){return new e(function(a,i){!function n(a,o,i,c){var l=s(t[a],t,o);if("throw"!==l.type){var u=l.arg,f=u.value;return f&&"object"==typeof f&&r.call(f,"__await")?e.resolve(f.__await).then(function(t){n("next",t,i,c)},function(t){n("throw",t,i,c)}):e.resolve(f).then(function(t){u.value=t,i(u)},function(t){return n("throw",t,i,c)})}c(l.arg)}(n,o,a,i)})}return a=a?a.then(i,i):i()}})}function x(t,e,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return k()}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var c=j(i,r);if(c){if(c===f)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=s(t,e,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===f)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}function j(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,j(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),f;var a=s(n,t.iterator,e.arg);if("throw"===a.type)return e.method="throw",e.arg=a.arg,e.delegate=null,f;var o=a.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function L(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function T(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,a=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return a.next=a}}return{next:k}}function k(){return{value:void 0,done:!0}}return m.prototype=d,n(y,"constructor",{value:d,configurable:!0}),n(d,"constructor",{value:m,configurable:!0}),m.displayName=l(d,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,l(t,c,"GeneratorFunction")),t.prototype=Object.create(y),t},t.awrap=function(t){return{__await:t}},b(E.prototype),l(E.prototype,i,function(){return this}),t.AsyncIterator=E,t.async=function(e,r,n,a,o){void 0===o&&(o=Promise);var i=new E(u(e,r,n,a),o);return t.isGeneratorFunction(r)?i:i.next().then(function(t){return t.done?t.value:i.next()})},b(y),l(y,c,"Generator"),l(y,o,function(){return this}),l(y,"toString",function(){return"[object Generator]"}),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=T,N.prototype={constructor:N,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var c=r.call(o,"catchLoc"),l=r.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,f):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),O(r),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var a=n.arg;O(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:T(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},t}var E=function(){var t=Object(u.p)().id,e=Object(n.useState)([]),r=Object(l.a)(e,2),o=r[0],i=r[1],h=Object(n.useState)([]),m=Object(l.a)(h,2),d=m[0],p=m[1],y=Object(n.useState)(""),E=Object(l.a)(y,2),x=E[0],j=E[1],L={start:new Date("1899-12-30T09:00:00"),end:new Date("1899-12-30T21:00:00")};Object(n.useEffect)(function(){O()},[]);var O=function(){var e=Object(c.a)(w().mark(function e(){return w().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.get("https://mytite-backend-cnszbfeguq-uc.a.run.app//api/api/?id="+t).then(function(t){i(t.data),g.a.get("https://mytite-backend-cnszbfeguq-uc.a.run.app//api/stages/").then(function(t){p(t.data)})}).catch(function(t){return j(t)});case 2:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();return a.a.createElement("div",null,a.a.createElement(s,{isVisibled:!0}),a.a.createElement("span",{className:"border border-red-500 bg-red-300"},x.message),a.a.createElement("div",{className:"flex"},a.a.createElement("div",{style:{paddingTop:"4.0rem"}},a.a.createElement(f,{wholeTime:L})),a.a.createElement(v,{stages:d,sections:o,wholeTime:L})),a.a.createElement("div",{className:"fixed bottom-12 right-12"},a.a.createElement(b,{wholeTime:L})))},x=function(){var t=Object(u.l)().state;return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"flex"},a.a.createElement("div",{style:{paddingTop:"4.0rem"}},a.a.createElement(f,{wholeTime:t.wholeTime})),a.a.createElement(v,{stages:[{id:0,name:"MyTite1",place:"\u304a\u53f0\u5834",color:"#999999"},{id:1,name:"MyTite2",place:"\u304a\u53f0\u5834",color:"#999999"},{id:2,name:"MyTite3",place:"\u304a\u53f0\u5834",color:"#999999"},{id:3,name:"MyTite4",place:"\u304a\u53f0\u5834",color:"#999999"}],sections:t.data.message.myTiteSections,wholeTime:t.wholeTime})))},j=r(10),L=function(){return a.a.createElement("div",{className:"text-center"},a.a.createElement("div",{className:"mt-20"},a.a.createElement("div",{className:"m-4 w-1/3 mx-auto border border-slate-500"},a.a.createElement(j.b,{to:"/tite/1"},"TEST")),a.a.createElement("div",{className:"m-4 w-1/3 mx-auto border border-slate-500"},a.a.createElement(j.b,{to:"/tite/2"},a.a.createElement("img",{src:"/resources/tif230804.jpg",alt:"TIF2023 0804"}))),a.a.createElement("div",{className:"m-4 w-1/3 mx-auto border border-slate-500"},a.a.createElement(j.b,{to:"/tite/3"},a.a.createElement("img",{src:"/resources/tif230805.jpg",alt:"TIF2023 0805"}))),a.a.createElement("div",{className:"m-4 w-1/3 mx-auto border border-slate-500"},a.a.createElement(j.b,{to:"/tite/4"},a.a.createElement("img",{src:"/resources/tif230806.jpg",alt:"TIF2023 0806"})))),a.a.createElement(u.c,null,a.a.createElement(u.a,{path:"/tite/:id",component:E})))};var O=function(){return a.a.createElement(j.a,null,a.a.createElement(u.c,null,a.a.createElement(u.a,{exact:!0,path:"/",element:a.a.createElement(L,null)}),a.a.createElement(u.a,{path:"/tite/:id",element:a.a.createElement(E,null)}),a.a.createElement(u.a,{path:"/test",element:a.a.createElement(x,null)})))},N={sectionData:[],setSection:function(t){N.sectionData.includes(t)?N.sectionData=N.sectionData.filter(function(e){return e!==t}):N.sectionData.push(t)}},T=Object(n.createContext)(N);i.a.createRoot(document.getElementById("root")).render(a.a.createElement(T.Provider,{value:N},a.a.createElement(a.a.Fragment,null,a.a.createElement(O,null))));var k=e.default=T}},[[25,2,1]]]);
//# sourceMappingURL=main.bda67486.chunk.js.map