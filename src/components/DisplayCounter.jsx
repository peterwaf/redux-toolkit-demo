// eslint-disable-next-line no-unused-vars
import React from 'react'
import {useSelector, useDispatch } from "react-redux"
import { increment, decrement, reset } from "../features/counterSlice";
function DisplayCounter() {
    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();
    

  return (
    <div>
        <button onClick={()=>dispatch(decrement())}>-</button>
        <span>{count}</span>
        <button onClick={()=>dispatch(increment())}>+</button>
        <button onClick={()=>dispatch(reset())}>reset</button>
    </div>
  )
}

export default DisplayCounter