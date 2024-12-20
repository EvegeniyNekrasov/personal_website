import React from "react";
import "./header.css";

import { NavLink } from "react-router";

type LinkList = {
    id: number,
    url: string,
    title: string,
}

const linksList: LinkList[] = [
    {id: 1, url: "/", title: "Home" },
    {id: 2, url: "/about", title: "About" },
];

export default function Header() {
    return (
        <header>
            <nav>
                <ul role="list">
                    {linksList.map((link: LinkList) => (
                        <li key={link.id}>
                            <NavLink to={link.url}>
                                {link.title}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}
