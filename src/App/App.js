import React, { Component } from 'react';
import { Switch, Route } from 'react-router';

import Main from "../Pages/Main/Main";
import About from "../Pages/About/About";

export default class App extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Main} />
                <Route path="/about" component={About} />
            </Switch>
        );
    }
}