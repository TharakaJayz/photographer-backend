import { NextFunction, Request, Response } from "express";
import HomeImages from '../models/homeSlider';

export const homeImageSliderCreate = async (req: Request, res: Response, next: NextFunction) => {
    const images: [] = req.body.images;



    if (images.length === 0) {
        res.status(400).send("please Enter some Images");
        return
    };

    try {

        const homeImages = new HomeImages({ images: images })
        const Id = "6652bd34e7e5afb6fb5bb6ba";

        // const homeSliderResponse = await homeImages.save();
        await HomeImages.findByIdAndUpdate(
            { _id: Id },
            {
                $set: {
                    images: images
                },
            },
            {
                new: true,
            }
        );

        res.sendStatus(200);
        return



    } catch (error) {
        console.log("homeImage creater error", error);
        res.status(500).send("home Image creater internall server error");
        return
    }

}

export const homeImageSliderGet = async (req:Request,res:Response,next:NextFunction) =>{

    const Id = "6652bd34e7e5afb6fb5bb6ba";

        try {

            const images:any = await HomeImages.findById(Id);
            res.send(images.images);
            return
            
        } catch (error) {
            console.log("homeImage fetching error", error);
            res.status(500).send("home Image fetch internall server error");
            return
        }
}