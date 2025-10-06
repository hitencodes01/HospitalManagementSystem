import React from "react";
import Cookie from "js-cookie";
import { useEffect, useState } from "react";

export default function AllRequest() {
  // states
  const [prevAppointment, setPrevAppointment] = useState([]);

  useEffect(() => {
    getUserAppointments();
  }, []);

  const getUserAppointments = async () => {
    const response = await fetch(`http://localhost:8000/user/getUser`, {
      method: "POST",
      body: JSON.stringify({ userId: Cookie.get("uId") }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    setPrevAppointment(data.response.request);
  };

  useEffect(() => {
  }, [prevAppointment]);

  const something = () => {
    console.log("first");
  };
  return (
    <div className="w-full max-w-2xl mt-10 bg-white rounded-2xl shadow-xl p-8 animate-fade-in">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-green-700 flex items-center gap-2">
          <span> 🗂️ Previous Appointments</span>
        </h2>
        <button
          onMouseEnter={something}
          className="px-4 py-2 rounded-lg bg-gradient-to-r from-green-400 to-blue-400 text-white font-semibold shadow hover:scale-105 transition-all duration-200"
        >
          <span className="inline-flex items-center gap-1">
            <svg
              width="18"
              height="18"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="inline"
            >
              <circle cx="8" cy="8" r="7" />
              <line x1="15" y1="15" x2="11" y2="11" />
            </svg>
            Filter
          </span>
        </button>
      </div>
      {prevAppointment && prevAppointment.length > 0 ? (
        <ul className="divide-y divide-gray-200">
          {prevAppointment.reverse().map((appointment) => (
            <li
              key={appointment._id}
              className="py-6 flex flex-col bg-gradient-to-r from-blue-50 to-green-50 rounded-xl mb-4 shadow hover:shadow-lg transition-all duration-200"
            >
              <span className="font-semibold text-gray-900 text-lg mb-1">
                {" "}
                🩺 Disease:{" "}
                <span className="text-blue-700">
                  {appointment.disease || "N/A"}
                </span>
              </span>
              <span className="text-gray-700 mb-1">
                {" "}
                📅 Date:{" "}
                <span className="font-medium text-green-700">
                  {new Date(appointment.date_of_request).toLocaleDateString(
                    "en-US",
                    {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    }
                  )}
                </span>
              </span>
              <span className={`text-gray-700 font-medium mb-1`}>
                {appointment.status === "Completed" ? (
                  <span className="bg-green-100 text-green-700 px-2 py-1 rounded-lg">
                    ✔️ Completed
                  </span>
                ) : appointment.status === "Pending" ? (
                  <span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded-lg">
                    {" "}
                    ⏳ Pending
                  </span>
                ) : (
                  <span className="bg-red-100 text-red-700 px-2 py-1 rounded-lg">
                    {" "}
                    {appointment.status || "Pending"}
                  </span>
                )}
              </span>
            </li>
          ))}
        </ul>
      ) : (
        <div className="text-gray-500 text-center py-8 text-lg font-medium">
          <span className="inline-flex items-center gap-2">
            <svg
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="inline"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="8" y1="12" x2="16" y2="12" />
            </svg>
            No previous appointments found.
          </span>
        </div>
      )}
      <style>{`
        .animate-fade-in {
          animation: fadeIn 0.8s ease;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(30px);}
          to { opacity: 1; transform: translateY(0);}
        }
      `}</style>
    </div>
  );
}
