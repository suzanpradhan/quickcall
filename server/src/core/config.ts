import dotenv from "dotenv";

dotenv.config();

export const CONFIGS = {
  PORT: process.env.PORT || 8000,
  HOST: process.env.HOST || "localhost",
};
