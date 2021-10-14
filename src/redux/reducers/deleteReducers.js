import { initialState } from "../store/initialState";
const deleteReducers = (state = initialState, action) => {
  switch (action.type) {
    case "DELETE_USER_SUCCESS":
      return {
        ...state,
        deleteMessage: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};
