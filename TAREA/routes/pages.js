const express = require("express");
const paht=require("path");
const router = express.Router();

//definicion de las rutas y los manejadores

router.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname, '../public', 'index.html'));
});
router.get("/calculadora",(req,res)=>{
    res.sendFile(path.join(__dirname, '../public', 'calculadora.html'));
});
router.get("/QR",(req,res)=>{
    res.sendFile(path.join(__dirname, '../public', 'QR.html'));
});


module.exports = router;