const mongoose = require('mongoose');

const bankSchema = mongoose.Schema({
    name: String,
    accountNumber: String,
    branch: String,
    ifscCode: String
}, { timestamps: true });
module.exports = mongoose.model('bank-details', bankSchema);