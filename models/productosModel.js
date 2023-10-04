const mongoose = require('mongoose')

const productosSchema = mongoose.Schema({
    name: {
        type: String,
        requerired : [true,' por favor teclea el nombre']
    },
    categoria:{
        type:String ,  
        required:[ true ,'porfavor ingresa una categoria'],
        
    },
    precio:{
        type:Number ,
        required:[ true ,'porfavor ingresa el precio'],
        
    },
    marca:{
        type:String ,
        required:[ true ,'porfavor ingresa la marcao'],
        
    },
    stock:{
        type:Number ,
        required:[ true ,'porfavor ingresa el numero de productos en stock'],
        
    },
    imageUrl:{
        type: String, 
        required:[ true ,'porfavor ingresa la URL'],
    },

}, {
    timestamps: true
})

module.exports = mongoose.model('Producto', productosSchema)