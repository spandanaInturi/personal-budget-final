const mongoose = require('mongoose')

var loginschema = new mongoose.Schema({
    username:String,
    password:String

});

var logindb = mongoose.model('logins',loginschema);
module.exports = logindb;