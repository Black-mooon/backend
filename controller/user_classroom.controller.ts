import { NextFunction, Response, Request } from "express"
import UserClassroom, { IUserClassroom } from "../models/user_classroom.model"

export const getClassroomUser = async (
    req: Request & { user: { id: string } },
    res: Response,
    next: NextFunction

) => {
    try {
        const userClassroom = await UserClassroom.find({
            user: req.user.id
        })
        return res.status(200).send(userClassroom)
    } catch (error) {
        next(error)
    }
}

export const addUserToClassroom = async (
    req: Request & { user: { id: string } },
    res: Response,
    next: NextFunction
) => {
    try {
        const userClassroom = await UserClassroom.create({
            user: req.user.id,
            classroom: req.body.classroom
        })
        console.log("Hello")
        return res.status(201).send(userClassroom)
    } catch (error) {
        next(error)
    }
}
