const mysql = require('mysql');

var connection = mysql.createConnection({
    host: "localhost",
    database: "test",
    user: "root",
    password: ""
})

connection.connect((error)=>{
    if(error){
        console.log("error")
    } else{
        console.log("success")
    }
})

module.exports = connection