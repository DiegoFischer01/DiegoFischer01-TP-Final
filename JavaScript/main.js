// /*JS TP Final con Jose*/ 

//Cargar arrays desde JS.

let lista = document.getElementById("productos");
const productos = ["Pan", "Leche", "Carne" , "Yerba", "Fideos", "Arroz"];
const precios = ["1000", "2000", "3000", "4000" , "5000","6000"];

function cargarProductos(arrayProductos, arrayPrecios) {

    for (let i = 0; i < arrayProductos.length; i++) {
        let li = document.createElement("li");
        let texto = document.createTextNode(`${arrayProductos[i]} - Precio: $${arrayPrecios[i]}`);
        li.appendChild(texto);
        li.setAttribute("class", "nombreDeLaClase")
        lista.appendChild(li);
    }

}

cargarProductos(productos,precios);
// //Despues si quiero agregar mas, los agrego en los arrays de Productos y Precios; pero NO modifico la funcion.


// //---------------------------------------------------------------------------------------


// //Alternativa mas facil:

// function pintarProductos2(arrayProductos, arrayPrecios){

//     for (let i = 0; i < arrayProductos.length; i++){
//         lista.innerHTML += `<li> Prod: ${arrayProductos[i]} - Precio: $${arrayPrecios[i]} </li>`
//     }
// }

// pintarProductos2(productos,precios);


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


//-----------------------------------------------------------------------------------------------------

// Tambien se pueden cargar con json.

// const producto={
//     "nombre":"arroz",
//     "cantidad":35,
//     "precio":1500
// }

// console.log("Del producto "+ producto.nombre + " tengo "
//     + producto.cantidad + " unidades que valen c/u $"+ producto.precio);
