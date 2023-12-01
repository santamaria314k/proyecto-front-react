const mongoose = require('mongoose');

const CitasSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, "El email es requerido"],
        maxlength: [100, "Nombre no debe ser mayor de 100 caracteres"]
    },
    fechaExp: {
        type: Date, 
        required: [true, "La fecha  es requerida"]

    },
    fechaCita: {
        type: Date,
        required: [true, "La fecha  es requerida"],
        
        validate: {
        validator: function (value) {
            const currentDate = new Date();

            return value >= currentDate;
        },
        message: "La fecha de la cita no puede ser anterior a la fecha actual"
    }
    },

    



});

module.exports = mongoose.model('Citas', CitasSchema);
