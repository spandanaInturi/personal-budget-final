const mongoose = require('mongoose');


const budget_Schema = mongoose.Schema({
    
    title :{
        type: String,
        required : true,
        trim: true,
    },
    budget :{
        type : Number,
        required : true,        
    }
    
},{collection : 'budget'})

const budget = mongoose.model('budget',budget_Schema);

module.exports = budget;
