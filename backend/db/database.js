const mongoose = require("mongoose");
const dotenv = require('dotenv')

dotenv.config()
async function main() {
  try {
    await mongoose.connect(process.env.URI);
    console.log("db_connected!!!");
  } catch (error) {
    console.log(error);
  }
}

module.exports = main