var express = require("express");
var app     = express();
var path    = require("path");

app.use("/src", express.static(__dirname + '/src'));
app.use("/views", express.static(__dirname + '/views'));


app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
});

app.listen(3000);

console.log("Running at Port 3000");