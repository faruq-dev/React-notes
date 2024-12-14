const UserList = ({ user, click }) => {
  return (
    <>
      <div
        className="w-[320px] p-5 border-[2px] border-blue-500 mx-auto rounded-xl cursor-pointer hover:bg-blue-100"
        onClick={click}
      >
        <h1 className="text-[30px] font-bold text-blue-500 mb-4">
          Hello, {user.username}!
        </h1>
        <p className="mb-2 font-medium">Username: {user.name} </p>
        <p className="mb-2 font-medium">Email: {user.email} </p>
        <p className="mb-2 font-medium">City: {user.address.city} </p>
      </div>
    </>
  );
};

export default UserList;
