"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const SignUp = new mongoose_1.default.Schema({
    _id: { type: String, required: true },
    email: {
        type: String,
        required: true,
        unique: true
    },
    username: {
        type: String,
        require: true,
    },
    fullname: {
        type: String,
    }
});
const Signup = mongoose_1.default.model('SignUp', SignUp);
exports.default = Signup;
