const fs = require("fs");
const path = require("path");
let db = { concerts: [], artists: [], venues: [] };
function loadSeed() {
  const p = path.join(__dirname, "..", "db", "seed.json");
  const raw = fs.readFileSync(p, "utf-8");
  const data = JSON.parse(raw);
  db.concerts = data.concerts || [];
  db.artists = data.artists || [];
  db.venues = data.venues || [];
}
function getDb() {
  return db;
}
module.exports = { loadSeed, getDb };
