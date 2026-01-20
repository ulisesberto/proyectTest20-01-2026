import { Router } from "express";
import * as dbController from "../controllers/dbController.js";

const router = Router();

router.get("/all", dbController.getAllData);
router.get("/:key", dbController.getData);
router.post("/add", dbController.addData);

export default router;
