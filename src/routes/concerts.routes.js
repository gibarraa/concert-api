import express from "express";
import {
  getAllConcerts,
  getConcert,
  createConcert,
  updateConcert,
  deleteConcert
} from "../controllers/concerts.controller.js";

const router = express.Router();

router.get("/", getAllConcerts);
router.get("/:id", getConcert);
router.post("/", createConcert);
router.put("/:id", updateConcert);
router.delete("/:id", deleteConcert);

export default router;
