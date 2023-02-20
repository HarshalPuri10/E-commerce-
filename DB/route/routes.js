
var mysql = require('../db/db')
var app = require('express')();

app.post('/register',(req,res)=>{
    
    let q = 'insert into userregister (userName,email,phone,password) values(?,?,?,?) ';
    mysql.query(q,[req.body.userName,req.body.email,req.body.phone,req.body.password],(err,rows)=>{
        if (err)
                res.send(err);
            else 
                res.send(rows);
    })
});
app.post('/login',(req,res)=>{
 
    let q = 'select * from studentregister where email = ? and password = ?'
    mysql.query(q,[req.body.email,req.body.password],(err,rows)=>{
        if (err)
                res.send(err);
            else 
                res.send(rows);
    })
});
// app.post('/addtocart',(req,res)=>{
 
//     let q = 'insert into user_cart (userName,email,phone,password) values(?,?,?,?)'
//     mysql.query(q,[req.body.email,req.body.password],(err,rows)=>{
//         if (err)
//                 res.send(err);
//             else 
//                 res.send(rows);
//     })
// });









module.exports = app;