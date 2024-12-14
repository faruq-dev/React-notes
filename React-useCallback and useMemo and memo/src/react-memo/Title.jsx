/* eslint-disable react/prop-types */
import { memo } from "react";

const Title = ({ title }) => {

  console.log('Title component rendered ....');
  return (
    <div className="text-4xl font-bold text-center mt-8">{title}</div>
  )
}

export default memo(Title);


//এই কম্পোনেন্টের ভেতরে যেহেতু props আকারে কোনো ফাংশন আসে নাই তাই এই কম্পোনেন্টকে memo() ফাংশন দিয়ে র‍্যাপ করে দিলে এটার রি-রেন্ডার থেমে যাবে