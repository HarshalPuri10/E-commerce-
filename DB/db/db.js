var mysql = require('mysql');

var connect = mysql.createPool({
    host:'localhost',
    port:3306,
    database:'ecommerce',
    user:'root',
    password:'root'
});

connect.getConnection((e,c)=>{
    if (e)
        console.log(e);
})


module.exports = connect;