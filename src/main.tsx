import React from "react";
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";

import Index from './pages/Index.tsx';
import About from './pages/About.tsx';

import "./styles/base.css";
import "./styles/global.css";


createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
        <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
        </Routes>
  </BrowserRouter>,
)
