var mongoose = require("mongoose");

var roomSchema = new mongoose.Schema({
    type: {
        type: String,
        required: true
    },
    number: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true,
        default: "Some Random Description About the room"
    },
    price: {
        type: String
    },
    photos: [{
        type: String
    }]
})

module.exports = mongoose.model("Room", roomSchema);