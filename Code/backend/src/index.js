import express from 'express';
import mongoose from 'mongoose';
import expressConfig from 'frameworks/server/express'
import mongoConnection from 'frameworks/database/mongodb/connection';
import routes from 'frameworks/server/routes/index';
import 'config/environment';

const app = express();

//Server configuration
expressConfig(app);
routes(app, express);

//Database connection
mongoConnection(mongoose, process.env.MONGO_URI).connectToMongo();