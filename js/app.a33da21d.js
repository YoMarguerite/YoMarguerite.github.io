(function(e){function t(t){for(var n,o,l=t[0],a=t[1],u=t[2],f=0,h=[];f<l.length;f++)o=l[f],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&h.push(i[o][0]),i[o]=0;for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n]);c&&c(t);while(h.length)h.shift()();return r.push.apply(r,u||[]),s()}function s(){for(var e,t=0;t<r.length;t++){for(var s=r[t],n=!0,l=1;l<s.length;l++){var a=s[l];0!==i[a]&&(n=!1)}n&&(r.splice(t--,1),e=o(o.s=s[0]))}return e}var n={},i={app:0},r=[];function o(t){if(n[t])return n[t].exports;var s=n[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=e,o.c=n,o.d=function(e,t,s){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(s,n,function(t){return e[t]}.bind(null,n));return s},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],a=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var c=a;r.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"56d7":function(e,t,s){"use strict";s.r(t);s("4de4"),s("e260"),s("e6cf"),s("cca6"),s("a79d");var n=s("2b0e"),i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("b-navbar",{attrs:{variant:"primary",type:"dark"}},[s("b-navbar-brand",{staticClass:"mb-0",attrs:{tag:"h1"}},[s("b-button",{attrs:{variant:"primary"},on:{click:e.signOut}},[e._v("AppQuestion")])],1),s("b-navbar-nav",{staticClass:"ml-auto"},[null!=e.user?s("b-dropdown",{attrs:{text:e.user.firstname+" "+e.user.lastname+" ("+e.user.company+")",variant:"primary"}},[s("b-dropdown-item",{on:{click:function(t){return e.$router.push("/questionnaire")}}},[e._v("Commencer le test")]),s("b-dropdown-item",{on:{click:function(t){return e.$router.push("/my_results")}}},[e._v("Mes résultats")]),"admin"==e.user.firstname&&"admin"==e.user.lastname&&"admin"==e.user.company?s("b-dropdown-item",{on:{click:function(t){return e.$router.push("/all_results")}}},[e._v("Tous les Résultats")]):e._e(),s("b-dropdown-divider"),s("b-dropdown-item",{on:{click:e.signOut}},[e._v("Déconnexion")])],1):e._e()],1)],1),s("router-view",{key:e.$route.path,staticClass:"container",on:{setUser:e.setUser}})],1)},r=[],o={data:function(){return{user:null}},mounted:function(){this.setUser()},methods:{setUser:function(){try{this.user=JSON.parse(sessionStorage.getItem("currentUser"))}catch(e){this.user=null}},signOut:function(){this.user=null,sessionStorage.setItem("currentUser",""),this.$router.push("/")}}},l=o,a=s("2877"),u=Object(a["a"])(l,i,r,!1,null,null,null),c=u.exports,f=s("9483");Object(f["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var h=s("8c4f"),p=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("Login",{on:{setUser:e.setUser}})],1)},m=[],d=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("b-card",{staticClass:"mt-3",attrs:{header:"Identifiez-vous"}},[s("b-form",{on:{submit:e.onSubmit}},[s("b-form-group",{attrs:{id:"input-group-1",label:"Prénom:","label-for":"input-1",state:e.fnState,"invalid-feedback":"Saisissez votre prénom"}},[s("b-form-input",{attrs:{id:"input-1",state:e.fnState,placeholder:"Entrez votre prénom"},model:{value:e.form.firstname,callback:function(t){e.$set(e.form,"firstname",t)},expression:"form.firstname"}})],1),s("b-form-group",{attrs:{id:"input-group-2",label:"Nom:","label-for":"input-2",state:e.lnState,"invalid-feedback":"Saisissez votre nom"}},[s("b-form-input",{attrs:{id:"input-2",state:e.lnState,placeholder:"Entrez votre nom"},model:{value:e.form.lastname,callback:function(t){e.$set(e.form,"lastname",t)},expression:"form.lastname"}})],1),s("b-form-group",{attrs:{id:"input-group-3",label:"Entreprise:","label-for":"input-3",state:e.cpState,"invalid-feedback":"Saisissez votre entreprise"}},[s("b-form-input",{attrs:{id:"input-3",state:e.cpState,placeholder:"Quel est votre entreprise ?"},model:{value:e.form.company,callback:function(t){e.$set(e.form,"company",t)},expression:"form.company"}})],1),s("b-button",{attrs:{type:"submit",variant:"primary"}},[e._v("Commencer le test")])],1)],1)],1)},b=[],v={data:function(){return{form:{firstname:"",lastname:"",company:""},fnState:null,lnState:null,cpState:null}},methods:{check:function(){return this.fnState=""!=this.form.firstname,this.lnState=""!=this.form.lastname,this.cpState=""!=this.form.company,this.fnState&&this.lnState&&this.cpState},onSubmit:function(e){this.check()&&(e.preventDefault(),sessionStorage.setItem("currentUser",JSON.stringify(this.form)),this.$emit("setUser"),this.$router.push({name:"questionnaire"}))}}},g=v,k=Object(a["a"])(g,d,b,!1,null,null,null),_=k.exports,y={name:"home",mounted:function(){this.setUser()},components:{Login:_},methods:{setUser:function(){this.$emit("setUser")}}},q=y,x=Object(a["a"])(q,p,m,!1,null,null,null),S=x.exports,O=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[this.page<=this.questions.nb?s("b-card",{staticClass:"mt-3",attrs:{header:"Questionnaire",footer:this.page+"/"+this.questions.nb}},[s("Question",{attrs:{index:this.page/this.questions.nb,question:e.askedQuestion.questions[e.page]},on:{before:function(t){e.page--},resultQuestion:e.resultQuestion}})],1):e._e(),this.page>this.questions.nb?s("b-card",{staticClass:"mt-3",attrs:{header:"Résultats"}},[s("Result",{attrs:{date:this.$filters.formatDate(new Date),questions:e.askedQuestion}})],1):e._e()],1)},$=[],w=(s("c975"),s("d81d"),function(){var e=this,t=e.$createElement,s=e._self._c||t;return null!=e.question?s("div",[s("h3",[e._v(e._s(e.question.titre))]),s("b-form",[e._l(e.question.choix,(function(t){return s("b-form-checkbox",{key:t.libelle,model:{value:t.check,callback:function(s){e.$set(t,"check",s)},expression:"choix.check"}},[e._v(" "+e._s(t.libelle)+" ")])})),s("br"),e.index>0?s("b-button",{attrs:{variant:"primary"},on:{click:e.before}},[e._v("Question Précédente")]):e._e(),e.index<1?s("b-button",{staticClass:"float-lg-right",attrs:{variant:"primary"},on:{click:e.onSubmit}},[e._v("Question Suivante")]):e._e(),1===e.index?s("b-button",{staticClass:"float-lg-right",attrs:{variant:"primary"},on:{click:e.onSubmit}},[e._v("Terminer")]):e._e()],2)],1):e._e()}),j=[],A={name:"Question",data:function(){return{form:null}},props:{index:null,question:null},methods:{before:function(){this.$emit("before")},onSubmit:function(){this.$emit("resultQuestion",this.question)}}},Q=A,U=Object(a["a"])(Q,w,j,!1,null,null,null),C=U.exports,z=function(){var e=this,t=e.$createElement,s=e._self._c||t;return null!=e.questions?s("div",{staticStyle:{"pointer-events":"none"}},[s("h3",[e._v(e._s(e.questions.score)+"/"+e._s(e.questions.questions.length))]),e._l(e.questions.questions,(function(t){return s("b-card",{key:t.titre},[s("h3",[e._v(e._s(t.titre))]),s("b-form",e._l(t.choix,(function(t){return s("b-form-checkbox",{key:t.libelle,attrs:{state:t.result},model:{value:t.check,callback:function(s){e.$set(t,"check",s)},expression:"choix.check"}},[e._v(e._s(t.libelle))])})),1)],1)})),s("b-card-footer",[e._v(e._s(e.date))])],2):e._e()},N=[],E={name:"Result",props:{date:null,questions:null},created:function(){var e=0;if(this.questions.questions.map((function(t){var s=!0;t.choix.map((function(e){-1!=t.result.indexOf(e.libelle)!==e.check&&(s=!1),e.result=-1!=t.result.indexOf(e.libelle)===e.check})),s&&e++})),this.questions.score=e,this.questions.date=this.date,void 0==this.questions.user){var t;this.questions.user=JSON.parse(sessionStorage.getItem("currentUser"));try{t=JSON.parse(localStorage.getItem("results"))}catch(s){Array.isArray(t)||(t=[])}t.push(this.questions),localStorage.setItem("results",JSON.stringify(t))}}},J=E,M=Object(a["a"])(J,z,N,!1,null,null,null),I=M.exports,P=s("5bda"),R={data:function(){return{user:null,questions:P,askedQuestion:{user:this.user,score:0,questions:[]},page:0}},components:{Question:C,Result:I},mounted:function(){try{this.user=JSON.parse(sessionStorage.getItem("currentUser"))}catch(n){this.$router.push("/")}P.nb>P.questions.length&&(P.nb=P.questions.length);var e=0,t=[];while(e<=P.nb){var s=Math.floor(Math.random()*Math.floor(P.questions.length));-1===t.indexOf(s)&&(t.push(s),this.askedQuestion.questions.push(P.questions[s]),e++)}},methods:{resultQuestion:function(e){this.questions.questions.map((function(t){t.titre===e.titre&&(t.choix=e.choix)})),this.page++}}},D=R,T=Object(a["a"])(D,O,$,!1,null,null,null),F=T.exports,V=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[void 0===e.all?s("b-card",{staticClass:"mt-3",attrs:{header:"Mes Résultats"}},e._l(e.questionnaires,(function(t,n){return s("div",{key:n},[s("b-button",{staticClass:"mb-1",attrs:{variant:"primary"},on:{click:function(t){return e.inverseVisibility(-n-1)}}},[e._v(" Afficher test du "+e._s(t.date)+" ")]),s("b-collapse",{model:{value:e.visible[-n-1],callback:function(t){e.$set(e.visible,-n-1,t)},expression:"visible[-index-1]"}},[s("Result",{attrs:{date:t.date,questions:t}})],1)],1)})),0):e._e(),!0===e.all?s("b-card",{staticClass:"mt-3",attrs:{header:"Tout les résultats"}},e._l(e.questionnaires,(function(t,n){return s("div",{key:n},[s("b-button",{staticClass:"mb-1",attrs:{variant:"primary"},on:{click:function(t){return e.inverseVisibility(-n-1)}}},[e._v(" Afficher test du "+e._s(t.date)+" par "+e._s(t.user.firstname)+" "+e._s(t.user.lastname)+" ("+e._s(t.user.company)+") ")]),s("b-collapse",{model:{value:e.visible[-n-1],callback:function(t){e.$set(e.visible,-n-1,t)},expression:"visible[-index-1]"}},[s("Result",{attrs:{date:t.date,questions:t}})],1)],1)})),0):e._e()],1)},L=[],B={props:{all:null},data:function(){return{user:null,questionnaires:[],visible:[]}},components:{Result:I},mounted:function(){var e=this;try{this.user=JSON.parse(sessionStorage.getItem("currentUser"))}catch(t){this.$router.push("/")}try{this.questionnaires=JSON.parse(localStorage.getItem("results")),void 0===this.all&&(this.questionnaires=this.questionnaires.filter((function(t){return t.user.firstname===e.user.firstname&&t.user.lastname===e.user.lastname&&t.user.company===e.user.company})))}catch(t){this.questionnaires=[]}},methods:{inverseVisibility:function(e){this.visible[e]=!this.visible[e]}}},H=B,Y=Object(a["a"])(H,V,L,!1,null,null,null),G=Y.exports;n["default"].use(h["a"]);var K=[{path:"/",name:"home",component:S},{path:"/questionnaire",name:"questionnaire",component:F},{path:"/my_results",name:"my_results",component:G},{path:"/all_results",name:"all_results",component:G,props:{all:!0}}],W=new h["a"]({routes:K}),X=W,Z=s("5f5b");s("f9e3"),s("2dd8");n["default"].use(Z["a"]),n["default"].config.productionTip=!1,n["default"].prototype.$filters=n["default"].options.filters,n["default"].filter("formatDate",(function(e){return e.getDay()+"/"+e.getMonth()+"/"+e.getFullYear()+" "+e.getHours()+":"+e.getMinutes()+":"+e.getSeconds()})),new n["default"]({router:X,render:function(e){return e(c)}}).$mount("#app")},"5bda":function(e){e.exports=JSON.parse('{"nb":5,"questions":[{"titre":"Aimez-vous les chats ?","choix":[{"libelle":"oui","check":false},{"libelle":"non","check":false},{"libelle":"<3","check":false}],"result":["oui","<3"]},{"titre":"Aimez-vous les singes ?","choix":[{"libelle":"oui","check":false},{"libelle":"non","check":false},{"libelle":"<3","check":false}],"result":["oui","<3"]},{"titre":"Aimez-vous les chiens ?","choix":[{"libelle":"oui","check":false},{"libelle":"non","check":false},{"libelle":"<3","check":false}],"result":["oui","<3"]},{"titre":"Aimez-vous les chevaux ?","choix":[{"libelle":"oui","check":false},{"libelle":"non","check":false},{"libelle":"<3","check":false}],"result":["oui","<3"]},{"titre":"Aimez-vous les phoques ?","choix":[{"libelle":"oui","check":false},{"libelle":"non","check":false},{"libelle":"<3","check":false}],"result":["oui","<3"]},{"titre":"Aimez-vous les bières ?","choix":[{"libelle":"oui","check":false},{"libelle":"non","check":false},{"libelle":"<3","check":false}],"result":["oui","<3"]},{"titre":"Aimez-vous les voyages ?","choix":[{"libelle":"oui","check":false},{"libelle":"non","check":false},{"libelle":"<3","check":false}],"result":["oui","<3"]},{"titre":"Aimez-vous les bretons ?","choix":[{"libelle":"oui","check":false},{"libelle":"non","check":false},{"libelle":"<3","check":false}],"result":["oui","<3"]}]}')}});
//# sourceMappingURL=app.a33da21d.js.map