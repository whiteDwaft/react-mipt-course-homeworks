import {useAuthorized} from "../context/AuthContext";


export const ProtectedComponent = ({children}) => {
    const authorized = useAuthorized();
    return <>
        {authorized && children}
    </>
}