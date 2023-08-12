import { NextFunction, Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import { IToken } from '../utils/token'
import User, { IUser } from '../models/user.model'

export const protect = (
  req: Request & { user: jwt.JwtPayload },
  res: Response,
  next: NextFunction
) => {
  const bearer: string = req.headers.authorization

  if (!bearer) {
    res.status(401).json({ message: 'not authorized' })
    return
  }

  const [, token] = bearer.split(' ')

  if (!token) {
    res.status(401).json({ message: 'not valid token' })
    return
  }

  try {
    const user = jwt.verify(token, process.env.JWT_SECRET)
    req.user = user as IToken
    next()
  } catch (e) {
    console.error(e)
    res.status(401).json({ message: 'not valid token' })
    return
  }
}

export const isAdmin = async (
  req: Request & { user: { id: string; role: string } },
  res: Response,
  next: NextFunction
) => {
  if (req.user.role !== 'Admin') {
    res.status(401).json({ message: 'not authorized' })
    return
  }
  next()
}

export const isFaculty = async (
  req: Request & { user: { id: string; role: string } },
  res: Response,
  next: NextFunction
) => {
  if (req.user.role !== 'Faculty' && req.user.role !== 'Admin') {
    res.status(401).json({ message: 'not authorized' })
    return
  }
  next()
}

export const isStudent = async (
  req: Request & { user: { id: string; role: string } },
  res: Response,
  next: NextFunction
) => {
  if (req.user.role !== 'Student') {
    res.status(401).json({ message: 'not authorized' })
    return
  }
  next()
}
