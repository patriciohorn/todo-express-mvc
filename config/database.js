const mongoose = require('mongoose');

const connectToDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.DB_STRING);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error);

    process.exit(1);
  }
};

module.exports = connectToDB;
