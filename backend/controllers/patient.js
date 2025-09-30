import Patient from "../models/model.patient.js";

export const getPatients = async (req, res) => {
  const patients = await Patient.find();
  res.json(patients);
};

export const getPatient = async (req, res) => {
  const name = req.params.name
  const patient = await Patient.find({name:name});
  console.log(patient)
  res.json(patient);
};


export const postPatient = async (req, res) => {
  const { name, age } = req.body;
  try {
    const patient = await Patient.create({ name, age });
    console.log(patient);
    res.json(patient);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
