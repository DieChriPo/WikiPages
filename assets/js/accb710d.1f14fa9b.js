"use strict";(self.webpackChunkant_me_doc=self.webpackChunkant_me_doc||[]).push([[753],{3905:function(e,n,t){t.d(n,{Zo:function(){return o},kt:function(){return h}});var i=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=i.createContext({}),u=function(e){var n=i.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},o=function(e){var n=u(e.components);return i.createElement(d.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},m=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,d=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),m=u(t),h=r,p=m["".concat(d,".").concat(h)]||m[h]||c[h]||a;return t?i.createElement(p,s(s({ref:n},o),{},{components:t})):i.createElement(p,s({ref:n},o))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,s=new Array(a);s[0]=m;var l={};for(var d in n)hasOwnProperty.call(n,d)&&(l[d]=n[d]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var u=2;u<a;u++)s[u]=t[u];return i.createElement.apply(null,s)}return i.createElement.apply(null,t)}m.displayName="MDXCreateElement"},6301:function(e,n,t){t.r(n),t.d(n,{assets:function(){return o},contentTitle:function(){return d},default:function(){return h},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return c}});var i=t(7462),r=t(3366),a=(t(7294),t(3905)),s=["components"],l={title:"Kampf",sidebar_position:4},d=void 0,u={unversionedId:"tutorials/Kampf",id:"tutorials/Kampf",title:"Kampf",description:"In diesem Tutorial geht es erstmals um eine Konfrontation der Ameisen mit Feinden, den Wanzen.",source:"@site/docs/tutorials/Kampf.mdx",sourceDirName:"tutorials",slug:"/tutorials/Kampf",permalink:"/WikiPages/docs/tutorials/Kampf",editUrl:"https://github.com/AntMeNet/WikiPages/tree/develop/docs/tutorials/Kampf.mdx",tags:[],version:"current",lastUpdatedBy:"Yannick Schrade",lastUpdatedAt:1648986653,formattedLastUpdatedAt:"3.4.2022",sidebarPosition:4,frontMatter:{title:"Kampf",sidebar_position:4},sidebar:"tutorials",previous:{title:"Nahrungssuche",permalink:"/WikiPages/docs/tutorials/Nahrungssuche"}},o={},c=[],m={toc:c};function h(e){var n=e.components,l=(0,r.Z)(e,s);return(0,a.kt)("wrapper",(0,i.Z)({},m,l,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In diesem Tutorial geht es erstmals um eine Konfrontation der Ameisen mit Feinden, den Wanzen.\nEine Wanze in einem AntMe!-Spiel ist viel st\xe4rker als eine einzelne Ameise. Mit der Zeit kann sie au\xdferdem noch ihre Lebenspunkte regenerieren.\nBei einem Kampf solltest du m\xf6glichst geschickt vorgehen. Es sollten nicht zu viele deiner Ameisen sterben, die Wanze muss aber am Ende dennoch besiegt werden."),(0,a.kt)("p",null,"Suche bei \u201eKampf\u201c die Methode \u201eSiehtFeind (wanze)\u201c."),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(3).Z,width:"896",height:"689"})),(0,a.kt)("p",null,"F\xfcge ihr folgenden Quelltext hinzu:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"public override void SiehtFeind(Wanze wanze)\n{\n    LassNahrungFallen();\n    if(AnzahlAmeisenInSichtweite >= 2)\n    {\n        GreifeAn(wanze);\n    }\n    else\n    {\n        GeheWegVon(wanze);\n    }\n}\n")),(0,a.kt)("p",null,"Suche nun die \u201eWirdAngegriffen\u201c (wanze) Methode. F\xfcge ihr folgenden Quelltext hinzu:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"public override void WirdAngegriffen(Wanze wanze)\n{\n    if(AktuelleEnergie < MaximaleEnergie / 2)\n    {\n        GeheZuBau();\n    }\n}\n")),(0,a.kt)("p",null,"Was bewirken diese Quelltextzeilen? Wenn eine Ameise eine Wanze sieht, dann schaut sie erstmal, ob sie mindestens zwei Freunde in ihrer N\xe4he hat, damit alle drei zusammen die Wanze angreifen k\xf6nnen.\nStellt die Ameise fest, dass ausreichend Freunde in der N\xe4he sind, dann greift sie die Wanze an und hofft, dass die anderen Ameisen es ihr gleich tun.\nSind nicht genug Freunde in der N\xe4he, l\xe4uft die Ameise weg. In beiden F\xe4llen l\xe4sst sie ihre Nahrung fallen, damit sie schneller laufen kann. "),(0,a.kt)("p",null,"W\xe4hrend des Kampfes \xfcberpr\xfcft die Ameise st\xe4ndig ihren (Lebens-) Energiewert. Hat sie nur noch wenig Energie, l\xe4uft sie zur\xfcck zum Ameisenbau, um sich zu erholen."),(0,a.kt)("p",null,"F\xfcr jede get\xf6tete Wanze bekommst du 100 Punkte."),(0,a.kt)("p",null,"Es gibt noch eine M\xf6glichkeit, das Verhalten deiner Ameisen zu verbessern. Versuch dir vorzustellen, was passiert, wenn sich eine Ameise zwischen einem Zuckerhaufen und einer Wanze befindet und beide in Sichtweite sind.\nEs kann sein, dass die Ameise sich in einem Moment dazu entscheidet, zu dem Zuckerhaufen zu gehen, im n\xe4chsten Moment zu der Wanze und dann wieder zu dem Zuckerhaufen, und so weiter.\nDa die Ameise nicht wei\xdf, wem sie den Vorzug geben soll, wollen wir sie nun gegen die Wanze ins Gefecht schicken. "),(0,a.kt)("p",null,"Suche die zwei von dir zuvor bearbeiteten \u201eSieht\u201c-Methoden f\xfcr Zucker und Obst.\nF\xfcge um den bestehenden Quelltext in beiden Methoden folgende Bedingung hinzu."),(0,a.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Achtung")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Es ist wichtig, dass diese Bedingung den dort bereits vorhandenen Quelltext umschlie\xdft"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"if(!(Ziel is Wanze))\n{\n...\n}\n")),(0,a.kt)("p",null,"Mit diesem Quelltext-Befehl werden deine Ameisen nur dann auf die Nahrung in ihrer N\xe4he reagieren, wenn sie nicht schon einer Wanze nachlaufen oder mit ihr k\xe4mpfen."),(0,a.kt)("p",null,"So sollte es dann im Editor aussehen, nachdem du die Bedingung eingef\xfcgt hast:"),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(3757).Z,width:"921",height:"715"})),(0,a.kt)("p",null,"Wenn du das Spiel nun mit dem gr\xfcnen \u201ePlay\u201c-Ikon startest, wirst du feststellen, dass die Ameisen selten den Kampf mit einer Wanze gewinnen.\nDas passiert meistens, wenn zuf\xe4llig viele Ameisen auf einmal in der N\xe4he einer Wanze sind. Meistens laufen sie aber weg.\nWoran liegt das? Die Quelltext-Befehle f\xfcr den Kampf (Nahrung liegenlassen, gemeinsam angreifen) h\xf6ren sich doch sehr sinnvoll an!\nDas hat folgenden Grund: im Moment ist die Wahrscheinlichkeit sehr gering, dass sich gen\xfcgend Ameisen nahe beieinander aufhalten, wenn eine Wanze in Sichtweite ist.\nIn dem n\xe4chsten Tutorial werden wir eine M\xf6glichkeit kennenlernen mehr Ameisen zusammenzurufen. Au\xdferdem wirst du lernen, wie du deine Ameisen st\xe4rker machst, um eine Wanze schneller besiegen zu k\xf6nnen."))}h.isMDXComponent=!0},3:function(e,n,t){n.Z=t.p+"assets/images/Lektion5_1-503bd5a0fcdcdd6e1aedba410467dc11.png"},3757:function(e,n,t){n.Z=t.p+"assets/images/Lektion5_5-362b7ad1510b073468807aebad5f0edd.png"}}]);