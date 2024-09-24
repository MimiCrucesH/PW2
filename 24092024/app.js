// 
let frutas = ["Manzana", "Sandia", "Pera","Jicama"];

//frutas.forEach(fruta => console.log(fruta));
// index es el elemento en el que se encuentra 0, 1 etc, indice actual
// array imprime todos los elementos del arreglo ej  (3) ['Manzana', 'Sandia', 'Pera'], vector que esta siendo aplicado
// fruta imprime las frutas, valor actual
// fruta, indice y array son argumentos no son variables, se utilizan internamente
/*
array es menor prosesamiento que fruta si se quiere imprimir todo el array
frutas.forEach((fruta, index,array)=> {
   //console.log(index+1);
   // console.log(array); 
    //console.log(fruta);

});
*/
// elementos que tiene el arreglo, indices, y vector completo del array
// los numbres pueden cambiar, pero por buenas practicas deben ser intuitivos
frutas.forEach((fruta, index,array)=> {
    console.log(`Fruta(${index+1}).- ${fruta}`)
});
