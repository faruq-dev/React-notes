import { useEffect, useState } from "react";

const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState({ width: window.innerWidth, height: window.innerHeight }); // এখানে window.innerWidth এবং window.innerHeight হলো জাভাস্ক্রিপ্টের Dom এর জিনিস। এগুলোকে দিয়ে আমরা window বা স্ক্রীনের height, width পেতে পারি। window.innerWidth এবং window.innerHeight কে আমরা useState এর ভেতর অবজেক্ট আকারে দিয়ে দিলাম।

    useEffect(()=>{
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            })
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize); //removeEventListener দিয়ে resize event কে রিমোভ না করলে এই useWindowSize হুক যেই কম্পোনেন্টে ইউজ করব সেই কম্পোনেন্ট থেকে অন্য কম্পোনেন্টে ব্রাউজ করলেও এই resize ইভেন্ট চালু/ওপেন থেকে যাবে যা রিসোর্স হাংগ্রি হবে। এজন্য /removeEventListener দিয়ে resize ইভেন্টকে রিমোভ করতে হবে।
        };
    }, []);

    return windowSize;
};

export default useWindowSize;