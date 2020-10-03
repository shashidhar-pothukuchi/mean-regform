const express = require('express');
const cors = require('cors');
const bodyParse = require('body-parser');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb+srv://shashidhar:Z9Z7vgherqhofubt@cluster0.3y3u8.mongodb.net/test?retryWrites=true&w=majority')
.then(() => {
    console.log("Connected to mongoDB!");
})
.catch(() => {
    console.log("Connection to mongoDB failed!");
});

const User = require('./models/user');

app.use(bodyParse.json());
app.use(cors());

app.post('/users',(req, res, next) => {
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        password: req.body.password
    })  
    user.save();
    console.log(user);
    res.status(201).json({
        message : 'success!'
    });
});


app.use('/users', (req, res, next) =>{
    
    User.find()
    .then( response => {
        //console.log(response);
        res.status(200).json(response);
    })
    .catch(error => {
        console.log(error);
    })
    
});


app.post('/login', (req,res,next) => {
    //console.log(req.body.name);
    User.findOne({name: req.body.name},(err, user) =>{  
        if (err) throw err;
        console.log(user);
            if(!user){
                res.json({success: false,message:'username does not exist'});
            }
            if(req.body.password !== user.password){
                res.json({success: false,message:'password incorrect'});
            }
            else{
                res.json({
                    success: true,
                    message: user});
            }
    });
    
})

//Z9Z7vgherqhofubt
module.exports = app;