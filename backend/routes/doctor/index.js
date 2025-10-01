import express from "express";
import { getDoctor, getDoctors, postDoctor } from "../../controllers/doctor.js";

const router = express.Router();
router.use(express.json());

router.get("/", getDoctors);

router.post("/", postDoctor);

router.get("/:name", getDoctor);

export default router