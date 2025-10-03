import Admin from '../../models/mode.admin.js'

export const adminLogin = async (req, res) => {
    const { email, password } = req.body;
    const user = await Admin.findOne({ email });
    if (!user) {
        return res.status(404).json({ error: "admin does not exist" });
    }
    if (user.password !== password) {
        return res.status(401).json({ error: "email or password is incorrect" });
    }
    req.session.admin = {
      id: user._id,
      email: user.email,
    };
    res.status(200).json({ message: "welcome" ,admin: req.session.admin });
}