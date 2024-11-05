// si se reliza de manera idonea sigue sino push
// resive dos parametros con funciones: resolve y reject
const miPromesa = new Promise((resolve, reject)=>{
    // simular una operacion asincrona
        setTimeout(()=>{
            const exito= true;
            if(exito){
                resolve(console.log("Operacion exitosa"));
            }else{
                reject(console.log("Hubo un error en la operacion"));
            }
        }, 1000); // se ejecuta transcurridos 10 segundos
    });