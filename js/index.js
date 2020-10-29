let paises = document.getElementsByName("exterior");
let paisesVisitados = document.getElementById("paises-visitados");
let direccion = document.getElementById("direccion");
let ciudad = document.getElementById("ciudad");
let formDetalles = document.getElementById('formulario-de-detalles')


function displayPais(params) {
        if (params == "si")  
            paisesVisitados.style.display='block';
        else 
            paisesVisitados.style.display='none'   
}

function displayDireccion(params) {
    if (params == "si")  {
        direccion.style.display='inline-block';
        ciudad.style.display='inline-block';
    }
        else {
            direccion.style.display='none';
        ciudad.style.display='none';
        } 
}

