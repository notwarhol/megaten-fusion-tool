(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"0S2d":function(n){n.exports={elems:["Erthys","Aeros","Aquans","Flaemis"],races:["Omega","Megami","Deity","Vile","Snake","Dragon","Divine","Avian","Fallen","Avatar","Beast","Wilder","Genma","Fairy","Tyrant","Kishin","Touki","Jaki","Femme","Ghost"],table:[[-1,-1,-1,-1],[-1,-1,-1,-1],[-1,-1,-1,-1],[-1,-1,-1,-1],[-1,-1,1,1],[1,1,1,-1],[-1,-1,1,1],[-1,1,1,1],[-1,1,-1,1],[-1,-1,-1,1],[-1,1,-1,1],[1,-1,1,1],[-1,1,1,-1],[1,1,1,-1],[-1,-1,-1,-1],[1,-1,-1,-1],[1,-1,-1,1],[1,-1,1,-1],[1,-1,1,1],[1,1,-1,-1]]}},"0ZaJ":function(n,l,e){"use strict";e.d(l,"a",function(){return t});var t=function(){return function(){this.title="Demon Entry",this.statHeaders=[],this.stats=[],this.fusionHeaders=[],this.price=0}}()},"0pc2":function(n,l,e){"use strict";e.d(l,"a",function(){return v});var t=e("CcnG"),u=e("JM3h"),i=e("GtKH"),r=e("JZP4"),a=e("DUID"),o=e("TzHT"),s=e("uoMG"),c=e("Ip0R"),f=e("TVja"),p=e("veAJ"),h=t.nb({encapsulation:2,styles:[],data:{}});function b(n){return t.Jb(0,[(n()(),t.pb(0,0,null,null,8,"table",[],null,null,null,null,null)),(n()(),t.pb(1,0,null,null,3,"thead",[],null,null,null,null,null)),(n()(),t.pb(2,0,null,null,2,"tr",[],null,null,null,null,null)),(n()(),t.pb(3,0,null,null,1,"th",[],null,null,null,null,null)),(n()(),t.Hb(-1,null,["Special Fusion Condition"])),(n()(),t.pb(5,0,null,null,3,"tbody",[],null,null,null,null,null)),(n()(),t.pb(6,0,null,null,2,"tr",[],null,null,null,null,null)),(n()(),t.pb(7,0,null,null,1,"td",[],null,null,null,null,null)),(n()(),t.Hb(8,null,["",""]))],null,function(n,l){n(l,8,0,l.component.fusionPrereq)})}function m(n){return t.Jb(0,[(n()(),t.pb(0,0,null,null,1,"app-fusion-entry-table",[],null,null,null,u.b,u.a)),t.ob(1,49152,null,0,i.a,[],{title:[0,"title"],rowData:[1,"rowData"]},null)],function(n,l){var e=l.component;n(l,1,0,"Special Fusion Ingredients for "+e.currentDemon,e.fusionEntries)},null)}function d(n){return t.Jb(0,[(n()(),t.pb(0,0,null,null,2,"app-fusion-pair-table",[],null,null,null,r.b,r.a)),t.Eb(4608,null,a.a,a.a,[[3,a.a]]),t.ob(2,49152,null,0,o.a,[s.a],{rowData:[0,"rowData"],title:[1,"title"]},null)],function(n,l){var e=l.component;n(l,2,0,e.fusionPairs,"Ingredient 1 x Ingredient 2 = "+e.currentDemon)},null)}function g(n){return t.Jb(2,[(n()(),t.gb(16777216,null,null,1,null,b)),t.ob(1,16384,null,0,c.k,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(n()(),t.gb(16777216,null,null,1,null,m)),t.ob(3,16384,null,0,c.k,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(n()(),t.gb(16777216,null,null,1,null,d)),t.ob(5,16384,null,0,c.k,[t.O,t.L],{ngIf:[0,"ngIf"]},null)],function(n,l){var e=l.component;n(l,1,0,e.fusionPrereq),n(l,3,0,e.fusionEntries.length),n(l,5,0,e.fusionPairs.length||!e.fusionPrereq&&!e.fusionEntries.length)},null)}function k(n){return t.Jb(0,[(n()(),t.pb(0,0,null,null,1,"app-smt-fission-table",[],null,null,null,g,h)),t.ob(1,245760,null,0,f.a,[p.a,t.h,s.b],null,null)],function(n,l){n(l,1,0)},null)}var v=t.lb("app-smt-fission-table",f.a,k,{},{},[])},"7gfQ":function(n,l,e){"use strict";e.d(l,"a",function(){return i}),e.d(l,"b",function(){return f});var t=e("CcnG"),u=e("Ip0R"),i=(e("Ck8i"),e("ZYjt"),e("ZYCi"),t.nb({encapsulation:0,styles:["table[_ngcontent-%COMP%] { width: auto; margin: 0 auto; }\n    th.title[_ngcontent-%COMP%] { height: 2em; }\n    td.elem[_ngcontent-%COMP%] { color: lime; }\n    td.trip[_ngcontent-%COMP%] { color: lightgray; }\n    td.ra-2[_ngcontent-%COMP%] { color: orange; }\n    td.ra-1[_ngcontent-%COMP%] { color: red; }\n    td.ran1[_ngcontent-%COMP%] { color: lime; }\n    td.ran2[_ngcontent-%COMP%] { color: cyan; }\n    td.None[_ngcontent-%COMP%] { color: transparent; }\n    td.Sala[_ngcontent-%COMP%], td.Flae[_ngcontent-%COMP%], td.Ara[_ngcontent-%COMP%], td.Fien[_ngcontent-%COMP%] { color: red; }\n    td.Undi[_ngcontent-%COMP%], td.Aqua[_ngcontent-%COMP%], td.Nigi[_ngcontent-%COMP%], td.Enig[_ngcontent-%COMP%] { color: cyan; }\n    td.Sylp[_ngcontent-%COMP%], td.Aero[_ngcontent-%COMP%], td.Kusi[_ngcontent-%COMP%], td.UMA[_ngcontent-%COMP%]  { color: lime; }\n    td.Gnom[_ngcontent-%COMP%], td.Erth[_ngcontent-%COMP%], td.Saki[_ngcontent-%COMP%], td.Rand[_ngcontent-%COMP%] { color: orange; }\n    td.Empt[_ngcontent-%COMP%] { background-color: black; color: transparent; }"],data:{}}));function r(n){return t.Jb(0,[(n()(),t.pb(0,0,null,null,1,"th",[],null,null,null,null,null)),(n()(),t.Hb(1,null,["",""]))],null,function(n,l){var e=l.context.$implicit.slice(0,4);n(l,1,0,e)})}function a(n){return t.Jb(0,[(n()(),t.pb(0,0,null,null,3,"td",[],null,null,null,null,null)),t.ob(1,278528,null,0,u.i,[t.s,t.t,t.k,t.D],{ngClass:[0,"ngClass"]},null),t.Ab(2,2),(n()(),t.Hb(3,null,["",""]))],function(n,l){var e=n(l,2,0,l.context.$implicit.slice(0,4),l.context.$implicit.slice(4,8));n(l,1,0,e)},function(n,l){var e=l.context.$implicit.slice(4,8);n(l,3,0,e)})}function o(n){return t.Jb(0,[(n()(),t.pb(0,0,null,null,6,"tr",[],null,null,null,null,null)),(n()(),t.pb(1,0,null,null,1,"th",[],null,null,null,null,null)),(n()(),t.Hb(2,null,["",""])),(n()(),t.gb(16777216,null,null,1,null,a)),t.ob(4,278528,null,0,u.j,[t.O,t.L,t.s],{ngForOf:[0,"ngForOf"]},null),(n()(),t.pb(5,0,null,null,1,"th",[],null,null,null,null,null)),(n()(),t.Hb(6,null,["",""]))],function(n,l){var e=l.context.$implicit.slice(1,l.context.$implicit.length-1);n(l,4,0,e)},function(n,l){n(l,2,0,l.context.$implicit[0]),n(l,6,0,l.context.$implicit[l.context.$implicit.length-1])})}function s(n){return t.Jb(0,[(n()(),t.pb(0,0,null,null,1,"th",[],null,null,null,null,null)),(n()(),t.Hb(1,null,["",""]))],null,function(n,l){var e=l.context.$implicit.slice(0,4);n(l,1,0,e)})}function c(n){return t.Jb(0,[(n()(),t.pb(0,0,null,null,2,"tr",[],null,null,null,null,null)),(n()(),t.pb(1,0,null,null,1,"th",[["class","title"]],[[1,"colspan",0]],null,null,null,null)),(n()(),t.Hb(2,null,[""," - ",""]))],null,function(n,l){var e=l.component;n(l,1,0,e.table[0].length),n(l,2,0,e.appName,e.tripTitle)})}function f(n){return t.Jb(2,[(n()(),t.pb(0,0,null,null,15,"table",[],null,null,null,null,null)),(n()(),t.pb(1,0,null,null,13,"tbody",[],null,null,null,null,null)),(n()(),t.pb(2,0,null,null,2,"tr",[],null,null,null,null,null)),(n()(),t.pb(3,0,null,null,1,"th",[["class","title"]],[[1,"colspan",0]],null,null,null,null)),(n()(),t.Hb(4,null,[""," - ",""])),(n()(),t.pb(5,0,null,null,2,"tr",[],null,null,null,null,null)),(n()(),t.gb(16777216,null,null,1,null,r)),t.ob(7,278528,null,0,u.j,[t.O,t.L,t.s],{ngForOf:[0,"ngForOf"]},null),(n()(),t.gb(16777216,null,null,1,null,o)),t.ob(9,278528,null,0,u.j,[t.O,t.L,t.s],{ngForOf:[0,"ngForOf"]},null),(n()(),t.pb(10,0,null,null,2,"tr",[],null,null,null,null,null)),(n()(),t.gb(16777216,null,null,1,null,s)),t.ob(12,278528,null,0,u.j,[t.O,t.L,t.s],{ngForOf:[0,"ngForOf"]},null),(n()(),t.gb(16777216,null,null,1,null,c)),t.ob(14,16384,null,0,u.k,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(n()(),t.pb(15,0,null,null,0,"tbody",[],null,null,null,null,null))],function(n,l){var e=l.component;n(l,7,0,e.table[0]),n(l,9,0,e.table.slice(1,e.table.length-1)),n(l,12,0,e.table[e.table.length-1]),n(l,14,0,e.tripTitle)},function(n,l){var e=l.component;n(l,3,0,e.table[0].length),n(l,4,0,e.appName,e.normTitle)})}},Ck8i:function(n,l,e){"use strict";e.d(l,"a",function(){return t});var t=function(){function n(n,l){this.title2=n,this.route=l,this.normTitle="Normal Fusions",this.tripTitle="",this.isPersona=!1,this.filterDarks=!0,this.subscriptions=[],this.table=[]}return n.prototype.ngOnInit=function(){var n=this;this.subscriptions.push(this.route.parent.data.subscribe(function(l){n.appName=l.appName||"Shin Megami Tensei",n.title2.setTitle("Fusion Chart - "+n.appName+" Fusion Calculator")}))},n.prototype.ngOnChanges=function(){this.normChart&&this.fillFusionChart()},n.prototype.ngOnDestroy=function(){for(var n=0,l=this.subscriptions;n<l.length;n++)l[n].unsubscribe()},n.prototype.fillFusionChart=function(){var n=this,l=this.normChart.elementDemons,e=[],t=this.normChart.races,u=[];this.filterDarks&&(e=this.normChart.races.filter(function(l){return 1===n.normChart.getLightDark(l)}),t=this.normChart.races.filter(function(l){return 0===n.normChart.getLightDark(l)}),u=this.normChart.races.filter(function(l){return-1===n.normChart.getLightDark(l)}));var i=e.length-u.length,r=e.concat(t,l),a=u.length?u.concat(Array(r.length-u.length).fill("")):r,o=this.mitaTable?r:e.concat(t,Array(l.length).fill("")),s=this.mitaTable||u.length?Array(i).fill("").concat(u,t,l):r;this.table=[[""].concat(r,[""])];for(var c=0;c<s.length;c++){var f=Array(r.length+2).fill("Empt-"),p=s[c],h=o[c],b=-1!==l.indexOf(p),m=-1!==l.indexOf(h);this.table.push(f),f[0]=p,f[f.length-1]=h;for(var d=c;d<r.length;d++){var g=r[d],k=-1!==l.indexOf(g);if(k&&m){var v=l.indexOf(h),y=l.indexOf(g);f[d+1]="mita"+((F=this.mitaTable[v][y-v-1])||"None")}else if(k&&h){var O=(F=this.normChart.getElemFusions(g)[h])?F.toString():"";f[d+1]=F?(F>0?"ran"+O+"+":"ra"+O)+O:"rankNone"}else if(g&&h){var F=this.isPersona&&g===h?g:this.normChart.getRaceFusion(g,h);f[d+1]=(g===h?"elem":"norm")+(F||"None")}}if(this.tripChart)for(d=0;d<=c-i;d++)(P=a[d])&&b?(O=(F=this.tripChart.getElemFusions(p)[P])?F.toString():"",f[d+1]=F?(F>0?"ran"+O+"+":"ra"+O)+O:"rankNone"):P&&p&&(F=this.tripChart.getRaceFusion(P,p),f[d+1]=(P===p?"elem":"trip")+(F||"None"));if(-1!==p.indexOf(" x ")){var D=p.split(" x "),P=D[1],C=D[0].slice(0,3)+"x"+P.slice(0,3);f[0]=C,f[f.length-1]=C}else-1!==p.indexOf(" ")&&(C=p.split(" ")[0],f[0]=C,f[f.length-1]=C)}for(d=0;d<this.table[0].length;d++){var A=this.table[0][d];if(-1!==A.indexOf(" x ")){var M=A.split(" x ");P=M[1],this.table[0][d]=M[0].slice(0,2)+P.slice(0,2)}}this.table.push([""].concat(a,[""]))},n}()},Hz2L:function(n,l,e){"use strict";e.d(l,"a",function(){return t}),e("UXxn");var t=function(){function n(){this.hasTripleFusion=!1,this.showFusionAlert=!1,this.excludedDlc=!1,this.fusionOptions=n.NORMAL_FUSIONS}return n.prototype.ngOnInit=function(){this.fusionOptions=this.hasTripleFusion?n.TRIPLE_FUSIONS:n.NORMAL_FUSIONS},n.prototype.ngOnChanges=function(){var n=this;setTimeout(function(){return n.stickyTable.nextEdges()})},n.NORMAL_FUSIONS=[{title:"Reverse Fusions",link:"fissions"},{title:"Forward Fusions",link:"fusions"}],n.TRIPLE_FUSIONS=[{title:"Normal Reverse Fusions",link:"fissions"},{title:"Triple Reverse Fusions",link:"fissions/triple"},{title:"Triple Forward Fusions",link:"fusions/triple"},{title:"Normal Forward Fusions",link:"fusions"}],n}()},Knth:function(n){n.exports={Avatar:{effect:"Switch positions with an allied team, range: 6",eneffect:"Range increased to 8",enskill:"Warp Step",skill:"Switch"},Avian:{effect:"Move range +1, ignore obstacles",eneffect:"Move range +2 instead",enskill:"Winged Flight",skill:"Flight"},Beast:{effect:"Team can move a second time after attacking",eneffect:"Additional option to escape combat during Extra Turn phase",enskill:"Free Leap",skill:"Animal Leg"},"Celty Sturluson":{effect:"Increases movement to 8 and reduces the enemy's critical rate by 90%",enskill:"Headless Rider"},Deity:{effect:"Damage from MP skills x1.5",eneffect:"Innate reduction of MP skill cost by 25%",enskill:"Enlightenment",skill:"Awakening"},Divine:{effect:"Restores an amount of MP (based on level) to the entire team",eneffect:"Greater amount of MP restored",enskill:"Angel Stigma",skill:"Blood Wine"},Dragon:{effect:"Attack range raised to 2, doubled move cost, no Extra Turns",eneffect:"Additional option to raise range by 4 until end of turn",enskill:"Evil Flow",skill:"Evil Wave"},Fairy:{effect:"Restores some HP to one team with chance of additional effects, range: 3",eneffect:"Ability affects all friendly teams in range",enskill:"Fairy Dust",skill:"Charm/Glamour"},Fallen:{effect:"When it defeats a foe, team regains HP equal to the defeated foe's level and MP equal to half the defeated foe's level",eneffect:"Additional option to steal MP from an enemy team, Curse Element, range: 3",enskill:"Fallen's Mark",skill:"Sacrifice"},Femme:{effect:"Restores HP to one team equal to half of Femme's current HP, range: 2",eneffect:"Healing strength doubled, affected team's turn moved forward one position",enskill:"Mother's Love",skill:"Devotion"},Fiend:{effect:"Allows team to move and act a second time after use, cannot be used in succession",eneffect:"MP % cost reduced",enskill:"Unearthly Form",skill:"Uncanny Form"},Genma:{effect:"Ignore obstacles, move cost halved",eneffect:"Additional option to teleport next to a friendly team, range: 5",enskill:"True Phantasm",skill:"Phantasma"},Ghost:{effect:"Halves one enemy team's move range, reduces attack/heal range to 1, range: 3",eneffect:"Affected team is also cursed",enskill:"Possession",skill:"Ghost Wounds"},Hero:{effect:"Damage taken by team reduced by 30% until next turn",eneffect:"Damage reduction 50% instead",enskill:"Hero's Proof",skill:"Hero's Mark"},"Izaya Orihara":{effect:"Single-target skills from the enemy will target the allies with highest resistance to it, but Izaya is of lower priority",skill:"Shinjuku Intelligence"},Jaki:{effect:"Reduces one enemy team's move range to 1, range: 3",eneffect:"Affected team's turn is also delayed by one turn",enskill:"Evil Bind",skill:"Bind"},Kishin:{effect:"Team gets additional chance to attack",eneffect:"Team also gets additional chance to use skills outside skirmish after attacking",enskill:"Matchless",skill:"Double Up"},Megami:{effect:"Restores a large amount of HP and cures all ailments to one team, range: 4",eneffect:"Range increased to 6",enskill:"Goddess Grace",skill:"Affection"},Omega:{effect:"Team can gain Double Extra during the Extra Turn phase",eneffect:"Team also gets increased chance of Extra Turn at the start of skirmish",enskill:"Asura Destiny",skill:"Asura Karma"},"Shizuo Heiwajima":{effect:"Chance of retaliating when struck in battle. At the end of combat, will  recover 50% of current HP unless inflicted with a status ailment. If the  combat is initiated by the enemy, there's a higher chance of attacking  first",skill:"Auto-Rampage Puppet"},Snake:{effect:"Adjacent foes' move range reduced to 1, combat initiative when attacked",eneffect:"Attacking enemies also lose Extra Turns, turn not delayed when attacked",enskill:"Dragon Bind",skill:"Constrict"},Touki:{effect:"First physical attack by each member has a guaranteed critical",eneffect:"Critical rate instead boosted to 100% until end of turn, and slowly decreases after each successful critical",enskill:"Agitate",skill:"Aggravate"},Tyrant:{effect:"Restores MP to team (dependent on damage dealt) at the end of skirmish, delays enemy turn after skirmish (DeSu1), reduces foe's initiative (DeSu2)",eneffect:"Additional option to triple effectiveness of all HP and MP drain and recovery during this turn's skirmish(es)",enskill:"Blood Treaty",skill:"Tyranny"},Vile:{effect:"Attack range raised to 3, move range -1, doubled move cost, no Extra Turns",eneffect:"Attack range increased to 4",enskill:"Chaos Breath",skill:"Chaos Wave"},Wilder:{effect:"Team move range increased to 7, combat initiative granted",eneffect:"Team move range further increased to 8",enskill:"Devil Flash",skill:"Devil Speed"}}},LVD6:function(n,l,e){"use strict";e.d(l,"a",function(){return o}),e.d(l,"b",function(){return p});var t=e("CcnG"),u=e("ZYCi"),i=e("Ip0R"),r=e("UXxn"),a=e("DUID"),o=(e("Hz2L"),t.nb({encapsulation:2,styles:[],data:{}}));function s(n){return t.Jb(0,[(n()(),t.pb(0,0,null,null,8,"th",[["class","nav"],["routerLinkActive","active"]],[[4,"width","%"]],null,null,null,null)),t.ob(1,1720320,null,2,u.p,[u.o,t.k,t.D,t.h],{routerLinkActiveOptions:[0,"routerLinkActiveOptions"],routerLinkActive:[1,"routerLinkActive"]},null),t.Fb(603979776,2,{links:1}),t.Fb(603979776,3,{linksWithHrefs:1}),t.Cb(4,{exact:0}),(n()(),t.pb(5,0,null,null,3,"div",[],null,null,null,null,null)),(n()(),t.pb(6,0,null,null,2,"a",[],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(n,l,e){var u=!0;return"click"===l&&(u=!1!==t.zb(n,7).onClick(e.button,e.ctrlKey,e.metaKey,e.shiftKey)&&u),u},null,null)),t.ob(7,671744,[[3,4]],0,u.q,[u.o,u.a,i.h],{routerLink:[0,"routerLink"]},null),(n()(),t.Hb(8,null,["",""]))],function(n,l){var e=n(l,4,0,!0);n(l,1,0,e,"active"),n(l,7,0,t.rb(1,"",l.context.$implicit.link,""))},function(n,l){n(l,0,0,100/l.component.fusionOptions.length),n(l,6,0,t.zb(l,7).target,t.zb(l,7).href),n(l,8,0,l.context.$implicit.title)})}function c(n){return t.Jb(0,[(n()(),t.pb(0,0,null,null,2,"tr",[],null,null,null,null,null)),(n()(),t.pb(1,0,null,null,1,"th",[],[[1,"colspan",0]],null,null,null,null)),(n()(),t.Hb(-1,null,[" DLC marked as excluded in fusion settings, results may be inaccurate! "]))],null,function(n,l){n(l,1,0,l.component.fusionOptions.length)})}function f(n){return t.Jb(0,[(n()(),t.pb(0,0,null,null,2,"tr",[],null,null,null,null,null)),(n()(),t.pb(1,0,null,null,1,"th",[],[[1,"colspan",0]],null,null,null,null)),t.yb(null,0)],null,function(n,l){n(l,1,0,l.component.fusionOptions.length)})}function p(n){return t.Jb(2,[t.Fb(402653184,1,{stickyTable:0}),(n()(),t.pb(1,0,null,null,14,"div",[],null,null,null,null,null)),(n()(),t.pb(2,0,[["stickyTable",1]],null,11,"table",[["appPositionSticky",""]],[[2,"position-sticky",null],[4,"zIndex",null]],null,null,null,null)),t.ob(3,212992,[[1,4]],0,r.a,[t.k,t.D,a.a],null,null),(n()(),t.pb(4,0,null,null,9,"thead",[],null,null,null,null,null)),(n()(),t.pb(5,0,null,null,2,"tr",[],null,null,null,null,null)),(n()(),t.gb(16777216,null,null,1,null,s)),t.ob(7,278528,null,0,i.j,[t.O,t.L,t.s],{ngForOf:[0,"ngForOf"]},null),(n()(),t.gb(16777216,null,null,1,null,c)),t.ob(9,16384,null,0,i.k,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(n()(),t.pb(10,0,null,null,0,"tr",[],null,null,null,null,null)),(n()(),t.gb(16777216,null,null,1,null,f)),t.ob(12,16384,null,0,i.k,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(n()(),t.pb(13,0,null,null,0,"tr",[],null,null,null,null,null)),(n()(),t.pb(14,16777216,null,null,1,"router-outlet",[],null,null,null,null,null)),t.ob(15,212992,null,0,u.s,[u.b,t.O,t.j,[8,null],t.h],null,null)],function(n,l){var e=l.component;n(l,3,0),n(l,7,0,e.fusionOptions),n(l,9,0,e.excludedDlc),n(l,12,0,e.showFusionAlert),n(l,15,0)},function(n,l){n(l,2,0,t.zb(l,3).cPositionSticky,t.zb(l,3).sZIndex)})}},NcuS:function(n,l,e){"use strict";e.d(l,"a",function(){return h});var t=e("CcnG"),u=e("JZP4"),i=e("DUID"),r=e("TzHT"),a=e("uoMG"),o=e("GVDr"),s=e("veAJ"),c=t.nb({encapsulation:2,styles:[],data:{}});function f(n){return t.Jb(2,[(n()(),t.pb(0,0,null,null,2,"app-fusion-pair-table",[],null,null,null,u.b,u.a)),t.Eb(4608,null,i.a,i.a,[[3,i.a]]),t.ob(2,49152,null,0,r.a,[a.a],{rowData:[0,"rowData"],leftHeader:[1,"leftHeader"],rightHeader:[2,"rightHeader"],title:[3,"title"]},null)],function(n,l){var e=l.component;n(l,2,0,e.fusionPairs,"Ingredient 2","Result",e.currentDemon+" x Ingredient 2 = Result")},null)}function p(n){return t.Jb(0,[(n()(),t.pb(0,0,null,null,1,"app-smt-fusion-table",[],null,null,null,f,c)),t.ob(1,245760,null,0,o.a,[s.a,t.h,a.b],null,null)],function(n,l){n(l,1,0)},null)}var h=t.lb("app-smt-fusion-table",o.a,p,{},{},[])},cg0H:function(n,l,e){"use strict";e.d(l,"a",function(){return i}),e.d(l,"b",function(){return h});var t=e("CcnG"),u=e("Ip0R"),i=(e("0ZaJ"),t.nb({encapsulation:2,styles:[],data:{}}));function r(n){return t.Jb(0,[(n()(),t.pb(0,0,null,null,1,"th",[],null,null,null,null,null)),(n()(),t.Hb(-1,null,["Price"]))],null,null)}function a(n){return t.Jb(0,[(n()(),t.pb(0,0,null,null,1,"th",[],null,null,null,null,null)),(n()(),t.Hb(1,null,["",""]))],null,function(n,l){n(l,1,0,l.context.$implicit)})}function o(n){return t.Jb(0,[(n()(),t.pb(0,0,null,null,1,"th",[],null,null,null,null,null)),(n()(),t.Hb(-1,null,["Inherits"]))],null,null)}function s(n){return t.Jb(0,[(n()(),t.pb(0,0,null,null,1,"th",[],null,null,null,null,null)),(n()(),t.Hb(1,null,["",""]))],null,function(n,l){n(l,1,0,l.context.$implicit)})}function c(n){return t.Jb(0,[(n()(),t.pb(0,0,null,null,1,"td",[],null,null,null,null,null)),(n()(),t.Hb(1,null,["",""]))],null,function(n,l){n(l,1,0,l.component.price)})}function f(n){return t.Jb(0,[(n()(),t.pb(0,0,null,null,1,"td",[],null,null,null,null,null)),(n()(),t.Hb(1,null,["",""]))],null,function(n,l){n(l,1,0,l.context.$implicit)})}function p(n){return t.Jb(0,[(n()(),t.pb(0,0,null,null,2,"td",[],null,null,null,null,null)),(n()(),t.pb(1,0,null,null,1,"div",[],[[8,"className",0]],null,null,null,null)),(n()(),t.Hb(2,null,["",""]))],null,function(n,l){var e=l.component;n(l,1,0,t.rb(1,"element-icon ",e.inherit,"")),n(l,2,0,e.inherit)})}function h(n){return t.Jb(2,[(n()(),t.pb(0,0,null,null,22,"table",[],null,null,null,null,null)),(n()(),t.pb(1,0,null,null,12,"thead",[],null,null,null,null,null)),(n()(),t.pb(2,0,null,null,2,"tr",[],null,null,null,null,null)),(n()(),t.pb(3,0,null,null,1,"th",[],[[1,"colSpan",0]],null,null,null,null)),(n()(),t.Hb(4,null,[" "," "])),(n()(),t.pb(5,0,null,null,8,"tr",[],null,null,null,null,null)),(n()(),t.gb(16777216,null,null,1,null,r)),t.ob(7,16384,null,0,u.k,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(n()(),t.gb(16777216,null,null,1,null,a)),t.ob(9,278528,null,0,u.j,[t.O,t.L,t.s],{ngForOf:[0,"ngForOf"]},null),(n()(),t.gb(16777216,null,null,1,null,o)),t.ob(11,16384,null,0,u.k,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(n()(),t.gb(16777216,null,null,1,null,s)),t.ob(13,278528,null,0,u.j,[t.O,t.L,t.s],{ngForOf:[0,"ngForOf"]},null),(n()(),t.pb(14,0,null,null,8,"tbody",[],null,null,null,null,null)),(n()(),t.pb(15,0,null,null,7,"tr",[],null,null,null,null,null)),(n()(),t.gb(16777216,null,null,1,null,c)),t.ob(17,16384,null,0,u.k,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(n()(),t.gb(16777216,null,null,1,null,f)),t.ob(19,278528,null,0,u.j,[t.O,t.L,t.s],{ngForOf:[0,"ngForOf"]},null),(n()(),t.gb(16777216,null,null,1,null,p)),t.ob(21,16384,null,0,u.k,[t.O,t.L],{ngIf:[0,"ngIf"]},null),t.yb(null,0)],function(n,l){var e=l.component;n(l,7,0,e.price),n(l,9,0,e.statHeaders),n(l,11,0,e.inherit),n(l,13,0,e.fusionHeaders),n(l,17,0,e.price),n(l,19,0,e.stats),n(l,21,0,e.inherit)},function(n,l){var e=l.component;n(l,3,0,e.stats.length+e.fusionHeaders.length+(e.inherit?1:0)+(e.price?1:0)),n(l,4,0,e.title)})}},oqlO:function(n,l,e){"use strict";e.d(l,"e",function(){return t}),e.d(l,"b",function(){return u}),e.d(l,"g",function(){return i}),e.d(l,"a",function(){return a}),e.d(l,"f",function(){return o}),e.d(l,"d",function(){return s}),e.d(l,"c",function(){return c});var t=["Omega","Megami","Deity","Vile","Snake","Dragon","Divine","Avian","Fallen","Avatar","Beast","Wilder","Genma","Fairy","Tyrant","Kishin","Touki","Jaki","Femme","Ghost","Fiend","Hero","Element","Mitama","Foreigner"],u=["Erthys","Aeros","Aquans","Flaemis"],i=["phys","fire","ice","elec","force","curse"],r=i.concat("strike","almighty","none","recovery","support","passive","auto"),a=["HP","MP","St","Ma","Vi","Ag"],o={w:1125,"-":100,s:50,n:0,r:-100,d:-1100},s=t.reduce(function(n,l,e){return n[l]=e,n},{}),c=r.reduce(function(n,l,e){return n[l]=e,n},{})},yir4:function(n,l,e){"use strict";e.d(l,"a",function(){return i});var t=e("oqlO"),u=e("Knth"),i=function(){function n(n,l,e,t){this.specialRecipes={},this.racialSkills={},this._dlcDemons={},this.initImportedData(n,l,e,t),this.updateDerivedData()}return n.estimateBasePrice=function(n){var l=n.slice(2).reduce(function(n,l){return l+n},0);return Math.floor(((-.01171*l+5.0625)*l-129)*l)+1115},n.prototype.initImportedData=function(l,e,i,r){for(var a={},o={},s={},c={},f={},p=0,h=Object.entries(u);p<h.length;p++){var b=h[p];c[b[0]]={skill:(w=b[1]).skill,effect:w.effect,enskill:w.enskill||"",eneffect:w.eneffect||""}}for(var m=0,d=l;m<d.length;m++)for(var g=0,k=Object.entries(d[m]);g<k.length;g++){var v=k[g],y=v[0];a[y]={name:y,race:(w=v[1]).race,lvl:w.lvl,stats:w.stats,price:n.estimateBasePrice(w.stats),resists:w.resists.split("").map(function(n){return t.f[n]}),skills:{},command:w.command||{},passive:w.passive||{},fusion:"normal",unique:!0===w.unique,raceup:w.raceup||0};var O=c[w.race]||c[y];O&&(a[y].racial=O),w.raceup&&(a[y].raceup=w.raceup)}for(var F=0,D=e;F<D.length;F++)for(var P=0,C=Object.entries(D[F]);P<C.length;P++){var A=C[P],M=A[0];o[M]={name:M,element:(w=A[1]).element,cost:w.cost||0,rank:w.rank||99,effect:w.effect,transfer:[{demon:w.prereq||"",level:-100}],learnedBy:[],level:0},"auto"===o[M].element&&(o[M].rank=0)}for(var I=0,S=i;I<S.length;I++)for(var x=S[I],H=0,T=Object.entries(x);H<T.length;H++){var L=T[H],_=L[0],w=L[1];s[_]=x[_],a[_].fusion="special"}for(var J=0,E=t.e;J<E.length;J++)f[E[J]]={};for(var R=0,j=Object.entries(a);R<j.length;R++){var N=j[R],G=N[0],q=N[1];f[q.race][q.lvl]=G;for(var U=0,$=Object.entries(q.command).concat(Object.entries(q.passive));U<$.length;U++){var z=$[U];o[z[0]].learnedBy.push({demon:G,level:z[1]})}}this.demons=a,this.skills=o,this.dlcDemons=Object.assign({},r),this.racialSkills=c,this.specialRecipes=s,this.invertedDemons=f},n.prototype.updateDerivedData=function(){for(var n=this,l=Object.assign({},this.demons),e=Object.keys(this.skills).map(function(l){return n.skills[l]}),u={},i={},r=0,a=t.e;r<a.length;r++)u[m=a[r]]=[],i[m]=[];for(var o=0,s=Object.entries(this.demons);o<s.length;o++){var c=s[o],f=c[0],p=c[1];u[p.race].push(p.lvl),this.specialRecipes.hasOwnProperty(f)||i[p.race].push(p.lvl)}for(var h=0,b=t.e;h<b.length;h++){var m;u[m=b[h]].sort(function(n,l){return n-l}),i[m].sort(function(n,l){return n-l})}for(var d=0,g=Object.entries(this._dlcDemons);d<g.length;d++){var k=g[d];if(!k[1])for(var v=function(n){var e=y.demons[n],t=e.race,r=e.lvl;delete l[n],u[t]=u[t].filter(function(n){return n!==r}),i[t]=i[t].filter(function(n){return n!==r})},y=this,O=0,F=k[0].split(",");O<F.length;O++)v(F[O])}this._allDemons=Object.keys(l).map(function(n){return l[n]}),this._allSkills=e,this.allIngredients=u,this.allResults=i},Object.defineProperty(n.prototype,"dlcDemons",{get:function(){return this._dlcDemons},set:function(n){this._dlcDemons=n,this.updateDerivedData()},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"allDemons",{get:function(){return this._allDemons},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"allSkills",{get:function(){return this._allSkills},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"specialDemons",{get:function(){var n=this;return Object.keys(this.specialRecipes).map(function(l){return n.demons[l]})},enumerable:!0,configurable:!0}),n.prototype.getDemon=function(n){return this.demons[n]},n.prototype.getSkill=function(n){return this.skills[n]},n.prototype.getSkills=function(n){var l=this,e=n.map(function(n){return l.skills[n]});return e.sort(function(n,l){return 1e4*(t.c[n.element]-t.c[l.element])+n.rank-l.rank}),e},n.prototype.getIngredientDemonLvls=function(n){return this.allIngredients[n]||[]},n.prototype.getResultDemonLvls=function(n){return this.allResults[n]||[]},n.prototype.getSpecialNameEntries=function(n){return this.specialRecipes[n]||[]},n.prototype.getSpecialNamePairs=function(l){return n.MITAMA_FUSIONS[l]||[]},n.prototype.reverseLookupDemon=function(n,l){return this.invertedDemons[n][l]},n.prototype.reverseLookupSpecial=function(n){return[]},n.prototype.isElementDemon=function(n){return"Element"===this.demons[n].race},n.MITAMA_FUSIONS={"Ara Mitama":[{name1:"Erthys",name2:"Aquans"},{name1:"Aeros",name2:"Flaemis"}],"Kusi Mitama":[{name1:"Erthys",name2:"Flaemis"},{name1:"Aeros",name2:"Aquans"}],"Nigi Mitama":[{name1:"Erthys",name2:"Aeros"}],"Saki Mitama":[{name1:"Aquans",name2:"Flaemis"}]},n}()}}]);