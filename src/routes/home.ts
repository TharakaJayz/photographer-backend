import { Router } from "express";
import * as homeContollers from "../controllers/home";
const router = Router();

router.post("/create_home_slider",homeContollers.homeImageSliderCreate)

router.get("/get_home_slider",homeContollers.homeImageSliderGet)
export  default router;