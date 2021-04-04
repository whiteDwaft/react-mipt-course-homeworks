import {useEffect, useState} from 'react';


export const useFetch = (url) => {
    console.log(url);
    const [dat, setResBody] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        fetch(url)
            .then(resp => resp.json())
            .then(data => setResBody(data))
            .catch((e) => setError(e.message))
            .finally(() => setLoading(false));
    }, [url]);

    return [dat, loading, error];
}