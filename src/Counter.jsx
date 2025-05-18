import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset } from './redux/slice/counterSlice';

const Counter = () => {

  const count = useSelector((state) => state.counter.value);   // here counter is the reducer stored in the store
  const dispatch = useDispatch();

  return (
   
    <div style={{backgroundColor:"lightblue",paddingRight:"50px"}}>
      <h3>Counter:{count}</h3>
      <div>
        <button onClick={()=> dispatch(increment())} >Increment</button>
        <button onClick={()=> dispatch(decrement())}>Decrement</button>
        <button onClick={()=> dispatch(reset())}>Reset</button>
      </div>
    </div>

)
}

export default Counter
