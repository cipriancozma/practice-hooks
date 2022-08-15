import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

function FetchingDataWithReactQuery() {
  const { data, isLoading, isError, refetch } = useQuery(["cat"], () => {
    return axios.get("https://catfact.ninja/fact").then((res) => res.data);
  });

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    <h2>Something bad happened...</h2>;
  }

  return (
    <div>
      <p>{data?.fact}</p>
      <button onClick={() => refetch()}>Update</button>
    </div>
  );
}

export default FetchingDataWithReactQuery;
