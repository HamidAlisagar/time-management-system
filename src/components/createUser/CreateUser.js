import React, { useState } from "react";
import Styles from "./CreateUser.module.css";
import registerAction from "../../redux/actions/registerAction";
import { useDispatch } from "react-redux";

const CreateUser = () => {
  const dispatch = useDispatch();
  const [regularUser, setRegularUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    password_confirmation: "",
    userType: "user",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegularUser({
      ...regularUser,
      [name]: value,
    });
  };

  console.log(regularUser);
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(registerAction(regularUser));
  };

  return (
    <div className={Styles.loginSection}>
      <div className={Styles.formWrapper}>
        <form onSubmit={handleSubmit}>
          <div className={Styles.formHeading}>
            <h4>Create Regular User</h4>
          </div>
          <div className={Styles.inputWrapper}>
            <input
              type="text"
              placeholder="First name"
              name="firstName"
              value={regularUser.firstName}
              onChange={handleChange}
            />
          </div>
          <div className={Styles.inputWrapper}>
            <input
              type="text"
              placeholder="Last name"
              name="lastName"
              value={regularUser.lastName}
              onChange={handleChange}
            />
          </div>
          <div className={Styles.inputWrapper}>
            <input
              type="email"
              placeholder="Enter email"
              name="email"
              value={regularUser.email}
              onChange={handleChange}
            />
          </div>
          <div className={Styles.inputWrapper}>
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={regularUser.password}
              onChange={handleChange}
            />
          </div>
          <div className={Styles.inputWrapper}>
            <input
              type="password"
              placeholder="Confirm password"
              name="password_confirmation"
              value={regularUser.password_confirmation}
              onChange={handleChange}
            />
          </div>
          <div className={Styles.selectWraper}>
            <label>Select Role:</label>
            <select name="userType" onChange={handleChange}>
              <option value="user">User</option>
            </select>
          </div>
          <div className={Styles.submitBtnStyle}>
            <input type="submit" value="Sign Up" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateUser;
