import swaggerAutogen from "swagger-autogen";
import { schemas } from "./definitions/definitions";
const doc = {
  info: {
    title: "QuickCall API",
  },
  host: "localhost:3000",
  components: {
    schemas,
  },
};

const outputFile = "./swagger-output.json";
const routes = ["../../../adapters/http/routes/route.ts"];

swaggerAutogen({ openapi: "3.0.0" })(outputFile, routes, doc);
