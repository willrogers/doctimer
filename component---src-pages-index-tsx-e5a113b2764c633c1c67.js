(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"9XZr":function(t,e,n){"use strict";var a=n("XKFU"),s=n("Lgjv"),r=n("ol8x"),o=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(r);a(a.P+a.F*o,"String",{padStart:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0,!0)}})},Lgjv:function(t,e,n){var a=n("ne8i"),s=n("l0Rn"),r=n("vhPU");t.exports=function(t,e,n,o){var i=String(r(t)),l=i.length,u=void 0===n?" ":String(n),c=a(e);if(c<=l||""==u)return i;var m=c-l,d=s.call(u,Math.ceil(m/u.length));return d.length>m&&(d=d.slice(0,m)),o?d+i:i+d}},QeBL:function(t,e,n){"use strict";n.r(e);var a=n("q1tI"),s=n.n(a),r=(n("ox/P"),n("f3/d"),n("9XZr"),["Phone Appointment","Face-to-face Appointment","Notes","Home Visit","Meeting","Checks"]);function o(t,e){return String(t).padStart(e,"0")}function i(t){var e=t/1e3;return o(Math.floor(e/60),2)+":"+o(Math.round(e%60),2)}function l(t){return t.toLocaleTimeString()}var u=function(){function t(t){this.category=t,this.comment=null,this.startMillis=Date.now(),this.endDuration=null}var e=t.prototype;return e.setComment=function(t){this.comment=t},e.stop=function(){this.endDuration=Date.now()-this.startMillis,console.log("stopped segment "+this.endDuration)},e.startTime=function(){return new Date(this.startMillis)},e.endTime=function(){return this.endDuration?new Date(this.startMillis+this.endDuration):new Date},e.currentDuration=function(){return null!==this.endDuration?this.endDuration:Date.now()-this.startMillis},t}(),c=function(){function t(){this.date=new Date,this.segments=[]}return t.prototype.addSegment=function(t){this.segments.push(t),console.log(this.segments.length+" segments")},t}(),m=n("ZTnj"),d=n.n(m),g=function(t){var e=t.running,n=t.segment,a=s.a.createElement("div",null,"Start Clinic"),r="";if(e){if(null!==n){var o=i(n.currentDuration());r=n.category+": "+o}else r="No appointment in progress";a=s.a.createElement(s.a.Fragment,null,s.a.createElement("div",null,r),s.a.createElement("div",{className:d.a.subhead},"Press to stop clinic"))}return s.a.createElement("button",{onClick:function(){t.callback&&t.callback(t.name)},type:"button",className:d.a.button+" "+d.a.timer},a)},f=function(t){var e=t.selected&&!t.disabled?"red":"gray",n=void 0!==t.altname&&t.selected?t.altname:t.name;return s.a.createElement("button",{className:d.a.button,disabled:t.disabled,style:{backgroundColor:e},type:"button",onClick:function(){t.callback&&t.callback(t.name)}},(t.selected?"Stop":"Start")+" "+n)},v=function(t){var e="";return e=t.toControls?"Back to controls":"See stats",s.a.createElement("button",{className:d.a.button+" "+d.a.switch,onClick:function(){t.toControls?t.setControlsView(!0):t.setControlsView(!1)}},e)},h=function(t){return console.log("buttons"),s.a.createElement("div",{className:d.a.buttons},s.a.createElement(g,{callback:t.startPressed,selected:t.started,running:t.started,segment:t.currentSegment}),t.buttonsSelected.map((function(e){return s.a.createElement(f,{key:e[0],name:e[0],selected:e[1],callback:t.itemPressed,disabled:!t.started})})),s.a.createElement(v,{toControls:!1,setControlsView:t.setControlsView}))},b=n("aJiU"),p=n.n(b),w=function(t){return s.a.createElement("div",{id:"status",className:p.a.status},s.a.createElement("div",{className:p.a.date},t.time.toLocaleDateString(void 0,{weekday:"long",day:"numeric",month:"long",year:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit"})),s.a.createElement("div",{className:p.a.events},t.events," events so far."))},S=function(t){var e=t.currentSegment,n=t.setCurrentSegment,r=t.started,o=t.setStarted,i=Object(a.useState)(new Date),l=i[0],c=i[1];Object(a.useEffect)((function(){var t=window.setInterval((function(){c(new Date)}),1e3);return function(){clearInterval(t)}}));var m=t.categories.map((function(t){return[t,e&&t===e.category]}));return s.a.createElement("div",{id:"buttonScreen"},s.a.createElement(w,{time:l,events:t.day.segments.length}),s.a.createElement(h,{buttonsSelected:m,itemPressed:function(a){if(null===e){var s=new u(a);n(s)}else if(e.category===a)e.stop(),t.day.addSegment(e),n(null);else{e.stop(),t.day.addSegment(e);var r=new u(a);n(r)}},started:r,startPressed:function(){o(!r),r&&e&&(e.stop(),t.day.addSegment(e))},currentSegment:e,setControlsView:t.setControlsView}))},C=n("iy7Y"),E=n.n(C),y=function(t){var e=t.segment;return console.log(e.endTime()),s.a.createElement("div",null,e.category," start ",l(e.startTime())," end"," ",l(e.endTime())," duration"," ",i(e.currentDuration()))},D=function(t){return s.a.createElement("div",{className:E.a.statsView},s.a.createElement("p",null,"Stats for ",t.day.date.toLocaleDateString(),":"),s.a.createElement("p",null,"There have been ",t.day.segments.length," completed segments."),t.day.segments.map((function(t){return s.a.createElement(y,{segment:t})})),s.a.createElement("div",{className:E.a.statsContainer},s.a.createElement("div",{className:E.a.statsColumn}),s.a.createElement("div",{className:E.a.statsColumn})),s.a.createElement(v,{toControls:!0,setControlsView:t.setControlsView}))};e.default=function(){var t=Object(a.useState)(new c),e=t[0],n=(t[1],Object(a.useState)(!0)),o=n[0],i=n[1],l=Object(a.useState)(null),u=l[0],m=l[1],d=Object(a.useState)(null),g=d[0],f=d[1];return o?s.a.createElement(S,{setControlsView:i,day:e,categories:r,currentSegment:u,setCurrentSegment:m,started:g,setStarted:f}):s.a.createElement(D,{day:e,setControlsView:i})}},ZTnj:function(t,e,n){t.exports={buttons:"buttons-module--buttons--3J-va",button:"buttons-module--button--22YE3",timer:"buttons-module--timer--3CQwQ",subhead:"buttons-module--subhead--15lBa",switch:"buttons-module--switch--1AGYO"}},aJiU:function(t,e,n){t.exports={status:"status-module--status--33GdV",date:"status-module--date--2GlmR",events:"status-module--events--1WGr9"}},iy7Y:function(t,e,n){t.exports={statsView:"stats-module--statsView--3Ct4N",statsContainer:"stats-module--statsContainer--3sYxV",statsColumn:"stats-module--statsColumn--1DJjV"}},l0Rn:function(t,e,n){"use strict";var a=n("RYi7"),s=n("vhPU");t.exports=function(t){var e=String(s(this)),n="",r=a(t);if(r<0||r==1/0)throw RangeError("Count can't be negative");for(;r>0;(r>>>=1)&&(e+=e))1&r&&(n+=e);return n}},"ox/P":function(t,e,n){}}]);
//# sourceMappingURL=component---src-pages-index-tsx-e5a113b2764c633c1c67.js.map