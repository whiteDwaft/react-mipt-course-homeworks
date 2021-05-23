import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";
import {Tasks} from "./Tasks/Tasks";
import React from "react";
import {BoardsPage} from "./Boards/BoardsPage";
import RegisterPage from "./SignIn&Up/RegisterPage";
import AuthPage from "./SignIn&Up/AuthPage";
import {useAuthorized} from "../context/AuthContext";
import {CreateBoardPage} from "./CreateBoard/CreateBoardPage";
import {GoogleAuthComponent} from "./SignIn&Up/GoogleAuthComponent";
import CreateTaskPage from "./CreateTask/CreateTaskPage";



export const AppRouter = () => {
    const authorized = useAuthorized();
    console.log(authorized);
    return <div>
        <BrowserRouter>
            <Switch>
                {!authorized && <Route exact path="/register" component={RegisterPage} />}
                {!authorized && <Route exact path="/auth" component={AuthPage} />}
                <Route exact path="/board/:key" component={Tasks}/>
                <Route exact path="/google" component={GoogleAuthComponent}/>
                <Route exact path="/create/board" component={CreateBoardPage}/>
                <Route exact path="/create/task/:id" component={CreateTaskPage}/>
                <Route exact path="/" component={BoardsPage}/>
                <Redirect to="/"/>
            </Switch>
        </BrowserRouter>
    </div>

    // http://localhost:3000/google#
    // id_token=eyJhbGciOiJSUzI1NiIsImtpZCI6ImRlOTU1NmFkNDY4MDMxMmMxMTdhZmFlZjI5MjBmNWY5OWE0Yzc5ZmQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhenAiOiI0MTY1MjA4MjQwMDUtaTdyZ250NWZjbTdyZDEyYXY3cDdoNzBuZHZubWpvZHAuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJhdWQiOiI0MTY1MjA4MjQwMDUtaTdyZ250NWZjbTdyZDEyYXY3cDdoNzBuZHZubWpvZHAuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJzdWIiOiIxMTIzNTE5NjczNDcyNjk3NTA2NzAiLCJoZCI6InBoeXN0ZWNoLmVkdSIsImVtYWlsIjoiYWFrb3JzYWNoZXZAcGh5c3RlY2guZWR1IiwiZW1haWxfdmVyaWZpZWQiOnRydWUsIm5vbmNlIjoiMTYxOTMzNzAyNDcxMX0iLCJuYW1lIjoi0JDQvdGC0L7QvSDQkNC90LTRgNC10LXQstC40Ycg0JrQvtGA0YHQsNGH0LXQsiIsInBpY3R1cmUiOiJodHRwczovL2xoNC5nb29nbGV1c2VyY29udGVudC5jb20vLTA0eTFra0tFeGNnL0FBQUFBQUFBQUFJL0FBQUFBQUFBQUFBL0FNWnV1Y203a081Q2JNZEVJOUg0SjFxUjV1bXJ6eVJnbFEvczk2LWMvcGhvdG8uanBnIiwiZ2l2ZW5fbmFtZSI6ItCQ0L3RgtC-0L0g0JDQvdC00YDQtdC10LLQuNGHIiwiZmFtaWx5X25hbWUiOiLQmtC-0YDRgdCw0YfQtdCyICIsImxvY2FsZSI6InJ1IiwiaWF0IjoxNjE5MzM4NDQ5LCJleHAiOjE2MTkzNDIwNDksImp0aSI6IjNhMzhlYWQ2YTg0NzFhYmZiYzFjODk3Y2ZhMzliZWEzZDFlY2I0MmMifQ.Uy-4MAQrXVSi10IHgsQFRsKEOGLvccs3iVu7Jm2UdoglNB_QbllxOE0e-VqWpAcVdsUht-3xbMqmtM_FqDd1dwrDIlFYc1fvCJhz4YzvVzDqXb_5wt-fypjldViDdgoTj3_rcx56B60rLii_ZCIrwi5kKFtfxSwmDxgPQZyKhRIb6viz9eyWpQz5Iqvow9p50h5VvWZh3mq029Is7yD4HeNiv5QNf2sfL4ZRlx7h0bZFjvNB4PilZBnhk9amLMeKiT_gC3qfK-Ntp2HF2angptbDDL2VoHhgNFvJ33c3U6SnPjHk83p_qi9aENSmdvPqJLg3EyBXgKlqCNiDpnfeFQ
    // &authuser=1
    // &hd=phystech.edu
    // &prompt=none
}

