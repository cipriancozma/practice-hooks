import axios from "axios";
import { useEffect, useState } from "react";

const FetchingDatawithAxios = () => {
  const [{ fact }, setData] = useState("");

  const fetchData = () => {
    axios.get("https://catfact.ninja/fact").then((res) => {
      setData(res.data);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <button onClick={fetchData}>Generate Cat Fact</button>
      <p>{fact}</p>
    </div>
  );
};

export default FetchingDatawithAxios;
