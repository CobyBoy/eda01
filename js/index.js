let paises = document.getElementsByName("exterior");
let paisesVisitados = document.getElementById("paises-visitados");
let direccion = document.getElementById("direccion");
let ciudad = document.getElementById("ciudad");
let formDetalles = document.getElementById('formulario-de-detalles');
let regexCampoNumerico = /^[0-9]{4}\-[0-9]{4}$/;
let regexEmail = /^[0-9a-zA-Z._.-]+\@[0-9a-zA-Z._.-]+\.[a-zA-Z]+$/;
const CARACTERES = 1000;

function displayPais(params) {
        if (params == "si")  
            paisesVisitados.style.display='block';
        else 
            paisesVisitados.style.display='none'   
};

function displayDireccion(params) {
        if (params == "si")  {
            direccion.style.display='inline-block';
            ciudad.style.display='inline-block';
    }
        else {
            direccion.style.display='none';
            ciudad.style.display='none';
        } 
};

function validar(){
    var error=false;
    var mensajesError="";
    if(document.getElementById("nombre-contacto").value==''){
        error=true;
        mensajesError+="<p>El campo nombre y apellido no puede estar vacío</p>";
    }
    if(!regexEmail.test(document.getElementById("email-contacto").value)){
        error=true;
        mensajesError+="<p>Debe escribir un mail válido</p>";
    }
    if (!regexCampoNumerico.test(document.getElementById("telefono-contacto").value)){
        error=true;
        mensajesError+="<p>Debe escribir un telefono válido</p>";
    }
    if(error){
        document.getElementById("mensaje").innerHTML=mensajesError;
        return false;
    }else{
        return true;
    }
}

function contarCaracteres() {
    var caracteresEscritos=document.getElementById("consulta").value.length;
    var restantes=CARACTERES-caracteresEscritos;
    document.getElementById("caracteres").innerHTML=restantes;
}