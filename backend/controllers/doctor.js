import Doctor from '../models/model.doctor.js'

export const getDoctors = async (req, res) => {
  const doctors = await Doctor.find({});
  res.json(doctors);
};

export const postDoctor = async (req, res) => {
  const { name, specialization } = await req.body;
  const doctor = await Doctor.create({ name, specialization });
  res.json(doctor);
};

export const getDoctor = async (req, res) => {
  const name = req.params.name;
  const doctor = Doctor.find({ name });
  res.json(doctor);
};
