"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const classroomSubjectSchema = new mongoose_1.default.Schema({
    classroom: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'classroom',
        required: true,
    },
    subject: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'subject',
        required: true,
    },
}, {
    timestamps: true,
});
const ClassroomSubject = mongoose_1.default.model('ClassroomSubject', classroomSubjectSchema);
exports.default = ClassroomSubject;
