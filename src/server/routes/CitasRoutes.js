
const express = require('express');

const Cita= require("../models/CitasModel")

// const bcrypt = require('bcrypt');

//definir rutas con la aplicasion principal
const router = express.Router()



//traer  las citas en base de datos


router.get(('/'), async (req,res)=>{
    const citas= await Cita.find()
    return res.json(
        {
            success:true,
             data:citas
        }
    )

})




//2.crear  citas

router.post(('/'),  async (req,res)=>{
    try{
      
       //guardar el user  del body
      const newCita= await Cita.create(req.body)
      
       return res.status(200).json(
           {
               success:true,
               msg:`Registro Exitoso`,
               data:newCita
           }
       )
   
   }catch(error) {
           
       res.status(500).json({
       success:false,
       msg:`Èrror encontrado: ${error.message}`
       
       })
       
       
         }
       
       }
   )
   












   

module.exports=router
