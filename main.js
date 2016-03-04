'use strict';
var PORT = process.env.PORT || 5000;
var express = require("express");
var snoowrap = require('snoowrap');

const r = new snoowrap({
  client_id: process.env.CLIENT_ID,
  client_secret: process.env.CLIENT_SECRET,
  refresh_token: process.env.REFRESH_TOKEN
});

var app = express();
app.use(app.router);
app.use(express.static(__dirname + "/public"));
   
app.get("/", function(req, res){
 // Printing a list of the titles on the front page
 r.get_hot().map(post => post.title).then(console.log);
res.send("Hello, World!");
});
  
app.listen(PORT);
