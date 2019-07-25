import React, {Component} from "react";
import {Route} from "react-router";
import {NavLink} from "react-router-dom";

import LNB from "../../Components/LNB";
import Portfolio from "../Portfolio/Portfolio";
import TechGit from "../Tech/Git/TechGit";
import TechReact from "../Tech/React/TechReact";

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
                    <Route exact path={"/"} component={Portfolio} />
                    <Route path={"/portfolio"} component={Portfolio} />
                    {/*<Route path={"/tech"} component={TechGit} />*/}
                    <Route path={"/tech/git"} component={TechGit} />
                    <Route path={"/tech/react"} component={TechReact} />
                </div>
            </div>
        )
    }
}