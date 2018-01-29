var Hotel = require("../models/hotel");
var Review = require("../models/review");


var ReviewController = {};

ReviewController.get_all_reviews = function(req,res,next){   
    var offset = 0;
    var count = 5
    if(req.query && req.query.offset){
        offset = parseInt(req.query.offset,10);
    }  
    if(req.query && req.query.count){
        count = parseInt(req.query.count,10);
    }  

    Hotel.findById(req.params.hotelID).select('reviews').populate('reviews').exec(function(err,foundReviews){
        if(err){
            console.log(err);
            res.status(500).json({
                error: err
            });
        }
        else{
            res.status(200).json({
                message: "All Hotel Review",
                reviews: foundReviews
            });
        }
    });
       
}


ReviewController.get_one_review = function(req,res,next){
    // i have to find the hotel first bs m3rftsh  
    Review.findById(req.params.reviewID,function(err,foundreview){
          if(err){
              console.log(err);
              res.status(500).json({
                  error: err
              });
          }
          else{
              res.status(201).json({
                  message: "found Review",
                  review: foundreview
              });
          }
      });
}

ReviewController.create_new_review = function(req,res,next){
    Hotel.findById(req.params.hotelID).exec(function(err,foundHotel){
        if(err){
            console.log(err);
            res.status(500).json({
                error: err
            });
        }
        else{
            var review = new Review({
                content: req.body.content
            });
            Review.create(review,function(err,newlycreated){
                if(err){
                    console.log(err);
                    res.status(500).json({
                        error: err
                    });
                }
                else{
                    foundHotel.reviews.push(newlycreated);
                    console.log(newlycreated);
                    res.status(201).json({
                        message: "new Review Created",
                        review: newlycreated
                    });
                }
            });
        }        
        
    });
}

ReviewController.update_review = function(req,res,next){

}

ReviewController.delete_review = function(req,res,next){

}


module.exports = ReviewController;