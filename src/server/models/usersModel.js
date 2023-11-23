const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "El nombre es requerido"],
        maxlength: [50, "Nombre no debe ser mayor de 50 caracteres"]
    },
    email: {
        type: String, 
        maxlength: [80, "Email no debe ser mayor de 50 caracteres"]
    },
    password1: {
        type: String,
        required: [true, "La contraseña es requerida"],
        maxlength: [20, "Contraseña  no debe ser mayor de 20 caracteres"]
    },
    password2: {
        type: String,
        required: [true, "La contraseña es requerida"],
        maxlength: [20, "Contraseña  no debe ser mayor de 20 caracteres"]
    },
    rol: {
        type: Number,
        required: [false, "El rol de Usuario es requrido"],
        maxlength: [2, "rol  no debe ser mayor de 1 caracteres"]
    }
});

module.exports = mongoose.model('User', UserSchema);
