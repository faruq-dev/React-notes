import { DispatchContext, StateContext } from "../context/context";
import { useReducer } from "react";
import reducer from "../reducer/reducer";

const initialState = {
    count: 0,
    isModalOpen: false,
  };

const CounterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
};

export default CounterProvider;
