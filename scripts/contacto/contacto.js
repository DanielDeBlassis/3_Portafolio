import { validar, habilitarBoton } from "./validacion.js";

const btn = document.getElementById('button');

emailjs.init('KOXja774hIl3M7vPy')

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Enviando...';

   const serviceID = 'default_service';
   const templateID = 'template_du42azx';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Enviar mensaje';
      swal("Mensaje enviado exitosamente!", "Muchas Gracias!", "success");
    }, (err) => {
      btn.value = 'Enviar mensaje';
      swal("Ocurrió un error!", "Vuelve a intentarlo", "error");
    //   console.log(JSON.stringify(err));
    });
});
