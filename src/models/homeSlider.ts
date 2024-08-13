import mongoose from "mongoose";

const Schema = new mongoose.Schema(
    {
        images:{
            type:Array,
            required:true
        }
    }
)

const HomeImages = mongoose.model("homeImage",Schema);
export default HomeImages;