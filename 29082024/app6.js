//Declarar arreglos
let frutas =["Manzana", "Platano", "Piña","Jicama", "Pera"];

// Recomendacion: meter la variable local
for( let i=0; i<frutas.length; i++ ){
    console.log(frutas[i]);
}
// for of
console.log("--------------------------");
for(let fruta of frutas){
    console.log(fruta);
}

for(let fruta in frutas){
    console.log(fruta);
}

