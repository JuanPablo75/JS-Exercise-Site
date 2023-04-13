// Selecciono los elementos con clase tooltip
const tooltips = document.querySelectorAll('.tooltip');

// Recorro los elementos con clase tooltip
tooltips.forEach((tooltip) => {

    // Agrego un evento al pasar el mouse por encima del elemento
    tooltip.addEventListener('mouseover', () => {

      // Obtengo el texto del atributo data-tooltip
      const tooltipText = tooltip.getAttribute('data-tooltip');

      // Creo un elemento span con la clase tooltiptext
      const tooltipEl = document.createElement('span');

      // Agrego el texto al elemento span
      tooltipEl.classList.add('tooltiptext');

      // Agrego el elemento span al elemento con clase tooltip
      tooltipEl.innerText = tooltipText;

      // Agrego el elemento span al elemento con clase tooltip
      tooltip.appendChild(tooltipEl);
    });

    // Agrego un evento al sacar el mouse del elemento
    tooltip.addEventListener('mouseout', () => {

      // Obtengo el elemento span con la clase tooltiptext
      const tooltipEl = tooltip.querySelector('.tooltiptext');

      // Elimino el elemento span con la clase tooltiptext
      tooltipEl.remove();

    });
});