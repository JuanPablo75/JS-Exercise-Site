// Seleccionamos el elemento con class parallax-background

function Parallax() {

    // Obtenemos el valor del scroll en pixeles a partir de los 900px que es donde quiero que empiece el efecto
    let scrollTop = document.documentElement.scrollTop - 860;
    
    // Muevo en el eje Y el parallaxBG cuando esté encima de la seccion parallax
    document.getElementById('parallaxBG').style.transform = 'translateY(' + scrollTop * -0.4 + 'px)';
}

// Al realizar scroll se ejecuta la funcion Parallax
window.addEventListener('scroll', Parallax);