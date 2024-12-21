
export type Post = {
    id: number,
    date: string,
    description: string,
    autor: string,
    tag: string,
    title: string
}

export type PostsObject = {
    content: Post[];
}
