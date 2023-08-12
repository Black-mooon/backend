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
exports.update = exports.getAll = exports.create = void 0;
const classroom_model_1 = __importDefault(require("../models/classroom.model"));
const create = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const classroom = new classroom_model_1.default(Object.assign(Object.assign({}, req.body), { createdBy: req.user.id }));
        const result = yield classroom.save();
        res.status(201).send(result).end();
    }
    catch (error) {
        if (error.name === 'ValidationError') {
            next({
                status: 400,
                message: error.message,
            });
        }
    }
});
exports.create = create;
const getAll = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const classrooms = yield classroom_model_1.default.find()
            .limit(limit)
            .skip((page - 1) * limit);
        res.send(classrooms);
    }
    catch (error) {
        next(error);
    }
});
exports.getAll = getAll;
const getOneById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const classroom = yield classroom_model_1.default.findById(req.params.id);
        if (!classroom) {
            return next({ status: 404, message: 'Classroom not found' });
        }
        res.send(classroom);
    }
    catch (error) {
        next(error);
    }
});
const update = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const classroom = yield classroom_model_1.default.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!classroom) {
            return next({ status: 404, message: 'Classroom not found' });
        }
        res.send(classroom);
    }
    catch (error) {
        next(error);
    }
});
exports.update = update;
