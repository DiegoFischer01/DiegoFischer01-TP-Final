//Formulario de contacto:


let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let email = document.getElementById("email");
let telefono = document.getElementById("telefono");
let consulta = document.getElementById("consulta");
let btnenviar = document.getElementById("enviar");
let form = document.querySelector('.form'); // Agrega esta línea

btnenviar.addEventListener("click", (e) => {
    e.preventDefault();

    // Verifica si algún campo está vacío
    if (!nombre.value || !apellido.value || !email.value || !telefono.value || !consulta.value) {
        alert("Por favor, completa todos los campos.");
        return; // Se detiene el envio del formulario.
    }

    // Si todos los campos están llenos, crea un objeto Blob con la información
    const informacion = `${nombre.value}, ${apellido.value}, ${email.value}, ${telefono.value}, ${consulta.value}`;
    const blob = new Blob([informacion], { type: "text/plain;charset=utf-8" });

    // Guarda el archivo "contact.txt"
    saveAs(blob, "contact.txt");

    // Restablece el formulario después de enviar
    form.reset();
});
