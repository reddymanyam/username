import React, { useState } from 'react'

const Counter = () => {

  const [count, setCount] = useState(0)
  return (
   
    <div style={{backgroundColor:"lightblue",paddingRight:"50px"}}>
      <h3>Counter:{count}</h3>
      <div>
        <button onClick={() => setCount(count+1)}>Increment</button>
        <button onClick={() => setCount(count-1)}>Decrement</button>
      </div>
    </div>

)
}

export default Counter
