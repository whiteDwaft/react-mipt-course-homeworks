import React from 'react';
import {boards} from '../../service/boards';
import {withLoading} from '../../hocs/withLoading';
import {PageWrapper} from '../PageWrapper';

class BoardsPageComponent extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            boards: [],
        }
    }

    componentDidMount() {
        const {execute} = this.props;

        execute(boards)()
            .then(boards => {
                this.setState({boards});
            })
            .catch(error => {
                console.log(error);
            })
    }

    render() {
        const {boards} = this.state;
        const {loading, error} = this.props;
        return <PageWrapper loading={loading} error={error}>
            <h2>Boards</h2>
            {boards.map(board => {
                return (<div>
                    {board.title}
                </div>)
            })}
        </PageWrapper>;
    }
}

export const BoardsPage = withLoading(BoardsPageComponent);