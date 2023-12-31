const express = require('express')

const dotenv = require('dotenv')

const bodyParser = require('body-parser');

const connectDB =require('./src/config/db.js')

const cors = require('cors')




// crear el objetro de la aplicasion 

// Permitir solicitudes desde este origen
const app=express()

const corsOptions = {
    origin: 'http://localhost:3000',  
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    optionsSuccessStatus: 200, 
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization'],

};



app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type,Authorization');
    res.header('Access-Control-Allow-Credentials', true);
    next();
  });
  

app.options('/', cors(corsOptions));



app.use(bodyParser.json());


//dependencia de formateo  body

app.use(express.json())

connectDB()

//configuracion

dotenv.config({
path:'./config/.env'

})









//crear las uris de los users<<<<<<<<<<<<<<<<<<<<<

const usersRoutes = require('./src/server/routes/UsersRoutes.js')

const chatRoutes = require('./src/server/routes/ChatRoutes.js')

const citasRoutes= require('./src/server/routes/CitasRoutes.js')

app.use('/users',usersRoutes)

app.use('/users/login',usersRoutes)


app.use('/chat',chatRoutes)

app.use('/citas', citasRoutes)
// definir el puerto del servidor 

const puertoExpress = process.env.PUERTO_EXPRESS || 4500;

//DIFINIR EL SERVIDOR 

app.listen( puertoExpress,console.log(`servidor ejecutando en express ${ puertoExpress } `.bgBlue.white) )


