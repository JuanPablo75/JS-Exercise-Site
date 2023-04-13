
//funcion mostrar el contenido de las pestañas oferta y cambiar el estilo de los botones de seleccion de pestaña y de las ofertas para darle animacion
function mostrarPestana(contenedorAMostrar, tabClicada){

    //accedo a los elementos .contenedorPestana
    var listaPestanas = document.getElementsByClassName("contenedorPestana")

    //recorro el array listaPestanas y oculto todos los elementos
    for (var i = 0; i < listaPestanas.length; i++) {
        listaPestanas[i].style.display = "none";
    }

    //muestro el elemento clicado
    document.getElementById(contenedorAMostrar).style.display = "block";

    //accedo a los elementos .botonPestana
    var tabLinks = document.getElementsByClassName("botonPestana");

    //recorro el array tabLinks y elimino la clase pestanaActiva
    for (var i = 0; i < tabLinks.length; i++) {
        tabLinks[i].classList.remove("pestanaActiva");
    }

    //añado la clase pestanaActiva al elemento clicado
    document.getElementById(tabClicada).classList.add("pestanaActiva");

    //accedo a los elementos .oferta
    var tabOfertas = document.getElementsByClassName("oferta");

    //recorro el array tabOfertas y elimino la clase ofertaAnimada
    for (var i = 0; i < tabOfertas.length; i++) {
        tabOfertas[i].classList.remove("ofertaAnimada");
    }

    //accedo a los elementos .oferta del contenedor clicado
    var ArrayOfertasCont = document.getElementById(contenedorAMostrar).children;

    //recorro el array ArrayOfertasCont y añado la clase ofertaAnimada
    for (var i = 0; i < ArrayOfertasCont.length; i++) {
        ArrayOfertasCont[i].classList.add("ofertaAnimada");
    }

}