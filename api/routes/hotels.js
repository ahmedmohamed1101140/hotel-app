const express = require("express"),
      router = express.Router();
const hotelController = require("../controllers/HotelController");



router.get("/",hotelController.get_all_Hotels);
router.get("/:hotelID",hotelController.get_one_hotel);
router.post("/new",hotelController.create_new_hotel);

module.exports = router;