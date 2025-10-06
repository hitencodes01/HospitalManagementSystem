import User from "../../models/model.user.js";
export const getUser = async(req,res)=>{
    const { userId } = req.body;
  console.log(req.body);
  let response
  try {
     response = await User.findOne({
      _id : userId
    }).populate("request");
    
  } catch (e) {
    console.log(e);
  }
  res.status(200).json({response});
}