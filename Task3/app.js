var express=require("express");
const axios = require('axios').default;
var app =  express();
app.use(express.json())
app.get('/',function(req,res)
{
   // console.log(store);
    res.sendFile(__dirname+'/task.html');
})
var server = app.listen(3000);
console.log('App is running...');
