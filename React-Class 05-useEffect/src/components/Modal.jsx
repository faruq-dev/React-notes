const Modal = ({selectedUser, close}) => {

  return (
    <div id="parent" className="fixed inset-0 bg-gray-800 bg-opacity-80 min-h-screen z-50 flex items-center justify-center" onClick={close}>
      <div onClick={(e) => e.stopPropagation()} className="rounded-xl w-[700px] h-[500px] bg-white relative">
        {/* Modal Header */}
        <div className="bg-blue-500 w-full h-32 rounded-t-xl px-10 flex items-center ">
          <h1 className="text-white text-3xl font-bold">User Information</h1>
        </div>

        {/* Modal Body */}
        <div className="p-10 text-[20px] flex flex-col gap-5">
          <p><span className="font-bold">Name:</span> {selectedUser.name}</p>
          <p><span className="font-bold">Email:</span> {selectedUser.email}</p>
          <p><span className="font-bold">City:</span> {selectedUser.address.city}</p>
          <p><span className="font-bold">Phone:</span> {selectedUser.phone} </p>
          <p><span className="font-bold">Website:</span> {selectedUser.website} </p>
        </div>

        {/* Modal Close Button */}
        <div className="absolute top-9 right-7">
          <button onClick={close} className="size-12 font-semibold text-[18px] text-[#3B82F6] bg-white rounded-full hover:bg-slate-300">
            X
          </button>
        </div>
        
      </div>
    </div>
  );
};

export default Modal;
