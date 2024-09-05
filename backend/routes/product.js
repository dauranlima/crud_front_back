const router = require('express').Router()

const productController = require('../controllers/productController')

router.route('/product').post((req,res)=> productController.create(req,res))

// router.route('/product').get(()=> productController.getAll(req,res))

// router.route('/product').get(()=> productController.get(req,res))

// router.route('/product').delete(()=> productController.delete(req,res))

// router.route('/product').put(()=> productController.update(req,res))


module.exports = router;