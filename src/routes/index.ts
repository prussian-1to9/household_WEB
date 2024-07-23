import { Router } from "express";
import apiV1Routes from "./apiV1Routes";

const router = Router();

router.use("/api/v1", apiV1Routes);

export default router;
