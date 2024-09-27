
// sitaxis Math.random()
// Funcion declarativa
// Declaradas siempre estan disponibles en tiempo de ejecucion, las funciones se evaluan antes que
function numeroAleatorio(min,max) {
    return Math.floor(Math.random()*(max-min)+min);
}
console.log(numeroAleatorio(5,15))

// Funciones anonimas expresada en una variable
// Expresadas no son evaluadas hasta que el interprete alcance a esa linea de codigo. 
// lo que puede generar problemas. Asegura que siga el flujo del programa Ejemplo: Try catch

let calculaAleatorio = function numeroAleatorio(min,max) {
    return Math.floor(Math.random()*(max-min)+min);
}
console.log(calculaAleatorio(1,11));

// Funcion flecha no tiene nombre, la palabra reservada fuction, el return esta implicita
// si hay varios argumentos, no se puede utilizar como constructor

let numero = max =>Math.floor(Math.random()*(max-1)+1);
console.log(numero(15));

let numero2 = (max, min) =>Math.floor(Math.random()*(max-min)+min);
console.log(numero2(15,5));

// Gestor primero XAMPP o php myadmin y despues workbeanch puerto: 3308, contraseña: facil

