
const express= require('express')
const bodyParser=require('body-parser')
const cors = require('cors');
const app= express();
const mongoose = require('mongoose');
var dbconnections = require('./utility/logindb');

app.use(cors(corsOptions));

var corsOptions = {
  origin: "http://localhost:1234"
};

//connecting

mongoose.connect('mongodb://localhost/spandana',function(err,db){
  if (err) throw err;
  console.log("connected to database",db.name)
})

app.use(bodyParser.json())


app.post('/signup',(req,res)=>{
  console.log(req.body)
  value1 = [{username:req.body.email,
            password: req.body.password
          }];

  dbconnections.addUserToTable(value1);
})

app.post('/search',(req,res)=>{
  console.log(req.body.email)
  value = req.body.email
  var user_details = dbconnections.getLogindetails(value);
  console.log(user_details.password)
})

const data = require('./budgetdetails.json');

app.get('/budget' , (req,res) => {

    res.json(data);

});

app.listen(1234, ()=> console.log('Server listening at 1234'))
