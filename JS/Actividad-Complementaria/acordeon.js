// Seleccionamos todos los elementos con la clase "acordeon-title"
const acordeonTitles = document.querySelectorAll('.acordeon-header');

// Añadimos un evento "click" a cada uno de ellos
acordeonTitles.forEach(title => {
  title.addEventListener('click', () => {
    // Seleccionamos el elemento siguiente al título (en este caso, el contenido del acordeón)
    const acordeonContent = title.nextElementSibling;
    if (acordeonContent.style.display === 'block') {
      // Si el contenido está visible, lo ocultamos
      acordeonContent.style.display = 'none';
    } else {
      // Si el contenido está oculto, lo mostramos y ocultamos los demás.
      acordeonTitles.forEach(title => {
        // Para cada titulo se selecciona el contenido y se oculta.
        const content = title.nextElementSibling;
        content.style.display = 'none';
      });
      // Display block para el contenido del titulo clicado.
      acordeonContent.style.display = 'block';
    }
  });
});

// Mostramos el contenido de la primera pestaña al cargar la página
const firstacordeonContent = document.querySelector('.acordeon-content');
firstacordeonContent.style.display = 'block';
