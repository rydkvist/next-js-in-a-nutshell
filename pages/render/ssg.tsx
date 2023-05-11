import Heading from '@/components/Heading';
import ButtonLink from '@/components/links/ButtonLink';
import Text from '@/components/Text';
import Time from '@/components/Time';
import { getStockholmTime } from '@/lib/getStockholmTime';
import { GetStaticProps, NextPage } from 'next';

type PrefetchedProps = {
    time: string;
}

const StaticSiteGenerationExample: NextPage<PrefetchedProps> = ({ time }) => (
    <div className='flex flex-col justify-center items-center'>
        <Heading>
            SSG – Static Site Generation
        </Heading>

        <Text>
            Hämtar data på bygget
            <br />
            Den här sidan blev pre-renderad på bygg tid.
            <br />
            Det betyder att den bara kommer att om-renderas när vi bygger om sidan (OBS inte laddar om sidan)
            <br />
            alltså efter ett nytt bygge med <code className='bg-slate-600 text-sm p-1 rounded-sm'>npm run build</code>
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
    }
}

export default StaticSiteGenerationExample;