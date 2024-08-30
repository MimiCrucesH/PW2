let nombre = prompt("Ingresa tu nombre: ");
let edad = prompt("Ingresa tu edad: ");
let peso = prompt("Ingresa tu peso: ");
let estatura = prompt("Ingresa tu estatura:");

let IMC = parseInt(peso)/(parseInt(estatura)*parseInt(estatura));
console.log(nombre);
console.log("Tu IMC es: "+ IMC);
