import express from "express";
import cors from "cors";
import { notFoundHandler } from "./middlewares/notfound.middleware.js";
import { errorHandler } from "./middlewares/error.middleware.js";
import routes from "./routes/index.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", routes);
app.use(notFoundHandler);
app.use(errorHandler);

export default app;
