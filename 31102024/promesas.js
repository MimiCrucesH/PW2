// un objeto que representa la finalizacion o error de una funcion asincrona 
// pendiente, resuelta y rechazada (operacion ha fallado)
// Generra una promesa
const miPromesa = new Promise((resolve, reject)=>{
// simular una operacion asincrona
    setTimeout(()=>{
        const exito= true;
        if(exito){
            resolve("Operacion exitosa");
        }else{
            reject("Hubo un error en la operacion");
        }
    }, 300);
});
