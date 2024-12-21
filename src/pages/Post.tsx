import React from "react";
import { useParams, useNavigate } from "react-router";
import { useQuery } from "@tanstack/react-query";
import MarkdownComponent from "../components/Markdown.tsx";
import { fetchPostData } from "../utils/fetch_data.ts";

export default function Post() {
    const navigate = useNavigate();
    const {id} = useParams();
    const url = `/posts/${id}.md`;
    const {data, isLoading, isError} = useQuery({ queryKey: ['posts'], queryFn: () =>  fetchPostData(url)})

    if(isLoading) return <div>Cargando...</div>

    if(isError) return navigate("/404", { replace: true });

    return (
        <div>
            {data ?  <MarkdownComponent content={data} /> : null}
        </div>
    )
}
