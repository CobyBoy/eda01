function validardatos(){

    var error=false;
    var mensajeError="";
    var mensajeCorrecto ="";

    if(document.getElementById("name").value==''){
        error=true;
        mensajeError+="<p>Es obligatorio que completes el campo nombre</p>";
    }

    if(document.getElementById("dni").value==''){
        error=true;
        mensajeError+="<p>Es obligatorio que completes el campo dni</p>";
    }

    if(document.getElementById("telefono").value==''){
        error=true;
        mensajeError+="<p>Es obligatorio que completes el campo telefono</p>";
    }

    if(document.getElementById("ciudad").value==''){
        error=true;
        mensajeError+="<p>Es obligatorio que completes el campo ciudad</p>";
    }

    var opciones1 = document.getElementsByName("exterior");
    var seleccionado1 = false

    for(i in opciones1 ){
        if(opciones1[i].checked){
            seleccionado1=true;
        } 
    }
    if(!seleccionado1){
        error=true;
        mensajeError+="<p>Es obligatorio que indiques si viajaste al exterior</p>";
    }

    var opciones2 = document.getElementsByName("fiebre");
    var seleccionado2 = false

    for(i in opciones2 ){
        if(opciones2[i].checked){
            seleccionado2=true;
        } 
    }
    if(!seleccionado2){
        error=true;
        mensajeError+="<p>Es obligatorio que indiques si tuviste fiebre</p>";
    }

    var opciones3 = document.getElementsByName("dolor");
    var seleccionado3 = false

    for(i in opciones3 ){
        if(opciones3[i].checked){
            seleccionado3=true;
        } 
    }
    if(!seleccionado3){
        error=true;
        mensajeError+="<p>Es obligatorio que indiques si tuviste dolor de cabeza</p>";
    }
    var opciones4 = document.getElementsByName("tos");
    var seleccionado4 = false

    for(i in opciones4 ){
        if(opciones4[i].checked){
            seleccionado4=true;
        } 
    }
    if(!seleccionado4){
        error=true;
        mensajeError+="<p>Es obligatorio que indiques si tuviste tos</p>";
    }
    var opciones5 = document.getElementsByName("garganta");
    var seleccionado5 = false

    for(i in opciones5 ){
        if(opciones5[i].checked){
            seleccionado5=true;
        } 
    }
    if(!seleccionado5){
        error=true;
        mensajeError+="<p>Es obligatorio que indiques si tuviste dolor de garganta</p>";
    }

    var opciones6 = document.getElementsByName("respiracion");
    var seleccionado6 = false

    for(i in opciones6 ){
        if(opciones6[i].checked){
            seleccionado6=true;
        } 
    }
    if(!seleccionado6){
        error=true;
        mensajeError+="<p>Es obligatorio que indiques si tuviste dificultad para respirar</p>";
    }

    if(document.getElementsByName("respiracion").value=='si'){
        if(document.getElementById("direccion").value==''){
            error=true;
            mensajeError+="<p>El campo direccion debe completarse</p>";
        }
        if(document.getElementById("ciudad").value==''){
            error=true;
            mensajeError+="<p>El campo ciudad debe completarse</p>";
        }
    }

    if(error){
        document.getElementById("mensaje").innerHTML=mensajeError;
        return false;
    }
    else{
        return true;
    }
    
   function sumarSinsomas(){
       var sintomasTotales=0;
   }
}