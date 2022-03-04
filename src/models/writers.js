const mongoose = require('mongoose')

const writerSchema = new mongoose.Schema({ //Agregar campos de writers
    name: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 20,
        trim: true
    },
    joinDate: {
        type: Date,
        required: true,
    },
    biografy: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 150,
        trim: true
    },
    nationality: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 30,
        trim: true
    },

}, {
    timestamps: true
})


const model = mongoose.model('writer', writerSchema)

module.exports = model