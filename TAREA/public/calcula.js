// Funcion para agregar lo que tecleamos en la pantalla
function agregarPantalla(value){
    document.getElementById("Pantalla").value+=value;
}
function LimpiarPantalla(){
    document.getElementById("Pantalla").value=" ";
}
function calcular(){
    // try entra si todo va bien y en el catch si hay algun error
    // Sirve para atrapar errores que no estan en tus manos
    // que no podemos controlar nosotros sino son causados  por parte de los usuarios
    try {
        // eval
        let valor = eval(document.getElementById("Pantalla").value);
        document.getElementById("Pantalla").value=valor;
    } catch (error) {
        document.getElementById("Pantalla").value="Error";
    }
}