// /*JS TP Final con Jose*/ 

//Cargar arrays desde JS.

let lista = document.getElementById("lista");
const productos = ["Pan  ", "Leche", "Carne" , "Yerba", "Fideos", "Arroz" , "Coca-Cola" , "Fosforos" , "Pescado" , "Desodorante"];
const precios = ["10000", "2000", "3000", "4000" , "5000","6000" , "7000" , "8000" , "9000" , "10000"];

function cargarProductos(arrayProductos, arrayPrecios) {
    for (let i = 0; i < arrayProductos.length; i++) {
        let li = document.createElement("li");
        let texto = document.createTextNode(`${arrayProductos[i]} - Precio: $${arrayPrecios[i]}`);
        li.appendChild(texto);
        li.setAttribute("class", "liJS");
        lista.appendChild(li);

        // Crear el input para la cantidad
        let inputCantidad = document.createElement("input");
        inputCantidad.type = "number";
        inputCantidad.value = "0";
        inputCantidad.min = "1";
        li.appendChild(inputCantidad);

        // Crear el botón para agregar al carrito
        let botonAgregar = document.createElement("button");
        botonAgregar.textContent = "Agregar";
        li.appendChild(botonAgregar);      
    }
}

cargarProductos(productos, precios);


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
