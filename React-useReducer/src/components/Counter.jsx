/* eslint-disable react/prop-types */
const Counter = (props) => {
  return (
    <div className="p-5">
        <h1 className="text-4xl font-semibold"> Counter App </h1>
        <h3 className="text-[22px] mt-6 mb-6">Counter Value : {props.count} </h3>
        <button onClick={props.clickHandler} className="px-6 py-3 bg-orange-400 text-white font-bold">Decrement</button>
        <button onClick={props.clickHandler} className="px-6 py-3 bg-blue-400 text-white font-bold ml-4">Increment</button>
    </div>
  )
}

export default Counter