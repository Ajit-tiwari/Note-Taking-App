(this.webpackJsonptake_notes=this.webpackJsonptake_notes||[]).push([[0],{40:function(e,t,a){e.exports=a.p+"static/media/logo.ce3b4d48.webp"},51:function(e,t,a){e.exports=a(62)},56:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(7),r=a.n(c),o=(a(56),a(44)),i=a(30),s=a(40),m=a.n(s),u=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"header"},l.a.createElement("div",{className:"col"},l.a.createElement("img",{src:m.a,alt:"Logo",className:"Logo"})),l.a.createElement("h2",{style:{color:"red",marginLeft:"10px"}},"Note Taking App")))},d=a(26),p=a(33),f=a(92),E=a(93),g=a(42),v=a.n(g),N=function(e){var t=Object(n.useState)({title:"",text:""}),a=Object(i.a)(t,2),c=a[0],r=a[1],o=function(e){var t=e.target,a=t.name,n=t.value;console.log(c),r((function(e){return Object(p.a)(Object(p.a)({},e),{},Object(d.a)({},a,n))}))};return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"main_note"},l.a.createElement("form",{className:"main_form"},l.a.createElement(f.a,{id:"standard-basic",name:"title",label:"Title",autoComplete:"off",value:c.title,onChange:o}),l.a.createElement(E.a,{color:"primary",onClick:function(){e.passNote(c),r({title:"",text:""})},className:"add_btn","aria-label":"upload picture",component:"span"},l.a.createElement(v.a,null)),l.a.createElement(f.a,{className:"text-area",id:"standard-full-width",label:"Note",style:{margin:8},placeholder:"Write Note",fullWidth:!0,margin:"normal",name:"text",value:c.text,onChange:o,InputLabelProps:{shrink:!0}}))))},h=a(43),b=a.n(h);var x=function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"note-container"},l.a.createElement("div",{className:"note"},l.a.createElement("h4",{className:"note-title"}," ",e.title," "),l.a.createElement("p",{className:"note-text"}," ",e.text," "),l.a.createElement(E.a,{className:"delete-icon",onClick:function(){e.passDelete(e.id)}},l.a.createElement(b.a,{className:"del-icn"})))))};a(61);var k=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],c=t[1],r=function(e){c((function(t){return t.filter((function(t,a){return a!==e}))}))};return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"App-win"},l.a.createElement(u,null),l.a.createElement("div",{className:"App"},l.a.createElement(N,{passNote:function(e){c((function(t){return[].concat(Object(o.a)(t),[e])})),console.log(a)}}),l.a.createElement("div",{className:"notes"},a.map((function(e,t){return l.a.createElement(x,{key:t,id:t,title:e.title,text:e.text,passDelete:r})}))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[51,1,2]]]);
//# sourceMappingURL=main.179aabb2.chunk.js.map