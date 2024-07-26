// /*JS TP Final con Jose*/ 

//Cargar arrays desde JS.

let lista = document.getElementById("lista");

const productos = ["Pan", "Leche", "Carne" , "Yerba", "Fideos", "Arroz" , "Coca-Cola" , "Fosforos" , "Pescado" , "Jabon"];
const precios = ["10000", "2000", "3000", "4000" , "5000","6000" , "7000" , "8000" , "9000" , "10000"];
const stock = [10, 5, 8, 15, 20, 12, 7, 9, 6, 11]; 

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
