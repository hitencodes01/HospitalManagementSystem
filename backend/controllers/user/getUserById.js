import User from "../../models/model.user.js";



export const getUserById = async (req, res) => {
  const _id = req.params._id;
  const isUser = await User.findById(_id);
  if (!isUser) {
    res.status(400).json({ error: "user not found" });
  }
  res.status(200).json(isUser);
};

export const updateUser = async (req, res) => {
  const _id = req.params._id;
  const { age, father_name } = req.body;
  console.log(req.body);
  const isUser = await User.findByIdAndUpdate(
    _id,
    { age , father_name },
    { new: true }
  );
  if (!isUser) {
    res.status(404).json({ error: "user not found" });
  }
  res.status(200).json({ message: "User Updated" });
};
