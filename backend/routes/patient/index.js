import express from "express";
import Patient from "../../models/model.patient.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const patients = await Patient.find();
  console.log(patients);
  res.json(patients);
});

router.post("/", async (req, res) => {
  const { name, age } = req.body;
  try {
    const patient = await Patient.create({ name, age });
    console.log(patient);
    res.json(patient);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
export default router;
