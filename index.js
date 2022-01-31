const express = require('express')
const app = express()
app.use(express.static('public'))
app.get('/', function (req, res) {
    const name = req.query.name  //name from the user
    res.send("Your name is " + name)
});
app.get("/sum", function (req, res) {
    const num1 = req.query.num1; //input from the user
    const num2 = req.query.num2;
    const num3 = req.query.num3;
    const sum = Number(num1) + Number(num2) + Number(num3) // Converting String inputs from the user to number
    res.send("The average of the numbers is " + sum / 3)
});
app.get('/', function (req,res){
    res.sendFile('index.html',{root:__dirname})
});
const port = 3000
app.listen(port);