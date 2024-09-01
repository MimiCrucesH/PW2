// Crear un juego de adivinar un numero aleatorio
// generar numero aletorio
let numeroMaquina = Math.floor(Math.random()*(10 - 1)+1);
console.log("El numero secreto es: "+numeroMaquina);

let numeroUSer = parseInt (prompt("Ingresa un numero del 1 al el 10:"));

let vidas= 3;

 while(numeroMaquina !== numeroUSer && vidas>1){
    vidas--;
    numeroUSer = parseInt(prompt("Intenta nuevamente tus vidas son: "+vidas));
    
}

 if (numeroMaquina == numeroUSer){
    alert("Ganaste wiii:)")
    console.log("Ganaste");
 }else{
    alert("Perdiste el numero era: "+numeroMaquina);
    console.log("Perdiste el numero era el: "+numeroMaquina);
 }
