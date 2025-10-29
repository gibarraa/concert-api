const { getDb } = require("./db.service");
function list(userId) {
  const db = getDb();
  const set = db.favorites ? db.favorites[userId] || new Set() : new Set();
  const ids = Array.from(set);
  return db.concerts.filter(c => ids.includes(String(c.id)));
}
function add(userId, concertId) {
  const db = getDb();
  if (!db.favorites) db.favorites = {};
  if (!db.favorites[userId]) db.favorites[userId] = new Set();
  const exists = db.favorites[userId].has(String(concertId));
  if (exists) return false;
  const valid = db.concerts.some(c => String(c.id) === String(concertId));
  if (!valid) return false;
  db.favorites[userId].add(String(concertId));
  return true;
}
function remove(userId, concertId) {
  const db = getDb();
  if (!db.favorites || !db.favorites[userId]) return false;
  const has = db.favorites[userId].has(String(concertId));
  if (!has) return false;
  db.favorites[userId].delete(String(concertId));
  return true;
}
module.exports = { list, add, remove };
