
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import Heading from '@/components/Heading';
import { Post, getPosts } from '@/lib/posts/getPosts';
import { getPost } from '@/lib/posts/getPost';
import ButtonLink from '@/components/links/ButtonLink';

type PostPageProps = {
    post: Post;
}

const PostPage: React.FC<PostPageProps> = ({ post }) => {
    const router = useRouter();

    if (router.isFallback) {
        return <Heading>Loading...</Heading>
    }

    return (
        <div className='flex flex-col justify-center items-center w-1/2'>
            <Heading>
                Title: {post.title}
            </Heading>
            <p className='text-center'>
                {post.body}
            </p>

            <ButtonLink href='/blog'>
                Tillbaka till bloggen
            </ButtonLink>
        </div>
    )
}

// Den här funktionen gör så att alla posts som stämmer med pathen i "paths" byggs på förhand också.
export const getStaticPaths: GetStaticPaths = async () => {
    const posts = await getPosts();

    return {
        paths: posts.map(post => ({
            params: {
                postId: post.id.toString()
            }
        })),
        fallback: true
    }
}

export const getStaticProps: GetStaticProps<PostPageProps, { postId: string }> = async ({ params }) => {
    if (!params) {
        return {
            notFound: true
        }
    }

    const post = await getPost(params.postId)

    return {
        props: {
            post
        },
        revalidate: 60
    }
}

export default PostPage;