import mongoose from 'mongoose'

export interface ISubject extends mongoose.Document {
    name: string
    description: string
}

const subjectSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
)