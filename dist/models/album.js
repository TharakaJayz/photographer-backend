"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = new mongoose_1.default.Schema({
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
    isActive: {
        type: Boolean,
        required: true
    }
}, {
    timestamps: true
});
const SingleAlbum = mongoose_1.default.model("singleAlbum", Schema);
exports.default = SingleAlbum;
