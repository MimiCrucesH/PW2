let nombre = prompt("Ingresa tu nombre: ");
let edad = prompt("Ingresa tu edad: ");
let peso = prompt("Ingresa tu peso (kg): ");
let estatura = prompt("Ingresa tu estatura (m):");

let IMC = parseFloat(peso)/(parseFloat(estatura)*parseFloat(estatura));
console.log(nombre);
console.log("Tu IMC es: "+ IMC);

prompt(nombre + " tu IMC es: "+ IMC);