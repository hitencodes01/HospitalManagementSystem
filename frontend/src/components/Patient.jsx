import React from 'react'
import { useState } from 'react'

export default function Patient() {
    const [name , setName] = useState("")
    const [age , setAge] = useState(0)
    const submitHandler = async() => {
       const response =  await fetch('http://localhost:8000/patient',{
            method : "POST",
            body : {
                name : name,
                age : age
            }
        })
        console.log(await response.json())
    }
  return (
    <>
        <form action="">
            <input type="text" onChange={(e)=>setName(e.target.value)} placeholder='enter name' />
            <br></br>
            <input type="number" onChange={(e)=>setAge(e.target.value)} placeholder='enter age' />
            <br></br>
            <button onClick={()=>submitHandler()}>Add</button>
        </form>
    </>
  )
}
