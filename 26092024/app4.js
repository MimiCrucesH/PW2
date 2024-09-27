let frutas =["Manzana","Pera", "Sandia"];
// foreach itera en un arreglo: valor, indice, vector completo
frutas.forEach(valor => console.log(valor));

frutas.forEach((valor, index, vector) =>{
    //console.log(valor);
    // indice del elemento actual
    //console.log(index);
    // Vector completo
    console.log(vector);
}) 
