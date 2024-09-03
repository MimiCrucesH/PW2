// Inicio de un arreglo para el almacen de tareas. Esta declarado, pero no asignado/ definido.

let tareas = [];

// funcion para mostrar el menu
function mostrarMenu(){
    // `` para escribir con espacios
    return parseInt(prompt(`
        Opciones disponibles:
        1.-Agregar tarea
        2.-Ver todas las tareas
        3.-Marcar tarea completada
        4.-Salir
        Elige una opcion:`));
}
// funcion para agregar tarea
function agregarTarea(){
    let nombre =prompt("Introduce el nombre de la tarea: ");
    // si tenemos algo es un true sino es false 
    if(nombre){
        // es un objeto con carateristicas. Coleccion de propiedades.
        let tarea = {
            nombre: nombre,
            completada: false
        };
        tareas.push(tarea);
        alert("Tarea agregada de forma correcta");

    }else{
        alert("El nombre de la tarea no puede estar vacio.");
    }
}
// funcion para ver todas las tareas
function verTareas(){
    if(tareas.length === 0){
        alert("No hay tareas asignadas");
    }else{
        let mensaje = "Lista de tareas ";
        // funcion flecha no tiene argumentos
        // recorre las tareas,
        tareas.forEach((tarea,index)=>{
            mensaje+=`${index+1}.- ${tarea.nombre}[${tarea.completada?"Completada":"Pendiente"}]\n`;
        });
        alert(mensaje);
    }
}

// funcion para manejar el flujo del programa
function iniciarPrograma(){
    let continuar = true;
    while(true){
        let opcion = mostrarMenu();
        switch(opcion){
            case 1:
                agregarTarea();
                break;
            case 2:
                verTareas();
                break;
            case 3:
                marcarTareaCompletada();
                break;
            case 4:
                alert("Saliendo del programa ... ");
                continuar = false;
                break;
            default:
                alert("Opcion no valida.Intenta nuevamente");
        }
    } alert("Programa finalizado");
}
iniciarPrograma();