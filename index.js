var express = require("express");
var app = express();
var mydata = require('./data.json')
app.get("/api/data", (req, res, next) => {
 res.json(mydata);
});
app.listen(3000, () => {
 console.log("Server running on port 3000");
});
