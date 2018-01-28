var HotelController = {};

HotelController.get_all_Hotels = function(req,res,next){     
    res.status(200).json({
        message: "GET ROUTE"
    });
}


HotelController.get_one_hotel = function(req,res,next){
    res.status(200).json({
        message: "this is one Hotel",
        hotel:{
            _Id: req.params.hotelID,
            name: "hotel1",
            rate:"5 Stars",
            description: "Some information about the hotel"
        }
    });
}

HotelController.create_new_hotel = function(req,res,next){
    res.status(202).json({
        message: "Hotel Created Successfully",
        Hotel:{
            name: req.body
        }
    });
}

HotelController.update_hotel = function(req,res,next){

}

HotelController.delete_hotel = function(req,res,next){

}


module.exports = HotelController;