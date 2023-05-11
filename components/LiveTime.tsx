import { useEffect, useState } from "react";
import Time from "./Time";

const prefixTime = (time: number) => {
    return time < 10 ? `0${time}` : time;
};

const formatTime = (time: Date) => {
    const hours = prefixTime(time.getHours());
    const minutes = prefixTime(time.getMinutes());
    const seconds = prefixTime(time.getSeconds())

    return `${hours}:${minutes}:${seconds}`;
};

const LiveTime = () => {
    const [time, setTime] = useState('');

    useEffect(() => {
        const timer = setInterval(() => {
            const date = new Date();
            const formattedTime = formatTime(date);
            setTime(formattedTime);
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="fixed bottom-0 right-0 m-4">
            <Time time={time} isSmall />
        </div>
    );
};

export default LiveTime;