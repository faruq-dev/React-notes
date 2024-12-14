import { useState } from "react";

const Counter = () => {
  let [count, setCount] = useState({value: 0, op: true}); //useState একটা অ্যারে রিটার্ন করে, তাকে Destructure করা হলো (setcount is a function here)

  const changeHandler = (increment = false) => {
    if (increment) {
      setCount({
        ...count,
        value: count.value + 1,
      });
      
    } else {
      setCount({
        value: count.value - 1,
      });
    }
  };
  

  return (
    <div className="counter-div">
      <h1 className="text-center text-5xl font-bold mb-11">Counter APP v2</h1>

      <div className="counter-display">Count Value: {count.value} </div>

      <button
        onClick={() => changeHandler(true)}
        className="px-8 py-3 bg-[#6744e4] rounded-lg text-white font-medium"
      >
        Increament
      </button>

      <button
        onClick={() => changeHandler(false)}
        className="px-8 py-3 bg-[#92dae4] rounded-lg text-black font-medium"
      >
        Decreament
      </button>
    </div>
  );
};

export default Counter;

//useState() হলো একটা react hook
// react hook কে সব সময় কম্পোনেন্টের শুরুতে রাখতে হবে
// useState সব সময় আমাদের একটা অ্যারে রিটার্ন করে*********

// props এবং state চেঞ্জ হলেই কেবল একটা কম্পোনেন্ট re-render হয়

//useState কিভাবে তৈরী হয়ঃ
// function useState(num){
//     function update (value){
//         num = value;
//     };
//     return [num, update];
// }
// useState(0)
