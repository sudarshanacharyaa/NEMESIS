const express=require("express");
const app= express();
app.set("view engine", "ejs");
console.log("hello");

app.get('/', function(req, res){
//res.send("Hello this is the first Node program");
res.render("index");
});

const PORT=process.env.PORT;

const IP=process.env.IP;

app.listen(PORT, IP, function(){
console.log("Node server is up and running");
})

