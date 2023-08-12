import mongoose from 'mongoose'

export interface IClassroomSubject extends mongoose.Document {
    classroom: string
    subject: string
}

const classroomSubjectSchema = new mongoose.Schema(
    {
        classroom: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Classroom',
            required: true,
        },
        subject: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Subject',
            required: true,
        },
    },
    {
        timestamps: true,
    }
)

const ClassroomSubject = mongoose.model(
    'ClassroomSubject',
    classroomSubjectSchema
)

export default ClassroomSubject