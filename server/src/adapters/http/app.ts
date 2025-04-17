import express from "express";
import { registerRoutes } from "./routes/route";

export const app = express();

registerRoutes(app);
