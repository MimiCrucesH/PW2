let numeroVidas = 5;
let numAleatorio = Math.floor(Math.random()*(10-1)+1);
console.log(numAleatorio);
let numUsuario = parseInt(prompt("Ingresa un número: "));

while(numeroAleatorio !== numUsuario && numeroVidas>1){
    numeroVidas --;
    numUsuario = parseInt(prompt("Intenta nuevamente. Ingresa un numero: "));
}

if(numUsuario==numAleatorio){n
    console.log("Ganaste");
}else{
    console.log("El numero es incorrecto tienes "+numeroVidas+" vidas");
}


