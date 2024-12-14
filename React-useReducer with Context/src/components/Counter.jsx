import { useContext } from "react"
import { DispatchContext, StateContext } from "../context/context"

/* eslint-disable react/prop-types */
const Counter = () => {
  const state = useContext(StateContext);
  const dispatch = useContext(DispatchContext);
  return (
    <div className="p-5">
        <h1 className="text-4xl font-semibold"> Counter App </h1>
        <h3 className="text-[22px] mt-6 mb-6">Counter Value : {state.count} </h3>
        <button onClick={()=>{state.count <= 0 ? alert("can not decrement below 0") : dispatch({type: "DECREMENT"})}} className="px-6 py-3 bg-orange-400 text-white font-bold">Decrement</button>
        <button onClick={()=>{dispatch({type: "INCREMENT"})}} className="px-6 py-3 bg-blue-400 text-white font-bold ml-4">Increment</button>
    </div>
  )
}

export default Counter