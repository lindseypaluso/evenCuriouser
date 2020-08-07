import React from "react";
import Loading from "./Loading";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";

export const UserName = () => {
  const { user } = useAuth0();

  return (
          <>
          {user.name}
          </>
  );
};

export default UserName;
