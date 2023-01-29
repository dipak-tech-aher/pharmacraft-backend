module.exports = (app) => {
    const invoiceController = require('../Invoice/Invoice.controller.js');
    const imageUpload = require('../middleware/file-upload');

    app.post('/create-invoice', /*imageUpload.any('image'),*/invoiceController.create);
    app.get('/get-invoices', invoiceController.get);
    app.get('/get-invioce/:id', invoiceController.getInvoiceById);
    app.put('/update-invoice', invoiceController.update);

}