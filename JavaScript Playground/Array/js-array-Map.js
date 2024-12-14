//.map() মেথড অ্যারে এবং array of object নিয়ে কাজ করে এবং অ্যারের প্রতিটা এলিমেন্টের উপরে সে একটা ফাংশন (callback function) এপ্লাই করে এবং ফাংশন এপ্লাই করা শেষে সে একটা নতুন অ্যারে রিটার্ন করে। 

// Note: array of object হলো এমন ধরনের অ্যারে আর প্রতিটা এলিমেন্ট একেকটা অবজেক্টয যেমন [{person: "Omar"}, {person: "Ahmadullah"}]

// .map() মেথড এবং .forEach() মেথডের পার্থক্য হলো .map() মেথড কনসোলে ভ্যালু রিটার্ন করতে পারে, অর্থাৎ numbers.map(halfNumber); এটাকে একটা ভ্যারিয়েবলের মধ্যে রেখে সেই ভ্যারিয়েবলকে কনসোল করলে রেজাল্ট শো করবে, কিন্ত .forEach() মেথডে এটা করা যায়না

//// .map() মেথডও মেইন অ্য্যারেকে পরিবর্তন করেনা, নতুন একটা অ্যারে রিটার্ন করে


//Example
{
    const numbers = [20, 30, 15, 4, 16, 12, 28];
    numbers.map(halfNumber);

    function halfNumber (value, index, array){
        console.log(value * .5);

        // numbers.map(halfNumber) এটাকে যদি কোন variable এ স্টোর করতে হয় তাহলে ফাংশনের বডিতে কনসোলের পরিবর্তে return value * 5 লিখতে হবে, উদাহরন নিচের Example 2 তে।
    };
}
//উপরে প্রথমে numbers নামে একটা অ্যারে নিলাম

//এরপর number অ্যারের উপর .map() মেথড এপ্লাই করলাম numbers.map() এভাবে

// numbers.map(halfNum) এখানে numbers টা হবে অ্যারের নাম, এরপর .map() লিখতে হবে এবং এর ব্রাকেটে একটা ফাংশন নিলাম, ফাংশনের নাম দিলাম halfNum, এই ফাংশনের কাজ হবে অ্যারের ভেতরে থাকা প্রতিটা ভ্যালুকে হাফ বা অর্ধেক করে ফেলা (২ দিয়ে ভাগ করে বা .৫ দিয়ে গুন করে)

//এরপর উপরে ১৫ নাম্বার লাইনে ফাংশনটা লিখলাম, এজন্য প্রথমে function লিখে ফাংশনের নাম লিখলাম halfNum. 
// halfNum এর ব্রাকেটে ৩টা আর্গুমেন্ট দিতে হবে যার নাম দিলাম (value, index, array), এখানে value হল অ্যারের ভেতর থাকা সংখ্যা গুলো যেমন ২০, ৩০, ১৫ ইত্যাদি, আর index হলো অ্যারের এলিমেন্টগুলোর ইনডেক্স নাম্বার যেমন 0,1,2,3,4 ইত্যাদি, আর array হলো টোটাল numbers নামক অ্যারে টা।

// এরপর কন্সোলে (value * .5) দিলাম, ফলে অ্যারের প্রতিটা ভ্যালুকে হাফ করে কনসোলে প্রিন্ট করবে।

// ****** লুপটা যখন অ্যারেতে প্রবেশ করবে তখন অ্যারের প্রথম এলিমেন্ট ২০ এর জন্য halfNum ফাংশনটাকে কল করবে, এবং ২০ কে .5 দিয়ে গুন করে কনসোলে প্রিন্ট করবে, এরপর আবার অ্যারেতে ফেরত আসবে এসে ২য় এলিমেন্ট ৩০ এর জন্য আবার halfNum ফাংশনটাকে কল করবে এবং .৫ দিয়ে গুন করবে, এভাবে প্রতিটা অ্যারে এলিমেন্টের জন্যই সে ১বার করে ফাংশন টাকে কল করবে। আর প্রতিটা এলিমেন্টকে হাফ করে কনসোলে দেখাবে।


//Example 2
{
    const numbers = [20, 30, 15, 4, 16, 12, 28];
    numbers.map(halfNumber);

    const result = numbers.map(halfNumber);

    function halfNumber (value, index, array){
        return value / 2;
    };

    console.log(result);
}

//Example 2 কে আরো শর্টকাটে করা যায়, ১ লাইনেই ফাংশন লিখে ফেলা যায়। যেমনঃ
{
    const numbers = [20, 30, 15, 4, 16];
    numbers.map((value, index, array)=>value * .5);//.map() মেথডের ব্রাকেটেই ফাংশন লিখে ফেললাম, এখানে ফাংশনের নাম দেওয়া লাগবে না, .map() মেথডের ব্রাকেটের ভেতর ব্রাকেট দিয়ে ফাংশনের জন্য ৩ টা আর্গুমেন্ট (value, index, array) লিখে => চিহ্ন দিয়ে ফাংশনের কোড ব্লকে থাকা value * .5 লিখে দিতে হবে, return লেখা লাগবে না। এটা এবং আগের example টা একই কাজ করবে

    const result = numbers.map((value, index, array)=>value * .5);
    console.log(result);
}


// array of object এর উপর .map() মেথড এপ্লাই করার নিয়ম ***
{
    const smartphones = [
        { phoneName: "Iphone 15 pro",
          price: 150000,
          year: 2024
        },
        { phoneName: "Samsung Galaxy S24",
          price: 160000,
          year: 2024
        },
        { phoneName: "Redmi Note 13 Pro",
          price: 160000,
          year: 2024
        },
    ]; //এটা হলো অ্যারে অফ অবজেক্ট, মানে এই অ্যারের প্রতিটা এলিমেন্ট হলো একেকটা অবজেক্ট

    const result = smartphones.map(phoneBrands); // .map() মেথড কিন্ত নতুন একটা অ্যারে রিটার্ন করে, result ভ্যারিয়েবলকে কনসোল করলে দেখা যাবে শুধু ফোনের ব্র্যান্ড গুলার নাম দিয়ে একটা নতুন অ্যারে রিটার্ন করছে
    function phoneBrands (value, index, array){ //এখানে value মানে একেকটা অবজেক্ট হলো একেকটা ভ্যালু
        return value.phoneName;
    }

    console.log(result);
}

//// array of object এর উপর শর্টকাটে .map() মেথড এপ্লাই করার নিয়ম
{
    const smartphones = [
        { phoneName: "Iphone 15 pro",
          price: 150000,
          year: 2024
        },
        { phoneName: "Samsung Galaxy S24",
          price: 160000,
          year: 2024
        },
        { phoneName: "Redmi Note 13 Pro",
          price: 160000,
          year: 2024
        },
    ];

    const result = smartphones.map((value, index, array) => value.price *2);
    console.log(result);
}