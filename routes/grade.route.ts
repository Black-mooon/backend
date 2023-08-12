import express from "express";
import { addClassroomSubjectGrade, deleteClassroomSubjectGrade, editClassroomSubjectGrade, getClassroomGradeForStudent } from "../controller/classroom_subject_grade.controller";
import { isFaculty, protect } from "../middlewares/auth.middleware";

const router = express.Router();

router.get('/', protect, getClassroomGradeForStudent)
router.post('/', [protect, isFaculty], addClassroomSubjectGrade)
router.put('/:id', [protect, isFaculty], editClassroomSubjectGrade)
router.delete('/:id', [protect, isFaculty], deleteClassroomSubjectGrade)

export default router