import { NextFunction, Response, Request } from 'express'
import ClassroomSubjectGrade from '../models/classroom_subject_grade.model'

export const addClassroomSubjectGrade = async (
  req: Request & { user: { id: string } },
  res: Response,
  next: NextFunction
) => {
  try {
    const classroomSubjectGrade = await new ClassroomSubjectGrade({
      classroom: req.body.classroom,
      subject: req.body.subject,
      student: req.user.id,
      marks: req.body.marks,
      maxMarks: req.body.maxMarks,
    }).save()
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
    const subjectId = req.query.subjectId
    const userId = req.user.id

    const classroomSubjectGrade = await ClassroomSubjectGrade.find({
      classroom: classroomId,
      subject: subjectId,
      student: userId,
    }).populate('subject')

    res.status(200).json(classroomSubjectGrade)
  } catch (error) {
    next(error)
  }
}
