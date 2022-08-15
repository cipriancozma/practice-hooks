import React, { useContext } from "react";
import { UserContext } from "./MainPage";

function Home() {
  const { userName } = useContext(UserContext);

  return <div>Home and user is: {userName}</div>;
}

export default Home;
