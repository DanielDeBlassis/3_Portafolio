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

export function habilitarBoton(inputs){
    inputs.forEach((input) => {
        if(input.validity.valid){ 
        $boton.removeAttribute("disabled");
        }else{
        $boton.setAttribute("disabled", "disabled");
        }
    });
}

const tipoDeErrores = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch",
    "customError",
];

const mensajesDeError = {
    nombre: {
        valueMissing: "El campo nombre no puede estar vacío",
        patternMismatch: "El nombre debe contener entre 1 a 50 caracteres.",
    },
    email: {
        valueMissing: "El campo correo no puede estar vacío",
        typeMismatch: "El correo no es válido",
    },
    asunto: {
        valueMissing: "El campo asunto no puede estar vacío",
        patternMismatch: "El asunto debe contener entre 1 a 50 caracteres.",
    },
    mensaje: {
        valueMissing: "El campo mensaje no puede estar vacío",
        patternMismatch: "El mensaje debe contener entre 1 a 300 caracteres.",
    }
};

function mostrarMensajeDeError(tipoDeInput, input) {
    let mensaje = "";
    tipoDeErrores.forEach((error) => {
        if (input.validity[error]) {
            mensaje = mensajesDeError[tipoDeInput][error];
        }
    });
    return mensaje;
}







