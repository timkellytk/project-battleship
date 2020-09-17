(this["webpackJsonpproject-battleship"]=this["webpackJsonpproject-battleship"]||[]).push([[0],{163:function(e,t,n){e.exports=n(299)},168:function(e,t,n){},298:function(e,t,n){},299:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(14),o=n.n(i),l=(n(168),n(53)),c=n(35),u=n(160),s=n(308),m=n(309),h=n(303),p=n(306),d=n(76),f=n(311),g=n(312),v=n(305),b=n(302),E=n(304),S=n(310),w=n(36);function y(){var e=Object(c.a)(["\n  position: ",";\n  cursor: pointer;\n  z-index: 100;\n  left: 0%;\n  top: 0%;\n  right: 0%;\n  bottom: 0%;\n  width: ",";\n  height: ",";\n  border: 1px solid hsla(224, 100%, 63.84%, 1);\n  background-color: ",";\n"]);return y=function(){return e},e}var k=w.a.div(y(),[function(e){return e.showcase?"relative":"absolute"}],(function(e){return e.orientation?.95*e.length*34+"px":"34px"}),(function(e){return e.orientation?"34px":.95*e.length*34+"px"}),(function(e){return!e.startGame&&e.isCurrentShip?"hsla(280, 100%, 66.74%, 0.60)":"hsla(228, 100%, 66.74%, 0.22)"})),j=function(e){return a.a.createElement(k,Object.assign({},e,{onClick:e.setCurrentShip}))},O=v.a.Option,C=h.a.Title,G=function(e){var t,n,r,i;return e.currentShip&&(t=e.currentShip.startCoordinate.col,n=e.currentShip.startCoordinate.row,r=e.currentShip.length,i=e.currentShip.orientation),a.a.createElement(b.a,null,a.a.createElement(m.b,{direction:"vertical"},a.a.createElement(C,{level:5},"Click on a ship to change the starting coordinate"),a.a.createElement(E.a,{layout:"inline"},a.a.createElement(E.a.Item,{label:"Ship"},a.a.createElement(j,{length:r,orientation:i,showcase:!0})),a.a.createElement(E.a.Item,{label:"Column"},a.a.createElement(v.a,{value:t,style:{width:60},onChange:function(t){return e.moveShip(n,t)}},a.a.createElement(O,{value:0},"A"),a.a.createElement(O,{value:1},"B"),a.a.createElement(O,{value:2},"C"),a.a.createElement(O,{value:3},"D"),a.a.createElement(O,{value:4},"E"),a.a.createElement(O,{value:5},"F"),a.a.createElement(O,{value:6},"G"),a.a.createElement(O,{value:7},"H"),a.a.createElement(O,{value:8},"I"),a.a.createElement(O,{value:9},"J"))),a.a.createElement(E.a.Item,{label:"Row"},a.a.createElement(v.a,{value:n,style:{width:60},onChange:function(n){return e.moveShip(n,t)}},a.a.createElement(O,{value:0},"1"),a.a.createElement(O,{value:1},"2"),a.a.createElement(O,{value:2},"3"),a.a.createElement(O,{value:3},"4"),a.a.createElement(O,{value:4},"5"),a.a.createElement(O,{value:5},"6"),a.a.createElement(O,{value:6},"7"),a.a.createElement(O,{value:7},"8"),a.a.createElement(O,{value:8},"9"),a.a.createElement(O,{value:9},"10"))),a.a.createElement(E.a.Item,{label:"Horizontal"},a.a.createElement(S.a,{checked:i,onChange:e.toggleShip})))))},x=h.a.Title,I=function(e){var t=a.a.createElement(m.b,null,a.a.createElement(p.a,{type:"primary",size:"large",onClick:e.setStartGame},"Play Game"),a.a.createElement(p.a,{type:"default",size:"large",onClick:e.randomiseShips},"Randomise Ships")),n=a.a.createElement(p.a,{type:"primary",size:"large",onClick:function(){return e.playAgain()}},"Restart"),r=a.a.createElement(m.b,null,a.a.createElement(f.a,{style:{fontSize:"1.6em",marginBottom:"6px"}}),a.a.createElement(x,{level:5},"You win!")),i=a.a.createElement(m.b,null,a.a.createElement(g.a,{style:{fontSize:"1.6em",marginBottom:"6px"}}),a.a.createElement(x,{level:5},"You lost"));return a.a.createElement(d.a,{justify:"center"},a.a.createElement(m.b,{direction:"vertical",size:"large",align:"center"},a.a.createElement(x,{level:1},"Battleship"),"player"===e.winner?r:null,"computer"===e.winner?i:null,e.startGame?n:t,e.startGame?null:a.a.createElement(G,{currentShip:e.currentShip,toggleShip:e.toggleShip,moveShip:e.moveShip})))};function z(){var e=Object(c.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 12px;\n"]);return z=function(){return e},e}function M(){var e=Object(c.a)(["\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-column: 2;\n"]);return M=function(){return e},e}function A(){var e=Object(c.a)(["\n  display: grid;\n  grid-template-rows: repeat(10, 1fr);\n  grid-column: 1;\n  grid-row: 2;\n"]);return A=function(){return e},e}function T(){var e=Object(c.a)(["\n  display: grid;\n  width: ","px;\n  grid-template: ","px 1fr / ","px 1fr;\n  opacity: ",";\n"]);return T=function(){return e},e}var H=w.a.div(T(),340,34,34,(function(e){return e.startGame?"100%":"50%"})),B=w.a.div(A()),D=w.a.div(M()),K=w.a.div(z()),q=function(e){return a.a.createElement(H,{startGame:e.startGame},a.a.createElement(D,null,a.a.createElement(K,null,"A"),a.a.createElement(K,null,"B"),a.a.createElement(K,null,"C"),a.a.createElement(K,null,"D"),a.a.createElement(K,null,"E"),a.a.createElement(K,null,"F"),a.a.createElement(K,null,"G"),a.a.createElement(K,null,"H"),a.a.createElement(K,null,"I"),a.a.createElement(K,null,"J")),a.a.createElement(B,null,a.a.createElement(K,null,"1"),a.a.createElement(K,null,"2"),a.a.createElement(K,null,"3"),a.a.createElement(K,null,"4"),a.a.createElement(K,null,"5"),a.a.createElement(K,null,"6"),a.a.createElement(K,null,"7"),a.a.createElement(K,null,"8"),a.a.createElement(K,null,"9"),a.a.createElement(K,null,"10")),e.children)};function N(){var e=Object(c.a)(["\n  margin-bottom: 0.6em;\n"]);return N=function(){return e},e}function U(){var e=Object(c.a)(["\n  font-size: ","px;\n  line-height: 0px;\n  color: indianred;\n  cursor: default;\n  background-color: ",";\n"]);return U=function(){return e},e}function J(){var e=Object(c.a)(["\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: ","px;\n  width: ","px;\n  background-color: ",";\n  :hover {\n    border: ",";\n    background-color: ",";\n    cursor: ",";\n  }\n"]);return J=function(){return e},e}var F=w.a.div(J(),32,32,"black",(function(e){return e.startGame&&e.computer?"2px solid green;":null}),(function(e){return e.startGame&&e.computer?"rgba(51, 170, 51, 0.2)":null}),(function(e){return e.startGame&&e.computer?"pointer":null})),P=Object(w.a)(F)(U(),34,(function(e){return e.sunk?"indianred":"rgb(211, 211, 211, 0.02)"})),R=w.a.div(N()),W=function(e){var t=a.a.createElement(F,{computer:e.computer,onClick:e.startGame?e.clicked:null,startGame:e.startGame},e.children);return"MISS"===e.hit&&(t=a.a.createElement(P,null,a.a.createElement(R,null,".",e.children))),"HIT"===e.hit&&(t=a.a.createElement(P,null,"X",e.children)),"SUNK"===e.hit&&(t=a.a.createElement(P,{sunk:!0},e.children)),t},Y=n(307);function X(){var e=Object(c.a)(["\n  position: relative;\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n  grid-gap: 1px;\n  background-color: ",";\n  border: 1px solid ",";\n"]);return X=function(){return e},e}var $=w.a.div(X(),"#303030","#303030"),_=function(e){var t=e.gameboard.map((function(t,n){return t.map((function(t,r){var i,o,l=a.a.createElement(W,{hit:t,key:Object(Y.a)(),computer:e.computer,startGame:e.startGame,clicked:e.computer&&!1===e.winner?function(){return e.handleClick(n,r)}:null}),c=!1;return e.ships&&(c=e.ships.find((function(e){return e.startCoordinate.row===n&&e.startCoordinate.col===r})))&&(i=e.ships.findIndex((function(e){return e.startCoordinate.row===n&&e.startCoordinate.col===r})),o=a.a.createElement(W,{key:Object(Y.a)(),hit:t,startGame:e.startGame},a.a.createElement(j,{orientation:c.orientation,length:c.length,coordinates:c.getCoordinates(),isCurrentShip:i===e.currentShipIndex,setCurrentShip:function(){return e.setCurrentShip(i)},startGame:e.startGame}))),c?o:l}))}));return a.a.createElement($,null,t)},L=function(e){return a.a.createElement(d.a,{justify:"center"},a.a.createElement(m.b,{size:50,align:"center"},a.a.createElement(q,{startGame:!0},a.a.createElement(_,{gameboard:e.player,ships:e.ships,currentShipIndex:e.currentShipIndex,setCurrentShip:e.setCurrentShip,startGame:e.startGame})),a.a.createElement(q,{startGame:e.startGame},a.a.createElement(_,{gameboard:e.computer,handleClick:e.attackComputer,startGame:e.startGame,winner:e.winner,computer:!0}))))},Q=h.a.Paragraph,V=s.a.Footer,Z=function(){return a.a.createElement(V,{style:{textAlign:"center"}},a.a.createElement(Q,null,"Created by"," ",a.a.createElement("a",{href:"https://github.com/timkellytk",target:"_blank",rel:"noopener noreferrer"},"Tim Kelly")," ","for The Odin Project"))},ee=n(56),te=n(57),ne=n(62),re=function(){function e(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,a=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];Object(ee.a)(this,e),this.length=r,this.hitCount=0,this.startCoordinate={row:t,col:n},this.orientation=a}return Object(te.a)(e,[{key:"toggleOrientation",value:function(){this.orientation=!this.orientation}},{key:"getCoordinates",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.startCoordinate,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.orientation,n=e.row,r=e.col,a=Object(ne.a)(Array(this.length));return a.map((function(e,a){return t?{row:n,col:r+a}:{row:n+a,col:r}}))}},{key:"hit",value:function(){this.hitCount+=1}},{key:"isSunk",value:function(){return this.length===this.hitCount}}]),e}(),ae=function(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1))+e},ie=function(e){var t=e.row,n=e.col;return[{row:t-1,col:n-1},{row:t-1,col:n},{row:t-1,col:n+1},{row:t,col:n-1},{row:t,col:n},{row:t,col:n+1},{row:t+1,col:n-1},{row:t+1,col:n},{row:t+1,col:n+1}]},oe=function(e,t){return e>=0&&e<=9&&t>=0&&t<=9},le=function(e){return e.every((function(e){var t=e.row,n=e.col;return t>=0&&t<=9&&n>=0&&n<=9}))},ce=function(e,t){return e.every((function(e){return!t.some((function(t){return t.getCoordinates().some((function(t){return ue(e,t)}))}))}))},ue=function(e,t){return ie(e).some((function(e){var n=e.row,r=e.col;return n===t.row&&r===t.col}))},se=function(e,t){return e.filter((function(e,n){return n!==t}))},me=function(){function e(){Object(ee.a)(this,e),this.board=Object(ne.a)(Array(10)).map((function(e){return Object(ne.a)(Array(10)).map((function(e){return""}))})),this.ships=[]}return Object(te.a)(e,[{key:"getGameboard",value:function(){return this.board}},{key:"getShips",value:function(){return this.ships}},{key:"placeShip",value:function(e){var t=e.getCoordinates();return!(!le(t)||!ce(t,this.ships))&&(this.ships.push(e),!0)}},{key:"intialiseShips",value:function(){var e=this;[{quantity:4,size:1},{quantity:3,size:2},{quantity:2,size:3},{quantity:1,size:4}].forEach((function(t){for(var n=t.quantity,r=t.size,a=0;a<n;){var i=new re(ae(0,9),ae(0,9),r,Math.random()>=.5);e.placeShip(i)&&(a+=1)}}))}},{key:"randomiseShips",value:function(){this.ships=[],this.intialiseShips()}},{key:"moveShip",value:function(e,t,n){var r=this.ships[n],a={row:e,col:t},i=r.getCoordinates(a),o=se(this.ships,n);return!(!le(i)||!ce(i,o))&&(r.startCoordinate=a,!0)}},{key:"toggleShip",value:function(e){var t=this.ships[e],n=t.getCoordinates(t.startCoordinate,!t.orientation),r=se(this.ships,e);return!(!le(n)||!ce(n,r))&&(t.toggleOrientation(),!0)}},{key:"receiveAttack",value:function(e,t){var n,r,a=this,i=(n=this.ships,r={row:e,col:t},n.find((function(e){return e.getCoordinates().some((function(e){return e.row===r.row&&e.col===r.col}))})));return i?(i.hit(),i.isSunk()?(i.getCoordinates().forEach((function(e){!function(e,t,n){n[e][t]="SUNK",ie({row:e,col:t}).forEach((function(e){var t=e.row,r=e.col;oe(t,r)&&"SUNK"!==n[t][r]&&"HIT"!==n[t][r]&&(n[t][r]="MISS")}))}(e.row,e.col,a.board)})),"SUNK"):(this.board[e][t]="HIT","HIT")):(this.board[e][t]="MISS","MISS")}},{key:"gameover",value:function(){return this.ships.every((function(e){return e.isSunk()}))}}]),e}(),he=function(){function e(){Object(ee.a)(this,e),this.gameboard=new me}return Object(te.a)(e,[{key:"attack",value:function(e,t,n){return n.gameboard.receiveAttack(e,t)}}]),e}(),pe=n(161),de=n(157),fe=function(e,t,n){return"MISS"!==n[e][t]&&"HIT"!==n[e][t]},ge=function(e){return ve.length>0?function(e,t){for(var n=0;n<e.length;n++){var r=ie(e[n]);if(r.some((function(e){var n=e.row,r=e.col;return oe(n,r)&&fe(n,r,t)}))){var a=r.filter((function(e){var n=e.row,r=e.col;return oe(n,r)&&fe(n,r,t)})),i=a[ae(0,a.length-1)];return{row:i.row,col:i.col}}}}(ve,e.board):function(e){var t=e.board.reduce((function(t,n,r){var a=n.map((function(e,t){return{row:r,col:t}})).filter((function(t){return""===e.board[t.row][t.col]}));return[].concat(Object(ne.a)(t),Object(ne.a)(a))}),[]),n=t[ae(0,t.length-1)];return{row:n.row,col:n.col}}(e)},ve=[],be=function(e){Object(pe.a)(n,e);var t=Object(de.a)(n);function n(){return Object(ee.a)(this,n),t.apply(this,arguments)}return Object(te.a)(n,[{key:"attack",value:function(e){var t=ge(e.gameboard),n=t.row,r=t.col,a=e.gameboard.receiveAttack(n,r);return"HIT"===a&&ve.push({row:n,col:r}),"SUNK"===a&&(ve=[]),a}}]),n}(he);function Ee(){var e=Object(c.a)(["\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 60px;\n"]);return Ee=function(){return e},e}var Se,we,ye=n(297),ke=w.a.div(Ee()),je=function(){var e=Object(r.useState)([]),t=Object(l.a)(e,2),n=t[0],i=t[1],o=Object(r.useState)([]),c=Object(l.a)(o,2),h=c[0],p=c[1],d=Object(r.useState)(null),f=Object(l.a)(d,2),g=f[0],v=f[1],b=Object(r.useState)(null),E=Object(l.a)(b,2),S=E[0],w=E[1],y=Object(r.useState)([]),k=Object(l.a)(y,2),j=k[0],O=k[1],C=Object(r.useState)(!1),G=Object(l.a)(C,2),x=G[0],z=G[1],M=Object(r.useState)(!0),A=Object(l.a)(M,2),T=A[0],H=A[1],B=Object(r.useState)(!1),D=Object(l.a)(B,2),K=D[0],q=D[1],N=function(){(Se=new he).gameboard.intialiseShips(),i(Se.gameboard.getGameboard()),p(Se.gameboard.getShips()),v(Se.gameboard.getShips()[0]),w(0),(we=new be).gameboard.intialiseShips(),O(we.gameboard.getGameboard()),z(!1),H(!0),q(!1)},U=function(e){var t=Se.gameboard.getShips()[e];v(t),w(e)},J=function e(){var t=we.attack(Se),n=ye.cloneDeep(Se.gameboard.getGameboard());if(i(n),"MISS"!==t)return Se.gameboard.gameover()?q("computer"):e();H(!0)};return Object(r.useEffect)((function(){N()}),[]),a.a.createElement(s.a,null,a.a.createElement(ke,null,a.a.createElement(m.b,{direction:"vertical",size:"large",align:"center"},a.a.createElement(I,{startGame:x,playerTurn:T,winner:K,currentShip:g,toggleShip:function(){return Se.gameboard.toggleShip(S)?(p(ye.cloneDeep(Se.gameboard.getShips())),U(S),!0):(u.b.warning("Ships need to be surrounded by empty cells"),!1)},moveShip:function(e,t){return Se.gameboard.moveShip(e,t,S)?(p(ye.cloneDeep(Se.gameboard.getShips())),U(S),!0):(u.b.warning("Ships need to be surrounded by empty cells"),!1)},setStartGame:function(){z(!0)},randomiseShips:function(){Se.gameboard.randomiseShips();var e=ye.cloneDeep(Se.gameboard.getShips());p(e),v(Se.gameboard.getShips()[0]),w(0)},playAgain:N}),a.a.createElement(L,{startGame:x,player:n,ships:h,currentShipIndex:S,computer:j,setCurrentShip:U,attackComputer:function(e,t){Se.attack(e,t,we);var n=ye.cloneDeep(we.gameboard.getGameboard());if(O(n),we.gameboard.gameover())return q("player");H(!1),J()},winner:K}),a.a.createElement(Z,null))))},Oe=(n(298),function(){return a.a.createElement(je,null)});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(Oe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[163,1,2]]]);
//# sourceMappingURL=main.9044ff50.chunk.js.map