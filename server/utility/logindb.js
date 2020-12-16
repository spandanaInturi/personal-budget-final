var mongoose = require('mongoose')

var Login = require("../models/login")


module.exports.addUserToTable= function(data){
    Login.insertMany(data,function(err,docs){
        if (err) throw err;

    });
}
module.exports.getLogindetails= function(data){

    var id = Login.find({"username":data});
    console.log(id);
    return id;
    
}