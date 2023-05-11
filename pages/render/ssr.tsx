import Heading from '@/components/Heading';
import ButtonLink from '@/components/links/ButtonLink';
import Text from '@/components/Text';
import Time from '@/components/Time';
import { getStockholmTime } from '@/lib/getStockholmTime';
import { GetServerSideProps, NextPage } from 'next';

type PrefetchedProps = {
    time: string;
}

const ServerSideRenderingExample: NextPage<PrefetchedProps> = ({ time }) => (
    <div className='flex flex-col justify-center items-center'>
        <Heading>
            SSR – Server Side Rendering
        </Heading>

        <Text>
            Hämtar data på varje request.
            <br />
            Den här sidan blev pre-renderad efter att servern fick ett request.
            <br />
            Det betyder att den bara kommer att om-renderas när vi laddar om sidan
        </Text>

        <Time time={time} />
        <ButtonLink href="/">
            Tillbaka till Startsidan
        </ButtonLink>
    </div>
)

export const getServerSideProps: GetServerSideProps<PrefetchedProps> = async () => {
    const response = await getStockholmTime();
    const time = response.dateTime;

    return {
        props: {
            time
        },
    }
}

export default ServerSideRenderingExample;