import Tour from '../models/tour.js';
import express from 'express';
import { createTour, getAllTours, getTour, updateTour, deleteTour } from '../controllers/tourController.js';

const router = express.Router();

router.post('/', createTour);
router.get('/', getAllTours);
router.get('/:id', getTour);
router.put('/:id', updateTour);
router.delete('/:id', deleteTour);

export default router;
