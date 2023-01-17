(function(){"use strict";var __webpack_modules__={24861:function(e,r,n){n(66992),n(88674),n(19601),n(17727),n(41539),n(78783),n(33948),n(60285),n(41637),n(39714);var t=n(20144),o=function(){var e=this,r=e._self._c;e._self._setupProxy;return r("div",{attrs:{id:"app"}},[r("Nipp")],1)},i=[],a=n(27594),c=n(45226),s=n(32011),u=n(98361),l=n(70655),p=n(14391),_=(n(21249),n(57327),n(68309),n(92222),n(47042),function(){var e=this,r=e._self._c;e._self._setupProxy;return r("div",[r("form",{staticClass:"pure-form pure-g"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.pageTitle,expression:"pageTitle"}],staticClass:"pure-u-11-12",attrs:{type:"text",placeholder:"App name"},domProps:{value:e.pageTitle},on:{input:function(r){r.target.composing||(e.pageTitle=r.target.value)}}}),r("div",{staticClass:"pure-u-1-12",staticStyle:{"text-align":"center"}},[r("img",{staticStyle:{width:"2em",height:"2em"},attrs:{src:n(43220),alt:"Share on Twitter"},on:{click:function(r){return e.shareOnTwitter()}}})])]),r("div",{staticStyle:{resize:"vertical",overflow:"auto",height:"20em"}},[r("NippMonacoEditor",{staticStyle:{width:"100%",height:"98%",border:"#ccc solid 2px","box-sizing":"border-box"},attrs:{options:e.monacoOptions},model:{value:e.script,callback:function(r){e.script=r},expression:"script"}})],1),r("form",{staticClass:"pure-form pure-form-aligned",attrs:{onsubmit:"return false"}},[r("label",{attrs:{for:"transpiler"}},[e._v("Transpiler:")]),r("select",{directives:[{name:"model",rawName:"v-model",value:e.transpiler,expression:"transpiler"}],attrs:{id:"transpiler"},on:{change:[function(r){var n=Array.prototype.filter.call(r.target.options,(function(e){return e.selected})).map((function(e){var r="_value"in e?e._value:e.value;return r}));e.transpiler=r.target.multiple?n:n[0]},function(r){return e.onChangeTranspiler()}]}},e._l(e.transpilers,(function(n){return r("option",{domProps:{value:n}},[e._v(e._s(n.name))])})),0),r("label",{attrs:{for:"compression_alg"}},[e._v("Compression:")]),r("select",{directives:[{name:"model",rawName:"v-model",value:e.compressionAlg,expression:"compressionAlg"}],attrs:{id:"compression_alg"},on:{change:function(r){var n=Array.prototype.filter.call(r.target.options,(function(e){return e.selected})).map((function(e){var r="_value"in e?e._value:e.value;return r}));e.compressionAlg=r.target.multiple?n:n[0]}}},e._l(e.compressionAlgs,(function(n){return r("option",{domProps:{value:n}},[e._v(e._s(n.name))])})),0),r("input",{directives:[{name:"model",rawName:"v-model",value:e.enableClickRun,expression:"enableClickRun"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.enableClickRun)?e._i(e.enableClickRun,null)>-1:e.enableClickRun},on:{change:[function(r){var n=e.enableClickRun,t=r.target,o=!!t.checked;if(Array.isArray(n)){var i=null,a=e._i(n,i);t.checked?a<0&&(e.enableClickRun=n.concat([i])):a>-1&&(e.enableClickRun=n.slice(0,a).concat(n.slice(a+1)))}else e.enableClickRun=o},function(r){return e.setLocationHash()}]}}),e._v(": click_run "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.enablePromiseWait,expression:"enablePromiseWait"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.enablePromiseWait)?e._i(e.enablePromiseWait,null)>-1:e.enablePromiseWait},on:{change:[function(r){var n=e.enablePromiseWait,t=r.target,o=!!t.checked;if(Array.isArray(n)){var i=null,a=e._i(n,i);t.checked?a<0&&(e.enablePromiseWait=n.concat([i])):a>-1&&(e.enablePromiseWait=n.slice(0,a).concat(n.slice(a+1)))}else e.enablePromiseWait=o},function(r){return e.setLocationHash()}]}}),e._v(": promise_wait "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.enableTopLevelAwait,expression:"enableTopLevelAwait"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.enableTopLevelAwait)?e._i(e.enableTopLevelAwait,null)>-1:e.enableTopLevelAwait},on:{change:[function(r){var n=e.enableTopLevelAwait,t=r.target,o=!!t.checked;if(Array.isArray(n)){var i=null,a=e._i(n,i);t.checked?a<0&&(e.enableTopLevelAwait=n.concat([i])):a>-1&&(e.enableTopLevelAwait=n.slice(0,a).concat(n.slice(a+1)))}else e.enableTopLevelAwait=o},function(r){return e.setLocationHash()}]}}),e._v(": top-level await "),e.enableClickRun?r("button",{staticClass:"pure-button",staticStyle:{color:"white",background:"rgb(28, 184, 65)"},on:{click:function(r){return e.onClickClickRun()}}},[e._v(" "+e._s(e.clickRunButtonText)+" ")]):e._e()]),r("form",{staticClass:"pure-form pure-g"},[r("textarea",{directives:[{name:"model",rawName:"v-model",value:e.inputText,expression:"inputText"}],staticClass:"pure-u-1 pure-u-md-1-2",attrs:{placeholder:"Input",rows:"10"},domProps:{value:e.inputText},on:{input:function(r){r.target.composing||(e.inputText=r.target.value)}}}),r("textarea",{directives:[{name:"model",rawName:"v-model",value:e.outputText,expression:"outputText"}],staticClass:"pure-u-1 pure-u-md-1-2",attrs:{placeholder:"Output",rows:"10"},domProps:{value:e.outputText},on:{input:function(r){r.target.composing||(e.outputText=r.target.value)}}})]),r("button",{staticClass:"pure-button",style:{color:e.hasError?"red":""},on:{click:function(r){e.showError=!e.showError}}},[e._v("Show/Hide error")]),e.showError?r("span",[r("div",{staticClass:"pure-g"},[r("textarea",{directives:[{name:"model",rawName:"v-model",value:e.errorStr,expression:"errorStr"}],staticClass:"pure-u-1",domProps:{value:e.errorStr},on:{input:function(r){r.target.composing||(e.errorStr=r.target.value)}}})])]):e._e(),r("button",{staticClass:"pure-button",on:{click:function(r){e.showTranspiledJsCode=!e.showTranspiledJsCode}}},[e._v("Show/Hide transpiled JS code")]),e.showTranspiledJsCode?r("span",[r("div",{staticClass:"pure-g"},[r("div",{staticClass:"pure-u-1"},[r("NippMonacoEditor",{staticStyle:{"min-height":"5rem"},attrs:{value:e.transpiledJsCode,options:{language:"javascript",fontSize:12,minimap:{enabled:!1}}}})],1)])]):e._e()])}),d=[],f=n(51907),h=n(26520),m=n(54503),b=n(85617),w=(n(74916),n(15306),n(69600),n(26699),n(32023),n(57658),n(27479),n(87714),n(82801),n(1174),n(75505),n(60762));function v(e){"undefined"===typeof v.__scriptPathToLoadPromise&&(v.__scriptPathToLoadPromise={});var r=v.__scriptPathToLoadPromise;return e in v.__scriptPathToLoadPromise||(r[e]=new Promise((function(r,n){var t=document.createElement("script");t.src=e,t.onload=function(){v.__scriptPathToLoadPromise[e]=!0,r()},t.onerror=n,document.head.appendChild(t)}))),r[e]}var g=function(){var e=(0,b.Z)((0,f.Z)().mark((function e(){return(0,f.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,v("opal-cdn/opal/current/opal.min.js");case 2:return e.next=4,v("opal-cdn/opal/current/opal-parser.min.js");case 4:return e.next=6,Promise.all([v("opal-cdn/opal/current/base64.min.js"),v("opal-cdn/opal/current/benchmark.min.js"),v("opal-cdn/opal/current/bigdecimal.min.js"),v("opal-cdn/opal/current/buffer.min.js"),v("opal-cdn/opal/current/console.min.js"),v("opal-cdn/opal/current/date.min.js"),v("opal-cdn/opal/current/delegate.min.js"),v("opal-cdn/opal/current/dir.min.js"),v("opal-cdn/opal/current/encoding.min.js"),v("opal-cdn/opal/current/enumerator.min.js"),v("opal-cdn/opal/current/erb.min.js"),v("opal-cdn/opal/current/file.min.js"),v("opal-cdn/opal/current/fileutils.min.js"),v("opal-cdn/opal/current/forwardable.min.js"),v("opal-cdn/opal/current/headless_chrome.min.js"),v("opal-cdn/opal/current/iconv.min.js"),v("opal-cdn/opal/current/js.min.js"),v("opal-cdn/opal/current/json.min.js"),v("opal-cdn/opal/current/math.min.js"),v("opal-cdn/opal/current/nashorn.min.js"),v("opal-cdn/opal/current/native.min.js"),v("opal-cdn/opal/current/nodejs.min.js"),v("opal-cdn/opal/current/observer.min.js"),v("opal-cdn/opal/current/opal-builder.min.js"),v("opal-cdn/opal/current/ostruct.min.js"),v("opal-cdn/opal/current/pathname.min.js"),v("opal-cdn/opal/current/pp.min.js"),v("opal-cdn/opal/current/promise.min.js"),v("opal-cdn/opal/current/rbconfig.min.js"),v("opal-cdn/opal/current/securerandom.min.js"),v("opal-cdn/opal/current/set.min.js"),v("opal-cdn/opal/current/singleton.min.js"),v("opal-cdn/opal/current/stringio.min.js"),v("opal-cdn/opal/current/strscan.min.js"),v("opal-cdn/opal/current/template.min.js"),v("opal-cdn/opal/current/thread.min.js"),v("opal-cdn/opal/current/time.min.js"),v("opal-cdn/opal/current/yaml.min.js")]);case 6:return e.abrupt("return",window.Opal);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),A={name:"Ruby",initLibrary:function(){var e=(0,b.Z)((0,f.Z)().mark((function e(){var r;return(0,f.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,g();case 2:r=e.sent,r.load("opal"),r.load("opal-parser");case 5:case"end":return e.stop()}}),e)})));function r(){return e.apply(this,arguments)}return r}(),getExecutableFunctionAndTranspiledJsCode:function(){var e=(0,b.Z)((0,f.Z)().mark((function e(r,n){var t,o,i,a;return(0,f.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,g();case 2:return t=e.sent,o="s = `window.INPUT`\n"+r,i=t.compile(o).replace(/\/\*.*\*\/\s*/,""),a=new Function("return "+i),e.abrupt("return",{executableFunction:a,transpiledJsCode:i});case 7:case"end":return e.stop()}}),e)})));function r(r,n){return e.apply(this,arguments)}return r}()},k=n(75695),T=function(){return n.e(9591).then(n.t.bind(n,99591,23))},x={name:"Deflate",compress:function(){var e=(0,b.Z)((0,f.Z)().mark((function e(r){var n,t;return(0,f.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,T();case 2:return n=e.sent,t=n.deflate(r,{to:"string",level:9,windowBits:-8}),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));function r(r){return e.apply(this,arguments)}return r}(),decompress:function(){var e=(0,b.Z)((0,f.Z)().mark((function e(r){var n;return(0,f.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,T();case 2:return n=e.sent,e.abrupt("return",n.inflate(r,{to:"string",windowBits:-8}));case 4:case"end":return e.stop()}}),e)})));function r(r){return e.apply(this,arguments)}return r}()},y=(n(39575),n(82472),n(48675),n(92990),n(18927),n(33105),n(35035),n(74345),n(7174),n(63408),n(14590),n(32846),n(44731),n(77209),n(96319),n(58867),n(37789),n(33739),n(29368),n(14483),n(12056),n(3462),n(30678),n(27462),n(33824),n(55021),n(12974),n(15016),function(){var e=(0,b.Z)((0,f.Z)().mark((function e(){return(0,f.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,v("copied_js/lzma_worker-min.js");case 2:return e.abrupt("return",window.LZMA);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()),C={name:"LZMA",compress:function(){var e=(0,b.Z)((0,f.Z)().mark((function e(r){var n,t;return(0,f.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,y();case 2:return n=e.sent,t=n.compress(r,9),e.abrupt("return",String.fromCharCode.apply(null,new Uint8Array(t)));case 5:case"end":return e.stop()}}),e)})));function r(r){return e.apply(this,arguments)}return r}(),decompress:function(){var e=(0,b.Z)((0,f.Z)().mark((function e(r){var n;return(0,f.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,y();case 2:return n=e.sent,e.abrupt("return",n.decompress(r.split("").map((function(e){return e.charCodeAt(0)}))));case 4:case"end":return e.stop()}}),e)})));function r(r){return e.apply(this,arguments)}return r}()},E=function(){return n.e(3950).then(n.bind(n,73950))};function P(e,r){return j.apply(this,arguments)}function j(){return j=(0,b.Z)((0,f.Z)().mark((function e(r,n){var t;return(0,f.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,n(r);case 3:return t=e.sent,e.abrupt("return",btoa(t));case 7:return e.prev=7,e.t0=e["catch"](0),e.abrupt("return","");case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),j.apply(this,arguments)}function Z(e,r){return S.apply(this,arguments)}function S(){return S=(0,b.Z)((0,f.Z)().mark((function e(r,n){var t;return(0,f.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,t=atob(r),e.next=4,n(t);case 4:return e.abrupt("return",e.sent);case 7:return e.prev=7,e.t0=e["catch"](0),e.abrupt("return","");case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),S.apply(this,arguments)}function U(){var e=location.hash.split("/");if(e.length>=3){var r=decodeURIComponent(e[0].substring(1).replace(/_/g," ")),n=e[1].split(","),t=e.slice(2,e.length).join("/");return{pageTitle:r,urlOptions:n,encodedCode:t}}return{pageTitle:"",urlOptions:[],encodedCode:""}}var I=""===window.location.hash,O=function(e){(0,s.Z)(n,e);var r=(0,u.Z)(n);function n(){var e;(0,c.Z)(this,n);for(var t=arguments.length,o=new Array(t),i=0;i<t;i++)o[i]=arguments[i];return e=r.call.apply(r,[this].concat(o)),(0,m.Z)((0,h.Z)(e),"compressionAlgs",[x,C]),(0,m.Z)((0,h.Z)(e),"compressionAlg",e.compressionAlgs[0]),(0,m.Z)((0,h.Z)(e),"pageTitle",""),(0,m.Z)((0,h.Z)(e),"inputText",""),(0,m.Z)((0,h.Z)(e),"outputText",""),(0,m.Z)((0,h.Z)(e),"script",""),(0,m.Z)((0,h.Z)(e),"transpiledJsCode",""),(0,m.Z)((0,h.Z)(e),"showTranspiledJsCode",!1),(0,m.Z)((0,h.Z)(e),"executableFunction",(function(){return""})),(0,m.Z)((0,h.Z)(e),"enableClickRun",!1),(0,m.Z)((0,h.Z)(e),"enablePromiseWait",!1),(0,m.Z)((0,h.Z)(e),"enableTopLevelAwait",!1),(0,m.Z)((0,h.Z)(e),"transpilers",[A,k.a,k.f]),(0,m.Z)((0,h.Z)(e),"transpiler",I?k.a:A),(0,m.Z)((0,h.Z)(e),"errorStr",""),(0,m.Z)((0,h.Z)(e),"showError",!0),(0,m.Z)((0,h.Z)(e),"hasError",!1),(0,m.Z)((0,h.Z)(e),"clickRunButtonText",""),(0,m.Z)((0,h.Z)(e),"useTextarea",!1),e}return(0,a.Z)(n,[{key:"mounted",value:function(){var e=(0,b.Z)((0,f.Z)().mark((function e(){var r,n,t=this;return(0,f.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=U(),r.urlOptions.includes("lzma")&&(this.compressionAlg=C),this.pageTitle=r.pageTitle,document.title=r.pageTitle,e.next=6,Z(r.encodedCode,this.compressionAlg.decompress);case 6:this.script=e.sent,this.enableClickRun=r.urlOptions.includes("click_run"),this.enablePromiseWait=!!I||r.urlOptions.includes("promise_wait"),this.enableTopLevelAwait=!!I||r.urlOptions.includes("top_level_await"),r.urlOptions.includes("es2017")?this.transpiler=k.a:r.urlOptions.includes("func_es2017")&&(this.transpiler=k.f),this.transpiler.initLibrary(),window.INPUT=this.inputText,n=w.parseUserAgent(window.navigator.userAgent),this.clickRunButtonText="Run"+(n.isDesktop()?"mac"===n.os?"(⌘+Enter)":"(Ctrl+Enter)":""),this.enableClickRun||this.setOutputText(),window.addEventListener("keydown",(function(e){(e.ctrlKey||e.metaKey)&&"Enter"===e.key&&p.w3.nextTick((function(){t.onClickClickRun()}))}));case 17:case"end":return e.stop()}}),e,this)})));function r(){return e.apply(this,arguments)}return r}()},{key:"onChangePageTitle",value:function(){var e=(0,b.Z)((0,f.Z)().mark((function e(){return(0,f.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return document.title=this.pageTitle,e.next=3,this.setLocationHash();case 3:case"end":return e.stop()}}),e,this)})));function r(){return e.apply(this,arguments)}return r}()},{key:"onChangeCompressionAlg",value:function(){var e=(0,b.Z)((0,f.Z)().mark((function e(){return(0,f.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.setLocationHash();case 2:case"end":return e.stop()}}),e,this)})));function r(){return e.apply(this,arguments)}return r}()},{key:"onChangeScript",value:function(){var e=(0,b.Z)((0,f.Z)().mark((function e(){return(0,f.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.setLocationHash();case 2:return e.next=4,this.transpile();case 4:case"end":return e.stop()}}),e,this)})));function r(){return e.apply(this,arguments)}return r}()},{key:"monacoOptions",get:function(){var e=this.transpiler===A?"ruby":"javascript";return{language:e,minimap:{enabled:!1},fontSize:15,tabSize:2,automaticLayout:!0}}},{key:"setLocationHash",value:function(){var e=(0,b.Z)((0,f.Z)().mark((function e(){var r,n,t;return(0,f.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=this.pageTitle.replace(/%/g,"%25").replace(/_/g,"%5F").replace(/ /g,"_").replace(/\//g,"%2F"),n=this.getUrlOptionsPart(),e.next=4,P(this.script,this.compressionAlg.compress);case 4:t=e.sent,location.hash=r+"/"+n+"/"+t;case 6:case"end":return e.stop()}}),e,this)})));function r(){return e.apply(this,arguments)}return r}()},{key:"getUrlOptionsPart",value:function(){var e=[];return this.transpiler===k.a?e.push("es2017"):this.transpiler===k.f&&e.push("func_es2017"),this.compressionAlg===C&&e.push("lzma"),this.enableClickRun&&e.push("click_run"),this.enablePromiseWait&&e.push("promise_wait"),this.enableTopLevelAwait&&e.push("top_level_await"),e.join(",")}},{key:"onClickClickRun",value:function(){this.setOutputText()}},{key:"onChangeTranspiler",value:function(){var e=(0,b.Z)((0,f.Z)().mark((function e(){return(0,f.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.transpiler.initLibrary(),this.transpiler.initLibrary=function(){return Promise.resolve()},e.next=4,this.setLocationHash();case 4:return e.next=6,this.transpile();case 6:case"end":return e.stop()}}),e,this)})));function r(){return e.apply(this,arguments)}return r}()},{key:"transpile",value:function(){var e=(0,b.Z)((0,f.Z)().mark((function e(){var r;return(0,f.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.transpiler.getExecutableFunctionAndTranspiledJsCode(this.script,this.enableTopLevelAwait);case 3:r=e.sent,this.executableFunction=r.executableFunction,this.transpiledJsCode=r.transpiledJsCode,this.errorStr="",this.hasError=!1,this.enableClickRun||this.setOutputText(),e.next=15;break;case 11:e.prev=11,e.t0=e["catch"](0),this.errorStr=e.t0.toString(),this.hasError=!0;case 15:case"end":return e.stop()}}),e,this,[[0,11]])})));function r(){return e.apply(this,arguments)}return r}()},{key:"onChangeInputText",value:function(){this.enableClickRun||this.setOutputText()}},{key:"setOutputText",value:function(){var e=this;window.INPUT=this.inputText;try{var r=this.executableFunction();this.enablePromiseWait?(this.outputText="<The promise is not complete yet>",Promise.resolve(r).then((function(r){p.w3.nextTick((function(){e.outputText=r+"",e.errorStr="",e.hasError=!1}))})).catch((function(r){p.w3.nextTick((function(){e.outputText="<Promise error: "+r.toString()+">",e.errorStr=r.toString(),e.hasError=!0}))}))):(this.outputText=r+"",this.errorStr="",this.hasError=!1)}catch(n){this.outputText="",this.errorStr=n.toString(),this.hasError=!0}}},{key:"shareOnTwitter",value:function(){var e="https://twitter.com/share?text="+encodeURIComponent(this.pageTitle)+"&url="+encodeURIComponent(location.href)+"&hashtags=nipp";window.open(e,"","scrollbars=yes,width=500,height=300,")}}]),n}(p.w3);(0,l.gn)([(0,p.RL)("pageTitle")],O.prototype,"onChangePageTitle",null),(0,l.gn)([(0,p.RL)("compressionAlg")],O.prototype,"onChangeCompressionAlg",null),(0,l.gn)([(0,p.RL)("script")],O.prototype,"onChangeScript",null),(0,l.gn)([(0,p.RL)("inputText")],O.prototype,"onChangeInputText",null),O=(0,l.gn)([(0,p.wA)({components:{NippMonacoEditor:E}})],O);var R=O,L=R,q=n(1001),B=(0,q.Z)(L,_,d,!1,null,"a2fc216e",null),D=B.exports,M=function(e){(0,s.Z)(n,e);var r=(0,u.Z)(n);function n(){return(0,c.Z)(this,n),r.apply(this,arguments)}return(0,a.Z)(n)}(p.w3);M=(0,l.gn)([(0,p.wA)({components:{Nipp:D}})],M);var Q=M,W=Q,F=(0,q.Z)(W,o,i,!1,null,null,null),K=F.exports,N=n(95205);(0,N.z)("".concat("","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var H=n(4594);t.ZP.config.productionTip=!1,new t.ZP({render:function(e){return e(K)},components:{Purecss:H.Z}}).$mount("#app"),function(){var e=document.createElement("link");e.rel="canonical";var r=new URL("https://nipp.nwtgck.org");r.hash=location.hash,e.href=r.toString(),document.head.appendChild(e)}()},75695:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{a:function(){return Es2017Transpiler},f:function(){return FuncEs2017Transpiler}});var _home_runner_work_nipp_nipp_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(86080),_home_runner_work_nipp_nipp_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(51907),_home_runner_work_nipp_nipp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(85617),core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(41539),core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__),core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(78783),core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_4__),core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(33948),core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_5__),BabelAsync=function(){return __webpack_require__.e(2175).then(__webpack_require__.t.bind(__webpack_require__,12175,23))},AsyncFunction=eval("Object.getPrototypeOf(async function() {}).constructor"),nippSupport={loadScript:function(e){var r=document.querySelector('head > script[src="'.concat(e,'"]'));if(null===r)return new Promise((function(r,n){var t=document.createElement("script");t.src=e,t.onload=r,document.head.appendChild(t)}))}},lastReturnBabelPlugin=function(){var e;return function(r){return{visitor:{ExpressionStatement:function(r){r.findParent((function(e){return e.isFunction()}))||(e=r)}},post:function(n){void 0!==e&&e.replaceWith(r.types.returnStatement(e.node.expression))}}}}(),Es2017Transpiler={name:"ES2017",initLibrary:function(){return Promise.resolve()},getExecutableFunctionAndTranspiledJsCode:function(){var e=(0,_home_runner_work_nipp_nipp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__.Z)((0,_home_runner_work_nipp_nipp_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_1__.Z)().mark((function e(r,n){var t,o,i,a;return(0,_home_runner_work_nipp_nipp_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_1__.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,BabelAsync();case 2:return t=e.sent,o=["es2017"],i=t.transform(r,{presets:o,plugins:[lastReturnBabelPlugin]}).code,a=n?new AsyncFunction("nipp","s",i):new Function("nipp","s",i),e.abrupt("return",{executableFunction:function(){return a(nippSupport,window.INPUT)},transpiledJsCode:i});case 7:case"end":return e.stop()}}),e)})));function r(r,n){return e.apply(this,arguments)}return r}()},FuncEs2017Transpiler=(0,_home_runner_work_nipp_nipp_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__.Z)((0,_home_runner_work_nipp_nipp_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__.Z)({},Es2017Transpiler),{},{name:"ES2017 with Function"})},43220:function(e){e.exports="data:image/png;base64,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"}},__webpack_module_cache__={};function __webpack_require__(e){var r=__webpack_module_cache__[e];if(void 0!==r)return r.exports;var n=__webpack_module_cache__[e]={id:e,loaded:!1,exports:{}};return __webpack_modules__[e].call(n.exports,n,n.exports,__webpack_require__),n.loaded=!0,n.exports}__webpack_require__.m=__webpack_modules__,function(){__webpack_require__.amdO={}}(),function(){var e=[];__webpack_require__.O=function(r,n,t,o){if(!n){var i=1/0;for(u=0;u<e.length;u++){n=e[u][0],t=e[u][1],o=e[u][2];for(var a=!0,c=0;c<n.length;c++)(!1&o||i>=o)&&Object.keys(__webpack_require__.O).every((function(e){return __webpack_require__.O[e](n[c])}))?n.splice(c--,1):(a=!1,o<i&&(i=o));if(a){e.splice(u--,1);var s=t();void 0!==s&&(r=s)}}return r}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[n,t,o]}}(),function(){__webpack_require__.n=function(e){var r=e&&e.__esModule?function(){return e["default"]}:function(){return e};return __webpack_require__.d(r,{a:r}),r}}(),function(){var e,r=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__};__webpack_require__.t=function(n,t){if(1&t&&(n=this(n)),8&t)return n;if("object"===typeof n&&n){if(4&t&&n.__esModule)return n;if(16&t&&"function"===typeof n.then)return n}var o=Object.create(null);__webpack_require__.r(o);var i={};e=e||[null,r({}),r([]),r(r)];for(var a=2&t&&n;"object"==typeof a&&!~e.indexOf(a);a=r(a))Object.getOwnPropertyNames(a).forEach((function(e){i[e]=function(){return n[e]}}));return i["default"]=function(){return n},__webpack_require__.d(o,i),o}}(),function(){__webpack_require__.d=function(e,r){for(var n in r)__webpack_require__.o(r,n)&&!__webpack_require__.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:r[n]})}}(),function(){__webpack_require__.f={},__webpack_require__.e=function(e){return Promise.all(Object.keys(__webpack_require__.f).reduce((function(r,n){return __webpack_require__.f[n](e,r),r}),[]))}}(),function(){__webpack_require__.u=function(e){return"js/"+e+"-legacy."+{180:"430d0194",249:"86c1537a",525:"0714b71f",665:"68e15218",848:"67d2df26",854:"4a88fb98",911:"d37182be",996:"27dae6b9",1065:"f7592141",1134:"e5a2cb39",1147:"18ede25b",1156:"ce7e0741",1259:"0bfec74a",1448:"391ace14",1471:"e1bf4925",1886:"872cb204",1960:"e4032eee",1961:"919ea3d4",2060:"28bff393",2075:"a88619e5",2140:"3359c2f7",2175:"37409130",2240:"3a41270b",2571:"4d6f6b5d",2798:"119b268a",2814:"0e00ba22",2892:"2f059302",2911:"83216c6e",2954:"cfd3e24d",3036:"755e3a1a",3585:"9a41262e",3632:"363a1cbd",3682:"25ee8283",3760:"05b7582b",3919:"858abb3a",3950:"421a0a03",4028:"648981ff",4129:"2c1cbec1",4188:"f41eb9f6",4368:"705e05c5",4386:"2362b657",4407:"78edbc90",4902:"249945ce",4912:"f35dd201",4946:"eb0d3836",5062:"c079b7b2",5288:"947b54fd",5377:"28719560",5593:"90af18b9",5703:"29a10833",5849:"bd568dcf",5880:"9eac9f32",5962:"9fdd7a4d",6082:"da068ddc",6241:"bc6a719b",6423:"439e8c6f",6424:"9cedc118",6449:"70383479",6489:"f65b5da4",6587:"87f875b0",6717:"ea96cbbb",7043:"2e36b866",7131:"3bfbdcd0",7287:"4b6c54a8",7562:"73be0065",7637:"456eb105",7778:"9748c3f5",7835:"166a542e",8070:"ad5ab21f",8084:"15d556d6",8180:"6e402b25",8401:"1602ea00",8424:"4b492bbc",8670:"2c3a4228",8715:"71dab316",8719:"388520a5",8906:"c3bce918",8946:"7140c1e8",9343:"3b333fa6",9398:"7f215c28",9400:"80b9f8e7",9537:"43c640ff",9591:"9fb25097",9684:"1754585a",9907:"52d523a1"}[e]+".js"}}(),function(){__webpack_require__.miniCssF=function(e){return"css/"+e+".b9dd6cd8.css"}}(),function(){__webpack_require__.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){__webpack_require__.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)}}(),function(){var e={},r="nipp:";__webpack_require__.l=function(n,t,o,i){if(e[n])e[n].push(t);else{var a,c;if(void 0!==o)for(var s=document.getElementsByTagName("script"),u=0;u<s.length;u++){var l=s[u];if(l.getAttribute("src")==n||l.getAttribute("data-webpack")==r+o){a=l;break}}a||(c=!0,a=document.createElement("script"),a.charset="utf-8",a.timeout=120,__webpack_require__.nc&&a.setAttribute("nonce",__webpack_require__.nc),a.setAttribute("data-webpack",r+o),a.src=n),e[n]=[t];var p=function(r,t){a.onerror=a.onload=null,clearTimeout(_);var o=e[n];if(delete e[n],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach((function(e){return e(t)})),r)return r(t)},_=setTimeout(p.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=p.bind(null,a.onerror),a.onload=p.bind(null,a.onload),c&&document.head.appendChild(a)}}}(),function(){__webpack_require__.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){__webpack_require__.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){__webpack_require__.p=""}(),function(){if("undefined"!==typeof document){var e=function(e,r,n,t,o){var i=document.createElement("link");i.rel="stylesheet",i.type="text/css";var a=function(n){if(i.onerror=i.onload=null,"load"===n.type)t();else{var a=n&&("load"===n.type?"missing":n.type),c=n&&n.target&&n.target.href||r,s=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");s.code="CSS_CHUNK_LOAD_FAILED",s.type=a,s.request=c,i.parentNode.removeChild(i),o(s)}};return i.onerror=i.onload=a,i.href=r,n?n.parentNode.insertBefore(i,n.nextSibling):document.head.appendChild(i),i},r=function(e,r){for(var n=document.getElementsByTagName("link"),t=0;t<n.length;t++){var o=n[t],i=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(i===e||i===r))return o}var a=document.getElementsByTagName("style");for(t=0;t<a.length;t++){o=a[t],i=o.getAttribute("data-href");if(i===e||i===r)return o}},n=function(n){return new Promise((function(t,o){var i=__webpack_require__.miniCssF(n),a=__webpack_require__.p+i;if(r(i,a))return t();e(n,a,null,t,o)}))},t={2143:0};__webpack_require__.f.miniCss=function(e,r){var o={3950:1};t[e]?r.push(t[e]):0!==t[e]&&o[e]&&r.push(t[e]=n(e).then((function(){t[e]=0}),(function(r){throw delete t[e],r})))}}}(),function(){var e={2143:0};__webpack_require__.f.j=function(r,n){var t=__webpack_require__.o(e,r)?e[r]:void 0;if(0!==t)if(t)n.push(t[2]);else{var o=new Promise((function(n,o){t=e[r]=[n,o]}));n.push(t[2]=o);var i=__webpack_require__.p+__webpack_require__.u(r),a=new Error,c=function(n){if(__webpack_require__.o(e,r)&&(t=e[r],0!==t&&(e[r]=void 0),t)){var o=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;a.message="Loading chunk "+r+" failed.\n("+o+": "+i+")",a.name="ChunkLoadError",a.type=o,a.request=i,t[1](a)}};__webpack_require__.l(i,c,"chunk-"+r,r)}},__webpack_require__.O.j=function(r){return 0===e[r]};var r=function(r,n){var t,o,i=n[0],a=n[1],c=n[2],s=0;if(i.some((function(r){return 0!==e[r]}))){for(t in a)__webpack_require__.o(a,t)&&(__webpack_require__.m[t]=a[t]);if(c)var u=c(__webpack_require__)}for(r&&r(n);s<i.length;s++)o=i[s],__webpack_require__.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return __webpack_require__.O(u)},n=self["webpackChunknipp"]=self["webpackChunknipp"]||[];n.forEach(r.bind(null,0)),n.push=r.bind(null,n.push.bind(n))}();var __webpack_exports__=__webpack_require__.O(void 0,[4998],(function(){return __webpack_require__(24861)}));__webpack_exports__=__webpack_require__.O(__webpack_exports__)})();
//# sourceMappingURL=app-legacy.d0854e06.js.map