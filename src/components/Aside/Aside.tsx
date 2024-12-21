import React from "react";
import "./aside.css";
import { NavLink } from "react-router";

export default function Aside() {
    return (
        <div className="aside-wrapper">
            <div className="logo-container">
                <NavLink to="/">
                    <h1>EAN</h1>
                </NavLink>
            </div>
        </div>
    );
}
