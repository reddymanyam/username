import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './redux/slice/counterSlice';

const Counter = () => {

  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
   
    <div style={{backgroundColor:"lightblue",paddingRight:"50px"}}>
      <h3>Counter:{value}</h3>
      <div>
        <button onClick={()=> dispatch(increment())} >Increment</button>
        <button >Decrement</button>
      </div>
    </div>

)
}

export default Counter
