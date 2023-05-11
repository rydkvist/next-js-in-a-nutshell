import Heading from '@/components/Heading';
import ButtonLink from '@/components/links/ButtonLink';
import StyledLink from '@/components/links/StyledLink';
import { getPosts } from '@/lib/posts/getPosts';
import { GetStaticProps, NextPage } from 'next';

type BlogPageProps = {
    amountOfPosts: number;
}

const Blog: NextPage<BlogPageProps> = ({ amountOfPosts }) => (
    <div className='flex flex-col items-center'>
        <Heading>Välkommen till <span className="font-bold text-yellow-200">bloggen</span>!</Heading>

        <div className='flex flex-col items-center'>
            {Array.from({ length: amountOfPosts }).fill(amountOfPosts).map((_, index) => (
                <StyledLink key={index} href={`/blog/posts/${index + 1}`}>
                    Bloggpost {index + 1}
                </StyledLink>
            ))}
        </div>

        <ButtonLink href='/'>
            Tillbaka till startsidan
        </ButtonLink>
    </div>
)

export const getStaticProps: GetStaticProps<BlogPageProps> = async () => {
    const post = await getPosts();
    const amountOfPosts = post.length;

    return {
        props: {
            amountOfPosts
        },
        revalidate: 86400
    }
}

export default Blog;