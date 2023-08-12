"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const db_1 = __importDefault(require("./utils/db"));
const helmet_1 = __importDefault(require("helmet"));
const compression_1 = __importDefault(require("compression"));
const dotenv_1 = __importDefault(require("dotenv"));
const error_middleware_1 = __importDefault(require("./middlewares/error.middleware"));
const user_route_1 = __importDefault(require("./routes/user.route"));
const classroom_route_1 = __importDefault(require("./routes/classroom.route"));
const subject_route_1 = __importDefault(require("./routes/subject.route"));
dotenv_1.default.config();
const app = (0, express_1.default)();
// Middlewares
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, compression_1.default)());
app.use((0, helmet_1.default)());
app.use((0, cors_1.default)());
app.use((0, morgan_1.default)('dev'));
// Routes
app.use('/api/v1/user', user_route_1.default);
app.use('/api/v1/classroom', classroom_route_1.default);
app.use('/api/v1/subject', subject_route_1.default);
// Error Middleware
app.use(error_middleware_1.default);
// Database Connection
(0, db_1.default)().then(() => {
    app.listen(process.env.PORT, () => {
        console.log(`App listening on the port ${process.env.PORT}`);
    });
});
