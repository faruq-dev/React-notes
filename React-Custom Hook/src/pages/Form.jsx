// import { useState } from "react";
import useForm from "../custom-hook/useForm";
import FormOutput from "./FormOutput";

const Form = () => {
  const { values, handleChange, resetForm, formOutput, showOutput, setShowOutput } = useForm({
    username: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data :", values);
    setShowOutput(true);
    resetForm();
  };
  return (
    <>
      <form onSubmit={handleSubmit} className=" space-x-4">
        <input
          type="text"
          name="username"
          value={values.username}
          onChange={handleChange}
          placeholder="Enter your name"
          className="px-2 py-4 border-black border-[1px]"
        />
        <input
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          placeholder="Enter your email address"
          className="px-2 py-4 border-black border-[1px]"
        />
        <input
          type="password"
          name="password"
          value={values.password}
          onChange={handleChange}
          placeholder="Enter your password"
          className="px-2 py-4 border-black border-[1px]"
        />
        <button type="submit">Sign Up</button>
      </form>

      {
        showOutput && <FormOutput formOutput={formOutput} />
      }
    </>
  );
};

export default Form;
