import React from "react";
import { useSelector } from "react-redux";
import "./Toast.css";

const Toast = () => {
  const toast = useSelector((state) => state.toast);
  const status = toast.isOpen ? "active" : "";
  return (
    <>
      <div className={`toast ${status} ${toast.type}`}>
        <div className={`check ${toast.type}`}>
          <ion-icon name="checkmark-outline" />
        </div>
        <div className="toast-content">
          <span className="message message-1">{toast.type}</span>
          <span className="message message-2">{toast.message}</span>
        </div>
        <div className={`process ${toast.type}`} />
      </div>
    </>
  );
};

export default Toast;
