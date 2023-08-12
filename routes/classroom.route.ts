import express from 'express'
import { create, getAll, update } from '../controller/classroom.controller'
import { isAdmin, isFaculty, protect } from '../middlewares/auth.middleware'

const router = express.Router()

router.get('/', getAll)
router.post('/', [protect, isFaculty], create)
router.post('/update', [protect, isFaculty], update)

export default router
