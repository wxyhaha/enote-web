webpackJsonp([5],{Jdfc:function(t,e){t.exports={baseURL:"//note-server.hunger-valley.com"}},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n("7+uW"),r=n("Dd8w"),a=n.n(r),s=n("//Fk"),u=n.n(s),i=n("mtWM"),c=n.n(i),d=n("Jdfc"),l=n.n(d),f=n("zL8q"),h=n.n(f);function m(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return new u.a(function(o,r){var a={url:t,method:e,validateStatus:function(t){return t>=200&&t<300||400===t}};"get"===e.toLowerCase()?a.params=n:a.data=n,c()(a).then(function(t){200===t.status?o(t.data):(f.Message.error(t.data.msg),r(t.data))}).catch(function(t){f.Message.error("网络异常"),r({msg:"网络异常"})})})}c.a.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded",c.a.defaults.baseURL=l.a.baseURL,c.a.defaults.withCredentials=!0;var v="/auth/register",b="/auth/login",p="/auth/logout",k="/auth",N=function(t){var e=t.username,n=t.password;return m(v,"POST",{username:e,password:n})},I=function(t){var e=t.username,n=t.password;return m(b,"POST",{username:e,password:n})},g=function(){return m(p)},T=function(){return m(k)},A=n("NYxO"),E={data:function(){return{}},created:function(){this.setUser()},methods:a()({},Object(A.b)({setUser:"checkLogin"})),computed:a()({},Object(A.c)(["username","slug"]))},w={render:function(){var t=this.$createElement;return(this._self._c||t)("span",{attrs:{title:this.username}},[this._v(this._s(this.slug))])},staticRenderFns:[]};var D={components:{avatar:n("VU/8")(E,w,!1,function(t){n("YohP")},"data-v-45792781",null).exports},methods:a()({},Object(A.b)(["logout"]),{onLogout:function(){this.logout({path:"/login"})}})},L={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"sidebar"}},[e("avatar"),this._v(" "),e("div",{staticClass:"icons"},[e("router-link",{attrs:{to:"/note",title:"笔记"}},[e("i",{staticClass:"iconfont icon-note"})]),this._v(" "),e("router-link",{attrs:{to:"/notebooks",title:"笔记本"}},[e("i",{staticClass:"iconfont icon-notebook"})]),this._v(" "),e("router-link",{attrs:{to:"/trash",title:"回收站"}},[e("i",{staticClass:"iconfont icon-trash"})])],1),this._v(" "),e("div",{staticClass:"logout"},[e("i",{staticClass:"iconfont icon-logout",on:{click:this.onLogout}})])],1)},staticRenderFns:[]};var U={name:"App",components:{sidebar:n("VU/8")(D,L,!1,function(t){n("xrUJ")},"data-v-a40ec3e2",null).exports}},y={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("sidebar"),this._v(" "),e("router-view")],1)},staticRenderFns:[]};var C=n("VU/8")(U,y,!1,function(t){n("WA1V")},null,null).exports,F=n("/ocq");o.default.use(F.a);var M=new F.a({routes:[{path:"/",alias:"/notebooks",component:function(){return n.e(2).then(n.bind(null,"C3fl"))}},{path:"/login",component:function(){return n.e(3).then(n.bind(null,"xJsL"))}},{path:"/note",component:function(){return n.e(0).then(n.bind(null,"Gb2o"))}},{path:"/trash",component:function(){return n.e(1).then(n.bind(null,"WMg/"))}}]}),_=(n("tvR6"),n("pFYg")),P=n.n(_);function R(t){var e=("object"===(void 0===t?"undefined":P()(t))?t:new Date(t)).getTime(),n=Date.now()-e,o="";switch(!0){case n<6e4:o="刚刚";break;case n<36e5:o=Math.floor(n/6e4)+"分钟前";break;case n<864e5:o=Math.floor(n/36e5)+"小时前";break;default:o=Math.floor(n/864e5)+"天前"}return o}var x={GET:"/notebooks",ADD:"/notebooks",UPDATE:"/notebooks/:id",DELETE:"/notebooks/:id"},O=function(){return new u.a(function(t,e){m(x.GET).then(function(e){e.data=e.data.sort(function(t,e){return t.createdAt<e.createdAt}),e.data.forEach(function(t){t.createdAtFriendly=R(t.createdAt),t.updatedAtFriendly=R(t.updatedAt)}),t(e)}).catch(function(t){e(t)})})},G=function(t){var e=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{title:""}).title,n=void 0===e?"":e;return m(x.UPDATE.replace(":id",t),"PATCH",{title:n})},B=function(t){return m(x.DELETE.replace(":id",t),"DELETE")},V=function(){var t=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{title:""}).title,e=void 0===t?"":t;return new u.a(function(t,n){m(x.ADD,"POST",{title:e}).then(function(e){e.data.createdAtFriendly=R(e.data.createdAt),e.data.updatedAtFriendly=R(e.data.updatedAt),t(e)}).catch(function(t){n(t)})})},J={state:{notebooks:null,curBookId:null},getters:{notebooks:function(t){return t.notebooks||[]},curBook:function(t){return Array.isArray(t.notebooks)?t.curBookId?t.notebooks.find(function(e){return e.id==t.curBookId})||{}:t.notebooks[0]||{}:{}}},mutations:{setNotebooks:function(t,e){t.notebooks=e.notebooks},addNotebook:function(t,e){t.notebooks.unshift(e.notebook)},updateNotebook:function(t,e){t.notebooks.find(function(t){return t.id==e.notebookId||{}}).title=e.title},deleteNotebook:function(t,e){t.notebooks=t.notebooks.filter(function(t){return t.id!=e.notebookId})},setCurBook:function(t,e){t.curBookId=e.curBookId}},actions:{getNotebooks:function(t){var e=t.commit;return null!==t.state.notebooks?u.a.resolve():O().then(function(t){e("setNotebooks",{notebooks:t.data})})},addNotebook:function(t,e){var n=t.commit;return V({title:e.title}).then(function(t){n("addNotebook",{notebook:t.data}),f.Message.success(t.msg)})},updateNotebook:function(t,e){var n=t.commit;return G(e.notebookId,{title:e.title}).then(function(t){n("updateNotebook",{notebookId:e.notebookId,title:e.title}),f.Message.success(t.msg)})},deleteNotebook:function(t,e){var n=t.commit;return B(e.notebookId).then(function(t){n("deleteNotebook",{notebookId:e.notebookId}),f.Message.success(t.msg)})}}},S={GET:"/notes/from/:notebookId",ADD:"/notes/to/:notebookId",UPDATE:"/notes/:noteId",DELETE:"/notes/:noteId"},j=function(t){var e=t.notebookId;return new u.a(function(t,n){m(S.GET.replace(":notebookId",e)).then(function(e){e.data=e.data.map(function(t){return t.createdAtFriendly=R(t.createdAt),t.updatedAtFriendly=R(t.updatedAt),t}).sort(function(t,e){return t.updatedAt<e.updatedAt}),t(e)}).catch(function(t){n(t)})})},H=function(t,e){var n=t.noteId,o=e.title,r=e.content;return m(S.UPDATE.replace(":noteId",n),"PATCH",{title:o,content:r})},W=function(t){var e=t.noteId;return m(S.DELETE.replace(":noteId",e),"DELETE")},Y=function(t){var e=t.notebookId,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{title:"",content:""},o=n.title,r=void 0===o?"":o,a=n.content,s=void 0===a?"":a;return new u.a(function(t,n){m(S.ADD.replace(":notebookId",e),"POST",{title:r,content:s}).then(function(e){e.data.createdAtFriendly=R(e.data.createdAt),e.data.updatedAtFriendly=R(e.data.updatedAt),t(e)}).catch(function(t){n(t)})})},$={state:{notes:null,curNoteId:null},getters:{notes:function(t){return t.notes||[]},curNote:function(t){return Array.isArray(t.notes)?t.curNoteId?t.notes.find(function(e){return e.id==t.curNoteId})||{title:"",content:""}:t.notes[0]||{title:"",content:""}:{title:"",content:""}}},mutations:{setNote:function(t,e){t.notes=e.notes},addNote:function(t,e){t.notes.unshift(e.note)},updateNote:function(t,e){var n=t.notes.find(function(t){return t.id===e.noteId||{}});n.title=e.title,n.content=e.content},deleteNote:function(t,e){t.notes=t.notes.filter(function(t){return t.id!==e.noteId})},setCurNote:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t.curNoteId=e.curNoteId}},actions:{getNotes:function(t,e){var n=t.commit,o=e.notebookId;return j({notebookId:o}).then(function(t){n("setNote",{notes:t.data})})},addNote:function(t,e){var n=t.commit,o=e.notebookId,r=e.title,a=e.content;return Y({notebookId:o},{title:r,content:a}).then(function(t){n("addNote",{note:t.data}),f.Message.success(t.msg)})},updateNote:function(t,e){var n=t.commit,o=e.noteId,r=e.title,a=e.content;return H({noteId:o},{title:r,content:a}).then(function(t){n("updateNote",{noteId:o,title:r,content:a})})},deleteNote:function(t,e){var n=t.commit,o=e.noteId;return W({noteId:o}).then(function(t){n("deleteNote",{noteId:o}),f.Message.success(t.msg)})}}},q={GET:"/notes/trash",REVERT:"/notes/:noteId/revert",DELETE:"/notes/:noteId/confirm"},z=function(){return new u.a(function(t,e){m(q.GET).then(function(e){e.data=e.data.sort(function(t,e){return t.createdAt<e.createdAt}),e.data.forEach(function(t){t.createdAtFriendly=R(t.createdAt),t.updatedAtFriendly=R(t.updatedAt)}),t(e)}).catch(function(t){e(t)})})},K=function(t){var e=t.noteId;return m(q.DELETE.replace(":noteId",e),"DELETE")},Q=function(t){var e=t.noteId;return m(q.REVERT.replace(":noteId",e),"PATCH")},X={state:{trashNotes:null,curTrashNoteId:null},getters:{trashNotes:function(t){return t.trashNotes||[]},curTrashNote:function(t,e){return t.curTrashNoteId?t.trashNotes.find(function(e){return e.id==t.curTrashNoteId})||{}:e.trashNotes[0]||{}},belongTo:function(t,e,n,o){return(o.notebooks.find(function(t){return t.id==e.curTrashNote.notebookId})||{}).title||""}},mutations:{setTrashNotes:function(t,e){t.trashNotes=e.trashNotes},addTrashNote:function(t,e){t.trashNotes.unshift(e.note)},deleteTrashNote:function(t,e){t.trashNotes=t.trashNotes.filter(function(t){return t.id!==e.noteId})},setCurTrashNote:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t.curTrashNoteId=e.curTrashNoteId}},actions:{getTrashNotes:function(t){var e=t.commit;return z().then(function(t){e("setTrashNotes",{trashNotes:t.data})})},deleteTrashNote:function(t,e){var n=t.commit,o=e.noteId;return K({noteId:o}).then(function(t){n("deleteTrashNote",{noteId:o}),f.Message.success(t.msg)})},revertTrashNote:function(t,e){var n=t.commit,o=e.noteId;return Q({noteId:o}).then(function(t){n("deleteTrashNote",{noteId:o}),f.Message.success(t.msg)})}}},Z={state:{user:null},getters:{username:function(t){return null===t.user?"未登录":t.user.username},slug:function(t){return null===t.user?"未":t.user.username.charAt(0)}},mutations:{setUser:function(t,e){t.user=e.user}},actions:{login:function(t,e){var n=t.commit,o=e.username,r=e.password;return I({username:o,password:r}).then(function(t){n("setUser",{user:t.data})})},register:function(t,e){var n=t.commit,o=e.username,r=e.password;return N({username:o,password:r}).then(function(t){n("setUser",{user:t.data})})},logout:function(t){var e=t.commit,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{path:"/"};return g().then(function(t){e("setUser",{user:null}),M.push(n)})},checkLogin:function(t,e){var n=t.commit;return null!==t.state.user?u.a.resolve():T().then(function(t){t.isLogin?n("setUser",{user:t.data}):M.push(e)})}}};o.default.use(A.a);var tt=new A.a.Store({modules:{notebook:J,note:$,trash:X,user:Z}});o.default.use(h.a),o.default.config.productionTip=!1,new o.default({el:"#app",router:M,store:tt,components:{App:C},template:"<App/>"})},WA1V:function(t,e){},YohP:function(t,e){},tvR6:function(t,e){},xrUJ:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.0181f545306a62afadad.js.map