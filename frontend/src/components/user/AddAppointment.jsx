import React, { useState } from "react";

export default function AddAppointment() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [disease, setDisease] = useState("");
  const [fname, setFName] = useState("");
  const [date, setDate] = useState("");
  const [get_appointment, setGet_appointment] = useState(false);

  const postData = async () => {
    const response = await fetch("http://localhost:8000/patients", {
      method: "POST",
      body: JSON.stringify({
        name,
        age,
        disease,
        father_name: fname,
        date_of_appointment: date,
        get_appointment: get_appointment,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(await response.json());
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-green-100 flex flex-col items-center justify-center p-8">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-2xl font-bold text-blue-700 mb-6 text-center drop-shadow">Book New Appointment</h1>
        <form
          className="flex flex-col gap-4"
          onSubmit={(e) => {
            e.preventDefault();
            postData();
          }}
        >
          <label htmlFor="name" className="font-semibold">Name</label>
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            id="name"
            placeholder="Enter patient's Name"
            className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <label htmlFor="age" className="font-semibold">Age</label>
          <input
            onChange={(e) => setAge(e.target.value)}
            type="number"
            id="age"
            placeholder="Enter patient's Age"
            className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <label htmlFor="disease" className="font-semibold">Disease</label>
          <input
            onChange={(e) => setDisease(e.target.value)}
            type="text"
            id="disease"
            placeholder="Enter patient's disease"
            className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <label htmlFor="fname" className="font-semibold">Father's Name</label>
          <input
            onChange={(e) => setFName(e.target.value)}
            type="text"
            id="fname"
            placeholder="Enter patient's father name"
            className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <label htmlFor="date" className="font-semibold">Date</label>
          <input
            onChange={(e) => setDate(e.target.value)}
            type="date"
            id="date"
            className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            type="submit"
            className="mt-4 py-2 px-4 bg-blue-500 text-white rounded font-semibold hover:bg-blue-600 transition"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
