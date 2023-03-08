var slider = document.querySelector('#myRange2');
var output = document.querySelector('#demo2');
var dir = "http://192.168.0.17/arduino/";

output.innerHTML = slider.value; 

slider.addEventListener('change', function() {
    output.textContent = this.value;
});


function dirIzquierda(){
    var dirIzquierda = dir + "giroIzquierda/";
    var Imagengiro = document.getElementById('Helice');
    Imagengiro.className = 'imgi img-fluid';
    direccion  = dirIzquierda + (slider.value*512);
    Object.assign(document.createElement("a"), {target: "_blank",href: direccion}).click();
}
function dirDerecha(){
    var dirDerecha = dir + "giroDerecha/";
    var Imagengiro = document.getElementById('Helice');
    Imagengiro.className = 'imgd img-fluid';
    direccion  = dirDerecha + (slider.value*512);
    Object.assign(document.createElement("a"), {target: "_blank",href: direccion}).click();
    
}

function Parar(){
    var Imagengiro = document.getElementById('Helice');
    Imagengiro.className = 'img1 img-fluid';
}

