import React, { useState } from 'react'
import { getAllPosts, getPostByPostId } from './utils/get_makdown_content.ts';
import MarkdownComponent from './components/Markdown.tsx'
import './App.css'

function App() {
    const posts = getAllPosts();
    const [selectedPost, setSelectedPost] = useState<number | null>(null);
    const [someData, setSomeData] = useState<string>("");
    
  return (
    <div>
            <span>Some text</span>
        <ul>
            {posts.map((item) => (
                <li key={item.id}>
                <button type='button' onClick={() => setSelectedPost(item.id)}>
                    {item.title}
                </button>
                
                </li>
            ))}
        </ul>
        {selectedPost ? (
            <MarkdownComponent content={getPostByPostId(selectedPost).content} />
        ) : null}
    </div>
  )
}

export default App
