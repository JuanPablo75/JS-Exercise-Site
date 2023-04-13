// function modalLightBoxG(){
//     document.getElementById("modalLightBoxG").style.display = "flex";
//     document.getElementById("modalLightBoxG").style.overflow = "hidden";
//     document.getElementById("modalLightBoxG").style.position = "fixed";

//     var listaImgGal = document.getElementsByClassName('imgGal');

//     for (var i = 0; i < listaImgGal.length; i++) {
//         listaRutaImgGal.push(listaImgGal[i].src);
//     }

//     document.getElementById("imageToShow").innerHTML = "<img class='imgLB' src='media/G01.jpg'>";

// }


var listaRutaImgGal = [];
var numeroImg = 0;

function readyLightBox(){

    //array elementos con clase imgGal
    var listaImgGal = document.getElementsByClassName('imgGal');

    //rellenar array listaRutaImgGal con las rutas de las imagenes
    for (var i = 0; i < listaImgGal.length; i++) {
        listaRutaImgGal.push(listaImgGal[i].src);
    }

    //añadir evento click a cada elemento con clase imgGal
    for (var i = 0; i < listaImgGal.length; i++){
        listaImgGal[i].addEventListener("click", openLightBox);
    }
    
    //funcion para abrir lightbox
    function openLightBox(){
        
        //recojo el src del elemeto clicado
        var rutaImgClickada = event.currentTarget.src;
        
        //busco el indice del elemento clicado en el array listaRutaImgGal
        numeroImg = listaRutaImgGal.indexOf(rutaImgClickada);
        
        //muestro el LightBox
        document.getElementById("modalLightBoxG").style.display = "flex";
        document.getElementById("modalLightBoxG").style.overflow = "hidden";
        document.getElementById("modalLightBoxG").style.position = "fixed";
        
        //muestro la imagen clicada
        document.getElementById("imageToShow").innerHTML = "<img class='imgLB' src=" + listaRutaImgGal[numeroImg] + ">";

        closeLightBox();
    }
    
    //funcion para cerrar lightbox
    function closeLightBox(){
        
        //para que se cierre al pulsar fuera de la imagen, fuera de los botones y fuera de los iconos
        window.addEventListener("click", function(event){

            if (!event.target.matches(".imgLB") && !event.target.matches(".imgGal") && !event.target.matches(".lbButtons")&& !event.target.matches(".fa-solid")){
                document.getElementById("modalLightBoxG").style.display = "none";
                document.getElementById("modalLightBoxG").style.overflow = "auto";
            }
        })

        //para que se cierre al pulsar la tecla escape
        window.addEventListener("keydown", function(event){

            if (event.key =="Escape"){
                document.getElementById("modalLightBoxG").style.display = "none";
                document.getElementById("modalLightBoxG").style.overflow = "auto";
            }
        })
    
    }
}

// avanzar en las imagenes
function nextImgGal(){
    //aumento el contador
    numeroImg++;

    //si el contador es mayor que el numero de imagenes, lo pongo a 0
    if (numeroImg == listaRutaImgGal.length) {
        numeroImg = 0;
    }

    //muestro la imagen del array con indice=contador despues de sumar el contador
    document.getElementById("imageToShow").innerHTML = "<img class='imgLB' src=" + listaRutaImgGal[numeroImg] + ">";
}

// retroceder en las imagenes
function prevImgGal(){
    //decremento el contador
    numeroImg--;

    //si el contador es menor que 0, lo pongo al final del array
    if (numeroImg < 0) {
        numeroImg = listaRutaImgGal.length - 1;
    }

    //muestro la imagen del array con indice=contador despues de restar el contador
    document.getElementById("imageToShow").innerHTML = "<img class='imgLB' src=" + listaRutaImgGal[numeroImg] + ">";
}
