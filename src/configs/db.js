const mongoose = require("mongoose");

const connectDB = async () => {
  console.log(
    "DB PARAMS -> ",
    process.env.MONGO_DB_URI,
    process.env.MONGO_DB_NAME,
    process.env.MONGO_DB_USER,
    process.env.MONGO_DB_PASS
  );
  const conn = await mongoose.connect(process.env.MONGO_DB_URI, {
    dbName: process.env.MONGO_DB_NAME,
    user: process.env.MONGO_DB_USER,
    pass: process.env.MONGO_DB_PASS,
    autoCreate: true,
  });
  console.log(`MongoDB connected on ${conn.connection.host}`);
};

module.exports = connectDB;
