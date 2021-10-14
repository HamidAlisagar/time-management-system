import { initialState } from "../store/initialState";
const registerReducer = (state = initialState, action) => {
  console.log(`user ${action.payload.userType}`);
  if(action.payload.userType==="user"){
  switch (action.type) {
    case "REGISTER_USER_REQ":
      return {
        ...state,
        loading: true,
        error: null,
        
      };
    case "REGISTER_USER_SUCCESS":
      return {
        ...state,
        loading: false,
        signUpMessage: action.payload,

      };
    case "REGISTER_USER_FAILURE":
     
      return {
        ...state,
        loading: false,
        error: action.payload
       
      };
      

    default:
      return state;
  }}
  else{
    switch (action.type) {
      case "REGISTER_MANAGER_REQ":
        return {
          ...state,
          loading: true,
          error: null,
          signUpStatus:false,
  
        };
      case "REGISTER_MANAGER_SUCCESS":
        return {
          ...state,
          loading: false,
          signUpStatus:true,
          signUpMessage: action.payload,
        };
      case "REGISTER_MANAGER_FAILURE":
       
        return {
          ...state,
          loading: false,
          signUpStatus:false,
          error: action.payload
        };
        
  
      default:
        return state;
    }

  }
};
export default registerReducer;