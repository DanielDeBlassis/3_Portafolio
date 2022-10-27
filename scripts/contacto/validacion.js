//Deshabilitar el botón
const $boton = document.querySelector("#button");
$boton.setAttribute("disabled", "disabled");

export function validar(input) {
    const tipoDeInput = input.dataset.tipo;
    const $msjError = input.parentElement.querySelector(".input-message-error");

    if (input.validity.valid) {
        input.classList.remove("error");
        $msjError.innerHTML = "";
        $msjError.classList.add("no-mostrar");
    } else {
        input.classList.add("error");
        $msjError.innerHTML = mostrarMensajeDeError(tipoDeInput, input);
        $msjError.classList.remove("no-mostrar");
    }
}
