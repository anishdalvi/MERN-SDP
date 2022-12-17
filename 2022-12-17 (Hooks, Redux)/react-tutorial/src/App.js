import React, {memo, useCallback, useEffect, useMemo, useRef, useState} from 'react'
import Item from './Item'

const initialItems = Array(10).fill().map((x, i) => ({
    index: `${i}`,
    text: `Item at index ${i}`
}))
const paginatedItems = Array(10).fill().map((x, i) => ({
    index: `1${i}`,
    text: `Item at index 1${i}`
}))

function App() {

  const [ items, setItems ] = useState(initialItems)

  function addNewItems() {
    setItems((prevItems) => [...prevItems, ...paginatedItems])
  }
  return  <>
   
    
    <button onClick={addNewItems}>Add New Items</button>
    <div>
       {items.map((item, index) => <Item data={item} key={index} />)}
    </div>
  </>
}



export default App;
