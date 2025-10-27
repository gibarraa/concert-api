const app = require("./app");
const { PORT } = require("./config/env");
const { loadSeed } = require("./services/db.service");
loadSeed();
app.listen(PORT, () => {});
