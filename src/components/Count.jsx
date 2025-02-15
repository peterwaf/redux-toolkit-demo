// eslint-disable-next-line no-unused-vars
import React from 'react'
import { useSelector, useDispatch } from "react-redux"
import { increment, decrement, reset } from "../features/countSlice"
function Count() {
    const count = useSelector((state) => state.count.count);
    const dispatch = useDispatch();
  return (
    <div className="count-div">
        <button onClick={()=>dispatch(decrement())}>-</button>
        <span>
            {count}
        </span>
        <button onClick={()=>dispatch(increment())}>+</button>
        <button onClick={()=>dispatch(reset())}>Reset</button>
    </div>
  )
}

export default Count