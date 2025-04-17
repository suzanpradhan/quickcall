import { Router } from "express";
import { registerController } from "server/src/interfaces/http/controllers/auth.controller";

const router = Router();

router.post("/", registerController);

export default router;
