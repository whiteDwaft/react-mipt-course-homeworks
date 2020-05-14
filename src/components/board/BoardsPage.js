import React, {useEffect, useState} from 'react';
import {getBoards} from '../../service/fetchBoards';
import {PageWrapper} from '../PageWrapper';
import {useLoading} from '../../Dashboard';

const BoardsPageComponent = () => {
    const [fetchBoards, loading, boards] = useLoading(() => {
        return getBoards();
    });

    useEffect(() => {
        fetchBoards()
            .catch(error => {
                console.log(error);
            })
    }, []);

    return <PageWrapper loading={loading} error={null}>
        <h2>Boards</h2>
        {(boards || []).map(board => {
            return (<div>
                {board.title}
            </div>)
        })}
    </PageWrapper>;
};

export const BoardsPage = BoardsPageComponent;