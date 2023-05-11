import Heading from '@/components/Heading';
import ButtonLink from '@/components/links/ButtonLink';
import { getStockholmTime } from '@/lib/getStockholmTime';
import ClientRenderedTime from './ClientRenderedTime';
import { Suspense } from 'react';

const ReactServerComponent = async () => {
    const timePromise = getStockholmTime(2000);
    const timePromise2 = getStockholmTime(4000);
    const timePromise3 = getStockholmTime(8000);

    return (
        <div className='flex flex-col justify-center items-center'>
            <Heading>
                React Server Components i Next.js
            </Heading>

            <Suspense fallback={<div>Laddar tid...</div>}>
                {/* @ts-expect-error Server Component */}
                <ClientRenderedTime promise={timePromise} />
            </Suspense>

            <Suspense fallback={<div>Laddar tid...</div>}>
                {/* @ts-expect-error Server Component */}
                <ClientRenderedTime promise={timePromise2} />
            </Suspense>

            <Suspense fallback={<div>Laddar tid...</div>}>
                {/* @ts-expect-error Server Component */}
                <ClientRenderedTime promise={timePromise3} />
            </Suspense>

            <ButtonLink href="/">
                Tillbaka till Startsidan
            </ButtonLink>
        </div>
    )
}

export default ReactServerComponent;
