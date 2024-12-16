let nombre= document.getElementById("nombre");
let email= document.getElementById("email");
let error= document.getElementById("error");
let form= document.getElementById("form");

error.style.color="red";


function validacion() {
    console.log("Enviando formulario")
    var mensajesError= [];
    if (nombre.value===null ||nombre.value==="") {
        mensajesError.push("Ingresa tu nombre.");
        error.innerHTML= mensajesError
        return false;
    } else if (email.value===null ||email.value==="") {
        mensajesError.push("Ingresa tu email.");
        error.innerHTML= mensajesError.join("<br>")
        return false;
        
    } else if ((email.value!==null && email.value!=="")&&(nombre.value!==null &&nombre.value!=="")) {
        return true;
}
}