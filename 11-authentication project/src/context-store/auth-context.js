import React from "react";

const AuthContext = React.createContext({
    isLoggedIn : false,
    handleLogOut : null
})


export default AuthContext;