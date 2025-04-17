import { CONFIGS } from "../../core/config";
import "../../core/di/registers";
import { app } from "./app";

app.listen(CONFIGS.PORT, () => {
  console.log("Server start");
});
