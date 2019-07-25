import React, { Component } from 'react';
import { Switch, Route } from 'react-router';

import Main from "../Pages/Main/Main";

export default class App extends Component {
    render() {
        return (
            <div>
                <Route path="/" component={Main} />
            </div>
        );
    }
}