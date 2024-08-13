import { NextFunction, Request, Response } from "express";
import SingleAlbum from "../models/album";




export type singleAlbumType = {
    albumType:string,
    boyName:string,
    girlName:string,
    headerImage:string,
    images:Array<string>,
    titleImage:string
}

export const createAlbum = async(req:Request,res:Response,next:NextFunction) =>{

    const albumType = req.body.albumType;
    const boyName = req.body.boyName;
    const girlName = req.body.girlName;
    const albumTitle = `${boyName} & ${girlName}`;
    const albumHeaderImg = req.body.headerImage;
    const titleImage = req.body.titleImage;
    const images:[] = req.body.images;

    if(!albumType || !titleImage || !albumHeaderImg || !images || !girlName || !boyName ){
        res.status(400).send("you are missing some required properties");
        return
    }

    const album = new SingleAlbum({
        albumType:albumType,
        albumTitle:albumTitle,
        albumHeaderImg:albumHeaderImg,
        images:images,
        isActive:true,
        titleImage:titleImage
    });


    try {

         await album.save();
        res.sendStatus(200);
        return;
        
    } catch (error) {
        res.status(500).send("creating single album internall server errro");
        return
    }
}


export const getAllSingleAlbums = async(req:Request,res:Response,) =>{

    try {

        const albums = await SingleAlbum.find();

        res.status(200).send(albums.map(
            
            (singleAlbum)=> { return{
                type:singleAlbum.albumType,
                desc:singleAlbum.albumTitle,
                imgUrl:singleAlbum.titleImage,
                id:singleAlbum._id
            }}
    
    ));
        return;
        
    } catch (error) {
        res.status(500).send("Fetching all single album internall server errro");
        return
    }
}


export const getSingleAlbumById = async(req:Request,res:Response)  =>{

    const albumId = req.params.id;



    try {

        const singleAlbum = await SingleAlbum.findById(albumId);
        res.status(200).json(singleAlbum);
        return;
        
    } catch (error) {
        res.status(500).send("Single ALbum Fetching internall server error");
        return
    }
}

