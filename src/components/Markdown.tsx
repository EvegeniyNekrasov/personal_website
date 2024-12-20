import React from "react";
import Markdown from "react-markdown";

import "./markdown.css";

interface MarkdownProps {
    content: string;
}

const MarkdownComponent = ({content}: MarkdownProps) => {
   return (
        <div className="markdown-wrapper">
            <Markdown>{content}</Markdown> 
        </div>
    );
};

export default MarkdownComponent;
