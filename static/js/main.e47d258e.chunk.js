(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(6),i=n.n(o),r=n(1),l=n(2),s=n(4),m=n(3),u=(n(12),n(13),function(e){Object(s.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(r.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={time:(new Date).toLocaleTimeString("en-GB")},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.timer=setInterval((function(){e.setState({time:(new Date).toLocaleTimeString("en-GB")}),console.log(e.state.time)}),1e3)}},{key:"componentDidUpdate",value:function(e){e.name!==this.props.name&&console.log("The Clock was renamed from ".concat(e.name)+" to ".concat(this.props.name))}},{key:"componentWillUnmount",value:function(){clearInterval(this.timer)}},{key:"render",value:function(){var e=this.state.time;return c.a.createElement("p",{className:"clock"},"Current time:"," ",e)}}]),n}(c.a.Component)),p=function(e){Object(s.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(r.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={isClockVisible:!0,clockName:"React clock"},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this,t=this.state,n=t.clockName,a=t.isClockVisible;return c.a.createElement("div",{className:"App"},c.a.createElement("h1",{className:"App__name"},n),a&&c.a.createElement(u,{name:n}),c.a.createElement("div",{className:"App__buttons"},c.a.createElement("button",{type:"button",onClick:function(){e.setState({isClockVisible:!0})}},"Show Clock"),c.a.createElement("button",{type:"button",onClick:function(){e.setState({isClockVisible:!1})}},"Hide Clock"),c.a.createElement("button",{type:"button",onClick:function(){e.setState({clockName:(100*Math.random()).toFixed(0)})}},"Set random name")))}}]),n}(c.a.Component);i.a.render(c.a.createElement(p,null),document.getElementById("root"))},7:function(e,t,n){e.exports=n(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.e47d258e.chunk.js.map