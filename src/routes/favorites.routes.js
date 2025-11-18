import express from "express";
import {
  getAllFavorites,
  addToFavorites,
  removeFromFavorites
} from "../controllers/favorites.controller.js";
import { validateFavoriteData } from "../middlewares/validate.middleware.js";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Favorites
 *   description: Endpoints para favoritos
 */

/**
 * @swagger
 * /api/favorites:
 *   get:
 *     summary: Obtener favoritos
 *     tags: [Favorites]
 *     responses:
 *       200:
 *         description: Lista de favoritos
 */
router.get("/", getAllFavorites);
<<<<<<< Updated upstream
router.post("/", validateFavoriteData, addToFavorites);
=======

/**
 * @swagger
 * /api/favorites:
 *   post:
 *     summary: Agregar a favoritos
 *     tags: [Favorites]
 *     responses:
 *       201:
 *         description: Agregado
 */
router.post("/", validateFavoriteData, addToFavorites);

/**
 * @swagger
 * /api/favorites/{concertId}:
 *   delete:
 *     summary: Eliminar de favoritos
 *     tags: [Favorites]
 *     parameters:
 *       - in: path
 *         name: concertId
 *         required: true
 *     responses:
 *       200:
 *         description: Eliminado
 */
>>>>>>> Stashed changes
router.delete("/:concertId", removeFromFavorites);

export default router;
