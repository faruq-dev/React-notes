const Toolbar = () => {
  const toolBarClick = () => {
    alert("Toolbar Clicked");
  };

  const onc = (e) => {
   e.stopPropagation();
   if (e.target.innerText === "Upload Image") {
    alert("Uploading...");
   } else {
    alert ("Play Movie...");
   }
  }

  return (
    <div className="toolbar-div" onClick={toolBarClick}>
      <button className="px-8 py-3 bg-[#CAE9FF] rounded-lg" onClick={onc}>Play Movie</button>
      
      <button className="px-8 py-3 rounded-lg bg-[#CAE9FF]" onClick={onc}>Upload Image</button>
    </div>
  );
};

export default Toolbar;
