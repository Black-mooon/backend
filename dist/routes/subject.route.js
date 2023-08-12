"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_middleware_1 = require("../middlewares/auth.middleware");
const subject_controller_1 = require("../controller/subject.controller");
const router = express_1.default.Router();
router.get('/', [auth_middleware_1.protect], subject_controller_1.getAll);
router.post('/', [auth_middleware_1.protect, auth_middleware_1.isAdmin], subject_controller_1.create);
exports.default = router;
