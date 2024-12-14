import { memo } from "react";

/* eslint-disable react/prop-types */
const Counter = ({ name, counter, handler, buttonName }) => {
  console.log('Counter component rendered ....');
  return (
    <>
      <div className="text-center mt-4 text-[24px]">
        {name} value is {counter}
      </div>
      <div className="flex items-center justify-center m-4">
        <button className="px-8 py-4 bg-blue-600 text-white" onClick={handler}>{buttonName}</button>
      </div>
    </>
  );
};

export default memo(Counter);

// এই কম্পোনেন্টে যে props গুলো আছে সেগুলোর মধ্যে একটা প্রপস আছে যেটা কিনা একটা ফাংশন, সেটা হলো handler প্রপস, এজন্য memo() ফাংশন দিয়ে র‍্যাপ করলেও এ কম্পোনেন্টের রি-রেন্ডার থামবে না, কারন ফাংশন হলো রেফারেন্স ডাটা টাইপ, প্রতিবার রি-রেন্ডার হওয়ার সময় এটার instance/ reference চেঞ্জ হয়ে যায়, তাই memo() দিয়ে র‍্যাপ করলেও এই কম্পোনেন্টের রি-রেন্ডার থামেনা।

//এই কম্পোনেন্টের রি-রেন্ডার থামাতে হলে যেখান থেকে handler ফাংশন টা এসেছে সেখানে গিয়ে useCallback() নামে আরেকটা হুক ব্যবহার করতে হবে

// https://drive.google.com/file/d/1xfii172OKS0tibYtsKRijSQW7Wrvckxp/view এই  ক্লাসে বিস্তারিত আছে এই টপিকের।