/* eslint-disable react/prop-types */
const FormOutput = ({formOutput}) => {
  return (
    <div>
        <h1>Form Information Output</h1>
        <p>Name : {formOutput.username}</p>
        <p>Email : {formOutput.email}</p>
        <p>Password : {formOutput.password}</p>
    </div>
  )
}

export default FormOutput