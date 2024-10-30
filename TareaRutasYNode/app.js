const express = require("express");
const app= express();
const port = 3067;
//rutas y requiere el archivo de rutas
const routes = require("./routes");

app.use("/",routes);

app.listen(port,()=>{
    console.log(`Servidor en escucha desde http://localhost:${port}`);
})