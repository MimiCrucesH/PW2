// npm install express

const express = require("express");
const path= require("path");
const pagesRutas=require("./routes/pages");
const app = express();
const PORT = 3059; 

// Para que sean visuales
app.use(express.static('public'));
app.use('/',pagesRutas);

// configurar pagina de inicio para que cargue una pagina por default
// carpeta rai, milware
app.get('/',(req,res)=>{
    res.redirect('/page1');
});

app.listen(PORT,()=>{
})

console.log('Escuchando desde http://127.0.0.1:${PORT}');