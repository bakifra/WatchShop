require('@babel/register');

const express = require('express');
const config = require('./config/serverConfig');

const app = express();

const PORT = 3000;

const indexRoutes = require('./routes/index.routes');

config(app);

app.use('/', indexRoutes);

app.listen(PORT, () => {
  console.log(`Сервер работает на ${PORT} порту`);
});
