import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import connectDB from './utils/db'
import helmet from 'helmet'
import compression from 'compression'
import dotenv from 'dotenv'
import errorMiddleware from './middlewares/error.middleware'
import userRouter from './routes/user.route'
import classroomRouter from './routes/classroom.route'
import subjectRouter from "./routes/subject.route"
import gradeRouter from "./routes/grade.route"

dotenv.config()

const app = express()

// Middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(compression())
app.use(helmet())
app.use(cors())
app.use(morgan('dev'))

// Routes

app.use('/api/v1/user', userRouter)
app.use('/api/v1/classroom', classroomRouter)
app.use('/api/v1/subject', subjectRouter)
app.use('/api/v1/grade', gradeRouter)

// Error Middleware
app.use(errorMiddleware)

// Database Connection

connectDB().then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`App listening on the port ${process.env.PORT}`)
  })
})
