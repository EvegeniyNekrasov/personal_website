import { PostList } from "../types/posts";

const post_1 = `
# This is my post 1

## Some subtitle

more text to show
`;

const post_2 = `
# This is mmy post_2

## Some subtitle 2

content of post 2
`;



export const posts_list: PostList = [
    { id: 1, title: "First post", content: post_1 },
    { id: 2, title: "Second post", content: post_2 }
]
