import React, { useEffect, useState } from "react";

export default function Patient() {
  const [patientList, setPatientList] = useState([]);
  useEffect(() => {
    getPatients();
  }, []);
  const getPatients = async () => {
    const response = await fetch("http://localhost:8000/patients");
    const data = await response.json();
    setPatientList(data);
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-green-100 flex flex-col items-center p-8">
      <div className="w-full max-w-4xl bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-blue-700 mb-8 text-center drop-shadow">Patient List</h1>
        {/* <h2 className="text-xl font-semibold text-gray-700 mb-6"></h2> */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {patientList.length === 0 ? (
            <div className="col-span-full text-center text-gray-500">No patients found.</div>
          ) : (
            patientList.map((item) => (
              <div key={item._id} className="bg-blue-50 rounded-lg shadow p-6 flex flex-col gap-2">
                <div className="font-bold text-lg text-blue-800">{item.name}</div>
                <div><span className="font-semibold">Age:</span> {item.age}</div>
                {item.disease && <div><span className="font-semibold">Disease:</span> {item.disease}</div>}
                {item.father_name && <div><span className="font-semibold">Father's Name:</span> {item.father_name}</div>}
                {item.date_of_appointment && <div><span className="font-semibold">Date Of Appointment:</span> {item.date_of_appointment}</div>}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
