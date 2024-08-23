import { Router } from "express";
import HomeCtrl from "../controllers/Home_ctrl.js";
const home_ctrl = new HomeCtrl();
const home_router = Router();

home_router.get("/", home_ctrl.home);

export default home_router;