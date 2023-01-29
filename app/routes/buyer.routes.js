module.exports = (app) => {
    const buyerController = require('../Buyer/Buyer.controller.js');

    app.post('/create-buyer',buyerController.create);
    app.put('/update-buyer', buyerController.update);
    app.get('/get-buyerById/:id', buyerController.getBuyerById);
    app.get('/get-buyers', buyerController.getBuyers);
}