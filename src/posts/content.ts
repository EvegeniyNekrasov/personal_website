/* 
 * Return a post metadata by post id
 * **/
export function getPostByPostId(id: number) {
    const findedBlog = content_data.filter(blog => blog.id === id);
    return findedBlog[0];
}

/* 
 * The list of all the available posts
 * **/
export const content_data = [
    {
        id: 1,
        title: "First post",
        date: "24/12/2024",
        tag: "js",
        description: "Some description post 1",
        autor: "Evgeniy A. Nekrasov"
    },
    {
        id: 2,
        title: "Seccond post",
        date: "25/12/2024",
        tag: "ts",
        description: "Some other data....",
        autor: "Evgeniy A. Nekrasov"
    }
];


