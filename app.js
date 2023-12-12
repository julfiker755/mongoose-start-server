// Basic Lib Import
const express =require('express');
const router =require('./src/routes/api');
const app= new express();

// Security Middleware Lib Import
const cors =require('cors');


// Database Lib Import
const mongoose =require('mongoose');


// Security Middleware Implement
app.use(cors())
app.use(express.json())


// Mongo DB Database Connection
let URI="mongodb+srv://<username>:<password>@cluster0.4mjyxmf.mongodb.net/Stdio3t";
let OPTION={user:'hello',pass:'hello',autoIndex:true}
mongoose.connect(URI,OPTION)
.then(() => {
    console.log('Mongoose connected successfully');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error.toString());
  });


// Routing Implement
app.use("/api/v1",router)


// Undefined Route Implement
app.use("*",(req,res)=>{
    res.status(404).json({status:"fail",data:"Not Found"})
})


module.exports=app;
















