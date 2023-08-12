"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const classroomSubjectGradeSchema = new mongoose_1.default.Schema({
    classroomSubject: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'ClassroomSubject',
        required: true,
    },
    student: {
        type: mongoose_1.default.Schema.Types.ObjectId,
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
}, {
    timestamps: true,
});
const ClassroomSubjectGrade = mongoose_1.default.model('ClassroomSubjectGrade', classroomSubjectGradeSchema);
exports.default = ClassroomSubjectGrade;
