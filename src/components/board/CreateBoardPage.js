import React, {Component} from 'react';
import {PageWrapper} from '../PageWrapper';
import {createBoard} from '../../service/fetchBoards';
import {withLoading} from '../../hocs/withLoading';

class CreateBoardPageComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            title: '',
            key: '',
            category: {
                "key": "tech",
                "value": "Technology"
            },
            "icon": {
                "key": "1",
                "value": "..."
            }
        };
    }

    onClick = () => {
        createBoard(this.state)
            .then(result => {
            })
            .catch(error => {
                console.log('[obabichev] error', error)
            })
    };

    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    };

    render() {
        return <PageWrapper>
            <div>
                <div>
                    <span>
                        Title
                    </span>
                    <input name="title" value={this.state.title} onChange={this.onChange}/>
                </div>
                <div>
                    <span>
                        Key
                    </span>
                    <input name="key" value={this.state.key} onChange={this.onChange}/>
                </div>
                <button onClick={this.onClick}>Click me</button>
            </div>
        </PageWrapper>
    }

}

export const CreateBoardPage = withLoading(CreateBoardPageComponent);