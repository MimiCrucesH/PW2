//
const express = require("express");
const path = require("path");
const router = express.Router();

// que el servidor cache esa informacion
router.get('/pages1',(req, res)=>{
    res.sendFile(path.join(__dirname,'../public,','/page1.html'))
});

// Exportar el router para utilizarlo en la pagina principal
// utilizar todo lo que tenemos en java script
module.exports=router;


// Protocolo de Transferencia de Hipertexto(enlaces hacia otrso archivos
// como anclas ) = http regula como el servidor envia
// el recurso como hardware-host "anfitrion" software-
// URL localizador de recursos uniforme URI.
// es un codigo en el que el navegador informa
// que la pagina debe visualizarse
// Peticion http llega como GET madre de todas las peticiones. para solicitar un recurso
// POST Y GET. entregan los mismos resulatdos, pero tienen diferencias
// GET. la informacion va plana directamente en la url, desventajas solo 200 caracteres, con asccii
// POSTT. info no se guarda directamente en el historial, permite meter imagenes.
// codigos de estaos: el 200 (para decir que todo ok en http) 404 de que no lo encuentra
// POST MAN para validar y ver los codigos de error que reporta PUA

// Tarea. un html. bonito con css y que cambie de la calculadora y el qr
// codigo en git gub y capturas en pdf de que esta funcionando de la termianl habilitada
