(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"1OJ1":function(n,l,t){"use strict";t.d(l,"a",function(){return e});var e=function(){function n(n,l){this.changeDetector2=n,this.fusionDataService2=l,this.subscriptions=[]}return n.prototype.ngOnInit=function(){var n=this;this.subscriptions.push(this.fusionDataService2.compendium.subscribe(function(l){n.changeDetector2.markForCheck(),n.compendium=l,n._dlcDemons=Object.assign({},n.compendium.dlcDemons),n.dlcDemons=Object.entries(n._dlcDemons).map(function(n){return{name:n[0],included:n[1]}})}))},n.prototype.ngOnDestroy=function(){for(var n=0,l=this.subscriptions;n<l.length;n++)l[n].unsubscribe()},n.prototype.toggleName=function(n){this._dlcDemons[n]=!this._dlcDemons[n],this.fusionDataService2.nextDlcDemons(this._dlcDemons)},n}()},"3ug7":function(n,l,t){"use strict";t.d(l,"a",function(){return i}),t.d(l,"b",function(){return e}),t.d(l,"c",function(){return u}),t("AnYp"),t("ejUt"),t("bqhy"),t("exTN"),t("OJ5D"),t("IdNb"),t("TVja"),t("GVDr");var e={fusionTool:"chart"},u={showShadows:!0},i=function(){return function(){}}()},"5i+Q":function(n,l,t){"use strict";var e=t("26FU"),u=t("QU2n"),i=t("mrSG"),r=t("QlaI"),o=function(n){function l(l,t){var e=n.call(this)||this;return e.lvlModifier=.5,e.initCharts(l,t),e}return i.c(l,n),l.prototype.initCharts=function(n,l){var t=n.races,e=n.table,u=l.elems,i=l.races,o=l.table;this.elementDemons=u,this.fusionChart=r.a.loadFusionTableJson(t,e),this.fissionChart=r.a.loadFissionTableJson(t,u,e),this.elementChart=r.a.loadElementTableJson(i,u,o),this.races=t},l}(r.a),s=t("qEb6"),a=t("WX6r"),c=t("cNXa"),p=t("/8Lz");function m(n,l,t){for(var e=[],u=l.getDemon(n),i=u.race,r=u.lvl,o=function(n){var u=l.getDemon(n),o=u.race,s=u.lvl,a=t.getRaceFusions(i)[o],c=l.getResultDemonLvls(a),p=c.reduce(function(n,l){return r+s>=2*l?n+1:n},0),m=l.reverseLookupDemon(a,p===c.length?c[c.length-1]:c[p]);e.push({name1:n,name2:m})},s=0,a=t.elementDemons.filter(function(l){return l!==n});s<a.length;s++)o(a[s]);return e}var f=t("lM8r"),h=t("yQ3a");t.d(l,"a",function(){return d});var d=function(){function n(n,l){this.fissionCalculator=new s.a([f.a,h.a,f.b],[]),this.fusionCalculator=new s.a([a.b,c.a,a.c],[p.b,p.c,m]),this.compConfig=n,this.appName=n.appTitle+" Fusion Calculator",this.fusionSettingsKey=n.settingsKey,this.fusionSettingsVersion=n.settingsVersion,this._compendium=new u.a(n),this._compendium$=new e.a(this._compendium),this.compendium=this._compendium$.asObservable(),this._fusionChart=new o(n.normalTable,n.elementTable),this._fusionChart$=new e.a(this._fusionChart),this.fusionChart=this._fusionChart$.asObservable();var t=JSON.parse(localStorage.getItem(this.fusionSettingsKey));t&&t.version&&t.version>=this.fusionSettingsVersion&&this.nextDlcDemons(t.dlcDemons),window.addEventListener("storage",this.onStorageUpdated.bind(this))}return n.prototype.nextDlcDemons=function(n){localStorage.setItem(this.fusionSettingsKey,JSON.stringify({version:this.fusionSettingsVersion,dlcDemons:n})),this._compendium.dlcDemons=n,this._compendium$.next(this._compendium)},n.prototype.onStorageUpdated=function(n){switch(n.key){case this.fusionSettingsKey:this._compendium.dlcDemons=JSON.parse(n.newValue).dlcDemons,this._compendium$.next(this._compendium)}},n}()},"62qN":function(n,l,t){"use strict";t.d(l,"a",function(){return m});var e=t("CcnG"),u=t("RBgs"),i=t("bZqG"),r=t("ZYjt"),o=t("OJ5D"),s=t("5i+Q"),a=e.nb({encapsulation:2,styles:[],data:{}});function c(n){return e.Jb(2,[(n()(),e.pb(0,0,null,null,1,"app-demon-dlc-settings",[],null,[[null,"toggledName"]],function(n,l,t){var e=!0;return"toggledName"===l&&(e=!1!==n.component.toggleName(t)&&e),e},u.b,u.a)),e.ob(1,49152,null,0,i.a,[r.h],{dlcDemons:[0,"dlcDemons"],dlcTitle:[1,"dlcTitle"],appTitle:[2,"appTitle"]},{toggledName:"toggledName"})],function(n,l){var t=l.component;n(l,1,0,t.dlcDemons,"Included DLC Personas",t.appTitle)},null)}function p(n){return e.Jb(0,[(n()(),e.pb(0,0,null,null,1,"app-demon-dlc-settings-container",[],null,null,null,c,a)),e.ob(1,245760,null,0,o.a,[e.h,s.a],null,null)],function(n,l){n(l,1,0)},null)}var m=e.lb("app-demon-dlc-settings-container",o.a,p,{},{},[])},"7gfQ":function(n,l,t){"use strict";t.d(l,"a",function(){return i}),t.d(l,"b",function(){return p});var e=t("CcnG"),u=t("Ip0R"),i=(t("Ck8i"),t("ZYjt"),t("ZYCi"),e.nb({encapsulation:0,styles:["table[_ngcontent-%COMP%] { width: auto; margin: 0 auto; }\n    th.title[_ngcontent-%COMP%] { height: 2em; }\n    td.elem[_ngcontent-%COMP%] { color: lime; }\n    td.trip[_ngcontent-%COMP%] { color: lightgray; }\n    td.ra-2[_ngcontent-%COMP%] { color: orange; }\n    td.ra-1[_ngcontent-%COMP%] { color: red; }\n    td.ran1[_ngcontent-%COMP%] { color: lime; }\n    td.ran2[_ngcontent-%COMP%] { color: cyan; }\n    td.None[_ngcontent-%COMP%] { color: transparent; }\n    td.Sala[_ngcontent-%COMP%], td.Flae[_ngcontent-%COMP%], td.Ara[_ngcontent-%COMP%], td.Fien[_ngcontent-%COMP%] { color: red; }\n    td.Undi[_ngcontent-%COMP%], td.Aqua[_ngcontent-%COMP%], td.Nigi[_ngcontent-%COMP%], td.Enig[_ngcontent-%COMP%] { color: cyan; }\n    td.Sylp[_ngcontent-%COMP%], td.Aero[_ngcontent-%COMP%], td.Kusi[_ngcontent-%COMP%], td.UMA[_ngcontent-%COMP%]  { color: lime; }\n    td.Gnom[_ngcontent-%COMP%], td.Erth[_ngcontent-%COMP%], td.Saki[_ngcontent-%COMP%], td.Rand[_ngcontent-%COMP%] { color: orange; }\n    td.Empt[_ngcontent-%COMP%] { background-color: black; color: transparent; }"],data:{}}));function r(n){return e.Jb(0,[(n()(),e.pb(0,0,null,null,1,"th",[],null,null,null,null,null)),(n()(),e.Hb(1,null,["",""]))],null,function(n,l){var t=l.context.$implicit.slice(0,4);n(l,1,0,t)})}function o(n){return e.Jb(0,[(n()(),e.pb(0,0,null,null,3,"td",[],null,null,null,null,null)),e.ob(1,278528,null,0,u.i,[e.s,e.t,e.k,e.D],{ngClass:[0,"ngClass"]},null),e.Ab(2,2),(n()(),e.Hb(3,null,["",""]))],function(n,l){var t=n(l,2,0,l.context.$implicit.slice(0,4),l.context.$implicit.slice(4,8));n(l,1,0,t)},function(n,l){var t=l.context.$implicit.slice(4,8);n(l,3,0,t)})}function s(n){return e.Jb(0,[(n()(),e.pb(0,0,null,null,6,"tr",[],null,null,null,null,null)),(n()(),e.pb(1,0,null,null,1,"th",[],null,null,null,null,null)),(n()(),e.Hb(2,null,["",""])),(n()(),e.gb(16777216,null,null,1,null,o)),e.ob(4,278528,null,0,u.j,[e.O,e.L,e.s],{ngForOf:[0,"ngForOf"]},null),(n()(),e.pb(5,0,null,null,1,"th",[],null,null,null,null,null)),(n()(),e.Hb(6,null,["",""]))],function(n,l){var t=l.context.$implicit.slice(1,l.context.$implicit.length-1);n(l,4,0,t)},function(n,l){n(l,2,0,l.context.$implicit[0]),n(l,6,0,l.context.$implicit[l.context.$implicit.length-1])})}function a(n){return e.Jb(0,[(n()(),e.pb(0,0,null,null,1,"th",[],null,null,null,null,null)),(n()(),e.Hb(1,null,["",""]))],null,function(n,l){var t=l.context.$implicit.slice(0,4);n(l,1,0,t)})}function c(n){return e.Jb(0,[(n()(),e.pb(0,0,null,null,2,"tr",[],null,null,null,null,null)),(n()(),e.pb(1,0,null,null,1,"th",[["class","title"]],[[1,"colspan",0]],null,null,null,null)),(n()(),e.Hb(2,null,[""," - ",""]))],null,function(n,l){var t=l.component;n(l,1,0,t.table[0].length),n(l,2,0,t.appName,t.tripTitle)})}function p(n){return e.Jb(2,[(n()(),e.pb(0,0,null,null,15,"table",[],null,null,null,null,null)),(n()(),e.pb(1,0,null,null,13,"tbody",[],null,null,null,null,null)),(n()(),e.pb(2,0,null,null,2,"tr",[],null,null,null,null,null)),(n()(),e.pb(3,0,null,null,1,"th",[["class","title"]],[[1,"colspan",0]],null,null,null,null)),(n()(),e.Hb(4,null,[""," - ",""])),(n()(),e.pb(5,0,null,null,2,"tr",[],null,null,null,null,null)),(n()(),e.gb(16777216,null,null,1,null,r)),e.ob(7,278528,null,0,u.j,[e.O,e.L,e.s],{ngForOf:[0,"ngForOf"]},null),(n()(),e.gb(16777216,null,null,1,null,s)),e.ob(9,278528,null,0,u.j,[e.O,e.L,e.s],{ngForOf:[0,"ngForOf"]},null),(n()(),e.pb(10,0,null,null,2,"tr",[],null,null,null,null,null)),(n()(),e.gb(16777216,null,null,1,null,a)),e.ob(12,278528,null,0,u.j,[e.O,e.L,e.s],{ngForOf:[0,"ngForOf"]},null),(n()(),e.gb(16777216,null,null,1,null,c)),e.ob(14,16384,null,0,u.k,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(n()(),e.pb(15,0,null,null,0,"tbody",[],null,null,null,null,null))],function(n,l){var t=l.component;n(l,7,0,t.table[0]),n(l,9,0,t.table.slice(1,t.table.length-1)),n(l,12,0,t.table[t.table.length-1]),n(l,14,0,t.tripTitle)},function(n,l){var t=l.component;n(l,3,0,t.table[0].length),n(l,4,0,t.appName,t.normTitle)})}},"8II2":function(n,l,t){"use strict";t.d(l,"a",function(){return h});var e=t("CcnG"),u=t("dXIv"),i=t("DUID"),r=t("h6dA"),o=t("Ip0R"),s=t("bqhy"),a=t("ZYjt"),c=t("5i+Q"),p=e.nb({encapsulation:2,styles:[],data:{}});function m(n){return e.Jb(2,[(n()(),e.pb(0,0,null,null,3,"app-smt-skill-list",[],null,null,null,u.c,u.a)),e.Eb(4608,null,i.a,i.a,[[3,i.a]]),e.ob(2,8503296,null,0,r.a,[],{rowData:[0,"rowData"],elemOrder:[1,"elemOrder"],hasRank:[2,"hasRank"],isPersona:[3,"isPersona"],transferTitle:[4,"transferTitle"]},null),e.Bb(131072,o.b,[e.h])],function(n,l){var t=l.component;n(l,2,0,e.Ib(l,2,0,e.zb(l,3).transform(t.skills)),t.compConfig.elemOrder,!1,!0,"Skill Card")},null)}function f(n){return e.Jb(0,[(n()(),e.pb(0,0,null,null,1,"app-skill-list-container",[],null,null,null,m,p)),e.ob(1,245760,null,0,s.a,[a.h,e.h,c.a],null,null)],function(n,l){n(l,1,0)},null)}var h=e.lb("app-skill-list-container",s.a,f,{},{},[])},AnYp:function(n,l,t){"use strict";t.d(l,"a",function(){return e});var e=function(){return function(){}}()},Ck8i:function(n,l,t){"use strict";t.d(l,"a",function(){return e});var e=function(){function n(n,l){this.title2=n,this.route=l,this.normTitle="Normal Fusions",this.tripTitle="",this.isPersona=!1,this.filterDarks=!0,this.subscriptions=[],this.table=[]}return n.prototype.ngOnInit=function(){var n=this;this.subscriptions.push(this.route.parent.data.subscribe(function(l){n.appName=l.appName||"Shin Megami Tensei",n.title2.setTitle("Fusion Chart - "+n.appName+" Fusion Calculator")}))},n.prototype.ngOnChanges=function(){this.normChart&&this.fillFusionChart()},n.prototype.ngOnDestroy=function(){for(var n=0,l=this.subscriptions;n<l.length;n++)l[n].unsubscribe()},n.prototype.fillFusionChart=function(){var n=this,l=this.normChart.elementDemons,t=[],e=this.normChart.races,u=[];this.filterDarks&&(t=this.normChart.races.filter(function(l){return 1===n.normChart.getLightDark(l)}),e=this.normChart.races.filter(function(l){return 0===n.normChart.getLightDark(l)}),u=this.normChart.races.filter(function(l){return-1===n.normChart.getLightDark(l)}));var i=t.length-u.length,r=t.concat(e,l),o=u.length?u.concat(Array(r.length-u.length).fill("")):r,s=this.mitaTable?r:t.concat(e,Array(l.length).fill("")),a=this.mitaTable||u.length?Array(i).fill("").concat(u,e,l):r;this.table=[[""].concat(r,[""])];for(var c=0;c<a.length;c++){var p=Array(r.length+2).fill("Empt-"),m=a[c],f=s[c],h=-1!==l.indexOf(m),d=-1!==l.indexOf(f);this.table.push(p),p[0]=m,p[p.length-1]=f;for(var b=c;b<r.length;b++){var g=r[b],v=-1!==l.indexOf(g);if(v&&d){var C=l.indexOf(f),O=l.indexOf(g);p[b+1]="mita"+((y=this.mitaTable[C][O-C-1])||"None")}else if(v&&f){var D=(y=this.normChart.getElemFusions(g)[f])?y.toString():"";p[b+1]=y?(y>0?"ran"+D+"+":"ra"+D)+D:"rankNone"}else if(g&&f){var y=this.isPersona&&g===f?g:this.normChart.getRaceFusion(g,f);p[b+1]=(g===f?"elem":"norm")+(y||"None")}}if(this.tripChart)for(b=0;b<=c-i;b++)(S=o[b])&&h?(D=(y=this.tripChart.getElemFusions(m)[S])?y.toString():"",p[b+1]=y?(y>0?"ran"+D+"+":"ra"+D)+D:"rankNone"):S&&m&&(y=this.tripChart.getRaceFusion(S,m),p[b+1]=(S===m?"elem":"trip")+(y||"None"));if(-1!==m.indexOf(" x ")){var k=m.split(" x "),S=k[1],_=k[0].slice(0,3)+"x"+S.slice(0,3);p[0]=_,p[p.length-1]=_}else-1!==m.indexOf(" ")&&(_=m.split(" ")[0],p[0]=_,p[p.length-1]=_)}for(b=0;b<this.table[0].length;b++){var P=this.table[0][b];if(-1!==P.indexOf(" x ")){var x=P.split(" x ");S=x[1],this.table[0][b]=x[0].slice(0,2)+S.slice(0,2)}}this.table.push([""].concat(o,[""]))},n}()},IdNb:function(n,l,t){"use strict";t.d(l,"a",function(){return e}),t("5i+Q");var e=function(){function n(n,l){this.changeDetectorRef=n,this.fusionDataService=l,this.mitaTable=[],this.subscriptions=[]}return n.prototype.ngOnInit=function(){var n=this;this.subscriptions.push(this.fusionDataService.fusionChart.subscribe(function(l){n.changeDetectorRef.markForCheck(),n.normChart=l,n.updateMitamas()})),this.subscriptions.push(this.fusionDataService.compendium.subscribe(function(l){n.changeDetectorRef.markForCheck(),n.compendium=l,n.updateMitamas()}))},n.prototype.ngOnDestroy=function(){for(var n=0,l=this.subscriptions;n<l.length;n++)l[n].unsubscribe()},n.prototype.updateMitamas=function(){var n=this;if(this.compendium&&this.normChart){for(var l=this.normChart.elementDemons.map(function(l){return n.compendium.getDemon(l).race}),t=[],e=function(e){var u=l[e];t.push(l.slice(e+1,l.length).map(function(l){return n.normChart.getRaceFusion(u,l)}))},u=0;u<l.length;u++)e(u);this.mitaTable=t}},n}()},OJ5D:function(n,l,t){"use strict";t.d(l,"a",function(){return i});var e=t("mrSG"),u=t("1OJ1"),i=(t("5i+Q"),function(n){function l(l,t){var e=n.call(this,l,t)||this;return e.changeDetector=l,e.fusionDataService=t,e.appTitle=t.appName,e}return e.c(l,n),l}(u.a))},PZD9:function(n,l,t){"use strict";var e=t("CcnG"),u=t("cg0H"),i=t("0ZaJ"),r=t("secp"),o=t("d6X+"),s=t("gkkx"),a=t("IlY5"),c=t("rFU4"),p=t("wdG2"),m=t("LVD6"),f=t("DUID"),h=t("Hz2L"),d=t("Ip0R"),b=t("exTN"),g=t("ZYCi"),v=(t("QU2n"),function(){return function(){}}()),C=e.nb({encapsulation:2,styles:[],data:{}});function O(n){return e.Jb(0,[(n()(),e.pb(0,0,null,null,2,"a",[],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(n,l,t){var u=!0;return"click"===l&&(u=!1!==e.zb(n,1).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&u),u},null,null)),e.ob(1,671744,null,0,g.q,[g.o,g.a,d.h],{routerLink:[0,"routerLink"]},null),(n()(),e.Hb(2,null,[" "," "]))],function(n,l){n(l,1,0,e.rb(1,"../../personas/",l.component.demon.persona,""))},function(n,l){var t=l.component;n(l,0,0,e.zb(l,1).target,e.zb(l,1).href),n(l,2,0,t.demon.persona)})}function D(n){return e.Jb(2,[(n()(),e.pb(0,0,null,null,3,"app-demon-stats",[],null,null,null,u.b,u.a)),e.ob(1,49152,null,0,i.a,[],{title:[0,"title"],statHeaders:[1,"statHeaders"],stats:[2,"stats"]},null),e.Ab(2,4),e.Ab(3,2),(n()(),e.pb(4,0,null,null,24,"table",[],null,null,null,null,null)),(n()(),e.pb(5,0,null,null,12,"thead",[],null,null,null,null,null)),(n()(),e.pb(6,0,null,null,2,"tr",[],null,null,null,null,null)),(n()(),e.pb(7,0,null,null,1,"th",[["colspan","4"]],null,null,null,null,null)),(n()(),e.Hb(-1,null,["Negotiation"])),(n()(),e.pb(9,0,null,null,8,"tr",[],null,null,null,null,null)),(n()(),e.pb(10,0,null,null,1,"th",[],null,null,null,null,null)),(n()(),e.Hb(-1,null,["Persona"])),(n()(),e.pb(12,0,null,null,1,"th",[],null,null,null,null,null)),(n()(),e.Hb(-1,null,["Personality"])),(n()(),e.pb(14,0,null,null,1,"th",[],null,null,null,null,null)),(n()(),e.Hb(-1,null,["Areas"])),(n()(),e.pb(16,0,null,null,1,"th",[],null,null,null,null,null)),(n()(),e.Hb(-1,null,["Drops"])),(n()(),e.pb(18,0,null,null,10,"tbody",[],null,null,null,null,null)),(n()(),e.pb(19,0,null,null,9,"tr",[],null,null,null,null,null)),(n()(),e.pb(20,0,null,null,2,"td",[],null,null,null,null,null)),(n()(),e.gb(16777216,null,null,1,null,O)),e.ob(22,16384,null,0,d.k,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(n()(),e.pb(23,0,null,null,1,"td",[],null,null,null,null,null)),(n()(),e.Hb(24,null,["",""])),(n()(),e.pb(25,0,null,null,1,"td",[],null,null,null,null,null)),(n()(),e.Hb(26,null,["",""])),(n()(),e.pb(27,0,null,null,1,"td",[],null,null,null,null,null)),(n()(),e.Hb(28,null,["",""])),(n()(),e.pb(29,0,null,null,1,"app-demon-resists",[],null,null,null,r.b,r.a)),e.ob(30,49152,null,0,o.a,[],{resistHeaders:[0,"resistHeaders"],resists:[1,"resists"]},null),(n()(),e.pb(31,0,null,null,1,"app-demon-skills",[],null,null,null,c.b,c.a)),e.ob(32,638976,null,0,p.a,[],{compendium:[0,"compendium"],elemOrder:[1,"elemOrder"],skillLevels:[2,"skillLevels"]},null)],function(n,l){var t=l.component,e="Lvl "+t.demon.lvl+" "+t.demon.race+" "+t.demon.name,u=n(l,2,0,"EXP","Yen","HP","MP").concat(t.compConfig.baseStats),i=n(l,3,0,t.demon.exp,t.demon.price).concat(t.demon.stats,t.demon.estats);n(l,1,0,e,u,i),n(l,22,0,t.demon.persona&&"-"!=t.demon.persona),n(l,30,0,t.compConfig.resistElems,t.demon.resists),n(l,32,0,t.compendium,t.compConfig.elemOrder,t.demon.skills)},function(n,l){var t=l.component;n(l,24,0,t.demon.trait),n(l,26,0,t.demon.area),n(l,28,0,t.demon.drop)})}var y=t("ZYjt"),k=t("veAJ"),S=t("5i+Q");t.d(l,"a",function(){return L});var _=e.nb({encapsulation:2,styles:[],data:{}});function P(n){return e.Jb(0,[(n()(),e.pb(0,0,null,null,14,null,null,null,null,null,null,null)),(n()(),e.pb(1,0,null,null,4,"app-demon-stats",[],null,null,null,u.b,u.a)),e.ob(2,49152,null,0,i.a,[],{title:[0,"title"],statHeaders:[1,"statHeaders"],stats:[2,"stats"],fusionHeaders:[3,"fusionHeaders"],inherit:[4,"inherit"],price:[5,"price"]},null),e.Ab(3,1),(n()(),e.pb(4,0,null,0,1,"td",[],null,null,null,null,null)),(n()(),e.Hb(5,null,["",""])),(n()(),e.pb(6,0,null,null,1,"app-demon-resists",[],null,null,null,r.b,r.a)),e.ob(7,49152,null,0,o.a,[],{resistHeaders:[0,"resistHeaders"],resists:[1,"resists"]},null),(n()(),e.pb(8,0,null,null,1,"app-demon-inherits",[],null,null,null,s.b,s.a)),e.ob(9,49152,null,0,a.a,[],{inheritHeaders:[0,"inheritHeaders"],inherits:[1,"inherits"]},null),(n()(),e.pb(10,0,null,null,1,"app-demon-skills",[],null,null,null,c.b,c.a)),e.ob(11,638976,null,0,p.a,[],{compendium:[0,"compendium"],elemOrder:[1,"elemOrder"],skillLevels:[2,"skillLevels"]},null),(n()(),e.pb(12,0,null,null,2,"app-smt-fusions",[],null,null,null,m.b,m.a)),e.Eb(4608,null,f.a,f.a,[[3,f.a]]),e.ob(14,638976,null,0,h.a,[],{excludedDlc:[0,"excludedDlc"]},null)],function(n,l){var t=l.component,e="Lvl "+t.demon.lvl+" "+t.demon.race+" "+t.demon.name,u=t.compConfig.baseStats,i=t.demon.stats,r=n(l,3,0,"Electric Chair");n(l,2,0,e,u,i,r,t.demon.inherit,t.demon.price),n(l,7,0,t.compConfig.resistElems,t.demon.resists),n(l,9,0,t.compConfig.inheritElems,t.compendium.getInheritElems(t.demon.inherit)),n(l,11,0,t.compendium,t.compConfig.elemOrder,t.demon.skills),n(l,14,0,"excluded"===t.demon.fusion)},function(n,l){n(l,5,0,l.component.demon.item)})}function x(n){return e.Jb(0,[(n()(),e.pb(0,0,null,null,9,null,null,null,null,null,null,null)),(n()(),e.pb(1,0,null,null,8,"table",[],null,null,null,null,null)),(n()(),e.pb(2,0,null,null,3,"thead",[],null,null,null,null,null)),(n()(),e.pb(3,0,null,null,2,"tr",[],null,null,null,null,null)),(n()(),e.pb(4,0,null,null,1,"th",[],null,null,null,null,null)),(n()(),e.Hb(5,null,["Entry for ",""])),(n()(),e.pb(6,0,null,null,3,"tbody",[],null,null,null,null,null)),(n()(),e.pb(7,0,null,null,2,"tr",[],null,null,null,null,null)),(n()(),e.pb(8,0,null,null,1,"td",[],null,null,null,null,null)),(n()(),e.Hb(9,null,["Error: Could not find entry in compendium for ",""]))],null,function(n,l){var t=l.component;n(l,5,0,t.name),n(l,9,0,t.name)})}function I(n){return e.Jb(2,[(n()(),e.gb(16777216,null,null,1,null,P)),e.ob(1,16384,null,0,d.k,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(n()(),e.gb(16777216,null,null,1,null,x)),e.ob(3,16384,null,0,d.k,[e.O,e.L],{ngIf:[0,"ngIf"]},null)],function(n,l){var t=l.component;n(l,1,0,t.demon),n(l,3,0,!t.demon)},null)}var H=e.nb({encapsulation:2,styles:[],data:{}});function N(n){return e.Jb(0,[(n()(),e.pb(0,0,null,null,1,"app-demon-entry",[],null,null,null,I,_)),e.ob(1,49152,null,0,b.a,[],{name:[0,"name"],demon:[1,"demon"],compendium:[2,"compendium"],compConfig:[3,"compConfig"]},null)],function(n,l){var t=l.component;n(l,1,0,t.name,t.demon,t.compendium,t.compConfig)},null)}function j(n){return e.Jb(0,[(n()(),e.pb(0,0,null,null,1,"app-enemy-entry",[],null,null,null,D,C)),e.ob(1,49152,null,0,v,[],{name:[0,"name"],demon:[1,"demon"],compendium:[2,"compendium"],compConfig:[3,"compConfig"]},null)],function(n,l){var t=l.component;n(l,1,0,t.name,t.demon,t.compendium,t.compConfig)},null)}function J(n){return e.Jb(2,[(n()(),e.gb(16777216,null,null,1,null,N)),e.ob(1,16384,null,0,d.k,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(n()(),e.gb(16777216,null,null,1,null,j)),e.ob(3,16384,null,0,d.k,[e.O,e.L],{ngIf:[0,"ngIf"]},null)],function(n,l){var t=l.component;n(l,1,0,!t.demon||!t.demon.isEnemy),n(l,3,0,t.demon&&t.demon.isEnemy)},null)}function E(n){return e.Jb(0,[(n()(),e.pb(0,0,null,null,1,"app-demon-entry-container",[],null,null,null,J,H)),e.ob(1,245760,null,0,b.b,[g.a,y.h,k.a,S.a],null,null)],function(n,l){n(l,1,0)},null)}var L=e.lb("app-demon-entry-container",b.b,E,{},{},[])},QU2n:function(n,l,t){"use strict";t.d(l,"a",function(){return e});var e=function(){function n(n){this.compConfig=n,this.initImportedData(),this.updateDerivedData()}return n.prototype.initImportedData=function(){for(var n=this,l={},t={},e={},u={},i={},r={},o={},s=0,a=this.compConfig.demonData;s<a.length;s++)for(var c=0,p=Object.entries(a[s]);c<p.length;c++){var m=p[c],f=m[0];l[f]={name:f,item:(J=m[1]).item||"",race:J.race,lvl:J.lvl,skills:J.skills,price:Math.pow(J.stats.reduce(function(n,l){return l+n},0),2)+2e3,stats:J.stats,resists:J.resists.split("").map(function(l){return n.compConfig.resistCodes[l]}),fusion:J.fusion||"normal",inherit:J.inherits},J.itemr&&(l[f].item+=", "+J.itemr)}for(var h=0,d=this.compConfig.enemyData;h<d.length;h++)for(var b=0,g=Object.entries(d[h]);b<g.length;b++){var v=g[b],C=v[0],O=v[1],D=[O.material||"-",O.armor||"-",O.card||"-"].filter(function(n){return"-"!==n});t[C]={name:C,persona:O.persona,trait:O.trait,exp:O.exp,race:O.race,lvl:O.lvl,price:O.yen,stats:O.stats.slice(0,2),estats:O.stats.slice(2),resists:O.resists.split("").map(function(l){return n.compConfig.resistCodes[l]}),fusion:"normal",skills:(O.skills||[]).reduce(function(n,l){return n[l]=0,n},{}),area:O.area.join(", "),drop:D.join(", ")||"-",isEnemy:!0}}for(var y=0,k=this.compConfig.skillData;y<k.length;y++)for(var S=0,_=Object.entries(k[y]);S<_.length;S++){var P=_[S],x=P[0];e[x]={name:x,element:(J=P[1]).element,effect:J.effect,rank:J.cost/100||0,cost:J.cost||0,transfer:[],learnedBy:[],level:0},J.card&&(e[x].transfer=[{demon:J.card,level:-100}]),J.unique&&(e[x].rank=99)}for(var I=0,H=Object.entries(this.compConfig.specialRecipes);I<H.length;I++){var N=H[I],j=N[0],J=N[1];(q=l[j]).fusion="special",u[j]=J,2===J.length&&(o[J[0]]=J[1],o[J[1]]=J[0]),0===J.length&&(q.prereq="Recruitment only",q.fusion="recruit")}for(var E=0,L=this.compConfig.races;E<L.length;E++)i[L[E]]={};for(var T=0,w=Object.values(t);T<w.length;T++)if((q=w[T]).drop){var M=q.drop.split(", ");e[Q=M[M.length-1]]&&e[Q].transfer.unshift({demon:q.persona,level:4073})}for(var F=0,R=Object.entries(l);F<R.length;F++){var A=R[F],G=A[0];if((q=A[1]).item){var Q,$=q.item.split(", "),U=$[1];e[Q=$[0]]&&e[Q].transfer.unshift({demon:G,level:3778}),e[U]&&e[U].transfer.unshift({demon:G,level:3765})}"party"!==q.fusion&&(i[q.race][q.lvl]=G)}for(var Y=0,Z=Object.values(l);Y<Z.length;Y++)for(var q=Z[Y],V=0,K=Object.keys(q.skills);V<K.length;V++){var z=K[V];e[z].learnedBy.push({demon:q.name,level:q.skills[z]})}for(var B=0,X=this.compConfig.downloadedDemons;B<X.length;B++)r[X[B]]=!0;for(var W=0,nn=this.compConfig.dlcDemons;W<nn.length;W++)r[nn[W]]=!1;this.demons=l,this.enemies=t,this.skills=e,this.specialRecipes=u,this.invertedDemons=i,this._dlcDemons=r,this.normalExceptions=o},n.prototype.updateDerivedData=function(){for(var n=this,l=Object.assign({},this.demons),t=Object.keys(this.skills).map(function(l){return n.skills[l]}).filter(function(n){return 0!==n.learnedBy.length||0!==n.transfer.length}),e={},u={},i=0,r=this.compConfig.races;i<r.length;i++)e[h=r[i]]=[],u[h]=[];for(var o=0,s=Object.entries(this.demons);o<s.length;o++){var a=s[o],c=a[0],p=a[1];"party"!==p.fusion&&(this.isElementDemon(c)||e[p.race].push(p.lvl),this.specialRecipes.hasOwnProperty(c)||u[p.race].push(p.lvl))}for(var m=0,f=this.compConfig.races;m<f.length;m++){var h;e[h=f[m]].sort(function(n,l){return n-l}),u[h].sort(function(n,l){return n-l})}for(var d=0,b=Object.entries(this._dlcDemons);d<b.length;d++)for(var g=b[d],v=g[1],C=function(n){if(!v){var t=O.demons[n],i=t.race,r=t.lvl;delete l[n],e[i]=e[i].filter(function(n){return n!==r}),u[i]=u[i].filter(function(n){return n!==r})}O.demons[n].fusion=v?"normal":"excluded"},O=this,D=0,y=g[0].split(",");D<y.length;D++)C(y[D]);var k=Object.keys(l).map(function(n){return l[n]}),S=Object.keys(this.enemies).map(function(l){return n.enemies[l]});this._allDemons=S.concat(k),this._allSkills=t,this.allIngredients=e,this.allResults=u},Object.defineProperty(n.prototype,"dlcDemons",{get:function(){return this._dlcDemons},set:function(n){this._dlcDemons=n,this.updateDerivedData()},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"allDemons",{get:function(){return this._allDemons},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"allSkills",{get:function(){return this._allSkills},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"specialDemons",{get:function(){var n=this;return Object.keys(this.specialRecipes).filter(function(l){return!n.isElementDemon(l)}).map(function(l){return n.demons[l]})},enumerable:!0,configurable:!0}),n.prototype.getDemon=function(n){return this.demons[n]||this.enemies[n]},n.prototype.getSkill=function(n){return this.skills[n]},n.prototype.getSkills=function(n){for(var l=this,t=[],e=0,u=Object.entries(n);e<u.length;e++){var i=u[e],r=i[0],o=i[1];t.push(this.skills[r]),this.skills[r].level=o}return t.sort(function(n,t){return 100*(n.level-t.level)+l.compConfig.elemOrder[n.element]-l.compConfig.elemOrder[t.element]}),t},n.prototype.getIngredientDemonLvls=function(n){return this.allIngredients[n]||[]},n.prototype.getResultDemonLvls=function(n){return this.allResults[n]||[]},n.prototype.getSpecialNameEntries=function(n){return this.specialRecipes[n]||[]},n.prototype.getSpecialNamePairs=function(n){return[]},n.prototype.getElementDemons=function(n){var l=this;return Object.keys(this.specialRecipes).filter(function(t){return l.isElementDemon(t)&&t!==n})},n.prototype.getNormalException=function(n){return this.normalExceptions[n]},n.prototype.getInheritElems=function(n){return this.compConfig.inheritTypes[n]},n.prototype.reverseLookupDemon=function(n,l){return this.invertedDemons[n][l]},n.prototype.reverseLookupSpecial=function(n){return[]},n.prototype.isElementDemon=function(n){return this.specialRecipes.hasOwnProperty(n)&&0===this.specialRecipes[n].length},n.prototype.isRecruitmentOnly=function(n){return this.isElementDemon(n)},n.prototype.isExcludedDemon=function(n){var l=this.getDemon(n);return-1===this.allIngredients[l.race].indexOf(l.lvl)},n}()},RBgs:function(n,l,t){"use strict";t.d(l,"a",function(){return i}),t.d(l,"b",function(){return o});var e=t("CcnG"),u=t("Ip0R"),i=(t("bZqG"),t("ZYjt"),e.nb({encapsulation:2,styles:[],data:{}}));function r(n){return e.Jb(0,[(n()(),e.pb(0,0,null,null,4,"tr",[],null,null,null,null,null)),(n()(),e.pb(1,0,null,null,3,"td",[],null,null,null,null,null)),(n()(),e.pb(2,0,null,null,2,"label",[],null,null,null,null,null)),(n()(),e.Hb(3,null,[""," "])),(n()(),e.pb(4,0,null,null,0,"input",[["type","checkbox"]],[[8,"checked",0]],[[null,"change"]],function(n,l,t){var e=!0;return"change"===l&&(e=!1!==n.component.toggledName.emit(n.context.$implicit.name)&&e),e},null,null))],null,function(n,l){var t=l.context.$implicit.name.split(",").join(", ");n(l,3,0,t),n(l,4,0,l.context.$implicit.included)})}function o(n){return e.Jb(2,[(n()(),e.pb(0,0,null,null,7,"table",[],null,null,null,null,null)),(n()(),e.pb(1,0,null,null,3,"thead",[],null,null,null,null,null)),(n()(),e.pb(2,0,null,null,2,"tr",[],null,null,null,null,null)),(n()(),e.pb(3,0,null,null,1,"th",[],null,null,null,null,null)),(n()(),e.Hb(4,null,["",""])),(n()(),e.pb(5,0,null,null,2,"tbody",[],null,null,null,null,null)),(n()(),e.gb(16777216,null,null,1,null,r)),e.ob(7,278528,null,0,u.j,[e.O,e.L,e.s],{ngForOf:[0,"ngForOf"]},null)],function(n,l){n(l,7,0,l.component.dlcDemons)},function(n,l){n(l,4,0,l.component.dlcTitle)})}},VCST:function(n,l,t){"use strict";t.d(l,"a",function(){return e});var e=function(){function n(){}return n.forRoot=function(){return{ngModule:n}},n}()},bZqG:function(n,l,t){"use strict";t.d(l,"a",function(){return u});var e=t("CcnG"),u=function(){function n(n){this.title=n,this.dlcTitle="Included DLC Demons",this.toggledName=new e.m}return Object.defineProperty(n.prototype,"appTitle",{set:function(n){this.title.setTitle("Fusion Settings - "+n)},enumerable:!0,configurable:!0}),n}()},bqhy:function(n,l,t){"use strict";t.d(l,"a",function(){return i});var e=t("mrSG"),u=t("z0S9"),i=(t("5i+Q"),function(n){function l(l,t,e){var u=n.call(this,l,t,e)||this;return u.compConfig=e.compConfig,u.appName="List of Skills - "+e.appName,u.defaultSortFun=function(n,l){return 1e4*(u.compConfig.elemOrder[n.element]-u.compConfig.elemOrder[l.element])+n.rank-l.rank},u}return e.c(l,n),l}(u.a))},ejUt:function(n,l,t){"use strict";t.d(l,"a",function(){return i});var e=t("mrSG"),u=t("i4tJ"),i=(t("5i+Q"),function(n){function l(l,t,e,u){var i=n.call(this,l,e,u)||this;return i.showAllies=!t.snapshot.data.showShadows,i.showEnemies=!i.showAllies,i.compConfig=u.compConfig,i.defaultSortFun=function(n,l){return 200*(i.compConfig.raceOrder[n.race]-i.compConfig.raceOrder[l.race])+l.lvl-n.lvl},i.appName="List of Personas - "+u.appName,i.statHeaders=i.compConfig.baseStats,i.resistHeaders=i.compConfig.resistElems,i.inheritOrder=i.compConfig.elemOrder,i.showEnemies&&(i.appName="List of Shadows - "+u.appName,i.statHeaders=["HP","MP"],i.resistHeaders=i.compConfig.enemyResists,i.inheritOrder=null),i}return e.c(l,n),l}(u.a))},exTN:function(n,l,t){"use strict";t.d(l,"a",function(){return i}),t.d(l,"b",function(){return r});var e=t("mrSG"),u=t("VNUm"),i=(t("QU2n"),t("veAJ"),t("5i+Q"),function(){return function(){}}()),r=function(n){function l(l,t,e,u){var i=n.call(this,l,t,e,u)||this;return i.route=l,i.title=t,i.currentDemonService=e,i.fusionDataService=u,i.appName=u.appName,i.compConfig=u.compConfig,i}return e.c(l,n),l}(u.a)},lJG5:function(n,l,t){"use strict";t.d(l,"a",function(){return f});var e=t("CcnG"),u=t("7gfQ"),i=t("Ck8i"),r=t("ZYjt"),o=t("ZYCi"),s=t("IdNb"),a=t("5i+Q"),c=e.nb({encapsulation:2,styles:[],data:{}});function p(n){return e.Jb(2,[(n()(),e.pb(0,0,null,null,1,"app-fusion-chart",[],null,null,null,u.b,u.a)),e.ob(1,770048,null,0,i.a,[r.h,o.a],{normChart:[0,"normChart"],mitaTable:[1,"mitaTable"],isPersona:[2,"isPersona"]},null)],function(n,l){var t=l.component;n(l,1,0,t.normChart,t.mitaTable,!0)},null)}function m(n){return e.Jb(0,[(n()(),e.pb(0,0,null,null,1,"app-fusion-chart-container",[],null,null,null,p,c)),e.ob(1,245760,null,0,s.a,[e.h,a.a],null,null)],function(n,l){n(l,1,0)},null)}var f=e.lb("app-fusion-chart-container",s.a,m,{},{},[])},pSCT:function(n,l,t){"use strict";t.d(l,"a",function(){return h});var e=t("vajj"),u=t("CcnG"),i=t("aq7X"),r=t("DUID"),o=t("Ip0R"),s=t("Lx9e"),a=t("ZYCi"),c=t("AnYp"),p=u.nb({encapsulation:2,styles:[e.a],data:{}});function m(n){return u.Jb(2,[(n()(),u.pb(0,0,null,null,5,"app-demon-compendium",[],null,null,null,i.b,i.a)),u.Eb(4608,null,r.a,r.a,[[3,r.a]]),u.ob(2,278528,null,0,o.i,[u.s,u.t,u.k,u.D],{ngClass:[0,"ngClass"]},null),u.ob(3,245760,null,0,s.a,[a.a],{mainList:[0,"mainList"],otherLinks:[1,"otherLinks"]},null),u.Cb(4,{title:0,link:1}),u.Ab(5,1)],function(n,l){n(l,2,0,"p5");var t=n(l,5,0,n(l,4,0,"Shadow List","shadows"));n(l,3,0,"persona",t)},null)}function f(n){return u.Jb(0,[(n()(),u.pb(0,0,null,null,1,"app-p5-compendium",[],null,null,null,m,p)),u.ob(1,49152,null,0,c.a,[],null,null)],null,null)}var h=u.lb("app-p5-compendium",c.a,f,{},{},[])},"w4O/":function(n,l,t){"use strict";t.d(l,"a",function(){return d});var e=t("CcnG"),u=t("FAMI"),i=t("DUID"),r=t("cEcl"),o=t("Ip0R"),s=t("ejUt"),a=t("ZYjt"),c=t("ZYCi"),p=t("5i+Q"),m=e.nb({encapsulation:2,styles:[],data:{}});function f(n){return e.Jb(2,[(n()(),e.pb(0,0,null,null,3,"app-smt-demon-list",[],null,null,null,u.b,u.a)),e.Eb(4608,null,i.a,i.a,[[3,i.a]]),e.ob(2,8503296,null,0,r.a,[],{rowData:[0,"rowData"],raceOrder:[1,"raceOrder"],inheritOrder:[2,"inheritOrder"],statHeaders:[3,"statHeaders"],resistHeaders:[4,"resistHeaders"],isEnemy:[5,"isEnemy"]},null),e.Bb(131072,o.b,[e.h])],function(n,l){var t=l.component;n(l,2,0,e.Ib(l,2,0,e.zb(l,3).transform(t.demons)),t.compConfig.raceOrder,t.inheritOrder,t.statHeaders,t.resistHeaders,t.showEnemies)},null)}function h(n){return e.Jb(0,[(n()(),e.pb(0,0,null,null,1,"app-demon-list-container",[],null,null,null,f,m)),e.ob(1,245760,null,0,s.a,[a.h,c.a,e.h,p.a],null,null)],function(n,l){n(l,1,0)},null)}var d=e.lb("app-demon-list-container",s.a,h,{},{},[])}}]);