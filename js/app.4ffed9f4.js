(function(t){function e(e){for(var n,i,o=e[0],l=e[1],c=e[2],s=0,u=[];s<o.length;s++)i=o[s],r[i]&&u.push(r[i][0]),r[i]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);d&&d(e);while(u.length)u.shift()();return a.push.apply(a,c||[]),A()}function A(){for(var t,e=0;e<a.length;e++){for(var A=a[e],n=!0,i=1;i<A.length;i++){var o=A[i];0!==r[o]&&(n=!1)}n&&(a.splice(e--,1),t=l(l.s=A[0]))}return t}var n={},i={app:0},r={app:0},a=[];function o(t){return l.p+"js/"+({about:"about",habbit:"habbit",rd:"rd"}[t]||t)+"."+{about:"f58adfe4",habbit:"a655e88e",rd:"b87b79de"}[t]+".js"}function l(e){if(n[e])return n[e].exports;var A=n[e]={i:e,l:!1,exports:{}};return t[e].call(A.exports,A,A.exports,l),A.l=!0,A.exports}l.e=function(t){var e=[],A={about:1};i[t]?e.push(i[t]):0!==i[t]&&A[t]&&e.push(i[t]=new Promise(function(e,A){for(var n="css/"+({about:"about",habbit:"habbit",rd:"rd"}[t]||t)+"."+{about:"784aac93",habbit:"31d6cfe0",rd:"31d6cfe0"}[t]+".css",r=l.p+n,a=document.getElementsByTagName("link"),o=0;o<a.length;o++){var c=a[o],s=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(s===n||s===r))return e()}var u=document.getElementsByTagName("style");for(o=0;o<u.length;o++){c=u[o],s=c.getAttribute("data-href");if(s===n||s===r)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var n=e&&e.target&&e.target.src||r,a=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=n,delete i[t],d.parentNode.removeChild(d),A(a)},d.href=r;var f=document.getElementsByTagName("head")[0];f.appendChild(d)}).then(function(){i[t]=0}));var n=r[t];if(0!==n)if(n)e.push(n[2]);else{var a=new Promise(function(e,A){n=r[t]=[e,A]});e.push(n[2]=a);var c,s=document.createElement("script");s.charset="utf-8",s.timeout=120,l.nc&&s.setAttribute("nonce",l.nc),s.src=o(t),c=function(e){s.onerror=s.onload=null,clearTimeout(u);var A=r[t];if(0!==A){if(A){var n=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src,a=new Error("Loading chunk "+t+" failed.\n("+n+": "+i+")");a.type=n,a.request=i,A[1](a)}r[t]=void 0}};var u=setTimeout(function(){c({type:"timeout",target:s})},12e4);s.onerror=s.onload=c,document.head.appendChild(s)}return Promise.all(e)},l.m=t,l.c=n,l.d=function(t,e,A){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:A})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var A=Object.create(null);if(l.r(A),Object.defineProperty(A,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)l.d(A,n,function(e){return t[e]}.bind(null,n));return A},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/",l.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var d=s;a.push([0,"chunk-vendors"]),A()})({0:function(t,e,A){t.exports=A("56d7")},"171e":function(t,e,A){t.exports=A.p+"img/head.68cdf875.jpg"},"21bb":function(t,e,A){"use strict";var n=A("bcc9"),i=A.n(n);i.a},"3dbe":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAQAAADZc7J/AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAAHdElNRQfjCAYRMySck583AAAB6klEQVRIx53Tz0uUURTG8c9MY2VGyPgjIhOLFkVSkLSJdmGmUCYRBtGqXQQFCkUSQdSiWgQtwj/AVYugRaDSqkVQtBSCwoUhjJZWqDFNpm+LGYd3Jod3Xs/Z3MO53+fec+65CZUsZZdGzZg1L+Ovqu2gIeOWBCFfNOa2A9FwtzGrJWjYV406XRne6UVFNOyv7F7/7Lmq8EBgTnc53iNbNR4I5JwL451ysfC8xMk1fIcvsfFAYFp9XmB4Q3gg8IyEVpNShbsEcrYW1lm1xTirFt8sgj1qCnuW7eVmSPGiOj8EAvdt8kG/Ld6aUuOaUYkCdjlEDKZ0hpqZ8cuCesxYMSsj54ZhyzJmBTp04GyIOJVyKGI233tZXJ9xtyzbntQQOd5PiquHmrwuyTUkLUTg7aEd+3RpK8n+TpqOEHhQbB4XjNhfkp1JmigDDkvrCcVH9YdKSEu7E8q+S3nuUjHsswRadPnsiPMaNXvkp14dTsiCxpDAOJt93fAkzqtN+uNW5DtUsqf5OyW82dD5U7atKTX5GBtfKZlhbbG/9FB5PU1GY+DD67Uk6apMVfjj0HCVWZ1BExG1X49+nnYDRkyug3/XV/0r9/6Hj2mJMyalAjOuVK48SmDJPdvjwXBcIPDJgHR8OG/HtEZt+QexHscgDSJx+AAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxOS0wOC0wNlQxNTo1MTozNiswMjowMNfBBiUAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTktMDgtMDZUMTU6NTE6MzYrMDI6MDCmnL6ZAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAABJRU5ErkJggg=="},"56d7":function(t,e,A){"use strict";A.r(e);A("cadf"),A("551c"),A("f751"),A("097d");var n=A("2b0e"),i=A("bc3a"),r=A.n(i),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{staticClass:"link",attrs:{to:"/"}},[t._v("Resume")]),n("router-link",{staticClass:"link",attrs:{to:"/portfolio"}},[t._v("Portfolio")]),n("a",{attrs:{href:"http://allen5103.github.io/#/habbit",target:"_blank"}},[t._v("rd")])],1),n("router-view"),n("a",{staticClass:"toTop",attrs:{href:"javascript:;"},on:{click:function(e){return t.toTop()}}},[n("img",{attrs:{src:A("9701"),alt:""}})])],1)},o=[],l=(A("6b54"),A("ac6a"),{data:function(){return{doc:document,win:window}},methods:{setToTop:function(){var t=this;this.doc.addEventListener("scroll",function(){t.win.scrollY>50?t.doc.querySelector(".toTop").style.display="inline-block":t.doc.querySelector(".toTop").style.display="none"}),this.doc.querySelectorAll(".link").forEach(function(t){t.addEventListener("click",function(){window.scrollTo(0,0)})})},toTop:function(){this.win.scrollTo(0,0)},console:function(t){function e(e){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}(function(t){console.log(t)})},mounted:function(){this.setToTop()}}),c=l,s=(A("5c0b"),A("2877")),u=Object(s["a"])(c,a,o,!1,null,null,null),d=u.exports,f=A("8c4f"),h=function(){var t=this,e=t.$createElement,A=t._self._c||e;return A("div",{staticClass:"home"},[A("div",{staticClass:"introduce"},[A("h2",[t._v(t._s(t.list[0].title))]),t._m(0),A("p",[t._v(t._s(t.list[0].content))])]),t._m(1),A("div",{staticClass:"contact"},[A("h2",[t._v("聯絡方式")]),t._l(t.icon,function(e,n){return A("div",{key:n,staticClass:"way"},[A("img",{attrs:{src:e.icon,alt:e.name}}),t._v("  \n      "),A("span",[t._v(t._s(e.href))])])})],2),A("div",{staticClass:"abilities"},[A("h2",[t._v(t._s(t.list[2].title))]),A("ul",t._l(t.list[2].content,function(e){return A("li",{key:e.class},[A("h3",[t._v(t._s(e.class))]),A("ul",t._l(e.list,function(e){return A("li",{key:e.name,on:{mouseenter:function(e){return t.aniOn(e)},mouseleave:function(e){return t.aniOff(e)}}},[A("p",{staticClass:"tool"},[t._v("\n              "+t._s(e.name)+"-"+t._s(e.ability)+"\n              "),A("span",{staticClass:"bar"},[A("span",{staticClass:"barIn",style:{width:e.ability}})])])])}),0)])}),0)]),A("div",{staticClass:"learnAndWork"},[A("h2",[t._v(t._s(t.list[1].title))]),A("ul",t._l(t.list[1].content,function(e){return A("li",{key:e.do},[A("h3",[t._v("\n          "+t._s(e.do)+"\n          "),A("br"),A("span",[t._v(t._s(e.time))])]),t._l(e.think,function(e,n){return A("p",{key:n},[t._v("- "+t._s(e))])})],2)}),0)])])},m=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"img"},[n("img",{attrs:{src:A("171e"),alt:""}})])},function(){var t=this,e=t.$createElement,A=t._self._c||e;return A("div",{staticClass:"contact"},[A("h2",[t._v("應徵職位")]),A("div",{staticClass:"way"},[A("h3",[t._v("前端工程師")])])])}],p={name:"home",data:function(){return{allen:"allen",name:"劉序泰 HSU-TAI,LIU(Allen)",icon:[{name:"mail",icon:A("fae5"),href:"Email: al510378@gmail.com",link:!1},{name:"lineID",icon:A("3dbe"),href:"Line ID: allen5103",link:!1},{name:"phone",icon:A("d825"),href:"手機: 0970-852-205",link:!1}],list:[{title:"劉序泰HSU-TAI,LIU(Allen)",content:"新北市永和人，臺北醫學大學醫務管理系畢業，醫院工作後認知自己真的不適合行政工作，毅然決然的辭職，並報名資策會的「互動式網站UI/UX設計師就業養成班」，轉而投入前端這個博大精深的無底洞；在程式的學習過程中，越寫越覺得前端真的有趣，直到現在都還記得自己第一次完成一頁切版的小小成就感。"},{title:"學歷/經歷",content:[{time:"2018/10 ~ 迄今",do:"前端工程師 振興發科技有限公司",think:["了解如何與設計師及後端工程師(ASP.NET web service & ASP.NET MVC)溝通配合並完成專案(詳見作品集)","自學 SCSS + PostCSS，用於規劃響應式網頁版型，提升工作效率","使用 AJAX & RESTful API 進行前後端資料交換","使用 jQuery Plugin 整合第三方插件動畫效果","串接Google map API / TGOS API，製作互動式地圖效果","目前公司以後端做為主力，故想尋覓一份前端團隊更有規模的工作"]},{time:"2019/02 ~ 2019/03 & 2019/07 ~ 2019/08",do:"Flycan飛肯 Vue.js前端框架業界開發實戰應用課程",think:["身為一個2019的前端工程師，知道只有jQuery是不夠的","選擇了Vue，除了一開始的自學外，還幸運的在飛肯受到奶綠茶老師的指導；並期望能在未來能實際應用於工作中"]},{time:"2018/04 ~ 2018/09",do:"台北資策會 互動式網站UI/UX設計師就業養成 結訓",think:["設計：Photoshop/ Illustrator的應用，培養對視覺美感的敏銳度，提升與設計師配合的效率跟畫面一制性，及製作RWD畫面的流暢度","程式：HTML5/ CSS3/ jQuery / Javascript 的基礎奠定，透過結訓專題，從靜態網頁到動態特效，均能靈活運用，同時擅於自學新寫法提升效能"]},{time:"2016/03 ~ 2017/11",do:"計畫助理 國泰綜合醫院 教學部",think:["在醫院這個小型社會，在參與 醫院評鑑 及 規劃醫師在職課程 的過程中，學到如何與人有效溝通，以及在體制內有效率的完成任務。"]},{time:"2010/09 ~ 2014/06",do:"臺北醫學大學 醫務管理系 畢業",think:["結束學生的身份，對未來有些迷惘但更多的是期待。"]}]},{title:"能力值/熟悉程度",content:[{class:"語言",list:[{name:"中文",ability:"95%"},{name:"英文",ability:"80%"}]},{class:"設計軟體",list:[{name:"Adobe Photoshop",ability:"50%"},{name:"Adobe Illustrator",ability:"50%"}]},{class:"前端技術",list:[{name:"CSS/CSS3/RWD",ability:"90%"},{name:"SCSS",ability:"70%"},{name:"Javascript/ES5/ES6/AJAX",ability:"80%"},{name:"jQuery",ability:"90%"},{name:"Vue.js/Vuex",ability:"60%"},{name:"SVN",ability:"60%"},{name:"Git",ability:"50%"}]}]},{title:"聯絡方式",content:[]}]}},methods:{aniOn:function(t){t.target.querySelector(".barIn").classList.add("ani")},aniOff:function(t){t.target.querySelector(".barIn").classList.remove("ani")}}},g=p,b=(A("21bb"),A("a359"),Object(s["a"])(g,h,m,!1,null,"0c85e588",null)),v=b.exports;n["a"].use(f["a"]);var U=new f["a"]({routes:[{path:"/",name:"home",component:v},{path:"/portfolio",name:"portfolio",component:function(){return A.e("about").then(A.bind(null,"f820"))},children:[{path:"rd",name:"rd",component:function(){return A.e("rd").then(A.bind(null,"4018"))}}]},{path:"/habbit",name:"habbit",component:function(){return A.e("habbit").then(A.bind(null,"bc61"))}}]});n["a"].prototype.$http=r.a,n["a"].config.productionTip=!1,new n["a"]({router:U,render:function(t){return t(d)}}).$mount("#app")},"5c0b":function(t,e,A){"use strict";var n=A("5e27"),i=A.n(n);i.a},"5e27":function(t,e,A){},9701:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAQAAADZc7J/AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAAHdElNRQfjCAYTBBO3rU5iAAAA7ElEQVRIx+3UIW/CQByG8QcIgTQgcCTLDBMzq5hYMoNHgZ0emo9AMEv4GOiJSfYJtmRmwU1sGggJhgSYgnemQCjHXQuZ67/mxP2eXnJNwTYNpvQpcuL4zBHilcwpvMQPCp5ufJ6mv+VCNOMGnva4+OU+Dq+zDgXEmMuo/JrZARfiEy8KzzMwciFeSLkDvaNciI6LP1q5WPNg4zcsHAGx5O4YL/Dl5EIMuTAHniNxIT7IHnI/MhfidsN21+LR5ipYl6kaTthiEqxGvNvvomZ8a8W0Ne3+MOyTBJJAEvjXgM7NlvkO/QtWvJEzbf0DYVjJS890/Z8AAAAldEVYdGRhdGU6Y3JlYXRlADIwMTktMDgtMDZUMTc6MDQ6MTkrMDI6MDCUjqP8AAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE5LTA4LTA2VDE3OjA0OjE5KzAyOjAw5dMbQAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAAASUVORK5CYII="},a359:function(t,e,A){"use strict";var n=A("f882"),i=A.n(n);i.a},bcc9:function(t,e,A){},d825:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAQAAADZc7J/AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAAHdElNRQfjCAYSMDZGQQPlAAACGElEQVRIx5WUTUhUURTHf+OMWZmI9AElmrSokDaRiUiSEEGhQkGLkhYhOCsXQYRUC8GIRBEX4soPkLRFtOlDFBGRImhR1KJdJMGoGYQyUCk6806Ldxvfu+++j/m/1bnnnN89995zXpww9fCQUxSxiBUaa9RLBEFY4RGHve54KKCcvRykkBIaaGeTD+ZKqnjNN7p9gLu5yVtVyUcqvAHHWVLuZyR8a2nkizrMWbfjBCsqXRCeBhxrF/0Iwm9qdxYPkHKkexF3uMI+h51kG+EHR/8vjGrpgvCEmPLG+IuQZpD9OUQbgvCJQttcMgCE6yr4EFtq5RctOcRjBKHTNraMgB7HC1xmGkHIkFRrCT4j/KES4KchfZsa7fqukkbI0KTsOiyEfoBZT3qWW4YXOE0aYZUyZU8jrFMMtyOlA1xDEHqV1YwgtMIxLBfgLv6aQ1hjDwBx1hFGC1hk1hV0JAAwBJTRAECWN0AjQJOrgo2dFvGohPeMUK+sGi7a28V450IsRJhRTee0i+zOFwDjGqIjX0CpNlIWbfkiLpDRuvGGFlFPH625MTOoUzuGRRcFOW9SbTDhf8Uxw2gvUAVAu6PdJv0RcZ57EBsMcJ9swC/HpSKmjOOtfwGIBMOREF1BL/JAK9n0fQ1+1PN8DwG8COuLUsYC6lgOGDmHzjBvTF+lOkq6rUu80no0xcno6bYquccMKbIsM0a50/UPeXl+1lD6oZQAAAAldEVYdGRhdGU6Y3JlYXRlADIwMTktMDgtMDZUMTY6NDg6NTQrMDI6MDAGYIZPAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE5LTA4LTA2VDE2OjQ4OjU0KzAyOjAwdz0+8wAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAAASUVORK5CYII="},f882:function(t,e,A){},fae5:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAQAAADZc7J/AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADdcAAA3XAUIom3gAAAAHdElNRQfjCAYRMipiMINxAAABuElEQVRIx9XVwUtUURQG8N/Mc5wJ1FFKXIgQ1EKkUiIXQbbwbzBCInOV6/4NFy0UigKJinbV2mUbAykGgimUsMGi1YAlgrxR570WmUTzxpznps7Z3Xu+c77z3XPv5b+3jMCkUd2yLSIj37z2os20O/q0pyi+Y1wPS3bFKX3Pm4yqkzIpBYhUsyrqqRWMrAbaXZFPxSG25S6nPLEparn/yKanegOhVb36nGjpIOuqFs1aD4xa8VZel065I8JDn7w0q2KEZeO6FVy3aEP9r9TrNrwyo0PRVUvEKm4ZkHPePZ/VDoXv+OK+C9r0u2lNbH8gHhmR12nasrCppDUlM4raDZnbL3Ww+cENRZzzwHYiPPTMJRkdrnl3sJoQ0GVSuQFeNqkroUADxduK8oYt2Ptt5hcMN2mxiUg5A6aUxGIlUwbkDJmz/qfIGXHDfG8qeey5nH5nsOarXROmXEx6N5Lk2lY2b0ygoCAwZl45WdpGBr9G9bsVKz7KOGvQoG5BUmCzBD+5haroVWh+Ww9LcCRr9SlNSBAeg0MszHovSp0gUg5knRbYU2vZt1Q8zAhMuKwn7cdyXA3/AfsBL4VU7V9FGHIAAAAldEVYdGRhdGU6Y3JlYXRlADIwMTktMDgtMDZUMTU6NTA6NDIrMDI6MDDGiUARAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE5LTA4LTA2VDE1OjUwOjQyKzAyOjAwt9T4rQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAAASUVORK5CYII="}});
//# sourceMappingURL=app.4ffed9f4.js.map