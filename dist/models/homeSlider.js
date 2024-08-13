"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = new mongoose_1.default.Schema({
    images: {
        type: Array,
        required: true
    }
});
const HomeImages = mongoose_1.default.model("homeImage", Schema);
exports.default = HomeImages;
