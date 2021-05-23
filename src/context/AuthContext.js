import React , {useContext, useState} from "react"
import {getSessionFromLocalStorage, setSessionToLocalStorage} from "../utils/SessionLocalStorage";

const AuthContext = React.createContext({
    session: null,
    setSession: () => null
})

export const useAuthSession = () => {
    return useContext(AuthContext)
}

export const useAuthorized = () => !!useAuthSession().session;

export const AuthContextProvider = ({children}) => {
    const [session,setSession] = useState(() => getSessionFromLocalStorage());

    const onChangeSession = (session) => {
        setSessionToLocalStorage(session);
        setSession(session)
    }

    return <AuthContext.Provider value={{session,setSession: onChangeSession}}>
        {children}
    </AuthContext.Provider>
}