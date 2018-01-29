const express = require("express"),
      router = express.Router({mergeParams: true});
const hotelController = require("../controllers/HotelController");



router.get    ("/",hotelController.get_all_hotels);
router.get    ("/:hotelID",hotelController.get_one_hotel);
router.post   ("/new",hotelController.create_new_hotel);
router.delete ("/:hotelID",hotelController.delete_hotel);
router.patch  ("/:hotelID",hotelController.update_hotel);

module.exports = router;