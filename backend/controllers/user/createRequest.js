import User from "../../models/model.user.js";
import Request from "../../models/model.request.js";

export const createRequest = async (req, res) => {
  const { name, age, disease, userId } = req.body;
  console.log(req.body);
  let response
  try {
     response = await Request.create({
      name,
      age,
      disease,
      date_of_request: Date.now(),
      userId,
    });
    await User.updateOne(
      { _id: userId }, // filter condition
      { $push: { request: response._id } } // fields to update
    );
  } catch (e) {
    console.log(e);
  }
  res.status(200).json({ message: "welcome", response });
};
