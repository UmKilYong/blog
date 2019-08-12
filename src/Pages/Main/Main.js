import React, {Component} from "react";
import {Route} from "react-router";
import {NavLink} from "react-router-dom";

import LNB from "../../Components/LNB";
import About from "../About/About";

export default class Main extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {
            match
        } = this.props;

        return (
            <div>
                <LNB/>

                <div className="content-wrapper">
                    <Route exact path={"/"} component={About} />
                    <Route path={"/about"} component={About} />
                    {/*<Route path={"/career"} component={Career} />*/}
                    {/*<Route path={"/project"} component={Project} />*/}
                </div>
            </div>
        )
    }
}