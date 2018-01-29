const express = require("express"),
      router = express.Router({mergeParams: true});
const reviewController = require("../controllers/ReviewsController");

router.get    ("/",          reviewController.get_all_reviews);
router.get    ("/:reviewID", reviewController.get_one_review);
router.post   ("/new",       reviewController.create_new_review);
router.patch  ("/:reviewID", reviewController.update_review);
router.delete ("/:reviewID", reviewController.delete_review);

module.exports = router;