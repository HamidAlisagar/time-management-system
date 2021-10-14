import React from "react";

import Styles from "./AdminPanel.module.css";
import { RiLogoutCircleLine } from "react-icons/ri";
import { BiUserCircle } from "react-icons/bi";
import { GoDashboard } from "react-icons/go";
import AllUsers from "../allUsers/AllUsers";
import CreateUser from "../createUser/CreateUser";
import Users from "../users/Users";
import SignUp from "../signUp/SignUp";
import logoutAction from "../../redux/actions/logoutAction";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useHistory } from "react-router";

const AdminPanel = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [tab, setTab] = useState("");
  var displayComponent;

  if (tab === "dashboard") {
    displayComponent = <AllUsers />;
  } else if (tab === "createuser") {
    displayComponent = <CreateUser />;
  } else if (tab === "createManager") {
    displayComponent = <SignUp />;
  } else if (tab === "userrecords") {
    displayComponent = <Users />;
  } else {
    displayComponent = <AllUsers />;
  }

  const logout = () => {
    localStorage.removeItem("token");
    dispatch(logoutAction());
    history.push("/");
  };

  return (
    <div className={Styles.adminPanelSection}>
      <div className={Styles.header}>
        <h1>Admin Panel</h1>
        <div>
          <BiUserCircle style={{ color: "white", width: 35, height: 35 }} />
          <h6>SuperAdmin</h6>
        </div>
      </div>
      <div className={Styles.dasboardWrapper}>
        <div className={Styles.sidebar}>
          <ul>
            <li>
              <GoDashboard className={Styles.dashboardIcons} />

              <button
                onClick={(e) => {
                  setTab("dashboard");
                }}
              >
                Dashboard
              </button>
            </li>
            <li>
              <BiUserCircle className={Styles.dashboardIcons} />

              <button
                onClick={(e) => {
                  setTab("createuser");
                }}
              >
                Create User
              </button>
            </li>
            <li>
              <BiUserCircle className={Styles.dashboardIcons} />

              <button
                onClick={(e) => {
                  setTab("createManager");
                }}
              >
                Create Manager
              </button>
            </li>
            <li>
              <BiUserCircle className={Styles.dashboardIcons} />

              <button
                onClick={(e) => {
                  setTab("userrecords");
                }}
              >
                User Records
              </button>
            </li>
            <li>
              <RiLogoutCircleLine className={Styles.dashboardIcons} />

              <button onClick={logout}>Logout</button>
            </li>
          </ul>
        </div>
        <div className={Styles.dashboardContent}>{displayComponent}</div>
      </div>
    </div>
  );
};

export default AdminPanel;
