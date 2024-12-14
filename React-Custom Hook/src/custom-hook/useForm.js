import { useState } from "react";

const useForm = (initialValues) => {
  const [values, setValues] = useState(initialValues);
  const  [formOutput, setFormOutput] = useState(initialValues);
  const [showOutput, setShowOutput] = useState(false);
  
  const handleChange = (e) => {
    setShowOutput(false);
    if (e.target.value === "*") {
        alert('invalid input');
    } else {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
          });
        setFormOutput({
           ...formOutput,
            [e.target.name]: e.target.value,
        });
    }
  };

  const resetForm = () => {
    setValues(initialValues);
  };

  return { values, handleChange, resetForm, formOutput, showOutput, setShowOutput };
};

export default useForm;
