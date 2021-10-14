import { initialState } from "../store/initialState";
const loginUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_USER_REQ":
      return {
        ...state,
        loading: true,
        loginStatus:false,
        error: null,
      };
    case "LOGIN_USER_SUCCESS":
      return {
        ...state,
        loading: false,
        loginStatus:true,
     user:action.payload,
      };
    case "LOGIN_USER_FAILURE":
     
      return {
        ...state,
        loading: false,
        loginStatus:false,
        error: action.payload
      };
    
    default:
      return state;
  }
};
export default loginUserReducer;