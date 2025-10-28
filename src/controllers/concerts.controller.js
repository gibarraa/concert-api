const service = require("../services/concerts.service");
function toInt(v, d) {
  const n = parseInt(v, 10);
  if (isNaN(n)) return d;
  return n;
}
exports.list = (req, res, next) => {
  try {
    const params = {
      q: req.query.q || "",
      city: req.query.city || "",
      country: req.query.country || "",
      genre: req.query.genre || "",
      dateFrom: req.query.dateFrom || "",
      dateTo: req.query.dateTo || "",
      sort: req.query.sort || "date_asc",
      page: toInt(req.query.page, 1),
      limit: toInt(req.query.limit, 10)
    };
    const result = service.list(params);
    res.status(200).json({ status: "success", data: result.items, meta: result.meta });
  } catch (e) {
    next(e);
  }
};
exports.detail = (req, res, next) => {
  try {
    const id = req.params.id;
    const item = service.detail(id);
    if (!item) return res.status(404).json({ status: "error", message: "Not Found", code: "NOT_FOUND" });
    res.status(200).json({ status: "success", data: item });
  } catch (e) {
    next(e);
  }
};
