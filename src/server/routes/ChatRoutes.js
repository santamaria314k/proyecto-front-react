
const express = require('express');

const Chat= require("../models/ChatModel")

// const bcrypt = require('bcrypt');

//definir rutas con la aplicasion principal
const router = express.Router()






router.post(('/'),  async (req,res)=>{
    try{
      
       //guardar el user  del body
      const newChat= await Chat.create(req.body)
      
       return res.status(200).json(
           {
               success:true,
               msg:` Exitoso`,
               data:newChat
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
   






   router.get('/', async (req, res) => {
    try {
      const messages = await Chat.find();
      res.status(200).json({
        success: true,
        msg: 'Mensajes obtenidos exitosamente',
        data: messages
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        msg: `Error encontrado: ${error.message}`
      });
    }
  });

   module.exports=router
