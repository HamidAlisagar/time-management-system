import { initialState } from "../store/initialState";
const logoutReducers=(state = initialState, action)=>{
    switch(action.type){

       
            case "USER_LOGOUT":
            return {
                ...state,
                user:"",
            }
        default: return state
    }

}

export default logoutReducers;