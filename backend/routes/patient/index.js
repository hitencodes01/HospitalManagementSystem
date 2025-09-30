import express from "express";
import { getPatient, getPatients, postPatient } from "../../controllers/patient.js";

const router = express.Router();
router.use(express.json())

router.get("/", getPatients);
router.post("/", postPatient);
router.get("/:name",getPatient)
export default router;
