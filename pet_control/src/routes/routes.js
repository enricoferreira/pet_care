const customerRoutes = require('./customer.js');
const petRoutes = require('./pet.js');
module.exports = app => {
    customerRoutes(app);
    petRoutes(app);
}