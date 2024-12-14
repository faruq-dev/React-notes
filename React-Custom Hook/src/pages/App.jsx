/* eslint-disable no-unused-vars */
import useCart from "../custom-hook/useCart";
import useFetchRequest from "../custom-hook/useFetchRequest";
import useWindowSize from "../custom-hook/useWindowSize";
import Form from "./Form";
import User from "./User";

const App = () => {
  const {data, loading, error} = useFetchRequest('https://jsonplaceholder.typicode.com/users')
  const size = useWindowSize();
  const {cartItems, addToCart, removeFromCart, totalPrice, clearCart} = useCart();
  const demoProduct = [
    {id: 1, name: 'Laptop', price: 100},
    {id: 2, name: 'Mobile', price: 100},
    {id: 3, name: 'Ipad', price: 100},
    {id: 4, name: 'Graphics Card', price: 100},
  ];

  // console.log(data);
  return (
    <>
      <div>
        <h1>Custom Hook</h1>
      </div>
      <div className="grid grid-cols-4 gap-4">
        {data.map((user) => {
          return <User user={user} key={user.id} />;
        })}
      </div>
      <div className="p-6">
        <Form/>
      </div>

      <div className="p-4">
        <h2 className="text-4xl font-bold mb-4">Window Size</h2>
        <p className="font-bold text-[22px]">Screen width : {size.width}</p>
        <p className="font-bold text-[22px]">Screen height : {size.height}</p>
      </div>

      <hr />

      <div className="p-4">
      {/* Demo Products */}
        <h2 className="text-3xl font-semibold mt-6">Cart Funcitioality with useCart Custom hook</h2>
        <div className="grid grid-cols-4 gap-4">
          {demoProduct.map((product)=> {
            return (
              <div className="mb-6 bg-orange-200 p-4 mt-4" key={product.id}>
                <p>{product.name}</p>
                <p>Price: ${product.price}</p>
                <button className="bg-black text-white mt-4 px-4 py-2" onClick={() => addToCart(product)}>Add to Cart</button>
              </div>
            )
          })}
        </div>


        {/* Added Cart Items */}
        <h2 className="text-3xl font-semibold mt-6">Cart Items ({cartItems.length} items added)</h2>
        <div className="grid grid-cols-4 gap-4">
          {cartItems.length === 0 ? <p>Your cart is empty</p> : (
            cartItems.map((item) => {
              return (
                <div className="mb-4 bg-orange-100 p-4 mt-4" key={item.id}>
                  <p className="font-bold text-[20px]">{item.name}</p>
                  <p>Quantity: {item.quantity}</p>
                  <button className="bg-red-500 text-white mt-4 px-4 py-2" onClick={() => removeFromCart(item.id)}>Remove</button>
                </div>
              )
            })
          )}
        </div>

        {cartItems.length > 0 && <div className="text-[22px]">Total Price: ${totalPrice()}</div>}  
        {cartItems.length > 0 && <button className="bg-black text-white mt-4 px-4 py-2 mb-8" onClick={clearCart}>Empty Cart</button>}
      </div>
    </>
  );
};

export default App;

//কাস্টম হুকের বিস্তারিত আছে এই ক্লাসে https://drive.google.com/file/d/1Z__n4w00sLcZ2sRTzXmaD3NtH0LlAjHM/view
