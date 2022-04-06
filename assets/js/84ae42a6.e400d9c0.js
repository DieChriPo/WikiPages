"use strict";(self.webpackChunkant_me_doc=self.webpackChunkant_me_doc||[]).push([[692],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return m}});var i=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},s=Object.keys(e);for(i=0;i<s.length;i++)t=s[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)t=s[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=i.createContext({}),o=function(e){var n=i.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},d=function(e){var n=o(e.components);return i.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},h=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,d=u(e,["components","mdxType","originalType","parentName"]),h=o(t),m=r,p=h["".concat(l,".").concat(m)]||h[m]||c[m]||s;return t?i.createElement(p,a(a({ref:n},d),{},{components:t})):i.createElement(p,a({ref:n},d))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=t.length,a=new Array(s);a[0]=h;var u={};for(var l in n)hasOwnProperty.call(n,l)&&(u[l]=n[l]);u.originalType=e,u.mdxType="string"==typeof e?e:r,a[1]=u;for(var o=2;o<s;o++)a[o]=t[o];return i.createElement.apply(null,a)}return i.createElement.apply(null,t)}h.displayName="MDXCreateElement"},6485:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return u},metadata:function(){return o},toc:function(){return c}});var i=t(7462),r=t(3366),s=(t(7294),t(3905)),a=["components"],u={title:"Nahrungssuche",sidebar_position:3},l=void 0,o={unversionedId:"tutorials/collectfood",id:"tutorials/collectfood",title:"Nahrungssuche",description:"In diesem Tutorial lernst du, wie du deinen Ameisen beibringst, sich zu bewegen und Nahrung zu sammeln.",source:"@site/docs/tutorials/collectfood.mdx",sourceDirName:"tutorials",slug:"/tutorials/collectfood",permalink:"/docs/tutorials/collectfood",editUrl:"https://github.com/AntMeNet/WikiPages/edit/main/docs/tutorials/collectfood.mdx",tags:[],version:"current",lastUpdatedBy:"Yannick Schrade",lastUpdatedAt:1649087584,formattedLastUpdatedAt:"4.4.2022",sidebarPosition:3,frontMatter:{title:"Nahrungssuche",sidebar_position:3},sidebar:"tutorials",previous:{title:"Spielstart",permalink:"/docs/tutorials/gamestart"},next:{title:"Kampf",permalink:"/docs/tutorials/fight"}},d={},c=[],h={toc:c};function m(e){var n=e.components,u=(0,r.Z)(e,a);return(0,s.kt)("wrapper",(0,i.Z)({},h,u,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"In diesem Tutorial lernst du, wie du deinen Ameisen beibringst, sich zu bewegen und Nahrung zu sammeln."),(0,s.kt)("p",null,"Diese Vorgaben geben wir in der Entwicklungsumgebung ein \u2013 wir programmieren die Ameisen, das auszuf\xfchren, was wir ihnen vorgeben."),(0,s.kt)("p",null,"Unsere frisch erstellte Ameisenkolonie im Sandkasten ist in der Programmierung eine sogenannte Klasse. Darunter versteht man einen Plan, der festlegt, wie sich mehrere \xe4hnliche Objekte verhalten sollen. Dieser Plan beschreibt Attribute (Eigenschaften) und Methoden (Verhaltensweisen) der Objekte."),(0,s.kt)("p",null,"Bei AntMe! sind Objekte die Ameisen. Indem wir ihre Klasse bearbeiten, legen wir ihre Verhaltensweisen fest. Zun\xe4chst wollen wir sie dazu bringen, sich zu bewegen.\nSuche dazu auf der rechten Seite im Solution Explorer die Zeile AlphaClass.cs und klicke sie."),(0,s.kt)("p",null,(0,s.kt)("img",{src:t(4512).Z,width:"1280",height:"992"})),(0,s.kt)("p",null,"Damit \xf6ffnest du im Code Editor in der Bildschirmmitte die programmierbare Klasse unserer Kolonie \u201eAlpha\u201c. Im unteren Teil siehst du die f\xfcnf Bl\xf6cke Kasten, Fortbewegung, Nahrung, Kommunikation und Kampf. Einen solchen Block nennt man \u201eMethode\u201c.\nAls Methoden bezeichnet man Unterprogramme, die das Verhalten von Objekten beschreiben.\nIndem man einem einzelnen Objekt vorgibt, wie er sich verhalten soll, k\xf6nnen Objekte untereinander in Verbindung treten.\nGenau das sollen unsere Ameisen jetzt leisten, sie sollen ausschw\xe4rmen und nach Nahrung suchen."),(0,s.kt)("p",null,(0,s.kt)("img",{src:t(778).Z,width:"1281",height:"993"})),(0,s.kt)("p",null,"Fortbewegung gibt den Ameisen vor, wie sie sich bewegen sollen. Klicke nun auf das kleine Pluszeichen links von Fortbewegung und schreibe den folgenden Programmbefehl bei \u201eWartet ( )\u201c in die Zeile zwischen die { }:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cs"},"public override void Wartet()\n{\n    GeheGeradeaus();\n}\n")),(0,s.kt)("p",null,"Das sieht dann im Editor insgesamt so aus:"),(0,s.kt)("p",null,(0,s.kt)("img",{src:t(4099).Z,width:"1281",height:"992"})),(0,s.kt)("p",null,"Klicke nun auf die gr\xfcne \u201ePlay\u201c-Taste in der Entwicklungsumgebung, um die AntMe!-3D-Ansicht zu starten.\nJetzt wirkt sich dein Programmierbefehl \u201egehe gerade aus\u201c in der Spielwelt aus. Schon schw\xe4rmen die Ameisen aus dem Nest und verteilen sich im Sandkasten."),(0,s.kt)("p",null,(0,s.kt)("img",{src:t(1840).Z,width:"817",height:"519"})),(0,s.kt)("p",null,"Im Moment rennen unsere Ameisen ziellos durch die Gegend. Dies \xe4nderst du, indem du sie auf Nahrungssuche schickst."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cs"},"public override void Sieht(Zucker zucker)\n{\n\n}\n")),(0,s.kt)("p",null,"\xc4ndere die Methode nun wie folgt ab:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cs"},"public override void Sieht(Zucker zucker)\n{\n    if(AktuelleLast == 0)\n    {\n        GeheZuZiel(zucker);\n    }\n}\n")),(0,s.kt)("p",null,"Damit gibst du deinen Ameisen vor, dass sie sich zu einem Zuckerhaufen bewegen sollen, sobald sie ihn sehen. Dies tun sie aber nur unter der Bedingung, wenn (\u201eif\u201c) ihre aktuelle Last = 0 ist, also wenn sie noch keine Last tragen."),(0,s.kt)("p",null,"Suche dir nun die Methode \u201eSieht\u201c, die f\xfcr das Obst zust\xe4ndig ist. \xc4ndere sie genau so ab wie auf dem letzten Bild beschrieben, au\xdfer dass du in die Klammern (obst) anstelle von (zucker) setzt. "),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cs"},"public override void Sieht(Obst obst)\n{\n    if(AktuelleLast == 0)\n    {\n        GeheZuZiel(obst);\n    }\n}\n")),(0,s.kt)("p",null,"Der Unterschied besteht darin, dass die Ameisen jetzt zu einem Obstst\xfcck laufen anstelle eines Zuckerhaufens. Auch das passiert unter der Voraussetzung, dass sie noch keine Last geladen haben."),(0,s.kt)("p",null,"Im Editor schaut es so aus:"),(0,s.kt)("p",null,(0,s.kt)("img",{src:t(6095).Z,width:"896",height:"690"})),(0,s.kt)("p",null,"Jetzt laufen deine Ameisen zu einem Zuckerhaufen oder einem Obstst\xfcck, sobald sie es sehen. Sobald deine Ameisen an einer Nahrungsquelle angelangt sind, passiert aber noch nichts.\nWir sollten jetzt den Ameisen mitteilen, was sie tun sollen, wenn sie an einer Nahrungsquelle angekommen sind."),(0,s.kt)("p",null,"Suche die Methode \u201eZielErreicht\u201c, die f\xfcr den Zucker zust\xe4ndig ist. F\xfcge ihr anschlie\xdfend die folgenden Zeilen hinzu:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cs"},"public override void ZielErreicht(Zucker zucker)\n{\n    Nimm(zucker);\n    GeheZuBau();\n}\n")),(0,s.kt)("p",null,"Suche anschlie\xdfend die Methode \u201eZielErreicht\u201c, die f\xfcr das Obst zust\xe4ndig ist. \xc4ndere sie ebenfalls ab, indem du in die Klammern (obst) einsetzt anstatt (zucker)."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cs"},"public override void ZielErreicht(Obst zucker)\n{\n    Nimm(obst);\n    GeheZuBau();\n}\n")),(0,s.kt)("p",null,"Im Editor sieht es wie folgt aus:"),(0,s.kt)("p",null,(0,s.kt)("img",{src:t(437).Z,width:"899",height:"692"})),(0,s.kt)("p",null,"Jetzt suchen deine Ameisen nach Nahrung ( Zucker und Obst) und laufen dorthin, sobald sie sie sehen. Wenn sie dort angekommen sind, nehmen sie Nahrung auf und tragen sie zur\xfcck in den Bau."),(0,s.kt)("p",null,(0,s.kt)("img",{src:t(7857).Z,width:"896",height:"689"})),(0,s.kt)("p",null,"Daf\xfcr hast du acht Zeilen an Quelltext (auch Quellcode genannt) geschrieben. "),(0,s.kt)("p",null,"Quelltext nennt man den in einer Programmiersprache geschriebenen Text eines Computerprogramms, das in Maschinensprache \xfcbersetzt werden kann.\nDiese \xdcbersetzung gibt dem Computer vor, was er ausf\xfchren soll. "),(0,s.kt)("p",null,"Einen solchen \xdcbersetzer nennt man Compiler (lat. f\xfcr compilare = anh\xe4ufen).\nEin Compiler ist also eine Computeranwendung, die ein anderes Programm, das in einer bestimmten Programmiersprache geschrieben ist, so \xfcbersetzt, dass ein Computer sie ausf\xfchren kann."),(0,s.kt)("p",null,(0,s.kt)("img",{src:t(2619).Z,width:"1041",height:"721"})),(0,s.kt)("p",null,"Wenn du dem Spiel genau zusiehst, wirst du bemerken, dass immer neue Ameisen zu einem Obstst\xfcck hinlaufen, auch wenn schon sehr viele Ameisen es tragen.\nDieses Verhalten kannst du noch verbessern."),(0,s.kt)("p",null,"Suche die Methode \u201eSieht\u201c f\xfcr Obst. \xc4ndere die Zeile so ab, dass sie so aussieht:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cs"},"public override void Sieht(Obst obst)\n{\n    if(AktuelleLast == 0 && BrauchtNochTr\xe4ger(obst))\n    {\n        GeheZuZiel(obst);\n    }\n}\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cs"},"public override void ZielErreicht(Obst obst)\n{\n    if(BrauchtNochTr\xe4ger(obst))\n    {\n        Nimm(obst);\n        GeheZuBau();\n    }\n}\n")),(0,s.kt)("p",null,"In der \u201eSieht\u201c Methode haben wir \xfcberpr\xfcft, ob das Obstst\xfcck noch Ameisen zum Tragen ben\xf6tigt.\nIn der \u201eZielErreicht\u201c Methode \xfcberpr\xfcfen wir das noch einmal mit \u201eif-BrauchtNochTr\xe4ger\u201c.\nDer Grund f\xfcr diese Doppelung: es kann sein, dass das Obstst\xfcck noch einen Tr\xe4ger ben\xf6tigt, wenn die Ameise es sieht.\nWenn die Ameise am Obstst\xfcck etwas sp\xe4ter ankommt, kann aber schon eine andere Ameise an ihrer Stelle hinzugekommen sein und hilft beim Tragen."),(0,s.kt)("p",null,"Damit hast du deinen Ameisen beigebracht, wie sie sich Nahrung in Form von Obst und Zucker besorgen und in ihren Bau tragen k\xf6nnen. F\xfcr jede zum Bau transportierte Zuckereinheit erh\xe4ltst du \xfcbrigens 1 Punkt und f\xfcr jeden Apfel als Obstst\xfcck 250 Punkte."))}m.isMDXComponent=!0},4512:function(e,n,t){n.Z=t.p+"assets/images/Lektion4_1-bf47690743d97d0c59c34edaa9f69172.png"},437:function(e,n,t){n.Z=t.p+"assets/images/Lektion4_10-55aa0a7fd42f6b906d2ce07d5f398d36.png"},7857:function(e,n,t){n.Z=t.p+"assets/images/Lektion4_11-1ea41ce6b60f112302f503dcbe38bf1b.png"},2619:function(e,n,t){n.Z=t.p+"assets/images/Lektion4_12-2ee3ea880f157a12eed56ee370da140a.png"},778:function(e,n,t){n.Z=t.p+"assets/images/Lektion4_2-fc8884a85d2b4a08ac432e4ffced9228.png"},4099:function(e,n,t){n.Z=t.p+"assets/images/Lektion4_4-130c911ff97437aa8e7705a079432d32.png"},1840:function(e,n,t){n.Z=t.p+"assets/images/Lektion4_5-d852c422a736986e86b59d3819e138ef.png"},6095:function(e,n,t){n.Z=t.p+"assets/images/Lektion4_8-dd5216c785e446da3027c24ced36f589.png"}}]);