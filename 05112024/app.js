
const operacinPromesa = (numero1, numero2)=>{
    const resultado = numero1+numero2;
    // Crear promesa.Resuelta. Genera un resultado
    // se crea con el constructor Promise y recibe como argumento una funcion
    // resolve o 
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve(resultado);
        },300);
    });
}

operacinPromesa(1,3)
 .then(result => console.log(result)); // then se ejecuta cuando se resuelve de manera exitosa y catch cuando se falla.

// ¿Qué es una API? Servicio que lo controla un servidor externo.