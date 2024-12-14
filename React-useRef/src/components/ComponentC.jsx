import { context } from "../context/context";
import { useContext } from "react";

const ComponentC = () => {
  const number = useContext(context);
  console.log(number.current);

  const refIncreaser = () => {
    number.current = number.current + 1;
    alert("You clicked "+ number.current +" times ")
    console.log(number.current);
  }
  
  return (
    <>
      <div className="p-10">
        <div className="text-6xl font-bold mb-6">{number.current}</div>
        <div className="space-x-5">
          <button className="bg-black text-white p-4" onClick={refIncreaser}>Increase</button>
        </div>
      </div>
    </>
  );
};

export default ComponentC;
