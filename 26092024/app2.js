
// Funciones anonimas
// sitaxis Math.random()

function numeroAleatorio(min,max) {
    // 
    return Math.floor(Math.random()*(max-min)+min)
}

// Número aleatorio entre 5-15
console.log(numeroAleatorio(5,15));

function saluda(){
    console.log("Hola")
}
saluda();

function saluda2(nombre){
    console.log("Hola "+nombre)
}
saluda2("Ami");

function suma(a,b){
    let resultado;
    return resultado = a+b;
}
// se ejecuta, pero no muestra el resultado
suma(6,5);

// ahora si da el resultado
console.log(suma(6,5));

// get obtener informacion, set
let dato1= 7+suma(5,6);
console.log(dato1);