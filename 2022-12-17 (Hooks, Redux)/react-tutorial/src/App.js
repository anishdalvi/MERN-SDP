import './App.css';
import{ useEffect, useState, useMemo} from 'react'

const agc = {
  
}
function App() {

  const [dummyValue , dummy] = useState(true)
  const [ count, setCount] = useState(0)
  
  const memoizedCount = useMemo(() => count, [])
  
  function updateCount(){
    setCount((x) => x+1)
  }

  console.log( "Memoized Count: ", memoizedCount)

  return (
    <div className="App">
        
    <button onClick={updateCount}>
      Update Count
    </button>
    {count}
    
    </div>
  );

  
}

export default App;
