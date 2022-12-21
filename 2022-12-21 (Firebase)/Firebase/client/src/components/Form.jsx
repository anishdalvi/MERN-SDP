import React, { useState } from 'react'
import { collection, addDoc } from "firebase/firestore"; 
import {db} from '../../Firebase'

function Form() {

  const [taskName, setTaskName] = useState('')
  const [taskDesc, setTaskDesc] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    const res = await addDoc(collection(db,"tasks"), {
      taskName : taskName,
      taskDesc : taskDesc
    })
    console.log(res.id)
  }

  return (
    <form className='form-control py-3' >

    
      <input onChange={(e) => setTaskName(e.target.value)} className='form-control' placeholder='Task Name'/>
      <textarea onChange={(e) => setTaskDesc(e.target.value)} className='form-control mt-3' placeholder='Description'></textarea>


      <button onClick={handleSubmit} className='btn btn-success px-5 py-2 mt-3'>Add</button>
    </form>
  )
}

export default Form
