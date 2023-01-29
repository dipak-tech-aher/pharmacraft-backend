module.exports = (app) => {
    const companyController = require('../Company/Company.controller.js');

    app.get('/get-company', companyController.getCompany);
   
}