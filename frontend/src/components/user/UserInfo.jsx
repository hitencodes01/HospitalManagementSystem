import React, { useEffect, useState } from "react";
import Cookie from "js-cookie";

export default function UserInfo() {
  useEffect(() => {
    getUser();
  }, []);
  const [userData, setUserData] = useState();
  const getUser = async () => {
    const res = await fetch("http://localhost:8000/user/getUser", {
      method: "POST",
      body: JSON.stringify({ userId: Cookie.get("uId") }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json().response;
    console.log(data)
    setUserData(data)
  };
  const [age, setAge] = useState();
  const [father_name, setFather_name] = useState();
  const updateUser = async () => {
    const response = await fetch(
      `http://localhost:8000/user/update/${Cookie.get("uId")}`,
      {
        method: "POST",
        body: JSON.stringify({ age, father_name }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response.status === 200) {
      console.log(await response.json());
    }
  };

  useEffect(() => {console.log(userData.name)}, [userData, setUserData]);

  return (
    <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 mt-8">
      <h2 className="text-2xl font-bold text-blue-700 mb-6 text-center">
        Your Info
      </h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          updateUser();
        }}
        className="flex flex-col gap-4"
      >
        {/* <label className="font-semibold">Name</label>
        <input
          type="text"
          value={
            userData.name.charAt(0).toUpperCase() + userData.name.slice(1) || ""
          }
          readOnly
          className="border rounded px-3 py-2 bg-gray-50"
        />

        <label className="font-semibold">E-mail</label>
        <input
          type="text"
          value={userData.email || ""}
          readOnly
          className="border rounded px-3 py-2 bg-gray-50"
        /> */}

        <label className="font-semibold">Age</label>
        <input
          type="number"
          onChange={(e) => setAge(e.target.value)}
          className="border rounded px-3 py-2"
        />

        <label className="font-semibold">Father's Name</label>
        <input
          type="text"
          onChange={(e) => setFather_name(e.target.value)}
          className="border rounded px-3 py-2"
        />

        <button
          type="submit"
          className="mt-4 py-2 px-4 bg-blue-500 text-white rounded font-semibold hover:bg-blue-600 transition"
        >
          Update
        </button>
      </form>
    </div>
  );
}
