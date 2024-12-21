import React from "react";
import { Outlet } from "react-router";
import Header from "../components/Header/Header";

import "./layout.css";
import Aside from "../components/Aside/Aside.tsx";

export default function Layout() {
    return (
       <main>
            <div className="container-wrapper">
                <Outlet />
                <Aside />
            </div>
       </main>
    );
};
