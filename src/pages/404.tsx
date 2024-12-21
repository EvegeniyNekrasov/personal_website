import React from "react";
import { NavLink } from "react-router";


export default function ErrorPage() {
    return (
        <div>
            <h2>Opps... page not exist</h2>
            <NavLink to="/">
                <span>Back to home page</span>
            </NavLink>
        </div>
    )
}
