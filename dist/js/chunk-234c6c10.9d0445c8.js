(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-234c6c10"],{"210c":function(t,s,e){"use strict";e("d480")},"3f11":function(t,s,e){t.exports=e.p+"img/giveSalaries.791f8754.svg"},4488:function(t,s,e){t.exports=e.p+"img/logout.801a6998.svg"},a0bc:function(t,s,e){t.exports=e.p+"img/salaries.92b17122.svg"},b175:function(t,s,e){t.exports=e.p+"img/box.e9e16172.svg"},c9d8:function(t,s,e){t.exports=e.p+"img/user.cad018c6.svg"},cca8:function(t,s,e){"use strict";e.r(s);var i=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"main-info"},[i("div",{staticClass:"userNav-grid-container"},[i("div",{staticClass:"userNav-grid-item"},[i("router-link",{attrs:{to:"/profile"}},[i("img",{attrs:{src:e("c9d8")}})])],1),i("div",{staticClass:"userNav-grid-item"},[i("router-link",{attrs:{to:"/user/storage"}},[i("img",{attrs:{src:e("b175")}})])],1),i("div",{staticClass:"userNav-grid-item"},[i("router-link",{attrs:{to:"/user/salaries"}},[i("img",{attrs:{src:e("a0bc")}})])],1),t.isAdmin?i("div",{staticClass:"userNav-grid-item"},[i("router-link",{attrs:{to:"/admin/salaries/give"}},[i("img",{attrs:{src:e("3f11")}})])],1):t._e(),i("div",{staticClass:"userNav-grid-item"},[i("a",{attrs:{href:""},on:{click:function(s){return s.preventDefault(),t.logOut(s)}}},[i("img",{attrs:{src:e("4488")}})])])])])},r=[],a=(e("caad"),e("2532"),e("1f57"),{name:"UserTest",data:function(){return{}},mounted:function(){this.$store.state.auth.status.loggedIn&&(this.user=!0,this.$store.state.auth.user.roles.includes("ROLE_ADMIN")?this.admin=!0:this.$store.state.auth.user.roles.includes("ROLE_MODERATOR")&&(this.moderator=!0))},methods:{logOut:function(){this.$store.dispatch("auth/logout"),this.$router.push("/login")}},computed:{loggedIn:function(){return this.$store.state.auth.user},isUser:function(){if(this.$store.state.auth.status.loggedIn)return!0},isAdmin:function(){if(this.$store.state.auth.status.loggedIn)return this.$store.state.auth.user.roles.includes("ROLE_ADMIN")},isModerator:function(){if(this.$store.state.auth.status.loggedIn)return this.$store.state.auth.user.roles.includes("ROLE_MODERATOR")}}}),u=a,n=(e("210c"),e("2877")),o=Object(n["a"])(u,i,r,!1,null,"45ebbe76",null);s["default"]=o.exports},d480:function(t,s,e){}}]);
//# sourceMappingURL=chunk-234c6c10.9d0445c8.js.map