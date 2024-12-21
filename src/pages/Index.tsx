import React from "react";
import {content_data} from "../posts/content.ts"; 
import { Post } from "../types/posts.ts";
import { NavLink } from "react-router";

export default function Index() {
    return (
        <div>
            <div>This ilogs a home page</div>
            {content_data.map((post: Post) => (
                <div key={post.id}>
                    <p>{post.title}</p>
                    <p>{post.date}</p>
                    <p>{post.autor}</p>
                    <NavLink to={`/blog/${post.id}`}>
                        Ver contenido
                    </NavLink>
                </div>
            ))}    
        </div>
    );
}
