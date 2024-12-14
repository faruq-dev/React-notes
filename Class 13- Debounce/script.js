// Debounce হলো একটি প্রোগ্রামিং টেকনিক, যা একটি নির্দিষ্ট সময়ের মধ্যে একাধিকবার ট্রিগার হওয়া ইভেন্টগুলিকে একটি মাত্র ইভেন্টে পরিণত করে। অর্থাৎ, যখন একটি ইভেন্ট বারবার সংঘটিত হয়, Debounce ফাংশন সেই ইভেন্টকে ধরে রাখে এবং একটি নির্দিষ্ট সময়ের মধ্যে আর কোনো ইভেন্ট না ঘটলে শুধুমাত্র একবার সেটি চালায়।


// নিচের ডিবাউন্স ফাংশনটি একটি সার্চ ইনপুট বক্সের ইভেন্ট কন্ট্রল করতে ব্যবহুত হবে। যখন কোনো সার্চ বারে আমরা কিছু টাইপ করি তখন প্রতিটা কী-প্রেসের সাথে সাথে API তে সার্চ রিকোয়েস্ট যেতে থাকে, এটা বন্ধ করাআর জন্য ডিবাউন্স টেকনিক ব্যবহুত হয়, এর ফলে প্রতিটা কী-প্রেসের সাথে সাথে API তে সার্চ রিকোয়েস্ট না গিয়ে একটা নির্দিষ্ট সময় পর পর API তে রিকোয়েস্ট যাবে। অর্থাৎ অনেকগুলো কী-প্রেসের ইভেন্ট গুলোকে আটকে রাখা হবে, এবং নির্দিষ্ট সময় পর শুধু একবার ইভেন্ট ফায়ার ফবে।
// Debounce Part *******
const formInput = document.getElementById('form-input')
// const button = document.getElementById('button');

//Debounce Handler
function debounce(fn, delay){

  let timerID
  return function(...args){
    if(timerID){
      clearTimeout()
    };

    timerID = setTimeout(()=>fn.apply(this, args), delay);
  };

};


 formInput.addEventListener('input', debounce((e)=>{
    console.log(e.target.value);
 }, 3000));




//debounce handler
// function debounce (fn, delay){
//   let timeoutID
//   return function (){
//     if(timeoutID){
//       clearTimeout(timeoutID)
//     }
//     timeoutID = setTimeout(()=>{
//       fn()
//     }, delay)
//   };
// }

// button.addEventListener('click', debounce(()=> console.log('clicked'), 500));


