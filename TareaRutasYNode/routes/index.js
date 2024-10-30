const express = require("express");
const path = require("path");
const router = express.Router(); // instancoçia para manejar las rutas de manera modular

//definicion de las rutas y los manejadores
// caundo un usuario accede a esta ruta, se envia la respuesta:
router.get("/",(req,res)=>{    
    res.sendFile(path.join(__dirname,'bienvenida.html'));
});

router.get("/QuienesSomos",(req,res)=>{    
    res.sendFile(path.join(__dirname,'quienesSomos.html'));
});

router.get("/Conocenos",(req,res)=>{    
    res.sendFile(path.join(__dirname,'conocenos.html'));
});
module.exports = router;