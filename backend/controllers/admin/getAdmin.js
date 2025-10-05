import Admin from "../../models/mode.admin.js"

export const getAdmin = async(req,res)=>{
    const _id = req.params._id
    const isAdmin = await Admin.findById(_id)
    if(!isAdmin){
        res.status(400).json({error : "admin not found"})
    }
    res.status(200).json(isAdmin)
}