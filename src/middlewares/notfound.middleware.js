module.exports = (req, res, next) => {
  res.status(404).json({ status: "error", message: "Not Found", code: "NOT_FOUND" });
};
