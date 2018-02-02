require("./api/config/db.js");
var express       = require("express"),
    app           = express(),
    morgan        = require("morgan"),
    bodyParser    = require("body-parser"),
    path          = require("path"),
        // all routes
    Hotelrouter  = require("./api/routes/hotels");
    Reviewrouter = require("./api/routes/review");


app.use(express.static(path.join(__dirname,"public")));
app.use("/node_modules",express.static(__dirname + '/node_modules'))


app.use(morgan("dev"));
app.use(bodyParser.urlencoded({extended: false}));


app.use("/api/hotels",Hotelrouter);
app.use("/api/hotels/:hotelID/reviews",Reviewrouter);


var server = app.listen(process.env.PORT || "8080   ",function (err) {
    console.log("App Running At PORT: "+ server.address().port);
});