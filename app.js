var express       = require("express"),
    app           = express(),
    morgan        = require("morgan"),
    bodyParser    = require("body-parser"),
    // all routes
    Hotelrouter  = require("./api/routes/hotels");

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({extended: false}));


app.use("/api/hotels",Hotelrouter);


var server = app.listen(process.env.PORT || "8080   ",function (err) {
    console.log("App Running At PORT: "+ server.address().port);
});