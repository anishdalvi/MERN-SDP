import './App.css';
import{ useState } from 'react'


function App() {
  const [input, setInput] = useState("")
  return (
    <div className="App">
        
        <input value={input} onChange={(e) => setInput(e.target.value)}></input>
        <p>User Typed {input}</p>
    </div>
  );
}

export default App;
