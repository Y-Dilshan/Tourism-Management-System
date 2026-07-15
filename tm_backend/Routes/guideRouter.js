import guideController from '../controllers/guideController.js';
import express from 'express';

const router = express.Router();

router.post('/', guideController.createGuide);
router.get('/:id', guideController.getGuideById);
router.put('/:id', guideController.updateGuide);
router.delete('/:id', guideController.deleteGuide);
router.get('/', guideController.getAllGuides);

export default router;