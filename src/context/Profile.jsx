import React, { useContext } from "react";
import { ChangeProfile } from "./ChangeProfile";
import { UserContext } from "./MainPage";

function Profile() {
  const { userName } = useContext(UserContext);

  return (
    <div>
      Profile: User is {userName} <ChangeProfile />
    </div>
  );
}

export default Profile;
