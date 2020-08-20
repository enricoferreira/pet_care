const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Customer = new Schema({
    name: {
        type: String,
        required: true
    },
    birthday: {
        type: Date,
        required: true
    },
    cpf: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    created_at:{
        type: Date,
        default: Date.now()
    },
    email:{
        type: String                
    },
    place:{
        type: Schema.Types.ObjectId,
        ref: 'place'
    },
    pet:[{
        type: Schema.Types.ObjectId,
        ref: 'pet'
    }]
})

mongoose.model('customer', Customer);