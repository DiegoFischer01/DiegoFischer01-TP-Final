// /*JS TP Final con Jose*/ 

//Cargar arrays desde JS.

let lista = document.getElementById("lista");

const productos = ["Pan", "Leche", "Carne", "Yerba", "Fideos", "Arroz", "Coca-Cola", "Fosforos", "Pescado", "Jabon", "Detergente", "Atún"];
const precios = ["10000", "2000", "3000", "4000", "5000", "6000", "7000", "8000", "9000", "10000", "4000", "12000"];
const stock = [10, 5, 8, 15, 20, 12, 7, 9, 6, 11, 12, 7];
const imagenes = 
[
    "Imagenes\Pan.jpeg",
    "Imagenes\Leche.jpeg",
    "Imagenes\Carne.jpeg",
    "Imagenes\Yerba.jpeg",
    "Imagenes\Fideos.jpeg",
    "Imagenes\Arroz.jpeg",
    "Imagenes\Coca.jpeg",
    "Imagenes\Fosforos.jpeg",
    "Imagenes\Pescado.jpeg",
    "Imagenes\Jabon.jpeg",
    "Imagenes\Detergente.jpeg",
    "Imagenes\Atun.jpeg"
]

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
        inputCantidad.setAttribute("class" , "inputs")
        li.appendChild(inputCantidad);


        

        // Creo los botones para agregar al carrito.
        let botonAgregar = document.createElement("button");
        botonAgregar.textContent = "Agregar";
        botonAgregar.setAttribute("class" , "btnAgregar")
        li.appendChild(botonAgregar);
        botonAgregar.addEventListener("click", function () {
            let cantidad = parseInt(inputCantidad.value); //Para que el usuario no ingrese texto.
            if (cantidad <= arrayStock[i]) {
                arrayStock[i] -= cantidad; // Si la cantidad seleccionada es menor o igual al stock, se resta del stock, y se agrega al carrito. 
                alert(`${cantidad} ${arrayProductos[i]} agregado(s) al carrito.`); // Actualizar el texto del stock.
            } else {
                alert(`No hay suficiente stock de ${arrayProductos[i]}.`);
            }
        });

        let img = document.createElement("img");
        img.src = imagenes[i]; 
        img.alt = `${arrayProductos[i]} Imagen`; 
        img.setAttribute("class","fotoProducots")
        li.appendChild(img);

    }
}

cargarProductos(productos, precios, stock, imagenes);


//Boton para finalizar compra y mostrar total.

const botonFinalizar = document.getElementById("finalizarCompra");
botonFinalizar.addEventListener("click", finalizarCompra); //Use funcion regular por el hoisting.

function finalizarCompra() {
    let totalProductos = 0;
    let precioTotal = 0;

    const inputsCantidad = document.querySelectorAll(".liJS input[type='number']");// Para no agregar ID a cada producto use querySelectorAll (la clase .liJS hace referenciaa cada input, del tipo number, de la lista). 
    for (let i = 0; i < inputsCantidad.length; i++) {
        const cantidad = parseInt(inputsCantidad[i].value);
        totalProductos += cantidad;
        precioTotal += cantidad * parseInt(precios[i]);
    }

    alert(`Total de productos: ${totalProductos}\nPrecio total: $${precioTotal}`);

    window.location.href = "index.html"
    total = 0
}


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
