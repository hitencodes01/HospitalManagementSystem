import React, { useEffect, useState } from "react";
import Cookie from "js-cookie";

export default function UserInfo() {
  const [userData, setUserData] = useState({});
  const [age, setAge] = useState(0);
  const [fname, setfname] = useState("");
  const [file, setFile] = useState(null);
  return (
    <div>
      <label>Name </label>
      <input type="text" value={userData.name || "name not found"} readOnly />
      <label>E-mail </label>
      <input type="text" value={userData.email || "email not found"} readOnly />
      <label>Age </label>
      <input
        type="number"
        onChange={(e) => setAge(e.target.value)}
        value={age}
      />
      <label>Father's Name </label>
      <input
        type="text"
        onChange={(e) => setfname(e.target.value)}
        value={fname}
      />
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button>Update</button>
    </div>
  );
}
