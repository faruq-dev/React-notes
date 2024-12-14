import { useCallback, useMemo, useState } from "react";
import Title from "../react-memo/Title";
import Counter from "../react-memo/Counter";

const App = () => {
  const [counter1, setCounter1] = useState(1);
  const [counter2, setCounter2] = useState(1);
  const [counter3, setCounter3] = useState(1);


  //useCallback() এর সিনট্যাক্স কিছুটা useEffect() এর মতো, কারন useCallback এও ডিপেন্ডেন্সি দেওয়া লাগে। কিন্ত সিনট্যাক্স দেখতে একই হলেও কাজ ভিন্ন। (বিস্তারিত Counter.jsx কম্পোনেট পেইজে)

  // useCallback হুকের সিনট্যাক্সঃ const abcd = useCallback(()=>{}, [dependency])
  const handleAddTwo = useCallback(() => {
    setCounter1(counter1 + 2);
  }, [counter1]); //এখানে ডিপেন্ডেন্সি হিসেবে counter1 দিলাম

  const handleAddFive = useCallback(() => {
    setCounter2((prevCounter)=> prevCounter + 5);
  }, []); //এখানে আমরা prevState এর মাধ্যমে স্টেট আপডেট করেছি, তাই ডিপেন্ডেন্সি দেওয়া লাগবে না। ডিপেন্ডেসি না দেওয়ার অর্থ হলো বাইরের কিছুর উপর এই useCallback টা ডিপেন্ডেন্ড না, যদি ডিপেন্ডেন্সি দেওয়া হতো তাহলে counter1 স্টেট এর মান চেঞ্জ হওয়ার সাথে সাথে useCallback নতুন মান টাকে মনে রাখতো, আগের মানটা ভুলে যেতো, যেহেতু নতুন মান মনে রাখতো তাই এই হ্যান্ডেল ফাংশন যেই বাটনে প্রপ্স আকারে যাবে সেই বাটন কম্পোনেন্টও রি-রেন্ডার হতো। কারন তার  প্রপ্স চেঞ্জ হয়েছে।

  // ডিপেন্ডেন্সি না দেওয়ার ফলে useCallback টা স্টেটের মানের উপর ডিপেন্ডেন্ড না, তাই স্টেট চেঞ্জ হলেও useCallback পুরাতন স্টেটের মানটাকেই মনে রাখবে, তাই এই হ্যান্ডেল ফাংশন যেই বাটনে প্রপ্স আকারে যাবে সেই বাটন কম্পোনেন্ট রি-রেন্ডার হবেনা।

  // **ডিপেন্ডেন্সি ছাড়া useCallBack ইউজ করতে হলে prevState এর মাধ্যমে স্টেট আপডেট করতে হবে।

  // বিস্তারিত https://drive.google.com/file/d/1xfii172OKS0tibYtsKRijSQW7Wrvckxp/view

  const handleAddTen = useCallback(() => {
    setCounter3((prevCounter)=> prevCounter + 10);
  }, []);

  
  const expensiveOperation = useMemo(() => {
    let result = 0;
    for (let i = 0; i < 1000000000; i++) {
      result += counter1 + 1; 
      // console.log(result);
    };
    return result;
  }, [counter1]);
  return (
    <>
      <Title title="We are learning react memoization" />
      <Counter name='Counter 1' counter={counter1} handler={handleAddTwo} buttonName='Increment By Two' />
      <hr />
      <Counter name='Counter 2' counter={counter2} handler={handleAddFive} buttonName='Increment By Five' />
      <hr />
      <Counter name='Counter 3' counter={counter3} handler={handleAddTen} buttonName='Increment By Ten' />
      <h2 className="text-center text-2xl font-bold">Expensive operation result is : {expensiveOperation}</h2>
    </>
  );
};

export default App;

//React বা জাভাস্ক্রিপ্টে memoization হলো এমন একটি কৌশল যা কোনো ফাংশন বা কম্পোনেন্টের ফলাফল ক্যাশ করে রাখে, যাতে পরবর্তীতে একই ইনপুট দিয়ে ফাংশন বা কম্পোনেন্টটি পুনরায় কল করলে ক্যাশ করা ফলাফল রিটার্ন করা যায়, নতুন করে প্রসেসিং না করেও।

// নতুন করে প্রসেসিং না করেই যেহেতু ক্যাশ করে রাখা ফলাফল দেখানো হয় তাই পুরো প্রসেস অনেক ফাস্ট হয়, অপ্রোয়োজনীয় প্রসেসিং এড়ানো যায়

// useCallback() হুকের কাজ হলো ফাংশন/ফাংশনের রেফারেন্স টাকে মনে রাখা
// memo() ফাংশনের কাজ হলো কোনো কম্পোনেন্টের রি-রেন্ডার থামানো, কোনো কম্পোনেন্টকে memo() ফাংশন দিয়ে র‍্যাপ করে দিলে সেই কম্পোনেন্টের রি-রেন্ডার থেমে যাবে, তবে শর্ত হলো সেই ফাংশনে প্রপস আকারে কোনো ফাংশন দেওয়া যাবে না, দিলে রি-রেন্ডার থামবে না। আরেকটা বিষয় হলো প্রপস চেঞ্জ হলে memo() দিয়ে র‍্যাপ করা সত্বেও কম্পোনেন্ট রি-রেন্ডার হবে। 

// মূলত অপ্রয়োজনীয় রেন্ডার থামানোর/আটকানোর জন্য useCallback() ও memo() ইউজ করা হয়

// বিস্তারিত https://drive.google.com/file/d/1xfii172OKS0tibYtsKRijSQW7Wrvckxp/view



//**** useMemo()**********/
// কোনো ফাংশনের রিটার্ন করা ভ্যালুটাকে মনে রাখা বা memoization করার জন্য useMemo() হুক ব্যবহার করা হয়
//সিনট্যাক্সঃ const abcd = useMemo(()=>{}, [dependency])

// useMemo এর সিন্যটাক্সও useEffect() বা useCallback এর মতই, কিন্ত কাজ ভিন্ন
