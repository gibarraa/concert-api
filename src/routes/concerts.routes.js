const express = require("express");
const router = express.Router();
const controller = require("../controllers/concerts.controller");
const { validateConcertsQuery } = require("../middlewares/validate.middleware");
router.get("/", validateConcertsQuery, controller.list);
router.get("/:id", controller.detail);
module.exports = router;
