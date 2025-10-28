const { getDb } = require("./db.service");
function withinDateRange(d, from, to) {
  if (!from && !to) return true;
  const x = new Date(d).getTime();
  if (from) {
    const f = new Date(from + "T00:00:00Z").getTime();
    if (x < f) return false;
  }
  if (to) {
    const t = new Date(to + "T23:59:59Z").getTime();
    if (x > t) return false;
  }
  return true;
}
function list(params) {
  const db = getDb();
  let arr = db.concerts.slice();
  if (params.q) {
    const q = params.q.toLowerCase();
    arr = arr.filter(c => (c.title || "").toLowerCase().includes(q) || (c.artistName || "").toLowerCase().includes(q));
  }
  if (params.city) {
    const x = params.city.toLowerCase();
    arr = arr.filter(c => (c.city || "").toLowerCase() === x);
  }
  if (params.country) {
    const x = params.country.toLowerCase();
    arr = arr.filter(c => (c.country || "").toLowerCase() === x);
  }
  if (params.genre) {
    const x = params.genre.toLowerCase();
    arr = arr.filter(c => (c.genre || "").toLowerCase() === x);
  }
  if (params.dateFrom || params.dateTo) {
    arr = arr.filter(c => withinDateRange(c.dateUtc, params.dateFrom, params.dateTo));
  }
  if (params.sort === "date_desc") {
    arr.sort((a, b) => new Date(b.dateUtc) - new Date(a.dateUtc));
  } else {
    arr.sort((a, b) => new Date(a.dateUtc) - new Date(b.dateUtc));
  }
  const total = arr.length;
  const page = params.page < 1 ? 1 : params.page;
  const limit = params.limit < 1 ? 10 : params.limit > 50 ? 50 : params.limit;
  const start = (page - 1) * limit;
  const end = start + limit;
  const items = arr.slice(start, end);
  const hasNext = end < total;
  return { items, meta: { page, limit, total, hasNext } };
}
function detail(id) {
  const db = getDb();
  return db.concerts.find(c => String(c.id) === String(id)) || null;
}
module.exports = { list, detail };
