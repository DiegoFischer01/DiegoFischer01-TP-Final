// /*JS TP Final con Jose*/ 

//Cargar arrays desde JS.

let lista = document.getElementById("lista");

const productos = ["Pan", "Leche", "Carne" , "Yerba", "Fideos", "Arroz" , "Coca-Cola" , "Fosforos" , "Pescado" , "Jabon" , "Detergente" ,"Atún"];
const precios = ["10000", "2000", "3000", "4000" , "5000","6000" , "7000" , "8000" , "9000" , "10000" , "4000" , "12000"];
const stock = [10, 5, 8, 15, 20, 12, 7, 9, 6, 11 ,12, 7]; 

function cargarProductos(arrayProductos, arrayPrecios, arrayStock) {

    for (let i = 0; i < arrayProductos.length; i++) {
        let li = document.createElement("li");
        let texto = document.createTextNode(`${arrayProductos[i]} - Precio: $${arrayPrecios[i]} `);
        li.appendChild(texto);
        li.setAttribute("class", "liJS"); //Creo la clase "liJS" para darle estilo posteriormente a los li, que estan encerrados en divs.
        lista.appendChild(li); // Una vez creado el (li) con clase y todo, lo adoso al bloque "lista"(HTML).
        
        // Creo los inputs para la cantidad de productos que quiero comprar.
        let inputCantidad = document.createElement("input");
        inputCantidad.type = "number";
        inputCantidad.value = "0";
        inputCantidad.min = "0"; // Para no poner comas.
        li.appendChild(inputCantidad);

        // Creo los botones para agregar al carrito.
        let botonAgregar = document.createElement("button");
        botonAgregar.textContent = "Agregar";
        li.appendChild(botonAgregar);
        botonAgregar.addEventListener("click", function() {
            let cantidad = parseInt(inputCantidad.value); //Para que el usuario no ingrese texto.
            if (cantidad <= arrayStock[i]) {
                arrayStock[i] -= cantidad; // Si la cantidad seleccionada es menor o igual al stock, se resta del stock, y se agrega al carrito. 
                alert(`${cantidad} ${arrayProductos[i]} agregado(s) al carrito.`); // Actualizar el texto del stock.
            } else {
                alert(`No hay suficiente stock de ${arrayProductos[i]}.`);
            }
        });    
        
    }
}

cargarProductos(productos, precios, stock);


//Formulario de contacto:
let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
// let email = document.getElementById("email");
let btnenviar = document.getElementById("enviar");
let informacion = [];

btnenviar.addEventListener("click" , (e)=>{
    e.preventDefault();
    informacion[0] = nombre.value;
    informacion[1] = apellido.value;
    // informacion[2] = email.value;

    let blob = new Blob([informacion] , {type: "text/plain;charset=utf-8"});
    saveAs(blob, "contact.txt");
})










// //---------------------------------------------------------------------------------------


// //Funcion para crear imagenes desde JS.

// function crearImagen(url, textoAlternativo){
//     let img = document.createElement("img");
//     img.setAttribute("src",url);
//     img.setAttribute("alt" , textoAlternativo);
//     img.setAttribute("class" , "tamaños");
//     contenedor.appendChild(img);
// }

// crearImagen("./imagenJS.png" , "Imagen de JS");

// crearImagen("./flores.jpg" , "Flores");
