const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    producto: {
        type: mongoose.Schema.Types.ObjectId,
        //required: true,
        ref: 'Producto'
    },
    name: {
        type: String,
        requerired : [true,' por favor teclea el nombre']
    },
    email:{
        type:String ,  
        required:[ true ,'porfavor ingresa un correo'],
        unique:true
    },
    password:{
        type:String ,
        required:[ true ,'porfavor ingresa una contraseña'],
        unique:true
    },
    

}, {
    timestamps: true
})

module.exports = mongoose.model('User', userSchema)