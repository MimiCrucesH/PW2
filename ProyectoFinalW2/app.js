const express = require('express'); // Importar framework express
const mysql = require('mysql2'); // Libreria para trabajar con base de datos
const bodyParser = require('body-parser'); // middleware para procesar la información 
//body-parser milware, permite procesar y datos enviados del cuerpo de soliitudes  de http y formularios o peticiones post.
/*instanciar*/ 
const app = express();
app.use(bodyParser.urlencoded({extended: false}));
/*analizar los datos del cuerpo de las solicitudes HTTP, especificamente los datos que provienen de ç
formulario HTML enviados atraves de propiedad POST y GET*/
app.set('view engine', 'ejs'); // EJS es un motor de plantillas que permite generar páginas HTML dinámicas en el servidor.
app.use(express.static('public')); // Sirve archivos estáticos (como imágenes, CSS, JavaScript, etc.) desde el directorio public.

// configuracion para la base de datos
// Es la peor forma de implementarla pok la informacion esta expuesta.
const db = mysql.createConnection({  // a partir de mysql generar la conexion
    host: '127.0.0.1', // Dirección del servidor de base de datos
    user: 'root', // Usuario de la base de datos
    password: '', // Contraseña 
    database: 'bd1', // Nombre de la base de datos
    port: '3306'// Puerto en este caso el estándar de MySQL
});

// Intentar conectar a la base de datos
db.connect(err=>{
    if(err){ // Si hay un error durante la conexión
        console.log(`Error al momento de hacer conexion BB :3 ${err}`);  // Imprime un mensaje de error con los detalles de la excepción
    }else{
        console.log(`Conexion realizada :3`);  // Si la conexión es exitosa, imprime el mensaje de confirmacion
    }
});
const port = 3036;  // Define el puerto en el que correrá el servidor
app.listen(port,()=>{
    console.log(`El server esta en escucha desde http://localhost:${port}`); //Imprime el mensaje en la terminal
});

//Mostrar lista de usuarios
app.get('/',(req,res)=>{
    //Consulta  a la base de datos para obtener todos los usuarios
    const query = 'SELECT * FROM users';
    // trabajar con la conexion
    db.query(query,(err,results)=>{
        if(err){
            //mensaje de error para el usuario
            console.error(`Error al recuperar datos -> Codigo de error:${err}`); // aparece en el powersehll
            res.send('Error en recuperar datos');// Aparece en el usuario, en el navegador.
        }else{
            // mandar la info a traves de la plantilla js donde va a trabajar la pagina principal del index
            res.render('index',{users: results}); // users es la tabla que se tiene en la BD
            //Renderiza la plantilla con los usuarios
        }

    });    

});
// Ruta para Formulario de Agregar Usuario
app.get('/agregar-usuario', (req, res) => {
    res.render('agregar'); // Muestra el formulario de agregar usuario
});


//agregar usuario. Ruta para Agregar Usuario (Método POST)
app.post('/add',(req,res)=>{
    const {name,email} = req.body;  // body para tener informacion desde el http. // Obtiene datos del formulario
     // consulta para que evite sql inyection, utilizar comodines sql
    const query = 'INSERT INTO users (name, email)VALUE (?,?)'; // consulta sql
    // enviar los datos para que se inserten en la base
    db.query(query,[name,email],(err)=>{
        if(err){
            console.error(`Error al insertar usuarios: Codigo-> ${err}`);
            res.send('Error');
        }else{
             res.redirect('/');  // redirigir a la pagina principal  
        }
    });
});
//editar usuario. Ruta para Editar Usuario

app.get('/edit/:id',(req,res)=>{
     //Mandar a traer el id
    const {id} = req.params; // Obtiene el ID de la URL
     // Generar la consulta
    const query = 'SELECT * FROM users WHERE id = ?';
     //Enviar la consulta, anclar id,error, resultado
    db.query(query,[id],(err,results)=>{
        if(err){
            console.error('Error en la DB');
            res.send("Error en la DB ");
        }else if(results && results.length > 0){
            // Verifica que results exista y tenga elementos
            // solo 1 pok solo hay un registro con ese id
            // para pasarlos a la vista edit
            res.render('edit', { user: results[0] }); // Renderiza formulario de edición
        } else {
            res.send("Usuario no encontrado");
        }
    });
});
//Ruta para Actualizar Usuario
app.post('/actualizar/:id',(req,res)=>{
    // Ruta POST que espera un ID en la URL
    // Esta ruta se activa cuando se envía el formulario de edición
    const {id} = req.params;  // Extrae el ID del usuario desde los parámetros de la URL
    const {name, email} = req.body; // body para tener informacion desde el http. // Obtiene datos del formulario
    const query = 'UPDATE users SET name = ?, email = ? WHERE id = ?'; //consulta sql para actualizar datos
    db.query(query,[name, email, id],(err)=>{  // Ejecuta la consulta SQL con los valores del formulario
        if(err){ // Si hay un error durante la actualización
            console.error('Error al actualizar usuario');
            res.send("Error al actualizar");  // Envía un mensaje de error al cliente
        }else{
            res.redirect('/'); //Si la actualización es exitosa Redirecciona a la página principal
        }
    });
});

//Ruta para Eliminar Usuario
app.get('/delete/:id',(req,res)=>{// Ruta GET para eliminar un usuario
    // Se activa cuando se hace clic en el botón/enlace de eliminar
    const {id}=req.params;// Extrae el ID del usuario desde la URL
    const query = 'DELETE FROM users WHERE id = ?';     // Consulta SQL para eliminar un usuario
    db.query(query,[id],(err)=>{ // Ejecuta la consulta SQL con el ID del usuario
        if(err){  // Si hay un error durante la eliminación
            console.error('Error en el Delete'); // Muestra un mensaje de error en la Terminal
            res.send("error al eliminar");  // Envía un mensaje de error al cliente
        }else{
            res.redirect('/'); // Si la eliminación es exitosa Redirecciona a la página principal
        }
    });
});

