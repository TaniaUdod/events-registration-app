const { connect } = require("mongoose");

const DB_HOST = process.env.REACT_APP_DB_HOST;

const connectDB = async () => {
  try {
    await connect(DB_HOST);
    console.log("Database connection successful");
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
