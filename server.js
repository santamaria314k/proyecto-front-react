const express = require('express')

const dotenv = require('dotenv')


const connectDB =require('./src/config/db.js')

const cors = require('cors')



// crear el objetro de la aplicasion 

// Permitir solicitudes desde este origen
const app=express()

const corsOptions = {
    origin: 'http://localhost:3000',  
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    optionsSuccessStatus: 204, 
    credentials: true,

};
app.options('/', cors(corsOptions));




//dependencia de formateo  body

app.use(express.json())

connectDB()

//configuracion

dotenv.config({
path:'./config/.env'

})





const usersRoutes = require('./src/routes/UsersRoutes.js')



//crear las uris de los users<<<<<<<<<<<<<<<<<<<<<
app.use('/users',usersRoutes)



// definir el puerto del servidor 

const puertoExpress = process.env.PUERTO_EXPRESS || 4500;

//DIFINIR EL SERVIDOR 

app.listen( puertoExpress,console.log(`servidor ejecutando en express ${ puertoExpress } `.bgBlue.white) )


