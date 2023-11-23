
const express = require('express');

const User= require("../models/usersModel.js")


//definir rutas con la aplicasion principal
const router = express.Router()


//utilizar el ruteador para crear las rutas 




//1.seleccionar todos los users



router.get(('/'), async (req,res)=>{
    //traer  los users en base de datos
    const users= await User.find()
    return res.json(
        {
            success:true,
             data:users
        }
    )

})


//2.seleccionar el user cuyo id se pase por parametro 



router.get('/:id',async (req,res)=>{

   const userId=req.params.id
    //consultar user po id
  const  user= await User.findById(userId)


return res.json(
    {
    success:true,
     data:user

    }
)


})









//3.crear  los users

router.post(('/'),  async (req,res)=>{
 try{
   
    //guardar el user  del body
   const newUser= await User.create(req.body)
   
    return res.status(200).json(
        {
            success:true,
            msg:`Registro Exitoso`,
            data:newUser
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








//4. actulizar  users por id
router.put('/:id', async (req, res) => {
    const userId = req.params.id;
  
    try {
      const updUser = await User.findByIdAndUpdate(
        userId,
        req.body,
        {
          new: true,
        }
      );
  
      return res.json({
        success: true,
        data: updUser,
      });
    } catch (error) {
      console.error('Error al actualizar el usuario:', error);
      return res.status(500).json({
        success: false,
        error: 'Error interno del servidor',
      });
    }
  });





//4. eliminar   users por id
router.delete('/:id',async (req,res)=>{

   const userId=req.params.id
    
   await User.findByIdAndDelete(userId)

return res.json(
    {
    success:true,
data:[]
    }
)


})








module.exports=router












