(function(e){function t(t){for(var r,a,u=t[0],i=t[1],c=t[2],l=0,d=[];l<u.length;l++)a=u[l],Object.prototype.hasOwnProperty.call(s,a)&&s[a]&&d.push(s[a][0]),s[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);m&&m(t);while(d.length)d.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,a=1;a<n.length;a++){var u=n[a];0!==s[u]&&(r=!1)}r&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},s={app:0},o=[];function u(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-2d0d7c65":"f6e1a402","chunk-2d21dac0":"f11495e2","chunk-2d22214d":"8f8b4cec","chunk-42ad0690":"d79c1e69","chunk-590d7b9c":"9184add9","chunk-66d236cb":"0006220e"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-42ad0690":1,"chunk-590d7b9c":1,"chunk-66d236cb":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-2d0d7c65":"31d6cfe0","chunk-2d21dac0":"31d6cfe0","chunk-2d22214d":"31d6cfe0","chunk-42ad0690":"92647ec0","chunk-590d7b9c":"92647ec0","chunk-66d236cb":"b69e1931"}[e]+".css",s=i.p+r,o=document.getElementsByTagName("link"),u=0;u<o.length;u++){var c=o[u],l=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(l===r||l===s))return t()}var d=document.getElementsByTagName("style");for(u=0;u<d.length;u++){c=d[u],l=c.getAttribute("data-href");if(l===r||l===s)return t()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=t,m.onerror=function(t){var r=t&&t.target&&t.target.src||s,o=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=r,delete a[e],m.parentNode.removeChild(m),n(o)},m.href=s;var f=document.getElementsByTagName("head")[0];f.appendChild(m)})).then((function(){a[e]=0})));var r=s[e];if(0!==r)if(r)t.push(r[2]);else{var o=new Promise((function(t,n){r=s[e]=[t,n]}));t.push(r[2]=o);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=u(e);var d=new Error;c=function(t){l.onerror=l.onload=null,clearTimeout(m);var n=s[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",d.name="ChunkLoadError",d.type=r,d.request=a,n[1](d)}s[e]=void 0}};var m=setTimeout((function(){c({type:"timeout",target:l})}),12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var d=0;d<c.length;d++)t(c[d]);var m=l;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"052d":function(e,t,n){},"1f57":function(e,t,n){"use strict";var r=n("d4ec"),a=n("bee2"),s=n("bc3a"),o=n.n(s);function u(){var e=JSON.parse(localStorage.getItem("user"));return e&&e.accessToken?{Authorization:"Bearer "+e.accessToken}:{}}var i="https://morning-bayou-96483.herokuapp.com/api/test/",c=function(){function e(){Object(r["a"])(this,e)}return Object(a["a"])(e,[{key:"getPublicContent",value:function(){return o.a.get(i+"all")}},{key:"getUserBoard",value:function(){return o.a.get(i+"user",{headers:u()})}},{key:"getModeratorBoard",value:function(){return o.a.get(i+"mod",{headers:u()})}},{key:"getAdminBoard",value:function(){return o.a.get(i+"admin",{headers:u()})}}]),e}();t["a"]=new c},"249c":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",[n("NavPull")],1),n("div",{staticClass:"main"},[n("router-view",{staticClass:"main-info"})],1)])},s=[],o=(n("caad"),n("2532"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("nav",[n("div",[n("router-link",{attrs:{to:"/"}},[e._v("Home")])],1),n("div",[n("router-link",{attrs:{to:"/login"}},[e._v("Login")])],1),n("div",[n("router-link",{attrs:{to:"/register"}},[e._v("Register")])],1),n("div",[n("a",{attrs:{href:""},on:{click:function(t){return t.preventDefault(),e.logOut(t)}}},[e._v(" LogOut ")])])])}),u=[],i={name:"Nav",methods:{logOut:function(){this.$store.dispatch("auth/logout"),this.$router.push("/login")}}},c=i,l=(n("e1fa"),n("2877")),d=Object(l["a"])(c,o,u,!1,null,"434ac47b",null),m=d.exports,f=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("img",{staticClass:"btn-nav-pull",attrs:{src:n("8c59")},on:{click:function(t){e.show=!e.show}}}),r("transition",{attrs:{name:"fade"}},[e.show?r("div",{staticClass:"nav-pull"},[r("img",{staticClass:"btn-nav-pull",attrs:{src:n("8c59")},on:{click:function(t){e.show=!e.show}}}),r("div",{staticClass:"nav-titles"},[r("div",{staticClass:"nav-bar"},[r("router-link",{attrs:{to:"/"}},[e._v("Home")])],1),r("div",{staticClass:"nav-bar"},[r("router-link",{attrs:{to:"/login"}},[e._v("Login")])],1),r("div",{staticClass:"nav-bar"},[r("router-link",{attrs:{to:"/register"}},[e._v("Register")])],1),r("div",{staticClass:"nav-bar"},[r("a",{attrs:{href:""},on:{click:function(t){return t.preventDefault(),e.logOut(t)}}},[e._v(" LogOut ")])])])]):e._e()])],1)},p=[],h={name:"NavPull",data:function(){return{show:!1}},methods:{logOut:function(){this.$store.dispatch("auth/logout"),this.$router.push("/login")}}},g=h,v=(n("ae7d"),Object(l["a"])(g,f,p,!1,null,"23f42e93",null)),b=v.exports,w={components:{Nav:m,NavPull:b},computed:{currentUser:function(){return this.$store.state.auth.user},showAdminBoard:function(){return!(!this.currentUser||!this.currentUser.roles)&&this.currentUser.roles.includes("ROLE_ADMIN")},showModeratorBoard:function(){return!(!this.currentUser||!this.currentUser.roles)&&this.currentUser.roles.includes("ROLE_MODERATOR")}},methods:{logOut:function(){this.$store.dispatch("auth/logout"),this.$router.push("/login")}}},_=w,k=(n("ecd4"),Object(l["a"])(_,a,s,!1,null,"2904fa00",null)),y=k.exports,O=(n("d3b7"),n("8c4f")),C=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},$=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"title"},[n("span",[e._v("Home")]),n("div",{staticClass:"hr"})])}],x=(n("25f0"),n("1f57")),P={name:"Home",data:function(){return{content:""}},mounted:function(){var e=this;x["a"].getPublicContent().then((function(t){e.content=t.data}),(function(t){e.content=t.response&&t.response.data||t.message||t.toString()}))}},S=P,j=(n("cccb"),Object(l["a"])(S,C,$,!1,null,null,null)),E=j.exports,N=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"register"},[n("form",{staticClass:"reg-field",on:{submit:function(t){return t.preventDefault(),e.handleLogin(t)}}},[e._m(0),n("label",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.user.username,expression:"user.username"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{placeholder:"Username",type:"text",name:"username"},domProps:{value:e.user.username},on:{input:function(t){t.target.composing||e.$set(e.user,"username",t.target.value)}}})]),n("label",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.user.password,expression:"user.password"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",attrs:{placeholder:"Password",type:"password",name:"password"},domProps:{value:e.user.password},on:{input:function(t){t.target.composing||e.$set(e.user,"password",t.target.value)}}})]),e._m(1)])])])},I=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"title"},[n("h1",[e._v("Login")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"reg-btn-field"},[n("button",{staticClass:"reg-btn",attrs:{type:"submit"}},[e._v("Submit")])])}],L=n("d4ec"),q=function e(t,n,r){Object(L["a"])(this,e),this.username=t,this.email=n,this.password=r},A={name:"Login",data:function(){return{user:new q("",""),loading:!1,message:""}},computed:{loggedIn:function(){return this.$store.state.auth.status.loggedIn}},created:function(){this.loggedIn&&this.$router.push("/profile")},methods:{handleLogin:function(){var e=this;this.loading=!0,this.$validator.validateAll().then((function(t){t?e.user.username&&e.user.password&&e.$store.dispatch("auth/login",e.user).then((function(){e.$router.push("/profile")}),(function(t){e.loading=!1,e.message=t.response&&t.response.data||t.message||t.toString()})):e.loading=!1}))}}},T=A,U=(n("6b0c"),Object(l["a"])(T,N,I,!1,null,"6fac3c5c",null)),R=U.exports,B=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"register"},[n("form",{staticClass:"reg-field",on:{submit:function(t){return t.preventDefault(),e.handleRegister(t)}}},[e._m(0),n("label",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.user.username,expression:"user.username"},{name:"validate",rawName:"v-validate",value:"required|min:3|max:20",expression:"'required|min:3|max:20'"}],attrs:{placeholder:"Username",type:"text",name:"username"},domProps:{value:e.user.username},on:{input:function(t){t.target.composing||e.$set(e.user,"username",t.target.value)}}})]),e.submitted&&e.errors.has("username")?n("div",{staticClass:"alert-danger"},[e._v(e._s(e.errors.first("username")))]):e._e(),n("label",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.user.email,expression:"user.email"},{name:"validate",rawName:"v-validate",value:"required|min:3|max:50",expression:"'required|min:3|max:50'"}],attrs:{placeholder:"Email",type:"email",name:"email"},domProps:{value:e.user.email},on:{input:function(t){t.target.composing||e.$set(e.user,"email",t.target.value)}}})]),e.submitted&&e.errors.has("email")?n("div",{staticClass:"alert-danger"},[e._v(e._s(e.errors.first("email")))]):e._e(),n("label",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.user.password,expression:"user.password"},{name:"validate",rawName:"v-validate",value:"required|min:6|max:40",expression:"'required|min:6|max:40'"}],staticClass:"form-control",attrs:{placeholder:"Password",type:"password",name:"password"},domProps:{value:e.user.password},on:{input:function(t){t.target.composing||e.$set(e.user,"password",t.target.value)}}})]),e.submitted&&e.errors.has("password")?n("div",{staticClass:"alert-danger"},[e._v(e._s(e.errors.first("password")))]):e._e(),e._m(1)])])])},D=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"title"},[n("h1",[e._v("Register")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"reg-btn-field"},[n("button",{staticClass:"reg-btn",attrs:{type:"submit"}},[e._v("Submit")])])}],M={name:"Register",data:function(){return{user:new q("","",""),submitted:!1,successful:!1,message:""}},computed:{loggedIn:function(){return this.$store.state.auth.status.loggedIn}},mounted:function(){this.loggedIn&&this.$router.push("/profile")},methods:{handleRegister:function(){var e=this;this.message="",this.submitted=!0,this.$validator.validate().then((function(t){t&&e.$store.dispatch("auth/register",e.user).then((function(t){e.message=t.message,e.successful=!0}),(function(t){e.message=t.response&&t.response.data||t.message||t.toString(),e.successful=!1}))}))}}},F=M,H=(n("934d"),Object(l["a"])(F,B,D,!1,null,"ebf5c48a",null)),J=H.exports;r["a"].use(O["a"]);var z=new O["a"]({mode:"history",routes:[{path:"/",name:"home",component:E},{path:"/home",component:E},{path:"/login",component:R},{path:"/register",component:J},{path:"/profile",name:"profile",component:function(){return n.e("chunk-66d236cb").then(n.bind(null,"c66d"))}},{path:"/admin",name:"admin",component:function(){return n.e("chunk-590d7b9c").then(n.bind(null,"b295"))},children:[{path:"/admin/test",component:function(){return n.e("chunk-2d21dac0").then(n.bind(null,"d1fc"))}}]},{path:"/mod",name:"moderator",component:function(){return n.e("chunk-2d0d7c65").then(n.bind(null,"77f5"))}},{path:"/user",name:"user",component:function(){return n.e("chunk-42ad0690").then(n.bind(null,"9a40"))},children:[{path:"/user/test",component:function(){return n.e("chunk-2d22214d").then(n.bind(null,"cca8"))}}]}]}),K=n("2f62"),G=n("bee2"),Q=n("bc3a"),V=n.n(Q),W="https://morning-bayou-96483.herokuapp.com/api/auth/",X=function(){function e(){Object(L["a"])(this,e)}return Object(G["a"])(e,[{key:"login",value:function(e){return V.a.post(W+"signin",{username:e.username,password:e.password}).then((function(e){return e.data.accessToken&&localStorage.setItem("user",JSON.stringify(e.data)),e.data}))}},{key:"logout",value:function(){localStorage.removeItem("user")}},{key:"register",value:function(e){return V.a.post(W+"signup",{username:e.username,email:e.email,password:e.password})}}]),e}(),Y=new X,Z=JSON.parse(localStorage.getItem("user")),ee=Z?{status:{loggedIn:!0},user:Z}:{status:{loggedIn:!1},user:null},te={namespaced:!0,state:ee,actions:{login:function(e,t){var n=e.commit;return Y.login(t).then((function(e){return n("loginSuccess",e),Promise.resolve(e)}),(function(e){return n("loginFailure"),Promise.reject(e)}))},logout:function(e){var t=e.commit;Y.logout(),t("logout")},register:function(e,t){var n=e.commit;return Y.register(t).then((function(e){return n("registerSuccess"),Promise.resolve(e.data)}),(function(e){return n("registerFailure"),Promise.reject(e)}))}},mutations:{loginSuccess:function(e,t){e.status.loggedIn=!0,e.user=t},loginFailure:function(e){e.status.loggedIn=!1,e.user=null},logout:function(e){e.status.loggedIn=!1,e.user=null},registerSuccess:function(e){e.status.loggedIn=!1},registerFailure:function(e){e.status.loggedIn=!1}}};r["a"].use(K["a"]);var ne=new K["a"].Store({modules:{auth:te}}),re=n("7bb1"),ae=n("ecee"),se=n("ad3d"),oe=n("c074");ae["c"].add(oe["a"],oe["d"],oe["e"],oe["b"],oe["c"]),r["a"].config.productionTip=!1,r["a"].use(re["a"]),r["a"].component("font-awesome-icon",se["a"]),r["a"].use(K["a"]),new r["a"]({router:z,store:ne,render:function(e){return e(y)}}).$mount("#app")},"5ced":function(e,t,n){},"6b0c":function(e,t,n){"use strict";n("d242")},"7d49":function(e,t,n){},"853e":function(e,t,n){},"8c59":function(e,t,n){e.exports=n.p+"img/nav-pull.de2122ed.jpg"},"934d":function(e,t,n){"use strict";n("7d49")},ae7d:function(e,t,n){"use strict";n("853e")},cccb:function(e,t,n){"use strict";n("5ced")},d242:function(e,t,n){},e1fa:function(e,t,n){"use strict";n("249c")},ecd4:function(e,t,n){"use strict";n("052d")}});
//# sourceMappingURL=app.3f8bb933.js.map