const operacion =(numero1, numero2, callback)=>{
    return setTimeout(()=>{
        callback(numero1, numero2);
    }, 300);
    // para esperar 300s
    // setTimeout(algo que hara, el tiempo);
};

operacion(1,3,(a,b)=>{
    console.log(a+b)
});


