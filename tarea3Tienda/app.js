// Declarar un arreglo para el almacen de los productos
let carrito = [];

// Variable global para guardar el total a pagar
let total = 0;

// Funcion para mostrar el menú al inicio y obtener la instruccion elegida por el usuario
function menu(){
    return parseInt(prompt(`Seleccione un producto para agregar al carrito 🛒 :
        1.- Camisa 👕 - $300
        2.- Pantalón 👖 - $500
        3.- Zapatos 🥿- $800
        4.- Sombrero 👒 - $200
        5.- Ver carrito y Total 👀🛒
        6.- Salir 👋🐶
        `))
}

// Funcion para agregar una camisa a la lista del carrito
function AgregaCamisa(){
    let camisa = {
        nombre:"Camisa",
        precio: 300
    };
    carrito.push(camisa);
    console.log("Producto Camisa agregado al carrito");
    total += camisa.precio;
}

// Funcion para agregar una pantalon a la lista del carrito
function AgregaPantalon(){
    let pantalon = {
        nombre:"Pantalón",
        precio: 500
    };
    carrito.push(pantalon);
    console.log("Producto Pantalón agregado al carrito");
    total += pantalon.precio;
}

// Funcion para agregar zapatos a la lista del carrito
function AgregaZapatos(){
    let zapatos = {
        nombre:"Zapatos",
        precio: 800
    };
    carrito.push(zapatos);
    console.log("Producto Zapatos agregado al carrito");
    total += zapatos.precio;
}

// Funcion para agregar un sombrero a la lista del carrito
function AgregaSombrero(){
    let Sombrero = {
        nombre:"Sombrero",
        precio: 200
    };
    carrito.push(Sombrero);
    console.log("Producto Sombrero agregado al carrito");
    total += Sombrero.precio;
}

// Funcion para ver los elementos que estan en el carrito asi como el total
function verCarrito(){
    if(carrito.length === 0){
        alert("No hay nada en el carrito");
    }else{
        let mensajeCarrito = "Articulos del carrito : \n\n";
        carrito.forEach((objeto,index)=>{
            mensajeCarrito+=`${index+1}.- ${objeto.nombre} - $ ${objeto.precio}\n `;
        });
        mensajeCarrito+="\nTotal: $"+total;
        console.log(mensajeCarrito);
        alert(mensajeCarrito);
    }
}

// Funcion para llevar el control de la tienda (flujo del programa)
function control(){
    // Variable para controlar el bucle
    let continuar = true;
    while(continuar){
        let opc = menu(); // muestra el menu y obtiene la opcion del usuario
        // Ejecuta la accion segun la opcion elegida
        switch(opc){
            case 1:
                AgregaCamisa();
                break;
            case 2:
                AgregaPantalon();
                break;
            case 3:
                AgregaZapatos();
                break;
            case 4:
                AgregaSombrero();
                break;
            case 5:
                verCarrito();
                break;
            case 6:
                alert("Saliendo del programa 🐕");
                continuar = false;
                break;
            default:
                alert("Opcion no válida. Intenta nuevamente  😀");
        }
    }
}
//Llamara a la funcion control para iniciar el programa
control();