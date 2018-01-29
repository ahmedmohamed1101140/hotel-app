var mongoose = require("mongoose");

var reviewSchema = mongoose.Schema({
    content: {
        type: String,
        require: true
    },
    created_at:{
        type: Date,
        default: Date.now()
    },
    likes :{
        type: Number,
        default: 0
    }
})

module.exports = mongoose.model("Review", reviewSchema);