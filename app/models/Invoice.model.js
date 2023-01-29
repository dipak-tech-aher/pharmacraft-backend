const mongoose = require('mongoose');

const invoiceSchema = mongoose.Schema({
    invoiceNo: String,
    deliveryNote: String,
    deliveryNoteNo: String,
    deliveryNoteDate: Date,
    dateOfInvoive: String,
    paymentMode: String,
    suplierRefNo: String,
    vehicleNo: String,
    buyerOrderNo: String,
    dateOfBuyerOrder: String,
    dispatchDocNo: String,
    dispatchThrough: String,
    destination: String,
    buyerId: String,
    Items: [{
        productDesc: String,
        hsn: String,
        gst: Number,
        qty: Number,
        rate: Number,
        unit: Number,
        amount: Number,
        cGstPerc: Number,
        cGst: Number,
        sGstPerc: Number,
        sGst: Number
    }],
    totalAmount: Number,
    totalQty: Number,
}, { timestamps: true });
module.exports = mongoose.model('invoice', invoiceSchema);