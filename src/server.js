require("dotenv").config(); // Carrega as variáveis do .env

const app = require("./app");

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor rodado em http://localhost:${PORT} `);
    console.log(`Ambiente: ${process.env.NODE_ENV || "development"}`);
    console.log(`Documentação: http://localhost:${PORT}/api-docs`);
});