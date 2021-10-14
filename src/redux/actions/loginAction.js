import axios from "axios";

const loginAction = (loginData) => async (dispatch)=>{
    dispatch({type:"LOGIN_USER_REQ"});
    try{
       const response = await axios.post("http://34.210.129.167/api/login",loginData);
       if(response.status===200)
       {localStorage.setItem('token',response.data.token);
    
       console.log(response.data.user);
       dispatch({type:"LOGIN_USER_SUCCESS",payload:response.data.user});}
    }
    catch(err){
        dispatch({type:"LOGIN_USER_FAILURE",err})

    }
}

export default loginAction;