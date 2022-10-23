let habilidades = document.querySelectorAll(".datos");

habilidades.forEach(habilidad => {
    let nombre = habilidad.getAttribute("data-nombre");
    let imagen = habilidad.getAttribute("data-img");
    let porcentaje = habilidad.getAttribute("data-porcentaje");
    habilidad.innerHTML = `<div class="contenedor-img-skill"><p class="skill__titulo">${nombre}</p><img class="img-skill" src="${imagen}" alt="${nombre} logo"><p class="percent">${porcentaje} %</p></div>`;
})
