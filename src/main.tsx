import React from "react";
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";

import Index from './pages/Index.tsx';
import About from './pages/About.tsx';
import Layout from "./pages/Layout.tsx";
import Post from "./pages/Post.tsx";
import ErrorPage from "./pages/404.tsx";

import "./styles/base.css";
import "./styles/global.css";


createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Index />} />
                <Route path="/about" element={<About />} />
                <Route path="/blog/:id" element={<Post /> } />
                <Route path="*" element={<ErrorPage /> } />
            </Route>
        </Routes>
  </BrowserRouter>,
)
