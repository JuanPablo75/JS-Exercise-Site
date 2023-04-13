/*carrousel automatico*/

//inicio contador
var bgCounter = 0;

function heroSlideShow(){

    //array con las imagenes de fondo
    var listaIMGBg = [
        "url('media/bg-img1.jpg')",
        "url('media/bg-img2.jpg')",
        "url('media/bg-img3.jpg')"
    ]; 

    //sumo 1 al contador que hace de indice
    bgCounter++;

    //si el contador llega al final del array, lo reinicio
    if (bgCounter == listaIMGBg.length) {
        bgCounter = 0;
    }

    //accedo al elemento #encabezado y cambio la BGImage
    document.getElementById("encabezado").style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3))," + listaIMGBg[bgCounter];
}

/* carrousel slideshow con animacion*/

//inicio que me va a dar el indice de la imagen que sigue
var counterNext = 0;

//inicio contador que me da la imagen en la que estoy
var counterMain = 0;

function slideShowAnim() {

    //array con las imagenes de fondo
    var listaImgBGAnim = document.getElementsByClassName("fondosHero");

    //sumo 1 al contador de imagen siguiente para que inicie en 1
    counterNext++;

    //resto 1 al contador de imagen siguiente lo cual me da la imagen actual
    counterMain = counterNext - 1;

    //si el contador de imagen siguiente llega al final del array, lo reinicio
    if (counterNext == listaImgBGAnim.length) {
        counterNext = 0;
    }

    //si el contador de imagen actual es menor que 0, lo pongo al final del array
    if (counterMain < 0){
        counterMain = listaImgBGAnim.length - 1;
    }

    //recorro el array y le quito las clases
    for (var i = 0; i < listaImgBGAnim.length; i++) {

        listaImgBGAnim[i].classList.remove("nextSlide")
        listaImgBGAnim[i].classList.remove("mainSlide")
        listaImgBGAnim[i].classList.remove("hiddenSlide")

        //pongo clase nextSlide a la imagen que le toca ser siguiente
        if(i == counterNext){
            listaImgBGAnim[i].classList.add("nextSlide")
        }
        //añado clase mainSlide a la imagen que era nextSlide
        else if(i == counterMain){
            listaImgBGAnim[i].classList.add("mainSlide")
        }
        //oculto el resto de imagenes
        else{
            listaImgBGAnim[i].classList.add("hiddenSlide")
        }
         
    }

}