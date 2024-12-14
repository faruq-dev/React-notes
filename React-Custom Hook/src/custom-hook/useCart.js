import { useState } from "react";

const useCart = () => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product) => {
        const existingItems = cartItems.find((item)=> {
            return item.id === product.id;
        });
        if(existingItems) {
            setCartItems(cartItems.map ((item) => item.id === product.id ? {...item, quantity: item.quantity + 1} : item));
        } else {
            setCartItems([...cartItems, {...product, quantity: 1}]);
        }
    };

    const removeFromCart = (id) => {
        setCartItems(cartItems.filter(item =>  item.id !== id));
    };

    const totalPrice = ()=>{
        return cartItems.reduce((total, item)=>{
            return total + (item.price * item.quantity);
        }, 0)
    };

    const clearCart = ()=>{
        setCartItems([]);
    };

    return { cartItems, addToCart, removeFromCart, totalPrice, clearCart };
};

export default useCart;