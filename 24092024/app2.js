
let carrito =[];

let fruta = prompt("Ingresa una fruta: ");
carrito.push(fruta);
// Confirm si le 

while(confirm("Deseas agregar otra fruta?")){
    //Esta e suna variable que funciona de manera encapsulada dentro de la estructura de control
    let fruta = prompt("Ingresa una fruta: ");
    carrito.push(fruta);
};

let mensaje ="Usted compro \n";
// solo se ponen los elementos que necesitamos
carrito.forEach((elemento, indice)=>{
    mensaje += `${indice+1}.-${elemento}\n`;
});
alert( mensaje);

