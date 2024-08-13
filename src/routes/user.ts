import { Router } from "express";
import * as userContollers from  "../controllers/user"; 
const router = Router();

router.post("/login",userContollers.Login)

export default router;