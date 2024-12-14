import { useEffect, useState } from "react";
import Modal from "./Modal";
import UserList from "./UserList";

const User = () => {
  let [userData, setUserData] = useState([]);
  let [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    const fetchFunc = async function () {
      const fetchData = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await fetchData.json();
      setUserData(data);
    };
    fetchFunc();
  }, []);

  const infoHandler = (user) => {
    setSelectedUser(user);
  };

  const closeModal = ()=>{
    setSelectedUser(null);
  }

  return (
    <>
      {selectedUser && (
        <Modal selectedUser={selectedUser} close={()=>closeModal()}/>
      )}

      <div className="max-w-[1320px] mx-auto grid grid-cols-4 gap-6 mt-9">
        {userData.map((user) => (
          <UserList key={user.id} user={user} click={()=> infoHandler(user)} />
        ))}
      </div>
    </>
  );
};

export default User;
