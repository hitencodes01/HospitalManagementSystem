import User from '../../models/model.user.js'

export const userLogin = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
        return res.status(404).json({ error: "user does not exist" });
    }
    if (user.password !== password) {
        return res.status(401).json({ error: "email or password is incorrect" });
    }
    res.status(200).json({ message: "welcome", uId : user._id });
}