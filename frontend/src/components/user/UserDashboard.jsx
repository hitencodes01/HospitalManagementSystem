import LInkButton from '../LInkButton.jsx'
import { Outlet } from 'react-router-dom'

export default function UserDashboard() {
  const getUserAppointments = async () => {
    // await fetch(`http://localhost:8000/patients/${}`)
  }
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-green-100 flex flex-col items-center p-8">
      <div className="w-full max-w-2xl bg-white rounded-xl shadow-lg p-8 flex flex-col items-center">
        <h1 className="text-3xl font-bold text-blue-700 mb-8 text-center drop-shadow">User Dashboard</h1>
        <LInkButton
          to={'/user/dashboard/new-appointment'}
          text={"New Appointment"}
          className="block w-full text-center py-3 rounded-lg bg-blue-500 text-white font-semibold shadow hover:bg-blue-600 transition mb-6"
        />
        <Outlet />
      </div>
    </div>
  )
}
