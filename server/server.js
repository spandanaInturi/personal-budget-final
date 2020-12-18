
const express= require('express')
const bodyParser=require('body-parser')
const jwt = require('jsonwebtoken')
const cors = require('cors');
const app= express();
const mongoose = require('mongoose');
var Login = require("./models/login")
const bcrypt = require('bcrypt');
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


function verifyToken(req, res, next) {
  if(!req.headers.authorization) {
    return res.status(401).send('Unauthorized request')
  }
  let token = req.headers.authorization.split(' ')[1]
  if(token === 'null') {
    return res.status(401).send('Unauthorized request')    
  }
  let payload = jwt.verify(token, 'secretKey')
  if(!payload) {
    return res.status(401).send('Unauthorized request')    
  }
  req.userId = payload.subject
  next()
}
app.post('/signup',(req,res)=>{
  
  let hash = bcrypt.hashSync(req.body.password, 10)

  Login.findOne({"username":req.body.email},(err,user)=> {
    console.log("user information",user)
    if (!user){
  user = new Login({
    username: req.body.email,
    password: hash
});

  user.save((err, registeredUser) => {
    if (err) {
      console.log(err)      
    } else {
      let payload = {subject: registeredUser._id}
      let token = jwt.sign(payload, 'secretKey')
      console.log("hello",token)
      res.status(200).send({token})
    }
  })
}
else{
  res.status(200).send("user exists")
}
})
})

app.get('/dashboard',verifyToken,(req,res)=>{
  console.log("entered dashboard")
  res.json(true)
})

app.post('/login',(req,res)=>{
  console.log("hello entered to search");
  value = req.body.email

  Login.findOne({"username":value},(err,user)=> {
    console.log("user information",user)
    if (!user){
      res.status(401).send('Invalid Email')
    }
    else{
      console.log("entered the token page")
      var phase=bcrypt.compareSync(req.body.password,user.password);
      console.log(phase)
      if ( phase==false ) {
        res.status(401).send('Invalid Password')
      } else {
        let payload = {subject: user._id}
      let token = jwt.sign(payload, 'secretKey')
      console.log("hello",token)
      res.status(200).send({token})
      }
    }
  })
})


  
const data = require('./budgetdetails.json');

app.get('/budget' , (req,res) => {

    res.json(data);

});

app.listen(1234, ()=> console.log('Server listening at 1234'))
