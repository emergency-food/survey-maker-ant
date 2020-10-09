(this["webpackJsonpsurvey-maker"]=this["webpackJsonpsurvey-maker"]||[]).push([[0],{261:function(e,t,a){e.exports=a(428)},428:function(e,t,a){"use strict";a.r(t);a(262);var n=a(0),r=a.n(n),i=a(38),l=a.n(i),s=a(68),c=a(104),u=a(50),o=a(69),d=a(438),m=a(439),v=a(147),b=a(83),y=a(434),f=a(433),p={en:"English",es:"Espa\xf1ol"},g=a(88),h=a(132),E=a(73),O=Object(h.b)({name:"settings",initialState:{locale:"en"},reducers:{settingsUpdateLocale:function(e,t){return Object(E.a)(Object(E.a)({},e),{},{locale:t.payload})}}}),j=O.actions.settingsUpdateLocale,w=O.reducer,x=a(156),k=a(192),C=a(442),S=a(191),I=a(56),F=a(122),T=a(193),U=new(a(220).Chance)(350287),M=new Date,B=Object(S.a)(M),L=function(){var e=U.natural({max:25});console.log("Generating ".concat(e," surveys with the following seed... ").concat(U.seed));for(var t={},a=0;a<e;a++){var n=U.date({year:B}),r=Object(I.a)(n,U.natural({max:100})),i=Object(F.a)(n,U.natural({max:25}));t[U.guid()]={title:U.company(),tsCreated:Object(k.a)(Object(T.a)(i)?M:i),tsUnlock:Object(k.a)(n),tsExpiry:Object(k.a)(r)}}return t}(),N=Object(h.b)({name:"surveys",initialState:L,reducers:{surveysCreateOne:function(e,t){var a=t.payload,n=a.title,r=a.tsUnlock,i=a.tsExpiry;return Object(E.a)(Object(E.a)({},e),{},Object(x.a)({},Object(C.a)(),{title:n,tsCreated:Object(k.a)(new Date),tsUnlock:Object(k.a)(r),tsExpiry:Object(k.a)(i)}))},surveysDeleteOne:function(e,t){var a=Object(E.a)({},e);return delete a[t.payload.surveyId],a},surveysClearAll:function(){return{}}}}),V=N.actions,J=V.surveysCreateOne,P=V.surveysDeleteOne,R=V.surveysClearAll,q=N.reducer,z=Object(g.c)({settings:w,surveys:q}),A=Object(h.a)({reducer:z}),D=function(e){return e},W=function(e){return e.settings},_=function(e){return e.surveys},G=function(){var e=Object(f.a)().formatMessage,t=Object(u.g)(),a=Object(s.c)(W).locale,r=Object(s.c)(D),i=Object(s.b)();return n.createElement(n.Fragment,null,n.createElement(d.a,{style:{padding:0,marginBottom:32},title:e({id:"settings.header"}),onBack:function(){return t.push("/")}}),n.createElement(m.a,null,e({id:"settings.locale"})),n.createElement(v.a,{style:{width:"100%"},onChange:function(e){return i(j(e))},value:a},Object.entries(p).map((function(e){var t=Object(o.a)(e,2),a=t[0],r=t[1];return n.createElement(v.a.Option,{key:a,value:a},r)}))),n.createElement(b.a,{danger:!0,style:{marginTop:32},onClick:function(){return i(R())}},e({id:"settings.clear-surveys"})),n.createElement(y.a,null),n.createElement("div",{style:{marginTop:32,overflow:"auto",backgroundColor:"lightgrey",padding:8,borderRadius:8,maxHeight:500}},n.createElement("pre",null,JSON.stringify(r,null,2))))},H=a(445),K=a(435),$=function(){var e=Object(u.g)();return n.createElement(m.a.Title,{style:{padding:16,margin:0,display:"flex",justifyContent:"space-between",alignItems:"center"}},n.createElement(c.b,{to:"/"},n.createElement(K.a,{id:"app-name"})),n.createElement(b.a,{type:"dashed",shape:"circle",onClick:function(){return e.push("/settings")},icon:n.createElement(H.a,null)}))},Q=a(437),X=a(443),Y=a(252),Z=(a(429),a(238)),ee=a.n(Z),te=Object(Y.b)(ee.a),ae=function(){var e=Object(f.a)().formatMessage,t=Object(u.g)(),a=Object(s.b)(),r=n.useState(),i=Object(o.a)(r,2),l=i[0],c=i[1],m=n.useState(),v=Object(o.a)(m,2),y=v[0],p=v[1],g=n.useState(),h=Object(o.a)(g,2),E=h[0],O=h[1],j=e({id:"field-required-warning"});return n.createElement(n.Fragment,null,n.createElement(d.a,{style:{padding:0,marginBottom:32},title:e({id:"create-survey.header"}),onBack:function(){return t.push("/")}}),n.createElement(Q.a,{onFinish:function(){a(J({title:l,tsUnlock:y,tsExpiry:E})),t.push("/list-surveys")}},n.createElement(Q.a.Item,{label:e({id:"create-survey.title-label"}),name:"survey-title",rules:[{required:!0,message:j}]},n.createElement(X.a,{value:l,onChange:function(e){return c(e.currentTarget.value)}})),n.createElement(Q.a.Item,{label:e({id:"create-survey.date-range-label"}),name:"survey-date-range",rules:[{required:!0,message:j}]},n.createElement(te.RangePicker,{onCalendarChange:function(e){var t=null===e||void 0===e?void 0:e[0],a=null===e||void 0===e?void 0:e[1];t&&p(t),a&&O(a)}})),n.createElement(Q.a.Item,null,n.createElement(b.a,{type:"primary",htmlType:"submit"},e({id:"create-survey.submit"})))))},ne=a(189),re=a.n(ne),ie=a(242),le=a(440),se=function(){return n.createElement("div",null,"Loading...")},ce=function(e){switch(e){case"es":return a.e(4).then(a.t.bind(null,450,3));default:return a.e(3).then(a.t.bind(null,451,3))}},ue=function(e){var t=e.children,a=Object(s.c)(W).locale,r=n.useState(),i=Object(o.a)(r,2),l=i[0],c=i[1];return n.useEffect((function(){Object(ie.a)(re.a.mark((function e(){var t;return re.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ce(a);case 2:t=e.sent,c(t.default);case 4:case"end":return e.stop()}}),e)})))()}),[a]),l?n.createElement(le.a,{messages:l,locale:a,defaultLocale:"en",onError:function(e){if("MISSING_TRANSLATION"!==e.code)throw e}},t):n.createElement(se,null)},oe=a(449),de=a(441);var me=a(447),ve=a(448),be=a(257),ye=a(436),fe=a(99),pe=a(205),ge=a(206),he=function(e){var t=e.timestamp,a=(0,Object(f.a)().formatMessage)({id:"em-dash"}),r=n.useState(a),i=Object(o.a)(r,2),l=i[0],s=i[1],c=n.useCallback((function(){s(Object(pe.a)(t,{addSuffix:!0}))}),[t]);return n.useEffect((function(){c();var e=setInterval(c,1e3);return function(){return clearInterval(e)}}),[c]),n.createElement(fe.a,{title:Object(ge.a)(t)},l)},Ee=a(446),Oe=function(e){var t=e.survey,a=Object(s.b)();return"new"===t.status?n.createElement(b.a,{danger:!0,size:"small",icon:n.createElement(Ee.a,{style:{marginRight:8}}),disabled:"show"!==t.visibility,onClick:function(){return a(P({surveyId:t._id}))}},n.createElement(K.a,{id:"list-surveys.action-delete-label"})):null},je=a(207),we=function(){var e=Object(f.a)().formatMessage;return{new:e({id:"survey-status.new"}),"in-progress":e({id:"survey-status.in-progress"}),completed:e({id:"survey-status.completed"})}},xe=function(e,t){return"hide"===e?{props:{rowSpan:0,colSpan:0}}:"deemphasize"===e?n.createElement("div",{style:{opacity:.2}},t):t},ke=function(e){var t,a=e.surveyStatus,r="warning",i=we()[a];switch(a){case"in-progress":r="processing",t=n.createElement(me.a,{spin:!0});break;case"completed":r="success",t=n.createElement(ve.a,null)}return n.createElement(be.a,{color:r,icon:t},i)},Ce=function(e){var t=e.surveys,a=Object(f.a)().formatMessage,r=[{title:a({id:"list-surveys.title-header"}),dataIndex:"title",render:function(e,t){return xe(t.visibility,e)}},{title:a({id:"list-surveys.creation-date-header"}),dataIndex:"tsCreated",render:function(e,t){return xe(t.visibility,n.createElement(he,{timestamp:e}))}},{title:a({id:"list-surveys.status-header"}),dataIndex:"status",render:function(e,t){return xe(t.visibility,n.createElement(ke,{surveyStatus:e}))}},{title:a({id:"list-surveys.unlock-date-header"}),dataIndex:"tsUnlock",render:function(e,t){return xe(t.visibility,n.createElement(he,{timestamp:e}))}},{title:a({id:"list-surveys.expiry-date-header"}),dataIndex:"tsExpiry",render:function(e,t){return xe(t.visibility,n.createElement(he,{timestamp:e}))}},{title:a({id:"list-surveys.actions-header"}),render:function(e,t){return xe(t.visibility,n.createElement(Oe,{survey:t}))}}];return n.createElement(ye.a,{rowKey:"_id",columns:r,dataSource:t,scroll:{x:!0},size:"small",bordered:!0})},Se=a(208),Ie=a(204),Fe=function(e){var t=e.hideFiltered,a=e.hiddenStatuses,n=Object(s.c)(_),r=t?"hide":"deemphasize";return Object.entries(n).map((function(e){var t=Object(o.a)(e,2),n=t[0],i=t[1],l=i.title,s=i.tsCreated,c=i.tsUnlock,u=i.tsExpiry,d=Object(Se.a)(c),m=Object(Se.a)(u),v=function(e,t){return Object(je.a)(t)?"completed":Object(je.a)(e)?"in-progress":"new"}(d,m),b="show";return a&&function(e,t){return!!t&&t.includes(e)}(v,a)&&(b=r),{_id:n,title:l,tsCreated:Object(Se.a)(s),tsUnlock:d,tsExpiry:m,status:v,visibility:b}})).sort((function(e,t){return Object(Ie.a)(e.tsCreated,t.tsCreated)}))},Te=a(444),Ue=a(148),Me=function(e,t,a){var r=JSON.stringify(a);return function(){var a=Object(u.h)(),i=Object(u.g)(),l=new URLSearchParams(a.search);try{var s=l.get(t);if(null===s)throw new Error('Cannot find a value for "'.concat(t,'" in the query-parameters; resetting to the default value (').concat(r,")!"));var c=JSON.parse(s);return n.createElement(e,{parameterValue:c,updateParameterValue:function(e){l.set(t,JSON.stringify(e)),i.push("".concat(a.pathname,"?").concat(l.toString()))}})}catch(o){return console.warn(o),l.set(t,r),n.createElement(u.a,{to:{pathname:a.pathname,search:l.toString()}})}}}((function(e){var t=e.parameterValue,a=e.updateParameterValue,r=Object(u.g)(),i=Object(f.a)().formatMessage,l=Fe(t),s=function(e,t){var a=Object(f.a)().formatMessage,r=we(),i=Object.entries(r).map((function(e){var t=Object(o.a)(e,2);return{value:t[0],label:t[1]}}));return{statusFilterView:n.createElement(n.Fragment,null,n.createElement(m.a,{style:{marginBottom:8,fontWeight:"bold"}},a({id:"list-surveys.status-filter-header"})),n.createElement(Ue.a.Group,{options:i,defaultValue:e.hiddenStatuses,onChange:function(a){return t(Object(E.a)(Object(E.a)({},e),{},{hiddenStatuses:a}))}}))}}(t,a).statusFilterView,c=function(e,t){var a=Object(f.a)().formatMessage;return{hideFilteredItemsToggle:n.createElement("label",{style:{display:"flex"}},n.createElement(Te.a,{checked:e.hideFiltered||!1,onChange:function(a){return t(Object(E.a)(Object(E.a)({},e),{},{hideFiltered:a}))}}),n.createElement(m.a,{style:{marginLeft:16}},a({id:"list-surveys.hide-filtered-items-label"})))}}(t,a).hideFilteredItemsToggle;return n.createElement(n.Fragment,null,n.createElement(d.a,{style:{padding:0,marginBottom:32},title:i({id:"list-surveys.header"}),extra:n.createElement(b.a,{type:"primary",icon:n.createElement(oe.a,null),onClick:function(){return r.push("/create-survey")}},i({id:"create-survey.header"}))}),n.createElement(de.a,null,n.createElement(de.a.Panel,{header:i({id:"list-surveys.display-options-header"}),key:"display-options"},s,n.createElement(y.a,null),c)),n.createElement("div",{style:{marginTop:16}},n.createElement(Ce,{surveys:l})))}),"display",{});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(s.a,{store:A},r.a.createElement(ue,null,r.a.createElement(c.a,null,r.a.createElement("div",{style:{maxWidth:768,margin:"auto"}},r.a.createElement($,null),r.a.createElement("div",{style:{padding:16,overflow:"auto"}},r.a.createElement(u.d,null,r.a.createElement(u.b,{exact:!0,path:"/settings"},r.a.createElement(G,null)),r.a.createElement(u.b,{exact:!0,path:"/create-survey"},r.a.createElement(ae,null)),r.a.createElement(u.b,{exact:!0,path:"/list-surveys"},r.a.createElement(Me,null)),r.a.createElement(u.b,{path:"*"},r.a.createElement(u.a,{to:"/list-surveys"})))))))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[261,1,2]]]);
//# sourceMappingURL=main.de13ce1e.chunk.js.map