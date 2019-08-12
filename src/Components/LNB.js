import React, {Component} from "react";
import {NavLink} from "react-router-dom";

const LNB = () => {
    return (
        <div className="lnb">
            <ul>
                <li>
                    <NavLink to={"/about"} activeStyle={{fontWeight : "bold"}}>
                        <h4>About</h4>
                    </NavLink>
                </li>
                <li>
                    <NavLink to={"/career"} activeStyle={{fontWeight : "bold"}}>
                        <h4>Career</h4>
                    </NavLink>
                </li>
                <li>
                    <NavLink to={"/project"} activeStyle={{fontWeight : "bold"}}>
                        <h4>project</h4>
                    </NavLink>
                </li>
            </ul>
        </div>
    )
};

export default LNB;