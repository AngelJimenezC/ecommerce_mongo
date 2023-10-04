const express = require('express')
const router = express.Router()
const { getProducto, setProducto, updateProducto, deleteProducto } = require('../controllers/productosControllers')
const {protect} = require('../middleware/authMiddleware')

router.get('/',  getProducto)
router.post('/',protect, setProducto)

router.put('/:id',protect, updateProducto)
router.delete('/:id',protect, deleteProducto)

module.exports = router