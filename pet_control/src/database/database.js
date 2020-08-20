const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/pet_care', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true
})
.then(() => {
    console.log('Conectado ao banco pet_care');
})
.catch(err => console.log(err))

module.exports = mongoose;