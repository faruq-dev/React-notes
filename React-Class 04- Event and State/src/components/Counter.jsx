import { useState } from "react";

const Counter = () => {
  let [count, setcount] = useState(0); //useState একটা অ্যারে রিটার্ন করে, তাকে Destructure করা হলো (setcount is a function here)

  const countHandler = (e) => {
    if (count === 0 && e.target.innerText === "Decreament") {
      alert("Counter is at 0!");
    } else if (e.target.innerText === "Increament") {
      setcount(count += 1);
    } else {
      if (count > 0) {
        setcount(count -= 1);
      }
    }
  };

  return (
    <div className="counter-div">
      <h1 className="text-center text-5xl font-bold mb-11">Counter APP</h1>

      <div className="counter-display">Count Value: {count} </div>

      <button
        onClick={countHandler}
        className="px-8 py-3 bg-[#6744e4] rounded-lg text-white font-medium"
      >
        Increament
      </button>

      <button
        onClick={countHandler}
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
