const Invoice = require('../models/Invoice.model');

const invoice = {
    getInvoices: async () => {
        let result = await Invoice.find().exec();

        if (result == null) {
            return "nodata";
        }
        return result;
    },
    createInvoice: async (req) => {
        let result = await Invoice.create(req.body);
        if (result == null) {
            return "nodata";
        }
        return result;
    },
    updateInvoice: async (req) => {
        console.log("request...", req.body)
        let result = await Invoice.findByIdAndUpdate(req.body._id, req.body);
        if (result == null) {
            return "nodata";
        }
        return result;
    },

    getInvoiceById: async (invoiceId) => {
        let result = await Invoice.findById(invoiceId);

        if (result == null) {
            return "nodata";
        }
        return result;
    },
}
module.exports = invoice;