import { useContext, useState } from "react";
import { UserContext } from "./MainPage";

export const ChangeProfile = () => {
  const { setUserName } = useContext(UserContext);
  return (
    <div>
      <input onChange={(e) => setUserName(e.target.value)} />
      <button>Change username</button>
    </div>
  );
};
