let compras =[];
let fruta =prompt("Ingresa una fruta: ");

compras.push(fruta);

while(confirm("Ingresa una fruta a el carrito: ")){
    let fruta2 =prompt("Ingresa otra fruta: ");; // No hay problema porque es local
    compras.push(fruta2);
}
console.log("Las frutas que compraste son: ");
// for  in son los indices for of da directamente los valores del arreglo

for(let valoresDeArreglo of compras){
    console.log(valoresDeArreglo);
}

// Funciones anonimas.