//Inicio de una arreglo para el almacen de tareas
let tareas=[];

//Funcion para mostrar nuestro menu
function mostrarMenu(){
    return parseInt(prompt(`
            "Opciones disponibles"
            1.- Agregar tarea
            2.- Ver todas la tareas
            3.- Marcar mi tarea como completada
            4.- Salir
            "Elige una opcion:"
        `));
}

//Funcion para agregar una tarea
function agregarTarea(){
    let nombre = prompt("Ingresa el nombre de la tarea");
    if(nombre){
       let tarea={
            nombre:nombre,
            completada: false
       };
       tareas.push(tarea);
       alert("Tarea Agregada de forma correcta"); 

    }else{
        alert("El nombre de la tarea no puede estar vacio.");

    }

}

//ver todas las tareas
function verTareas(){
    if(tareas.length === 0){
        alert("No tenemos tareas asignadas");
    }else{
        let mensaje = "Lista de tareas \n";
        tareas.forEach((tarea,index)=>{
            mensaje+=`${index+1}.-${tarea.nombre} [${tarea.completada ? "Completada":"Pendiente"}]\n `;

        });
        alert(mensaje);

    }
}
//Funcion para marcar una tarea como completada
function  marcarTareaCompletada(){
 
    let numero = parseInt(prompt("Introduce el numero de la tarea a completar: "));
    if( numero > 0 &&  numero <= tareas.length){
        tareas[numero-1].completada = true;
        alert(` La tarea "${tareas[numero-1].nombre}" ha sido marcada como completada`);
    }else{
        alert("Numero no valido");
    }

}

//Funcion para manejar el flujo del programa
function iniciarPrograma(){
    let continuar = true;
    while(continuar){
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
                alert("Saliendo del programa ...");
                continuar = false;
                break;
            default:
                alert("Opcion no valida. Intenta nuevamente");

        }

    }
    alert("Programa Finalizado");
}


iniciarPrograma();

// Hacer aplicacion de la tienda, poner en comentarios que hace cada funcion.