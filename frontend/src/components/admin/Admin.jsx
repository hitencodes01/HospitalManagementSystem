import React from 'react'
import LInkButton from '../LInkButton'

export default function Admin() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-green-100 flex flex-col items-center justify-center p-8">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-md p-8 flex flex-col items-center">
        <h1 className="text-3xl font-bold text-blue-700 mb-6 text-center drop-shadow">Admin Panel</h1>
        <div className="flex flex-col gap-6 w-full">
          <LInkButton to={"/admin/login"} text={"Admin LogIn"} className="block w-full text-center py-3 rounded-lg bg-blue-500 text-white font-semibold shadow hover:bg-blue-600 transition" />
          <LInkButton to={"/admin/register"} text={"Admin Register"} className="block w-full text-center py-3 rounded-lg bg-green-500 text-white font-semibold shadow hover:bg-green-600 transition" />
        </div>
      </div>
    </div>
  )
}
