import express from 'express'
import {
  create,
  getAll,
  update,
  addSubject,
  getOneById,
} from '../controller/classroom.controller'
import { isAdmin, isFaculty, protect } from '../middlewares/auth.middleware'
import { addUserToClassroom, getClassroomUser } from '../controller/user_classroom.controller'

const router = express.Router()

router.get('/', getAll)
router.get('/:id', getOneById)
router.post('/', [protect, isFaculty], create)
router.post('/update', [protect, isFaculty], update)
router.post('/add-subject', [protect, isFaculty], addSubject)
router.post('/add-user', [protect, isFaculty], addUserToClassroom)
router.get('/get-users', [protect, isFaculty], getClassroomUser)

export default router
