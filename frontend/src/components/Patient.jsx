import React from 'react'
import { useState } from 'react'

export default function Patient() {
    const [name , setName] = useState("")
    const [disease , setDisease] = useState("")
    const [date , setDate] = useState("")
    const [doctor , setDoctor] = useState("")
    const [age , setAge] = useState(0)
    const submitHandler = async(event) => {
        event.preventDefault();
       const response =  await fetch('http://localhost:8000/patient',{
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body :JSON.stringify({name , age, disease , doctor ,date}),
        }
        )
        console.log(await response.json())
    }
  return (
    <>
        <form onSubmit={(e)=>submitHandler(e)}>
            <input type="text" onChange={(e)=>setName(e.target.value)} placeholder='enter name' />
            <br></br>
            <input type="number" onChange={(e)=>setAge(e.target.value)} placeholder='enter age' />
            <br></br>
            <input type="text" onChange={(e)=>setDisease(e.target.value)} placeholder='enter disease' />
            <br></br>
            <input type="date" onChange={(e)=>setDate(e.target.value)} placeholder='enter date' />
            <br></br>
            <input type="text" onChange={(e)=>setDoctor(e.target.value)} placeholder='enter date' />
            <br></br>
            <button type='submit'>Add</button>
        </form>
    </>
  )
}
