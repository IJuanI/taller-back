const mongoose = require('mongoose');

let database: any;

export const connectModel = async () => {
  if (database) return;
  
  try {
    await mongoose.connect(process.env.DB_URI);
  } catch (error) {
  }

  database = mongoose.connection;
}

export const disconnectModel = async () => {
  if (!database) return;
  await mongoose.disconnect();
}