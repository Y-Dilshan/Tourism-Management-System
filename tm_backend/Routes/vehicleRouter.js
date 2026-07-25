import { createVehicle, updateVehicle, getVehicleById, getVehicles, deleteVehicle } from '../controllers/vehicleController.js';
import express from 'express';

const router = express.Router();

router.post('/', createVehicle);
router.get('/:id', getVehicleById);
router.put('/:id', updateVehicle);
router.delete('/:id', deleteVehicle);
router.get('/', getVehicles);