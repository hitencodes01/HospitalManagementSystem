import User from "../../models/model.user.js";
export const getUserById = async (req, res) => {
  const _id = req.params._id;
  const isAdmin = await User.findById(_id);
  if (!isAdmin) {
    res.status(400).json({ error: "user not found" });
  }
  res.status(200).json(isAdmin);
};
