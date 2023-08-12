import mongoose from 'mongoose'

export interface IClassroomSubjectGrade extends mongoose.Document {
  classroomSubject: string
  student: string
  grade: number
}

const classroomSubjectGradeSchema = new mongoose.Schema(
  {
    classroomSubject: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'ClassroomSubject',
      required: true,
    },
    student: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    grade: {
      type: Number,
      required: true,
    },
    maxGrade: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

const ClassroomSubjectGrade = mongoose.model(
  'ClassroomSubjectGrade',
  classroomSubjectGradeSchema
)

export default ClassroomSubjectGrade
