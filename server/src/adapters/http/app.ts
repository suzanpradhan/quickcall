import cors from "cors";
import express from "express";
import { registerRoutes } from "./routes/route";

export const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

registerRoutes(app);
