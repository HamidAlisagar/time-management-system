const logoutAction = () => async(dispatch)=> {
    dispatch({type: "USER_LOGOUT"})
}
export default logoutAction;