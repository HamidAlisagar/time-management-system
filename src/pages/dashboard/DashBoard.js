import React from "react";
import Styles from "./DashBoard.module.css";
import Login from "../../components/login/Login";

const DashBoard = () => {
  return (
    <div className={Styles.dashBoard}>
      <h2>Login Admin</h2>
      <Login />
    </div>
  );
};

export default DashBoard;
