import React, {useEffect} from 'react'

const Card = ({name}) => {

 

  return (
    <div className='bg-secondary text-light p-5 border rounded mx-4 my-2 ' style={{width:"29%"}} >
      <h5>{name}</h5>
      <p>Desc</p>
      <button className='btn btn-danger'>Delete</button>
    </div>
  )
}

export default Card
