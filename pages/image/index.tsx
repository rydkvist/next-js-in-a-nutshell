import Heading from '@/components/Heading';
import ButtonLink from '@/components/links/ButtonLink';
import Image from 'next/image';
import { NextPage } from 'next';

const ImagePage: NextPage = () => (
    <div className='flex flex-col items-center'>
        <Heading>Bild optimering med Next.js</Heading>
        <div className="min-h-screen mb-48">
            <p>Space</p>
        </div>
        <div className="min-h-screen mb-48">
            <p>Space</p>
        </div>
        <div className="min-h-screen mb-48">
            <p>Space</p>
        </div>
        <div className="min-h-screen mb-48">
            <p>Space</p>
        </div>

        <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            loading="lazy"
            onLoad={(e) => console.log(e.target)}
        />

        <ButtonLink href='/'>
            Tillbaka till startsidan
        </ButtonLink>
    </div>
)

export default ImagePage;