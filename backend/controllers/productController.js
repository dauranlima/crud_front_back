const {Product: ProductModel} = require("../models/product")

const productController =  {

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
},

getAll: async(req,res) => {
  try {
    
    const product = await ProductModel.find();
    res.json(product)

  } catch (error) {
    console.log(error)
  }
},

get: async (req,res) => {
  try {
    const id = req.params.id
    const product = await ProductModel.findById(id)

    if(!product){
      res.status(404).json({msg: "Product not found"})
      return;
    }

    res.json(product)

  } catch (error) {
  console.log(error)
  }
},

delete: async (req,res) => {
  try {
    const id = req.params.id
    const product = await ProductModel.findById(id)
    if(!product){
      res.status(404).json({msg: "Product not found"})
    }

    const deletedProduct = await ProductModel.findByIdAndDelete(id)
    res.status(200).json(deletedProduct,{msg: "Product deleted successfully"})

  } catch (error) {
    console.log(error)
  }

},

update: async (req, res) => {

  const id = req.params.id
  const product = {
    title: req.body.title,
    code: req.body.code,
    size: req.body.size,
    price: req.body.price
  }

  const updatedProduct = await ProductModel.findByIdAndUpdate(id,product)
  if(!updatedProduct){
    res.status(404).json({msg: "Product not found"})
  }
  res.status(200).json({product, msg:"Product Updated successfully!"})
}





}


module.exports = productController;