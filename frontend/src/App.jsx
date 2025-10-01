import { Link } from 'react-router-dom'

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold text-blue-700 mb-8">Hospital Management System</h1>
      <ul className="flex flex-col gap-4 w-full max-w-xs">
        <li>
          <Link to={'/admin'} className="block w-full text-center py-3 rounded-lg bg-blue-500 text-white font-semibold shadow hover:bg-blue-600 transition">Admin</Link>
        </li>
        <li>
          <Link to={'/user'} className="block w-full text-center py-3 rounded-lg bg-green-500 text-white font-semibold shadow hover:bg-green-600 transition">User / Patient</Link>
        </li>
      </ul>
    </div>
  )
}

export default App
