let exterior = document.getElementsByName("exterior");
let paisesVisitados = document.getElementById("paises-visitados");
let paises = document.getElementById("paises");
let direccion = document.getElementById("direccion");
let ciudad = document.getElementById("ciudad");
let formDetalles = document.getElementById('formulario-de-detalles');
let nombreApellido = document.getElementById("nameApe");
let dni = document.getElementById("dni");
let telefono = document.getElementById("telefono");
let ciudadInput = document.getElementById("ciudadInput");
let direccionInput = document.getElementById("direccionInput");
let respiracion = document.getElementsByName("respiracion");
let mensaje = document.getElementById("mensaje");
let fiebre = document.getElementsByName('fiebre');
let dolor = document.getElementsByName('dolor');
let tos = document.getElementsByName('tos');
let garganta = document.getElementsByName('garganta');
let regexCampoNumerico = /^[0-9]{4}\-[0-9]{4}$/;
let regexEmail = /^[0-9a-zA-Z._.-]+\@[0-9a-zA-Z._.-]+\.[a-zA-Z]+$/;
const CARACTERES = 1000;

//Detalles
function displayPais(params) {
    if (params == "si")
        paisesVisitados.style.display = 'block';
    else
        paisesVisitados.style.display = 'none'
};

function displayDireccion(params) {
    if (params == "si") {
        direccion.style.display = 'inline-block';
        ciudad.style.display = 'inline-block';
    } else {
        direccion.style.display = 'none';
        ciudad.style.display = 'none';
    }
};

function validardatos(event) {
    var error = false;
    var mensajeError = "";

    if (nombreApellido.value == '') {
        error = true;
        mensajeError += "<p>Es obligatorio que completes el campo nombre</p>";
    }

    if (dni.value == '') {
        error = true;
        mensajeError += "<p>Es obligatorio que completes el campo dni</p>";
    }

    if (telefono.value == '') {
        error = true;
        mensajeError += "<p>Es obligatorio que completes el campo telefono</p>";
    }

    var seleccionado1 = false

    for (i in exterior) {
        if (exterior[i].checked) {
            seleccionado1 = true;
        }
    }

    if (!seleccionado1) {
        error = true;
        mensajeError += "<p>Es obligatorio que indiques si viajaste al exterior</p>";
    }

    if (exterior[0].checked && paises[0].selected) {
        error = true;
        mensajeError += "<p>Es obligatorio que selecciones un país</p>";
    }

    var seleccionado2 = false

    for (i in fiebre) {
        if (fiebre[i].checked) {
            seleccionado2 = true;
        }
    }
    if (!seleccionado2) {
        error = true;
        mensajeError += "<p>Es obligatorio que indiques si tuviste fiebre</p>";
    }

    var seleccionado3 = false

    for (i in dolor) {
        if (dolor[i].checked) {
            seleccionado3 = true;
        }
    }
    if (!seleccionado3) {
        error = true;
        mensajeError += "<p>Es obligatorio que indiques si tuviste dolor de cabeza</p>";
    }

    var seleccionado4 = false

    for (i in tos) {
        if (tos[i].checked) {
            seleccionado4 = true;
        }
    }
    if (!seleccionado4) {
        error = true;
        mensajeError += "<p>Es obligatorio que indiques si tuviste tos</p>";
    }

    var seleccionado5 = false

    for (i in garganta) {
        if (garganta[i].checked) {
            seleccionado5 = true;
        }
    }
    if (!seleccionado5) {
        error = true;
        mensajeError += "<p>Es obligatorio que indiques si tuviste dolor de garganta</p>";
    }

    var seleccionado6 = false

    for (i in respiracion) {
        if (respiracion[i].checked) {
            seleccionado6 = true;
        }
    }
    if (!seleccionado6) {
        error = true;
        mensajeError += "<p>Es obligatorio que indiques si tuviste dificultad para respirar</p>";
    }

    if (respiracion[0].value == 'si' && respiracion[0].checked) {
        if (direccionInput.value == '') {
            error = true;
            mensajeError += "<p>El campo direccion debe completarse</p>";
        }
        if (ciudadInput.value == '') {
            error = true;
            mensajeError += "<p>El campo ciudad debe completarse</p>";
        }
    }

    if (error) {
        mensaje.innerHTML = mensajeError;
        return false;
    } else {
        event.preventDefault();
        if (sumarSintomas() == 0 || sumarSintomas() > 1) {
            mensaje.innerHTML = "<p>El formulario fue completado correctamente. " + sumarSintomas() + " síntomas de COVID-19 fueron registrados</p>";
            mensaje.classList.remove('error')
            mensaje.classList.add('sinError')
        } else {
            mensaje.innerHTML = "<p>El formulario fue completado correctamente. " + sumarSintomas() + " síntoma de COVID-19 fue registrado</p>";
            mensaje.classList.remove('error')
            mensaje.classList.add('sinError')
        }

        return true;
    }

    function sumarSintomas() {
        let contador = 0;
        for (const f in fiebre) {
            if (fiebre[f].checked && fiebre[f].value == "si") {
                contador++;
            }
        }
        for (const d in dolor) {
            if (dolor[d].checked && dolor[d].value == "si") {
                contador++;
            }
        }
        for (const t in tos) {
            if (tos[t].checked && tos[t].value == "si") {
                contador++;
            }
        }
        for (const gar in garganta) {
            if (garganta[gar].checked && garganta[gar].value == "si") {
                contador++;
            }
        }
        for (const res in respiracion) {
            if (respiracion[res].checked && respiracion[res].value == "si") {
                contador++;
            }
        }
        return contador;

    }
}

function limpiarErrores() {
    mensaje.innerHTML = " ";
}

//Contacto
function validar(event) {
    var error = false;
    var mensajesError = "";
    if (document.getElementById("nombre-contacto").value == '') {
        error = true;
        mensajesError += "<p>El campo nombre y apellido no puede estar vacío</p>";
    }
    if (!regexEmail.test(document.getElementById("email-contacto").value)) {
        error = true;
        mensajesError += "<p>Debe escribir un mail válido</p>";
    }
    if (!regexCampoNumerico.test(document.getElementById("telefono-contacto").value)) {
        error = true;
        mensajesError += "<p>Debe escribir un teléfono válido con formato XXXX-XXXX</p>";
    }
    if (error) {
        document.getElementById("mensaje").innerHTML = mensajesError;
        return false;
    } else {
        event.preventDefault();
        document.getElementById("mensaje").innerHTML = "Consulta enviada";
        document.getElementById("mensaje").classList.add('sinError');
        return true;
    }
}

function contarCaracteres() {
    var caracteresEscritos = document.getElementById("consulta").value.length;
    var restantes = CARACTERES - caracteresEscritos;
    document.getElementById("caracteres").innerHTML = restantes;
}

//Slider
$(document).ready(function () {
    $('.slider-container').slick({
        infinite: true,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    });
});