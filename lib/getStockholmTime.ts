type GetStockholmTimeResponse = {
    dateTime: string;
}

const MOCK_DELAY_TIME = 3000;

const formatTimeFromResponse = (data: GetStockholmTimeResponse): string => {
    const time = data.dateTime.split('T')[1];
    return time.split('.')[0];
}

export const getStockholmTime = async (delay?: number): Promise<GetStockholmTimeResponse> => {
    return new Promise<GetStockholmTimeResponse>((resolve, reject) => {
        setTimeout(async () => {
            try {
                const res = await fetch('https://timeapi.io/api/Time/current/zone?timeZone=Europe/Stockholm', fetchSettings);

                if (!res.ok) {
                    throw new Error(`Error: ${res.status} - Could not fetch Stockholm Time`);
                }

                const data = await res.json();
                data.dateTime = formatTimeFromResponse(data);
                resolve(data as GetStockholmTimeResponse);
            } catch (error) {
                reject(error);
            }
        }, delay || MOCK_DELAY_TIME);
    });
};


const fetchSettings: RequestInit = {
    // cache: 'no-cache' // (default) SSG
    // next: { revalidate: 10 } // ISR
    // cache: 'no-store', // Server Side Rendering
}