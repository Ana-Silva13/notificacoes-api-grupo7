const { app } = require("./app");
const participanteRoutes = require("./routes/participanteRoutes");

app.use("/participantes", participanteRoutes);
