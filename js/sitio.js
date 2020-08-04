var logo=document.querySelector("#logo-yani");
var porcelana=document.querySelector("#card-porce");
var subli=document.querySelector("#card-subli");

//Funciones de redirecciones
function redirIndex(){
    window.location.href="index.html";
}

function redirPor(){
    window.location.href="porcenalas.html";
}

function redirSubli(){
    window.location.href="sublimacion.html";
}

logo.addEventListener("click",redirIndex);
porcelana.addEventListener("click",redirPor);
subli.addEventListener("click",redirSubli);



