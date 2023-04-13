
// guardo la posicion del scroll
var posPreviaScroll = document.documentElement.scrollTop;

// cuando se haga scroll se ejecuta la función esconderMostrarMenu
window.onscroll = function() {esconderMostrarMenu()};

// función para mostrar y ocultar el menú de navegación
function esconderMostrarMenu(){

    // guardo la posicion nueva del scroll
    var posActualScroll = document.documentElement.scrollTop;

    // si la posicion nueva es mayor que la anterior, es que se está bajando el scroll
    if (posPreviaScroll > posActualScroll){
        
        // muestro el menú
        document.getElementById("navbar").style.top = "0";

        // si el scroll es mayor que 200px, muestro el menu pero mas pequeño
        if (posActualScroll > 200){
            document.getElementById("navbar").style.height = "50px";
            document.getElementById("navbar").style.fontSize = "1.3rem";
            document.getElementById("navbar").style.lineHeight = "50px";
            document.getElementById("submenu").style.top = "47px";
            document.getElementById("submenu").style.fontSize = "1rem";
            document.getElementById("logo").style.padding = "0";
        }
        // si es menor que 200px, le doy otro tamaño mas grande
        else{
            document.getElementById("navbar").style.height = "100px";
            document.getElementById("navbar").style.fontSize = "1.7rem";
            document.getElementById("navbar").style.lineHeight = "100px";
            document.getElementById("submenu").style.top = "95px"
            document.getElementById("submenu").style.fontSize = "1.3rem";
            document.getElementById("logo").style.padding = "15px";
        }
    }
    // si la posicion nueva es menor que la anterior, es que se está subiendo el scroll
    else{
        // si el scroll es menor que 200px, muestro el menu pero mas pequeño
        if(posActualScroll < 200){
            document.getElementById("navbar").style.height = "50px"
            document.getElementById("navbar").style.fontSize = "1.3rem";
            document.getElementById("navbar").style.lineHeight = "47px";
            document.getElementById("submenu").style.top = "47px";
            document.getElementById("submenu").style.fontSize = "1rem";
            document.getElementById("logo").style.padding = "0";
        }
        // si es mayor que 200px, lo escondo
        else{
            document.getElementById("navbar").style.top = "-100px";
        }
    }

    // guardo la posicion nueva como la posicion anterior
    posPreviaScroll = posActualScroll;
}

