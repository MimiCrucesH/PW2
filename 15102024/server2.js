// instanciamos los paquetes de expres
const express = require();
const app = express();


//Middleware funciones que responden o obtienen un mensaje es como los get y set (obtener informacion y modificar)
// /la ruta por default
app.get("/",(req,res)=>{
     // res.send("Hola mundo desde Node")
     //res.sendfile("//Obtener toda la ruta del archivo")
     // esto no sirve porque se tendria que estar cambiando la ruta
     res.sendFile("c:Users/noemi/Desktop... express/index.html");
     // para eso mejor trabajar con rutas de acceso y directorios
     const var = require("path")
     res.sendFile(path.join(_dirname+'/index.html');
});
// http://localhost:3056 beneficios, puedo utilizar diferentes puertos
// y funcionando a la par
// dependiendo del So hay que ver como hacer para que se ejecute de manera constante
// ejemplo dne linuc &##
// terminal donde esta el proyecto y npm install para que package-lock.json tiene
// los modulos
const port = 3056;
app.listen(port.()=>){
    console.log()
}
// Modelo (BD POR LO GENERAL) vista LO QUE VE EL USUARIO -controlador
// COMO ROMPER PROCESOS MEDIANTE TERMINAL