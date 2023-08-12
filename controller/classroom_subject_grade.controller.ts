import { NextFunction, Response, Request } from 'express'
import ClassroomSubjectGrade from '../models/classroom_subject_grade.model'
import ClassroomSubject from '../models/classroom_subject.model'

export const addClassroomSubjectGrade = async (
  req: Request & { user: { id: string } },
  res: Response,
  next: NextFunction
) => {
  try {
    const classroomSubjectGrade = await ClassroomSubjectGrade.find({
      student: req.user.id,
      marks: req.body.marks,
      maxMarks: req.body.maxMarks,
    })
    res.status(201).json(classroomSubjectGrade)
  } catch (error) {
    next(error)
  }
}

export const editClassroomSubjectGrade = async (
  req: Request & { user: { id: string } },
  res: Response,
  next: NextFunction
) => {
  try {
    const classroomSubjectGrade = await ClassroomSubjectGrade.findByIdAndUpdate(
      { id: req.params.id },
      {
        ...req.body,
      },
      {
        new: true,
      }
    )
    res.status(200).json(classroomSubjectGrade)
  } catch (error) {
    next(error)
  }
}

export const deleteClassroomSubjectGrade = async (
  req: Request & { user: { id: string } },
  res: Response,
  next: NextFunction
) => {
  try {
    const classroomSubjectGrade = await ClassroomSubjectGrade.findByIdAndDelete(
      { id: req.query.id }
    )
    res.status(200).json(classroomSubjectGrade)
  } catch (error) {
    next(error)
  }
}

export const getClassroomGradeForStudent = async (
  req: Request & { user: { id: string } },
  res: Response,
  next: NextFunction
) => {
  try {
    const classroomId = req.query.classroomId
    const userId = req.user.id

    const classroomSubjectsGradeId = await ClassroomSubject.find({
      classroom: classroomId,
    })

    const classroomSubjectGrade = await ClassroomSubjectGrade.find({
      student: userId,
      classroomSubject: classroomSubjectsGradeId,
    })

    res.status(200).json(classroomSubjectGrade)
  } catch (error) {
    next(error)
  }
}
