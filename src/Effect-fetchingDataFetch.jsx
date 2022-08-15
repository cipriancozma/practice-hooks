import { useEffect, useState } from "react";

const FetchingDatawithFetch = () => {
  const [data, setData] = useState("");

  const fetchData = async () => {
    const data = await fetch("https://catfact.ninja/fact/");
    const response = await data.json();
    setData(response);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <button onClick={fetchData}>Generate Cat Fact</button>
      <p>{data.fact}</p>
    </div>
  );
};

export default FetchingDatawithFetch;
