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
exports.homeImageSliderGet = exports.homeImageSliderCreate = void 0;
const homeSlider_1 = __importDefault(require("../models/homeSlider"));
const homeImageSliderCreate = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const images = req.body.images;
    if (images.length === 0) {
        res.status(400).send("please Enter some Images");
        return;
    }
    ;
    try {
        const homeImages = new homeSlider_1.default({ images: images });
        const Id = "6652bd34e7e5afb6fb5bb6ba";
        // const homeSliderResponse = await homeImages.save();
        yield homeSlider_1.default.findByIdAndUpdate({ _id: Id }, {
            $set: {
                images: images
            },
        }, {
            new: true,
        });
        res.sendStatus(200);
        return;
    }
    catch (error) {
        console.log("homeImage creater error", error);
        res.status(500).send("home Image creater internall server error");
        return;
    }
});
exports.homeImageSliderCreate = homeImageSliderCreate;
const homeImageSliderGet = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const Id = "6652bd34e7e5afb6fb5bb6ba";
    try {
        const images = yield homeSlider_1.default.findById(Id);
        res.send(images.images);
        return;
    }
    catch (error) {
        console.log("homeImage fetching error", error);
        res.status(500).send("home Image fetch internall server error");
        return;
    }
});
exports.homeImageSliderGet = homeImageSliderGet;
