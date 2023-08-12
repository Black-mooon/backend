"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addUserToClassroom = exports.getClassroomUser = void 0;
const user_classroom_model_1 = __importDefault(require("../models/user_classroom.model"));
const getClassroomUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userClassroom = yield user_classroom_model_1.default.find({
            user: req.user.id,
        }).populate('user').select('-classroom -createdAt -updatedAt -__v');
        return res.status(200).send(userClassroom);
    }
    catch (error) {
        next(error);
    }
});
exports.getClassroomUser = getClassroomUser;
const addUserToClassroom = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userClassroom = yield new user_classroom_model_1.default(Object.assign({}, req.body)).save();
        console.log('Hello');
        return res.status(201).send(userClassroom);
    }
    catch (error) {
        next(error);
    }
});
exports.addUserToClassroom = addUserToClassroom;
