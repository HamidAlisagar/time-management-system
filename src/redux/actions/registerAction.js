import axios from "axios";
let tokenData = localStorage.getItem("token");
const registerAction = (registerData) => async (dispatch) => {
  if (registerData.userType === "user") {
    dispatch({ type: "REGISTER_USER_REQ" });

    try {
      const response = await axios.post(
        "http://34.210.129.167/api/users",
        registerData,
        {
          headers: {
            Authorization: "Bearer " + tokenData,
          },
        }
      );
      console.log(response);
      dispatch({
        type: "REGISTER_USER_SUCCESS",
        payload: response.data.message,
      });
    } catch (err) {
      dispatch({ type: "REGISTER_USER_FAILURE", err });
    }
  } else {
    dispatch({ type: "REGISTER_MANAGER_REQ" });

    try {
      const headers = {
        "Content-Type": "application/json",
        Authorization: "Bearer" + tokenData,
      };
      const response = await axios.post(
        "http://34.210.129.167/api/register",
        registerData,
        {
          headers: headers,
        }
      );
      console.log(response);
      dispatch({
        type: "REGISTER_MANAGER_SUCCESS",
        payload: response.data.message,
      });
    } catch (err) {
      dispatch({ type: "REGISTER_MANAGER_FAILURE", err });
    }
  }
};

export default registerAction;
