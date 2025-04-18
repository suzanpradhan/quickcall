import swaggerAutogen from "swagger-autogen";
import { schemas } from "./schemas/schema";

const doc = {
  info: {
    title: "QuickCall API",
  },
  host: "localhost:8000",
  schemes: ["http", "https"],
  components: {
    schemas,
  },
};

const outputFile = "./swagger-output.json";
const routes = ["../../../adapters/http/routes/route.ts"];

swaggerAutogen({ openapi: "3.0.0" })(outputFile, routes, doc);
