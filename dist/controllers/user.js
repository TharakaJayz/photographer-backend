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
exports.Login = void 0;
const user_1 = __importDefault(require("../models/user"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const Login = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const userName = req.body.username;
    const password = req.body.password;
    if (!userName || !password) {
        res.status(400).send("Username or Password Can not empty");
        return;
    }
    let existUser;
    try {
        existUser = yield user_1.default.findOne({ userName: userName });
        if (!existUser) {
            res.status(404).send("This is not Valid User");
            return;
        }
        let comparePassword = yield bcryptjs_1.default.compare(password, existUser.password);
        if (!comparePassword) {
            res.status(400).send("Invalid Password !");
            return;
        }
        const token = jsonwebtoken_1.default.sign({
            username: userName
        }, "supersecretsignaturesignature");
        res.status(200).send(token);
        return;
    }
    catch (error) {
        console.log("login errror", error);
        res.status(500).send("User Login Internal Server Error ");
        return;
    }
});
exports.Login = Login;
