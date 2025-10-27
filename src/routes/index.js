const express = require("express");
const router = express.Router();
const concerts = require("./concerts.routes");
router.get("/health", (req, res) => {
  res.status(200).json({ status: "success", data: { ok: true } });
});
router.use("/concerts", concerts);
module.exports = router;
