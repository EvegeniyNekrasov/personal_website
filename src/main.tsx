import React from "react";
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

import Index from './pages/Index.tsx';
import About from './pages/About.tsx';
import Layout from "./pages/Layout.tsx";
import Post from "./pages/Post.tsx";
import ErrorPage from "./pages/404.tsx";

import "./styles/base.css";
import "./styles/global.css";

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
    <QueryClientProvider client={queryClient}>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Index />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/blog/:id" element={<Post /> } />
                    <Route path="/404" element={<ErrorPage /> } />
                    <Route path="*" element={<ErrorPage /> } />
                </Route>
            </Routes>
        </BrowserRouter>
  </QueryClientProvider>
)
