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
exports.isStudent = exports.isFaculty = exports.isAdmin = exports.protect = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const protect = (req, res, next) => {
    const bearer = req.headers.authorization;
    if (!bearer) {
        res.status(401).json({ message: 'not authorized' });
        return;
    }
    const [, token] = bearer.split(' ');
    if (!token) {
        res.status(401).json({ message: 'not valid token' });
        return;
    }
    try {
        const user = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET);
        req.user = user;
        next();
    }
    catch (e) {
        console.error(e);
        res.status(401).json({ message: 'not valid token' });
        return;
    }
};
exports.protect = protect;
const isAdmin = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    if (req.user.role !== 'Admin') {
        res.status(401).json({ message: 'not authorized' });
        return;
    }
    next();
});
exports.isAdmin = isAdmin;
const isFaculty = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    if (req.user.role !== 'Faculty' && req.user.role !== 'Admin') {
        res.status(401).json({ message: 'not authorized' });
        return;
    }
    next();
});
exports.isFaculty = isFaculty;
const isStudent = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    if (req.user.role !== 'Student') {
        res.status(401).json({ message: 'not authorized' });
        return;
    }
    next();
});
exports.isStudent = isStudent;
