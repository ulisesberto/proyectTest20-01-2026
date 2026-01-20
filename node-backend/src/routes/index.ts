import { Router } from "express";
import helloRoutes from "./helloRoutes.js";
import echoRoutes from "./echoRoutes.js";

const router = Router();

router.use("/hello", helloRoutes);
router.use("/echo", echoRoutes);

export default router;
