(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"11o5":function(t,e,o){"use strict";o.r(e),o.d(e,"AjustesModule",(function(){return G}));var i=o("ofXK"),n=o("tyNb"),c=o("mrSG"),a=o("PSD3"),b=o.n(a),r=o("fXoL"),l=o("69go"),s=o("Eelw"),g=o("Kx1s"),m=o("AytR"),u=o("on2l"),d=o("tk/3"),f=o("mTOY"),M=o("3Pt+");function p(t,e){if(1&t){const t=r.Ob();r.Nb(0,"button",11),r.Vb("click",(function(){return r.gc(t),r.Xb(2).ocultarBoton()})),r.kc(1," CREAR NOTICIA "),r.Mb()}}function h(t,e){1&t&&(r.Nb(0,"h5"),r.Nb(1,"span",19),r.kc(2," Imagen Noticia "),r.Mb(),r.Mb())}function N(t,e){if(1&t){const t=r.Ob();r.Nb(0,"button",20),r.Vb("click",(function(){return r.gc(t),r.Xb(),r.fc(3).click()})),r.Lb(1,"i",21),r.Nb(2,"span",22),r.kc(3,"Selecciona una imagen para la noticia"),r.Mb(),r.Mb()}}function k(t,e){if(1&t){const t=r.Ob();r.Nb(0,"img",23),r.Vb("click",(function(){return r.gc(t),r.Xb(),r.fc(3).click()})),r.Mb()}if(2&t){const t=r.Xb(3);r.bc("src",t.imagenSel1,r.hc)}}function S(t,e){1&t&&(r.Nb(0,"h5"),r.Nb(1,"span",19),r.kc(2," Imagen Autor "),r.Mb(),r.Mb())}function v(t,e){if(1&t){const t=r.Ob();r.Nb(0,"button",20),r.Vb("click",(function(){return r.gc(t),r.Xb(),r.fc(3).click()})),r.Lb(1,"i",21),r.Nb(2,"span",22),r.kc(3,"Selecciona la imagen del autor"),r.Mb(),r.Mb()}}function x(t,e){if(1&t){const t=r.Ob();r.Nb(0,"img",23),r.Vb("click",(function(){return r.gc(t),r.Xb(),r.fc(3).click()})),r.Mb()}if(2&t){const t=r.Xb(4);r.bc("src",t.imagenSel2,r.hc)}}function I(t,e){if(1&t){const t=r.Ob();r.Nb(0,"button",28),r.Vb("click",(function(){return r.gc(t),r.Xb(4).forularioNoticia()})),r.Lb(1,"i",29),r.Mb()}}function T(t,e){if(1&t){const t=r.Ob();r.Nb(0,"div",24),r.jc(1,S,3,0,"h5",13),r.Nb(2,"input",14,25),r.Vb("change",(function(e){return r.gc(t),r.Xb(3).seleccionImgYo(e.target.files[0])})),r.Mb(),r.jc(4,v,4,0,"button",16),r.jc(5,x,1,1,"img",17),r.Nb(6,"div",26),r.jc(7,I,2,0,"button",27),r.Mb(),r.Mb()}if(2&t){const t=r.Xb(3);r.zb(1),r.bc("ngIf",t.mostrarImagenYo),r.zb(3),r.bc("ngIf",!t.mostrarImagenYo),r.zb(1),r.bc("ngIf",t.mostrarImagenYo),r.zb(2),r.bc("ngIf",t.mostrarImagenYo)}}function Y(t,e){if(1&t){const t=r.Ob();r.Nb(0,"div",12),r.jc(1,h,3,0,"h5",13),r.Nb(2,"input",14,15),r.Vb("change",(function(e){return r.gc(t),r.Xb(2).seleccionImgNoti(e.target.files[0])})),r.Mb(),r.jc(4,N,4,0,"button",16),r.jc(5,k,1,1,"img",17),r.jc(6,T,8,4,"div",18),r.Mb()}if(2&t){const t=r.Xb(2);r.zb(1),r.bc("ngIf",t.mostrarImagenNoticia),r.zb(3),r.bc("ngIf",!t.mostrarImagenNoticia),r.zb(1),r.bc("ngIf",t.mostrarImagenNoticia),r.zb(1),r.bc("ngIf",!t.mostrarYo)}}function w(t,e){if(1&t){const t=r.Ob();r.Nb(0,"form",30,31),r.Vb("ngSubmit",(function(){r.gc(t);const e=r.fc(1);return r.Xb(2).crearNoticia(e)})),r.Nb(2,"div",32),r.Nb(3,"label",33),r.kc(4,"T\xedttulo"),r.Mb(),r.Nb(5,"div",34),r.Nb(6,"input",35),r.Vb("ngModelChange",(function(e){return r.gc(t),r.Xb(2).noticia.titulo=e})),r.Mb(),r.Mb(),r.Mb(),r.Nb(7,"div",32),r.Nb(8,"label",36),r.kc(9,"Subt\xedttulo"),r.Mb(),r.Nb(10,"div",34),r.Nb(11,"input",37),r.Vb("ngModelChange",(function(e){return r.gc(t),r.Xb(2).noticia.subtitulo=e})),r.Mb(),r.Mb(),r.Mb(),r.Nb(12,"div",32),r.Nb(13,"label",38),r.kc(14,"Autor"),r.Mb(),r.Nb(15,"div",34),r.Nb(16,"input",39),r.Vb("ngModelChange",(function(e){return r.gc(t),r.Xb(2).noticia.autor=e})),r.Mb(),r.Mb(),r.Mb(),r.Nb(17,"fieldset",40),r.Nb(18,"div",32),r.Nb(19,"label",41),r.kc(20,"Imagen Noticia"),r.Mb(),r.Nb(21,"div",34),r.Lb(22,"input",42),r.Mb(),r.Mb(),r.Nb(23,"div",32),r.Nb(24,"label",43),r.kc(25,"Imagen Autor"),r.Mb(),r.Nb(26,"div",34),r.Lb(27,"input",44),r.Mb(),r.Mb(),r.Mb(),r.Nb(28,"div",32),r.Nb(29,"label",45),r.kc(30,"Texto 1"),r.Mb(),r.Nb(31,"div",34),r.Nb(32,"textarea",46),r.Vb("ngModelChange",(function(e){return r.gc(t),r.Xb(2).noticia.texto1=e})),r.kc(33,"                "),r.Mb(),r.Mb(),r.Mb(),r.Nb(34,"div",32),r.Nb(35,"label",47),r.kc(36,"Texto 2"),r.Mb(),r.Nb(37,"div",34),r.Nb(38,"textarea",48),r.Vb("ngModelChange",(function(e){return r.gc(t),r.Xb(2).noticia.texto2=e})),r.kc(39,"                "),r.Mb(),r.Mb(),r.Mb(),r.Nb(40,"div",32),r.Nb(41,"label",49),r.kc(42,"Texto 3"),r.Mb(),r.Nb(43,"div",34),r.Nb(44,"textarea",50),r.Vb("ngModelChange",(function(e){return r.gc(t),r.Xb(2).noticia.texto3=e})),r.kc(45,"                "),r.Mb(),r.Mb(),r.Mb(),r.Nb(46,"div",32),r.Nb(47,"label",51),r.kc(48,"Texto 4"),r.Mb(),r.Nb(49,"div",34),r.Nb(50,"textarea",52),r.Vb("ngModelChange",(function(e){return r.gc(t),r.Xb(2).noticia.texto4=e})),r.kc(51,"                "),r.Mb(),r.Mb(),r.Mb(),r.Nb(52,"div",32),r.Nb(53,"label",53),r.kc(54,"Texto 5"),r.Mb(),r.Nb(55,"div",34),r.Nb(56,"textarea",54),r.Vb("ngModelChange",(function(e){return r.gc(t),r.Xb(2).noticia.texto5=e})),r.kc(57,"                "),r.Mb(),r.Mb(),r.Mb(),r.Nb(58,"div",7),r.Nb(59,"button",55),r.kc(60," Crear Noticia "),r.Mb(),r.Nb(61,"button",56),r.Vb("click",(function(){return r.gc(t),r.Xb(2).salirNoticia()})),r.kc(62," Salir "),r.Mb(),r.Mb(),r.Mb()}if(2&t){const t=r.Xb(2);r.zb(6),r.bc("ngModel",t.noticia.titulo),r.zb(5),r.bc("ngModel",t.noticia.subtitulo),r.zb(5),r.bc("ngModel",t.noticia.autor),r.zb(6),r.cc("placeholder",t.imagenNoticiaSubir.name),r.zb(5),r.cc("placeholder",t.imagenYoSubir.name),r.zb(5),r.bc("ngModel",t.noticia.texto1),r.zb(6),r.bc("ngModel",t.noticia.texto2),r.zb(6),r.bc("ngModel",t.noticia.texto3),r.zb(6),r.bc("ngModel",t.noticia.texto4),r.zb(6),r.bc("ngModel",t.noticia.texto5)}}function z(t,e){if(1&t&&(r.Nb(0,"div",1),r.Nb(1,"div",2),r.Nb(2,"h4"),r.Nb(3,"span",3),r.Nb(4,"i",4),r.kc(5,"\xa0 CREAR NOTICIA "),r.Mb(),r.Mb(),r.Mb(),r.Mb(),r.Nb(6,"div",5),r.Nb(7,"div",6),r.Nb(8,"div",7),r.jc(9,p,2,0,"button",8),r.Mb(),r.jc(10,Y,7,4,"div",9),r.jc(11,w,63,10,"form",10),r.Mb(),r.Mb(),r.Mb()),2&t){const t=r.Xb();r.zb(9),r.bc("ngIf",t.mostrarNoticia),r.zb(1),r.bc("ngIf",!t.mostrarNoticia),r.zb(1),r.bc("ngIf",t.mostrarFormNoticia)}}const C=m.a.url;let y=(()=>{class t{constructor(t,e,o,i){this.usuarioService=t,this.http=e,this.noticiasService=o,this.tooltipServices=i,this.mostrarNombre=!1,this.mostrarImagenNoticia=!1,this.mostrarImagenYo=!1,this.mostrarYo=!0,this.mostrarNoticia=!0,this.mostrarFormNoticia=!1,this.noticia={titulo:"",subtitulo:"",autor:"",img:"",imgYo:"",texto1:"",texto2:"",texto3:"",texto4:"",texto5:""}}ngOnInit(){}ocultarBoton(){this.mostrarNoticia=!1,this.tooltipServices.settings=!1,this.tooltipServices.settings2=!1}seleccionImgNoti(t){this.imagenNoticiaSubir=t,this.mostrarImagenNoticia=!0,this.mostrarYo=!1;const e=new FileReader;e.onload=()=>this.imagenSel1=e.result,e.readAsDataURL(t),console.log(this.imagenNoticiaSubir.name)}seleccionImgYo(t){this.imagenYoSubir=t,this.mostrarImagenYo=!0;const e=new FileReader;e.onload=()=>this.imagenSel2=e.result,e.readAsDataURL(t)}subirImagenYo(){const t={miToken:this.usuarioService.token},e=new FormData;return e.append("imgYo",this.imagenYoSubir,this.imagenYoSubir.name),this.http.post(C+"/noticias/upload1",e,{headers:t}).subscribe(t=>{console.log(t)})}subirImagenNoticia(){const t={miToken:this.usuarioService.token},e=new FormData;return e.append("img",this.imagenNoticiaSubir,this.imagenNoticiaSubir.name),this.http.post(C+"/noticias/upload2",e,{headers:t}).subscribe(t=>{console.log(t)})}forularioNoticia(){this.mostrarFormNoticia=!0}salirNoticia(){this.mostrarFormNoticia=!1,this.mostrarNoticia=!0,this.mostrarYo=!0,this.mostrarImagenNoticia=!1,this.mostrarImagenYo=!1,this.tooltipServices.settings=!0,this.tooltipServices.settings2=!0,window.scrollTo(0,0)}crearNoticia(t){this.subirImagenNoticia(),this.subirImagenYo(),this.salirNoticia(),console.log(t.value),this.noticiasService.crearNoticia(this.noticia.titulo,this.noticia.subtitulo,this.noticia.autor,this.imagenNoticiaSubir.name,this.imagenYoSubir.name,this.noticia.texto1,this.noticia.texto2,this.noticia.texto3,this.noticia.texto4,this.noticia.texto5),this.noticia=null,b.a.mixin({toast:!0,position:"center",showConfirmButton:!1,timer:2e3}).fire({title:"Noticia creada correctamente",background:"yellow"})}}return t.\u0275fac=function(e){return new(e||t)(r.Kb(u.a),r.Kb(d.a),r.Kb(f.a),r.Kb(g.a))},t.\u0275cmp=r.Eb({type:t,selectors:[["app-crear-noticia"]],decls:1,vars:1,consts:[["class","container text-left mt-5",4,"ngIf"],[1,"container","text-left","mt-5"],[1,"container","mb-3"],[1,"badge","badge-warning"],[1,"fas","fa-plus-circle"],[1,"container","backPaginaNoticias34","text-center"],[1,"colorImgYoAjustes46"],[1,"container48"],["type","button","class","btn btn-warning btn-block font-weight-bold rounded-0 py-2",3,"click",4,"ngIf"],["class","form-group",4,"ngIf"],["autocomplete","off",3,"ngSubmit",4,"ngIf"],["type","button",1,"btn","btn-warning","btn-block","font-weight-bold","rounded-0","py-2",3,"click"],[1,"form-group"],[4,"ngIf"],["type","file",1,"form-control-file","d-none",3,"change"],["imgNoti",""],["type","button","class","btn btn-outline-warning btn-lg mt-3",3,"click",4,"ngIf"],["class","img-fluid tamanoMiniYo45 mt-2",3,"src","click",4,"ngIf"],["class","form-group mt-5",4,"ngIf"],[1,"badge","badge-warning","text-uppercase"],["type","button",1,"btn","btn-outline-warning","btn-lg","mt-3",3,"click"],[1,"fas","fa-upload","mr-2"],[1,"badge","badge-warning","mb-1"],[1,"img-fluid","tamanoMiniYo45","mt-2",3,"src","click"],[1,"form-group","mt-5"],["imgYo",""],[1,"container"],["type","button","class","btn btn-warning rounded-1 mt-4",3,"click",4,"ngIf"],["type","button",1,"btn","btn-warning","rounded-1","mt-4",3,"click"],[1,"fas","fa-plus"],["autocomplete","off",3,"ngSubmit"],["f","ngForm"],[1,"form-group","row","text-center","mt-4"],["for","inputTitulo",1,"col-sm-2","col-form-label"],[1,"col-sm-10"],["type","text","id","inputTitulo","name","titulo",1,"form-control","backInputTec47","text-left",3,"ngModel","ngModelChange"],["for","inputSubtitulo",1,"col-sm-2","col-form-label"],["type","text","id","inputSubtitulo","name","subtitulo",1,"form-control","backInputTec47","text-left",3,"ngModel","ngModelChange"],["for","inputAutor",1,"col-sm-2","col-form-label"],["type","text","id","inputAutor","name","autor",1,"form-control","backInputTec47","text-left",3,"ngModel","ngModelChange"],["disabled",""],["for","inputImg",1,"col-sm-2","col-form-label"],["type","text","id","inputImg",1,"form-control","backInputTec47",3,"placeholder"],["for","inputImgYo",1,"col-sm-2","col-form-label"],["type","text","id","inputImgYo",1,"form-control","backInputTec47",3,"placeholder"],["for","inputTexto1",1,"col-sm-2","col-form-label"],["id","inputTexto1","name","texto1","rows","3",1,"form-control","backInputTec47","mb-2","text-left",3,"ngModel","ngModelChange"],["for","inputTexto2",1,"col-sm-2","col-form-label"],["id","inputTexto2","name","texto2","rows","3",1,"form-control","backInputTec47","mb-2","text-left",3,"ngModel","ngModelChange"],["for","inputTexto3",1,"col-sm-2","col-form-label"],["id","inputTexto3","name","texto3","rows","3",1,"form-control","backInputTec47","mb-2","text-left",3,"ngModel","ngModelChange"],["for","inputTexto4",1,"col-sm-2","col-form-label"],["id","inputTexto4","name","texto4","rows","3",1,"form-control","backInputTec47","mb-2","text-left",3,"ngModel","ngModelChange"],["for","inputTexto5",1,"col-sm-2","col-form-label"],["id","inputTexto5","name","texto5","rows","3",1,"form-control","backInputTec47","mb-2","text-left",3,"ngModel","ngModelChange"],["type","submit",1,"btn","btn-warning","btn-block","rounded-0","mt-2","text-uppercase"],["type","button",1,"btn","btn-warning","btn-block","rounded-0","mt-2","text-uppercase",3,"click"]],template:function(t,e){1&t&&r.jc(0,z,12,3,"div",0),2&t&&r.bc("ngIf",e.tooltipServices.settings3)},directives:[i.k,M.h,M.d,M.e,M.a,M.c,M.f],encapsulation:2}),t})();function X(t,e){if(1&t){const t=r.Ob();r.Nb(0,"button",19),r.Vb("click",(function(){return r.gc(t),r.Xb(),r.fc(15).click()})),r.Lb(1,"i",20),r.Nb(2,"span",21),r.kc(3,"Seleccionar archivo"),r.Mb(),r.Mb()}}function V(t,e){if(1&t){const t=r.Ob();r.Nb(0,"img",22),r.Vb("click",(function(){return r.gc(t),r.Xb(),r.fc(15).click()})),r.Mb()}if(2&t){const t=r.Xb();r.bc("src",t.imagenYoService.imagenSel,r.hc)}}function A(t,e){if(1&t&&(r.Nb(0,"span",23),r.kc(1),r.Mb()),2&t){const t=r.Xb();r.zb(1),r.lc(t.imagenYoService.imagenSubir.name)}}function j(t,e){if(1&t){const t=r.Ob();r.Nb(0,"div",24),r.Nb(1,"div",1),r.Nb(2,"div",2),r.Nb(3,"h3",25),r.Nb(4,"u",26),r.kc(5,"Actualizar tecnolog\xeda"),r.Mb(),r.Nb(6,"button",27),r.Nb(7,"span",7),r.kc(8,"\xd7"),r.Mb(),r.Mb(),r.Mb(),r.Nb(9,"div",28),r.Nb(10,"form",29,30),r.Vb("ngSubmit",(function(){r.gc(t);const e=r.fc(11);return r.Xb().actualizarTec(e)})),r.Nb(12,"div",31),r.Nb(13,"div",32),r.Nb(14,"input",33),r.Vb("ngModelChange",(function(e){return r.gc(t),r.Xb().tecSobre.tecSel.icono=e})),r.Mb(),r.Mb(),r.Mb(),r.Nb(15,"div",31),r.Nb(16,"div",34),r.Nb(17,"input",35),r.Vb("ngModelChange",(function(e){return r.gc(t),r.Xb().tecSobre.tecSel.tecnologia=e})),r.Mb(),r.Mb(),r.Mb(),r.Nb(18,"div",31),r.Nb(19,"textarea",36),r.Vb("ngModelChange",(function(e){return r.gc(t),r.Xb().tecSobre.tecSel.experiencia=e})),r.kc(20,"            "),r.Mb(),r.Mb(),r.Nb(21,"div",37),r.Nb(22,"button",38),r.kc(23," Actualizar Tecnolog\xeda "),r.Mb(),r.Mb(),r.Mb(),r.Mb(),r.Mb(),r.Mb(),r.Mb()}if(2&t){const t=r.Xb();r.zb(14),r.bc("ngModel",t.tecSobre.tecSel.icono),r.zb(3),r.bc("ngModel",t.tecSobre.tecSel.tecnologia),r.zb(2),r.bc("ngModel",t.tecSobre.tecSel.experiencia)}}const O=m.a.url;let B=(()=>{class t{constructor(t,e,o,i){this.imagenYoService=t,this.usuarioService=e,this.http=o,this.tecSobre=i}ngOnInit(){}seleccionImg(t){this.imagenYoService.imagenSubir=t,this.imagenYoService.mostrarNombre=!0;const e=new FileReader;e.onload=()=>this.imagenYoService.imagenSel=e.result,e.readAsDataURL(t),console.log(t.name)}cambiarMostar(){this.imagenYoService.mostrarNombre=!1}actualizarImagenYo(){if(this.imagenYoService.imagenNombre===this.imagenYoService.imagenSubir.name){const t={miToken:this.usuarioService.token},e=new FormData;return e.append("img",this.imagenYoService.imagenSubir,this.imagenYoService.imagenSubir.name),this.http.post(O+"/uploadYo/update",e,{headers:t}).subscribe(t=>{console.log(t),setTimeout(()=>{$("#imagen").modal("hide")},100),this.cambiarMostar(),b.a.mixin({toast:!0,position:"center",showConfirmButton:!1,timer:3e3}).fire({title:"Imagen actualizada.",background:"rgb(233,233,0)"})})}$("#imagen").modal("hide"),this.cambiarMostar()}actualizarTec(t){this.tecSobre.actualizarTecnologia(this.tecSobre.tecSel,this.tecSobre.tecSel._id),$("#tecnologia").modal("hide"),b.a.mixin({toast:!0,position:"center",showConfirmButton:!1,timer:3e3}).fire({title:"Tesnologia actualizada.",background:"rgb(233,233,0)"})}}return t.\u0275fac=function(e){return new(e||t)(r.Kb(l.a),r.Kb(u.a),r.Kb(d.a),r.Kb(s.a))},t.\u0275cmp=r.Eb({type:t,selectors:[["app-modals"]],decls:23,vars:6,consts:[["id","imagen","data-backdrop","static","tabindex","-1","role","dialog","aria-labelledby","staticBackdropLabel","aria-hidden","true",1,"modal","fade","mt-5","py-5"],["role","document",1,"modal-dialog"],[1,"modal-content","colorModal11","text-center"],[1,"mb-4"],[1,"img-fluid","tamanoMiniYo45","ml-3",3,"src"],[1,"badge","badge-warning","ml-3"],["type","button","data-dismiss","modal","aria-label","Close",1,"close","text-right","colorName3",3,"click"],["aria-hidden","true"],[1,"container","backModal12"],[1,"modal-body","text-center","colorTexto10"],[1,"form-group"],["type","file",1,"form-control-file","d-none",3,"change"],["img",""],["type","button","class","btn btn-outline-warning btn-lg mt-3",3,"click",4,"ngIf"],["class","img-fluid tamanoMiniYo45",3,"src","click",4,"ngIf"],["class","badge badge-warning",4,"ngIf"],[1,"container"],["type","button",1,"btn","btn-warning","btn-block","rounded-0","py-2","mt-4",3,"click"],["class","modal fade mt-5 py-5","id","tecnologia","data-backdrop","static","tabindex","-1","role","dialog","aria-labelledby","staticBackdropLabel","aria-hidden","true",4,"ngIf"],["type","button",1,"btn","btn-outline-warning","btn-lg","mt-3",3,"click"],[1,"fas","fa-upload","mr-2"],[1,"badge","badge-warning","mb-1"],[1,"img-fluid","tamanoMiniYo45",3,"src","click"],[1,"badge","badge-warning"],["id","tecnologia","data-backdrop","static","tabindex","-1","role","dialog","aria-labelledby","staticBackdropLabel","aria-hidden","true",1,"modal","fade","mt-5","py-5"],[1,"colorName3"],[1,"text-uppercase"],["type","button","data-dismiss","modal","aria-label","Close",1,"close","text-right","colorName3"],[1,"container","backModal12","mt-2","mb-2"],["autocomplete","off",3,"ngSubmit"],["f",""],[1,"form-group","text-center"],[1,"input-group","mb-2","mt-4"],["type","text","name","icono",1,"form-control","backInputTec47",3,"ngModel","ngModelChange"],[1,"input-group","mb-2"],["type","text","name","tecnologia",1,"form-control","backInputTec47",3,"ngModel","ngModelChange"],["name","experiencia","rows","3",1,"form-control","backInputTec47",3,"ngModel","ngModelChange"],[1,"container","mb-4"],["type","submit",1,"btn","btn-warning","btn-block","rounded-0","py-2","mt-4"]],template:function(t,e){1&t&&(r.Nb(0,"div",0),r.Nb(1,"div",1),r.Nb(2,"div",2),r.Nb(3,"h3",3),r.Lb(4,"img",4),r.Nb(5,"span",5),r.Lb(6,"small"),r.kc(7),r.Mb(),r.Nb(8,"button",6),r.Vb("click",(function(){return e.cambiarMostar()})),r.Nb(9,"span",7),r.kc(10,"\xd7"),r.Mb(),r.Mb(),r.Mb(),r.Nb(11,"div",8),r.Nb(12,"div",9),r.Nb(13,"div",10),r.Nb(14,"input",11,12),r.Vb("change",(function(t){return e.seleccionImg(t.target.files[0])})),r.Mb(),r.jc(16,X,4,0,"button",13),r.jc(17,V,1,1,"img",14),r.Mb(),r.jc(18,A,2,1,"span",15),r.Mb(),r.Mb(),r.Nb(19,"div",16),r.Nb(20,"button",17),r.Vb("click",(function(){return e.actualizarImagenYo()})),r.kc(21," Actualizar Imagen "),r.Mb(),r.Mb(),r.Mb(),r.Mb(),r.Mb(),r.jc(22,j,24,3,"div",18)),2&t&&(r.zb(4),r.bc("src",e.imagenYoService.imagenPath,r.hc),r.zb(3),r.lc(e.imagenYoService.imagenNombre),r.zb(9),r.bc("ngIf",!e.imagenYoService.mostrarNombre),r.zb(1),r.bc("ngIf",e.imagenYoService.mostrarNombre),r.zb(1),r.bc("ngIf",e.imagenYoService.mostrarNombre),r.zb(4),r.bc("ngIf",e.tecSobre.mostrarTec))},directives:[i.k,M.h,M.d,M.e,M.a,M.c,M.f],encapsulation:2}),t})();function L(t,e){if(1&t){const t=r.Ob();r.Nb(0,"img",17),r.Vb("click",(function(){r.gc(t);const o=e.$implicit;return r.Xb(2).editarImgYo(o)})),r.Mb()}2&t&&r.bc("src",e.$implicit.img,r.hc)}function R(t,e){if(1&t){const t=r.Ob();r.Nb(0,"div",18),r.Nb(1,"div",19),r.Vb("click",(function(){r.gc(t);const o=e.$implicit;return r.Xb(2).editarTec(o)})),r.Lb(2,"i"),r.Mb(),r.Mb()}if(2&t){const t=e.$implicit;r.zb(2),r.Bb(t.icono)}}function F(t,e){if(1&t&&(r.Nb(0,"div"),r.Nb(1,"div",5),r.Nb(2,"div",6),r.Nb(3,"h4"),r.Nb(4,"span",2),r.Nb(5,"i",7),r.kc(6,"\xa0 ACTUALIZAR IMAGENES YO "),r.Mb(),r.Mb(),r.Mb(),r.Mb(),r.Nb(7,"div",8),r.Nb(8,"div",9),r.Nb(9,"div",10),r.Nb(10,"div",11),r.jc(11,L,1,1,"img",12),r.Mb(),r.Mb(),r.Mb(),r.Mb(),r.Mb(),r.Nb(12,"div",13),r.Nb(13,"div",6),r.Nb(14,"h4"),r.Nb(15,"span",2),r.Nb(16,"i",14),r.kc(17,"\xa0 ACTUALIZAR TECNOLOG\xcdAS "),r.Mb(),r.Mb(),r.Mb(),r.Mb(),r.Nb(18,"div",8),r.Nb(19,"div",9),r.Nb(20,"div",15),r.jc(21,R,3,2,"div",16),r.Mb(),r.Mb(),r.Mb(),r.Mb(),r.Mb()),2&t){const t=r.Xb();r.zb(11),r.bc("ngForOf",t.imagenYoService.imagenesYo),r.zb(10),r.bc("ngForOf",t.tecnologiasDest)}}function E(t,e){if(1&t){const t=r.Ob();r.Nb(0,"button",24),r.Vb("click",(function(){return r.gc(t),r.Xb(2).actualizarSobreMi()})),r.kc(1," EDITAR SOBRE M\xcd "),r.Mb()}}function D(t,e){if(1&t){const t=r.Ob();r.Nb(0,"div",25),r.Nb(1,"form",26,27),r.Vb("ngSubmit",(function(){r.gc(t);const e=r.fc(2);return r.Xb(2).actualizarSobreMiFull(e)})),r.Nb(3,"div",28),r.Nb(4,"div",29),r.Nb(5,"div",30),r.Nb(6,"input",31),r.Vb("ngModelChange",(function(e){return r.gc(t),r.Xb(2).sobreMiBackend.titulo=e})),r.Mb(),r.Mb(),r.Mb(),r.Nb(7,"textarea",32),r.Vb("ngModelChange",(function(e){return r.gc(t),r.Xb(2).sobreMiBackend.texto1=e})),r.kc(8,"                "),r.Mb(),r.Nb(9,"textarea",33),r.Vb("ngModelChange",(function(e){return r.gc(t),r.Xb(2).sobreMiBackend.texto2=e})),r.kc(10,"                "),r.Mb(),r.Nb(11,"textarea",34),r.Vb("ngModelChange",(function(e){return r.gc(t),r.Xb(2).sobreMiBackend.texto3=e})),r.kc(12,"                "),r.Mb(),r.Nb(13,"textarea",35),r.Vb("ngModelChange",(function(e){return r.gc(t),r.Xb(2).sobreMiBackend.texto4=e})),r.kc(14,"                "),r.Mb(),r.Nb(15,"textarea",36),r.Vb("ngModelChange",(function(e){return r.gc(t),r.Xb(2).sobreMiBackend.texto5=e})),r.kc(16,"                 "),r.Mb(),r.Mb(),r.Nb(17,"div",21),r.Nb(18,"button",37),r.kc(19," Actualizar "),r.Mb(),r.Nb(20,"button",38),r.Vb("click",(function(){return r.gc(t),r.Xb(2).cerrarSobreMi()})),r.kc(21," Salir SIN actualizar "),r.Mb(),r.Mb(),r.Mb(),r.Mb()}if(2&t){const t=r.Xb(2);r.zb(6),r.bc("ngModel",t.sobreMiBackend.titulo),r.zb(1),r.bc("ngModel",t.sobreMiBackend.texto1),r.zb(2),r.bc("ngModel",t.sobreMiBackend.texto2),r.zb(2),r.bc("ngModel",t.sobreMiBackend.texto3),r.zb(2),r.bc("ngModel",t.sobreMiBackend.texto4),r.zb(2),r.bc("ngModel",t.sobreMiBackend.texto5)}}function K(t,e){if(1&t&&(r.Nb(0,"div",13),r.Nb(1,"div",6),r.Nb(2,"h4"),r.Nb(3,"span",2),r.Nb(4,"i",20),r.kc(5,"\xa0 ACTUALIZAR SOBREM\xcd "),r.Mb(),r.Mb(),r.Mb(),r.Mb(),r.Nb(6,"div",8),r.Nb(7,"div",9),r.Nb(8,"div",21),r.jc(9,E,2,0,"button",22),r.Mb(),r.jc(10,D,22,6,"div",23),r.Mb(),r.Mb(),r.Mb()),2&t){const t=r.Xb();r.zb(9),r.bc("ngIf",!t.tecSobre.mostrarSobreMi),r.zb(1),r.bc("ngIf",t.tecSobre.mostrarSobreMi)}}const P=[{path:"",component:(()=>{class t{constructor(t,e,o){this.imagenYoService=t,this.tecSobre=e,this.tooltipService=o,this.tecnologiasDest=[]}ngOnInit(){this.tooltipService.abrirTooltip(),setTimeout(()=>{this.tooltipService.abrirTooltipHover()},150),this.tecSobre.getTecnologia().subscribe(t=>{this.tecnologiasDest.push(...t.tecnologias)}),this.tecSobre.getSobreMi().subscribe(t=>Object(c.a)(this,void 0,void 0,(function*(){this.sobreMiBackend=yield t.sobreMi[0]})))}editarImgYo(t){this.fotoSel=t,console.log(this.fotoSel),this.fotoSel.img===this.imagenYoService.img1&&($("#imagen").modal(),this.imagenYoService.imagenNombre="1a.jpg",this.imagenYoService.imagenPath=this.fotoSel.img,this.tooltipService.cerrarTooltip()),this.fotoSel.img===this.imagenYoService.img2&&($("#imagen").modal(),this.imagenYoService.imagenNombre="2a.jpg",this.imagenYoService.imagenPath=this.fotoSel.img,this.tooltipService.cerrarTooltip()),this.fotoSel.img===this.imagenYoService.img3&&($("#imagen").modal(),this.imagenYoService.imagenNombre="3a.jpg",this.imagenYoService.imagenPath=this.fotoSel.img,this.tooltipService.cerrarTooltip()),this.fotoSel.img===this.imagenYoService.img4&&($("#imagen").modal(),this.imagenYoService.imagenNombre="4a.jpg",this.imagenYoService.imagenPath=this.fotoSel.img,this.tooltipService.cerrarTooltip())}editarTec(t){this.tecSobre.mostrarTec=!0,this.tecSobre.tecSel=t,console.log(this.tecSobre.tecSel),this.tooltipService.cerrarTooltip(),setTimeout(()=>{$("#tecnologia").modal()},100)}actualizarSobreMi(){this.tecSobre.mostrarSobreMi=!0,this.tooltipService.settings=!1,this.tooltipService.settings3=!1}actualizarSobreMiFull(t){this.tecSobre.actualizarSobreMi(this.sobreMiBackend,this.sobreMiBackend._id),this.tecSobre.mostrarSobreMi=!1,this.tooltipService.settings=!0,this.tooltipService.settings3=!0,b.a.mixin({toast:!0,position:"center",showConfirmButton:!1,timer:3e3}).fire({title:"Informaci\xf3n actualizada.",background:"rgb(233,233,0)"})}cerrarSobreMi(){this.tecSobre.mostrarSobreMi=!1,this.tooltipService.settings=!0,this.tooltipService.settings3=!0,window.scrollTo(0,0)}}return t.\u0275fac=function(e){return new(e||t)(r.Kb(l.a),r.Kb(s.a),r.Kb(g.a))},t.\u0275cmp=r.Eb({type:t,selectors:[["app-ajustes"]],decls:8,vars:2,consts:[[1,"container"],[1,"text-uppercase","font-weight-bold","mt-5","text-center","mb-3"],[1,"badge","badge-warning"],[4,"ngIf"],["class","container text-left mt-5",4,"ngIf"],[1,"container","text-left"],[1,"container","mb-3"],[1,"fas","fa-camera"],[1,"container","backPaginaNoticias34","text-center"],[1,"colorImgYoAjustes46"],[1,"row","text-center"],[1,"col"],["class","img-fluid tamanoMiniYo45 cursor7 ml-4 mr-4 mb-1 mt-1","data-toggle","tooltip","data-placement","top","title","Click para EDITAR",3,"src","click",4,"ngFor","ngForOf"],[1,"container","text-left","mt-5"],[1,"fas","fa-laptop-code"],[1,"row"],["class","col text-center","data-trigger","hover","data-toggle","tooltip","data-placement","top","title","Click para EDITAR",4,"ngFor","ngForOf"],["data-toggle","tooltip","data-placement","top","title","Click para EDITAR",1,"img-fluid","tamanoMiniYo45","cursor7","ml-4","mr-4","mb-1","mt-1",3,"src","click"],["data-trigger","hover","data-toggle","tooltip","data-placement","top","title","Click para EDITAR",1,"col","text-center"],[1,"card-body","cursor7",3,"click"],[1,"fas","fa-smile"],[1,"container48"],["type","button","class","btn btn-warning btn-block font-weight-bold rounded-0 py-2",3,"click",4,"ngIf"],["class","container mt-2 mb-4",4,"ngIf"],["type","button",1,"btn","btn-warning","btn-block","font-weight-bold","rounded-0","py-2",3,"click"],[1,"container","mt-2","mb-4"],[3,"ngSubmit"],["f","ngForm"],[1,"form-group","text-center","mt-4"],[1,"form-group","text-center"],[1,"input-group","mb-2","mt-4"],["disabled","","type","text","name","titulo",1,"form-control","backInputTec47",3,"ngModel","ngModelChange"],["name","texto1","rows","4",1,"form-control","backInputTec47","mb-2",3,"ngModel","ngModelChange"],["name","texto2","rows","4",1,"form-control","backInputTec47","mb-2",3,"ngModel","ngModelChange"],["name","texto3","rows","4",1,"form-control","backInputTec47","mb-2",3,"ngModel","ngModelChange"],["name","texto4","rows","4",1,"form-control","backInputTec47","mb-2",3,"ngModel","ngModelChange"],["name","texto5","rows","4",1,"form-control","backInputTec47",3,"ngModel","ngModelChange"],["type","submit",1,"btn","btn-warning","btn-block","rounded-0","mt-2"],["type","button",1,"btn","btn-warning","btn-block","rounded-0","mt-2",3,"click"]],template:function(t,e){1&t&&(r.Nb(0,"div",0),r.Nb(1,"h3",1),r.Nb(2,"span",2),r.kc(3,"Settings"),r.Mb(),r.Mb(),r.jc(4,F,22,2,"div",3),r.jc(5,K,11,2,"div",4),r.Lb(6,"app-crear-noticia"),r.Lb(7,"app-modals"),r.Mb()),2&t&&(r.zb(4),r.bc("ngIf",e.tooltipService.settings),r.zb(1),r.bc("ngIf",e.tooltipService.settings2))},directives:[i.k,y,B,i.j,M.h,M.d,M.e,M.a,M.c,M.f],encapsulation:2}),t})()}];let U=(()=>{class t{}return t.\u0275mod=r.Ib({type:t}),t.\u0275inj=r.Hb({factory:function(e){return new(e||t)},imports:[[n.d.forChild(P)],n.d]}),t})(),G=(()=>{class t{}return t.\u0275mod=r.Ib({type:t}),t.\u0275inj=r.Hb({factory:function(e){return new(e||t)},imports:[[i.b,U,M.b]]}),t})()}}]);