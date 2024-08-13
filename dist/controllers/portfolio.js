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
exports.getSingleAlbumById = exports.getAllSingleAlbums = exports.createAlbum = void 0;
const album_1 = __importDefault(require("../models/album"));
const createAlbum = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const albumType = req.body.albumType;
    const boyName = req.body.boyName;
    const girlName = req.body.girlName;
    const albumTitle = `${boyName} & ${girlName}`;
    const albumHeaderImg = req.body.headerImage;
    const titleImage = req.body.titleImage;
    const images = req.body.images;
    if (!albumType || !titleImage || !albumHeaderImg || !images || !girlName || !boyName) {
        res.status(400).send("you are missing some required properties");
        return;
    }
    const album = new album_1.default({
        albumType: albumType,
        albumTitle: albumTitle,
        albumHeaderImg: albumHeaderImg,
        images: images,
        isActive: true,
        titleImage: titleImage
    });
    try {
        yield album.save();
        res.sendStatus(200);
        return;
    }
    catch (error) {
        res.status(500).send("creating single album internall server errro");
        return;
    }
});
exports.createAlbum = createAlbum;
const getAllSingleAlbums = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const albums = yield album_1.default.find();
        res.status(200).send(albums.map((singleAlbum) => {
            return {
                type: singleAlbum.albumType,
                desc: singleAlbum.albumTitle,
                imgUrl: singleAlbum.titleImage,
                id: singleAlbum._id
            };
        }));
        return;
    }
    catch (error) {
        res.status(500).send("Fetching all single album internall server errro");
        return;
    }
});
exports.getAllSingleAlbums = getAllSingleAlbums;
const getSingleAlbumById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const albumId = req.params.id;
    try {
        const singleAlbum = yield album_1.default.findById(albumId);
        res.status(200).json(singleAlbum);
        return;
    }
    catch (error) {
        res.status(500).send("Single ALbum Fetching internall server error");
        return;
    }
});
exports.getSingleAlbumById = getSingleAlbumById;
