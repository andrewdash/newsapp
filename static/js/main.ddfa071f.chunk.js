(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{104:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),a=n(73),s=n.n(a),i=(n(90),n.p,n(91),n(124)),o=n(76),j=(n(0),n(118)),u=n(115),h=n(119),b=n(120),l=n(121),d=n(29),p=n(30),f=n(51),O=n(50),x=n(10),w=n(82),m=n(125),v=n(126),g=n(117),k=n(123),S=n(4),y=function(e){Object(f.a)(n,e);var t=Object(O.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"render",value:function(){return Object(S.jsx)(u.a,{children:Object(S.jsx)("form",{action:"/newsapp",method:"get",children:Object(S.jsx)(w.a,{children:Object(S.jsxs)(m.a,{children:[Object(S.jsx)(v.a,{type:"text",placeholder:"Search news posts",id:"header-search",name:"q"}),Object(S.jsx)(g.a,{to:"/newsapp",children:Object(S.jsx)(k.a,{type:"submit",children:"Search"})})]})})})})}}]),n}(c.a.Component),C=Object(x.e)(y),F=function(){return Object(S.jsxs)(j.a,{as:"nav",align:"center",justify:"space-bewteen",wrap:"wrap",padding:"0.5rem",bg:"aliceblue",children:[Object(S.jsx)(u.a,{children:Object(S.jsx)(h.a,{as:"h1",size:"sm",children:Object(S.jsx)("a",{href:"/newsapp",children:"News Website"})})}),Object(S.jsx)(b.a,{}),Object(S.jsx)(u.a,{children:Object(S.jsx)(C,{})}),Object(S.jsx)(b.a,{}),Object(S.jsx)(u.a,{children:Object(S.jsx)("a",{href:"https://www.linkedin.com/in/anwle/",children:Object(S.jsx)(o.a,{size:"2em",color:"dodgerblue"})})}),Object(S.jsx)(l.a,{})]})},I=n(6),D=n(37),J=n.n(D),M=n(65),q=n(77),z=n.n(q),L=n(122);var N=function(e){var t=new Date(1e3*e),n=t.getFullYear(),r=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][t.getMonth()];return t.getDate()+"-"+r+"-"+n},P=function(){var e=Object(M.a)(J.a.mark((function e(t){var n,r;return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n="",""!=t){e.next=7;break}return e.next=4,fetch("".concat("https://newsapp-react-fastapi.herokuapp.com/news"));case 4:n=e.sent,e.next=10;break;case 7:return e.next=9,fetch("".concat("https://newsapp-react-fastapi.herokuapp.com/news","?q=").concat(t,"&limit=10"));case 9:n=e.sent;case 10:return e.next=12,n.json();case 12:return r=e.sent,e.abrupt("return",r);case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),W=function(e){return e.data.map((function(e){return t=e,n=z()(),Object(S.jsx)(u.a,{spacing:8,p:"3",shadow:"md",borderWidth:"1px",borderRadius:"lg",children:Object(S.jsxs)(m.b,{children:[Object(S.jsx)(u.a,{fontWeight:"semibold",children:Object(S.jsx)("a",{href:"".concat(t.link),children:t.title})}),Object(S.jsx)(u.a,{children:Object(S.jsxs)(L.a,{mt:2,fontSize:"sm",children:[t.source,": ",N(t.created_utc)]})})]})},n);var t,n}))},A=function(e){Object(f.a)(n,e);var t=Object(O.a)(n);function n(e){var r;return Object(d.a)(this,n),(r=t.call(this,e)).state={error:null,errorInfo:null},r}return Object(p.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({error:e,errorInfo:t})}},{key:"render",value:function(){return this.state.errorInfo?Object(S.jsxs)("div",{children:[Object(S.jsx)("h2",{children:"Something went wrong."}),Object(S.jsxs)("details",{style:{whiteSpace:"pre-wrap"},children:[this.state.error&&this.state.error.toString(),Object(S.jsx)("br",{}),this.state.errorInfo.componentStack]})]}):this.props.children}}]),n}(c.a.Component),B=function(){var e=Object(r.useState)([]),t=Object(I.a)(e,2),n=t[0],c=t[1],a=Object(x.d)().search,s=new URLSearchParams(a).get("q")||"";return s=s.trim().replace(" ","+"),Object(r.useEffect)((function(){var e=function(){var e=Object(M.a)(J.a.mark((function e(){return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:P(s).then((function(e){return W(e)})).then((function(e){return c(e)}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),Object(S.jsx)(A,{children:Object(S.jsx)("div",{className:"news-feed",children:n})})},E=n(60);var R=function(){return Object(S.jsx)(E.a,{children:Object(S.jsxs)(i.a,{children:[Object(S.jsx)(F,{}),Object(S.jsx)(B,{})]})})},T=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,127)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),r(e),c(e),a(e),s(e)}))};s.a.render(Object(S.jsx)(c.a.StrictMode,{children:Object(S.jsx)(R,{})}),document.getElementById("root")),T()},90:function(e,t,n){},91:function(e,t,n){}},[[104,1,2]]]);
//# sourceMappingURL=main.ddfa071f.chunk.js.map