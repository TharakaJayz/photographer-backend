import { Router } from "express";
import * as albumContollers from "../controllers/portfolio";

const router =  Router();

router.post("/create_album",albumContollers.createAlbum);
router.get("/get_all_album",albumContollers.getAllSingleAlbums);
router.get("/get_single_album/:id",albumContollers.getSingleAlbumById);

export default router;
