import {useEffect, useState} from 'react';
import axios from "axios";


export const useFetch = (type, url, params,func) => {
    let promise;
    console.log("url");
    const [dat, setResBody] = useState([]);
    console.log("url1");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        if (type === "post") {
            promise = fetch(url, {
                method: type,
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify(params)
            })
        } else {
            promise = fetch(url);
        }
        promise.then(resp => resp.json())
            .then(data => {
                setResBody(data);
                func(data);
            })
            .catch((e) => setError(e.message))
            .finally(() => setLoading(false));
    }, [params, url]);

    return [dat, loading, error];
};

export const register = (body) => () => {
    return axios.post("/api/auth/register", body);
};

export const getCategoties = () => () => {
    return axios.get("/api/dictionaries/categories").then(response => response.data);
};

export const getBoardIcons = () => () => {
    return axios.get("/api/dictionaries/board-icons").then(response => response.data);
};
