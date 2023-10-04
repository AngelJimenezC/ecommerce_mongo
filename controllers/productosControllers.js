
const asyncHandler = require ('express-async-handler')
const Producto = require ('../models/productosModel')


const getProducto = asyncHandler(async (req, res) => {
    const producto = await Producto.findById({ user: req.user.id });
    console.log(producto)
    res.status(200).json(producto)
    //{ user: req.user.id }
})

const setProducto = asyncHandler( async (req, res) => {
    const producto = await Producto.create({
        name: req.body.name,
        categoria: req.body.categoria,
        precio: req.body.precio,
        marca: req.body.marca,
        stock: req.body.stock,
        imageUrl: req.body.imageUrl,
        user: req.user.id
    })
    res.status(201).json(producto)
})

const updateProducto = asyncHandler( async (req, res) => {

    const producto = await Producto.findById(req.params.id)

    if (!producto) {
        res.status(404)
        throw new Error('el producto no fué encontrado')
    }

    //verificar el producto pertenezca al usuario logeado
    if (producto.user.toString() !== req.user.id) {
        res.status(401)
        throw new Error('Acceso no autorizado')
    } else {
        const updateProducto = await Producto.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.status(200).json(updateProducto)
    }
})

const deleteProducto = asyncHandler( async (req, res) => {
    const producto = await Producto.findById(req.params.id)

    if (!producto) {
        res.status(404)
        throw new Error('La tarea no fué encontrada')
    }


    if (producto.user.toString() !== req.user.id) {
        res.status(401)
        throw new Error('Acceso no autorizado')
    } else {
        producto.deleteOne()
        //const deletedTarea = await Tarea.findByIdAndDelete(req.params.id)

        res.status(200).json({ id: producto._id })
    }

})

module.exports = {
    getProducto, 
    setProducto, 
    updateProducto, 
    deleteProducto

}