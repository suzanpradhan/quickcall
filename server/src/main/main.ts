import { CONFIGS } from "../core/config";
import { app } from "./app";

app.listen(CONFIGS.PORT, () => {
  console.log("Server start");
});
