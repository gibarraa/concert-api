import express from "express";
import {
  getAllFavorites,
  addToFavorites,
  removeFromFavorites
} from "../controllers/favorites.controller.js";
import { validateFavoriteData } from "../middlewares/validate.middleware.js";

const router = express.Router();

router.get("/", getAllFavorites);
router.post("/", validateFavoriteData, addToFavorites);
router.delete("/:concertId", removeFromFavorites);

export default router;
