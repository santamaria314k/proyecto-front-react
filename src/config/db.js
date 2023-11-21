const colors =require('colors')
const mongoose=require('mongoose')






async function connectDB(){


 const conn = await mongoose.connect(process.env.MONGO_URL || 'mongodb://127.0.0.1:27017/tikets')

console.log(`conexion exitosa a mongo :   ${conn.connection.host}`)

 }



 module.exports=connectDB