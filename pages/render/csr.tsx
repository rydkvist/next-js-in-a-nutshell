import Heading from '@/components/Heading';
import ButtonLink from '@/components/links/ButtonLink';
import Text from '@/components/Text';
import Time from '@/components/Time';
import { NextPage } from 'next';
import { useEffect, useState } from 'react';

const ClientSideRenderingExample: NextPage = () => {
    const [time, setTime] = useState<string>();

    useEffect(() => {
        fetch('/api/stockholm-time')
            .then((res) => res.json())
            .then((data) => {
                setTime(data.dateTime);
            })
            .catch((error) => console.error(error));
    }, [])

    return (
        <div className='flex flex-col justify-center items-center'>
            <Heading>
                CSR – Client Side Rendering
            </Heading>

            <Text>
                Hämtar data på klienten
                <br />
                Det betyder att den försöker hämta data när sidan har laddats in i webbläsaren.
                Den här sidan försöker pre-rendera allt på bygget som inte behöver extern data
                <br />
                sen hämtar och renderar den resterande dynamiskt data genom att browsern laddar in JavaScript till klienten..
            </Text>

            <Time time={time} />
            <ButtonLink href="/">
                Tillbaka till Startsidan
            </ButtonLink>
        </div>
    )
}

export default ClientSideRenderingExample;