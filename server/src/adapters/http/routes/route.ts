import authRoutes from "@/adapters/http/routes/auth";
import docsRoutes from "@/adapters/http/routes/docs";
import { Express } from "express";

export const registerRoutes = (app: Express) => {
  app.use("/api/auth/register", authRoutes);
  app.use("/api/docs", docsRoutes);
};
