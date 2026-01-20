import { Router } from "express";
import * as echoController from "../controllers/echoController.js";

const router = Router();

router.post("/", echoController.postEcho);

export default router;
