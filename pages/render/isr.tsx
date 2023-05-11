import ButtonLink from '@/components/links/ButtonLink';
import Heading from '@/components/Heading';
import Text from '@/components/Text';
import Time from '@/components/Time';
import { getStockholmTime } from '@/lib/getStockholmTime';
import { GetStaticProps, NextPage } from 'next';

type PrefetchedProps = {
    time: string;
}

const IncrementalStaticRegenerationExample: NextPage<PrefetchedProps> = ({ time }) => (
    <div className='flex flex-col justify-center items-center'>
        <Heading>
            ISR – Incremental Static Regeneration
        </Heading>

        <Text>
            Den här sidan blev renderad på bygg tid, men byggs om var 5:e sekund (revalidate: 5).
            <br />
            Det betyder att den om-renderas var 5:e sekund efter att en användare har besökt sidan.
        </Text>

        <Time time={time} />
        <ButtonLink href="/">
            Tillbaka till Startsidan
        </ButtonLink>
    </div>
)

export const getStaticProps: GetStaticProps<PrefetchedProps> = async () => {
    const response = await getStockholmTime();
    const time = response.dateTime;

    return {
        props: {
            time
        },
        revalidate: 5 // Revalidate sidan var 5:e sekund
    }
}

export default IncrementalStaticRegenerationExample;