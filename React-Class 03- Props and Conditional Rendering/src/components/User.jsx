/* eslint-disable react/prop-types */
const User = ({ userInfo }) => {
  let {id, name, age, email } = userInfo;

  const bgColor = id%2 === 0 ? '#ffffff' : '#eff6e0';
  return (
    <>
      <div className="w-full border-gray-500 border-[1px] rounded-xl p-6" style={{backgroundColor:bgColor}}>
        <h2 className="text-[22px] font-bold">User details</h2>
        <p>Name: {name} </p>
        <p>Age: {age} </p>
        <p>Email: {email} </p>
      </div>
    </>
  );
};

export default User;
