import React from "react";
import "./UserInfo.css";

const UserInfo = () => {
  return (
    <div className="heading">
      <div className="title-info">
        <div className="title">All User</div>
        <div className="sub-title">28 user found</div>
      </div>
      <div className="user-info">
        <div className="noti-box icon">
          <ion-icon name="notifications-outline" />
        </div>
        <div className="search-box icon">
          <ion-icon name="search-outline" />
        </div>
        <div className="avatar">
          Nguyet Quynh
          <div className="username-tooltip">Sau con</div>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
