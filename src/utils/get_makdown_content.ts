import { posts_list } from "../posts/posts";
import { Post, PostList } from "../types/posts.ts";

export function getAllPosts(): PostList {
    return posts_list;
}

export function getPostByPostId(id: number): Post {
    const findedPost = posts_list.filter((item: Post) => item.id === id);
    return findedPost[0];
}
