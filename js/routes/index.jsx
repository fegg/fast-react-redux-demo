import React from 'react';
import configureStore from '../store';
import { Router, Route, browserHistory } from 'react-router';
import { App, UserListApp, UserDetailApp } from '../containers';

let store = configureStore();

/* react router 2.x 必须配置 browserHistory */
const routes = (
    <Router history={browserHistory}>
        <Route path="/" component={App}></Route>
        <Route path="/users" component={UserListApp}></Route>
        <Route path="/users/:id" component={UserDetailApp}></Route>
    </Router>
);

export default routes;