import express from "express";
import {
  getAllFavorites,
  addToFavorites,
  removeFromFavorites
} from "../controllers/favorites.controller.js";

const router = express.Router();

router.get("/", getAllFavorites);
router.post("/", addToFavorites);
router.delete("/:concertId", removeFromFavorites);

export default router;
