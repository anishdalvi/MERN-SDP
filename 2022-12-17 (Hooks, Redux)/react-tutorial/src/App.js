import './App.css';
import{ useEffect, useState, useRef } from 'react'


function App() {

  const [dummyValue , dummy] = useState(true)
  const [ count, setCount] = useState(0)
  const counterRef = useRef(200)
  useEffect(() =>{
    console.log("Use Effect Called with empty dependencies")
    // With Empty dependency array this will print in console only 1 time
    // Due to strict mode it console 2 times
    // Removing strict mode from index.js will print in console
  }, [])
  useEffect(() =>{
    console.log("Use Effect Called without any dependencies")
    // Without any dependency array this will print in console only 1 time
    
  })
  useEffect(() =>{
    console.log("Use Effect Called with one dependency (count)")
  }, [count])

  // useRef works without current in dependency

  // useEffect(() => {
  //   console.log("Use Effect with ref dependency")
  // }, [counterRef])

  useEffect(() => {
    console.log("Use Effect with ref dependency")
  }, [counterRef])



  return (
    <div className="App">
        <button onClick={() => dummy((x) => (!x))}>
          Click Me
        </button>
        <button onClick={() => setCount((x) => (x + 1))}>
          Update Count
        </button>
        <button onClick={() => {
          counterRef.current = counterRef.current + 1
        }}>
          Update Ref Count
        </button>
        <p>Dummy State : { dummyValue}, Count State : { count } </p>

    
    </div>
  );

  
}

export default App;
