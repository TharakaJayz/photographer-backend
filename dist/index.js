"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const mongoose_1 = __importDefault(require("mongoose"));
const user_1 = __importDefault(require("./routes/user"));
const home_1 = __importDefault(require("./routes/home"));
const album_1 = __importDefault(require("./routes/album"));
const app = (0, express_1.default)();
app.use(((0, cors_1.default)()));
app.use(body_parser_1.default.json());
app.use(function (req, res, next) {
    res.setHeader("Content-Security-Policy", "default-src 'self'; img-src 'self' https://lh3.googleusercontent.com");
    next();
});
app.use("/auth", user_1.default);
app.use("/home", home_1.default);
app.use("/album", album_1.default);
// app.post("/signUp", async (req,res)=>{
//     const HashedPassword = await bcrypt.hash(password,8);
//     const user = new User({
//         password:HashedPassword,
//         userName:userName
//     });
//     try {
//        await user.save();
//        res.send(200);
//        return
//    } catch (error) {
//     res.send(500);
//     console.log("err",error);
//     return
//    }
// })
// vcv
try {
    mongoose_1.default.connect("mongodb+srv://tharakaprabhath300:STfuriOsxXMja3nN@clusterphotograpghy.kysizud.mongodb.net/?retryWrites=true&w=majority&appName=ClusterPhotograpghy");
    app.listen(process.env.PORT || 8080, () => {
        console.log("connected on 8080");
    });
}
catch (err) {
    console.log("internal error", err);
}
