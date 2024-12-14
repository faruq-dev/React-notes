// import { useState, useReducer } from "react";
// import { useContext } from "react";
import ComponentA from "../components/componentA";
import { context } from "../context/context";
import {setNumberContext} from "../context/context"
import { useState } from "react";

const App = () => {
  // const data = useContext(context);
  const [number, setNumber] = useState(0);
  // const number = 10000
  return (
    //এখানে value কে value নামেই লিখতে হবে
    <>
      <context.Provider value={number}>
        <setNumberContext.Provider value={setNumber}>
          <ComponentA />
        </setNumberContext.Provider>
      </context.Provider>
    </>
  );
};

export default App;
