const express = require("express");

const bodyParser = require("body-parser")

const  app = express();

app.get("/", function (req, res){
    res.sendFile(__dirname + "/SignUp.html")


})

app.post("/", function (req, res){
let FirstName = req.body.FirstName;
let LasstName = req.body.LastName;
let email = req.body.Email;

})

 app.listen(8888, function(){
 console.log("Server is running on the port 8888");
})