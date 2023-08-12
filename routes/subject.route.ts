import express from "express"
import { isAdmin, protect } from "../middlewares/auth.middleware"
import { create, getAll } from "../controller/subject.controller"
import e from "express"


const router = express.Router()

router.get('/', [protect], getAll)
router.post('/', [protect, isAdmin], create)

export default router