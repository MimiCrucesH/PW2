// Quarry selector

// Variables para manejar la informacion:
let boton = document.querySelector("#Boton");
let parrafo = document.querySelector("#Parrafo");

// addEventListener() va a esperar un evento por ejemplo un click. Dependiendo de la etiqueta son los eventos que va a tener
// funcion anonima y se va a ajecutar al click
boton.addEventListener("click",()=>{
    parrafo.textContent = "Un nuevo texto";
});

// se va a cargar la funcion aunque no se llame.Primero se cargan las funciones
// despues el codigo como tal.
function saludar(){
    console.log("Hola Mundo")
}