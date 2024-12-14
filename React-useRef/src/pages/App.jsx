import ComponentA from "../components/componentA";
import { context } from "../context/context";
import { useRef } from "react";

const App = () => {

  // const [number, setNumber] = useState(0);
  const ref = useRef(5);
  return (
    <>
      <context.Provider value={ref}>
        <ComponentA/>
      </context.Provider>
    </>
  );
};

export default App;
