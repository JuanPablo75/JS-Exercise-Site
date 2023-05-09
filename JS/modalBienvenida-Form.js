

//funcion para mostrar modalBienvenida
function modalBienvenida(){
    document.getElementById('modalBienvenida').style.display = 'block';
    document.getElementById("tituloEncabezado").style.animationPlayState = 'paused';
    document.getElementById("subtituloEncabezado").style.animationPlayState = 'paused';
    document.documentElement.style.overflow = 'hidden';
    document.getElementById('btnModal').focus();

    //cerrar el modalBienvenida presionando esc
    window.addEventListener("keydown", function(event){
        if (event.key =="Escape"){
            cerrarModalBienvenida();
        }
    }
    )

}

//funcion para cerrar modalBienvenida
function cerrarModalBienvenida(){
document.getElementById('modalBienvenida').style.display = "none";
document.getElementById('tituloEncabezado').style.animationPlayState = "running";
document.getElementById('subtituloEncabezado').style.animationPlayState = "running";
document.documentElement.style.overflow = "auto";

setInterval(slideShowAnim, 3000);
}

//funcion para mostrar modalContacto
function modalContacto(){
    document.getElementById('modalContacto').style.display = "block";
    document.documentElement.style.overflow = "hidden";

    //recojo los datos del form en variables
    var nombre = document.getElementById('nombre').value;
    var correo = document.getElementById('correo').value;
    var asunto = document.getElementById('asunto').value;
    var telefono = document.getElementById('telefono').value;
    var mensaje;
    var tituloModalContacto = document.getElementById("tituloModalContacto");

    //compruebo que los datos del form son correctos y mando mensajes en el modal
    (function formCheck(){
        if (!document.getElementById("asunto").checkValidity()){
            mensajeTitulo = "Ha ocurrido un error :(";
            tituloModalContacto.innerHTML = mensajeTitulo;

            mensaje = "Selecciona un asunto.";
            document.getElementById('textoModalContacto').innerHTML = mensaje;
            document.getElementById('btnModalContacto').innerHTML = "Volver!";
            document.getElementById('btnModalContacto').focus();
        }
        else if (!document.getElementById("nombre").checkValidity()){
            mensajeTitulo = "Ha ocurrido un error :(";
            tituloModalContacto.innerHTML = mensajeTitulo;

            mensaje = "Introduce un nombre correcto.";
            document.getElementById('textoModalContacto').innerHTML = mensaje;
            document.getElementById('btnModalContacto').innerHTML = "Volver!";
            document.getElementById('btnModalContacto').focus();
        }
        else if (!document.getElementById("correo").checkValidity()){
            mensajeTitulo = "Ha ocurrido un error :(";
            tituloModalContacto.innerHTML = mensajeTitulo;

            mensaje = "Introduce un correo correcto.";
            document.getElementById('textoModalContacto').innerHTML = mensaje;
            document.getElementById('btnModalContacto').innerHTML = "Volver!";
            document.getElementById('btnModalContacto').focus();
        }
        else if (!document.getElementById("telefono").checkValidity()){
            mensajeTitulo = "Ha ocurrido un error :(";
            tituloModalContacto.innerHTML = mensajeTitulo;

            mensaje = "Introduce un número de teléfono correcto.";
            document.getElementById('textoModalContacto').innerHTML = mensaje;
            document.getElementById('btnModalContacto').innerHTML = "Volver!";
            document.getElementById('btnModalContacto').focus();
        }
        else if (!document.getElementById("mensaje").checkValidity()){
            mensajeTitulo = "Ha ocurrido un error :(";
            tituloModalContacto.innerHTML = mensajeTitulo;

            mensaje = "Introduce un mensaje.";
            document.getElementById('textoModalContacto').innerHTML = mensaje;
            document.getElementById('btnModalContacto').innerHTML = "Volver!";
            document.getElementById('btnModalContacto').focus();
        }
        else{
            mensajeTitulo = "Mensaje enviado correctamente!";
            tituloModalContacto.innerHTML = mensajeTitulo;

            mensaje = "Hola " + nombre + ",su mensaje se enviará a " + asunto + ", nos pondremos en contacto con usted mediante el correo: " + correo + ", o bien por el teléfono: " + telefono + " lo antes posible. <br>¡Muchas gracias por contactarnos!";
            
            document.getElementById('textoModalContacto').innerHTML = mensaje;
            document.getElementById('btnModalContacto').focus();
        }
    })()
    
    //cerrar modalContacto pulsando esc
    window.addEventListener("keydown", function(event){
        if (event.key =="Escape"){
            cerrarModalContacto();
        }
    }
    )
}

//funcion para cerrar modalContacto
function cerrarModalContacto(){
document.getElementById('modalContacto').style.display = "none";
document.documentElement.style.overflow = "auto";

//limpio los datos del form
document.getElementById("nombre").value = "";
document.getElementById("correo").value = "";
document.getElementById("asunto").value = "";
document.getElementById("telefono").value = "";
}

