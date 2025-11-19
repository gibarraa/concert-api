import express from "express";
import concertsRoutes from "./concerts.routes.js";

const router = express.Router();

router.use("/concerts", concertsRoutes);

export default router;

import favoritesRoutes from "./favorites.routes.js";

router.use("/favorites", favoritesRoutes);
