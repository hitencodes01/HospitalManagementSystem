import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Cookie from 'js-cookie'
export default function LogInAdmin() {
  
  const navigate = useNavigate();
  const [email,setEmail] = useState("")
  const [password ,setPassword] = useState("")
  useEffect(()=>{
    (async()=>{
      if(Cookie.get("aId")){
        const response = await fetch(`http://localhost:8000/admin/getAdmin/${Cookie.get("aId")}`)
        if(response.status===200){
          const data = await response.json()
          setEmail(data.email)
          setPassword(data.password)
        }
      }
    })()
  },[])
  const handleLogin = async () => {
    const response = await fetch("http://localhost:8000/admin/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
      credentials : "include"
    });
    if(response.status === 200){
      const data = await response.json()
      Cookie.set("aId" ,data.aId)
      navigate("/admin/dashboard");
    }
    console.log(response.error)
  };
  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-8 rounded-lg shadow">
      <h1 className="text-2xl font-bold text-blue-700 mb-6 text-center">
        Login as Admin
      </h1>
      <form className="flex flex-col gap-4" onSubmit={(e)=>{e.preventDefault();handleLogin()}}>
        <label htmlFor="user-name" className="font-semibold">
          Email
        </label>
        <input
          type="email"
          id="user-name"
          value={email}
          placeholder="Enter your email"
          onChange={(e)=>setEmail(e.target.value)}
          className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <label htmlFor="password" className="font-semibold">
          Password
        </label>
        <input
          type="password"
          id="password"
          value={password}
          placeholder="Enter password"
          onChange={(e)=>setPassword(e.target.value)}
          className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          type="submit"
          className="mt-4 py-2 px-4 bg-blue-500 text-white rounded font-semibold hover:bg-blue-600 transition"
        >
          Login
        </button>
      </form>
      <div className="mt-4 text-center">
        <p>
          New account?{" "}
          <Link
            to={"/admin/register"}
            className="text-blue-600 hover:underline"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}
