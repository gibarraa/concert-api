const express = require("express");
const router = express.Router();
const controller = require("../controllers/favorites.controller");
router.get("/:userId/favorites", controller.list);
router.post("/:userId/favorites", controller.add);
router.delete("/:userId/favorites/:concertId", controller.remove);
module.exports = router;
