const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Attendance = new Schema({
    type:{
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
})

mongoose.model('attendance', Attendance);