(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){},18:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(8),i=n.n(r),o=n(2),l=n(3),s=n(5),u=n(4),h=n(6),m=n(1),f=(n(15),function(){return c.a.createElement("h2",null,"The Emoji Finder App")}),d=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"header"},c.a.createElement(f,null),c.a.createElement("div",{className:"search"},c.a.createElement("form",null,c.a.createElement("input",{type:"text",value:this.props.search,id:"searchbar",onChange:this.props.handleChange,autoComplete:"off"}))))}}]),t}(c.a.Component),b=(n(16),n(17),function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).state={emoji:[]},e.fetchdata=e.fetchdata.bind(Object(m.a)(Object(m.a)(e))),e}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.fetchdata().then(function(t){e.setState({emoji:t})})}},{key:"fetchdata",value:function(){return fetch("https://jsonblob.com/api/9efb4334-2f65-11e9-9080-4bc71bf693d4").then(function(e){return e.json().then(function(e){return e})})}},{key:"render",value:function(){var e=this;console.log(this.state.emoji);var t=this.state.emoji.filter(function(t){return t.keywords.includes(e.props.emoji)||t.title.includes(e.props.emoji)});return c.a.createElement("div",{className:"body"},c.a.createElement("ol",null,t.length>0?t.map(function(e){return c.a.createElement("li",{key:e.title},e.symbol," ",e.title)}):c.a.createElement("li",null,"No Emoji")))}}]),t}(c.a.Component)),j=(n(18),function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).handleChange=n.handleChange.bind(Object(m.a)(Object(m.a)(n))),n.state={search:""},n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"handleChange",value:function(e){this.setState({search:e.target.value})}},{key:"render",value:function(){return c.a.createElement("div",{className:"app"},c.a.createElement(d,{handleChange:this.handleChange,search:this.state.search}),c.a.createElement(b,{emoji:this.state.search}))}}]),t}(c.a.Component));i.a.render(c.a.createElement(j,null),document.getElementById("root"))},9:function(e,t,n){e.exports=n(19)}},[[9,1,2]]]);
//# sourceMappingURL=main.1506487f.chunk.js.map