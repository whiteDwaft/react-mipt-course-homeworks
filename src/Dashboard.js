import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getBoards} from './service/fetchBoards';


export const useLoading = (callback) => {
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState(null);

    const activate = async () => {
        setLoading(true);

        Promise.resolve()
            .then(() => callback())
            .then((result) => {
                setResult(result);
            })
            .finally(() => {
                setLoading(false)
            });
    };

    return [activate, loading, result];
};

const wait = async () => {
    return new Promise(resolve => {
        setTimeout(() => resolve('MAGIC FROM WAIT'),
            1000);
    });
};


export const Dashboard = () => {
    const boards = useSelector((state) => {
        return state.boards
    });

    const dispatch = useDispatch();

    useEffect(() => {
        getBoards()
            .then(boards => {
                dispatch({
                    type: 'GET_BOARDS',
                    payload: boards
                });
            })
    }, [])

    return <div>
    </div>
};
























