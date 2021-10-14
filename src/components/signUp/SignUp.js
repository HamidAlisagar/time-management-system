import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import registerAction from "../../redux/actions/registerAction";
import { useHistory } from "react-router";

import Styles from "./SignUp.module.css";

const SignUp = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const signUpStatus = useSelector(
    (state) => state.registerReducer.signUpStatus
  );
  const [signUpInfo, setSignUpInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignUpInfo({
      ...signUpInfo,
      [name]: value,
    });
  };

  const register = () => {
    if (signUpStatus === true) {
      history.push("/");
    }
  };

  console.log(signUpInfo);
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(registerAction(signUpInfo));
    register();
  };

  return (
    <div className={Styles.loginSection}>
      <div className={Styles.formWrapper}>
        <form onSubmit={handleSubmit}>
          <div className={Styles.formHeading}>
            <h4>Sign Up</h4>
            <p>Sign up managers to login</p>
          </div>
          <div className={Styles.inputWrapper}>
            <input
              type="text"
              placeholder="First name"
              name="firstName"
              value={signUpInfo.firstName}
              onChange={handleChange}
            />
          </div>
          <div className={Styles.inputWrapper}>
            <input
              type="text"
              placeholder="Last name"
              name="lastName"
              value={signUpInfo.lastName}
              onChange={handleChange}
            />
          </div>
          <div className={Styles.inputWrapper}>
            <input
              type="email"
              placeholder="Enter email"
              name="email"
              value={signUpInfo.email}
              onChange={handleChange}
            />
          </div>
          <div className={Styles.inputWrapper}>
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={signUpInfo.password}
              onChange={handleChange}
            />
          </div>
          <div className={Styles.inputWrapper}>
            <input
              type="password"
              placeholder="Confirm password"
              name="password_confirmation"
              value={signUpInfo.password_confirmation}
              onChange={handleChange}
            />
          </div>
          <div className={Styles.submitBtnStyle}>
            <input type="submit" value="Sign Up" />
          </div>
        </form>
        <div className={Styles.noAccount}>
          <p>Already have an account? </p>
          <Link to="/">Sign in</Link>
        </div>
      </div>
      <div className={Styles.imageWrapper}>
        <img src="./assets/logo.PNG" alt="formImage" />
      </div>
    </div>
  );
};

export default SignUp;
