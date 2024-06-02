const mysql = require('mysql')
const express = require('express');
const app = express();


const con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"ceramic"
   
});
con.connect((err)=>{
    if(err){
        console.log(err)
    }
    console.log("Database connected");
  
});
app.get('/',function(req,res){
let sql = "SELECT * FROM product"
    con.query(sql,(error,data)=>{
        if(error){
            console.log(error);
        }
        console.log(data)
    res.send(JSON.stringify(data))

    })
}).listen(8000);