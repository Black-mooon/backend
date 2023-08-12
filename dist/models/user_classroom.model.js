"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const userClassroomSchema = new mongoose_1.default.Schema({
    user: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    classroom: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'Classroom',
        required: true,
    },
}, {
    timestamps: true,
});
const UserClassroom = mongoose_1.default.model('UserClassroom', userClassroomSchema);
exports.default = UserClassroom;
