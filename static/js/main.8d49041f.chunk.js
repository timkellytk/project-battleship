(this["webpackJsonpproject-battleship"]=this["webpackJsonpproject-battleship"]||[]).push([[0],{163:function(e,t,n){e.exports=n(299)},168:function(e,t,n){},298:function(e,t,n){},299:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(14),i=n.n(o),c=(n(168),n(49)),l=n(35),u=n(160),s=n(308),m=n(309),h=n(303),p=n(306),d=n(76),f=n(311),g=n(312),v=n(305),b=n(302),E=n(304),S=n(310),w=n(36);function y(){var e=Object(l.a)(["\n  position: ",";\n  cursor: pointer;\n  z-index: 100;\n  left: 0%;\n  top: 0%;\n  right: 0%;\n  bottom: 0%;\n  width: ",";\n  height: ",";\n  border: 1px solid hsla(224, 100%, 63.84%, 1);\n  background-color: ",";\n"]);return y=function(){return e},e}var k=w.a.div(y(),[function(e){return e.showcase?"relative":"absolute"}],(function(e){return e.orientation?.95*e.length*34+"px":"34px"}),(function(e){return e.orientation?"34px":.95*e.length*34+"px"}),(function(e){return e.sunk?"#db4c3f":!e.startGame&&e.isCurrentShip?"hsla(280, 100%, 66.74%, 0.60)":"hsla(228, 100%, 66.74%, 0.22)"})),j=function(e){return a.a.createElement(k,Object.assign({},e,{onClick:e.setCurrentShip}))},O=v.a.Option,C=h.a.Title,G=function(e){var t,n,r,o;return e.currentShip&&(t=e.currentShip.startCoordinate.col,n=e.currentShip.startCoordinate.row,r=e.currentShip.length,o=e.currentShip.orientation),a.a.createElement(b.a,null,a.a.createElement(m.b,{direction:"vertical"},a.a.createElement(C,{level:5},"Click on a ship to change the starting coordinate"),a.a.createElement(E.a,{layout:"inline"},a.a.createElement(E.a.Item,{label:"Ship"},a.a.createElement(j,{length:r,orientation:o,showcase:!0})),a.a.createElement(E.a.Item,{label:"Column"},a.a.createElement(v.a,{value:t,style:{width:60},onChange:function(t){return e.moveShip(n,t)}},a.a.createElement(O,{value:0},"A"),a.a.createElement(O,{value:1},"B"),a.a.createElement(O,{value:2},"C"),a.a.createElement(O,{value:3},"D"),a.a.createElement(O,{value:4},"E"),a.a.createElement(O,{value:5},"F"),a.a.createElement(O,{value:6},"G"),a.a.createElement(O,{value:7},"H"),a.a.createElement(O,{value:8},"I"),a.a.createElement(O,{value:9},"J"))),a.a.createElement(E.a.Item,{label:"Row"},a.a.createElement(v.a,{value:n,style:{width:60},onChange:function(n){return e.moveShip(n,t)}},a.a.createElement(O,{value:0},"1"),a.a.createElement(O,{value:1},"2"),a.a.createElement(O,{value:2},"3"),a.a.createElement(O,{value:3},"4"),a.a.createElement(O,{value:4},"5"),a.a.createElement(O,{value:5},"6"),a.a.createElement(O,{value:6},"7"),a.a.createElement(O,{value:7},"8"),a.a.createElement(O,{value:8},"9"),a.a.createElement(O,{value:9},"10"))),a.a.createElement(E.a.Item,{label:"Horizontal"},a.a.createElement(S.a,{checked:o,onChange:e.toggleShip})))))},x=h.a.Title,I=function(e){var t=e.ships.map((function(e){return a.a.createElement(j,{length:e.length,sunk:e.isSunk(),showcase:!0})}));return a.a.createElement("div",null,a.a.createElement(x,{level:5},"Enemy Ships"),a.a.createElement(m.b,null,t))},z=h.a.Title,T=function(e){var t=a.a.createElement(m.b,null,a.a.createElement(p.a,{type:"primary",size:"large",onClick:e.setStartGame},"Play Game"),a.a.createElement(p.a,{type:"ghost",size:"large",onClick:e.randomiseShips},"Randomise Ships")),n=a.a.createElement(p.a,{type:"primary",size:"large",onClick:function(){return e.playAgain()}},"Restart"),r=a.a.createElement(m.b,null,a.a.createElement(f.a,{style:{fontSize:"1.6em",marginBottom:"6px"}}),a.a.createElement(z,{level:5},"You win!")),o=a.a.createElement(m.b,null,a.a.createElement(g.a,{style:{fontSize:"1.6em",marginBottom:"6px"}}),a.a.createElement(z,{level:5},"You lost"));return a.a.createElement(d.a,{justify:"center"},a.a.createElement(m.b,{direction:"vertical",size:"large",align:"center"},a.a.createElement(z,{level:1},"Battleship"),"player"===e.winner?r:null,"computer"===e.winner?o:null,e.startGame?a.a.createElement(I,{ships:e.ships}):a.a.createElement(G,{currentShip:e.currentShip,toggleShip:e.toggleShip,moveShip:e.moveShip}),e.startGame?n:t))};function M(){var e=Object(l.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 12px;\n"]);return M=function(){return e},e}function A(){var e=Object(l.a)(["\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-column: 2;\n"]);return A=function(){return e},e}function H(){var e=Object(l.a)(["\n  display: grid;\n  grid-template-rows: repeat(10, 1fr);\n  grid-column: 1;\n  grid-row: 2;\n"]);return H=function(){return e},e}function D(){var e=Object(l.a)(["\n  display: grid;\n  width: ","px;\n  grid-template: ","px 1fr / ","px 1fr;\n  opacity: ",";\n"]);return D=function(){return e},e}var B=w.a.div(D(),340,34,34,(function(e){return e.startGame?"100%":"50%"})),K=w.a.div(H()),N=w.a.div(A()),U=w.a.div(M()),q=function(e){return a.a.createElement(B,{startGame:e.startGame},a.a.createElement(N,null,a.a.createElement(U,null,"A"),a.a.createElement(U,null,"B"),a.a.createElement(U,null,"C"),a.a.createElement(U,null,"D"),a.a.createElement(U,null,"E"),a.a.createElement(U,null,"F"),a.a.createElement(U,null,"G"),a.a.createElement(U,null,"H"),a.a.createElement(U,null,"I"),a.a.createElement(U,null,"J")),a.a.createElement(K,null,a.a.createElement(U,null,"1"),a.a.createElement(U,null,"2"),a.a.createElement(U,null,"3"),a.a.createElement(U,null,"4"),a.a.createElement(U,null,"5"),a.a.createElement(U,null,"6"),a.a.createElement(U,null,"7"),a.a.createElement(U,null,"8"),a.a.createElement(U,null,"9"),a.a.createElement(U,null,"10")),e.children)};function J(){var e=Object(l.a)(["\n  margin-bottom: 0.6em;\n"]);return J=function(){return e},e}function F(){var e=Object(l.a)(["\n  font-size: ","px;\n  line-height: 0px;\n  color: indianred;\n  cursor: default;\n  background-color: ",";\n"]);return F=function(){return e},e}function P(){var e=Object(l.a)(["\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: ","px;\n  width: ","px;\n  background-color: ",";\n  :hover {\n    border: ",";\n    background-color: ",";\n    cursor: ",";\n  }\n"]);return P=function(){return e},e}var R=w.a.div(P(),32,32,"black",(function(e){return e.startGame&&e.computer?"2px solid green;":null}),(function(e){return e.startGame&&e.computer?"rgba(51, 170, 51, 0.2)":null}),(function(e){return e.startGame&&e.computer?"pointer":null})),W=Object(w.a)(R)(F(),34,(function(e){return e.sunk?"indianred":"rgb(211, 211, 211, 0.02)"})),Y=w.a.div(J()),X=function(e){var t=a.a.createElement(R,{computer:e.computer,onClick:e.startGame?e.clicked:null,startGame:e.startGame},e.children);return"MISS"===e.hit&&(t=a.a.createElement(W,null,a.a.createElement(Y,null,".",e.children))),"HIT"===e.hit&&(t=a.a.createElement(W,null,"X",e.children)),"SUNK"===e.hit&&(t=a.a.createElement(W,{sunk:!0},e.children)),t},$=n(307);function _(){var e=Object(l.a)(["\n  position: relative;\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n  grid-gap: 1px;\n  background-color: ",";\n  border: 1px solid ",";\n"]);return _=function(){return e},e}var L=w.a.div(_(),"#303030","#303030"),Q=function(e){var t=e.gameboard.map((function(t,n){return t.map((function(t,r){var o,i,c=a.a.createElement(X,{hit:t,key:Object($.a)(),computer:e.computer,startGame:e.startGame,clicked:e.computer&&!1===e.winner?function(){return e.handleClick(n,r)}:null}),l=!1;return e.ships&&(l=e.ships.find((function(e){return e.startCoordinate.row===n&&e.startCoordinate.col===r})))&&(o=e.ships.findIndex((function(e){return e.startCoordinate.row===n&&e.startCoordinate.col===r})),i=a.a.createElement(X,{key:Object($.a)(),hit:t,startGame:e.startGame},a.a.createElement(j,{orientation:l.orientation,length:l.length,coordinates:l.getCoordinates(),isCurrentShip:o===e.currentShipIndex,setCurrentShip:function(){return e.setCurrentShip(o)},startGame:e.startGame}))),l?i:c}))}));return a.a.createElement(L,null,t)},V=function(e){return a.a.createElement(d.a,{justify:"center"},a.a.createElement(m.b,{size:50,align:"center"},a.a.createElement(q,{startGame:!0},a.a.createElement(Q,{gameboard:e.player,ships:e.ships,currentShipIndex:e.currentShipIndex,setCurrentShip:e.setCurrentShip,startGame:e.startGame})),a.a.createElement(q,{startGame:e.startGame},a.a.createElement(Q,{gameboard:e.computer,handleClick:e.attackComputer,startGame:e.startGame,winner:e.winner,computer:!0}))))},Z=h.a.Paragraph,ee=s.a.Footer,te=function(){return a.a.createElement(ee,{style:{textAlign:"center"}},a.a.createElement(Z,null,"Created by"," ",a.a.createElement("a",{href:"https://github.com/timkellytk",target:"_blank",rel:"noopener noreferrer"},"Tim Kelly")," ","for The Odin Project"))},ne=n(56),re=n(57),ae=n(62),oe=function(){function e(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,a=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];Object(ne.a)(this,e),this.length=r,this.hitCount=0,this.startCoordinate={row:t,col:n},this.orientation=a}return Object(re.a)(e,[{key:"toggleOrientation",value:function(){this.orientation=!this.orientation}},{key:"getCoordinates",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.startCoordinate,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.orientation,n=e.row,r=e.col,a=Object(ae.a)(Array(this.length));return a.map((function(e,a){return t?{row:n,col:r+a}:{row:n+a,col:r}}))}},{key:"hit",value:function(){this.hitCount+=1}},{key:"isSunk",value:function(){return this.length===this.hitCount}}]),e}(),ie=function(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1))+e},ce=function(e,t){return e>=0&&e<=9&&t>=0&&t<=9},le=function(e){return e.every((function(e){var t=e.row,n=e.col;return t>=0&&t<=9&&n>=0&&n<=9}))},ue=function(e,t){return e.every((function(e){return!t.some((function(t){return t.getCoordinates().some((function(t){return me(e,t)}))}))}))},se=function(e){var t=e.row,n=e.col;return[{row:t-1,col:n-1},{row:t-1,col:n},{row:t-1,col:n+1},{row:t,col:n-1},{row:t,col:n},{row:t,col:n+1},{row:t+1,col:n-1},{row:t+1,col:n},{row:t+1,col:n+1}]},me=function(e,t){return se(e).some((function(e){var n=e.row,r=e.col;return n===t.row&&r===t.col}))},he=function(e,t){return e.filter((function(e,n){return n!==t}))},pe=function(){function e(){Object(ne.a)(this,e),this.board=Object(ae.a)(Array(10)).map((function(e){return Object(ae.a)(Array(10)).map((function(e){return""}))})),this.ships=[]}return Object(re.a)(e,[{key:"getGameboard",value:function(){return this.board}},{key:"getShips",value:function(){return this.ships}},{key:"placeShip",value:function(e){var t=e.getCoordinates();return!(!le(t)||!ue(t,this.ships))&&(this.ships.push(e),!0)}},{key:"intialiseShips",value:function(){var e=this;[{quantity:4,size:1},{quantity:3,size:2},{quantity:2,size:3},{quantity:1,size:4}].forEach((function(t){for(var n=t.quantity,r=t.size,a=0;a<n;){var o=new oe(ie(0,9),ie(0,9),r,Math.random()>=.5);e.placeShip(o)&&(a+=1)}}))}},{key:"randomiseShips",value:function(){this.ships=[],this.intialiseShips()}},{key:"moveShip",value:function(e,t,n){var r=this.ships[n],a={row:e,col:t},o=r.getCoordinates(a),i=he(this.ships,n);return!(!le(o)||!ue(o,i))&&(r.startCoordinate=a,!0)}},{key:"toggleShip",value:function(e){var t=this.ships[e],n=t.getCoordinates(t.startCoordinate,!t.orientation),r=he(this.ships,e);return!(!le(n)||!ue(n,r))&&(t.toggleOrientation(),!0)}},{key:"receiveAttack",value:function(e,t){var n,r,a=this,o=(n=this.ships,r={row:e,col:t},n.find((function(e){return e.getCoordinates().some((function(e){return e.row===r.row&&e.col===r.col}))})));return o?(o.hit(),o.isSunk()?(o.getCoordinates().forEach((function(e){!function(e,t,n){n[e][t]="SUNK",se({row:e,col:t}).forEach((function(e){var t=e.row,r=e.col;ce(t,r)&&"SUNK"!==n[t][r]&&"HIT"!==n[t][r]&&(n[t][r]="MISS")}))}(e.row,e.col,a.board)})),"SUNK"):(this.board[e][t]="HIT","HIT")):(this.board[e][t]="MISS","MISS")}},{key:"gameover",value:function(){return this.ships.every((function(e){return e.isSunk()}))}}]),e}(),de=function(){function e(){Object(ne.a)(this,e),this.gameboard=new pe}return Object(re.a)(e,[{key:"attack",value:function(e,t,n){return n.gameboard.receiveAttack(e,t)}}]),e}(),fe=n(161),ge=n(157),ve=function(e,t,n){return"MISS"!==n[e][t]&&"HIT"!==n[e][t]},be=function(e){var t=e.row,n=e.col;return[{row:t-1,col:n},{row:t,col:n-1},{row:t,col:n},{row:t,col:n+1},{row:t+1,col:n}]},Ee=function(e){return Se.length>0?function(e,t){for(var n=0;n<e.length;n++){var r=be(e[n]);if(r.some((function(e){var n=e.row,r=e.col;return ce(n,r)&&ve(n,r,t)}))){var a=r.filter((function(e){var n=e.row,r=e.col;return ce(n,r)&&ve(n,r,t)})),o=a[ie(0,a.length-1)];return{row:o.row,col:o.col}}}}(Se,e.board):function(e){var t=e.board.reduce((function(t,n,r){var a=n.map((function(e,t){return{row:r,col:t}})).filter((function(t){return""===e.board[t.row][t.col]}));return[].concat(Object(ae.a)(t),Object(ae.a)(a))}),[]),n=t[ie(0,t.length-1)];return{row:n.row,col:n.col}}(e)},Se=[],we=function(e){Object(fe.a)(n,e);var t=Object(ge.a)(n);function n(){return Object(ne.a)(this,n),t.apply(this,arguments)}return Object(re.a)(n,[{key:"attack",value:function(e){var t=Ee(e.gameboard),n=t.row,r=t.col,a=e.gameboard.receiveAttack(n,r);return"HIT"===a&&Se.unshift({row:n,col:r}),"SUNK"===a&&(Se=[]),a}}]),n}(de);function ye(){var e=Object(l.a)(["\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 60px;\n"]);return ye=function(){return e},e}var ke,je,Oe=n(297),Ce=w.a.div(ye()),Ge=function(){var e=Object(r.useState)([]),t=Object(c.a)(e,2),n=t[0],o=t[1],i=Object(r.useState)([]),l=Object(c.a)(i,2),h=l[0],p=l[1],d=Object(r.useState)([]),f=Object(c.a)(d,2),g=f[0],v=f[1],b=Object(r.useState)(null),E=Object(c.a)(b,2),S=E[0],w=E[1],y=Object(r.useState)(null),k=Object(c.a)(y,2),j=k[0],O=k[1],C=Object(r.useState)([]),G=Object(c.a)(C,2),x=G[0],I=G[1],z=Object(r.useState)(!1),M=Object(c.a)(z,2),A=M[0],H=M[1],D=Object(r.useState)(!0),B=Object(c.a)(D,2),K=B[0],N=B[1],U=Object(r.useState)(!1),q=Object(c.a)(U,2),J=q[0],F=q[1],P=function(){(ke=new de).gameboard.intialiseShips(),o(ke.gameboard.getGameboard()),p(ke.gameboard.getShips()),w(ke.gameboard.getShips()[0]),O(0),(je=new we).gameboard.intialiseShips(),I(je.gameboard.getGameboard()),v(je.gameboard.getShips()),H(!1),N(!0),F(!1)},R=function(e){var t=ke.gameboard.getShips()[e];w(t),O(e)},W=function e(){var t=je.attack(ke),n=Oe.cloneDeep(ke.gameboard.getGameboard());if(o(n),"MISS"!==t)return ke.gameboard.gameover()?F("computer"):e();N(!0)};return Object(r.useEffect)((function(){P()}),[]),a.a.createElement(s.a,null,a.a.createElement(Ce,null,a.a.createElement(m.b,{direction:"vertical",size:"large",align:"center"},a.a.createElement(T,{startGame:A,playerTurn:K,winner:J,currentShip:S,ships:g,toggleShip:function(){return ke.gameboard.toggleShip(j)?(p(Oe.cloneDeep(ke.gameboard.getShips())),R(j),!0):(u.b.warning("Ships need to be surrounded by empty cells"),!1)},moveShip:function(e,t){return ke.gameboard.moveShip(e,t,j)?(p(Oe.cloneDeep(ke.gameboard.getShips())),R(j),!0):(u.b.warning("Ships need to be surrounded by empty cells"),!1)},setStartGame:function(){H(!0)},randomiseShips:function(){ke.gameboard.randomiseShips();var e=Oe.cloneDeep(ke.gameboard.getShips());p(e),w(ke.gameboard.getShips()[0]),O(0)},playAgain:P}),a.a.createElement(V,{startGame:A,player:n,ships:h,currentShipIndex:j,computer:x,setCurrentShip:R,attackComputer:function(e,t){var n=ke.attack(e,t,je),r=Oe.cloneDeep(je.gameboard.getGameboard()),a=Oe.cloneDeep(je.gameboard.getShips());if(I(r),v(a),"HIT"===n||"SUNK"===n)return je.gameboard.gameover()?F("player"):void 0;N(!1),W()},winner:J}),a.a.createElement(te,null))))},xe=(n(298),function(){return a.a.createElement(Ge,null)});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(xe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[163,1,2]]]);
//# sourceMappingURL=main.8d49041f.chunk.js.map