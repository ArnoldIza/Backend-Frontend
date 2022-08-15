// config -- model --- controllers --- routes --- server.js

//Llamada de express y el puerto
const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

//Llamada a la configuración de MongoDB
require('./server/config/mongoose.config');

//Llamada a los middlewares
app.use(cors()); //Nuevo 
app.use(express.json()); //Utiliza métodos HTTP y obtiene los datos en JSON
app.use(express.urlencoded({ extended: true }));  //Obtiene los datos de la URL

//Llamada a las rutas
const userRoutes = require('./server/routes/user.routes');
userRoutes(app); //Envía los datos a user.routes

//Establecimiento del puerto
app.listen(port, () => {console.log("Server listening at port", port);})