import { useEffect, useState } from "react";
import Patient from "./Patient.jsx";

export default function AdminDashboard() {
  const [doctorList, setDoctorList] = useState([]);
  const [appointmentList, setAppointmentList] = useState([]);
  return (
    <>
      <Patient />
    </>
  );
}
