import { registerController } from "@/interfaces/http/controllers/auth.controller";
import { Router } from "express";

const router = Router();

router.post("/", registerController);

export default router;
