import { Router } from "express";
import helloRoutes from "./helloRoutes.js";
import echoRoutes from "./echoRoutes.js";
import dbRoutes from "./dbRoutes.js";

const router = Router();

router.use("/hello", helloRoutes);
router.use("/echo", echoRoutes);
router.use("/db", dbRoutes);

export default router;
