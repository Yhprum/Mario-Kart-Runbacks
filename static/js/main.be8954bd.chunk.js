(this.webpackJsonprunbacks=this.webpackJsonprunbacks||[]).push([[0],{16:function(e){e.exports=JSON.parse('{"Mushroom Cup":["Luigi Circuit","Peach Beach","Baby Park","Dry Dry Desert"],"Flower Cup":["Mushroom Bridge","Mario Circuit","Daisy Cruiser","Waluigi Stadium"],"Star Cup":["Sherbet Land","Mushroom City","Yoshi Circuit","DK Mountain"],"Special Cup":["Wario Colosseum","Dino Dino Jungle","Bowser\'s Castle","Rainbow Road"]}')},55:function(e,A,r){},57:function(e,A,r){},70:function(e,A,r){"use strict";r.r(A);var t=r(0),c=r.n(t),n=r(21),i=r.n(n),s=(r(55),r(33)),a=(r(56),r(57),r(43)),j=r.n(a),d=r.p+"static/media/runbacks.35dd55eb.csv",g=r(7),h=r(72),l=r(73),o=r(74),O=r(75),b=r(48),x=(r(60),function(e){return function(A,r){return u(A[e])-u(r[e])}}),w=function(e,A){if(void 0===e||void 0===A)return 0;var r=u(e)-u(A);return Math.floor(r/1e3)+r%1e3/1e3},B=function(e){if(!e.length)return 0;if(void 0===e[0])return null;var A=e.map(u).reduce((function(e,A){return e+A})),r=Math.floor(A/1e3/60);A%=6e4;var t=Math.floor(A/1e3);return A%=1e3,r+":"+t.toString().padStart(2,"0")+"."+A};function u(e){var A=e.split(/[:.]/).map((function(e){return parseInt(e)}));return 60*A[0]*1e3+1e3*A[1]+A[2]}var D=["Ben","Chris","Derek","Ryan"],C=r(2);var Q=function(e){var A=e.numerator/e.denominator*100;return Object(C.jsxs)("div",{children:[Object(C.jsxs)("div",{className:"winrate",children:[A.toFixed(0),"%"]}),Object(C.jsxs)("div",{className:"light",children:[e.denominator," games"]})]})};var f=Object(g.o)((function(e){var A=Object(g.m)().track,r=c.a.useMemo((function(){return[{Header:"Driver",accessor:"driver"},{Header:"Items",accessor:"items"},{Header:"kart",accessor:"kart"},{Header:"Time",accessor:"time"},{Header:"Episode",accessor:"runback",sortType:function(e,A){return e.number-A.number},Cell:function(e){return Object(C.jsxs)("a",{href:e.original.runback.link,children:["ep. ",e.original.runback.number]})}}]}),[]),n=Object(t.useMemo)((function(){return e.records.map((function(e){return{runback:{number:e.runback,link:e.link},driver:e.driver,items:e.items,kart:e.kart,time:e[A]}}))}),[e.records,A]);return Object(C.jsxs)(h.a,{children:[Object(C.jsx)("h3",{children:A}),Object(C.jsxs)(l.a,{children:[Object(C.jsxs)(o.a,{children:[Object(C.jsx)("h4",{children:"Stats"}),Object(C.jsxs)(O.a,{bordered:!0,size:"sm",children:[Object(C.jsx)("thead",{children:Object(C.jsxs)("tr",{children:[Object(C.jsx)("th",{}),Object(C.jsx)("th",{children:"Driver Record"}),Object(C.jsx)("th",{children:"Items Record"}),Object(C.jsx)("th",{children:"Total Record"})]})}),Object(C.jsx)("tbody",{children:e.records.length?D.map((function(r){var t=e.stats[r][A];return Object(C.jsxs)("tr",{children:[Object(C.jsx)("td",{className:"clickable",onClick:function(){return e.history.push("/players/"+r)},children:r}),Object(C.jsx)("td",{children:Object(C.jsx)(Q,{numerator:t.driverWins,denominator:t.driverGames})}),Object(C.jsx)("td",{children:Object(C.jsx)(Q,{numerator:t.itemWins,denominator:t.itemGames})}),Object(C.jsx)("td",{children:Object(C.jsx)(Q,{numerator:t.driverWins+t.itemWins,denominator:t.driverGames+t.itemGames})})]},r)})):null})]})]}),Object(C.jsxs)(o.a,{children:[Object(C.jsx)("h4",{children:"Standings"}),Object(C.jsx)(b.a,{data:n,pageSize:n.length,columns:r,showPagination:!1,className:"-striped -highlight",defaultSorted:[{id:"time"}]})]})]})]})})),v=r(16),m=r(79),I=r(76),E=r(78),H="data:image/png;base64,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",M="data:image/png;base64,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",k="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAACgNJREFUeNrtmw9MVPcdwF9SdFfDytPS7cqs4yxVUOs4Q5w0NpskLhGH7Uh1GanpmtMyvZH9uZpFEVvtjXV6dV1zttOdbGWeJuqVYgsW2nMI2WlF4eqU1bqhrnVnbe2RErlITb7L93v3/fH7vTsOcEJR9iOfvKco+Pn8fu/d471T08bYcOTlg8yYkve95oNQbrHCmJEvWV4COLSxOnD2x3SAMS3vrHT+f/a1sTzGdAB/ox/gi1s0gLOiHGpra4m29rYorW1Dkrll5Xm4X3LHCYQ+DA1qVh1ljlt39r27vUn/4YNZCUNdLaNmFBcN7hIVD4lknw9/Er69AxQWFfa7xHfu2Am3fQDXVhc0/9WXMALK39IB/rDJBp31Dkgmjzg3lcQFKFxUCKM+gD/LAsi+qRkKgUUFgs7XnACH/BCqKCfw73mWWgH2euGDzesA9x1ZOeBzPg/4yiAv/0h3BHBrybIQzz27gThdtwc6z3YKRkWAg9+aDoEF+VGkAKef/yl0V3kogmCvNy6AHKFgQQHJI7iP8v76OgEGQNr/uJH48uTTJxIe3SQiUIiYfPvPSgiefQyBWxSXQXE5gDz7GECWxxUQWFOoMPLyMXF/ikZgADlCfwEYlD685nGafQTF5QhyAESWHxUBPKkmkPFmWRRCy0sUYKWtj9VlEF5pI04tXgxND+WDO9Oi8OzSZeBaWy62Qfs0ePuJLAL3Q2ut0FM5VzCi8h3pOvxPAcocQt4YYPXEibD+62awm6NgAMRTZBHy4Yockoat+YIRDXDyLlPCAI2rfwLvbn+F6Hp5W+IAq8uUACjvzbSQNFJsMhEcAPnV/IcpAMt/qQFw9ttMmhA/uHYtBBr90HmuUwEiEeg59E58APzBxiDPAVAcV4AxAGIM0LUxb+QD+HQdGMcOO+xq+hNtEdcBF7zZ/qYg0h0mLjUdgrZVdohInHtsGfjn5cO+adOhKiMDXCYT/DJ1AhSnaLDCNJ62Nl1XsOs6NBR9A0K/sBBQaVUYUXl/lUeII4EzLRAxfKA4RzAGOLHwe3EBnLou5HHfoWlQNn68EkCOMOIBOALKcwBcAYnk2//dLmbfGABnHwPI8rwCUJzBAIwcANme9zX4x6rskV8BLI+gKMonCkAfCQKwfF2uVZHnADJyAMRuiOCeZ6YIHGJY5dvSdbBtKoH6d33g3r8FQt2dEOoOQX57IbHun7+GnXCA4IGfRy43vQXhMjt0/qiYaPnOQ1AzOxvcugm2TBhHOMffAU5Ngw0SxgBLvjKeKNA0+OFXJ0BJqg7PzLgb/MvNxLAHQHmMEJXvJGk5gA2c8Dd4TwRAcQzw6Z93iABCPl0XAVC+fAB5eywAyjMYQI4wbOJI3eJCEQC3CIvv/s9+AgPwwBDy7CMszwHEzBsCJJK3S+K8EjgAM6wBPJucJI/wIYABUBLlcYvLH8UZ/D2WlwPQ7Kfrinx/AewJAiC2dH34A7hTNGDwWvzVfa+CY5MDwuEwgTcqcfA2EAooRMrsxJlHHyXwxPeXzG/Cy+mTwIkvdZqmHPcYYY0EvQxK2JBJaWCbbKb9Ek2Dx8bdAYWpJuLm3skxmcAY4HDgMAXALQaQx/nO84r8xe0vKAFaHp6vyqdocSe9NQbKEgWYcGeUWAA5wk0NEMBlKgX4XVERrQCUxy2CM4+g/JVPr5D4+wd39V3wSPJ4qavIp8Sf9GR5eyJ5AyUGhjXA73Nn0+xzBFwBKM1gCJp1+YrvBgPYDQFswxXAmmcFGbzrgnhMJsJtoC7LAgcWLYLXn1wBvkoXtFV7iX9tccGl9evhyvInAFbZBcaXPVeqCTam9J30yg3HvfGYxwgrJYzCxRLfH2qAgoUFYAxgmzULyu+bEhdgZ9pdsOueSRSAIyCRlTYFWR5jYAD5rF9pGtevfKIAQ5EfUgCUTxRAlvcY5H2TzUoAXAXJApxfuizuZS+Z/JoEx/xQ5AcdwFvlBca91Q3Lli4TAWR5OQDKcwCe/WQBcPbbFhUq8gMFSHTMD0W+YKAA+Gw9HAoT598/D4FDAajx1cDm32yG4h8UE+WpJgVXnlUhkGcF/5M/FhgD+J9aQQQWFhCu7AfAhS+hMRxJLnLsA8giBSnJ6V889mSFAzB46xkjcIi9658hXlnyCDHaAuTfnUbMuS+DyMnOIeZkZED+pDRIKt/x946kARBcFTK1L25VqK/YQCQLwPIUQJK/0QDfTb2TsGSaIWdWjkq2itbfQ8VkK0DGGCBwRMW316ey26tS5SHqK9YRrpU2hRceXw6el9wCb7VX8OJTpVBsNiuwODOkAKFzIQhdjPLZx59BJBwhert7ieuR63Dt2jWCr+27rnQRHOTypcsEP3vDVYRc/PAidIW7oDfSKx5dIVc/v0pwcGPgs2fOQqAlAJc/vhzlkkpr/Vuwp/K34FhQQMQJ5+ZAzoMx4dwcmDV7Fu3jdvac2aDKnwvRnVlZngOgPAdINro/7xbgPxClZWR5OQDTc7VHgGFZHENwAPnhJj4ZZjBGwgDZsQixECxvnRe9IwQszyvAOPssP5gAyQavABmefTkAryo5AJJwfKFSs69GDcDi0kpgebECnv750yKAPPOILE/fZLQNQwCIGCLElj4HkGdfnAPy5+eDv95PnAqeIviYxC+oYPyGoyyA/GgcmfngTLDmWmlrybYoV7GWqZa+cwAHkM+yTf4maD3SSlz44MItFYAjJAtgNkv3BMvXllMAlJYjGF/G6urrIBgMEh9d+IjOGaM1wBu1b4gAKD995nQhnz0jWw3AqwCXvxwhUQAZvHBCTp86TYRCIaKnp4eIRCKC3t7e+BU0ANevX1e+Rk93D3R90iXOWcETQaLuQB2B0kjlc5WEHID2kwXAUVtTSzcqcIv49vtUYiEaGxoJDtDS3ELga/bxI8ch2BqEjvYO6GjtgOCxIG2J9g4IHg8K+DrhxLEThHhLLHOkDZrfaYaGugbxvffs3gOeKk8Ujwe2ubcRrs0uhdLSUpKnANMsJN13/E8Gs7mfm6L49lQO4D/kV2DxZAHkCCh//OjxPo5FEVeLsT/PX6ehsYHA/+FBGFZgdXU1cSMBaH8wARK+s2OHh1YASsuXukePHBXy8gpIFkC5XB7GAEseWXLzAiR87rfXJ2aflywt8dagiIDSKMoBjD8rcACOMFAAPgQ4BL6nGMEQPOsMXgfgsqfjPdMsDoHsGQ/cnAD9vcm58e1G5Tg++d5JcawPhPGQQzhWc0sz/br29VqCTtSxGzX4vUttpYBvn0XmfnsuWDItcH/W/XTBMyVzSnQ/doGUOTUTdF0fXW+kpCVdHYV+HdsOdqAoSsuwOG4Rlh+VAW7GMAYwTzYLedxn+Xsz7r09AxgjJAuA3JYB9HQd0s3pJIwXOwqT+0i7J+32/s9UGMIYAKWRMRFAHmM+gIa3wBGTyn8BiVpfiuQJkxAAAAAASUVORK5CYII=",P="data:image/png;base64,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",p="data:image/png;base64,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";var L=Object(g.o)((function(e){var A=e.data.slice(0).sort(x(e.track)).slice(0,5),r={train:H,blue:M,pink:k,green:P,waluigi:p};return Object(C.jsxs)(E.a,{children:[Object(C.jsx)("b",{className:"clickable",onClick:function(){return e.history.push("/tracks/"+e.track)},children:e.track}),A.map((function(A,t){return Object(C.jsxs)(l.a,{children:[Object(C.jsxs)(o.a,{children:[A.driver," + ",A.items]}),Object(C.jsx)(o.a,{children:Object(C.jsx)("img",{src:r[A.kart],alt:A.kart,className:"kart-icon"})}),Object(C.jsx)(o.a,{children:A[e.track]}),Object(C.jsx)(o.a,{children:Object(C.jsxs)("a",{href:A.link,children:["ep. ",A.runback]})}),Object(C.jsx)("br",{})]},t)}))]})})),R=r.p+"static/media/mushroom.93502664.png",F=r.p+"static/media/flower.9f2cff74.png",y=r.p+"static/media/star.86a01916.png",Y=r.p+"static/media/special.f74c14c7.png";var G=function(e){var A={train:H,blue:M,pink:k,green:P,waluigi:p};return Object(C.jsx)("img",{src:A[e.kart],alt:e.kart,className:"kart-icon"})};var K=function(e){var A={Mushroom:R,Flower:F,Star:y,Special:Y};return Object(C.jsxs)("div",{className:"container",children:[Object(C.jsxs)(l.a,{children:[Object(C.jsxs)(o.a,{children:[Object(C.jsx)("h4",{children:"Stats"}),Object(C.jsxs)(O.a,{bordered:!0,size:"sm",children:[Object(C.jsx)("thead",{children:Object(C.jsxs)("tr",{children:[Object(C.jsx)("th",{}),Object(C.jsx)("th",{children:"Driver Record"}),Object(C.jsx)("th",{children:"Items Record"}),Object(C.jsx)("th",{children:"Total Record"})]})}),Object(C.jsx)("tbody",{children:e.records.length?D.map((function(A){var r=e.records.filter((function(e){return e.driver===A&&"desync"!==e.result})),t=r.filter((function(e){return"win"===e.result})),c=e.records.filter((function(e){return e.items===A&&"desync"!==e.result})),n=c.filter((function(e){return"win"===e.result}));return Object(C.jsxs)("tr",{children:[Object(C.jsx)("td",{className:"clickable",onClick:function(){return e.history.push("/players/"+A)},children:A}),Object(C.jsx)("td",{children:Object(C.jsx)(Q,{numerator:t.length,denominator:r.length})}),Object(C.jsx)("td",{children:Object(C.jsx)(Q,{numerator:n.length,denominator:c.length})}),Object(C.jsx)("td",{children:Object(C.jsx)(Q,{numerator:t.length+n.length,denominator:r.length+c.length})})]},A)})):null})]})]}),Object(C.jsxs)(o.a,{children:[Object(C.jsx)("h3",{children:"Leaderboard"}),Object(C.jsxs)(O.a,{children:[Object(C.jsx)("thead",{children:Object(C.jsxs)("tr",{children:[Object(C.jsx)("th",{}),Object(C.jsx)("th",{children:"Driver"}),Object(C.jsx)("th",{children:"Items"}),Object(C.jsx)("th",{children:"Kart"}),Object(C.jsx)("th",{children:"Time"}),Object(C.jsx)("th",{children:"Link"})]})}),Object(C.jsx)("tbody",{children:e.records.length?e.records.slice(0).sort(x("time")).slice(0,5).map((function(e,A){return Object(C.jsxs)("tr",{children:[Object(C.jsx)("td",{children:A+1}),Object(C.jsx)("td",{children:e.driver}),Object(C.jsx)("td",{children:e.items}),Object(C.jsx)("td",{children:Object(C.jsx)(G,{kart:e.kart})}),Object(C.jsx)("td",{children:e.time}),Object(C.jsx)("td",{children:Object(C.jsxs)("a",{href:e.link,children:["ep. ",e.runback]})})]},A)})):null})]})]})]}),Object(C.jsx)(m.a,{variant:"pills",className:"justify-content-center",children:Object.keys(v).map((function(r){return Object(C.jsxs)(I.a,{eventKey:r,title:Object(C.jsx)("img",{src:A[r.split(" ")[0]],alt:r}),children:[Object(C.jsx)("hr",{}),Object(C.jsx)(l.a,{children:v[r].map((function(A){return Object(C.jsx)(o.a,{md:6,children:Object(C.jsx)(L,{track:A,data:e.records})},A)}))})]},r)}))})]})},S=r(50);var X=Object(g.o)((function(e){var A=Object(g.m)().player,r=Object(t.useState)("0"),c=Object(s.a)(r,2),n=c[0],i=c[1],a=0===parseInt(n)?e.records:e.records.filter((function(e){return e.season===n})),j=a.filter((function(e){return e.driver===A&&"desync"!==e.result})),d=j.reduce((function(e,A){return e+("win"===A.result?1:0)}),0),O=a.filter((function(e){return e.items===A&&"desync"!==e.result})),b=O.reduce((function(e,A){return e+("win"===A.result?1:0)}),0),x={},u=0,D=0,f=0,m=0;return a.length&&Object.values(v).flat().forEach((function(r){for(var t=0,c=0,n=0,i=0,s={},j=0;j<a.length/2;j++)"desync"!==a[2*j][r]&&(a[2*j].driver===A?(n++,(void 0===s[r]||a[2*j][r]<s[r])&&(s=a[2*j]),a[2*j][r]<a[2*j+1][r]&&t++):a[2*j].items===A?(i++,a[2*j][r]<a[2*j+1][r]&&c++):a[2*j+1].driver===A?(n++,(void 0===s[r]||a[2*j+1][r]<s[r])&&(s=a[2*j+1]),a[2*j][r]>a[2*j+1][r]&&t++):a[2*j+1].items===A&&(i++,a[2*j][r]>a[2*j+1][r]&&c++));var d=e.records.map((function(e){return e[r]})).reduce((function(e,A){return A<e?A:e})),g=w(s[r],d);x[r]={driverWins:t,itemWins:c,driverGames:n,itemGames:i,fastestDriver:s,difference:g},u+=n,D+=i,f+=t,m+=c})),Object(C.jsxs)(h.a,{children:[Object(C.jsx)("h3",{children:A}),Object(C.jsxs)("select",{value:n,onChange:function(e){return i(e.target.value)},children:[Object(C.jsx)("option",{value:0,children:"All Seasons"}),Object(S.a)(new Set(e.records.map((function(e){return e.season})))).map((function(e){return Object(C.jsxs)("option",{value:e,children:["Season ",e]},e)}))]}),Object(C.jsxs)(l.a,{children:[Object(C.jsxs)(o.a,{md:4,children:["Runback Stats",Object(C.jsx)(E.a,{children:Object(C.jsxs)("table",{children:[Object(C.jsx)("thead",{children:Object(C.jsxs)("tr",{children:[Object(C.jsx)("th",{children:"Driver"}),Object(C.jsx)("th",{children:"Items"}),Object(C.jsx)("th",{children:"Overall"})]})}),Object(C.jsx)("tbody",{children:Object(C.jsxs)("tr",{children:[Object(C.jsx)("td",{children:Object(C.jsx)(Q,{numerator:d,denominator:j.length})}),Object(C.jsx)("td",{children:Object(C.jsx)(Q,{numerator:b,denominator:O.length})}),Object(C.jsx)("td",{children:Object(C.jsx)(Q,{numerator:d+b,denominator:j.length+O.length})})]})})]})})]}),Object(C.jsxs)(o.a,{md:8,children:["Track Stats",Object(C.jsx)(E.a,{children:Object(C.jsxs)("table",{children:[Object(C.jsx)("thead",{children:Object(C.jsxs)("tr",{children:[Object(C.jsx)("th",{children:"Track"}),Object(C.jsx)("th",{children:"Fastest Time"}),Object(C.jsx)("th",{children:"vs. Record"}),Object(C.jsx)("th",{children:"Winrate (Driver)"}),Object(C.jsx)("th",{children:"Winrate (Items)"}),Object(C.jsx)("th",{children:"Overall"})]})}),Object(C.jsxs)("tbody",{children:[a.length?Object.values(v).flat().map((function(A){return Object(C.jsxs)("tr",{children:[Object(C.jsx)("td",{className:"clickable",onClick:function(){return e.history.push("/tracks/"+A)},children:A}),Object(C.jsx)("td",{className:0===x[A].difference?"fw-bold":null,children:x[A].fastestDriver[A]}),Object(C.jsx)("td",{children:0===x[A].difference?"-":"+"+x[A].difference.toFixed(3)}),Object(C.jsxs)("td",{children:[x[A].driverWins,"/",x[A].driverGames]}),Object(C.jsxs)("td",{children:[x[A].itemWins,"/",x[A].itemGames]}),Object(C.jsxs)("td",{children:[((x[A].driverWins+x[A].itemWins)/(x[A].driverGames+x[A].itemGames)*100).toFixed(0),"%"]})]},A)})):null,Object(C.jsxs)("tr",{children:[Object(C.jsx)("td",{className:"fw-bold",children:"totals"}),Object(C.jsx)("td",{className:"fw-bold",children:B(Object.keys(x).map((function(e){return x[e].fastestDriver[e]})))}),Object(C.jsxs)("td",{className:"fw-bold",children:["+",Object.keys(x).map((function(e){return x[e].difference})).reduce((function(e,A){return e+A}),0).toFixed(3)]}),Object(C.jsxs)("td",{className:"fw-bold",children:[(f/u*100).toFixed(0),"%"]}),Object(C.jsxs)("td",{className:"fw-bold",children:[(m/D*100).toFixed(0),"%"]}),Object(C.jsxs)("td",{className:"fw-bold",children:[((f+m)/(u+D)*100).toFixed(0),"%"]})]})]})]})})]})]})]})}));var N=function(e){return Object(C.jsxs)(g.g,{children:[Object(C.jsx)(g.d,{path:"/tracks/:track",children:Object(C.jsx)(f,{records:e.records,stats:e.stats})}),Object(C.jsx)(g.d,{path:"/players/:player",children:Object(C.jsx)(X,{records:e.records})}),Object(C.jsx)(g.d,{path:"/",children:Object(C.jsx)(K,{records:e.records})})]})},U=r(77),J=r(49),T=r(22);var V=function(){return Object(C.jsx)(U.a,{bg:"light",expand:"lg",children:Object(C.jsxs)(h.a,{children:[Object(C.jsx)(U.a.Brand,{children:"Runbacks"}),Object(C.jsx)(U.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(C.jsx)(U.a.Collapse,{id:"basic-navbar-nav",children:Object(C.jsxs)(J.a,{className:"me-auto",children:[Object(C.jsx)(T.LinkContainer,{to:"/",children:Object(C.jsx)(J.a.Link,{children:"Home"})}),Object(C.jsx)(T.LinkContainer,{to:"/players/Ben",children:Object(C.jsx)(J.a.Link,{children:"Ben"})}),Object(C.jsx)(T.LinkContainer,{to:"/players/Chris",children:Object(C.jsx)(J.a.Link,{children:"Chris"})}),Object(C.jsx)(T.LinkContainer,{to:"/players/Derek",children:Object(C.jsx)(J.a.Link,{children:"Derek"})}),Object(C.jsx)(T.LinkContainer,{to:"/players/Ryan",children:Object(C.jsx)(J.a.Link,{children:"Ryan"})})]})})]})})};var W=function(){var e=Object(t.useState)([]),A=Object(s.a)(e,2),r=A[0],c=A[1];Object(t.useEffect)((function(){j.a.parse(d,{download:!0,header:!0,complete:function(e){c(e.data)}})}),[]);var n={};return D.forEach((function(e){n[e]={}})),r.length&&Object.values(v).flat().forEach((function(e){D.forEach((function(A){n[A][e]={driverWins:0,itemWins:0,driverGames:0,itemGames:0,fastestDriver:{}}}));for(var A=0;A<r.length/2;A++)if("desync"!==r[2*A][e]){n[r[2*A].driver].driverTracks++,n[r[2*A].items].itemTracks++,n[r[2*A+1].driver].driverTracks++,n[r[2*A+1].items].itemTracks++,n[r[2*A].driver][e].driverGames++,n[r[2*A].items][e].itemGames++,n[r[2*A+1].driver][e].driverGames++,n[r[2*A+1].items][e].itemGames++;var t=r[2*A][e]<r[2*A+1][e]?2*A:2*A+1;n[r[t].driver][e].driverWins++,n[r[t].items][e].itemWins++,n[r[t].driver].driverTrackWins++,n[r[t].items].itemTrackWins++,(void 0===n[r[2*A].driver][e].fastestDriver[e]||r[2*A][e]<n[r[2*A].driver][e].fastestDriver[e])&&(n[r[2*A].driver][e].fastestDriver=r[2*A]),(void 0===n[r[2*A+1].driver][e].fastestDriver[e]||r[2*A+1][e]<n[r[2*A+1].driver][e].fastestDriver[e])&&(n[r[2*A+1].driver][e].fastestDriver=r[2*A+1])}var c=r.map((function(A){return A[e]})).reduce((function(e,A){return A<e?A:e}));D.forEach((function(A){var r=w(n[A][e].fastestDriver[e],c);r=0===r?"-":"+"+r.toFixed(3),n[A][e].difference=r}))})),Object(C.jsxs)("div",{className:"App",children:[Object(C.jsx)(V,{}),Object(C.jsx)(N,{records:r,stats:n})]})},z=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,80)).then((function(A){var r=A.getCLS,t=A.getFID,c=A.getFCP,n=A.getLCP,i=A.getTTFB;r(e),t(e),c(e),n(e),i(e)}))},Z=r(18);i.a.render(Object(C.jsx)(c.a.StrictMode,{children:Object(C.jsx)(Z.BrowserRouter,{children:Object(C.jsx)(W,{})})}),document.getElementById("root")),z()}},[[70,1,2]]]);
//# sourceMappingURL=main.be8954bd.chunk.js.map