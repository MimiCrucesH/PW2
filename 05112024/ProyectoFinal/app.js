// Importacion
const express = require('express'); 
// Framework para servidores, puntos de acceso o end point(peticion http post o get)
// Para utilizar milware (funcion-> res y req) app.get('/', (req, res)=> res.senFile(ruta))
const mysql = require('mysql2');
// Libreria de node para conectarse con BD

// body-parser milware, permite procesar y datos enviados del cuerpo de soliitudes  de http y formularios o peticiones post.
const bodyPaser = require('body-parser');

// Instanciar

const app = express(); 
//Puerto
const port =3008;
// analizar los datos del cuerpo de las solicitudes http,
// captura los datos por medio de http
app.use(bodyPaser.urlencoded({extend:false}));

// motor de plantillas para html de forma dinamica
// motor de plantillas ejs, permite crear html de manera dinamica.
// permite la interaccion entre html y javascript con implementacion de node
// en el ejemplo del proyecto se muestra la info y cuando agrego se ve en automatico sin tener que refrescar
app.set('view engine','ejs');

// configuracion para la base de datos
// Es la peor forma de implementarla pok la informacion esta expuesta.
// 
const db = mysql.createConnection({ // a partir de mysql generar la conexion
    host : 'localhost',
    user: 'root',
    password: '1234',
    database: 'node_crud',
    port: '3306'
}); 

// conecion a la bd
db.connect(err=>{
    if(err){
        console.log('Error al hacer conexion a la BD', err);
    }else{
        // alt96 para ``
        console.log(`Conexion realizada :)`);
    }
});

//server inicio
app.listen(port, ()=>{
    console.log(`El server esta en escucha desde http://localhost:${port}`)
});

// mostrar lista de usuarios

app.get('/',(req, res)=>{
    // consulta a la BD
    const query = 'SELECT * FROM user';
    // trabajar con la conexion
    // funcion query para generar una consulta
    db.query(query,(err,results)=>{
        if(err){
            // mensaje de eroor para el usuario
            console.error(`Error al recuprerar datos ${err}`); // aparece en el powersehll
            res.send('Error en recuperra datos'); // en el usuario 
        }else{
            // mandar la info a traves de la plantilla js donde va a trabajar la pagina principal del index
            res.render('index',{users: results}); // users es la tabla que se tiene en la BD
        }
    });
});

// Agregar usuario

app.post('/add',(req, res)=>{
    const {name, email} = req.body; // body para tener informacion desde el http
    // consulta para que evite sql inyection, utilizar comodines sql
    const query ='INSERT INTO users[name, email] VALUES(?,?)';
    // enviar los datos para que se inserten en la base
    db.query(query,(name, email), (error=>{
        if(err){
            console.log(`Erros al insertar en usuarios codigo->${err}`);
            res.send('Error');
        }else{
            res.redirect('/'); // redirigir a la pagina principal
        }
    }));

});