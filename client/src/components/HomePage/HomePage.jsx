import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAllUserRequest } from "../../services/userService/userService";
import UserInfo from "./UserInfo/UserInfo";
import UserList from "./UserList/UserList";

const HomePage = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.login.currentUser);
  const isAuth = useSelector((state) => state.auth.login.isAuthentication);

  const dispatch = useDispatch();
  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }
    getAllUserRequest(user?.accessToken, dispatch);
  }, [isAuth]);

  return (
    <div style={{ padding: "50px 100px" }}>
      <UserInfo user={user} />
      <UserList />
    </div>
  );
};

export default HomePage;
