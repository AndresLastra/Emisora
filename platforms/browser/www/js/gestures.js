var emisoras = ["http://epsilon.shoutca.st:8127/Delta%20Rave%21", 
"http://streams.fluxfm.de/technoug/mp3-320/tunein/", "http://redpulsohd-server.info:9208/;",
"http://streams.bigfm.de/bigfm-nitroxdeep-128-mp3?usid=0-0-H-A-D-02"];



var app = {
// primera función que se ejecutar al cargar la pagina
inicio: function () {
this.iniciaBotones();
this.iniciaFastClick();
},

//inicia librería FastClick
iniciaFastClick: function () {
FastClick.attach(document.body);
},

//inicializa cada botón en el DOM
iniciaBotones: function () {
    var botonPlay = document.querySelector('#play');
    var botonPause = document.querySelector('#pause');
    //var botonVolMas = document.querySelector('#volumemas');
    //var botonVolMenos = document.querySelector('#volumemenos');
    var slider = document.querySelector("#myRange");

    botonPlay.addEventListener('click', app.play, false);
    botonPause.addEventListener('click', app.pausa, false);
    //botonVolMas.addEventListener('click', app.subeVol, false);
    //botonVolMenos.addEventListener('click', app.bajaVol, false);
    slider.addEventListener('input', app.deslizar, false);
    var selecc = document.querySelector('#seleccion');
    selecc.addEventListener('change', app.sintonizarEmisora, false);
},


// función del botón play del reproductor
play: function () {
    console.log("clic en play");
document.getElementById('emisora').play();
},
// función del botón pausa del reproductor
pausa: function () {
    console.log("clic en pause");
document.getElementById('emisora').pause();
},
/*/ función del botón subir volume del reproductor
subeVol: function () {
    console.log("clic en subir el volumen");
var mas = document.getElementById('emisora').volume;
if( mas <=1.0){
    mas += 0.1;
}
},
// función del botón bajar volume del reproductor
bajaVol: function () {
    console.log("clic en bajar el volumen");
document.getElementById('emisora').volume -= 0.1;*/
deslizar: function(){
    console.log(this.value/100)
    document.getElementById('emisora').volume = this.value/100;

},

sintonizarEmisora: function (){
    console.log(this.value);
    app.pausa;
    emisora.src = emisoras[this.value];
}

};

// inicializar al cargar la pagina
if ('addEventListener' in document) {
document.addEventListener('DOMContentLoaded', function () {
app.inicio();
}, false);
}
