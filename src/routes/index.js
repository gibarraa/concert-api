const express = require("express");
const router = express.Router();
const concerts = require("./concerts.routes");
const favorites = require("./favorites.routes");
router.get("/health", (req, res) => {
  res.status(200).json({ status: "success", data: { ok: true } });
});
router.use("/concerts", concerts);
router.use("/users", favorites);
module.exports = router;
