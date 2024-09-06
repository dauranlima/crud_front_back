const mongoose = require("mongoose");

async function main() {
  try {
    await mongoose.connect(
      `mongodb+srv://dauranlima:${process.env.PASSWORD}@cluster0.el7cayl.mongodb.net/?retryWrites=true&w=majority&appName=crud_db`
    );
    console.log("db_connected!!!");
  } catch (error) {
    console.log(error);
  }
}
