let numVidas = 3;

// Generar numero aleatorio:
let aleatorio = Math.floor(Math.random()*(10 - 1)+1);
// Mostrar numero aleatorio:
console.log("El numero aleatorio es: "+aleatorio);
// Pediro numero al usuaruio
let num = parseInt(prompt("Ingrese un numero del 1 al 10: "));

// Mientas el numero ingresado no sea igual al aleatorio
while(aleatorio != num && numVidas>1){
    // de crementar numero de vidas
    numVidas --;
    // pedir nuevo numero
    num = parseInt(prompt("Numero incorrecto Intenta nuevamente tus vidas son: "+numVidas));
}
// si el numero es el mismo pues gana
if(aleatorio==num ){
    alert("Ganasteeee :)")
    console.log("Ganastee :)");
}else{
    alert("Perdiste el numero era: "+ aleatorio);
    console.log("Perdiste el numero era el: "+ aleatorio);
    
}


