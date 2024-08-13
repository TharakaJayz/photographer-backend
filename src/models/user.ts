import mongoose from "mongoose";

const Schema = new mongoose.Schema(
    {
        userName:{
            type:String,
            required:true

        },
        password:{
            type:String,
            required:true
        },
    }
)


const User = mongoose.model("user",Schema);

export default User;