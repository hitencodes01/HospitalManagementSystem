import React, { useState } from "react";

export default function Doctor() {
  const [name, setName] = useState("");
  const [specialization, setSpecialization] = useState("");
  const submitHandler = async (event) => {
    event.preventDefault();
    const response = await fetch("http://localhost:8000/doctor", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, specialization }),
    });
    console.log(await response.json());
  };
  return (
    <>
      <form onSubmit={(e) => submitHandler(e)}>
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          placeholder="enter name"
        />
        <br></br>
        <input
          type="text"
          onChange={(e) => setSpecialization(e.target.value)}
          placeholder="enter specialization"
        />
        <br></br>
        <button type="submit">Add</button>
      </form>
    </>
  );
}
