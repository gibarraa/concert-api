const service = require("../services/concerts.service");
exports.list = (req, res, next) => {
  try {
    const items = service.list();
    res.status(200).json({ status: "success", data: items });
  } catch (e) {
    next(e);
  }
};

