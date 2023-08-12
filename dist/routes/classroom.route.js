"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const classroom_controller_1 = require("../controller/classroom.controller");
const auth_middleware_1 = require("../middlewares/auth.middleware");
const user_classroom_controller_1 = require("../controller/user_classroom.controller");
const router = express_1.default.Router();
router.get('/', classroom_controller_1.getAll);
router.post('/', [auth_middleware_1.protect, auth_middleware_1.isFaculty], classroom_controller_1.create);
router.post('/update', [auth_middleware_1.protect, auth_middleware_1.isFaculty], classroom_controller_1.update);
router.post('/add-subject', [auth_middleware_1.protect, auth_middleware_1.isFaculty], classroom_controller_1.addSubject);
router.post('/add-user', [auth_middleware_1.protect, auth_middleware_1.isFaculty], user_classroom_controller_1.addUserToClassroom);
router.get('/get-users', [auth_middleware_1.protect, auth_middleware_1.isFaculty], user_classroom_controller_1.getClassroomUser);
router.get('/:id', classroom_controller_1.getOneById);
exports.default = router;
