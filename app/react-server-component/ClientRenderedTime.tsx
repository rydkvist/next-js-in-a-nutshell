'use client'
import Time from '@/components/Time';

const ClientRenderedTime = async ({ promise }: any) => {
    const time = await promise;

    return (
        <Time time={time.dateTime} />
    )
}

export default ClientRenderedTime;