// Importacion
const express = require('express'); 
// Framework para servidores, puntos de acceso o end pont(peticion http post o get)
// Para utilizar milware (funcion-> res y req) app.get('/', (req, res)=> res.senFile(ruta))
const mysql = require('mysql2');
// Libreria de node para conectarse con BD

// body-parser milware, permite procesar y datos datos enviados del cuerpo de de soliitudes  de http y formularios o peticiones post.
const bodyPaser = require('body-parser');

// Instanciar

const app = express(); // 

app.use(bodyPaser.urlencoded({extend:false}))