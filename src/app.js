const express = require("express");
const app = express();
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./swagger");

exports.app = app;

app.use(express.json());

const logger = require("./middlewares/logger");
app.use(logger);

const eventoRoutes = require("./routes/eventoRoutes");
const inscricaoRoutes = require("./routes/inscricaoRoutes");

app.use("/eventos", eventoRoutes);
app.use("/inscricoes", inscricaoRoutes);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.get("/", (req, res) => {
    res.json ({ mensagem: "API de Notificação",
        rotas: {
            eventos: "/eventos",
            participantes: "/participantes",
            inscricoes: "/inscricoes",
            docs: "/api-docs"
        },
    });
});


module.exports = app;