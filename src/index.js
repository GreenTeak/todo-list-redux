import React from "react";
import { render } from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducers/index"
import UserInfo from "./componets/userInfoComponet"
import {applyMiddleware,compose} from 'redux'
import TodoList from './componets/todoComponet'
import Login from './componets/loginComponet'
import { Router, Route, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';


import { createBrowserHistory } from "history";
import thunk from 'redux-thunk';
import {routerMiddleware, connectRouter, ConnectedRouter} from "connected-react-router";

const store = createStore(reducer, applyMiddleware(thunk));
const history = syncHistoryWithStore(hashHistory, store);

render(
    <Provider store={store}>
        <Router history={history}>
                <Route exact path="/" component={Login} />
                <Route path="/todos" component={TodoList} />
                <Route path="/UserInfo/:id" component={UserInfo} />
        </Router>
    </Provider>,
    document.getElementById("root")
);


