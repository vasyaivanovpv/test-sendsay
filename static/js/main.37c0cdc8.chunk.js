(this["webpackJsonpsendsay-test"]=this["webpackJsonpsendsay-test"]||[]).push([[0],{14:function(e,a,t){e.exports=t.p+"static/media/paperclip.7cf44a95.svg"},20:function(e,a,t){e.exports=t.p+"static/media/trash.f81c7834.svg"},23:function(e,a,t){e.exports=t(39)},28:function(e,a,t){},34:function(e,a,t){},35:function(e,a,t){},36:function(e,a,t){},37:function(e,a,t){},39:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),s=t(10),r=t.n(s),i=(t(28),t(6)),c=t(3),m=t(7),o=t(2),u=t(8),d=t(22),f="\u0418\u043c\u044f",p="Email",g="Email \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043f\u0443\u0441\u0442\u044b\u043c",_="\u041d\u0435\u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c. \u041f\u0440\u0435\u0432\u044b\u0448\u0435\u043d \u0440\u0430\u0437\u043c\u0435\u0440 \u0444\u0430\u0439\u043b\u0430, \u043d\u0435 \u0431\u043e\u043b\u0435\u0435 5\u043c\u0431",v="\u041d\u0435\u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c. \u041f\u0440\u0435\u0432\u044b\u0448\u0435\u043d \u0440\u0430\u0437\u043c\u0435\u0440 \u0444\u0430\u0439\u043b\u043e\u0432 \u0432 \u043e\u0434\u043d\u043e\u043c \u043f\u0438\u0441\u044c\u043c\u0435, \u043d\u0435 \u0431\u043e\u043b\u0435\u0435 20\u043c\u0431",b="\u041c\u044b \u043d\u0435 \u043f\u0440\u0438\u043d\u0438\u043c\u0430\u0435\u043c \u044d\u0442\u043e\u0442 \u0442\u0438\u043f \u0444\u0430\u0439\u043b\u0430",E="LOGIN_SUCCESS",h="LOGIN_ERROR",j="LOGOUT",N="SEND_MESSAGE",y="GET_STATUS",O="\u041e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043e",F="\u0412 \u043e\u0447\u0435\u0440\u0435\u0434\u0438",S="\u041e\u0448\u0438\u0431\u043a\u0430",T=t(9),x=t.n(T);var w=function(e){return 0===e.length?0:e.reduce((function(e,a){return e+a.size}),0)},k=function(e,a){for(var t=0;t<a.length;t++)if(e.type===a[t])return!0;return!1};function z(e){return new Promise((function(a){var t=new FileReader;t.readAsDataURL(e),t.onloadend=function(){var e=t.result.replace(/data:\S*;base64,/,"");a(e)}}))}t(34);var I=t(14),C=t.n(I),M=t(20),L=t.n(M),R=5242880,D=20971520,A=["image/jpeg","image/png","image/gif","application/msword","application/vnd.ms-excel","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet","application/vnd.openxmlformats-officedocument.wordprocessingml.document","application/pdf","application/x-zip-compressed"],G={nameFrom:"",emailFrom:"",nameTo:"",emailTo:"",subject:"",textMessage:""},P=function(e){var a=e.sendMessage,t=Object(n.useState)(G),s=Object(u.a)(t,2),r=s[0],i=s[1],E=Object(n.useState)(!1),h=Object(u.a)(E,2),j=h[0],N=h[1],y=Object(n.useState)([]),O=Object(u.a)(y,2),F=O[0],S=O[1],T=Object(n.useState)(!1),x=Object(u.a)(T,2),z=x[0],I=x[1],M=Object(n.useState)({emailFrom:"",emailTo:"",invalidTypeFile:{message:"",files:[]},limitedSizeFile:{message:"",files:[]},limitedSizeFiles:""}),P=Object(u.a)(M,2),U=P[0],q=P[1],B=Object(n.useRef)(null),J=function(e){e.persist(),i((function(a){return Object(o.a)({},a,Object(m.a)({},e.target.name,e.target.value.trim()))}))},W=function(e){e.preventDefault(),B.current&&B.current.open()},Y=function(e){return function(a){a.persist(),S(F.filter((function(a,t){return t!==e})))}},K=function(e){e.persist(),""!==r[e.target.name]?q(Object(o.a)({},U,Object(m.a)({},e.target.name,""))):(q(Object(o.a)({},U,Object(m.a)({},e.target.name,g))),I(!1)),""!==r.emailFrom&&""!==r.emailTo&&I(!0)},$=function(e){e.preventDefault(),a({nameFrom:r.nameFrom,emailFrom:r.emailFrom,nameTo:r.nameTo,emailTo:r.emailTo,subject:r.subject,textMessage:r.textMessage,files:F}).then((function(){N(!0)}))};return l.a.createElement("div",null,j?l.a.createElement("div",{className:"form__sent",onClick:function(e){e.preventDefault(),i(G),N(!1),I(!1),S([])}},l.a.createElement("h1",{className:"form__header"},"\u0421\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435 \u043f\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u043e \u0432 \u043e\u0447\u0435\u0440\u0435\u0434\u044c \u043d\u0430 \u043e\u0442\u043f\u0440\u0430\u0432\u043a\u0443"),l.a.createElement("p",{className:"form__sentp"},"\u0421\u043e\u0432\u0441\u0435\u043c \u0441\u043a\u043e\u0440\u043e \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435 \u0432\u044b\u043b\u0435\u0442\u0438\u0442 \u0438\u0437 \u0441\u0435\u0440\u0432\u0435\u0440\u0430, \u0438 \u0431\u0443\u0434\u0435\u0442 \u0434\u0432\u0438\u0433\u0430\u0442\u044c\u0441\u044f \u0432\n      \u0441\u0442\u043e\u0440\u043e\u043d\u0443 \u043f\u043e\u0447\u0442\u044b \u043f\u043e\u043b\u0443\u0447\u0430\u0442\u0435\u043b\u044f \xab".concat(r.emailTo,"\xbb \u0441\u043e \u0441\u043a\u043e\u0440\u043e\u0441\u0442\u044c\u044e \u044d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043e\u0432."))):l.a.createElement("div",{className:"form__container"},l.a.createElement(d.a,{ref:B,noClick:!0,noKeyboard:!0,onDrop:function(e){var a=[],t=[],n=e.filter((function(e){return k(e,A)||(a=[].concat(Object(c.a)(a),[e])),k(e,A)})).filter((function(e){return e.size>R&&(t=[].concat(Object(c.a)(t),[e])),e.size<=R})),l=w(n),s=w(F);l>D||s+l>D?q(Object(o.a)({},U,{invalidTypeFile:{message:"",files:[]},limitedSizeFile:{message:"",files:[]},limitedSizeFiles:v})):(S([].concat(Object(c.a)(F),Object(c.a)(n))),q(Object(o.a)({},U,{invalidTypeFile:{message:"",files:[]},limitedSizeFile:{message:"",files:[]},limitedSizeFiles:""}))),0!==a.length&&q(Object(o.a)({},U,{limitedSizeFile:{message:"",files:[]},limitedSizeFiles:"",invalidTypeFile:{message:b,files:[].concat(Object(c.a)(U.invalidTypeFile.files),Object(c.a)(a))}})),0!==t.length&&q(Object(o.a)({},U,{limitedSizeFiles:"",invalidTypeFile:{message:"",files:[]},limitedSizeFile:{message:_,files:[].concat(Object(c.a)(U.limitedSizeFile.files),Object(c.a)(t))}})),0!==a.length&&0!==t.length&&q(Object(o.a)({},U,{limitedSizeFiles:"",invalidTypeFile:{message:b,files:[].concat(Object(c.a)(U.invalidTypeFile.files),Object(c.a)(a))},limitedSizeFile:{message:_,files:[].concat(Object(c.a)(U.limitedSizeFile.files),Object(c.a)(t))}})),setTimeout((function(){q(Object(o.a)({},U,{invalidTypeFile:{message:"",files:[]},limitedSizeFile:{message:"",files:[]},limitedSizeFiles:""}))}),5e3)}},(function(e){var a=e.getRootProps,t=e.getInputProps,n=e.isDragActive;return l.a.createElement("div",null,n&&l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("div",null,"\u0411\u0440\u043e\u0441\u0430\u0439\u0442\u0435 \u0444\u0430\u0439\u043b\u044b \u0441\u044e\u0434\u0430, \u044f \u043b\u043e\u0432\u043b\u044e"),l.a.createElement("div",null,"\u041c\u044b \u043f\u0440\u0438\u043d\u0438\u043c\u0430\u0435\u043c \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0438 (jpg, png, gif), \u043e\u0444\u0438\u0441\u043d\u044b\u0435 \u0444\u0430\u0439\u043b\u044b (doc, xls, pdf) \u0438 zip-\u0444\u0430\u0439\u043b\u044b."),l.a.createElement("div",null,"\u0420\u0430\u0437\u043c\u0435\u0440\u044b \u0444\u0430\u0439\u043b\u0430 \u0434\u043e 5 \u041c\u0411"))),l.a.createElement("h2",{className:"form__header"},"\u041e\u0442\u043f\u0440\u0430\u0432\u043b\u044f\u043b\u043a\u0430 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0439"),l.a.createElement("form",a(),l.a.createElement("input",t()),l.a.createElement("div",{className:"form__group"},l.a.createElement("div",{className:"form__label"},"\u041e\u0442 \u043a\u043e\u0433\u043e"),l.a.createElement("input",{type:"text",name:"nameFrom",placeholder:f,value:r.nameFrom,onChange:J,tabIndex:"1",className:"form__input"}),l.a.createElement("input",{type:"email",name:"emailFrom",placeholder:p,value:r.emailFrom,onChange:J,onBlur:K,tabIndex:"2",required:!0,className:"form__input"})),l.a.createElement("div",{className:"form__errorcontainer"},l.a.createElement("div",{className:"form__error"},U.emailFrom)),l.a.createElement("div",{className:"form__group"},l.a.createElement("div",{className:"form__label"},"\u041a\u043e\u043c\u0443"),l.a.createElement("input",{type:"text",name:"nameTo",value:r.nameTo,onChange:J,placeholder:f,tabIndex:"3",className:"form__input"}),l.a.createElement("input",{type:"email",name:"emailTo",value:r.emailTo,onChange:J,onBlur:K,placeholder:p,tabIndex:"4",required:!0,className:"form__input"})),l.a.createElement("div",{className:"form__errorcontainer"},l.a.createElement("div",{className:"form__error"},U.emailTo)),l.a.createElement("div",{className:"form__group"},l.a.createElement("div",{className:"form__label"},"\u0422\u0435\u043c\u0430 \u043f\u0438\u0441\u044c\u043c\u0430"),l.a.createElement("input",{type:"text",name:"subject",value:r.subject,onChange:J,tabIndex:"5",className:"form__input form__input-fullwidth"})),l.a.createElement("div",{className:"form__group"},l.a.createElement("div",{className:"form__label"},"\u0421\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435"),l.a.createElement("textarea",{name:"textMessage",value:r.textMessage,onChange:J,tabIndex:"6",className:"form__input form__input-fullwidth form__input-textarea"})),F.length>0&&l.a.createElement("div",{className:"form__group"},l.a.createElement("div",{className:"form__files"},F.map((function(e,a){return l.a.createElement("div",{key:e.path+a,className:"form__filecontainer"},l.a.createElement("img",{src:C.a,className:"form__paperclip-desaturated",alt:"paperclip"}),l.a.createElement("span",{className:"form__filename"},function(e){if(e.length>20){var a=e.slice(-4);return e.slice(0,13)+"..."+a}return e}(e.path)),l.a.createElement("span",{className:"form__filedelete",onClick:Y(a)},l.a.createElement("img",{src:L.a,alt:"delete"}),l.a.createElement("span",null,"\u0423\u0434\u0430\u043b\u0438\u0442\u044c")))})))),l.a.createElement("div",{className:"from__group"},l.a.createElement("div",null,U.invalidTypeFile.message&&U.invalidTypeFile.files.map((function(e,a){return l.a.createElement("div",{key:e.path+a},l.a.createElement("span",null,"".concat(e.name," ")),l.a.createElement("span",{className:"form__error"},U.invalidTypeFile.message))})),U.limitedSizeFile.message&&U.limitedSizeFile.files.map((function(e,a){return l.a.createElement("div",{key:e.path+a},l.a.createElement("span",null,"".concat(e.name," ")),l.a.createElement("span",null,"".concat((t=e.size,t/1024/1024).toFixed(2),"Mb ")),l.a.createElement("span",{className:"form__error"},U.limitedSizeFile.message));var t})),l.a.createElement("div",{className:"form__error"},U.limitedSizeFiles)),l.a.createElement("label",{className:"form__label"},l.a.createElement("img",{src:C.a,alt:"paperclip"}),l.a.createElement("span",{className:"form__label form__label-blue form__link"},"\u041f\u0440\u0438\u043a\u0440\u0435\u0438\u0442\u044c \u0444\u0430\u0439\u043b"),l.a.createElement("input",{type:"file",onClick:W,className:"form__filebutton"}))),l.a.createElement("div",{className:"form__group"},l.a.createElement("input",{type:"submit",onClick:$,value:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c",disabled:!z,className:"form__button"}))))}))))},U=t(15),q=t.n(U),B=function(e){return function(a){return new Promise((function(t){var n=new q.a;n.login({login:"soldatik2005@mail.ru",password:"Y0df9;bpym"}).then((function(){!function(e){var a;x.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return a=[],t.next=3,x.a.awrap(Promise.all(e.map((function(e){var t,n;return x.a.async((function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,x.a.awrap(z(e));case 2:t=l.sent,n={name:e.name,content:t,encoding:"base64"},a.push(n);case 5:case"end":return l.stop()}}))}))));case 3:return t.abrupt("return",a);case 4:case"end":return t.stop()}}))}(e.files)})).then((function(l){a({type:E,payload:{isLogged:!0,session:n.session}}),n.request({action:"issue.send.test",letter:{subject:e.subject,"from.name":e.nameFrom,"from.email":e.emailFrom,"to.name":e.nameTo,message:{text:e.textMessage},attaches:l},sendwhen:"test",mca:[e.emailTo]}).then((function(n){a({type:N,payload:{message:{date:Date.now(),subject:e.subject,trackId:n["track.id"],status:0}}}),t(n)}))}),(function(e){a({type:h,error:!0,payload:{errMessage:e,session:""}})}))}))}},J=Object(i.b)(null,(function(e){return{sendMessage:function(a){return e(B(a))}}}))(P),W=(t(35),function(e){var a=e.messages,t=e.getStatus;Object(n.useEffect)((function(){a.length>0&&a.forEach((function(e){t(e.trackId)}))}));return l.a.createElement("div",{className:"messages__container"},l.a.createElement("h2",{className:"messages__header"},"\u041e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043d\u044b\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f"),0===a.length?l.a.createElement("div",null,"\u0421\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f \u0435\u0449\u0435 \u043d\u0435 \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u044f\u043b\u0438\u0441\u044c"):l.a.createElement("table",null,l.a.createElement("thead",{className:"table__head"},l.a.createElement("tr",{className:"table__headcells"},l.a.createElement("td",null,"\u0414\u0430\u0442\u0430"),l.a.createElement("td",null,"\u0422\u0435\u043c\u0430"),l.a.createElement("td",{className:"table__statuscell"},"\u0421\u0442\u0430\u0442\u0443\u0441"))),l.a.createElement("tbody",null,a.map((function(e){return l.a.createElement("tr",{key:e.trackId},l.a.createElement("td",{className:"table__datecell"},new Date(e.date).toLocaleString("ru-RU",{day:"numeric",month:"long"})),l.a.createElement("td",{className:"table__subjectcell"},e.subject),l.a.createElement("td",{className:"table__statuscell"},-1===+(a=e.status)?O:+a<-1?S:+a>-1?F:void 0));var a})))))}),Y=Object(i.b)((function(e){return{messages:e.messagesReducer.messages}}),(function(e){return{getStatus:function(a){return e(function(e){return function(a){var t=new q.a;t.login({login:"soldatik2005@mail.ru",password:"Y0df9;bpym"}).then((function(){a({type:E,payload:{isLogged:!0,session:t.session}}),t.request({action:"track.get",id:e,session:t.session}).then((function(t){a({type:y,payload:{trackId:e,status:t.obj.status}})}))}),(function(e){a({type:h,error:!0,payload:{errMessage:e,session:""}})}))}}(a))}}}))(W),K=(t(36),function(){return l.a.createElement("div",{className:"logo__container"},l.a.createElement("div",{className:"logo__element logo__circle","data-test":"circle"}),l.a.createElement("div",{className:"logo__element logo__rectangle","data-test":"rectangle"}),l.a.createElement("div",{className:"logo__element logo__circle","data-test":"circle"}),l.a.createElement("div",{className:"logo__element logo__rectangle logo__rectangle-skew","data-test":"skew"}))});t(37);var $=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(K,null),l.a.createElement(J,null),l.a.createElement(Y,null))},H=t(5),Q=t(21),V=(t(38),{isLogged:!1,session:"",error:""}),X=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case E:return Object(o.a)({},e,{isLogged:a.payload.isLogged,session:a.payload.session,error:""});case h:return Object(o.a)({},e,{isLogged:!1,session:"",error:a.payload.errMessage});case j:return Object(o.a)({},e,{isLogged:!1,session:"",error:""});default:return e}},Z={messages:[]},ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case N:return Object(o.a)({},e,{messages:[].concat(Object(c.a)(e.messages),[a.payload.message])});case y:var t=e.messages;return t.forEach((function(e){return e.trackId===a.trackId&&(e.status=a.status),e})),Object(o.a)({},e,{messages:t});default:return e}},ae=Object(H.c)({login:X,messagesReducer:ee});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var te=[Q.a];var ne=Object(H.d)(ae,H.a.apply(void 0,te));r.a.render(l.a.createElement(i.a,{store:ne},l.a.createElement($,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[23,1,2]]]);
//# sourceMappingURL=main.37c0cdc8.chunk.js.map