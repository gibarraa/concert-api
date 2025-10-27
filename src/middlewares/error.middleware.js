module.exports = (err, req, res, next) => {
  res.status(500).json({ status: "error", message: "Server Error", code: "SERVER_ERROR" });
};
