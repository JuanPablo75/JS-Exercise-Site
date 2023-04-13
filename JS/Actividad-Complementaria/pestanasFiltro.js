// Accedo a los tabLinks y tab-containers
const tabLinks = document.querySelectorAll(".tabLink");
const tabCont = document.querySelectorAll(".tab-container");

// agrego evento click a los tablinks
tabLinks.forEach(tab => {
    tab.addEventListener("click", () => {
    
        // guardo el valor del atributo data-cont del elemento tab en el que se hizo click
        const tabObjetivo = tab.getAttribute("data-cont");

        // borro la clase active de todos los elementos tab
        tabLinks.forEach(tab => {
            tab.classList.remove("active");
        });

        // añado la clase active al elemento tab en el que se hizo click
        tab.classList.add("active");

        // quito la clase active de todos los elementos tab-panel
        tabCont.forEach(tabCont => {
            tabCont.classList.remove("active");

            // si el id del elemento tab-panel es igual al valor de data-cont del elemento tab que se hizo click lo pongo active
            if (tabCont.getAttribute("id") === tabObjetivo) {

                // agrego clase active a ese elemento
                tabCont.classList.add("active");
            }
        });
    });
});