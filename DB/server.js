var express = require('express');
var app = express();
var cors = require('cors')
var routes = require('./route/routes')
app.use(express.json());
app.use(cors())

app.listen(3000,()=>{
    console.log("Listensing on port 3000");
});

app.use('/',routes)
