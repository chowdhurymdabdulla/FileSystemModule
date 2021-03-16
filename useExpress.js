const express =require('express')
const fs = require('fs')
var app = express()

var port = 7878

app.get('/', function(req, res){
    res.send('hi there node using express')
})

app.get('/courses',function(req,res){ fs.readFile('./Courses.json',function(err,data){ 
    if(!err) res.send(JSON.parse(data))     
    })
 })
app.listen(port,function(err){
    if(!err){
        console.log("app os listining on port :" + port)
    }
})