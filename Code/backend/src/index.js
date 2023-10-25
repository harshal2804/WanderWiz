import express from 'express';
import mongoose from 'mongoose';
import './config/environment.js';
import routes from './routes/index.js';
import mongoConnection from './database/mongodb/connection.js';

const app = express();
const PORT = process.env.PORT ? process.env.PORT : 3001;

//Database connection
mongoConnection(mongoose, process.env.MONGO_URI).connectToMongo();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

routes(app, express);

app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));