// .filter() method একটা অ্যারের এলিমেন্ট গুলো থেকে কিছু এলিমেন্টকে ফিল্টারিং করে নিয়ে নতুন একটা অ্যারে তৈরী করে, অ্যারের এলিমেন্টগুলোর মধ্যে যে এলিমেন্ট গুলো filter() মেথডের কন্ডিশন ফুলফিল করে বা টেস্টে পাশ করে/শর্ত পূরন করে শুধুমাত্র সেই এলিমেন্টগুলো নিয়ে সে নতুন একটা অ্যারে তৈরী করে। যদি কোনো এলিমেন্টই কন্ডিশন ফুলফিল না করে তাহলে একটা empty array রিটার্ন করবে।

//Example
{
    const numbers = [10, 12, 16, 4, 7, 21, 28];
    numbers.filter(bigNumbers);

    function bigNumbers (value, index, array) {
        return value > 10;
        // return value % 2 === 0; //এটা অ্যারে থেকে শুধু জোড় সংখ্যা গুলাকে বের করার নিয়ম, অ্যারের এলিমেন্টকে ২ দিয়ে ভাগ করলে ভাগশেষ যদি ০ হয়য় তাহলে সেটা জোড় সংখ্যা
    }

    const filterResult = numbers.filter(bigNumbers);
    console.log(filterResult);
}

//প্রথমে numbers নামে একটা অ্যারে নিলাম, এবং সেই অ্যারের উপর .filter() মেথড এপ্লাই করলাম এভাবে numbers.filter(bigNumbers);

// filter () এর ব্রাকেটে ফাংশন নাম লিখলাম bigNumbers, এবং সেই ফাংশনে শর্ত দিলাম numbers অ্যারের যে এলিমেন্ট গুলো ১০ থেকে বড় তাদেরকে নিইয়ে রিটার্ন করো।

// function bigNumbers এর ব্রাকেটে যথারীতি ৩টা আর্গুমেন্ট (value, index, array) দিলাম এবং শর্ত দিলাম return value > 10; মানে ১০ থেকে বড় ভ্যালু গুলো রিটার্ন করো

// এবার numbers.filter(bigNumbers) কে filterResult নামের একটা ভ্যারিয়েবলের মধ্যে রাখলাম, ও সেই ভ্য্যারিয়েবলকে কনসোল করলাম

// কনসোল করলে .filter() মেথডটা numbers অ্যারের মধ্যে থেকে যে এলিমেন্ট গুলো ১০ থেকে বড় তাদের ফিল্টার করে নিয়ে এসে তাদের নিয়ে নতুন একটা অ্যারে কনসোলে প্রিন্ট করবে

// Note*** - ফিল্টার মেথডও মেইন অ্যারেকে পরিবর্তন করেনা



//array of object এর উপর .filter() মেথড এপ্লাই করার নিয়ম *******************
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
    ]; //এটা হলো অ্যারে অফ অবজেক্ট, মানে এই অ্যারের প্রতিটা এলিমেন্ট হলো একেকটা অবজেক্ট

    smartphones.filter(higherPrice);
    function higherPrice (value, index, array){
        return value.price > 150000; //এখানে ফাংশন লিখলাম অ্যারে অফ অবজেক্টের যেসব ফোনের দাম ১৫০০০০ টাকার উপরে তাদের ফিল্টার করে রিটার্ন করো, value হলো অ্যারের ভেতর থাকা একেকটা অবজেক্ট, আর সেই অবজেক্টের প্রপার্টিকে এক্সেস করার জন্য লিখলাম value.price
    }

    const result = smartphones.filter(higherPrice);
    console.log(result);
}




//array of object এর উপর .filter() মেথড এপ্লাই করে কোনো একটা নির্দিষ্ট অবজেক্টকে ডিলেট/হাইড করার নিয়ম
{
    const smartphones = [
        { phoneName: "Iphone 15 pro",
          price: 152000,
          year: 2024,
          id: 1
        },
        { phoneName: "Samsung Galaxy S24",
          price: 160000,
          year: 2024,
          id: 2
        },
        { phoneName: "Redmi Note 13 Pro",
          price: 140000,
          year: 2024,
          id: 3
        },
        { phoneName: "Realme GT Neo 5",
          price: 90000,
          year: 2024,
          id: 4
        },
    ];

    smartphones.filter(cut_ID_3);
    function cut_ID_3 (value, index, array){
        return value.id !==3; //এখানে ফাংশন লিখলাম অ্যারে অফ অবজেক্টের ভেতর যেই অবজেক্টের ID 3 তাকে বাদ দিয়ে বাকি আইডি গুলোকে রিটার্ন করো, ফলে ১ , ২, ৪ আইডিকে রিটার্ন করবে, ৩ কে বাদ রাখবে, !==3 মানে not equal to 3, মানে অবজেক্টগুলোর মধ্যে যাদের ID ৩ এর সমান নয় তাদের রিটার্ন করো, ===3 দিলে শুধু ৩ নাম্বার আইডিকেই প্রিন্ট করবে, !==3 দিলে ৩ বাদে বাকি সবাইকে প্রিন্ট করবে
    }

    const result = smartphones.filter(cut_ID_3);
    console.log(result);
}