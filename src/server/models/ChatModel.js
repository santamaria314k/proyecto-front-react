const mongoose = require('mongoose');

const ChatSchema = new mongoose.Schema({
    chat: {
        type: String,
        required: [true, "Ingresa un mensaje"]
    }
   
});

module.exports = mongoose.model('Chat', ChatSchema);
