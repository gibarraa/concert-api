import express from "express";
import {
  getAllConcerts,
  getConcert,
  createConcert,
  updateConcert,
  deleteConcert
} from "../controllers/concerts.controller.js";
import { validateConcertData } from "../middlewares/validate.middleware.js";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Concerts
 *   description: Endpoints para gestionar conciertos
 */

/**
 * @swagger
 * /api/concerts:
 *   get:
 *     summary: Obtener todos los conciertos
 *     tags: [Concerts]
 *     responses:
 *       200:
 *         description: Lista de conciertos
 */
router.get("/", getAllConcerts);

/**
 * @swagger
 * /api/concerts/{id}:
 *   get:
 *     summary: Obtener un concierto por ID
 *     tags: [Concerts]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *     responses:
 *       200:
 *         description: Concierto obtenido
 *       404:
 *         description: Concierto no encontrado
 */
router.get("/:id", getConcert);

/**
 * @swagger
 * /api/concerts:
 *   post:
 *     summary: Crear un concierto
 *     tags: [Concerts]
 *     requestBody:
 *       required: true
 *     responses:
 *       201:
 *         description: Concierto creado
 */
router.post("/", validateConcertData, createConcert);

/**
 * @swagger
 * /api/concerts/{id}:
 *   put:
 *     summary: Actualizar concierto
 *     tags: [Concerts]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *     responses:
 *       200:
 *         description: Concierto actualizado
 */
router.put("/:id", validateConcertData, updateConcert);

/**
 * @swagger
 * /api/concerts/{id}:
 *   delete:
 *     summary: Eliminar concierto
 *     tags: [Concerts]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *     responses:
 *       200:
 *         description: Concierto eliminado
 */
router.delete("/:id", deleteConcert);

export default router;
