import { CONFIGS } from "@/core/config";
import "@/core/di/registers";
import { createServer } from "http";
import { app } from "./http/app";
import { initSocket } from "./socket/socket";

const httpServer = createServer(app);

initSocket(httpServer);

httpServer.listen(CONFIGS.PORT, () => {
  console.log("Server started");
});
