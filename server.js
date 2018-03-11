//require NPM installs
var express = require("express");
var bodyParser = require("body-parser");
var expressHandlebars = require("express-handlebars");
var methodOverride = require("method-override");

var app = express();
app.use(express.static(__dirname + "/public"));

app.use(bodyParser.urlencoded({
	extended: false
}));

app.use(methodOverride("_method"));
app.engine("handlebars",expressHandlebars({
	defaultLayout: "main"
}));
app.set("view engine","handlebars");

var routes = require("./controllers/burgers_controller.js");
app.use("/",routes);

var port = process.env.PORT || 3000;
app.listen(port);