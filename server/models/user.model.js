//Importación de MongoDB
const mongoose = require('mongoose');

//Creación de un esquema
const UserScheme = new mongoose.Schema({
    userName: {
        type: String,
        required: [true, "Username is mandatory"]
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        validate: {
            validator: val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val), 
            message: "Invalid email"
        }
    }
});

//Definición del modelo
const User = mongoose.model('User', UserScheme);
module.exports = User;