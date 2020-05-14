import React from "react";
import {Login} from "./Login";
import {Register} from "./Register";
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import {Dashboard} from "./Dashboard";
import {BoardsPage} from './components/board/BoardsPage';
import {CreateBoardPage} from './components/board/CreateBoardPage';
import {Provider} from 'react-redux';
import {store} from './store';


const withAuth = (Component, auth) => {
    return (props) => {
        return <Component {...props} auth={auth}/>
    };
};


class App extends React.Component {
    constructor(props) {
        super(props);

        const tokens = localStorage.getItem('AUTH');

        this.state = {
            tokens: tokens || null
        }
    }

    auth = (tokens) => {
        this.setState({tokens})
    };

    render() {
        const {tokens} = this.state;
        return (
            <div>
                <Provider store={store}>
                    <h2>
                        My App
                    </h2>
                    <Router>
                        {!tokens && <Switch>
                            <Route path="/login" component={Login}/>
                            <Route path="/register" component={withAuth(Register, this.auth)}/>
                            <Redirect to="/login"/>
                        </Switch>}
                        {!!tokens && <Switch>
                            <Route exact path="/" component={Dashboard}/>
                            <Route exact path="/boards" component={BoardsPage}/>
                            <Route exact path="/create-board" component={CreateBoardPage}/>
                            <Redirect to="/"/>
                        </Switch>}
                    </Router>
                </Provider>
            </div>
        );
    }
}


export default App;
