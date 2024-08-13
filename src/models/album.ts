import mongoose from "mongoose";



const Schema = new mongoose.Schema({
    albumType: {
        type: String,
        required: true
    },
    albumTitle: {
        type: String,
        required: true
    },
    albumHeaderImg: {
        type: String,
        required: true
    },
    titleImage: {
        type: String,
        required: true
    },
    images: {
        type: Array,
        required: true
    },
    isActive:{
        type:Boolean,
        required:true

    }


},{
    timestamps:true
})

const SingleAlbum = mongoose.model("singleAlbum", Schema);

export default SingleAlbum;
