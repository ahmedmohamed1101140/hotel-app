var mongoose = require('mongoose');

var hotelSchema = new mongoose.Schema({
    name: {
        type: String,
         required:true
    },
    star: {
        type: Number,
         required:true, 
         min:2,
        max:7
    },
    description: {
        type: String,
        required:true,
         default:"Some Random Text As Description"
    },
    currency: {
        type:String
    },    
    photos: [{
        type:String
    }],
    services:[{
        type:String,
        require:true
    }],
    reviews:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Review"        
    }], 
    rooms:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Room"        
    }], 
    location:{
        address: {
            type: String,
        },
        coordinates:[{
            type:Number,
            index: '2dsphere'
        }]
    },
    created_at:{
        type:Date,
        default:Date.now()
    }
});

module.exports = mongoose.model('Hotel', hotelSchema);