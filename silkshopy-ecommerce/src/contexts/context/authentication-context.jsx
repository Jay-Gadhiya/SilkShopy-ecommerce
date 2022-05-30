const { createContext, useContext, useReducer, useEffect, useState } = require("react");
const { authReducer } = require("../reducers/auth-reducer");


const AuthContext = createContext();
const useAuth = () => useContext(AuthContext);

const AuthProvider = ({children}) => {

    const [authState, authDispatch] = useReducer(authReducer, { token : null });
    const getToken = localStorage.getItem("token");

    useEffect(() => {
        authDispatch({type : "CHECK_TOKEN", payload : getToken });
    }, [])


    return (
        <AuthContext.Provider value={{authState, authDispatch, getToken}}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthProvider, useAuth };

