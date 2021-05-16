
const LOCAL_SESSION_STORAGE_KEY = "mini-jira-session";

export const getSessionFromLocalStorage = () => {
    const rowData = localStorage.getItem(LOCAL_SESSION_STORAGE_KEY);
    if (!rowData){
        return null;
    }

    try{
        const TOKEN = JSON.parse(rowData);
        if(!TOKEN){
            return null;
        }
        return TOKEN;
    } catch (e){
        return null;
    }
}

export const setSessionToLocalStorage = (token) => {
    if(!token){
        localStorage.removeItem(LOCAL_SESSION_STORAGE_KEY);
    } else {
        localStorage.setItem(LOCAL_SESSION_STORAGE_KEY,JSON.stringify(token));
    }
}