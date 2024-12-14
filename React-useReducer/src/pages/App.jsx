/* eslint-disable no-unused-vars */
import { useState, useReducer } from "react";
import Counter from "./../components/Counter";
import InputData from "../components/InputData";

const initialState = {
  count: 0,
  isModalOpen: false,
};
const reducer = (state, action) => {
  console.log(state);
  switch (action.type) {
    case "INCREMENT":
      return {...state, count: state.count + 1};
    case "DECREMENT":
      return {...state, count: state.count - 1};
    default:
      return state;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  
  const clickHandler = (e) => {
    if (e.target.innerHTML === 'Increment'){
      dispatch({
        type: "INCREMENT"
      });
    } else {
      if (state.count <= 0){
        alert('can not decrement below 0')
        return;
      } else {
        dispatch({
          type: "DECREMENT"
        });
      }
    }
  };
  return (
    <>
      <Counter count={state.count} clickHandler={clickHandler} />
      {/* <InputData/> */}
    </>
  );
};

export default App;
