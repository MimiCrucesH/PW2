// Funcion call back
/*const operacion =(numero1, numero2, op)=>{
    return console.log(op(numero1,numero2));
}*/
/*const operacion =(numero1, numero2, op)=>{
    return console.log(op(numero1,numero2));
}
operacion(1,3,(a,b)=>a+b);
operacion(1,3,(a,b)=>a-b);
operacion(1,3,(a,b)=>a*b);
operacion(1,3,(a,b)=>a/b);
*/
// no usar callback es una mala practica de programacion
/*const operacion =(numero1, numero2, callback)=>{
    return console.log(callback(numero1,numero2));
}
operacion(1,3,
(a,b)=>{
    a+b)
};
operacion(1,3,(a,b)=>a-b);
operacion(1,3,(a,b)=>a*b);
operacion(1,3,(a,b)=>a/b);
// es como una funcion recursiva en java
*/
/*
let saludar =(){
    console.log(`Hola ${nombre}`);
}

function Saludo(){
    console.log(`Hola, mundo`);
}
Saludo();
*/
function Saludar(nombre){
    console.log(`Hola ${nombre}`);
}


function procesarEntradaUsuario(callback){
    const nombre = prompt('Por favor ingresa tu nombre: ');
    callback(nombre);
}
procesarEntradaUsuario(Saludar);