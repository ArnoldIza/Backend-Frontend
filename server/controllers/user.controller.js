//Obtención del modelo
const User = require('../models/user.model');

//Crear un usuario
module.exports.createUser = (request, response) => {
    const {userName, email} = request.body; //Obtener las variables de la solicitud
    User.create({userName, email})
    .then(user => response.json({insertedUser: user, msg: 'Successful creation'}))
    .catch(err => response.status(400).json(err))
}

//Mostrar todos los usuarios
module.exports.getAllUsers = (_,response) => {
    User.find({}) //Recuperar todos los usuarios de la consulta
    .then(retrievedUsers => response.json(retrievedUsers))
    .catch(err => response.json(err))
}

//Mostrar un usuario
module.exports.getUser = (request,response) => {
    User.findOne({_id: request.params.id}) //Recupera un usuario de la consulta de acuerdo al ID ingresado en la URL
    .then(user => response.json(user))
    .catch(err => response.json(err))
}

//Actualizar un usuario
module.exports.updateUser = (request,response) => {
    User.findOneAndUpdate({_id: request.params.id},request.body,{new:true}) //Recupera un usuario de la consulta de acuerdo al ID ingresado en la URL
    .then(updateUser => response.json(updateUser))
    .catch(err => response.json(err))
}

//Borrar un usuario
module.exports.deleteUser = (request,response) => {
    User.deleteOne({_id: request.params.id})
    .then(deleteUser => response.json(deleteUser))
    .catch(err => response.json(err))
}