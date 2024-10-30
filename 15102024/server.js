// levantar un servidor
// Importar el modulo http que viene incluido en Note.js
const http = required('http');

// Definir puerto que va a correr 
const port =3009;

// Crear servidor
const server = htpp.createserver((req, res)=>{
    // respuesta 200 indica que la solucitua ha tenido exito
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end('Hola mundo');
});
// escuchar el puerto especifico
server.listen(port,()=>{
    console.log('El servidor esta funcionado por medio de https://localhost:$(port)');
})


// en la carpeta de express

// aplicacion primaria, como un main
// archivo json da informacion del proyecto de manera completa
// archivo json cdonde vienen las dependencias
// modulos para trabajar con todo el proyecto


// abrir terminal npm init --yes da la esctructura basica del package.json configuracion del proyecto por defaul si s ele quita el yes va pregunatndo ctrl*shif p
// de manera manual: 
/*
npm install express crea 522 modulos
crear el app.js
npm install va a leer esos archivos y va a instalar los modulos
nuevo .gitignore y poner el nombre: node_modules para ignorar los elementos que no se quieren subir al repo
y va por jerarquia

TAREA SUBIR EL SERVIDOS A TRAVES DE HTPP Y PONER NOMBRE Y NUMERO DE CUENTA PUERTO 5008
ENTREGAR EN UN PDF LA CAPTURA DEL CODIGO EJECUTANDO LA TERMINAL Y EL NAVEGADOR QUE SE VEA EL PUERTO NOMBRE Y NUMERO DE CUENTA
*/ 