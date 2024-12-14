/* eslint-disable react/prop-types */
const User = ({user}) => {
  return (
    <div className="bg-gray-400 p-4">
        <h2>User info</h2>
        <p>name : {user.name}</p>
    </div>
  )
}

export default User