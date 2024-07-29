



//Formulario de contacto:
let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
// let email = document.getElementById("email");
let btnenviar = document.getElementById("enviar");
let informacion = [];

btnenviar.addEventListener("click", (e) => {
    e.preventDefault();
    informacion[0] = nombre.value;
    informacion[1] = apellido.value;
    // informacion[2] = email.value;

    let blob = new Blob([informacion], { type: "text/plain;charset=utf-8" });
    saveAs(blob, "contact.txt");
})