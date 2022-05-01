import React, {useState} from 'react'

const AuthContext = React.createContext({
    token: '',
    isiLoggedIn: false,
    login: (token) => {},
    logout: () => {}
});


export const AuthContextProvider = (props) => {

    const [token, setToken] = useState(null)

    const userIsLoggedIn = !!token;

    const loginHandler = () => {}

    const logoutHandler = () => {
        setToken(null)
    }

    const contextValue = {
        token,
        isiLoggedIn : userIsLoggedIn,
        login: loginHandler,
        logout: logoutHandler
    }

    return <AuthContext.Provider value = {contextValue}>{props.children}</AuthContext.Provider>
}

export default AuthContext