import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";
import {Tasks} from "./Tasks";
import React from "react";
import {BoardsPage} from "./BoardsPage";


export const AppRouter = () => {
    return <div>
        <BrowserRouter>
            <Switch>
                <Route exact path="/boards" component={BoardsPage}/>
                <Route exact path="/board/:key" component={Tasks}/>
                <Redirect to="/"/>
            </Switch>
        </BrowserRouter>
    </div>
}

