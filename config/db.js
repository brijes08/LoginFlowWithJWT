const mysql = require('mysql');

var connection = mysql.createConnection({
    host: "localhost",
    database: "test",
    user: "root",
    password: ""
})

connection.connect((error)=>{
    if(error){
        console.log("mysql DB error")
    } else{
        console.log("mysql DB success")
    }
})

module.exports = connection