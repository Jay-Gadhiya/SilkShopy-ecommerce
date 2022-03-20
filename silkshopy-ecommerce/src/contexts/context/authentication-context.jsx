const { createContext, useContext, useReducer } = require("react");
const { authReducer } = require("../reducers/auth-reducer");


const AuthContext = createContext();
const useAuth = () => useContext(AuthContext);

const AuthProvider = ({children}) => {

    const [authState, authDispatch] = useReducer(authReducer, { token : null });


    return (
        <AuthContext.Provider value={{authState, authDispatch}}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthProvider, useAuth };

