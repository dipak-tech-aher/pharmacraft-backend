const mongoose = require('mongoose');

const companySchema = mongoose.Schema({
    name: String,
    address: String,
    pincode: String,
    state: String,
    stateCode: String,
    gst: String,
    contactNo: String,
}, { timestamps: true });
module.exports = mongoose.model('company', companySchema);