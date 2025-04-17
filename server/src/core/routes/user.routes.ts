import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.send("Test");
});

export default router;
