import React from "react";
import { useParams, useNavigate } from "react-router";
import MarkdownComponent from "../components/Markdown.tsx";
import { useEffect } from "react";
import { useState } from "react";


export default function Post() {
    const navigate = useNavigate();
    const {id} = useParams();
    const [post, setPost] = useState<null | string>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        if(!id) {
            navigate("/404", { replace: true });
            return;
        }


        const getPost = async () => {
            try {
                const req = await fetch(`/posts/${id}.md`);
                if(!req.ok) throw new Error("page not found");
                const text = await req.text();
                if(text.includes("<!doctype html>")) throw new Error("page not found");
                setPost(text);
            } catch(e) {
                console.error(e);
                setError(true);
            } finally {
                setLoading(false);
            }
        }

        getPost();
    }, [id, navigate]);

    useEffect(() => {
        if(error) {
            navigate("/404", { replace: true });
        }
    }, [error, navigate]);

    if(loading) return <span>Cargando...</span>;

    return (
        <div>
           {post && <MarkdownComponent content={post} />}
    </div>
    )
}
