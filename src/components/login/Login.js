import React, { useState } from "react";
import Styles from "./Login.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";

import { BsStopwatch } from "react-icons/bs";
import { Link } from "react-router-dom";
import loginAction from "../../redux/actions/loginAction";

const Login = () => {
  const user = useSelector((state) => state.loginUserReducer.user);
  const loginStatus = useSelector(
    (state) => state.loginUserReducer.loginStatus
  );
  console.log("ajhshjdbasj", user);
  const history = useHistory();

  const dispatch = useDispatch();
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginInfo({
      ...loginInfo,
      [name]: value,
    });
  };

  if (loginStatus === true) {
    history.push("/admin-panel");
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(loginAction(loginInfo));
  };

  return (
    <div className={Styles.loginSection}>
      <div className={Styles.formWrapper}>
        <div className={Styles.heading}>
          <BsStopwatch className={Styles.icons} />
          <p>
            <b>TMS</b>
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className={Styles.formHeading}>
            <h4>Sign In</h4>
            <p>Sign in to continoue to our application</p>
          </div>
          <div className={Styles.inputWrapper}>
            <input
              type="email"
              placeholder="Enter Email"
              name="email"
              value={loginInfo.email}
              onChange={handleChange}
            />
          </div>
          <div className={Styles.inputWrapper}>
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={loginInfo.password}
              onChange={handleChange}
            />
          </div>
          <div className={Styles.submitBtnStyle}>
            <input type="submit" value="Submit" />
          </div>
        </form>
        <div className={Styles.noAccount}>
          <p>Don't have an account? </p>
          <Link to="/sign-up">Sign Up</Link>
        </div>
      </div>
      <div className={Styles.imageWrapper}>
        <img src="./assets/logo.PNG" alt="formImage" />
      </div>
    </div>
  );
};

export default Login;
