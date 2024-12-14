//************************* */
// First Class Function - কোনো ফাংশনকে ভ্যারিয়েবলে, অ্যারেতে ও অবজেক্টে স্টোর করা গেলে তাকে ফাস্ট ক্লাস ফাংশন বলে। কিভাবে ১টা ফাংশনকে ভ্যারিয়েবলে, অ্যারেতে ও অবজেক্টে স্টোর করা হয়য় তা নিচে দেখানো হলো।

// ভ্যারিয়েবলে স্টোর
let myFunc = function () {
  console.log("this is a function 124");
};
console.log(myFunc());

//অবজেক্টে স্টোর
let object = {
  keyName: myFunc,
};

//অ্যারেতে স্টোর
let array = [myFunc];

console.log(object.keyName);
console.log(array[0]);
array[0]();

//যদি অ্যারেতে অনেকগুলো ফাংশন থাকে
let funcA = () => {
  console.log("This is A");
};

let funcB = () => {
  console.log("This is B");
};

let funcC = () => {
  console.log("This is C");
  console.log("This is C");
};

let newArray = [funcA, funcB, funcC];

//for loop
for (let i = 0; i < newArray.length; i++) {
  newArray[i]();
}

{
  //while loop
  let newArray = [funcA, funcB, funcC];
  let i = 0;
  while (i < newArray.length) {
    newArray[i]();
    i++;
  }
}

//একটা ফাংশনকে আরেকটা ফাংশনের আর্গুমেন্ট আকারে pass করা  *******

let testFunc = function (fn) {
  console.log("Testing purpose");
  fn();
};

testFunc(function () {
  console.log("passed function");
}); //testFunc এর প্যারেন্থিসিস এর মধ্যে যে ফাংশন লিখলাম এটাই আর্গুমেন্ট আকারে 61 নাম্বার লাইনের testFunc এর (fn) প্যারামিটারের ভেতর চলে গেলো।

// এটাকে আরো শর্ট করেও লেখা যায়, সরাসরি testFunc এর প্যারেন্থিসিস এর ভেতর ফাংশন না লিখে আলাদা একটা ভ্যারিয়েবলে ফাংশনটাকে স্টোর করে সেই ভ্যারিয়েবলটাকেই testFunc ফ্যাংশনের আর্গুমেন্ট আকারে দিয়ে দিতে পারি। যেমণঃ
let arg1 = () => {
  console.log("passed function 2");
};
testFunc(arg1); //এখানে arg1 ভ্যারিয়েবলের ভেতরে ফাংশনটাকে স্টোর করে সেই ভ্যারিয়েবলকেই testFunc() এর প্যারেন্থিসিস এর মধ্যে আর্গুমেন্ট আকারে দিয়ে দিলাম, এখন এই arg1 টা ৬১ নাম্বার লাইনের testFunc এর (fn) প্যারামিটারের ভেতর চলে গেলো।

//একটা ফাংশন অন্য আরেকটা ফাংশনকে রিটার্ন করে কিভাবে- *******
{
  let myFunc = function () {
    let a = 10;

    //এখানে myFunc ফাংশনের ভেতরে return দিয়ে আরেকটা ফাংশন লিখলাম (৮৫ নং লাইন), অর্থাৎ myFunc ফাংশনটা আরেকটা ফাংশনকে রিটার্ন করতে পারছে।
    return () => {
      console.log("Returning another function");
      return a;
    };
  };

  console.log(myFunc()());
}

//IIFE (Immediately Invoked Function Expression)
(function () {
  console.log("IIFE test");
})();

//*************** */
//Pure Function
//এটি একটি পিওর ফাংশন কারনঃ
// এখানে ChangeLimit function টা তার Scope এর বাইরে থাকা Var limit= 100 এর ভ্যালুকে চেঞ্জ করতে পারে না, আমরা কিন্ত limit নামক ভ্যারিয়েবল টিকেই ChangeLimit ফাংশনের (num) এ আর্গুমেন্ট হিসেবে Pass করেছি, এরপর ফাংশনের মধ্যে num এর ভ্যালু ২৫০ করে দিয়েছি, এখন return num করলে console.log(changeLimit(limit)) এ ২৫০ দেখাবে, কিন্ত limit ভ্যারিয়েবলটাকেই আর্গুমেন্ট হিসেবে num প্যারামিটারে pass করা সত্বেও limkit এর ভ্যালু ২৫০ হবেনা, limit কে কনসোল করলে 100 ই আসবে। অর্থাৎ changeLimit ফাংশনটি var limit = 100 কে পরিবর্তন করলো না।  এজন্য একে বলা হয় Pure function
(function () {
  var limit = 100;

  function changeLimit(num) {
    num = 250;
    return num;
  }
  console.log(changeLimit(limit));
  console.dir(changeLimit);
  console.log(limit);
})();

//এটি pure ফাংশন নয়, কারন এখানে changeLimit ফাংশনটি তার scope এর বাইরে থাকা var limit =  100; এর ভ্যালু চেঞ্জ করে ফেলেছে।
(function () {
  var limit = 500;

  function changeLimit() {
    limit = 1200;
    return limit;
  }

  console.log(changeLimit());
  console.log(limit);
  console.dir(changeLimit);
})();

