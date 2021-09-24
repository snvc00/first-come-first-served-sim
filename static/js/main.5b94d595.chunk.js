(this["webpackJsonpudg-i7030"]=this["webpackJsonpudg-i7030"]||[]).push([[0],{32:function(e,t,n){},33:function(e,t,n){},35:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var i,c,s=n(0),r=n(19),a=n.n(r),o=n(40),l=n(39),d=(n(32),n(6)),h=n(14),j=n(4),u=n(47),m=n(26),b=(n(33),n(2)),O=function(e){var t=e.children;return Object(b.jsx)("h1",{className:"title",children:t})},f=(n(35),n(44)),x=n(45),p=n(46),T=n(41),v=n(42),g=n(9),k=n(10),y=n(43),S=function(e){var t=e.children,n=e.title,i=e.icon;return Object(b.jsxs)(k.a,{boxShadow:"out",marginBottom:"10px",children:[Object(b.jsx)(y.a,{active:!0,icon:i,title:n,width:"100%",children:Object(b.jsx)(y.a.OptionsBox,{children:Object(b.jsx)(y.a.Option,{children:"X"})})}),Object(b.jsx)("div",{style:{minHeight:200,padding:10},children:t})]})},w=n(23),E=n(24),D=function(){function e(t){Object(w.a)(this,e),this.id=t,this.maxTime=Math.floor(10*Math.random())+6,this.executionTime=0,this.operator=["+","-","*","/","%","^"][Math.floor(6*Math.random())],this.firstOperand=Math.floor(100*Math.random()),this.secondOperand=Math.floor(100*Math.random())+1,this.error=!1,this.timeToUnblock=0,this.arrivalTime=-1,this.startTime=-1}return Object(E.a)(e,[{key:"operation",get:function(){return"".concat(this.firstOperand," ").concat(this.operator," ").concat(this.secondOperand)}},{key:"result",get:function(){return!0===this.error?"ERROR":this.evaluate()}},{key:"throwError",value:function(){this.error=!0}},{key:"block",value:function(){this.timeToUnblock=7}},{key:"update",value:function(){this.timeToUnblock>0?--this.timeToUnblock:++this.executionTime}},{key:"isTerminated",value:function(){return!0===this.error||this.maxTime===this.executionTime}},{key:"evaluate",value:function(){switch(this.operator){case"+":return this.firstOperand+this.secondOperand;case"-":return this.firstOperand-this.secondOperand;case"*":return this.firstOperand*this.secondOperand;case"/":return this.firstOperand/this.secondOperand;case"%":return this.firstOperand%this.secondOperand;case"^":return Math.pow(this.firstOperand,this.secondOperand);default:return"UNDEFINED"}}},{key:"toString",value:function(){return"Process ".concat(this.id,": ").concat(this.firstOperand," ").concat(this.operator," ").concat(this.secondOperand," = ").concat(this.result," took ").concat(this.executionTime," seconds")}},{key:"log",value:function(){return"** PID ".concat(this.id,", ").concat(this.error?"ERROR":"NORMAL"," **\n\n            Estimated Time: ").concat(this.maxTime,"\n            Arrival Time: ").concat(this.arrivalTime,"\n            End Time: ").concat(this.endTime,"\n            Standby Time: ").concat(this.endTime-this.arrivalTime-this.executionTime,"\n            Service Time: ").concat(this.executionTime,"\n            Return Time: ").concat(this.endTime-this.arrivalTime,"\n            Response Time: ").concat(this.startTime-this.arrivalTime,"\n\n************")}}]),e}(),M={e:{description:"I/O interruption"},w:{description:"Error in process"},p:{description:"Pause"},c:{description:"Continue"}},P=j.e.div(i||(i=Object(h.a)(["\n  margin: auto;\n  padding: 10px;\n  display: block;\n  width: 60%;\n"]))),I=function(e){var t=e.totalProcesses,n=e.processingDone,i=Object(s.useState)(0),c=Object(d.a)(i,2),r=c[0],a=c[1],o=Object(s.useState)(""),l=Object(d.a)(o,2),h=l[0],j=l[1],u=Object(s.useState)([]),O=Object(d.a)(u,2),k=O[0],y=O[1],w=Object(s.useState)([]),E=Object(d.a)(w,2),I=E[0],A=E[1],R=Object(s.useState)(),N=Object(d.a)(R,2),_=N[0],C=N[1],F=Object(s.useState)([]),U=Object(d.a)(F,2),B=U[0],G=U[1],L=Object(s.useState)([]),J=Object(d.a)(L,2),q=J[0],z=J[1],H=Object(s.useState)(!1),X=Object(d.a)(H,2),K=X[0],Q=X[1],V=Object(s.useState)(!0),W=Object(d.a)(V,2),Y=W[0],Z=W[1],$=Object(s.useState)(new Date),ee=Object(d.a)($,2),te=ee[0],ne=ee[1],ie=Object(s.useState)(!1),ce=Object(d.a)(ie,2),se=ce[0],re=ce[1],ae=Object(s.useState)(new Date),oe=Object(d.a)(ae,2),le=oe[0],de=oe[1],he=Object(s.useState)(null),je=Object(d.a)(he,2),ue=je[0],me=je[1];onkeydown=function(e){var t=e.key;t=t.toLowerCase();var n=!1,i=new Date;if(ne(i),i-te<1e3)j(h+"[".concat(i.toLocaleTimeString(),", Global Time: ").concat(r," seconds] - Actions are limited to 1 per second\n"));else if(null===M||void 0===M?void 0:M[t]){switch(t){case"e":if(!1===K&&_ instanceof D){_.block(),B.push(_);var c=I.shift();c instanceof D?(-1===c.startTime&&(c.startTime=r),C(c)):C(null),n=!0}break;case"w":!1===K&&_ instanceof D&&(_.throwError(),n=!0);break;case"p":!1===K&&(Q(!0),n=!0);break;case"c":!0===K&&(Q(!1),n=!0);break;default:console.log("Not implemented action triggered with ".concat(t))}!0===n&&j(h+"[".concat((new Date).toLocaleTimeString(),", Global Time: ").concat(r," seconds] - ").concat(M[t].description,"\n"))}},Object(s.useEffect)((function(){var e=function(e){console.log("Executing process initialization...");for(var t=0,n=[],i=0;i<e;++i)n.push(new D(t++));return n}(t),n=[],i=e.shift();i.arrivalTime=0,i.startTime=0;for(var c=Math.min(e.length,3),s=0;s<c;++s){var r=e.shift();r.arrivalTime=0,n.push(r)}y(e),A(n),C(i)}),[t]);return Object(s.useEffect)((function(){var e=setInterval((function(){a((function(e){return e+1}))}),1e3);return function(){return clearInterval(e)}}),[]),Object(s.useEffect)((function(){var e=new Date;if(!(e-le<900)){if(de(e),0===k.length&&0===I.length&&0===B.length&&null===_)return Z(!1),void(null===ue&&me(r));if(!1===Y&&!1===se){var t="[".concat((new Date).toLocaleTimeString(),", Global Time: ").concat(r," seconds] - All process were terminated, generating report...\n--------------------\n");q.forEach((function(e){t+=e.log()+"\n"})),j(h+(t+="--------------------\n")),re(!0),C(null)}if(!1===K&&!0===Y)if(function(){var e=0;B.forEach((function(t){0===t.timeToUnblock?++e:t.update()}));for(var t=0;t<e;++t)I.push(B.shift())}(),_ instanceof D)if(_.isTerminated()){if(_.endTime=r-1,q.push(_),k.length>0){var n=k.shift();-1===n.arrivalTime&&(n.arrivalTime=r),I.push(n)}var i=I.shift();i instanceof D?(-1===i.startTime&&(i.startTime=r),C(i)):0===B.length?(Z(!1),null===ue&&me(r)):C(null)}else 0===_.timeToUnblock&&_.update();else if(I.length>0){var c=I.shift();-1===c.startTime&&(c.startTime=r),C(c)}}}),[se,a,r,Q,K,Y,_,q,k,I,B,G,z]),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)(P,{children:[Object(b.jsxs)("div",{style:{textAlign:"center"},children:[Object(b.jsxs)("h1",{children:["New processes: ",k.length]}),Y||null===ue?Object(b.jsxs)("h2",{children:["Global Time: ",r," seconds"]}):Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("h2",{children:["Global Time: ",ue," seconds"]}),Object(b.jsx)(m.a,{onClick:n,children:"Return"})]})]}),Object(b.jsx)("br",{}),Object(b.jsx)(S,{title:"ready - Process Simulation",icon:Object(b.jsx)(g.c,{variant:"32x32_4"}),children:I.map((function(e,t){return Object(b.jsx)(f.a,{legend:"PID ".concat(e.id),style:{width:"90%",textAlign:"left",marginBottom:10},children:Object(b.jsxs)("p",{children:["Estimated execution time: ",e.maxTime," seconds - Ellapsed time: ",e.executionTime," seconds"]},t+"_p")},t)}))}),Object(b.jsx)(S,{title:"execution - Process Simulation",icon:Object(b.jsx)(g.b,{variant:"32x32_4"}),children:_ instanceof D?Object(b.jsxs)(f.a,{legend:"PID ".concat(_.id),className:"process-fieldset",children:[Object(b.jsxs)("p",{children:["Operation: ",_.operation]}),Object(b.jsxs)("p",{children:["Estimated execution time: ",_.maxTime," seconds"]}),Object(b.jsxs)("p",{children:["Ellapsed time: ",_.executionTime," seconds"]}),Object(b.jsxs)("p",{children:["Missing time: ",_.maxTime-_.executionTime," seconds"]}),Object(b.jsx)(x.a,{width:200,percent:Math.round(_.executionTime/_.maxTime*100)})]}):Object(b.jsx)(b.Fragment,{})}),Object(b.jsx)(S,{title:"blocked - Process Simulation",icon:Object(b.jsx)(g.h,{variant:"32x32_4"}),children:Array.isArray(B)?B.map((function(e,t){return Object(b.jsx)(f.a,{legend:"PID ".concat(e.id),style:{width:"90%",textAlign:"left",marginBottom:10},children:Object(b.jsxs)("p",{children:["Estimated execution time: ",e.maxTime," seconds - Blocked time: ",7-e.timeToUnblock," seconds"]},t+"_p")},t)})):Object(b.jsx)(b.Fragment,{})}),Object(b.jsx)(S,{title:"terminated - Process Simulation",icon:Object(b.jsx)(g.f,{variant:"32x32_4"}),children:Array.isArray(q)?q.map((function(e){return Object(b.jsx)(f.a,{legend:"PID ".concat(e.id),className:"process-fieldset",children:Object(b.jsxs)("p",{children:[e.operation," = ",e.result]},e.id+"_p")},e.id)})):Object(b.jsx)(b.Fragment,{})}),Object(b.jsxs)(S,{title:"logs.txt - Notepad",icon:Object(b.jsx)(g.e,{variant:"32x32_4"}),children:[Object(b.jsx)(p.a,{readOnly:!0,value:h,style:{width:"100%",height:200}}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)(m.a,{onClick:function(){j("")},children:"Clear logs"})]}),Object(b.jsx)("br",{})]}),Object(b.jsx)(T.a,{list:Object(b.jsx)(v.a,{children:Object(b.jsx)(v.a.Item,{icon:Object(b.jsx)(g.g,{variant:"32x32_4"}),onClick:function(){Z(!1),n()},children:"Empty and Restart"},"reset")})})]})},A=j.e.form(c||(c=Object(h.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n"])));var R=function(){var e=Object(s.useState)(0),t=Object(d.a)(e,2),n=t[0],i=t[1],c=Object(s.useState)(!1),r=Object(d.a)(c,2),a=r[0],o=r[1];return!1===a?Object(b.jsxs)(A,{onSubmit:function(e){e.preventDefault(),o(!0)},children:[Object(b.jsx)(O,{children:"First Come First Served"}),Object(b.jsx)(u.a,{placeholder:"# of processes",style:{marginBottom:10},type:"number",min:"1",onChange:function(e){var t=e.target;return i(t.value)},required:!0}),Object(b.jsx)("br",{}),Object(b.jsx)(m.a,{children:"Start"})]}):Object(b.jsx)(I,{totalProcesses:parseInt(n),processingDone:function(){o(!1)}})};a.a.render(Object(b.jsxs)(o.a,{children:[Object(b.jsx)(l.a,{}),Object(b.jsx)(R,{})]}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.5b94d595.chunk.js.map