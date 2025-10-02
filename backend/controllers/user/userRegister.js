import User from '../../models/model.user.js'

export const registerUser = async(req,res)=>{
    const {name , email , password} = await req.body;
    const emailExist = await User.find({email})
    if(!emailExist){
        res.json({error : "email already exist"})
    }
   const response = await User.create({name , email , password})
   if(!response){
    res.status(400).json({error : "cannot registered admin"})
   }
   res.status(201).json({message : `${email} succesfully registered`})
}