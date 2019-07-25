import React, {Component} from "react";
import {NavLink} from "react-router-dom";

class SNB extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="snb">
                { this.props.children }
            </div>
        );
    }
}

export default SNB;