import React, {Component} from "react";
import {NavLink} from "react-router-dom";

const LNB = () => {
    return (
        <div className="lnb">
            <ul>
                <li>
                    <h4>포트폴리오</h4>
                    <ul>
                        <li>
                            <NavLink to={"/portfolio"} activeStyle={{fontWeight : "bold"}}>
                                <h5>포트폴리오</h5>
                            </NavLink>
                        </li>
                    </ul>
                </li>
                <li>
                    <h4>Tech</h4>
                    <ul>
                        <li>
                            <NavLink to={"/tech/git"} activeStyle={{fontWeight : "bold"}}>
                                <h5>Git</h5>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={"/tech/react"} activeStyle={{fontWeight : "bold"}}>
                                <h5>React</h5>
                            </NavLink>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    )
};

export default LNB;