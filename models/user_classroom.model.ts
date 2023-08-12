import mongoose from 'mongoose'

export interface IUserClassroom extends mongoose.Document {
	user: string
	classroom: string
}

const userClassroomSchema = new mongoose.Schema(
	{
		user: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User',
			required: true,
		},
		classroom: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Classroom',
			required: true,
		},
	},
	{
		timestamps: true,
	}
)

const UserClassroom = mongoose.model('UserClassroom', userClassroomSchema)

export default UserClassroom