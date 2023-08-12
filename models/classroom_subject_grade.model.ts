import mongoose from 'mongoose'

export interface IClassroomSubjectGrade extends mongoose.Document {
  classroomSubject: string
  student: string
  grade: number
}

const classroomSubjectGradeSchema = new mongoose.Schema(
  {
    classroom: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'classroom',
      required: true,
    },

    subject: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'subject',
      required: true,
    },

    student: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user',
      required: true,
    },
    marks: {
      type: Number,
      required: true,
    },
    maxMarks: {
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
