require('./config/environment');
require('./database/mongodb/connection');

const express = require('express');
const app = express();
const PORT = process.env.PORT ? process.env.PORT : 3000;

const apiRouter = require('./api/index');
app.use('/', apiRouter);

app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));