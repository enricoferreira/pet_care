const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Pet = new Schema({
    name:{
        type: String,
        required: true
    },
    birthday:{
        type: String        
    },
    isAdopted: {
        type: Boolean,
        default: false
    },
    type:{
        type: String,
        required: true
    },
    breed:{
        type: String,
        required: true
    },
    vaccination: {
        type: Schema.Types.ObjectId,
        ref: 'vaccination'
    },
    behavior:{
        type: String        
    },
    disease:[{
        type: String        
    }],
    pet_owner:{
        type: Schema.Types.ObjectId,
        ref: 'customer'
    }
})