import React from 'react'
import { useState } from 'react'

export default function Patient() {
    const [name , setName] = useState("")
    const [age , setAge] = useState(0)
    const submitHandler = async(event) => {
        event.preventDefault();
       const response =  await fetch('http://localhost:8000/patient',{
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body :JSON.stringify({name , age}),
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
            <button type='submit'>Add</button>
        </form>
    </>
  )
}
