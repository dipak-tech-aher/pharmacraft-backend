const mongoose = require('mongoose');

const loginsSchema = mongoose.Schema({
   name:String,
   email:String,
   password:String
});
module.exports = mongoose.model('logins',loginsSchema);