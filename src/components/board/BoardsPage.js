import React, {useEffect} from 'react';
import {PageWrapper} from '../PageWrapper';
import {useDispatch, useSelector} from 'react-redux';
import {fetchBoards, fetchBoardsAction} from '../../reducers/boards';
import {LOADERS} from '../../reducers/loading';

const BoardsPageComponent = () => {
    const boards = useSelector((state) => state.boards);
    const loading = useSelector(state => state.loading[LOADERS.FETCH_BOARDS]);
    const dispatch = useDispatch(); //store.dispatch()
    console.log('[obabichev] boards', boards);

    useEffect(() => {
        dispatch(fetchBoardsAction())
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