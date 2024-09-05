const {Product: ProductModel} = require("../models/product")

const productController = () => {

create: async (req, res) => {
  try {
    
    const product = {
      title: req.body.title,
      code: req.body.code,
      size: req.body.size,
      price: req.body.price
    }

    const res = await ProductModel.create(product)
    res.status(201).json({res, msg:"Product added successfully"})
  } catch (err) {
    console.log(err)
  }
}






}