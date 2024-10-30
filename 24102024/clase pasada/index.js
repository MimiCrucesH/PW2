// inicializamos el proyecto con un json si lo quito o lo pongo
//milware para enviar informacion al usuario 
const express = require("express");
const path = require("path"); // ayuda a definir donde esta mi archivo

const app = express();

app.get("/",(req,res)=>{
        //res.send("Hola mundo desde Node");
        //res.sendFile("C:/Users/aaron/Desktop/clases2025/web21710/22102024/express/index.html");
        res.sendFile( path.join( __dirname+"/index.html"));    
    });

const port=3056; // Generamos un puerto

app.listen(port,()=>{
    console.log(`El server esta en escucha desde el http://localhost:${port}`);
})
// 360 security.