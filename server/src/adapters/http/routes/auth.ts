import {
  loginController,
  registerController,
} from "@/interfaces/http/controllers/auth.controller";
import { Router } from "express";

const router = Router();

router.post("/register", registerController);
router.post("/login", loginController);

export default router;
