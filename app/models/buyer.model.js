const mongoose = require('mongoose');

const buyerSchema = mongoose.Schema({
    name: String,
    address: String,
    pincode: String,
    gst: String
}, { timestamps: true });
module.exports = mongoose.model('buyers', buyerSchema);