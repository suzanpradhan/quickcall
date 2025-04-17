import { Express } from "express";
import userRoutes from "../../../adapters/http/routes/auth";

export const registerRoutes = (app: Express) => {
  app.use("/api/auth", userRoutes);
};
