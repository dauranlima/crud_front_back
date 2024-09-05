const mongoose = require("mongoose")

const { Schema } = mongoose

const productSchema = new Schema({
  name: {
    type: String,
  },
  code: {
    type: String,
  },
  size: {
    type: String,
  },
  price: {
    type: String,
  },
  
}, {timestamps: true},

)

const Product = mongoose.model("Product", productSchema)

module.exports ={
  Product,
  productSchema,
}