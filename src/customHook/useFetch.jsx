import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const myHeaders = new Headers();
    myHeaders.append("x-apisports-key", "c83a1534564913724557f290c14eabab");
    fetch(url, { headers: myHeaders })
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch(err => setError(err));
  }, [url]);

  return [data, error];
};

export default useFetch;