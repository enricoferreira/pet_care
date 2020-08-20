const app = require('./src/config/custom-express.js');

app.listen(5000, ()=>{
    console.log('Conectado na porta 5000');
})