// Asynchronous JavaScript - callback, promise ********

// কোনটা synchronous আর কোনটা Asynchronous কোড সেটা বোঝার কয়েকটা উপায় আছে, যেমন ...
// setTimeout() এবং setInterval() এই দুটা কোড যদি জাভাস্ক্রিপ্ট ইঞ্জিন দেখে তাহলে সে ধরে নিবে এটা একটা Asynchronous কোড। setTimeout() এবং setInterval() হচ্ছে দুইটা বিল্ট ইন ফাংশন।

//setTimeout()_____________
//এটা হলো একটা Higher Order Function, কারন setTimeout() ফাংশন তার প্যারেন্থিসিস() এর ভেতরে আর্গুমেন্ট হিসেবে আরেকটা ফাংশন রিসিভ করে। ওদিকে setTimeout() ফাংশন তার প্যারেন্থিসিস() এর ভেতরে যে ফাংশনটাকে আর্গুমেন্ট হিসেবে নিলো সেটা হলো কলব্যাক ফাংশন।

// যে ফাংশন তার প্যারেন্থিসিস() এর ভেতরে আর্গুমেন্ট হিসেবে আরেকটা ফাংশনকে রিসিভ করতে পারে তাকে Higher Order Function বলে। অথবা কোনো ফাংশন যদি তার ভেতর আরেকটা ফাংশনকে রিটার্ন করে তাহলেও সে Higher Order Function হবে। **very important topic***

// যে ফাংশনকে আমরা অন্য কোনো ফাংশনের ভেতরে আর্গুমেন্ট হিসেবে পাস করি/করতে পারি তাকে বলা হয় কলব্যাক ফাংশন। **very important topic***

// setTimeout() Syntax:
setTimeout(function(){
  console.log('This is a setTimeout function');
}, 5000); //setTimeout() ফাংশনের ভেতর ২টা আর্গুমেন্ট দিতে হয়, প্রথম আর্গুমেন্ট হিসেবে একটা কলব্যাক ফাংশন দিতে হয় (সেই কলব্যাক ফাংশনের ভেতরেই setTimeout ফাংশন দ্বারা কিকাজ করা হবে সেটা বলে দেওয়া হয়), ২য় আর্গুমেন্টে দিতে হয় একটা টাইমার (মিলিসেকেন্ড আকারে দিতে হয়, এখানে আমরা ৫০০০ মিলিসেকেন্ড দিলাম, মানে ৫ সেকেন্ড)।

// এই টাইমারের কাজ হলো এখানে যত সেকেন্ড দেওয়া হবে তত সেকেন্ড পরে seTimeout() ফাংশনটা এক্সকিউট হবে অর্থাৎ ১ম আর্গুমেন্টে থাকা কলব্যাক ফাংশনের ভেতরে বলে দেওয়া কাজটা সম্পন্ন হবে।
// console.log('Hello World');

// স্বাভাবিক নিয়মে এখানে ১৪ নাম্বার লাইনের ফাংশনের কাজটা সম্পন্ন হয়ে এরপর ১৯ নাম্বার লাইনের থাকা কনসোলের কাজটা সম্পন্ন হওয়ার কথা, কিন্ত  ১৪ নাম্বার লাইনের setTimeout যেহেতু একটা Asynchronous কাজ এবং এতে ৫ সেকেন্ডের একটা delay দেওয়া হয়েছে, এক্ষেত্রে জাভাস্ক্রিপ্ট ১৪ নামাব্র লাইনের কোডের জন্য ৫ সেকেন্ড ওয়েট না করেই ১৯ নাম্বার লাইনের Hello World কনসোল করে ফেলবে, এরপর ৫ সেকেন্ড পর ১৪ নাম্বার লাইনে কোড এক্সিকিউট হয়ে This is a setTimeout function প্রিন্ট হবে, যেহেতু ৫ সেকেন্ড ডিলে দেওয়া হয়েছিলো।

// Delay দেওয়ার ফলে পরের লাইনের কোড আগে এক্সিকিউট হয়ে গেলো, আর আগের লাইনের কোড ৫ সেকেন্ড পরে এক্সিকিউট  হলো এটাই Asynchronous বিহেভিয়ার।



////setInterval()_____________
// setInterval(function(){
//   console.log('This is a setInterval function');
// }, 20000000);

// console.log('setInterval testing');

//setInterval() ফাংশনের সিনট্যাক্স ও কাজের ধরন হুবহু setTimeout() ফাংশনের মতই, সামান্য একটু পার্থক্য রয়েছে।

// পার্থক্য হলো setTimeout() এ যত সেকেন্ড delay দেওয়া হবে তত সেকেন্ড পরে seTimeout() এর ভেতরে থাকা কাজ বা ফাংশনটা এক্সকিউট হবে ১ বারের জন্য।

// কিন্ত setInterval() এ যত সেকেন্ড delay দেওয়া হবে তত সেকেন্ড পর পর setInterval() এর ভেতরে থাকা কাজ বা ফাংশনটা এক্সকিউট হতেই থাকবে, লুপের মত চলবেই থাকবে। 

// ২৮ নাম্বার লাইনে ২ সেকেন্ড পর পর setInterval() এর ভেতরে থাকা কনসোলে This is a setInterval function প্রিন্ট হতে থাকবে।

//________________________________________________________________________________________

//জাভাস্ক্রপ্টে এর ক্ষেত্রে যে কাজগুলো করতে কিছুক্ষন লেট হবে / delay হবে সেই কাজগুলোই হচ্ছে Asynchronous টাস্ক/কাজ

// জাভাস্ক্রিপ্ট ইঞ্জিন আগে Synchronous কাজগুলোকে করে ফেলে, এরপর Asynchronous কাজগুলোকে করে।

// Asynchronous এর বিস্তারিত আছে এই ভিডিওতে https://drive.google.com/file/d/1WmubI-L33PqntYLyvGQqZuaKR-AUBKZY/view

//Asynchronous কাজগুলোকে হ্যান্ডেল করা হয় ৩ ভাবে, যথাঃ
// ১ঃ Callback
// ২ঃ Promise
// ৩ঃ Async Await 

//Callback ____________
const takeOrder = (customer, callback) => {
    console.log(`Take order for ${customer}`);
    callback(customer);
};

const processOrder = (customer, callback) => {
  console.log(`Process order for ${customer}`);
  setTimeout(()=>{
    console.log(`Cooking order for ${customer}`);
    console.log(`Order Served to ${customer}`);
    callback(customer);
  }, 1000)
};

const completeOrder = (customer) => {
  console.log(`Order completed successfully for ${customer}`);
};

takeOrder('Omar', (customer)=> {
  processOrder(customer, (customer)=>{
    completeOrder(customer)
  })
});


// takeOrder()
// processOrder('Omar');
// completeOrder('Omar');
// 81,82,83 লাইনের মত এভাবে না করে উপরে কলব্যাক ফাংশনের সাহায্যে করলাম (৭৪ নাম্বার লাইন)


//Promise ________________________________________________________________
//Promise এর বিস্তারিত দেওয়া আছে এই ফোল্ডারের promise.js ফাইলে 
const sitAvailableForCourse = !true; 

const admissionCourse = new Promise((resolve, reject)=>{
  if (sitAvailableForCourse) {
    let studentData = {
      name: 'John Doe',
      age: 25,
      district: 'Dhaka'
    };
    resolve(studentData);
  } else {
    reject(new Error('No Sit Available for the Course'));
  }
});

admissionCourse.then(
  (res)=>{
    console.log(res);
  }
).catch(
  (err)=>{
    console.log(err.message);
  }
);