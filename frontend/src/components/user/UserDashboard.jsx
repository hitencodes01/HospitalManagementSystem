import { Link } from "react-router-dom";
import AllRequest from "./AllRequest";
import UserInfo from "./UserInfo";

export default function UserDashboard() {
  const something = () => {
    console.log("first");
  };

  return (
    
    <div className="min-h-screen bg-gradient-to-br from-blue-200 via-white to-green-200 flex flex-col items-center p-8">
      <div className="details">
        {/* <UserInfo /> */}
      </div>
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl p-10 flex flex-col items-center animate-fade-in">
        <h1 className="text-4xl font-extrabold text-blue-800 mb-8 text-center drop-shadow-lg tracking-wide">
          User Dashboard
        </h1>
        <Link
          to={"/user/dashboard/new-appointment"}
          className="block w-full text-center py-3 rounded-xl bg-gradient-to-r from-blue-500 to-green-400 text-white font-bold shadow-lg hover:scale-105 hover:from-blue-600 hover:to-green-500 transition-all duration-200 mb-6"
        >
          + Book New Appointment
        </Link>
      </div>
      <AllRequest/>
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
