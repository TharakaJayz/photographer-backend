import express from "express";
import cors from "cors";
import bodyParser from "body-parser"
import mongoose from "mongoose";
import bcrypt from "bcryptjs";

import  userRoutes from "./routes/user";
import homeRoutes from "./routes/home";
import albumRoutes from "./routes/album";

const app = express();
app.use((cors()));
app.use(bodyParser.json());


app.use("/auth",userRoutes);
app.use("/home",homeRoutes);
app.use("/album",albumRoutes);


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




try {
    mongoose.connect("mongodb+srv://tharakaprabhath300:STfuriOsxXMja3nN@clusterphotograpghy.kysizud.mongodb.net/?retryWrites=true&w=majority&appName=ClusterPhotograpghy");

    app.listen(process.env.PORT || 8080, () => {
        console.log("connected on 8080");
    })


} catch (err) {
    console.log("internal error", err);
}