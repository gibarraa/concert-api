const service = require("../services/favorites.service");
exports.list = (req, res, next) => {
  try {
    const userId = req.params.userId;
    const data = service.list(userId);
    res.status(200).json({ status: "success", data });
  } catch (e) {
    next(e);
  }
};
exports.add = (req, res, next) => {
  try {
    const userId = req.params.userId;
    const concertId = req.body.concertId;
    if (!concertId) return res.status(400).json({ status: "error", message: "concertId required", code: "BAD_REQUEST" });
    const ok = service.add(userId, concertId);
    if (!ok) return res.status(409).json({ status: "error", message: "Already exists or invalid concert", code: "CONFLICT" });
    res.status(201).json({ status: "success", data: { userId, concertId } });
  } catch (e) {
    next(e);
  }
};
exports.remove = (req, res, next) => {
  try {
    const userId = req.params.userId;
    const concertId = req.params.concertId;
    const ok = service.remove(userId, concertId);
    if (!ok) return res.status(404).json({ status: "error", message: "Not Found", code: "NOT_FOUND" });
    res.status(204).send();
  } catch (e) {
    next(e);
  }
};
