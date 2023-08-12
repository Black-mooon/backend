import { NextFunction, Request, Response } from 'express'
import Subject, { ISubject } from "../models/subject.model"

export const create = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const subject = new Subject({
            ...req.body,
        })
        const result = await subject.save()
        res.status(201).send(result)
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
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const subject = await Subject.find()
        res.status(200).send(subject)
    } catch (error) {
        next(error)
    }
}

