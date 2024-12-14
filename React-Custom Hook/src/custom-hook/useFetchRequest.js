import { useState, useEffect } from "react";

const useFetchRequest = (url) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const jsonData = await response.json();
        setData(jsonData);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);
  return { data, loading, error };
};

export default useFetchRequest;

//কাস্টম হুকের বিস্তারিত আছে এই ক্লাসে https://drive.google.com/file/d/1Z__n4w00sLcZ2sRTzXmaD3NtH0LlAjHM/view

//কাস্টম হুক তৈরী করতে হলে হুকের নাম অবশ্যই "use" শব্দটা দিয়ে শুরু করতে হবে, যেমন useFetchRequest, useData, useHandler ইত্যাদি।