import React from 'react'
import { Link } from 'react-router-dom'
export default function RegisterUser() {
  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-8 rounded-lg shadow">
          <h1 className="text-2xl font-bold text-blue-700 mb-6 text-center">User Register</h1>
          <form className="flex flex-col gap-4">
            <label htmlFor="name" className="font-semibold">Username</label>
            <input type="text" id='name' placeholder='Enter your username' className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400" />
            <label htmlFor="user-name" className="font-semibold">Email</label>
            <input type="email" id='user-name' placeholder='Enter your email' className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400" />
            <label htmlFor="password" className="font-semibold">Password</label>
            <input type="password" id='password' placeholder='Enter password' className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400" />
            <button type="submit" className="mt-4 py-2 px-4 bg-blue-500 text-white rounded font-semibold hover:bg-blue-600 transition">Register</button>
          </form>
          <div className="mt-4 text-center">
            <p>Already have an account? <Link to={"/user/login"} className="text-blue-600 hover:underline">LogIn</Link></p>
          </div>
        </div>
  )
}
