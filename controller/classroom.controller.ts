import { NextFunction, Request, Response } from 'express'
import Classroom from '../models/classroom.model'
import ClassroomSubject from '../models/classroom_subject.model'

export const create = async (
  req: Request & { user: { id: string } },
  res: Response,
  next: NextFunction
) => {
  try {
    const classroom = new Classroom({
      ...req.body,
      createdBy: req.user.id,
    })
    const result = await classroom.save()
    res.status(201).send(result).end()
  } catch (error) {
    if (error.name === 'ValidationError') {
      next({
        status: 400,
        message: error.message,
      })
    }
  }
}

export const getAll = async (
  req: Request & {
    query: {
      page: string
      limit: string
    }
  },
  res: Response,
  next: NextFunction
) => {
  try {
    const page = parseInt(req.query.page) || 1
    const limit = parseInt(req.query.limit) || 10
    const classrooms = await Classroom.find()
      .limit(limit)
      .skip((page - 1) * limit)
    res.send(classrooms)
  } catch (error) {
    next(error)
  }
}

export const getOneById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const classroom = await ClassroomSubject.find({
      classroom: req.params.id,
    })
      .populate('subject')
      .select('-classroom')
    return res.status(200).send(classroom)
  } catch (error) {
    next(error)
  }
}

export const update = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const classroom = await Classroom.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    )
    if (!classroom) {
      return next({ status: 404, message: 'Classroom not found' })
    }
    res.send(classroom)
  } catch (error) {
    next(error)
  }
}

export const addSubject = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const classroomSubject = await ClassroomSubject.create({
      classroom: req.body.classroom,
      subject: req.body.subject,
    })

    return res.status(201).send(classroomSubject)
  } catch (error) {
    next(error)
  }
}
