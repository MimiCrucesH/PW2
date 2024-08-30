// Funciones.
// Function, nombre, lista de parametros y lo que hara la funcion
// saludar() aunque se mande a llamar primero si jala porque jerarquiza primero funciones y despues llamados

function saludar(){
    console.log("Hola");
    alert("Hola desde un alert");
}

saludar();

function despedida(nombreUsuario){
    console.log("Adios "+nombreUsuario);
}

despedida("Mimi");

function retorno(nombreUsuario){
    return "Adios con return " + nombreUsuario;
}

console.log(retorno("MIMI"));
