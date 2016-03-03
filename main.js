var PORT = process.env.PORT || 5000;
var express = require("express");
 
var app = express();
app.use(app.router);
app.use(express.static(__dirname + "/public"));
 
app.get("/", function(req, res){
    res.send("Hello, World!");
});
 
app.listen(PORT);
