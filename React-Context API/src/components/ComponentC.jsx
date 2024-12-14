import { context } from "../context/context";
import { setNumberContext } from "../context/context";
import { useContext } from "react";

const ComponentC = () => {
  const number = useContext(context);
  const setNumber = useContext(setNumberContext);
  return (
    <>
      <div className="p-10">
        <div className="text-6xl font-bold mb-6">{number}</div>
        <div className="space-x-5">
          <button className="bg-black text-white p-4" onClick={() => setNumber(number + 1)}>Increase</button>
          <button className="bg-black text-white p-4" onClick={() => setNumber(number - 1)}>Decrease</button>
        </div>
      </div>
    </>
  );
};

export default ComponentC;
