const express = require('express');
const userController = require('../controller/userController');
var router = express.Router();

router.get('/',(req, res)=>{
    res.send("api vala route")
})

router.post('/login',(req, res)=>{
    res.send("login vala route")
    const { username, password } = req.body;
    if(username==='kapil' && password==="12345"){
        res.send({message: 'success'})
    }else{
        res.send({message: 'failure'})
    }    
})

router.post('/admin/login', userController.login)


module.exports = router