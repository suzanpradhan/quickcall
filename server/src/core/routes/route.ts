import { Express } from "express";
import userRoutes from "./user.routes";

export const registerRoutes = (app: Express) => {
  app.use("/api/users", userRoutes);
};
