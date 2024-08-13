import { NextFunction,Response,Request } from "express"
import User from '../models/user';
import bcrypt from 'bcryptjs';
import jwt from "jsonwebtoken";



export const Login = async (req:Request,res:Response,next:NextFunction)  =>{

    const userName = req.body.username;
    const password = req.body.password;


    if(!userName || !password){
        res.status(400).send("Username or Password Can not empty");
        return
    }

    let existUser:any;

    try {

        existUser = await User.findOne({userName:userName});

        if(!existUser){
            res.status(404).send("This is not Valid User");
            return
        }

        let comparePassword = await bcrypt.compare(password,existUser.password)

        if(!comparePassword){
            res.status(400).send("Invalid Password !");
            return;
        }

        const token = jwt.sign({
            username:userName
        },"supersecretsignaturesignature");

        res.status(200).send(token);
        return

        
    } catch (error) {
        console.log("login errror",error);
        res.status(500).send("User Login Internal Server Error ");
        return;
    }


}