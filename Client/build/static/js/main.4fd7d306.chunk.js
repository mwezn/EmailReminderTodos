(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{118:function(e,t,n){},433:function(e,t,n){"use strict";n.r(t);var c=n(1),r=(n(196),n(141),n(246),n(191)),a=n.n(r),s=n(193),o=n(39),i=n(4),l=n(2),u=n.n(l),j=n(56),d=n.n(j),b=n(92);function O(){var e=Object(l.useState)({email:"",password:"",emailExist:null,passCorrect:null}),t=Object(o.a)(e,2),n=t[0],r=t[1],a=Object(l.useContext)(y).dispatch;function s(){return(s=Object(b.a)(d.a.mark((function e(t){var c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),c={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({title:"React POST Request Example",data:n})},fetch("/login",c).then((function(e){if(401===e.status){var t={passCorrect:!1};r((function(e){return Object(i.a)(Object(i.a)({},e),t)}))}else if(400===e.status){var n={emailExist:!1};r((function(e){return Object(i.a)(Object(i.a)({},e),n)}))}return e.json()})).then((function(e){return a({type:"LOGIN",payload:e})})).then((function(){return console.log(localStorage.getItem("token")+"HAHA GOTIT")}));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(c.jsx)("div",{children:Object(c.jsxs)("div",{id:"loginCard",children:[Object(c.jsxs)("form",{id:"loginCardItems",onSubmit:function(e){return function(e){return s.apply(this,arguments)}(e)},method:"post",children:[Object(c.jsx)("label",{for:"email",children:"Email:"}),Object(c.jsx)("br",{}),Object(c.jsx)("input",{type:"email",name:"email",placeholder:"Enter Email",onChange:function(e){return function(e){var t={email:e.target.value};r((function(e){return Object(i.a)(Object(i.a)({},e),t)}))}(e)},required:!0}),Object(c.jsx)("br",{}),Object(c.jsx)("label",{for:"pass",children:"Password:"}),Object(c.jsx)("br",{}),Object(c.jsx)("input",{type:"text",name:"pass",placeholder:"Enter Password",onChange:function(e){return function(e){var t={password:e.target.value};r((function(e){return Object(i.a)(Object(i.a)({},e),t)}))}(e)},required:!0}),Object(c.jsx)("br",{}),Object(c.jsx)("button",{className:"loginBtn",children:"Login"})]}),Object(c.jsx)("div",{children:Object(c.jsx)("h1",{children:!1===n.emailExist?Object(c.jsx)("p",{className:"emailTaken",children:"Email doesn't exist"}):!1===n.passCorrect?Object(c.jsx)("p",{className:"emailTaken",children:"Wrong Password"}):null})})]})})}n(118);var h={userInput:"",toDoList:[],vis:[],greentick:[]};function p(e){var t=(new Date).toLocaleTimeString();return Object(c.jsxs)("div",{className:"timeSelect",children:[Object(c.jsx)("label",{children:"Set Time:"}),Object(c.jsx)("input",{type:"time",id:"appt",name:"appt",onChange:e.onChange,defaultValue:t.slice(0,5),required:!0})]})}function m(e){var t=new Date,n=t.toISOString().substr(0,10),r=t.toLocaleTimeString().slice(0,5),a=u.a.useState({date:n,time:r,todo:e.item}),s=Object(o.a)(a,2),l=s[0],j=s[1];return Object(c.jsxs)("div",{className:e.style2||e.style,children:[Object(c.jsx)("label",{children:"Enter deadline:"}),Object(c.jsx)("input",{type:"date",id:"start",onChange:function(e){return function(e){var t={date:e.target.value};j((function(e){return Object(i.a)(Object(i.a)({},e),t)}))}(e)},defaultValue:n,name:"trip-start",min:"2020-01-01",max:"2021-12-31"}),Object(c.jsx)(p,{onChange:function(e){return function(e){var t={time:e.target.value};console.log(t),j((function(e){return Object(i.a)(Object(i.a)({},e),t)}))}(e)}}),Object(c.jsx)("button",{className:e.submitStyle,onClick:e.onClick,value:JSON.stringify(l),children:"Set Reminder"})]})}var f=function(e){var t=u.a.useState({userInput:"",toDoList:[],serverList:[],vis:[],greentick:[]}),n=Object(o.a)(t,2),r=n[0],a=n[1],s=u.a.useContext(y).dispatch;u.a.useEffect((function(){setInterval((function(){!function(){var t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({data:e.user})};fetch("/updateCentralState",t).then((function(e){return e.json()})).then((function(e){return s({type:"UPDATECENTRALSTATE",payload:e})}))}()}),3e4)})),console.log(e.user);var l=function(e){var t=/^[a-zA-Z0-9_]+$/g;return e.some((function(e){return t.test(e)}))}(r.toDoList)||0!==r.toDoList.length?r.toDoList.map((function(t,n){return""===t?null:Object(c.jsxs)("div",{children:[Object(c.jsxs)("li",{className:"btn1",children:[t,Object(c.jsx)("span",{onClick:function(){return e=n,r.vis.splice(e,1,!r.vis[e]),void a((function(e){return Object(i.a)(Object(i.a)({},e),r.vis)}));var e},className:r.greentick[n]?"clock2":"clock",children:"\ud83d\udd51"}),Object(c.jsx)("span",{className:r.greentick[n]?"greenTick1":"greenTick2",children:"\u2705"})]},n),Object(c.jsx)(m,{onClick:function(t){!function(t,n){var c=JSON.parse(t.target.value);console.log(t,n),r.greentick.splice(n,1,!r.greentick[n]),a((function(e){return console.log(e,c),console.log(Object(i.a)(Object(i.a)({},e),{},{obj:c})),Object(i.a)(Object(i.a)({},e),{},{obj:c})}));var o=Object(i.a)({},e.user);o.log.push(c);var l={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({data:o})};fetch("/addTodo",l).then((function(e){return e.json()})).then((function(e){return s({type:"SETREMINDER",payload:e})}))}(t,n)},item:t,style:r.vis[n]?"calendar1":"calendar2",style2:r.greentick[n]?"calendar2":"calendar1",submitStyle:r.greentick[n]?"submitted":"notsubmitted"})]},n)})):Object(c.jsx)("h1",{children:"Enter some valid tasks separated by commas"}),j=e.user.overdue.map((function(t,n){return Object(c.jsxs)("li",{children:["Task:".concat(t.todo,", date: ").concat(t.date,", time:").concat(t.time),Object(c.jsxs)("span",{className:"close",onClick:function(){return function(t){console.log(r);var n=Object(i.a)({},e.user),c=n.overdue.splice(t,1);console.log(c);var a={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({data:n,Item:c})};fetch("/removeOverdue",a).then((function(e){return e.json()})).then((function(e){return s({type:"SETREMINDER",payload:e})}))}(n)},children:["X",Object(c.jsx)("span",{class:"tooltiptext",children:"Delete Reminder?"})]}),Object(c.jsxs)("span",{className:"done",onClick:function(){return function(t){console.log(r);var n=Object(i.a)({},e.user),c=n.overdue.splice(t,1);console.log(c);var a={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({data:n,Item:c})};fetch("/overdueDone",a).then((function(e){return e.json()})).then((function(e){return s({type:"SETREMINDER",payload:e})}))}(n)},children:["\u2705",Object(c.jsx)("span",{class:"tooltiptext",children:"Complete?"})]})]},n)})),d=e.user.log.map((function(t,n){return Object(c.jsxs)("li",{children:["Task:".concat(t.todo,", date: ").concat(t.date,", time:").concat(t.time),Object(c.jsxs)("span",{className:"close",onClick:function(){return function(t){console.log(r);var n=Object(i.a)({},e.user),c=n.log.splice(t,1);console.log(c);var a={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({data:n,Item:c})};fetch("/removeTodo",a).then((function(e){return e.json()})).then((function(e){return s({type:"SETREMINDER",payload:e})}))}(n)},children:["X",Object(c.jsx)("span",{class:"tooltiptext",children:"Delete Reminder?"})]}),Object(c.jsxs)("span",{className:"done",onClick:function(){return function(t){console.log(r);var n=Object(i.a)({},e.user),c=n.log.splice(t,1);console.log(c);var a={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({data:n,Item:c})};fetch("/dueDone",a).then((function(e){return e.json()})).then((function(e){return s({type:"SETREMINDER",payload:e})}))}(n)},children:["\u2705",Object(c.jsx)("span",{class:"tooltiptext",children:"Complete?"})]})]},n)}));return Object(c.jsxs)("div",{children:[Object(c.jsxs)("h1",{id:"box",children:["Hello ",e.user.username," ",Object(c.jsx)("br",{}),'Your "To Do" List:']}),Object(c.jsxs)("div",{className:"CssFlex",children:[Object(c.jsxs)("div",{id:"overdue",children:[Object(c.jsx)("h2",{children:"Your overdue Tasks:"}),Object(c.jsx)("ul",{children:j})]}),Object(c.jsxs)("div",{id:"readyToPlan",children:[Object(c.jsx)("h2",{children:"You will be emailed the following reminders:"}),Object(c.jsx)("ul",{children:d})]})]}),Object(c.jsxs)("div",{id:"textArea",children:[Object(c.jsx)("textarea",{onChange:function(e){return function(e){var t={userInput:e.target.value};console.log(t),a((function(e){return Object(i.a)(Object(i.a)({},e),t)})),console.log(r)}(e)},value:r.userInput,placeholder:"Separate Tasks With Commas"}),Object(c.jsx)("br",{}),Object(c.jsx)("button",{id:"createList",onClick:function(){return function(){var e=r.userInput.split(",");""===e[e.length-1]&&e.pop();for(var t=[],n=0;n<e.length;n++)t.push(!0),r.greentick.push(!1);var c={toDoList:e,vis:t};a((function(e){return Object(i.a)(Object(i.a)({},e),c)}))}()},children:"Create List"}),Object(c.jsx)("button",{id:"clearList",onClick:function(){a((function(e){return Object(i.a)(Object(i.a)({},e),h)}))},children:"Clear List"})]}),Object(c.jsx)("div",{id:"card",children:Object(c.jsx)("ul",{children:l})})]})};var x=function(e){var t=Object(l.useContext)(y).dispatch;return e.authed?Object(c.jsx)("div",{children:Object(c.jsxs)("ul",{className:"NavBar",children:[Object(c.jsx)("li",{children:Object(c.jsx)("a",{href:"/",children:"Home"})}),Object(c.jsx)("li",{children:Object(c.jsx)("a",{href:"/completed",children:"Complete"})}),Object(c.jsx)("li",{children:Object(c.jsx)("a",{href:"/logout",onClick:function(){return t({type:"LOGOUT"})},children:"Logout"})})]})}):Object(c.jsx)("div",{children:Object(c.jsxs)("ul",{className:"NavBar",children:[Object(c.jsx)("li",{children:Object(c.jsx)("a",{href:"/",children:"Login"})}),Object(c.jsx)("li",{children:Object(c.jsx)("a",{href:"/register",children:"Register"})})]})})};function v(){var e=Object(l.useState)({email:"",user:"",password:"",emailAuth:null,serverResponse:null}),t=Object(o.a)(e,2),n=t[0],r=t[1];function a(){return(a=Object(b.a)(d.a.mark((function e(t){var c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),c={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({title:"React POST Request Example",data:n})},fetch("/register",c).then((function(e){if(400===e.status){var t={emailAuth:!1,serverResponse:e.text()};r((function(e){return Object(i.a)(Object(i.a)({},e),t)}))}else if(200===e.status){var n={emailAuth:!0,serverResponse:e.text()};r((function(e){return Object(i.a)(Object(i.a)({},e),n)}))}}));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(c.jsx)("div",{children:Object(c.jsxs)("div",{id:"loginCard",children:[Object(c.jsxs)("form",{id:"loginCardItems",onSubmit:function(e){return function(e){return a.apply(this,arguments)}(e)},children:[Object(c.jsx)("label",{for:"email",children:"Email:"}),Object(c.jsx)("br",{}),Object(c.jsx)("input",{type:"email",name:"email",placeholder:"Enter Email",onChange:function(e){return function(e){var t={email:e.target.value};r((function(e){return Object(i.a)(Object(i.a)({},e),t)}))}(e)},required:!0}),Object(c.jsx)("br",{}),Object(c.jsx)("label",{for:"email",children:"First Name:"}),Object(c.jsx)("br",{}),Object(c.jsx)("input",{type:"text",name:"email",placeholder:"Enter your name",onChange:function(e){return function(e){var t={user:e.target.value};r((function(e){return Object(i.a)(Object(i.a)({},e),t)}))}(e)},required:!0}),Object(c.jsx)("br",{}),Object(c.jsx)("label",{for:"pass",children:"Password:"}),Object(c.jsx)("br",{}),Object(c.jsx)("input",{type:"text",name:"pass",placeholder:"Enter Password",onChange:function(e){return function(e){var t={password:e.target.value};r((function(e){return Object(i.a)(Object(i.a)({},e),t)}))}(e)},required:!0}),Object(c.jsx)("br",{}),Object(c.jsx)("button",{className:"regBtn",children:"Register"})]}),Object(c.jsx)("div",{children:Object(c.jsx)("h1",{children:!1===n.emailAuth?Object(c.jsx)("p",{className:"emailTaken",children:"Email already taken"}):!0===n.emailAuth?Object(c.jsx)("p",{className:"emailRegistered",children:"Succesfully registered. Check your email!"}):null})})]})})}var g=function(e){var t=u.a.useContext(y).dispatch,n=e.user.done.map((function(n,r){return Object(c.jsxs)("li",{className:"completedList",children:["Task:".concat(n.todo,", date: ").concat(n.date,", time:").concat(n.time),Object(c.jsxs)("span",{className:"close",onClick:function(){return function(n){var c=Object(i.a)({},e.user),r=c.done.splice(n,1);console.log(r);var a={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({data:c,Item:r})};fetch("/removeDone",a).then((function(e){return e.json()})).then((function(e){return t({type:"SETREMINDER",payload:e})}))}(r)},children:["X",Object(c.jsx)("span",{class:"tooltiptext",children:"Delete?"})]})]},r)}));return Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{id:"box",children:"Your completed tasks:"}),Object(c.jsx)("ul",{children:n})]})},y=u.a.createContext(),S=JSON.parse(localStorage.getItem("user"))?JSON.parse(localStorage.getItem("user")):null;console.log("YOUR DISPtcth is"+S);var T={isAuthenticated:!1,user:S,token:localStorage.getItem("token")},C=function(e,t){switch(t.type){case"LOGIN":return localStorage.setItem("user",JSON.stringify(t.payload.user)),localStorage.setItem("token",JSON.stringify(t.payload.token)),Object(i.a)(Object(i.a)({},e),{},{isAuthenticated:!0,user:t.payload.user,token:t.payload.token});case"LOGOUT":return localStorage.clear(),Object(i.a)(Object(i.a)({},e),{},{isAuthenticated:!1,user:null});case"SETREMINDER":case"UPDATECENTRALSTATE":return localStorage.removeItem("user"),localStorage.setItem("user",JSON.stringify(t.payload)),Object(i.a)(Object(i.a)({},e),{},{isAuthenticated:!0,user:t.payload});default:return e}};function N(e){return"/"===window.location.pathname?e.authed?Object(c.jsx)(f,{user:e.user}):Object(c.jsx)(O,{}):"/completed"===window.location.pathname?e.authed?Object(c.jsx)(g,{user:e.user}):Object(c.jsx)(O,{}):"/register"===window.location.pathname?Object(c.jsx)(v,{}):"/login"===window.location.pathname?Object(c.jsx)(O,{}):"/logout"===window.location.pathname?Object(c.jsx)("h1",{children:"You've Logged Out"}):Object(c.jsx)("h1",{children:"404 Not Found!"})}function k(){var e=u.a.useReducer(C,T),t=Object(o.a)(e,2),n=t[0],r=t[1];return Object(c.jsxs)(y.Provider,{value:{state:n,dispatch:r},children:[" ",Object(c.jsx)(x,{authed:n.token}),Object(c.jsx)(N,{authed:n.token,user:n.user})]})}a.a.render(Object(c.jsx)(s.a,{children:Object(c.jsx)(k,{})}),document.getElementById("root"))}},[[433,1,2]]]);
//# sourceMappingURL=main.4fd7d306.chunk.js.map