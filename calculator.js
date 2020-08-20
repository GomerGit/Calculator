const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
res.sendFile(__dirname + "/index.html");     
});

app.get("/bmicalculator", function(req, res){
res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/", function(req, res) {           
var number1 = Number(req.body.number1);                    var number2 = Number(req.body.number2);
var answer = (number1+number2);
res.send("The answer is: " + answer);
});

app.post("/bmicalculator", function(req, res) {
var n1 = Number(req.body.n1);          
var n2 = Number(req.body.n2)/100;

var answer = Math.round(n1/(Math.pow(n2, 2))*100)/100;
res.send( "Your BMI is "+answer+" where n is equal to the calculated BMI based on their weight and height inputs");
});

app.listen("8080", function(){
console.log("Server has started at PORT:8080!");	
});


