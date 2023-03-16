import React from "react";
import { useSelector } from "react-redux";
import User from "./User";

const UserList = (props) => {
  const allUser = useSelector((state) => state.users.allUser);

  return (
    <div>
      {allUser?.map((user) => (
        <User key={user.id} username={user.username} email={user.email} />
      ))}
    </div>
  );
};

export default UserList;
