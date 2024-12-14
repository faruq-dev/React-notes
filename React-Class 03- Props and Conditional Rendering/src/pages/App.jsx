import User from "../components/User";
import "./app.css";

const App = () => {
  const users = [
    {
      id: 1,
      name: "Omar Faruque",
      age: 26,
      email: "omar@gmail.com",
    },
    {
      id: 2,
      name: "Khalid bin Walid",
      age: 26,
      email: "khalid@gmail.com",
    },
    {
      id: 3,
      name: "Faizan Khan",
      age: 26,
      email: "faizan@gmail.com",
    },
    {
      id: 4,
      name: "Enamur Rahman",
      age: 26,
      email: "eman@gmail.com",
    },
    {
      id: 5,
      name: "Aminur Rahman",
      age: 26,
      email: "eman@gmail.com",
    },
    {
      id: 6,
      name: "Jafor Rahman",
      age: 26,
      email: "eman@gmail.com",
    },
    {
      id: 7,
      name: "Mujib Rahman",
      age: 26,
      email: "eman@gmail.com",
    },
  ];
  return (
    <>
      <h1 className="text-4xl font-bold bg-[#aec3b0] text-center py-8">
        This is our homepage
      </h1>

      <div className="max-w-[1320px] mx-auto mt-6 grid grid-cols-4 gap-5">
        {users.length <= 0 ? (
          <div>No users found</div>
        ) : (
          users.map((user) => {
            return <User userInfo={user} key={user.id} />;
          })
        )}
      </div>
    </>
  );
};

export default App;
