import { getUserProfile } from '../controllers/user_controller';
import { authenticate } from '../middleware/auth';
import express from "express";

const router = express.Router();
router.get('/profile', authenticate, getUserProfile);

export default router;
