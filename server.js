const express = require("express")
const bodyParser = require("body-parser")
const app = express()
app.use(bodyParser.urlencoded({extended:true}))

app.listen(3000, function(){
    console.log("Server has started at port 3000")
})

app.get("/", function(req,res){
    res.sendFile(__dirname + "/bmiCalculator.html")
})

app.post("/bmiCalculator", function(req,res){
    var weight = Number(req.body.weight)
    var height = Number(req.body.height)
    var n = weight / (height * height)
    res.send(`Your calculated BMI is ${n}`)
})