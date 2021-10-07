// import * as Mongoose from "mongoose";
const mongoose = require('mongoose');
import { InternalError } from '../errors';

let database: any;

export const connectModel = async () => {
  if (database) return;
  
  try {
    await mongoose.connect(process.env.DB_URI);
  } catch (error) {
    throw new InternalError(error);
  }

  database = mongoose.connection;
}

export const disconnectModel = async () => {
  if (!database) return;
  await mongoose.disconnect();
}