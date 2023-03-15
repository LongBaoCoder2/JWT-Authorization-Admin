import React from "react";
import User from "./User";

const UserList = () => {
  const dummyData = [
    {
      id: "2",
      username: "nguyetquynh",
      email: "nguyetquynh@gmail.com",
    },
    {
      id: "3",
      username: "longbao",
      email: "longbao@gmail.com",
    },
    {
      id: "4",
      username: "hagiang",
      email: "hagiang@gmail.com",
    },
    {
      id: "5",
      username: "giahuy",
      email: "giahuy@gmail.com",
    },
  ];

  return (
    <div>
      {dummyData.map((user) => (
        <User key={user.id} username={user.username} email={user.email} />
      ))}
    </div>
  );
};

export default UserList;
