const express=require("express");
const app= express();
app.set("view engine", "ejs");
console.log("hello");

app.get('/', function(req, res){
//res.send("Hello this is the first Node program");
res.render("index");
});

const PORT=3000;

const IP='127.0.0.1';

app.listen(PORT, IP, function(){
console.log("Node server is up and running");
})

