(this.webpackJsonprunbacks=this.webpackJsonprunbacks||[]).push([[0],{14:function(A){A.exports=JSON.parse('{"Mushroom Cup":["Luigi Circuit","Peach Beach","Baby Park","Dry Dry Desert"],"Flower Cup":["Mushroom Bridge","Mario Circuit","Daisy Cruiser","Waluigi Stadium"],"Star Cup":["Sherbet Land","Mushroom City","Yoshi Circuit","DK Mountain"],"Special Cup":["Wario Colosseum","Dino Dino Jungle","Bowser\'s Castle","Rainbow Road"]}')},43:function(A,e,r){},45:function(A,e,r){},57:function(A,e,r){"use strict";r.r(e);var c=r(0),t=r.n(c),i=r(17),n=r.n(i),s=(r(43),r(24)),g=(r(44),r(45),r(32)),a=r.n(g),d=r.p+"static/media/runbacks.ae7c6976.csv",j=r(7),h=r(59),o=r(60),l=r(61),w=r(62),B=r(37),O=(r(48),function(A,e){if(void 0===A||void 0===e)return 0;var r=D(A)-D(e);return Math.floor(r/1e3)+r%1e3/1e3});function D(A){var e=A.split(/[:.]/).map((function(A){return parseInt(A)}));return 60*e[0]*1e3+1e3*e[1]+e[2]}var C=["Ben","Chris","Derek","Ryan"],b=r(2);var Q=function(A){var e=A.numerator/A.denominator*100;return Object(b.jsxs)("div",{children:[Object(b.jsxs)("div",{className:"winrate",children:[e.toFixed(0),"%"]}),Object(b.jsxs)("div",{className:"light",children:[A.denominator," games"]})]})};var x=Object(j.o)((function(A){var e=Object(j.m)().track,r=t.a.useMemo((function(){return[{Header:"Driver",accessor:"driver"},{Header:"Items",accessor:"items"},{Header:"kart",accessor:"kart"},{Header:"Time",accessor:"time"},{Header:"Episode",accessor:"runback",sortType:function(A,e){return A.number-e.number},Cell:function(A){return Object(b.jsxs)("a",{href:A.original.runback.link,children:["ep. ",A.original.runback.number]})}}]}),[]),i=Object(c.useMemo)((function(){return A.records.map((function(A){return{runback:{number:A.runback,link:A.link},driver:A.driver,items:A.items,kart:A.kart,time:A[e]}}))}),[A.records,e]);return Object(b.jsxs)(h.a,{children:[Object(b.jsx)("h3",{children:e}),Object(b.jsxs)(o.a,{children:[Object(b.jsxs)(l.a,{children:[Object(b.jsx)("h4",{children:"Stats"}),Object(b.jsxs)(w.a,{bordered:!0,size:"sm",children:[Object(b.jsx)("thead",{children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{}),Object(b.jsx)("th",{children:"Driver Record"}),Object(b.jsx)("th",{children:"Items Record"}),Object(b.jsx)("th",{children:"Total Record"})]})}),Object(b.jsx)("tbody",{children:A.records.length?C.map((function(r){var c=A.stats[r][e];return Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{className:"clickable",onClick:function(){return A.history.push("/players/"+r)},children:r}),Object(b.jsx)("td",{children:Object(b.jsx)(Q,{numerator:c.driverWins,denominator:c.driverGames})}),Object(b.jsx)("td",{children:Object(b.jsx)(Q,{numerator:c.itemWins,denominator:c.itemGames})}),Object(b.jsx)("td",{children:Object(b.jsx)(Q,{numerator:c.driverWins+c.itemWins,denominator:c.driverGames+c.itemGames})})]},r)})):null})]})]}),Object(b.jsxs)(l.a,{children:[Object(b.jsx)("h4",{children:"Standings"}),Object(b.jsx)(B.a,{data:i,pageSize:i.length,columns:r,showPagination:!1,className:"-striped -highlight",defaultSorted:[{id:"time"}]})]})]})]})})),u=r(14),I=r(65);var E=Object(j.o)((function(A){var e,r=A.data.slice(0).sort((e=A.track,function(A,r){return D(A[e])-D(r[e])})).slice(0,5),c={train:"data:image/png;base64,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",blue:"data:image/png;base64,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",pink:"data:image/png;base64,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",green:"data:image/png;base64,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",waluigi:"data:image/png;base64,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"};return Object(b.jsxs)(I.a,{children:[Object(b.jsx)("b",{className:"clickable",onClick:function(){return A.history.push("/tracks/"+A.track)},children:A.track}),r.map((function(e,r){return Object(b.jsxs)(o.a,{children:[Object(b.jsxs)(l.a,{children:[e.driver," + ",e.items]}),Object(b.jsx)(l.a,{children:Object(b.jsx)("img",{src:c[e.kart],alt:e.kart,className:"kart-icon"})}),Object(b.jsx)(l.a,{children:e[A.track]}),Object(b.jsx)(l.a,{children:Object(b.jsxs)("a",{href:e.link,children:["ep. ",e.runback]})}),Object(b.jsx)("br",{})]},r)}))]})}));var v=function(A){return Object(b.jsx)("div",{className:"container",children:Object.keys(u).map((function(e){return Object(b.jsxs)("div",{children:[Object(b.jsx)("h3",{children:e}),Object(b.jsx)("hr",{}),Object(b.jsx)(o.a,{children:u[e].map((function(e){return Object(b.jsx)(l.a,{md:6,children:Object(b.jsx)(E,{track:e,data:A.records})},e)}))})]},e)}))})},f=r(38);var m=Object(j.o)((function(A){var e=Object(j.m)().player,r=Object(c.useState)("0"),t=Object(s.a)(r,2),i=t[0],n=t[1],g=0===parseInt(i)?A.records:A.records.filter((function(A){return A.season===i})),a=g.filter((function(A){return A.driver===e&&"desync"!==A.result})),d=a.reduce((function(A,e){return A+("win"===e.result?1:0)}),0),w=g.filter((function(A){return A.items===e&&"desync"!==A.result})),B=w.reduce((function(A,e){return A+("win"===e.result?1:0)}),0),D={},C=0,x=0,E=0,v=0;return g.length&&Object.values(u).flat().forEach((function(r){for(var c=0,t=0,i=0,n=0,s={},a=0;a<g.length/2;a++)"desync"!==g[2*a][r]&&(g[2*a].driver===e?(i++,(void 0===s[r]||g[2*a][r]<s[r])&&(s=g[2*a]),g[2*a][r]<g[2*a+1][r]&&c++):g[2*a].items===e?(n++,g[2*a][r]<g[2*a+1][r]&&t++):g[2*a+1].driver===e?(i++,(void 0===s[r]||g[2*a+1][r]<s[r])&&(s=g[2*a+1]),g[2*a][r]>g[2*a+1][r]&&c++):g[2*a+1].items===e&&(n++,g[2*a][r]>g[2*a+1][r]&&t++));var d=A.records.map((function(A){return A[r]})).reduce((function(A,e){return e<A?e:A})),j=O(s[r],d);j=0===j?"-":"+"+j.toFixed(3),D[r]={driverWins:c,itemWins:t,driverGames:i,itemGames:n,fastestDriver:s,difference:j},C+=i,x+=n,E+=c,v+=t})),Object(b.jsxs)(h.a,{children:[Object(b.jsx)("h3",{children:e}),Object(b.jsxs)("select",{value:i,onChange:function(A){return n(A.target.value)},children:[Object(b.jsx)("option",{value:0,children:"All Seasons"}),Object(f.a)(new Set(A.records.map((function(A){return A.season})))).map((function(A){return Object(b.jsxs)("option",{value:A,children:["Season ",A]},A)}))]}),Object(b.jsxs)(o.a,{children:[Object(b.jsxs)(l.a,{md:4,children:["Runback Stats",Object(b.jsx)(I.a,{children:Object(b.jsxs)("table",{children:[Object(b.jsx)("thead",{children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:"Driver"}),Object(b.jsx)("th",{children:"Items"}),Object(b.jsx)("th",{children:"Overall"})]})}),Object(b.jsx)("tbody",{children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:Object(b.jsx)(Q,{numerator:d,denominator:a.length})}),Object(b.jsx)("td",{children:Object(b.jsx)(Q,{numerator:B,denominator:w.length})}),Object(b.jsx)("td",{children:Object(b.jsx)(Q,{numerator:d+B,denominator:a.length+w.length})})]})})]})})]}),Object(b.jsxs)(l.a,{md:8,children:["Track Stats",Object(b.jsx)(I.a,{children:Object(b.jsxs)("table",{children:[Object(b.jsx)("thead",{children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:"Track"}),Object(b.jsx)("th",{children:"Fastest Time"}),Object(b.jsx)("th",{children:"vs. Record"}),Object(b.jsx)("th",{children:"Winrate (Driver)"}),Object(b.jsx)("th",{children:"Winrate (Items)"}),Object(b.jsx)("th",{children:"Overall"})]})}),Object(b.jsxs)("tbody",{children:[g.length?Object.values(u).flat().map((function(e){return Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{className:"clickable",onClick:function(){return A.history.push("/tracks/"+e)},children:e}),Object(b.jsx)("td",{className:"-"===D[e].difference?"fw-bold":null,children:D[e].fastestDriver[e]}),Object(b.jsx)("td",{children:D[e].difference}),Object(b.jsxs)("td",{children:[D[e].driverWins,"/",D[e].driverGames]}),Object(b.jsxs)("td",{children:[D[e].itemWins,"/",D[e].itemGames]}),Object(b.jsxs)("td",{children:[((D[e].driverWins+D[e].itemWins)/(D[e].driverGames+D[e].itemGames)*100).toFixed(0),"%"]})]},e)})):null,Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{className:"fw-bold",children:"totals"}),Object(b.jsx)("td",{}),Object(b.jsx)("td",{}),Object(b.jsxs)("td",{className:"fw-bold",children:[(E/C*100).toFixed(0),"%"]}),Object(b.jsxs)("td",{className:"fw-bold",children:[(v/x*100).toFixed(0),"%"]}),Object(b.jsxs)("td",{className:"fw-bold",children:[((E+v)/(C+x)*100).toFixed(0),"%"]})]})]})]})})]})]})]})}));var H=function(A){return Object(b.jsxs)(j.g,{children:[Object(b.jsx)(j.d,{path:"/tracks/:track",children:Object(b.jsx)(x,{records:A.records,stats:A.stats})}),Object(b.jsx)(j.d,{path:"/players/:player",children:Object(b.jsx)(m,{records:A.records})}),Object(b.jsx)(j.d,{path:"/",children:Object(b.jsx)(v,{records:A.records})})]})},M=r(63),P=r(64),k=r(18);var L=function(){return Object(b.jsx)(M.a,{bg:"light",expand:"lg",children:Object(b.jsxs)(h.a,{children:[Object(b.jsx)(M.a.Brand,{children:"Runbacks"}),Object(b.jsx)(M.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(b.jsx)(M.a.Collapse,{id:"basic-navbar-nav",children:Object(b.jsxs)(P.a,{className:"me-auto",children:[Object(b.jsx)(k.LinkContainer,{to:"/",children:Object(b.jsx)(P.a.Link,{children:"Home"})}),Object(b.jsx)(k.LinkContainer,{to:"/players/Ben",children:Object(b.jsx)(P.a.Link,{children:"Ben"})}),Object(b.jsx)(k.LinkContainer,{to:"/players/Chris",children:Object(b.jsx)(P.a.Link,{children:"Chris"})}),Object(b.jsx)(k.LinkContainer,{to:"/players/Derek",children:Object(b.jsx)(P.a.Link,{children:"Derek"})}),Object(b.jsx)(k.LinkContainer,{to:"/players/Ryan",children:Object(b.jsx)(P.a.Link,{children:"Ryan"})})]})})]})})};var R=function(){var A=Object(c.useState)([]),e=Object(s.a)(A,2),r=e[0],t=e[1];Object(c.useEffect)((function(){a.a.parse(d,{download:!0,header:!0,complete:function(A){t(A.data)}})}),[]);var i={};return C.forEach((function(A){i[A]={}})),r.length&&Object.values(u).flat().forEach((function(A){C.forEach((function(e){i[e][A]={driverWins:0,itemWins:0,driverGames:0,itemGames:0,fastestDriver:{}}}));for(var e=0;e<r.length/2;e++)if("desync"!==r[2*e][A]){i[r[2*e].driver].driverTracks++,i[r[2*e].items].itemTracks++,i[r[2*e+1].driver].driverTracks++,i[r[2*e+1].items].itemTracks++,i[r[2*e].driver][A].driverGames++,i[r[2*e].items][A].itemGames++,i[r[2*e+1].driver][A].driverGames++,i[r[2*e+1].items][A].itemGames++;var c=r[2*e][A]<r[2*e+1][A]?2*e:2*e+1;i[r[c].driver][A].driverWins++,i[r[c].items][A].itemWins++,i[r[c].driver].driverTrackWins++,i[r[c].items].itemTrackWins++,(void 0===i[r[2*e].driver][A].fastestDriver[A]||r[2*e][A]<i[r[2*e].driver][A].fastestDriver[A])&&(i[r[2*e].driver][A].fastestDriver=r[2*e]),(void 0===i[r[2*e+1].driver][A].fastestDriver[A]||r[2*e+1][A]<i[r[2*e+1].driver][A].fastestDriver[A])&&(i[r[2*e+1].driver][A].fastestDriver=r[2*e+1])}var t=r.map((function(e){return e[A]})).reduce((function(A,e){return e<A?e:A}));C.forEach((function(e){var r=O(i[e][A].fastestDriver[A],t);r=0===r?"-":"+"+r.toFixed(3),i[e][A].difference=r}))})),Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(L,{}),Object(b.jsx)(H,{records:r,stats:i})]})},Y=function(A){A&&A instanceof Function&&r.e(3).then(r.bind(null,66)).then((function(e){var r=e.getCLS,c=e.getFID,t=e.getFCP,i=e.getLCP,n=e.getTTFB;r(A),c(A),t(A),i(A),n(A)}))},F=r(16);n.a.render(Object(b.jsx)(t.a.StrictMode,{children:Object(b.jsx)(F.BrowserRouter,{children:Object(b.jsx)(R,{})})}),document.getElementById("root")),Y()}},[[57,1,2]]]);
//# sourceMappingURL=main.d856b0d3.chunk.js.map