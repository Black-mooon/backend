import mongoose from 'mongoose'

export interface IClassroom extends mongoose.Document {
    name: string
    description: string
    faculty: string
    students: string[]
}

const classroomSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        createdBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
    },
    {
        timestamps: true,
    }
)

const Classroom = mongoose.model('Classroom', classroomSchema)

export default Classroom