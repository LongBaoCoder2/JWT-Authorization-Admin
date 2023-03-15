import React from "react";
import UserInfo from "./UserInfo/UserInfo";
import UserList from "./UserList/UserList";

const HomePage = () => {
  return (
    <div style={{ padding: "50px 100px" }}>
      <UserInfo />
      <UserList />
    </div>
  );
};

export default HomePage;
