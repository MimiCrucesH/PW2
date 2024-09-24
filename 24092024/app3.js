/* Hacer que se imprima 
X
X
X
X
X
*/
let arr = ["X","X","X","X","X"];
let mensaje = " ";
arr.forEach((elemento)=>{
    mensaje += `${elemento} \n`;
});
alert(mensaje);

/* Hacer que se imprima 
XXXXX
*/
mensaje = " ";
arr.forEach((elemento)=>{
    mensaje += `${elemento} `;
});
alert(mensaje);

/* Hacer que se imprima y que el usuario decida cuantos caracteres quiere 
X X X X X X
X
X
X
X
*/

let ver = parseInt(prompt("Ingrese un número:"));
let hor = parseInt(prompt("Ingrese un número:"));
let elementos =[];
// for para llenar el arreglo con Xs
for (let i=0; i<ver;i++){
    elementos[i]="X";
}
mensaje = " ";
elementos.forEach((elemento)=>{
    mensaje += `${elemento} `;
});

elementos2 =[];
// for para llenar el arreglo con Xs
for (let i=0; i<hor;i++){
    elementos2[i]="X";
}
elementos2.forEach((elemento)=>{
    mensaje += `${elemento}\n`;
});
alert(mensaje);

// Hacer cuadrado
mensaje = ""
let numcuadrado = parseInt(prompt("Ingrese un número:"));
let cuadro = [];
for (let i=0; i<numcuadrado;i++){
    cuadro[i]="X";
}
cuadro.forEach((elemento)=>{
    mensaje += `${cuadro}\n`;
});
alert(mensaje);

// tablas de multiplicar del 1 al 10 
mensaje = " ";
for (let i=0; i<10;i++){
    for (let j=0; j<10;j++){
    mensaje += " "+(i+1)+"X"+(j+1)+"="+(i+1)*(j+1)+"\n";
}
}
console.log(mensaje);
alert(mensaje);
