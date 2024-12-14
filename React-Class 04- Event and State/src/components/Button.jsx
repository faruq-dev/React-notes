// eslint-disable-next-line react/prop-types
const Button = ({click, children}) => {
    
  return (
    <>
      <button className={`${children === 'Play Now' ? `bg-orange-400` : children === 'Sign Up' ? `bg-blue-600` : `bg-black` } 
      px-8 py-3 text-white rounded-lg`} onClick={click}>{children}</button>
    </>
  );
};

export default Button;
