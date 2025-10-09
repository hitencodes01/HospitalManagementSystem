import express from "express";
import { registerUser } from "../../controllers/user/userRegister.js";
import { userLogin } from "../../controllers/user/userLogin.js";
import { createRequest } from "../../controllers/user/createRequest.js";
import { getUser } from "../../controllers/user/getRequest.js";
import { getUserById, updateUser } from "../../controllers/user/getUserById.js";

const router = express.Router();

router.use(express.json());

router.post("/register", registerUser);  
router.post("/login", userLogin);
router.post("/user-appointment", createRequest);
router.post("/getUser", getUser);
router.get("/:_id", getUserById);
router.post("/update/:_id", updateUser);

export default router;
