const mongoose = require("mongoose")


const { Schema } = mongoose;

const productSchema = new Schema({
  nome:{
    type: String,
  },
  codigo:{
    type: Number,
  },
  descricao:{
    type: String,
  },
  categoria:{
    type: String,
  },
  quantidade:{
    type: Number,
  },
  preco:{
    type: Number,
  },
  tamanho:{
    type: String,
  },
  imagem:{
    type: String,
  },
  
}, { timestamps: true}
);

const Product = mongoose.model("Product", productSchema)

module.exports = {
  Product,
  productSchema,
}