import express from "express";
import { me, register, login } from "../controller/user.controller";
import { protect } from '../middlewares/auth.middleware'

const router = express.Router()

router.get('/me', protect, me)
router.post('/register', register)
router.post('/login', login)

export default router