import React from 'react'
import Card from '../components/Card'
import Form from '../components/Form'
const Home = ({todos}) => {

  

  return (
    <div className='container'>



    <h1 className='p-5 text-center'>Task Dashboard</h1>

    <Form/>


    <div className='d-flex p-5 flex-wrap justify-content-between '>
    
    {
      todos.map((t) => <Card name={t.taskName} />)
    }
    {console.log(todos)}
    
   
    
    </div>

 
    </div>
  )
}

export default Home
