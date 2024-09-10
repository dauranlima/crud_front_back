const mongoose = require("mongoose")

const dotenv = require('dotenv')

dotenv.config()


async function main(){
  try {
    await mongoose.connect(process.env.URI)
    console.log("db_connected!!!")
  } catch (error) {
    console.log(`Error:${error}`)
  }
}

module.exports = main

// ("mongodb+srv://dauranlima:auclm722@cluster0.el7cayl.mongodb.net/?retryWrites=true&w=majority&appName=crud_db")