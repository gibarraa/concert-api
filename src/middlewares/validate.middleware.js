function isInt(v) {
  const n = parseInt(v, 10);
  return !isNaN(n);
}
function validateConcertsQuery(req, res, next) {
  const page = req.query.page;
  const limit = req.query.limit;
  const sort = req.query.sort;
  const dateFrom = req.query.dateFrom;
  const dateTo = req.query.dateTo;
  if (page !== undefined && (!isInt(page) || parseInt(page, 10) < 1)) {
    return res.status(400).json({ status: "error", message: "page must be >= 1", code: "BAD_REQUEST" });
  }
  if (limit !== undefined && (!isInt(limit) || parseInt(limit, 10) < 1 || parseInt(limit, 10) > 50)) {
    return res.status(400).json({ status: "error", message: "limit must be between 1 and 50", code: "BAD_REQUEST" });
  }
  if (sort !== undefined && sort !== "date_asc" && sort !== "date_desc") {
    return res.status(400).json({ status: "error", message: "sort must be date_asc or date_desc", code: "BAD_REQUEST" });
  }
  if (dateFrom && isNaN(Date.parse(dateFrom))) {
    return res.status(400).json({ status: "error", message: "dateFrom must be YYYY-MM-DD", code: "BAD_REQUEST" });
  }
  if (dateTo && isNaN(Date.parse(dateTo))) {
    return res.status(400).json({ status: "error", message: "dateTo must be YYYY-MM-DD", code: "BAD_REQUEST" });
  }
  if (dateFrom && dateTo) {
    const f = new Date(dateFrom + "T00:00:00Z").getTime();
    const t = new Date(dateTo + "T23:59:59Z").getTime();
    if (f > t) {
      return res.status(400).json({ status: "error", message: "dateFrom must be <= dateTo", code: "BAD_REQUEST" });
    }
  }
  next();
}
module.exports = { validateConcertsQuery };
