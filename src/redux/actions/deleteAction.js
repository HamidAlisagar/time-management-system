import axios from "axios";
const deleteAction = (id) => async (dispatch) => {
  try {
    let token = localStorage.getItem("token");
    const response = await axios.delete(
      `http://34.210.129.167/api/users/${id}`,
      {
        headers: {
          Authorization: "Bearer" + token,
          "Content-Type": "application/json",
        },
      }
    );
    dispatch({ type: "DELETE_USER_SUCCESS", payload: response.data.message });
    console.log(response.data.message);
  } catch (err) {
    dispatch({ type: "DELETE_USER_FAILURE", err });
  }
};

export default deleteAction;
