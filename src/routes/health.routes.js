import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({
    status: "ok",
    message: "API funcionando correctamente"
  });
});

export default router;
