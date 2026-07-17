import hotelController from '../controllers/hotelController.js';
import express from 'express';

const router = express.Router();

router.post('/', hotelController.createHotel);
router.get('/:id', hotelController.getHotelById);
router.put('/:id', hotelController.updateHotel);
router.delete('/:id', hotelController.deleteHotel);
router.get('/', hotelController.getAllHotels);

export default router;