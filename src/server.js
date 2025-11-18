import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./services/db.service.js";
import concertsRoutes from "./routes/concerts.routes.js";
import favoritesRoutes from "./routes/favorites.routes.js";
import { errorHandler } from "./middlewares/error.middleware.js";
import { swaggerDocs } from "./docs/swagger.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

swaggerDocs(app);

connectDB();

app.use("/api/concerts", concertsRoutes);
app.use("/api/favorites", favoritesRoutes);

app.use(errorHandler);

app.listen(3000, () => {
  console.log("Servidor corriendo en puerto 3000");
});
