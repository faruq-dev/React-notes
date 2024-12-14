/* eslint-disable no-unused-vars */
import Counter from "./../components/Counter";
import { DispatchContext, StateContext } from "../context/context";
import CounterProvider from "../components/CounterProvider";

const App = () => {
  return (
    <>
      <CounterProvider>
        <Counter />
      </CounterProvider>
    </>
  );
};

export default App;
