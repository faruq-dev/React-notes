// .reduce method একটা অ্যারের প্রতিটা এলিমেন্টের উপর একটা ফাংশন চালায় এবং অ্যারের সবগুলা এলিমেন্টকে reduce/একত্র করে একটা সিঙ্গেল অ্যারেতে পরিনত করতে পারে, যেমন [1,4,6,7,9] এই অ্যারেকে reduce করে একটা সিঙ্গেল ভ্যালু অ্যারে [27] এ পরিনত করতে পারে।

// .reduce() মেথডও মেইন অ্যারেকে পরিবর্তন করেনা

{
    const numbers = [4, 6, 14, 20, 30];

    numbers.reduce(sum, 0);

    function sum (accumulator, value){
        return accumulator = accumulator + value;
    }

    const reducedNumber = numbers.reduce(sum, 0);
    console.log(reducedNumber);
}

//প্রথমে numbers নামে একটা অ্যারে নিলাম, এবং সেই অ্যারের উপর .reduced() মেথড এপ্লাই করলাম এভাবে numbers.reduced(sum, 0);

// .reduce() এর ব্রাকেটে ফাংশন নাম লিখলাম sum, এটাও কলব্যাক ফাংশন (callback function)

// এখানে function sum এর ব্রাকেটে ২টা আর্গুমেন্ট (accumulator, value) দিতে হবে (৮ নাম্বার লাইন), এখানে accumulator মানে হলো ধারক, সে ভ্যালু/এলিমেন্টের উপর চালানো ফাংশনের রেজাল্টকে ধারন করবে বা ধরে রাখবে বা স্টোর করবে। উপরোক্ত ফাংশনে অ্যারের এলিমেন্ট বা ভ্যালু গুলোর যোগফল গুলো সবার শেষে accumulator এ স্টোর হবে।

// accumulator এর একটা ইনিশিয়াল বা প্রাথমিক ভ্যালু দিতে হয়, সেই ভ্যালুর সাথে সে অ্যারের এলিমেন্টগুলাকে যোগ বিয়োগ গুন ভাগ করতে থাকে, accumulator এর প্রাথমিক/প্রারম্ভিক ভ্যালুটা দিতে হয় numbers.reduce এর ব্র্যাকেটে যেখানে sum ফাংশনের নাম ডিক্লেয়ার করলাম তার পাশে কমা(,) দিয়ে, যেমন ৬ নাম্বার লাইনে (sum, 0)। যদি যোগ করার ফাংশন হয় তাহলে accumulator  এর প্রাথমিক ভ্যালু ০ দিতে হবে, গুন করলে প্রাথমিক ভ্যালু ১ দিতে হবে।

// accumulator এর একটা ইনিশিয়াল বা প্রাথমিক ভ্যালু না দিলে numbers অ্যারের ১ম এলিমেন্ট 4 কে প্রাথমিক ভ্যালু হিসেবে ধরে নিবে 

// এরপর ৯ নাম্বার লাইনে লিখলাম return accu = accu + value; এর মানে accu এর প্রাথমিক ভ্যালু ০ এর সাথে অ্যারের প্রথম এলিমেন্ট ৪ যোগ হবে এবং যোগফল্টা accu তে স্টোর হবে, তাহলে এবার accu এর ভ্যালু হয়ে গেলো ৪, এরপর accu এর ভ্যালু ৪ এর সাথে অ্যারের ২য় এলিমেন্ট যোগ হয়ে সেই যোগফল আবার accu তে স্টোর হবে, এভাবে প্রতিটা এলিমেন্ট একে একে যোগ হয়ে মোট যোগফল accu তে স্টোর হবে

//numbers.reduce(sum, 0); কে reducedNumbers ভ্যারিয়েবলে রেখে কনসোল করলে অ্যারের সব গুলা এলিমেন্টের যোগফল দেখাবে।





//.filter() মেথডের কাজ .reduce() মেথড দিয়ে করার পদ্ধতি ***
{
    const numbers = [4, 6, 14, 20, 30]; //এই অ্যারে থেকে যে সংখ্যা গুলো ১৫ থেকে ছোট তাদের আলাদা করব, এটা আগের চ্যাপ্টারে ফিল্টার মেথড দিয়ে করেছি, এখন .reduce() মেথড দিয়ে করব

    numbers.reduce(smallerThan15, []); // এখানে smallerThan15 ফাংশন নেমের পরে accumulator এর জায়গায় একটা empty array নিলাম accu এর প্রাথমিক ভ্যালু হিসেবে

    function smallerThan15 (accumulator, value){
        if(value < 15){
            accumulator.push(value);
        }
        return accumulator;
    } // এই ফাংশনের ব্রেকডাউনঃ- ফাংশনের ভেতর কন্ডিশন দিলাম if (value < 15), অর্থাৎ যদি কোনো ভ্যালু ১৫ থেকে ছোট হয় তাহলে accumulator.push(value), অর্থাৎ কোনো ভ্যালু ১৫ থেকে ছোট হলে তাকে accumulator এর ভেতর পুশ করো, ামরা যেহেতু accu এর প্রাথমিক ভ্যালু হিসেবে একটা empty array নিয়ে রেখেছি তাহলে পুশ করা ভ্যালু গুলা accumulator এর সেই এম্পটি অ্যারের ভেতর স্টোর হবে। 

    //এরপর লিখলাম return accumulator; মানে পুশ করা শেষ হলে accumulator টাকে রিটার্ন করো

    /// এবার নিচের মতো numbers.reduce(smallerThan15, []); কোনো ভ্যারিয়েবলে রেখে কনসোল করলে ১৫ থেকে ছোত ভ্যযালু গুলা নিয়ে আরেকটা নতুন অ্যারে প্রিন্ট হবে

    const result = numbers.reduce(smallerThan15, []);
    console.log(result);
}


// array of object এর উপর এপ্লাই করা .filter() মেথডের কাজ .reduce() মেথড দিয়ে করার উপায়
{
    const smartphones = [
        { phoneName: "Iphone 15 pro",
          price: 152000,
          year: 2024
        },
        { phoneName: "Samsung Galaxy S24",
          price: 160000,
          year: 2024
        },
        { phoneName: "Redmi Note 13 Pro",
          price: 140000,
          year: 2024
        },
        { phoneName: "Realme GT Neo 5",
          price: 90000,
          year: 2024
        },
    ];

    smartphones.reduce(higherPrice, []);
    function higherPrice (accu, value){
        if (value.price > 150000){
            accu.push(value.price)
        }
        return accu
    }

    const result = smartphones.reduce(higherPrice, []);
    console.log(result);
}