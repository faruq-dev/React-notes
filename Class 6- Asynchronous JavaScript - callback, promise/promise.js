//Promise ____________
//Callback পদ্ধতির সমস্যা গুলোকে সমাধান করার জন্য এসেছে Promise. এটা একটা Constructor ফাংশন, অর্থাৎ একে লেখার আগে new দিয়ে লিখতে হয় এবং Promise এর P বড় হাতের হতে হবে। Promise এর প্যারেন্থিসিস () এর ভেতরে একটা ফাংশন দিতে হয়।

//Promise এর প্যারেন্থিসিস () এর ভেতরে যে কলব্যাক ফাংশনটা দিতে হয় সে ফাংশনটা ২টা প্যারামিটার রিসিভ করে, ১ম টা resolve, ২য় টা reject (যেকোনো নামেই এই প্যযারামিটার রিসিভ করা যায়, কিন্ত ১মটা resolve ও পরেরটা reject হবে)। এখানে resolve এবং reject হলো দুইটা আলাদা ফাংশন।

//Syntax:
const promise = new Promise((resolve, reject)=>{}); //reject দিয়ে ইরর হ্যান্ডেলিং করা হয়, আর resolve দিয়ে promise ফুলফিল হলে যে কাজটা করা হয়ে যায় সেই কাজের Data হ্যান্ডেল করা হয়। এখানে resolve এবং reject হলো দুইটা ফাংশন
console.log(promise);

// Promise এর তিনটা স্ট্যাটাস থাকে
// 1: Pending
// 2: Resolve
// 3:Reject

//উদাহরনস্বরুপ, ধরুন কেউ একজনকে একটা প্রমিস করলো, কিন্ত প্রমিসটা এখনো ফুলফিল করে নাই, তাহলে সেটা হবে Pending, যদি ফুলফিল করে ফেলে তাহলে সেটা হবে Resolve, যদি ফুলফিল করতে না পারে বা না করে তাহলে সেটা হবে Reject



//promise এর একটা use case:
const sitAvailableForCourse = !true; //যদি এটা true হয় তাহলে promise আমাদের resolve ডাটা দিবে, অন্যথায় reject এর মাধ্যমে error মেসেজ দিবে

const admissionCourse = new Promise((resolve, reject)=>{
  if (sitAvailableForCourse) {
    let studentData = {
      name: 'John Doe',
      age: 25,
      district: 'Dhaka'
    };
    resolve(studentData); //এখানে resolve ফাংশনের ভেতর স্টূডেন্ট ইনফরমেশন গুলো দিয়ে দিলাম আর্গুমেন্ট হিসেবে
  } else {
    reject(new Error('No Sit Available for the Course'));
    // এখানে reject() ফাংশনের ভেতরে Error হলো একটা Constructor ফাংশন, তাই এটাকে new Error এভাবে লেখা হয়েছে। আমরা যদি Error এর () এর ভেতর একটা মেসেজ লিখি তাহলে এই ফাংশনটা এই মেসেজটাকে দিয়ে একটা Error মেসেজ আমাদের জেনারেট করে দেয়।

    // আমরা যদি console.log(new Error('No Sit Available for the Course')) করি তাহলে দেখতে পাব একটা ইরর মেসেজ প্রিন্ট হচ্ছে। আবার console.log(new Error('No Sit Available for the Course').message) এভাবে লিখলে অনেক হাবিজাবি ইরর মেসেজের বদলে শুধু () এ থাকা মেসেজটা দিয়ে একটা ক্লিন ইরর জেনারেট করে।

    //মোট কথা new Error ফাংশন দিয়ে আমরা আমাদের পছন্দ মত মেসেজদিয়ে Error জেনারেট করতে পারি।

    // তাহলে reject() ফাংশনের ভেতর আমরা আর্গুমেন্ট হিসেবে একটা ইরর মেসেজ জেনারেট করে দিয়ে দিলাম। 
  }
});

// Promise funcrion execution
admissionCourse.then(
  (res)=>{
    console.log(res);
  }
).catch(
  (err)=>{
    console.log(err.message);
  }
);

// প্রমিজ ফাংশনকে এক্সকিউট করতে গেলে যাস্ট ফাংশনের নাম admissionCourse() এভাবে লিখে কল করলে হবেনা, কারন এই ফাংশনটা আমাদের resolve বা reject ডাটা দেয়, এই resolve ও reject কে আমাদের ধরতে হবে।

// এজন্য আমাদের ইউজ করতে হবে .then() ও .catch() । এগুলো হলো দুইটা মেথড (Promise এর মেথড) 

// .then দিয়ে ধরতে হয় resolve ডাটা আর .catch দিয়ে ধরতে হয় reject/error ডাটা।

//তাই admissionCourse() কে আমরা কল করব এভাবে admissionCourse().then().catch()

// .then ও .catch প্রত্যেকের (ব্র্যাকেট) এর ভেতরে ১টা ফাংশন দিতে হবে ৪৪ এবং ৪৮ নাম্বার লাইনের মত

// .then(function) এর ভেতরে থাকা ফাংশনটাই হচ্ছে 29 নাম্বার লাইনে promise ফাংশনের ভেতর কল করা resolve ফাংশন, 29 নাম্বার লাইনে ওখানে আমরা resolve() এর ভেতরে যে studentData আর্গুমেন্ট হিসেবে দিলাম সেটা .then() এর ভেতরে থাকা ফাংশন এর ভেতর res নামে প্যারামিটার হিসেবে রিসিভ করলাম। যেহেতু ***then এর ভেতরে থাকা ফাংশনটাই resolve ফাংশন*** যা ২৯ নাম্বার লাইনে কল হচ্ছে, আবার এই ফাংশনটাই new Promise() এর ভেতরে থাকা ফাংশনের প্যারামিটার হিসেবে গিয়েছে।

// .catch এর ক্ষেত্রেও একই কাজ, catch এর ভেতরে থাকা ফাংশনটাই হলো reject ফাংশন যা ৩১ নাম্বার লাইনে reject(new Error('No Sit Available for the Course')) এভাবে কল হয়েছে, কল হওয়ার সময় যে আর্গুমেন্ট আকারে new Error ('error message') দিয়েছি সেটাই ৪৮ নাম্বার লাইনে প্যারামিটার হিসেবে রিসিভ করলাম। যেহেতু catch এর ভেতরে ৪৮ নাম্বার লাইনে থাকা ফাংশনই হলো reject ফাংশন, এই ফাংশনটাই আবার new Promise() এর ভেতরে থাকা ফাংশনের প্যারামিটার হিসেবেও গিয়েছে।

// এই ক্লাস ভিডিওতে বিস্তারিত আছে https://drive.google.com/file/d/1WmubI-L33PqntYLyvGQqZuaKR-AUBKZY/view



//*******************
// সারাংশ হলো new Promise() ফাংশন আমাদের দেয় দুইটা ডাটা, 1: resolve data, 2: reject data
// resolve ডাটা কে ধরতে হয় .then দিয়ে আর reject ডাটা কে ধরতে হয় .catch দিয়ে
// .then ও .catch প্রত্যেকের ভেতরে আবার ১টা করে ফাংশন থাকে, যথাক্রমে resolve ফাংশন ও reject ফাংশন।
