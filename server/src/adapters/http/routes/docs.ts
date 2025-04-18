import swaggerDocument from "@/interfaces/http/docs/swagger-output.json";
import { Router } from "express";
import swaggerUi from "swagger-ui-express";

const router = Router();

router.use("/", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

export default router;
