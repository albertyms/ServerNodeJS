(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"69go":function(t,o,r){"use strict";r.d(o,"a",(function(){return a}));var e=r("AytR"),n=r("fXoL");const i=e.a.url;let a=(()=>{class t{constructor(){this.mostrarNombre=!1,this.img1=i+"/uploadYo/Algo123/1a.jpg",this.img3=i+"/uploadYo/Algo123/3a.jpg",this.img2=i+"/uploadYo/Algo123/2a.jpg",this.img4=i+"/uploadYo/Algo123/4a.jpg",this.imagenesYo=[{img:i+"/uploadYo/Algo123/1a.jpg"},{img:i+"/uploadYo/Algo123/3a.jpg"},{img:i+"/uploadYo/Algo123/2a.jpg"},{img:i+"/uploadYo/Algo123/4a.jpg"}]}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275prov=n.Gb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},"94Kt":function(t,o,r){"use strict";r.d(o,"a",(function(){return i}));var e=r("ofXK"),n=r("fXoL");let i=(()=>{class t{}return t.\u0275mod=n.Ib({type:t}),t.\u0275inj=n.Hb({factory:function(o){return new(o||t)},imports:[[e.b]]}),t})()},Eelw:function(t,o,r){"use strict";r.d(o,"a",(function(){return s}));var e=r("AytR"),n=r("fXoL"),i=r("tk/3"),a=r("on2l");const u=e.a.url;let s=(()=>{class t{constructor(t,o){this.http=t,this.usuarioService=o,this.mostrarTec=!1,this.mostrarSobreMi=!1}getTecnologia(){return this.http.get(u+"/tecnologia")}getSobreMi(){return this.http.get(u+"/sobreMi")}actualizarTecnologia(t,o){return this.http.post(`${u}/tecnologia/update/${o}`,t,{headers:{miToken:this.usuarioService.token}}).subscribe()}actualizarSobreMi(t,o){return this.http.post(`${u}/sobreMi/update/${o}`,t,{headers:{miToken:this.usuarioService.token}}).subscribe()}}return t.\u0275fac=function(o){return new(o||t)(n.Rb(i.a),n.Rb(a.a))},t.\u0275prov=n.Gb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},G0CF:function(t,o,r){"use strict";r.d(o,"a",(function(){return a}));var e=r("AytR"),n=r("fXoL");const i=e.a.url;let a=(()=>{class t{transform(t){return`${i}/noticias/imgNoticias/${t}`}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275pipe=n.Jb({name:"imagenNoticia",type:t,pure:!0}),t})()},jCc1:function(t,o,r){"use strict";r.d(o,"a",(function(){return a}));var e=r("AytR"),n=r("fXoL");const i=e.a.url;let a=(()=>{class t{transform(t){return`${i}/noticias/imgYo/${t}`}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275pipe=n.Jb({name:"imagenYo",type:t,pure:!0}),t})()}}]);