//বি দ্রঃ limit variable টিকে যদি সরাসরি changeLimit ফাংশনের ভেতর reassign করা হয় তাহলে limit এর ভ্যালু চেঞ্জ হয়ে 500 থেকে 1200 হয়ে যাবে। তখন এটি পিওর ফাংশন হবেনা।

//কিন্ত যদি limit variable টিকে সরাসরি changeLimit ফাংশনের ভেতর না লিখে একটা আর্গুমেন্ট হিসেবে ওই ফাংশনের প্যারামিটারের ভেতর পাস করা হয় তাহলে মূল var limit = 500 (১১৫ নাম্বার লাইনের মতো); তাহলে কিন্ত মূল var limit = 500; এর মান চেঞ্জ হবেনা, অর্থাৎ তখন এটি হবে পিওর ফাংশন কারন এটি তার scope এর বাইরে থাকা var limit = 500; এর মান চেঞ্জ করতে পারবে না।

//************* */
//Higher Order Function ****************
function gen2RanNum(max) {
  const ran1 = Math.floor(Math.random() * max);
  const ran2 = Math.floor(Math.random() * max);
  return {
    ran1: ran1,
    ran2: ran2,
  };
}
console.log(gen2RanNum(5));

let randomSum = (max) => {
  const { ran1, ran2 } = gen2RanNum(10); //Destructuring করা হয়েছে এখানে
  return ran1 + ran2;
};
console.log(randomSum());

//** */
//নিচের generate2RandomNumbers ফাংশনটি একটি Higher Order Function কারন এর আর্গুমেন্ট হিসেবে আরেকটা ফাংশনকে (fn ফাংশন) কে pass করা হয়েছে।
function generate2RandomNumbers(max, fn) {
  const random1 = Math.floor(Math.random() * max);
  const random2 = Math.floor(Math.random() * max);
  const result = fn(random1, random2);
  console.log(result);
}

generate2RandomNumbers(1000, (random1, random2) => {
  return random1 + random2;
});

generate2RandomNumbers(1000, (random1, random2) => {
  return random1 * random2;
});

generate2RandomNumbers(1000, (random1, random2) => {
  return random1 - random2;
});

//**** */
//**************** */
// .map() ফাংশনকে নিজেরা করার চেষ্টা করলাম, এর বিস্তারিত আছে ডিসকর্ডে Javascript : Class - 3 ( Higher Order Function ) রেকর্ডেড ক্লাসে
let sampleArray = [10, 2, 6, 12, 15, 16];

let myMap = function (array, cb) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(cb(array[i]));
  }
  return newArray;
};

console.log(
  myMap(sampleArray, (element) => {
    return element * 2;
  })
);
console.log(
  myMap(sampleArray, (element) => {
    return element * 3;
  })
);

console.log(sampleArray);

//.filter() ফাংশনকে নিজেরা বানানোর চেষ্টা করি
let simpleArray2 = [10, 2, 10, 5, 3, 2, 6, 8, 10, 21];

let myFilter = function (array, callBk) {
  let newArray = [];

  for (let i = 0; i < array.length; i++) {
    if (callBk(array[i])) {
      newArray.push(array[i]);
    }
  }
  return newArray;
};

console.log(
  myFilter(simpleArray2, (element) => {
    return element > 20;
  })
);

console.log(
  myFilter(simpleArray2, (element) => {
    return element >= 8;
  })
);

//.find() ফাংশনকে নিজেরা বানানোর চেষ্টা করি
{
  let simpleArray2 = [10, 12, 14, 16, 18, 19, 24];

  let myFind = function (array, callBk) {
    let newArray = [];

    for (let i = 0; i < array.length; i++) {
      if (callBk(array[i])) {
        newArray.push(array[i]);
      }
    }
    return newArray[0]; //এটা রিটার্ন করলে অ্যারের ১ম ইনডেক্সের ভ্যালু রিটার্ন করবে
    // return newArray[newArray.length-1]; //এটা রিটার্ন করলে অ্যারের শেষ ইনডেক্সের ভ্যালু রিটার্ন করবে
  };

  console.log(
    myFind(simpleArray2, (element) => {
      return element > 15;
    })
  );
}

{
  let testArray = [6, 9, 4, 10, 4, 19, 20];

  let myNewMap = function (array, cb) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
      newArray.push(cb(array[i]));
    }
    return newArray;
  };
  console.log(
    myNewMap(testArray, function (element) {
      return element * 2;
    })
  );

  console.log(
    myNewMap(testArray, function (element) {
      return element * 5;
    })
  );
}


//Closure
// var outerVariable = "AS-SUNNAHh";
function outerFunc() {
  var outerVariable = "AS-SUNNAH"; // outerVariable হলো outerFunc() ফাংশনের ভেতরে ডিক্লেয়ার করা একটি লোকাল ভ্যারিয়েবল।

  function innerFunc() {
    //innerFunc() হলো একটি inner ফাংশন যাকে outerFunc() ফাংশনের ভেতর ডিফাইন করার ফলে একটি ক্লোজার তৈরী হয়েছে।

    console.log(outerVariable); // এখানে innerFunc() ফাংশনটি তার outer scope এ থাকা outerVariable কে এক্সেস করতে পারছে।
  }
  innerFunc();
}
outerFunc();

{
  function doSomething(n) {
    if(n === 0) {
      console.log("TASK COMPLETED!")
      return // এটা base condition
    }
    console.log("I'm doing something.")
    doSomething(n - 1) // recursive call
  }
  doSomething(3)
}
