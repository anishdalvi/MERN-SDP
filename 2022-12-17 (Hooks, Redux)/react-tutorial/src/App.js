import './App.css';
import{ useEffect, useState } from 'react'


function App() {

  const [ , dummy] = useState(true)
  const [ count, setCount] = useState(true)
  useEffect(() =>{
    console.log("Use Effect Called with empty dependencies")
    // With Empty dependency array this will print in console only 1 time
    // Due to strict mode it console 2 times
    // Removinh strict mode from index.js will print in console
  }, [])
  useEffect(() =>{
    console.log("Use Effect Called without any dependencies")
    // Without any dependency array this will print in console only 1 time
    // Due to strict mode it console 2 times
  })



  return (
    <div className="App">
        <button onClick={() => dummy((x) => (!x))}>
          Click Me
        </button>
    
    </div>
  );

  
}

export default App;
