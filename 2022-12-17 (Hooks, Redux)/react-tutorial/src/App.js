import './App.css';
import{ useState, useRef } from 'react'


function App() {

  const [counter, setCounter] = useState(0)
  const counterRef = useRef(200)
  const inputRef = useRef()

  // const counterData = useState(0)         // other way of writing Use State
  // console.log(counterData)

  function Increment(){
    //setCounter(counter + 1)     // simple increment by 1
    setCounter((count) =>count + 1)     // double increment using call back
    setCounter((count) =>count + 1)
  }
  function Decrement(){
    setCounter(counter - 1)
  }

  function incrementCountRef() {
    counterRef.current = counterRef.current + 1
    console.log("Counter Ref: ", counterRef.current)
  }
  function decrementCountRef() {
    counterRef.current = counterRef.current - 1
    console.log("Counter Ref: ", counterRef.current)
  }

  function inputButtonClicked(){
    console.log(inputRef)
  }
  console.log("Counter Ref: ", counterRef.current)
  return (
    <div className="App">
        <button onClick={incrementCountRef}>+</button>
        <p>{counterRef.current}</p>
        <button onClick={decrementCountRef}>-</button>
        <br />
        <MyCustomInputComponent inputRef = {inputRef} /> 
        <button onClick={inputButtonClicked}>Click Button</button>
    
    </div>
  );

  function MyCustomInputComponent(props){
    return <input ref={props.inputRef} />
  }
}

export default App;
