import React, {memo, useCallback, useEffect, useMemo, useRef, useState} from 'react'

const initialItems = Array(10).fill().map((x, i) => ({
    index: `${i}`,
    text: `Item at index ${i}`
}))
const paginatedItems = Array(10).fill().map((x, i) => ({
    index: `${i}`,
    text: `Item at index ${i}`
}))

function App() {

  const [ items, setItems ] = useState(initialItems)

  function addNewItems() {
    setItems((prevItems) => [...prevItems, ...paginatedItems])
  }
  return  <>
   
    
    <button onClick={addNewItems}>Add New Items</button>
    <div>
       {items.map((item) => <Item data={item} key={item.index} />)}
    </div>
  </>
}



export default App;