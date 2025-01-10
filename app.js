const express = require('express');
const dotenv = require('dotenv');
const middlewares = require('./middlewares');
const routes = require('./routes');
dotenv.config();
const app = express();
const PORT = 4000;

// Configurar middlewares
middlewares.setupApp(app); 

// Configurar rutas
routes.setup(app);

app.listen(PORT, () => {
  console.log(`Servidor en ejecución en http://localhost:${PORT}`);
});