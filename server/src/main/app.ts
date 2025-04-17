import express from "express";
import { registerRoutes } from "../core/routes/route";

export const app = express();

registerRoutes(app);
