module.exports = (app) => {
    const bankDetailsController = require('../Bank/BankDetails.controller.js');
    app.get('/get-bank-details', bankDetailsController.getData);
}