
window.onresize = function () {
    const navegador = document.querySelector(".menu_nav");

    if (screen.width <= 500) {
        navegador.innerHTML = `<details>
        <summary><i class="fas fa-bars" id="barra-navegacion"></i></summary>
            <ul class="menu__list">
                <li class="menu__list__item"><a href="#sobre-mi">Sobre mi</a></li>
                <li class="menu__list__item"><a href="#habilidades">Habilidades</a></li>
                <li class="menu__list__item"><a href="#pasatiempos">Pasatiempos</a></li>
                <li class="menu__list__item"><a href="#formacion">Formación</a></li>
                <li class="menu__list__item"><a href="#proyectos">Proyectos</a></li>
                <li class="menu__list__item"><a href="#contacto">Contacto</a></li>
            </ul>
        </details>`;
    }
    if (screen.width > 500) {
        navegador.innerHTML = `<ul class="menu__list">
            <li class="menu__list__item"><a href="#sobre-mi">Sobre mi</a></li>
            <li class="menu__list__item"><a href="#habilidades">Habilidades</a></li>
            <li class="menu__list__item"><a href="#pasatiempos">Pasatiempos</a></li>
            <li class="menu__list__item"><a href="#formacion">Formación</a></li>
            <li class="menu__list__item"><a href="#proyectos">Proyectos</a></li>
            <li class="menu__list__item"><a href="#contacto">Contacto</a></li>
        </ul>`;
    }
}