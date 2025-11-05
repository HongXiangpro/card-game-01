System.register("chunks:///_virtual/CardGame.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(r){var e,t,a,i,n,o,l,c,u,s;return{setters:[function(r){e=r.applyDecoratedDescriptor,t=r.inheritsLoose,a=r.initializerDefineProperty,i=r.assertThisInitialized},function(r){n=r.cclegacy,o=r._decorator,l=r.Sprite,c=r.Label,u=r.SpriteFrame,s=r.Component}],execute:function(){var p,d,m,f,h,b,y,C,g,F,v,L,w;n._RF.push({},"0782dd7UdtD86acCyhy3T/2","CardGame",void 0);var z=o.ccclass,G=o.property;r("CardGame",(p=z("CardGame"),d=G(l),m=G(l),f=G(c),h=G(u),b=G([u]),p((g=e((C=function(r){function e(){for(var e,t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];return e=r.call.apply(r,[this].concat(n))||this,a(e,"playerCard",g,i(e)),a(e,"computerCard",F,i(e)),a(e,"resultLabel",v,i(e)),a(e,"cardBack",L,i(e)),a(e,"cardFronts",w,i(e)),e}t(e,r);var n=e.prototype;return n.onLoad=function(){this.resetGame()},n.resetGame=function(){this.playerCard.spriteFrame=this.cardBack,this.computerCard.spriteFrame=this.cardBack,this.resultLabel.string="点击抽牌开始游戏！"},n.onDrawCard=function(){var r=Math.floor(13*Math.random()),e=Math.floor(13*Math.random());this.playerCard.spriteFrame=this.cardFronts[r],this.computerCard.spriteFrame=this.cardFronts[e],this.resultLabel.string=r>e?"你赢了！🎉":r<e?"电脑赢了！💻":"平局！🤝"},n.onReset=function(){this.resetGame()},e}(s)).prototype,"playerCard",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),F=e(C.prototype,"computerCard",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),v=e(C.prototype,"resultLabel",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),L=e(C.prototype,"cardBack",[h],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),w=e(C.prototype,"cardFronts",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),y=C))||y));n._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./CardGame.ts"],(function(){return{setters:[null],execute:function(){}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});