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

router.get("/", getAllConcerts);
router.get("/:id", getConcert);
router.post("/", validateConcertData, createConcert);
router.put("/:id", validateConcertData, updateConcert);
router.delete("/:id", deleteConcert);

export default router;
