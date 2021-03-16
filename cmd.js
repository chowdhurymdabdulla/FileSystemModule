var y = require('yargs')
var fs = require('fs')
const { json } = require('express')

var fileArray =[]
var filename = y.argv.filename

console.log('filename: ', filename)

fs.readFile("fileName.txt", (err, data)=>{
    if(data){
        fileArray = JSON.parse(data);
        console.log("file exists result :", fileArray.includes(filename));
        if(fileArray.includes(filename)){
            return console.log("File already exist please use different file name")
        } else{
            fileArray.push(filename)
            console.log(fileArray);
            fs.writeFile("fileName.txt", JSON.stringify(fileArray), (err) =>{
                if(err){
                    console.log(err)
                }
            })

            fs.writeFile(filename, "Node project", (err)=>{
                if(err){
                    console.log(err)
                }else{
                    console.log("Data inserted successfully")
                }
            })
        }

    }

})