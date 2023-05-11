import Heading from '@/components/Heading';
import ButtonLink from '@/components/links/ButtonLink';
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
            ISR – Incremental Static Regeneration (20 sek)
        </Heading>

        <Text>
            Den här sidan är samma som förra ISR, bara att vi bygger om den var 20:e sekund.
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
        revalidate: 20 // Revalidate sidan var 5:e sekund
    }
}

export default IncrementalStaticRegenerationExample;