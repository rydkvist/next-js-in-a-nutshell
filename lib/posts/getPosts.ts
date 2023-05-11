export type Post = {
    id: number;
    title: string;
    body: string;
}

export const getPosts = async (): Promise<Post[]> => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await res.json();
    return posts;
}
