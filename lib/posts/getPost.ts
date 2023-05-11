import { Post, getPosts } from "./getPosts";

export const getPost = async (id: string): Promise<Post> => {
    const posts = await getPosts();
    const post = posts.find((post) => post.id.toString() === id);

    if (!post) {
        throw new Error("Post not found");
    }

    return post;
};