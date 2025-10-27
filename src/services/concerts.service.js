const { getDb } = require("./db.service");
function list() {
  const db = getDb();
  return db.concerts;
}
module.exports = { list };
