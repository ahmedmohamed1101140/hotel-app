var Hotel = require("../models/hotel");

var HotelController = {};

HotelController.get_all_hotels = function(req,res,next){   
    var offset = 0;
    var count = 5
    if(req.query && req.query.offset){
        offset = parseInt(req.query.offset,10);
    }  
    if(req.query && req.query.count){
        count = parseInt(req.query.count,10);
    }  
    
    Hotel.find()
        .skip(offset)
        .limit(count)
        .exec(function(err,allHotels){
        if(err){
            console.log(err);
            res.status(500).json({
                error: err
            });
        }
        else{
            res.status(200).json({
                message: "GET All Hotels",
                Hotles: allHotels,
            });
        }
    });
}

HotelController.get_one_hotel = function(req,res,next){
    Hotel.findById(req.params.hotelID).populate('reviews','rooms').exec(function(err,foundHotel){
        if(err){
            console.log(err);
            res.status(500).json({
                error:err
            });
        }
        else{
            res.status(200).json({
                message: "this is one Hotel",
                hotel: foundHotel
            });
        }
    });    
}

HotelController.create_new_hotel = function(req,res,next){
    var hotel = new Hotel({
        name: req.body.name,
        star: req.body.star,
        currency: req.body.currency,
        photos: req.body.photos,
        services: req.body.services,
    });

    Hotel.create(hotel,function(err,newlycreated){
        if(err){
            console.log(err);
            res.status(500).json({
                error: err
            });
        }
        else{
            console.log(newlycreated);
            res.status(201).json({
                message: "new Hotel Created",
                createdHotel: newlycreated,
                request: {
                    type: 'GET',
                    url: 'http://localhost:3000/hotels/'+ newlycreated._id
                }
            });
        }
    });
}

HotelController.update_hotel = function(req,res,next){
    var hotel = new Hotel({
        name: req.body.name,
        star: req.body.star,
        currency: req.body.currency,
        photos: req.body.photos,
        services: req.body.services,
    });

    Hotel.findOneAndUpdate(req.params.hotelID,hotel,function(err,updatedHotel){
        if(err){
            console.log(err);
            res.status(500).json({
                error: err
            });
        }
        else{
            res.status(202).json({
                message: "Your Hotel Had Been Updated",
                Hotel: updatedHotel
            });
        }
    });
}

HotelController.delete_hotel = function(req,res,next){
    Hotel.findOneAndRemove(req.params.hotelID,function(err){
        if(err){
            console.log(err);
            res.status(404).json({
                error:err
            });
        }
        else {
            res.status(202).json({
                message: "Hotel Deleted Successfully"
            });
        }
    });
}


module.exports = HotelController;