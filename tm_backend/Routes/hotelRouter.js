import { createHotel, getAllHotels, getHotelById, updateHotel, deleteHotel } from '../controllers/hotelController.js';
import express from 'express';

const router = express.Router();

router.post('/', createHotel);
router.get('/:id', getHotelById);
router.put('/:id', updateHotel);
router.delete('/:id', deleteHotel);
router.get('/', getAllHotels);

export default router;